import React from 'react';
import { Printer, X, Download, FileText, CheckCircle2 } from 'lucide-react';
import { Chapter } from '../types/sst';
import { SUBJECTS } from '../data/subjects';

interface PrintNotesModalProps {
  chapter: Chapter | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PrintNotesModal: React.FC<PrintNotesModalProps> = ({
  chapter,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !chapter) return null;

  const sub = SUBJECTS[chapter.subject];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white w-full max-w-4xl max-h-[95vh] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        {/* Modal Action Bar (Hidden in Print) */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between no-print">
          <div className="flex items-center gap-2 text-xs font-bold">
            <Printer className="w-4 h-4 text-amber-400" />
            <span>Printable Study Notes &amp; Revision PDF Export</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="print-modal-backspace-btn"
              onClick={onClose}
              className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors border border-blue-400/40"
              title="Go back / close (Backspace key)"
            >
              <span className="font-mono text-sm leading-none font-bold">⌫</span>
              <span>Backspace</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Area */}
        <div className="flex-1 overflow-y-auto p-8 sm:p-12 text-slate-900 bg-white font-serif leading-relaxed text-sm space-y-6">
          {/* Document Header */}
          <div className="border-b-2 border-slate-900 pb-4 text-center space-y-1 font-sans">
            <div className="text-[11px] uppercase tracking-widest font-extrabold text-slate-500">
              SSTPADHO BY ARSHAD • DIGITAL SOCIAL SCIENCE LIBRARY
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Class {chapter.classLevel} {sub.label} — Chapter {chapter.chapterNumber}
            </h1>
            <h2 className="text-lg font-bold text-slate-700">
              {chapter.title}
            </h2>
            <div className="text-xs text-slate-500">
              NCERT Curriculum Reference • Comprehensive Revision Document
            </div>
          </div>

          {/* Chapter Overview */}
          <div className="space-y-1 font-sans">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Chapter Overview
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed font-serif pt-1">
              {chapter.overview}
            </p>
          </div>

          {/* Quick Notes & Bullets */}
          <div className="space-y-3 font-sans">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Core Revision Points
            </h3>
            <div className="space-y-3 font-serif">
              {chapter.shortNotes.map((sn, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 font-sans">
                    {idx + 1}. {sn.title}
                  </h4>
                  <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-800">
                    {sn.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Dates Table */}
          {chapter.importantDates.length > 0 && (
            <div className="space-y-2 font-sans">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                Important Dates &amp; Events Timeline
              </h3>
              <table className="w-full text-left text-xs border border-slate-300 border-collapse">
                <thead>
                  <tr className="bg-slate-100 font-bold border-b border-slate-300">
                    <th className="p-1.5 border-r border-slate-300 w-24">Date</th>
                    <th className="p-1.5 border-r border-slate-300">Event</th>
                    <th className="p-1.5">Significance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-serif">
                  {chapter.importantDates.map((d, idx) => (
                    <tr key={idx}>
                      <td className="p-1.5 font-bold font-sans border-r border-slate-300">
                        {d.date}
                      </td>
                      <td className="p-1.5 font-sans font-semibold border-r border-slate-300">
                        {d.event}
                      </td>
                      <td className="p-1.5 text-slate-800">{d.significance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Definitions */}
          {chapter.definitions.length > 0 && (
            <div className="space-y-2 font-sans">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                Key Definitions &amp; Terms
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-serif text-xs">
                {chapter.definitions.map((def, idx) => (
                  <div key={idx} className="p-2 border border-slate-200 rounded">
                    <span className="font-bold font-sans">{def.term}: </span>
                    <span className="text-slate-800">{def.definition}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Selected Board Questions & Model Answers */}
          <div className="space-y-3 font-sans">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              High-Yield Exam Questions &amp; Marking Scheme
            </h3>
            <div className="space-y-3 font-serif text-xs">
              {chapter.questions.slice(0, 4).map((q, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-bold font-sans text-slate-900">
                    Q{idx + 1}. {q.question} ({q.marks} Mark{q.marks > 1 ? 's' : ''})
                  </div>
                  <div className="text-slate-800 pl-3 border-l-2 border-slate-400">
                    <strong>Model Answer: </strong>
                    {q.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-6 border-t border-slate-300 text-center text-[10px] text-slate-500 font-sans">
            Printed from SSTPadho by Arshad • Complete Digital Social Science Library • For Personal &amp; Educational Revision
          </div>
        </div>
      </div>
    </div>
  );
};
