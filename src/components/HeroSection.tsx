import React from 'react';
import { UserLocation, SupportedLanguage } from '../types';
import { getTranslation } from '../data/languages';
import { Sparkles, Calendar, Landmark, MapPin, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  userLocation: UserLocation;
  currentLanguage?: SupportedLanguage;
  onExploreFestivals: () => void;
  onPlanJourney: () => void;
  onOpenLocationModal: () => void;
  onOpenSearchModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  userLocation,
  currentLanguage = 'en',
  onExploreFestivals,
  onPlanJourney,
  onOpenLocationModal,
  onOpenSearchModal
}) => {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-md border border-[#e5e0d8] bg-[#3a352f] text-white">
      {/* Background Image with Warm Heritage Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=2000&q=85"
          alt="Ganges Ghats Dev Deepawali Varanasi"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-10000 hover:scale-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#2d2a26] via-[#2d2a26]/70 to-black/40" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 30H15z' fill='%23E6BE8A' fill-opacity='0.2'/%3E%3C/svg%3E")`, backgroundSize: '120px' }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 p-6 sm:p-10 md:p-14 lg:p-16 max-w-4xl space-y-6">
        
        {/* Top Badges & Origin indicator */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase font-bold tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#E6BE8A]" />
            <span>{getTranslation('hero.tagline', currentLanguage)}</span>
          </div>

          <button
            onClick={onOpenLocationModal}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/80 hover:bg-orange-500 text-white text-[10px] uppercase font-bold tracking-widest transition-colors cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-white" />
            <span>{getTranslation('hero.from', currentLanguage)}: </span>
            <span className="font-bold underline decoration-white/60">{userLocation.city}</span>
          </button>
        </div>

        {/* Hero Headlines */}
        <div className="space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {getTranslation('hero.title', currentLanguage)}
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-normal">
            {getTranslation('hero.subtitle', currentLanguage)}
          </p>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
          <button
            onClick={onExploreFestivals}
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#E6BE8A] text-[#2d2a26] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-all shadow-md active:scale-98 cursor-pointer group"
          >
            <Calendar className="w-4 h-4 text-[#5A5A40]" />
            <span>{getTranslation('btn.exploreFestivals', currentLanguage)}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onPlanJourney}
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white/20 hover:bg-white/30 text-white border border-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest active:scale-98 transition-all cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#E6BE8A]" />
            <span>{getTranslation('btn.planTrip', currentLanguage)}</span>
          </button>
        </div>

        {/* Value Prop Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#E6BE8A]/20 border border-[#E6BE8A]/30 flex items-center justify-center text-[#E6BE8A] shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-white">{getTranslation('hero.stat.months', currentLanguage)}</div>
              <div className="text-[10px] text-neutral-300">{getTranslation('hero.stat.monthsLabel', currentLanguage)}</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-orange-300 shrink-0">
              <Landmark className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-white">{getTranslation('hero.stat.monuments', currentLanguage)}</div>
              <div className="text-[10px] text-neutral-300">{getTranslation('hero.stat.monumentsLabel', currentLanguage)}</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-white">{getTranslation('hero.stat.states', currentLanguage)}</div>
              <div className="text-[10px] text-neutral-300">{getTranslation('hero.stat.statesLabel', currentLanguage)}</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-white">{getTranslation('hero.stat.booking', currentLanguage)}</div>
              <div className="text-[10px] text-neutral-300">{getTranslation('hero.stat.bookingLabel', currentLanguage)}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
