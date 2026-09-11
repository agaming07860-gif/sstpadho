import React, { useState, useMemo } from 'react';
import {
  Folder,
  FolderOpen,
  Sparkles,
  Flame,
  Search,
  BookOpen,
  Zap,
  HelpCircle,
  Award,
  ChevronDown,
  ChevronUp,
  Clock,
  Check,
  Filter,
  CheckCircle2,
  X,
  ExternalLink,
  GraduationCap,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Chapter, ClassLevel, SubjectKey } from '../types/sst';
import { CHAPTERS_DATA } from '../data/chaptersData';
import { CLASS_LEVELS, SUBJECTS } from '../data/subjects';
import { useProgress } from '../context/ProgressContext';

interface PopularHighYieldFolderProps {
  onSelectChapter: (
    chapter: Chapter,
    targetTab?: 'notes' | 'revision' | 'questions' | 'quiz'
  ) => void;
  defaultOpen?: boolean;
  initialClassFilter?: ClassLevel | 'all';
  onNavigateClass?: (cls: ClassLevel) => void;
  standalone?: boolean;
}

export const PopularHighYieldFolder: React.FC<PopularHighYieldFolderProps> = ({
  onSelectChapter,
  defaultOpen = false,
  initialClassFilter = 'all',
  onNavigateClass,
  standalone = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || standalone);
  const [selectedClass, setSelectedClass] = useState<ClassLevel | 'all'>(initialClassFilter);
  const [selectedSubject, setSelectedSubject] = useState<SubjectKey | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { isChapterCompleted, toggleChapterCompleted, progress } = useProgress();

  // All high-yield / popular chapters
  const allHighYieldChapters = useMemo(() => {
    return CHAPTERS_DATA.filter((c) => c.popular);
  }, []);

  // Filtered chapters
  const filteredChapters = useMemo(() => {
    return allHighYieldChapters.filter((c) => {
      if (selectedClass !== 'all' && c.classLevel !== selectedClass) return false;
      if (selectedSubject !== 'all' && c.subject !== selectedSubject) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchTitle = c.title.toLowerCase().includes(query);
        const matchOverview = c.overview.toLowerCase().includes(query);
        const matchSubject = c.subject.toLowerCase().includes(query);
        const matchConcepts = c.keyConcepts?.some((k) =>
          k.term.toLowerCase().includes(query) || k.explanation.toLowerCase().includes(query)
        );
        return matchTitle || matchOverview || matchSubject || matchConcepts;
      }
      return true;
    });
  }, [allHighYieldChapters, selectedClass, selectedSubject, searchQuery]);

  // Counts by class
  const countsByClass = useMemo(() => {
    const counts: Record<string, number> = { all: allHighYieldChapters.length };
    CLASS_LEVELS.forEach((lvl) => {
      counts[lvl] = allHighYieldChapters.filter((c) => c.classLevel === lvl).length;
    });
    return counts;
  }, [allHighYieldChapters]);

  // Completed count among high-yield
  const completedHighYieldCount = useMemo(() => {
    return allHighYieldChapters.filter((c) => isChapterCompleted(c.id)).length;
  }, [allHighYieldChapters, isChapterCompleted]);

  // High yield weightage tag helper
  const getWeightageTag = (chapter: Chapter) => {
    if (chapter.classLevel === 10) {
      return { text: '🔥 Board Exam Priority (8–10 Marks)', color: 'text-amber-300 bg-amber-950/80 border-amber-800/60' };
    }
    if (chapter.classLevel === 12) {
      return { text: '🏛️ Senior Secondary Core (8–10 Marks)', color: 'text-emerald-300 bg-emerald-950/80 border-emerald-800/60' };
    }
    if (chapter.classLevel === 9) {
      return { text: '🎯 Board Foundation Milestone', color: 'text-sky-300 bg-sky-950/80 border-sky-800/60' };
    }
    return { text: '⭐ NCERT High-Yield Focus', color: 'text-indigo-300 bg-indigo-950/80 border-indigo-800/60' };
  };

  const subjectBadges: Record<SubjectKey, { label: string; color: string; border: string }> = {
    history: { label: 'HISTORY', color: 'text-amber-400 bg-amber-950/60', border: 'border-amber-800/40' },
    geography: { label: 'GEOGRAPHY', color: 'text-emerald-400 bg-emerald-950/60', border: 'border-emerald-800/40' },
    civics: { label: 'CIVICS', color: 'text-sky-400 bg-sky-950/60', border: 'border-sky-800/40' },
    economics: { label: 'ECONOMICS', color: 'text-purple-400 bg-purple-950/60', border: 'border-purple-800/40' },
  };

  return (
    <div className={`w-full ${standalone ? '' : 'my-8'}`}>
      {/* Outer Folder Container */}
      <div
        className={`relative transition-all duration-300 rounded-3xl border ${
          isOpen
            ? 'bg-[#051833] border-sky-600/70 shadow-2xl shadow-sky-950/90 ring-1 ring-sky-500/30'
            : 'bg-gradient-to-br from-[#061e3d] via-[#05172e] to-[#041224] border-sky-700/50 hover:border-sky-400/80 shadow-xl hover:shadow-2xl hover:shadow-sky-950/80'
        }`}
      >
        {/* Top Folder Tab (Skeuomorphic Folder Ear) */}
        <div className="flex items-center justify-between px-6 pt-4 sm:px-8 sm:pt-6">
          <div className="flex items-center gap-2">
            {/* Folder Tab Shape */}
            <div
              className={`flex items-center gap-2 px-4 py-1.5 rounded-t-xl text-xs font-bold font-mono tracking-wider uppercase border-t border-x transition-colors ${
                isOpen
                  ? 'bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-600/40'
                  : 'bg-[#082245] text-sky-300 border-sky-700/60 hover:bg-[#0c2e5a]'
              }`}
            >
              {isOpen ? (
                <FolderOpen className="w-4 h-4 text-white" />
              ) : (
                <Folder className="w-4 h-4 text-sky-400" />
              )}
              <span>DOSSIER • HIGH-YIELD &amp; POPULAR</span>
            </div>

            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-950/60 text-amber-300 border border-amber-800/40">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>{allHighYieldChapters.length} Chapters Enclosed</span>
            </span>
          </div>

          {/* Toggle Button */}
          {!standalone && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                isOpen
                  ? 'bg-[#0b284d] text-sky-200 hover:bg-[#0f3463] border border-sky-700/50'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30'
              }`}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <>
                  <span>Close Folder</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Open Folder</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Folder Cover / Header Banner */}
        <div
          onClick={() => {
            if (!standalone) setIsOpen(!isOpen);
          }}
          className={`px-6 pb-6 pt-3 sm:px-8 sm:pb-7 cursor-pointer select-none transition-colors ${
            isOpen ? '' : 'hover:bg-white/[0.02]'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-blue-500/20 text-sky-400 border border-blue-500/30">
                  {isOpen ? (
                    <FolderOpen className="w-6 h-6 text-sky-300" />
                  ) : (
                    <Folder className="w-6 h-6 text-sky-400 animate-pulse" />
                  )}
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight font-heading flex items-center gap-2.5">
                    <span>Popular &amp; High-Yield Chapters Folder</span>
                    {!isOpen && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-sky-950/80 text-sky-300 border border-sky-800/50">
                        Click to Open
                      </span>
                    )}
                  </h2>
                  <p className="text-xs sm:text-sm text-sky-200/70 font-normal">
                    Most frequently tested NCERT &amp; CBSE chapters across Classes 6–12 with proven exam recurrence.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side stats pills */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="px-3.5 py-2 rounded-2xl bg-[#08203e] border border-sky-800/50 text-left">
                <div className="text-[10px] text-sky-300/60 uppercase font-bold tracking-wider">
                  Total High-Yield
                </div>
                <div className="text-lg font-black text-white font-mono flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>{allHighYieldChapters.length}</span>
                  <span className="text-xs text-sky-300 font-normal">Chapters</span>
                </div>
              </div>

              <div className="px-3.5 py-2 rounded-2xl bg-[#08203e] border border-sky-800/50 text-left">
                <div className="text-[10px] text-sky-300/60 uppercase font-bold tracking-wider">
                  Completed
                </div>
                <div className="text-lg font-black text-emerald-400 font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>
                    {completedHighYieldCount}/{allHighYieldChapters.length}
                  </span>
                </div>
              </div>

              {/* Big CTA button when folder is closed */}
              {!isOpen && !standalone && (
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center gap-2 group transition-transform group-hover:scale-105"
                >
                  <FolderOpen className="w-4 h-4" />
                  <span>Open Folder</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>

          {/* Sneak peek preview tabs when closed */}
          {!isOpen && (
            <div className="mt-5 pt-4 border-t border-sky-900/40 flex items-center justify-between text-xs text-sky-300/80">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-sky-200">Inside this folder:</span>
                <span className="px-2 py-0.5 rounded bg-[#092244] border border-sky-800/40 text-sky-200 text-[11px]">
                  Class 10: 14 Chapters (Board Priority)
                </span>
                <span className="px-2 py-0.5 rounded bg-[#092244] border border-sky-800/40 text-sky-200 text-[11px]">
                  Class 9: 9 Chapters
                </span>
                <span className="px-2 py-0.5 rounded bg-[#092244] border border-sky-800/40 text-sky-200 text-[11px]">
                  Class 12: 9 Chapters
                </span>
                <span className="px-2 py-0.5 rounded bg-[#092244] border border-sky-800/40 text-sky-200 text-[11px]">
                  Classes 6–8: 28 Chapters
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-1 text-sky-400 font-bold group-hover:text-white">
                <span>Click to unfold folder</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          )}
        </div>

        {/* FOLDER INTERIOR (When Opened) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-sky-800/60 bg-[#031327]/90 backdrop-blur-xl rounded-b-3xl"
            >
              {/* Folder Interior Control Desk */}
              <div className="p-6 sm:p-8 space-y-6 border-b border-sky-950/80">
                {/* Search Bar + Quick Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="relative flex-1 max-w-md">
                    <Search className="w-4 h-4 text-sky-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search high-yield chapters, topics, or keywords..."
                      className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#071d37] border border-sky-800/60 focus:border-sky-400 focus:outline-none text-xs sm:text-sm text-white placeholder-sky-300/40 transition-colors shadow-inner"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-400 hover:text-white"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Right: Reset or Close */}
                  <div className="flex items-center gap-2">
                    {(selectedClass !== 'all' || selectedSubject !== 'all' || searchQuery) && (
                      <button
                        onClick={() => {
                          setSelectedClass('all');
                          setSelectedSubject('all');
                          setSearchQuery('');
                        }}
                        className="px-3 py-2 rounded-xl bg-[#092244] hover:bg-[#0d2e5a] text-sky-300 text-xs font-semibold border border-sky-800/40 transition-colors"
                      >
                        Reset Filters
                      </button>
                    )}

                    {!standalone && (
                      <button
                        onClick={() => setIsOpen(false)}
                        className="px-3.5 py-2 rounded-xl bg-[#08203e] hover:bg-rose-950/70 hover:text-rose-300 text-sky-300 text-xs font-semibold border border-sky-800/50 transition-colors flex items-center gap-1.5"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>Close Folder</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Filter 1: Class Selection Tabs */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-sky-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                      <span>Filter by Class:</span>
                    </span>
                    <span className="text-[11px] text-sky-300/60 font-mono">
                      Showing {filteredChapters.length} chapters
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <button
                      onClick={() => setSelectedClass('all')}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        selectedClass === 'all'
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 ring-1 ring-blue-400'
                          : 'bg-[#071d37] text-sky-200/80 hover:bg-[#0c2a52] border border-sky-900/60'
                      }`}
                    >
                      All Classes ({countsByClass['all']})
                    </button>

                    {CLASS_LEVELS.map((cls) => {
                      const count = countsByClass[cls] || 0;
                      const isSelected = selectedClass === cls;
                      const isBoard = cls === 10;
                      return (
                        <button
                          key={cls}
                          onClick={() => setSelectedClass(cls)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 ring-1 ring-blue-400'
                              : 'bg-[#071d37] text-sky-200/80 hover:bg-[#0c2a52] border border-sky-900/60'
                          }`}
                        >
                          <span>Class {cls}</span>
                          <span
                            className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                              isSelected ? 'bg-white/20 text-white' : 'bg-sky-950 text-sky-400'
                            }`}
                          >
                            {count}
                          </span>
                          {isBoard && !isSelected && (
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" title="Board Exam" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Filter 2: Subject Selection Pills */}
                <div className="flex items-center gap-2 flex-wrap pt-1">
                  <span className="text-[11px] font-bold text-sky-300 uppercase tracking-wider font-mono mr-1">
                    Subject:
                  </span>
                  <button
                    onClick={() => setSelectedSubject('all')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      selectedSubject === 'all'
                        ? 'bg-sky-600 text-white'
                        : 'bg-[#071d37] text-sky-200/70 hover:bg-[#0b284e] border border-sky-900/60'
                    }`}
                  >
                    All Subjects
                  </button>

                  {(['history', 'geography', 'civics', 'economics'] as SubjectKey[]).map((key) => {
                    const sub = SUBJECTS[key];
                    const isSelected = selectedSubject === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setSelectedSubject(key)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-sky-600 text-white shadow-sm'
                            : 'bg-[#071d37] text-sky-200/70 hover:bg-[#0b284e] border border-sky-900/60'
                        }`}
                      >
                        <span>{sub.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Folder Chapters Grid */}
              <div className="p-6 sm:p-8">
                {filteredChapters.length === 0 ? (
                  <div className="p-12 text-center rounded-2xl bg-[#06182e] border border-dashed border-sky-900/60 max-w-lg mx-auto space-y-3">
                    <Folder className="w-10 h-10 text-sky-400/50 mx-auto" />
                    <h3 className="text-base font-bold text-white">No chapters match your folder filter</h3>
                    <p className="text-xs text-sky-300/60">
                      Try clearing search terms or selecting a different class or subject.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedClass('all');
                        setSelectedSubject('all');
                        setSearchQuery('');
                      }}
                      className="px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
                    >
                      Show All High-Yield Chapters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredChapters.map((ch, idx) => {
                      const formattedNum = String(ch.chapterNumber || idx + 1).padStart(2, '0');
                      const weightage = getWeightageTag(ch);
                      const subBadge = subjectBadges[ch.subject];
                      const completed = isChapterCompleted(ch.id);
                      const quizScore = progress.quizScores[ch.id];

                      return (
                        <div
                          key={ch.id}
                          className="bg-[#061a33] rounded-2xl border border-sky-900/60 hover:border-sky-500/80 transition-all duration-300 p-6 flex flex-col justify-between group shadow-lg hover:shadow-2xl hover:shadow-sky-950/80 relative"
                        >
                          <div>
                            {/* Card Top: Number badge, Class, Read Time, and Done Checkbox */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-10 h-8 rounded-lg bg-[#0b2b52] border border-sky-700/40 text-sky-300 font-bold text-xs flex items-center justify-center font-mono shadow-inner">
                                  {formattedNum}
                                </div>
                                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#08203e] text-sky-300 border border-sky-800/40">
                                  Class {ch.classLevel}
                                </span>
                              </div>

                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1 text-sky-300/60 text-xs">
                                  <Clock className="w-3 h-3 text-sky-400/70" />
                                  <span>{ch.estimatedReadTime}</span>
                                </div>

                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleChapterCompleted(ch.id);
                                  }}
                                  className={`p-1.5 rounded-lg transition-all ${
                                    completed
                                      ? 'bg-emerald-950/90 text-emerald-400 border border-emerald-700/60'
                                      : 'bg-[#092244] text-sky-300/50 hover:text-white border border-sky-800/40'
                                  }`}
                                  title={completed ? 'Completed (Click to unmark)' : 'Mark completed'}
                                >
                                  <Check className="w-3 h-3" />
                                </button>
                              </div>
                            </div>

                            {/* Weightage Banner */}
                            <div className="mt-3">
                              <span
                                className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${weightage.color}`}
                              >
                                {weightage.text}
                              </span>
                            </div>

                            {/* Subject Tag */}
                            <div className="text-[11px] font-bold tracking-widest text-sky-400 uppercase mt-2 mb-1.5">
                              {subBadge?.label || ch.subject.toUpperCase()}
                            </div>

                            {/* Title */}
                            <h3
                              onClick={() => onSelectChapter(ch)}
                              className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-sky-300 transition-colors cursor-pointer"
                            >
                              {ch.title}
                            </h3>

                            {/* Overview */}
                            <p className="text-xs text-slate-300/75 line-clamp-3 leading-relaxed mt-2 mb-4 font-normal">
                              {ch.overview}
                            </p>

                            {/* Highlights inside */}
                            <div className="flex items-center gap-2 flex-wrap mb-4 text-[11px] text-sky-300/70 font-mono">
                              {ch.oneShotRevision?.goldenPoints && (
                                <span className="px-2 py-0.5 rounded bg-[#092244] border border-sky-900/50">
                                  💡 {ch.oneShotRevision.goldenPoints.length} Golden Points
                                </span>
                              )}
                              {ch.keyConcepts && (
                                <span className="px-2 py-0.5 rounded bg-[#092244] border border-sky-900/50">
                                  🔑 {ch.keyConcepts.length} Key Concepts
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Bottom Direct Action Modules */}
                          <div className="pt-3 border-t border-sky-950/80 space-y-2.5">
                            <div
                              onClick={() => onSelectChapter(ch)}
                              className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 group-hover:text-sky-300 transition-all group-hover:translate-x-1"
                            >
                              Open study chapter →
                            </div>

                            <div className="grid grid-cols-4 gap-1.5 pt-0.5">
                              <button
                                onClick={() => onSelectChapter(ch, 'notes')}
                                className="flex items-center justify-center gap-1 py-1.5 rounded-lg text-[11px] font-semibold bg-[#092244] text-sky-200 hover:bg-blue-600 hover:text-white transition-colors border border-sky-800/40"
                                title="Comprehensive Notes"
                              >
                                <BookOpen className="w-3 h-3" />
                                <span>Notes</span>
                              </button>
                              <button
                                onClick={() => onSelectChapter(ch, 'revision')}
                                className="flex items-center justify-center gap-1 py-1.5 rounded-lg text-[11px] font-semibold bg-[#092244] text-amber-300 hover:bg-amber-600 hover:text-white transition-colors border border-sky-800/40"
                                title="10-Min Revision Mode"
                              >
                                <Zap className="w-3 h-3" />
                                <span>10-Min</span>
                              </button>
                              <button
                                onClick={() => onSelectChapter(ch, 'questions')}
                                className="flex items-center justify-center gap-1 py-1.5 rounded-lg text-[11px] font-semibold bg-[#092244] text-sky-200 hover:bg-blue-600 hover:text-white transition-colors border border-sky-800/40"
                                title="NCERT Questions & PYQs"
                              >
                                <HelpCircle className="w-3 h-3" />
                                <span>Q&amp;A</span>
                              </button>
                              <button
                                onClick={() => onSelectChapter(ch, 'quiz')}
                                className="flex items-center justify-center gap-1 py-1.5 rounded-lg text-[11px] font-semibold bg-[#092244] text-emerald-300 hover:bg-emerald-600 hover:text-white transition-colors border border-sky-800/40"
                                title="Chapter MCQ Quiz"
                              >
                                <Award className="w-3 h-3" />
                                <span>Quiz</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Folder Footer Bar */}
                <div className="mt-8 pt-6 border-t border-sky-950/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-300/70">
                  <div className="flex items-center gap-2">
                    <FolderOpen className="w-4 h-4 text-sky-400" />
                    <span>
                      High-Yield Study Dossier • {filteredChapters.length} of {allHighYieldChapters.length} Chapters Displayed
                    </span>
                  </div>

                  {!standalone && (
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-4 py-1.5 rounded-xl bg-[#08203e] hover:bg-[#0c2a52] text-sky-200 text-xs font-semibold border border-sky-800/40 transition-colors"
                    >
                      Close Folder ▲
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
