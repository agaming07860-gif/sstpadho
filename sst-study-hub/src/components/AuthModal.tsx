import React, { useState, useEffect } from 'react';
import {
  X,
  Lock,
  User,
  Eye,
  EyeOff,
  Sparkles,
  HelpCircle,
  KeyRound,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  UserPlus,
  LogIn,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { SECURITY_QUESTIONS } from '../types/auth';
import { getSecurityQuestionForUsername } from '../services/authService';

export const AuthModal: React.FC = () => {
  const {
    authModalOpen,
    authModalMode,
    closeAuthModal,
    openAuthModal,
    protectedNotice,
    login,
    createAccount,
    resetPassword,
  } = useAuth();

  const [activeTab, setActiveTab] = useState<'login' | 'signup' | 'forgot'>(authModalMode);

  // Form states
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState<string>(SECURITY_QUESTIONS[0]);
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Forgot password specific states
  const [forgotStep, setForgotStep] = useState<'enter_user' | 'answer_and_reset'>('enter_user');
  const [retrievedQuestion, setRetrievedQuestion] = useState<string>('');

  // UI state
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Sync tab with context modal mode
  useEffect(() => {
    setActiveTab(authModalMode);
    setError(null);
    setSuccessMsg(null);
    setForgotStep('enter_user');
  }, [authModalMode, authModalOpen]);

  if (!authModalOpen) return null;

  const handleClose = () => {
    setError(null);
    setSuccessMsg(null);
    closeAuthModal();
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await login(username, password);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Login failed. Please check your username and password.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please ensure both passwords match exactly.');
      return;
    }

    setSubmitting(true);
    try {
      await createAccount({
        fullName,
        username,
        password,
        confirmPassword,
        securityQuestion,
        securityAnswer,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Account creation failed. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleForgotLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await getSecurityQuestionForUsername(username);
      setRetrievedQuestion(res.securityQuestion);
      setForgotStep('answer_and_reset');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Could not locate username.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('New passwords do not match.');
      return;
    }

    setSubmitting(true);
    try {
      await resetPassword(username, securityAnswer, password, confirmPassword);
      setSuccessMsg('Password reset successfully! You are now logged in.');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Password reset failed. Please verify your security answer.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-[#071d37] border border-sky-700/60 rounded-3xl shadow-2xl p-6 sm:p-8 text-white space-y-5 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 p-2 rounded-full bg-sky-950/80 text-sky-300 hover:text-white hover:bg-sky-900 border border-sky-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Logo */}
        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-sky-950/90 via-[#0a274e]/90 to-sky-950/90 border border-sky-500/40 shadow-xs mb-1">
            <span className="font-heading font-extrabold text-xs text-white tracking-tight">
              SST<span className="text-sky-400">Padho</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-sky-400/60" />
            <span className="text-xs font-semibold text-sky-200">Secure Account Portal</span>
          </div>
          <h2 className="text-2xl font-bold font-heading text-white">
            {activeTab === 'login' && 'Welcome Back'}
            {activeTab === 'signup' && 'Create Your Account'}
            {activeTab === 'forgot' && 'Reset Password'}
          </h2>
          <p className="text-xs text-sky-200/80">
            {activeTab === 'login' && 'Sign in using your username and password'}
            {activeTab === 'signup' && 'Join thousands of students mastering CBSE Social Science'}
            {activeTab === 'forgot' && 'Self-service recovery without email or OTP'}
          </p>
        </div>

        {/* Protected Notice Banner if prompted by unauthorized action */}
        {protectedNotice && (
          <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/40 text-amber-200 text-xs flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 block font-semibold">Account Login Required</strong>
              <span>{protectedNotice}</span>
            </div>
          </div>
        )}

        {/* Switcher Tabs */}
        <div className="grid grid-cols-2 p-1 rounded-2xl bg-[#04152c] border border-sky-900/80 text-xs font-semibold">
          <button
            type="button"
            onClick={() => {
              setActiveTab('login');
              setError(null);
            }}
            className={`py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'login'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-sky-300/70 hover:text-white'
            }`}
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Sign In</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('signup');
              setError(null);
            }}
            className={`py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'signup'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-sky-300/70 hover:text-white'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Create Account</span>
          </button>
        </div>

        {/* Global Error Banner */}
        {error && (
          <div className="p-3 rounded-2xl bg-rose-500/20 border border-rose-500/50 text-rose-200 text-xs flex items-start gap-2 animate-in fade-in">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed font-medium">{error}</div>
          </div>
        )}

        {/* Global Success Banner */}
        {successMsg && (
          <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-200 text-xs flex items-start gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed font-medium">{successMsg}</div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 1: LOGIN FORM                                                         */}
        {/* ========================================================================= */}
        {activeTab === 'login' && (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-sky-200 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-sky-400" />
                <span>Username</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. arshad_01"
                  autoComplete="username"
                  className="w-full px-3.5 py-2.5 bg-[#031226] border border-sky-800 rounded-xl text-sm text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-sky-200 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-sky-400" />
                  <span>Password</span>
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('forgot');
                    setError(null);
                  }}
                  className="text-[11px] font-semibold text-sky-400 hover:text-sky-300 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full px-3.5 py-2.5 pr-10 bg-[#031226] border border-sky-800 rounded-xl text-sm text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-400 hover:text-white"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-98 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {submitting ? (
                <span>Signing In...</span>
              ) : (
                <>
                  <span>Log In to SSTPadho</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="text-center pt-2 text-xs text-sky-300/80">
              Don’t have an account yet?{' '}
              <button
                type="button"
                onClick={() => {
                  setActiveTab('signup');
                  setError(null);
                }}
                className="font-bold text-sky-400 hover:underline ml-1"
              >
                Create Account
              </button>
            </div>
          </form>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: CREATE ACCOUNT FORM                                                */}
        {/* ========================================================================= */}
        {activeTab === 'signup' && (
          <form onSubmit={handleSignupSubmit} className="space-y-3.5 max-h-[70vh] overflow-y-auto pr-1">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-sky-200 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-sky-400" />
                <span>Full Name</span>
                <span className="text-rose-400 text-xs">*</span>
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Arshad Khan"
                autoComplete="name"
                className="w-full px-3.5 py-2.5 bg-[#031226] border border-sky-800 rounded-xl text-sm text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Username */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-sky-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <UserPlus className="w-3.5 h-3.5 text-sky-400" />
                  <span>Unique Username</span>
                  <span className="text-rose-400 text-xs">*</span>
                </div>
                <span className="text-[10px] text-sky-400 font-mono">Lowercase unique</span>
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sky-500 font-mono text-sm">@</span>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="arshad_01"
                  autoComplete="username"
                  className="w-full pl-8 pr-3.5 py-2.5 bg-[#031226] border border-sky-800 rounded-xl text-sm text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-sky-200 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-sky-400" />
                <span>Password</span>
                <span className="text-rose-400 text-xs">*</span>
                <span className="text-[10px] text-sky-400/80 font-normal">(min 6 chars)</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                  className="w-full px-3.5 py-2.5 pr-10 bg-[#031226] border border-sky-800 rounded-xl text-sm text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-400 hover:text-white"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-sky-200 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Confirm Password</span>
                <span className="text-rose-400 text-xs">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter password"
                  autoComplete="new-password"
                  className="w-full px-3.5 py-2.5 pr-10 bg-[#031226] border border-sky-800 rounded-xl text-sm text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-400 hover:text-white"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Password Recovery Security Question (No OTP / Email required!) */}
            <div className="p-3.5 rounded-2xl bg-[#031226] border border-sky-900/80 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                <KeyRound className="w-3.5 h-3.5 text-amber-400" />
                <span>Password Recovery Question</span>
              </div>
              <p className="text-[11px] text-sky-300/80 leading-relaxed">
                Used to recover your password instantly without needing any email or OTP verification.
              </p>

              <select
                value={securityQuestion}
                onChange={(e) => setSecurityQuestion(e.target.value)}
                className="w-full px-3 py-2 bg-[#051c38] border border-sky-800 rounded-xl text-xs text-white focus:outline-hidden focus:border-blue-500"
              >
                {SECURITY_QUESTIONS.map((q, idx) => (
                  <option key={idx} value={q} className="bg-slate-900 text-white">
                    {q}
                  </option>
                ))}
              </select>

              <input
                type="text"
                required
                value={securityAnswer}
                onChange={(e) => setSecurityAnswer(e.target.value)}
                placeholder="Your secret recovery answer"
                className="w-full px-3.5 py-2 bg-[#051c38] border border-sky-800 rounded-xl text-xs text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-98 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {submitting ? (
                <span>Creating Account...</span>
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="text-center pt-1 text-xs text-sky-300/80">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  setActiveTab('login');
                  setError(null);
                }}
                className="font-bold text-sky-400 hover:underline ml-1"
              >
                Sign In
              </button>
            </div>
          </form>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: FORGOT PASSWORD RECOVERY (No Email / No OTP Required)              */}
        {/* ========================================================================= */}
        {activeTab === 'forgot' && (
          <div className="space-y-4">
            {forgotStep === 'enter_user' ? (
              <form onSubmit={handleForgotLookup} className="space-y-3.5">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-sky-200 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-sky-400" />
                    <span>Enter Your Username</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="e.g. arshad_01"
                    className="w-full px-3.5 py-2.5 bg-[#031226] border border-sky-800 rounded-xl text-sm text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <p className="text-[11px] text-sky-300/70 leading-relaxed">
                  Enter the username you registered with. We will verify your security recovery question to reset your password instantly.
                </p>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? 'Verifying...' : 'Continue to Security Question →'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleResetSubmit} className="space-y-3.5">
                <div className="p-3 rounded-2xl bg-sky-950/80 border border-sky-800 text-xs space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    Security Question for @{username}:
                  </span>
                  <p className="text-white font-medium">{retrievedQuestion}</p>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-sky-200">
                    Your Security Answer:
                  </label>
                  <input
                    type="text"
                    required
                    value={securityAnswer}
                    onChange={(e) => setSecurityAnswer(e.target.value)}
                    placeholder="Enter the answer you set during registration"
                    className="w-full px-3.5 py-2.5 bg-[#031226] border border-sky-800 rounded-xl text-sm text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-sky-200">
                    New Password:
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password (min 6 chars)"
                    className="w-full px-3.5 py-2.5 bg-[#031226] border border-sky-800 rounded-xl text-sm text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-sky-200">
                    Confirm New Password:
                  </label>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter new password"
                    className="w-full px-3.5 py-2.5 bg-[#031226] border border-sky-800 rounded-xl text-sm text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? 'Resetting Password...' : 'Save New Password & Sign In'}
                </button>
              </form>
            )}

            <div className="text-center pt-2 text-xs">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('login');
                  setError(null);
                }}
                className="text-sky-400 hover:underline font-semibold"
              >
                &larr; Back to Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
