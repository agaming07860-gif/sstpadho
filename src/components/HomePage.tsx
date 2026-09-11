import React, { useState } from 'react';
import {
  Search,
  BookOpen,
  MapPin,
  Clock,
  Zap,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Eye,
  CheckCircle2,
  Bookmark,
  Landmark,
  Globe2,
  Scale,
  TrendingUp,
  FolderOpen,
} from 'lucide-react';
import { CLASS_LEVELS, CLASS_DETAILS, SUBJECTS } from '../data/subjects';
import { CHAPTERS_DATA } from '../data/chaptersData';
import { Chapter, ClassLevel, SubjectKey } from '../types/sst';
import { useProgress } from '../context/ProgressContext';
import { PopularHighYieldFolder } from './PopularHighYieldFolder';

interface HomePageProps {
  onSelectClass: (cls: ClassLevel) => void;
  onSelectChapter: (chapter: Chapter, targetTab?: 'notes' | 'revision' | 'questions' | 'quiz') => void;
  onNavigateMapLab: () => void;
  onNavigateTimeline: () => void;
  onNavigateQuestionBank: () => void;
  onNavigateRevision: () => void;
  onNavigateHighYield?: () => void;
  onOpenSearch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectClass,
  onSelectChapter,
  onNavigateMapLab,
  onNavigateTimeline,
  onNavigateQuestionBank,
  onNavigateRevision,
  onNavigateHighYield,
  onOpenSearch,
}) => {
  const { activeClass, setActiveClass, isChapterCompleted } = useProgress();
  const [revealedQuestionId, setRevealedQuestionId] = useState<string | null>(null);

  const popularChapters = CHAPTERS_DATA.filter((ch) => ch.popular);

  return (
    <div className="space-y-12 pb-20 text-slate-100 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#051a36] via-[#04152c] to-[#031326] text-white p-6 sm:p-10 md:p-12 shadow-2xl border border-sky-900/40">
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/50 text-sky-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Curriculum Aligned • NCERT &amp; CBSE Syllabus • Classes 6 - 12</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-heading">
            Your Complete Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-sky-200">
              SSTPadho
            </span>{' '}
            <span className="inline-block text-xl sm:text-2xl md:text-3xl font-semibold text-amber-300 font-sans align-middle">
              by Arshad
            </span>
          </h1>

          <p className="text-sky-200/80 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            Choose your class, explore chapters, read detailed and short revision notes,
            master high-yield question banks, study interactive India maps, and revise key dates in 10 minutes.
          </p>

          {/* Quick Search Action Bar */}
          <div className="pt-2">
            <div
              onClick={onOpenSearch}
              className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#08203e]/90 hover:bg-[#0c2a52] border border-sky-800/50 cursor-pointer backdrop-blur-md transition-all group max-w-xl shadow-lg"
            >
              <Search className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
              <div className="flex-1 text-xs sm:text-sm text-sky-200/80">
                <span className="font-medium text-white">Search chapters, notes, dates...</span>
                <span className="hidden sm:inline text-sky-300/50"> (e.g., &quot;Nationalism in India&quot;, &quot;Zollverein&quot;)</span>
              </div>
              <span className="px-3 py-1 text-xs font-bold bg-blue-600 text-white rounded-lg shadow-md shadow-blue-600/30">
                Search
              </span>
            </div>
          </div>

          {/* Rapid Feature Pills */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2 text-xs font-medium text-slate-300">
            <button
              onClick={onNavigateRevision}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-950/60 hover:bg-rose-950/90 text-rose-300 border border-rose-800/40 transition-colors"
            >
              <Zap className="w-3.5 h-3.5 text-rose-400" />
              ⚡ 10-Min Revision Mode
            </button>
            <button
              onClick={onNavigateMapLab}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-950/90 text-emerald-300 border border-emerald-800/40 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              🗺️ Interactive Map Lab
            </button>
            <button
              onClick={onNavigateTimeline}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-950/60 hover:bg-amber-950/90 text-amber-300 border border-amber-800/40 transition-colors"
            >
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              ⏳ History Timeline (1757–1950)
            </button>
            {onNavigateHighYield && (
              <button
                onClick={onNavigateHighYield}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-950/70 hover:bg-blue-900/80 text-sky-200 border border-blue-700/50 transition-colors"
              >
                <FolderOpen className="w-3.5 h-3.5 text-sky-400" />
                📂 High-Yield Folder (68 Chapters)
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 1. Choose Your Class Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-heading">
              📚 Choose Your Class
            </h2>
            <p className="text-xs sm:text-sm text-sky-200/60">
              Select your class to enter its dedicated Social Science dashboard
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {CLASS_LEVELS.map((cls) => {
            const isSelected = activeClass === cls;
            const isBoardSpecial = cls === 10;
            return (
              <button
                key={cls}
                onClick={() => {
                  setActiveClass(cls);
                  onSelectClass(cls);
                }}
                className={`relative p-4 rounded-2xl text-left border transition-all flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/30 -translate-y-1'
                    : 'bg-[#071d37] hover:bg-[#0c2a52] text-slate-100 border-sky-900/50 hover:border-sky-600'
                }`}
              >
                {isBoardSpecial && (
                  <span
                    className={`absolute -top-2 right-2 text-[9px] uppercase font-extrabold px-1.5 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-white text-blue-700'
                        : 'bg-amber-950/80 text-amber-300 border border-amber-800/50'
                    }`}
                  >
                    Board Exam
                  </span>
                )}
                <div>
                  <div className="text-2xl font-black font-heading mb-1 text-white">
                    Class {cls}
                  </div>
                  <div
                    className={`text-[11px] leading-snug line-clamp-2 ${
                      isSelected ? 'text-sky-100' : 'text-sky-200/60'
                    }`}
                  >
                    {cls >= 11 ? 'Senior Secondary' : 'SST Complete'}
                  </div>
                </div>
                <div
                  className={`mt-4 text-[11px] font-bold inline-flex items-center gap-1 ${
                    isSelected
                      ? 'text-white'
                      : 'text-sky-400 group-hover:translate-x-1 transition-transform'
                  }`}
                >
                  Enter Library <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Subject Pillars Preview */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-heading">
            🏛️ Four Pillars of Social Science
          </h2>
          <p className="text-xs sm:text-sm text-sky-200/60">
            Dedicated curricula and chapter libraries for Class {activeClass}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {(['history', 'geography', 'civics', 'economics'] as SubjectKey[]).map((key) => {
            const sub = SUBJECTS[key];
            const count = CHAPTERS_DATA.filter(
              (c) => c.classLevel === activeClass && c.subject === key
            ).length;

            const iconMap = {
              history: <Landmark className="w-4 h-4 text-amber-400" />,
              geography: <Globe2 className="w-4 h-4 text-emerald-400" />,
              civics: <Scale className="w-4 h-4 text-sky-400" />,
              economics: <TrendingUp className="w-4 h-4 text-purple-400" />,
            };

            return (
              <div
                key={key}
                onClick={() => onSelectClass(activeClass)}
                className="p-5 rounded-2xl bg-[#071d37] border border-sky-900/50 hover:border-sky-500/70 transition-all cursor-pointer group flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-[#0b2b52] text-sky-300 border border-sky-800/40 flex items-center gap-1.5">
                      {iconMap[key]}
                      <span>{sub.label}</span>
                    </span>
                    <span className="text-xs font-semibold text-sky-300/50">
                      {count} Chapters
                    </span>
                  </div>

                  <p className="text-xs text-sky-200/70 leading-relaxed font-normal">
                    {sub.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-sky-950/80 flex items-center justify-between text-xs font-bold">
                  <span className="text-sky-300/60 font-medium">Explore Subject</span>
                  <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ⭐ Popular & High-Yield Chapters Folder (Interactive dossier) */}
      <section>
        <PopularHighYieldFolder
          onSelectChapter={onSelectChapter}
          onNavigateClass={onSelectClass}
        />
      </section>

      {/* 2-Column Spotlight: Map Lab & History Timeline */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Map Lab Card */}
        <div
          onClick={onNavigateMapLab}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#062c3e] via-[#052136] to-[#031326] text-white p-6 sm:p-8 cursor-pointer group shadow-xl border border-teal-800/40 hover:border-teal-500/60 transition-all"
        >
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 text-teal-300 text-xs font-bold border border-teal-800/50">
              <MapPin className="w-3.5 h-3.5" />
              SST Map Practice
            </div>

            <h3 className="text-2xl font-bold font-heading text-white">
              🗺️ Dedicated Map Lab
            </h3>

            <p className="text-sky-200/70 text-xs sm:text-sm leading-relaxed font-normal">
              Explore interactive India maps with categorized layers: Rivers &amp; Dams,
              Soils, Major Crops, Iron &amp; Steel Industries, Software Tech Parks, and Freedom Movement locations.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-300 group-hover:translate-x-1 transition-transform">
              Launch Interactive Map <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* History Timeline Card */}
        <div
          onClick={onNavigateTimeline}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2e1d06] via-[#201505] to-[#031326] text-white p-6 sm:p-8 cursor-pointer group shadow-xl border border-amber-800/40 hover:border-amber-500/60 transition-all"
        >
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 text-amber-300 text-xs font-bold border border-amber-800/50">
              <Clock className="w-3.5 h-3.5" />
              Chronology Master
            </div>

            <h3 className="text-2xl font-bold font-heading text-white">
              ⏳ Interactive History Timeline
            </h3>

            <p className="text-amber-200/70 text-xs sm:text-sm leading-relaxed font-normal">
              Never forget historical dates again. Trace the Indian Freedom Struggle (1757 Battle of Plassey →
              1857 Revolt → 1885 INC → 1947 Independence) and European revolutions with instant cause-effect context.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 group-hover:translate-x-1 transition-transform">
              Explore Timeline Milestones <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* ❓ Question Bank Spotlight */}
      <section className="bg-[#071d37] rounded-3xl border border-sky-900/50 p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-sky-950/80 text-sky-300 text-xs font-bold mb-1 border border-sky-800/40">
              Active Recall Practice
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-heading">
              ❓ High-Yield Question Bank Spotlight
            </h2>
            <p className="text-xs sm:text-sm text-sky-200/60">
              Click &quot;Show Answer&quot; to test your memory before checking the ideal board-marking scheme
            </p>
          </div>

          <button
            onClick={onNavigateQuestionBank}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/30 transition-colors"
          >
            Open Complete Question Bank <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-4">
          {CHAPTERS_DATA[0].questions.slice(0, 2).map((q) => {
            const isRevealed = revealedQuestionId === q.id;
            return (
              <div
                key={q.id}
                className="p-4 sm:p-5 rounded-2xl bg-[#092244] border border-sky-800/40 space-y-3"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-sky-300 bg-[#061830] px-2.5 py-0.5 rounded border border-sky-800/50">
                    {q.typeLabel} • {q.marks} Mark{q.marks > 1 ? 's' : ''}
                  </span>
                  {q.year && (
                    <span className="font-semibold text-sky-200/70 bg-[#061830] px-2 py-0.5 rounded border border-sky-800/50">
                      {q.year}
                    </span>
                  )}
                </div>

                <p className="text-sm font-semibold text-white">
                  {q.question}
                </p>

                {q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-[#061830] border border-sky-900/60 text-sky-100 font-medium"
                      >
                        {String.fromCharCode(65 + idx)}. {opt}
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-1 flex items-center justify-between">
                  <button
                    onClick={() =>
                      setRevealedQuestionId(isRevealed ? null : q.id)
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 py-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    {isRevealed ? 'Hide Answer' : 'Show Answer'}
                  </button>
                  <span className="text-[11px] text-sky-300/50">
                    From: The Rise of Nationalism in Europe
                  </span>
                </div>

                {isRevealed && (
                  <div className="mt-2 p-3.5 rounded-xl bg-[#061830] border border-emerald-500/50 text-xs text-slate-100 space-y-1.5 animate-in fade-in duration-150">
                    <div className="font-bold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Model Answer:
                    </div>
                    <p className="whitespace-pre-line text-slate-200 leading-relaxed font-normal">
                      {q.answer}
                    </p>
                    {q.explanation && (
                      <p className="text-[11px] text-sky-200/60 pt-1 border-t border-sky-900/40">
                        <strong>Explanation:</strong> {q.explanation}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
