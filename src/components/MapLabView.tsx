import React, { useState, useMemo } from 'react';
import {
  MapPin,
  Compass,
  Award,
  Layers,
  Sparkles,
  Info,
  CheckCircle2,
  Printer,
  RotateCcw,
  Search,
} from 'lucide-react';
import { MAP_LOCATIONS, MAP_CATEGORIES, MapCategoryMeta } from '../data/mapData';
import { MapLocation } from '../types/sst';

interface MapLabViewProps {
  onBack?: () => void;
}

export const MapLabView: React.FC<MapLabViewProps> = ({ onBack }) => {
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string>('all');
  const [activeLocation, setActiveLocation] = useState<MapLocation | null>(MAP_LOCATIONS[0]);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);

  // Filtered locations
  const filteredLocations = useMemo(() => {
    if (selectedCategoryKey === 'all') return MAP_LOCATIONS;
    return MAP_LOCATIONS.filter((loc) => loc.category === selectedCategoryKey);
  }, [selectedCategoryKey]);

  // Quiz items pool
  const quizItems = useMemo(() => {
    return MAP_LOCATIONS.slice(0, 8);
  }, []);

  const currentQuizTarget = quizItems[quizIndex];

  const handlePinClick = (loc: MapLocation) => {
    if (isQuizMode) {
      if (loc.id === currentQuizTarget.id) {
        setQuizFeedback(`✓ Correct! That is ${loc.name}, ${loc.state}.`);
        setQuizScore((prev) => prev + 1);
        setTimeout(() => {
          setQuizFeedback(null);
          if (quizIndex < quizItems.length - 1) {
            setQuizIndex((prev) => prev + 1);
          } else {
            setQuizFeedback('🎉 Amazing! You completed all map questions!');
          }
        }, 1200);
      } else {
        setQuizFeedback(`✗ Not quite! That was ${loc.name}. Try finding: ${currentQuizTarget.name}`);
      }
    } else {
      setActiveLocation(loc);
    }
  };

  const handleResetQuiz = () => {
    setQuizScore(0);
    setQuizIndex(0);
    setQuizFeedback(null);
    setIsQuizMode(true);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-teal-900 via-emerald-950 to-slate-900 text-white shadow-xl space-y-3 border border-emerald-800/40">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {onBack && (
              <button
                id="map-lab-backspace-btn"
                onClick={onBack}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md border border-emerald-400/40 transition-all"
                title="Go back (Backspace key)"
              >
                <span className="font-mono text-sm leading-none font-bold">⌫</span>
                <span>Backspace</span>
                <kbd className="hidden sm:inline-block text-[9px] px-1 py-0.2 bg-emerald-800/80 rounded font-mono border border-emerald-400/30">⌫</kbd>
              </button>
            )}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <MapPin className="w-3.5 h-3.5" />
              Board Examination Map Syllabus
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsQuizMode(!isQuizMode);
                setQuizFeedback(null);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                isQuizMode
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30'
              }`}
            >
              {isQuizMode ? 'Exit Quiz Mode' : '🎮 Play "Locate on Map" Quiz'}
            </button>

            <button
              onClick={() => window.print()}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition-colors no-print"
              title="Print Blank Map Practice Sheet"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-300" />
              <span className="hidden sm:inline">Print Blank Map</span>
            </button>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
          🗺️ Interactive SST Map Lab
        </h1>
        <p className="text-xs sm:text-sm text-emerald-200 max-w-2xl leading-relaxed">
          Master CBSE Class 9 &amp; 10 Map Work. Explore freedom struggle hot spots, Congress sessions,
          dams, major soil belts, steel industries, and tech parks.
        </p>

        {/* Quiz Mode Active Notification */}
        {isQuizMode && (
          <div className="p-4 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-200 flex items-center justify-between animate-in fade-in">
            <div className="text-xs">
              <span className="font-bold text-amber-300">TARGET TO LOCATE: </span>
              <span className="text-white font-bold text-sm underline decoration-amber-400 decoration-2 ml-1">
                {currentQuizTarget.examSignificance} ({currentQuizTarget.name})
              </span>
              {quizFeedback && (
                <div className="text-xs font-semibold mt-1 text-white bg-black/40 px-2.5 py-1 rounded-md inline-block">
                  {quizFeedback}
                </div>
              )}
            </div>
            <div className="text-right text-xs font-bold text-amber-300">
              Score: {quizScore} / {quizItems.length}
            </div>
          </div>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-bold no-print">
        <button
          onClick={() => setSelectedCategoryKey('all')}
          className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
            selectedCategoryKey === 'all'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
          }`}
        >
          All Sites ({MAP_LOCATIONS.length})
        </button>
        {MAP_CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategoryKey(cat.key)}
            className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
              selectedCategoryKey === cat.key
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
            }`}
          >
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Map Layout Grid: SVG Canvas + Location Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* SVG Interactive India Map Canvas */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-4 sm:p-6 shadow-xs flex flex-col items-center justify-center relative min-h-[500px] overflow-hidden">
          <div className="absolute top-4 left-4 z-10 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-emerald-600 animate-spin-slow" />
            Interactive India Map
          </div>

          <div className="absolute top-4 right-4 z-10 text-[10px] font-medium px-2 py-1 rounded bg-slate-100 text-slate-600">
            Click pins to inspect details
          </div>

          {/* SVG Canvas */}
          <div className="relative w-full max-w-[460px] aspect-[4/5] my-4">
            <svg
              viewBox="0 0 400 500"
              className="w-full h-full drop-shadow-sm"
              style={{ filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.05))' }}
            >
              {/* Simplified geographic silhouette of India */}
              <path
                d="M170 30 
                   C 185 20, 210 20, 220 35 
                   C 240 50, 260 70, 240 100 
                   C 270 120, 310 130, 340 150 
                   C 360 170, 330 200, 310 210 
                   C 320 230, 300 250, 280 270 
                   C 260 300, 250 330, 230 380 
                   C 210 420, 190 470, 185 480 
                   C 180 470, 160 420, 140 370 
                   C 120 330, 110 300, 90 280 
                   C 70 260, 60 230, 80 200 
                   C 90 180, 100 150, 110 120 
                   C 120 80, 150 50, 170 30 Z"
                fill="#ecfdf5"
                stroke="#10b981"
                strokeWidth="2"
                strokeDasharray="none"
              />

              {/* Tropic of Cancer indicator line */}
              <line
                x1="40"
                y1="235"
                x2="360"
                y2="235"
                stroke="#cbd5e1"
                strokeDasharray="4 4"
                strokeWidth="1.5"
              />
              <text x="50" y="230" fill="#94a3b8" fontSize="8" fontWeight="bold">
                Tropic of Cancer (23.5° N)
              </text>

              {/* River Ganges sketch */}
              <path
                d="M150 110 Q 220 140 290 180"
                fill="none"
                stroke="#93c5fd"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Bay of Bengal / Arabian Sea water marks */}
              <text x="70" y="380" fill="#cbd5e1" fontSize="10" fontWeight="bold" letterSpacing="1">
                ARABIAN SEA
              </text>
              <text x="260" y="380" fill="#cbd5e1" fontSize="10" fontWeight="bold" letterSpacing="1">
                BAY OF BENGAL
              </text>

              {/* Location Pins */}
              {filteredLocations.map((loc) => {
                const isSelected = activeLocation?.id === loc.id;
                // Convert percentage coordinates (x: 0-100, y: 0-100) to SVG viewBox (400 x 500)
                const px = (loc.x / 100) * 400;
                const py = (loc.y / 100) * 500;

                return (
                  <g
                    key={loc.id}
                    onClick={() => handlePinClick(loc)}
                    className="cursor-pointer group"
                  >
                    {/* Pulsing ring on selected */}
                    {isSelected && (
                      <circle
                        cx={px}
                        cy={py}
                        r="12"
                        className="animate-ping fill-emerald-400/40"
                      />
                    )}
                    {/* Pin Circle */}
                    <circle
                      cx={px}
                      cy={py}
                      r={isSelected ? 7 : 5}
                      className={`transition-transform duration-200 ${
                        loc.category === 'history'
                          ? 'fill-amber-600 stroke-white'
                          : loc.category === 'rivers'
                          ? 'fill-cyan-600 stroke-white'
                          : loc.category === 'industries'
                          ? 'fill-rose-600 stroke-white'
                          : loc.category === 'ports'
                          ? 'fill-indigo-600 stroke-white'
                          : 'fill-emerald-600 stroke-white'
                      }`}
                      strokeWidth="2"
                    />

                    {/* Pin Label */}
                    <text
                      x={px + 7}
                      y={py + 3}
                      fontSize="9"
                      fontWeight="bold"
                      className="fill-slate-800 pointer-events-none drop-shadow-xs"
                    >
                      {loc.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="w-full text-center text-xs text-slate-400 pt-2 border-t border-slate-100">
            Interactive representation for educational reference. All map items aligned with CBSE Syllabus.
          </div>
        </div>

        {/* Location Details Card */}
        <div className="lg:col-span-5 space-y-4">
          {activeLocation ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase tracking-wider">
                  {activeLocation.category}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {activeLocation.state}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  {activeLocation.name}
                </h3>
                <p className="text-xs font-bold text-emerald-700 mt-0.5">
                  State: {activeLocation.state}
                </p>
              </div>

              {/* Description Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-slate-600" />
                  Historical / Geographical Details
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {activeLocation.description}
                </p>
              </div>

              {/* Exam Tip */}
              {activeLocation.examSignificance && (
                <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <div className="font-bold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    Board Exam Question Tip:
                  </div>
                  <p className="leading-relaxed">
                    {activeLocation.examSignificance}
                  </p>
                </div>
              )}

              {/* Related Chapter */}
              {activeLocation.relatedChapter && (
                <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Linked Chapter ID:</span>
                  <span className="font-bold text-slate-700">
                    {activeLocation.relatedChapter}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 text-slate-500">
              Click any pinpoint on the map to inspect historical significance and scoring tips.
            </div>
          )}

          {/* Quick List of Sites */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Locations in this Category ({filteredLocations.length})
            </h4>
            <div className="max-h-60 overflow-y-auto space-y-1 pr-1">
              {filteredLocations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => handlePinClick(loc)}
                  className={`w-full text-left p-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                    activeLocation?.id === loc.id
                      ? 'bg-emerald-50 text-emerald-900 font-bold border border-emerald-200'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span>{loc.name}</span>
                  <span className="text-[10px] text-slate-400 font-normal">
                    {loc.state}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Backspace Action */}
      {onBack && (
        <div className="pt-6 border-t border-slate-700/40 flex items-center justify-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all border border-emerald-400/40"
          >
            <span className="font-mono text-sm font-bold">⌫</span>
            <span>Backspace to Previous Screen</span>
            <kbd className="text-[10px] px-1.5 py-0.5 bg-emerald-800/80 rounded font-mono">⌫</kbd>
          </button>
        </div>
      )}
    </div>
  );
};
