import React, { useState } from 'react';
import {
  Clock,
  Sparkles,
  ArrowRight,
  Info,
  Calendar,
  CheckCircle2,
  Printer,
  ChevronDown,
} from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/timelineData';
import { TimelineEvent } from '../types/sst';

interface TimelineViewProps {
  onBack?: () => void;
}

export const TimelineView: React.FC<TimelineViewProps> = ({ onBack }) => {
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [activeEventId, setActiveEventId] = useState<string>(TIMELINE_EVENTS[0].id);

  const categories = [
    { id: 'all', label: 'All Timeline Events' },
    { id: 'indian_freedom', label: '🇮🇳 Indian National Movement' },
    { id: 'world_history', label: '🌍 World History & Europe' },
    { id: 'medieval_ancient', label: '🏛️ Medieval & Ancient India' },
  ];

  const filteredEvents = TIMELINE_EVENTS.filter((e) => {
    if (selectedEra === 'all') return true;
    return e.era === selectedEra;
  });

  const activeEvent = TIMELINE_EVENTS.find((e) => e.id === activeEventId) || filteredEvents[0];

  return (
    <div className="space-y-8 pb-16">
      {/* Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-900 via-orange-950 to-slate-900 text-white shadow-xl space-y-3 border border-amber-800/40">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {onBack && (
              <button
                id="timeline-backspace-btn"
                onClick={onBack}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold shadow-md border border-amber-400/40 transition-all"
                title="Go back (Backspace key)"
              >
                <span className="font-mono text-sm leading-none font-bold">⌫</span>
                <span>Backspace</span>
                <kbd className="hidden sm:inline-block text-[9px] px-1 py-0.2 bg-amber-800/80 rounded font-mono border border-amber-400/30">⌫</kbd>
              </button>
            )}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
              <Clock className="w-3.5 h-3.5" />
              Chronological Mastery
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition-colors no-print"
          >
            <Printer className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">Print Timeline Sheet</span>
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
          ⏳ Interactive History Timeline
        </h1>
        <p className="text-xs sm:text-sm text-amber-200 max-w-2xl leading-relaxed">
          Master the exact chronology of the Indian National Movement and World History. Click any year to explore
          what happened, the root cause, and long-term historical impact.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-bold no-print">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedEra(cat.id)}
            className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
              selectedEra === cat.id
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 2-Column Layout: Visual Vertical Timeline + Active Event Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Vertical Timeline List */}
        <div className="lg:col-span-6 space-y-3 relative pl-6 before:absolute before:left-2.5 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
          {filteredEvents.map((evt) => {
            const isSelected = activeEvent?.id === evt.id;

            return (
              <div
                key={evt.id}
                onClick={() => setActiveEventId(evt.id)}
                className={`relative p-4 rounded-2xl cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-amber-50/80 border-amber-300 shadow-sm -translate-y-0.5'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs'
                }`}
              >
                {/* Node dot on timeline line */}
                <div
                  className={`absolute -left-[27px] top-5 w-4 h-4 rounded-full border-2 border-white transition-colors ${
                    isSelected ? 'bg-amber-600 ring-4 ring-amber-200' : 'bg-slate-400'
                  }`}
                />

                <div className="flex items-center justify-between text-xs">
                  <span
                    className={`font-black tracking-wide ${
                      isSelected ? 'text-amber-800 font-heading text-sm' : 'text-slate-800'
                    }`}
                  >
                    {evt.year}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">
                    {evt.era === 'indian_freedom' ? 'India' : 'World'}
                  </span>
                </div>

                <div className="mt-1">
                  <h4 className="text-sm font-bold text-slate-900">
                    {evt.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-0.5">
                    {evt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Event Inspector Panel */}
        <div className="lg:col-span-6">
          <div className="sticky top-20 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black font-heading text-amber-600">
                Year {activeEvent.year}
              </span>
              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200">
                Class {activeEvent.relatedClass} Syllabus
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                {activeEvent.title}
              </h3>
            </div>

            {/* Description Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
              <div className="font-bold text-slate-800 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                <Info className="w-3.5 h-3.5 text-indigo-600" />
                Historical Occurrence &amp; Context:
              </div>
              <p className="text-slate-700 leading-relaxed font-normal">
                {activeEvent.description}
              </p>
            </div>

            {/* Significance & Result */}
            {activeEvent.significance && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5 text-xs">
                <div className="font-bold text-emerald-900 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Historical Significance &amp; Examination Impact:
                </div>
                <p className="text-slate-700 leading-relaxed font-normal">
                  {activeEvent.significance}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Backspace Action */}
      {onBack && (
        <div className="pt-6 border-t border-slate-700/40 flex items-center justify-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white shadow-lg transition-all border border-amber-400/40"
          >
            <span className="font-mono text-sm font-bold">⌫</span>
            <span>Backspace to Previous Screen</span>
            <kbd className="text-[10px] px-1.5 py-0.5 bg-amber-800/80 rounded font-mono">⌫</kbd>
          </button>
        </div>
      )}
    </div>
  );
};
