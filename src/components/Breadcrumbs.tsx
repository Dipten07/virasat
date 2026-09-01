import React from 'react';
import { BreadcrumbItem } from '../types';
import { ChevronRight, ArrowLeft, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (view: BreadcrumbItem['view'], params?: BreadcrumbItem['params']) => void;
  onBack?: () => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate, onBack }) => {
  if (items.length <= 1) return null;

  return (
    <div className="bg-[#f5f2ed]/70 backdrop-blur-md border-b border-[#e5e0d8] px-4 sm:px-6 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={index}>
                {index === 0 ? (
                  <button
                    onClick={() => onNavigate(item.view, item.params)}
                    className="flex items-center gap-1 text-[#8a817c] hover:text-[#5A5A40] font-semibold uppercase tracking-wider text-[10px] transition-colors whitespace-nowrap cursor-pointer"
                    title="Home"
                  >
                    <Home className="w-3.5 h-3.5 text-[#5A5A40]" />
                    <span>{item.label}</span>
                  </button>
                ) : isLast ? (
                  <span className="font-semibold text-[#5A5A40] truncate max-w-[200px] sm:max-w-[320px] bg-white px-2.5 py-0.5 rounded-full border border-[#e5e0d8]">
                    {item.label}
                  </span>
                ) : (
                  <button
                    onClick={() => onNavigate(item.view, item.params)}
                    className="text-[#8a817c] hover:text-[#5A5A40] transition-colors whitespace-nowrap cursor-pointer hover:underline text-xs"
                  >
                    {item.label}
                  </button>
                )}
                {!isLast && <ChevronRight className="w-3 h-3 text-[#8a817c]/60 shrink-0" />}
              </React.Fragment>
            );
          })}
        </div>

        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase font-bold tracking-widest text-[#5A5A40] bg-white hover:bg-[#f5f2ed] border border-[#e5e0d8] rounded-full transition-all shrink-0 cursor-pointer shadow-2xs hover:shadow-xs active:scale-95"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Back</span>
          </button>
        )}
      </div>
    </div>
  );
};
