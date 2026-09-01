import React, { useState } from 'react';
import { UserLocation, SupportedLanguage } from '../types';
import { CITIES_DATA } from '../data/citiesData';
import { DESTINATION_WEATHER_DATA, getCityWeather } from '../data/weatherService';
import { getTranslation } from '../data/languages';
import {
  CloudSun,
  Sun,
  CloudRain,
  Wind,
  Droplets,
  Compass,
  MapPin,
  Sparkles,
  Calendar,
  Clock,
  ShieldCheck,
  ChevronRight,
  Landmark,
  ArrowUpRight,
  Info
} from 'lucide-react';

interface DestinationWeatherViewProps {
  initialCityId?: string;
  userLocation?: UserLocation;
  onSelectCity?: (cityId: string) => void;
  onSelectMonument?: (monumentId: string) => void;
  onOpenItineraryGenerator?: (cityId: string) => void;
  onExploreMap?: () => void;
  currentLanguage?: SupportedLanguage;
}

export const DestinationWeatherView: React.FC<DestinationWeatherViewProps> = ({
  initialCityId = 'varanasi',
  userLocation,
  onSelectCity,
  onSelectMonument,
  onOpenItineraryGenerator,
  onExploreMap,
  currentLanguage = 'en'
}) => {
  const [selectedCityId, setSelectedCityId] = useState<string>(initialCityId);

  const currentWeather = getCityWeather(selectedCityId);
  const cityData = CITIES_DATA.find((c) => c.id === selectedCityId) || CITIES_DATA[0];

  const getWeatherIcon = (type: string) => {
    switch (type) {
      case 'sunny':
        return <Sun className="w-10 h-10 text-amber-500 animate-pulse" />;
      case 'rainy':
        return <CloudRain className="w-10 h-10 text-blue-500" />;
      case 'partlyCloudy':
        return <CloudSun className="w-10 h-10 text-amber-400" />;
      default:
        return <Sun className="w-10 h-10 text-amber-500" />;
    }
  };

  return (
    <div className="space-y-10 animate-fadeIn pb-16">
      {/* Header Banner */}
      <div className="bg-linear-to-r from-[#3a352f] to-[#2d2a26] rounded-3xl p-6 sm:p-10 text-white shadow-md border border-[#e5e0d8] relative overflow-hidden">
        <div className="relative z-10 w-full space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-[#E6BE8A]">
            <CloudSun className="w-3.5 h-3.5 text-[#E6BE8A]" />
            <span>Heritage Climate & Travel Intelligence</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Destination Weather & Optimal Travel Timings
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal max-w-4xl">
            Real-time meteorological insights, air comfort ratings, and tailored outdoor visiting hours for India’s iconic monuments, river ghats, and hill fortresses.
          </p>

          {/* Quick City Selector Bar */}
          <div className="pt-2 flex flex-wrap gap-2 items-center">
            <span className="text-xs text-white/70 font-medium mr-1">Select Destination:</span>
            {CITIES_DATA.slice(0, 8).map((city) => (
              <button
                key={city.id}
                onClick={() => setSelectedCityId(city.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCityId === city.id
                    ? 'bg-[#9E3E26] text-white shadow-sm font-bold scale-105'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {city.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Weather Card & Travel Comfort Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Main Live Weather & Forecast */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Live Weather Hero Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] shadow-xs space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#9E3E26] uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>{currentWeather.cityName}, {currentWeather.state}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2d2a26] mt-1">
                  {currentWeather.condition}
                </h2>
                <p className="text-xs sm:text-sm text-[#6b625b] mt-1 max-w-lg">
                  {currentWeather.summary}
                </p>
              </div>

              {/* Big Temp Display */}
              <div className="flex items-center gap-4 bg-[#f9f7f4] px-5 py-3.5 rounded-2xl border border-[#e5e0d8]">
                {getWeatherIcon(currentWeather.iconType)}
                <div>
                  <div className="font-serif text-4xl sm:text-5xl font-bold text-[#2d2a26]">
                    {currentWeather.temperature}°C
                  </div>
                  <div className="text-[11px] text-[#8c827a] font-medium">
                    Feels like {currentWeather.feelsLike}°C
                  </div>
                </div>
              </div>
            </div>

            {/* Weather Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 bg-[#f9f7f4] rounded-2xl border border-[#e5e0d8] space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#8c827a]">
                  <Droplets className="w-3.5 h-3.5 text-blue-500" />
                  <span>Humidity</span>
                </div>
                <div className="text-lg font-bold text-[#2d2a26]">{currentWeather.humidity}%</div>
                <div className="text-[10px] text-[#8c827a]">High: {currentWeather.high}°C &bull; Low: {currentWeather.low}°C</div>
              </div>

              <div className="p-3.5 bg-[#f9f7f4] rounded-2xl border border-[#e5e0d8] space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#8c827a]">
                  <Wind className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Wind Speed</span>
                </div>
                <div className="text-lg font-bold text-[#2d2a26]">{currentWeather.windSpeedKm} km/h</div>
                <div className="text-[10px] text-[#8c827a]">Gentle sightseeing breeze</div>
              </div>

              <div className="p-3.5 bg-[#f9f7f4] rounded-2xl border border-[#e5e0d8] space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#8c827a]">
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span>UV Index</span>
                </div>
                <div className="text-lg font-bold text-[#2d2a26]">{currentWeather.uvIndex} / 10</div>
                <div className="text-[10px] text-[#8c827a]">Moderate protection</div>
              </div>

              <div className="p-3.5 bg-[#f9f7f4] rounded-2xl border border-[#e5e0d8] space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#8c827a]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Air Quality</span>
                </div>
                <div className="text-lg font-bold text-emerald-700">{currentWeather.airQuality.category}</div>
                <div className="text-[10px] text-[#8c827a]">AQI Index: {currentWeather.airQuality.aqi}</div>
              </div>
            </div>

            {/* Hourly Weather Breakdown */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#8c827a]">
                Hourly Sightseeing Timeline
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {currentWeather.hourly.map((h, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#f9f7f4] hover:bg-[#f0ebe1] rounded-xl border border-[#e5e0d8] text-center space-y-1 transition-all"
                  >
                    <div className="text-[11px] font-medium text-[#8c827a]">{h.time}</div>
                    <div className="text-xl my-1">{h.icon}</div>
                    <div className="font-bold text-sm text-[#2d2a26]">{h.temp}°C</div>
                    <div className="text-[10px] text-[#6b625b] truncate">{h.condition}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5-Day Outlook */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] shadow-xs space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#2d2a26]">
              5-Day Heritage Travel Outlook
            </h3>
            <div className="space-y-2.5">
              {currentWeather.forecast.map((fc, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 bg-[#f9f7f4] hover:bg-[#f0ebe1] rounded-2xl border border-[#e5e0d8] transition-all text-xs sm:text-sm"
                >
                  <div className="w-24 sm:w-28 font-bold text-[#2d2a26]">
                    <div>{fc.day}</div>
                    <div className="text-[10px] font-normal text-[#8c827a]">{fc.date}</div>
                  </div>

                  <div className="flex items-center gap-2 flex-1 justify-center sm:justify-start">
                    <span className="text-xl">{fc.icon}</span>
                    <span className="font-medium text-[#5a524c]">{fc.condition}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-[11px] text-[#8c827a] hidden sm:block">
                      Rain: {fc.rainfallChance}%
                    </div>
                    <div className="font-mono font-bold text-[#2d2a26]">
                      {fc.tempMax}° / <span className="text-[#8c827a]">{fc.tempMin}°</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 1 Col: Travel Intelligence & Heritage Recommendations */}
        <div className="space-y-6">
          {/* Comfort Score & Advisory Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#e5e0d8] shadow-xs space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-[#2d2a26]">
                Travel Comfort Score
              </h3>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold rounded-full text-xs">
                {currentWeather.travelComfortScore} / 100
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[#e5e0d8] h-3 rounded-full overflow-hidden">
              <div
                className="bg-linear-to-r from-amber-500 to-emerald-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${currentWeather.travelComfortScore}%` }}
              />
            </div>

            {/* Optimal Outdoor Hours */}
            <div className="p-4 bg-[#f9f7f4] rounded-2xl border border-[#e5e0d8] space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#9E3E26] uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>Prime Visiting Window</span>
              </div>
              <p className="text-sm font-semibold text-[#2d2a26]">
                {currentWeather.bestOutdoorHours}
              </p>
              <p className="text-xs text-[#6b625b]">
                Recommended for monument photography, riverboat aartis, and temple processions.
              </p>
            </div>

            {/* Advisory */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-[#2d2a26] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#9E3E26]" />
                <span>Expert Travel Advisory</span>
              </div>
              <p className="text-xs sm:text-sm text-[#5a524c] leading-relaxed">
                {currentWeather.travelAdvice}
              </p>
            </div>

            {/* Direct City Actions */}
            <div className="pt-2 space-y-2">
              <button
                onClick={() => onSelectCity(selectedCityId)}
                className="w-full py-2.5 bg-[#9E3E26] hover:bg-[#85341f] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs"
              >
                <span>Explore All Monuments & Sites</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onOpenItineraryGenerator(selectedCityId)}
                className="w-full py-2.5 bg-[#f5f1eb] hover:bg-[#eae3d7] text-[#2d2a26] border border-[#e5e0d8] rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              >
                <Calendar className="w-3.5 h-3.5 text-[#9E3E26]" />
                <span>Generate Weather-Optimized Itinerary</span>
              </button>
            </div>
          </div>

          {/* Quick Climate Comparison Across India */}
          <div className="bg-white rounded-3xl p-6 border border-[#e5e0d8] shadow-xs space-y-4">
            <h3 className="font-serif text-base font-bold text-[#2d2a26]">
              All-India Heritage Weather Index
            </h3>
            <div className="space-y-2">
              {Object.values(DESTINATION_WEATHER_DATA).slice(0, 6).map((item) => (
                <div
                  key={item.cityId}
                  onClick={() => setSelectedCityId(item.cityId)}
                  className={`flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer text-xs ${
                    selectedCityId === item.cityId
                      ? 'bg-[#9E3E26]/10 border-[#9E3E26] text-[#9E3E26] font-bold'
                      : 'bg-[#f9f7f4] border-[#e5e0d8] text-[#5a524c] hover:bg-[#f0ebe1]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{item.iconType === 'sunny' ? '☀️' : '🌤️'}</span>
                    <span>{item.cityName.split(' ')[0]}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-[#2d2a26]">{item.temperature}°C</span>
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded-md">
                      {item.travelComfortScore} pts
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
