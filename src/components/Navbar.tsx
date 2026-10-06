import React, { useState, useEffect, useRef } from 'react';
import {
  Compass,
  Search,
  BookOpen,
  MapPin,
  Clock,
  Zap,
  Award,
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  HelpCircle,
  FolderOpen,
  MoreHorizontal,
  Check,
  Flame,
} from 'lucide-react';
import { ClassLevel } from '../types/sst';
import { CLASS_LEVELS, CLASS_DETAILS } from '../data/subjects';
import { useProgress } from '../context/ProgressContext';

export type ActiveView =
  | 'home'
  | 'class'
  | 'chapter'
  | 'question-bank'
  | 'map-lab'
  | 'timeline'
  | 'revision'
  | 'progress'
  | 'high-yield';

interface NavbarProps {
  currentView: ActiveView;
  onNavigate: (view: ActiveView) => void;
  onOpenSearch: () => void;
  onBack?: () => void;
  canGoBack?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenSearch,
  onBack,
  canGoBack = false,
}) => {
  const { activeClass, setActiveClass, progress } = useProgress();
  const [classDropdownOpen, setClassDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  const completedCount = progress.completedChapterIds.length;
  const isMoreViewActive = ['map-lab', 'timeline', 'revision', 'high-yield', 'progress'].includes(currentView);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setMoreMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMoreMenuOpen(false);
        setClassDropdownOpen(false);
      }
    };
    if (moreMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [moreMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-[#04172e]/95 backdrop-blur-md border-b border-sky-950/80 shadow-lg no-print text-slate-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
          
          {/* Logo & Brand + Back Button */}
          <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
            {/* Dedicated Back Button when any view/module is open */}
            {(canGoBack || currentView !== 'home') && onBack && (
              <button
                id="navbar-back-btn"
                onClick={onBack}
                className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold border border-blue-400/50 shadow-md shadow-blue-950/60 transition-all active:scale-95 group shrink-0 min-h-[38px] sm:min-h-0"
                title="Go back to previous page (Backspace key)"
                aria-label="Back button"
              >
                <span className="font-mono text-sm font-extrabold leading-none text-sky-200 group-hover:text-white">⌫</span>
                <span className="inline font-bold">Back</span>
                <kbd className="hidden md:inline-block text-[9px] px-1 py-0.2 rounded bg-blue-900/80 border border-blue-400/40 text-sky-200 font-mono">
                  ⌫
                </kbd>
              </button>
            )}

            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-1.5 sm:gap-3 group text-left transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-xl min-w-0"
              aria-label="SSTPadho by Arshad Home"
            >
              {/* New Emblem Logo */}
              <div className="relative flex-shrink-0">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                  <img
                    src="/app-logo.png"
                    alt="SST Educational Emblem"
                    className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(56,189,248,0.35)]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col justify-center min-w-0">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="font-heading font-extrabold text-base sm:text-xl tracking-tight text-white group-hover:text-sky-200 transition-colors leading-none truncate">
                    SST<span className="text-amber-400">Padho</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-medium px-1.5 sm:px-2 py-0.5 rounded-full bg-gradient-to-r from-sky-950/90 to-[#0b274a]/90 border border-sky-500/40 text-sky-200 shadow-xs tracking-normal shrink-0">
                    <span className="text-sky-300/70 font-normal">by</span>
                    <span className="text-white font-semibold">Arshad</span>
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-sky-200/70 font-medium tracking-wide hidden sm:block mt-1 leading-none">
                  Social Science • Classes 6–12
                </span>
              </div>
            </button>

            {/* Subtle Divider between Brand and Class Switcher */}
            <div className="h-6 w-px bg-sky-800/40 hidden md:block" />

            {/* Class Dropdown Switcher (Visible across all devices) */}
            <div className="relative block shrink-0">
              <button
                onClick={() => setClassDropdownOpen(!classDropdownOpen)}
                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-xl bg-[#08203e] hover:bg-[#0d2e57] border border-sky-800/50 text-sky-100 text-xs font-bold transition-colors shadow-xs min-h-[38px] sm:min-h-0"
                title="Change active class"
                aria-label={`Change class, currently Class ${activeClass}`}
              >
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
                <span className="text-xs font-bold">
                  <span className="hidden xs:inline">Class </span>
                  <span>{activeClass}</span>
                </span>
                <ChevronDown
                  className={`w-3 h-3 text-sky-300 transition-transform duration-200 ${
                    classDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {classDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-20"
                    onClick={() => setClassDropdownOpen(false)}
                  />
                  <div className="absolute left-0 mt-2 w-64 bg-[#071d37] rounded-2xl shadow-2xl border border-sky-800/60 py-2 z-30 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-1.5 border-b border-sky-900/60 text-[11px] font-bold text-sky-400 uppercase tracking-wider font-mono">
                      Select Your Class
                    </div>
                    <div className="p-1.5 space-y-1">
                      {CLASS_LEVELS.map((cls) => {
                        const details = CLASS_DETAILS[cls];
                        const isSelected = activeClass === cls;
                        return (
                          <button
                            key={cls}
                            onClick={() => {
                              setActiveClass(cls);
                              setClassDropdownOpen(false);
                              onNavigate('class');
                            }}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                                : 'text-sky-100 hover:bg-[#0c2a52]'
                            }`}
                          >
                            <div>
                              <div className="font-semibold">Class {cls}</div>
                              <div
                                className={`text-[10px] truncate max-w-[160px] ${
                                  isSelected ? 'text-sky-100' : 'text-sky-300/60'
                                }`}
                              >
                                {details.boards}
                              </div>
                            </div>
                            {isSelected && (
                              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Desktop & Tablet Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => onNavigate('home')}
              className={`px-2.5 lg:px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                currentView === 'home'
                  ? 'bg-blue-600 text-white font-bold shadow-sm shadow-blue-600/30'
                  : 'text-sky-200/80 hover:text-white hover:bg-[#092244]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('class')}
              className={`flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                currentView === 'class'
                  ? 'bg-blue-600 text-white font-bold shadow-sm shadow-blue-600/30'
                  : 'text-sky-200/80 hover:text-white hover:bg-[#092244]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Class {activeClass}</span>
            </button>
            <button
              onClick={() => onNavigate('high-yield')}
              className={`flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                currentView === 'high-yield'
                  ? 'bg-blue-600 text-white font-bold shadow-sm shadow-blue-600/30'
                  : 'text-sky-200/80 hover:text-white hover:bg-[#092244]'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>High-Yield</span>
            </button>
            <button
              onClick={() => onNavigate('map-lab')}
              className={`flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                currentView === 'map-lab'
                  ? 'bg-blue-600 text-white font-bold shadow-sm shadow-blue-600/30'
                  : 'text-sky-200/80 hover:text-white hover:bg-[#092244]'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="hidden lg:inline">Map Lab</span>
            </button>
            <button
              onClick={() => onNavigate('question-bank')}
              className={`flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                currentView === 'question-bank'
                  ? 'bg-blue-600 text-white font-bold shadow-sm shadow-blue-600/30'
                  : 'text-sky-200/80 hover:text-white hover:bg-[#092244]'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="hidden xl:inline">Questions</span>
            </button>
            {/* Three Dots Button for More Tools & Modules */}
            <div className="relative" ref={moreMenuRef}>
              <button
                id="three-dots-nav-btn"
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isMoreViewActive || moreMenuOpen
                    ? 'bg-blue-600 text-white font-bold shadow-sm shadow-blue-600/30 ring-1 ring-blue-400/40'
                    : 'text-sky-200/80 hover:text-white hover:bg-[#092244]'
                }`}
                title="Click to open more tools (High-Yield, Map Lab, Timeline, Revision, Progress)"
                aria-label="More study modules"
                aria-expanded={moreMenuOpen}
              >
                <MoreHorizontal className="w-4 h-4 text-sky-300" />
                <span>More</span>
                <ChevronDown
                  className={`w-3 h-3 text-sky-300/80 transition-transform duration-200 ${
                    moreMenuOpen ? 'rotate-180' : ''
                  }`}
                />
                {completedCount > 0 && !isMoreViewActive && (
                  <span className="w-4 h-4 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center font-bold ml-0.5">
                    {completedCount}
                  </span>
                )}
                {isMoreViewActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
                )}
              </button>

              {/* Three Dots Dropdown Menu */}
              {moreMenuOpen && (
                <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-[#071d37] rounded-2xl shadow-2xl border border-sky-800/80 p-2 z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl">
                  <div className="px-3 py-2 border-b border-sky-900/60 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                      <MoreHorizontal className="w-3.5 h-3.5 text-sky-400" />
                      <span>Study Tools &amp; Modules</span>
                    </span>
                    <span className="text-[10px] text-sky-300/60 font-mono">Class {activeClass}</span>
                  </div>

                  <div className="py-1.5 space-y-1">
                    {/* High-Yield Folder */}
                    <button
                      onClick={() => {
                        onNavigate('high-yield');
                        setMoreMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all flex items-center justify-between group ${
                        currentView === 'high-yield'
                          ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                          : 'text-sky-100 hover:bg-[#0c2a52]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-amber-950/60 border border-amber-700/50 text-amber-400 flex items-center justify-center flex-shrink-0">
                          <FolderOpen className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-white group-hover:text-amber-200">
                            High-Yield Folder
                          </div>
                          <div className="text-[10px] text-sky-300/60">
                            68 frequent exam chapters dossier
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-950/80 text-amber-300 border border-amber-800/50 font-bold font-mono">
                        68
                      </span>
                    </button>

                    {/* Rapid Revision */}
                    <button
                      onClick={() => {
                        onNavigate('revision');
                        setMoreMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all flex items-center justify-between group ${
                        currentView === 'revision'
                          ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                          : 'text-sky-100 hover:bg-[#0c2a52]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-rose-950/60 border border-rose-700/50 text-rose-400 flex items-center justify-center flex-shrink-0">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-white group-hover:text-rose-200">
                            10-Min Rapid Revision
                          </div>
                          <div className="text-[10px] text-sky-300/60">
                            Flash summaries &amp; golden exam points
                          </div>
                        </div>
                      </div>
                      {currentView === 'revision' && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </button>

                    {/* Map Lab */}
                    <button
                      onClick={() => {
                        onNavigate('map-lab');
                        setMoreMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all flex items-center justify-between group ${
                        currentView === 'map-lab'
                          ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                          : 'text-sky-100 hover:bg-[#0c2a52]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-700/50 text-emerald-400 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-white group-hover:text-emerald-200">
                            Interactive Map Lab
                          </div>
                          <div className="text-[10px] text-sky-300/60">
                            Geography &amp; historical India maps
                          </div>
                        </div>
                      </div>
                      {currentView === 'map-lab' && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </button>

                    {/* Timeline */}
                    <button
                      onClick={() => {
                        onNavigate('timeline');
                        setMoreMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all flex items-center justify-between group ${
                        currentView === 'timeline'
                          ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                          : 'text-sky-100 hover:bg-[#0c2a52]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-amber-950/60 border border-amber-700/50 text-amber-400 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-white group-hover:text-amber-200">
                            History Timeline
                          </div>
                          <div className="text-[10px] text-sky-300/60">
                            1757–1950 Freedom struggle chronology
                          </div>
                        </div>
                      </div>
                      {currentView === 'timeline' && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </button>

                    {/* Progress */}
                    <button
                      onClick={() => {
                        onNavigate('progress');
                        setMoreMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all flex items-center justify-between group ${
                        currentView === 'progress'
                          ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                          : 'text-sky-100 hover:bg-[#0c2a52]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-700/50 text-sky-400 flex items-center justify-center flex-shrink-0">
                          <Award className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-white group-hover:text-sky-200">
                            Progress &amp; Badges
                          </div>
                          <div className="text-[10px] text-sky-300/60">
                            {completedCount} chapters completed
                          </div>
                        </div>
                      </div>
                      {completedCount > 0 ? (
                        <span className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center font-bold">
                          {completedCount}
                        </span>
                      ) : (
                        currentView === 'progress' && <Check className="w-4 h-4 text-white" />
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-2.5 sm:px-3 py-2 rounded-xl bg-[#08203e] hover:bg-[#0d2e57] text-sky-200 hover:text-white text-xs font-medium border border-sky-800/50 transition-all group min-h-[40px] sm:min-h-0 min-w-[40px] justify-center"
              title="Search Library (Cmd+K)"
              aria-label="Search SST"
            >
              <Search className="w-4 h-4 text-sky-400 group-hover:text-white" />
              <span className="hidden md:inline">Search SST...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-semibold bg-[#04172e] border border-sky-800/60 rounded shadow-xs text-sky-300">
                ⌘K
              </kbd>
            </button>

            {/* Mobile Menu Toggle (screens under md) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-sky-200 hover:text-white hover:bg-[#08203e] min-w-[40px] min-h-[40px] flex items-center justify-center border border-transparent hover:border-sky-800/40"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-sky-300" /> : <Menu className="w-5 h-5 text-sky-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer (screens under md) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-sky-950/80 bg-[#04172e] px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-150">
          {/* Mobile Quick Class Switcher Strip */}
          <div className="space-y-1.5">
            <div className="text-[11px] font-bold text-sky-400 uppercase tracking-wider px-1 font-mono flex items-center justify-between">
              <span>Select Class Level:</span>
              <span className="text-white font-sans text-xs font-semibold">Active: Class {activeClass}</span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {CLASS_LEVELS.map((cls) => (
                <button
                  key={cls}
                  onClick={() => {
                    setActiveClass(cls);
                    onNavigate('class');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors min-h-[36px] flex items-center justify-center ${
                    cls === activeClass
                      ? 'bg-blue-600 text-white shadow-sm ring-1 ring-blue-400/50'
                      : 'bg-[#08203e] text-sky-200/80 hover:bg-[#0d2e57] hover:text-white border border-sky-800/40'
                  }`}
                >
                  Class {cls}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {(canGoBack || currentView !== 'home') && onBack && (
              <button
                onClick={() => {
                  onBack();
                  setMobileMenuOpen(false);
                }}
                className="col-span-2 flex items-center justify-center gap-2 p-3 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md hover:bg-blue-500 transition-colors min-h-[44px]"
              >
                <span className="font-mono text-sm font-bold">⌫</span>
                <span>Back</span>
              </button>
            )}
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-3 rounded-xl bg-[#071d37] text-sky-100 text-xs font-semibold hover:bg-blue-600 min-h-[44px] transition-colors"
            >
              <span>🏠</span>
              <span>Home</span>
            </button>
            <button
              onClick={() => {
                onNavigate('class');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-3 rounded-xl bg-[#071d37] text-sky-100 text-xs font-semibold hover:bg-blue-600 min-h-[44px] transition-colors"
            >
              <span>📚</span>
              <span>Class {activeClass} SST</span>
            </button>
            <button
              onClick={() => {
                onNavigate('question-bank');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-3 rounded-xl bg-[#071d37] text-sky-100 text-xs font-semibold hover:bg-blue-600 min-h-[44px] transition-colors"
            >
              <span>🧠</span>
              <span>Question Bank</span>
            </button>
            <button
              onClick={() => {
                onNavigate('map-lab');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-3 rounded-xl bg-[#071d37] text-sky-100 text-xs font-semibold hover:bg-blue-600 min-h-[44px] transition-colors"
            >
              <span>🗺️</span>
              <span>Map Lab</span>
            </button>
            <button
              onClick={() => {
                onNavigate('timeline');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-3 rounded-xl bg-[#071d37] text-sky-100 text-xs font-semibold hover:bg-blue-600 min-h-[44px] transition-colors"
            >
              <span>⏳</span>
              <span>History Timeline</span>
            </button>
            <button
              onClick={() => {
                onNavigate('revision');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-3 rounded-xl bg-[#071d37] text-rose-300 text-xs font-semibold hover:bg-blue-600 hover:text-white min-h-[44px] transition-colors"
            >
              <span>⚡</span>
              <span>Rapid Revision</span>
            </button>
            <button
              onClick={() => {
                onNavigate('high-yield');
                setMobileMenuOpen(false);
              }}
              className="col-span-2 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#092244] border border-amber-600/40 text-amber-300 text-xs font-semibold hover:bg-amber-600 hover:text-white min-h-[44px] transition-colors"
            >
              <span>📂</span>
              <span>High-Yield &amp; Popular Folder</span>
            </button>
          </div>
          <div className="pt-2 border-t border-sky-950/80 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                onNavigate('progress');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 text-xs font-bold text-sky-300 hover:text-white py-2 px-2 min-h-[44px]"
            >
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{completedCount} Chapters Done</span>
            </button>
            <button
              onClick={() => {
                onOpenSearch();
                setMobileMenuOpen(false);
              }}
              className="text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-3.5 py-2.5 rounded-xl shadow-sm min-h-[44px] flex items-center gap-1.5"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search Library</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
