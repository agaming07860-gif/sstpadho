import React, { useState, useMemo } from 'react';
import {
  HelpCircle,
  Eye,
  Bookmark,
  Filter,
  Search,
  CheckCircle2,
  Copy,
  Check,
  RotateCcw,
} from 'lucide-react';
import { CHAPTERS_DATA } from '../data/chaptersData';
import { SUBJECTS, CLASS_LEVELS } from '../data/subjects';
import { ChapterQuestion, ClassLevel, QuestionType, SubjectKey } from '../types/sst';
import { useProgress } from '../context/ProgressContext';

interface QuestionBankViewProps {
  onBack?: () => void;
}

export const QuestionBankView: React.FC<QuestionBankViewProps> = ({ onBack }) => {
  const { isQuestionBookmarked, toggleBookmarkQuestion } = useProgress();

  const [selectedClass, setSelectedClass] = useState<number | 'all'>('all');
  const [selectedSubject, setSelectedSubject] = useState<SubjectKey | 'all'>('all');
  const [selectedType, setSelectedType] = useState<QuestionType | 'all'>('all');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Flatten all questions with chapter metadata
  const allQuestionsWithContext = useMemo(() => {
    const list: Array<{
      q: ChapterQuestion;
      chapterTitle: string;
      chapterNumber: number;
      classLevel: ClassLevel;
      subject: SubjectKey;
    }> = [];

    CHAPTERS_DATA.forEach((ch) => {
      ch.questions.forEach((q) => {
        list.push({
          q,
          chapterTitle: ch.title,
          chapterNumber: ch.chapterNumber,
          classLevel: ch.classLevel,
          subject: ch.subject,
        });
      });
    });

    return list;
  }, []);

  const filteredItems = useMemo(() => {
    return allQuestionsWithContext.filter((item) => {
      if (selectedClass !== 'all' && item.classLevel !== selectedClass) return false;
      if (selectedSubject !== 'all' && item.subject !== selectedSubject) return false;
      if (selectedType !== 'all' && item.q.type !== selectedType) return false;

      if (searchKeyword.trim()) {
        const kw = searchKeyword.toLowerCase();
        const matchesQuestion = item.q.question.toLowerCase().includes(kw);
        const matchesAnswer = item.q.answer.toLowerCase().includes(kw);
        const matchesChapter = item.chapterTitle.toLowerCase().includes(kw);
        return matchesQuestion || matchesAnswer || matchesChapter;
      }

      return true;
    });
  }, [allQuestionsWithContext, selectedClass, selectedSubject, selectedType, searchKeyword]);

  const toggleReveal = (id: string) => {
    setRevealedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShowAll = () => {
    const newRevealed: Record<string, boolean> = {};
    filteredItems.forEach((item) => {
      newRevealed[item.q.id] = true;
    });
    setRevealedIds(newRevealed);
  };

  const handleHideAll = () => {
    setRevealedIds({});
  };

  const handleCopyQuestion = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Page Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl space-y-3 border border-indigo-900/40">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {onBack && (
              <button
                id="question-bank-backspace-btn"
                onClick={onBack}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md border border-blue-400/40 transition-all"
                title="Go back (Backspace key)"
              >
                <span className="font-mono text-sm leading-none font-bold">⌫</span>
                <span>Backspace</span>
                <kbd className="hidden sm:inline-block text-[9px] px-1 py-0.2 bg-blue-800/80 rounded font-mono border border-blue-400/30">⌫</kbd>
              </button>
            )}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">
              <HelpCircle className="w-3.5 h-3.5" />
              CBSE &amp; NCERT Aligned Practice
            </div>
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
          SST Question Bank &amp; Exam Practice
        </h1>
        <p className="text-xs sm:text-sm text-indigo-200 max-w-2xl leading-relaxed">
          Filter thousands of exam questions by Class, Subject, Chapter, and Format.
          Test your active recall with the interactive &quot;Show Answer&quot; toggle and scoring keys.
        </p>
      </div>

      {/* Filter Matrix Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
          <input
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="Search questions by topic, keyword, or concept (e.g., 'Zollverein', 'Bhopal', 'Soil')..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          {/* Class Filter */}
          <div>
            <label className="block font-bold text-slate-500 mb-1.5 uppercase tracking-wider text-[10px]">
              1. Class Level
            </label>
            <select
              value={selectedClass}
              onChange={(e) =>
                setSelectedClass(
                  e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10)
                )
              }
              className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-semibold focus:outline-none focus:border-indigo-500"
            >
              <option value="all">All Classes (6–12)</option>
              {CLASS_LEVELS.map((cls) => (
                <option key={cls} value={cls}>
                  Class {cls}
                </option>
              ))}
            </select>
          </div>

          {/* Subject Filter */}
          <div>
            <label className="block font-bold text-slate-500 mb-1.5 uppercase tracking-wider text-[10px]">
              2. Subject
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value as any)}
              className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-semibold focus:outline-none focus:border-indigo-500"
            >
              <option value="all">All Subjects</option>
              {(['history', 'geography', 'civics', 'economics'] as SubjectKey[]).map((sk) => (
                <option key={sk} value={sk}>
                  {SUBJECTS[sk].label}
                </option>
              ))}
            </select>
          </div>

          {/* Question Type Filter */}
          <div>
            <label className="block font-bold text-slate-500 mb-1.5 uppercase tracking-wider text-[10px]">
              3. Question Format
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as any)}
              className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-semibold focus:outline-none focus:border-indigo-500"
            >
              <option value="all">All Types</option>
              <option value="mcq">MCQs (1 Mark)</option>
              <option value="vsa">Very Short Answer (1 Mark)</option>
              <option value="sa">Short Answer (3 Marks)</option>
              <option value="la">Long Answer (5 Marks)</option>
              <option value="ar">Assertion &amp; Reason</option>
              <option value="case">Case-Based / Source Passage</option>
              <option value="map">Map-Based Question</option>
            </select>
          </div>
        </div>

        {/* Global Controls & Count */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="font-semibold text-slate-500">
            Showing <span className="text-slate-900 font-bold">{filteredItems.length}</span> questions
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShowAll}
              className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-bold transition-colors"
            >
              Show All Answers
            </button>
            <button
              onClick={handleHideAll}
              className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold transition-colors"
            >
              Hide All Answers
            </button>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredItems.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500">
            No questions match your filter criteria. Try resetting the filters.
          </div>
        ) : (
          filteredItems.map(({ q, chapterTitle, classLevel, subject }, idx) => {
            const isRevealed = revealedIds[q.id];
            const isBookmarked = isQuestionBookmarked(q.id);
            const sub = SUBJECTS[subject];

            return (
              <div
                key={q.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3"
              >
                {/* Meta Bar */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${sub.badgeBg} ${sub.badgeText}`}
                    >
                      Class {classLevel} • {sub.label}
                    </span>
                    <span className="font-semibold text-slate-500 hidden sm:inline">
                      {chapterTitle}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {q.year && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                        {q.year}
                      </span>
                    )}
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-800">
                      {q.marks} Mark{q.marks > 1 ? 's' : ''}
                    </span>
                    <button
                      onClick={() => toggleBookmarkQuestion(q.id)}
                      className="p-1 rounded-md hover:bg-slate-100 text-slate-400 hover:text-amber-500 transition-colors"
                      title="Bookmark Question"
                    >
                      <Bookmark
                        className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`}
                      />
                    </button>
                  </div>
                </div>

                {/* Case Passage or Assertion/Reason */}
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

                {/* Main Question */}
                <div className="text-sm font-semibold text-slate-900 whitespace-pre-line">
                  {q.question}
                </div>

                {/* MCQ Options */}
                {q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
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

                {/* Actions */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <button
                    onClick={() => toggleReveal(q.id)}
                    className="inline-flex items-center gap-1.5 font-bold text-indigo-600 hover:text-indigo-800 py-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    {isRevealed ? 'Hide Answer' : 'Show Answer & Marking Scheme'}
                  </button>

                  <button
                    onClick={() =>
                      handleCopyQuestion(
                        `${q.question}\n\nAnswer: ${q.answer}`,
                        q.id
                      )
                    }
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-600 font-medium"
                  >
                    {copiedId === q.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Answer Dropdown */}
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
                          Examiner Scoring Scheme:
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
                        <strong>Context:</strong> {q.explanation}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Bottom Backspace Navigation */}
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
