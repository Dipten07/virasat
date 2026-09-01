import React, { useState, useEffect } from 'react';
import { CityDestination, UserLocation, DayItinerary, ItineraryActivity, SavedItinerary } from '../types';
import { generatePersonalizedItinerary, calculateTravelPlan } from '../data/travelUtils';
import { FESTIVALS_DATA } from '../data/festivalsData';
import { CITIES_DATA } from '../data/citiesData';
import {
  Calendar,
  Clock,
  MapPin,
  Utensils,
  Landmark,
  Sparkles,
  Heart,
  Save,
  Printer,
  Download,
  Plus,
  Trash2,
  Hotel,
  Plane,
  Train,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Compass,
  ArrowRight
} from 'lucide-react';

interface ItineraryGeneratorViewProps {
  city: CityDestination;
  userLocation: UserLocation;
  festivalId?: string;
  onSelectCity?: (cityId: string) => void;
  onSelectFestival?: (festivalId?: string) => void;
  onSaveItinerary: (saved: SavedItinerary) => void;
  onBack: () => void;
}

export const ItineraryGeneratorView: React.FC<ItineraryGeneratorViewProps> = ({
  city,
  userLocation,
  festivalId,
  onSelectCity,
  onSelectFestival,
  onSaveItinerary,
  onBack
}) => {
  const [daysCount, setDaysCount] = useState<number>(3);
  const [travelPace, setTravelPace] = useState<'Relaxed' | 'Balanced' | 'Fast-Paced'>('Balanced');
  const [stayStyle, setStayStyle] = useState<string>('Heritage Haveli & Palaces');
  const [isSavedNotice, setIsSavedNotice] = useState(false);

  // Active generated schedule
  const [itineraryDays, setItineraryDays] = useState<DayItinerary[]>(() =>
    generatePersonalizedItinerary(city, daysCount, festivalId, travelPace)
  );

  // Keep itinerary strictly updated when city or festival changes
  useEffect(() => {
    setItineraryDays(generatePersonalizedItinerary(city, daysCount, festivalId, travelPace));
    setActiveDayTab(1);
  }, [city.id, festivalId]);

  const [activeDayTab, setActiveDayTab] = useState<number>(1);
  const [newActivityTitle, setNewActivityTitle] = useState('');
  const [showAddActivityForm, setShowAddActivityForm] = useState(false);

  const festival = festivalId ? FESTIVALS_DATA.find((f) => f.id === festivalId) : null;
  const travelPlan = calculateTravelPlan(userLocation, city);

  const handleRegenerate = (newDays: number, newPace: 'Relaxed' | 'Balanced' | 'Fast-Paced') => {
    setDaysCount(newDays);
    setTravelPace(newPace);
    const updated = generatePersonalizedItinerary(city, newDays, festivalId, newPace);
    setItineraryDays(updated);
    if (activeDayTab > newDays) setActiveDayTab(1);
  };

  const handleSave = () => {
    const savedObj: SavedItinerary = {
      id: `itin-${Date.now()}`,
      destinationId: city.id,
      destinationName: city.name,
      festivalId: festival?.id,
      festivalName: festival?.name,
      createdAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      daysCount,
      stayStyle,
      travelPace,
      days: itineraryDays
    };
    onSaveItinerary(savedObj);
    setIsSavedNotice(true);
    setTimeout(() => setIsSavedNotice(false), 4000);
  };

  const handleRemoveActivity = (dayIndex: number, actId: string) => {
    setItineraryDays((prev) =>
      prev.map((d, idx) =>
        idx === dayIndex
          ? { ...d, activities: d.activities.filter((a) => a.id !== actId) }
          : d
      )
    );
  };

  const handleAddCustomActivity = (dayIndex: number) => {
    if (!newActivityTitle.trim()) return;
    const newAct: ItineraryActivity = {
      id: `custom-${Date.now()}`,
      time: '03:30 PM',
      title: newActivityTitle.trim(),
      category: 'culture',
      duration: '1.5 Hours',
      locationName: city.name,
      notes: 'Custom traveler stop'
    };
    setItineraryDays((prev) =>
      prev.map((d, idx) =>
        idx === dayIndex
          ? { ...d, activities: [...d.activities, newAct] }
          : d
      )
    );
    setNewActivityTitle('');
    setShowAddActivityForm(false);
  };

  const handlePrint = () => {
    window.print();
  };

  const currentDayData = itineraryDays.find((d) => d.dayNumber === activeDayTab) || itineraryDays[0];

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      {/* Header & Controls */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e5e0d8] pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-[#5A5A40] uppercase tracking-widest bg-[#f5f2ed] px-3 py-1 rounded-full border border-[#e5e0d8]">
                Custom Heritage Trip Planner
              </span>
              {festival && (
                <span className="text-[10px] font-bold uppercase tracking-widest bg-[#E6BE8A]/30 text-[#2d2a26] px-3 py-1 rounded-full border border-[#E6BE8A]/50">
                  🎉 {festival.name}
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#2d2a26]">
              {daysCount}-Day Personalized Itinerary: {city.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#8a817c] font-normal">
              Starting from <strong className="text-[#2d2a26]">{userLocation.city}</strong> (~{travelPlan.distanceKm} km away)
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#2d2a26] bg-[#E6BE8A] hover:bg-white rounded-full shadow-sm transition-all cursor-pointer active:scale-95 border border-[#e5e0d8]"
            >
              <Save className="w-3.5 h-3.5 text-[#5A5A40]" />
              <span>Save to My Trip</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-[#8a817c] bg-[#f5f2ed] hover:bg-white border border-[#e5e0d8] rounded-full transition-colors cursor-pointer"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {isSavedNotice && (
          <div className="p-3 bg-[#f5f2ed] border border-[#5A5A40]/30 rounded-2xl text-xs font-semibold text-[#5A5A40] flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-[#5A5A40]" />
            <span>Itinerary saved to your "My Trip" dashboard! You can access it anytime.</span>
          </div>
        )}

        {/* Customization Options Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {/* Destination Selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#8a817c] uppercase tracking-widest block">
              Destination City
            </label>
            <select
              value={city.id}
              onChange={(e) => onSelectCity && onSelectCity(e.target.value)}
              className="w-full py-2 px-3 text-xs font-semibold bg-[#f5f2ed] border border-[#e5e0d8] rounded-full text-[#2d2a26] focus:outline-none focus:ring-1 focus:ring-[#5A5A40] cursor-pointer"
            >
              {CITIES_DATA.map((c) => (
                <option key={c.id} value={c.id}>
                  📍 {c.name} ({c.state})
                </option>
              ))}
            </select>
          </div>

          {/* Days Selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#8a817c] uppercase tracking-widest block">
              Trip Duration
            </label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((d) => (
                <button
                  key={d}
                  onClick={() => handleRegenerate(d, travelPace)}
                  className={`flex-1 py-2 text-xs font-bold rounded-full border transition-all cursor-pointer ${
                    daysCount === d
                      ? 'bg-[#5A5A40] text-white border-[#5A5A40]'
                      : 'bg-[#f5f2ed] hover:bg-white text-[#2d2a26] border-[#e5e0d8]'
                  }`}
                >
                  {d}D
                </button>
              ))}
            </div>
          </div>

          {/* Travel Pace */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#8a817c] uppercase tracking-widest block">
              Travel Pace
            </label>
            <div className="flex gap-1">
              {(['Relaxed', 'Balanced', 'Fast-Paced'] as const).map((pace) => (
                <button
                  key={pace}
                  onClick={() => handleRegenerate(daysCount, pace)}
                  className={`flex-1 py-2 text-[11px] font-bold rounded-full border transition-all cursor-pointer ${
                    travelPace === pace
                      ? 'bg-[#5A5A40] text-white border-[#5A5A40]'
                      : 'bg-[#f5f2ed] hover:bg-white text-[#2d2a26] border-[#e5e0d8]'
                  }`}
                >
                  {pace === 'Fast-Paced' ? 'Fast' : pace}
                </button>
              ))}
            </div>
          </div>

          {/* Stay Style */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#8a817c] uppercase tracking-widest block">
              Stay Preference
            </label>
            <select
              value={stayStyle}
              onChange={(e) => setStayStyle(e.target.value)}
              className="w-full py-2 px-3 text-xs font-medium bg-[#f5f2ed] border border-[#e5e0d8] rounded-full text-[#2d2a26] focus:outline-none focus:ring-1 focus:ring-[#5A5A40]"
            >
              <option value="Heritage Haveli & Palaces">Heritage Haveli & Palaces</option>
              <option value="Boutique Homestay">Boutique Homestay</option>
              <option value="Comfort Heritage Hotel">Comfort Heritage Hotel</option>
              <option value="Luxury Royal Resort">Luxury Royal Resort</option>
              <option value="Backpacker Heritage Hostel">Backpacker Heritage Hostel</option>
            </select>
          </div>
        </div>

        {/* Quick Destination Cities Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1 border-t border-[#e5e0d8]/60">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8a817c] shrink-0 mr-1">
            Quick Cities:
          </span>
          {CITIES_DATA.slice(0, 8).map((c) => (
            <button
              key={c.id}
              onClick={() => onSelectCity && onSelectCity(c.id)}
              className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all border cursor-pointer ${
                city.id === c.id
                  ? 'bg-[#5A5A40] text-white border-[#5A5A40]'
                  : 'bg-[#f5f2ed] text-[#2d2a26] hover:bg-white border-[#e5e0d8]'
              }`}
            >
              {c.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Day Selection Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {itineraryDays.map((d) => (
          <button
            key={d.dayNumber}
            onClick={() => setActiveDayTab(d.dayNumber)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
              activeDayTab === d.dayNumber
                ? 'bg-[#5A5A40] text-white shadow-sm'
                : 'bg-white hover:bg-[#f5f2ed] text-[#8a817c] border border-[#e5e0d8]'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Day {d.dayNumber}</span>
          </button>
        ))}
      </div>

      {/* Active Day Timeline */}
      {currentDayData && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] shadow-sm space-y-6">
          {/* Day Theme Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#e5e0d8] pb-4">
            <div>
              <span className="text-[10px] font-bold text-[#8a817c] uppercase tracking-widest">
                Day {currentDayData.dayNumber} Timeline
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2d2a26] mt-0.5">
                {currentDayData.theme}
              </h3>
            </div>
            <button
              onClick={() => setShowAddActivityForm(!showAddActivityForm)}
              className="text-xs font-bold uppercase tracking-wider text-[#5A5A40] bg-[#f5f2ed] hover:bg-[#e5e0d8] px-4 py-2 rounded-full border border-[#e5e0d8] flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Custom Stop</span>
            </button>
          </div>

          {/* Add custom activity form */}
          {showAddActivityForm && (
            <div className="p-4 bg-[#f5f2ed] rounded-2xl border border-[#e5e0d8] space-y-3 animate-fadeIn">
              <div className="text-[10px] font-bold text-[#5A5A40] uppercase tracking-widest">New Activity</div>
              <input
                type="text"
                value={newActivityTitle}
                onChange={(e) => setNewActivityTitle(e.target.value)}
                placeholder="e.g. Sunset Boat Ride at Dashashwamedh Ghat..."
                className="w-full p-2.5 text-xs bg-white rounded-xl border border-[#e5e0d8] focus:outline-none focus:ring-1 focus:ring-[#5A5A40]"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowAddActivityForm(false)}
                  className="px-3 py-1.5 text-xs text-[#8a817c] hover:underline cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleAddCustomActivity(currentDayData.dayNumber - 1)}
                  className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#5A5A40] rounded-full cursor-pointer"
                >
                  Add to Day {currentDayData.dayNumber}
                </button>
              </div>
            </div>
          )}

          {/* Timeline Activity Flow */}
          <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#e5e0d8]">
            {currentDayData.activities.map((activity) => {
              return (
                <div key={activity.id} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-6 sm:-left-8 top-1.5 w-4 h-4 rounded-full bg-[#5A5A40] border-2 border-white shadow-xs group-hover:scale-125 transition-transform" />

                  {/* Activity Card */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#f5f2ed] border border-[#e5e0d8] group-hover:border-[#d0c8be] transition-all space-y-2 shadow-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-xs font-bold text-[#5A5A40] bg-white px-2.5 py-0.5 rounded-full border border-[#e5e0d8]">
                          ⏰ {activity.time}
                        </span>
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border bg-white text-[#8a817c] border-[#e5e0d8]"
                        >
                          {activity.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#8a817c] flex items-center gap-1 font-normal">
                          <Clock className="w-3 h-3 text-[#5A5A40]" />
                          <span>{activity.duration}</span>
                        </span>
                        <button
                          onClick={() =>
                            handleRemoveActivity(currentDayData.dayNumber - 1, activity.id)
                          }
                          className="opacity-0 group-hover:opacity-100 text-[#8a817c] hover:text-rose-600 p-1 transition-opacity cursor-pointer"
                          title="Remove Activity"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-base font-serif font-bold text-[#2d2a26]">{activity.title}</h4>
                      <p className="text-xs text-[#8a817c] mt-0.5 leading-relaxed font-normal">{activity.notes}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-[#8a817c]">
                      <span className="flex items-center gap-1 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#5A5A40]" />
                        <span>{activity.locationName}</span>
                      </span>
                      {activity.entryInfo && (
                        <span className="text-[10px] uppercase font-bold tracking-wider bg-white px-2.5 py-0.5 rounded-full border border-[#e5e0d8]">
                          🎟️ {activity.entryInfo}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* External Booking & Stay Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-3xl bg-white border border-[#e5e0d8] shadow-sm flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="text-[10px] font-bold text-[#8a817c] uppercase tracking-widest">Stay Booking</div>
            <h4 className="text-sm font-serif font-bold text-[#2d2a26]">{stayStyle}</h4>
            <p className="text-xs text-[#8a817c]">Reserve rooms in {city.name}</p>
          </div>
          <a
            href={`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city.name + ', India')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#5A5A40] hover:bg-[#464632] rounded-full flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Booking.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-[#e5e0d8] shadow-sm flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="text-[10px] font-bold text-[#8a817c] uppercase tracking-widest">Transit Booking</div>
            <h4 className="text-sm font-serif font-bold text-[#2d2a26]">Train & Flight Tickets</h4>
            <p className="text-xs text-[#8a817c]">From {userLocation.city} to {city.name}</p>
          </div>
          <a
            href={`https://www.makemytrip.com/flight/search?itinerary=${encodeURIComponent(userLocation.city)}-${encodeURIComponent(city.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#2d2a26] bg-[#f5f2ed] hover:bg-[#e5e0d8] border border-[#e5e0d8] rounded-full flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Check Flights</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
