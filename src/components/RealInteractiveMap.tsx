import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapLocation } from '../types/sst';
import { Layers, Maximize2, Compass, Eye, MapPin } from 'lucide-react';

interface RealInteractiveMapProps {
  locations: MapLocation[];
  activeLocation: MapLocation | null;
  onSelectLocation: (loc: MapLocation) => void;
  isQuizMode?: boolean;
  currentQuizTarget?: MapLocation;
}

type MapTileStyle = 'voyager' | 'satellite' | 'osm' | 'topo';

const TILE_LAYERS: Record<MapTileStyle, { name: string; url: string; attribution: string; maxZoom: number }> = {
  voyager: {
    name: 'Carto Atlas',
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://carto.com/" target="_blank">CARTO</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  },
  satellite: {
    name: 'Satellite',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    maxZoom: 18,
  },
  osm: {
    name: 'OpenStreetMap',
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  },
  topo: {
    name: 'Topography',
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution: 'Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap (CC-BY-SA)',
    maxZoom: 17,
  },
};

const REGIONS = [
  { name: 'All India', center: [22.5, 80.0] as [number, number], zoom: 5 },
  { name: 'North India', center: [30.0, 77.5] as [number, number], zoom: 6 },
  { name: 'Western Gujarat', center: [22.5, 71.5] as [number, number], zoom: 7 },
  { name: 'Central & East', center: [23.0, 84.0] as [number, number], zoom: 6 },
  { name: 'South India', center: [13.5, 78.0] as [number, number], zoom: 6 },
  { name: 'Northeast', center: [26.0, 93.0] as [number, number], zoom: 7 },
];

export const RealInteractiveMap: React.FC<RealInteractiveMapProps> = ({
  locations,
  activeLocation,
  onSelectLocation,
  isQuizMode = false,
  currentQuizTarget,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});
  const [activeTileStyle, setActiveTileStyle] = useState<MapTileStyle>('voyager');
  const [cursorCoords, setCursorCoords] = useState<{ lat: number; lng: number } | null>(null);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Bounds around India
    const southWest = L.latLng(6.0, 65.0);
    const northEast = L.latLng(38.0, 98.0);
    const bounds = L.latLngBounds(southWest, northEast);

    const map = L.map(mapContainerRef.current, {
      center: [22.5, 80.0],
      zoom: 5,
      minZoom: 4,
      maxZoom: 17,
      maxBounds: bounds,
      maxBoundsViscosity: 0.8,
      zoomControl: false,
    });

    L.control.zoom({ position: 'bottomright' }).addTo(map);
    L.control.scale({ imperial: false, metric: true, position: 'bottomleft' }).addTo(map);

    // Initial Tile Layer
    const currentConfig = TILE_LAYERS.voyager;
    const tileLayer = L.tileLayer(currentConfig.url, {
      attribution: currentConfig.attribution,
      maxZoom: currentConfig.maxZoom,
      subdomains: 'abcd',
    }).addTo(map);

    tileLayerRef.current = tileLayer;
    mapInstanceRef.current = map;

    map.on('mousemove', (e) => {
      setCursorCoords({
        lat: Number(e.latlng.lat.toFixed(3)),
        lng: Number(e.latlng.lng.toFixed(3)),
      });
    });

    map.on('mouseout', () => {
      setCursorCoords(null);
    });

    // Invalidate size on load to avoid grey tiles
    setTimeout(() => {
      map.invalidateSize();
    }, 250);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Tile Layer when style changes
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const map = mapInstanceRef.current;
    const config = TILE_LAYERS[activeTileStyle];

    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
    }

    const newLayer = L.tileLayer(config.url, {
      attribution: config.attribution,
      maxZoom: config.maxZoom,
      subdomains: 'abcd',
    }).addTo(map);

    tileLayerRef.current = newLayer;
  }, [activeTileStyle]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sync Markers
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear existing markers
    (Object.values(markersRef.current) as L.Marker[]).forEach((m) => m.remove());
    markersRef.current = {};

    locations.forEach((loc) => {
      // Fallback coordinates if lat/lng missing
      const lat = loc.lat ?? 37.2 - (loc.y / 100) * 29.2;
      const lng = loc.lng ?? 68.0 + (loc.x / 100) * 29.5;

      const isSelected = activeLocation?.id === loc.id;
      const isTarget = isQuizMode && currentQuizTarget?.id === loc.id;

      // Color scheme based on category
      const colorBg =
        loc.category === 'history'
          ? '#d97706' // amber-600
          : loc.category === 'rivers'
          ? '#0891b2' // cyan-600
          : loc.category === 'industries'
          ? '#9333ea' // purple-600
          : loc.category === 'ports'
          ? '#2563eb' // blue-600
          : '#059669'; // emerald-600

      const htmlContent = `
        <div class="relative flex items-center justify-center group cursor-pointer" style="transform: translate(-50%, -50%);">
          ${
            isSelected
              ? `<div class="absolute -inset-2.5 rounded-full animate-ping opacity-75" style="background-color: ${colorBg};"></div>`
              : ''
          }
          <div class="relative flex items-center justify-center rounded-full text-white shadow-lg transition-transform duration-200 group-hover:scale-125"
               style="background-color: ${colorBg}; width: ${isSelected ? '28px' : '22px'}; height: ${
        isSelected ? '28px' : '22px'
      }; border: 2.5px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.35);">
            <div style="width: ${isSelected ? '8px' : '6px'}; height: ${
        isSelected ? '8px' : '6px'
      }; border-radius: 9999px; background-color: white;"></div>
          </div>
          <div class="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap bg-slate-900/90 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow border border-slate-700/60 opacity-0 group-hover:opacity-100 transition-opacity z-50">
            ${loc.name}
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: htmlContent,
        className: 'custom-real-map-pin',
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

      const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);

      marker.on('click', () => {
        onSelectLocation(loc);
      });

      // Bind simple popup
      marker.bindTooltip(
        `<div class="font-sans text-xs">
          <p class="font-bold text-slate-900">${loc.name}</p>
          <p class="text-[10px] text-slate-500 font-semibold">${loc.state} &middot; <span class="capitalize">${loc.category}</span></p>
         </div>`,
        { direction: 'top', offset: [0, -10], opacity: 0.95 }
      );

      markersRef.current[loc.id] = marker;
    });
  }, [locations, activeLocation, isQuizMode, currentQuizTarget, onSelectLocation]);

  // Pan to selected location smoothly
  useEffect(() => {
    if (!activeLocation || !mapInstanceRef.current) return;
    const lat = activeLocation.lat ?? 37.2 - (activeLocation.y / 100) * 29.2;
    const lng = activeLocation.lng ?? 68.0 + (activeLocation.x / 100) * 29.5;

    mapInstanceRef.current.flyTo([lat, lng], Math.max(mapInstanceRef.current.getZoom(), 7), {
      duration: 1.2,
      easeLinearity: 0.25,
    });
  }, [activeLocation]);

  const handleResetIndiaView = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([22.5, 80.0], 5, { duration: 1 });
    }
  };

  const handleRegionJump = (center: [number, number], zoom: number) => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(center, zoom, { duration: 1.2 });
    }
  };

  return (
    <div className="relative w-full h-[540px] sm:h-[620px] rounded-3xl overflow-hidden border border-slate-300 shadow-lg bg-slate-100 flex flex-col">
      {/* Top Floating Control Bar */}
      <div className="absolute top-3 left-3 right-3 z-[1000] flex flex-wrap items-center justify-between gap-2 pointer-events-none">
        {/* Style Selector */}
        <div className="bg-white/95 backdrop-blur-md px-1.5 py-1 rounded-2xl shadow-md border border-slate-200/80 flex items-center gap-1 pointer-events-auto">
          <div className="px-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1 border-r border-slate-200">
            <Layers className="w-3 h-3 text-emerald-600" />
            <span className="hidden sm:inline">Layer</span>
          </div>
          {(['voyager', 'satellite', 'osm', 'topo'] as MapTileStyle[]).map((styleKey) => (
            <button
              key={styleKey}
              onClick={() => setActiveTileStyle(styleKey)}
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                activeTileStyle === styleKey
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {TILE_LAYERS[styleKey].name}
            </button>
          ))}
        </div>

        {/* Region Quick Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-white/95 backdrop-blur-md px-2 py-1 rounded-2xl shadow-md border border-slate-200/80 pointer-events-auto">
          <Compass className="w-3.5 h-3.5 text-slate-500 mr-1" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">
            Focus:
          </span>
          {REGIONS.map((reg) => (
            <button
              key={reg.name}
              onClick={() => handleRegionJump(reg.center, reg.zoom)}
              className="text-[11px] font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 px-2 py-0.5 rounded-lg transition-colors"
            >
              {reg.name}
            </button>
          ))}
        </div>

        {/* Reset View Button */}
        <button
          onClick={handleResetIndiaView}
          className="bg-white/95 backdrop-blur-md hover:bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-2xl shadow-md border border-slate-200/80 pointer-events-auto flex items-center gap-1.5 transition-all active:scale-95"
          title="Reset to All India view"
        >
          <Maximize2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Reset View</span>
        </button>
      </div>

      {/* Actual Map Canvas Div */}
      <div ref={mapContainerRef} className="w-full h-full z-0 cursor-grab active:cursor-grabbing" />

      {/* Bottom Status Bar: Coordinates & Status */}
      <div className="absolute bottom-2 left-2 right-2 z-[1000] pointer-events-none flex items-center justify-between text-[11px] font-medium text-slate-600">
        <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl shadow-xs border border-slate-200/80 pointer-events-auto flex items-center gap-3">
          <span className="flex items-center gap-1 text-slate-500">
            <MapPin className="w-3 h-3 text-emerald-600" />
            <span>Showing {locations.length} CBSE Board Exam Sites</span>
          </span>
          {cursorCoords && (
            <span className="hidden sm:inline font-mono text-[10px] text-slate-600 border-l border-slate-200 pl-3">
              Lat: {cursorCoords.lat}° N &middot; Lng: {cursorCoords.lng}° E
            </span>
          )}
        </div>

        <div className="hidden lg:flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xl shadow-xs border border-slate-200/80 pointer-events-auto text-[10px] text-slate-500 font-semibold">
          <span>Scroll to Zoom</span> &middot; <span>Drag to Pan</span> &middot; <span>Click Pin for Details</span>
        </div>
      </div>
    </div>
  );
};
