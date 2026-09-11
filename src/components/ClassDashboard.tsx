import React, { useState } from 'react';
import {
  Landmark,
  Globe2,
  Scale,
  TrendingUp,
  Clock,
  Check,
  Award,
  Sparkles,
  BookOpen,
  Folder,
  FolderOpen,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { CLASS_LEVELS, CLASS_DETAILS, SUBJECTS } from '../data/subjects';
import { CHAPTERS_DATA } from '../data/chaptersData';
import { Chapter, ClassLevel, SubjectKey } from '../types/sst';
import { useProgress } from '../context/ProgressContext';
import { PopularHighYieldFolder } from './PopularHighYieldFolder';

interface ClassDashboardProps {
  classLevel: ClassLevel;
  onSelectChapter: (chapter: Chapter, targetTab?: 'notes' | 'revision' | 'questions' | 'quiz') => void;
  onNavigateClass: (cls: ClassLevel) => void;
  onNavigateHighYield?: () => void;
  onBack?: () => void;
}

export const ClassDashboard: React.FC<ClassDashboardProps> = ({
  classLevel,
  onSelectChapter,
  onNavigateClass,
  onNavigateHighYield,
  onBack,
}) => {
  const { isChapterCompleted, toggleChapterCompleted, progress } = useProgress();
  const [activeSubjectTab, setActiveSubjectTab] = useState<SubjectKey | 'all'>('all');
  const [folderOpen, setFolderOpen] = useState(false);

  const classInfo = CLASS_DETAILS[classLevel];
  const chaptersForClass = CHAPTERS_DATA.filter((ch) => ch.classLevel === classLevel);
  const classPopularCount = chaptersForClass.filter((c) => c.popular).length;

  // Filter chapters based on active subject tab
  const filteredChapters =
    activeSubjectTab === 'all'
      ? chaptersForClass
      : chaptersForClass.filter((c) => c.subject === activeSubjectTab);

  const completedCount = chaptersForClass.filter((c) => isChapterCompleted(c.id)).length;
  const totalCount = chaptersForClass.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const subjectsList: { key: SubjectKey; label: string; icon: React.ReactNode }[] = [
    { key: 'history', label: 'History', icon: <Landmark className="w-4 h-4 text-amber-400" /> },
    { key: 'geography', label: 'Geography', icon: <Globe2 className="w-4 h-4 text-emerald-400" /> },
    { key: 'civics', label: 'Civics', icon: <Scale className="w-4 h-4 text-sky-400" /> },
    { key: 'economics', label: 'Economics', icon: <TrendingUp className="w-4 h-4 text-purple-400" /> },
  ];

  return (
    <div className="space-y-10 pb-20 text-slate-100 max-w-7xl mx-auto">
      {/* Top Class Switcher Bar with Backspace Button */}
      <div className="flex items-center justify-between gap-3 flex-wrap pt-2">
        {onBack && (
          <button
            id="class-dashboard-backspace-btn"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-all border border-blue-400/40 group shrink-0"
            title="Go back (Backspace key)"
          >
            <span className="font-mono text-sm leading-none font-bold text-sky-200 group-hover:text-white">⌫</span>
            <span>Backspace</span>
            <kbd className="hidden sm:inline-block text-[9px] px-1 py-0.2 bg-blue-800/80 rounded font-mono border border-blue-400/30">⌫</kbd>
          </button>
        )}

        <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap flex-1">
          <span className="text-xs font-semibold text-sky-300/70 mr-2 uppercase tracking-wider hidden sm:inline">
            Choose Class:
          </span>
          {CLASS_LEVELS.map((cls) => {
            const isCurrent = cls === classLevel;
            return (
              <button
                key={cls}
                onClick={() => onNavigateClass(cls)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isCurrent
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 ring-2 ring-blue-400/40'
                    : 'bg-[#08203e] text-sky-200/80 border border-sky-800/40 hover:bg-[#0d2e57] hover:text-white'
                }`}
              >
                Class {cls}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Header matching the photo */}
      <div className="text-center max-w-3xl mx-auto pt-4 pb-2 space-y-3">
        <div className="inline-block">
          <span className="text-xs font-bold tracking-[0.2em] text-sky-400 uppercase font-mono px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/40">
            SSTPADHO • BY ARSHAD
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-heading">
          Class {classLevel} SST Chapters
        </h1>

        <p className="text-sm sm:text-base text-sky-200/80 font-normal leading-relaxed max-w-xl mx-auto">
          Select a subject. Click a chapter to open its detailed learning material.
        </p>

        {/* Subtle Completion Tracker */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#071d37] border border-sky-800/40 text-xs text-sky-200/90 mt-2">
          <span>Completion Progress:</span>
          <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden inline-block align-middle">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-sky-400 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="font-bold text-sky-400">
            {completedCount}/{totalCount} ({progressPercent}%)
          </span>
        </div>

        {/* High-Yield Dossier Folder Toggle */}
        <div className="pt-2 flex items-center justify-center gap-3">
          <button
            onClick={() => setFolderOpen(!folderOpen)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-semibold transition-all border shadow-md ${
              folderOpen
                ? 'bg-blue-600 text-white border-blue-400 ring-2 ring-blue-400/40'
                : 'bg-gradient-to-r from-[#082245] to-[#061a35] hover:bg-[#0b2d5a] text-sky-200 border-sky-700/60 hover:border-sky-400'
            }`}
          >
            {folderOpen ? (
              <FolderOpen className="w-4 h-4 text-amber-300" />
            ) : (
              <Folder className="w-4 h-4 text-amber-400" />
            )}
            <span>
              {folderOpen ? 'Close' : 'Open'} Class {classLevel} High-Yield &amp; Popular Folder
            </span>
            <span className="px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-800/50 text-[11px] font-mono font-bold">
              {classPopularCount} High-Yield
            </span>
            {folderOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* When Folder is opened inside class dashboard */}
      {folderOpen && (
        <div className="pt-2 animate-in fade-in duration-300">
          <PopularHighYieldFolder
            onSelectChapter={onSelectChapter}
            defaultOpen={true}
            initialClassFilter={classLevel}
            onNavigateClass={onNavigateClass}
          />
        </div>
      )}

      {/* Centered Subject Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
        <button
          onClick={() => setActiveSubjectTab('all')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeSubjectTab === 'all'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
              : 'bg-[#092244] text-sky-200/90 border border-sky-800/50 hover:border-sky-600 hover:bg-[#0c2a52]'
          }`}
        >
          All
        </button>

        {subjectsList.map((sub) => {
          const isSelected = activeSubjectTab === sub.key;
          const count = chaptersForClass.filter((c) => c.subject === sub.key).length;

          // Only show subject tab if it has chapters or for standard 4 subjects
          return (
            <button
              key={sub.key}
              onClick={() => setActiveSubjectTab(sub.key)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-[#092244] text-sky-200/90 border border-sky-800/50 hover:border-sky-600 hover:bg-[#0c2a52]'
              }`}
            >
              <span>{sub.icon}</span>
              <span>{sub.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-[#06172d] text-sky-400/80'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Chapter Cards Grid matching the photo */}
      {filteredChapters.length === 0 ? (
        <div className="p-12 rounded-2xl bg-[#071d37] border border-dashed border-sky-900/60 text-center text-sky-300/70 text-sm max-w-xl mx-auto">
          No chapters found for the selected subject in Class {classLevel}.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredChapters.map((ch, idx) => {
            const formattedNum = String(ch.chapterNumber || idx + 1).padStart(2, '0');
            const subjectLabel = ch.subject.toUpperCase();
            const completed = isChapterCompleted(ch.id);
            const quizScore = progress.quizScores[ch.id];

            return (
              <div
                key={ch.id}
                onClick={() => onSelectChapter(ch)}
                className="cursor-pointer rounded-2xl bg-[#071d37] border border-sky-900/50 hover:border-sky-500/80 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group shadow-lg hover:shadow-2xl hover:shadow-sky-950/80 relative overflow-hidden"
              >
                <div>
                  {/* Top Row: 01 badge + Optional Completion Indicator */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-9 rounded-lg bg-[#0b2b52] border border-sky-700/40 text-sky-300 font-bold text-sm flex items-center justify-center font-mono shadow-inner">
                      {formattedNum}
                    </div>

                    <div className="flex items-center gap-2">
                      {quizScore !== undefined && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-950/80 text-amber-300 border border-amber-800/40">
                          <Award className="w-3 h-3 text-amber-400" />
                          <span>
                            {Math.round((quizScore.score / Math.max(quizScore.total, 1)) * 100)}% ({quizScore.score}/{quizScore.total})
                          </span>
                        </span>
                      )}

                      {/* Completion checkmark button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleChapterCompleted(ch.id);
                        }}
                        className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-md transition-all ${
                          completed
                            ? 'bg-emerald-950/90 text-emerald-400 border border-emerald-700/60 shadow-sm'
                            : 'bg-[#092244] text-sky-300/70 hover:text-white border border-sky-800/40'
                        }`}
                        title={completed ? 'Completed (Click to unmark)' : 'Click to mark complete'}
                      >
                        <Check className="w-3 h-3" />
                        <span>{completed ? 'Done' : 'Mark Done'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Subject Tag */}
                  <div className="text-[11px] font-bold tracking-widest text-sky-400 uppercase mt-4 mb-2">
                    {subjectLabel}
                  </div>

                  {/* Chapter Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-sky-300 transition-colors">
                    {ch.title}
                  </h3>

                  {/* Chapter Overview / Description */}
                  <p className="text-xs sm:text-sm text-slate-300/80 line-clamp-3 leading-relaxed mt-2.5 mb-6 font-normal">
                    {ch.overview}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-3 border-t border-sky-950/70 flex items-center justify-between">
                  <span className="text-sm font-semibold text-sky-400 group-hover:text-sky-300 inline-flex items-center gap-1.5 transition-all group-hover:translate-x-1">
                    Open detailed chapter →
                  </span>

                  <div className="flex items-center gap-1 text-[11px] text-sky-300/60">
                    <Clock className="w-3 h-3 text-sky-400/60" />
                    <span>{ch.estimatedReadTime}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Bottom Backspace Action */}
      {onBack && (
        <div className="pt-6 border-t border-sky-900/60 flex items-center justify-center gap-3">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all border border-blue-400/40"
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
