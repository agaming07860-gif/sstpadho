import React from 'react';
import { Compass } from 'lucide-react';
import { ClassLevel, SubjectKey } from '../types/sst';
import { CLASS_LEVELS, SUBJECTS } from '../data/subjects';

interface FooterProps {
  onSelectClass: (cls: ClassLevel) => void;
  onNavigate: (view: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectClass, onNavigate }) => {
  return (
    <footer className="bg-[#020d1a]/90 backdrop-blur-md text-slate-300 pt-12 pb-8 border-t border-sky-950/80 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#0c2f58] to-[#051830] border border-sky-400/40 flex items-center justify-center shadow-md shadow-sky-950/70">
                  <Compass className="w-5 h-5 text-sky-400" />
                </div>
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-[#020d1a] shadow-xs" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  SST<span className="text-sky-400 font-bold">Padho</span>
                </span>
                <span className="text-xs font-semibold text-amber-300 font-mono px-1.5 py-0.5 rounded bg-amber-950/60 border border-amber-800/40">
                  by Arshad
                </span>
              </div>
            </div>
            <p className="text-xs text-sky-200/60 leading-relaxed max-w-sm">
              A comprehensive digital SST library for students across all classes.
              Providing verified NCERT chapter notes, high-yield question banks, interactive India maps,
              and 10-minute rapid revision tools.
            </p>
            <div className="text-[11px] text-sky-300/40 font-mono">
              Curriculum Aligned: CBSE • NCERT • ICSE • State Boards
            </div>
          </div>

          {/* Quick Classes */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              📚 Browse Classes
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-xs text-sky-200/70">
              {CLASS_LEVELS.map((cls) => (
                <button
                  key={cls}
                  onClick={() => {
                    onSelectClass(cls);
                    onNavigate('class');
                  }}
                  className="text-left hover:text-sky-300 transition-colors py-0.5"
                >
                  Class {cls} SST
                </button>
              ))}
            </div>
          </div>

          {/* Four Subjects */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              🏛️ Subjects
            </h4>
            <div className="space-y-1.5 text-xs text-sky-200/70">
              {(['history', 'geography', 'civics', 'economics'] as SubjectKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => onNavigate('class')}
                  className="block text-left hover:text-sky-300 transition-colors py-0.5"
                >
                  {SUBJECTS[key].label}
                </button>
              ))}
            </div>
          </div>

          {/* Learning Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              ⚡ Study Tools
            </h4>
            <div className="space-y-1.5 text-xs text-sky-200/70">
              <button
                onClick={() => onNavigate('question-bank')}
                className="block text-left hover:text-sky-300 transition-colors py-0.5"
              >
                Question Bank
              </button>
              <button
                onClick={() => onNavigate('map-lab')}
                className="block text-left hover:text-sky-300 transition-colors py-0.5"
              >
                Interactive Map Lab
              </button>
              <button
                onClick={() => onNavigate('timeline')}
                className="block text-left hover:text-sky-300 transition-colors py-0.5"
              >
                History Timeline
              </button>
              <button
                onClick={() => onNavigate('revision')}
                className="block text-left hover:text-sky-300 transition-colors py-0.5"
              >
                10-Min Revision Mode
              </button>
              <button
                onClick={() => onNavigate('high-yield')}
                className="block text-left text-amber-300/80 hover:text-amber-200 transition-colors py-0.5"
              >
                📂 High-Yield Chapters Folder
              </button>
              <button
                onClick={() => onNavigate('progress')}
                className="block text-left hover:text-sky-300 transition-colors py-0.5"
              >
                Study Progress
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-sky-950/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sky-300/40">
          <div>
            © {new Date().getFullYear()} SSTPadho by Arshad. Built for student excellence in Social Science.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted for Board &amp; School Exam Success</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
