import React, { useState, useEffect, useRef } from 'react';
import { FESTIVALS_DATA } from '../data/festivalsData';
import { MONUMENTS_DATA } from '../data/monumentsData';
import { CITIES_DATA } from '../data/citiesData';
import { STATES_DATA } from '../data/statesData';
import { Search, X, Sparkles, MapPin, Landmark, Calendar, Map, ArrowRight, Utensils } from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFestival: (festivalId: string) => void;
  onSelectMonument: (monumentId: string) => void;
  onSelectCity: (cityId: string) => void;
  onSelectState: (stateId: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectFestival,
  onSelectMonument,
  onSelectCity,
  onSelectState
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const matchingFestivals = q
    ? FESTIVALS_DATA.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.hindiName.toLowerCase().includes(q) ||
          f.shortDescription.toLowerCase().includes(q) ||
          f.tags.some((t) => t.toLowerCase().includes(q))
      )
    : [];

  const matchingMonuments = q
    ? MONUMENTS_DATA.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          (m.hindiName && m.hindiName.toLowerCase().includes(q)) ||
          m.cityName.toLowerCase().includes(q) ||
          m.state.toLowerCase().includes(q) ||
          m.type.toLowerCase().includes(q) ||
          m.tags.some((t) => t.toLowerCase().includes(q))
      )
    : [];

  const matchingCities = q
    ? CITIES_DATA.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.state.toLowerCase().includes(q) ||
          c.tagline.toLowerCase().includes(q) ||
          c.authenticFood.some((f) => f.name.toLowerCase().includes(q)) ||
          c.religiousSites.some((r) => r.name.toLowerCase().includes(q))
      )
    : [];

  const matchingStates = q
    ? STATES_DATA.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.culturalSummary.toLowerCase().includes(q) ||
          s.famousFor.some((f) => f.toLowerCase().includes(q))
      )
    : [];

  const totalResults =
    matchingFestivals.length + matchingMonuments.length + matchingCities.length + matchingStates.length;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-20 bg-black/60 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#fdfaf6] rounded-3xl shadow-2xl border border-[#e5e0d8] overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar */}
        <div className="relative border-b border-[#e5e0d8] bg-white p-4 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#5A5A40] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search festivals, monuments, cities, temples, foods (e.g. Diwali, Taj Mahal, Varanasi)..."
            className="w-full text-sm bg-transparent focus:outline-none placeholder:text-[#8a817c] text-[#2d2a26] font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#8a817c] hover:text-[#2d2a26] hover:bg-[#f5f2ed] rounded-full cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider text-[#8a817c] bg-[#f5f2ed] px-2.5 py-1 rounded-full border border-[#e5e0d8]">
            ESC
          </span>
        </div>

        {/* Results / Suggestions Container */}
        <div className="max-h-[65vh] overflow-y-auto p-5 space-y-4">
          {!q ? (
            /* Default Suggestions & Quick Tags */
            <div className="space-y-4 py-2">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest mb-2.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#5A5A40]" />
                  <span>Popular Trending Discoveries</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Taj Mahal, Agra', type: 'monument', id: 'taj-mahal' },
                    { label: 'Dev Deepawali, Varanasi', type: 'festival', id: 'dev-deepawali' },
                    { label: 'Durga Puja, Kolkata', type: 'festival', id: 'durga-puja' },
                    { label: 'Amber Fort, Jaipur', type: 'monument', id: 'amber-fort' },
                    { label: 'Hampi Ruins, Karnataka', type: 'monument', id: 'hampi-ruins' },
                    { label: 'Onam Festival, Kerala', type: 'festival', id: 'onam-kerala' },
                    { label: 'Golden Temple, Amritsar', type: 'monument', id: 'golden-temple' },
                    { label: 'Puri Jagannath Rath Yatra', type: 'festival', id: 'rath-yatra' },
                    { label: 'Rajasthan Heritage', type: 'state', id: 'rajasthan' }
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (item.type === 'festival') onSelectFestival(item.id);
                        if (item.type === 'monument') onSelectMonument(item.id);
                        if (item.type === 'state') onSelectState(item.id);
                        onClose();
                      }}
                      className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-white hover:bg-[#5A5A40] hover:text-white text-[#2d2a26] border border-[#e5e0d8] transition-all cursor-pointer shadow-xs active:scale-95"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Categorized Previews */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 bg-white rounded-2xl border border-[#e5e0d8] shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#2d2a26] mb-2">
                    <Calendar className="w-4 h-4 text-[#5A5A40]" />
                    <span>Explore by Festivals</span>
                  </div>
                  <p className="text-xs text-[#8a817c] mb-2.5 font-normal leading-relaxed">
                    Discover India through 12 months of vibrant celebrations, rituals & grand spectacles.
                  </p>
                  <button
                    onClick={() => {
                      onSelectFestival('dev-deepawali');
                      onClose();
                    }}
                    className="text-xs font-bold uppercase tracking-wider text-[#5A5A40] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Browse Dev Deepawali</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-[#e5e0d8] shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#2d2a26] mb-2">
                    <Landmark className="w-4 h-4 text-[#5A5A40]" />
                    <span>UNESCO Monuments</span>
                  </div>
                  <p className="text-xs text-[#8a817c] mb-2.5 font-normal leading-relaxed">
                    Detailed architectural histories, visiting hours, fees & nearby local food for 40+ monuments.
                  </p>
                  <button
                    onClick={() => {
                      onSelectMonument('taj-mahal');
                      onClose();
                    }}
                    className="text-xs font-bold uppercase tracking-wider text-[#5A5A40] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Taj Mahal</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ) : totalResults === 0 ? (
            /* No Results */
            <div className="text-center py-10">
              <Search className="w-10 h-10 text-[#8a817c]/50 mx-auto mb-2" />
              <p className="text-sm font-serif font-bold text-[#2d2a26]">No matches found for "{query}"</p>
              <p className="text-xs text-[#8a817c] mt-1 font-normal">
                Try searching by festival name, UNESCO site, city (Jaipur, Varanasi, Kochi) or food.
              </p>
            </div>
          ) : (
            /* Live Filtered Results */
            <div className="space-y-4">
              {/* Festivals Results */}
              {matchingFestivals.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest mb-2">
                    <Calendar className="w-3.5 h-3.5 text-[#5A5A40]" />
                    <span>Festivals ({matchingFestivals.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchingFestivals.map((f) => (
                      <div
                        key={f.id}
                        onClick={() => {
                          onSelectFestival(f.id);
                          onClose();
                        }}
                        className="flex items-center justify-between p-3 bg-white hover:bg-[#f5f2ed] rounded-2xl border border-[#e5e0d8] transition-all cursor-pointer group shadow-xs"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={f.bannerImage}
                            alt={f.name}
                            className="w-12 h-12 rounded-xl object-cover border border-[#e5e0d8]"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h4 className="text-sm font-serif font-bold text-[#2d2a26] group-hover:text-[#5A5A40] transition-colors">
                              {f.name}
                            </h4>
                            <p className="text-xs text-[#8a817c] flex items-center gap-2 mt-0.5 font-normal">
                              <span>📅 {f.dateRange}</span>
                              <span>•</span>
                              <span className="capitalize">{f.celebratedStates.slice(0, 2).join(', ')}</span>
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8a817c] group-hover:text-[#5A5A40] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Monuments Results */}
              {matchingMonuments.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest mb-2">
                    <Landmark className="w-3.5 h-3.5 text-[#5A5A40]" />
                    <span>Monuments & Heritage ({matchingMonuments.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchingMonuments.map((m) => (
                      <div
                        key={m.id}
                        onClick={() => {
                          onSelectMonument(m.id);
                          onClose();
                        }}
                        className="flex items-center justify-between p-3 bg-white hover:bg-[#f5f2ed] rounded-2xl border border-[#e5e0d8] transition-all cursor-pointer group shadow-xs"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={m.bannerImage}
                            alt={m.name}
                            className="w-12 h-12 rounded-xl object-cover border border-[#e5e0d8]"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h4 className="text-sm font-serif font-bold text-[#2d2a26] group-hover:text-[#5A5A40] transition-colors">
                              {m.name}
                            </h4>
                            <p className="text-xs text-[#8a817c] flex items-center gap-2 mt-0.5 font-normal">
                              <span className="text-[#5A5A40] font-medium">📍 {m.cityName}, {m.state}</span>
                              <span>•</span>
                              <span className="bg-[#f5f2ed] text-[#5A5A40] px-2 py-0.5 rounded-full text-[10px] font-bold uppercase">{m.type}</span>
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8a817c] group-hover:text-[#5A5A40] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Destinations & Cities */}
              {matchingCities.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#5A5A40]" />
                    <span>Cities & Destinations ({matchingCities.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchingCities.map((c) => (
                      <div
                        key={c.id}
                        onClick={() => {
                          onSelectCity(c.id);
                          onClose();
                        }}
                        className="flex items-center justify-between p-3 bg-white hover:bg-[#f5f2ed] rounded-2xl border border-[#e5e0d8] transition-all cursor-pointer group shadow-xs"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={c.bannerImage}
                            alt={c.name}
                            className="w-12 h-12 rounded-xl object-cover border border-[#e5e0d8]"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h4 className="text-sm font-serif font-bold text-[#2d2a26] group-hover:text-[#5A5A40] transition-colors">
                              {c.name}
                            </h4>
                            <p className="text-xs text-[#8a817c] truncate max-w-sm mt-0.5 font-normal">
                              {c.tagline}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8a817c] group-hover:text-[#5A5A40] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* States */}
              {matchingStates.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest mb-2">
                    <Map className="w-3.5 h-3.5 text-[#5A5A40]" />
                    <span>States ({matchingStates.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchingStates.map((s) => (
                      <div
                        key={s.id}
                        onClick={() => {
                          onSelectState(s.id);
                          onClose();
                        }}
                        className="flex items-center justify-between p-3 bg-white hover:bg-[#f5f2ed] rounded-2xl border border-[#e5e0d8] transition-all cursor-pointer group shadow-xs"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={s.bannerImage}
                            alt={s.name}
                            className="w-12 h-12 rounded-xl object-cover border border-[#e5e0d8]"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h4 className="text-sm font-serif font-bold text-[#2d2a26] group-hover:text-[#5A5A40] transition-colors">
                              {s.name} (Region: {s.region} India)
                            </h4>
                            <p className="text-xs text-[#8a817c] truncate max-w-sm mt-0.5 font-normal">
                              Famous for: {s.famousFor.slice(0, 3).join(', ')}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8a817c] group-hover:text-[#5A5A40] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#f5f2ed] px-5 py-3 border-t border-[#e5e0d8] flex items-center justify-between text-xs text-[#8a817c]">
          <span>Tip: Type <kbd className="bg-white px-2 py-0.5 rounded-full border border-[#e5e0d8] font-mono text-[10px] text-[#2d2a26]">ESC</kbd> to exit search</span>
          <button
            onClick={onClose}
            className="px-3 py-1 font-bold uppercase tracking-wider text-[#5A5A40] hover:underline cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
