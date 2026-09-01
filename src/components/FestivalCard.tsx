import React from 'react';
import { Festival, SupportedLanguage } from '../types';
import { getTranslation } from '../data/languages';
import { Calendar, MapPin, ArrowRight, Heart, Sparkles } from 'lucide-react';

interface FestivalCardProps {
  festival: Festival;
  onExplore: (festivalId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (festivalId: string) => void;
  currentLanguage?: SupportedLanguage;
}

export const FestivalCard: React.FC<FestivalCardProps> = ({
  festival,
  onExplore,
  isSaved = false,
  onToggleSave,
  currentLanguage = 'en'
}) => {
  return (
    <div className="group flex flex-col bg-white rounded-3xl border border-[#e5e0d8] p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow">
      {/* Image Container with Badges */}
      <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden bg-[#3a352f]">
        <img
          src={festival.bannerImage}
          alt={festival.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="bg-orange-500/90 text-white text-[10px] uppercase font-bold tracking-widest italic px-3 py-1 rounded-full backdrop-blur-md shadow-xs flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-white" />
            <span>{festival.dateRange}</span>
          </span>

          {onToggleSave && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(festival.id);
              }}
              className={`p-2 rounded-full backdrop-blur-md transition-transform active:scale-80 cursor-pointer ${
                isSaved
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'bg-black/40 text-white/80 hover:text-white hover:bg-black/60'
              }`}
              title={isSaved ? 'Remove from Saved' : 'Save to My Trip'}
            >
              <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          )}
        </div>

        {/* Bottom Image Overlay text */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="text-[10px] uppercase font-bold tracking-widest text-[#E6BE8A] flex items-center gap-1 mb-0.5">
            <Sparkles className="w-3 h-3" />
            <span>{festival.duration} • {festival.monthName}</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-white line-clamp-1 leading-snug">
            {festival.name}
          </h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-between pt-3.5 px-1 space-y-3">
        <div className="space-y-2">
          <div className="flex items-center gap-1 text-xs text-[#8a817c]">
            <MapPin className="w-3.5 h-3.5 text-[#5A5A40] shrink-0" />
            <span className="font-semibold text-[#5A5A40] truncate">{festival.stateOrigin || festival.celebratedStates?.[0] || 'India'}</span>
            <span>&bull;</span>
            <span className="truncate">{(festival.primaryDestinations || festival.celebratedStates || []).join(', ')}</span>
          </div>

          <p className="text-xs text-[#6b625b] line-clamp-2 leading-relaxed font-normal">
            {festival.shortDescription || festival.culturalSignificance}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {(festival.keyActivities || festival.ritualHighlights || festival.tags || []).slice(0, 2).map((highlight, idx) => (
              <span
                key={idx}
                className="bg-[#f5f2ed] border border-[#e5e0d8] text-[#5A5A40] text-[10px] font-semibold px-2.5 py-0.5 rounded-full line-clamp-1"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Explore Button */}
        <button
          onClick={() => onExplore(festival.id)}
          className="w-full mt-2 py-2.5 px-4 bg-[#f5f2ed] hover:bg-[#5A5A40] text-[#5A5A40] hover:text-white rounded-xl text-xs uppercase font-bold tracking-wider transition-colors flex items-center justify-center gap-2 group/btn cursor-pointer"
        >
          <span>{getTranslation('btn.explore', currentLanguage) || 'Explore Festival'}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
