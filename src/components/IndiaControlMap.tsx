import React, { useState } from 'react';
import { MapLocation } from '../types/sst';
import { Eye, EyeOff, Layers, Sparkles } from 'lucide-react';

interface IndiaControlMapProps {
  locations: MapLocation[];
  activeLocation: MapLocation | null;
  onSelectLocation: (loc: MapLocation) => void;
  isQuizMode?: boolean;
  currentQuizTarget?: MapLocation;
}

// Map each location to its exact state coordinate on the control map (viewBox 0 0 900 1100)
export const STATE_LOC_COORDINATES: Record<string, { x: number; y: number }> = {
  // Punjab
  'loc-amritsar': { x: 288, y: 250 },
  // Himachal Pradesh / Punjab
  'loc-bhakra-nangal': { x: 326, y: 232 },
  // Uttaranchal (Uttarakhand)
  'loc-tehri': { x: 388, y: 256 },
  // Uttar Pradesh
  'loc-noida': { x: 342, y: 322 },
  'loc-sugarcane-up': { x: 420, y: 328 },
  'loc-chauri-chaura': { x: 512, y: 360 },
  // Bihar
  'loc-champaran': { x: 566, y: 348 },
  // Jharkhand
  'loc-jamshedpur': { x: 588, y: 426 },
  // West Bengal
  'loc-calcutta': { x: 642, y: 456 },
  'loc-jute-wb': { x: 636, y: 432 },
  // Assam
  'loc-tea-assam': { x: 772, y: 334 },
  // Gujarat
  'loc-kandla': { x: 142, y: 432 },
  'loc-ahmedabad': { x: 206, y: 434 },
  'loc-kheda': { x: 212, y: 450 },
  'loc-cotton-gujarat': { x: 178, y: 468 },
  'loc-sardar-sarovar': { x: 242, y: 464 },
  'loc-dandi': { x: 212, y: 482 },
  // Chhattisgarh
  'loc-bhilai': { x: 472, y: 488 },
  // Orissa (Odisha)
  'loc-hirakud': { x: 532, y: 476 },
  // Maharashtra
  'loc-mumbai-port': { x: 220, y: 520 },
  'loc-nagpur': { x: 384, y: 492 },
  // Goa
  'loc-marmagao': { x: 236, y: 604 },
  // Andhra Pradesh
  'loc-visakhapatnam': { x: 504, y: 568 },
  'loc-nagarjuna-sagar': { x: 388, y: 606 },
  // Karnataka
  'loc-coffee-karnataka': { x: 280, y: 686 },
  'loc-bengaluru': { x: 332, y: 712 },
  // Kerala
  'loc-kochi': { x: 294, y: 756 },
  // Tamil Nadu
  'loc-madras': { x: 396, y: 684 },
};

// States metadata with centers and labels matching the control map
const CONTROL_STATES: { id: string; name: string; x: number; y: number; rotate?: number; isVertical?: boolean }[] = [
  { id: 'ladakh', name: 'Ladakh', x: 350, y: 156 },
  { id: 'jk', name: 'Jammu\n& Kashmir', x: 278, y: 174 },
  { id: 'hp', name: 'Himachal\nPradesh', x: 344, y: 220 },
  { id: 'punjab', name: 'Punjab', x: 292, y: 252 },
  { id: 'uttaranchal', name: 'Uttaranchal', x: 396, y: 260 },
  { id: 'haryana', name: 'Haryana', x: 310, y: 288, rotate: -25 },
  { id: 'rajasthan', name: 'Rajasthan', x: 232, y: 346 },
  { id: 'up', name: 'Uttar Pradesh', x: 436, y: 334 },
  { id: 'bihar', name: 'Bihar', x: 574, y: 366 },
  { id: 'sikkim', name: 'Sikkim', x: 602, y: 332 },
  { id: 'jharkhand', name: 'Jharkhand', x: 570, y: 412 },
  { id: 'wb', name: 'West\nBengal', x: 636, y: 426 },
  { id: 'arunachal', name: 'Arunachal Pradesh', x: 798, y: 292, rotate: -18 },
  { id: 'assam', name: 'Assam', x: 752, y: 340 },
  { id: 'meghalaya', name: 'Meghalaya', x: 724, y: 360 },
  { id: 'nagaland', name: 'Nagaland', x: 812, y: 342, rotate: -65 },
  { id: 'manipur', name: 'Manipur', x: 806, y: 376 },
  { id: 'mizoram', name: 'Mizoram', x: 782, y: 418, rotate: -90 },
  { id: 'tripura', name: 'Tripura', x: 746, y: 406, rotate: -90 },
  { id: 'gujarat', name: 'Gujarat', x: 174, y: 436 },
  { id: 'mp', name: 'Madhya Pradesh', x: 374, y: 426 },
  { id: 'chhattisgarh', name: 'Chhattisgarh', x: 468, y: 476 },
  { id: 'orissa', name: 'Orissa', x: 544, y: 490 },
  { id: 'maharashtra', name: 'Maharashtra', x: 280, y: 518 },
  { id: 'goa', name: 'Goa', x: 232, y: 590 },
  { id: 'telangana', name: 'Telangana', x: 386, y: 566 },
  { id: 'andhra', name: 'Andhra Pradesh', x: 372, y: 642 },
  { id: 'karnataka', name: 'Karnataka', x: 294, y: 680 },
  { id: 'kerala', name: 'Kerala', x: 292, y: 746, isVertical: true },
  { id: 'tn', name: 'Tamil Nadu', x: 366, y: 738 },
  { id: 'srilanka', name: 'Sri Lanka', x: 426, y: 864 },
];

export const IndiaControlMap: React.FC<IndiaControlMapProps> = ({
  locations,
  activeLocation,
  onSelectLocation,
  isQuizMode = false,
  currentQuizTarget,
}) => {
  const [showStateLabels, setShowStateLabels] = useState(true);
  const [showPlacePins, setShowPlacePins] = useState(true);
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-[3/4] max-w-[640px] mx-auto bg-white rounded-3xl p-2 sm:p-4 border-2 border-slate-300 shadow-xl overflow-hidden select-none">
      {/* Top Floating Controls Bar */}
      <div className="absolute top-3 left-4 z-30 flex items-center gap-2">
        <button
          onClick={() => setShowStateLabels((prev) => !prev)}
          className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition-all flex items-center gap-1 shadow-xs border ${
            showStateLabels
              ? 'bg-slate-900 text-white border-slate-900'
              : 'bg-white/90 text-slate-700 border-slate-300 hover:bg-slate-100'
          }`}
          title="Toggle state name labels"
        >
          {showStateLabels ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
          <span>{showStateLabels ? 'State Names: ON' : 'State Names: OFF'}</span>
        </button>

        <button
          onClick={() => setShowPlacePins((prev) => !prev)}
          className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition-all flex items-center gap-1 shadow-xs border ${
            showPlacePins
              ? 'bg-emerald-700 text-white border-emerald-700'
              : 'bg-white/90 text-slate-700 border-slate-300 hover:bg-slate-100'
          }`}
          title="Toggle syllabus pins on map"
        >
          <Layers className="w-3 h-3" />
          <span>{showPlacePins ? 'Pins: ON' : 'Pins: OFF'}</span>
        </button>
      </div>

      {/* SVG Canvas Matching the Uploaded Map Exactly */}
      <svg
        viewBox="0 0 900 1100"
        className="w-full h-full drop-shadow-sm"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.06))' }}
      >
        <defs>
          {/* Vibrant ocean gradient matching the uploaded map blue */}
          <linearGradient id="oceanBlueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0074d9" />
            <stop offset="50%" stopColor="#0066cc" />
            <stop offset="100%" stopColor="#005bb5" />
          </linearGradient>
        </defs>

        {/* ========================================================================= */}
        {/* SOLID VIBRANT BLUE OCEAN AROUND PENINSULA (Matching Uploaded Map Exactly) */}
        {/* ========================================================================= */}
        <path
          d="
            M 0 450
            L 70 450
            C 100 440, 100 480, 120 480
            L 140 480
            C 140 500, 190 520, 205 525
            L 210 560
            C 215 570, 230 630, 250 690
            C 260 720, 290 820, 310 880
            C 315 895, 335 880, 345 840
            C 355 810, 375 790, 400 780
            C 415 760, 430 740, 440 690
            C 445 660, 470 630, 500 600
            C 530 570, 560 550, 600 520
            C 630 500, 650 490, 665 500
            L 670 480
            C 680 480, 700 500, 710 490
            L 720 510
            L 740 480
            C 755 490, 765 530, 780 580
            C 800 630, 810 680, 815 720
            C 820 735, 830 730, 840 680
            C 860 670, 880 660, 900 680
            L 900 1100
            L 0 1100
            Z
          "
          fill="url(#oceanBlueGradient)"
        />

        {/* ========================================================================= */}
        {/* BOLD "INDIA" HEADER (Top Right, matching image typography exactly)        */}
        {/* ========================================================================= */}
        <text
          x="710"
          y="105"
          fill="#111827"
          fontSize="56"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="12"
          textAnchor="middle"
        >
          INDIA
        </text>

        {/* ========================================================================= */}
        {/* COMPLETE MAINLAND SILHOUETTE & BASE FILL                                  */}
        {/* ========================================================================= */}
        <g stroke="#1e293b" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round">
          {/* Mainland Boundary Base */}
          <path
            d="
              M 270 120
              C 275 110, 310 100, 330 110
              C 350 120, 380 130, 395 130
              C 410 130, 420 150, 415 165
              C 410 175, 400 185, 410 200
              C 415 210, 390 230, 380 240
              C 395 245, 415 250, 430 260
              C 440 265, 430 280, 420 295
              C 415 305, 390 310, 375 320
              C 365 325, 370 340, 385 345
              C 400 350, 430 345, 450 345
              C 480 345, 520 340, 540 345
              C 560 350, 580 340, 595 330
              C 610 325, 620 340, 625 355
              C 640 350, 675 335, 700 330
              C 720 325, 740 315, 765 300
              C 790 285, 825 270, 850 280
              C 870 290, 880 315, 855 330
              C 840 340, 835 360, 830 380
              C 825 400, 820 420, 805 435
              C 790 445, 780 430, 775 410
              C 770 395, 755 390, 745 420
              C 735 425, 730 400, 715 390
              C 700 385, 690 395, 680 410
              C 675 425, 665 440, 665 465
              C 660 480, 655 490, 640 500
              C 630 505, 600 520, 580 540
              C 560 560, 530 585, 500 615
              C 470 645, 450 675, 435 710
              C 420 745, 400 770, 390 790
              C 375 805, 365 830, 340 860
              C 335 885, 320 890, 310 870
              C 295 830, 275 760, 260 700
              C 245 640, 235 590, 225 570
              C 215 550, 205 530, 195 530
              C 180 530, 150 500, 140 480
              C 115 480, 100 450, 105 430
              C 110 410, 150 410, 160 400
              C 170 390, 165 375, 145 365
              C 130 355, 135 330, 150 320
              C 165 310, 190 320, 210 290
              C 220 270, 240 270, 250 250
              C 260 230, 250 200, 255 180
              C 260 160, 265 140, 270 120
              Z
            "
            fill="#f8fafc"
          />

          {/* ========================================================================= */}
          {/* INTERNAL STATE BOUNDARIES (Traced accurately to match the control map)   */}
          {/* ========================================================================= */}

          {/* J&K / Ladakh dividing boundary line */}
          <path d="M 315 110 C 318 140, 305 170, 330 195" fill="none" strokeWidth="2" />

          {/* J&K / Himachal Pradesh & Punjab border */}
          <path d="M 260 200 C 275 195, 290 200, 310 195 L 340 205" fill="none" strokeWidth="2" />

          {/* Punjab / Himachal Pradesh */}
          <path d="M 310 195 C 315 220, 325 235, 335 245" fill="none" strokeWidth="1.8" />

          {/* Himachal / Uttaranchal */}
          <path d="M 355 210 C 365 225, 360 240, 370 250" fill="none" strokeWidth="1.8" />

          {/* Punjab / Haryana */}
          <path d="M 265 240 C 285 240, 305 250, 325 260 L 335 265" fill="none" strokeWidth="1.8" />

          {/* Haryana / Rajasthan */}
          <path d="M 265 265 C 275 280, 290 290, 300 315" fill="none" strokeWidth="1.8" />

          {/* Uttaranchal / Uttar Pradesh */}
          <path d="M 370 250 C 385 270, 410 275, 430 265" fill="none" strokeWidth="1.8" />

          {/* Haryana / UP (Yamuna border) */}
          <path d="M 335 265 C 338 290, 345 310, 340 330" fill="none" strokeWidth="1.8" />

          {/* Rajasthan / UP */}
          <path d="M 300 315 C 320 325, 340 335, 345 350" fill="none" strokeWidth="1.8" />

          {/* Rajasthan / Gujarat */}
          <path d="M 170 390 C 190 395, 205 400, 220 415" fill="none" strokeWidth="2" />

          {/* Rajasthan / MP */}
          <path d="M 220 415 C 235 390, 260 375, 275 385 C 290 395, 305 380, 315 365 L 345 350" fill="none" strokeWidth="2" />

          {/* Gujarat / MP */}
          <path d="M 220 415 C 235 430, 240 450, 255 460" fill="none" strokeWidth="2" />

          {/* Gujarat / Maharashtra */}
          <path d="M 195 530 C 215 515, 235 500, 255 490" fill="none" strokeWidth="2" />

          {/* MP / Maharashtra */}
          <path d="M 255 490 C 285 495, 335 480, 375 485 L 430 480" fill="none" strokeWidth="2" />

          {/* MP / UP */}
          <path d="M 345 350 C 365 370, 375 390, 400 385 C 430 380, 460 395, 490 395" fill="none" strokeWidth="2" />

          {/* UP / Bihar */}
          <path d="M 520 340 C 530 360, 525 385, 545 400" fill="none" strokeWidth="2" />

          {/* Bihar / Jharkhand */}
          <path d="M 525 395 C 555 400, 585 390, 620 405" fill="none" strokeWidth="2" />

          {/* Bihar / West Bengal */}
          <path d="M 610 350 C 625 370, 615 390, 620 405" fill="none" strokeWidth="2" />

          {/* Sikkim Border */}
          <path d="M 590 340 C 595 325, 605 320, 615 330 L 610 350 Z" fill="#f8fafc" strokeWidth="1.8" />

          {/* Jharkhand / West Bengal */}
          <path d="M 620 405 C 615 425, 605 440, 615 460" fill="none" strokeWidth="1.8" />

          {/* MP / Chhattisgarh */}
          <path d="M 430 480 C 435 460, 445 440, 460 435 C 475 430, 480 410, 490 395" fill="none" strokeWidth="2" />

          {/* Jharkhand / Chhattisgarh */}
          <path d="M 490 395 C 510 420, 515 440, 525 450" fill="none" strokeWidth="1.8" />

          {/* Chhattisgarh / Orissa */}
          <path d="M 525 450 C 510 470, 490 490, 485 520 C 480 540, 465 560, 455 570" fill="none" strokeWidth="2" />

          {/* Jharkhand / Orissa */}
          <path d="M 525 450 C 555 455, 580 450, 605 460" fill="none" strokeWidth="1.8" />

          {/* Orissa / West Bengal */}
          <path d="M 605 460 C 625 465, 640 475, 650 490" fill="none" strokeWidth="2" />

          {/* Maharashtra / Chhattisgarh */}
          <path d="M 430 480 C 435 510, 440 530, 435 550" fill="none" strokeWidth="1.8" />

          {/* Maharashtra / Telangana */}
          <path d="M 330 560 C 365 555, 395 565, 435 550" fill="none" strokeWidth="2" />

          {/* Maharashtra / Karnataka */}
          <path d="M 225 570 C 255 570, 290 565, 330 560" fill="none" strokeWidth="2" />

          {/* Goa Border */}
          <path d="M 225 585 C 240 585, 245 610, 230 615" fill="none" strokeWidth="1.8" />

          {/* Telangana / Chhattisgarh */}
          <path d="M 435 550 C 445 555, 450 565, 455 570" fill="none" strokeWidth="1.8" />

          {/* Chhattisgarh / Andhra Pradesh */}
          <path d="M 455 570 C 465 575, 475 580, 480 585" fill="none" strokeWidth="1.8" />

          {/* Telangana / Andhra Pradesh */}
          <path d="M 455 570 C 435 585, 410 610, 365 625 C 345 630, 340 640, 340 655" fill="none" strokeWidth="2" />

          {/* Karnataka / Telangana */}
          <path d="M 330 560 C 340 580, 350 605, 365 625" fill="none" strokeWidth="1.8" />

          {/* Karnataka / Andhra Pradesh */}
          <path d="M 340 655 C 350 675, 365 685, 375 700" fill="none" strokeWidth="2" />

          {/* Orissa / Andhra Pradesh */}
          <path d="M 480 585 C 505 580, 530 560, 560 550" fill="none" strokeWidth="2" />

          {/* Karnataka / Tamil Nadu */}
          <path d="M 320 730 C 345 735, 365 720, 375 700" fill="none" strokeWidth="2" />

          {/* Andhra Pradesh / Tamil Nadu */}
          <path d="M 375 700 C 390 705, 415 710, 435 710" fill="none" strokeWidth="2" />

          {/* Karnataka / Kerala */}
          <path d="M 260 700 C 275 715, 280 725, 290 735" fill="none" strokeWidth="2" />

          {/* Kerala / Tamil Nadu */}
          <path d="M 290 735 C 300 760, 310 810, 335 885" fill="none" strokeWidth="2" />

          {/* Northeast Seven Sisters Boundaries */}
          {/* Assam / Arunachal Pradesh */}
          <path d="M 700 330 C 740 325, 785 315, 830 335" fill="none" strokeWidth="1.8" />

          {/* Assam / Meghalaya */}
          <path d="M 680 375 C 710 370, 740 375, 765 375" fill="none" strokeWidth="1.8" />

          {/* Assam / Nagaland */}
          <path d="M 790 335 C 795 350, 800 360, 805 370" fill="none" strokeWidth="1.8" />

          {/* Nagaland / Manipur */}
          <path d="M 805 370 C 815 370, 825 372, 835 375" fill="none" strokeWidth="1.8" />

          {/* Manipur / Mizoram */}
          <path d="M 790 405 C 805 405, 815 405, 825 410" fill="none" strokeWidth="1.8" />

          {/* Assam / Mizoram */}
          <path d="M 765 390 C 775 400, 785 405, 790 405" fill="none" strokeWidth="1.8" />

          {/* Assam / Tripura */}
          <path d="M 740 385 C 745 395, 750 400, 755 405" fill="none" strokeWidth="1.8" />

          {/* ========================================================================= */}
          {/* SRI LANKA ISLAND (In the blue ocean south of Tamil Nadu)                 */}
          {/* ========================================================================= */}
          <path
            d="
              M 415 825
              C 430 815, 450 825, 455 850
              C 460 880, 445 915, 430 920
              C 410 920, 395 890, 400 860
              C 402 840, 408 830, 415 825
              Z
            "
            fill="#f8fafc"
            stroke="#1e293b"
            strokeWidth="2.2"
          />
        </g>

        {/* ========================================================================= */}
        {/* STATE NAME LABELS (Rendered exactly in the typography of the uploaded map)*/}
        {/* ========================================================================= */}
        {showStateLabels && (
          <g
            fill="#1e293b"
            fontSize="13"
            fontWeight="bold"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
            className="pointer-events-none select-none"
          >
            {CONTROL_STATES.map((st) => {
              if (st.isVertical) {
                // Vertical lettering for Kerala as in image: K e r a l a
                return (
                  <g key={st.id} transform={`translate(${st.x}, ${st.y})`}>
                    <text x="0" y="0" fontSize="11" fontWeight="bold">K</text>
                    <text x="0" y="14" fontSize="11" fontWeight="bold">e</text>
                    <text x="0" y="26" fontSize="11" fontWeight="bold">r</text>
                    <text x="0" y="38" fontSize="11" fontWeight="bold">a</text>
                    <text x="0" y="50" fontSize="11" fontWeight="bold">l</text>
                    <text x="0" y="62" fontSize="11" fontWeight="bold">a</text>
                  </g>
                );
              }

              const transform = st.rotate ? `rotate(${st.rotate}, ${st.x}, ${st.y})` : undefined;
              const lines = st.name.split('\n');

              return (
                <text
                  key={st.id}
                  x={st.x}
                  y={st.y}
                  transform={transform}
                  fontSize={
                    st.id === 'goa' || st.id === 'sikkim' || st.id === 'tripura'
                      ? '10'
                      : st.id === 'mp' || st.id === 'rajasthan' || st.id === 'maharashtra'
                      ? '14'
                      : '12'
                  }
                  letterSpacing={st.id === 'rajasthan' ? '1' : '0.2'}
                >
                  {lines.map((line, lIdx) => (
                    <tspan
                      key={lIdx}
                      x={st.x}
                      dy={lIdx === 0 ? 0 : 13}
                    >
                      {line}
                    </tspan>
                  ))}
                </text>
              );
            })}
          </g>
        )}

        {/* ========================================================================= */}
        {/* SYLLABUS PLACES PINNED ACCORDING TO THIS MAP                              */}
        {/* ========================================================================= */}
        {showPlacePins &&
          locations.map((loc) => {
            const coords = STATE_LOC_COORDINATES[loc.id];
            if (!coords) return null;

            const isSelected = activeLocation?.id === loc.id;
            const isTarget = isQuizMode && currentQuizTarget?.id === loc.id;

            const pinColor =
              loc.category === 'history'
                ? '#d97706' // amber
                : loc.category === 'rivers'
                ? '#0284c7' // cyan/blue
                : loc.category === 'industries'
                ? '#9333ea' // purple
                : loc.category === 'ports'
                ? '#2563eb' // royal blue
                : '#059669'; // emerald

            return (
              <g
                key={loc.id}
                onClick={() => onSelectLocation(loc)}
                className="cursor-pointer group"
                transform={`translate(${coords.x}, ${coords.y})`}
              >
                {/* Generous touch target */}
                <circle cx="0" cy="0" r="18" fill="transparent" />

                {/* Animated ripple on active selection or quiz target */}
                {(isSelected || isTarget) && (
                  <circle
                    cx="0"
                    cy="0"
                    r="15"
                    fill={pinColor}
                    fillOpacity="0.4"
                    className="animate-ping"
                  />
                )}

                {/* Pin Shadow */}
                <ellipse cx="0" cy="2" rx="6" ry="3" fill="#000000" fillOpacity="0.3" />

                {/* Pin Base Circle */}
                <circle
                  cx="0"
                  cy="0"
                  r={isSelected ? 8.5 : 6}
                  fill={pinColor}
                  stroke="#ffffff"
                  strokeWidth={isSelected ? 2.5 : 1.8}
                  className="transition-transform duration-200 group-hover:scale-125"
                  style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))' }}
                />

                {/* Center White Core */}
                <circle cx="0" cy="0" r={isSelected ? 3 : 2} fill="#ffffff" />

                {/* Pin Label Tooltip Pill */}
                <g className="transition-all duration-200 pointer-events-none">
                  <rect
                    x="8"
                    y="-10"
                    width={Math.max(loc.name.length * 6.5 + 10, 48)}
                    height="18"
                    rx="5"
                    fill="#0f172a"
                    fillOpacity="0.9"
                    stroke="#ffffff"
                    strokeWidth="0.8"
                    className={`${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                  />
                  <text
                    x="13"
                    y="3"
                    fontSize="9"
                    fontWeight="bold"
                    fill="#ffffff"
                    fontFamily="sans-serif"
                    className={`${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                  >
                    {loc.name}
                  </text>
                </g>
              </g>
            );
          })}
      </svg>
    </div>
  );
};
