import React, { useState } from 'react';
import { UserLocation, SupportedLanguage, AppView } from '../types';
import { SUPPORTED_LANGUAGES } from '../data/languages';
import { useAuth } from '../context/AuthContext';
import { 
  User, 
  MapPin, 
  Sparkles, 
  Heart, 
  Compass, 
  CheckCircle2, 
  ShieldCheck, 
  Globe, 
  Languages, 
  Cloud, 
  LogIn, 
  LogOut, 
  Edit3, 
  Save, 
  Award, 
  Luggage, 
  Star, 
  Calendar, 
  Trash2,
  BookOpen
} from 'lucide-react';

interface ProfileViewProps {
  userLocation: UserLocation;
  onOpenLocationModal: () => void;
  onNavigateHome: () => void;
  currentLanguage: SupportedLanguage;
  onOpenLanguageModal: () => void;
  onOpenAuthModal: () => void;
  onNavigate: (view: AppView) => void;
  onSelectFestival: (id: string) => void;
  onSelectMonument: (id: string) => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  userLocation,
  onOpenLocationModal,
  onNavigateHome,
  currentLanguage,
  onOpenLanguageModal,
  onOpenAuthModal,
  onNavigate,
  onSelectFestival,
  onSelectMonument
}) => {
  const { 
    user, 
    userProfile, 
    logout, 
    bookmarks, 
    itineraries, 
    visitedPlaces, 
    quizHistory,
    updateProfileDetails,
    removeVisitedPlace,
    logVisitedPlace
  } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(userProfile?.displayName || user?.displayName || 'Cultural Explorer');
  const [homeCity, setHomeCity] = useState(userProfile?.homeCity || userLocation.city);
  const [favoriteRegion, setFavoriteRegion] = useState(userProfile?.favoriteRegion || 'Pan-India Heritage');
  const [bio, setBio] = useState(userProfile?.bio || 'Cultural enthusiast discovering Indian monuments, living festivals and classical arts.');
  const [isSaving, setIsSaving] = useState(false);

  // New visit entry form state
  const [showAddVisit, setShowAddVisit] = useState(false);
  const [newVisitTitle, setNewVisitTitle] = useState('');
  const [newVisitLocation, setNewVisitLocation] = useState('');
  const [newVisitDate, setNewVisitDate] = useState(new Date().toISOString().split('T')[0]);
  const [newVisitRating, setNewVisitRating] = useState(5);
  const [newVisitNotes, setNewVisitNotes] = useState('');

  const currentLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === currentLanguage) || SUPPORTED_LANGUAGES[0];

  const handleSaveProfile = async () => {
    setIsSaving(true);
    try {
      await updateProfileDetails({
        displayName,
        homeCity,
        favoriteRegion,
        bio
      });
      setIsEditing(false);
    } catch (err) {
      console.error('Error updating profile in Firestore:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddVisit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVisitTitle.trim()) return;

    await logVisitedPlace({
      itemId: `custom_${Date.now()}`,
      itemType: 'monument',
      title: newVisitTitle.trim(),
      locationName: newVisitLocation.trim() || 'India',
      visitedDate: newVisitDate,
      rating: newVisitRating,
      personalNotes: newVisitNotes.trim()
    });

    setNewVisitTitle('');
    setNewVisitLocation('');
    setNewVisitNotes('');
    setShowAddVisit(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn pb-16">
      {/* Cloud Status Banner */}
      <div className="bg-linear-to-r from-[#2c221e] via-[#43342d] to-[#2c221e] text-white rounded-3xl p-6 sm:p-8 shadow-md border border-[#5A5A40]/30 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-[#E6BE8A]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#E6BE8A]/20 border border-[#E6BE8A]/40 flex items-center justify-center text-2xl sm:text-3xl font-serif font-bold text-[#E6BE8A] shadow-inner shrink-0">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="Avatar" className="w-full h-full rounded-2xl object-cover" />
              ) : (
                <span>{(userProfile?.displayName || user?.displayName || 'V')[0].toUpperCase()}</span>
              )}
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  {userProfile?.displayName || user?.displayName || (user?.isAnonymous ? 'Guest Explorer' : 'Cultural Traveler')}
                </h1>
                <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full backdrop-blur-md">
                  <Cloud className="w-3 h-3" />
                  <span>Firestore Cloud Synced</span>
                </span>
              </div>
              <p className="text-xs text-white/80">
                {user?.email ? user.email : user?.isAnonymous ? 'Anonymous Guest Session • Data persists in cloud' : 'Heritage Pilgrim'}
              </p>
              <p className="text-xs text-[#E6BE8A]/90 italic font-serif">
                &ldquo;{userProfile?.bio || bio}&rdquo;
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            {user ? (
              <>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold rounded-xl backdrop-blur-md transition-all cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>{isEditing ? 'Cancel Edit' : 'Edit Profile'}</span>
                </button>
                <button
                  onClick={() => logout()}
                  className="flex items-center gap-1.5 px-4 py-2 bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-200 text-xs font-semibold rounded-xl backdrop-blur-md transition-all cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <button
                onClick={onOpenAuthModal}
                className="flex items-center gap-2 px-6 py-2.5 bg-[#E6BE8A] hover:bg-white text-[#2c221e] text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign In / Connect Cloud</span>
              </button>
            )}
          </div>
        </div>

        {/* Profile Edit Form */}
        {isEditing && (
          <div className="mt-6 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-200">
            <div>
              <label className="block text-[10px] uppercase font-bold text-[#E6BE8A] mb-1">Explorer Name</label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-xs text-white placeholder-white/50 focus:outline-hidden focus:ring-2 focus:ring-[#E6BE8A]"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold text-[#E6BE8A] mb-1">Favorite Cultural Region</label>
              <input
                type="text"
                value={favoriteRegion}
                onChange={(e) => setFavoriteRegion(e.target.value)}
                placeholder="e.g. Rajasthan, Odisha, South India..."
                className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-xs text-white placeholder-white/50 focus:outline-hidden focus:ring-2 focus:ring-[#E6BE8A]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[10px] uppercase font-bold text-[#E6BE8A] mb-1">Traveler Bio & Motto</label>
              <textarea
                rows={2}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-xs text-white placeholder-white/50 focus:outline-hidden focus:ring-2 focus:ring-[#E6BE8A]"
              />
            </div>

            <div className="sm:col-span-2 flex justify-end gap-2">
              <button
                onClick={handleSaveProfile}
                disabled={isSaving}
                className="inline-flex items-center gap-2 px-5 py-2 bg-[#E6BE8A] text-[#2c221e] text-xs font-bold rounded-xl hover:bg-white transition-all cursor-pointer shadow-xs disabled:opacity-50"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{isSaving ? 'Saving to Firestore...' : 'Save Changes'}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Cloud Stats Counter Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div 
          onClick={() => onNavigate('my-trip')}
          className="p-4 sm:p-5 bg-white rounded-2xl border border-[#e5e0d8] shadow-xs cursor-pointer hover:border-[#5A5A40] transition-colors"
        >
          <div className="flex items-center justify-between text-[#8a817c] mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider">Saved Bookmarks</span>
            <Heart className="w-4 h-4 text-rose-500" />
          </div>
          <div className="text-2xl font-serif font-bold text-[#2d2a26]">{bookmarks.length}</div>
          <span className="text-[10px] text-[#8a817c]">Festivals & Monuments</span>
        </div>

        <div 
          onClick={() => onNavigate('my-trip')}
          className="p-4 sm:p-5 bg-white rounded-2xl border border-[#e5e0d8] shadow-xs cursor-pointer hover:border-[#5A5A40] transition-colors"
        >
          <div className="flex items-center justify-between text-[#8a817c] mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider">Itineraries</span>
            <Luggage className="w-4 h-4 text-[#5A5A40]" />
          </div>
          <div className="text-2xl font-serif font-bold text-[#2d2a26]">{itineraries.length}</div>
          <span className="text-[10px] text-[#8a817c]">Custom Travel Plans</span>
        </div>

        <div className="p-4 sm:p-5 bg-white rounded-2xl border border-[#e5e0d8] shadow-xs">
          <div className="flex items-center justify-between text-[#8a817c] mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider">Passport Stamps</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-serif font-bold text-[#2d2a26]">{visitedPlaces.length}</div>
          <span className="text-[10px] text-[#8a817c]">Logged Visited Sites</span>
        </div>

        <div 
          onClick={() => onNavigate('culture-quiz')}
          className="p-4 sm:p-5 bg-white rounded-2xl border border-[#e5e0d8] shadow-xs cursor-pointer hover:border-[#5A5A40] transition-colors"
        >
          <div className="flex items-center justify-between text-[#8a817c] mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider">Quiz Quests</span>
            <Award className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-serif font-bold text-[#2d2a26]">{quizHistory.length}</div>
          <span className="text-[10px] text-[#8a817c]">Mastery Badges</span>
        </div>
      </div>

      {/* HERITAGE PASSPORT / VISITED CHECK-INS (Stored in Firebase Firestore) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e5e0d8] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Firestore Cloud Passport
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#2d2a26] mt-1">
              My Heritage Passport & Visited Diary
            </h2>
            <p className="text-xs text-[#8a817c]">
              Check in to historical monuments and temple rituals you have experienced in person
            </p>
          </div>

          <button
            onClick={() => setShowAddVisit(!showAddVisit)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#5A5A40] hover:bg-[#43432f] text-white text-xs font-semibold rounded-xl shadow-xs transition-all self-start sm:self-auto cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{showAddVisit ? 'Cancel' : '+ Stamp New Heritage Visit'}</span>
          </button>
        </div>

        {/* Add Visit Form */}
        {showAddVisit && (
          <form onSubmit={handleAddVisit} className="bg-[#faf8f5] rounded-2xl border border-[#d6cfc7] p-5 space-y-4 animate-in fade-in duration-200">
            <h3 className="text-sm font-serif font-bold text-[#2d2a26]">
              Stamp a New Heritage Experience
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#5A5A40] mb-1">Monument / Festival Name</label>
                <input
                  type="text"
                  required
                  value={newVisitTitle}
                  onChange={(e) => setNewVisitTitle(e.target.value)}
                  placeholder="e.g. Brihadisvara Temple or Ratha Yatra"
                  className="w-full text-xs sm:text-sm p-2.5 bg-white border border-[#d6cfc7] rounded-xl focus:ring-2 focus:ring-[#5A5A40] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5A5A40] mb-1">City / Region</label>
                <input
                  type="text"
                  value={newVisitLocation}
                  onChange={(e) => setNewVisitLocation(e.target.value)}
                  placeholder="e.g. Thanjavur, Tamil Nadu"
                  className="w-full text-xs sm:text-sm p-2.5 bg-white border border-[#d6cfc7] rounded-xl focus:ring-2 focus:ring-[#5A5A40] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5A5A40] mb-1">Date of Visit</label>
                <input
                  type="date"
                  value={newVisitDate}
                  onChange={(e) => setNewVisitDate(e.target.value)}
                  className="w-full text-xs sm:text-sm p-2.5 bg-white border border-[#d6cfc7] rounded-xl focus:ring-2 focus:ring-[#5A5A40] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5A5A40] mb-1">Personal Experience Rating</label>
                <div className="flex items-center gap-1 pt-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setNewVisitRating(s)}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star className={`w-5 h-5 ${s <= newVisitRating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} />
                    </button>
                  ))}
                  <span className="text-xs text-[#8a817c] ml-2">({newVisitRating} of 5)</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#5A5A40] mb-1">Personal Journal Notes & Reflections</label>
              <textarea
                rows={2}
                value={newVisitNotes}
                onChange={(e) => setNewVisitNotes(e.target.value)}
                placeholder="e.g. The monolithic granite Nandi was mesmerizing during morning sun rays..."
                className="w-full text-xs sm:text-sm p-2.5 bg-white border border-[#d6cfc7] rounded-xl focus:ring-2 focus:ring-[#5A5A40] focus:outline-hidden"
              />
            </div>

            <div className="flex justify-end pt-1">
              <button
                type="submit"
                className="px-5 py-2 bg-[#5A5A40] text-white text-xs font-semibold rounded-xl hover:bg-[#43432f] transition-all cursor-pointer shadow-xs"
              >
                Save Stamp to Firestore
              </button>
            </div>
          </form>
        )}

        {/* Visited Stamps Grid */}
        {visitedPlaces.length === 0 ? (
          <div className="p-8 text-center bg-[#faf8f5] rounded-2xl border border-dashed border-[#d6cfc7] space-y-2">
            <BookOpen className="w-10 h-10 text-[#8a817c]/50 mx-auto" />
            <h4 className="font-serif text-base font-bold text-[#2d2a26]">No Visited Stamps Yet</h4>
            <p className="text-xs text-[#8a817c] max-w-sm mx-auto">
              Stamp places you have visited across India to build your permanent heritage passport!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visitedPlaces.map((visit) => (
              <div
                key={visit.id}
                className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e5e0d8] space-y-2 flex flex-col justify-between hover:shadow-xs transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                      ✓ Passport Stamp
                    </span>
                    <button
                      onClick={() => removeVisitedPlace(visit.id)}
                      className="text-[#8a817c] hover:text-rose-600 p-1 transition-colors cursor-pointer"
                      title="Delete Stamp"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h4 className="text-sm font-serif font-bold text-[#2d2a26] mt-2 line-clamp-1">
                    {visit.title}
                  </h4>
                  <p className="text-[11px] text-[#8a817c] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#5A5A40]" />
                    <span>{visit.locationName}</span>
                  </p>

                  <div className="flex items-center gap-1 text-amber-500 my-1.5">
                    {Array.from({ length: visit.rating || 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-500" />
                    ))}
                  </div>

                  {visit.personalNotes && (
                    <p className="text-xs text-[#555] italic bg-white p-2 rounded-lg border border-[#e5e0d8] line-clamp-3">
                      &ldquo;{visit.personalNotes}&rdquo;
                    </p>
                  )}
                </div>

                <div className="text-[10px] text-[#8a817c] pt-2 border-t border-[#e5e0d8] flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Visited on {visit.visitedDate}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Language Preference Card */}
      <div className="p-6 rounded-3xl bg-[#8A3324]/5 border border-[#8A3324]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-[10px] font-bold text-[#8A3324] uppercase tracking-widest flex items-center gap-1.5">
            <Languages className="w-3.5 h-3.5" />
            <span>Language & Regional Script Preference</span>
          </div>
          <div className="text-base font-serif font-bold text-[#2d2a26] flex items-center gap-2">
            <span className="text-xl">{currentLangObj.flag}</span>
            <span>{currentLangObj.name} ({currentLangObj.nativeName})</span>
            <span className="text-xs text-[#8c827a] font-normal">[{currentLangObj.script} Script]</span>
          </div>
          <p className="text-xs text-[#6b625b] font-normal">
            Greeting: <span className="font-serif italic text-[#8A3324]">&ldquo;{currentLangObj.greeting}&rdquo;</span>
          </p>
        </div>

        <button
          onClick={onOpenLanguageModal}
          className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-[#8A3324] hover:bg-[#722a1d] rounded-full transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
        >
          Change Language
        </button>
      </div>

      {/* Departure Location Setting */}
      <div className="p-6 rounded-3xl bg-[#f5f2ed] border border-[#e5e0d8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="space-y-0.5">
          <div className="text-[10px] font-bold text-[#8a817c] uppercase tracking-widest">Departure Origin City</div>
          <div className="text-base font-serif font-bold text-[#2d2a26] flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#5A5A40]" />
            <span>{userLocation.city}, {userLocation.state}</span>
          </div>
          <p className="text-xs text-[#8a817c] font-normal">
            Coordinates: {userLocation.latitude.toFixed(2)}°N, {userLocation.longitude.toFixed(2)}°E (Used to calculate travel options)
          </p>
        </div>

        <button
          onClick={onOpenLocationModal}
          className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-[#5A5A40] hover:bg-[#464632] rounded-full transition-all cursor-pointer shadow-xs active:scale-95"
        >
          Change City
        </button>
      </div>

      {/* Footer Navigation */}
      <div className="pt-4 border-t border-[#e5e0d8] flex items-center justify-between">
        <span className="text-xs text-[#8a817c] font-normal">
          Cloud backend powered by Firebase Firestore & Authentication.
        </span>
        <button
          onClick={onNavigateHome}
          className="text-xs font-bold uppercase tracking-wider text-[#5A5A40] hover:underline cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};
