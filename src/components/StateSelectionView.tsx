import React, { useState } from 'react';
import { StateData } from '../types';
import { STATES_DATA } from '../data/statesData';
import { CITIES_DATA } from '../data/citiesData';
import { Map, MapPin, ArrowRight, Sparkles, Compass } from 'lucide-react';

interface StateSelectionViewProps {
  onSelectState: (stateId: string) => void;
  onSelectCity: (cityId: string) => void;
}

export const StateSelectionView: React.FC<StateSelectionViewProps> = ({
  onSelectState,
  onSelectCity
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const regions = ['All', 'North', 'South', 'West', 'East', 'Central', 'North-East'];

  const filteredStates =
    selectedRegion === 'All'
      ? STATES_DATA
      : STATES_DATA.filter(
          (s) => s.region.toLowerCase().replace('-', '') === selectedRegion.toLowerCase().replace('-', '')
        );

  const getCityName = (cityId: string) => {
    const city = CITIES_DATA.find((c) => c.id === cityId);
    if (city) return city.name;
    return cityId.charAt(0).toUpperCase() + cityId.slice(1).replace('-', ' ');
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
            <Map className="w-3.5 h-3.5 text-[#5A5A40]" />
            <span>State Cultural Geographies</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#2d2a26] mt-0.5">
            Explore India by States & UTs
          </h1>
          <p className="text-xs sm:text-sm text-[#8a817c] mt-1 font-normal">
            Discover local traditions, classical arts, cuisines and historic cities across India.
          </p>
        </div>

        {/* Region Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer whitespace-nowrap ${
                selectedRegion === reg
                  ? 'bg-[#5A5A40] text-white shadow-xs'
                  : 'bg-white hover:bg-[#f5f2ed] text-[#8a817c] border border-[#e5e0d8]'
              }`}
            >
              {reg} {reg !== 'All' ? 'India' : ''}
            </button>
          ))}
        </div>
      </div>

      {/* States Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStates.map((state) => (
          <div
            key={state.id}
            className="group bg-white rounded-3xl border border-[#e5e0d8] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image Banner */}
              <div className="relative h-48 overflow-hidden bg-[#2d2a26]">
                <img
                  src={state.bannerImage}
                  alt={state.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#2d2a26]/90 via-[#2d2a26]/30 to-transparent" />
                <div className="absolute top-3 left-3 bg-[#E6BE8A] text-[#2d2a26] text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full shadow-xs">
                  {state.region} India
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-xl font-serif font-bold text-white">
                    {state.name}
                  </h3>
                </div>
              </div>

              {/* State Body */}
              <div className="p-5 space-y-4">
                <p className="text-xs text-[#8a817c] leading-relaxed font-normal">
                  {state.culturalSummary}
                </p>

                {/* Famous For Chips */}
                <div>
                  <span className="text-[10px] font-bold text-[#5A5A40] uppercase tracking-widest block mb-1.5">
                    Famous For:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {state.famousFor.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium bg-[#f5f2ed] text-[#2d2a26] px-2.5 py-1 rounded-full border border-[#e5e0d8]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cities in State */}
                <div>
                  <span className="text-[10px] font-bold text-[#8a817c] uppercase tracking-widest block mb-1.5">
                    Featured Destinations:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {state.cities.map((cityId) => (
                      <button
                        key={cityId}
                        onClick={() => onSelectCity(cityId)}
                        className="text-xs font-semibold text-[#5A5A40] bg-[#f5f2ed] hover:bg-[#5A5A40] hover:text-white px-3 py-1 rounded-full border border-[#e5e0d8] transition-all cursor-pointer"
                      >
                        📍 {getCityName(cityId)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => onSelectState(state.id)}
                className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#5A5A40] hover:bg-[#464632] rounded-full flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
              >
                <span>Explore {state.name} Heritage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
