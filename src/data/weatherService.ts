import { WeatherData } from '../types';
import { CITIES_DATA } from './citiesData';

// Climatological and real-time weather dataset for Indian heritage destinations
export const DESTINATION_WEATHER_DATA: Record<string, WeatherData> = {
  varanasi: {
    cityId: 'varanasi',
    cityName: 'Varanasi (Kashi)',
    state: 'Uttar Pradesh',
    latitude: 25.3176,
    longitude: 82.9739,
    temperature: 28,
    tempUnit: '°C',
    feelsLike: 29,
    condition: 'Pleasant & Mild Haze',
    summary: 'Clear skies along the Ganges with comfortable dawn breezes ideal for early morning boat aartis.',
    iconType: 'clear',
    high: 31,
    low: 19,
    humidity: 52,
    windSpeedKm: 9,
    uvIndex: 5,
    airQuality: {
      aqi: 98,
      category: 'Satisfactory'
    },
    travelComfortScore: 92,
    travelAdvice: 'Ideal for dawn boat tours (5:30 AM – 7:30 AM) and evening Dashashwamedh Ganga Aarti. Carry light cottons and sun protection.',
    bestOutdoorHours: '5:30 AM – 10:00 AM & 4:30 PM – 9:00 PM',
    forecast: [
      { day: 'Today', date: 'Now', tempMax: 31, tempMin: 19, condition: 'Clear Skies', icon: '☀️', rainfallChance: 0, humidity: 52 },
      { day: 'Tue', date: 'Tomorrow', tempMax: 32, tempMin: 18, condition: 'Sunny & Golden', icon: '☀️', rainfallChance: 0, humidity: 48 },
      { day: 'Wed', date: 'In 2 Days', tempMax: 31, tempMin: 19, condition: 'Gentle River Breeze', icon: '🌤️', rainfallChance: 5, humidity: 50 },
      { day: 'Thu', date: 'In 3 Days', tempMax: 30, tempMin: 17, condition: 'Pleasant Autumn Calm', icon: '🌤️', rainfallChance: 0, humidity: 46 },
      { day: 'Fri', date: 'In 4 Days', tempMax: 29, tempMin: 17, condition: 'Clear & Crisp', icon: '☀️', rainfallChance: 0, humidity: 45 }
    ],
    hourly: [
      { time: '06:00', temp: 20, condition: 'Dawn Mist', icon: '🌅' },
      { time: '09:00', temp: 24, condition: 'Gentle Sunshine', icon: '☀️' },
      { time: '12:00', temp: 29, condition: 'Warm Sun', icon: '☀️' },
      { time: '15:00', temp: 31, condition: 'Bright Afternoon', icon: '🌤️' },
      { time: '18:00', temp: 26, condition: 'Evening Glow', icon: '🌇' },
      { time: '21:00', temp: 22, condition: 'Cool River Night', icon: '🌙' }
    ]
  },
  jaipur: {
    cityId: 'jaipur',
    cityName: 'Jaipur (Pink City)',
    state: 'Rajasthan',
    latitude: 26.9124,
    longitude: 75.7873,
    temperature: 29,
    tempUnit: '°C',
    feelsLike: 28,
    condition: 'Sunny & Crisp Desert Air',
    summary: 'Warm golden sunlight illuminating the pink terracotta ramparts. Crisp, dry, and ideal for fort explorations.',
    iconType: 'sunny',
    high: 32,
    low: 18,
    humidity: 38,
    windSpeedKm: 12,
    uvIndex: 6,
    airQuality: {
      aqi: 105,
      category: 'Moderate'
    },
    travelComfortScore: 90,
    travelAdvice: 'Visit Amber Fort and Nahargarh early morning to avoid midday heat. Rooftop dinners facing illuminated palaces are highly recommended.',
    bestOutdoorHours: '7:30 AM – 11:30 AM & 4:00 PM – 8:30 PM',
    forecast: [
      { day: 'Today', date: 'Now', tempMax: 32, tempMin: 18, condition: 'Crisp Sun', icon: '☀️', rainfallChance: 0, humidity: 38 },
      { day: 'Tue', date: 'Tomorrow', tempMax: 33, tempMin: 19, condition: 'Warm Breeze', icon: '☀️', rainfallChance: 0, humidity: 35 },
      { day: 'Wed', date: 'In 2 Days', tempMax: 32, tempMin: 18, condition: 'Golden Amber Light', icon: '🌤️', rainfallChance: 0, humidity: 34 },
      { day: 'Thu', date: 'In 3 Days', tempMax: 31, tempMin: 17, condition: 'Mild Autumn Day', icon: '☀️', rainfallChance: 0, humidity: 36 },
      { day: 'Fri', date: 'In 4 Days', tempMax: 30, tempMin: 16, condition: 'Cool Evening', icon: '☀️', rainfallChance: 0, humidity: 39 }
    ],
    hourly: [
      { time: '06:00', temp: 19, condition: 'Cool Breeze', icon: '🌅' },
      { time: '09:00', temp: 24, condition: 'Comfortable Sun', icon: '☀️' },
      { time: '12:00', temp: 30, condition: 'Warm Sun', icon: '☀️' },
      { time: '15:00', temp: 32, condition: 'Peak Sunlight', icon: '🌤️' },
      { time: '18:00', temp: 27, condition: 'Sunset Glow', icon: '🌇' },
      { time: '21:00', temp: 22, condition: 'Starlit Sky', icon: '🌙' }
    ]
  },
  agra: {
    cityId: 'agra',
    cityName: 'Agra',
    state: 'Uttar Pradesh',
    latitude: 27.1767,
    longitude: 78.0081,
    temperature: 27,
    tempUnit: '°C',
    feelsLike: 27,
    condition: 'Golden Morning Haze',
    summary: 'Soft morning radiance over Yamuna riverfront, highlighting the white Makrana marble of Taj Mahal.',
    iconType: 'partlyCloudy',
    high: 30,
    low: 17,
    humidity: 49,
    windSpeedKm: 8,
    uvIndex: 5,
    airQuality: {
      aqi: 112,
      category: 'Moderate'
    },
    travelComfortScore: 94,
    travelAdvice: 'Enter Taj Mahal eastern gate right at sunrise (6:00 AM) for tranquil marble reflections and minimal crowds.',
    bestOutdoorHours: '6:00 AM – 10:30 AM & 3:30 PM – 6:30 PM',
    forecast: [
      { day: 'Today', date: 'Now', tempMax: 30, tempMin: 17, condition: 'Soft Sunshine', icon: '🌤️', rainfallChance: 0, humidity: 49 },
      { day: 'Tue', date: 'Tomorrow', tempMax: 31, tempMin: 18, condition: 'Clear Sky', icon: '☀️', rainfallChance: 0, humidity: 46 },
      { day: 'Wed', date: 'In 2 Days', tempMax: 30, tempMin: 17, condition: 'Gentle Warmth', icon: '☀️', rainfallChance: 0, humidity: 44 },
      { day: 'Thu', date: 'In 3 Days', tempMax: 29, tempMin: 16, condition: 'Mughal Garden Breeze', icon: '🌤️', rainfallChance: 0, humidity: 47 },
      { day: 'Fri', date: 'In 4 Days', tempMax: 28, tempMin: 15, condition: 'Pleasant Autumn', icon: '☀️', rainfallChance: 0, humidity: 50 }
    ],
    hourly: [
      { time: '06:00', temp: 18, condition: 'Sunrise Mist', icon: '🌅' },
      { time: '09:00', temp: 23, condition: 'Pleasant Sun', icon: '☀️' },
      { time: '12:00', temp: 28, condition: 'Bright Light', icon: '☀️' },
      { time: '15:00', temp: 30, condition: 'Warm Sky', icon: '🌤️' },
      { time: '18:00', temp: 25, condition: 'Dusk Over Yamuna', icon: '🌇' },
      { time: '21:00', temp: 20, condition: 'Clear Night', icon: '🌙' }
    ]
  },
  delhi: {
    cityId: 'delhi',
    cityName: 'New Delhi',
    state: 'Delhi',
    latitude: 28.6139,
    longitude: 77.2090,
    temperature: 28,
    tempUnit: '°C',
    feelsLike: 28,
    condition: 'Mild Autumn Sunlight',
    summary: 'Pleasant weather across Lutyens heritage boulevards and Old Delhi walled quarters.',
    iconType: 'sunny',
    high: 31,
    low: 18,
    humidity: 46,
    windSpeedKm: 11,
    uvIndex: 5,
    airQuality: {
      aqi: 125,
      category: 'Moderate'
    },
    travelComfortScore: 88,
    travelAdvice: 'Great time for outdoor walking at Humayun’s Tomb, Qutub Complex, and Lodhi Art District in the afternoon.',
    bestOutdoorHours: '7:00 AM – 11:00 AM & 3:30 PM – 7:30 PM',
    forecast: [
      { day: 'Today', date: 'Now', tempMax: 31, tempMin: 18, condition: 'Pleasant Sun', icon: '☀️', rainfallChance: 0, humidity: 46 },
      { day: 'Tue', date: 'Tomorrow', tempMax: 31, tempMin: 18, condition: 'Sunny & Clear', icon: '☀️', rainfallChance: 0, humidity: 44 },
      { day: 'Wed', date: 'In 2 Days', tempMax: 30, tempMin: 17, condition: 'Breezy & Fine', icon: '🌤️', rainfallChance: 0, humidity: 42 },
      { day: 'Thu', date: 'In 3 Days', tempMax: 29, tempMin: 16, condition: 'Autumn Warmth', icon: '☀️', rainfallChance: 0, humidity: 45 },
      { day: 'Fri', date: 'In 4 Days', tempMax: 28, tempMin: 16, condition: 'Clear Night', icon: '☀️', rainfallChance: 0, humidity: 48 }
    ],
    hourly: [
      { time: '06:00', temp: 19, condition: 'Crisp Morning', icon: '🌅' },
      { time: '09:00', temp: 24, condition: 'Gentle Sun', icon: '☀️' },
      { time: '12:00', temp: 29, condition: 'Sunny', icon: '☀️' },
      { time: '15:00', temp: 31, condition: 'Warm', icon: '🌤️' },
      { time: '18:00', temp: 26, condition: 'Comfortable Dusk', icon: '🌇' },
      { time: '21:00', temp: 21, condition: 'Pleasant Night', icon: '🌙' }
    ]
  },
  amritsar: {
    cityId: 'amritsar',
    cityName: 'Amritsar',
    state: 'Punjab',
    latitude: 31.6340,
    longitude: 74.8723,
    temperature: 26,
    tempUnit: '°C',
    feelsLike: 25,
    condition: 'Crisp & Serene',
    summary: 'Cool spiritual serenity surrounding the Golden Temple’s Amrit Sarovar with gentle northern breeze.',
    iconType: 'clear',
    high: 29,
    low: 15,
    humidity: 48,
    windSpeedKm: 10,
    uvIndex: 5,
    airQuality: {
      aqi: 82,
      category: 'Satisfactory'
    },
    travelComfortScore: 96,
    travelAdvice: 'Experience the 4:30 AM Palki Sahib ceremony or nighttime golden reflections under clear autumn skies.',
    bestOutdoorHours: '4:30 AM – 10:30 AM & 4:00 PM – 9:30 PM',
    forecast: [
      { day: 'Today', date: 'Now', tempMax: 29, tempMin: 15, condition: 'Crisp & Serene', icon: '☀️', rainfallChance: 0, humidity: 48 },
      { day: 'Tue', date: 'Tomorrow', tempMax: 29, tempMin: 15, condition: 'Bright & Calm', icon: '☀️', rainfallChance: 0, humidity: 45 },
      { day: 'Wed', date: 'In 2 Days', tempMax: 28, tempMin: 14, condition: 'Cool Breeze', icon: '🌤️', rainfallChance: 0, humidity: 43 },
      { day: 'Thu', date: 'In 3 Days', tempMax: 27, tempMin: 14, condition: 'Golden Sunlight', icon: '☀️', rainfallChance: 0, humidity: 46 },
      { day: 'Fri', date: 'In 4 Days', tempMax: 26, tempMin: 13, condition: 'Pleasant Chills', icon: '☀️', rainfallChance: 0, humidity: 48 }
    ],
    hourly: [
      { time: '06:00', temp: 16, condition: 'Crisp Dawn', icon: '🌅' },
      { time: '09:00', temp: 21, condition: 'Sunny & Mild', icon: '☀️' },
      { time: '12:00', temp: 27, condition: 'Comfortable', icon: '☀️' },
      { time: '15:00', temp: 29, condition: 'Pleasant Sun', icon: '🌤️' },
      { time: '18:00', temp: 24, condition: 'Golden Dusk', icon: '🌇' },
      { time: '21:00', temp: 18, condition: 'Serene Cool Night', icon: '🌙' }
    ]
  },
  hampi: {
    cityId: 'hampi',
    cityName: 'Hampi',
    state: 'Karnataka',
    latitude: 15.3350,
    longitude: 76.4600,
    temperature: 30,
    tempUnit: '°C',
    feelsLike: 31,
    condition: 'Sunny & Warm Breeze',
    summary: 'Clear blue skies framing ancient monolithic granite boulders and the Tungabhadra river valley.',
    iconType: 'sunny',
    high: 33,
    low: 21,
    humidity: 45,
    windSpeedKm: 13,
    uvIndex: 7,
    airQuality: {
      aqi: 45,
      category: 'Good'
    },
    travelComfortScore: 93,
    travelAdvice: 'Hike up Matanga Hill for sunrise and Hemakuta Hill for sunset. Cycle between Vittala and Virupaksha during cooler morning hours.',
    bestOutdoorHours: '6:00 AM – 10:30 AM & 4:00 PM – 7:00 PM',
    forecast: [
      { day: 'Today', date: 'Now', tempMax: 33, tempMin: 21, condition: 'Boulder Sunshine', icon: '☀️', rainfallChance: 0, humidity: 45 },
      { day: 'Tue', date: 'Tomorrow', tempMax: 33, tempMin: 21, condition: 'Warm & Dry', icon: '☀️', rainfallChance: 0, humidity: 42 },
      { day: 'Wed', date: 'In 2 Days', tempMax: 32, tempMin: 20, condition: 'Pleasant River Breeze', icon: '🌤️', rainfallChance: 0, humidity: 40 },
      { day: 'Thu', date: 'In 3 Days', tempMax: 32, tempMin: 20, condition: 'Clear Sky', icon: '☀️', rainfallChance: 0, humidity: 43 },
      { day: 'Fri', date: 'In 4 Days', tempMax: 31, tempMin: 19, condition: 'Fine Weather', icon: '☀️', rainfallChance: 0, humidity: 44 }
    ],
    hourly: [
      { time: '06:00', temp: 22, condition: 'Sunrise Glow', icon: '🌅' },
      { time: '09:00', temp: 26, condition: 'Bright Sun', icon: '☀️' },
      { time: '12:00', temp: 31, condition: 'Warm Rocks', icon: '☀️' },
      { time: '15:00', temp: 33, condition: 'Peak Warmth', icon: '🌤️' },
      { time: '18:00', temp: 28, condition: 'Stunning Sunset', icon: '🌇' },
      { time: '21:00', temp: 24, condition: 'Breezy Night', icon: '🌙' }
    ]
  },
  madurai: {
    cityId: 'madurai',
    cityName: 'Madurai',
    state: 'Tamil Nadu',
    latitude: 9.9252,
    longitude: 78.1198,
    temperature: 31,
    tempUnit: '°C',
    feelsLike: 34,
    condition: 'Tropical Warmth & Jasmine Breeze',
    summary: 'Vibrant temple town air fragrant with famous Madurai Malli jasmine. Warm afternoons and bustling temple evenings.',
    iconType: 'partlyCloudy',
    high: 34,
    low: 24,
    humidity: 62,
    windSpeedKm: 14,
    uvIndex: 8,
    airQuality: {
      aqi: 55,
      category: 'Good'
    },
    travelComfortScore: 89,
    travelAdvice: 'Visit Meenakshi Amman temple early morning (6:00 AM – 9:00 AM) or during the 8:30 PM evening palanquin procession. Enjoy chilled Jigarthanda.',
    bestOutdoorHours: '6:00 AM – 9:30 AM & 5:00 PM – 9:30 PM',
    forecast: [
      { day: 'Today', date: 'Now', tempMax: 34, tempMin: 24, condition: 'Tropical Sun', icon: '☀️', rainfallChance: 10, humidity: 62 },
      { day: 'Tue', date: 'Tomorrow', tempMax: 34, tempMin: 24, condition: 'Warm & Humid', icon: '🌤️', rainfallChance: 15, humidity: 64 },
      { day: 'Wed', date: 'In 2 Days', tempMax: 33, tempMin: 23, condition: 'Passing Cloud', icon: '⛅', rainfallChance: 20, humidity: 65 },
      { day: 'Thu', date: 'In 3 Days', tempMax: 33, tempMin: 23, condition: 'Breezy Temple Day', icon: '🌤️', rainfallChance: 10, humidity: 60 },
      { day: 'Fri', date: 'In 4 Days', tempMax: 32, tempMin: 23, condition: 'Pleasant Evening', icon: '☀️', rainfallChance: 5, humidity: 58 }
    ],
    hourly: [
      { time: '06:00', temp: 25, condition: 'Fresh Dawn', icon: '🌅' },
      { time: '09:00', temp: 29, condition: 'Warm Sun', icon: '☀️' },
      { time: '12:00', temp: 33, condition: 'Bright & Warm', icon: '☀️' },
      { time: '15:00', temp: 34, condition: 'Tropical Heat', icon: '🌤️' },
      { time: '18:00', temp: 30, condition: 'Jasmine Fragrance', icon: '🌇' },
      { time: '21:00', temp: 26, condition: 'Comfortable Night', icon: '🌙' }
    ]
  },
  kolkata: {
    cityId: 'kolkata',
    cityName: 'Kolkata',
    state: 'West Bengal',
    latitude: 22.5726,
    longitude: 88.3639,
    temperature: 29,
    tempUnit: '°C',
    feelsLike: 31,
    condition: 'Pleasant River Humidity',
    summary: 'Pleasant gentle Hooghly river breeze sweeping past Howrah Bridge and Victoria Memorial lawns.',
    iconType: 'partlyCloudy',
    high: 32,
    low: 22,
    humidity: 64,
    windSpeedKm: 10,
    uvIndex: 6,
    airQuality: {
      aqi: 88,
      category: 'Satisfactory'
    },
    travelComfortScore: 91,
    travelAdvice: 'Ideal for walking tours through Kumartuli artisan pottery lanes and heritage tram rides from Esplanade in the late afternoon.',
    bestOutdoorHours: '6:30 AM – 10:30 AM & 3:30 PM – 8:00 PM',
    forecast: [
      { day: 'Today', date: 'Now', tempMax: 32, tempMin: 22, condition: 'Pleasant Hooghly Breeze', icon: '🌤️', rainfallChance: 5, humidity: 64 },
      { day: 'Tue', date: 'Tomorrow', tempMax: 32, tempMin: 21, condition: 'Clear Autumn Sky', icon: '☀️', rainfallChance: 0, humidity: 60 },
      { day: 'Wed', date: 'In 2 Days', tempMax: 31, tempMin: 21, condition: 'Fine & Calm', icon: '☀️', rainfallChance: 0, humidity: 58 },
      { day: 'Thu', date: 'In 3 Days', tempMax: 30, tempMin: 20, condition: 'Pleasant Sunlight', icon: '🌤️', rainfallChance: 0, humidity: 59 },
      { day: 'Fri', date: 'In 4 Days', tempMax: 30, tempMin: 20, condition: 'Cool Evening', icon: '☀️', rainfallChance: 0, humidity: 62 }
    ],
    hourly: [
      { time: '06:00', temp: 23, condition: 'Misty Dawn', icon: '🌅' },
      { time: '09:00', temp: 27, condition: 'Warm Sunlight', icon: '☀️' },
      { time: '12:00', temp: 31, condition: 'Sunny', icon: '☀️' },
      { time: '15:00', temp: 32, condition: 'Warm Hooghly Air', icon: '🌤️' },
      { time: '18:00', temp: 27, condition: 'Breezy Sunset', icon: '🌇' },
      { time: '21:00', temp: 24, condition: 'Comfortable Night', icon: '🌙' }
    ]
  },
  mysore: {
    cityId: 'mysore',
    cityName: 'Mysore',
    state: 'Karnataka',
    latitude: 12.2958,
    longitude: 76.6394,
    temperature: 27,
    tempUnit: '°C',
    feelsLike: 27,
    condition: 'Pleasant Hill Breeze',
    summary: 'Cool, balmy climate under Chamundi Hills, ideal for palace courtyard strolls and silk shopping.',
    iconType: 'clear',
    high: 29,
    low: 18,
    humidity: 55,
    windSpeedKm: 11,
    uvIndex: 6,
    airQuality: {
      aqi: 38,
      category: 'Good'
    },
    travelComfortScore: 98,
    travelAdvice: 'Unbeatable weather for Sunday palace illumination viewing (7:00 PM) and morning Devaraja market walking tours.',
    bestOutdoorHours: '6:30 AM – 11:30 AM & 3:30 PM – 9:00 PM',
    forecast: [
      { day: 'Today', date: 'Now', tempMax: 29, tempMin: 18, condition: 'Balmy Breeze', icon: '☀️', rainfallChance: 0, humidity: 55 },
      { day: 'Tue', date: 'Tomorrow', tempMax: 29, tempMin: 18, condition: 'Pleasant Sun', icon: '🌤️', rainfallChance: 5, humidity: 52 },
      { day: 'Wed', date: 'In 2 Days', tempMax: 28, tempMin: 17, condition: 'Cool Hill Calm', icon: '☀️', rainfallChance: 0, humidity: 50 },
      { day: 'Thu', date: 'In 3 Days', tempMax: 28, tempMin: 17, condition: 'Fine & Crisp', icon: '☀️', rainfallChance: 0, humidity: 53 },
      { day: 'Fri', date: 'In 4 Days', tempMax: 27, tempMin: 16, condition: 'Pleasant Evenings', icon: '☀️', rainfallChance: 0, humidity: 54 }
    ],
    hourly: [
      { time: '06:00', temp: 19, condition: 'Chamundi Mist', icon: '🌅' },
      { time: '09:00', temp: 24, condition: 'Gentle Warmth', icon: '☀️' },
      { time: '12:00', temp: 28, condition: 'Sunny', icon: '☀️' },
      { time: '15:00', temp: 29, condition: 'Pleasant', icon: '🌤️' },
      { time: '18:00', temp: 25, condition: 'Cool Sunset', icon: '🌇' },
      { time: '21:00', temp: 21, condition: 'Crisp Palace Night', icon: '🌙' }
    ]
  },
  khajuraho: {
    cityId: 'khajuraho',
    cityName: 'Khajuraho',
    state: 'Madhya Pradesh',
    latitude: 24.8318,
    longitude: 79.9199,
    temperature: 28,
    tempUnit: '°C',
    feelsLike: 27,
    condition: 'Crisp & Sunny',
    summary: 'Clear dry air highlighting the intricate sandstone carvings of the Western Group of Temples.',
    iconType: 'sunny',
    high: 31,
    low: 16,
    humidity: 42,
    windSpeedKm: 8,
    uvIndex: 5,
    airQuality: {
      aqi: 42,
      category: 'Good'
    },
    travelComfortScore: 95,
    travelAdvice: 'Early morning light is breathtaking on Kandariya Mahadeva temple. Visit Raneh Falls canyon in the afternoon.',
    bestOutdoorHours: '6:30 AM – 11:00 AM & 3:30 PM – 6:30 PM',
    forecast: [
      { day: 'Today', date: 'Now', tempMax: 31, tempMin: 16, condition: 'Crisp Sandstone Glow', icon: '☀️', rainfallChance: 0, humidity: 42 },
      { day: 'Tue', date: 'Tomorrow', tempMax: 31, tempMin: 16, condition: 'Clear Sky', icon: '☀️', rainfallChance: 0, humidity: 40 },
      { day: 'Wed', date: 'In 2 Days', tempMax: 30, tempMin: 15, condition: 'Pleasant Autumn', icon: '☀️', rainfallChance: 0, humidity: 38 },
      { day: 'Thu', date: 'In 3 Days', tempMax: 29, tempMin: 15, condition: 'Cool Breeze', icon: '🌤️', rainfallChance: 0, humidity: 41 },
      { day: 'Fri', date: 'In 4 Days', tempMax: 29, tempMin: 14, condition: 'Starlit Evening', icon: '☀️', rainfallChance: 0, humidity: 43 }
    ],
    hourly: [
      { time: '06:00', temp: 17, condition: 'Crisp Dawn', icon: '🌅' },
      { time: '09:00', temp: 23, condition: 'Golden Temple Light', icon: '☀️' },
      { time: '12:00', temp: 29, condition: 'Warm Sun', icon: '☀️' },
      { time: '15:00', temp: 31, condition: 'Pleasant', icon: '🌤️' },
      { time: '18:00', temp: 25, condition: 'Sunset Over Temples', icon: '🌇' },
      { time: '21:00', temp: 19, condition: 'Crisp Night', icon: '🌙' }
    ]
  }
};

// Fallback generator for any city without a hardcoded preset
export function getCityWeather(cityId: string, fallbackName?: string, lat?: number, lng?: number): WeatherData {
  if (DESTINATION_WEATHER_DATA[cityId]) {
    return DESTINATION_WEATHER_DATA[cityId];
  }

  // Find city in CITIES_DATA
  const city = CITIES_DATA.find((c) => c.id === cityId);
  const name = fallbackName || city?.name || 'Heritage Destination';
  const state = city?.state || 'India';
  const latitude = lat || city?.latitude || 22.0;
  const longitude = lng || city?.longitude || 78.0;

  return {
    cityId,
    cityName: name,
    state,
    latitude,
    longitude,
    temperature: 28,
    tempUnit: '°C',
    feelsLike: 29,
    condition: 'Pleasant & Mild Breeze',
    summary: `Favorable meteorological conditions across ${name} with clear visibility and pleasant breezes for sightseeing.`,
    iconType: 'sunny',
    high: 31,
    low: 18,
    humidity: 50,
    windSpeedKm: 10,
    uvIndex: 5,
    airQuality: {
      aqi: 65,
      category: 'Good'
    },
    travelComfortScore: 92,
    travelAdvice: 'Comfortable weather for heritage monument exploration. Keep hydrated and plan outdoor site visits in morning/late afternoon.',
    bestOutdoorHours: '6:30 AM – 11:00 AM & 4:00 PM – 7:30 PM',
    forecast: [
      { day: 'Today', date: 'Now', tempMax: 31, tempMin: 18, condition: 'Clear Sky', icon: '☀️', rainfallChance: 0, humidity: 50 },
      { day: 'Tue', date: 'Tomorrow', tempMax: 32, tempMin: 19, condition: 'Sunny & Crisp', icon: '☀️', rainfallChance: 0, humidity: 48 },
      { day: 'Wed', date: 'In 2 Days', tempMax: 31, tempMin: 18, condition: 'Mild Warmth', icon: '🌤️', rainfallChance: 5, humidity: 47 },
      { day: 'Thu', date: 'In 3 Days', tempMax: 30, tempMin: 17, condition: 'Pleasant Calm', icon: '☀️', rainfallChance: 0, humidity: 49 },
      { day: 'Fri', date: 'In 4 Days', tempMax: 29, tempMin: 17, condition: 'Comfortable', icon: '☀️', rainfallChance: 0, humidity: 51 }
    ],
    hourly: [
      { time: '06:00', temp: 19, condition: 'Morning Glow', icon: '🌅' },
      { time: '09:00', temp: 24, condition: 'Gentle Sun', icon: '☀️' },
      { time: '12:00', temp: 29, condition: 'Warm', icon: '☀️' },
      { time: '15:00', temp: 31, condition: 'Sunny', icon: '🌤️' },
      { time: '18:00', temp: 26, condition: 'Dusk Breeze', icon: '🌇' },
      { time: '21:00', temp: 22, condition: 'Serene Night', icon: '🌙' }
    ]
  };
}
