import React from 'react';
import {
  Award,
  CheckCircle2,
  Bookmark,
  Zap,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Flame,
  HelpCircle,
  ShieldCheck,
  Lock,
  LogIn,
  UserPlus,
  User,
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { CHAPTERS_DATA } from '../data/chaptersData';
import { Chapter } from '../types/sst';
import { SUBJECTS } from '../data/subjects';

interface ProgressDashboardViewProps {
  onSelectChapter: (chapter: Chapter, targetTab?: 'notes' | 'revision' | 'questions' | 'quiz') => void;
  onBack?: () => void;
}

export const ProgressDashboardView: React.FC<ProgressDashboardViewProps> = ({
  onSelectChapter,
  onBack,
}) => {
  const {
    progress,
    toggleChapterCompleted,
    isChapterCompleted,
    resetProgress,
  } = useProgress();

  const { user, isAuthenticated, openAuthModal } = useAuth();

  const totalChapters = CHAPTERS_DATA.length;
  const completedCount = progress.completedChapterIds.length;
  const completionPercent =
    totalChapters > 0 ? Math.round((completedCount / totalChapters) * 100) : 0;

  // Quiz calculations
  const quizScoresList = Object.values(progress.quizScores) as Array<{ score: number; total: number; date: string }>;
  let totalScore = 0;
  let totalMax = 0;
  quizScoresList.forEach((data) => {
    totalScore += data.score;
    totalMax += data.total;
  });
  const avgQuizPercent = totalMax > 0 ? Math.round((totalScore / totalMax) * 100) : 0;

  // Bookmarked Chapters
  const bookmarkedChapters = CHAPTERS_DATA.filter((c) =>
    progress.bookmarkedChapterIds.includes(c.id)
  );

  // Protected Unauthorized Access View
  if (!isAuthenticated) {
    return (
      <div className="space-y-6 pb-16 max-w-3xl mx-auto">
        {onBack && (
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#082245] hover:bg-[#0c2e5c] text-sky-200 text-xs font-bold border border-sky-800 transition-all shadow-sm"
          >
            <span className="font-mono text-sm leading-none font-bold">⌫</span>
            <span>Back</span>
          </button>
        )}

        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#071d37] via-[#05162b] to-[#041224] border border-sky-700/60 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-blue-600/20 border border-blue-500/40 text-blue-400 mx-auto flex items-center justify-center shadow-inner">
            <Lock className="w-8 h-8 text-sky-400" />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Protected Private Page</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
              Sign In to Access Your Study Dashboard
            </h2>
            <p className="text-sm text-sky-200/80 leading-relaxed font-normal">
              Your chapter completion records, revision metrics, and quiz scores are securely protected.
              Log in with your unique username or create an account to view and synchronize your study analytics.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto">
            <button
              onClick={() => openAuthModal('login', 'Sign in to access your personal Study Dashboard & Analytics')}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In with Username</span>
            </button>

            <button
              onClick={() => openAuthModal('signup', 'Create a free account to track your CBSE Social Science progress')}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#092244] hover:bg-[#0d2e5a] text-sky-200 hover:text-white font-bold text-sm border border-sky-700/60 transition-all flex items-center justify-center gap-2"
            >
              <UserPlus className="w-4 h-4 text-sky-400" />
              <span>Create Account</span>
            </button>
          </div>

          <div className="pt-4 border-t border-sky-900/60 text-xs text-sky-300/60 flex items-center justify-center gap-4">
            <span>✓ No email or OTP required</span>
            <span>•</span>
            <span>✓ Encrypted credentials</span>
            <span>•</span>
            <span>✓ Self-service password recovery</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-16">
      {/* Banner */}
      <div className="p-4 sm:p-6 md:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white shadow-xl space-y-3 border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {onBack && (
              <button
                id="progress-back-btn"
                onClick={onBack}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md border border-blue-400/40 transition-all min-h-[34px]"
                title="Go back (Backspace key)"
              >
                <span className="font-mono text-sm leading-none font-bold">⌫</span>
                <span>Back</span>
                <kbd className="hidden sm:inline-block text-[9px] px-1 py-0.2 bg-blue-800/80 rounded font-mono border border-blue-400/30">⌫</kbd>
              </button>
            )}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <Award className="w-3.5 h-3.5" />
              <span>Personal Learning Analytics</span>
            </div>
          </div>

          {/* Authenticated User Status Badge */}
          {user && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082245] border border-sky-600/50 text-xs text-sky-200">
              <User className="w-3.5 h-3.5 text-sky-400" />
              <span>Logged in: <strong className="text-white">{user.fullName}</strong> (@{user.username})</span>
            </div>
          )}
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white">
          📊 Your SST Study Dashboard
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          Monitor your preparation velocity, completed NCERT chapters, quiz accuracy, and saved bookmarks.
        </p>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Chapters Completed Card */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Completed Chapters</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-3xl font-black font-heading text-slate-900">
            {completedCount} <span className="text-sm font-normal text-slate-400">/ {totalChapters}</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full"
              style={{ width: `${completionPercent}%` }}
            />
          </div>
        </div>

        {/* Quiz Mastery Card */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Average Quiz Score</span>
            <Award className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-3xl font-black font-heading text-slate-900">
            {avgQuizPercent}%
          </div>
          <div className="text-xs text-slate-400">
            Across {quizScoresList.length} completed chapter tests
          </div>
        </div>

        {/* Bookmarked Highlights */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Saved Chapters</span>
            <Bookmark className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-3xl font-black font-heading text-slate-900">
            {bookmarkedChapters.length}
          </div>
          <div className="text-xs text-slate-400">
            Bookmarked for rapid last-minute revision
          </div>
        </div>

        {/* Preparation Index */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Board Readiness Index</span>
            <Zap className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-3xl font-black font-heading text-slate-900">
            {Math.round((completionPercent * 0.6) + (avgQuizPercent * 0.4))}%
          </div>
          <div className="text-xs text-slate-400">
            Combined syllabus coverage &amp; accuracy
          </div>
        </div>
      </div>

      {/* Bookmarked Chapters Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold font-heading text-slate-900">
            📑 Your Bookmarked Chapters ({bookmarkedChapters.length})
          </h2>
          {progress.completedChapterIds.length > 0 && (
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to reset all your progress data?')) {
                  resetProgress();
                }
              }}
              className="text-xs text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1 hover:underline"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All Progress
            </button>
          )}
        </div>

        {bookmarkedChapters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {bookmarkedChapters.map((ch) => {
              const sub = SUBJECTS[ch.subject];
              return (
                <div
                  key={ch.id}
                  onClick={() => onSelectChapter(ch)}
                  className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-400">
                        Class {ch.classLevel} &bull; {sub.label}
                      </span>
                      {isChapterCompleted(ch.id) && (
                        <span className="text-emerald-600 flex items-center gap-1 text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-sm text-slate-800 group-hover:text-blue-600 transition-colors">
                      Ch {ch.chapterNumber}: {ch.title}
                    </h3>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                    <span>Open Chapter Notes</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 text-xs">
            You haven’t bookmarked any chapters yet. Click the bookmark icon on any chapter page to save it here!
          </div>
        )}
      </div>

      {/* Completed Chapters History */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold font-heading text-slate-900">
          ✅ Completed Chapters ({completedCount})
        </h2>
        {completedCount > 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-xs">
            {progress.completedChapterIds.map((chId) => {
              const ch = CHAPTERS_DATA.find((c) => c.id === chId);
              if (!ch) return null;
              const sub = SUBJECTS[ch.subject];

              return (
                <div
                  key={chId}
                  className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-800">
                        Class {ch.classLevel} {sub.label} &bull; Ch {ch.chapterNumber}: {ch.title}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        Marked as completed and mastered
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectChapter(ch)}
                      className="px-3 py-1.5 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 text-xs font-bold transition-colors"
                    >
                      Revise Notes
                    </button>
                    <button
                      onClick={() => toggleChapterCompleted(ch.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors"
                      title="Unmark completion"
                    >
                      &times;
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 text-xs">
            No completed chapters yet. Click &quot;Mark as Completed&quot; at the end of any chapter notes to track your progress!
          </div>
        )}
      </div>
    </div>
  );
};
