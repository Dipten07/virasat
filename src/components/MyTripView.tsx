import React from 'react';
import { SavedItinerary, UserLocation } from '../types';
import { FESTIVALS_DATA } from '../data/festivalsData';
import { MONUMENTS_DATA } from '../data/monumentsData';
import { CITIES_DATA } from '../data/citiesData';
import { useAuth } from '../context/AuthContext';
import {
  Luggage,
  Calendar,
  Landmark,
  MapPin,
  Trash2,
  ArrowRight,
  Compass,
  CheckCircle2,
  ShieldCheck,
  Printer,
  Sparkles,
  Cloud,
  Heart,
  UserCheck
} from 'lucide-react';

interface MyTripViewProps {
  savedItineraries?: SavedItinerary[];
  savedFestivalIds?: string[];
  savedMonumentIds?: string[];
  savedCityIds?: string[];
  userLocation: UserLocation;
  onRemoveItinerary: (id: string) => void;
  onSelectFestival: (id: string) => void;
  onSelectMonument: (id: string) => void;
  onSelectCity: (id: string) => void;
  onToggleSaveFestival: (id: string) => void;
  onToggleSaveMonument: (id: string) => void;
  onOpenItineraryGenerator: (cityId: string, festivalId?: string) => void;
  onOpenAuthModal?: () => void;
}

export const MyTripView: React.FC<MyTripViewProps> = ({
  userLocation,
  onRemoveItinerary,
  onSelectFestival,
  onSelectMonument,
  onSelectCity,
  onToggleSaveFestival,
  onToggleSaveMonument,
  onOpenItineraryGenerator,
  onOpenAuthModal
}) => {
  const { user, bookmarks, itineraries, toggleBookmark, removeItinerary } = useAuth();

  const savedFestivals = bookmarks
    .filter((b) => b.itemType === 'festival')
    .map((b) => {
      const found = FESTIVALS_DATA.find((f) => f.id === b.itemId);
      return found || {
        id: b.itemId,
        name: b.title,
        dateRange: b.subtitle,
        bestExperienceSpot: 'Heritage Spot',
        bannerImage: b.imageUrl
      };
    });

  const savedMonuments = bookmarks
    .filter((b) => b.itemType === 'monument')
    .map((b) => {
      const found = MONUMENTS_DATA.find((m) => m.id === b.itemId);
      return found || {
        id: b.itemId,
        name: b.title,
        cityName: b.subtitle.split(',')[0] || 'India',
        state: b.subtitle.split(',')[1] || '',
        entryFee: { indian: 'ASI Monument' },
        bannerImage: b.imageUrl
      };
    });

  const totalSaved = itineraries.length + savedFestivals.length + savedMonuments.length;

  return (
    <div className="space-y-10 animate-fadeIn pb-16">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold text-[#5A5A40] uppercase tracking-widest bg-[#f5f2ed] px-3 py-1 rounded-full border border-[#e5e0d8]">
              Cloud Traveler Dashboard
            </span>
            <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full border border-emerald-200">
              <Cloud className="w-3 h-3" />
              <span>Firebase Synced</span>
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#2d2a26]">
            My Trip & Saved Heritage
          </h1>
          <p className="text-xs sm:text-sm text-[#8a817c] font-normal">
            Departure Hub: <strong className="text-[#2d2a26]">{userLocation.city}, {userLocation.state}</strong> • {totalSaved} Saved Item{totalSaved !== 1 ? 's' : ''} in Cloud
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#8a817c] bg-[#f5f2ed] hover:bg-white border border-[#e5e0d8] rounded-full cursor-pointer shadow-2xs transition-all"
          >
            <Printer className="w-3.5 h-3.5 text-[#5A5A40]" />
            <span>Print Summary</span>
          </button>
        </div>
      </div>

      {totalSaved === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center border border-[#e5e0d8] space-y-4 shadow-xs">
          <Luggage className="w-16 h-16 text-[#8a817c]/50 mx-auto" />
          <h3 className="font-serif text-2xl font-bold text-[#2d2a26]">Your Cloud Trip Box is Empty</h3>
          <p className="text-xs sm:text-sm text-[#8a817c] max-w-md mx-auto font-normal">
            Explore 12 months of vibrant Indian festivals, UNESCO monuments, and destinations. Click the heart or save buttons to save items directly to Firebase Firestore!
          </p>
          <button
            onClick={() => onSelectFestival('dev-deepawali')}
            className="px-7 py-3 text-xs font-bold uppercase tracking-widest text-[#2d2a26] bg-[#E6BE8A] hover:bg-white rounded-full cursor-pointer shadow-xs border border-[#e5e0d8] transition-all"
          >
            Start Exploring Festivals
          </button>
        </div>
      )}

      {/* 1. SAVED ITINERARIES */}
      {itineraries.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-[#5A5A40]" />
            <span>Cloud Saved Itineraries ({itineraries.length})</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {itineraries.map((itin) => (
              <div
                key={itin.id}
                className="bg-white rounded-3xl p-6 border border-[#e5e0d8] shadow-xs flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A5A40] bg-[#f5f2ed] px-3 py-1 rounded-full border border-[#e5e0d8]">
                      {itin.daysCount} Days • {itin.travelPace}
                    </span>
                    <button
                      onClick={() => removeItinerary(itin.id)}
                      className="text-[#8a817c] hover:text-rose-600 p-1 cursor-pointer transition-colors"
                      title="Delete Saved Itinerary from Cloud"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#2d2a26] mt-2">
                    {itin.destinationName} Heritage Journey
                  </h3>
                  {itin.festivalName && (
                    <p className="text-xs text-[#5A5A40] font-medium mt-0.5">
                      Includes: {itin.festivalName}
                    </p>
                  )}
                  <p className="text-xs text-[#8a817c] mt-1 font-normal">
                    Stay Style: <strong className="text-[#2d2a26] font-medium">{itin.stayStyle}</strong>
                  </p>

                  {/* Highlights list preview */}
                  <div className="space-y-1.5 mt-3 pt-3 border-t border-[#e5e0d8]">
                    {itin.days.slice(0, 2).map((d) => (
                      <div key={d.dayNumber} className="text-xs text-[#2d2a26] flex items-center gap-1.5">
                        <span className="font-bold text-[#5A5A40]">Day {d.dayNumber}:</span>
                        <span className="truncate">{d.theme}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#e5e0d8] flex items-center justify-between">
                  <button
                    onClick={() => onOpenItineraryGenerator(itin.destinationId, itin.festivalId)}
                    className="text-xs font-bold uppercase tracking-wider text-[#5A5A40] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Open Timeline</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <span className="text-[10px] text-[#8a817c]">Saved on {itin.createdAt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. SAVED FESTIVALS */}
      {savedFestivals.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5 text-[#5A5A40]" />
            <span>Saved Festivals ({savedFestivals.length})</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedFestivals.map((fest: any) => (
              <div
                key={fest.id}
                onClick={() => onSelectFestival(fest.id)}
                className="group p-4 bg-white rounded-3xl border border-[#e5e0d8] flex items-center justify-between gap-3 shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3 truncate">
                  <img
                    src={fest.bannerImage}
                    alt={fest.name}
                    className="w-14 h-14 rounded-2xl object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="truncate">
                    <h4 className="text-sm font-serif font-bold text-[#2d2a26] group-hover:text-[#5A5A40] truncate">
                      {fest.name}
                    </h4>
                    <p className="text-xs text-[#8a817c] mt-0.5 font-normal">📅 {fest.dateRange}</p>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[#8a817c] truncate">{fest.bestExperienceSpot}</p>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleBookmark({
                      itemType: 'festival',
                      itemId: fest.id,
                      title: fest.name,
                      subtitle: fest.dateRange,
                      imageUrl: fest.bannerImage
                    });
                  }}
                  className="text-[#8a817c] hover:text-rose-600 p-1.5 shrink-0 cursor-pointer transition-colors"
                  title="Remove from Cloud"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. SAVED MONUMENTS */}
      {savedMonuments.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
            <Landmark className="w-3.5 h-3.5 text-[#5A5A40]" />
            <span>Saved Monuments & Heritage ({savedMonuments.length})</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedMonuments.map((mon: any) => (
              <div
                key={mon.id}
                onClick={() => onSelectMonument(mon.id)}
                className="group p-4 bg-white rounded-3xl border border-[#e5e0d8] flex items-center justify-between gap-3 shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3 truncate">
                  <img
                    src={mon.bannerImage}
                    alt={mon.name}
                    className="w-14 h-14 rounded-2xl object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="truncate">
                    <h4 className="text-sm font-serif font-bold text-[#2d2a26] group-hover:text-[#5A5A40] truncate">
                      {mon.name}
                    </h4>
                    <p className="text-xs text-[#8a817c] mt-0.5 font-normal">📍 {mon.cityName}, {mon.state}</p>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[#8a817c]">{mon.entryFee?.indian || 'Heritage Site'}</p>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleBookmark({
                      itemType: 'monument',
                      itemId: mon.id,
                      title: mon.name,
                      subtitle: `${mon.cityName}, ${mon.state}`,
                      imageUrl: mon.bannerImage
                    });
                  }}
                  className="text-[#8a817c] hover:text-rose-600 p-1.5 shrink-0 cursor-pointer transition-colors"
                  title="Remove from Cloud"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. HERITAGE TRAVELER ESSENTIAL CHECKLIST */}
      <div className="bg-[#f5f2ed] rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-[#8a817c] uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4 text-[#5A5A40]" />
          <span>Pre-Departure Heritage Traveler Advice</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#2d2a26]">
          Essential Tips for Indian Cultural & Monument Travel
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-white p-5 rounded-2xl border border-[#e5e0d8] space-y-1.5 shadow-2xs">
            <h4 className="text-[10px] font-bold text-[#5A5A40] uppercase tracking-widest">ASI Monument Passes</h4>
            <p className="text-xs text-[#8a817c] leading-relaxed font-normal">
              Book Archaeological Survey of India (ASI) tickets via the official portal in advance to save 10% on entry fees and bypass queues.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#e5e0d8] space-y-1.5 shadow-2xs">
            <h4 className="text-[10px] font-bold text-[#5A5A40] uppercase tracking-widest">Temple Dress Codes</h4>
            <p className="text-xs text-[#8a817c] leading-relaxed font-normal">
              Most major temples (Varanasi, Tirupati, Puri, Madurai) require traditional modest attire (dhoti/kurta or saree/salwar; shoulders and knees covered).
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#e5e0d8] space-y-1.5 shadow-2xs">
            <h4 className="text-[10px] font-bold text-[#5A5A40] uppercase tracking-widest">Festival Crowds & Timings</h4>
            <p className="text-xs text-[#8a817c] leading-relaxed font-normal">
              For major rituals (Ganga Aarti, Rath Yatra, Kullu Dussehra), arrive at vantage points 2 hours early to secure prime viewing spots.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
