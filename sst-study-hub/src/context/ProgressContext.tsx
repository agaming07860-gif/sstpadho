import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { ClassLevel, UserProgress, UserProfile } from '../types/sst';
import {
  db,
  auth,
  googleProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
  handleFirestoreError,
  OperationType,
} from '../lib/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

interface ProgressContextType {
  currentUser: UserProfile | null;
  firebaseUser: User | null;
  savedAccounts: UserProfile[];
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  createAccount: (data: {
    username: string;
    displayName: string;
    classLevel: ClassLevel;
    avatarIcon?: string;
    avatarColor?: string;
  }) => Promise<{ success: boolean; message?: string }>;
  loginWithUsername: (username: string) => Promise<{ success: boolean; message?: string }>;
  loginWithGoogle: () => Promise<{ success: boolean; message?: string }>;
  logout: () => Promise<void>;
  updateUserProfile: (data: Partial<UserProfile>) => Promise<void>;
  progress: UserProgress;
  activeClass: ClassLevel;
  setActiveClass: (c: ClassLevel) => void;
  toggleChapterCompleted: (chapterId: string) => void;
  isChapterCompleted: (chapterId: string) => boolean;
  saveQuizScore: (chapterId: string, score: number, total: number) => void;
  toggleBookmarkChapter: (chapterId: string) => void;
  isChapterBookmarked: (chapterId: string) => boolean;
  toggleBookmarkQuestion: (questionId: string) => void;
  isQuestionBookmarked: (questionId: string) => boolean;
  resetProgress: () => void;
}

const STORAGE_KEY = 'sst_study_hub_progress_v1';
const CLASS_STORAGE_KEY = 'sst_study_hub_active_class_v1';
const USER_SESSION_KEY = 'sst_active_user_session_v1';
const SAVED_ACCOUNTS_KEY = 'sst_saved_user_accounts_v1';

const defaultProgress: UserProgress = {
  completedChapterIds: ['c10-hist-ch1'], // sample 1 completed to show dashboard richness immediately
  quizScores: {
    'c10-hist-ch1': { score: 4, total: 5, date: new Date().toISOString() },
  },
  bookmarkedChapterIds: ['c10-hist-ch2'],
  bookmarkedQuestionIds: ['c10-h1-q4'],
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Saved accounts list
  const [savedAccounts, setSavedAccounts] = useState<UserProfile[]>(() => {
    try {
      const saved = localStorage.getItem(SAVED_ACCOUNTS_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Active logged-in user profile
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem(USER_SESSION_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [activeClass, setActiveClassState] = useState<ClassLevel>(() => {
    if (currentUser?.classLevel) {
      return currentUser.classLevel;
    }
    try {
      const saved = localStorage.getItem(CLASS_STORAGE_KEY);
      if (saved) {
        const parsed = parseInt(saved, 10);
        if ([6, 7, 8, 9, 10, 11, 12].includes(parsed)) {
          return parsed as ClassLevel;
        }
      }
      return 10;
    } catch {
      return 10;
    }
  });

  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : defaultProgress;
    } catch {
      return defaultProgress;
    }
  });

  // Sync user session to localStorage
  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem(USER_SESSION_KEY, JSON.stringify(currentUser));
      } else {
        localStorage.removeItem(USER_SESSION_KEY);
      }
    } catch (e) {
      console.error('Failed to persist user session', e);
    }
  }, [currentUser]);

  // Sync saved accounts to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(SAVED_ACCOUNTS_KEY, JSON.stringify(savedAccounts));
    } catch (e) {
      console.error('Failed to persist saved accounts', e);
    }
  }, [savedAccounts]);

  // Sync progress to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to persist progress', e);
    }
  }, [progress]);

  // Listen to Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setFirebaseUser(user);
      if (user) {
        // Fetch or create user profile from Firestore
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(userDocRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            const profile: UserProfile = {
              id: user.uid,
              username: data.username || user.email?.split('@')[0] || 'student',
              displayName: data.displayName || user.displayName || 'Student',
              email: user.email || '',
              classLevel: (data.classLevel as ClassLevel) || activeClass,
              avatarIcon: data.avatarIcon || '🎓',
              avatarColor: data.avatarColor || '#3b82f6',
              createdAt: data.createdAt || new Date().toISOString(),
            };
            setCurrentUser(profile);
            setActiveClassState(profile.classLevel);

            // Fetch progress
            const progressRef = doc(db, 'users', user.uid, 'progress', 'data');
            const progressSnap = await getDoc(progressRef);
            if (progressSnap.exists()) {
              const pData = progressSnap.data() as UserProgress;
              setProgress(pData);
            }
          } else {
            // First time Google Sign In - prompt or generate clean username
            const rawName = user.displayName?.toLowerCase().replace(/[^a-z0-9_]/g, '') || user.email?.split('@')[0].replace(/[^a-z0-9_]/g, '') || 'scholar';
            const generatedUsername = `${rawName.slice(0, 15)}_${Math.floor(100 + Math.random() * 900)}`;

            const newProfile: UserProfile = {
              id: user.uid,
              username: generatedUsername,
              displayName: user.displayName || 'Student',
              email: user.email || '',
              classLevel: activeClass,
              avatarIcon: '🎓',
              avatarColor: '#3b82f6',
              createdAt: new Date().toISOString(),
            };

            await setDoc(userDocRef, newProfile);
            setCurrentUser(newProfile);

            // Save initial progress
            const progressRef = doc(db, 'users', user.uid, 'progress', 'data');
            await setDoc(progressRef, {
              userId: user.uid,
              completedChapterIds: progress.completedChapterIds,
              bookmarkedChapterIds: progress.bookmarkedChapterIds,
              quizScores: progress.quizScores,
              updatedAt: new Date().toISOString(),
            });
          }
        } catch (err) {
          console.warn('Firestore profile sync error (offline or rules):', err);
        }
      }
    });

    return () => unsubscribe();
  }, [activeClass]);

  // Sync progress to cloud if authenticated
  const syncProgressToCloud = useCallback(async (newProgress: UserProgress) => {
    if (firebaseUser) {
      try {
        const progressRef = doc(db, 'users', firebaseUser.uid, 'progress', 'data');
        await setDoc(
          progressRef,
          {
            userId: firebaseUser.uid,
            completedChapterIds: newProgress.completedChapterIds,
            bookmarkedChapterIds: newProgress.bookmarkedChapterIds,
            quizScores: newProgress.quizScores,
            updatedAt: new Date().toISOString(),
          },
          { merge: true }
        );
      } catch (err) {
        console.warn('Could not sync progress to cloud', err);
      }
    }
  }, [firebaseUser]);

  const setActiveClass = (cls: ClassLevel) => {
    setActiveClassState(cls);
    try {
      localStorage.setItem(CLASS_STORAGE_KEY, cls.toString());
      if (currentUser) {
        const updated = { ...currentUser, classLevel: cls };
        setCurrentUser(updated);
        setSavedAccounts((prev) =>
          prev.map((acc) => (acc.username.toLowerCase() === currentUser.username.toLowerCase() ? updated : acc))
        );
        if (firebaseUser) {
          const userDocRef = doc(db, 'users', firebaseUser.uid);
          updateDoc(userDocRef, { classLevel: cls }).catch(() => {});
        }
      }
    } catch (e) {
      console.error('Failed to persist active class', e);
    }
  };

  const createAccount = async ({
    username,
    displayName,
    classLevel,
    avatarIcon = '🎓',
    avatarColor = '#3b82f6',
  }: {
    username: string;
    displayName: string;
    classLevel: ClassLevel;
    avatarIcon?: string;
    avatarColor?: string;
  }): Promise<{ success: boolean; message?: string }> => {
    const cleanUsername = username.trim().toLowerCase().replace(/[^a-z0-9_]/g, '');

    if (!cleanUsername || cleanUsername.length < 3) {
      return { success: false, message: 'Username must be at least 3 characters (letters, numbers, underscores).' };
    }

    if (cleanUsername.length > 30) {
      return { success: false, message: 'Username cannot exceed 30 characters.' };
    }

    // Check if account already exists in saved accounts
    const existing = savedAccounts.find((acc) => acc.username.toLowerCase() === cleanUsername);
    if (existing) {
      setCurrentUser(existing);
      setActiveClassState(existing.classLevel);
      return { success: true, message: `Welcome back @${existing.username}!` };
    }

    const newProfile: UserProfile = {
      id: firebaseUser ? firebaseUser.uid : `local-${Date.now()}`,
      username: cleanUsername,
      displayName: displayName.trim() || cleanUsername,
      classLevel,
      avatarIcon: avatarIcon || '🎓',
      avatarColor: avatarColor || '#3b82f6',
      createdAt: new Date().toISOString(),
    };

    // If connected to Firebase user, store in Firestore
    if (firebaseUser) {
      try {
        const userDocRef = doc(db, 'users', firebaseUser.uid);
        await setDoc(userDocRef, newProfile);
      } catch (err) {
        console.warn('Firestore setDoc notice:', err);
      }
    }

    setSavedAccounts((prev) => [newProfile, ...prev.filter((a) => a.username !== cleanUsername)]);
    setCurrentUser(newProfile);
    setActiveClassState(classLevel);
    setIsAuthModalOpen(false);
    return { success: true };
  };

  const loginWithUsername = async (username: string): Promise<{ success: boolean; message?: string }> => {
    const cleanUsername = username.trim().toLowerCase().replace(/[^a-z0-9_]/g, '');

    if (!cleanUsername) {
      return { success: false, message: 'Please enter a valid username.' };
    }

    const found = savedAccounts.find((acc) => acc.username.toLowerCase() === cleanUsername);
    if (found) {
      setCurrentUser(found);
      setActiveClassState(found.classLevel);
      setIsAuthModalOpen(false);
      return { success: true };
    }

    // Auto-create/initialize account if user entered a new username on login screen
    const newProfile: UserProfile = {
      id: `user-${Date.now()}`,
      username: cleanUsername,
      displayName: cleanUsername.charAt(0).toUpperCase() + cleanUsername.slice(1),
      classLevel: activeClass,
      avatarIcon: '🎓',
      avatarColor: '#3b82f6',
      createdAt: new Date().toISOString(),
    };

    setSavedAccounts((prev) => [newProfile, ...prev]);
    setCurrentUser(newProfile);
    setActiveClassState(newProfile.classLevel);
    setIsAuthModalOpen(false);
    return { success: true };
  };

  const loginWithGoogle = async (): Promise<{ success: boolean; message?: string }> => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsAuthModalOpen(false);
      return { success: true };
    } catch (err: unknown) {
      console.error('Google Sign-in failed', err);
      const msg = err instanceof Error ? err.message : 'Google Sign-in failed.';
      return { success: false, message: msg };
    }
  };

  const logout = async () => {
    try {
      if (firebaseUser) {
        await signOut(auth);
      }
    } catch (e) {
      console.warn('Sign out notice', e);
    }
    setCurrentUser(null);
    setFirebaseUser(null);
  };

  const updateUserProfile = async (data: Partial<UserProfile>) => {
    if (!currentUser) return;
    const updated = { ...currentUser, ...data };
    setCurrentUser(updated);
    setSavedAccounts((prev) =>
      prev.map((acc) => (acc.username.toLowerCase() === currentUser.username.toLowerCase() ? updated : acc))
    );

    if (firebaseUser) {
      try {
        const userDocRef = doc(db, 'users', firebaseUser.uid);
        await updateDoc(userDocRef, data as Record<string, unknown>);
      } catch (err) {
        console.warn('Update Firestore profile notice:', err);
      }
    }
  };

  const toggleChapterCompleted = (chapterId: string) => {
    setProgress((prev) => {
      const isCompleted = prev.completedChapterIds.includes(chapterId);
      const newCompleted = isCompleted
        ? prev.completedChapterIds.filter((id) => id !== chapterId)
        : [...prev.completedChapterIds, chapterId];
      const updated = { ...prev, completedChapterIds: newCompleted };
      syncProgressToCloud(updated);
      return updated;
    });
  };

  const isChapterCompleted = (chapterId: string) => {
    return progress.completedChapterIds.includes(chapterId);
  };

  const saveQuizScore = (chapterId: string, score: number, total: number) => {
    setProgress((prev) => {
      const updated = {
        ...prev,
        quizScores: {
          ...prev.quizScores,
          [chapterId]: { score, total, date: new Date().toISOString() },
        },
      };
      syncProgressToCloud(updated);
      return updated;
    });
  };

  const toggleBookmarkChapter = (chapterId: string) => {
    setProgress((prev) => {
      const isBookmarked = prev.bookmarkedChapterIds.includes(chapterId);
      const updated = {
        ...prev,
        bookmarkedChapterIds: isBookmarked
          ? prev.bookmarkedChapterIds.filter((id) => id !== chapterId)
          : [...prev.bookmarkedChapterIds, chapterId],
      };
      syncProgressToCloud(updated);
      return updated;
    });
  };

  const isChapterBookmarked = (chapterId: string) => {
    return progress.bookmarkedChapterIds.includes(chapterId);
  };

  const toggleBookmarkQuestion = (questionId: string) => {
    setProgress((prev) => {
      const isBookmarked = prev.bookmarkedQuestionIds.includes(questionId);
      const updated = {
        ...prev,
        bookmarkedQuestionIds: isBookmarked
          ? prev.bookmarkedQuestionIds.filter((id) => id !== questionId)
          : [...prev.bookmarkedQuestionIds, questionId],
      };
      syncProgressToCloud(updated);
      return updated;
    });
  };

  const isQuestionBookmarked = (questionId: string) => {
    return progress.bookmarkedQuestionIds.includes(questionId);
  };

  const resetProgress = () => {
    const fresh = {
      completedChapterIds: [],
      quizScores: {},
      bookmarkedChapterIds: [],
      bookmarkedQuestionIds: [],
    };
    setProgress(fresh);
    syncProgressToCloud(fresh);
  };

  return (
    <ProgressContext.Provider
      value={{
        currentUser,
        firebaseUser,
        savedAccounts,
        isAuthModalOpen,
        setIsAuthModalOpen,
        createAccount,
        loginWithUsername,
        loginWithGoogle,
        logout,
        updateUserProfile,
        progress,
        activeClass,
        setActiveClass,
        toggleChapterCompleted,
        isChapterCompleted,
        saveQuizScore,
        toggleBookmarkChapter,
        isChapterBookmarked,
        toggleBookmarkQuestion,
        isQuestionBookmarked,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
