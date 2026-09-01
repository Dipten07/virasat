import React, { useState } from 'react';
import { AppView, UserLocation, SupportedLanguage } from '../types';
import { SUPPORTED_LANGUAGES, getTranslation } from '../data/languages';
import { useAuth } from '../context/AuthContext';
import {
  Compass,
  Calendar,
  Landmark,
  MapPin,
  Heart,
  Search,
  Menu,
  X,
  User,
  Sparkles,
  Luggage,
  Layers,
  Map as MapIcon,
  CloudSun,
  Award,
  ListChecks,
  Languages,
  Cloud,
  LogIn
} from 'lucide-react';

interface NavbarProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  userLocation: UserLocation;
  onOpenLocationModal: () => void;
  onOpenSearchModal: () => void;
  savedCount?: number;
  currentLanguage: SupportedLanguage;
  onOpenLanguageModal: () => void;
  onOpenAuthModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  userLocation,
  onOpenLocationModal,
  onOpenSearchModal,
  currentLanguage,
  onOpenLanguageModal,
  onOpenAuthModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, userProfile, bookmarks, itineraries } = useAuth();

  const totalSavedCount = bookmarks.length + itineraries.length;
  const activeLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === currentLanguage) || SUPPORTED_LANGUAGES[0];

  const navLinks: { label: string; view: AppView; icon: React.FC<{ className?: string }> }[] = [
    { label: getTranslation('nav.home', currentLanguage), view: 'home', icon: Compass },
    { label: getTranslation('nav.map', currentLanguage), view: 'monuments-map', icon: MapIcon },
    { label: getTranslation('nav.quiz', currentLanguage), view: 'culture-quiz', icon: Award },
    { label: getTranslation('nav.checklist', currentLanguage), view: 'checklist', icon: ListChecks },
    { label: getTranslation('nav.weather', currentLanguage), view: 'weather', icon: CloudSun },
    { label: getTranslation('nav.festivals', currentLanguage), view: 'festivals', icon: Calendar },
    { label: getTranslation('nav.monuments', currentLanguage), view: 'monuments', icon: Landmark },
    { label: 'Destinations', view: 'destinations', icon: MapPin },
    { label: getTranslation('nav.savedTrips', currentLanguage), view: 'my-trip', icon: Luggage },
  ];

  return (
    <>
      {/* Top Main Navbar */}
      <header className="sticky top-0 z-40 bg-[#fdfaf6]/90 backdrop-blur-md border-b border-[#e5e0d8] shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 gap-2 sm:gap-4">
            
            {/* Logo */}
            <div
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2.5 cursor-pointer select-none group shrink-0"
            >
              <div className="w-10 h-10 rounded-xl bg-[#5A5A40] flex items-center justify-center text-white shadow-md shadow-[#5A5A40]/20 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-[#E6BE8A] animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold italic text-lg sm:text-xl text-[#2d2a26] tracking-tight leading-none">
                  Virasat<span className="text-[#5A5A40]">.</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest font-semibold text-[#8a817c] mt-0.5">
                  Heritage & Cultural Travel
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
              {navLinks.map((item) => {
                const isActive = currentView === item.view;
                const Icon = item.icon;
                return (
                  <button
                    key={item.view}
                    onClick={() => onNavigate(item.view)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#5A5A40] text-white shadow-md shadow-[#5A5A40]/20'
                        : 'text-[#8a817c] hover:text-[#5A5A40] hover:bg-[#f5f2ed]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                    {item.view === 'my-trip' && totalSavedCount > 0 && (
                      <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-white text-[#5A5A40]' : 'bg-[#5A5A40] text-white'
                      }`}>
                        {totalSavedCount}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Tools (Language, Search, Location Pill, Cloud User / Trip) */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Language Selector Pill */}
              <button
                onClick={onOpenLanguageModal}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-[#8A3324]/10 hover:bg-[#8A3324]/20 border border-[#8A3324]/30 rounded-full transition-all text-[#8A3324] font-semibold cursor-pointer shrink-0 shadow-2xs"
                title="Change language preference"
              >
                <Languages className="w-3.5 h-3.5" />
                <span className="font-bold text-xs">{activeLangObj.nativeName}</span>
              </button>

              {/* Location Pill */}
              <button
                onClick={onOpenLocationModal}
                className="flex items-center gap-2 px-3 py-1.5 text-xs bg-[#f5f2ed] hover:bg-[#ece7df] border border-[#e5e0d8] rounded-full transition-all shadow-2xs hover:shadow-xs active:scale-98 cursor-pointer shrink-0"
                title="Change departure city"
              >
                <MapPin className="w-3.5 h-3.5 text-[#5A5A40]" />
                <span className="hidden sm:inline text-[9px] uppercase font-bold text-[#8a817c]">From</span>
                <span className="truncate max-w-[80px] sm:max-w-[100px] font-semibold text-[#2d2a26]">
                  {userLocation.city}
                </span>
              </button>

              {/* Global Search Button */}
              <button
                onClick={onOpenSearchModal}
                className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#8a817c] bg-white hover:bg-[#f5f2ed] border border-[#e5e0d8] rounded-xl transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                title="Search (⌘K)"
              >
                <Search className="w-4 h-4 text-[#8a817c]" />
                <span className="hidden lg:inline text-[#8a817c]">Search...</span>
                <kbd className="hidden lg:inline-block text-[10px] font-mono bg-[#f5f2ed] text-[#8a817c] px-1.5 py-0.5 rounded border border-[#e5e0d8]">
                  ⌘K
                </kbd>
              </button>

              {/* Saved / My Trip Pill with Live Cloud Count */}
              <button
                onClick={() => onNavigate('my-trip')}
                className="relative p-2 text-[#2d2a26] hover:text-[#5A5A40] hover:bg-[#f5f2ed] rounded-full border border-[#e5e0d8] transition-colors cursor-pointer"
                title="My Trip & Saved (Firebase Cloud Synced)"
              >
                <Luggage className="w-4 h-4" />
                {totalSavedCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#5A5A40] text-white text-[9px] font-bold rounded-full flex items-center justify-center animate-scaleUp">
                    {totalSavedCount}
                  </span>
                )}
              </button>

              {/* User Account / Profile Button */}
              {user ? (
                <button
                  onClick={() => onNavigate('profile')}
                  className={`flex items-center gap-1.5 pl-1.5 pr-3 py-1 rounded-full border transition-all cursor-pointer ${
                    currentView === 'profile'
                      ? 'bg-[#5A5A40] text-white border-[#5A5A40]'
                      : 'bg-white hover:bg-[#f5f2ed] border-[#e5e0d8] text-[#2d2a26]'
                  }`}
                  title="Traveler Profile & Cloud Passport"
                >
                  <div className="w-6 h-6 rounded-full bg-[#E6BE8A] text-[#2c221e] flex items-center justify-center font-bold text-xs">
                    {(userProfile?.displayName || user.displayName || 'V')[0].toUpperCase()}
                  </div>
                  <Cloud className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                </button>
              ) : (
                <button
                  onClick={onOpenAuthModal}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#5A5A40] hover:bg-[#43432f] text-white text-xs font-semibold rounded-full shadow-2xs transition-all cursor-pointer"
                  title="Sign In / Cloud Sync"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Sign In</span>
                </button>
              )}

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#2d2a26] hover:text-[#5A5A40] rounded-xl cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#fdfaf6] border-b border-[#e5e0d8] px-4 pt-2 pb-4 space-y-1 shadow-lg animate-fadeIn">
            {navLinks.map((item) => {
              const isActive = currentView === item.view;
              const Icon = item.icon;
              return (
                <button
                  key={item.view}
                  onClick={() => {
                    onNavigate(item.view);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs uppercase tracking-widest font-semibold transition-all ${
                    isActive
                      ? 'bg-[#5A5A40] text-white font-bold'
                      : 'text-[#2d2a26] hover:bg-[#f5f2ed]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.view === 'my-trip' && totalSavedCount > 0 && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white text-[#5A5A40]">
                      {totalSavedCount}
                    </span>
                  )}
                </button>
              );
            })}
            <button
              onClick={() => {
                onOpenLanguageModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs uppercase tracking-widest font-semibold text-[#8A3324] bg-[#8A3324]/10 hover:bg-[#8A3324]/20 rounded-xl"
            >
              <div className="flex items-center gap-2.5">
                <Languages className="w-4 h-4" />
                <span>Language: {activeLangObj.name} ({activeLangObj.nativeName})</span>
              </div>
            </button>
            <button
              onClick={() => {
                onNavigate('profile');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-xs uppercase tracking-widest font-semibold text-[#2d2a26] hover:bg-[#f5f2ed] rounded-xl"
            >
              <User className="w-4 h-4" />
              <span>Traveler Cloud Passport & Settings</span>
            </button>
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#fdfaf6]/95 backdrop-blur-md border-t border-[#e5e0d8] px-2 py-1.5 shadow-lg">
        <div className="flex items-center justify-around">
          {[
            { label: getTranslation('nav.home', currentLanguage), view: 'home' as AppView, icon: Compass },
            { label: getTranslation('nav.map', currentLanguage), view: 'monuments-map' as AppView, icon: MapIcon },
            { label: getTranslation('nav.quiz', currentLanguage), view: 'culture-quiz' as AppView, icon: Award },
            { label: getTranslation('nav.festivals', currentLanguage), view: 'festivals' as AppView, icon: Calendar },
            { label: getTranslation('nav.savedTrips', currentLanguage), view: 'my-trip' as AppView, icon: Luggage },
          ].map((item) => {
            const isActive = currentView === item.view;
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={() => onNavigate(item.view)}
                className={`relative flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] uppercase tracking-wider font-semibold transition-all ${
                  isActive ? 'text-[#5A5A40] font-bold scale-105' : 'text-[#8a817c]'
                }`}
              >
                <Icon className={`w-5 h-5 mb-0.5 ${isActive ? 'text-[#5A5A40]' : 'text-[#8a817c]'}`} />
                <span>{item.label}</span>
                {item.view === 'my-trip' && totalSavedCount > 0 && (
                  <span className="absolute top-0.5 right-2 w-3.5 h-3.5 bg-[#5A5A40] text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                    {totalSavedCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
