import React, { useState } from 'react';
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  User,
  ShieldCheck,
  BookOpen,
  MapPin,
  Award,
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle2,
  KeyRound,
  LogIn,
  UserPlus,
  Flame,
  Clock,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useAuth } from '../context/AuthContext';
import { SECURITY_QUESTIONS } from '../types/auth';
import { getSecurityQuestionForUsername } from '../services/authService';

export const AuthGate: React.FC = () => {
  const { login, createAccount, resetPassword } = useAuth();

  const [activeTab, setActiveTab] = useState<'login' | 'signup' | 'forgot'>('login');

  // Form states
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState<string>(SECURITY_QUESTIONS[0]);
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Forgot Password step states
  const [forgotStep, setForgotStep] = useState<'enter_user' | 'answer_and_reset'>('enter_user');
  const [retrievedQuestion, setRetrievedQuestion] = useState<string>('');

  // Status
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // Ignore if confetti fails
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await login(username, password);
      triggerCelebration();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Login failed. Please verify your username and password.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please ensure both passwords match.');
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
      triggerCelebration();
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
        setError('Could not locate account with this username.');
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
      triggerCelebration();
      setSuccessMsg('Password reset successfully! Logging you in...');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Password reset failed. Please check your answer.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#031326] text-white flex flex-col justify-between relative overflow-hidden select-none">
      {/* Background Decorative Mesh Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Bar */}
      <header className="relative z-10 max-w-6xl w-full mx-auto px-4 pt-6 sm:pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center bg-sky-950/60 border border-sky-600/30 shadow-lg shadow-sky-950/50">
            <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-sky-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-lg sm:text-2xl tracking-tight text-white leading-none">
                SST<span className="text-amber-400">Padho</span>
              </span>
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-sky-950/90 border border-sky-500/40 text-sky-200">
                by <strong className="text-white">Arshad</strong>
              </span>
            </div>
            <p className="text-[11px] text-sky-200/70 font-medium mt-0.5">
              Social Science &middot; Complete NCERT Curriculum (Classes 6–12)
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-sky-300/80 bg-sky-950/60 border border-sky-800/50 px-3.5 py-1.5 rounded-full">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Secure Student Gate</span>
        </div>
      </header>

      {/* Center Auth Gate Card */}
      <main className="relative z-10 max-w-lg w-full mx-auto px-4 py-8 sm:py-10 my-auto">
        <div className="bg-[#051c38]/95 backdrop-blur-xl rounded-3xl border border-sky-700/60 shadow-2xl p-6 sm:p-8 space-y-5">
          {/* Welcome Title */}
          <div className="text-center space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/90 text-sky-300 text-xs font-bold border border-sky-700/40 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>
                {activeTab === 'login'
                  ? 'Sign In to Access All Notes & Quizzes'
                  : activeTab === 'signup'
                  ? 'Create Your Free Student Account'
                  : 'Self-Service Password Recovery'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
              {activeTab === 'login' && 'Student Login Portal'}
              {activeTab === 'signup' && 'Create Your Account'}
              {activeTab === 'forgot' && 'Reset Your Password'}
            </h1>
            <p className="text-xs text-sky-200/70 max-w-sm mx-auto leading-relaxed">
              {activeTab === 'login' &&
                'Enter your unique username and password to unlock all chapters, notes, map lab, and question banks.'}
              {activeTab === 'signup' &&
                'Join SSTPadho with zero email verification or OTP. Fill out the form below to get instant access.'}
              {activeTab === 'forgot' &&
                'Recover your account directly by answering your secret security question.'}
            </p>
          </div>

          {/* Switcher Tabs */}
          <div className="grid grid-cols-2 p-1 bg-[#021124] rounded-2xl border border-sky-900/60 text-xs font-bold">
            <button
              type="button"
              onClick={() => {
                setActiveTab('login');
                setError(null);
                setSuccessMsg(null);
              }}
              className={`py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'login'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40'
                  : 'text-sky-300/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Log In</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('signup');
                setError(null);
                setSuccessMsg(null);
              }}
              className={`py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'signup'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40'
                  : 'text-sky-300/70 hover:text-white hover:bg-white/5'
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
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sky-500 font-mono text-sm">@</span>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="e.g. arshad_01"
                    autoComplete="username"
                    className="w-full pl-8 pr-3.5 py-2.5 bg-[#021226] border border-sky-800 rounded-xl text-sm text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono"
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
                      setForgotStep('enter_user');
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
                    className="w-full px-3.5 py-2.5 pr-10 bg-[#021226] border border-sky-800 rounded-xl text-sm text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
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
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 active:scale-98 text-white font-extrabold text-sm shadow-xl shadow-sky-950/60 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {submitting ? (
                  <span>Signing In...</span>
                ) : (
                  <>
                    <span>Log In &amp; Access All Content</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-center pt-2 text-xs text-sky-300/80">
                New student?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('signup');
                    setError(null);
                  }}
                  className="font-bold text-sky-400 hover:underline ml-1"
                >
                  Create an Account
                </button>
              </div>
            </form>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: CREATE ACCOUNT FORM                                                */}
          {/* ========================================================================= */}
          {activeTab === 'signup' && (
            <form onSubmit={handleSignupSubmit} className="space-y-3.5 max-h-[68vh] overflow-y-auto pr-1">
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
                  className="w-full px-3.5 py-2.5 bg-[#021226] border border-sky-800 rounded-xl text-sm text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500"
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
                    onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                    placeholder="arshad_01"
                    autoComplete="username"
                    className="w-full pl-8 pr-3.5 py-2.5 bg-[#021226] border border-sky-800 rounded-xl text-sm text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500 font-mono"
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
                    placeholder="Create a password"
                    autoComplete="new-password"
                    className="w-full px-3.5 py-2.5 pr-10 bg-[#021226] border border-sky-800 rounded-xl text-sm text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500"
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
                    className="w-full px-3.5 py-2.5 pr-10 bg-[#021226] border border-sky-800 rounded-xl text-sm text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500"
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

              {/* Password Recovery Question (No OTP / Email required!) */}
              <div className="p-3.5 rounded-2xl bg-[#021226] border border-sky-900/80 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                  <KeyRound className="w-3.5 h-3.5 text-amber-400" />
                  <span>Password Recovery Question</span>
                </div>
                <p className="text-[11px] text-sky-300/80 leading-relaxed">
                  Used to reset your password if you ever forget it, with zero email or OTP required.
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
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 active:scale-98 text-white font-extrabold text-sm shadow-xl shadow-sky-950/60 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {submitting ? (
                  <span>Creating Account...</span>
                ) : (
                  <>
                    <span>Create Account &amp; Unlock All Notes</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-center pt-1 text-xs text-sky-300/80">
                Already registered?{' '}
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
          {/* TAB 3: FORGOT PASSWORD RECOVERY                                           */}
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
                      className="w-full px-3.5 py-2.5 bg-[#021226] border border-sky-800 rounded-xl text-sm text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500 font-mono"
                    />
                  </div>

                  <p className="text-[11px] text-sky-300/70 leading-relaxed">
                    Enter the username you registered with. We will verify your security question so you can set a new password without needing email or OTP.
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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
                      placeholder="Enter the secret answer you set"
                      className="w-full px-3.5 py-2.5 bg-[#021226] border border-sky-800 rounded-xl text-sm text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500"
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
                      className="w-full px-3.5 py-2.5 bg-[#021226] border border-sky-800 rounded-xl text-sm text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500"
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
                      className="w-full px-3.5 py-2.5 bg-[#021226] border border-sky-800 rounded-xl text-sm text-white placeholder-sky-400/40 focus:outline-hidden focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? 'Resetting Password...' : 'Save New Password & Enter Site'}
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
                  &larr; Back to Log In
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Feature Highlights Footer Bar */}
      <footer className="relative z-10 max-w-5xl w-full mx-auto px-4 pb-6 sm:pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div className="p-3 rounded-2xl bg-sky-950/40 border border-sky-900/50 backdrop-blur-xs space-y-1">
            <BookOpen className="w-4 h-4 text-sky-400 mx-auto" />
            <h4 className="text-xs font-bold text-white">100+ Chapter Notes</h4>
            <p className="text-[10px] text-sky-200/60">Classes 6 to 12 NCERT</p>
          </div>
          <div className="p-3 rounded-2xl bg-sky-950/40 border border-sky-900/50 backdrop-blur-xs space-y-1">
            <MapPin className="w-4 h-4 text-teal-400 mx-auto" />
            <h4 className="text-xs font-bold text-white">Real Map Lab</h4>
            <p className="text-[10px] text-sky-200/60">Class-wise 57+ Sites</p>
          </div>
          <div className="p-3 rounded-2xl bg-sky-950/40 border border-sky-900/50 backdrop-blur-xs space-y-1">
            <Flame className="w-4 h-4 text-amber-400 mx-auto" />
            <h4 className="text-xs font-bold text-white">High-Yield Dossier</h4>
            <p className="text-[10px] text-sky-200/60">68 most frequent topics</p>
          </div>
          <div className="p-3 rounded-2xl bg-sky-950/40 border border-sky-900/50 backdrop-blur-xs space-y-1">
            <Clock className="w-4 h-4 text-rose-400 mx-auto" />
            <h4 className="text-xs font-bold text-white">10-Min Revision</h4>
            <p className="text-[10px] text-sky-200/60">Rapid flash summaries</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
