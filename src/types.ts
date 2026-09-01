export interface UserLocation {
  city: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
  popular?: boolean;
}

export interface MonthData {
  id: number;
  name: string;
  shortName: string;
  hindiName: string;
  season: string;
  festivalCount: number;
  tagline: string;
  color: string;
  bgGradient: string;
  topFestivals: string[];
}

export interface Festival {
  id: string;
  name: string;
  hindiName: string;
  monthId: number;
  monthName: string;
  dateRange: string;
  duration: string;
  bannerImage: string;
  gallery: string[];
  shortDescription: string;
  longDescription: string;
  culturalSignificance: string;
  ritualHighlights: string[];
  keyActivities: string[];
  celebratedStates: string[];
  primaryDestinations: string[]; // city IDs
  tags: string[];
  bestExperienceSpot: string;
  traditionalTithi?: string;
  gregorianWindow?: string;
  stateOrigin?: string;
  specialFoods?: string[];
  culturalMaxim?: string;
}

export interface StateData {
  id: string;
  name: string;
  capital: string;
  region: 'North' | 'South' | 'East' | 'West' | 'Central' | 'North-East' | string;
  bannerImage: string;
  culturalSummary: string;
  famousFor: string[];
  cities: string[]; // city IDs
  featuredFestivals: string[];
}

export interface Monument {
  id: string;
  name: string;
  hindiName?: string;
  cityId: string;
  cityName: string;
  state: string;
  type: string;
  bannerImage: string;
  gallery: string[];
  historicalSignificance: string;
  briefHistory: string;
  architecture: string;
  builtIn?: string;
  visitingHours: string;
  entryFee: {
    indian: string;
    foreign?: string;
    foreigner?: string;
    camera?: string;
  };
  estimatedVisitDuration: string;
  bestTimeToVisit: string;
  nearbyAttractions: string[];
  nearbyFood: string[];
  latitude: number;
  longitude: number;
  bookingTicketUrl?: string;
  officialBookingUrl?: string;
  tags: string[];
}

export interface CityDestination {
  id: string;
  name: string;
  state: string;
  tagline: string;
  bannerImage: string;
  gallery: string[];
  overview: string;
  latitude: number;
  longitude: number;
  bestTimeToVisit?: string;
  airport: string;
  railwayStation: string;
  festivalIds: string[];
  monumentIds: string[];
  religiousSites: {
    name: string;
    type: string;
    desc: string;
    image: string;
  }[];
  museums: {
    name: string;
    timing?: string;
    highlight: string;
    image: string;
  }[];
  localCulture: {
    traditions: string[];
    handicrafts: string[];
    folkArt: string[];
    danceForms: string[];
    performingArts?: string[];
    traditionalAttire?: string[];
  };
  heritageStreets: {
    name: string;
    famousFor: string;
    bestTime?: string;
    image?: string;
  }[];
  authenticFood: {
    name: string;
    category?: 'Sweets' | 'Street Food' | 'Main Course' | 'Beverage' | string;
    desc: string;
    iconicSpots: string[];
    image?: string;
  }[];
  heritageRestaurants: {
    name: string;
    cuisine?: string;
    priceRange?: string;
    mustTry: string;
    established?: string;
    bookingPlatform?: 'Zomato' | 'Swiggy' | 'Direct' | string;
  }[];
  localActivities: {
    title: string;
    duration: string;
    priceEstimate: string;
    desc: string;
    category?: string;
  }[];
  nearbyAttractions: {
    name: string;
    distanceKm: number;
    desc: string;
  }[];
}

export interface TravelOption {
  mode: 'flight' | 'train' | 'bus' | 'drive';
  title: string;
  duration: string;
  priceRange: string;
  frequency: string;
  operatorOrDetail: string;
  bookingService: string;
  bookingUrl: string;
}

export interface TravelCalculation {
  distanceKm: number;
  originCity: string;
  destinationCity: string;
  options: TravelOption[];
}

export interface ItineraryActivity {
  id: string;
  time: string;
  title: string;
  category: 'monument' | 'museum' | 'food' | 'festival' | 'culture' | 'leisure';
  duration: string;
  locationName: string;
  notes: string;
  entryInfo?: string;
  travelTimeToNext?: string;
  isCustom?: boolean;
}

export interface DayItinerary {
  dayNumber: number;
  theme: string;
  dateStr?: string;
  activities: ItineraryActivity[];
}

export interface SavedItinerary {
  id: string;
  destinationId: string;
  destinationName: string;
  festivalId?: string;
  festivalName?: string;
  daysCount: number;
  stayStyle: string;
  travelPace: 'Relaxed' | 'Balanced' | 'Fast-Paced';
  days: DayItinerary[];
  createdAt: string;
}

export interface WeatherForecastDay {
  day: string;
  date: string;
  tempMax: number;
  tempMin: number;
  condition: string;
  icon: string;
  rainfallChance: number;
  humidity: number;
}

export interface HourlyForecast {
  time: string;
  temp: number;
  condition: string;
  icon: string;
}

export interface WeatherData {
  cityId: string;
  cityName: string;
  state: string;
  latitude: number;
  longitude: number;
  temperature: number;
  tempUnit: '°C';
  feelsLike: number;
  condition: string;
  summary: string;
  iconType: 'sunny' | 'cloudy' | 'rainy' | 'partlyCloudy' | 'clear' | 'haze' | 'breeze';
  high: number;
  low: number;
  humidity: number;
  windSpeedKm: number;
  uvIndex: number;
  airQuality: {
    aqi: number;
    category: 'Good' | 'Moderate' | 'Unhealthy for Sensitive' | 'Satisfactory';
  };
  travelComfortScore: number; // 0 to 100
  travelAdvice: string;
  bestOutdoorHours: string;
  forecast: WeatherForecastDay[];
  hourly: HourlyForecast[];
}

export interface LocalPhrase {
  id: string;
  category: 'greeting' | 'direction' | 'bargaining' | 'dining' | 'courtesy' | 'emergency';
  english: string;
  originalScript: string;
  phonetic: string;
  language: string;
  langCode: string; // e.g. 'hi-IN', 'bn-IN', 'ta-IN', 'mr-IN', 'pa-IN', 'kn-IN', 'gu-IN'
  situationalTip?: string;
}

export interface DestinationPhrases {
  cityId: string;
  regionLanguage: string;
  scriptName: string;
  culturalNote: string;
  phrases: LocalPhrase[];
}

export interface TripChecklistItem {
  id: string;
  category: 'temple-etiquette' | 'documentation' | 'photography' | 'health-climate' | 'cash-upi' | 'footwear-gear' | 'custom';
  title: string;
  description: string;
  isMandatory: boolean;
  completed: boolean;
  citySpecific?: string;
}

export interface CulturalArtisticStats {
  cityId: string;
  architecturalEra: string;
  dominantDynasty: string;
  yearsOfLivingHeritage: number;
  unescoSitesCount: number;
  giTagCrafts: string[];
  classicalArts: string[];
  musicGharanas: string[];
  masonryStyle: string;
  artisanGuildsEstimate: number;
  heritageScore: number; // 0 to 100
  keyMotifs: string[];
}

export type SupportedLanguage = 
  | 'en' // English
  | 'hi' // हिन्दी (Hindi)
  | 'bn' // বাংলা (Bengali)
  | 'ta' // தமிழ் (Tamil)
  | 'te' // తెలుగు (Telugu)
  | 'mr' // मराठी (Marathi)
  | 'gu' // ગુજરાતી (Gujarati)
  | 'kn' // ಕನ್ನಡ (Kannada)
  | 'pa' // ਪੰਜਾਬੀ (Punjabi)
  | 'ml' // മലയാളം (Malayalam)
  | 'or'; // ଓଡ଼ିଆ (Odia)

export interface LanguageOption {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  script: string;
  greeting: string;
  phoneticGreeting?: string;
  flag: string;
  speechCode: string;
}

export interface CultureQuizQuestion {
  id: string;
  category: 'monuments' | 'festivals' | 'arts' | 'crafts' | 'cuisine' | 'history';
  difficulty: 'Easy' | 'Medium' | 'Challenging';
  question: string;
  hindiQuestion?: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  didYouKnow: string;
  relatedCityId?: string;
  relatedMonumentId?: string;
  image?: string;
}

export interface QuizCategoryMeta {
  id: 'all' | 'monuments' | 'festivals' | 'arts' | 'crafts' | 'cuisine' | 'history';
  name: string;
  hindiName: string;
  description: string;
  iconName: string;
  color: string;
}

export interface QuizHistoryRecord {
  id: string;
  date: string;
  category: string;
  score: number;
  totalQuestions: number;
  accuracy: number;
  timeSpentSeconds: number;
  badgeEarned: string;
}

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  isAnonymous: boolean;
  createdAt?: string;
  homeCity?: string;
  favoriteRegion?: string;
  bio?: string;
}

export interface UserBookmark {
  id: string;
  itemType: 'festival' | 'monument' | 'city';
  itemId: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  savedAt: string;
  notes?: string;
}

export interface VisitedPlace {
  id: string;
  itemId: string;
  itemType: 'monument' | 'festival' | 'city';
  title: string;
  locationName: string;
  visitedDate: string;
  rating: number;
  personalNotes?: string;
  photoUrls?: string[];
  createdAt: string;
}

export interface CommunityReview {
  id: string;
  itemId: string;
  itemType: 'festival' | 'monument' | 'city';
  itemTitle: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number; // 1 to 5
  experienceDate?: string;
  travelTip: string;
  culturalInsight: string;
  photos?: string[];
  likesCount: number;
  createdAt: string;
}

export type AppView = 
  | 'home'
  | 'months'
  | 'festivals'
  | 'festival-detail'
  | 'states'
  | 'state-detail'
  | 'destinations'
  | 'city-detail'
  | 'monuments'
  | 'monument-detail'
  | 'monuments-map'
  | 'weather'
  | 'culture-quiz'
  | 'checklist'
  | 'itinerary-generator'
  | 'my-trip'
  | 'profile';

export interface BreadcrumbItem {
  label: string;
  view: AppView;
  params?: {
    monthId?: number;
    festivalId?: string;
    stateId?: string;
    cityId?: string;
    monumentId?: string;
  };
}
