import React from 'react';
import { Festival } from '../types';
import { Calendar, MapPin, ArrowRight, Heart, Sparkles, Compass } from 'lucide-react';

interface FestivalCardProps {
  festival: Festival;
  onExplore: (festivalId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (festivalId: string) => void;
}

export const FestivalCard: React.FC<FestivalCardProps> = ({
  festival,
  onExplore,
  isSaved = false,
  onToggleSave
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
          <h3 className="text-lg sm:text-xl font-serif font-bold text-white leading-tight line-clamp-1">
            {festival.name}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="pt-4 px-1 flex-1 flex flex-col justify-between space-y-3.5">
        <div className="space-y-2">
          <p className="text-xs text-[#8a817c] line-clamp-2 leading-relaxed">
            {festival.shortDescription}
          </p>

          {/* Celebrated States & Destinations */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#8a817c]">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#5A5A40] flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {festival.stateOrigin ? `${festival.stateOrigin}:` : 'States:'}
            </span>
            <span className="capitalize text-[#2d2a26] font-medium text-xs">
              {festival.traditionalTithi ? festival.traditionalTithi : festival.celebratedStates.slice(0, 3).join(', ')}
              {!festival.traditionalTithi && festival.celebratedStates.length > 3 ? ` +${festival.celebratedStates.length - 3} more` : ''}
            </span>
          </div>

          {/* Special Foods or Tags */}
          {festival.specialFoods && festival.specialFoods.length > 0 ? (
            <div className="flex flex-wrap gap-1 pt-1">
              <span className="text-[9px] uppercase font-bold tracking-wider bg-amber-50 text-amber-900 px-2 py-0.5 rounded-full border border-amber-200">
                🍽️ {festival.specialFoods.slice(0, 2).join(', ')}
              </span>
              {festival.tags.slice(0, 2).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[9px] uppercase font-bold tracking-wider bg-[#f5f2ed] text-[#5A5A40] px-2 py-0.5 rounded-full border border-[#e5e0d8]"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {festival.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] uppercase font-bold tracking-wider bg-[#f5f2ed] text-[#5A5A40] px-2.5 py-0.5 rounded-full border border-[#e5e0d8]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Card Footer Button */}
        <div className="pt-3 border-t border-[#e5e0d8] flex items-center justify-between">
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#8a817c]">
            {festival.primaryDestinations.length} Hub{festival.primaryDestinations.length > 1 ? 's' : ''}
          </span>

          <button
            onClick={() => onExplore(festival.id)}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white bg-[#5A5A40] hover:bg-[#484833] rounded-full transition-all shadow-md shadow-[#5A5A40]/15 active:scale-95 cursor-pointer group/btn"
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
