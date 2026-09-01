import React, { useState, useMemo, useEffect, useRef } from 'react';
import L from 'leaflet';
import { Monument, UserLocation } from '../types';
import { MONUMENTS_DATA } from '../data/monumentsData';
import { CITIES_DATA } from '../data/citiesData';
import { getCityWeather } from '../data/weatherService';
import {
  Search,
  Navigation,
  Clock,
  Ticket,
  ChevronRight,
  Layers,
  Maximize2,
  Minimize2,
  X,
  Compass,
  Landmark,
  LocateFixed,
  ExternalLink,
  Map as MapIcon,
  Globe
} from 'lucide-react';

interface MonumentInteractiveMapProps {
  initialCityId?: string;
  initialStateId?: string;
  initialMonumentId?: string;
  userLocation: UserLocation;
  onSelectMonument: (monumentId: string) => void;
  onSelectCity?: (cityId: string) => void;
  onOpenItineraryGenerator?: (cityId: string) => void;
  heightClassName?: string;
  compact?: boolean;
}

// Map Tile Layer Providers
const TILE_LAYERS = {
  roadmap: {
    name: 'Default',
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    maxZoom: 19
  },
  satellite: {
    name: 'Satellite',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    subdomains: 'abc',
    maxZoom: 18
  },
  terrain: {
    name: 'Terrain',
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution: 'Map data: &copy; OpenStreetMap, SRTM | Map style: &copy; OpenTopoMap',
    subdomains: 'abc',
    maxZoom: 17
  }
};

// Category Colors & SVG helper
function getCategoryColor(type: string) {
  const t = type.toLowerCase();
  if (t.includes('unesco')) return '#d97706'; // Amber
  if (t.includes('fort')) return '#ea4335'; // Google Red
  if (t.includes('palace')) return '#9333ea'; // Purple
  if (t.includes('temple') || t.includes('mandir')) return '#f97316'; // Orange
  return '#ea4335'; // Standard Google Red
}

// Create authentic Google Maps style Red Pin HTML Icon
function createGooglePinIcon(monument: Monument, isSelected: boolean) {
  const color = getCategoryColor(monument.type);
  const size = isSelected ? 42 : 34;
  const pinHtml = `
    <div class="gm-pin-marker relative flex flex-col items-center cursor-pointer group" style="width: ${size}px; height: ${size + 14}px;">
      <!-- Google Maps Iconic Teardrop Pin -->
      <svg viewBox="0 0 24 36" width="${size}" height="${size + 8}" class="drop-shadow-md transition-transform duration-200">
        <defs>
          <radialGradient id="pinGlow-${monument.id}" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
            <stop offset="100%" stop-color="${color}" />
          </radialGradient>
        </defs>
        <!-- Pin Shape -->
        <path
          d="M 12 0 C 5.37 0 0 5.37 0 12 C 0 21 12 36 12 36 C 12 36 24 21 24 12 C 24 5.37 18.63 0 12 0 Z"
          fill="${isSelected ? '#ea4335' : color}"
          stroke="#ffffff"
          stroke-width="${isSelected ? '2' : '1.5'}"
        />
        <!-- Inner White Circle -->
        <circle cx="12" cy="12" r="${isSelected ? '6' : '5'}" fill="#ffffff" />
        <!-- Inner Center Dot / Star -->
        <circle cx="12" cy="12" r="${isSelected ? '3' : '2.5'}" fill="${isSelected ? '#ea4335' : color}" />
      </svg>

      <!-- Pin Shadow on Ground -->
      <div class="w-3.5 h-1.5 bg-black/30 rounded-full blur-[1px] -mt-1"></div>

      <!-- Floating Hover Label -->
      <div class="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/95 text-[#202124] text-[11px] font-semibold px-2 py-0.5 rounded-md shadow-md border border-black/10 pointer-events-none transition-all ${
        isSelected ? 'opacity-100 scale-105 ring-2 ring-[#ea4335]' : 'opacity-0 group-hover:opacity-100'
      }">
        ${monument.name}
      </div>
    </div>
  `;

  return L.divIcon({
    className: 'custom-google-marker',
    html: pinHtml,
    iconSize: [size, size + 14],
    iconAnchor: [size / 2, size + 8],
    popupAnchor: [0, -(size + 6)]
  });
}

// Create Google Maps Blue User Location Pulse Icon
function createUserLocationIcon() {
  const userHtml = `
    <div class="relative flex items-center justify-center" style="width: 32px; height: 32px;">
      <div class="absolute w-8 h-8 rounded-full bg-[#4285f4] opacity-25 animate-ping"></div>
      <div class="absolute w-6 h-6 rounded-full bg-[#4285f4] opacity-40"></div>
      <div class="w-4 h-4 rounded-full bg-[#1a73e8] border-2 border-white shadow-md z-10"></div>
    </div>
  `;
  return L.divIcon({
    className: 'custom-user-marker',
    html: userHtml,
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });
}

export const MonumentInteractiveMap: React.FC<MonumentInteractiveMapProps> = ({
  initialCityId,
  initialStateId,
  initialMonumentId,
  userLocation,
  onSelectMonument,
  onSelectCity,
  onOpenItineraryGenerator,
  heightClassName = 'h-[620px]',
  compact = false
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const routeLayerRef = useRef<L.Polyline | null>(null);
  const userMarkerRef = useRef<L.Marker | null>(null);

  const [selectedCityId, setSelectedCityId] = useState<string>(initialCityId || 'all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeMonument, setActiveMonument] = useState<Monument | null>(() => {
    if (initialMonumentId) {
      return MONUMENTS_DATA.find((m) => m.id === initialMonumentId) || null;
    }
    if (initialCityId) {
      return MONUMENTS_DATA.find((m) => m.cityId === initialCityId) || MONUMENTS_DATA[0];
    }
    return MONUMENTS_DATA[0];
  });
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [mapStyle, setMapStyle] = useState<'roadmap' | 'satellite' | 'terrain'>('roadmap');
  const [showLayerMenu, setShowLayerMenu] = useState<boolean>(false);
  const [showTrafficRoute, setShowTrafficRoute] = useState<boolean>(true);

  // Filter monuments based on selection
  const filteredMonuments = useMemo(() => {
    return MONUMENTS_DATA.filter((m) => {
      const matchCity = selectedCityId === 'all' || m.cityId === selectedCityId;
      const matchCategory =
        selectedCategory === 'all' ||
        (selectedCategory === 'unesco' && m.type.toLowerCase().includes('unesco')) ||
        (selectedCategory === 'fort' && m.type.toLowerCase().includes('fort')) ||
        (selectedCategory === 'palace' && m.type.toLowerCase().includes('palace')) ||
        (selectedCategory === 'temple' &&
          (m.type.toLowerCase().includes('temple') ||
            m.type.toLowerCase().includes('mandir') ||
            m.type.toLowerCase().includes('shrine')));

      const matchRegion =
        selectedRegion === 'all' ||
        (selectedRegion === 'north' &&
          ['Uttar Pradesh', 'Delhi', 'Punjab', 'Himachal Pradesh', 'Uttarakhand', 'Jammu & Kashmir'].includes(
            m.state
          )) ||
        (selectedRegion === 'south' &&
          ['Tamil Nadu', 'Kerala', 'Karnataka', 'Telangana', 'Andhra Pradesh'].includes(m.state)) ||
        (selectedRegion === 'west' &&
          ['Rajasthan', 'Maharashtra', 'Gujarat', 'Goa'].includes(m.state)) ||
        (selectedRegion === 'east' &&
          ['West Bengal', 'Odisha', 'Bihar', 'Assam', 'Meghalaya'].includes(m.state)) ||
        (selectedRegion === 'central' &&
          ['Madhya Pradesh', 'Chhattisgarh'].includes(m.state));

      const matchSearch =
        searchQuery.trim() === '' ||
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.cityName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCity && matchCategory && matchRegion && matchSearch;
    });
  }, [selectedCityId, selectedCategory, selectedRegion, searchQuery]);

  // Active City Weather
  const activeCityIdForWeather =
    activeMonument?.cityId || (selectedCityId !== 'all' ? selectedCityId : 'varanasi');
  const cityWeather = useMemo(() => {
    return getCityWeather(activeCityIdForWeather);
  }, [activeCityIdForWeather]);

  // Distance helper from user location
  const getDistanceKm = (m: Monument) => {
    const dLat = (m.latitude - userLocation.latitude) * (Math.PI / 180);
    const dLon = (m.longitude - userLocation.longitude) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(userLocation.latitude * (Math.PI / 180)) *
        Math.cos(m.latitude * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(6371 * c);
  };

  // Initialize Leaflet Map Instance
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Default center on India
      const defaultCenter: [number, number] = activeMonument
        ? [activeMonument.latitude, activeMonument.longitude]
        : [22.5937, 78.9629];

      const defaultZoom = activeMonument ? 8 : 5;

      const map = L.map(mapContainerRef.current, {
        center: defaultCenter,
        zoom: defaultZoom,
        zoomControl: false, // Using Google Maps custom styled zoom controls
        attributionControl: false
      });

      // Add Base Tile Layer (Carto Voyager / Google-like)
      const currentTile = TILE_LAYERS[mapStyle];
      const tileLayer = L.tileLayer(currentTile.url, {
        subdomains: currentTile.subdomains,
        maxZoom: currentTile.maxZoom
      }).addTo(map);

      tileLayerRef.current = tileLayer;

      // Layer group for monument pins
      const markersLayer = L.layerGroup().addTo(map);
      markersLayerRef.current = markersLayer;

      // Add User Location Marker
      const userMarker = L.marker([userLocation.latitude, userLocation.longitude], {
        icon: createUserLocationIcon(),
        title: `Your Location (${userLocation.city})`
      }).addTo(map);

      userMarker.bindTooltip(
        `<div class="text-xs font-sans font-bold text-[#1a73e8]">📍 You are here (${userLocation.city})</div>`,
        { direction: 'top', offset: [0, -12] }
      );

      userMarkerRef.current = userMarker;
      mapInstanceRef.current = map;
    }

    return () => {
      // Map cleanup on unmount if needed
    };
  }, []);

  // Update Tile Layer when mapStyle changes (Roadmap / Satellite / Terrain)
  useEffect(() => {
    if (!mapInstanceRef.current || !tileLayerRef.current) return;

    const map = mapInstanceRef.current;
    map.removeLayer(tileLayerRef.current);

    const newTileConfig = TILE_LAYERS[mapStyle];
    const newTileLayer = L.tileLayer(newTileConfig.url, {
      subdomains: newTileConfig.subdomains,
      maxZoom: newTileConfig.maxZoom
    }).addTo(map);

    tileLayerRef.current = newTileLayer;
  }, [mapStyle]);

  // Update Markers & Selection
  useEffect(() => {
    if (!mapInstanceRef.current || !markersLayerRef.current) return;

    const markersLayer = markersLayerRef.current;
    markersLayer.clearLayers();

    filteredMonuments.forEach((monument) => {
      const isSelected = activeMonument?.id === monument.id;
      const icon = createGooglePinIcon(monument, isSelected);

      const marker = L.marker([monument.latitude, monument.longitude], {
        icon,
        title: monument.name,
        zIndexOffset: isSelected ? 1000 : 100
      });

      marker.on('click', () => {
        setActiveMonument(monument);
        if (mapInstanceRef.current) {
          mapInstanceRef.current.panTo([monument.latitude, monument.longitude], {
            animate: true,
            duration: 0.8
          });
        }
      });

      markersLayer.addLayer(marker);
    });
  }, [filteredMonuments, activeMonument]);

  // Update Route Polyline from User Location to Active Monument
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const map = mapInstanceRef.current;

    if (routeLayerRef.current) {
      map.removeLayer(routeLayerRef.current);
      routeLayerRef.current = null;
    }

    if (activeMonument && showTrafficRoute) {
      const latlngs: [number, number][] = [
        [userLocation.latitude, userLocation.longitude],
        [activeMonument.latitude, activeMonument.longitude]
      ];

      const polyline = L.polyline(latlngs, {
        color: '#4285f4', // Google Maps Route Blue
        weight: 3.5,
        opacity: 0.8,
        dashArray: '6, 8',
        lineCap: 'round',
        lineJoin: 'round'
      }).addTo(map);

      routeLayerRef.current = polyline;
    }
  }, [activeMonument, userLocation, showTrafficRoute]);

  // Handle Zoom In / Out
  const handleZoomIn = () => {
    mapInstanceRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapInstanceRef.current?.zoomOut();
  };

  // Center on user location
  const handleCenterOnUser = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([userLocation.latitude, userLocation.longitude], 12, {
        duration: 1.2
      });
    }
  };

  // Reset to All India view
  const handleResetIndiaView = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([22.5937, 78.9629], 5, {
        duration: 1.2
      });
    }
    setSelectedCityId('all');
    setSelectedCategory('all');
    setSelectedRegion('all');
    setSearchQuery('');
  };

  // Open Street View in Google Maps in new tab
  const handleOpenGoogleStreetView = (monument: Monument) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      monument.name + ' ' + monument.cityName
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`relative w-full ${
        isFullscreen ? 'fixed inset-0 z-50 bg-[#f1f3f4]' : `${heightClassName} rounded-3xl`
      } overflow-hidden shadow-2xl border border-[#dadce0] bg-[#e5e3df] flex flex-col font-sans transition-all duration-300 select-none`}
    >
      {/* =========================================================================
          TOP GOOGLE MAPS FLOATING SEARCH & FILTER BAR
          ========================================================================= */}
      <div className="absolute top-3.5 left-3.5 right-3.5 z-[1000] flex flex-wrap items-center justify-between gap-2.5 pointer-events-none">
        <div className="flex flex-wrap items-center gap-2 pointer-events-auto">
          {/* Google Maps Search Bar Box */}
          <div className="relative flex items-center bg-white rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.3)] border border-[#dadce0]/80 h-10 px-3.5 w-64 sm:w-72">
            <Search className="w-4 h-4 text-[#5f6368] shrink-0 mr-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search India monuments, forts, temples..."
              className="w-full text-xs font-medium text-[#202124] placeholder-[#70757a] bg-transparent focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#70757a] hover:text-[#202124] p-1 ml-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Region Quick Selector */}
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="h-10 px-3.5 text-xs bg-white rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.3)] border border-[#dadce0]/80 text-[#3c4043] font-medium cursor-pointer focus:outline-none hover:bg-[#f8f9fa] transition-colors"
          >
            <option value="all">Pan India (All Regions)</option>
            <option value="north">North India</option>
            <option value="south">South India</option>
            <option value="west">West India</option>
            <option value="east">East India</option>
            <option value="central">Central India</option>
          </select>

          {/* Category Chips (Google Maps Filter Pills) */}
          <div className="hidden sm:flex items-center gap-1.5">
            {[
              { id: 'all', label: 'All Places' },
              { id: 'unesco', label: '★ UNESCO Sites' },
              { id: 'fort', label: 'Forts' },
              { id: 'palace', label: 'Palaces' },
              { id: 'temple', label: 'Temples' }
            ].map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`h-9 px-3.5 rounded-full text-xs font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.2)] transition-all cursor-pointer flex items-center gap-1 border ${
                    isActive
                      ? 'bg-[#1a73e8] text-white border-[#1a73e8]'
                      : 'bg-white text-[#3c4043] border-[#dadce0] hover:bg-[#f1f3f4]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Tools: City Weather & Fullscreen */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Active City Weather Pill */}
          {cityWeather && (
            <div className="hidden md:flex items-center gap-2 bg-white px-3.5 h-10 rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.3)] border border-[#dadce0]/80 text-xs text-[#202124]">
              <span className="text-sm">
                {cityWeather.iconType === 'sunny' ? '☀️' : '🌤️'}
              </span>
              <span className="font-bold">{cityWeather.temperature}°C</span>
              <span className="text-[11px] text-[#5f6368]">
                {cityWeather.cityName.split(' ')[0]}
              </span>
            </div>
          )}

          {/* Fullscreen Button */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            className="w-10 h-10 bg-white hover:bg-[#f8f9fa] text-[#5f6368] hover:text-[#202124] rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.3)] border border-[#dadce0]/80 flex items-center justify-center transition-all cursor-pointer"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* =========================================================================
          AUTHENTIC GOOGLE MAPS LEAFLET CONTAINER
          ========================================================================= */}
      <div ref={mapContainerRef} className="w-full h-full z-0 relative" />

      {/* =========================================================================
          BOTTOM-LEFT GOOGLE MAPS LAYERS SWITCHER
          ========================================================================= */}
      <div className="absolute bottom-6 left-4 z-[1000] pointer-events-auto">
        <div className="relative">
          {/* Layers Toggle Button */}
          <button
            onClick={() => setShowLayerMenu(!showLayerMenu)}
            className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.3)] border border-[#dadce0] text-xs font-semibold text-[#3c4043] hover:bg-[#f8f9fa] transition-all cursor-pointer"
          >
            <Layers className="w-4 h-4 text-[#1a73e8]" />
            <span className="capitalize">{mapStyle} Layer</span>
          </button>

          {/* Layers Popover Menu */}
          {showLayerMenu && (
            <div className="absolute bottom-12 left-0 bg-white p-2 rounded-xl shadow-2xl border border-[#dadce0] w-48 space-y-1 animate-fadeIn">
              <div className="text-[11px] font-bold text-[#70757a] px-2 py-1 uppercase tracking-wider">
                Map Types
              </div>
              <button
                onClick={() => {
                  setMapStyle('roadmap');
                  setShowLayerMenu(false);
                }}
                className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                  mapStyle === 'roadmap' ? 'bg-[#e8f0fe] text-[#1a73e8]' : 'text-[#3c4043] hover:bg-[#f1f3f4]'
                }`}
              >
                <MapIcon className="w-3.5 h-3.5 text-[#1a73e8]" />
                <span>Default (Google Map)</span>
              </button>

              <button
                onClick={() => {
                  setMapStyle('satellite');
                  setShowLayerMenu(false);
                }}
                className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                  mapStyle === 'satellite' ? 'bg-[#e8f0fe] text-[#1a73e8]' : 'text-[#3c4043] hover:bg-[#f1f3f4]'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-[#1a73e8]" />
                <span>Satellite Imagery</span>
              </button>

              <button
                onClick={() => {
                  setMapStyle('terrain');
                  setShowLayerMenu(false);
                }}
                className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                  mapStyle === 'terrain' ? 'bg-[#e8f0fe] text-[#1a73e8]' : 'text-[#3c4043] hover:bg-[#f1f3f4]'
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-[#1a73e8]" />
                <span>Terrain & Elevation</span>
              </button>

              <div className="border-t border-[#dadce0] my-1 pt-1">
                <label className="flex items-center gap-2 px-2 py-1 text-xs text-[#3c4043] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showTrafficRoute}
                    onChange={(e) => setShowTrafficRoute(e.target.checked)}
                    className="accent-[#1a73e8] rounded cursor-pointer"
                  />
                  <span>Show Route Line</span>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* =========================================================================
          BOTTOM-RIGHT GOOGLE MAPS CONTROLS (+ / -, Pegman, My Location)
          ========================================================================= */}
      <div className="absolute bottom-6 right-4 z-[1000] flex flex-col gap-2 pointer-events-auto items-end">
        {/* Reset India View */}
        <button
          onClick={handleResetIndiaView}
          title="Reset to Whole India"
          className="w-10 h-10 bg-white hover:bg-[#f8f9fa] text-[#5f6368] hover:text-[#1a73e8] rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.3)] border border-[#dadce0] flex items-center justify-center transition-all cursor-pointer"
        >
          <Compass className="w-4 h-4" />
        </button>

        {/* Locate User Location */}
        <button
          onClick={handleCenterOnUser}
          title={`Center on Your Location (${userLocation.city})`}
          className="w-10 h-10 bg-white hover:bg-[#f8f9fa] text-[#5f6368] hover:text-[#1a73e8] rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.3)] border border-[#dadce0] flex items-center justify-center transition-all cursor-pointer"
        >
          <LocateFixed className="w-4 h-4" />
        </button>

        {/* Google Yellow Pegman (Street View on Google Maps) */}
        {activeMonument && (
          <button
            onClick={() => handleOpenGoogleStreetView(activeMonument)}
            title="Open Street View / 360° on Google Maps"
            className="w-10 h-10 bg-white hover:bg-[#fff9e6] rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.3)] border border-[#dadce0] flex items-center justify-center transition-all cursor-pointer group"
          >
            <span className="text-lg group-hover:scale-110 transition-transform">🚶‍♂️</span>
          </button>
        )}

        {/* Stacked Google Maps Zoom Controls (+ / -) */}
        <div className="bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.3)] border border-[#dadce0] overflow-hidden flex flex-col">
          <button
            onClick={handleZoomIn}
            title="Zoom In"
            className="w-10 h-9 flex items-center justify-center text-[#5f6368] hover:text-[#202124] hover:bg-[#f8f9fa] text-base font-bold transition-colors cursor-pointer border-b border-[#dadce0]"
          >
            +
          </button>
          <button
            onClick={handleZoomOut}
            title="Zoom Out"
            className="w-10 h-9 flex items-center justify-center text-[#5f6368] hover:text-[#202124] hover:bg-[#f8f9fa] text-base font-bold transition-colors cursor-pointer"
          >
            −
          </button>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM FLOATING MONUMENT PREVIEW DRAWER (Google Maps Style)
          ========================================================================= */}
      {activeMonument && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[1000] w-[94%] max-w-xl bg-white p-4 sm:p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.25)] border border-[#dadce0] animate-fadeIn pointer-events-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Monument Photo Thumbnail */}
            <div className="relative w-full sm:w-36 h-28 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-[#dadce0]">
              <img
                src={activeMonument.bannerImage}
                alt={activeMonument.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-1.5 left-1.5 bg-black/70 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                {activeMonument.type.split(' ')[0]}
              </span>
            </div>

            {/* Monument Details */}
            <div className="flex-1 min-w-0 space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold text-[#1a73e8] uppercase tracking-widest bg-[#e8f0fe] px-2 py-0.5 rounded-md">
                    {activeMonument.cityName}, {activeMonument.state}
                  </span>
                  <span className="text-[10px] text-[#70757a]">
                    Built {activeMonument.yearBuilt}
                  </span>
                </div>
                <button
                  onClick={() => setActiveMonument(null)}
                  className="text-[#70757a] hover:text-[#202124] p-1 rounded-full hover:bg-neutral-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h4 className="text-base sm:text-lg font-serif font-bold text-[#202124] truncate">
                {activeMonument.name}
              </h4>

              <p className="text-xs text-[#5f6368] line-clamp-2 leading-relaxed">
                {activeMonument.historicalSignificance}
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-[#5f6368]">
                <div className="flex items-center gap-1">
                  <Navigation className="w-3 h-3 text-[#1a73e8]" />
                  <span className="font-semibold text-[#202124]">
                    {getDistanceKm(activeMonument)} km
                  </span>
                  <span>from {userLocation.city}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Ticket className="w-3 h-3 text-[#ea4335]" />
                  <span>
                    Entry:{' '}
                    {typeof activeMonument.entryFee === 'object'
                      ? activeMonument.entryFee.indian
                      : activeMonument.entryFee}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#34a853]" />
                  <span>{activeMonument.visitingHours || activeMonument.estimatedVisitDuration}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => onSelectMonument(activeMonument.id)}
                  className="flex-1 sm:flex-none px-4 py-2 bg-[#1a73e8] hover:bg-[#1557b0] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
                >
                  <span>Explore Monument Guide</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                {onSelectCity && (
                  <button
                    onClick={() => onSelectCity(activeMonument.cityId)}
                    className="px-3 py-2 bg-[#f1f3f4] hover:bg-[#e8eaed] text-[#202124] rounded-full text-xs font-bold transition-all cursor-pointer border border-[#dadce0] flex items-center gap-1"
                  >
                    <Landmark className="w-3.5 h-3.5 text-[#5f6368]" />
                    <span>{activeMonument.cityName} City</span>
                  </button>
                )}

                <button
                  onClick={() => handleOpenGoogleStreetView(activeMonument)}
                  title="Open on Google Maps"
                  className="p-2 bg-[#f1f3f4] hover:bg-[#e8eaed] text-[#5f6368] hover:text-[#1a73e8] rounded-full transition-all cursor-pointer border border-[#dadce0]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Google Style Watermark Footer */}
      <div className="absolute bottom-1 right-2 z-[999] text-[9px] text-[#70757a] bg-white/70 px-1.5 py-0.5 rounded pointer-events-none">
        Map data &copy; 2026 &bull; {filteredMonuments.length} monuments loaded
      </div>
    </div>
  );
};
