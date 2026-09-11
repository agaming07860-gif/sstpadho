import React, { useState } from 'react';
import {
  Zap,
  Clock,
  Sparkles,
  BookOpen,
  HelpCircle,
  RotateCcw,
  Printer,
  CheckCircle2,
  ChevronRight,
  Bookmark,
} from 'lucide-react';
import { CHAPTERS_DATA } from '../data/chaptersData';
import { Chapter } from '../types/sst';
import { SUBJECTS } from '../data/subjects';

interface RevisionModeViewProps {
  onBack?: () => void;
}

export const RevisionModeView: React.FC<RevisionModeViewProps> = ({ onBack }) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>(CHAPTERS_DATA[0].id);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);

  const currentChapter =
    CHAPTERS_DATA.find((c) => c.id === selectedChapterId) || CHAPTERS_DATA[0];
  const subMeta = SUBJECTS[currentChapter.subject];

  return (
    <div className="space-y-8 pb-16">
      {/* Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-rose-900 via-red-950 to-slate-900 text-white shadow-xl space-y-3 border border-rose-800/40">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {onBack && (
              <button
                id="revision-backspace-btn"
                onClick={onBack}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow-md border border-rose-400/40 transition-all"
                title="Go back (Backspace key)"
              >
                <span className="font-mono text-sm leading-none font-bold">⌫</span>
                <span>Backspace</span>
                <kbd className="hidden sm:inline-block text-[9px] px-1 py-0.2 bg-rose-800/80 rounded font-mono border border-rose-400/30">⌫</kbd>
              </button>
            )}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-500/30">
              <Zap className="w-3.5 h-3.5 text-rose-400" />
              Last-Minute Exam Review
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition-colors no-print"
          >
            <Printer className="w-3.5 h-3.5 text-rose-300" />
            <span className="hidden sm:inline">Print Revision Sheet</span>
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
          ⚡ 10-Minute Rapid Revision Hub
        </h1>
        <p className="text-xs sm:text-sm text-rose-200 max-w-2xl leading-relaxed">
          Designed for test eve and morning revision. Get the entire chapter boiled down into key
          concepts, flashcards, date chronologies, and examiner traps.
        </p>

        {/* Chapter Switcher Bar */}
        <div className="pt-2 flex flex-wrap items-center gap-2 no-print">
          <span className="text-xs font-bold text-rose-300">Select Chapter:</span>
          <select
            value={selectedChapterId}
            onChange={(e) => {
              setSelectedChapterId(e.target.value);
              setActiveCardIndex(0);
              setCardFlipped(false);
            }}
            className="p-2 rounded-xl bg-white/15 text-white border border-white/20 text-xs font-bold focus:outline-none focus:bg-slate-900"
          >
            {CHAPTERS_DATA.map((ch) => (
              <option key={ch.id} value={ch.id} className="text-slate-900">
                Class {ch.classLevel} • {ch.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Selected Chapter Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${subMeta.badgeBg} ${subMeta.badgeText}`}
            >
              Class {currentChapter.classLevel} • {subMeta.label}
            </span>
            <span className="text-xs font-semibold text-slate-400">
              Chapter {currentChapter.chapterNumber}
            </span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 font-heading">
            {currentChapter.title}
          </h2>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>Target: 10 mins</span>
          </div>
          <div>•</div>
          <div>{currentChapter.flashcards.length} Flashcards</div>
          <div>•</div>
          <div>{currentChapter.importantDates.length} Key Dates</div>
        </div>
      </div>

      {/* Interactive Active Recall Flashcard Deck */}
      {currentChapter.flashcards.length > 0 && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 font-heading flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Active Recall Flashcards
            </h3>
            <span className="text-xs font-bold text-slate-400">
              {activeCardIndex + 1} / {currentChapter.flashcards.length}
            </span>
          </div>

          <div
            onClick={() => setCardFlipped(!cardFlipped)}
            className={`min-h-[180px] p-6 rounded-2xl cursor-pointer flex flex-col justify-center items-center text-center transition-all border shadow-xs ${
              cardFlipped
                ? 'bg-amber-50 border-amber-300 text-slate-900'
                : 'bg-slate-50 border-slate-200 text-slate-800'
            }`}
          >
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              {cardFlipped ? 'Model Answer' : 'Question Prompt (Click to Flip)'}
            </div>
            <div className="text-base sm:text-lg font-bold max-w-lg leading-snug whitespace-pre-line">
              {cardFlipped
                ? currentChapter.flashcards[activeCardIndex].back
                : currentChapter.flashcards[activeCardIndex].front}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => {
                setCardFlipped(false);
                setActiveCardIndex((prev) =>
                  prev > 0 ? prev - 1 : currentChapter.flashcards.length - 1
                );
              }}
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              Previous
            </button>
            <button
              onClick={() => setCardFlipped(!cardFlipped)}
              className="px-4 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-xs hover:bg-slate-800"
            >
              Flip Card
            </button>
            <button
              onClick={() => {
                setCardFlipped(false);
                setActiveCardIndex((prev) =>
                  prev < currentChapter.flashcards.length - 1 ? prev + 1 : 0
                );
              }}
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Grid: Golden Points & Mind Map */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Golden Takeaway Points */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-3">
          <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5 font-heading">
            <CheckCircle2 className="w-4 h-4 text-amber-600" />
            Golden Points to Memorize
          </h3>
          <ul className="space-y-2 text-xs text-slate-700">
            {currentChapter.oneShotRevision.goldenPoints.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2 p-2 rounded-xl bg-amber-50/60">
                <span className="text-amber-600 font-bold mt-0.5">✓</span>
                <span className="leading-relaxed">{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mind Map Flow */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-3">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 font-heading">
            <BookOpen className="w-4 h-4 text-slate-600" />
            Chapter Flow Hierarchy
          </h3>
          <div className="space-y-2">
            {currentChapter.oneShotRevision.mindMapSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 text-xs font-medium text-slate-800"
              >
                <span className="w-5 h-5 rounded-md bg-slate-200 text-slate-700 text-[10px] font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dates Cheat Sheet Table */}
      {currentChapter.importantDates.length > 0 && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-heading">
            📌 Rapid Date &amp; Chronology Recall
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-100 text-slate-800 font-bold uppercase text-[10px]">
                <tr>
                  <th className="p-2.5 rounded-l-xl">Date / Year</th>
                  <th className="p-2.5">Milestone Event</th>
                  <th className="p-2.5 rounded-r-xl">Significance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-normal">
                {currentChapter.importantDates.map((d, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-2.5 font-bold text-amber-800 whitespace-nowrap">
                      {d.date}
                    </td>
                    <td className="p-2.5 font-semibold text-slate-900">{d.event}</td>
                    <td className="p-2.5 text-slate-600">{d.significance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Bottom Backspace Action */}
      {onBack && (
        <div className="pt-6 border-t border-slate-700/40 flex items-center justify-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white shadow-lg transition-all border border-rose-400/40"
          >
            <span className="font-mono text-sm font-bold">⌫</span>
            <span>Backspace to Previous Screen</span>
            <kbd className="text-[10px] px-1.5 py-0.5 bg-rose-800/80 rounded font-mono">⌫</kbd>
          </button>
        </div>
      )}
    </div>
  );
};
