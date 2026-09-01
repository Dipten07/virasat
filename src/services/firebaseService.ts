import { 
  collection, 
  doc, 
  setDoc, 
  deleteDoc, 
  onSnapshot, 
  query, 
  where,
  getDoc,
  serverTimestamp,
  getDocFromServer
} from 'firebase/firestore';
import { db, auth } from '../lib/firebase';
import { 
  UserBookmark, 
  SavedItinerary, 
  VisitedPlace, 
  CommunityReview, 
  UserProfile, 
  QuizHistoryRecord 
} from '../types';

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Connection test on boot
export async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn("Firebase client is in offline mode or waiting for connection.");
    }
  }
}

// ================= USER PROFILE ================= //
export async function syncUserProfile(user: { uid: string; email: string | null; displayName: string | null; photoURL: string | null; isAnonymous: boolean }, extra?: Partial<UserProfile>) {
  if (!user || !user.uid) return;
  const path = `users/${user.uid}`;
  try {
    const userRef = doc(db, 'users', user.uid);
    const snap = await getDoc(userRef);
    if (!snap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || (user.isAnonymous ? 'Heritage Explorer (Guest)' : 'Cultural Traveler'),
        photoURL: user.photoURL,
        isAnonymous: user.isAnonymous,
        createdAt: new Date().toISOString(),
        homeCity: extra?.homeCity || 'New Delhi',
        favoriteRegion: extra?.favoriteRegion || 'All India',
        bio: extra?.bio || 'Cultural heritage explorer & festival enthusiast',
        updatedAt: serverTimestamp()
      }, { merge: true });
    } else if (extra) {
      await setDoc(userRef, { ...extra, updatedAt: serverTimestamp() }, { merge: true });
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

export function subscribeUserProfile(userId: string, callback: (profile: UserProfile | null) => void) {
  if (!userId) {
    callback(null);
    return () => {};
  }
  const path = `users/${userId}`;
  const userRef = doc(db, 'users', userId);
  return onSnapshot(userRef, (snap) => {
    if (snap.exists()) {
      callback(snap.data() as UserProfile);
    } else {
      callback(null);
    }
  }, (err) => {
    handleFirestoreError(err, OperationType.GET, path);
  });
}

// ================= BOOKMARKS ================= //
export async function addBookmarkToFirestore(userId: string, bookmark: Omit<UserBookmark, 'id'> & { id?: string }) {
  if (!userId) throw new Error('User must be logged in to bookmark');
  const bookmarkId = bookmark.id || `${bookmark.itemType}_${bookmark.itemId}`;
  const path = `users/${userId}/bookmarks/${bookmarkId}`;
  try {
    const bookmarkRef = doc(db, 'users', userId, 'bookmarks', bookmarkId);
    const data: UserBookmark = {
      ...bookmark,
      id: bookmarkId,
      savedAt: bookmark.savedAt || new Date().toISOString()
    };
    await setDoc(bookmarkRef, data);
    return data;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

export async function removeBookmarkFromFirestore(userId: string, bookmarkId: string) {
  if (!userId) return;
  const path = `users/${userId}/bookmarks/${bookmarkId}`;
  try {
    const bookmarkRef = doc(db, 'users', userId, 'bookmarks', bookmarkId);
    await deleteDoc(bookmarkRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

export function subscribeUserBookmarks(userId: string, callback: (bookmarks: UserBookmark[]) => void) {
  if (!userId) {
    callback([]);
    return () => {};
  }
  const path = `users/${userId}/bookmarks`;
  const bookmarksCol = collection(db, 'users', userId, 'bookmarks');
  return onSnapshot(bookmarksCol, (snapshot) => {
    const list: UserBookmark[] = [];
    snapshot.forEach((d) => {
      list.push({ ...d.data(), id: d.id } as UserBookmark);
    });
    list.sort((a, b) => new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime());
    callback(list);
  }, (err) => {
    handleFirestoreError(err, OperationType.LIST, path);
  });
}

// ================= ITINERARIES ================= //
export async function saveItineraryToFirestore(userId: string, itinerary: SavedItinerary) {
  if (!userId) throw new Error('User must be logged in to save itineraries');
  const path = `users/${userId}/itineraries/${itinerary.id}`;
  try {
    const docRef = doc(db, 'users', userId, 'itineraries', itinerary.id);
    await setDoc(docRef, itinerary);
    return itinerary;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

export async function deleteItineraryFromFirestore(userId: string, itineraryId: string) {
  if (!userId) return;
  const path = `users/${userId}/itineraries/${itineraryId}`;
  try {
    const docRef = doc(db, 'users', userId, 'itineraries', itineraryId);
    await deleteDoc(docRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

export function subscribeUserItineraries(userId: string, callback: (itineraries: SavedItinerary[]) => void) {
  if (!userId) {
    callback([]);
    return () => {};
  }
  const path = `users/${userId}/itineraries`;
  const colRef = collection(db, 'users', userId, 'itineraries');
  return onSnapshot(colRef, (snapshot) => {
    const list: SavedItinerary[] = [];
    snapshot.forEach((d) => {
      list.push({ ...d.data(), id: d.id } as SavedItinerary);
    });
    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    callback(list);
  }, (err) => {
    handleFirestoreError(err, OperationType.LIST, path);
  });
}

// ================= VISITED PLACES / HERITAGE PASSPORT ================= //
export async function markPlaceVisited(userId: string, visit: Omit<VisitedPlace, 'id'> & { id?: string }) {
  if (!userId) throw new Error('User must be logged in to log visits');
  const visitId = visit.id || `${visit.itemType}_${visit.itemId}`;
  const path = `users/${userId}/visitedPlaces/${visitId}`;
  try {
    const docRef = doc(db, 'users', userId, 'visitedPlaces', visitId);
    const data: VisitedPlace = {
      ...visit,
      id: visitId,
      createdAt: visit.createdAt || new Date().toISOString()
    };
    await setDoc(docRef, data);
    return data;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

export async function deleteVisitedPlace(userId: string, visitId: string) {
  if (!userId) return;
  const path = `users/${userId}/visitedPlaces/${visitId}`;
  try {
    const docRef = doc(db, 'users', userId, 'visitedPlaces', visitId);
    await deleteDoc(docRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

export function subscribeVisitedPlaces(userId: string, callback: (places: VisitedPlace[]) => void) {
  if (!userId) {
    callback([]);
    return () => {};
  }
  const path = `users/${userId}/visitedPlaces`;
  const colRef = collection(db, 'users', userId, 'visitedPlaces');
  return onSnapshot(colRef, (snapshot) => {
    const list: VisitedPlace[] = [];
    snapshot.forEach((d) => {
      list.push({ ...d.data(), id: d.id } as VisitedPlace);
    });
    list.sort((a, b) => new Date(b.visitedDate || b.createdAt).getTime() - new Date(a.visitedDate || a.createdAt).getTime());
    callback(list);
  }, (err) => {
    handleFirestoreError(err, OperationType.LIST, path);
  });
}

// ================= COMMUNITY REVIEWS & FESTIVAL MEMORIES ================= //
export async function addCommunityReview(review: Omit<CommunityReview, 'id' | 'createdAt' | 'likesCount'> & { id?: string }) {
  const reviewId = review.id || `review_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const path = `communityReviews/${reviewId}`;
  try {
    const docRef = doc(db, 'communityReviews', reviewId);
    const data: CommunityReview = {
      ...review,
      id: reviewId,
      likesCount: 0,
      createdAt: new Date().toISOString()
    };
    await setDoc(docRef, data);
    return data;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

export function subscribeReviewsForItem(itemId: string, callback: (reviews: CommunityReview[]) => void) {
  const path = `communityReviews (item=${itemId})`;
  const colRef = collection(db, 'communityReviews');
  const q = query(colRef, where('itemId', '==', itemId));
  return onSnapshot(q, (snapshot) => {
    const list: CommunityReview[] = [];
    snapshot.forEach((d) => {
      list.push({ ...d.data(), id: d.id } as CommunityReview);
    });
    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    callback(list);
  }, (err) => {
    handleFirestoreError(err, OperationType.LIST, path);
  });
}

export function subscribeAllRecentReviews(callback: (reviews: CommunityReview[]) => void) {
  const path = 'communityReviews';
  const colRef = collection(db, 'communityReviews');
  return onSnapshot(colRef, (snapshot) => {
    const list: CommunityReview[] = [];
    snapshot.forEach((d) => {
      list.push({ ...d.data(), id: d.id } as CommunityReview);
    });
    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    callback(list.slice(0, 30));
  }, (err) => {
    handleFirestoreError(err, OperationType.LIST, path);
  });
}

// ================= QUIZ HISTORY ================= //
export async function saveQuizRecord(userId: string, record: QuizHistoryRecord) {
  if (!userId) return;
  const path = `users/${userId}/quizHistory/${record.id}`;
  try {
    const docRef = doc(db, 'users', userId, 'quizHistory', record.id);
    await setDoc(docRef, record);
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

export function subscribeQuizHistory(userId: string, callback: (records: QuizHistoryRecord[]) => void) {
  if (!userId) {
    callback([]);
    return () => {};
  }
  const path = `users/${userId}/quizHistory`;
  const colRef = collection(db, 'users', userId, 'quizHistory');
  return onSnapshot(colRef, (snapshot) => {
    const list: QuizHistoryRecord[] = [];
    snapshot.forEach((d) => {
      list.push({ ...d.data(), id: d.id } as QuizHistoryRecord);
    });
    list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    callback(list);
  }, (err) => {
    handleFirestoreError(err, OperationType.LIST, path);
  });
}
