import React, { useState } from 'react';
import { StateData, SupportedLanguage } from '../types';
import { CITIES_DATA } from '../data/citiesData';
import { FESTIVALS_DATA } from '../data/festivalsData';
import { MONUMENTS_DATA } from '../data/monumentsData';
import { getTranslation, SUPPORTED_LANGUAGES } from '../data/languages';
import { speakText, stopSpeech, getSpeechCodeForLang } from '../services/speechService';
import {
  MapPin,
  Landmark,
  Calendar,
  Sparkles,
  ArrowRight,
  Compass,
  Building2,
  Utensils,
  Headphones,
  Pause,
  Volume2
} from 'lucide-react';

interface StateDetailViewProps {
  state: StateData;
  currentLanguage?: SupportedLanguage;
  onSelectCity: (cityId: string) => void;
  onSelectFestival: (festivalId: string) => void;
  onSelectMonument: (monumentId: string) => void;
  onBackToStates: () => void;
}

export const StateDetailView: React.FC<StateDetailViewProps> = ({
  state,
  currentLanguage = 'en',
  onSelectCity,
  onSelectFestival,
  onSelectMonument,
  onBackToStates
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speechSpeed, setSpeechSpeed] = useState<number>(0.9);

  // Cities belonging to this state
  const stateCities = CITIES_DATA.filter(
    (c) =>
      state.cities.includes(c.id) ||
      c.state.toLowerCase() === state.name.toLowerCase()
  );

  // Festivals celebrated in this state
  const stateFestivals = FESTIVALS_DATA.filter(
    (f) =>
      f.celebratedStates.includes(state.id) ||
      (f.stateOrigin && f.stateOrigin.toLowerCase() === state.name.toLowerCase()) ||
      state.featuredFestivals?.includes(f.id)
  );

  // Monuments located in this state
  const stateMonuments = MONUMENTS_DATA.filter(
    (m) =>
      m.state.toLowerCase() === state.name.toLowerCase() ||
      stateCities.some((c) => c.id === m.cityId)
  );

  const activeLangMeta = SUPPORTED_LANGUAGES.find((l) => l.code === currentLanguage);

  const handleToggleAudio = async () => {
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
      return;
    }

    setIsPlayingAudio(true);
    const narrationScript = `${state.name} in ${state.region} India. Capital: ${state.capital}. ${state.culturalSummary}. Famous for ${state.famousFor.join(', ')}.`;
    const speechCode = getSpeechCodeForLang(currentLanguage);

    await speakText({
      text: narrationScript,
      phoneticText: narrationScript,
      langCode: speechCode,
      rate: speechSpeed,
      onEnd: () => setIsPlayingAudio(false),
      onError: () => setIsPlayingAudio(false)
    });
  };

  return (
    <div className="space-y-10 animate-fadeIn pb-16">
      {/* 1. Immersive Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden shadow-md bg-[#3a352f] border border-[#e5e0d8]">
        <div className="relative h-80 sm:h-96 md:h-[420px] w-full">
          <img
            src={state.bannerImage}
            alt={state.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#2d2a26] via-[#2d2a26]/60 to-black/30" />
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 text-white space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#E6BE8A] text-[#2d2a26] text-[10px] uppercase font-bold tracking-widest px-3.5 py-1 rounded-full shadow-xs">
              📍 {state.region} India
            </span>
            <span className="bg-white/20 text-white border border-white/20 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
              Capital: {state.capital}
            </span>
            <span className="bg-white/15 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
              {stateCities.length} Heritage Cities
            </span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              {state.name}
            </h1>
            <p className="text-sm sm:text-base text-[#e5e0d8] font-normal leading-relaxed mt-2 max-w-3xl">
              {state.culturalSummary}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={handleToggleAudio}
              className={`flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-full shadow-md backdrop-blur-md border transition-all cursor-pointer ${
                isPlayingAudio
                  ? 'bg-[#8A3324] text-white border-[#8A3324] animate-pulse'
                  : 'bg-white/20 hover:bg-white/30 text-white border-white/30'
              }`}
            >
              {isPlayingAudio ? (
                <>
                  <Pause className="w-4 h-4 text-white" />
                  <span>{getTranslation('btn.stopAudio', currentLanguage)}</span>
                </>
              ) : (
                <>
                  <Headphones className="w-4 h-4 text-[#E6BE8A]" />
                  <span>{getTranslation('btn.listenAudio', currentLanguage)} ({activeLangMeta?.nativeName || 'Voice'})</span>
                </>
              )}
            </button>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#E6BE8A]">
                Famous For:
              </span>
              {state.famousFor.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-black/40 text-white backdrop-blur-md px-3 py-1 rounded-full border border-white/15"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Audio Narration Bar */}
      {isPlayingAudio && (
        <div className="bg-[#8A3324] text-white rounded-2xl p-4 px-6 flex flex-wrap items-center justify-between gap-4 shadow-lg animate-fadeIn">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center animate-bounce">
              <Volume2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#E6BE8A]">
                Active Audio Narration ({activeLangMeta?.name || 'Local Dialect'})
              </div>
              <div className="text-xs text-white/90 font-serif line-clamp-1">
                Listening to the cultural heritage of {state.name}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const nextSpeed = speechSpeed === 0.9 ? 1.1 : speechSpeed === 1.1 ? 0.75 : 0.9;
                setSpeechSpeed(nextSpeed);
                handleToggleAudio();
              }}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold text-white border border-white/20 cursor-pointer"
            >
              Speed: {speechSpeed}x
            </button>
            <button
              onClick={handleToggleAudio}
              className="px-4 py-1 bg-white text-[#8A3324] rounded-lg text-xs font-bold cursor-pointer hover:bg-[#E6BE8A] transition-colors"
            >
              {getTranslation('btn.stopAudio', currentLanguage)}
            </button>
          </div>
        </div>
      )}

      {/* 2. HERITAGE CITIES IN THIS STATE */}
      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5 text-[#5A5A40]" />
              <span>Destinations & Cities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2d2a26]">
              Heritage Cities in {state.name}
            </h2>
          </div>
          <span className="text-xs font-bold text-[#8a817c] bg-[#f5f2ed] px-3 py-1.5 rounded-full border border-[#e5e0d8]">
            {stateCities.length} {stateCities.length === 1 ? 'City' : 'Cities'}
          </span>
        </div>

        {stateCities.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 border border-[#e5e0d8] text-center text-sm text-[#8a817c]">
            No specific cities listed yet for {state.name}.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateCities.map((city) => (
              <div
                key={city.id}
                onClick={() => onSelectCity(city.id)}
                className="group bg-white rounded-3xl border border-[#e5e0d8] p-3 sm:p-4 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 rounded-2xl overflow-hidden bg-[#3a352f]">
                    <img
                      src={city.bannerImage}
                      alt={city.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 bg-orange-500/90 text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full">
                      {city.state}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#E6BE8A] transition-colors">
                        {city.name}
                      </h3>
                    </div>
                  </div>

                  <div className="pt-3 px-1 space-y-2">
                    <p className="text-xs text-[#8a817c] line-clamp-2 leading-relaxed">
                      {city.tagline}
                    </p>
                    <div className="flex flex-wrap gap-1 text-[10px] uppercase font-bold tracking-wider text-[#8a817c]">
                      <span>✈️ {city.airport.split(' ')[0]}</span>
                      <span>•</span>
                      <span>🚆 {city.railwayStation.split('/')[0].split('(')[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 px-1 border-t border-[#e5e0d8] mt-3 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8a817c]">
                    {city.monumentIds.length} Monuments • {city.religiousSites.length} Temples
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#5A5A40] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Explore City</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. FESTIVALS CELEBRATED IN THIS STATE */}
      {stateFestivals.length > 0 && (
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
                <Calendar className="w-3.5 h-3.5 text-[#5A5A40]" />
                <span>Festivals & Celebrations</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2d2a26]">
                Festivals Celebrated in {state.name}
              </h2>
            </div>
            <span className="text-xs font-bold text-[#8a817c] bg-[#f5f2ed] px-3 py-1.5 rounded-full border border-[#e5e0d8]">
              {stateFestivals.length} {stateFestivals.length === 1 ? 'Festival' : 'Festivals'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateFestivals.map((fest) => (
              <div
                key={fest.id}
                onClick={() => onSelectFestival(fest.id)}
                className="group bg-white rounded-3xl border border-[#e5e0d8] p-3 sm:p-4 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 rounded-2xl overflow-hidden bg-[#3a352f]">
                    <img
                      src={fest.bannerImage}
                      alt={fest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 bg-orange-500/90 text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full">
                      {fest.monthName}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#E6BE8A] transition-colors">
                        {fest.name}
                      </h3>
                    </div>
                  </div>

                  <div className="pt-3 px-1 space-y-2">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-[#5A5A40]">
                      📅 {fest.dateRange}
                    </div>
                    <p className="text-xs text-[#8a817c] line-clamp-2 leading-relaxed">
                      {fest.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-3 px-1 border-t border-[#e5e0d8] mt-3 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8a817c] truncate max-w-[150px]">
                    📍 {fest.bestExperienceSpot}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#5A5A40] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. MONUMENTS IN THIS STATE */}
      {stateMonuments.length > 0 && (
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
                <Landmark className="w-3.5 h-3.5 text-[#5A5A40]" />
                <span>Monuments & Heritage</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2d2a26]">
                Iconic Monuments in {state.name}
              </h2>
            </div>
            <span className="text-xs font-bold text-[#8a817c] bg-[#f5f2ed] px-3 py-1.5 rounded-full border border-[#e5e0d8]">
              {stateMonuments.length} {stateMonuments.length === 1 ? 'Site' : 'Sites'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateMonuments.map((monument) => (
              <div
                key={monument.id}
                onClick={() => onSelectMonument(monument.id)}
                className="group bg-white rounded-3xl border border-[#e5e0d8] p-3 sm:p-4 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 rounded-2xl overflow-hidden bg-[#3a352f]">
                    <img
                      src={monument.bannerImage}
                      alt={monument.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 bg-[#E6BE8A] text-[#2d2a26] text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full">
                      {monument.cityName}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#E6BE8A] transition-colors">
                        {monument.name}
                      </h3>
                    </div>
                  </div>

                  <div className="pt-3 px-1 space-y-2">
                    <p className="text-xs text-[#8a817c] line-clamp-2 leading-relaxed">
                      {monument.historicalSignificance || monument.briefHistory}
                    </p>
                  </div>
                </div>

                <div className="pt-3 px-1 border-t border-[#e5e0d8] mt-3 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8a817c]">
                    ⏰ {monument.visitingHours.split('(')[0]}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#5A5A40] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>View Site</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
