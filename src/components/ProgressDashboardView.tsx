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
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
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

  return (
    <div className="space-y-8 pb-16">
      {/* Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white shadow-xl space-y-3 border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {onBack && (
              <button
                id="progress-backspace-btn"
                onClick={onBack}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md border border-blue-400/40 transition-all"
                title="Go back (Backspace key)"
              >
                <span className="font-mono text-sm leading-none font-bold">⌫</span>
                <span>Backspace</span>
                <kbd className="hidden sm:inline-block text-[9px] px-1 py-0.2 bg-blue-800/80 rounded font-mono border border-blue-400/30">⌫</kbd>
              </button>
            )}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <Award className="w-3.5 h-3.5" />
              Personal Learning Analytics
            </div>
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
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
            {totalMax > 0 ? `${avgQuizPercent}%` : '—'}
          </div>
          <div className="text-xs text-slate-500">
            {quizScoresList.length} Quizzes Attempted
          </div>
        </div>

        {/* Bookmarks Card */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Saved Bookmarks</span>
            <Bookmark className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="text-3xl font-black font-heading text-slate-900">
            {progress.bookmarkedChapterIds.length + progress.bookmarkedQuestionIds.length}
          </div>
          <div className="text-xs text-slate-500">
            {progress.bookmarkedChapterIds.length} chapters, {progress.bookmarkedQuestionIds.length} questions
          </div>
        </div>

        {/* Study Streak Card */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
            <span>Active Study Streak</span>
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
          </div>
          <div className="text-3xl font-black font-heading text-slate-900">
            5 Days 🔥
          </div>
          <div className="text-xs text-slate-500">
            Keep revising daily for peak recall
          </div>
        </div>
      </div>

      {/* Bookmarked Chapters */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-slate-900 font-heading flex items-center gap-2">
          <Bookmark className="w-4 h-4 text-amber-600" />
          Bookmarked Chapters for Fast Access
        </h3>

        {bookmarkedChapters.length === 0 ? (
          <p className="text-xs text-slate-500">
            No chapters bookmarked yet. Click the bookmark icon on any chapter page to pin it here.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {bookmarkedChapters.map((ch) => {
              const sub = SUBJECTS[ch.subject];
              return (
                <div
                  key={ch.id}
                  onClick={() => onSelectChapter(ch, 'notes')}
                  className="p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50/20 cursor-pointer transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded ${sub.badgeBg} ${sub.badgeText}`}
                    >
                      Class {ch.classLevel} • {sub.label}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors mt-1.5">
                      {ch.title}
                    </h4>
                  </div>
                  <div className="mt-3 text-[11px] font-bold text-amber-600 flex items-center gap-1">
                    Open Notes <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* All Chapters Completion Checklist */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 font-heading">
            Syllabus Coverage Checklist
          </h3>
          <button
            onClick={() => {
              if (window.confirm('Reset your completion checkmarks and quiz records?')) {
                resetProgress();
              }
            }}
            className="inline-flex items-center gap-1 text-xs text-rose-600 hover:text-rose-800 font-bold"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Progress
          </button>
        </div>

        <div className="divide-y divide-slate-100">
          {CHAPTERS_DATA.map((ch) => {
            const completed = isChapterCompleted(ch.id);
            const score = progress.quizScores[ch.id];
            const sub = SUBJECTS[ch.subject];

            return (
              <div
                key={ch.id}
                className="py-3 flex items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => toggleChapterCompleted(ch.id)}
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                  />
                  <div>
                    <span className="font-bold text-slate-800">
                      Class {ch.classLevel} {sub.label} • Ch {ch.chapterNumber}: {ch.title}
                    </span>
                    {score && (
                      <span className="ml-2 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Quiz: {score.score}/{score.total}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => onSelectChapter(ch, 'notes')}
                  className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors"
                >
                  Review
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Backspace Action */}
      {onBack && (
        <div className="pt-6 border-t border-slate-700/40 flex items-center justify-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-all border border-blue-400/40"
          >
            <span className="font-mono text-sm font-bold">⌫</span>
            <span>Backspace to Previous Screen</span>
            <kbd className="text-[10px] px-1.5 py-0.5 bg-blue-800/80 rounded font-mono">⌫</kbd>
          </button>
        </div>
      )}
    </div>
  );
};
