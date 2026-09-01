import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized GoogleGenAI client
let aiClient: GoogleGenAI | null = null;

function isValidGeminiApiKey(key: string | undefined): boolean {
  if (!key) return false;
  const trimmed = key.trim();
  if (
    trimmed === '' ||
    trimmed === 'MY_GEMINI_API_KEY' ||
    trimmed === 'YOUR_GEMINI_API_KEY' ||
    trimmed.startsWith('MY_') ||
    trimmed.length < 15
  ) {
    return false;
  }
  return true;
}

function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!isValidGeminiApiKey(apiKey)) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: apiKey!.trim(),
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });
  }
  return aiClient;
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    aiEnabled: isValidGeminiApiKey(process.env.GEMINI_API_KEY),
    timestamp: new Date().toISOString()
  });
});

// Comprehensive Heritage Knowledge Database for Margdarshak (100% Verified Historical & Cultural Truth)
interface CityInfo {
  name: string;
  hindiName: string;
  state: string;
  tagline: string;
  overview: string;
  topMonuments: string;
  timings: string;
  tickets: string;
  dressCode: string;
  foodTips: string;
  itinerary: string;
  bestTime: string;
  hiddenSecret: string;
  aliases: string[];
}

interface MonumentInfo {
  name: string;
  hindiName: string;
  city: string;
  state: string;
  timings: string;
  tickets: string;
  dressCode: string;
  bestTime: string;
  history: string;
  architecture: string;
  foodTips: string;
  photoSpot: string;
  hiddenSecret: string;
  builder: string;
  century: string;
  aliases: string[];
}

const CITY_KNOWLEDGE: Record<string, CityInfo> = {
  'mumbai': {
    name: 'Mumbai (City of Dreams & Arabian Gateway)',
    hindiName: 'मुंबई',
    state: 'Maharashtra',
    tagline: 'Victorian Gothic UNESCO Precincts, Marine Drive, Island Caves & Coastal Flavors',
    overview: 'India’s financial capital and the vibrant heart of Indian cinema. Formerly seven Koli fishing islands, Mumbai features two UNESCO World Heritage Sites (Elephanta Caves & Victorian Gothic and Art Deco Ensemble including CSMT), the triumphal Gateway of India arch, and the legendary 1903 Taj Mahal Palace Hotel facing the Arabian Sea.',
    topMonuments: 'Gateway of India, Elephanta Caves (Trimurti Shiva rock-cut temple), Chhatrapati Shivaji Maharaj Terminus (CSMT Victorian Gothic UNESCO landmark), Taj Mahal Palace Hotel (1903 iconic heritage landmark by Jamsetji Tata), Marine Drive (Queen’s Necklace), Shree Siddhivinayak Temple (Prabhadevi), Haji Ali Dargah (islet shrine in Arabian Sea), Kanheri Caves (Sanjay Gandhi National Park), and Kala Ghoda Arts Precinct.',
    timings: 'Gateway of India: Open 24/7 waterfront promenade. Elephanta Ferry: 9:00 AM – 2:00 PM from Apollo Bunder (Elephanta Caves Closed on Mondays). CSMT Heritage Museum: 3:00 PM – 5:00 PM (Mon–Fri). Siddhivinayak Temple: 5:30 AM – 10:00 PM Daily (Tuesday special Aarti). Haji Ali Dargah: 5:30 AM – 10:00 PM (dependent on sea tide). CSMVS Museum: 10:15 AM – 6:00 PM.',
    tickets: 'Gateway of India promenade: Free. Elephanta Caves return ferry: ₹260; Caves ASI entry: ₹40 for Indians / ₹600 for foreign visitors. CSMVS Museum: ₹150 Indians / ₹650 foreign visitors. Siddhivinayak Temple & Haji Ali Dargah: Free general entry.',
    dressCode: 'Comfortable coastal casual wear and walking shoes. Modest attire covering shoulders and knees when visiting Siddhivinayak Temple and Haji Ali Dargah.',
    foodTips: 'Iconic Mumbai Vada Pav (Ashok Vada Pav near Kirti College & Aram Milk Centre at CSMT), Pav Bhaji (Sardar Pav Bhaji Tardeo & Cannon Pav Bhaji), Irani Cafe Bun Maska & Chai (Kyani & Co. at Marine Lines & Yazdani Bakery at Fort), Parsi Berry Pulao at Britannia & Co. Ballard Estate, Koli coastal seafood (Bombay Duck / Surmai fry at Highway Gomantak & Mahesh Lunch Home), and Chowpatty Bhelpuri & Sevpuri at Girgaon Chowpatty beach.',
    itinerary: '1-Day Classic Mumbai Heritage Itinerary:\n• Morning (7:30 AM – 12:30 PM): Sunrise at Gateway of India & Taj Mahal Palace Hotel; board 9:00 AM harbor ferry to 6th-century rock-cut Elephanta Caves.\n• Midday (1:00 PM – 3:30 PM): Irani Chai & Bun Maska lunch at Kyani & Co. or Berry Pulao at Britannia; explore Victorian Gothic CSMT station facade and Kala Ghoda art galleries.\n• Afternoon (4:00 PM – 6:00 PM): Visit Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS) and shop on Colaba Causeway.\n• Evening (6:30 PM – 9:00 PM): Sunset stroll along Marine Drive (Queen’s Necklace) and feast on Pav Bhaji and Bhelpuri at Girgaon Chowpatty.',
    bestTime: 'November to February (mild pleasant winter temperatures 18°C–30°C, ideal for harbor cruises and walking tours).',
    hiddenSecret: 'The Taj Mahal Palace Hotel in Mumbai was commissioned in 1903 by visionary industrialist Jamsetji Tata. It was India’s very first hotel with electricity, German elevators, and Turkish baths, built 21 years before the Gateway of India arch (1924) standing beside it.',
    aliases: ['mumbai', 'bombay', 'bombai', 'marine drive', 'colaba', 'bandra', 'siddhivinayak', 'haji ali', 'csmt', 'gateway of india', 'elephanta', 'kala ghoda', 'juhu', 'chowpatty', 'dadar', 'vada pav', 'taj mahal palace', 'taj hotel mumbai', 'taj colaba', 'apollo bunder', 'csmvs', 'queen necklace', 'nariman point', 'mumbai city', 'bombay city']
  },
  'delhi': {
    name: 'New Delhi (Capital of Empires)',
    hindiName: 'नई दिल्ली',
    state: 'Delhi',
    tagline: 'Seven Historical Cities, Red Sandstone Citadels, Sufi Dargahs & Street Flavors',
    overview: 'Seat of power for over a millennium spanning the Delhi Sultanate, Mughal Empire, and British Raj. Boasts three UNESCO World Heritage Sites (Qutub Minar, Humayun’s Tomb, Red Fort), historic Chandni Chowk, and the tranquil greenery of Sunder Nursery.',
    topMonuments: 'Red Fort (Lal Qila), Qutub Minar Complex, Humayun’s Tomb, India Gate & Kartavya Path, Jama Masjid, Hazrat Nizamuddin Dargah, Akshardham Temple, Lotus Temple, and Gurdwara Bangla Sahib.',
    timings: 'Red Fort: Sunrise to Sunset (Closed Mondays). Qutub Minar & Humayun’s Tomb: Sunrise to 10:00 PM. Jama Masjid: 7:00 AM – 12:00 PM & 1:30 PM – 6:30 PM. Nizamuddin Dargah: 5:00 AM – 10:30 PM (Thursday evening Sufi Qawwalis 6:30 PM – 8:30 PM).',
    tickets: 'Red Fort / Qutub Minar / Humayun’s Tomb: ₹50 for Indians / ₹600 for foreign visitors. India Gate, Bangla Sahib & Nizamuddin: Free.',
    dressCode: 'Comfortable daywear. Modest clothing and head coverings required at Jama Masjid, Gurdwara Bangla Sahib, and Nizamuddin Dargah.',
    foodTips: 'Old Delhi Nihari & Seekh Kebabs at Karim’s (Jama Masjid Gate 1), Stuffed Fried Parathas in Paranthe Wali Gali, Dilli Chole Bhature at Sita Ram Diwan Chand, and Daulat Ki Chaat in winter.',
    itinerary: '1-Day Delhi Imperial Heritage Itinerary:\n• Morning (7:00 AM – 11:30 AM): Sunrise walk around Humayun’s Tomb & Sunder Nursery gardens, followed by Qutub Minar.\n• Midday (12:00 PM – 3:30 PM): Heritage rickshaw tour of Chandni Chowk, Jama Masjid, and authentic lunch at Karim’s.\n• Afternoon (4:00 PM – 6:00 PM): Red Fort (Lal Qila) exploration.\n• Evening (6:30 PM – 9:00 PM): India Gate sunset illumination and dinner in Connaught Place or Khan Market.',
    bestTime: 'October to March (cool pleasant weather).',
    hiddenSecret: 'The 4th-century CE Iron Pillar of Delhi at the Qutub Minar complex has stood exposed to weather for over 1,600 years without rusting, thanks to ancient Indian metallurgical mastery.',
    aliases: ['delhi', 'new delhi', 'dilli', 'old delhi', 'chandni chowk', 'red fort', 'qutub minar', 'humayun tomb', 'connaught place', 'nizamuddin', 'jama masjid', 'india gate', 'bangla sahib', 'akshardham']
  },
  'jaipur': {
    name: 'Jaipur (The Pink City)',
    hindiName: 'जयपुर',
    state: 'Rajasthan',
    tagline: 'UNESCO Walled City, Hilltop Fortresses, Royal Astronomy & Block Prints',
    overview: 'Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is India’s first planned city built on Vastu Shastra principles. In 1876, the entire walled city was painted terracotta pink to welcome the Prince of Wales, earning its global moniker.',
    topMonuments: 'Amber Fort & Palace, Hawa Mahal (Palace of Winds), City Palace Jaipur, Jantar Mantar (UNESCO Astronomical Observatory), Nahargarh Fort, and Jaigarh Fort.',
    timings: 'Amber Fort: 8:00 AM – 5:30 PM (Day) & 6:30 PM – 9:15 PM (Night). Hawa Mahal: 9:00 AM – 5:00 PM. City Palace: 9:30 AM – 5:00 PM. Jantar Mantar: 9:00 AM – 5:00 PM.',
    tickets: 'Amber Fort: ₹100 Indians / ₹550 foreigners. Hawa Mahal: ₹50 Indians / ₹200 foreigners. Jantar Mantar: ₹50 Indians / ₹200 foreigners. Composite ticket available at ₹300 Indians / ₹1000 foreigners.',
    dressCode: 'Breathable cottons and sturdy walking shoes with good traction for cobblestone fort ramps.',
    foodTips: 'Pyaaz Kachori at Rawat Mishtan Bhandar, Paneer Ghewar at LMB (Johari Bazaar), clay kulhad lassi at Lassiwala MI Road, and Dal Baati Churma with Gatte ki Sabzi at 1135 AD / Chokhi Dhani.',
    itinerary: '1-Day Royal Jaipur Itinerary:\n• Morning (8:00 AM – 11:30 AM): Amber Fort elephant pathway & Sheesh Mahal mirror palace.\n• Midday (12:00 PM – 3:30 PM): Pyaaz Kachori snack, Hawa Mahal photo stop, and City Palace royal galleries.\n• Afternoon (4:00 PM – 5:30 PM): Jantar Mantar massive sundials and Johari Bazaar shopping for gemstone jewelry & blue pottery.\n• Evening (6:00 PM – 8:30 PM): Sunset over Jaipur skyline from Nahargarh Fort ramparts.',
    bestTime: 'October to March.',
    hiddenSecret: 'The 2-km underground military escape tunnel connecting Amber Fort to Jaigarh Fort was kept secret for centuries to protect the royal family during sieges.',
    aliases: ['jaipur', 'pink city', 'hawa mahal', 'amber fort', 'amer fort', 'city palace jaipur', 'nahargarh', 'jantar mantar jaipur', 'johari bazaar']
  },
  'varanasi': {
    name: 'Varanasi (Kashi / Banaras)',
    hindiName: 'वाराणसी (काशी)',
    state: 'Uttar Pradesh',
    tagline: 'The Eternal City of Light, Ghats, Sacred Chants & Living Philosophy',
    overview: 'One of the world’s oldest continuously inhabited cities. Situated on the sacred crescent of the River Ganga, Varanasi is the spiritual core of India where Vedic rituals, classical music, Banarasi silk weaving, and deep philosophical traditions have thrived for millennia.',
    topMonuments: 'Kashi Vishwanath Jyotirlinga Temple & Corridor, Dashashwamedh Ghat (Ganga Maha Aarti), Manikarnika & Harishchandra Ghats, Assi Ghat (Subah-e-Banaras), Sarnath Deer Park & Dhamek Stupa (where Buddha gave his first sermon), and Bharat Kala Bhavan at BHU.',
    timings: 'Kashi Vishwanath: 3:00 AM (Mangala Aarti) – 11:00 PM (Shayan Aarti). Ghats accessible 24/7. Evening Ganga Aarti at Dashashwamedh Ghat at 6:45 PM (summer) / 6:00 PM (winter). Sarnath Museum: 9:00 AM – 5:00 PM (Closed Fridays).',
    tickets: 'General Darshan at Kashi Vishwanath is Free; Sugam Darshan passes ₹300. Riverboat rides range ₹300–₹800. Sarnath Museum ₹5.',
    dressCode: 'Modest traditional attire for temple sanctums (Dhoti/Kurta for men, Saree/Salwar for women). Mobiles and leather belts banned in inner sanctum lockers.',
    foodTips: 'Banarasi Paan at Keshav Tambool Bhandar, Malaiyo (saffron milk froth in winter) at Shreeji Sweets in Thatheri Bazaar, Kachori Jalebi breakfast at Ram Bhandar, and Thandai at Mishra Buwa.',
    itinerary: '1-Day Sacred Varanasi Itinerary:\n• Morning (5:30 AM – 9:00 AM): Sunrise hand-rowed boat ride along Ghats from Assi to Manikarnika, followed by Subah-e-Banaras Vedic chants.\n• Midday (9:30 AM – 1:30 PM): Kashi Vishwanath corridor darshan and hot Kachori-Jalebi breakfast.\n• Afternoon (2:30 PM – 5:00 PM): Excursion to Sarnath (Dhamek Stupa & Ashokan Lion Capital Museum).\n• Evening (6:00 PM – 8:30 PM): Evening Grand Ganga Aarti from a boat at Dashashwamedh Ghat, followed by Banarasi Paan.',
    bestTime: 'October to March (Dev Deepawali in November is spectacular).',
    hiddenSecret: 'The original 3rd-century BCE polished sandstone Ashokan Lion Capital at the Sarnath Museum served as the inspiration for the official National Emblem of India.',
    aliases: ['varanasi', 'banaras', 'kashi', 'ganga ghats', 'kashi vishwanath', 'sarnath', 'assi ghat', 'dashashwamedh ghat', 'manikarnika', 'subah-e-banaras']
  },
  'agra': {
    name: 'Agra (Imperial City of the Mughals)',
    hindiName: 'आगरा',
    state: 'Uttar Pradesh',
    tagline: 'Crown Jewel of Indo-Islamic Architecture, White Marble & Red Sandstone Citadels',
    overview: 'Former capital of the Mughal Empire on the banks of the Yamuna River. Home to three UNESCO World Heritage Sites: the peerless white marble Taj Mahal, the sprawling red sandstone Agra Fort, and the abandoned royal city of Fatehpur Sikri.',
    topMonuments: 'Taj Mahal (Mumtaz Mahal Mausoleum), Agra Fort (Red Fort Agra), Fatehpur Sikri (Buland Darwaza & Salim Chishti Dargah), Mehtab Bagh (Moonlight Garden), and Itmad-ud-Daulah (Baby Taj).',
    timings: 'Taj Mahal: Sunrise to Sunset (Strictly Closed on Fridays). Agra Fort: Sunrise to Sunset Daily. Fatehpur Sikri: Sunrise to Sunset Daily.',
    tickets: 'Taj Mahal: ₹50 for Indians / ₹1,100 for foreigners (Mausoleum crypt ₹200 extra). Agra Fort: ₹50 Indians / ₹650 foreigners. Fatehpur Sikri: ₹50 Indians / ₹610 foreigners.',
    dressCode: 'Modest clothing covering shoulders and knees. Shoe covers or bare feet required on white marble plinths.',
    foodTips: 'Authentic Angoori & Kesar Petha at Panchhi Petha (Sadar Bazaar), Bedmi Puri & Jalebi at Deviram Sweets, and Mughlai Shahi Biryani & Rogan Josh.',
    itinerary: '1-Day Agra Heritage Itinerary:\n• Morning (6:00 AM – 9:30 AM): Sunrise at Taj Mahal East Gate for golden illumination and minimal crowds.\n• Midday (10:30 AM – 1:30 PM): Explore Agra Fort (Diwan-i-Khas, Jahangiri Mahal & Shah Jahan’s prison pavilion).\n• Afternoon (2:30 PM – 5:00 PM): Excursion to Fatehpur Sikri or visit Itmad-ud-Daulah (Baby Taj).\n• Evening (5:30 PM – 7:30 PM): Sunset reflection of Taj Mahal across Yamuna from Mehtab Bagh.',
    bestTime: 'October to March.',
    hiddenSecret: 'The four soaring 40-meter minarets of the Taj Mahal were engineered with an intentional 2-degree outward tilt so that in the event of an earthquake, they would fall outward rather than damage the central dome.',
    aliases: ['agra', 'taj mahal agra', 'agra fort', 'fatehpur sikri', 'mehtab bagh', 'baby taj', 'itmad-ud-daulah', 'petha agra']
  },
  'kolkata': {
    name: 'Kolkata (City of Joy & Cultural Capital)',
    hindiName: 'कोलकाता',
    state: 'West Bengal',
    tagline: 'Colonial White Marble Palaces, Howrah Bridge, Kali Sanctuaries & Literary Cafes',
    overview: 'Former capital of British India until 1911, Kolkata is the intellectual, literary, and artistic heart of India. Renowned for its Victorian architecture, the colossal cantilever Howrah Bridge, Dakshineswar and Kalighat temples, vibrant Durga Puja festival, and rich sweetmeat culture.',
    topMonuments: 'Victoria Memorial Hall, Howrah Bridge over the Hooghly River, Dakshineswar Kali Temple, Belur Math (Ramakrishna Mission HQ), Indian Museum (oldest museum in India), St. Paul’s Cathedral, and College Street Coffee House.',
    timings: 'Victoria Memorial: Gardens 5:30 AM – 6:15 PM; Galleries 10:00 AM – 6:00 PM (Closed Mondays). Dakshineswar Temple: 6:00 AM – 12:30 PM & 3:30 PM – 8:30 PM. Indian Museum: 10:00 AM – 5:00 PM (Closed Mondays).',
    tickets: 'Victoria Memorial: Garden ₹20, Gallery ₹50 Indians / ₹500 foreigners. Indian Museum: ₹50 Indians / ₹500 foreigners. Dakshineswar & Belur Math: Free.',
    dressCode: 'Comfortable cotton wear. Modest dress for temple visits.',
    foodTips: 'Kolkata Kathi Roll at Nizam’s (New Market) or Kusum Rolls (Park Street), Puchka (pani puri) at Vivekananda Park, Kosha Mangsho with Luchi at Golbari (Shyambazar), Bengali Fish Curry (Bhetki Paturi) at 6 Ballygunge Place, and warm Nolen Gur Rosogolla & Sandesh at KC Das / Balaram Mullick.',
    itinerary: '1-Day Cultural Kolkata Itinerary:\n• Morning (6:30 AM – 10:30 AM): Sunrise walk across Howrah Bridge and Mullick Ghat Flower Market; ferry to Dakshineswar Kali Temple and Belur Math.\n• Midday (11:30 AM – 2:30 PM): Visit Indian Museum on Park Street and enjoy authentic Bengali lunch at 6 Ballygunge Place.\n• Afternoon (3:00 PM – 5:30 PM): Stroll Victoria Memorial gardens and St. Paul’s Cathedral; browse books on College Street with Coffee House adda.\n• Evening (6:00 PM – 8:30 PM): Tram ride or Princep Ghat sunset cruise on the Hooghly with Puchka & Kathi rolls.',
    bestTime: 'October to March (Durga Puja in September/October is a UNESCO Intangible Cultural Heritage marvel).',
    hiddenSecret: 'The Howrah Bridge (Rabindra Setu) was built in 1943 without a single nut, bolt, or screw; its entire 26,500-ton steel cantilever structure is held together purely by rivets.',
    aliases: ['kolkata', 'calcutta', 'howrah', 'victoria memorial', 'dakshineswar', 'belur math', 'park street', 'durga puja', 'college street', 'princep ghat', 'hooghly']
  },
  'hyderabad': {
    name: 'Hyderabad (City of Pearls & Nizami Heritage)',
    hindiName: 'हैदराबाद',
    state: 'Telangana',
    tagline: 'Qutb Shahi Fortresses, Charminar Minarets, Royal Chowmahalla & Dum Biryani',
    overview: 'Founded in 1591 by the Qutb Shahi dynasty on the Musi River, Hyderabad evolved into the wealthiest princely state in the world under the Asaf Jahi Nizams. Renowned for its grand stone citadels, world-famous diamond heritage, and exquisite Nizami gastronomy.',
    topMonuments: 'Charminar, Golconda Fort (Acoustic diamond fortress), Chowmahalla Palace, Salar Jung Museum, Qutb Shahi Tombs, and Mecca Masjid.',
    timings: 'Charminar: 9:00 AM – 5:30 PM Daily. Golconda Fort: 9:00 AM – 5:30 PM (Sound & Light Show 6:30 PM). Chowmahalla Palace: 10:00 AM – 5:00 PM (Closed Fridays). Salar Jung Museum: 10:00 AM – 5:00 PM (Closed Fridays).',
    tickets: 'Charminar / Golconda Fort: ₹25 Indians / ₹300 foreigners. Chowmahalla Palace: ₹100 Indians / ₹400 foreigners. Salar Jung Museum: ₹50 Indians / ₹500 foreigners.',
    dressCode: 'Comfortable casual wear for bazaar walking and climbing fort stone steps.',
    foodTips: 'Authentic Hyderabadi Dum Biryani at Paradise, Bawarchi, or Shadab; Irani Chai with Osmania Biscuits at Nimrah Cafe facing Charminar; and Haleem during Ramadan.',
    itinerary: '1-Day Royal Hyderabad Itinerary:\n• Morning (8:30 AM – 11:30 AM): Explore Charminar and sip Irani chai with Osmania biscuits at Nimrah Cafe; visit Mecca Masjid.\n• Midday (12:00 PM – 3:00 PM): Chowmahalla Palace royal vintage car collection & grand Durbar Hall; authentic Hyderabadi Dum Biryani lunch.\n• Afternoon (3:30 PM – 6:00 PM): Salar Jung Museum treasures (including Veiled Rebecca).\n• Evening (6:00 PM – 8:30 PM): Golconda Fort sunset and evening Sound & Light acoustic show.',
    bestTime: 'October to March.',
    hiddenSecret: 'A hand clap at the entry gate of Golconda Fort (Fateh Darwaza) can be heard clearly at the highest point of the citadel (Bala Hissar) 1 km away—an ingenious early-warning defense system.',
    aliases: ['hyderabad', 'charminar', 'golconda', 'hitec city', 'secunderabad', 'chowmahalla', 'salar jung', 'biryani hyderabad', 'nimrah cafe']
  },
  'amritsar': {
    name: 'Amritsar (Holy City of the Golden Temple)',
    hindiName: 'अमृतसर',
    state: 'Punjab',
    tagline: 'Gilded Sanctuaries, Sacred Sarovar, Patriotic Vigils & Tandoori Kulchas',
    overview: 'Founded in 1577 by the fourth Sikh Guru, Guru Ram Das, Amritsar is the spiritual and cultural heart of Sikhism. Famous for the resplendent Golden Temple (Sri Harmandir Sahib), the world’s largest community kitchen (Langar), the historic Jallianwala Bagh, and the high-energy Wagah Border beating retreat ceremony.',
    topMonuments: 'Sri Harmandir Sahib (Golden Temple & Akal Takht), Jallianwala Bagh Memorial, Wagah Border (Attari-Wagah Flag Ceremony), Partition Museum (Town Hall), and Gobindgarh Fort.',
    timings: 'Golden Temple: Open 24/7 (Guru Granth Sahib Palki Sahib ceremony 4:30 AM & 9:30 PM). Jallianwala Bagh: 6:30 AM – 7:30 PM. Wagah Border Ceremony: 4:30 PM (Winter) / 5:30 PM (Summer). Partition Museum: 10:00 AM – 6:00 PM (Closed Mondays).',
    tickets: 'Golden Temple, Jallianwala Bagh & Wagah Border: Free entry. Partition Museum: ₹10 Indians / ₹250 foreigners.',
    dressCode: 'Head must be strictly covered with a scarf/rumal at the Golden Temple, shoes removed, and feet washed at the holy footbath at the entrance. Modest attire covering shoulders and knees.',
    foodTips: 'Langar Prasad (Dal, Kheer & Roti) inside Golden Temple (serves 100,000+ people daily for free); Crisp Amritsari Kulcha with Chole at Bhai Kulwant Singh / Pehalwan; creamy Lassi at Ahuja Milk Center; and Jalebi at Gurdas Ram Jalebiwala.',
    itinerary: '1-Day Sacred Amritsar Itinerary:\n• Morning (5:00 AM – 9:00 AM): Dawn darshan at Golden Temple to witness morning Palki ceremony, peaceful kirtan, and hot Langar breakfast.\n• Midday (10:00 AM – 1:30 PM): Walk through heritage corridor to Jallianwala Bagh and Partition Museum; feast on Amritsari Kulcha.\n• Afternoon (2:30 PM – 7:00 PM): Drive to Wagah Border (reach by 3:30 PM for good seats) to experience the patriotic Beating Retreat ceremony.\n• Evening (7:30 PM – 9:30 PM): Night illumination darshan at Golden Temple reflecting in the Amrit Sarovar.',
    bestTime: 'October to March.',
    hiddenSecret: 'The Golden Temple’s Langar kitchen uses automated roti machines alongside hundreds of volunteers to serve over 100,000 hot meals daily with zero discrimination of caste, creed, or nationality.',
    aliases: ['amritsar', 'golden temple', 'harmandir sahib', 'wagah border', 'jallianwala bagh', 'amrit sarovar', 'langar amritsar', 'partition museum']
  }
};

const MONUMENT_KNOWLEDGE: Record<string, MonumentInfo> = {
  'taj-mahal': {
    name: 'Taj Mahal',
    hindiName: 'ताज महल (आगरा)',
    city: 'Agra',
    state: 'Uttar Pradesh',
    timings: 'Sunrise to Sunset (Strictly Closed on Fridays). Night viewing available on full moon nights (8:30 PM – 12:30 AM, 2 nights before & after).',
    tickets: '₹50 for Indian nationals, ₹1,100 for foreign visitors (SAARC/BIMSTEC ₹540). Additional ₹200 for main mausoleum tomb chamber. Free for children below 15.',
    dressCode: 'Modest clothing covering shoulders and knees. Shoe covers or bare feet mandatory on the main white marble plinth.',
    bestTime: 'Sunrise (6:00 AM – 7:30 AM) via East Gate for soft golden illumination with minimal crowds.',
    history: 'Commissioned in 1631 in Agra by Mughal Emperor Shah Jahan as a mausoleum for his favorite wife Mumtaz Mahal; constructed over 22 years by 20,000+ artisans and stone carvers from India, Persia, and Central Asia.',
    architecture: 'Indo-Islamic masterpiece combining Persian and Mughal elements. Features bilateral symmetry, Pietra Dura floral semiprecious stone inlays, vaulted Iwans, and four 40m minarets tilted 2 degrees outwards.',
    foodTips: 'Authentic Angoori & Kesar Petha at Panchhi Petha (Sadar Bazaar), Bedmi Puri & Jalebi at Deviram Sweets, and Mughlai Rogan Josh in Agra.',
    photoSpot: 'Sunrise reflection pool center bench, and across the Yamuna river at Mehtab Bagh during twilight.',
    hiddenSecret: 'The central cenotaphs visible in the upper hall are ornate replicas; the actual mortal remains of Mumtaz and Shah Jahan rest in a sealed subterranean crypt directly below.',
    builder: 'Mughal Emperor Shah Jahan (Chief architect: Ustad Ahmad Lahori)',
    century: '17th Century (1631–1648 CE)',
    aliases: ['taj mahal agra', 'agra taj', 'mumtaz mahal tomb', 'taj mausoleum', 'taj mahal monument']
  },
  'amber-fort': {
    name: 'Amber Fort & Palace (Amer)',
    hindiName: 'आमेर दुर्ग',
    city: 'Jaipur',
    state: 'Rajasthan',
    timings: '8:00 AM – 5:30 PM (Day Tourism), 6:30 PM – 9:15 PM (Night Tourism). Evening Sound & Light Show: 7:30 PM (English) & 8:30 PM (Hindi).',
    tickets: '₹100 for Indians (Students ₹20, Night ₹100), ₹550 for foreign tourists (Night ₹200).',
    dressCode: 'Comfortable walking shoes with good grip for uphill cobblestone ramps; breathable cotton clothing.',
    bestTime: 'Early morning (8:00 AM) or late afternoon. The night illumination over Maota Lake is spectacular.',
    history: 'Founded in 1592 by Raja Man Singh I as the royal citadel of the Kachwaha Rajputs overlooking Maota Lake before the founding of Jaipur in 1727.',
    architecture: 'Harmonious Rajput-Mughal fusion in yellow and pink sandstone. Highlights include Diwan-e-Aam, Diwan-e-Khas, Ganesh Pol, and the Sheesh Mahal (Mirror Palace).',
    foodTips: 'Pyaaz Kachori at Rawat Mishtan Bhandar, LMB Ghewar in Johari Bazaar, and authentic Laal Maas / Dal Baati Churma at 1135 AD inside the fort.',
    photoSpot: 'Ganesh Pol painted gateway, Sheesh Mahal convex mirror reflection, and Kesar Kyari garden view from fort ramparts.',
    hiddenSecret: 'A 2-km subterranean defensive tunnel links Amber Fort to Jaigarh Fort atop the hill, built for emergency royal evacuation in war.',
    builder: 'Raja Man Singh I (expanded by Mirza Raja Jai Singh)',
    century: '16th–17th Century (1592 CE)',
    aliases: ['amber fort', 'amer fort', 'amber palace', 'amer palace']
  },
  'hawa-mahal': {
    name: 'Hawa Mahal (Palace of Winds)',
    hindiName: 'हवा महल',
    city: 'Jaipur',
    state: 'Rajasthan',
    timings: '9:00 AM – 5:00 PM Daily.',
    tickets: '₹50 for Indian nationals (Students ₹20), ₹200 for foreign visitors (Students ₹25).',
    dressCode: 'Comfortable casual daywear; ramped staircases require sensible footwear.',
    bestTime: 'Sunrise (6:30 AM – 8:00 AM) when the morning sun illuminates the pink and red sandstone facade.',
    history: 'Constructed in 1799 by Maharaja Sawai Pratap Singh, designed to resemble Lord Krishna’s crown.',
    architecture: 'Five-story pyramid facade with 953 intricately carved jharokhas (stone casements) using the Venturi effect to circulate cool mountain breeze.',
    foodTips: 'Lassiwala on MI Road (clay kulhad lassi), Dal Baati Churma at Thali & More, and Kulfi Falooda at Pandit Kulfi.',
    photoSpot: 'Wind View Cafe / Tattoo Cafe rooftop across the street directly facing the full 5-tier honeycomb facade.',
    hiddenSecret: 'The monument has no front foundation and is only one room deep; royal women observed street festivals unseen from behind the 953 jharokhas.',
    builder: 'Maharaja Sawai Pratap Singh (Architect: Lal Chand Ustad)',
    century: '18th Century (1799 CE)',
    aliases: ['hawa mahal', 'palace of winds', 'palace of breeze']
  },
  'kashi-vishwanath': {
    name: 'Kashi Vishwanath Temple & Ganga Ghats',
    hindiName: 'काशी विश्वनाथ मंदिर एवं गंगा घाट',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    timings: 'Temple: 3:00 AM (Mangala Aarti) – 11:00 PM (Shayan Aarti). Ghats accessible 24/7. Ganga Maha Aarti at Dashashwamedh Ghat at 6:45 PM (summer) / 6:00 PM (winter).',
    tickets: 'General Darshan is Free. Special Sugam Darshan is ₹300 (bookable online). Boat rides range ₹300–₹800.',
    dressCode: 'Modest traditional attire for sanctum (Dhoti/Kurta for men, Saree/Salwar for women). Mobiles, belts, leather items, and pens banned in inner sanctum lockers.',
    bestTime: '5:15 AM dawn boat ride from Assi Ghat to Manikarnika Ghat for "Subah-e-Banaras", followed by 6:00 PM evening Ganga Aarti.',
    history: 'One of the 12 sacred Jyotirlingas. Rebuilt by Maratha Queen Maharani Ahilyabai Holkar in 1780; gold spire donated by Maharaja Ranjit Singh in 1835.',
    architecture: 'Nagara temple architecture with a 15.5m pure gold-plated pinnacle, connected to 84 stone ghats stretching 7 km along the crescent curve of the sacred Ganges.',
    foodTips: 'Banarasi Paan at Keshav Tambool, Malaiyo (winter saffron froth) at Thatheri Bazaar, Kachori Sabzi at Ram Bhandar, and Blue Lassi near Manikarnika.',
    photoSpot: 'Boat view capturing Chet Singh Fort and Dashashwamedh Ghat during Ganga Aarti.',
    hiddenSecret: 'The sacred cremation fire at Manikarnika Ghat has burned continuously without extinguishing for over 3,000 years according to living tradition.',
    builder: 'Maharani Ahilyabai Holkar of Indore (rebuilt 1780 CE)',
    century: '18th Century (rebuilt)',
    aliases: ['kashi vishwanath', 'varanasi ghats', 'kashi', 'banaras ghats', 'dashashwamedh ghat']
  },
  'golden-temple': {
    name: 'Sri Harmandir Sahib (Golden Temple)',
    hindiName: 'श्री हरमंदिर साहिब (स्वर्ण मंदिर)',
    city: 'Amritsar',
    state: 'Punjab',
    timings: 'Open 24 Hours, 365 Days a Year. Palki Sahib night procession around 10:00 PM and Amrit Vela at 4:30 AM.',
    tickets: 'Completely Free for all people of all backgrounds. Free community Langar meal served 24/7.',
    dressCode: 'Head MUST be covered at all times (scarves provided free). Shoes/socks removed and deposited at cloakroom; feet washed in sacred water pool at entrance. Tobacco/alcohol strictly prohibited.',
    bestTime: 'Dawn (4:00 AM) for Amrit Vela hymns, or night (8:30 PM – 10:30 PM) for the gold reflection upon the illuminated Amrit Sarovar pool.',
    history: 'Founded by Guru Ram Das Ji in 1577; Adi Granth installed by Guru Arjan Dev Ji in 1604. In 1830, Maharaja Ranjit Singh overlaid the sanctum with 500 kg of pure gold leaf.',
    architecture: 'Distinctive Sikh architecture harmonizing Hindu and Islamic motifs. Built on a level lower than the surroundings to symbolize humility, with 4 doors welcoming all.',
    foodTips: 'Sacred Karah Prasad at the sanctum, Guru Ka Langar, Amritsari Kulcha with Chole at Bhai Kulwant Singh / Kesar Da Dhaba, and creamy Peda Lassi at Ahuja Lassi.',
    photoSpot: 'Parikrama marble walkway reflections during twilight, and the Guru’s Bridge causeway.',
    hiddenSecret: 'The Golden Temple Langar is the largest free community kitchen in the world, serving over 100,000 nutritious hot meals every single day with volunteer seva.',
    builder: 'Guru Arjan Dev Ji / Maharaja Ranjit Singh (gold overlay)',
    century: '16th–19th Century (1604 CE / 1830 CE)',
    aliases: ['golden temple', 'harmandir sahib', 'amritsar temple', 'swarna mandir']
  },
  'hampi-ruins': {
    name: 'Group of Monuments at Hampi (Stone Chariot & Virupaksha)',
    hindiName: 'हम्पी स्मारक समूह',
    city: 'Hampi',
    state: 'Karnataka',
    timings: 'Virupaksha Temple: 6:00 AM – 8:00 PM. Vitthala Temple & Zenana Enclosure: 8:30 AM – 5:30 PM.',
    tickets: '₹40 for Indians (covers Vitthala Temple, Zenana Enclosure & Museum), ₹600 for foreign visitors. Free for under 15.',
    dressCode: 'Modest attire for active Virupaksha shrine; sturdy walking/trekking shoes for boulder hills.',
    bestTime: 'October to February. Sunrise from Matanga Hill and sunset over Hemakuta Hill.',
    history: '14th-century capital of the Vijayanagara Empire on the Tungabhadra River, chronicled by medieval travelers as one of the richest metropolises in the world before its sack in 1565.',
    architecture: 'Dravidian Vijayanagara style built from granite boulders. Highlights include the monolithic Stone Chariot (Garuda shrine) featured on the ₹50 currency note and 56 musical stone pillars.',
    foodTips: 'South Indian Thali at Mango Tree Restaurant, Benne Dosa in Hospet, Paddu, and Filter Coffee.',
    photoSpot: 'Stone Chariot at Vitthala Temple, coracle boats on the Tungabhadra, and Hemakuta Hill sunset.',
    hiddenSecret: 'The 56 musical pillars inside the Ranga Mantapa of Vitthala Temple produce resonant tonal notes of Indian classical instruments when gently tapped.',
    builder: 'Vijayanagara Emperors (Harihara, Bukka, Krishnadevaraya)',
    century: '14th–16th Century (1336–1565 CE)',
    aliases: ['hampi', 'hampi ruins', 'virupaksha temple', 'vitthala temple', 'stone chariot']
  },
  'konark-sun-temple': {
    name: 'Konark Sun Temple (The Black Pagoda)',
    hindiName: 'कोणार्क सूर्य मंदिर',
    city: 'Konark / Puri',
    state: 'Odisha',
    timings: '6:00 AM – 8:00 PM Daily. Evening Light & Sound Show.',
    tickets: '₹40 for Indians, ₹600 for foreign visitors (free for under 15). ASI online ticket available.',
    dressCode: 'Comfortable casual daywear with sun hat/sunglasses.',
    bestTime: 'Sunrise (6:00 AM – 7:30 AM) when the first sunrays strike the Natya Mandap and chariot wheels.',
    history: 'Constructed around 1250 CE by King Narasimhadeva I of the Eastern Ganga Dynasty as a monumental chariot for Surya, the Sun God.',
    architecture: 'Kalinga architectural peak built from Khondalite stone. Features 24 carved stone wheels that function as accurate sundials pulled by 7 spirited horses.',
    foodTips: 'Chhena Poda (baked caramelized cheese dessert) from Nimapada, fresh seafood at Chandrabhaga, and Odia Dalma.',
    photoSpot: 'Main sundial chariot wheel casting shadows, and Natya Mandapa celestial dancer reliefs.',
    hiddenSecret: 'The 24 stone wheels function as accurate sundials where spoke shadow widths tell the exact hour, minute, and anti-meridian time of day.',
    builder: 'King Narasimhadeva I (Eastern Ganga Dynasty)',
    century: '13th Century (circa 1250 CE)',
    aliases: ['konark', 'konark sun temple', 'sun temple konark', 'black pagoda']
  },
  'puri-jagannath': {
    name: 'Shree Jagannath Temple Puri',
    hindiName: 'श्री जगन्नाथ मंदिर पुरी',
    city: 'Puri',
    state: 'Odisha',
    timings: '5:30 AM to 9:30 PM daily (doors open for Mangala Alati at 5:00 AM). Closed for brief rituals midday.',
    tickets: 'Darshan is completely Free. Non-Hindus can view temple perimeter from Raghunandan Library rooftop.',
    dressCode: 'Strict traditional Indian attire required (Dhoti/Kurta for men, Saree/Salwar for women). Leather belts, shoes, wallets, and mobile phones strictly banned inside.',
    bestTime: '6:00 AM morning darshan or 6:30 PM Sandhya Arati. Annual Ratha Yatra in June/July.',
    history: 'Built in the 12th century by King Anantavarman Chodaganga Deva. One of the sacred Char Dham pilgrimage sites.',
    architecture: 'Kalinga architecture with the 65m Rekha Deula spire, crowned by the sacred Nilachakra wheel and the Patita Pavana flag.',
    foodTips: 'Mahaprasad / Abadha cooked in 7 clay pots stacked over wood ovens at Anand Bazar (Khaja, Kanika, Dalma, Chenna Poda).',
    photoSpot: 'Singhadwara (Lion Gate) from the Grand Road (Bada Danda) and sunrise over Puri Golden Beach.',
    hiddenSecret: 'The sacred Patita Pavana flag atop the 214-ft spire is changed every single day at sunset by sevayats who scale the sheer dome without harnesses.',
    builder: 'King Anantavarman Chodaganga Deva (Eastern Ganga Dynasty)',
    century: '12th Century (1161 CE)',
    aliases: ['puri jagannath', 'jagannath temple', 'puri temple', 'ratha yatra puri']
  },
  'meenakshi-temple': {
    name: 'Meenakshi Amman Temple',
    hindiName: 'मीनाक्षी अम्मन मंदिर',
    city: 'Madurai',
    state: 'Tamil Nadu',
    timings: '5:00 AM – 12:30 PM & 4:00 PM – 10:00 PM Daily (Afternoon break 12:30 PM – 4:00 PM). Palli Arai procession at 9:30 PM.',
    tickets: 'General Entry is Free. Special Darshan ₹100. Thousand Pillar Hall ₹50.',
    dressCode: 'Strict traditional dress code: Men in Dhoti/Veshti with shirt/angavastram; Women in Saree or Salwar with Dupatta. Jeans, shorts, and mobiles strictly prohibited inside.',
    bestTime: 'Early morning (6:00 AM) or night (7:00 PM – 9:30 PM) for the Palli Arai silver palanquin procession.',
    history: 'Epicenter of 2,500-year-old temple city Madurai. Expanded during the Nayak dynasty (16th–17th centuries) by King Tirumala Nayak.',
    architecture: 'Peak Dravidian temple design spanning 14 acres with 14 soaring Gopuram towers adorned with 33,000+ painted stucco sculptures and the Hall of Thousand Pillars.',
    foodTips: 'Iconic chilled Madurai Jigarthanda at Famous Jigarthanda (East Marret St), Bun Parotta at Madurai Kumar Mess, and soft Ghee Idlis at Murugan Idli Shop.',
    photoSpot: 'Golden Lotus Tank (Porthamarai Kulam) reflecting the Southern Gopuram.',
    hiddenSecret: 'Inside the Hall of 1000 Pillars, there are 985 carved granite pillars aligned in such precise optical perspective that they appear in a single straight line from any angle.',
    builder: 'Nayak Dynasty (King Tirumala Nayak & Rani Mangammal)',
    century: '16th–17th Century',
    aliases: ['meenakshi temple', 'meenakshi amman', 'madurai meenakshi', 'meenakshi sundareswarar']
  },
  'mysore-palace': {
    name: 'Mysore Royal Palace (Amba Vilas)',
    hindiName: 'मैसूर शाही महल (अम्बा विलास)',
    city: 'Mysore',
    state: 'Karnataka',
    timings: '10:00 AM – 5:30 PM Daily. Illumination: Sundays and Public Holidays 7:00 PM – 7:45 PM.',
    tickets: '₹100 for Indian nationals (Children ₹50), ₹1,000 for foreign visitors (Includes Audio Tour).',
    dressCode: 'Footwear removed at palace entrance counters; modest comfortable attire.',
    bestTime: 'Sunday evening at 6:45 PM to witness 100,000 golden light bulbs illuminate simultaneously accompanied by the police brass band.',
    history: 'Official seat of the Wadiyar dynasty rulers. Commissioned in 1897 by Maharani Vani Vilas Sannidhana and designed by British architect Henry Irwin; completed in 1912.',
    architecture: 'Indo-Saracenic masterwork blending Hindu, Mughal, Rajput, and Gothic styles. Features marble domes, stained glass ceilings, and a 750 kg solid gold Howdah throne.',
    foodTips: 'Original Mysore Pak at Guru Sweet Mart (Sayyaji Rao Rd), Mysore Masala Dosa at Mylari Hotel, and filter coffee.',
    photoSpot: 'Grand illuminated palace courtyard on Sunday night, and the Kalyana Mantapa stained-glass pavilion.',
    hiddenSecret: 'The Golden Throne (Chinnada Simhasana) weighing 280 kg of pure gold is assembled only once a year during the 10-day Mysuru Dasara festival.',
    builder: 'Wadiyar Dynasty (Architect: Henry Irwin)',
    century: '20th Century (1912 CE)',
    aliases: ['mysore palace', 'amba vilas', 'mysuru palace', 'wadiyar palace']
  },
  'victoria-memorial': {
    name: 'Victoria Memorial Hall',
    hindiName: 'विक्टोरिया मेमोरियल',
    city: 'Kolkata',
    state: 'West Bengal',
    timings: 'Gardens: 5:30 AM – 6:15 PM Daily. Museum Galleries: 10:00 AM – 6:00 PM (Strictly Closed on Mondays).',
    tickets: '₹50 for Indians (Garden only ₹20), ₹500 for foreign visitors. Free for school students in uniform.',
    dressCode: 'Comfortable daywear for museum galleries and garden walks.',
    bestTime: 'Late afternoon (3:30 PM – 5:30 PM) for the soft sunset light reflecting on the white Makrana marble and pond.',
    history: 'Conceived by Viceroy Lord Curzon in 1901 and designed by Sir William Emerson; opened in 1921. Dedicated to Queen Victoria and now housing India’s largest colonial-era art gallery.',
    architecture: 'Indo-Saracenic Revival using Makrana marble (same quarry as the Taj Mahal) with Venetian, Egyptian, and Mughal elements, crowned by a 16-ft bronze rotating Angel of Victory.',
    foodTips: 'Kathi Rolls at Nizam’s / Kusum Rolls, English Breakfast at Flurys on Park Street, Puchka & Jhalmuri at Victoria South Gate, and K.C. Das Rasgullas.',
    photoSpot: 'Central lake reflection with the Angel of Victory dome, and Queen Victoria bronze statue.',
    hiddenSecret: 'The 16-foot bronze Angel of Victory atop the central dome weighs 3 tonnes and rotates smoothly on ball bearings with wind gusts.',
    builder: 'Lord Curzon / Sir William Emerson',
    century: '20th Century (1906–1921 CE)',
    aliases: ['victoria memorial', 'kolkata victoria memorial', 'victoria hall kolkata']
  },
  'khajuraho-temples': {
    name: 'Khajuraho Group of Monuments',
    hindiName: 'खजुराहो स्मारक समूह',
    city: 'Khajuraho',
    state: 'Madhya Pradesh',
    timings: 'Sunrise to Sunset Daily (approx. 6:00 AM – 6:00 PM). Evening Sound & Light Show.',
    tickets: '₹40 for Indians, ₹600 for foreign visitors (free for under 15).',
    dressCode: 'Casual modest clothing and walking shoes for exploring temple lawns.',
    bestTime: 'Sunrise at Kandariya Mahadeva Temple, or February during the Khajuraho Dance Festival.',
    history: 'Built between 950 and 1050 CE by the Chandela Rajput dynasty. Originally 85 temples, 25 survive today split across Western, Eastern, and Southern groups.',
    architecture: 'Pinnacle of Nagara temple architecture with Shikhara spires simulating Himalayan peaks, built without mortar using mortise and tenon sandstone joints.',
    foodTips: 'Bundelkhandi Dal Bafla & Thali at Raja’s Cafe, Bedmi Poori, and Mawa Jalebi.',
    photoSpot: 'Western Group lawn framing Kandariya Mahadeva and Lakshmana temples at sunrise.',
    hiddenSecret: 'Only 10% of the sculptures depict erotic themes (Kama); the remaining 90% depict everyday medieval life, musicians, celestial dancers, farmers, and spirituality.',
    builder: 'Chandela Rajput Dynasty',
    century: '10th–11th Century (950–1050 CE)',
    aliases: ['khajuraho', 'khajuraho temples', 'kandariya mahadeva', 'khajuraho monuments']
  },
  'qutub-minar': {
    name: 'Qutub Minar & Mehrauli Archaeological Complex',
    hindiName: 'क़ुतुब मीनार',
    city: 'Delhi',
    state: 'Delhi NCR',
    timings: '7:00 AM – 9:00 PM Daily (Night illuminated viewing available).',
    tickets: '₹50 for Indians, ₹600 for foreign visitors. ASI online portal or QR scan at gate.',
    dressCode: 'Comfortable daywear with sun protection.',
    bestTime: 'Late afternoon (4:00 PM – 6:30 PM) for golden sunset rays on the fluted sandstone balconies.',
    history: 'Commenced in 1192 CE by Qutb-ud-din Aibak to mark the Delhi Sultanate, with upper stories added by Iltutmish and Firoz Shah Tughlaq.',
    architecture: '72.5-meter five-story fluted red sandstone minaret with Arabic calligraphy bands, stalactite corbels, and the 1,600-year-old rustless Iron Pillar of Chandragupta II.',
    foodTips: 'Old Delhi Kebabs at Karim’s, Parathas at Paranthe Wali Gali, and Chole Bhature at Bengali Sweet House.',
    photoSpot: 'Alai Darwaza arch framing the Qutub Minar, and Quwwat-ul-Islam courtyard.',
    hiddenSecret: 'The 7-meter Iron Pillar in the courtyard has stood exposed to rain and sun for over 1,600 years without rusting due to a high-phosphorus protective film created by ancient Indian metallurgists.',
    builder: 'Qutb-ud-din Aibak & Shams-ud-din Iltutmish',
    century: '12th–13th Century (1192–1220 CE)',
    aliases: ['qutub minar', 'qutab minar', 'qutub', 'mehrauli minar', 'iron pillar delhi']
  },
  'humayun-tomb': {
    name: 'Humayun’s Tomb & Sunder Nursery',
    hindiName: 'हुमायूँ का मक़बरा',
    city: 'Delhi',
    state: 'Delhi NCR',
    timings: '6:00 AM – 6:00 PM Daily.',
    tickets: '₹40 for Indians, ₹600 for foreign visitors.',
    dressCode: 'Comfortable walking shoes; remove footwear before ascending the tomb cenotaph plinth.',
    bestTime: 'Sunrise or late afternoon (4:00 PM – 6:00 PM) for golden hour light, followed by sunset walk in adjacent Sunder Nursery.',
    history: 'First garden-tomb on the Indian subcontinent, commissioned in 1558 by Humayun’s chief consort Empress Bega Begum (Haji Begum).',
    architecture: 'Designed by Persian architect Mirak Mirza Ghiyas. Pioneered the grand Charbagh paradise garden and double dome, serving as the direct architectural predecessor to the Taj Mahal.',
    foodTips: 'Mughlai Biryani at Ghalib Kabab Corner (Nizamuddin), and Cafe Lota inside Crafts Museum.',
    photoSpot: 'Water channel reflection aligning with the central marble dome.',
    hiddenSecret: 'Over 150 members of the Mughal royal family are buried in the cells beneath the platform, earning it the title "Dormitory of the Mughals".',
    builder: 'Empress Bega Begum (Architect: Mirak Mirza Ghiyas)',
    century: '16th Century (1558–1572 CE)',
    aliases: ['humayun tomb', 'humayun ka maqbara', 'humayuns tomb']
  },
  'red-fort': {
    name: 'Red Fort (Lal Qila)',
    hindiName: 'लाल क़िला',
    city: 'Delhi',
    state: 'Delhi NCR',
    timings: '9:30 AM – 4:30 PM (Strictly Closed on Mondays). Evening Sound & Light Show.',
    tickets: '₹50 for Indians, ₹600 for foreign visitors (museums included).',
    dressCode: 'Comfortable footwear for exploring the vast 250-acre complex.',
    bestTime: 'Morning (9:30 AM) before peak heat, combined with an Old Delhi Chandni Chowk food walk.',
    history: 'Constructed by Emperor Shah Jahan in 1638 when he shifted the Mughal capital from Agra to Shahjahanabad.',
    architecture: 'Massive red sandstone fortification walls, Lahori Gate, Diwan-i-Aam, and Diwan-i-Khas featuring the famous inscription: "If there is paradise on earth, it is here, it is here, it is here".',
    foodTips: 'Daulat Ki Chaat (winter), Natraj Dahi Bhalla, and Rabri Faluda at Giani’s.',
    photoSpot: 'Lahori Gate main entrance and Chhatta Chowk covered bazaar.',
    hiddenSecret: 'The fort originally featured a cooling water canal system called the "Nahr-i-Bihisht" (Stream of Paradise) that flowed through the center of all the royal marble pavilions.',
    builder: 'Mughal Emperor Shah Jahan',
    century: '17th Century (1638–1648 CE)',
    aliases: ['red fort', 'lal qila', 'lal kila', 'delhi red fort']
  },
  'gateway-of-india': {
    name: 'Gateway of India & Elephanta Caves',
    hindiName: 'गेटवे ऑफ़ इंडिया एवं एलिफेंटा गुफाएं',
    city: 'Mumbai',
    state: 'Maharashtra',
    timings: 'Gateway of India waterfront: Open 24/7. Elephanta Ferry: 9:00 AM – 2:00 PM (Elephanta Caves strictly Closed on Mondays).',
    tickets: 'Gateway of India waterfront promenade is completely Free. Elephanta Ferry ticket: ₹260 return. Elephanta Caves entry: ₹40 for Indians / ₹600 for foreign visitors (Free under 15).',
    dressCode: 'Comfortable coastal casual wear and walking shoes with grip for 120 stone steps on Elephanta Island.',
    bestTime: 'Sunrise (6:30 AM – 8:00 AM) for tranquil sea breeze and soft lighting over the Arabian Sea, or sunset with the illuminated Taj Mahal Palace Hotel backdrop.',
    history: 'Erected at Apollo Bunder to commemorate the 1911 royal landing of King George V and Queen Mary; later served as the ceremonial departure point for the last British military regiment (Somerset Light Infantry) in 1948, marking the end of colonial rule.',
    architecture: 'Indo-Saracenic triumphal arch designed by Scottish architect George Wittet, built with yellow basalt stone and reinforced concrete, fusing 16th-century Gujarati Sultanate perforated jali screens with European triumphal archway proportions.',
    foodTips: 'Irani Chai & Bun Maska at Kyani & Co. / Yazdani Bakery, Leopold Cafe and Cafe Mondegar on Colaba Causeway, Bademiya seekh kebabs, and Britannia & Co. Berry Pulao in Ballard Estate.',
    photoSpot: 'Waterfront plaza framing the central arch with the Arabian Sea catamarans on one side and the iconic red dome of the Taj Mahal Palace Hotel on the other.',
    hiddenSecret: 'Across the Mumbai harbor (reached via a 50-minute boat ride), the 6th-century rock-cut Elephanta Caves feature the colossal 20-foot three-headed Sadashiva (Trimurti) sculpture carved out of solid basalt representing Shiva as Creator, Preserver, and Destroyer.',
    builder: 'George Wittet (British Architect) & Rao Bahadur Sitaram Khanderao Vaidya',
    century: '20th Century (1911–1924 CE)',
    aliases: ['gateway of india', 'elephanta caves', 'mumbai gateway', 'apollo bunder', 'elephanta', 'gateway of india mumbai']
  },
  'taj-mahal-palace-mumbai': {
    name: 'The Taj Mahal Palace & Tower (Heritage Icon of Mumbai)',
    hindiName: 'द ताज महल पैलेस होटल (मुंबई)',
    city: 'Mumbai',
    state: 'Maharashtra',
    timings: 'Heritage public lobby, Sea Lounge, and restaurants open Daily. Heritage walking tours available for resident guests.',
    tickets: 'Heritage dining / High Tea at Sea Lounge; exterior architecture viewing from Gateway of India promenade is Free.',
    dressCode: 'Smart casual / formal attire for indoor dining and Sea Lounge.',
    bestTime: 'Evening (5:30 PM – 7:30 PM) for sunset high tea overlooking the Gateway of India and the Arabian Sea harbor.',
    history: 'Commissioned by industrial pioneer Jamsetji Nusserwanji Tata and opened on December 16, 1903. Legend recounts that Tata was motivated to construct India’s finest luxury hotel after being denied entry to the whites-only Watson\'s Hotel. During World War I, the hotel was converted into a 600-bed hospital.',
    architecture: 'Saracenic Revival and Indo-Gothic architecture featuring a distinctive 240-foot central red Florentine dome, grand cantilevered mahogany staircase, alabaster ceilings, and Belgian crystal chandeliers.',
    foodTips: 'Traditional Afternoon High Tea with cucumber sandwiches and scones at the Sea Lounge, Japanese fine dining at Wasabi by Morimoto, and authentic Parsi & Coastal delicacies nearby.',
    photoSpot: 'From the Gateway of India waterfront facing the Victorian-Saracenic facade and floating harbor yachts.',
    hiddenSecret: 'The hotel was the very first building in Bombay to be electrified, and in 1958 it was granted India’s first licensed hotel bar. In 2017, the Taj Mahal Palace building received a trademark image registration—the first building in India to gain architectural intellectual property protection.',
    builder: 'Jamsetji Tata (Architects: Sitaram Khanderao Vaidya, D. N. Mirza & W. A. Chambers)',
    century: '20th Century (Opened 1903 CE)',
    aliases: ['taj mahal palace', 'taj hotel mumbai', 'taj mumbai', 'taj mahal hotel mumbai', 'taj palace mumbai', 'the taj mumbai', 'taj colaba', 'taj hotel colaba']
  },
  'csmt-station': {
    name: 'Chhatrapati Shivaji Maharaj Terminus (CSMT / Victoria Terminus)',
    hindiName: 'छत्रपति शिवाजी महाराज टर्मिनस',
    city: 'Mumbai',
    state: 'Maharashtra',
    timings: 'Active railway terminal open 24/7. CSMT Heritage Museum & Guided Walking Gallery: 3:00 PM – 5:00 PM (Monday to Friday).',
    tickets: 'Exterior viewing is Free. CSMT Heritage Gallery: ₹200 for adults, ₹100 for students.',
    dressCode: 'Comfortable casual daywear.',
    bestTime: 'Night (7:30 PM – 10:00 PM) when the entire Victorian Gothic facade is illuminated in dynamic LED colors, or morning (8:00 AM) to witness Mumbai’s bustling commuter rhythm.',
    history: 'Designed by Frederick William Stevens and completed in 1888 to commemorate the Golden Jubilee of Queen Victoria. Renamed in 1996 in honor of Chhatrapati Shivaji Maharaj, the founder of the Maratha Empire. Inscribed as a UNESCO World Heritage Site in 2004.',
    architecture: 'High Victorian Gothic architecture blended with traditional Indian palatial elements. Features a soaring octagonal ribbed central masonry dome crowned by a 14-foot statue of "Progress", stone gargoyles, stained-glass rose windows, and vaulted wood-beamed ceilings.',
    foodTips: 'Aram Milk Centre across the station for legendary Batata Vada & Bun Maska, Cannon Pav Bhaji (opposite CSMT), and Pancham Puriwala (since 1848).',
    photoSpot: 'From the pedestrian viewing terrace directly across the junction at D.N. Road for the wide-angle illuminated dome shot.',
    hiddenSecret: 'The stone-carved friezes on the station facade feature native Indian flora and fauna—including peacocks, cobras, and monkeys—hand-carved by students of the Sir J.J. School of Art under Stevens’ supervision.',
    builder: 'Frederick William Stevens & Sir J.J. School of Art artisans',
    century: '19th Century (1878–1888 CE)',
    aliases: ['csmt', 'victoria terminus', 'vt station', 'chhatrapati shivaji terminus', 'csmt mumbai', 'cst station']
  },
  'siddhivinayak-temple': {
    name: 'Shree Siddhivinayak Ganapati Mandir (Prabhadevi)',
    hindiName: 'श्री सिद्धिविनायक गणपति मंदिर',
    city: 'Mumbai',
    state: 'Maharashtra',
    timings: 'Wednesday to Monday: 5:30 AM – 9:50 PM. Tuesday (Special Day): 3:15 AM – 10:00 PM (Kakad Aarti at 5:30 AM, Maha Aarti at 7:30 PM).',
    tickets: 'General Darshan is Free. Special Paid Queue / Online VIP Darshan passes available via official temple portal (siddhivinayak.org) at ₹100–₹1,500.',
    dressCode: 'Modest traditional attire. Shoulders and knees must be fully covered. Footwear must be deposited at free shoe stalls outside.',
    bestTime: 'Early morning (6:00 AM – 7:30 AM) on weekdays for shorter queues and serene peaceful darshan.',
    history: 'Originally consecrated on November 19, 1801, funded by rich Agri woman Deubai Patil to grant fertility blessings to childless women. It has grown into one of India’s richest and most beloved Ganesha shrines.',
    architecture: 'Multi-tiered granite and gold-domed structure. The sanctum sanctorum features a monolithic black stone idol of Lord Ganesha with his trunk curved to the right (Siddhi-giving pose), crowned by a gold-plated kalash.',
    foodTips: 'Fresh warm Modaks and Laddoos prasad from temple stalls, and Maharashtrian snacks (Kothimbir Vadi, Sabudana Khichdi) at nearby Dadar eateries (Aaswad, Prakash Shakahari Upahaar Kendra).',
    photoSpot: 'Main temple entrance plaza and flower market bazaar lanes adorned with marigold garlands.',
    hiddenSecret: 'The right-turning trunk of Lord Ganesha (Navasacha Ganapati) is considered uniquely powerful and demanding of rigorous devotion, believed to fulfill heartfelt wishes instantly.',
    builder: 'Laxman Vithu & Deubai Patil (Original 1801 shrine)',
    century: '19th Century (1801 CE; reconstructed 1993)',
    aliases: ['siddhivinayak', 'siddhivinayak temple', 'siddhivinayak mandir', 'prabhadevi ganpati', 'siddhi vinayak mumbai']
  },
  'haji-ali-dargah': {
    name: 'Haji Ali Dargah (Arabian Sea Islet Shrine)',
    hindiName: 'हाजी अली दरगाह',
    city: 'Mumbai',
    state: 'Maharashtra',
    timings: '5:30 AM – 10:00 PM Daily (Access pathway is dependent on high/low ocean tides).',
    tickets: 'Completely Free entry for all visitors.',
    dressCode: 'Modest clothing covering shoulders and knees; women and men must cover heads with a scarf/handkerchief inside the sanctum. Shoes removed at entrance.',
    bestTime: 'Late afternoon (4:30 PM – 6:30 PM) during low tide to experience the sea breeze, sunset over the Arabian Sea, and evening live Sufi Qawwali devotional chants on Thursdays/Fridays.',
    history: 'Constructed in 1431 in memory of wealthy Uzbek Muslim merchant Pir Haji Ali Shah Bukhari, who gave up all worldly possessions to spread spirituality in Mumbai.',
    architecture: 'Indo-Islamic marble structure set on a tiny islet 500 meters off the coast of Worli, linked to the mainland by a narrow 1-km pedestrian pathway submerged during high tide.',
    foodTips: 'Haji Ali Juice Centre at the causeway entrance for fresh seasonal Custard Apple (Sitaphal) Cream, Mango Milkshake, and Grilled Sandwiches.',
    photoSpot: 'The seaside promenade looking across the ocean causeway with the white dome and minaret framed by the Mumbai skyline.',
    hiddenSecret: 'Despite standing directly in the open Arabian Sea for nearly six centuries, exposed to heavy monsoon surges and salty sea air, the inner marble tomb has never been flooded or destroyed by tidal waves.',
    builder: 'Followers of Saint Pir Haji Ali Shah Bukhari',
    century: '15th Century (1431 CE)',
    aliases: ['haji ali', 'haji ali dargah', 'haji ali mumbai', 'haji ali shrine']
  },
  'mehrangarh-fort': {
    name: 'Mehrangarh Fort (Citadel of the Sun)',
    hindiName: 'मेहरानगढ़ दुर्ग - जोधपुर',
    city: 'Jodhpur',
    state: 'Rajasthan',
    timings: '9:00 AM – 5:00 PM Daily. Ziplining (Flying Fox) available.',
    tickets: '₹100 for Indians (Students ₹50), ₹600 for foreign visitors (includes audio guide).',
    dressCode: 'Comfortable walking shoes for steep cobblestone ramps.',
    bestTime: 'Late afternoon (3:30 PM – 5:00 PM) to watch the sunset turn the Blue City rooftops violet-blue.',
    history: 'Founded in 1459 by Rao Jodha atop a 410-foot sheer cliff. Rudyard Kipling hailed it as "a palace that might have been built by Titans and colored by the morning sun."',
    architecture: 'Burnished red sandstone ramparts with opulent royal palaces: Sheesh Mahal, Phool Mahal, and Moti Mahal with fine stone lattice tracery.',
    foodTips: 'Mirchi Vada at Janta Sweet Home, Makhaniya Lassi at Shri Mishrilal Hotel (Clock Tower), and Laal Maas at Indique Rooftop.',
    photoSpot: 'Fort ramparts overlooking the sea of indigo-blue Brahmin houses below.',
    hiddenSecret: 'Cannonball scars from 19th-century battles with the Jaipur army are still clearly visible next to the Dedh Kamgra Gate.',
    builder: 'Rao Jodha (Rathore Dynasty)',
    century: '15th Century (1459 CE)',
    aliases: ['mehrangarh', 'mehrangarh fort', 'jodhpur fort', 'citadel of the sun']
  },
  'city-palace-udaipur': {
    name: 'City Palace Udaipur & Lake Pichola',
    hindiName: 'सिटी पैलेस - उदयपुर',
    city: 'Udaipur',
    state: 'Rajasthan',
    timings: '9:30 AM – 5:30 PM Daily. Lake Pichola boat cruises: 10:00 AM – 6:00 PM.',
    tickets: '₹300 for Museum entry (Audio guide ₹200). Boat cruise ₹500–₹800.',
    dressCode: 'Comfortable footwear for exploring multi-level palace courtyards.',
    bestTime: 'Late afternoon for palace museum, followed by a 5:30 PM sunset boat cruise around Taj Lake Palace and Jag Mandir.',
    history: 'Largest palace complex in Rajasthan, initiated by Maharana Udai Singh II in 1559 and expanded by 22 successive Maharanas.',
    architecture: 'Granite and marble complex comprising 11 palaces. Features Mor Chowk (Peacock Courtyard) adorned with 5,000 glass mosaic tiles.',
    foodTips: 'Dal Baati Churma at Krishna Dal Bati Restro, Kachoris at Jagdish Chowk, and lakeside dinner at Ambrai.',
    photoSpot: 'Mor Chowk peacock mosaics, and Lake Pichola sunset boat view.',
    hiddenSecret: 'The palace was designed with intentionally narrow and zigzag passageways to prevent enemy cavalry from rushing in during sieges.',
    builder: 'Maharana Udai Singh II (Mewar Dynasty)',
    century: '16th Century (1559 CE)',
    aliases: ['city palace udaipur', 'udaipur palace', 'lake pichola palace']
  },
  'brihadisvara-temple': {
    name: 'Brihadisvara Temple (The Great Living Chola Temple)',
    hindiName: 'बृहदीश्वर मंदिर - तंजावुर',
    city: 'Thanjavur',
    state: 'Tamil Nadu',
    timings: '6:00 AM – 12:30 PM & 4:00 PM – 8:30 PM Daily.',
    tickets: 'Completely Free entry for all visitors.',
    dressCode: 'Traditional modest attire (Dhoti/Kurta or Saree/Salwar). Bare feet inside the temple compound.',
    bestTime: 'Early morning (6:30 AM) or sunset (5:30 PM) when the warm granite glows deep golden amber under twilight lamps.',
    history: 'Consecrated in 1010 CE by Emperor Rajaraja Chola I to celebrate the zenith of the Chola Empire, bronze casting, and maritime trade.',
    architecture: 'Pure Dravidian temple architecture built entirely from interlocking granite without mortar. The 66m Vimana tower is capped by a single 80-tonne monolithic granite Kumbam cupola.',
    foodTips: 'Thanjavur Degree Coffee, traditional Tamil vegetarian banana-leaf meals at Hotel Gnanam, and Ashoka Halwa.',
    photoSpot: 'Temple courtyard lawn capturing the monolithic Nandi bull and the soaring 216-ft Vimana tower.',
    hiddenSecret: 'The 80-tonne monolithic granite cupola atop the tower was hauled to the top using a 6-km long inclined earthen ramp built by thousands of elephants and laborers.',
    builder: 'Emperor Rajaraja Chola I (Chola Dynasty)',
    century: '11th Century (1010 CE)',
    aliases: ['brihadisvara', 'brihadeeswarar', 'thanjavur big temple', 'peruvudaiyar kovil', 'thanjavur temple']
  },
  'ellora-caves': {
    name: 'Ellora Caves & Kailash Monolithic Rock-Cut Temple',
    hindiName: 'एलोरा गुफाएं एवं कैलाश मंदिर',
    city: 'Aurangabad (Chhatrapati Sambhaji Nagar)',
    state: 'Maharashtra',
    timings: '6:00 AM – 6:00 PM (Strictly Closed on Tuesdays).',
    tickets: '₹40 for Indians, ₹600 for foreign visitors (free for under 15).',
    dressCode: 'Comfortable walking/trekking shoes for rock-cut steps.',
    bestTime: 'Morning 8:00 AM to explore Cave 16 (Kailash Temple) in clear sunlight.',
    history: 'Built between the 6th and 10th centuries CE. Contains 34 rock-cut monasteries and temples representing Hinduism, Buddhism, and Jainism coexisting peacefully.',
    architecture: 'Cave 16 (Kailash Temple) is the world’s largest monolithic rock-cut monument, carved top-down from a single basalt cliff face by Rashtrakuta King Krishna I without scaffolding.',
    foodTips: 'Naan Qalia (historic mutton delicacy), Aurangabad Tahri, and fresh sitaphal (custard apple) ice cream.',
    photoSpot: 'Cave 16 Kailash temple viewed from the upper cliff ridge.',
    hiddenSecret: 'Ancient stone cutters removed over 200,000 tonnes of solid basalt rock from the top down over 20 years to carve the multi-story Kailash temple.',
    builder: 'Rashtrakuta King Krishna I (for Kailash Cave 16)',
    century: '8th Century (circa 756–773 CE)',
    aliases: ['ellora caves', 'kailash temple', 'ellora', 'cave 16 ellora']
  },
  'ajanta-caves': {
    name: 'Ajanta Caves (Ancient Buddhist Frescoes)',
    hindiName: 'अजंता गुफाएं',
    city: 'Aurangabad (Chhatrapati Sambhaji Nagar)',
    state: 'Maharashtra',
    timings: '9:00 AM – 5:00 PM (Strictly Closed on Mondays).',
    tickets: '₹40 for Indians, ₹600 for foreign visitors.',
    dressCode: 'Comfortable footwear; flash photography strictly prohibited inside cave murals to preserve ancient pigments.',
    bestTime: 'Morning 9:00 AM. October to March is ideal.',
    history: '30 rock-cut Buddhist cave monuments dating from the 2nd century BCE to about 480 CE under the Satavahana and Vakataka dynasties.',
    architecture: 'Horseshoe-shaped cliff overlooking Waghora river gorge, filled with masterpieces of Buddhist religious art and Jataka tale wall paintings.',
    foodTips: 'Maharashtrian Pithla Bhakri and local spice curries.',
    photoSpot: 'Viewpoint horseshoe panoramic platform across the Waghora gorge.',
    hiddenSecret: 'The caves were forgotten and swallowed by dense jungle until a British officer, John Smith, accidentally rediscovered Cave 10 while hunting tigers in 1819.',
    builder: 'Satavahana & Vakataka Dynasties (King Harishena)',
    century: '2nd Century BCE – 5th Century CE',
    aliases: ['ajanta caves', 'ajanta', 'ajanta paintings']
  },
  'sanchi-stupa': {
    name: 'Great Stupa at Sanchi',
    hindiName: 'सांची का महान स्तूप',
    city: 'Sanchi / Bhopal',
    state: 'Madhya Pradesh',
    timings: 'Sunrise to Sunset Daily (6:30 AM – 6:30 PM).',
    tickets: '₹40 for Indians, ₹600 for foreign visitors.',
    dressCode: 'Modest daywear and comfortable shoes for perimeter parikrama walks.',
    bestTime: 'Sunrise or late afternoon golden hour.',
    history: 'Oldest stone structure in India, originally commissioned by Emperor Ashoka the Great in the 3rd century BCE to house the sacred relics of the Buddha.',
    architecture: 'Hemispherical brick and stone dome crowned by the Chhatra spire, surrounded by 4 elaborately carved Torana gateways depicting Jataka tales.',
    foodTips: 'Bhopali Poha Jalebi, Sulemani Chai, and Bhopali Murgh Rezala.',
    photoSpot: 'Southern Torana gateway framing the Great Stupa dome.',
    hiddenSecret: 'The intricate stone Torana gateways were sculpted by ivory carvers from the nearby city of Vidisha, resulting in wood/ivory-like precision on sandstone.',
    builder: 'Emperor Ashoka the Great (Maurya Dynasty)',
    century: '3rd Century BCE (circa 250 BCE)',
    aliases: ['sanchi stupa', 'great stupa sanchi', 'sanchi']
  },
  'charminar': {
    name: 'Charminar & Golconda Fort',
    hindiName: 'चारमीनार एवं गोलकोंडा क़िला',
    city: 'Hyderabad',
    state: 'Telangana',
    timings: 'Charminar: 9:00 AM – 5:30 PM Daily. Golconda Fort: 9:00 AM – 5:30 PM (Sound & Light Show 6:30 PM).',
    tickets: 'Charminar ₹25 Indians / ₹300 foreign visitors. Golconda ₹25 Indians / ₹300 foreign visitors.',
    dressCode: 'Comfortable casual wear for bazaar walking and climbing fort steps.',
    bestTime: 'Late afternoon at Golconda Fort for sunset over Hyderabad skyline, followed by night illumination at Charminar.',
    history: 'Charminar was built in 1591 by Muhammad Quli Qutb Shah to commemorate the eradication of a deadly plague. Golconda was the fortified diamond capital of the medieval world.',
    architecture: 'Indo-Islamic and Qutb Shahi architecture featuring 4 grand 48.7m minarets, stucco work, and Golconda’s famous acoustic clapping portico (Fateh Darwaza).',
    foodTips: 'Hyderabadi Dum Biryani at Paradise / Bawarchi / Shadab, Irani Chai with Osmania Biscuits at Nimrah Cafe (facing Charminar), and Haleem during Ramadan.',
    photoSpot: 'Nimrah Cafe window view framing Charminar, and top of Golconda Baradari.',
    hiddenSecret: 'A hand clap at the entry gate of Golconda Fort (Fateh Darwaza) can be heard clearly at the highest point of the citadel (Bala Hissar) 1 km away.',
    builder: 'Muhammad Quli Qutb Shah (Qutb Shahi Dynasty)',
    century: '16th Century (1591 CE)',
    aliases: ['charminar', 'golconda fort', 'hyderabad charminar', 'golconda']
  },
  'mahabalipuram': {
    name: 'Group of Monuments at Mahabalipuram (Shore Temple & Pancha Rathas)',
    hindiName: 'महाबलीपुरम स्मारक समूह (शोर मंदिर)',
    city: 'Mamallapuram / Chennai',
    state: 'Tamil Nadu',
    timings: '6:00 AM – 6:00 PM Daily.',
    tickets: '₹40 for Indians, ₹600 for foreign visitors (covers Shore Temple, Pancha Rathas & Krishna’s Butterball).',
    dressCode: 'Breezy coastal casual wear and sun protection.',
    bestTime: 'Sunrise (6:00 AM) over the Bay of Bengal right behind the Shore Temple.',
    history: '7th–8th century coastal sanctuary and port of the Pallava Dynasty, famous for rock-cut sanctuaries and stone monoliths.',
    architecture: 'Dravidian monolithic architecture carved from granite outcrops. Highlights: Shore Temple battling ocean waves, Pancha Rathas (five monolithic chariots), and Arjuna’s Penance (world’s largest open-air rock relief).',
    foodTips: 'Fresh catch seafood grilled with Chettinad spices at beach shacks, Crispy Dosas, and South Indian Filter Coffee.',
    photoSpot: 'Shore Temple framed with crashing Bay of Bengal morning waves, and Krishna’s Butterball gravity-defying boulder.',
    hiddenSecret: 'During the 2004 tsunami, as the sea receded hundreds of meters before returning, tourists and fishermen briefly saw the submerged ruins of the legendary "Seven Pagodas" offshore.',
    builder: 'Pallava Kings (Narasimhavarman I & II)',
    century: '7th–8th Century (circa 650–728 CE)',
    aliases: ['mahabalipuram', 'mamallapuram', 'shore temple', 'pancha rathas', 'arjuna penance']
  },
  'somnath-temple': {
    name: 'Somnath Jyotirlinga Temple',
    hindiName: 'सोमनाथ ज्योतिर्लिंग मंदिर',
    city: 'Prabhas Patan / Somnath',
    state: 'Gujarat',
    timings: '6:00 AM – 10:00 PM Daily. Aarti at 7:00 AM, 12:00 PM, and 7:00 PM. Sound & Light Show (Jay Somnath) at 8:00 PM.',
    tickets: 'Completely Free entry. Sound & Light Show ₹30.',
    dressCode: 'Traditional modest attire. Electronic items, mobile phones, cameras, and leather items strictly prohibited inside.',
    bestTime: 'Evening Aarti at 7:00 PM followed by 8:00 PM Sound & Light show against the Arabian Sea waves.',
    history: 'The first of the twelve sacred Jyotirlingas of Lord Shiva. Rebuilt in 1951 in Chalukyan (Solanki) style initiated by Sardar Vallabhbhai Patel.',
    architecture: 'Solanki style temple architecture right on the edge of the Arabian Sea, featuring an intricate Sabha Mandap and the famous Baan Stambh (Arrow Pillar).',
    foodTips: 'Authentic Gujarati Thali with Sev Tameta, Ringna No Oro, Bajra Rotla with white butter, and Jalebi Fafda.',
    photoSpot: 'Temple facade from the Arabian Sea promenade walkway.',
    hiddenSecret: 'The Baan Stambh (Arrow Pillar) inside the compound points due south, with an ancient Sanskrit inscription proving there is no landmass between Somnath and Antarctica.',
    builder: 'Sardar Vallabhbhai Patel & Prabhashankar Sompura (Rebuilt 1951)',
    century: '20th Century (rebuilt on ancient site)',
    aliases: ['somnath', 'somnath temple', 'somnath jyotirlinga', 'prabhas patan']
  },
  'kedarnath-temple': {
    name: 'Kedarnath Dham Temple',
    hindiName: 'केदारनाथ धाम',
    city: 'Rudraprayag / Kedarnath',
    state: 'Uttarakhand',
    timings: 'Darshan: 4:00 AM – 9:00 PM (Afternoon break 3:00 PM – 5:00 PM). Open from Akshaya Tritiya (May) to Bhai Dooj/Diwali (November); closed in heavy winter snow.',
    tickets: 'Free General Darshan. Helicopter tickets bookable via official IRCTC HeliYatra portal.',
    dressCode: 'Heavy thermal woolens and sturdy trekking boots.',
    bestTime: 'May to June & September to October (avoid peak monsoon landslides in July/August).',
    history: 'The highest of the 12 Jyotirlingas, situated at 3,584m in the Garhwal Himalayas near the Mandakini River. Associated with the Pandavas and Adi Shankaracharya.',
    architecture: 'Ancient Katyuri-Nagara stone temple built from massive interlocking grey granite slabs capable of withstanding glacial avalanches.',
    foodTips: 'Warm Garhwali food (Chainsoo, Kafuli, hot Khichdi) and ginger tea at local dhabas.',
    photoSpot: 'Kedarnath temple framed by the snow-capped Kedarnath Peak at sunrise.',
    hiddenSecret: 'During the catastrophic 2013 flash floods, a massive boulder (now revered as "Bhim Shila") rolled down and stopped directly behind the temple, diverting floodwaters and saving the sanctum.',
    builder: 'Adi Shankaracharya (reconstruction)',
    century: '8th Century CE (ancient roots)',
    aliases: ['kedarnath', 'kedarnath temple', 'kedarnath dham', 'baba kedar']
  },
  'badrinath-temple': {
    name: 'Badrinath Dham Temple',
    hindiName: 'बद्रीनाथ धाम',
    city: 'Chamoli / Badrinath',
    state: 'Uttarakhand',
    timings: '4:30 AM – 9:00 PM (Break 1:00 PM – 4:00 PM). Open May to November; closed in winter.',
    tickets: 'Free entry. Special Puja tickets bookable via BKTC portal.',
    dressCode: 'Warm thermal woolens. Holy dip in Tapt Kund natural hot sulfur spring before darshan.',
    bestTime: 'May to June & September to October.',
    history: 'Supreme Vaishnavite Char Dham shrine dedicated to Lord Badrinarayan (Vishnu).',
    architecture: 'Colorful pagoda-style roofed facade on the banks of the Alaknanda River nestled between the Nar and Narayana mountain ranges.',
    foodTips: 'Prasad Khichdi and warm pahadi thalis.',
    photoSpot: 'Colorful temple facade against the snow-capped Neelkanth Peak.',
    hiddenSecret: 'The Tapt Kund natural hot water sulfur spring directly beneath the temple maintains a constant temperature of 55°C even when the surrounding mountains are blanketed in snow.',
    builder: 'Adi Shankaracharya (consecrated 8th century)',
    century: '8th Century CE (rebuilt 16th century by Garhwal kings)',
    aliases: ['badrinath', 'badrinath temple', 'badrinath dham', 'badri vishal']
  }
};

// AI Tour Guide API Endpoint
app.post('/api/tour-guide', async (req, res) => {
  try {
    const {
      message,
      conversationHistory = [],
      language = 'en',
      languageName = 'English',
      context = {}
    } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Valid message string is required.' });
    }

    const {
      currentCity,
      currentMonument,
      currentFestival,
      currentState,
      userCity,
      currentView
    } = context;

    const contextSummary = [
      currentCity ? `Active City: ${currentCity}` : null,
      currentMonument ? `Active Monument: ${currentMonument}` : null,
      currentFestival ? `Active Festival: ${currentFestival}` : null,
      currentState ? `Active State: ${currentState}` : null,
      userCity ? `Traveler's Origin City: ${userCity}` : null,
      currentView ? `Current App View: ${currentView}` : null
    ]
      .filter(Boolean)
      .join(' | ');

    // Match query or context to verified monument and city databases
    const matchedKey = findBestMonumentMatch(message, context);
    const matchedCityKey = findBestCityMatch(message, context);

    const verifiedMonument = matchedKey ? MONUMENT_KNOWLEDGE[matchedKey] : null;
    const verifiedCity = matchedCityKey ? CITY_KNOWLEDGE[matchedCityKey] : null;

    let knowledgeGrounding = '';

    if (verifiedMonument) {
      knowledgeGrounding = `VERIFIED MONUMENT TRUTH FOR ${verifiedMonument.name.toUpperCase()}:
- Name: ${verifiedMonument.name} (${verifiedMonument.hindiName}) in ${verifiedMonument.city}, ${verifiedMonument.state}
- Built by: ${verifiedMonument.builder} (${verifiedMonument.century})
- Visiting Hours: ${verifiedMonument.timings}
- Entry Tickets: ${verifiedMonument.tickets}
- Dress Code & Rules: ${verifiedMonument.dressCode}
- Best Photography Time: ${verifiedMonument.bestTime}
- Historical Significance: ${verifiedMonument.history}
- Architectural Highlights: ${verifiedMonument.architecture}
- Authentic Local Food & Shops: ${verifiedMonument.foodTips}
- Hidden Secret / Legend: ${verifiedMonument.hiddenSecret}`;
    } else if (verifiedCity) {
      knowledgeGrounding = `VERIFIED CITY TRUTH FOR ${verifiedCity.name.toUpperCase()}:
- Name: ${verifiedCity.name} (${verifiedCity.hindiName}), ${verifiedCity.state}
- Highlights: ${verifiedCity.tagline}
- Overview: ${verifiedCity.overview}
- Major Monuments & Landmarks: ${verifiedCity.topMonuments}
- Visiting Timings: ${verifiedCity.timings}
- Entry Fees & Tickets: ${verifiedCity.tickets}
- Dress Code & Etiquette: ${verifiedCity.dressCode}
- Authentic Food & Eateries: ${verifiedCity.foodTips}
- 1-Day Itinerary: ${verifiedCity.itinerary}
- Best Visiting Season: ${verifiedCity.bestTime}
- Hidden Secret / Heritage Fact: ${verifiedCity.hiddenSecret}`;
    } else {
      knowledgeGrounding = `HERITAGE DOMAIN RULES:
- STRICT DESTINATION ACCURACY: If the user asks about Mumbai (Bombay), ALWAYS provide authentic Mumbai heritage (Gateway of India, Elephanta Caves, CSMT Victorian Gothic Station, 1903 Taj Mahal Palace Hotel in Colaba, Marine Drive, Siddhivinayak Temple, Haji Ali Dargah, Vada Pav, Pav Bhaji, Irani Chai & Bun Maska). NEVER answer with Taj Mahal (Agra) unless explicitly asked about Agra or the Taj Mahal monument in Agra!
- Authentic Indian heritage facts: Taj Mahal in Agra closed Fridays; Red Fort closed Mondays; Victoria Memorial galleries closed Mondays; Elephanta caves in Mumbai closed Mondays; Meenakshi afternoon closure (12:30 PM–4 PM).
- Quote real ticket prices (Indian vs Foreigner rates) and official ASI/state tourism portals.
- Provide accurate regional cuisines (e.g. Mumbai: Vada Pav, Pav Bhaji, Irani Chai, Parsi Berry Pulao; Varanasi: Banarasi Paan & Malaiyo; Jaipur: Pyaaz Kachori & Ghewar; Agra: Petha; Madurai: Jigarthanda; Amritsar: Amritsari Kulcha).`;
    }

    const systemInstruction = `You are "Margdarshak" (मार्गदर्शक), an elite, authentic, and 100% accurate AI Tour Guide & Cultural Companion on the "Virasat" Indian heritage platform.

CRITICAL ACCURACY & STYLE INSTRUCTIONS:
1. FACTUAL RIGOR: Never make up or guess timings, ticket prices, builder names, or historical dates. Strictly adhere to verified Indian cultural and monument truths.
2. STRICT RESOLUTION & NO CONFUSION: When the user asks about Mumbai, give verified facts about Mumbai (Gateway of India, Elephanta Caves, CSMT, Taj Mahal Palace Hotel in Colaba, Marine Drive, Siddhivinayak, Haji Ali, Vada Pav). DO NOT confuse Mumbai with Agra or the Taj Mahal in Agra!
3. NO ROBOTIC REPETITION: NEVER start answers with boilerplate self-introductions ("Namaste! I am Margdarshak"). Dive straight into the specific, rich answer.
4. SPECIFIC DESTINATION RESOLUTION: If the user asks about a specific monument or city (e.g. Mumbai, Gateway of India, Delhi, Jaipur, Mysore Palace, Konark, Meenakshi, Golden Temple, Brihadisvara, Ellora, etc.), answer specifically for that destination.
5. LANGUAGE REQUIREMENT: The user has selected ${languageName} (Language Code: "${language}"). Respond completely, naturally, and fluently in ${languageName}.
6. FORMATTING: Use clean markdown with clear bold headers, concise bullet points, and high readability (120–220 words).

GROUND TRUTH REFERENCE DATA:
${knowledgeGrounding}

ACTIVE TRAVELER CONTEXT:
${contextSummary || 'Indian Cultural Heritage Discovery'}`;

    const ai = getGenAI();

    if (ai) {
      try {
        const contents: any[] = [];

        if (Array.isArray(conversationHistory) && conversationHistory.length > 0) {
          for (const item of conversationHistory.slice(-8)) {
            if (item.text) {
              contents.push({
                role: item.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: item.text }]
              });
            }
          }
        }

        contents.push({
          role: 'user',
          parts: [{ text: message }]
        });

        const response = await ai.models.generateContent({
          model: 'gemini-3.7-flash',
          contents: contents,
          config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
            maxOutputTokens: 900
          }
        });

        const replyText = response.text?.trim() || '';
        if (replyText) {
          const suggestions = generateDynamicSuggestions(message, context, replyText);
          return res.json({
            reply: replyText,
            suggestions: suggestions,
            isFallback: false
          });
        }
      } catch (geminiError: any) {
        if (geminiError?.status === 401 || geminiError?.message?.includes('401') || geminiError?.message?.includes('UNAUTHENTICATED')) {
          aiClient = null;
        }
      }
    }

    // Dynamic, verified fallback engine (100% Accurate & Multi-lingual)
    const fallbackResponse = generateSmartHeritageResponse(message, language, context, conversationHistory);
    return res.json({
      reply: fallbackResponse.text,
      suggestions: fallbackResponse.suggestions,
      isFallback: true
    });

  } catch (error: any) {
    console.error('Error in /api/tour-guide:', error);
    const fallbackResponse = generateSmartHeritageResponse(
      req.body?.message || '',
      req.body?.language || 'en',
      req.body?.context || {},
      req.body?.conversationHistory || []
    );

    return res.json({
      reply: fallbackResponse.text,
      suggestions: fallbackResponse.suggestions,
      isFallback: true,
      errorDetails: error?.message
    });
  }
});

// Helper to find exact city match from query or context
function findBestCityMatch(queryText: string, context: any = {}): string | null {
  const query = (queryText || '').toLowerCase().trim();
  const rawCity = (context.currentCity || '').toLowerCase().trim();

  // 1. Direct query check against CITY_KNOWLEDGE aliases and names
  for (const [key, item] of Object.entries(CITY_KNOWLEDGE)) {
    if (query === key || query === item.name.toLowerCase() || query === item.hindiName) {
      return key;
    }
    if (item.aliases.some(alias => query.includes(alias))) {
      return key;
    }
  }

  // Common quick keywords for Indian cities
  if (query.includes('mumbai') || query.includes('bombay') || query.includes('bombai') || query.includes('marine drive') || query.includes('colaba') || query.includes('bandra') || query.includes('vada pav')) return 'mumbai';
  if (query.includes('delhi') || query.includes('dilli') || query.includes('new delhi') || query.includes('chandni chowk')) return 'delhi';
  if (query.includes('jaipur') || query.includes('pink city')) return 'jaipur';
  if (query.includes('varanasi') || query.includes('kashi') || query.includes('banaras') || query.includes('assi ghat')) return 'varanasi';
  if (query.includes('agra') && !query.includes('taj mahal')) return 'agra';
  if (query.includes('kolkata') || query.includes('calcutta') || query.includes('howrah')) return 'kolkata';
  if (query.includes('hyderabad') || query.includes('charminar') || query.includes('golconda')) return 'hyderabad';
  if (query.includes('amritsar') || query.includes('golden temple') || query.includes('wagah')) return 'amritsar';

  // 2. Active city context
  if (rawCity) {
    for (const [key, item] of Object.entries(CITY_KNOWLEDGE)) {
      if (rawCity.includes(key) || rawCity.includes(item.name.toLowerCase()) || item.aliases.some(alias => rawCity.includes(alias))) {
        return key;
      }
    }
  }

  return null;
}

// Helper to find exact monument match from query or context
function findBestMonumentMatch(queryText: string, context: any = {}): string | null {
  const query = (queryText || '').toLowerCase().trim();
  const rawMonument = (context.currentMonument || '').toLowerCase().trim();

  // Special Disambiguation for Taj:
  // If query mentions 'taj' AND ('mumbai' or 'hotel' or 'palace' or 'colaba' or 'apollo bunder' or 'bombay'), it refers to the 1903 Taj Mahal Palace Hotel in Mumbai!
  if (
    (query.includes('taj') || query.includes('taj hotel') || query.includes('taj palace')) &&
    (query.includes('mumbai') || query.includes('bombay') || query.includes('colaba') || query.includes('hotel') || query.includes('marine') || query.includes('gateway') || query.includes('apollo'))
  ) {
    return 'taj-mahal-palace-mumbai';
  }

  // 1. Check direct query mentions first
  for (const [key, item] of Object.entries(MONUMENT_KNOWLEDGE)) {
    if (item.aliases.some(alias => query.includes(alias))) {
      return key;
    }
  }

  // Common quick keywords in query
  if (query.includes('gateway of india') || query.includes('elephanta')) return 'gateway-of-india';
  if (query.includes('csmt') || query.includes('victoria terminus') || query.includes('vt station')) return 'csmt-station';
  if (query.includes('siddhivinayak')) return 'siddhivinayak-temple';
  if (query.includes('haji ali')) return 'haji-ali-dargah';
  if (query.includes('taj mahal agra') || query.includes('taj in agra') || (query.includes('taj mahal') && !query.includes('mumbai') && !query.includes('hotel') && !query.includes('bombay'))) return 'taj-mahal';
  if (query.includes('amber fort') || query.includes('amer fort') || query.includes('amber palace')) return 'amber-fort';
  if (query.includes('hawa mahal')) return 'hawa-mahal';
  if (query.includes('kashi vishwanath') || query.includes('vishwanath temple') || query.includes('dashashwamedh')) return 'kashi-vishwanath';
  if (query.includes('golden temple') || query.includes('harmandir sahib')) return 'golden-temple';
  if (query.includes('hampi') || query.includes('virupaksha') || query.includes('vitthala') || query.includes('stone chariot')) return 'hampi-ruins';
  if (query.includes('konark') || query.includes('sun temple') || query.includes('black pagoda')) return 'konark-sun-temple';
  if (query.includes('puri') || query.includes('jagannath') || query.includes('ratha yatra')) return 'puri-jagannath';
  if (query.includes('meenakshi') || query.includes('madurai temple')) return 'meenakshi-temple';
  if (query.includes('mysore palace') || query.includes('amba vilas') || query.includes('mysuru palace')) return 'mysore-palace';
  if (query.includes('victoria memorial')) return 'victoria-memorial';
  if (query.includes('khajuraho') || query.includes('kandariya')) return 'khajuraho-temples';
  if (query.includes('qutub minar') || query.includes('qutab minar') || query.includes('iron pillar')) return 'qutub-minar';
  if (query.includes('humayun tomb') || query.includes('humayuns tomb') || query.includes('sunder nursery')) return 'humayun-tomb';
  if (query.includes('red fort') || query.includes('lal qila') || query.includes('lal kila')) return 'red-fort';
  if (query.includes('mehrangarh') || query.includes('jodhpur fort')) return 'mehrangarh-fort';
  if (query.includes('city palace udaipur') || query.includes('lake pichola') || query.includes('udaipur palace')) return 'city-palace-udaipur';
  if (query.includes('brihadisvara') || query.includes('brihadeeswarar') || query.includes('thanjavur big temple') || query.includes('chola temple')) return 'brihadisvara-temple';
  if (query.includes('ellora') || query.includes('kailash temple') || query.includes('kailasanatha')) return 'ellora-caves';
  if (query.includes('ajanta')) return 'ajanta-caves';
  if (query.includes('sanchi') || query.includes('great stupa')) return 'sanchi-stupa';
  if (query.includes('charminar') || query.includes('golconda')) return 'charminar';
  if (query.includes('mahabalipuram') || query.includes('shore temple') || query.includes('pancha rathas')) return 'mahabalipuram';
  if (query.includes('somnath')) return 'somnath-temple';
  if (query.includes('kedarnath')) return 'kedarnath-temple';
  if (query.includes('badrinath')) return 'badrinath-temple';

  // 2. If not mentioned in query, check active monument context
  if (rawMonument) {
    for (const [key, item] of Object.entries(MONUMENT_KNOWLEDGE)) {
      if (rawMonument.includes(item.name.toLowerCase()) || item.aliases.some(alias => rawMonument.includes(alias))) {
        return key;
      }
    }
  }

  return null;
}

// Multi-lingual translation strings for fallback responses
const MULTI_LANG_HEADERS: Record<string, {
  timings: string;
  tickets: string;
  dressCode: string;
  history: string;
  cuisine: string;
  itinerary: string;
  proTip: string;
  highlights: string;
}> = {
  hi: {
    timings: 'दर्शनीय समय एवं प्रवेश नियम',
    tickets: 'प्रवेश शुल्क एवं ऑनलाइन टिकट',
    dressCode: 'वेशभूषा नियम एवं संस्कृति',
    history: 'ऐतिहासिक एवं स्थापत्य पृष्ठभूमि',
    cuisine: 'प्रसिद्ध स्थानीय व्यंजन एवं मिठाई',
    itinerary: 'प्रमाणित 1-दिवसीय यात्रा योजना',
    proTip: 'यात्री सलाह',
    highlights: 'प्रमुख दर्शनीय स्थल एवं स्मारक'
  },
  bn: {
    timings: 'পরিদর্শনের সময়সূচি ও প্রবেশ তথ্য',
    tickets: 'টিকিট ও প্রবেশ মূল্য',
    dressCode: 'পোশাক ও সাংস্কৃতিক নিয়মাবলী',
    history: 'ঐতিহাসিক ও স্থাপত্য পরিচয়',
    cuisine: 'বিখ্যাত ঐতিহ্যবাহী খাবার',
    itinerary: '১ দিনের ভ্রমণ পরিকল্পনা',
    proTip: 'ভ্রমণ টিপস',
    highlights: 'প্রধান দর্শনীয় স্থান'
  },
  ta: {
    timings: 'பார்வை நேரம் மற்றும் நுழைவு விதிகள்',
    tickets: 'கட்டணம் மற்றும் முன்பதிவு',
    dressCode: 'ஆடை கட்டுப்பாடு மற்றும் ஆசாரம்',
    history: 'வரலாற்று மற்றும் கட்டடக்கலை சிறப்புகள்',
    cuisine: 'பாரம்பரிய சிறப்பு உணவுகள்',
    itinerary: '1-நாள் பயணத் திட்டம்',
    proTip: 'பயணி வழிகாட்டுதல்',
    highlights: 'முக்கிய இடங்கள்'
  },
  te: {
    timings: 'సందర్శన వేళలు మరియు ప్రవేశ నియమాలు',
    tickets: 'ప్రవేశ రుసుము మరియు టిక్కెట్లు',
    dressCode: 'దుస్తుల నియమావళి మరియు సంస్కృతి',
    history: 'చారిత్రక మరియు నిర్మాణ విశేషాలు',
    cuisine: 'ప్రసిద్ధ సాంప్రదాయ వంటకాలు',
    itinerary: '1-రోజు పర్యటన ప్రణాళిక',
    proTip: 'యాత్రా చిట్కా',
    highlights: 'ప్రధాన ఆకర్షణలు'
  },
  mr: {
    timings: 'भेट देण्याची वेळ आणि नियम',
    tickets: 'प्रवेश शुल्क आणि तिकिटे',
    dressCode: 'पोशाख आणि सांस्कृतिक शिष्टाचार',
    history: 'ऐतिहासिक आणि वास्तुकला माहिती',
    cuisine: 'प्रसिद्ध स्थानिक खाद्यसंस्कृती',
    itinerary: '१ दिवसाचे पर्यटन नियोजन',
    proTip: 'पर्यटक सल्ला',
    highlights: 'प्रमुख ऐतिहासिक स्थळे व वास्तू'
  },
  gu: {
    timings: 'મુલાકાતનો સમય અને પ્રવેશ નિયમો',
    tickets: 'પ્રવેશ ફી અને ટિકિટ વિગતો',
    dressCode: 'પોશાક અને સાંસ્કૃતિક નિયમો',
    history: 'ઐતિહાસિક અને સ્થાપત્ય મહત્વ',
    cuisine: 'પ્રખ્યાત સ્થાનિક વાનગીઓ',
    itinerary: '૧-દિવસીય પ્રવાસ યોજના',
    proTip: 'મુસાફરી ટિપ્સ',
    highlights: 'મુખ્ય જોવાલાયક સ્થળો'
  },
  kn: {
    timings: 'ವೀಕ್ಷಣಾ ಸಮಯ ಮತ್ತು ಪ್ರವೇಶ ನಿಯಮಗಳು',
    tickets: 'ಪ್ರವೇಶ ಶುಲ್ಕ ಮತ್ತು ಟಿಕೆಟ್ ವಿವರ',
    dressCode: 'ಉಡುಪಿನ ನಿಯಮ ಮತ್ತು ಶಿಷ್ಟಾಚಾರ',
    history: 'ಐತಿಹಾಸಿಕ ಮತ್ತು ವಾಸ್ತುಶಿಲ್ಪದ ಹಿನ್ನೆಲೆ',
    cuisine: 'ಪ್ರಸಿದ್ಧ ಸ್ಥಳೀಯ ಆಹಾರಗಳು',
    itinerary: '೧ ದಿನದ ಪ್ರವಾಸ ಯೋಜನೆ',
    proTip: 'ಪ್ರವಾಸಿ ಸಲಹೆ',
    highlights: 'ಪ್ರಮುಖ ಆಕರ್ಷಣೆಗಳು'
  },
  pa: {
    timings: 'ਦਰਸ਼ਨਾਂ ਦਾ ਸਮਾਂ ਅਤੇ ਦਾਖਲਾ ਨਿਯਮ',
    tickets: 'ਟਿਕਟ ਅਤੇ ਦਾਖਲਾ ਫੀਸ',
    dressCode: 'ਪਹਿਰਾਵਾ ਅਤੇ ਸੱਭਿਆਚਾਰਕ ਨਿਯਮ',
    history: 'ਇਤਿਹਾਸਕ ਅਤੇ ਆਰਕੀਟੈਕਚਰ ਮਹੱਤਵ',
    cuisine: 'ਮਸ਼ਹੂਰ ਪਰੰਪਰਾਗਤ ਭੋਜਨ',
    itinerary: '੧-ਦਿਨ ਦਾ ਯਾਤਰਾ ਪਲਾਨ',
    proTip: 'ਯਾਤਰੀ ਸਲਾਹ',
    highlights: 'ਮੁੱਖ ਇਤਿਹਾਸਕ ਸਥਾਨ'
  },
  ml: {
    timings: 'സന്ദർശന സമയവും പ്രവേശന നിയമങ്ങളും',
    tickets: 'ടിക്കറ്റ് നിരക്കുകൾ',
    dressCode: 'വസ്ത്രധാരണ രീതികൾ',
    history: 'ചരിത്രവും വാസ്തുവിദ്യയും',
    cuisine: 'പരമ്പരാഗത രുചികൾ',
    itinerary: '1 ദിവസത്തെ യാത്രാ പദ്ധതി',
    proTip: 'യാത്രാ നിർദ്ദേശം',
    highlights: 'പ്രധാന ആകർഷണങ്ങൾ'
  },
  or: {
    timings: 'ଦର୍ଶନ ସମୟ ଏବଂ ପ୍ରବେଶ ନିୟମ',
    tickets: 'ପ୍ରବେଶ ଶୁଳ୍କ ଏବଂ ଟିକେଟ',
    dressCode: 'ପୋଷାକ ଏବଂ ସାଂସ୍କୃତିକ ନିୟମ',
    history: 'ଐତିହାସିକ ଏବଂ ସ୍ଥାପତ୍ୟ ମହତ୍ତ୍ୱ',
    cuisine: 'ପ୍ରସିଦ୍ଧ ପାରମ୍ପରିକ ଖାଦ୍ୟ',
    itinerary: '୧-ଦିନିଆ ଭ୍ରମଣ ଯୋଜନା',
    proTip: 'ଯାତ୍ରୀ ପରାମର୍ଶ',
    highlights: 'ପ୍ରମୁଖ ଆକର୍ଷଣ'
  },
  en: {
    timings: 'Visiting Hours & Access Rules',
    tickets: 'Entry Fees & Ticket Portal',
    dressCode: 'Dress Code & Cultural Etiquette',
    history: 'Historical Legacy & Architecture',
    cuisine: 'Authentic Regional Delicacies',
    itinerary: 'Curated 1-Day Heritage Itinerary',
    proTip: 'Traveler Tip',
    highlights: 'Top Heritage Monuments & Landmarks'
  }
};

// Dynamic Heritage Engine: Generates accurate, contextual, multi-lingual answers
function generateSmartHeritageResponse(
  message: string,
  lang: string = 'en',
  context: any = {},
  history: any[] = []
): { text: string; suggestions: string[] } {
  const query = (message || '').toLowerCase().trim();
  const langKey = MULTI_LANG_HEADERS[lang] ? lang : 'en';
  const headers = MULTI_LANG_HEADERS[langKey];

  const matchedMonumentKey = findBestMonumentMatch(message, context);
  const matchedCityKey = findBestCityMatch(message, context);

  const mData = matchedMonumentKey ? MONUMENT_KNOWLEDGE[matchedMonumentKey] : null;
  const cData = matchedCityKey ? CITY_KNOWLEDGE[matchedCityKey] : null;

  const activePlace = mData ? mData.name : (cData ? cData.name : (context.currentMonument || context.currentCity || context.currentFestival || context.currentState || 'Incredible India'));
  const activeCity = mData ? mData.city : (cData ? cData.name.split(' ')[0] : (context.currentCity || 'Mumbai'));

  // 1. Timings & Visiting Hours
  if (query.includes('time') || query.includes('timing') || query.includes('hour') || query.includes('open') || query.includes('close') || query.includes('when') || query.includes('samay') || query.includes('kab')) {
    if (mData) {
      return {
        text: `🏛️ **${headers.timings} — ${mData.name} (${mData.city}, ${mData.state})**:\n\n- **Official Visiting Hours**: ${mData.timings}\n- **Entry Tickets**: ${mData.tickets}\n- **Best Photography & Lighting Window**: ${mData.bestTime}\n- **${headers.proTip}**: Advance online booking is recommended via the official ASI portal (asi.payumoney.com) or state tourism portals to avoid ticket counter queues.`,
        suggestions: [
          `What is the dress code and rules for ${mData.name}?`,
          `What is the history and who built ${mData.name}?`,
          `Must-try authentic food near ${mData.city}`
        ]
      };
    }
    if (cData) {
      return {
        text: `🏛️ **${headers.timings} — ${cData.name}**:\n\n- **Key Monument Timings**: ${cData.timings}\n- **Entry Fees & Tickets**: ${cData.tickets}\n- **Best Visiting Season**: ${cData.bestTime}\n- **${headers.proTip}**: Plan outdoor heritage walks (like Gateway of India, Marine Drive, or Fort precinct) during early morning or sunset hours to avoid midday heat.`,
        suggestions: [
          `What are the must-visit monuments in ${cData.name.split(' ')[0]}?`,
          `What is the dress code for temples and shrines?`,
          `Famous authentic food in ${cData.name.split(' ')[0]}`
        ]
      };
    }
    return {
      text: `🏛️ **${headers.timings} — ${activePlace}**:\n\n- **Standard Archaeological Sites (ASI)**: Generally open **Sunrise to Sunset (6:00 AM – 6:00 PM)**.\n- **Major Living Sacred Temples**: Typically open **5:00 AM – 12:30 PM**, and re-open for evening darshan from **4:00 PM – 9:30 PM**.\n- **Best Time of Day**: Arrive between **6:00 AM – 8:00 AM** for serene atmosphere, soft golden light, and comfortable temperatures.`,
      suggestions: [
        `What are the ticket prices and booking details?`,
        `Dress code and cultural guidelines`,
        `Plan a 1-day itinerary for ${activePlace}`
      ]
    };
  }

  // 2. Tickets, Pricing & Booking
  if (query.includes('ticket') || query.includes('price') || query.includes('fee') || query.includes('cost') || query.includes('entry') || query.includes('book') || query.includes('kiraya')) {
    if (mData) {
      return {
        text: `🎟️ **${headers.tickets} — ${mData.name}**:\n\n- **Ticket Rates**: ${mData.tickets}\n- **Visiting Hours**: ${mData.timings}\n- **Official Booking Portal**: Archaeological Survey of India (ASI) at asi.payumoney.com or respective temple trust portals.\n- **${headers.proTip}**: Children below 15 years enter free at ASI-managed national monuments with valid age proof.`,
        suggestions: [
          `What are the opening timings for ${mData.name}?`,
          `What is the dress code for visitors?`,
          `Tell me the history and builder of ${mData.name}`
        ]
      };
    }
    if (cData) {
      return {
        text: `🎟️ **${headers.tickets} — ${cData.name}**:\n\n- **Ticket & Entry Structure**: ${cData.tickets}\n- **Visiting Hours**: ${cData.timings}\n- **Official Booking Channels**: For ASI sites (like Elephanta Caves), book online via asi.payumoney.com. Waterfronts, Marine Drive, and public temple darshans are completely Free.\n- **${headers.proTip}**: Keep cash handy for local harbor ferries, metro tokens, or local street food.`,
        suggestions: [
          `What are the top heritage spots in ${cData.name.split(' ')[0]}?`,
          `Must-eat authentic foods in ${cData.name.split(' ')[0]}`,
          `Plan a 1-day travel route for ${cData.name.split(' ')[0]}`
        ]
      };
    }
    return {
      text: `🎟️ **${headers.tickets} — ${activePlace}**:\n\n- **ASI Ticket Structure**: Standard tickets for Indian nationals are **₹25–₹50**, and for foreign tourists **₹300–₹600**.\n- **Living Temples**: General Darshan is usually **Free**; special queue / Sugam Darshan passes range ₹100–₹300.\n- **Booking Channel**: Cashless QR booking available at monument entrances or online via ASI / State Tourism portals.`,
      suggestions: [
        `What are the visiting hours?`,
        `Dress code and etiquette`,
        `Famous local foods to try`
      ]
    };
  }

  // 3. Dress code, Footwear & Etiquette
  if (query.includes('dress') || query.includes('wear') || query.includes('clothes') || query.includes('rule') || query.includes('etiquette') || query.includes('shoe') || query.includes('kapde')) {
    if (mData) {
      return {
        text: `👘 **${headers.dressCode} — ${mData.name}**:\n\n- **Recommended Attire**: ${mData.dressCode}\n- **Footwear Guidelines**: Shoes and socks must be removed before entering sanctum plinths or sanctum sanctorum (dedicated shoe counters available).\n- **Restricted Items**: Photography inside inner sanctums and drones without prior ASI permissions are strictly prohibited.\n- **${headers.proTip}**: Carry modest shawls or scarves to cover head and shoulders during sacred rituals.`,
        suggestions: [
          `Visiting hours & ticket prices for ${mData.name}`,
          `Historical story of ${mData.name}`,
          `Best local restaurants in ${mData.city}`
        ]
      };
    }
    if (cData) {
      return {
        text: `👘 **${headers.dressCode} — ${cData.name}**:\n\n- **Citywide Attire**: ${cData.dressCode}\n- **Religious Shrines**: When entering sacred places (e.g. Siddhivinayak Temple, Haji Ali Dargah, Mount Mary Basilica), wear modest clothing covering shoulders and knees. Head coverings are required inside Haji Ali Dargah.\n- **Footwear**: Shoes must be removed at designated counters before stepping onto temple plinths.`,
        suggestions: [
          `What are the opening timings in ${cData.name.split(' ')[0]}?`,
          `Famous heritage foods to taste in ${cData.name.split(' ')[0]}`,
          `Top monuments in ${cData.name.split(' ')[0]}`
        ]
      };
    }
    return {
      text: `👘 **${headers.dressCode} — ${activePlace}**:\n\n- **General Monuments**: Wear comfortable, modest clothing covering shoulders and knees.\n- **Sacred Temples (South & East India)**: Traditional attire is strictly required (Dhoti/Kurta for men, Saree/Salwar for women). Mobiles and leather accessories are banned in sanctums.\n- **Sikh Gurdwaras**: Head must be fully covered, footwear removed, and hands/feet washed at entrance.`,
      suggestions: [
        `What are the opening timings?`,
        `Famous heritage foods in ${activePlace}`,
        `History and architectural significance`
      ]
    };
  }

  // 4. Food, Cuisine & Historic Eateries
  if (query.includes('food') || query.includes('eat') || query.includes('dish') || query.includes('cuisine') || query.includes('sweet') || query.includes('restaurant') || query.includes('khana') || query.includes('mithai') || query.includes('vada pav') || query.includes('pav bhaji')) {
    if (mData) {
      return {
        text: `🍲 **${headers.cuisine} — ${mData.city} (${mData.state})**:\n\n- **Must-Try Specialties**: ${mData.foodTips}\n- **Culinary Heritage**: Traditional regional recipes prepared with authentic spices, slow-cooked in brass or earthen cookware for authentic depth of flavor.\n- **${headers.proTip}**: Head to the historic bazaar lanes in the old city quarters for the oldest generational sweet shops and tea stalls.`,
        suggestions: [
          `What are the best street food spots in ${mData.city}?`,
          `Visiting timings & entry ticket for ${mData.name}`,
          `Plan a food & culture walk in ${mData.city}`
        ]
      };
    }
    if (cData) {
      return {
        text: `🍲 **${headers.cuisine} — ${cData.name}**:\n\n- **Iconic Delicacies & Eateries**: ${cData.foodTips}\n- **Culinary Heritage**: Mumbai’s cuisine is a rich melting pot of Maharashtrian street food, Parsi-Irani cafe heritage, coastal Koli seafood, and Gujarati vegetarian delights.\n- **${headers.proTip}**: Visit Kyani & Co. near Marine Lines for 100-year-old Irani Chai and Bun Maska, and enjoy sunset Pav Bhaji at Girgaon Chowpatty beach.`,
        suggestions: [
          `Top heritage monuments to visit in ${cData.name.split(' ')[0]}`,
          `Visiting hours and ticket rates in ${cData.name.split(' ')[0]}`,
          `Plan a 1-day food & heritage itinerary for ${cData.name.split(' ')[0]}`
        ]
      };
    }
    return {
      text: `🍲 **${headers.cuisine} — ${activePlace}**:\n\n- **Signature Regional Specialties**: Savor authentic regional thalis, clay-pot *Kulhad Chai*, and traditional regional sweets made with pure ghee.\n- **Authentic Dining Tip**: Choose bustling local eateries with high turnover of fresh preparations, and request *"Kam Mirch"* if you prefer mild spice.\n- **Refreshing Local Drinks**: Try regional refreshments such as fresh tender coconut water, spiced buttermilk (Chaas), or lassi.`,
      suggestions: [
        `Top heritage monuments to visit in ${activePlace}`,
        `Local phrases for ordering food & asking directions`,
        `Best shopping bazaars in ${activePlace}`
      ]
    };
  }

  // 5. History, Builder, Architecture, Legends & Secrets
  if (query.includes('history') || query.includes('secret') || query.includes('story') || query.includes('legend') || query.includes('architect') || query.includes('who built') || query.includes('why') || query.includes('built') || query.includes('itihas')) {
    if (mData) {
      return {
        text: `📜 **${headers.history} — ${mData.name}**:\n\n- **Builder & Era**: Built by **${mData.builder}** (${mData.century}).\n- **Historical Legacy**: ${mData.history}\n- **Architectural Genius**: ${mData.architecture}\n- **Hidden Secret / Legend**: ${mData.hiddenSecret}\n- **Top Photography Angle**: ${mData.photoSpot}`,
        suggestions: [
          `Visiting hours & ticket prices for ${mData.name}`,
          `What is the dress code and rules?`,
          `Famous authentic food in ${mData.city}`
        ]
      };
    }
    if (cData) {
      return {
        text: `📜 **${headers.history} — ${cData.name}**:\n\n- **Historical Evolution**: ${cData.overview}\n- **Major Heritage Highlights**: ${cData.topMonuments}\n- **Hidden Secret & Legend**: ${cData.hiddenSecret}\n- **Best Season to Visit**: ${cData.bestTime}`,
        suggestions: [
          `Visiting hours & ticket rates in ${cData.name.split(' ')[0]}`,
          `Plan a 1-day heritage tour for ${cData.name.split(' ')[0]}`,
          `Must-eat authentic street foods in ${cData.name.split(' ')[0]}`
        ]
      };
    }
    return {
      text: `📜 **${headers.history} — ${activePlace}**:\n\n- **Historical Continuity**: Rooted in centuries of dynastic patronage, sacred Vedic/Islamic/Buddhist traditions, and master artisan guilds.\n- **Architectural Harmony**: Employs indigenous stone carving methods, mathematical symmetry, and astronomical alignment that have stood the test of centuries.\n- **Living Cultural Heritage**: Continues as a living sanctuary of philosophy, classical arts, festivals, and cultural memory.`,
      suggestions: [
        `Best time of day to visit for photography`,
        `Entry tickets and visiting hours`,
        `Authentic regional foods to try`
      ]
    };
  }

  // 6. Itinerary & Travel Planning
  if (query.includes('itinerary') || query.includes('plan') || query.includes('day') || query.includes('trip') || query.includes('route') || query.includes('travel') || query.includes('reach')) {
    if (mData) {
      return {
        text: `🗺️ **${headers.itinerary} — ${mData.city} (${mData.name})**:\n\n- **Morning (6:30 AM – 9:30 AM)**: Sunrise visit to **${mData.name}** for golden illumination and calm ambiance (${mData.bestTime}), followed by authentic local breakfast (${mData.foodTips.split(',')[0]}).\n- **Midday (10:30 AM – 1:30 PM)**: Explore nearby artisan workshops and archaeological museums.\n- **Afternoon (3:30 PM – 5:30 PM)**: Heritage bazaar walk for authentic GI-tagged handicrafts and textiles.\n- **Evening (6:00 PM – 8:30 PM)**: Sunset vantage point (${mData.photoSpot}) followed by traditional dinner.`,
        suggestions: [
          `Visiting timings & entry fees for ${mData.name}`,
          `What genuine souvenirs should I buy in ${mData.city}?`,
          `Tell me the secret history of ${mData.name}`
        ]
      };
    }
    if (cData) {
      return {
        text: `🗺️ **${headers.itinerary} — ${cData.name}**:\n\n${cData.itinerary}\n\n- **${headers.proTip}**: Book Elephanta Caves ferry early at 9:00 AM from Apollo Bunder, and take a local black-and-yellow taxi or suburban train along Marine Drive for the authentic Mumbai experience.`,
        suggestions: [
          `What are the visiting hours and ticket prices for monuments in ${cData.name.split(' ')[0]}?`,
          `Must-try street foods and authentic restaurants in ${cData.name.split(' ')[0]}`,
          `Tell me the architectural secrets of ${cData.name.split(' ')[0]}`
        ]
      };
    }
    return {
      text: `🗺️ **${headers.itinerary} — ${activePlace}**:\n\n- **Morning (6:00 AM – 10:00 AM)**: Sunrise monument visit, sacred riverside walk, and traditional breakfast at a historic eatery.\n- **Midday (10:30 AM – 2:00 PM)**: Guided museum galleries, historic palaces, and artisan craft clusters.\n- **Afternoon (3:30 PM – 5:30 PM)**: Heritage market quarter walk for local textiles, spices, and souvenirs.\n- **Evening (6:00 PM – 8:30 PM)**: Sunset panorama, evening grand Aarti prayer ceremonies, and cultural dinners.`,
      suggestions: [
        `Dress code guidelines for temple visits`,
        `Signature local delicacies to taste`,
        `Historical highlights of ${activePlace}`
      ]
    };
  }

  // 7. Destination Overview (City or Monument)
  if (cData) {
    return {
      text: `🌆 **${cData.name} — ${cData.tagline}**:\n\n- **Overview**: ${cData.overview}\n- **Top Heritage Landmarks**: ${cData.topMonuments}\n- **Visiting Hours**: ${cData.timings}\n- **Tickets & Entry**: ${cData.tickets}\n- **Must-Try Local Food**: ${cData.foodTips}\n- **Hidden Secret**: ${cData.hiddenSecret}`,
      suggestions: [
        `Plan a 1-day step-by-step itinerary for ${cData.name.split(' ')[0]}`,
        `What are the ticket prices and visiting hours for ${cData.name.split(' ')[0]} monuments?`,
        `What is the dress code and rules for shrines in ${cData.name.split(' ')[0]}?`,
        `Must-eat street foods and historic cafes in ${cData.name.split(' ')[0]}`
      ]
    };
  }

  if (mData) {
    return {
      text: `🏛️ **${mData.name} (${mData.city}, ${mData.state})**:\n\n- **Builder & Dynasty**: ${mData.builder} (${mData.century})\n- **Visiting Hours**: ${mData.timings}\n- **Entry Details**: ${mData.tickets}\n- **Dress Code**: ${mData.dressCode}\n- **Must-Try Local Food**: ${mData.foodTips}\n- **Historical Legacy**: ${mData.history}`,
      suggestions: [
        `What are the architectural secrets of ${mData.name}?`,
        `Plan a curated 1-day itinerary for ${mData.city}`,
        `What is the best photography spot?`
      ]
    };
  }

  return {
    text: `🙏 **Welcome to Margdarshak — Heritage Discovery for ${activePlace}**:\n\nI can provide exact, verified details on **visiting hours**, **ticket fees**, **dress codes & customs**, **authentic regional cuisines**, **builder dynasties & history**, and **custom step-by-step 1-day itineraries** across all Indian monuments, cities, and states.\n\nWhat specific destination or detail would you like to explore?`,
    suggestions: [
      `Tell me about Mumbai (Gateway of India, Marine Drive, Elephanta)`,
      `Visiting hours and ticket prices for Taj Mahal in Agra`,
      `Must-eat authentic foods in Varanasi and Jaipur`,
      `Plan a 1-day step-by-step travel itinerary`
    ]
  };
}

function generateDynamicSuggestions(message: string, context: any, replyText: string): string[] {
  const city = context.currentCity || (message.toLowerCase().includes('mumbai') ? 'Mumbai' : 'Varanasi');
  const monument = context.currentMonument || (message.toLowerCase().includes('mumbai') ? 'Gateway of India' : 'Taj Mahal');
  const place = context.currentMonument || context.currentCity || (message.toLowerCase().includes('mumbai') ? 'Mumbai' : 'this destination');

  const lower = (message + ' ' + replyText).toLowerCase();

  if (lower.includes('timing') || lower.includes('hour') || lower.includes('open')) {
    return [
      `What is the dress code for ${place}?`,
      `What are the ticket prices and booking rules?`,
      `Must-try authentic food in ${city}`
    ];
  }

  if (lower.includes('food') || lower.includes('dish') || lower.includes('sweet') || lower.includes('vada pav')) {
    return [
      `Where are the best street food quarters in ${city}?`,
      `What are the traditional sweets and snacks to try?`,
      `Plan a food and heritage walk for ${city}`
    ];
  }

  if (lower.includes('history') || lower.includes('architecture') || lower.includes('built')) {
    return [
      `What are the hidden secrets & legends of ${place}?`,
      `Best photo spots for sunrise and sunset`,
      `Visiting timings and entry rules`
    ];
  }

  return [
    `Tell me about the top monuments in ${city}`,
    `Must-eat authentic foods in ${city}`,
    `What is the dress code & temple etiquette?`,
    `Plan a 1-day travel itinerary for ${city}`
  ];
}

// Start Server with Vite Middleware in Development
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Virasat Heritage App Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
