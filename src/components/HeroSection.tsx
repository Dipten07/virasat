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
      <div className="relative z-10 p-6 sm:p-10 md:p-12 lg:p-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headlines, CTAs, and Stats */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Badges & Origin indicator */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase font-bold tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#E6BE8A]" />
                <span>{getTranslation('hero.tagline', currentLanguage)}</span>
              </div>

              <button
                onClick={onOpenLocationModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-500/90 hover:bg-orange-500 text-white text-[10px] uppercase font-bold tracking-widest transition-colors cursor-pointer shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-white" />
                <span>{getTranslation('hero.from', currentLanguage)}: </span>
                <span className="font-bold underline decoration-white/60">{userLocation.city}</span>
              </button>
            </div>

            {/* Hero Headlines */}
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                {getTranslation('hero.title', currentLanguage)}
              </h1>
              <p className="text-white/85 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                {getTranslation('hero.subtitle', currentLanguage)}
              </p>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-white/15">
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

          {/* Right Column: Featured Cultural Spotlight & Travel Portal Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-5 sm:p-6 text-white shadow-2xl space-y-4 hover:bg-white/15 transition-all">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#E6BE8A] text-[#2d2a26] text-[10px] font-bold uppercase tracking-widest">
                  ⭐ {getTranslation('home.toolkitBadge', currentLanguage) ? 'Cultural Spotlight' : 'Cultural Spotlight'}
                </span>
                <span className="text-[10px] text-neutral-300 uppercase tracking-widest font-semibold flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-orange-400" />
                  {userLocation.city} Origin
                </span>
              </div>

              {/* Spotlight Image & Details */}
              <div className="relative h-40 sm:h-44 rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80"
                  alt="Taj Mahal Agra"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-[#E6BE8A] bg-black/50 px-2 py-0.5 rounded-md backdrop-blur-xs">
                    UNESCO World Heritage Site
                  </span>
                  <h3 className="font-serif font-bold text-lg text-white mt-1 line-clamp-1">
                    Taj Mahal & Ancient Mughal Splendor
                  </h3>
                  <p className="text-[11px] text-neutral-300 line-clamp-1">
                    Agra, Uttar Pradesh • Living Mughal Architecture
                  </p>
                </div>
              </div>

              {/* Quick Highlights Pills */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-black/25 rounded-xl p-2.5 border border-white/10 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#E6BE8A]/20 flex items-center justify-center text-[#E6BE8A] shrink-0">
                    🏛️
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-300">Monuments</div>
                    <div className="text-xs font-bold text-white">30+ ASI Wonders</div>
                  </div>
                </div>

                <div className="bg-black/25 rounded-xl p-2.5 border border-white/10 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-300 shrink-0">
                    🎉
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-300">Festivals</div>
                    <div className="text-xs font-bold text-white">12-Month Flow</div>
                  </div>
                </div>
              </div>

              {/* Quick Direct CTA inside Spotlight Card */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={onPlanJourney}
                  className="flex-1 py-2.5 px-4 bg-[#E6BE8A] hover:bg-white text-[#2d2a26] rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-center cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
                >
                  <Compass className="w-3.5 h-3.5 text-[#5A5A40]" />
                  <span>Plan Route from {userLocation.city}</span>
                </button>
                <button
                  onClick={onOpenSearchModal}
                  className="py-2.5 px-3 bg-white/15 hover:bg-white/25 text-white border border-white/20 rounded-xl text-xs font-bold transition-all cursor-pointer"
                  title="Search Destinations & Monuments"
                >
                  🔍
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
