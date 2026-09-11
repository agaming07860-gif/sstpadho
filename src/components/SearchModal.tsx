import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, BookOpen, Zap, HelpCircle, ArrowRight, Layers } from 'lucide-react';
import { CHAPTERS_DATA } from '../data/chaptersData';
import { SUBJECTS } from '../data/subjects';
import { Chapter } from '../types/sst';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectChapter: (chapter: Chapter, targetTab?: 'notes' | 'revision' | 'questions' | 'quiz') => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectChapter }) => {
  const [query, setQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const results = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) {
      // Show popular or first few chapters as suggestions
      return CHAPTERS_DATA.slice(0, 5).map((ch) => ({
        chapter: ch,
        matchedSnippet: ch.overview.slice(0, 120) + '...',
        matchType: 'Overview',
      }));
    }

    const matchedList: Array<{
      chapter: Chapter;
      matchedSnippet: string;
      matchType: string;
    }> = [];

    CHAPTERS_DATA.forEach((ch) => {
      if (selectedSubject !== 'all' && ch.subject !== selectedSubject) return;

      const titleMatch = ch.title.toLowerCase().includes(cleanQuery);
      const subtitleMatch = ch.subtitle.toLowerCase().includes(cleanQuery);
      const overviewMatch = ch.overview.toLowerCase().includes(cleanQuery);

      // Check definitions
      const defMatch = ch.definitions.find((d) =>
        d.term.toLowerCase().includes(cleanQuery) || d.definition.toLowerCase().includes(cleanQuery)
      );

      // Check key concepts
      const conceptMatch = ch.keyConcepts.find((c) =>
        c.term.toLowerCase().includes(cleanQuery) || c.explanation.toLowerCase().includes(cleanQuery)
      );

      // Check dates
      const dateMatch = ch.importantDates.find((d) =>
        d.event.toLowerCase().includes(cleanQuery) || d.date.toLowerCase().includes(cleanQuery)
      );

      if (titleMatch) {
        matchedList.push({
          chapter: ch,
          matchedSnippet: ch.subtitle,
          matchType: 'Chapter Title',
        });
      } else if (defMatch) {
        matchedList.push({
          chapter: ch,
          matchedSnippet: `Term: "${defMatch.term}" - ${defMatch.definition}`,
          matchType: 'Definition',
        });
      } else if (conceptMatch) {
        matchedList.push({
          chapter: ch,
          matchedSnippet: `Concept: "${conceptMatch.term}" - ${conceptMatch.explanation}`,
          matchType: 'Key Concept',
        });
      } else if (dateMatch) {
        matchedList.push({
          chapter: ch,
          matchedSnippet: `${dateMatch.date}: ${dateMatch.event}`,
          matchType: 'Important Date',
        });
      } else if (overviewMatch || subtitleMatch) {
        matchedList.push({
          chapter: ch,
          matchedSnippet: ch.overview.slice(0, 130) + '...',
          matchType: 'Chapter Content',
        });
      }
    });

    return matchedList;
  }, [query, selectedSubject]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl bg-[#071d37] rounded-2xl shadow-2xl border border-sky-900/60 overflow-hidden flex flex-col max-h-[85vh] text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-sky-900/60 flex items-center gap-3 bg-[#051833]">
          <Search className="w-5 h-5 text-sky-400 shrink-0" />
          <input
            id="global-search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chapters, topics, dates (e.g. 'French Revolution', 'Regur Soil', '1789')..."
            className="w-full bg-transparent border-0 text-white placeholder:text-sky-300/40 focus:outline-none text-base"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-sky-300/60 hover:text-white rounded-lg hover:bg-sky-900/40 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors border border-blue-400/40 shadow-xs"
            title="Go back / close search (Backspace key)"
          >
            <span className="font-mono text-xs leading-none">⌫</span>
            <span>Backspace</span>
          </button>
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold text-sky-300 bg-[#092244] hover:bg-[#0c2e5a] rounded-md transition-colors border border-sky-800/40"
          >
            ESC
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-4 py-2.5 bg-[#051833] border-b border-sky-900/50 flex items-center gap-2 overflow-x-auto text-xs font-medium text-sky-200">
          <span className="text-sky-400/60 uppercase tracking-wider text-[10px] font-bold">Filter:</span>
          <button
            onClick={() => setSelectedSubject('all')}
            className={`px-3 py-1 rounded-full transition-all whitespace-nowrap ${
              selectedSubject === 'all'
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'bg-[#092244] text-sky-200/80 hover:bg-[#0c2e5a] hover:text-white border border-sky-800/40'
            }`}
          >
            All Subjects
          </button>
          {(['history', 'geography', 'civics', 'economics'] as const).map((sKey) => {
            const sub = SUBJECTS[sKey];
            return (
              <button
                key={sKey}
                onClick={() => setSelectedSubject(sKey)}
                className={`px-3 py-1 rounded-full transition-all whitespace-nowrap ${
                  selectedSubject === sKey
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'bg-[#092244] text-sky-200/80 hover:bg-[#0c2e5a] hover:text-white border border-sky-800/40'
                }`}
              >
                {sub.label}
              </button>
            );
          })}
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto flex-1 divide-y divide-sky-950/80 space-y-2">
          {results.length === 0 ? (
            <div className="text-center py-12 px-4 text-sky-300/60">
              <Layers className="w-10 h-10 mx-auto text-sky-400/40 mb-2" />
              <p className="font-medium text-sky-200">No matching SST content found</p>
              <p className="text-xs text-sky-300/40 mt-1">Try searching for &quot;Nationalism&quot;, &quot;Zollverein&quot;, &quot;Alluvial&quot;, or &quot;Power Sharing&quot;</p>
            </div>
          ) : (
            results.map(({ chapter, matchedSnippet, matchType }) => {
              const sub = SUBJECTS[chapter.subject];
              return (
                <div
                  key={chapter.id}
                  className="py-3 px-3.5 hover:bg-[#092244] rounded-xl transition-all group flex flex-col gap-2 border border-transparent hover:border-sky-800/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#0b2b52] text-sky-300 border border-sky-700/40">
                        Class {chapter.classLevel} • {sub.label}
                      </span>
                      <span className="text-[11px] font-medium text-sky-300/60">
                        Ch {chapter.chapterNumber}
                      </span>
                    </div>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800/50">
                      Matched {matchType}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                      {chapter.title}
                    </h4>
                    <p className="text-xs text-sky-200/70 line-clamp-2 mt-0.5 font-normal">
                      {matchedSnippet}
                    </p>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => {
                        onSelectChapter(chapter, 'notes');
                        onClose();
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 bg-[#09254c] text-sky-200 rounded-lg hover:bg-blue-600 hover:text-white transition-colors border border-sky-700/40"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      Read Notes
                    </button>
                    <button
                      onClick={() => {
                        onSelectChapter(chapter, 'revision');
                        onClose();
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 bg-[#09254c] text-rose-300 rounded-lg hover:bg-rose-600 hover:text-white transition-colors border border-rose-900/40"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      10-Min Revision
                    </button>
                    <button
                      onClick={() => {
                        onSelectChapter(chapter, 'questions');
                        onClose();
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 bg-[#09254c] text-amber-300 rounded-lg hover:bg-amber-600 hover:text-white transition-colors border border-amber-900/40"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      Questions ({chapter.questions.length})
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2.5 bg-[#051833] border-t border-sky-900/50 flex items-center justify-between text-[11px] text-sky-300/50">
          <span>Search across 4 subjects &amp; NCERT syllabus</span>
          <span className="flex items-center gap-1 font-medium text-sky-300/70">
            Press <kbd className="px-1.5 py-0.5 bg-[#092244] border border-sky-800/50 rounded text-[10px] text-sky-200">ESC</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
};
