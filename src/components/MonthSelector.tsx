import React from 'react';
import { MonthData, SupportedLanguage } from '../types';
import { MONTHS_DATA } from '../data/monthsData';
import { getTranslation } from '../data/languages';
import { Calendar, Sparkles } from 'lucide-react';

interface MonthSelectorProps {
  selectedMonthId: number;
  onSelectMonth: (monthId: number) => void;
  currentLanguage?: SupportedLanguage;
}

export const MonthSelector: React.FC<MonthSelectorProps> = ({
  selectedMonthId,
  onSelectMonth,
  currentLanguage = 'en'
}) => {
  const currentMonthData = MONTHS_DATA.find((m) => m.id === selectedMonthId) || MONTHS_DATA[0];

  const getMonthName = (monthId: number, defaultName: string) => {
    const key = `month.${monthId}.name`;
    const translated = getTranslation(key, currentLanguage);
    return translated !== key ? translated : defaultName;
  };

  return (
    <div className="space-y-4">
      {/* Month Selector Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5 text-[#5A5A40]" />
            <span>{getTranslation('month.timeline', currentLanguage) || 'Timeline (12 Months of Festivals)'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#2d2a26] mt-0.5">
            {getTranslation('month.exploreBy', currentLanguage) || 'Explore Celebrations by Month'}
          </h2>
        </div>
      </div>

      {/* 12 Months Horizontal Scroll / Adaptive Pill Grid */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 px-1">
        {MONTHS_DATA.map((month) => {
          const isSelected = month.id === selectedMonthId;
          const monthName = getMonthName(month.id, month.name);

          return (
            <button
              key={month.id}
              onClick={() => onSelectMonth(month.id)}
              className={`flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer select-none shrink-0 ${
                isSelected
                  ? 'px-6 py-2.5 rounded-full bg-[#5A5A40] text-white text-xs font-bold shadow-lg shadow-[#5A5A40]/20 scale-102'
                  : 'px-4 py-2 rounded-full border border-[#e5e0d8] bg-[#f5f2ed] hover:bg-white text-xs text-[#8a817c] hover:text-[#2d2a26]'
              }`}
            >
              <span>{monthName}</span>
              <span className={`text-[10px] ${isSelected ? 'opacity-80 font-normal text-white' : 'opacity-60 text-[#8a817c]'}`}>
                ({month.festivalCount})
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Month Banner Preview */}
      <div className="relative overflow-hidden rounded-3xl bg-[#3a352f] text-white p-6 sm:p-7 border border-[#e5e0d8] shadow-sm">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 30H15z' fill='%23E6BE8A' fill-opacity='0.2'/%3E%3C/svg%3E")`, backgroundSize: '120px' }}></div>
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 w-full">
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2">
              <span className="bg-orange-500/80 text-white text-[10px] px-3 py-0.5 rounded-full font-bold uppercase tracking-widest">
                {currentMonthData.season}
              </span>
              <span className="text-xs text-[#E6BE8A] font-serif italic">
                {currentMonthData.hindiName}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              {getMonthName(currentMonthData.id, currentMonthData.name)} {getTranslation('month.inIndia', currentLanguage) || 'in India'}
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
              {currentMonthData.tagline}
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-2 shrink-0">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#E6BE8A]">
              {getTranslation('month.topHighlights', currentLanguage) || 'Top Highlights:'}
            </span>
            <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
              {currentMonthData.topFestivals.slice(0, 3).map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-white/10 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-full border border-white/20 font-medium hover:bg-white/20 transition-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
