import { UserLocation, TravelCalculation, TravelOption, CityDestination, DayItinerary, ItineraryActivity } from '../types';
import { calculateDistanceKm, POPULAR_ORIGIN_CITIES } from './indianLocations';
import { CITIES_DATA } from './citiesData';
import { MONUMENTS_DATA } from './monumentsData';
import { FESTIVALS_DATA } from './festivalsData';

export function calculateTravelPlan(origin: UserLocation, destination: CityDestination): TravelCalculation {
  const distance = calculateDistanceKm(origin.latitude, origin.longitude, destination.latitude, destination.longitude);
  
  const options: TravelOption[] = [];

  // Flight option (if distance > 250 km or different states)
  if (distance > 250) {
    const flightHours = Math.max(1, Math.round((distance / 650) * 10) / 10 + 0.7);
    const flightPrice = Math.min(12500, Math.max(3200, Math.round(distance * 3.8 + 1500)));
    options.push({
      mode: 'flight',
      title: 'Direct / Connecting Flight',
      duration: `${flightHours} hrs (approx)`,
      priceRange: `₹${flightPrice.toLocaleString('en-IN')} – ₹${(flightPrice * 1.6).toLocaleString('en-IN')}`,
      frequency: 'Daily multiple flights',
      operatorOrDetail: `To ${destination.airport}`,
      bookingService: 'MakeMyTrip / Skyscanner',
      bookingUrl: `https://www.makemytrip.com/flight/search?itinerary=${encodeURIComponent(origin.city)}-${encodeURIComponent(destination.name)}`
    });
  }

  // Train option (Superfast / Vande Bharat / Rajdhani Express)
  const trainSpeed = 75; // avg km/h with halts
  const trainHours = Math.round((distance / trainSpeed) * 10) / 10;
  const train3AC = Math.round(distance * 1.4 + 400);
  const trainVandeBharat = Math.round(distance * 1.9 + 700);

  options.push({
    mode: 'train',
    title: distance < 650 ? 'Vande Bharat / Shatabdi Express' : 'Superfast / Rajdhani Express',
    duration: `${Math.floor(trainHours)}h ${Math.round((trainHours % 1) * 60)}m`,
    priceRange: `₹${train3AC.toLocaleString('en-IN')} (3AC) / ₹${trainVandeBharat.toLocaleString('en-IN')} (Exec CC)`,
    frequency: 'Daily scheduled trains',
    operatorOrDetail: `To ${destination.railwayStation}`,
    bookingService: 'IRCTC / Trainman',
    bookingUrl: `https://www.irctc.co.in/nget/train-search?origin=${encodeURIComponent(origin.city)}&dest=${encodeURIComponent(destination.name)}`
  });

  // Bus Option (Volvo / Sleeper)
  if (distance < 1100) {
    const busHours = Math.round((distance / 50) * 10) / 10;
    const busPrice = Math.max(500, Math.round(distance * 1.6 + 250));
    options.push({
      mode: 'bus',
      title: 'AC Multi-Axle Volvo / Sleeper Bus',
      duration: `${Math.floor(busHours)}h ${Math.round((busHours % 1) * 60)}m`,
      priceRange: `₹${busPrice.toLocaleString('en-IN')} – ₹${(busPrice * 1.5).toLocaleString('en-IN')}`,
      frequency: 'Regular evening & morning departures',
      operatorOrDetail: 'State RTC & Private Volvo Fleets',
      bookingService: 'redBus',
      bookingUrl: `https://www.redbus.in/bus-tickets/${encodeURIComponent(origin.city.toLowerCase())}-to-${encodeURIComponent(destination.name.toLowerCase().split(' ')[0])}`
    });
  }

  // Driving / Cab Option
  const driveHours = Math.round((distance / 60) * 10) / 10;
  options.push({
    mode: 'drive',
    title: 'Self-Drive / Intercity Highway Taxi',
    duration: `${Math.floor(driveHours)}h ${Math.round((driveHours % 1) * 60)}m`,
    priceRange: `₹${Math.round(distance * 13 + 500).toLocaleString('en-IN')} (Tolls & Fuel/Cab)`,
    frequency: 'On Demand 24/7',
    operatorOrDetail: 'National Highways & Expressways',
    bookingService: 'Google Maps Navigation',
    bookingUrl: `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin.city + ', India')}&destination=${encodeURIComponent(destination.name + ', India')}`
  });

  return {
    distanceKm: distance,
    originCity: origin.city,
    destinationCity: destination.name,
    options
  };
}

export function generatePersonalizedItinerary(
  destination: CityDestination,
  daysCount: number = 3,
  festivalId?: string,
  travelPace: 'Relaxed' | 'Balanced' | 'Fast-Paced' = 'Balanced'
): DayItinerary[] {
  const festival = festivalId ? FESTIVALS_DATA.find(f => f.id === festivalId) : null;
  const cityMonuments = MONUMENTS_DATA.filter(
    (m) =>
      destination.monumentIds?.includes(m.id) ||
      m.cityId === destination.id ||
      destination.name.toLowerCase().includes(m.cityName.toLowerCase())
  );
  
  const days: DayItinerary[] = [];

  for (let day = 1; day <= daysCount; day++) {
    const activities: ItineraryActivity[] = [];

    if (day === 1) {
      // Day 1: Iconic Monument & Welcome Culture
      const mon = cityMonuments[0];
      activities.push({
        id: `d1-act-1`,
        time: '08:30 AM',
        title: mon ? `Explore ${mon.name}` : `Heritage Architecture Walking Tour`,
        category: 'monument',
        duration: mon?.estimatedVisitDuration || '2.5 Hours',
        locationName: mon?.name || destination.name,
        notes: mon ? `${mon.architecture}. Best early morning light.` : 'Experience ancient sandstone facades.',
        entryInfo: mon?.entryFee.indian || '₹50 entry'
      });

      if (destination.museums.length > 0) {
        const mus = destination.museums[0];
        activities.push({
          id: `d1-act-2`,
          time: '11:45 AM',
          title: mus.name,
          category: 'museum',
          duration: '1.5 Hours',
          locationName: mus.name,
          notes: mus.highlight,
          entryInfo: 'ASI Pass / ₹20'
        });
      }

      if (destination.authenticFood.length > 0) {
        const food = destination.authenticFood[0];
        activities.push({
          id: `d1-act-3`,
          time: '01:30 PM',
          title: `Traditional Feast: ${food.name}`,
          category: 'food',
          duration: '1 Hour',
          locationName: food.iconicSpots[0] || 'Heritage Eatery',
          notes: food.desc
        });
      }

      if (festival) {
        activities.push({
          id: `d1-act-4`,
          time: '05:30 PM',
          title: `${festival.name} - Evening Ritual & Gatherings`,
          category: 'festival',
          duration: '2.5 Hours',
          locationName: festival.bestExperienceSpot,
          notes: festival.ritualHighlights[0] || 'Vibrant celebrations and devotional atmosphere.',
          entryInfo: 'Free Public Gathering'
        });
      } else if (destination.heritageStreets.length > 0) {
        const street = destination.heritageStreets[0];
        activities.push({
          id: `d1-act-4`,
          time: '05:30 PM',
          title: `Evening Walk through ${street.name}`,
          category: 'culture',
          duration: '2 Hours',
          locationName: street.name,
          notes: `Famous for: ${street.famousFor}. Great evening street photography.`
        });
      }

      activities.push({
        id: `d1-act-5`,
        time: '08:30 PM',
        title: destination.heritageRestaurants[0] 
          ? `Dinner at ${destination.heritageRestaurants[0].name}`
          : 'Authentic Local Heritage Dinner',
        category: 'food',
        duration: '1.5 Hours',
        locationName: destination.heritageRestaurants[0]?.name || 'Old City Quarter',
        notes: `Must try: ${destination.heritageRestaurants[0]?.mustTry || 'Local thali and regional desserts'}`
      });

      days.push({
        dayNumber: 1,
        theme: 'Grand Heritage & Evening Festival Splendor',
        activities
      });
    } else if (day === 2) {
      // Day 2: Sacred Temples & Living Traditions
      const mon2 = cityMonuments[1] || cityMonuments[0];
      const relSite = destination.religiousSites[0];

      if (relSite) {
        activities.push({
          id: `d2-act-1`,
          time: '07:30 AM',
          title: `Morning Darshan at ${relSite.name}`,
          category: 'culture',
          duration: '2 Hours',
          locationName: relSite.name,
          notes: relSite.desc,
          entryInfo: 'Free Entry / Dress code applicable'
        });
      }

      if (mon2 && mon2.id !== cityMonuments[0]?.id) {
        activities.push({
          id: `d2-act-2`,
          time: '10:30 AM',
          title: `Discover ${mon2.name}`,
          category: 'monument',
          duration: mon2.estimatedVisitDuration,
          locationName: mon2.name,
          notes: mon2.historicalSignificance.slice(0, 120) + '...',
          entryInfo: mon2.entryFee.indian
        });
      } else {
        activities.push({
          id: `d2-act-2`,
          time: '10:30 AM',
          title: 'Artisan Workshop & Handloom Quarter',
          category: 'culture',
          duration: '2 Hours',
          locationName: 'Old City Craft District',
          notes: `Meet local craftsmen working on ${destination.localCulture.handicrafts.join(', ')}.`
        });
      }

      if (destination.authenticFood.length > 1) {
        const food2 = destination.authenticFood[1];
        activities.push({
          id: `d2-act-3`,
          time: '01:00 PM',
          title: `Lunch Special: ${food2.name}`,
          category: 'food',
          duration: '1 Hour',
          locationName: food2.iconicSpots[0] || 'Local Heritage Mess',
          notes: food2.desc
        });
      }

      if (destination.localActivities.length > 0) {
        const act = destination.localActivities[0];
        activities.push({
          id: `d2-act-4`,
          time: '04:00 PM',
          title: act.title,
          category: 'culture',
          duration: act.duration,
          locationName: destination.name,
          notes: act.desc,
          entryInfo: act.priceEstimate
        });
      }

      activities.push({
        id: `d2-act-5`,
        time: '08:00 PM',
        title: destination.heritageRestaurants[1]
          ? `Gourmet Dining at ${destination.heritageRestaurants[1].name}`
          : 'Street Food Trail & Sweet Tasting',
        category: 'food',
        duration: '1.5 Hours',
        locationName: destination.heritageRestaurants[1]?.name || 'Bazaar Street',
        notes: `Try ${destination.authenticFood[destination.authenticFood.length - 1]?.name || 'special local sweets'}`
      });

      days.push({
        dayNumber: 2,
        theme: 'Sacred Temples, Living Crafts & Folk Traditions',
        activities
      });
    } else {
      // Day 3+: Excursions & Hidden Gems
      const nearby = destination.nearbyAttractions[(day - 3) % destination.nearbyAttractions.length] || {
        name: 'Historic Hilltop Viewpoint & Sunset Fort',
        distanceKm: 15,
        desc: 'Panoramic vistas across the heritage city.'
      };

      activities.push({
        id: `d${day}-act-1`,
        time: '08:00 AM',
        title: `Excursion: ${nearby.name}`,
        category: 'monument',
        duration: '3.5 Hours',
        locationName: nearby.name,
        notes: `${nearby.desc} (Distance: ~${nearby.distanceKm} km from city center).`,
        entryInfo: 'Local cab / auto excursion'
      });

      activities.push({
        id: `d${day}-act-2`,
        time: '01:30 PM',
        title: 'Highway Heritage Lunch / Garden Cafe',
        category: 'food',
        duration: '1 Hour',
        locationName: 'Scenic Highway Spot',
        notes: 'Relish authentic regional highway thali and freshly roasted rotis.'
      });

      activities.push({
        id: `d${day}-act-3`,
        time: '04:30 PM',
        title: 'Souvenir Shopping in Heritage Bazaar',
        category: 'culture',
        duration: '2.5 Hours',
        locationName: destination.heritageStreets[1]?.name || destination.heritageStreets[0]?.name || 'Central Bazaar',
        notes: `Look for authentic ${destination.localCulture.handicrafts.slice(0, 2).join(' & ')}.`
      });

      activities.push({
        id: `d${day}-act-4`,
        time: '08:00 PM',
        title: 'Farewell Gala Heritage Dinner',
        category: 'food',
        duration: '2 Hours',
        locationName: 'Rooftop Palace Restaurant',
        notes: 'Savor classical music performances while enjoying the illuminated city skyline.'
      });

      days.push({
        dayNumber: day,
        theme: `Heritage Excursion to ${nearby.name.split(' ')[0]} & Bazaar Explorations`,
        activities
      });
    }
  }

  return days;
}
