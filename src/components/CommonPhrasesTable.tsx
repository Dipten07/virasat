import React, { useState } from 'react';
import { DestinationPhrases, LocalPhrase } from '../types';
import { playPhraseAudio, getPhrasesForCity } from '../data/phrasesData';
import { stopSpeech } from '../services/speechService';
import {
  Volume2,
  VolumeX,
  Copy,
  Check,
  Languages,
  Sparkles,
  MessageSquare,
  Compass,
  ShoppingBag,
  Utensils,
  HeartHandshake,
  AlertTriangle,
  Info,
  SlidersHorizontal
} from 'lucide-react';

interface CommonPhrasesTableProps {
  cityId: string;
  cityName: string;
  stateName?: string;
  initialCategory?: string;
}

export const CommonPhrasesTable: React.FC<CommonPhrasesTableProps> = ({
  cityId,
  cityName,
  stateName = 'India',
  initialCategory = 'all'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speechRate, setSpeechRate] = useState<number>(0.85); // Normal/Learn speed
  const [searchQuery, setSearchQuery] = useState<string>('');

  const phraseData: DestinationPhrases = getPhrasesForCity(cityId, cityName, stateName);

  const categories = [
    { id: 'all', label: 'All Phrases', icon: Languages },
    { id: 'greeting', label: 'Greetings', icon: MessageSquare },
    { id: 'direction', label: 'Directions & Transit', icon: Compass },
    { id: 'bargaining', label: 'Bazaars & Bargaining', icon: ShoppingBag },
    { id: 'dining', label: 'Food & Dining', icon: Utensils },
    { id: 'courtesy', label: 'Courtesy & Respect', icon: HeartHandshake },
    { id: 'emergency', label: 'Assistance & Help', icon: AlertTriangle }
  ];

  const filteredPhrases = phraseData.phrases.filter((phrase) => {
    const matchesCat = selectedCategory === 'all' || phrase.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      phrase.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
      phrase.phonetic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      phrase.originalScript.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handlePlay = async (phrase: LocalPhrase) => {
    if (playingId === phrase.id) {
      stopSpeech();
      setPlayingId(null);
      return;
    }
    setPlayingId(phrase.id);
    const textToSpeak = phrase.originalScript || phrase.phonetic;
    await playPhraseAudio(textToSpeak, phrase.langCode, speechRate, phrase.phonetic);
    setPlayingId(null);
  };

  const handleCopy = (phrase: LocalPhrase) => {
    const text = `${phrase.originalScript} (${phrase.phonetic}) - "${phrase.english}"`;
    navigator.clipboard.writeText(text);
    setCopiedId(phrase.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] shadow-xs space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#f0ece5]">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#9E3E26] uppercase tracking-widest">
            <Languages className="w-4 h-4" />
            <span>Local Language & Dialect Guide</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2d2a26] mt-1">
            Common Phrases in {phraseData.regionLanguage}
          </h3>
          <p className="text-xs sm:text-sm text-[#6b625b] mt-1 max-w-xl">
            {phraseData.culturalNote}
          </p>
        </div>

        {/* Script & Voice Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-[#f9f7f4] px-3.5 py-2 rounded-2xl border border-[#e5e0d8] flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c827a]">Script:</span>
            <span className="text-xs font-bold text-[#2d2a26] font-mono">{phraseData.scriptName}</span>
          </div>

          <div className="bg-[#f9f7f4] px-3.5 py-2 rounded-2xl border border-[#e5e0d8] flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#5A5A40]" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c827a]">Audio Speed:</span>
            <button
              onClick={() => setSpeechRate(speechRate === 0.85 ? 0.65 : 0.85)}
              className={`text-xs font-bold px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                speechRate === 0.65 ? 'bg-[#9E3E26] text-white' : 'bg-[#e8e4dc] text-[#2d2a26]'
              }`}
            >
              {speechRate === 0.65 ? '🐢 Slow (0.65x)' : '⚡ Natural (0.85x)'}
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills & Search Filter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#2d2a26] text-white shadow-xs'
                    : 'bg-[#f5f2ed] text-[#5a524c] hover:bg-[#ebe7e0] border border-[#e5e0d8]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        <input
          type="text"
          placeholder="Search phrases in English or Hindi..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3.5 py-2 bg-[#f9f7f4] border border-[#e5e0d8] rounded-xl text-xs text-[#2d2a26] placeholder-[#a0978f] focus:outline-none focus:border-[#9E3E26] sm:w-64"
        />
      </div>

      {/* Interactive Phrases Table / Grid */}
      <div className="overflow-hidden rounded-2xl border border-[#e5e0d8] shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f5f2ed] border-b border-[#e5e0d8] text-[11px] font-bold uppercase tracking-wider text-[#7a716a]">
                <th className="py-3 px-4 w-12 text-center">Audio</th>
                <th className="py-3 px-4">Local Script & Pronunciation</th>
                <th className="py-3 px-4">English Meaning</th>
                <th className="py-3 px-4 hidden md:table-cell">Travel Context & Etiquette</th>
                <th className="py-3 px-4 w-16 text-center">Copy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f0ece5] bg-white text-xs text-[#2d2a26]">
              {filteredPhrases.length > 0 ? (
                filteredPhrases.map((phrase) => {
                  const isPlaying = playingId === phrase.id;
                  const isCopied = copiedId === phrase.id;

                  return (
                    <tr
                      key={phrase.id}
                      className="hover:bg-[#fbf9f6] transition-colors group"
                    >
                      {/* Audio Voice Read-Out Button */}
                      <td className="py-4 px-4 text-center align-middle">
                        <button
                          onClick={() => handlePlay(phrase)}
                          title="Listen to native voice pronunciation"
                          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer mx-auto ${
                            isPlaying
                              ? 'bg-[#9E3E26] text-white ring-4 ring-[#9E3E26]/20 animate-pulse'
                              : 'bg-[#f0ece5] text-[#5A5A40] hover:bg-[#9E3E26] hover:text-white'
                          }`}
                        >
                          <Volume2 className={`w-4 h-4 ${isPlaying ? 'scale-110' : ''}`} />
                        </button>
                      </td>

                      {/* Original Script + Roman Phonetics */}
                      <td className="py-4 px-4 align-middle">
                        <div className="space-y-1">
                          <div className="text-base sm:text-lg font-bold text-[#2d2a26] font-serif leading-tight">
                            {phrase.originalScript}
                          </div>
                          <div className="text-xs font-semibold text-[#9E3E26] tracking-wide flex items-center gap-1.5">
                            <span>🗣️ {phrase.phonetic}</span>
                          </div>
                        </div>
                      </td>

                      {/* English Meaning */}
                      <td className="py-4 px-4 align-middle font-medium text-[#3d3834]">
                        {phrase.english}
                      </td>

                      {/* Situational Context Tip */}
                      <td className="py-4 px-4 align-middle text-[#6b625b] hidden md:table-cell">
                        {phrase.situationalTip ? (
                          <div className="flex items-start gap-1.5 text-[11px] leading-relaxed bg-[#f9f7f4] p-2 rounded-xl border border-[#ece7df]">
                            <Info className="w-3.5 h-3.5 text-[#5A5A40] shrink-0 mt-0.5" />
                            <span>{phrase.situationalTip}</span>
                          </div>
                        ) : (
                          <span className="text-[#a0978f]">—</span>
                        )}
                      </td>

                      {/* Copy Phrase */}
                      <td className="py-4 px-4 text-center align-middle">
                        <button
                          onClick={() => handleCopy(phrase)}
                          title="Copy phrase to clipboard"
                          className="w-8 h-8 rounded-lg bg-[#f9f7f4] hover:bg-[#e8e4dc] border border-[#e5e0d8] flex items-center justify-center text-[#6b625b] hover:text-[#2d2a26] transition-all cursor-pointer mx-auto"
                        >
                          {isCopied ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-xs text-[#8c827a]">
                    No phrases found matching "{searchQuery}". Try selecting another category or clear search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Travel Pro-Tip Footer */}
      <div className="p-4 bg-[#fbf9f6] rounded-2xl border border-[#e5e0d8] text-xs text-[#5a524c] flex items-start gap-3">
        <Sparkles className="w-4 h-4 text-[#9E3E26] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-[#2d2a26]">Conversational Etiquette: </span>
          Even a single word spoken in the regional tongue (like <em>Khamma Ghani</em> in Rajasthan, <em>Nomoshkar</em> in Bengal, or <em>Vanakkam</em> in Tamil Nadu) conveys genuine warmth and instantly turns local shopkeepers and artisans into welcoming cultural guides.
        </div>
      </div>
    </div>
  );
};
