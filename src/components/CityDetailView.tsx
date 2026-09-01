import React, { useState } from 'react';
import { CityDestination, UserLocation, Festival, Monument, SupportedLanguage } from '../types';
import { MONUMENTS_DATA } from '../data/monumentsData';
import { FESTIVALS_DATA } from '../data/festivalsData';
import { calculateTravelPlan } from '../data/travelUtils';
import { getCityWeather } from '../data/weatherService';
import { getTranslation, SUPPORTED_LANGUAGES } from '../data/languages';
import { speakText, stopSpeech, getSpeechCodeForLang } from '../services/speechService';
import { MonumentInteractiveMap } from './MonumentInteractiveMap';
import { CommonPhrasesTable } from './CommonPhrasesTable';
import { CulturalStatsPanel } from './CulturalStatsPanel';
import { TripChecklistView } from './TripChecklistView';
import {
  Landmark,
  Calendar,
  MapPin,
  Utensils,
  ShoppingBag,
  Sparkles,
  Plane,
  Train,
  Bus,
  Car,
  Compass,
  ArrowRight,
  ExternalLink,
  Clock,
  Ticket,
  Heart,
  Hotel,
  ShieldCheck,
  Navigation,
  CheckCircle2,
  Share2,
  CloudSun,
  Sun,
  Droplets,
  Wind,
  Languages,
  ListChecks,
  Crosshair,
  Award,
  Volume2,
  Headphones,
  Pause
} from 'lucide-react';

interface CityDetailViewProps {
  city: CityDestination;
  userLocation: UserLocation;
  currentLanguage?: SupportedLanguage;
  onSelectMonument: (monumentId: string) => void;
  onSelectFestival: (festivalId: string) => void;
  onOpenItineraryGenerator: (cityId: string, festivalId?: string) => void;
  onToggleSaveCity?: (cityId: string) => void;
  isSaved?: boolean;
}

export const CityDetailView: React.FC<CityDetailViewProps> = ({
  city,
  userLocation,
  currentLanguage = 'en',
  onSelectMonument,
  onSelectFestival,
  onOpenItineraryGenerator,
  onToggleSaveCity,
  isSaved = false
}) => {
  const [activeTab, setActiveTab] = useState<
    'all' | 'map' | 'ar-finder' | 'monuments' | 'phrases' | 'stats' | 'checklist' | 'weather' | 'festivals' | 'food' | 'culture' | 'travel'
  >('all');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speechSpeed, setSpeechSpeed] = useState<number>(0.9);

  const travelPlan = calculateTravelPlan(userLocation, city);
  const cityMonuments = MONUMENTS_DATA.filter((m) => city.monumentIds.includes(m.id) || m.cityId === city.id);
  const cityFestivals = FESTIVALS_DATA.filter((f) => city.festivalIds.includes(f.id));
  const cityWeather = getCityWeather(city.id, city.name, city.latitude, city.longitude);
  const activeLangMeta = SUPPORTED_LANGUAGES.find((l) => l.code === currentLanguage);

  const handleToggleAudio = async () => {
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
      return;
    }

    setIsPlayingAudio(true);
    const foodNames = (city.authenticFood || []).slice(0, 3).map(f => f.name).join(', ');
    const streetNames = (city.heritageStreets || []).slice(0, 2).map(s => s.name).join(', ');
    const narrationScript = `${city.name}, ${city.state}. ${city.tagline || ''}. ${city.overview || ''}. ${foodNames ? 'Famous for cuisine like ' + foodNames + '.' : ''} ${streetNames ? 'And lively bazaars like ' + streetNames + '.' : ''}`;
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
      {/* 1. Destination Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden shadow-md bg-[#3a352f] border border-[#e5e0d8]">
        <div className="relative h-80 sm:h-96 md:h-[440px] w-full">
          <img
            src={city.bannerImage}
            alt={city.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#2d2a26] via-[#2d2a26]/60 to-black/30" />
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 text-white space-y-4 w-full">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-orange-500/90 text-white text-[10px] uppercase font-bold tracking-widest italic px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-white" />
              <span>{city.state}, India</span>
            </span>
            <span className="bg-white/20 text-[#E6BE8A] border border-white/20 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
              📍 {travelPlan.distanceKm} km from {userLocation.city}
            </span>
            <span className="bg-white/15 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
              Best Time: {city.bestTimeToVisit || 'October – March'}
            </span>
          </div>

          <div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              {city.name}
            </h1>
            <p className="text-[#E6BE8A] font-serif italic text-sm sm:text-base font-normal mt-1">
              "{city.tagline}"
            </p>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed max-w-4xl font-normal">
            {city.overview}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onOpenItineraryGenerator(city.id)}
              className="flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-[#2d2a26] bg-[#E6BE8A] hover:bg-white rounded-full shadow-md active:scale-95 transition-all cursor-pointer group"
            >
              <Compass className="w-4 h-4 text-[#5A5A40]" />
              <span>Create Personalized Itinerary</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleToggleAudio}
              className={`flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-widest rounded-full shadow-md backdrop-blur-md border transition-all cursor-pointer ${
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

            {onToggleSaveCity && (
              <button
                onClick={() => onToggleSaveCity(city.id)}
                className={`flex items-center gap-1.5 px-5 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md border transition-all cursor-pointer ${
                  isSaved
                    ? 'bg-rose-600 border-rose-500 text-white'
                    : 'bg-white/15 hover:bg-white/25 border-white/30 text-white'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                <span>{isSaved ? getTranslation('btn.saved', currentLanguage) : getTranslation('btn.save', currentLanguage)}</span>
              </button>
            )}

            <a
              href={`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city.name + ', India')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-5 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/15 hover:bg-white/25 border border-white/30 text-white backdrop-blur-md transition-all cursor-pointer"
            >
              <Hotel className="w-3.5 h-3.5 text-[#E6BE8A]" />
              <span>Find Heritage Stays</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 border-b border-[#e5e0d8]">
        {[
          { id: 'all', label: 'Complete Overview' },
          { id: 'phrases', label: `🗣️ Common Phrases` },
          { id: 'checklist', label: `🎒 Trip Checklist` },
          { id: 'stats', label: `🎨 Artistic & Cultural Stats` },
          { id: 'map', label: `🗺️ Map (${cityMonuments.length})` },
          { id: 'monuments', label: `Monuments (${cityMonuments.length})` },
          { id: 'weather', label: `☀️ Weather (${cityWeather.temperature}°C)` },
          { id: 'festivals', label: `Festivals (${cityFestivals.length})` },
          { id: 'food', label: 'Food & Dining' },
          { id: 'culture', label: 'Culture & Bazaars' },
          { id: 'travel', label: 'Travel & Transport' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full whitespace-nowrap transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-[#5A5A40] text-white shadow-xs'
                : 'bg-white hover:bg-[#f5f2ed] text-[#8a817c] border border-[#e5e0d8]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* SECTION: COMMON LOCAL PHRASES & AUDIO VOICE READ-OUT */}
      {(activeTab === 'all' || activeTab === 'phrases') && (
        <section className="space-y-4">
          <CommonPhrasesTable
            cityId={city.id}
            cityName={city.name}
            stateName={city.state}
            currentLanguage={currentLanguage}
          />
        </section>
      )}

      {/* SECTION: TRIP & MONUMENT CHECKLIST */}
      {(activeTab === 'all' || activeTab === 'checklist') && (
        <section className="space-y-4">
          <TripChecklistView
            cityId={city.id}
            cityName={city.name}
          />
        </section>
      )}

      {/* SECTION: CULTURAL & ARTISTIC STATS */}
      {(activeTab === 'all' || activeTab === 'stats') && (
        <section className="space-y-4">
          <CulturalStatsPanel
            cityId={city.id}
            cityName={city.name}
            onExploreMonuments={() => setActiveTab('monuments')}
          />
        </section>
      )}

      {/* SECTION: INTERACTIVE MONUMENTS MAP */}
      {(activeTab === 'all' || activeTab === 'map') && (
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
                <Compass className="w-3.5 h-3.5 text-[#5A5A40]" />
                <span>Geospatial Exploration</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2d2a26]">
                Interactive Monuments Map of {city.name}
              </h2>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#8a817c] bg-[#f5f2ed] px-3.5 py-1.5 rounded-full border border-[#e5e0d8]">
              Click pins to preview visiting hours & directions
            </span>
          </div>

          <MonumentInteractiveMap
            initialCityId={city.id}
            userLocation={userLocation}
            onSelectMonument={onSelectMonument}
            onOpenItineraryGenerator={onOpenItineraryGenerator}
            heightClassName="h-[520px]"
          />
        </section>
      )}

      {/* SECTION: DESTINATION CLIMATE & BEST VISITING HOURS */}
      {(activeTab === 'all' || activeTab === 'weather') && (
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] shadow-xs space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#9E3E26] uppercase tracking-widest">
                <CloudSun className="w-4 h-4" />
                <span>Live Climate & Travel Comfort</span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#2d2a26] mt-1">
                {cityWeather.condition} &bull; {cityWeather.temperature}°C
              </h2>
              <p className="text-xs sm:text-sm text-[#6b625b] mt-1 max-w-xl">
                {cityWeather.summary}
              </p>
            </div>

            {/* Travel Comfort Score Chip */}
            <div className="flex items-center gap-3 bg-[#f9f7f4] px-4 py-3 rounded-2xl border border-[#e5e0d8]">
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-wider text-[#8c827a] font-bold">Comfort Rating</div>
                <div className="text-xl font-bold text-emerald-700">{cityWeather.travelComfortScore} / 100</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
                ✓
              </div>
            </div>
          </div>

          {/* Quick Weather Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-[#f9f7f4] rounded-xl border border-[#e5e0d8]">
              <div className="text-[10px] text-[#8c827a] font-semibold uppercase">Daily Range</div>
              <div className="text-sm font-bold text-[#2d2a26]">{cityWeather.high}°C / {cityWeather.low}°C</div>
            </div>
            <div className="p-3 bg-[#f9f7f4] rounded-xl border border-[#e5e0d8]">
              <div className="text-[10px] text-[#8c827a] font-semibold uppercase">Humidity</div>
              <div className="text-sm font-bold text-[#2d2a26]">{cityWeather.humidity}%</div>
            </div>
            <div className="p-3 bg-[#f9f7f4] rounded-xl border border-[#e5e0d8]">
              <div className="text-[10px] text-[#8c827a] font-semibold uppercase">Prime Window</div>
              <div className="text-xs font-bold text-[#9E3E26] truncate">{cityWeather.bestOutdoorHours}</div>
            </div>
            <div className="p-3 bg-[#f9f7f4] rounded-xl border border-[#e5e0d8]">
              <div className="text-[10px] text-[#8c827a] font-semibold uppercase">Air Quality</div>
              <div className="text-xs font-bold text-emerald-700">{cityWeather.airQuality.category} ({cityWeather.airQuality.aqi})</div>
            </div>
          </div>

          {/* Travel Tip */}
          <div className="p-4 bg-[#fbf9f6] rounded-2xl border border-[#e5e0d8] text-xs text-[#5a524c] flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-[#9E3E26] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#2d2a26]">Visiting Recommendation: </span>
              {cityWeather.travelAdvice}
            </div>
          </div>
        </section>
      )}

      {/* 2. SECTION: MONUMENTS & HISTORICAL PLACES (Most Prominent) */}
      {(activeTab === 'all' || activeTab === 'monuments') && (
        <section className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
                <Landmark className="w-3.5 h-3.5 text-[#5A5A40]" />
                <span>UNESCO Heritage & Forts</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2d2a26]">
                Iconic Monuments & Heritage Architecture
              </h2>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#8a817c] bg-[#f5f2ed] px-3.5 py-1.5 rounded-full border border-[#e5e0d8]">
              Most visited historical landmarks
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityMonuments.map((monument) => (
              <div
                key={monument.id}
                onClick={() => onSelectMonument(monument.id)}
                className="group bg-white rounded-3xl border border-[#e5e0d8] p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 rounded-2xl overflow-hidden bg-[#3a352f]">
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
                      <h3 className="text-xl font-serif font-bold text-white leading-tight">
                        {monument.name}
                      </h3>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-[#E6BE8A] mt-0.5">
                        {monument.builtIn ? `${monument.builtIn} • ` : ''}{monument.architecture.split('.')[0]}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 px-1 space-y-3">
                    <p className="text-xs text-[#8a817c] line-clamp-3 leading-relaxed">
                      {monument.historicalSignificance}
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#e5e0d8] text-[10px] uppercase font-bold tracking-wider text-[#8a817c]">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#5A5A40]" />
                        <span>{monument.estimatedVisitDuration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Ticket className="w-3.5 h-3.5 text-[#5A5A40]" />
                        <span className="truncate">{monument.entryFee.indian}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 px-1 border-t border-[#e5e0d8] flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#5A5A40] group-hover:underline">
                    View Monument History
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#5A5A40] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. SECTION: FESTIVALS & RITUALS HAPPENING HERE */}
      {(activeTab === 'all' || activeTab === 'festivals') && cityFestivals.length > 0 && (
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
                <Calendar className="w-3.5 h-3.5 text-[#5A5A40]" />
                <span>Living Celebrations</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2d2a26]">
                Festivals & Grand Rituals in {city.name}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cityFestivals.map((fest) => (
              <div
                key={fest.id}
                onClick={() => onSelectFestival(fest.id)}
                className="group bg-white rounded-3xl border border-[#e5e0d8] p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col sm:flex-row gap-4"
              >
                <div className="relative sm:w-48 h-48 sm:h-auto rounded-2xl shrink-0 overflow-hidden bg-[#3a352f]">
                  <img
                    src={fest.bannerImage}
                    alt={fest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-orange-500/90 text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full">
                    {fest.monthName}
                  </div>
                </div>

                <div className="p-2 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-[#5A5A40] mb-1">
                      📅 {fest.dateRange}
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#2d2a26] group-hover:text-[#5A5A40] transition-colors">
                      {fest.name}
                    </h3>
                    <p className="text-xs text-[#8a817c] line-clamp-2 mt-1 leading-relaxed">
                      {fest.shortDescription}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#e5e0d8] flex items-center justify-between text-xs">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#8a817c] truncate max-w-[140px]">
                      📍 {fest.bestExperienceSpot}
                    </span>
                    <span className="font-bold uppercase tracking-widest text-[#5A5A40] flex items-center gap-1">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. SECTION: TEMPLES, SACRED SITES & MUSEUMS */}
      {(activeTab === 'all' || activeTab === 'culture') && (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Temples & Sacred Sites */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-[#5A5A40]" />
              <span>Sacred Pilgrimage</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#2d2a26]">
              Temples & Sacred Sites
            </h3>
            <div className="space-y-3">
              {city.religiousSites.map((site, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#f5f2ed] border border-[#e5e0d8] space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-serif font-bold text-[#2d2a26]">{site.name}</h4>
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-[#E6BE8A] text-[#2d2a26] px-2.5 py-0.5 rounded-full">
                      {site.type}
                    </span>
                  </div>
                  <p className="text-xs text-[#8a817c] leading-relaxed">{site.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Museums & Art Galleries */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
              <Landmark className="w-4 h-4 text-[#5A5A40]" />
              <span>Galleries & Curations</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#2d2a26]">
              Museums & Art Collections
            </h3>
            <div className="space-y-3">
              {city.museums.map((mus, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#f5f2ed] border border-[#e5e0d8] space-y-1"
                >
                  <h4 className="text-sm font-serif font-bold text-[#2d2a26]">{mus.name}</h4>
                  <p className="text-xs text-[#8a817c] leading-relaxed">{mus.highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. SECTION: LOCAL CULTURE, HANDICRAFTS & HERITAGE STREETS */}
      {(activeTab === 'all' || activeTab === 'culture') && (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Handicrafts & Folk Traditions */}
          <div className="lg:col-span-2 bg-[#f5f2ed] rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] shadow-sm space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#8a817c] uppercase tracking-widest mb-1">
                <ShoppingBag className="w-4 h-4 text-[#5A5A40]" />
                <span>Living Heritage</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2d2a26]">
                Handicrafts, Classical Arts & Traditions
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold text-[#5A5A40] uppercase tracking-widest block mb-2">
                  Artisan Handicrafts to Buy:
                </span>
                <div className="flex flex-wrap gap-2">
                  {city.localCulture.handicrafts.map((craft, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white text-[#2d2a26] px-3.5 py-1.5 rounded-full border border-[#e5e0d8] font-medium shadow-xs"
                    >
                      ✨ {craft}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#5A5A40] uppercase tracking-widest block mb-2">
                  Classical Performing Arts:
                </span>
                <div className="flex flex-wrap gap-2">
                  {(city.localCulture.performingArts || city.localCulture.danceForms).map((art, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white text-[#2d2a26] px-3.5 py-1.5 rounded-full border border-[#e5e0d8] font-medium shadow-xs"
                    >
                      🎭 {art}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#5A5A40] uppercase tracking-widest block mb-2">
                  Traditional Attire & Weaves:
                </span>
                <div className="flex flex-wrap gap-2">
                  {(city.localCulture.traditionalAttire || city.localCulture.traditions).map((cloth, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white text-[#2d2a26] px-3.5 py-1.5 rounded-full border border-[#e5e0d8] font-medium shadow-xs"
                    >
                      🥻 {cloth}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Heritage Streets & Historic Bazaars */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
              <ShoppingBag className="w-4 h-4 text-[#5A5A40]" />
              <span>Historic Bazaars</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2d2a26]">
              Heritage Streets & Old Quarters
            </h3>
            <div className="space-y-3">
              {city.heritageStreets.map((st, idx) => (
                <div key={idx} className="p-3.5 bg-[#f5f2ed] rounded-2xl border border-[#e5e0d8]">
                  <div className="text-xs font-serif font-bold text-[#2d2a26]">{st.name}</div>
                  <div className="text-[11px] text-[#8a817c] mt-0.5">
                    Famous for: <span className="font-semibold text-[#5A5A40]">{st.famousFor}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. SECTION: AUTHENTIC LOCAL FOOD & HERITAGE RESTAURANTS */}
      {(activeTab === 'all' || activeTab === 'food') && (
        <section className="space-y-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
              <Utensils className="w-3.5 h-3.5 text-[#5A5A40]" />
              <span>Culinary Heritage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2d2a26]">
              Authentic Local Food & Iconic Dining
            </h2>
          </div>

          {/* Food Specialties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {city.authenticFood.map((food, idx) => (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-white border border-[#e5e0d8] shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-serif font-bold text-[#2d2a26]">{food.name}</h4>
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-[#E6BE8A] text-[#2d2a26] px-2.5 py-0.5 rounded-full">
                      Must Try
                    </span>
                  </div>
                  <p className="text-xs text-[#8a817c] leading-relaxed">{food.desc}</p>
                </div>

                <div className="pt-2 border-t border-[#e5e0d8] text-[11px] text-[#8a817c]">
                  <strong className="text-[#5A5A40]">Best Places: </strong>
                  <span>{(food.iconicSpots || []).join(', ')}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Heritage Restaurants with External Ordering/Links */}
          <div className="bg-[#f5f2ed] rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2d2a26]">
              Legendary Heritage Restaurants & Iconic Sweet Shops
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {city.heritageRestaurants.map((rest, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-[#e5e0d8] flex flex-col justify-between gap-3 shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-serif font-bold text-[#2d2a26]">{rest.name}</h4>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#5A5A40] bg-[#f5f2ed] px-2.5 py-0.5 rounded-full border border-[#e5e0d8]">
                        Est. {rest.established || 'Heritage Landmark'}
                      </span>
                    </div>
                    <p className="text-xs text-[#8a817c] mt-1">
                      Must-try signature dish: <strong className="text-[#2d2a26]">{rest.mustTry}</strong>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-[#e5e0d8]">
                    <a
                      href={`https://www.zomato.com/${encodeURIComponent(city.name.toLowerCase())}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold uppercase tracking-wider text-[#5A5A40] hover:underline flex items-center gap-1"
                    >
                      <span>Menu on Zomato</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <span>•</span>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(rest.name + ' ' + city.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold uppercase tracking-wider text-[#8a817c] hover:underline flex items-center gap-1"
                    >
                      <span>Google Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. SECTION: GUIDED EXPERIENCES & LOCAL ACTIVITIES */}
      <section className="space-y-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-[#5A5A40]" />
            <span>Curated Experiences</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2d2a26]">
            Cultural Experiences & Heritage Trails
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {city.localActivities.map((act, idx) => (
            <div
              key={idx}
              className="p-5 rounded-3xl bg-white border border-[#e5e0d8] shadow-sm flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-serif font-bold text-[#2d2a26]">{act.title}</h4>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5A5A40] bg-[#f5f2ed] px-3 py-1 rounded-full border border-[#e5e0d8]">
                    {act.priceEstimate}
                  </span>
                </div>
                <p className="text-xs text-[#8a817c] leading-relaxed">{act.desc}</p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#e5e0d8] text-xs">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#8a817c] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#5A5A40]" />
                  <span>Duration: {act.duration}</span>
                </span>
                <a
                  href={`https://in.bookmyshow.com/explore/experiences-${encodeURIComponent(city.name.toLowerCase())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold uppercase tracking-widest text-[#5A5A40] hover:underline flex items-center gap-1"
                >
                  <span>Book Experience</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. SECTION: TRAVEL INFORMATION & EXTERNAL BOOKING BUTTONS */}
      {(activeTab === 'all' || activeTab === 'travel') && (
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#e5e0d8] pb-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
                <Navigation className="w-3.5 h-3.5 text-[#5A5A40]" />
                <span>Travel Distance & Route Options</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2d2a26]">
                How to Reach {city.name} from {userLocation.city}
              </h2>
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#5A5A40] bg-[#f5f2ed] px-3.5 py-1.5 rounded-full border border-[#e5e0d8] shrink-0">
              Total Distance: ~{travelPlan.distanceKm} km
            </div>
          </div>

          {/* Travel Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {travelPlan.options.map((opt, idx) => {
              const Icon =
                opt.mode === 'flight'
                  ? Plane
                  : opt.mode === 'train'
                  ? Train
                  : opt.mode === 'bus'
                  ? Bus
                  : Car;

              return (
                <div
                  key={idx}
                  className="p-5 rounded-3xl bg-[#f5f2ed] border border-[#e5e0d8] flex flex-col justify-between space-y-4 hover:border-[#5A5A40]/40 transition-all shadow-xs hover:shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-full bg-white text-[#5A5A40] flex items-center justify-center border border-[#e5e0d8] shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-serif font-bold text-[#2d2a26]">{opt.title}</h4>
                    <p className="text-xs text-[#8a817c]">{opt.operatorOrDetail}</p>
                    <div className="space-y-1 pt-1">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-[#2d2a26]">
                        ⏱️ Duration: {opt.duration}
                      </div>
                      <div className="text-xs text-[#5A5A40] font-bold">
                        {opt.priceRange}
                      </div>
                    </div>
                  </div>

                  <a
                    href={opt.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 text-xs font-bold uppercase tracking-widest text-white bg-[#5A5A40] hover:bg-[#484833] rounded-full flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer text-center"
                  >
                    <span>Book on {opt.bookingService.split(' ')[0]}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>

          {/* External Hotel Booking Bar */}
          <div className="p-5 rounded-3xl bg-[#f5f2ed] border border-[#e5e0d8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E6BE8A] flex items-center justify-center text-[#2d2a26] shrink-0 shadow-xs">
                <Hotel className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-serif font-bold text-[#2d2a26]">
                  Looking for Heritage Havelis & Hotels in {city.name}?
                </h4>
                <p className="text-xs text-[#8a817c]">
                  Book verified heritage properties, boutique palaces & comfort stays.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city.name + ', India')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#5A5A40] bg-white hover:bg-[#fdfaf6] border border-[#e5e0d8] rounded-full flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Booking.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={`https://www.agoda.com/search?city=${encodeURIComponent(city.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#5A5A40] hover:bg-[#484833] rounded-full flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Agoda</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* 9. BOTTOM PROMINENT CTA: CREATE PERSONALIZED ITINERARY */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#3a352f] text-white shadow-md border border-[#e5e0d8] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-[10px] font-bold uppercase tracking-widest bg-white/15 px-3 py-1 rounded-full text-[#E6BE8A]">
            Interactive Day-by-Day Timeline
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Plan Your Ideal Heritage Journey in {city.name}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl font-normal">
            Choose 1 to 5 days, customize travel pace and stay style, and get an optimized hourly timeline with monuments, food, and culture.
          </p>
        </div>

        <button
          onClick={() => onOpenItineraryGenerator(city.id)}
          className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#2d2a26] bg-[#E6BE8A] hover:bg-white rounded-full shadow-md active:scale-95 transition-all cursor-pointer shrink-0 flex items-center gap-2"
        >
          <Compass className="w-4 h-4 text-[#5A5A40]" />
          <span>Launch Itinerary Builder</span>
          <ArrowRight className="w-4 h-4 text-[#5A5A40]" />
        </button>
      </div>
    </div>
  );
};
