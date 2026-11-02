export interface UserAccount {
  uid: string;
  fullName: string;
  username: string; // normalized lowercase
  displayName: string;
  passwordHash: string;
  passwordSalt: string;
  securityQuestion: string;
  securityAnswerHash: string;
  createdAt: string;
  lastLoginAt: string;
}

export interface PublicUserProfile {
  uid: string;
  fullName: string;
  username: string;
  createdAt: string;
}

export interface AuthSession {
  user: PublicUserProfile;
  token: string;
  expiresAt: number;
}

export const SECURITY_QUESTIONS = [
  'What is your favorite historical hero or leader?',
  'What is the name of your first elementary/primary school?',
  'What is your birth city or hometown?',
  'What is your favorite subject in Social Science?',
  'What is the title of your favorite book?',
] as const;
