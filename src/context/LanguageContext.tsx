import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SupportedLanguage, LanguageOption } from '../types';
import { SUPPORTED_LANGUAGES, getTranslation, TRANSLATIONS, t as translationHelper } from '../data/languages';

interface LanguageContextType {
  currentLanguage: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string, fallback?: string) => string;
  getTranslation: (key: string, lang?: SupportedLanguage) => string;
  supportedLanguages: LanguageOption[];
  activeLanguage: LanguageOption;
  formatMonthName: (monthId: number) => string;
  formatRegionName: (region: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'virasat_preferred_language';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguageState] = useState<SupportedLanguage>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY) as SupportedLanguage;
      if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) {
        return saved;
      }
    } catch {
      // Ignored
    }
    return 'en';
  });

  const setLanguage = (lang: SupportedLanguage) => {
    setCurrentLanguageState(lang);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, lang);
    } catch (err) {
      console.warn('Failed to save language preference to localStorage:', err);
    }
  };

  const t = (key: string, fallback?: string): string => {
    const res = getTranslation(key, currentLanguage);
    if (res === key && fallback) {
      return fallback;
    }
    return res;
  };

  const activeLanguage =
    SUPPORTED_LANGUAGES.find((l) => l.code === currentLanguage) || SUPPORTED_LANGUAGES[0];

  const formatMonthName = (monthId: number): string => {
    const key = `month.${monthId}.name`;
    const translated = getTranslation(key, currentLanguage);
    if (translated !== key) return translated;
    
    const standardMonths = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return standardMonths[monthId - 1] || 'Month';
  };

  const formatRegionName = (region: string): string => {
    const clean = region.toLowerCase().replace(/[^a-z]/g, '');
    const key = `state.region${clean.charAt(0).toUpperCase() + clean.slice(1)}`;
    const translated = getTranslation(key, currentLanguage);
    if (translated !== key) return translated;
    return region;
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        t,
        getTranslation,
        supportedLanguages: SUPPORTED_LANGUAGES,
        activeLanguage,
        formatMonthName,
        formatRegionName
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      currentLanguage: 'en',
      setLanguage: () => {},
      t: (key: string, fallback?: string) => getTranslation(key, 'en') || fallback || key,
      getTranslation: (key: string, lang?: SupportedLanguage) => getTranslation(key, lang || 'en'),
      supportedLanguages: SUPPORTED_LANGUAGES,
      activeLanguage: SUPPORTED_LANGUAGES[0],
      formatMonthName: (m) => `Month ${m}`,
      formatRegionName: (r) => r
    };
  }
  return context;
};
