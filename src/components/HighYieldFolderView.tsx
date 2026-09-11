import React from 'react';
import {
  FolderOpen,
  ArrowLeft,
  Sparkles,
  Flame,
  Award,
  BookOpen,
} from 'lucide-react';
import { Chapter, ClassLevel } from '../types/sst';
import { PopularHighYieldFolder } from './PopularHighYieldFolder';

interface HighYieldFolderViewProps {
  onSelectChapter: (
    chapter: Chapter,
    targetTab?: 'notes' | 'revision' | 'questions' | 'quiz'
  ) => void;
  onBack: () => void;
  onNavigateClass: (cls: ClassLevel) => void;
}

export const HighYieldFolderView: React.FC<HighYieldFolderViewProps> = ({
  onSelectChapter,
  onBack,
  onNavigateClass,
}) => {
  return (
    <div className="space-y-8 pb-20 text-slate-100 max-w-7xl mx-auto">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-2">
          <button
            id="high-yield-backspace-btn"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold border border-blue-400/40 shadow-xs transition-colors group"
            title="Go back (Backspace key)"
          >
            <span className="font-mono text-sm leading-none font-bold text-sky-200 group-hover:text-white">⌫</span>
            <span>Backspace</span>
            <kbd className="hidden sm:inline-block text-[9px] px-1 py-0.2 bg-blue-800/80 rounded font-mono border border-blue-400/30">⌫</kbd>
          </button>

          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#08203e] hover:bg-[#0c2a52] text-sky-200 text-xs font-semibold border border-sky-800/50 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-sky-300/60">
          <span>SSTPadho</span>
          <span>/</span>
          <span className="text-sky-300 font-bold">High-Yield Dossier</span>
        </div>
      </div>

      {/* Hero Header for High Yield View */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#061e3d] via-[#05172e] to-[#041224] p-6 sm:p-10 border border-sky-800/50 shadow-2xl">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/50 text-amber-300 text-xs font-semibold">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Curated Exam Dossier • NCERT &amp; CBSE Syllabus</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading flex items-center gap-3">
            <FolderOpen className="w-9 h-9 sm:w-11 sm:h-11 text-sky-400" />
            <span>Popular &amp; High-Yield Chapters</span>
          </h1>

          <p className="text-sm sm:text-base text-sky-200/80 leading-relaxed font-normal">
            The master study folder containing high-weightage chapters across Classes 6 to 12.
            Filter by your class or subject to access concise short notes, 10-minute revision summaries,
            board exam PYQs, and chapter MCQ tests.
          </p>
        </div>
      </div>

      {/* Main Folder Component */}
      <PopularHighYieldFolder
        onSelectChapter={onSelectChapter}
        defaultOpen={true}
        standalone={true}
        onNavigateClass={onNavigateClass}
      />

      {/* Bottom Backspace Action */}
      <div className="pt-6 border-t border-sky-900/60 flex items-center justify-center">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-all border border-blue-400/40"
        >
          <span className="font-mono text-sm font-bold">⌫</span>
          <span>Backspace to Previous Screen</span>
          <kbd className="text-[10px] px-1.5 py-0.5 bg-blue-800/80 rounded font-mono">⌫</kbd>
        </button>
      </div>
    </div>
  );
};
