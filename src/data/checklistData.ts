import { TripChecklistItem } from '../types';

export const BASE_HERITAGE_CHECKLIST: TripChecklistItem[] = [
  // Temple & Monument Etiquette
  {
    id: 'chk-1',
    category: 'temple-etiquette',
    title: 'Modest Temple Attire / Scarf or Dupatta',
    description: 'Shoulders and knees must be covered at ancient temples and monuments. Carry a light breathable scarf for head covering.',
    isMandatory: true,
    completed: false
  },
  {
    id: 'chk-2',
    category: 'footwear-gear',
    title: 'Easy Slip-on Footwear & Clean Socks',
    description: 'Shoes are removed at temple entrances. Clean socks prevent feet from scorching on sunlit marble/stone courtyards.',
    isMandatory: true,
    completed: false
  },
  {
    id: 'chk-3',
    category: 'temple-etiquette',
    title: 'Shoe Bag / Drawstring Pouch',
    description: 'Handy when visiting multiple Ghats or shrines where leaving shoes at a central stall is impractical.',
    isMandatory: false,
    completed: false
  },

  // Documentation & Entry Passes
  {
    id: 'chk-4',
    category: 'documentation',
    title: 'Govt Photo ID Card / Passport Copies',
    description: 'Mandatory for entry verification at ASI (Archaeological Survey of India) monuments and e-ticket scanning.',
    isMandatory: true,
    completed: false
  },
  {
    id: 'chk-5',
    category: 'documentation',
    title: 'ASI E-Tickets / QR Passes on Mobile',
    description: 'Pre-booking tickets online via ASI portal bypasses long physical queue lines at Taj Mahal, Qutub Minar, and Red Fort.',
    isMandatory: false,
    completed: false
  },

  // Cash & Digital UPI Readiness
  {
    id: 'chk-6',
    category: 'cash-upi',
    title: 'UPI Payment App (Google Pay / PhonePe) & ₹500/₹100 Cash in Small Denominations',
    description: 'Small notes (₹10, ₹20, ₹50, ₹100) are essential for boatmen, prasad offerings, shoe keepers, and heritage rickshaws.',
    isMandatory: true,
    completed: false
  },

  // Photography & Audio Gear
  {
    id: 'chk-7',
    category: 'photography',
    title: 'Power Bank (10,000mAh+) & Wired Earphones',
    description: 'Audio guide apps, camera photos, and GPS map navigation drain battery quickly during full-day explorations.',
    isMandatory: true,
    completed: false
  },
  {
    id: 'chk-8',
    category: 'photography',
    title: 'Tripod Policy Check / Extra Camera Pass',
    description: 'ASI monuments allow hand-held smartphones/DSLRs for free but require permits for professional video gear or tripods.',
    isMandatory: false,
    completed: false
  },

  // Health & Climate Protection
  {
    id: 'chk-9',
    category: 'health-climate',
    title: 'Refillable Insulated Water Bottle with Filter',
    description: 'Stay hydrated in sunlit courtyard complexes. Most heritage complexes now offer purified RO water stations.',
    isMandatory: true,
    completed: false
  },
  {
    id: 'chk-10',
    category: 'health-climate',
    title: 'Sun Protection (Hat, Sunglasses & SPF 50+ Sunscreen)',
    description: 'Vast open courtyards at forts (e.g., Amer Fort, Chittorgarh) offer minimal shade during mid-day.',
    isMandatory: true,
    completed: false
  },
  {
    id: 'chk-11',
    category: 'health-climate',
    title: 'Mosquito Repellent & Hand Sanitizer',
    description: 'Essential for evening Ganga Aarti on the riverbank or exploring historic garden tombs at dusk.',
    isMandatory: false,
    completed: false
  }
];

export const CITY_SPECIFIC_CHECKLIST_ITEMS: Record<string, TripChecklistItem[]> = {
  varanasi: [
    {
      id: 'chk-vns-1',
      category: 'temple-etiquette',
      title: 'Kashi Vishwanath Corridor Dress Protocol',
      description: 'Traditional Indian attire (Dhoti-Kurta or Saree) is required for VIP Sparsh Darshan / inner sanctum rituals.',
      isMandatory: true,
      completed: false,
      citySpecific: 'varanasi'
    },
    {
      id: 'chk-vns-2',
      category: 'footwear-gear',
      title: 'Non-slip Walking Shoes for Wet Ghat Steps',
      description: 'Algae near water steps during early morning boat rides can be slippery.',
      isMandatory: true,
      completed: false,
      citySpecific: 'varanasi'
    }
  ],
  agra: [
    {
      id: 'chk-agr-1',
      category: 'documentation',
      title: 'Taj Mahal Shoe Cover / Mausoleum Add-on Ticket',
      description: 'Ensure your ticket includes the ₹200 main mausoleum step-up access and take free shoe covers from the entry counter.',
      isMandatory: true,
      completed: false,
      citySpecific: 'agra'
    },
    {
      id: 'chk-agr-2',
      category: 'photography',
      title: 'No Food Items / Lighters in Taj Security Check',
      description: 'Strict security bans tobacco, chewing gum, tripods, and extra batteries beyond phone & camera.',
      isMandatory: true,
      completed: false,
      citySpecific: 'agra'
    }
  ],
  jaipur: [
    {
      id: 'chk-jpr-1',
      category: 'documentation',
      title: 'Jaipur Composite Entry Ticket',
      description: 'A single 2-day pass covers Amer Fort, Hawa Mahal, Jantar Mantar, Nahargarh Fort, and Albert Hall Museum at discounted rates.',
      isMandatory: false,
      completed: false,
      citySpecific: 'jaipur'
    }
  ],
  amritsar: [
    {
      id: 'chk-asr-1',
      category: 'temple-etiquette',
      title: 'Head Scarf (Rumāl) for Golden Temple',
      description: 'Mandatory head covering for all genders before stepping into the Parikrama. Free head cloths available at entrance.',
      isMandatory: true,
      completed: false,
      citySpecific: 'amritsar'
    }
  ]
};

const CHECKLIST_STORAGE_KEY = 'virasat_trip_checklist_v1';

export function getDefaultChecklist(cityId?: string): TripChecklistItem[] {
  const baseCopy = BASE_HERITAGE_CHECKLIST.map((item) => ({ ...item, completed: false }));
  let result = [...baseCopy];

  if (cityId && CITY_SPECIFIC_CHECKLIST_ITEMS[cityId]) {
    const cityItems = CITY_SPECIFIC_CHECKLIST_ITEMS[cityId].map((item) => ({ ...item, completed: false }));
    result = [...cityItems, ...result];
  }

  return result;
}

export function loadSavedChecklist(cityId?: string): TripChecklistItem[] {
  // Clear any previously persisted checklist to prevent restoring past states across refresh
  try {
    localStorage.removeItem(CHECKLIST_STORAGE_KEY);
  } catch (e) {
    // Ignore localStorage errors in restricted environments
  }
  return getDefaultChecklist(cityId);
}

export function saveChecklistState(_items: TripChecklistItem[]) {
  // Intentionally not persisted to localStorage so checklist starts fresh on page refresh
}
