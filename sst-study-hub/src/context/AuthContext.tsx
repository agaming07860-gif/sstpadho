import React, { createContext, useContext, useState, useEffect } from 'react';
import { PublicUserProfile } from '../types/auth';
import {
  getSavedSession,
  saveSession,
  clearSession,
  login as serviceLogin,
  createAccount as serviceCreateAccount,
  resetPasswordWithSecurityAnswer as serviceResetPassword,
} from '../services/authService';

interface AuthContextType {
  user: PublicUserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<PublicUserProfile>;
  createAccount: (data: {
    fullName: string;
    username: string;
    password: string;
    confirmPassword: string;
    securityQuestion: string;
    securityAnswer: string;
  }) => Promise<PublicUserProfile>;
  resetPassword: (
    username: string,
    securityAnswer: string,
    newPass: string,
    confirmPass: string
  ) => Promise<PublicUserProfile>;
  logout: () => void;
  // Modal controls
  authModalOpen: boolean;
  authModalMode: 'login' | 'signup' | 'forgot';
  protectedNotice: string | null;
  openAuthModal: (mode?: 'login' | 'signup' | 'forgot', notice?: string) => void;
  closeAuthModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<PublicUserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Modal state
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [protectedNotice, setProtectedNotice] = useState<string | null>(null);

  // Restore session on boot
  useEffect(() => {
    try {
      const savedUser = getSavedSession();
      if (savedUser) {
        setUser(savedUser);
      }
    } catch (err) {
      console.warn('Error reading auth session:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (username: string, pass: string): Promise<PublicUserProfile> => {
    const profile = await serviceLogin(username, pass);
    setUser(profile);
    setAuthModalOpen(false);
    setProtectedNotice(null);
    return profile;
  };

  const createAccount = async (data: {
    fullName: string;
    username: string;
    password: string;
    confirmPassword: string;
    securityQuestion: string;
    securityAnswer: string;
  }): Promise<PublicUserProfile> => {
    const profile = await serviceCreateAccount(data);
    setUser(profile);
    setAuthModalOpen(false);
    setProtectedNotice(null);
    return profile;
  };

  const resetPassword = async (
    username: string,
    securityAnswer: string,
    newPass: string,
    confirmPass: string
  ): Promise<PublicUserProfile> => {
    const profile = await serviceResetPassword(username, securityAnswer, newPass, confirmPass);
    setUser(profile);
    setAuthModalOpen(false);
    setProtectedNotice(null);
    return profile;
  };

  const logout = () => {
    clearSession();
    setUser(null);
  };

  const openAuthModal = (mode: 'login' | 'signup' | 'forgot' = 'login', notice?: string) => {
    setAuthModalMode(mode);
    setProtectedNotice(notice || null);
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
    setProtectedNotice(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        createAccount,
        resetPassword,
        logout,
        authModalOpen,
        authModalMode,
        protectedNotice,
        openAuthModal,
        closeAuthModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
