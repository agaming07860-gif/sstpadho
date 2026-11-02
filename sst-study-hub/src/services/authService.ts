import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import {
  generateSalt,
  hashPassword,
  verifyPassword,
  hashSecurityAnswer,
} from '../lib/crypto';
import { UserAccount, PublicUserProfile } from '../types/auth';

const SESSION_KEY = 'sstpadho_auth_session';
const LOCAL_USERS_MIRROR_KEY = 'sstpadho_users_mirror';

// Helper to normalize usernames: lowercase, trimmed, no leading @
export function normalizeUsername(input: string): string {
  return input.trim().toLowerCase().replace(/^@+/, '');
}

// Local cache helpers for fallback and offline speed
function getLocalUsersMirror(): Record<string, UserAccount> {
  try {
    const raw = localStorage.getItem(LOCAL_USERS_MIRROR_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveLocalUserMirror(account: UserAccount) {
  try {
    const mirror = getLocalUsersMirror();
    mirror[account.username] = account;
    localStorage.setItem(LOCAL_USERS_MIRROR_KEY, JSON.stringify(mirror));
  } catch (err) {
    console.error('Failed to update local users mirror:', err);
  }
}

// Check if username is available in Firestore & local mirror
export async function isUsernameAvailable(rawUsername: string): Promise<boolean> {
  const username = normalizeUsername(rawUsername);
  if (!username || username.length < 3) return false;

  // 1. Check local mirror first
  const localMirror = getLocalUsersMirror();
  if (localMirror[username]) {
    return false;
  }

  // 2. Check Firestore /usernames/{username}
  try {
    const docRef = doc(db, 'usernames', username);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return false;
    }
  } catch (err) {
    console.warn('Firestore username check warning, falling back to query/mirror:', err);
  }

  return true;
}

// Find user account by username from Firestore or local mirror
async function findUserAccountByUsername(rawUsername: string): Promise<UserAccount | null> {
  const username = normalizeUsername(rawUsername);
  if (!username) return null;

  // 1. Try Firestore direct lookup by username doc index
  try {
    const indexRef = doc(db, 'usernames', username);
    const indexSnap = await getDoc(indexRef);

    if (indexSnap.exists()) {
      const { uid } = indexSnap.data() as { uid: string };
      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const account = userSnap.data() as UserAccount;
        saveLocalUserMirror(account);
        return account;
      }
    }
  } catch (err) {
    console.warn('Firestore index lookup failed, trying collection query:', err);
  }

  // 2. Try Firestore collection query where username == username
  try {
    const usersCol = collection(db, 'users');
    const q = query(usersCol, where('username', '==', username));
    const snap = await getDocs(q);
    if (!snap.empty) {
      const account = snap.docs[0].data() as UserAccount;
      saveLocalUserMirror(account);
      return account;
    }
  } catch (err) {
    console.warn('Firestore collection query failed, checking local mirror:', err);
  }

  // 3. Fallback to local mirror
  const localMirror = getLocalUsersMirror();
  return localMirror[username] || null;
}

// Create Account implementation
export async function createAccount(data: {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
  securityQuestion: string;
  securityAnswer: string;
}): Promise<PublicUserProfile> {
  const fullName = data.fullName.trim();
  const rawUsername = data.username.trim();
  const username = normalizeUsername(rawUsername);
  const password = data.password;
  const confirmPassword = data.confirmPassword;
  const securityQuestion = data.securityQuestion.trim();
  const securityAnswer = data.securityAnswer.trim();

  // Validations
  if (!fullName) {
    throw new Error('Please enter your full name.');
  }

  if (!username || username.length < 3) {
    throw new Error('Username must be at least 3 characters long.');
  }

  const validUsernameRegex = /^[a-z0-9_.-]+$/;
  if (!validUsernameRegex.test(username)) {
    throw new Error('Username can only contain letters, numbers, underscores, and dots.');
  }

  if (!password || password.length < 6) {
    throw new Error('Password must be at least 6 characters long.');
  }

  if (password !== confirmPassword) {
    throw new Error('Passwords do not match. Please re-enter confirm password.');
  }

  if (!securityQuestion) {
    throw new Error('Please select a security question for password recovery.');
  }

  if (!securityAnswer || securityAnswer.length < 2) {
    throw new Error('Please provide an answer to your security question.');
  }

  // Check unique username
  const available = await isUsernameAvailable(username);
  if (!available) {
    throw new Error(`Username "@${username}" is already taken. Please choose another username.`);
  }

  // Cryptographic preparation
  const uid = 'user_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8);
  const passwordSalt = generateSalt(16);
  const passwordHash = await hashPassword(password, passwordSalt);
  const securityAnswerHash = await hashSecurityAnswer(securityAnswer, passwordSalt);
  const now = new Date().toISOString();

  const newAccount: UserAccount = {
    uid,
    fullName,
    username,
    displayName: rawUsername,
    passwordHash,
    passwordSalt,
    securityQuestion,
    securityAnswerHash,
    createdAt: now,
    lastLoginAt: now,
  };

  // Save to local mirror immediately
  saveLocalUserMirror(newAccount);

  // Save to Firestore
  try {
    const userDocRef = doc(db, 'users', uid);
    await setDoc(userDocRef, newAccount);

    const usernameDocRef = doc(db, 'usernames', username);
    await setDoc(usernameDocRef, {
      uid,
      username,
      createdAt: now,
    });
  } catch (err) {
    console.error('Firestore save failed, but account registered in offline mirror:', err);
  }

  const publicProfile: PublicUserProfile = {
    uid,
    fullName,
    username,
    createdAt: now,
  };

  saveSession(publicProfile);
  return publicProfile;
}

// Login implementation
export async function login(rawUsername: string, plainPassword: string): Promise<PublicUserProfile> {
  const username = normalizeUsername(rawUsername);
  if (!username) {
    throw new Error('Please enter your username.');
  }
  if (!plainPassword) {
    throw new Error('Please enter your password.');
  }

  const account = await findUserAccountByUsername(username);
  if (!account) {
    throw new Error('No account found with username "@' + username + '". Please check or create an account.');
  }

  // Verify password using key-stretched salted SHA-256
  const isValid = await verifyPassword(plainPassword, account.passwordSalt, account.passwordHash);
  if (!isValid) {
    throw new Error('Incorrect password. Please try again or use "Forgot Password".');
  }

  // Update last login timestamp
  const now = new Date().toISOString();
  account.lastLoginAt = now;
  saveLocalUserMirror(account);

  try {
    const userDocRef = doc(db, 'users', account.uid);
    await updateDoc(userDocRef, { lastLoginAt: now });
  } catch (err) {
    console.warn('Could not update lastLoginAt in Firestore:', err);
  }

  const publicProfile: PublicUserProfile = {
    uid: account.uid,
    fullName: account.fullName,
    username: account.username,
    createdAt: account.createdAt,
  };

  saveSession(publicProfile);
  return publicProfile;
}

// Fetch security question for forgot password flow
export async function getSecurityQuestionForUsername(rawUsername: string): Promise<{ username: string; securityQuestion: string }> {
  const username = normalizeUsername(rawUsername);
  if (!username) {
    throw new Error('Please enter your username.');
  }

  const account = await findUserAccountByUsername(username);
  if (!account) {
    throw new Error('No account found with username "@' + username + '".');
  }

  return {
    username: account.username,
    securityQuestion: account.securityQuestion || 'What is your security recovery answer?',
  };
}

// Reset password using security question answer
export async function resetPasswordWithSecurityAnswer(
  rawUsername: string,
  securityAnswer: string,
  newPassword: string,
  confirmNewPassword: string
): Promise<PublicUserProfile> {
  const username = normalizeUsername(rawUsername);
  if (!username) {
    throw new Error('Please enter your username.');
  }

  if (!securityAnswer || securityAnswer.trim().length === 0) {
    throw new Error('Please answer your security question.');
  }

  if (!newPassword || newPassword.length < 6) {
    throw new Error('New password must be at least 6 characters long.');
  }

  if (newPassword !== confirmNewPassword) {
    throw new Error('New passwords do not match.');
  }

  const account = await findUserAccountByUsername(username);
  if (!account) {
    throw new Error('Account not found.');
  }

  // Verify security answer hash
  const computedAnswerHash = await hashSecurityAnswer(securityAnswer, account.passwordSalt);
  if (computedAnswerHash !== account.securityAnswerHash) {
    throw new Error('Security question answer does not match our records. Please try again.');
  }

  // Generate fresh salt and hash for the new password
  const newSalt = generateSalt(16);
  const newPasswordHash = await hashPassword(newPassword, newSalt);
  // Re-hash security answer with new salt to maintain recovery
  const newSecurityAnswerHash = await hashSecurityAnswer(securityAnswer, newSalt);

  account.passwordHash = newPasswordHash;
  account.passwordSalt = newSalt;
  account.securityAnswerHash = newSecurityAnswerHash;
  account.lastLoginAt = new Date().toISOString();

  saveLocalUserMirror(account);

  try {
    const userDocRef = doc(db, 'users', account.uid);
    await updateDoc(userDocRef, {
      passwordHash: newPasswordHash,
      passwordSalt: newSalt,
      securityAnswerHash: newSecurityAnswerHash,
      lastLoginAt: account.lastLoginAt,
    });
  } catch (err) {
    console.error('Firestore password update failed, updated in offline mirror:', err);
  }

  const publicProfile: PublicUserProfile = {
    uid: account.uid,
    fullName: account.fullName,
    username: account.username,
    createdAt: account.createdAt,
  };

  saveSession(publicProfile);
  return publicProfile;
}

// Session persistence
export function saveSession(user: PublicUserProfile) {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  } catch (err) {
    console.error('Failed to save session:', err);
  }
}

export function getSavedSession(): PublicUserProfile | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearSession() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (err) {
    console.error('Failed to clear session:', err);
  }
}
