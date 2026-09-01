import React, { useState, useEffect, useMemo } from 'react';
import {
  AppView,
  UserLocation,
  Festival,
  Monument,
  CityDestination,
  StateData,
  SavedItinerary,
  BreadcrumbItem,
  SupportedLanguage
} from './types';
import { POPULAR_ORIGIN_CITIES } from './data/indianLocations';
import { MONTHS_DATA } from './data/monthsData';
import { FESTIVALS_DATA } from './data/festivalsData';
import { STATES_DATA } from './data/statesData';
import { MONUMENTS_DATA } from './data/monumentsData';
import { CITIES_DATA } from './data/citiesData';
import { SUPPORTED_LANGUAGES, getTranslation } from './data/languages';

// Components
import { Navbar } from './components/Navbar';
import { Breadcrumbs } from './components/Breadcrumbs';
import { HeroSection } from './components/HeroSection';
import { MonthSelector } from './components/MonthSelector';
import { FestivalCard } from './components/FestivalCard';
import { FestivalDetailView } from './components/FestivalDetailView';
import { CityDetailView } from './components/CityDetailView';
import { MonumentDetailView } from './components/MonumentDetailView';
import { StateSelectionView } from './components/StateSelectionView';
import { StateDetailView } from './components/StateDetailView';
import { ItineraryGeneratorView } from './components/ItineraryGeneratorView';
import { MyTripView } from './components/MyTripView';
import { ProfileView } from './components/ProfileView';
import { LocationModal } from './components/LocationModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { LanguageSelectorModal } from './components/LanguageSelectorModal';
import { MonumentInteractiveMap } from './components/MonumentInteractiveMap';
import { DestinationWeatherView } from './components/DestinationWeatherView';
import { CultureQuizView } from './components/CultureQuizView';
import { TripChecklistView } from './components/TripChecklistView';

import {
  Calendar,
  Landmark,
  MapPin,
  Sparkles,
  ArrowRight,
  Compass,
  Heart,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Ticket,
  Award,
  Languages
} from 'lucide-react';

import { AuthProvider, useAuth } from './context/AuthContext';
import { AuthModal } from './components/AuthModal';

function AppMain() {
  const { user, bookmarks, itineraries, toggleBookmark, isBookmarked, saveItinerary } = useAuth();

  // Navigation & View State
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedFestivalId, setSelectedFestivalId] = useState<string>('dev-deepawali');
  const [selectedCityId, setSelectedCityId] = useState<string>('varanasi');
  const [selectedMonumentId, setSelectedMonumentId] = useState<string>('taj-mahal');
  const [selectedStateId, setSelectedStateId] = useState<string>('uttar-pradesh');
  const [activeMonthId, setActiveMonthId] = useState<number>(11); // November default for grand festivals
  const [itineraryFestivalId, setItineraryFestivalId] = useState<string | undefined>(undefined);

  // Language Preference State
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(() => {
    try {
      return (localStorage.getItem('virasat_preferred_language') as SupportedLanguage) || 'en';
    } catch {
      return 'en';
    }
  });

  // Navigation History for Back Button
  const [history, setHistory] = useState<
    { view: AppView; festivalId?: string; cityId?: string; monumentId?: string; stateId?: string }[]
  >([{ view: 'home' }]);

  // User Departure Origin Location (default: New Delhi)
  const [userLocation, setUserLocation] = useState<UserLocation>(POPULAR_ORIGIN_CITIES[0]);

  // Modals
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Set Language Handler
  const handleSelectLanguage = (lang: SupportedLanguage) => {
    setCurrentLanguage(lang);
    try {
      localStorage.setItem('virasat_preferred_language', lang);
    } catch (e) {
      console.warn(e);
    }
  };

  // Keyboard shortcut for search (⌘K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchModalOpen(false);
        setIsLocationModalOpen(false);
        setIsLanguageModalOpen(false);
        setIsAuthModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation handlers
  const navigateTo = (
    view: AppView,
    params?: { festivalId?: string; cityId?: string; monumentId?: string; stateId?: string }
  ) => {
    let resolvedCityId = params?.cityId;
    let resolvedFestivalId = params?.festivalId;
    let resolvedMonumentId = params?.monumentId;
    let resolvedStateId = params?.stateId;

    if (params?.monumentId) {
      resolvedMonumentId = params.monumentId;
      setSelectedMonumentId(params.monumentId);
      const m = MONUMENTS_DATA.find((item) => item.id === params.monumentId);
      if (m && m.cityId && !resolvedCityId) {
        resolvedCityId = m.cityId;
        setSelectedCityId(m.cityId);
      }
    }

    if (params?.festivalId) {
      resolvedFestivalId = params.festivalId;
      setSelectedFestivalId(params.festivalId);
      if (view === 'itinerary-generator') {
        setItineraryFestivalId(params.festivalId);
      }
      const f = FESTIVALS_DATA.find((item) => item.id === params.festivalId);
      if (f && f.primaryDestinations && f.primaryDestinations.length > 0 && !resolvedCityId) {
        resolvedCityId = f.primaryDestinations[0];
        setSelectedCityId(f.primaryDestinations[0]);
      }
    } else if (view === 'itinerary-generator' && params?.festivalId === undefined) {
      setItineraryFestivalId(undefined);
    }

    if (params?.cityId) {
      resolvedCityId = params.cityId;
      setSelectedCityId(params.cityId);
    }

    if (params?.stateId) {
      resolvedStateId = params.stateId;
      setSelectedStateId(params.stateId);
    }

    setHistory((prev) => [
      ...prev,
      {
        view,
        festivalId: resolvedFestivalId || selectedFestivalId,
        cityId: resolvedCityId || selectedCityId,
        monumentId: resolvedMonumentId || selectedMonumentId,
        stateId: resolvedStateId || selectedStateId
      }
    ]);

    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const prevStep = newHistory[newHistory.length - 1];
      setHistory(newHistory);
      if (prevStep.festivalId) setSelectedFestivalId(prevStep.festivalId);
      if (prevStep.cityId) setSelectedCityId(prevStep.cityId);
      if (prevStep.monumentId) setSelectedMonumentId(prevStep.monumentId);
      if (prevStep.stateId) setSelectedStateId(prevStep.stateId);
      setCurrentView(prevStep.view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView('home');
    }
  };

  // Toggle Saves via Firebase
  const toggleSaveFestival = (id: string) => {
    const f = FESTIVALS_DATA.find(item => item.id === id);
    if (f) {
      toggleBookmark({
        itemType: 'festival',
        itemId: f.id,
        title: f.name,
        subtitle: f.dateRange,
        imageUrl: f.bannerImage
      });
    }
  };

  const toggleSaveMonument = (id: string) => {
    const m = MONUMENTS_DATA.find(item => item.id === id);
    if (m) {
      toggleBookmark({
        itemType: 'monument',
        itemId: m.id,
        title: m.name,
        subtitle: `${m.cityName}, ${m.state}`,
        imageUrl: m.bannerImage
      });
    }
  };

  const toggleSaveCity = (id: string) => {
    const c = CITIES_DATA.find(item => item.id === id);
    if (c) {
      toggleBookmark({
        itemType: 'city',
        itemId: c.id,
        title: c.name,
        subtitle: c.state,
        imageUrl: c.bannerImage
      });
    }
  };

  // Breadcrumbs Generator
  const breadcrumbs: BreadcrumbItem[] = useMemo(() => {
    const items: BreadcrumbItem[] = [{ label: 'Home', view: 'home' }];

    if (currentView === 'festivals') {
      items.push({ label: 'Festivals Calendar', view: 'festivals' });
    } else if (currentView === 'festival-detail') {
      items.push({ label: 'Festivals', view: 'festivals' });
      const f = FESTIVALS_DATA.find((item) => item.id === selectedFestivalId);
      if (f) items.push({ label: f.name, view: 'festival-detail', params: { festivalId: f.id } });
    } else if (currentView === 'states') {
      items.push({ label: 'States & Regions', view: 'states' });
    } else if (currentView === 'state-detail') {
      items.push({ label: 'States', view: 'states' });
      const s = STATES_DATA.find((item) => item.id === selectedStateId);
      if (s) items.push({ label: s.name, view: 'state-detail', params: { stateId: s.id } });
    } else if (currentView === 'destinations') {
      items.push({ label: 'Destinations', view: 'destinations' });
    } else if (currentView === 'city-detail') {
      items.push({ label: 'Destinations', view: 'destinations' });
      const c = CITIES_DATA.find((item) => item.id === selectedCityId);
      if (c) items.push({ label: c.name, view: 'city-detail', params: { cityId: c.id } });
    } else if (currentView === 'monuments') {
      items.push({ label: 'Monuments Directory', view: 'monuments' });
    } else if (currentView === 'monuments-map') {
      items.push({ label: 'Interactive Heritage Map', view: 'monuments-map' });
    } else if (currentView === 'culture-quiz') {
      items.push({ label: 'Heritage Culture Quiz', view: 'culture-quiz' });
    } else if (currentView === 'checklist') {
      items.push({ label: 'Trip & Monument Checklist', view: 'checklist' });
    } else if (currentView === 'weather') {
      items.push({ label: 'Destination Weather & Climate', view: 'weather' });
    } else if (currentView === 'monument-detail') {
      items.push({ label: 'Monuments', view: 'monuments' });
      const m = MONUMENTS_DATA.find((item) => item.id === selectedMonumentId);
      if (m) items.push({ label: m.name, view: 'monument-detail', params: { monumentId: m.id } });
    } else if (currentView === 'itinerary-generator') {
      const c = CITIES_DATA.find((item) => item.id === selectedCityId);
      items.push({ label: 'Destinations', view: 'destinations' });
      if (c) items.push({ label: c.name, view: 'city-detail', params: { cityId: c.id } });
      items.push({ label: 'Plan Itinerary', view: 'itinerary-generator' });
    } else if (currentView === 'my-trip') {
      items.push({ label: 'My Trip & Saved', view: 'my-trip' });
    } else if (currentView === 'profile') {
      items.push({ label: 'Traveler Profile', view: 'profile' });
    }

    return items;
  }, [currentView, selectedFestivalId, selectedCityId, selectedMonumentId, selectedStateId]);

  // Selected Entities
  const currentFestival =
    FESTIVALS_DATA.find((f) => f.id === selectedFestivalId) || FESTIVALS_DATA[0];
  const currentCity =
    CITIES_DATA.find((c) => c.id === selectedCityId) || CITIES_DATA[0];
  const currentMonument =
    MONUMENTS_DATA.find((m) => m.id === selectedMonumentId) || MONUMENTS_DATA[0];
  const currentState =
    STATES_DATA.find((s) => s.id === selectedStateId) || STATES_DATA[0];

  // Month filtered festivals
  const activeMonthFestivals = useMemo(() => {
    return FESTIVALS_DATA.filter((f) => f.monthId === activeMonthId);
  }, [activeMonthId]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1E1B18] flex flex-col font-sans selection:bg-[#8C271E]/20 selection:text-[#8C271E]">
      {/* Top Main Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={(v) => navigateTo(v)}
        userLocation={userLocation}
        onOpenLocationModal={() => setIsLocationModalOpen(true)}
        onOpenSearchModal={() => setIsSearchModalOpen(true)}
        currentLanguage={currentLanguage}
        onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
      />

      {/* Contextual Breadcrumbs Bar */}
      <Breadcrumbs
        items={breadcrumbs}
        onNavigate={(v, params) => navigateTo(v, params)}
        onBack={history.length > 1 ? handleBack : undefined}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* =========================================================================
            VIEW 1: HOME VIEW
           ========================================================================= */}
        {currentView === 'home' && (
          <div className="space-y-12 sm:space-y-16">
            {/* Hero Section */}
            <HeroSection
              userLocation={userLocation}
              currentLanguage={currentLanguage}
              onExploreFestivals={() => {
                const el = document.getElementById('month-festival-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else navigateTo('festivals');
              }}
              onPlanJourney={() => navigateTo('itinerary-generator', { cityId: selectedCityId })}
              onOpenLocationModal={() => setIsLocationModalOpen(true)}
              onOpenSearchModal={() => setIsSearchModalOpen(true)}
            />

            {/* 12-Month Festival Discovery Flow */}
            <section id="month-festival-section" className="space-y-6">
              <MonthSelector
                selectedMonthId={activeMonthId}
                onSelectMonth={(mId) => setActiveMonthId(mId)}
              />

              {/* Month Festivals Grid */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2d2a26]">
                    Celebrations in {MONTHS_DATA.find((m) => m.id === activeMonthId)?.name}
                  </h3>
                  <button
                    onClick={() => navigateTo('festivals')}
                    className="text-xs uppercase font-bold tracking-widest text-[#5A5A40] hover:text-[#2d2a26] flex items-center gap-1 cursor-pointer"
                  >
                    <span>View All 12 Months</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {activeMonthFestivals.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeMonthFestivals.map((festival) => (
                      <FestivalCard
                        key={festival.id}
                        festival={festival}
                        onExplore={(fId) => navigateTo('festival-detail', { festivalId: fId })}
                        isSaved={isBookmarked('festival', festival.id)}
                        onToggleSave={toggleSaveFestival}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-3xl p-8 text-center border border-[#e5e0d8] text-xs text-[#8a817c]">
                    More regional celebrations being cataloged for this month. Browse through other months or monuments.
                  </div>
                )}
              </div>
            </section>

            {/* Featured UNESCO Monuments & Heritage Forts */}
            <section className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
                    <Landmark className="w-3.5 h-3.5 text-[#5A5A40]" />
                    <span>Architectural Wonders</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2d2a26]">
                    UNESCO Monuments & Ancient Forts
                  </h2>
                </div>
                <button
                  onClick={() => navigateTo('monuments')}
                  className="text-xs uppercase font-bold tracking-widest text-[#5A5A40] hover:text-[#2d2a26] flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore All Monuments</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {MONUMENTS_DATA.slice(0, 6).map((monument) => (
                  <div
                    key={monument.id}
                    onClick={() => navigateTo('monument-detail', { monumentId: monument.id })}
                    className="group bg-white rounded-3xl border border-[#e5e0d8] p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-48 rounded-2xl overflow-hidden bg-[#3a352f]">
                        <img
                          src={monument.bannerImage}
                          alt={monument.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute top-3 left-3 bg-[#E6BE8A] text-[#2d2a26] text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full">
                          {monument.type}
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <h3 className="text-lg sm:text-xl font-serif font-bold text-white line-clamp-1">
                            {monument.name}
                          </h3>
                          <p className="text-[10px] text-[#E6BE8A] uppercase font-bold tracking-widest">
                            📍 {monument.cityName}, {monument.state}
                          </p>
                        </div>
                      </div>

                      <div className="pt-3.5 px-1 space-y-2">
                        <p className="text-xs text-[#8a817c] line-clamp-2 leading-relaxed">
                          {monument.historicalSignificance}
                        </p>
                        <div className="text-[10px] uppercase font-bold tracking-wider text-[#8a817c] flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#5A5A40]" />
                          <span>Visit: {monument.estimatedVisitDuration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 px-1 border-t border-[#e5e0d8] flex items-center justify-between text-xs">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#8a817c]">
                        Entry: {monument.entryFee.indian}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#5A5A40] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Popular Heritage Destination Hubs */}
            <section className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
                    <MapPin className="w-3.5 h-3.5 text-[#5A5A40]" />
                    <span>Living Cultural Cities</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2d2a26]">
                    Explore Iconic Indian Destinations
                  </h2>
                </div>
                <button
                  onClick={() => navigateTo('destinations')}
                  className="text-xs uppercase font-bold tracking-widest text-[#5A5A40] hover:text-[#2d2a26] flex items-center gap-1 cursor-pointer"
                >
                  <span>All Destinations</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {CITIES_DATA.map((city) => (
                  <div
                    key={city.id}
                    onClick={() => navigateTo('city-detail', { cityId: city.id })}
                    className="group bg-white rounded-3xl border border-[#e5e0d8] p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-44 rounded-2xl overflow-hidden bg-[#3a352f]">
                        <img
                          src={city.bannerImage}
                          alt={city.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute top-2.5 left-2.5 bg-orange-500/90 text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full">
                          {city.state}
                        </div>
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                          <h3 className="text-lg font-serif font-bold text-white">
                            {city.name}
                          </h3>
                        </div>
                      </div>

                      <div className="pt-3 px-1 space-y-1.5">
                        <p className="text-xs text-[#8a817c] line-clamp-2 leading-relaxed">
                          {city.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 px-1 border-t border-[#e5e0d8] flex items-center justify-between text-xs">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#8a817c]">
                        {city.monumentIds.length} Monuments
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#5A5A40] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Interactive Tools Showcase Banner */}
            <section className="bg-linear-to-r from-[#5A5A40] to-[#3a352f] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-[#5A5A40]/50">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="bg-[#E6BE8A] text-[#2d2a26] text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full">
                    Advanced Heritage & Cultural Toolkit
                  </span>
                  <span className="text-[#E6BE8A] text-xs font-semibold">
                    Culture Quiz &bull; 11 Languages &bull; Audio Read-Out &bull; Interactive Map
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                  Test Your Heritage Knowledge & Discover Regional Traditions
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                  Challenge yourself with the Indian Culture & Monument Quiz, practice regional language pronunciation with live speech synthesis, and prepare with curated traveler checklists.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <button
                  onClick={() => navigateTo('culture-quiz')}
                  className="px-5 py-3 bg-[#E6BE8A] hover:bg-white text-[#2d2a26] rounded-full text-xs uppercase font-bold tracking-wider transition-all cursor-pointer shadow-md flex items-center gap-1.5"
                >
                  <Award className="w-4 h-4 text-[#5A5A40]" />
                  <span>Play Culture Quiz</span>
                </button>
                <button
                  onClick={() => setIsLanguageModalOpen(true)}
                  className="px-4 py-3 bg-white/15 hover:bg-white/25 border border-white/20 text-white rounded-full text-xs uppercase font-bold tracking-wider transition-all cursor-pointer backdrop-blur-md flex items-center gap-1.5"
                >
                  <Languages className="w-4 h-4 text-[#E6BE8A]" />
                  <span>Language Preferences</span>
                </button>
                <button
                  onClick={() => navigateTo('checklist')}
                  className="px-4 py-3 bg-white/15 hover:bg-white/25 border border-white/20 text-white rounded-full text-xs uppercase font-bold tracking-wider transition-all cursor-pointer backdrop-blur-md flex items-center gap-1.5"
                >
                  <span>Trip Checklist</span>
                </button>
                <button
                  onClick={() => navigateTo('monuments-map')}
                  className="px-4 py-3 bg-white/15 hover:bg-white/25 border border-white/20 text-white rounded-full text-xs uppercase font-bold tracking-wider transition-all cursor-pointer backdrop-blur-md flex items-center gap-1.5"
                >
                  <span>Interactive Map</span>
                </button>
              </div>
            </section>
          </div>
        )}

        {/* =========================================================================
            VIEW 2: FESTIVALS DIRECTORY VIEW
           ========================================================================= */}
        {currentView === 'festivals' && (
          <div className="space-y-8 animate-fadeIn pb-16">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
                <Calendar className="w-3.5 h-3.5 text-[#5A5A40]" />
                <span>12 Months Calendar</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#2d2a26] mt-0.5">
                Indian Cultural & Festival Explorer
              </h1>
              <p className="text-xs sm:text-sm text-[#8a817c] mt-1 font-normal">
                Browse spiritual, classical, folk, and seasonal celebrations across all 12 months.
              </p>
            </div>

            <MonthSelector
              selectedMonthId={activeMonthId}
              onSelectMonth={(mId) => setActiveMonthId(mId)}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {FESTIVALS_DATA.map((festival) => (
                <FestivalCard
                  key={festival.id}
                  festival={festival}
                  onExplore={(fId) => navigateTo('festival-detail', { festivalId: fId })}
                  isSaved={isBookmarked('festival', festival.id)}
                  onToggleSave={toggleSaveFestival}
                />
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            VIEW 3: FESTIVAL DETAIL VIEW
           ========================================================================= */}
        {currentView === 'festival-detail' && currentFestival && (
          <FestivalDetailView
            festival={currentFestival}
            userLocation={userLocation}
            currentLanguage={currentLanguage}
            onSelectState={(sId) => navigateTo('state-detail', { stateId: sId })}
            onSelectCity={(cId) => navigateTo('city-detail', { cityId: cId })}
            onSelectMonument={(mId) => navigateTo('monument-detail', { monumentId: mId })}
            onPlanTrip={(cId, fId) => {
              setItineraryFestivalId(fId);
              navigateTo('itinerary-generator', { cityId: cId, festivalId: fId });
            }}
            isSaved={isBookmarked('festival', currentFestival.id)}
            onToggleSave={toggleSaveFestival}
            onOpenAuthModal={() => setIsAuthModalOpen(true)}
          />
        )}

        {/* =========================================================================
            VIEW 4: MONUMENTS DIRECTORY VIEW
           ========================================================================= */}
        {currentView === 'monuments' && (
          <div className="space-y-8 animate-fadeIn pb-16">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
                <Landmark className="w-3.5 h-3.5 text-[#5A5A40]" />
                <span>Living Architecture</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#2d2a26] mt-0.5">
                Monuments, Forts & UNESCO Heritage
              </h1>
              <p className="text-xs sm:text-sm text-[#8a817c] mt-1 font-normal">
                Explore architectural histories, visiting hours, and entry ticket details.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {MONUMENTS_DATA.map((monument) => (
                <div
                  key={monument.id}
                  onClick={() => navigateTo('monument-detail', { monumentId: monument.id })}
                  className="group bg-white rounded-3xl border border-[#e5e0d8] p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-52 rounded-2xl overflow-hidden bg-[#3a352f]">
                      <img
                        src={monument.bannerImage}
                        alt={monument.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute top-3 left-3 bg-[#E6BE8A] text-[#2d2a26] text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full">
                        {monument.type}
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-white line-clamp-1">
                          {monument.name}
                        </h3>
                        <p className="text-[10px] text-[#E6BE8A] uppercase font-bold tracking-widest">
                          📍 {monument.cityName}, {monument.state}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3.5 px-1 space-y-2">
                      <p className="text-xs text-[#8a817c] line-clamp-2 leading-relaxed">
                        {monument.historicalSignificance}
                      </p>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-[#8a817c] flex items-center gap-1.5 pt-1">
                        <Clock className="w-3.5 h-3.5 text-[#5A5A40]" />
                        <span>Visit: {monument.estimatedVisitDuration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 px-1 border-t border-[#e5e0d8] flex items-center justify-between text-xs">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#8a817c]">
                      Entry: {monument.entryFee.indian}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#5A5A40] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>View Monument</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            VIEW 5: MONUMENT DETAIL VIEW
           ========================================================================= */}
        {currentView === 'monument-detail' && currentMonument && (
          <MonumentDetailView
            monument={currentMonument}
            userLocation={userLocation}
            currentLanguage={currentLanguage}
            onSelectCity={(cId) => navigateTo('city-detail', { cityId: cId })}
            onPlanTrip={(cId) => navigateTo('itinerary-generator', { cityId: cId })}
            isSaved={isBookmarked('monument', currentMonument.id)}
            onToggleSave={toggleSaveMonument}
            onOpenAuthModal={() => setIsAuthModalOpen(true)}
          />
        )}

        {/* =========================================================================
            VIEW 6: DESTINATIONS & CITIES VIEW
           ========================================================================= */}
        {currentView === 'destinations' && (
          <div className="space-y-8 animate-fadeIn pb-16">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
                <MapPin className="w-3.5 h-3.5 text-[#5A5A40]" />
                <span>Destination Directory</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#2d2a26] mt-0.5">
                Indian Cultural & Heritage Destinations
              </h1>
              <p className="text-xs sm:text-sm text-[#8a817c] mt-1 font-normal">
                Discover monuments, festivals, bazaars, and authentic cuisine across cities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CITIES_DATA.map((city) => (
                <div
                  key={city.id}
                  onClick={() => navigateTo('city-detail', { cityId: city.id })}
                  className="group bg-white rounded-3xl border border-[#e5e0d8] p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-52 rounded-2xl overflow-hidden bg-[#3a352f]">
                      <img
                        src={city.bannerImage}
                        alt={city.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute top-3 left-3 bg-orange-500/90 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-0.5 rounded-full">
                        {city.state}
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <h3 className="text-xl font-serif font-bold text-white">
                          {city.name}
                        </h3>
                      </div>
                    </div>

                    <div className="pt-3.5 px-1 space-y-3">
                      <p className="text-xs text-[#8a817c] line-clamp-2 leading-relaxed">
                        {city.tagline}
                      </p>

                      <div className="space-y-1 text-xs text-[#8a817c]">
                        <div>
                          <strong className="text-[#5A5A40]">Key Sites: </strong>
                          <span>{city.monumentIds.length} Monuments • {city.religiousSites.length} Temples</span>
                        </div>
                        <div>
                          <strong className="text-[#5A5A40]">Must Eat: </strong>
                          <span>{city.authenticFood.slice(0, 2).map((f) => f.name).join(', ')}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 px-1 border-t border-[#e5e0d8] flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#5A5A40]">
                      Explore Heritage Guide
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#5A5A40] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            VIEW 7: CITY COMPLETE HERITAGE DETAIL VIEW
           ========================================================================= */}
        {currentView === 'city-detail' && currentCity && (
          <CityDetailView
            city={currentCity}
            userLocation={userLocation}
            currentLanguage={currentLanguage}
            onSelectMonument={(mId) => navigateTo('monument-detail', { monumentId: mId })}
            onSelectFestival={(fId) => navigateTo('festival-detail', { festivalId: fId })}
            onOpenItineraryGenerator={(cId, fId) => {
              setItineraryFestivalId(fId);
              navigateTo('itinerary-generator', { cityId: cId, festivalId: fId });
            }}
            onToggleSaveCity={toggleSaveCity}
            isSaved={isBookmarked('city', currentCity.id)}
          />
        )}

        {/* =========================================================================
            VIEW 8: STATES DIRECTORY & STATE DETAIL VIEW
           ========================================================================= */}
        {currentView === 'states' && (
          <StateSelectionView
            onSelectState={(sId) => {
              navigateTo('state-detail', { stateId: sId });
            }}
            onSelectCity={(cId) => navigateTo('city-detail', { cityId: cId })}
          />
        )}

        {currentView === 'state-detail' && currentState && (
          <StateDetailView
            state={currentState}
            onSelectCity={(cId) => navigateTo('city-detail', { cityId: cId })}
            onSelectFestival={(fId) => navigateTo('festival-detail', { festivalId: fId })}
            onSelectMonument={(mId) => navigateTo('monument-detail', { monumentId: mId })}
            onBackToStates={() => navigateTo('states')}
          />
        )}

        {/* =========================================================================
            VIEW 9: INTERACTIVE PERSONALIZED ITINERARY GENERATOR
           ========================================================================= */}
        {currentView === 'itinerary-generator' && currentCity && (
          <ItineraryGeneratorView
            key={`${currentCity.id}-${itineraryFestivalId || 'all'}`}
            city={currentCity}
            userLocation={userLocation}
            festivalId={itineraryFestivalId}
            onSelectCity={(cId) => {
              setSelectedCityId(cId);
              navigateTo('itinerary-generator', { cityId: cId, festivalId: itineraryFestivalId });
            }}
            onSelectFestival={(fId) => {
              setItineraryFestivalId(fId);
              navigateTo('itinerary-generator', { cityId: currentCity.id, festivalId: fId });
            }}
            onSaveItinerary={(saved) => saveItinerary(saved)}
            onBack={handleBack}
          />
        )}

        {/* =========================================================================
            VIEW 10: MY TRIP & SAVED
           ========================================================================= */}
        {currentView === 'my-trip' && (
          <MyTripView
            userLocation={userLocation}
            onSelectFestival={(fId) => navigateTo('festival-detail', { festivalId: fId })}
            onSelectMonument={(mId) => navigateTo('monument-detail', { monumentId: mId })}
            onSelectCity={(cId) => navigateTo('city-detail', { cityId: cId })}
            onToggleSaveFestival={toggleSaveFestival}
            onToggleSaveMonument={toggleSaveMonument}
            onOpenItineraryGenerator={(cId, fId) => {
              setItineraryFestivalId(fId);
              navigateTo('itinerary-generator', { cityId: cId, festivalId: fId });
            }}
            onOpenAuthModal={() => setIsAuthModalOpen(true)}
          />
        )}

        {/* =========================================================================
            VIEW 11: INTERACTIVE MONUMENTS MAP
           ========================================================================= */}
        {currentView === 'monuments-map' && (
          <div className="space-y-6 animate-fadeIn pb-16">
            <MonumentInteractiveMap
              userLocation={userLocation}
              onSelectMonument={(mId) => navigateTo('monument-detail', { monumentId: mId })}
              onOpenItineraryGenerator={(cId) => navigateTo('itinerary-generator', { cityId: cId })}
              heightClassName="h-[640px]"
            />
          </div>
        )}

        {/* =========================================================================
            VIEW 12: DESTINATION WEATHER & CLIMATE DISCOVERY
           ========================================================================= */}
        {currentView === 'weather' && (
          <DestinationWeatherView
            onSelectCity={(cId) => navigateTo('city-detail', { cityId: cId })}
            onExploreMap={() => navigateTo('monuments-map')}
          />
        )}

        {/* =========================================================================
            VIEW 13: HERITAGE CULTURE & MONUMENT QUIZ
           ========================================================================= */}
        {currentView === 'culture-quiz' && (
          <CultureQuizView
            currentLanguage={currentLanguage}
            onSelectMonument={(mId) => navigateTo('monument-detail', { monumentId: mId })}
            onSelectCity={(cId) => navigateTo('city-detail', { cityId: cId })}
            onExploreMap={() => navigateTo('monuments-map')}
          />
        )}

        {/* =========================================================================
            VIEW 14: TRIP & MONUMENT CHECKLIST
           ========================================================================= */}
        {currentView === 'checklist' && (
          <div className="space-y-6 animate-fadeIn pb-16">
            <TripChecklistView
              cityName={userLocation.city}
              onSelectCity={(cId) => navigateTo('city-detail', { cityId: cId })}
            />
          </div>
        )}

        {/* =========================================================================
            VIEW 15: PROFILE VIEW
           ========================================================================= */}
        {currentView === 'profile' && (
          <ProfileView
            userLocation={userLocation}
            onOpenLocationModal={() => setIsLocationModalOpen(true)}
            onNavigateHome={() => navigateTo('home')}
            currentLanguage={currentLanguage}
            onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
            onOpenAuthModal={() => setIsAuthModalOpen(true)}
          />
        )}

      </main>

      {/* Footer */}
      <footer className="bg-[#3a352f] text-white border-t border-[#e5e0d8] pt-12 pb-20 md:pb-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#E6BE8A] flex items-center justify-center text-[#2d2a26] shadow-sm">
                  <Sparkles className="w-4 h-4 text-[#2d2a26]" />
                </div>
                <span className="font-serif font-bold text-xl text-white">
                  Virasat<span className="text-[#E6BE8A] italic">.</span>
                </span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed max-w-md font-normal">
                An Indian cultural, festival, and heritage discovery platform. Exploring festivals, monuments, living rituals, classical arts, authentic cuisine, and custom travel journeys across India.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#E6BE8A]">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span>Current Departure Origin: <strong className="text-white">{userLocation.city}, {userLocation.state}</strong></span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#E6BE8A]">
                Quick Navigation
              </h4>
              <div className="flex flex-col space-y-2 text-xs text-neutral-300">
                <button onClick={() => navigateTo('home')} className="hover:text-white text-left cursor-pointer transition-colors">Home</button>
                <button onClick={() => navigateTo('culture-quiz')} className="hover:text-white text-left cursor-pointer transition-colors">Heritage Culture Quiz</button>
                <button onClick={() => setIsLanguageModalOpen(true)} className="hover:text-white text-left cursor-pointer transition-colors">Language Preferences (11 Languages)</button>
                <button onClick={() => navigateTo('checklist')} className="hover:text-white text-left cursor-pointer transition-colors">Trip & Monument Checklist</button>
                <button onClick={() => navigateTo('monuments-map')} className="hover:text-white text-left cursor-pointer transition-colors">Interactive Heritage Map</button>
                <button onClick={() => navigateTo('weather')} className="hover:text-white text-left cursor-pointer transition-colors">Destination Weather & Climate</button>
                <button onClick={() => navigateTo('festivals')} className="hover:text-white text-left cursor-pointer transition-colors">12 Months Festivals</button>
                <button onClick={() => navigateTo('monuments')} className="hover:text-white text-left cursor-pointer transition-colors">UNESCO Monuments</button>
                <button onClick={() => navigateTo('destinations')} className="hover:text-white text-left cursor-pointer transition-colors">Heritage Destinations</button>
                <button onClick={() => navigateTo('my-trip')} className="hover:text-white text-left cursor-pointer transition-colors">My Saved Itineraries</button>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#E6BE8A]">
                Official Booking Partners
              </h4>
              <div className="flex flex-col space-y-2 text-xs text-neutral-300">
                <a href="https://asi.nic.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Archaeological Survey of India (ASI)</a>
                <a href="https://www.irctc.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">IRCTC Indian Railways</a>
                <a href="https://www.makemytrip.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">MakeMyTrip Flights</a>
                <a href="https://www.redbus.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">redBus Intercity</a>
                <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Booking.com Heritage Stays</a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] uppercase tracking-wider text-neutral-400">
            <span>© {new Date().getFullYear()} Virasat & Heritage Discovery. Incredible India.</span>
            <span>Crafted with authentic Indian cultural, monument, and culinary datasets.</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        currentLocation={userLocation}
        onSelectLocation={(loc) => setUserLocation(loc)}
      />

      <LanguageSelectorModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
        currentLanguage={currentLanguage}
        onSelectLanguage={handleSelectLanguage}
      />

      <GlobalSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectFestival={(fId) => navigateTo('festival-detail', { festivalId: fId })}
        onSelectMonument={(mId) => navigateTo('monument-detail', { monumentId: mId })}
        onSelectCity={(cId) => navigateTo('city-detail', { cityId: cId })}
        onSelectState={(sId) => navigateTo('state-detail', { stateId: sId })}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppMain />
    </AuthProvider>
  );
}
