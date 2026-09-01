import React, { useState } from 'react';
import { Monument, UserLocation, SupportedLanguage } from '../types';
import { calculateDistanceKm } from '../data/indianLocations';
import { CITIES_DATA } from '../data/citiesData';
import { getTranslation, SUPPORTED_LANGUAGES } from '../data/languages';
import { speakText, stopSpeech, getSpeechCodeForLang } from '../services/speechService';
import {
  Landmark,
  MapPin,
  Clock,
  Ticket,
  Calendar,
  Compass,
  ArrowRight,
  Heart,
  ExternalLink,
  Utensils,
  Camera,
  CheckCircle2,
  Sparkles,
  Info,
  Headphones,
  Volume2,
  Pause
} from 'lucide-react';

import { CommunityReviewSection } from './CommunityReviewSection';

interface MonumentDetailViewProps {
  monument: Monument;
  userLocation: UserLocation;
  currentLanguage?: SupportedLanguage;
  onSelectCity: (cityId: string) => void;
  onPlanTrip: (cityId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (monumentId: string) => void;
  onOpenAuthModal?: () => void;
}

export const MonumentDetailView: React.FC<MonumentDetailViewProps> = ({
  monument,
  userLocation,
  currentLanguage = 'en',
  onSelectCity,
  onPlanTrip,
  isSaved = false,
  onToggleSave,
  onOpenAuthModal = () => {}
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speechSpeed, setSpeechSpeed] = useState<number>(0.9);

  const distance = calculateDistanceKm(
    userLocation.latitude,
    userLocation.longitude,
    monument.latitude,
    monument.longitude
  );

  const city = CITIES_DATA.find((c) => c.id === monument.cityId);
  const activeLangMeta = SUPPORTED_LANGUAGES.find((l) => l.code === currentLanguage);

  const handleToggleAudio = async () => {
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
      return;
    }

    setIsPlayingAudio(true);

    const narrationScript = `${monument.name} in ${monument.cityName}, ${monument.state}. ${monument.hindiName ? monument.hindiName + '.' : ''} ${monument.historicalSignificance}. ${monument.architecture}. Built in ${monument.builtIn || 'ancient era'}.`;

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
      {/* 1. Monument Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden shadow-md bg-[#3a352f] border border-[#e5e0d8]">
        <div className="relative h-80 sm:h-96 md:h-[420px] w-full">
          <img
            src={monument.bannerImage}
            alt={monument.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#2d2a26] via-[#2d2a26]/60 to-black/30" />
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 text-white space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#E6BE8A] text-[#2d2a26] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
              {monument.type}
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#E6BE8A]" />
              <span>{monument.cityName}, {monument.state}</span>
            </span>
            <span className="bg-white/15 text-[#E6BE8A] border border-white/20 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
              📍 {distance} km from {userLocation.city}
            </span>
          </div>

          <div>
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              {monument.name}
            </h1>
            {monument.hindiName && (
              <p className="text-[#E6BE8A] font-serif italic text-sm sm:text-base font-normal mt-1">
                {monument.hindiName}
              </p>
            )}
          </div>

          <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed max-w-3xl font-normal">
            {monument.historicalSignificance}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onPlanTrip(monument.cityId)}
              className="flex items-center gap-2 px-7 py-3 text-xs font-bold uppercase tracking-widest text-[#2d2a26] bg-[#E6BE8A] hover:bg-white rounded-full shadow-md active:scale-95 transition-all cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#5A5A40]" />
              <span>{getTranslation('btn.planTrip', currentLanguage)}</span>
            </button>

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
                onClick={() => onToggleSave(monument.id)}
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

            {monument.officialBookingUrl && (
              <a
                href={monument.officialBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-white text-[#2d2a26] hover:bg-[#f5f2ed] transition-all cursor-pointer shadow-sm border border-[#e5e0d8]"
              >
                <Ticket className="w-3.5 h-3.5 text-[#5A5A40]" />
                <span>{getTranslation('btn.officialTicket', currentLanguage)}</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
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
                Listening to the architecture & history of {monument.name}
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

      {/* 2. Key Visiting Information Cards (Hours, Fee, Best Time, Duration) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Visiting Hours */}
        <div className="bg-white p-5 rounded-3xl border border-[#e5e0d8] shadow-sm space-y-2">
          <div className="w-9 h-9 rounded-full bg-[#f5f2ed] border border-[#e5e0d8] text-[#5A5A40] flex items-center justify-center">
            <Clock className="w-4 h-4 text-[#5A5A40]" />
          </div>
          <div className="text-[10px] font-bold text-[#8a817c] uppercase tracking-widest">
            {getTranslation('monument.visitingHours', currentLanguage)}
          </div>
          <div className="text-sm font-serif font-bold text-[#2d2a26]">
            {monument.visitingHours}
          </div>
          <div className="text-xs text-[#8a817c]">
            Best Time: <span className="font-semibold text-[#5A5A40]">{monument.bestTimeToVisit}</span>
          </div>
        </div>

        {/* Entry Fee (Indian & Foreigners) */}
        <div className="bg-white p-5 rounded-3xl border border-[#e5e0d8] shadow-sm space-y-2">
          <div className="w-9 h-9 rounded-full bg-[#f5f2ed] border border-[#e5e0d8] text-[#5A5A40] flex items-center justify-center">
            <Ticket className="w-4 h-4 text-[#5A5A40]" />
          </div>
          <div className="text-[10px] font-bold text-[#8a817c] uppercase tracking-widest">
            {getTranslation('monument.entryFee', currentLanguage)}
          </div>
          <div className="text-sm font-serif font-bold text-[#2d2a26]">
            {monument.entryFee.indian} <span className="text-xs text-[#8a817c] font-normal">(Indian)</span>
          </div>
          <div className="text-xs text-[#8a817c]">
            Foreign: <span className="font-semibold">{monument.entryFee.foreigner}</span>
          </div>
        </div>

        {/* Visit Duration */}
        <div className="bg-white p-5 rounded-3xl border border-[#e5e0d8] shadow-sm space-y-2">
          <div className="w-9 h-9 rounded-full bg-[#f5f2ed] border border-[#e5e0d8] text-[#5A5A40] flex items-center justify-center">
            <Calendar className="w-4 h-4 text-[#5A5A40]" />
          </div>
          <div className="text-[10px] font-bold text-[#8a817c] uppercase tracking-widest">
            {getTranslation('monument.duration', currentLanguage)}
          </div>
          <div className="text-sm font-serif font-bold text-[#2d2a26]">
            {monument.estimatedVisitDuration}
          </div>
          <div className="text-xs text-[#8a817c]">
            Camera: <span className="font-semibold">{monument.entryFee.camera}</span>
          </div>
        </div>

        {/* Heritage Type & Era */}
        <div className="bg-white p-5 rounded-3xl border border-[#e5e0d8] shadow-sm space-y-2">
          <div className="w-9 h-9 rounded-full bg-[#f5f2ed] border border-[#e5e0d8] text-[#5A5A40] flex items-center justify-center">
            <Landmark className="w-4 h-4 text-[#5A5A40]" />
          </div>
          <div className="text-[10px] font-bold text-[#8a817c] uppercase tracking-widest">
            Built In / Era
          </div>
          <div className="text-sm font-serif font-bold text-[#2d2a26]">
            {monument.builtIn}
          </div>
          <div className="text-xs text-[#8a817c] truncate">
            {monument.type}
          </div>
        </div>
      </div>

      {/* 3. Deep Architectural Style & Historical Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] shadow-sm space-y-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8a817c] uppercase tracking-widest mb-1">
              <Landmark className="w-4 h-4 text-[#5A5A40]" />
              <span>{getTranslation('monument.architecture', currentLanguage)}</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#2d2a26]">
              Design, Craftsmanship & Structural Heritage
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#8a817c] leading-relaxed font-normal">
            {monument.architecture}
          </p>

          <div className="p-4 rounded-2xl bg-[#f5f2ed] border border-[#e5e0d8] space-y-2">
            <h4 className="text-[10px] font-bold text-[#5A5A40] uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#5A5A40]" />
              <span>Key Architectural Highlights</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#2d2a26] leading-relaxed">
              Constructed in {monument.builtIn}, showcasing signature elements of {monument.architecture.split('.')[0]}.
            </p>
          </div>
        </div>

        {/* Travel Tips & Local Advice */}
        <div className="bg-[#f5f2ed] rounded-3xl p-6 border border-[#e5e0d8] shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
            <Info className="w-4 h-4 text-[#5A5A40]" />
            <span>Traveler Guidelines</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-[#2d2a26]">
            Visitor Advice
          </h3>
          <div className="space-y-3 text-xs text-[#2d2a26]">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
              <span>Book ASI tickets online in advance to skip physical queues at the ticket window.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
              <span>Wear comfortable walking shoes; heritage complex involves extensive stone paving.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
              <span>Authorized government guides with ASI badges are available at main entrance gates.</span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#e5e0d8]">
            <button
              onClick={() => onSelectCity(monument.cityId)}
              className="w-full py-3 px-3 rounded-full bg-white hover:bg-[#fdfaf6] text-[#5A5A40] font-bold text-xs uppercase tracking-widest border border-[#e5e0d8] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Explore All {monument.cityName} Attractions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 4. Nearby Food & Authentic Dining near Monument */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
              <Utensils className="w-3.5 h-3.5 text-[#5A5A40]" />
              <span>{getTranslation('city.authenticFood', currentLanguage)}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2d2a26]">
              Famous Food & Iconic Dishes near {monument.name}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {monument.nearbyFood.map((food, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#f5f2ed] border border-[#e5e0d8] flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-white text-[#5A5A40] flex items-center justify-center shrink-0 border border-[#e5e0d8] shadow-xs">
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-serif font-bold text-[#2d2a26]">{food}</h4>
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#8a817c]">Famous local specialty</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Real-Time Community Reviews & Traveler Advice (Firebase Firestore) */}
      <CommunityReviewSection
        itemId={monument.id}
        itemType="monument"
        itemTitle={monument.name}
        onOpenAuthModal={onOpenAuthModal}
      />
    </div>
  );
};
