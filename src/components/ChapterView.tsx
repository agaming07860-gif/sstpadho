import React, { useState } from 'react';
import {
  BookOpen,
  Zap,
  HelpCircle,
  Award,
  Printer,
  Bookmark,
  CheckCircle2,
  Calendar,
  User,
  ListOrdered,
  Eye,
  ChevronRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Share2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Chapter } from '../types/sst';
import { SUBJECTS } from '../data/subjects';
import { useProgress } from '../context/ProgressContext';

interface ChapterViewProps {
  chapter: Chapter;
  initialTab?: 'notes' | 'revision' | 'questions' | 'quiz';
  onBack: () => void;
  onSelectAnotherChapter?: (chapter: Chapter) => void;
  onOpenPrintModal: (chapter: Chapter) => void;
}

export const ChapterView: React.FC<ChapterViewProps> = ({
  chapter,
  initialTab = 'notes',
  onBack,
  onOpenPrintModal,
}) => {
  const {
    isChapterCompleted,
    toggleChapterCompleted,
    isChapterBookmarked,
    toggleBookmarkChapter,
    saveQuizScore,
    progress,
  } = useProgress();

  const [activeTab, setActiveTab] = useState<'notes' | 'revision' | 'questions' | 'quiz'>(initialTab);
  const [notesSubTab, setNotesSubTab] = useState<
    'short' | 'detailed' | 'concepts' | 'dates' | 'people' | 'definitions' | 'figures'
  >('short');

  // Flashcards state
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Question bank state
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [selectedQuestionType, setSelectedQuestionType] = useState<string>('all');

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const subMeta = SUBJECTS[chapter.subject];
  const isCompleted = isChapterCompleted(chapter.id);
  const isBookmarked = isChapterBookmarked(chapter.id);

  // MCQ questions for quiz
  const mcqQuestions = chapter.questions.filter((q) => q.type === 'mcq' && q.options);

  const toggleAnswer = (qId: string) => {
    setRevealedAnswers((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleSelectQuizOption = (qIdx: number, optIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
    let correctCount = 0;
    mcqQuestions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correctOptionIndex) {
        correctCount += 1;
      }
    });

    saveQuizScore(chapter.id, correctCount, mcqQuestions.length);

    if (correctCount >= Math.ceil(mcqQuestions.length * 0.7)) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        console.error('Confetti error', e);
      }
    }
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const filteredQuestions = chapter.questions.filter((q) => {
    if (selectedQuestionType === 'all') return true;
    return q.type === selectedQuestionType;
  });

  return (
    <div className="space-y-6 pb-20">
      {/* Top Breadcrumb & Controls */}
      <div className="flex items-center justify-between no-print gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <button
            id="chapter-backspace-btn"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-3.5 py-1.5 rounded-xl border border-blue-400/40 shadow-xs transition-colors group"
            title="Go back (Backspace key)"
          >
            <span className="font-mono text-sm leading-none font-bold text-sky-200 group-hover:text-white">⌫</span>
            <span>Backspace</span>
            <kbd className="hidden sm:inline-block text-[9px] px-1 py-0.2 bg-blue-800/80 rounded font-mono border border-blue-400/30">⌫</kbd>
          </button>

          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to</span> Class {chapter.classLevel}
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* Bookmark Button */}
          <button
            onClick={() => toggleBookmarkChapter(chapter.id)}
            className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              isBookmarked
                ? 'bg-amber-100 border-amber-300 text-amber-800'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
            title="Bookmark Chapter"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span className="hidden sm:inline">{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
          </button>

          {/* Mark Completed Button */}
          <button
            onClick={() => toggleChapterCompleted(chapter.id)}
            className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              isCompleted
                ? 'bg-emerald-100 border-emerald-300 text-emerald-800'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-600' : ''}`} />
            <span className="hidden sm:inline">{isCompleted ? 'Completed' : 'Mark Completed'}</span>
          </button>

          {/* Printable / Download PDF Button */}
          <button
            onClick={() => onOpenPrintModal(chapter)}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
            title="Print or Export Formatted Notes"
          >
            <Printer className="w-4 h-4 text-amber-400" />
            <span>Print Notes</span>
          </button>
        </div>
      </div>

      {/* Chapter Header Box */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg ${subMeta.badgeBg} ${subMeta.badgeText}`}
          >
            Class {chapter.classLevel} • {subMeta.label}
          </span>
          <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
            Chapter {chapter.chapterNumber}
          </span>
          <span className="text-xs font-medium text-slate-400">
            • {chapter.estimatedReadTime}
          </span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading">
            {chapter.title}
          </h1>
          <p className="text-sm text-slate-500 font-medium mt-1">
            {chapter.subtitle}
          </p>
        </div>

        {/* Chapter Overview Accordion Box */}
        <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/70 text-xs text-slate-700 leading-relaxed">
          <div className="font-bold text-amber-900 uppercase tracking-wider text-[11px] mb-1 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            Chapter Overview
          </div>
          <p>{chapter.overview}</p>
        </div>
      </div>

      {/* Main 4 Navigation Tabs */}
      <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 text-xs font-bold overflow-x-auto no-print">
        <button
          onClick={() => setActiveTab('notes')}
          className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'notes'
              ? 'bg-white text-amber-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <BookOpen className="w-4 h-4 text-amber-600" />
          📝 Complete Notes
        </button>

        <button
          onClick={() => setActiveTab('revision')}
          className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'revision'
              ? 'bg-white text-rose-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Zap className="w-4 h-4 text-rose-600" />
          ⚡ 10-Min Revision
        </button>

        <button
          onClick={() => setActiveTab('questions')}
          className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'questions'
              ? 'bg-white text-indigo-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <HelpCircle className="w-4 h-4 text-indigo-600" />
          ❓ Question Bank ({chapter.questions.length})
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
            activeTab === 'quiz'
              ? 'bg-white text-emerald-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Award className="w-4 h-4 text-emerald-600" />
          🎯 Chapter Quiz
        </button>
      </div>

      {/* ========================================================= */}
      {/* TAB 1: COMPLETE NOTES SYSTEM (Organized into sub-categories) */}
      {/* ========================================================= */}
      {activeTab === 'notes' && (
        <div className="space-y-6">
          {/* Notes Sub-tabs Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-semibold text-slate-600">
            <button
              onClick={() => setNotesSubTab('short')}
              className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                notesSubTab === 'short'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-50 border border-slate-200'
              }`}
            >
              📑 Short Notes
            </button>
            <button
              onClick={() => setNotesSubTab('detailed')}
              className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                notesSubTab === 'detailed'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-50 border border-slate-200'
              }`}
            >
              📖 Detailed Explanation
            </button>
            <button
              onClick={() => setNotesSubTab('concepts')}
              className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                notesSubTab === 'concepts'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-50 border border-slate-200'
              }`}
            >
              🧠 Key Concepts &amp; Tips ({chapter.keyConcepts.length})
            </button>
            <button
              onClick={() => setNotesSubTab('dates')}
              className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                notesSubTab === 'dates'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-50 border border-slate-200'
              }`}
            >
              📌 Dates &amp; Events ({chapter.importantDates.length})
            </button>
            {chapter.importantPeople.length > 0 && (
              <button
                onClick={() => setNotesSubTab('people')}
                className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                  notesSubTab === 'people'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white hover:bg-slate-50 border border-slate-200'
                }`}
              >
                👤 Important People ({chapter.importantPeople.length})
              </button>
            )}
            <button
              onClick={() => setNotesSubTab('definitions')}
              className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                notesSubTab === 'definitions'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-50 border border-slate-200'
              }`}
            >
              📖 Definitions ({chapter.definitions.length})
            </button>
            {chapter.importantFigures.length > 0 && (
              <button
                onClick={() => setNotesSubTab('figures')}
                className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                  notesSubTab === 'figures'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white hover:bg-slate-50 border border-slate-200'
                }`}
              >
                📊 Figures &amp; Tables
              </button>
            )}
          </div>

          {/* Sub-tab Content */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            {/* 1. Short Notes */}
            {notesSubTab === 'short' && (
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    📑 Short Notes (Quick Review Points)
                  </h3>
                  <p className="text-xs text-slate-500">
                    High-yield summary points curated for fast revision before tests
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {chapter.shortNotes.map((note, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3"
                    >
                      <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        {note.title}
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {note.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold mt-0.5">•</span>
                            <span className="leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. Detailed Notes */}
            {notesSubTab === 'detailed' && (
              <div className="space-y-8">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    📖 Detailed Curriculum Notes
                  </h3>
                  <p className="text-xs text-slate-500">
                    In-depth textbook explanations with exam takeaways
                  </p>
                </div>

                {chapter.detailedSections.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4 className="text-base font-bold text-slate-900 font-heading">
                      {sec.heading}
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line font-normal">
                      {sec.content}
                    </p>

                    {sec.highlights && (
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                        <div className="font-bold text-slate-800">Key Highlights:</div>
                        <ul className="list-disc list-inside space-y-1 text-slate-600">
                          {sec.highlights.map((h, hIdx) => (
                            <li key={hIdx}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {sec.keyTakeaway && (
                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs font-medium text-amber-900 flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>
                          <strong>Core Exam Takeaway:</strong> {sec.keyTakeaway}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* 3. Key Concepts */}
            {notesSubTab === 'concepts' && (
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    🧠 Key Concepts &amp; Examination Tips
                  </h3>
                  <p className="text-xs text-slate-500">
                    Core principles and frequent examiner questions
                  </p>
                </div>

                <div className="space-y-4">
                  {chapter.keyConcepts.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-slate-900">
                          {item.term}
                        </h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                          Concept
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {item.explanation}
                      </p>
                      {item.examTip && (
                        <div className="mt-2 pt-2 border-t border-slate-200 text-[11px] text-amber-800 font-medium">
                          💡 <strong>Board Exam Tip:</strong> {item.examTip}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Important Dates */}
            {notesSubTab === 'dates' && (
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    📌 Chronological Dates &amp; Events
                  </h3>
                  <p className="text-xs text-slate-500">
                    Timeline milestones you need to remember for history and civics
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-700">
                    <thead className="bg-slate-100 text-slate-800 font-bold uppercase tracking-wider text-[10px]">
                      <tr>
                        <th className="p-3 rounded-l-xl">Year / Date</th>
                        <th className="p-3">Historical Event</th>
                        <th className="p-3 rounded-r-xl">Significance &amp; Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-normal">
                      {chapter.importantDates.map((d, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-amber-800 whitespace-nowrap">
                            {d.date}
                          </td>
                          <td className="p-3 font-semibold text-slate-900">
                            {d.event}
                          </td>
                          <td className="p-3 text-slate-600">
                            {d.significance}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 5. Important People */}
            {notesSubTab === 'people' && (
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    👤 Key Historical Personalities &amp; Leaders
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {chapter.importantPeople.map((person, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-800 flex items-center justify-center font-bold text-xs">
                          <User className="w-4 h-4 text-amber-700" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">
                            {person.name}
                          </div>
                          <div className="text-[11px] text-amber-700 font-medium">
                            {person.role}
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        {person.contribution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. Definitions Glossary */}
            {notesSubTab === 'definitions' && (
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    📖 Important Definitions &amp; Key Terms
                  </h3>
                  <p className="text-xs text-slate-500">
                    Exact NCERT phrasing to score full 1-mark definition points
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {chapter.definitions.map((def, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-800">
                          {def.term}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {def.context}
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-normal">
                        {def.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 7. Figures / Tables */}
            {notesSubTab === 'figures' && (
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    📊 Important Figures, Flowcharts &amp; Tables
                  </h3>
                </div>

                {chapter.importantFigures.map((fig, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 font-heading">
                        {fig.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {fig.description}
                      </p>
                    </div>

                    {/* Flowchart Steps */}
                    {fig.type === 'flowchart' && fig.steps && (
                      <div className="space-y-2">
                        {fig.steps.map((step, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800"
                          >
                            <span className="w-6 h-6 rounded-lg bg-amber-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
                              {sIdx + 1}
                            </span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Table */}
                    {fig.type === 'table' && fig.headers && fig.rows && (
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs text-slate-700">
                          <thead className="bg-slate-200/70 text-slate-800 font-bold uppercase text-[10px]">
                            <tr>
                              {fig.headers.map((h, hIdx) => (
                                <th key={hIdx} className="p-2.5">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200 font-normal">
                            {fig.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-white">
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="p-2.5">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 2: 10-MIN RAPID REVISION MODE */}
      {/* ========================================================= */}
      {activeTab === 'revision' && (
        <div className="space-y-6">
          {/* Header Banner */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-rose-900 to-rose-950 text-white shadow-lg space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-500/30">
              <Zap className="w-3.5 h-3.5 text-rose-400" />
              ⚡ High-Velocity Revision Mode
            </div>
            <h2 className="text-2xl font-bold font-heading">
              10-Minute Rapid Chapter Revision
            </h2>
            <p className="text-xs sm:text-sm text-rose-200 max-w-2xl leading-relaxed">
              Consolidated chapter mind map, golden recall rules, interactive flashcards, and common board traps.
            </p>
          </div>

          {/* Flashcard Deck */}
          {chapter.flashcards.length > 0 && (
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    Active Recall Flashcards
                  </h3>
                  <p className="text-xs text-slate-500">
                    Card {currentFlashcardIndex + 1} of {chapter.flashcards.length} • Click card to flip
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-rose-50 text-rose-800 border border-rose-200">
                  {chapter.flashcards[currentFlashcardIndex].category.toUpperCase()}
                </span>
              </div>

              {/* Flashcard Box */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className={`min-h-[180px] p-6 rounded-2xl cursor-pointer flex flex-col justify-center items-center text-center transition-all border shadow-xs ${
                  isFlipped
                    ? 'bg-amber-50/70 border-amber-300 text-slate-900'
                    : 'bg-slate-50 border-slate-200 text-slate-800'
                }`}
              >
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  {isFlipped ? 'Answer / Explanation' : 'Question / Cue (Click to Reveal)'}
                </div>
                <div className="text-base sm:text-lg font-bold max-w-lg leading-snug whitespace-pre-line">
                  {isFlipped
                    ? chapter.flashcards[currentFlashcardIndex].back
                    : chapter.flashcards[currentFlashcardIndex].front}
                </div>
              </div>

              {/* Flashcard Controls */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => {
                    setIsFlipped(false);
                    setCurrentFlashcardIndex((prev) =>
                      prev > 0 ? prev - 1 : chapter.flashcards.length - 1
                    );
                  }}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Previous
                </button>
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="px-4 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-xs hover:bg-slate-800"
                >
                  Flip Card
                </button>
                <button
                  onClick={() => {
                    setIsFlipped(false);
                    setCurrentFlashcardIndex((prev) =>
                      prev < chapter.flashcards.length - 1 ? prev + 1 : 0
                    );
                  }}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Golden Points & Mind Map Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Golden Points */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-3">
              <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5 font-heading">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Golden Exam Points
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {chapter.oneShotRevision.goldenPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2 rounded-xl bg-amber-50/50">
                    <span className="text-amber-600 font-bold mt-0.5">✓</span>
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mind Map Sequence */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 font-heading">
                <ListOrdered className="w-4 h-4 text-slate-700" />
                Chapter Flow Mind Map
              </h3>
              <div className="space-y-2">
                {chapter.oneShotRevision.mindMapSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 text-xs font-medium text-slate-800"
                  >
                    <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Common Pitfalls Box */}
          {chapter.oneShotRevision.commonPitfalls.length > 0 && (
            <div className="p-5 rounded-3xl bg-rose-50 border border-rose-200 space-y-2">
              <div className="text-xs font-bold text-rose-900 uppercase tracking-wider flex items-center gap-1.5">
                ⚠️ Avoid Common Board Exam Traps
              </div>
              <ul className="space-y-1.5 text-xs text-rose-800">
                {chapter.oneShotRevision.commonPitfalls.map((pf, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>{pf}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 3: CHAPTER QUESTION BANK WITH "SHOW ANSWER" */}
      {/* ========================================================= */}
      {activeTab === 'questions' && (
        <div className="space-y-6">
          {/* Header & Filter Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200">
            <div>
              <h3 className="text-base font-bold text-slate-900 font-heading">
                Chapter Question Bank
              </h3>
              <p className="text-xs text-slate-500">
                {filteredQuestions.length} Questions • Click &quot;Show Answer&quot; for active recall
              </p>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto text-xs">
              {['all', 'mcq', 'vsa', 'sa', 'la', 'ar', 'case', 'map'].map((qT) => (
                <button
                  key={qT}
                  onClick={() => setSelectedQuestionType(qT)}
                  className={`px-3 py-1 rounded-xl uppercase tracking-wider text-[11px] font-bold transition-all ${
                    selectedQuestionType === qT
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {qT}
                </button>
              ))}
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-4">
            {filteredQuestions.map((q, idx) => {
              const isRevealed = revealedAnswers[q.id];
              return (
                <div
                  key={q.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200">
                      Q{idx + 1} • {q.typeLabel} ({q.marks} Mark{q.marks > 1 ? 's' : ''})
                    </span>
                    {q.year && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                        {q.year}
                      </span>
                    )}
                  </div>

                  {q.casePassage && (
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 italic leading-relaxed">
                      <strong>Source Passage:</strong> {q.casePassage}
                    </div>
                  )}

                  {q.assertion && q.reason && (
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                      <p>
                        <strong>Assertion (A):</strong> {q.assertion}
                      </p>
                      <p>
                        <strong>Reason (R):</strong> {q.reason}
                      </p>
                    </div>
                  )}

                  <p className="text-sm font-semibold text-slate-900 whitespace-pre-line">
                    {q.question}
                  </p>

                  {q.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt, oIdx) => (
                        <div
                          key={oIdx}
                          className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-medium"
                        >
                          {String.fromCharCode(65 + oIdx)}. {opt}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Show / Hide Answer Action */}
                  <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                    <button
                      onClick={() => toggleAnswer(q.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 py-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      {isRevealed ? 'Hide Answer' : 'Show Answer & Marking Scheme'}
                    </button>
                  </div>

                  {isRevealed && (
                    <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs text-slate-800 space-y-2 animate-in fade-in duration-150">
                      <div className="font-bold text-emerald-900 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Model Board Answer:
                      </div>
                      <p className="whitespace-pre-line text-slate-700 leading-relaxed font-normal">
                        {q.answer}
                      </p>
                      {q.keyPointsToScore && (
                        <div className="pt-1.5 border-t border-emerald-100 space-y-1">
                          <span className="font-bold text-emerald-800">
                            Key Points Examiners Look For:
                          </span>
                          <ul className="list-disc list-inside text-emerald-950 font-normal">
                            {q.keyPointsToScore.map((kp, kIdx) => (
                              <li key={kIdx}>{kp}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {q.explanation && (
                        <p className="text-[11px] text-slate-500 pt-1 border-t border-emerald-100">
                          <strong>Note / Context:</strong> {q.explanation}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 4: INTERACTIVE CHAPTER QUIZ */}
      {/* ========================================================= */}
      {activeTab === 'quiz' && (
        <div className="space-y-6">
          {mcqQuestions.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500">
              MCQs for this chapter are currently in the Question Bank section.
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              {/* Quiz Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    {chapter.title} Quiz
                  </h3>
                  <p className="text-xs text-slate-500">
                    {mcqQuestions.length} Multiple Choice Questions • Test your mastery
                  </p>
                </div>

                {quizSubmitted && (
                  <button
                    onClick={handleResetQuiz}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Try Again
                  </button>
                )}
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {mcqQuestions.map((q, qIdx) => {
                  const selectedOpt = quizAnswers[qIdx];
                  const isCorrect = selectedOpt === q.correctOptionIndex;

                  return (
                    <div
                      key={q.id}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3"
                    >
                      <div className="text-xs font-bold text-slate-400">
                        Question {qIdx + 1} of {mcqQuestions.length}
                      </div>

                      <p className="text-sm font-bold text-slate-900">
                        {q.question}
                      </p>

                      {/* Options */}
                      <div className="space-y-2">
                        {q.options?.map((opt, oIdx) => {
                          const isOptionSelected = selectedOpt === oIdx;
                          let btnStyle =
                            'bg-white border-slate-200 text-slate-700 hover:bg-slate-100';

                          if (quizSubmitted) {
                            if (oIdx === q.correctOptionIndex) {
                              btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                            } else if (isOptionSelected && !isCorrect) {
                              btnStyle = 'bg-rose-50 border-rose-300 text-rose-800 font-semibold';
                            }
                          } else if (isOptionSelected) {
                            btnStyle = 'bg-amber-50 border-amber-500 text-amber-900 font-bold';
                          }

                          return (
                            <button
                              key={oIdx}
                              onClick={() => handleSelectQuizOption(qIdx, oIdx)}
                              className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between ${btnStyle}`}
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold flex items-center justify-center shrink-0">
                                  {String.fromCharCode(65 + oIdx)}
                                </span>
                                <span>{opt}</span>
                              </div>

                              {quizSubmitted && oIdx === q.correctOptionIndex && (
                                <span className="text-emerald-700 text-xs font-bold">✓ Correct</span>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation if submitted */}
                      {quizSubmitted && (
                        <div className="pt-2 text-xs text-slate-600 border-t border-slate-200">
                          <strong>Explanation:</strong> {q.explanation || q.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit Quiz Action */}
              {!quizSubmitted ? (
                <div className="pt-4 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={handleQuizSubmit}
                    disabled={Object.keys(quizAnswers).length === 0}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white text-xs font-bold shadow-md transition-colors"
                  >
                    Submit Quiz &amp; Calculate Score
                  </button>
                </div>
              ) : (
                /* Score Card */
                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-xl font-bold">
                    🎯
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900 font-heading">
                    Quiz Completed!
                  </h4>
                  <div className="text-3xl font-black text-emerald-700 font-heading">
                    {
                      mcqQuestions.filter(
                        (q, idx) => quizAnswers[idx] === q.correctOptionIndex
                      ).length
                    }{' '}
                    / {mcqQuestions.length}
                  </div>
                  <p className="text-xs text-slate-600">
                    Your score has been saved to your student progress record.
                  </p>
                  <button
                    onClick={handleResetQuiz}
                    className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Bottom Backspace & Return Bar */}
      <div className="pt-6 border-t border-slate-700/40 flex flex-wrap items-center justify-between gap-3 no-print">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md transition-all"
        >
          <span className="font-mono text-sm leading-none font-bold">⌫</span>
          <span>Backspace (Previous Screen)</span>
          <kbd className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 bg-blue-800/80 rounded font-mono">⌫</kbd>
        </button>

        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#08203e] hover:bg-[#0c2a52] text-sky-200 border border-sky-800/50 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Class {chapter.classLevel} Dashboard</span>
        </button>
      </div>
    </div>
  );
};
