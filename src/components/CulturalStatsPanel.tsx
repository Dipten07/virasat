import React from 'react';
import { CulturalArtisticStats } from '../types';
import { getCulturalStatsForCity } from '../data/culturalStatsData';
import {
  Sparkles,
  Landmark,
  Crown,
  History,
  Award,
  Music,
  Palette,
  Hammer,
  ShieldCheck,
  Tag,
  Compass,
  CheckCircle2
} from 'lucide-react';

interface CulturalStatsPanelProps {
  cityId: string;
  cityName: string;
  onExploreMonuments?: () => void;
}

export const CulturalStatsPanel: React.FC<CulturalStatsPanelProps> = ({
  cityId,
  cityName,
  onExploreMonuments
}) => {
  const stats: CulturalArtisticStats = getCulturalStatsForCity(cityId, cityName);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] shadow-xs space-y-8">
      {/* Top Banner with Living Heritage Metrics */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#f0ece5]">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#5A5A40] uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#9E3E26]" />
            <span>Living Heritage & Artistic Indices</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2d2a26] mt-1">
            Cultural & Artistic Legacy of {cityName}
          </h3>
          <p className="text-xs sm:text-sm text-[#6b625b] mt-1 max-w-xl">
            {stats.architecturalEra} &bull; Patronage of {stats.dominantDynasty}
          </p>
        </div>

        {/* Highlight Score Counters */}
        <div className="grid grid-cols-3 gap-3 shrink-0">
          <div className="bg-[#fcfaf7] p-3.5 rounded-2xl border border-[#e8e4dc] text-center min-w-[90px]">
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#9E3E26]">
              {stats.yearsOfLivingHeritage}+
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#8c827a] mt-0.5">
              Years Heritage
            </div>
          </div>

          <div className="bg-[#fcfaf7] p-3.5 rounded-2xl border border-[#e8e4dc] text-center min-w-[90px]">
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#5A5A40]">
              {stats.unescoSitesCount}
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#8c827a] mt-0.5">
              UNESCO Sites
            </div>
          </div>

          <div className="bg-[#fcfaf7] p-3.5 rounded-2xl border border-[#e8e4dc] text-center min-w-[90px]">
            <div className="text-xl sm:text-2xl font-serif font-bold text-emerald-700">
              {stats.heritageScore}/100
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#8c827a] mt-0.5">
              Virasat Index
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Key Heritage Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1. GI Tagged Handicrafts & Handloom Guilds */}
        <div className="bg-[#fbf9f6] p-5 rounded-2xl border border-[#e8e4dc] space-y-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-[#9E3E26] uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>GI Tagged Master Crafts</span>
            </div>
            <span className="text-[10px] font-bold text-[#5A5A40] bg-white px-2 py-0.5 rounded-md border border-[#e5e0d8]">
              ~{stats.artisanGuildsEstimate} Guilds
            </span>
          </div>

          <p className="text-xs text-[#6b625b]">
            Certified Geographical Indication (GI) traditional handicrafts protected for generational authenticity:
          </p>

          <div className="flex flex-wrap gap-2">
            {stats.giTagCrafts.map((craft, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-3 py-1.5 bg-white text-[#2d2a26] rounded-xl border border-[#e5e0d8] flex items-center gap-1.5 shadow-2xs"
              >
                <Tag className="w-3 h-3 text-[#9E3E26]" />
                <span>{craft}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 2. Classical Performing Arts & Music Gharanas */}
        <div className="bg-[#fbf9f6] p-5 rounded-2xl border border-[#e8e4dc] space-y-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-[#5A5A40] uppercase tracking-wider">
              <Music className="w-4 h-4 text-[#5A5A40]" />
              <span>Classical Music & Dance Gharanas</span>
            </div>
            <span className="text-[10px] font-bold text-[#9E3E26] bg-white px-2 py-0.5 rounded-md border border-[#e5e0d8]">
              Living Traditions
            </span>
          </div>

          <p className="text-xs text-[#6b625b]">
            Centuries of classical pedagogy, oral transmission, and temple performance traditions:
          </p>

          <div className="space-y-2">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#8c827a] mb-1">
                Classical Traditions
              </div>
              <div className="flex flex-wrap gap-1.5">
                {stats.classicalArts.map((art, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 bg-white text-[#2d2a26] rounded-lg border border-[#e5e0d8] font-medium"
                  >
                    🎭 {art}
                  </span>
                ))}
              </div>
            </div>

            {stats.musicGharanas.length > 0 && (
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#8c827a] mb-1">
                  Revered Gharanas / Lineages
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {stats.musicGharanas.map((gharana, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 bg-[#f0ece5] text-[#2d2a26] rounded-lg border border-[#dfdbd2] font-semibold"
                    >
                      🎶 {gharana}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3. Architectural Masonry & Stone Craft */}
        <div className="bg-[#fbf9f6] p-5 rounded-2xl border border-[#e8e4dc] space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#2d2a26] uppercase tracking-wider">
            <Hammer className="w-4 h-4 text-[#5A5A40]" />
            <span>Masonry & Engineering Style</span>
          </div>

          <p className="text-xs font-medium text-[#2d2a26] leading-relaxed bg-white p-3.5 rounded-xl border border-[#e5e0d8]">
            {stats.masonryStyle}
          </p>
        </div>

        {/* 4. Iconic Heritage Motifs */}
        <div className="bg-[#fbf9f6] p-5 rounded-2xl border border-[#e8e4dc] space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#9E3E26] uppercase tracking-wider">
            <Palette className="w-4 h-4" />
            <span>Iconic Architectural Motifs</span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {stats.keyMotifs.map((motif, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-3 py-1.5 bg-white text-[#2d2a26] rounded-xl border border-[#e5e0d8] flex items-center gap-1.5"
              >
                <Sparkles className="w-3 h-3 text-[#E6BE8A]" />
                <span>{motif}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
