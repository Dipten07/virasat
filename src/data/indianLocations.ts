import { UserLocation } from '../types';

export const POPULAR_ORIGIN_CITIES: UserLocation[] = [
  { city: 'New Delhi', state: 'Delhi', country: 'India', latitude: 28.6139, longitude: 77.2090, popular: true },
  { city: 'Mumbai', state: 'Maharashtra', country: 'India', latitude: 19.0760, longitude: 72.8777, popular: true },
  { city: 'Bengaluru', state: 'Karnataka', country: 'India', latitude: 12.9716, longitude: 77.5946, popular: true },
  { city: 'Kolkata', state: 'West Bengal', country: 'India', latitude: 22.5726, longitude: 88.3639, popular: true },
  { city: 'Chennai', state: 'Tamil Nadu', country: 'India', latitude: 13.0827, longitude: 80.2707, popular: true },
  { city: 'Hyderabad', state: 'Telangana', country: 'India', latitude: 17.3850, longitude: 78.4867, popular: true },
  { city: 'Ahmedabad', state: 'Gujarat', country: 'India', latitude: 23.0225, longitude: 72.5714, popular: true },
  { city: 'Pune', state: 'Maharashtra', country: 'India', latitude: 18.5204, longitude: 73.8567, popular: true },
  { city: 'Jaipur', state: 'Rajasthan', country: 'India', latitude: 26.9124, longitude: 75.7873, popular: true },
  { city: 'Lucknow', state: 'Uttar Pradesh', country: 'India', latitude: 26.8467, longitude: 80.9462, popular: true },
  { city: 'Chandigarh', state: 'Punjab & Haryana', country: 'India', latitude: 30.7333, longitude: 76.7794, popular: true },
  { city: 'Kochi', state: 'Kerala', country: 'India', latitude: 9.9312, longitude: 76.2673, popular: true },
  { city: 'Varanasi', state: 'Uttar Pradesh', country: 'India', latitude: 25.3176, longitude: 82.9739, popular: true },
  { city: 'Bhopal', state: 'Madhya Pradesh', country: 'India', latitude: 23.2599, longitude: 77.4126, popular: true },
  { city: 'Patna', state: 'Bihar', country: 'India', latitude: 25.5941, longitude: 85.1376, popular: true },
  { city: 'Guwahati', state: 'Assam', country: 'India', latitude: 26.1445, longitude: 91.7362, popular: true },
  { city: 'Bhubaneswar', state: 'Odisha', country: 'India', latitude: 20.2961, longitude: 85.8245, popular: true },
  { city: 'Indore', state: 'Madhya Pradesh', country: 'India', latitude: 22.7196, longitude: 75.8577, popular: true },
  { city: 'Surat', state: 'Gujarat', country: 'India', latitude: 21.1702, longitude: 72.8311, popular: true },
  { city: 'Amritsar', state: 'Punjab', country: 'India', latitude: 31.6340, longitude: 74.8723, popular: true },
  { city: 'Srinagar', state: 'Jammu & Kashmir', country: 'India', latitude: 34.0837, longitude: 74.7973, popular: true },
  { city: 'Goa (Panaji)', state: 'Goa', country: 'India', latitude: 15.4909, longitude: 73.8278, popular: true },
];

export function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Radius of earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return Math.round(d);
}
