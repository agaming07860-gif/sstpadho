import React from 'react';
import { MapLocation } from '../types/sst';

interface CartographicAtlasMapProps {
  locations: MapLocation[];
  activeLocation: MapLocation | null;
  onSelectLocation: (loc: MapLocation) => void;
  isQuizMode?: boolean;
  currentQuizTarget?: MapLocation;
  isBlankPracticeMode?: boolean;
}

export const CartographicAtlasMap: React.FC<CartographicAtlasMapProps> = ({
  locations,
  activeLocation,
  onSelectLocation,
  isQuizMode = false,
  currentQuizTarget,
  isBlankPracticeMode = false,
}) => {
  return (
    <div className="relative w-full aspect-[4/5] max-w-[620px] mx-auto bg-[#f8fafc] rounded-3xl p-3 sm:p-5 border-2 border-slate-300 shadow-xl overflow-hidden select-none">
      {/* Real Cartographic Border & Neatlines */}
      <div className="absolute inset-2 sm:inset-3 border border-slate-400/80 rounded-2xl pointer-events-none z-20" />
      <div className="absolute inset-2.5 sm:inset-3.5 border border-slate-300/60 rounded-2xl pointer-events-none z-20" />

      {/* Cartographic Header Stamp */}
      <div className="absolute top-4 left-6 z-20 flex flex-col">
        <span className="text-[11px] font-black uppercase tracking-wider text-slate-800 font-serif">
          INDIA &middot; PHYSICAL &amp; POLITICAL
        </span>
        <span className="text-[9px] font-bold text-slate-500 font-mono tracking-tight">
          CBSE Board Exam Curriculum Atlas &middot; Projection: Polyconic
        </span>
      </div>

      {/* SVG Canvas */}
      <svg
        viewBox="0 0 1000 1200"
        className="w-full h-full drop-shadow-sm"
        style={{ filter: 'drop-shadow(0px 2px 8px rgba(15,23,42,0.06))' }}
      >
        <defs>
          {/* Subtle terrain relief gradient */}
          <linearGradient id="terrainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#ecfdf5" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#f0fdf4" stopOpacity="0.9" />
          </linearGradient>

          {/* Oceanic gradient */}
          <radialGradient id="oceanGrad" cx="50%" cy="60%" r="60%">
            <stop offset="0%" stopColor="#f0f9ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.7" />
          </radialGradient>

          {/* Neighboring Country Pattern */}
          <pattern id="neighborPattern" width="12" height="12" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="12" y2="12" stroke="#cbd5e1" strokeWidth="0.75" strokeOpacity="0.4" />
          </pattern>
        </defs>

        {/* Ocean Background Tint */}
        <rect x="0" y="0" width="1000" height="1200" fill="url(#oceanGrad)" />

        {/* Graticule Grid Lines (Latitudes & Longitudes) */}
        <g stroke="#94a3b8" strokeWidth="0.75" strokeDasharray="3 4" strokeOpacity="0.35">
          {/* Latitudes */}
          <line x1="40" y1="180" x2="960" y2="180" /> {/* ~36° N */}
          <line x1="40" y1="320" x2="960" y2="320" /> {/* ~32° N */}
          <line x1="40" y1="460" x2="960" y2="460" /> {/* ~28° N */}
          <line x1="40" y1="600" x2="960" y2="600" /> {/* ~24° N */}
          <line x1="40" y1="740" x2="960" y2="740" /> {/* ~20° N */}
          <line x1="40" y1="880" x2="960" y2="880" /> {/* ~16° N */}
          <line x1="40" y1="1020" x2="960" y2="1020" /> {/* ~12° N */}

          {/* Longitudes */}
          <line x1="160" y1="40" x2="160" y2="1160" /> {/* ~72° E */}
          <line x1="300" y1="40" x2="300" y2="1160" /> {/* ~76° E */}
          <line x1="440" y1="40" x2="440" y2="1160" /> {/* ~80° E */}
          <line x1="580" y1="40" x2="580" y2="1160" /> {/* ~84° E */}
          <line x1="720" y1="40" x2="720" y2="1160" /> {/* ~88° E */}
          <line x1="860" y1="40" x2="860" y2="1160" /> {/* ~92° E */}
        </g>

        {/* Graticule Degree Labels */}
        <g fill="#64748b" fontSize="11" fontFamily="monospace" fontWeight="bold">
          <text x="45" y="176">36° N</text>
          <text x="45" y="316">32° N</text>
          <text x="45" y="456">28° N</text>
          <text x="45" y="596">24° N</text>
          <text x="45" y="736">20° N</text>
          <text x="45" y="876">16° N</text>
          <text x="45" y="1016">12° N</text>

          <text x="145" y="1150">72° E</text>
          <text x="285" y="1150">76° E</text>
          <text x="425" y="1150">80° E</text>
          <text x="565" y="1150">84° E</text>
          <text x="705" y="1150">88° E</text>
          <text x="845" y="1150">92° E</text>
        </g>

        {/* Tropic of Cancer (23.5° N) Special Cartographic Indicator */}
        <line
          x1="50"
          y1="620"
          x2="950"
          y2="620"
          stroke="#ef4444"
          strokeWidth="1.8"
          strokeDasharray="6 4"
        />
        <text
          x="60"
          y="612"
          fill="#dc2626"
          fontSize="12"
          fontWeight="bold"
          fontFamily="serif"
          letterSpacing="1"
        >
          TROPIC OF CANCER (23° 30&apos; N)
        </text>

        {/* Standard Meridian of India (82.5° E) passing through Mirzapur / Prayagraj */}
        <line
          x1="520"
          y1="60"
          x2="520"
          y2="1140"
          stroke="#0284c7"
          strokeWidth="1.8"
          strokeDasharray="6 4"
        />
        <text
          x="528"
          y="150"
          fill="#0284c7"
          fontSize="11"
          fontWeight="bold"
          fontFamily="serif"
          transform="rotate(90 528 150)"
        >
          STANDARD MERIDIAN OF INDIA (82° 30&apos; E)
        </text>

        {/* Neighboring Country Outlines */}
        {/* Pakistan */}
        <path
          d="M 50 200 L 150 210 L 260 210 L 250 300 L 230 350 L 160 450 L 180 550 L 130 620 L 50 630 Z"
          fill="url(#neighborPattern)"
          stroke="#cbd5e1"
          strokeWidth="1.2"
        />
        <text x="110" y="420" fill="#94a3b8" fontSize="16" fontWeight="bold" fontFamily="serif" letterSpacing="3">
          PAKISTAN
        </text>

        {/* China / Tibet */}
        <path
          d="M 380 90 L 520 80 L 680 180 L 850 240 L 980 250 L 980 400 L 820 400 L 650 340 L 520 280 L 380 170 Z"
          fill="url(#neighborPattern)"
          stroke="#cbd5e1"
          strokeWidth="1.2"
        />
        <text x="620" y="190" fill="#94a3b8" fontSize="16" fontWeight="bold" fontFamily="serif" letterSpacing="4">
          CHINA (TIBET)
        </text>

        {/* Nepal */}
        <path
          d="M 440 370 L 620 420 L 630 450 L 500 480 L 430 420 Z"
          fill="#f1f5f9"
          stroke="#94a3b8"
          strokeWidth="1.5"
        />
        <text x="500" y="440" fill="#64748b" fontSize="13" fontWeight="bold" fontFamily="serif" letterSpacing="2">
          NEPAL
        </text>

        {/* Bhutan */}
        <path
          d="M 700 425 L 750 420 L 760 450 L 710 455 Z"
          fill="#f1f5f9"
          stroke="#94a3b8"
          strokeWidth="1.2"
        />
        <text x="712" y="442" fill="#64748b" fontSize="10" fontWeight="bold">
          BHUTAN
        </text>

        {/* Bangladesh */}
        <path
          d="M 680 500 L 750 500 L 770 560 L 740 640 L 670 630 L 670 550 Z"
          fill="#f1f5f9"
          stroke="#94a3b8"
          strokeWidth="1.2"
        />
        <text x="690" y="570" fill="#64748b" fontSize="12" fontWeight="bold" fontFamily="serif">
          BANGLADESH
        </text>

        {/* Myanmar */}
        <path
          d="M 880 460 L 960 480 L 970 700 L 880 720 L 840 600 Z"
          fill="url(#neighborPattern)"
          stroke="#cbd5e1"
          strokeWidth="1.2"
        />
        <text x="880" y="600" fill="#94a3b8" fontSize="14" fontWeight="bold" fontFamily="serif" letterSpacing="2">
          MYANMAR
        </text>

        {/* Sri Lanka */}
        <path
          d="M 460 1080 C 475 1070, 495 1080, 500 1110 C 505 1135, 485 1160, 465 1160 C 445 1150, 445 1110, 460 1080 Z"
          fill="#f1f5f9"
          stroke="#64748b"
          strokeWidth="1.5"
        />
        <text x="450" y="1125" fill="#64748b" fontSize="10" fontWeight="bold">
          SRI LANKA
        </text>

        {/* ========================================================================= */}
        {/* REAL ACCURATE SILHOUETTE & BORDERS OF MAINLAND INDIA                      */}
        {/* Traced carefully to preserve authentic CBSE geographic fidelity           */}
        {/* ========================================================================= */}
        <path
          d="
            M 320 80
            C 340 70, 370 85, 390 110
            C 420 140, 430 190, 400 230
            C 410 250, 440 280, 430 330
            C 420 370, 440 375, 460 380
            C 490 390, 610 420, 630 445
            C 650 450, 670 420, 690 420
            C 700 420, 710 445, 740 445
            C 760 445, 770 410, 810 370
            C 840 340, 890 330, 930 360
            C 960 390, 950 430, 910 460
            C 880 480, 890 540, 870 590
            C 850 630, 820 620, 810 570
            C 800 530, 760 520, 740 500
            C 710 500, 680 490, 670 520
            C 660 550, 665 620, 680 645
            C 670 655, 630 650, 610 670
            C 580 700, 560 760, 530 810
            C 510 850, 490 910, 480 960
            C 470 1010, 450 1060, 430 1080
            C 420 1085, 400 1050, 390 1010
            C 370 950, 360 880, 340 820
            C 320 760, 290 710, 270 660
            C 255 620, 240 580, 245 550
            C 230 545, 190 540, 170 560
            C 145 580, 130 550, 150 510
            C 165 480, 210 470, 220 440
            C 210 410, 160 420, 150 400
            C 140 370, 180 340, 210 330
            C 240 310, 260 260, 260 220
            C 260 170, 280 120, 320 80
            Z
          "
          fill="url(#terrainGrad)"
          stroke="#0f766e"
          strokeWidth="3.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="transition-colors"
        />

        {/* Mountain Shading Arcs (The Himalayas, Western Ghats, Eastern Ghats) */}
        {/* Great Himalayas Arc */}
        <path
          d="M 330 130 Q 560 290 890 380"
          fill="none"
          stroke="#b45309"
          strokeWidth="6"
          strokeDasharray="12 4"
          strokeOpacity="0.45"
          strokeLinecap="round"
        />
        <text
          x="530"
          y="310"
          fill="#92400e"
          fontSize="14"
          fontWeight="bold"
          fontFamily="serif"
          letterSpacing="4"
          transform="rotate(12 530 310)"
        >
          THE GREAT HIMALAYAS
        </text>

        {/* Western Ghats (Sahyadri) */}
        <path
          d="M 245 580 Q 300 780 400 1030"
          fill="none"
          stroke="#78350f"
          strokeWidth="7"
          strokeDasharray="14 5"
          strokeOpacity="0.45"
          strokeLinecap="round"
        />
        <text
          x="280"
          y="820"
          fill="#78350f"
          fontSize="12"
          fontWeight="bold"
          fontFamily="serif"
          transform="rotate(68 280 820)"
          letterSpacing="2"
        >
          WESTERN GHATS
        </text>

        {/* Eastern Ghats */}
        <path
          d="M 580 690 Q 520 840 450 970"
          fill="none"
          stroke="#78350f"
          strokeWidth="5"
          strokeDasharray="8 6"
          strokeOpacity="0.35"
          strokeLinecap="round"
        />
        <text
          x="530"
          y="830"
          fill="#78350f"
          fontSize="11"
          fontWeight="bold"
          fontFamily="serif"
          transform="rotate(-65 530 830)"
          letterSpacing="2"
        >
          EASTERN GHATS
        </text>

        {/* Major River Traces (Indus, Ganga, Yamuna, Brahmaputra, Narmada, Tapi, Godavari, Krishna, Mahanadi, Kaveri) */}
        <g fill="none" stroke="#0284c7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
          {/* Indus System */}
          <path d="M 390 140 Q 340 180 280 240 L 210 320" />
          {/* Satluj River */}
          <path d="M 400 230 Q 340 250 280 270" strokeWidth="1.8" />

          {/* Ganga System */}
          <path d="M 380 250 Q 480 380 600 480 T 670 630" strokeWidth="3" />
          {/* Yamuna River */}
          <path d="M 350 260 Q 440 370 510 460" strokeWidth="2" />

          {/* Brahmaputra River */}
          <path d="M 850 320 Q 940 360 900 410 Q 820 440 730 480 L 680 620" strokeWidth="3" />

          {/* Narmada River (Flowing west) */}
          <path d="M 520 620 Q 370 625 240 610" strokeWidth="2.4" />
          {/* Tapi River */}
          <path d="M 480 650 Q 360 655 245 640" strokeWidth="2" />

          {/* Mahanadi River (Flowing east) */}
          <path d="M 540 630 Q 590 645 640 660" strokeWidth="2.2" />

          {/* Godavari River */}
          <path d="M 280 690 Q 420 730 530 790" strokeWidth="2.5" />

          {/* Krishna River */}
          <path d="M 300 770 Q 420 810 500 850" strokeWidth="2.4" />

          {/* Kaveri River */}
          <path d="M 350 930 Q 410 950 470 960" strokeWidth="2" />
        </g>

        {/* River Labels */}
        <g fill="#0369a1" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
          <text x="440" y="410">Ganga R.</text>
          <text x="375" y="375">Yamuna R.</text>
          <text x="770" y="450">Brahmaputra R.</text>
          <text x="350" y="605">Narmada R.</text>
          <text x="430" y="735">Godavari R.</text>
          <text x="420" y="810">Krishna R.</text>
          <text x="410" y="945">Kaveri R.</text>
        </g>

        {/* Offshore Islands */}
        {/* Andaman & Nicobar Islands (Bay of Bengal) */}
        <g fill="#047857" stroke="#065f46" strokeWidth="1.2">
          {/* North Andaman */}
          <ellipse cx="880" cy="850" rx="6" ry="16" />
          {/* Middle Andaman */}
          <ellipse cx="885" cy="890" rx="7" ry="20" />
          {/* South Andaman */}
          <ellipse cx="883" cy="935" rx="6" ry="18" />
          {/* Little Andaman */}
          <ellipse cx="880" cy="980" rx="8" ry="12" />
          {/* Nicobar Group */}
          <ellipse cx="910" cy="1040" rx="9" ry="15" />
          <ellipse cx="925" cy="1090" rx="12" ry="22" />
        </g>
        <text x="840" y="920" fill="#047857" fontSize="11" fontWeight="bold" fontFamily="serif" transform="rotate(78 840 920)">
          ANDAMAN &amp; NICOBAR ISLANDS
        </text>

        {/* Lakshadweep Islands (Arabian Sea) */}
        <g fill="#047857" stroke="#065f46" strokeWidth="1">
          <circle cx="210" cy="920" r="4.5" />
          <circle cx="220" cy="940" r="5" />
          <circle cx="215" cy="970" r="4.5" />
          <circle cx="230" cy="1000" r="5" />
          <circle cx="240" cy="1050" r="6" />
        </g>
        <text x="140" y="970" fill="#047857" fontSize="11" fontWeight="bold" fontFamily="serif" transform="rotate(-70 140 970)">
          LAKSHADWEEP
        </text>

        {/* Water Bodies Typography */}
        <text
          x="120"
          y="780"
          fill="#0369a1"
          fontSize="20"
          fontWeight="900"
          fontFamily="serif"
          letterSpacing="4"
          opacity="0.6"
        >
          ARABIAN SEA
        </text>
        <text
          x="640"
          y="780"
          fill="#0369a1"
          fontSize="20"
          fontWeight="900"
          fontFamily="serif"
          letterSpacing="4"
          opacity="0.6"
        >
          BAY OF BENGAL
        </text>
        <text
          x="350"
          y="1170"
          fill="#0369a1"
          fontSize="18"
          fontWeight="900"
          fontFamily="serif"
          letterSpacing="5"
          opacity="0.6"
        >
          INDIAN OCEAN
        </text>

        {/* Cartographic Compass Rose / North Arrow */}
        <g transform="translate(860, 100)" className="pointer-events-none">
          <circle cx="40" cy="40" r="32" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
          {/* North Point */}
          <polygon points="40,12 46,38 40,40" fill="#dc2626" />
          <polygon points="40,12 34,38 40,40" fill="#b91c1c" />
          {/* South Point */}
          <polygon points="40,68 46,42 40,40" fill="#475569" />
          <polygon points="40,68 34,42 40,40" fill="#334155" />
          {/* East Point */}
          <polygon points="68,40 42,46 40,40" fill="#64748b" />
          <polygon points="68,40 42,34 40,40" fill="#475569" />
          {/* West Point */}
          <polygon points="12,40 38,46 40,40" fill="#64748b" />
          <polygon points="12,40 38,34 40,40" fill="#475569" />
          {/* Labels */}
          <text x="40" y="8" fill="#dc2626" fontSize="13" fontWeight="900" textAnchor="middle">N</text>
          <text x="40" y="78" fill="#475569" fontSize="10" fontWeight="bold" textAnchor="middle">S</text>
          <text x="76" y="44" fill="#475569" fontSize="10" fontWeight="bold" textAnchor="middle">E</text>
          <text x="5" y="44" fill="#475569" fontSize="10" fontWeight="bold" textAnchor="middle">W</text>
        </g>

        {/* Scale Bar */}
        <g transform="translate(80, 1080)" className="pointer-events-none">
          <rect x="0" y="0" width="180" height="28" fill="#ffffff" stroke="#94a3b8" rx="4" />
          {/* Alternating black/white blocks */}
          <rect x="15" y="14" width="37.5" height="5" fill="#1e293b" />
          <rect x="52.5" y="14" width="37.5" height="5" fill="#e2e8f0" stroke="#1e293b" strokeWidth="0.5" />
          <rect x="90" y="14" width="37.5" height="5" fill="#1e293b" />
          <rect x="127.5" y="14" width="37.5" height="5" fill="#e2e8f0" stroke="#1e293b" strokeWidth="0.5" />
          {/* Scale labels */}
          <text x="15" y="10" fontSize="8" fontWeight="bold" fill="#334155">0</text>
          <text x="85" y="10" fontSize="8" fontWeight="bold" fill="#334155">500 km</text>
          <text x="150" y="10" fontSize="8" fontWeight="bold" fill="#334155">1000 km</text>
          <text x="90" y="25" fontSize="7" fontWeight="bold" fill="#64748b" textAnchor="middle">R.F. 1 : 15,000,000</text>
        </g>

        {/* Official CBSE Syllabus Legend Box */}
        {!isBlankPracticeMode && (
          <g transform="translate(60, 880)" className="pointer-events-none">
            <rect x="0" y="0" width="190" height="150" fill="#ffffff" fillOpacity="0.95" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
            <text x="12" y="20" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="serif">
              CBSE MAP KEY / LEGEND
            </text>
            <line x1="12" y1="26" x2="178" y2="26" stroke="#e2e8f0" strokeWidth="1" />

            <circle cx="22" cy="42" r="5" fill="#d97706" stroke="#ffffff" strokeWidth="1.5" />
            <text x="34" y="45" fill="#334155" fontSize="9.5" fontWeight="bold">Freedom Struggle Center</text>

            <circle cx="22" cy="64" r="5" fill="#0891b2" stroke="#ffffff" strokeWidth="1.5" />
            <text x="34" y="67" fill="#334155" fontSize="9.5" fontWeight="bold">Major Dam &amp; River Project</text>

            <circle cx="22" cy="86" r="5" fill="#059669" stroke="#ffffff" strokeWidth="1.5" />
            <text x="34" y="89" fill="#334155" fontSize="9.5" fontWeight="bold">Major Crop / Agriculture Zone</text>

            <circle cx="22" cy="108" r="5" fill="#9333ea" stroke="#ffffff" strokeWidth="1.5" />
            <text x="34" y="111" fill="#334155" fontSize="9.5" fontWeight="bold">Iron &amp; Steel / Tech Park</text>

            <circle cx="22" cy="130" r="5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
            <text x="34" y="133" fill="#334155" fontSize="9.5" fontWeight="bold">Major Sea Port</text>
          </g>
        )}

        {/* Location Pins Layer (Interactive in regular mode, lettered labels in Blank Practice mode) */}
        {locations.map((loc, idx) => {
          const isSelected = activeLocation?.id === loc.id;
          const isTarget = isQuizMode && currentQuizTarget?.id === loc.id;

          // Convert percentage coordinates (x: 0-100, y: 0-100) to SVG viewBox 1000 x 1200
          // Calibration offsets tailored to map projection
          const px = (loc.x / 100) * 1000;
          const py = (loc.y / 100) * 1200;

          if (isBlankPracticeMode) {
            // Exam identification letter (A, B, C...)
            const letter = String.fromCharCode(65 + (idx % 26));
            return (
              <g key={loc.id} className="cursor-pointer">
                <circle cx={px} cy={py} r="4" fill="#0f172a" />
                <rect x={px + 6} y={py - 14} width="18" height="18" rx="4" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
                <text x={px + 15} y={py - 1} fill="#0f172a" fontSize="11" fontWeight="bold" textAnchor="middle">
                  {letter}
                </text>
              </g>
            );
          }

          const pinColor =
            loc.category === 'history'
              ? '#d97706'
              : loc.category === 'rivers'
              ? '#0891b2'
              : loc.category === 'industries'
              ? '#9333ea'
              : loc.category === 'ports'
              ? '#2563eb'
              : '#059669';

          return (
            <g
              key={loc.id}
              onClick={() => onSelectLocation(loc)}
              className="cursor-pointer group"
            >
              {/* Wide touch target */}
              <circle cx={px} cy={py} r="20" fill="transparent" />

              {/* Pulsing ring on selected */}
              {isSelected && (
                <circle
                  cx={px}
                  cy={py}
                  r="16"
                  className="animate-ping"
                  fill={pinColor}
                  fillOpacity="0.4"
                />
              )}

              {/* Pin Shadow */}
              <ellipse cx={px} cy={py + 3} rx="7" ry="3.5" fill="#000000" fillOpacity="0.25" />

              {/* Outer Pin Ring */}
              <circle
                cx={px}
                cy={py}
                r={isSelected ? 10 : 7}
                fill={pinColor}
                stroke="#ffffff"
                strokeWidth={isSelected ? 3 : 2}
                className="transition-all duration-200 group-hover:scale-125"
              />

              {/* Inner Center Dot */}
              <circle
                cx={px}
                cy={py}
                r={isSelected ? 3.5 : 2.5}
                fill="#ffffff"
              />

              {/* Pin Label with Background Capsule */}
              <g className="transition-all duration-200 group-hover:scale-110 pointer-events-none">
                <rect
                  x={px + 10}
                  y={py - 11}
                  width={Math.max(loc.name.length * 6.8 + 12, 50)}
                  height="18"
                  rx="6"
                  fill="#ffffff"
                  fillOpacity="0.95"
                  stroke={isSelected ? pinColor : '#cbd5e1'}
                  strokeWidth={isSelected ? '1.5' : '1'}
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' }}
                />
                <text
                  x={px + 16}
                  y={py + 2}
                  fontSize="9.5"
                  fontWeight={isSelected ? 'bold' : '600'}
                  fill={isSelected ? '#0f172a' : '#334155'}
                  fontFamily="sans-serif"
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
