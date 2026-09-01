import React, { useState } from 'react';
import { Festival, Monument, CityDestination, StateData, UserLocation, SupportedLanguage } from '../types';
import { STATES_DATA } from '../data/statesData';
import { CITIES_DATA } from '../data/citiesData';
import { MONUMENTS_DATA } from '../data/monumentsData';
import { getTranslation, SUPPORTED_LANGUAGES } from '../data/languages';
import { speakText, stopSpeech, getSpeechCodeForLang } from '../services/speechService';
import {
  Calendar,
  MapPin,
  Sparkles,
  ArrowRight,
  Heart,
  Landmark,
  Compass,
  CheckCircle2,
  Share2,
  Clock,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Headphones
} from 'lucide-react';

import { CommunityReviewSection } from './CommunityReviewSection';

interface FestivalDetailViewProps {
  festival: Festival;
  userLocation: UserLocation;
  currentLanguage?: SupportedLanguage;
  onSelectState: (stateId: string) => void;
  onSelectCity: (cityId: string) => void;
  onSelectMonument: (monumentId: string) => void;
  onPlanTrip: (cityId: string, festivalId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (festivalId: string) => void;
  onOpenAuthModal?: () => void;
}

export const FestivalDetailView: React.FC<FestivalDetailViewProps> = ({
  festival,
  userLocation,
  currentLanguage = 'en',
  onSelectState,
  onSelectCity,
  onSelectMonument,
  onPlanTrip,
  isSaved = false,
  onToggleSave,
  onOpenAuthModal = () => {}
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speechSpeed, setSpeechSpeed] = useState<number>(0.9);

  // Associated states
  const associatedStates = STATES_DATA.filter((s) =>
    festival.celebratedStates.includes(s.id)
  );

  // Associated cities
  const associatedCities = CITIES_DATA.filter((c) =>
    festival.primaryDestinations.includes(c.id)
  );

  // Associated monuments
  const associatedMonuments = MONUMENTS_DATA.filter(
    (m) =>
      festival.primaryDestinations.includes(m.cityId) ||
      associatedStates.some((s) => s.name.toLowerCase() === m.state.toLowerCase())
  );

  const activeLangMeta = SUPPORTED_LANGUAGES.find((l) => l.code === currentLanguage);

  const handleToggleAudio = async () => {
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
      return;
    }

    setIsPlayingAudio(true);

    const narrationScript = `${festival.name}. ${festival.hindiName ? festival.hindiName + '.' : ''} ${festival.shortDescription}. ${festival.culturalSignificance}. ${festival.longDescription}`;

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
    <div className="space-y-8 sm:space-y-12 animate-fadeIn pb-12">
      {/* 1. Immersive Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden shadow-md bg-[#3a352f] border border-[#e5e0d8]">
        <div className="relative h-80 sm:h-96 md:h-[420px] w-full">
          <img
            src={festival.bannerImage}
            alt={festival.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#2d2a26] via-[#2d2a26]/60 to-black/30" />
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 text-white space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-orange-500/90 text-white text-[10px] uppercase font-bold tracking-widest italic px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>{festival.dateRange}</span>
            </span>
            {festival.traditionalTithi && (
              <span className="bg-amber-600/90 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
                🗓️ {festival.traditionalTithi}
              </span>
            )}
            {festival.stateOrigin && (
              <span className="bg-emerald-700/90 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
                📍 {festival.stateOrigin}
              </span>
            )}
            <span className="bg-white/20 text-[#E6BE8A] border border-white/20 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
              {festival.duration}
            </span>
            <span className="bg-white/15 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
              {festival.monthName} Festival
            </span>
          </div>

          <div>
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              {festival.name}
            </h1>
            <p className="text-[#E6BE8A] font-serif italic text-sm sm:text-base font-normal mt-1">
              {festival.hindiName}
            </p>
          </div>

          {festival.culturalMaxim && (
            <div className="inline-block px-3.5 py-1.5 rounded-xl bg-black/40 border border-[#E6BE8A]/40 text-[#E6BE8A] text-xs font-serif italic">
              ✨ Cultural Maxim: &ldquo;{festival.culturalMaxim}&rdquo;
            </div>
          )}

          <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed max-w-3xl font-normal">
            {festival.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {festival.primaryDestinations.length > 0 && (
              <button
                onClick={() => onPlanTrip(festival.primaryDestinations[0], festival.id)}
                className="flex items-center gap-2 px-7 py-3 text-xs font-bold uppercase tracking-widest text-[#2d2a26] bg-[#E6BE8A] hover:bg-white rounded-full shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#5A5A40]" />
                <span>{getTranslation('btn.planTrip', currentLanguage)}</span>
              </button>
            )}

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

            {onToggleSave && (
              <button
                onClick={() => onToggleSave(festival.id)}
                className={`flex items-center gap-1.5 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md border transition-all cursor-pointer ${
                  isSaved
                    ? 'bg-rose-600 border-rose-500 text-white'
                    : 'bg-white/15 hover:bg-white/25 border-white/30 text-white'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                <span>{isSaved ? getTranslation('btn.saved', currentLanguage) : getTranslation('btn.save', currentLanguage)}</span>
              </button>
            )}
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
                Listening to the sacred legend & heritage of {festival.name}
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

      {/* 2. Cultural Significance & Ritual Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#5A5A40]" />
            <span>Cultural & Spiritual Significance</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#2d2a26]">
            The Heritage & Living Tradition
          </h2>
          <p className="text-xs sm:text-sm text-[#8a817c] leading-relaxed font-normal">
            {festival.longDescription}
          </p>
          <div className="p-4 rounded-2xl bg-[#f5f2ed] border border-[#e5e0d8] text-xs sm:text-sm text-[#2d2a26] leading-relaxed">
            <strong className="text-[#5A5A40]">Historical Meaning: </strong>
            {festival.culturalSignificance}
          </div>

          {festival.specialFoods && festival.specialFoods.length > 0 && (
            <div className="mt-4 pt-4 border-t border-[#e5e0d8] space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
                <span>🍽️ {getTranslation('festival.culinaryTitle', currentLanguage)}</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {festival.specialFoods.map((food, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 shadow-xs"
                  >
                    ✨ {food}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Ritual Highlights Card */}
        <div className="bg-[#f5f2ed] rounded-3xl p-6 border border-[#e5e0d8] shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
            <CheckCircle2 className="w-4 h-4 text-[#5A5A40]" />
            <span>{getTranslation('festival.ritualsTitle', currentLanguage)}</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-[#2d2a26]">
            Key Moments to Witness
          </h3>
          <div className="space-y-3">
            {festival.ritualHighlights.map((ritual, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#2d2a26]">
                <span className="w-5 h-5 rounded-full bg-[#5A5A40] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-snug">{ritual}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-[#e5e0d8]">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#5A5A40] block mb-1">Epicenter Spot:</span>
            <span className="text-xs text-[#8a817c] font-medium block">
              📍 {festival.bestExperienceSpot}
            </span>
          </div>
        </div>
      </div>

      {/* 3. WHERE IS IT CELEBRATED? (State Cards) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5 text-[#5A5A40]" />
              <span>{getTranslation('festival.celebratedIn', currentLanguage)}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2d2a26]">
              Where is it Celebrated?
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {associatedStates.map((state) => {
            // Find which cities in this state host the festival or belong to the state
            const stateCitiesForFest = CITIES_DATA.filter(
              (c) =>
                (state.cities.includes(c.id) || c.state.toLowerCase() === state.name.toLowerCase()) &&
                (festival.primaryDestinations.includes(c.id) || state.cities.includes(c.id))
            );

            return (
              <div
                key={state.id}
                className="group bg-white rounded-3xl border border-[#e5e0d8] p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div
                    onClick={() => onSelectState(state.id)}
                    className="relative h-44 rounded-2xl overflow-hidden bg-[#3a352f] cursor-pointer"
                  >
                    <img
                      src={state.bannerImage}
                      alt={state.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] uppercase font-bold text-[#E6BE8A] tracking-widest">
                        {state.region} India
                      </span>
                      <h3 className="text-xl font-serif font-bold text-white">
                        {state.name}
                      </h3>
                    </div>
                  </div>

                  <div className="pt-3 px-1 space-y-3">
                    <p className="text-xs text-[#8a817c] line-clamp-2 leading-relaxed">
                      {state.culturalSummary}
                    </p>

                    {/* Participating & Key Cities in this State */}
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#5A5A40] block mb-1.5">
                        Cities celebrating in {state.name}:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {stateCitiesForFest.slice(0, 4).map((city) => {
                          const isPrimary = festival.primaryDestinations.includes(city.id);
                          return (
                            <button
                              key={city.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectCity(city.id);
                              }}
                              className={`text-xs font-semibold px-2.5 py-1 rounded-full border transition-all cursor-pointer flex items-center gap-1 ${
                                isPrimary
                                  ? 'bg-[#5A5A40] text-white border-[#5A5A40] shadow-xs'
                                  : 'bg-[#f5f2ed] hover:bg-[#5A5A40] hover:text-white text-[#2d2a26] border-[#e5e0d8]'
                              }`}
                            >
                              <span>📍 {city.name.split(' ')[0]}</span>
                              {isPrimary && <span className="text-[9px] bg-[#E6BE8A] text-[#2d2a26] px-1 rounded-full font-bold">Key Spot</span>}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 px-1 border-t border-[#e5e0d8] mt-3 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8a817c]">
                    {state.cities.length} Heritage Cities
                  </span>
                  <button
                    onClick={() => onSelectState(state.id)}
                    className="text-xs font-bold uppercase tracking-widest text-[#5A5A40] hover:text-[#2d2a26] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Explore State</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. BEST PLACES TO EXPERIENCE IT (Cities/Destinations) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5 text-[#5A5A40]" />
              <span>{getTranslation('festival.experienceInCities', currentLanguage)}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2d2a26]">
              Best Places to Experience It
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {associatedCities.map((city) => (
            <div
              key={city.id}
              onClick={() => onSelectCity(city.id)}
              className="group bg-white rounded-3xl border border-[#e5e0d8] p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
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
                    <h3 className="text-xl font-serif font-bold text-white">
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
                    <span>🚆 {city.railwayStation.split(' ')[0]}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 px-1 border-t border-[#e5e0d8] flex items-center justify-between">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlanTrip(city.id, festival.id);
                  }}
                  className="text-xs font-bold uppercase tracking-widest text-[#5A5A40] hover:underline"
                >
                  Itinerary
                </button>
                <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#5A5A40] group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. EXPLORE THE HERITAGE (Monuments & Historical Places) */}
      {associatedMonuments.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
                <Landmark className="w-3.5 h-3.5 text-[#5A5A40]" />
                <span>{getTranslation('nav.monuments', currentLanguage)}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2d2a26]">
                Explore Heritage in this Region
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {associatedMonuments.slice(0, 6).map((monument) => (
              <div
                key={monument.id}
                onClick={() => onSelectMonument(monument.id)}
                className="group bg-white rounded-3xl border border-[#e5e0d8] p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 rounded-2xl overflow-hidden bg-[#3a352f]">
                    <img
                      src={monument.bannerImage}
                      alt={monument.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 bg-[#E6BE8A] text-[#2d2a26] text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full">
                      {monument.type}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-lg font-serif font-bold text-white line-clamp-1">
                        {monument.name}
                      </h3>
                      <p className="text-[10px] text-[#E6BE8A] uppercase font-bold tracking-widest">
                        📍 {monument.cityName}, {monument.state}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 px-1 space-y-2">
                    <p className="text-xs text-[#8a817c] line-clamp-2 leading-relaxed">
                      {monument.historicalSignificance}
                    </p>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#8a817c] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#5A5A40]" />
                      <span>Duration: {monument.estimatedVisitDuration}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 px-1 border-t border-[#e5e0d8] flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8a817c]">
                    Entry: {monument.entryFee.indian}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#5A5A40] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>View Monument</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Real-Time Community Reflections & Festival Tips (Firebase Firestore) */}
      <CommunityReviewSection
        itemId={festival.id}
        itemType="festival"
        itemTitle={festival.name}
        onOpenAuthModal={onOpenAuthModal}
      />
    </div>
  );
};
