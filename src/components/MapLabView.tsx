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
  Globe2,
  Map as MapIcon,
  FileText,
  Navigation,
} from 'lucide-react';
import { MAP_LOCATIONS, MAP_CATEGORIES } from '../data/mapData';
import { MapLocation } from '../types/sst';
import { RealInteractiveMap } from './RealInteractiveMap';
import { CartographicAtlasMap } from './CartographicAtlasMap';
import { IndiaControlMap } from './IndiaControlMap';

interface MapLabViewProps {
  onBack?: () => void;
  onOpenChapter?: (chapterId: string) => void;
}

type MapDisplayMode = 'control' | 'gis' | 'atlas' | 'blank';

export const MapLabView: React.FC<MapLabViewProps> = ({ onBack, onOpenChapter }) => {
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string>('all');
  const [activeLocation, setActiveLocation] = useState<MapLocation | null>(MAP_LOCATIONS[0]);
  const [displayMode, setDisplayMode] = useState<MapDisplayMode>('control');
  const [searchQuery, setSearchQuery] = useState('');

  // Quiz state
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);

  // Filtered locations
  const filteredLocations = useMemo(() => {
    let result = MAP_LOCATIONS;
    if (selectedCategoryKey !== 'all') {
      result = result.filter((loc) => loc.category === selectedCategoryKey);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (loc) =>
          loc.name.toLowerCase().includes(q) ||
          loc.state.toLowerCase().includes(q) ||
          loc.description.toLowerCase().includes(q) ||
          loc.examSignificance.toLowerCase().includes(q)
      );
    }
    return result;
  }, [selectedCategoryKey, searchQuery]);

  // Quiz items pool (first 8 locations)
  const quizItems = useMemo(() => {
    return MAP_LOCATIONS.slice(0, 10);
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
            setQuizFeedback('🎉 Outstanding! You successfully located all target sites!');
          }
        }, 1200);
      } else {
        setQuizFeedback(`✗ Not quite! That is ${loc.name}. Try finding: ${currentQuizTarget.name}`);
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
    <div className="space-y-6 pb-16">
      {/* Banner */}
      <div className="p-4 sm:p-6 md:p-8 rounded-3xl bg-gradient-to-r from-teal-900 via-emerald-950 to-slate-900 text-white shadow-xl space-y-4 border border-emerald-800/40">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {onBack && (
              <button
                id="map-lab-back-btn"
                onClick={onBack}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md border border-emerald-400/40 transition-all min-h-[34px]"
                title="Go back (Backspace key)"
              >
                <span className="font-mono text-sm leading-none font-bold">⌫</span>
                <span>Back</span>
                <kbd className="hidden sm:inline-block text-[9px] px-1 py-0.2 bg-emerald-800/80 rounded font-mono border border-emerald-400/30">⌫</kbd>
              </button>
            )}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <MapPin className="w-3.5 h-3.5" />
              <span>CBSE Board Exam Official Map Syllabus</span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => {
                setIsQuizMode(!isQuizMode);
                setQuizFeedback(null);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all min-h-[34px] flex items-center gap-1.5 ${
                isQuizMode
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>{isQuizMode ? 'Exit Quiz' : '🎮 Map Quiz Challenge'}</span>
            </button>

            <button
              onClick={() => {
                setDisplayMode('blank');
                setTimeout(() => window.print(), 150);
              }}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition-colors no-print min-h-[34px]"
              title="Print Blank Map Practice Sheet"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-300" />
              <span className="hidden sm:inline">Print Exam Sheet</span>
              <span className="sm:hidden">Print</span>
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white">
            🗺️ Real SST Map Lab &amp; Cartographic Atlas
          </h1>
          <p className="text-xs sm:text-sm text-emerald-200/90 max-w-2xl leading-relaxed mt-1">
            Real GIS interactive maps with satellite imagery, OpenStreetMap, and official CBSE cartographic
            atlas with rivers, relief, and high-yield examination locations for Class 9 &amp; 10.
          </p>
        </div>

        {/* Real Map Design Mode Selector Tabs */}
        <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-emerald-800/60 no-print">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300/80 mr-1 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5" />
            Map Design:
          </span>
          <button
            onClick={() => setDisplayMode('control')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              displayMode === 'control'
                ? 'bg-white text-slate-900 shadow-md scale-105'
                : 'bg-emerald-950/60 text-emerald-200 hover:bg-emerald-900/60 border border-emerald-700/50'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>🇮🇳 India Political Map (State-wise)</span>
          </button>

          <button
            onClick={() => setDisplayMode('gis')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              displayMode === 'gis'
                ? 'bg-white text-slate-900 shadow-md scale-105'
                : 'bg-emerald-950/60 text-emerald-200 hover:bg-emerald-900/60 border border-emerald-700/50'
            }`}
          >
            <Globe2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Real GIS Map (Satellite / OSM / Atlas)</span>
          </button>

          <button
            onClick={() => setDisplayMode('atlas')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              displayMode === 'atlas'
                ? 'bg-white text-slate-900 shadow-md scale-105'
                : 'bg-emerald-950/60 text-emerald-200 hover:bg-emerald-900/60 border border-emerald-700/50'
            }`}
          >
            <MapIcon className="w-3.5 h-3.5 text-blue-600" />
            <span>CBSE Cartographic Atlas (Relief &amp; Rivers)</span>
          </button>

          <button
            onClick={() => setDisplayMode('blank')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              displayMode === 'blank'
                ? 'bg-white text-slate-900 shadow-md scale-105'
                : 'bg-emerald-950/60 text-emerald-200 hover:bg-emerald-900/60 border border-emerald-700/50'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-amber-600" />
            <span>Blank Board Exam Practice Sheet</span>
          </button>
        </div>

        {/* Quiz Mode Active Notification */}
        {isQuizMode && (
          <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in">
            <div className="text-xs">
              <span className="font-bold text-amber-300">QUESTION {quizIndex + 1} OF {quizItems.length}: </span>
              <span className="text-white font-bold text-sm underline decoration-amber-400 decoration-2 ml-1">
                {currentQuizTarget.examSignificance}
              </span>
              <div className="text-emerald-300 text-[11px] mt-0.5">
                Hint: Locate {currentQuizTarget.name} in {currentQuizTarget.state}
              </div>
              {quizFeedback && (
                <div className="text-xs font-semibold mt-1.5 text-white bg-black/60 px-3 py-1 rounded-lg inline-block border border-amber-400/40">
                  {quizFeedback}
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs font-bold text-amber-300 sm:text-right">
                Score: {quizScore} / {quizItems.length}
              </div>
              <button
                onClick={handleResetQuiz}
                className="px-2.5 py-1 rounded-lg bg-amber-500/30 hover:bg-amber-500/50 text-amber-200 text-[11px] font-bold flex items-center gap-1"
                title="Restart quiz"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Restart</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 no-print">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-bold no-scrollbar">
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

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search city, dam, port, battle..."
            className="w-full pl-9 pr-3 py-2 bg-white rounded-xl border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 shadow-xs"
          />
        </div>
      </div>

      {/* Map Layout Grid: Map Canvas + Location Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Main Map Presentation */}
        <div className="lg:col-span-7 space-y-4">
          {displayMode === 'control' && (
            <div className="space-y-2">
              <IndiaControlMap
                locations={filteredLocations}
                activeLocation={activeLocation}
                onSelectLocation={handlePinClick}
                isQuizMode={isQuizMode}
                currentQuizTarget={currentQuizTarget}
              />
              <div className="flex items-center justify-between text-[11px] text-slate-500 px-2">
                <span>Political Map of India with labelled states and pinned CBSE syllabus places</span>
                <span className="font-semibold text-emerald-700">Click any pin or toggle state names above</span>
              </div>
            </div>
          )}

          {displayMode === 'gis' && (
            <div className="space-y-2">
              <RealInteractiveMap
                locations={filteredLocations}
                activeLocation={activeLocation}
                onSelectLocation={handlePinClick}
                isQuizMode={isQuizMode}
                currentQuizTarget={currentQuizTarget}
              />
              <div className="flex items-center justify-between text-[11px] text-slate-500 px-2">
                <span>Real GIS coordinates powered by OpenStreetMap &amp; CARTO tiles</span>
                <span className="font-semibold text-emerald-700">Live GPS Coordinates Active</span>
              </div>
            </div>
          )}

          {displayMode === 'atlas' && (
            <div className="space-y-2">
              <CartographicAtlasMap
                locations={filteredLocations}
                activeLocation={activeLocation}
                onSelectLocation={handlePinClick}
                isQuizMode={isQuizMode}
                currentQuizTarget={currentQuizTarget}
                isBlankPracticeMode={false}
              />
              <div className="flex items-center justify-between text-[11px] text-slate-500 px-2">
                <span>Accurate CBSE Polyconic Projection with Major Rivers, Relief &amp; Tropic of Cancer</span>
                <button
                  onClick={() => setDisplayMode('gis')}
                  className="font-bold text-emerald-700 hover:underline"
                >
                  Switch to Real GIS Satellite Map &rarr;
                </button>
              </div>
            </div>
          )}

          {displayMode === 'blank' && (
            <div className="bg-white p-6 rounded-3xl border-2 border-slate-300 shadow-md space-y-4 print:p-0 print:border-none print:shadow-none">
              {/* Exam Header for Printable Map Sheet */}
              <div className="border-b-2 border-slate-800 pb-3 flex flex-wrap items-center justify-between gap-3 text-slate-800">
                <div>
                  <h2 className="text-base font-black font-serif uppercase tracking-wide">
                    CBSE CLASS 9 / 10 &middot; SOCIAL SCIENCE MAP PRACTICE
                  </h2>
                  <p className="text-[10px] text-slate-500 font-mono">
                    Official Exam Identification &amp; Location Practice Sheet
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span>Student Name: _______________________</span>
                  <span>Roll No: __________</span>
                </div>
              </div>

              {/* Blank Outline Map */}
              <CartographicAtlasMap
                locations={filteredLocations.slice(0, 10)}
                activeLocation={null}
                onSelectLocation={() => {}}
                isBlankPracticeMode={true}
              />

              {/* Identification Questions Bank */}
              <div className="pt-4 border-t border-slate-200">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Examination Questions: Identify the marked places (A to {String.fromCharCode(65 + Math.min(filteredLocations.length, 10) - 1)})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                  {filteredLocations.slice(0, 10).map((loc, idx) => {
                    const letter = String.fromCharCode(65 + idx);
                    return (
                      <div key={loc.id} className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2">
                        <span className="font-bold text-slate-900 bg-white px-1.5 py-0.5 rounded border border-slate-300 shrink-0">
                          {letter}
                        </span>
                        <div>
                          <p className="font-semibold text-slate-800">{loc.examSignificance}</p>
                          <p className="text-[10px] text-slate-400 italic">State: {loc.state}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Location Details Card & Quick Navigator */}
        <div className="lg:col-span-5 space-y-4">
          {activeLocation ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase tracking-wider capitalize">
                  {activeLocation.category}
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  {activeLocation.state}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  {activeLocation.name}
                </h3>
                <div className="flex items-center gap-3 text-xs font-medium text-slate-500 mt-1">
                  <span>State: <strong className="text-slate-800">{activeLocation.state}</strong></span>
                  {activeLocation.lat && activeLocation.lng && (
                    <span className="font-mono text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                      {activeLocation.lat.toFixed(2)}°N, {activeLocation.lng.toFixed(2)}°E
                    </span>
                  )}
                </div>
              </div>

              {/* Description Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-slate-600" />
                  <span>Syllabus &amp; Historical Context</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {activeLocation.description}
                </p>
              </div>

              {/* Exam Significance Tip */}
              {activeLocation.examSignificance && (
                <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-amber-800">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Board Exam Question Prompt:</span>
                  </div>
                  <p className="leading-relaxed font-medium">
                    &ldquo;{activeLocation.examSignificance}&rdquo;
                  </p>
                </div>
              )}

              {/* Related Chapter Link */}
              {activeLocation.relatedChapter && (
                <div className="pt-2 text-xs text-slate-500 flex items-center justify-between border-t border-slate-100">
                  <span>Linked Chapter:</span>
                  {onOpenChapter ? (
                    <button
                      onClick={() => onOpenChapter(activeLocation.relatedChapter!)}
                      className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 hover:underline text-xs"
                    >
                      <span>Study Chapter Notes</span>
                      <Navigation className="w-3 h-3" />
                    </button>
                  ) : (
                    <span className="font-bold text-slate-700">
                      {activeLocation.relatedChapter}
                    </span>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 text-xs">
              Click any location on the map to inspect historical significance, exam tips, and real GPS coordinates.
            </div>
          )}

          {/* Quick List of Sites */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Matching Syllabus Sites ({filteredLocations.length})
              </h4>
              <span className="text-[10px] text-slate-400">Click to locate</span>
            </div>
            <div className="max-h-72 overflow-y-auto space-y-1 pr-1">
              {filteredLocations.map((loc) => {
                const isSelected = activeLocation?.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => handlePinClick(loc)}
                    className={`w-full text-left p-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-emerald-50 text-emerald-900 font-bold border border-emerald-200 shadow-xs'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <div
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          loc.category === 'history'
                            ? 'bg-amber-500'
                            : loc.category === 'rivers'
                            ? 'bg-cyan-500'
                            : loc.category === 'industries'
                            ? 'bg-purple-500'
                            : loc.category === 'ports'
                            ? 'bg-blue-500'
                            : 'bg-emerald-500'
                        }`}
                      />
                      <span className="truncate">{loc.name}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-normal shrink-0 ml-2">
                      {loc.state}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Back Action */}
      {onBack && (
        <div className="pt-6 border-t border-slate-200 flex items-center justify-center no-print">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all border border-emerald-400/40"
          >
            <span className="font-mono text-sm font-bold">⌫</span>
            <span>Back to Previous Screen</span>
            <kbd className="text-[10px] px-1.5 py-0.5 bg-emerald-800/80 rounded font-mono">⌫</kbd>
          </button>
        </div>
      )}
    </div>
  );
};
