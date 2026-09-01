import React, { useState } from 'react';
import { UserLocation } from '../types';
import { POPULAR_ORIGIN_CITIES } from '../data/indianLocations';
import { MapPin, Search, Navigation, Check, X, Compass } from 'lucide-react';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLocation: UserLocation;
  onSelectLocation: (loc: UserLocation) => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({
  isOpen,
  onClose,
  currentLocation,
  onSelectLocation
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDetecting, setIsDetecting] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredCities = POPULAR_ORIGIN_CITIES.filter(
    item =>
      item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      setGeoError('Geolocation is not supported by your browser.');
      return;
    }

    setIsDetecting(true);
    setGeoError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsDetecting(false);
        // Find closest city in our popular origin cities list
        let closest = POPULAR_ORIGIN_CITIES[0];
        let minDistance = Infinity;

        POPULAR_ORIGIN_CITIES.forEach((city) => {
          const dx = city.latitude - position.coords.latitude;
          const dy = city.longitude - position.coords.longitude;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < minDistance) {
            minDistance = dist;
            closest = city;
          }
        });

        onSelectLocation(closest);
        onClose();
      },
      (error) => {
        setIsDetecting(false);
        setGeoError('Could not retrieve GPS coordinates. Please pick your city from the list.');
      },
      { timeout: 8000 }
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#fdfaf6] rounded-3xl shadow-2xl border border-[#e5e0d8] overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#5A5A40] text-white p-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10 translate-x-4 -translate-y-4 pointer-events-none">
            <Compass className="w-36 h-36" />
          </div>
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <MapPin className="w-5 h-5 text-[#E6BE8A]" />
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight">Select Your Starting City</h3>
                <p className="text-xs text-white/80 font-normal">Used for calculating travel distance, trains & flights</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Current Location pill & Auto-detect */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 p-3 rounded-2xl bg-[#f5f2ed] border border-[#e5e0d8]">
            <div className="flex items-center gap-2">
              <span className="text-xs font-normal text-[#8a817c]">Current origin:</span>
              <span className="text-xs font-serif font-bold text-[#5A5A40] bg-white px-3 py-1 rounded-full border border-[#e5e0d8] shadow-xs">
                {currentLocation.city}, {currentLocation.state}
              </span>
            </div>
            <button
              onClick={handleDetectLocation}
              disabled={isDetecting}
              className="flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#5A5A40] hover:bg-[#464632] active:scale-98 rounded-full shadow-xs transition-all disabled:opacity-50 cursor-pointer"
            >
              <Navigation className={`w-3.5 h-3.5 ${isDetecting ? 'animate-spin' : ''}`} />
              <span>{isDetecting ? 'Detecting GPS...' : 'Auto-Detect'}</span>
            </button>
          </div>

          {geoError && (
            <p className="text-xs text-[#5A5A40] bg-[#f5f2ed] p-3 rounded-2xl border border-[#e5e0d8]">
              {geoError}
            </p>
          )}

          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#8a817c] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search major Indian city or state..."
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-white rounded-full border border-[#e5e0d8] focus:outline-none focus:ring-1 focus:ring-[#5A5A40] placeholder:text-[#8a817c] transition-all text-[#2d2a26]"
              autoFocus
            />
          </div>

          {/* Cities List / Grid */}
          <div>
            <p className="text-[10px] font-bold text-[#8a817c] uppercase tracking-widest mb-2">
              {searchQuery ? 'Matching Cities' : 'Popular Departure Hubs'}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-60 overflow-y-auto pr-1">
              {filteredCities.map((item) => {
                const isSelected = item.city === currentLocation.city;
                return (
                  <button
                    key={item.city}
                    onClick={() => {
                      onSelectLocation(item);
                      onClose();
                    }}
                    className={`flex items-center justify-between p-2.5 rounded-2xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#5A5A40] text-white border-[#5A5A40] font-bold shadow-xs'
                        : 'bg-white hover:bg-[#f5f2ed] border-[#e5e0d8] text-[#2d2a26]'
                    }`}
                  >
                    <div className="truncate">
                      <div className="text-xs font-serif font-bold truncate">{item.city}</div>
                      <div className={`text-[10px] truncate ${isSelected ? 'text-white/80' : 'text-[#8a817c]'}`}>{item.state}</div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-white shrink-0 ml-1" />}
                  </button>
                );
              })}
              {filteredCities.length === 0 && (
                <div className="col-span-3 text-center py-6 text-xs text-[#8a817c]">
                  No city matched "{searchQuery}". Try a major hub like Delhi, Mumbai, Bengaluru, or Kolkata.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f5f2ed] px-6 py-3.5 border-t border-[#e5e0d8] flex items-center justify-between">
          <span className="text-[11px] text-[#8a817c]">
            💡 Distance is measured in real kilometers using geodesic coordinates.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2d2a26] bg-white hover:bg-[#fdfaf6] border border-[#e5e0d8] rounded-full transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
