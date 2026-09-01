import React, { useState } from 'react';
import { SupportedLanguage, LanguageOption } from '../types';
import { SUPPORTED_LANGUAGES, getTranslation } from '../data/languages';
import { playPhraseAudio } from '../data/phrasesData';
import { stopSpeech } from '../services/speechService';
import {
  Languages,
  Check,
  Volume2,
  X,
  Sparkles,
  Globe2,
  CheckCircle2
} from 'lucide-react';

interface LanguageSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: SupportedLanguage;
  onSelectLanguage: (lang: SupportedLanguage) => void;
}

export const LanguageSelectorModal: React.FC<LanguageSelectorModalProps> = ({
  isOpen,
  onClose,
  currentLanguage,
  onSelectLanguage
}) => {
  const [playingCode, setPlayingCode] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredLanguages = SUPPORTED_LANGUAGES.filter((lang) =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.nativeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.script.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePlayGreeting = async (e: React.MouseEvent, lang: LanguageOption) => {
    e.stopPropagation();
    if (playingCode === lang.code) {
      stopSpeech();
      setPlayingCode(null);
      return;
    }
    setPlayingCode(lang.code);
    try {
      await playPhraseAudio(lang.greeting, lang.speechCode, 0.9, lang.phoneticGreeting);
    } catch {
      // Audio playback handled
    } finally {
      setPlayingCode(null);
    }
  };

  const handleSelect = (lang: SupportedLanguage) => {
    stopSpeech();
    onSelectLanguage(lang);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#faf8f5] w-full max-w-2xl rounded-3xl shadow-2xl border border-[#e5e0d8] overflow-hidden flex flex-col max-h-[90vh] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-linear-to-r from-[#2d2a26] via-[#3a3530] to-[#2d2a26] text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E6BE8A]/20 border border-[#E6BE8A]/30 flex items-center justify-center text-[#E6BE8A]">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-[#E6BE8A] text-[#2d2a26] text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md">
                  Regional Localization
                </span>
                <span className="text-white/60 text-xs font-serif">11 Indian Languages</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white mt-1">
                {getTranslation('lang.selectTitle', currentLanguage)}
              </h3>
            </div>
          </div>
          <button
            onClick={() => {
              stopSpeech();
              onClose();
            }}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close language selector"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info Banner */}
        <div className="px-6 py-3 bg-[#8A3324]/10 border-b border-[#8A3324]/15 flex items-center gap-3 text-xs text-[#8A3324]">
          <Sparkles className="w-4 h-4 shrink-0 text-[#8A3324]" />
          <span>
            {getTranslation('lang.selectSubtitle', currentLanguage)}
          </span>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-[#e5e0d8] bg-white">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search language by name or script (e.g., Hindi, Tamil, Devanagari)..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#f5f2eb] rounded-xl border border-[#e2ddd5] text-xs sm:text-sm text-[#2d2a26] focus:outline-none focus:ring-2 focus:ring-[#8A3324]/30 focus:border-[#8A3324]"
            />
            <Globe2 className="w-4 h-4 text-[#8c827a] absolute left-3.5 top-3" />
          </div>
        </div>

        {/* Language Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 divide-y divide-[#f0ece5]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredLanguages.map((lang) => {
              const isSelected = currentLanguage === lang.code;
              const isPlaying = playingCode === lang.code;

              return (
                <div
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`group relative p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#8A3324]/8 border-[#8A3324] ring-2 ring-[#8A3324]/20 shadow-sm'
                      : 'bg-white hover:bg-[#fbf9f6] border-[#e8e2d8] hover:border-[#8A3324]/40 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{lang.flag}</span>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-sm text-[#2d2a26] group-hover:text-[#8A3324] transition-colors">
                            {lang.name}
                          </span>
                          <span className="text-xs font-serif text-[#8A3324] font-semibold">
                            ({lang.nativeName})
                          </span>
                        </div>
                        <span className="text-[10px] text-[#8c827a] uppercase tracking-wider block">
                          Script: {lang.script}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={(e) => handlePlayGreeting(e, lang)}
                        title={`Listen to greeting in ${lang.name}`}
                        className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                          isPlaying
                            ? 'bg-[#8A3324] text-white border-[#8A3324] animate-pulse'
                            : 'bg-[#f5f2eb] hover:bg-[#8A3324] text-[#6b625b] hover:text-white border-[#e5e0d8]'
                        }`}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                      {isSelected && (
                        <div className="w-6 h-6 rounded-full bg-[#8A3324] text-white flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#f0ece5] flex items-center justify-between text-[11px]">
                    <span className="text-[#6b625b] font-serif italic truncate pr-2">
                      "{lang.greeting}"
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-bold text-[#8A3324] uppercase tracking-wider shrink-0 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Active
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#f0ece5] border-t border-[#e2ddd5] flex items-center justify-between text-xs text-[#6b625b]">
          <span>Current active language: <strong className="text-[#2d2a26] capitalize">{SUPPORTED_LANGUAGES.find(l => l.code === currentLanguage)?.name || currentLanguage}</strong></span>
          <button
            onClick={() => {
              stopSpeech();
              onClose();
            }}
            className="px-5 py-2 bg-[#2d2a26] hover:bg-[#403c37] text-white text-xs font-semibold rounded-xl cursor-pointer transition-colors"
          >
            {getTranslation('btn.done', currentLanguage) || 'Done'}
          </button>
        </div>
      </div>
    </div>
  );
};
