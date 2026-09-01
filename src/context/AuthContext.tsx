import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { 
  auth, 
  googleProvider, 
  signInWithPopup, 
  signInAnonymously, 
  fbSignOut, 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile as fbUpdateProfile,
  User 
} from '../lib/firebase';
import { 
  UserProfile, 
  UserBookmark, 
  SavedItinerary, 
  VisitedPlace, 
  QuizHistoryRecord 
} from '../types';
import { 
  syncUserProfile, 
  subscribeUserProfile, 
  addBookmarkToFirestore, 
  removeBookmarkFromFirestore, 
  subscribeUserBookmarks,
  saveItineraryToFirestore,
  deleteItineraryFromFirestore,
  subscribeUserItineraries,
  markPlaceVisited,
  deleteVisitedPlace,
  subscribeVisitedPlaces,
  subscribeQuizHistory
} from '../services/firebaseService';

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  bookmarks: UserBookmark[];
  itineraries: SavedItinerary[];
  visitedPlaces: VisitedPlace[];
  quizHistory: QuizHistoryRecord[];
  loginWithGoogle: () => Promise<void>;
  loginAsGuest: () => Promise<void>;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  signupWithEmail: (email: string, pass: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  toggleBookmark: (item: { itemType: 'festival' | 'monument' | 'city'; itemId: string; title: string; subtitle: string; imageUrl: string }) => Promise<boolean>;
  isBookmarked: (itemType: string, itemId: string) => boolean;
  addItinerary: (itinerary: SavedItinerary) => Promise<void>;
  removeItinerary: (itineraryId: string) => Promise<void>;
  logVisitedPlace: (place: { itemId: string; itemType: 'monument' | 'festival' | 'city'; title: string; locationName: string; visitedDate: string; rating: number; personalNotes?: string }) => Promise<void>;
  removeVisitedPlace: (visitId: string) => Promise<void>;
  isPlaceVisited: (itemType: string, itemId: string) => boolean;
  updateProfileDetails: (details: Partial<UserProfile>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [bookmarks, setBookmarks] = useState<UserBookmark[]>([]);
  const [itineraries, setItineraries] = useState<SavedItinerary[]>([]);
  const [visitedPlaces, setVisitedPlaces] = useState<VisitedPlace[]>([]);
  const [quizHistory, setQuizHistory] = useState<QuizHistoryRecord[]>([]);

  // Listen to Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Sync profile to firestore
        try {
          await syncUserProfile({
            uid: currentUser.uid,
            email: currentUser.email,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
            isAnonymous: currentUser.isAnonymous
          });
        } catch (e) {
          console.warn('Could not sync user profile immediately:', e);
        }
      } else {
        setUserProfile(null);
        setBookmarks([]);
        setItineraries([]);
        setVisitedPlaces([]);
        setQuizHistory([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Subscribe to user Firestore subcollections when user is logged in
  useEffect(() => {
    if (!user) return;

    const unsubProfile = subscribeUserProfile(user.uid, (p) => setUserProfile(p));
    const unsubBookmarks = subscribeUserBookmarks(user.uid, (b) => setBookmarks(b));
    const unsubItineraries = subscribeUserItineraries(user.uid, (it) => setItineraries(it));
    const unsubVisited = subscribeVisitedPlaces(user.uid, (vp) => setVisitedPlaces(vp));
    const unsubQuiz = subscribeQuizHistory(user.uid, (qh) => setQuizHistory(qh));

    return () => {
      unsubProfile();
      unsubBookmarks();
      unsubItineraries();
      unsubVisited();
      unsubQuiz();
    };
  }, [user]);

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err: any) {
      console.error('Google Sign In Error:', err);
      throw err;
    }
  };

  const loginAsGuest = async () => {
    try {
      await signInAnonymously(auth);
    } catch (err: any) {
      console.error('Guest Sign In Error:', err);
      throw err;
    }
  };

  const loginWithEmail = async (email: string, pass: string) => {
    await signInWithEmailAndPassword(auth, email, pass);
  };

  const signupWithEmail = async (email: string, pass: string, name: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email, pass);
    if (cred.user) {
      await fbUpdateProfile(cred.user, { displayName: name });
      await syncUserProfile({
        uid: cred.user.uid,
        email: cred.user.email,
        displayName: name,
        photoURL: null,
        isAnonymous: false
      });
    }
  };

  const logout = async () => {
    await fbSignOut(auth);
  };

  const bookmarkMap = useMemo(() => {
    const set = new Set<string>();
    bookmarks.forEach(b => set.add(`${b.itemType}_${b.itemId}`));
    return set;
  }, [bookmarks]);

  const isBookmarked = (itemType: string, itemId: string) => {
    return bookmarkMap.has(`${itemType}_${itemId}`);
  };

  const toggleBookmark = async (item: { itemType: 'festival' | 'monument' | 'city'; itemId: string; title: string; subtitle: string; imageUrl: string }) => {
    // If no user is logged in, auto sign-in anonymously for seamless experience
    let activeUser = user;
    if (!activeUser) {
      const cred = await signInAnonymously(auth);
      activeUser = cred.user;
    }

    const key = `${item.itemType}_${item.itemId}`;
    const alreadySaved = bookmarkMap.has(key);

    if (alreadySaved) {
      await removeBookmarkFromFirestore(activeUser.uid, key);
      return false;
    } else {
      await addBookmarkToFirestore(activeUser.uid, {
        id: key,
        itemType: item.itemType,
        itemId: item.itemId,
        title: item.title,
        subtitle: item.subtitle,
        imageUrl: item.imageUrl,
        savedAt: new Date().toISOString()
      });
      return true;
    }
  };

  const addItinerary = async (itinerary: SavedItinerary) => {
    let activeUser = user;
    if (!activeUser) {
      const cred = await signInAnonymously(auth);
      activeUser = cred.user;
    }
    await saveItineraryToFirestore(activeUser.uid, itinerary);
  };

  const removeItinerary = async (itineraryId: string) => {
    if (!user) return;
    await deleteItineraryFromFirestore(user.uid, itineraryId);
  };

  const visitedMap = useMemo(() => {
    const set = new Set<string>();
    visitedPlaces.forEach(v => set.add(`${v.itemType}_${v.itemId}`));
    return set;
  }, [visitedPlaces]);

  const isPlaceVisited = (itemType: string, itemId: string) => {
    return visitedMap.has(`${itemType}_${itemId}`);
  };

  const logVisitedPlace = async (place: { itemId: string; itemType: 'monument' | 'festival' | 'city'; title: string; locationName: string; visitedDate: string; rating: number; personalNotes?: string }) => {
    let activeUser = user;
    if (!activeUser) {
      const cred = await signInAnonymously(auth);
      activeUser = cred.user;
    }
    const visitId = `${place.itemType}_${place.itemId}`;
    await markPlaceVisited(activeUser.uid, {
      id: visitId,
      ...place,
      createdAt: new Date().toISOString()
    });
  };

  const removeVisitedPlace = async (visitId: string) => {
    if (!user) return;
    await deleteVisitedPlace(user.uid, visitId);
  };

  const updateProfileDetails = async (details: Partial<UserProfile>) => {
    if (!user) return;
    await syncUserProfile(user, details);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userProfile,
        loading,
        bookmarks,
        itineraries,
        visitedPlaces,
        quizHistory,
        loginWithGoogle,
        loginAsGuest,
        loginWithEmail,
        signupWithEmail,
        logout,
        toggleBookmark,
        isBookmarked,
        addItinerary,
        removeItinerary,
        logVisitedPlace,
        removeVisitedPlace,
        isPlaceVisited,
        updateProfileDetails
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
