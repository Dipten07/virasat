import { CityDestination } from '../types';

export const MORE_REGIONAL_CITIES_DATA: CityDestination[] = [
  // 1. BENGALURU (Karnataka)
  {
    id: 'bengaluru',
    name: 'Bengaluru (Bangalore / Garden City)',
    state: 'Karnataka',
    tagline: 'Kempe Gowda Forts, Bangalore Palace, Karaga Shaktyotsava & Classical Carnatic Sabhas',
    bannerImage: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Founded in 1537 by Kempe Gowda I, Bengaluru is the cultural and technological powerhouse of Karnataka. Filled with Tudor-revival palaces, centuries-old botanic gardens (Lalbagh), traditional military hotels, and the night-long Karaga festival.',
    latitude: 12.9716,
    longitude: 77.5946,
    airport: 'Kempegowda International Airport (BLR)',
    railwayStation: 'KSR Bengaluru City Junction (SBC) / Yesvantpur (YPR)',
    festivalIds: ['ugadi-karnataka', 'mysore-dasara-karnataka', 'kambala-coastal-karnataka', 'karaga-festival-karnataka'],
    monumentIds: ['bangalore-palace', 'tipu-sultan-summer-palace', 'vidhana-soudha'],
    religiousSites: [
      {
        name: 'Dharmaraya Swamy Temple (Tigala Heritage)',
        type: 'Historic Karaga Epicenter',
        desc: '800-year-old temple dedicated to Draupadi and the Pandavas; epicenter of the historic midnight Bangalore Karaga procession.',
        image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Bull Temple (Dodda Basavana Gudi, Basavanagudi)',
        type: 'Kempe Gowda Monolithic Shrine',
        desc: '16th-century temple housing a monumental 15-foot high, 20-foot long monolithic granite Nandi Bull, host to the annual Kadalekai Parishe (Groundnut Fair).',
        image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Government Museum & Venkatappa Art Gallery (Kasturba Road)',
        timing: '10:00 AM – 5:00 PM (Closed Mondays)',
        highlight: 'Established in 1865; houses Halmidi inscription (oldest Kannada epigraph) and Hoysala sculptures.',
        image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Bangalore Karaga midnight carrier balancing floral pyramid', 'Kadalekai Parishe groundnut fair in Basavanagudi', 'Morning filter coffee and crispy Benne Dosa in Gandhi Bazaar'],
      handicrafts: ['Mysore Silk Sarees', 'Channapatna Wooden Toys', 'Sandalwood Inlay'],
      folkArt: ['Dollu Kunitha drum dance', 'Yakshagana'],
      danceForms: ['Bharatanatyam', 'Dollu Kunitha', 'Carnatic Music']
    },
    heritageStreets: [
      {
        name: 'Gandhi Bazaar & Basavanagudi Heritage Lane',
        famousFor: 'Heritage bookshops, fragrant jasmine flower markets, and historic Brahmin cafes.',
        bestTime: '6:30 AM – 9:30 PM'
      },
      {
        name: 'Malleswaram 8th Cross & CTR Lane',
        famousFor: 'Silk saree merchants, temple flower garlands, and legendary Benne Masala Dosa joints.',
        bestTime: '7:00 AM – 9:00 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Crispy Benne Masala Dosa with White Butter & Coconut Chutney',
        category: 'Breakfast',
        desc: 'Golden crust dosa fried in aromatic fresh butter, filled with spiced potato palya and poured over with roasted gram chutney.',
        iconicSpots: ['CTR Shri Sagar (Malleswaram)', 'Vidyarthi Bhavan (Gandhi Bazaar since 1943)', 'MTR Lalbagh']
      },
      {
        name: 'Bisi Bele Bath with Boondi & Filter Kaapi',
        category: 'Main Course',
        desc: 'Wholesome rice and lentil pot slow-simmered with 30-spice blend, tamarind, nutmeg, and crunchy cashew nuts.',
        iconicSpots: ['Mavalli Tiffin Room (MTR Lalbagh, since 1924)']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Mavalli Tiffin Room (MTR Lalbagh, Estd 1924)',
        cuisine: 'Legendary Karnataka Brahmin Heritage',
        priceRange: '₹400 for two',
        mustTry: 'Rava Idli (invented during WWII), Masala Dosa, Chandrahara & Filter Coffee',
        bookingPlatform: 'Direct'
      },
      {
        name: 'Vidyarthi Bhavan (Gandhi Bazaar, Estd 1943)',
        cuisine: 'Iconic South Indian Tiffin',
        priceRange: '₹250 for two',
        mustTry: 'Thick Butter Masala Dosa & Filter Coffee',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Lalbagh Botanical Gardens & Glass House Heritage Walk',
        duration: '2 Hours',
        priceEstimate: '₹25 entry',
        desc: 'Explore 240-acre historic gardens established by Hyder Ali in 1760 featuring 3,000-million-year-old Peninsular Gneiss rock.',
        category: 'Botanical Heritage'
      }
    ],
    nearbyAttractions: [
      { name: 'Bangalore Palace (Tudor Style)', distanceKm: 4, desc: '1878 royal palace of the Wadiyars inspired by Windsor Castle.' },
      { name: 'Tipu Sultan’s Summer Palace', distanceKm: 3, desc: 'Teakwood Indo-Islamic palace with carved wooden pillars and frescoes.' },
      { name: 'Nandi Hills Fortress', distanceKm: 60, desc: 'Scenic hill fortress of Tipu Sultan with panoramic sunrise views.' }
    ]
  },

  // 2. BADAMI (Karnataka)
  {
    id: 'badami',
    name: 'Badami (Vatapi / Chalukya Rock-Cut Capital)',
    state: 'Karnataka',
    tagline: 'Rock-Cut Cave Temples, Agastya Lake, Bhutanatha Shrines & Red Sandstone Cliffs',
    bannerImage: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'The regal capital of the Early Chalukyas from 540 to 757 CE, Badami is famed for its 4 magnificent 6th-century rock-cut cave temples carved into dramatic red sandstone cliffs surrounding the emerald Agastya Lake.',
    latitude: 15.9187,
    longitude: 75.6766,
    airport: 'Hubli Airport (105 km)',
    railwayStation: 'Badami Railway Station (BDM)',
    festivalIds: ['ugadi-karnataka', 'pattadakal-dance-festival'],
    monumentIds: ['badami-cave-temples', 'bhutanatha-temple', 'pattadakal-group', 'aihole-temple-complex'],
    religiousSites: [
      {
        name: 'Badami Rock-Cut Cave Temples (Caves 1–4)',
        type: '6th-Century Monolithic Marvels',
        desc: 'Cave 1 (18-armed dancing Shiva Nataraja), Cave 2 & 3 (Vishnu Trivikrama & Varaha), and Cave 4 (Jain Mahavira sanctum).',
        image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Bhutanatha Group of Temples',
        type: 'Lakeside Sandstone Shrines',
        desc: '7th-century sandstone temples extending straight into the tranquil waters of Agastya Lake.',
        image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Archaeological Museum Badami (ASI)',
        timing: '9:00 AM – 5:00 PM (Closed Fridays)',
        highlight: 'Lajja Gauri fertility idol, 6th-century Makara stone torana, and Chalukyan inscriptions.',
        image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Agastya lake sunset meditation', 'Annual Pattadakal Classical Dance Festival in January', 'Living handloom weavers of Guledgudda Khana'],
      handicrafts: ['Guledgudda Khana Blouse Weaving', 'Ilkal Silk Sarees', 'Red Sandstone Carvings'],
      folkArt: ['Chalukya architecture study', 'Puppet theatre'],
      danceForms: ['Yakshagana', 'Classical Bharatanatyam during festival']
    },
    heritageStreets: [
      {
        name: 'Badami Village Bazaar & Agastya Ghat Road',
        famousFor: 'Ilkal sarees with red Kasuti embroidery, Guledgudda Khana fabric, and fresh roasted peanuts.',
        bestTime: '9:00 AM – 8:00 PM'
      }
    ],
    authenticFood: [
      {
        name: 'North Karnataka Jolada Rotti Oota with Shenga Chutney & Yennegai',
        category: 'Main Course',
        desc: 'Unleavened crispy sorghum flatbread served with stuffed baby eggplant curry, spicy peanut powder, and homemade churned butter.',
        iconicSpots: ['Hotel Banashankari Khanavali', 'Badami Court Restaurant']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Hotel Banashankari Lingayat Khanavali',
        cuisine: 'Traditional North Karnataka Pure Veg',
        priceRange: '₹300 for two',
        mustTry: 'Unlimited Jolada Rotti Thali with Jowar Roti, Yennegai, and Curd',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Sunset Agastya Lake & North Fort Trek',
        duration: '2.5 Hours',
        priceEstimate: '₹25 entry ticket',
        desc: 'Climb through dramatic sandstone gorges to the 6th-century upper Shivalaya overlooking the entire red valley.',
        category: 'Climbing Heritage'
      }
    ],
    nearbyAttractions: [
      { name: 'Pattadakal UNESCO World Heritage Complex', distanceKm: 22, desc: '8th-century sanctuary where Rekha-Nagara and Dravidian temple styles merged.' },
      { name: 'Aihole Cradle of Indian Temple Architecture', distanceKm: 34, desc: 'Over 125 Chalukya stone temples including the apsidal Durga Temple.' }
    ]
  },

  // 3. BHOPAL (Madhya Pradesh)
  {
    id: 'bhopal',
    name: 'Bhopal (City of Lakes & Begums)',
    state: 'Madhya Pradesh',
    tagline: 'UNESCO Sanchi Stupa, Upper Lake Bhojtal, Bhimbetka Rock Caves & Taj-ul-Masajid',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Founded by Paramara King Raja Bhoj in the 11th century and later ruled for over a century by successive progressive Muslim female rulers (Begums of Bhopal), the city is gateway to two UNESCO World Heritage Sites: Sanchi and Bhimbetka.',
    latitude: 23.2599,
    longitude: 77.4126,
    airport: 'Raja Bhoj International Airport (BHO)',
    railwayStation: 'Bhopal Junction (BPL) / Rani Kamlapati (RKMP)',
    festivalIds: ['khajuraho-dance-festival', 'diwali', 'eid-ul-fitr', 'lokrang-bhopal'],
    monumentIds: ['taj-ul-masajid', 'sanchi-stupa', 'bhimbetka-caves', 'gauhar-mahal'],
    religiousSites: [
      {
        name: 'Taj-ul-Masajid (Crown Among Mosques)',
        type: 'One of Asia’s Largest Mosques',
        desc: 'Pink sandstone marvel with 206-foot tall marble-domed minarets, massive courtyard, and delicate Mughal motifs.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Bhojeshwar Shiva Temple (Bhojpur)',
        type: 'Colossal 11th-Century Incomplete Marvel',
        desc: 'Houses a single monolithic polished quartzite Shiva Lingam standing 7.5 feet high, built by King Bhoja.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Indira Gandhi Rashtriya Manav Sangrahalaya (National Museum of Mankind)',
        timing: '10:00 AM – 5:30 PM (Closed Mondays)',
        highlight: 'Sprawling 200-acre open-air museum featuring full-scale authentic indigenous dwellings from every Indian tribe.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Bharat Bhavan Multi-Arts Complex',
        timing: '1:00 PM – 8:00 PM',
        highlight: 'Designed by Charles Correa, featuring tribal art, Roopankar gallery, and live theatre.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Lokrang Festival celebrating tribal folk arts in Jan', 'Poha Jalebi breakfast on VIP Road lake view', 'Evening chai at Gauhar Mahal artisan haat'],
      handicrafts: ['Bhopali Zari & Zardozi Purse Making', 'Bagh Print Textiles', 'Gond Tribal Painting'],
      folkArt: ['Gond tribal wall art', 'Bhil Pithora paintings'],
      danceForms: ['Matki Dance', 'Gond Karma dance', 'Kathak']
    },
    heritageStreets: [
      {
        name: 'Chowk Old City & Ibrahimpura',
        famousFor: 'Bhopali batua embroidered clutches, silver jewellery, Ittar, and Bhopali paan.',
        bestTime: '11:00 AM – 9:00 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Bhopali Poha Jalebi with Sev & Nukti',
        category: 'Breakfast',
        desc: 'Steamed flattened rice tempered with fennel, mustard seeds, and pomegranate pearls, served with crisp saffron jalebi.',
        iconicSpots: ['Sharma & Vishnu Fast Food (6 No. Market)', 'Manohar Dairy']
      },
      {
        name: 'Bhopali Murgh Rizaala & Mutton Korma',
        category: 'Main Course',
        desc: 'Rich aromatic coriander and mint chicken curry prepared according to Begum royal kitchen recipes.',
        iconicSpots: ['Hakeem Hotel (New Market)', 'Jahan Numa Palace']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Under the Mango Tree (Jahan Numa Palace)',
        cuisine: 'Royal Bhopali Heritage Recipes',
        priceRange: '₹2,500 for two',
        mustTry: 'Bhopali Filfora, Rizaala, and Shahi Tukda under a heritage garden canopy',
        bookingPlatform: 'Direct'
      },
      {
        name: 'Manohar Dairy & Restaurant (Hamidia Road, Estd 1970)',
        cuisine: 'Vegetarian Specialties & Chaat',
        priceRange: '₹400 for two',
        mustTry: 'Raj Kachori, Chole Bhature & Rasmalai',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Bhojtal (Upper Lake) Sunset Cruise & VIP Road Drive',
        duration: '1.5 Hours',
        priceEstimate: '₹150 per person',
        desc: 'Speed boat or solar cruise across the 1,000-year-old Raja Bhoj man-made lake.',
        category: 'Lake Cruise'
      }
    ],
    nearbyAttractions: [
      { name: 'Sanchi Stupa (UNESCO World Heritage)', distanceKm: 46, desc: '3rd-century BCE Great Buddhist Stupa with four carved Torana gateways built by Emperor Ashoka.' },
      { name: 'Bhimbetka Rock Shelters (UNESCO World Heritage)', distanceKm: 45, desc: 'Paleolithic and Mesolithic cave art dating back over 30,000 years.' }
    ]
  },

  // 4. GWALIOR (Madhya Pradesh)
  {
    id: 'gwalior',
    name: 'Gwalior (The Pearl in the Necklace of Indian Forts)',
    state: 'Madhya Pradesh',
    tagline: 'Impregnable Gwalior Fort, Scindia Jai Vilas Palace, Tansen Music Heritage & Sas Bahu Temples',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Mughal Emperor Babur described Gwalior Fort as "the pearl among fortresses in Hind". Ancient cradle of Hindustani classical music (Gwalior Gharana and Tansen), crowned with turquoise-tiled palaces and monumental 3,500 kg crystal chandeliers at Jai Vilas Palace.',
    latitude: 26.2183,
    longitude: 78.1828,
    airport: 'Rajmata Vijaya Raje Scindia Airport (GWL)',
    railwayStation: 'Gwalior Junction (GWL)',
    festivalIds: ['tansen-music-festival', 'diwali', 'holi'],
    monumentIds: ['gwalior-fort', 'jai-vilas-palace', 'tansen-tomb', 'sas-bahu-temple-gwalior', 'teli-ka-mandir'],
    religiousSites: [
      {
        name: 'Sas Bahu Temples & Teli Ka Mandir (Gwalior Fort)',
        type: '11th-Century Kachchhapaghata Shrines',
        desc: 'Twin pyramidal stone temples adorned with Vishnu reliefs, and the 100-foot tall Teli Ka Mandir fusing Dravidian shikhara with Nagara sanctum.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Gopachal Parvat Colossal Jain Monoliths',
        type: '15th-Century Rock-Cut Statues',
        desc: 'Dozens of towering Jain Tirthankara figures carved directly into the sheer cliff walls of Gwalior Fort rock.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Jai Vilas Palace & Scindia Museum',
        timing: '10:00 AM – 5:30 PM (Closed Wednesdays)',
        highlight: 'Durbar Hall with the world’s pair of largest chandeliers (3.5 tons each) and a silver electric model train that served banquet drinks.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Gujari Mahal Archaeological Museum',
        timing: '10:00 AM – 5:00 PM (Closed Mondays)',
        highlight: 'Houses the world-famous 10th-century Shalbhanjika (Indian Mona Lisa) celestial tree goddess sculpture.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Annual Tansen Sangeet Samaroh classical music concerts under the tamarind tree at Tansen’s tomb in December', 'Gwalior Gharana Khayal singing traditions'],
      handicrafts: ['Chanderi Silk Weaving', 'Stone Jali Carving', 'Leather Footwear'],
      folkArt: ['Ahir dance', 'Bundelkhandi folk painting'],
      danceForms: ['Kathak', 'Hindustani Classical Vocal (Gwalior Gharana)']
    },
    heritageStreets: [
      {
        name: 'Sarafa Bazaar & Bada (Maharaj Bada)',
        famousFor: 'Victorian clock tower, traditional goldsmiths, Chanderi saree showrooms, and spicy Bedai.',
        bestTime: '10:30 AM – 9:00 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Gwalior Famous Bedai with Rasedaar Aloo & Jalebi',
        category: 'Breakfast',
        desc: 'Crispy fried bread stuffed with spiced urad dal paste, served with spicy sour potato curry and syrupy jalebis.',
        iconicSpots: ['SS Kachori Wala (Naya Bazaar)', 'Bahadura Sweets (since 1920)']
      },
      {
        name: 'Morena Gajak (Sesame & Jaggery Brittle)',
        category: 'Sweets',
        desc: 'Paper-thin winter sweet pounded from roasted sesame seeds, pure ghee, and organic jaggery.',
        iconicSpots: ['Ratnakar Gajak Bhandar (Maharaj Bada)']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Silver Saloon (Usha Kiran Palace by Taj)',
        cuisine: 'Royal Maratha & Nepalese Cuisine',
        priceRange: '₹3,000 for two',
        mustTry: 'Scindia Royal Thali, Murgh Malwa & Shrikhand',
        bookingPlatform: 'Direct'
      },
      {
        name: 'Bahadura Sweets (Naya Bazaar)',
        cuisine: 'Heritage Sweets & Snacks',
        priceRange: '₹200 for two',
        mustTry: 'Hot Gulab Jamun, Motichoor Laddoo & Bedai',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Man Mandir Palace & Gwalior Fort Son-et-Lumière (Sound & Light Show)',
        duration: '1 Hour',
        priceEstimate: '₹100 per person',
        desc: 'Watch the painted turquoise tiles of Raja Man Singh Tomar’s palace light up with Amitabh Bachchan’s voice narration.',
        category: 'Fortress Light Show'
      }
    ],
    nearbyAttractions: [
      { name: 'Tomb of Tansen & Mohammad Ghaus', distanceKm: 4, desc: '16th-century Mughal mausoleums with stone latticework.' },
      { name: 'Mitawali Chausath Yogini Temple (Bateshwar)', distanceKm: 40, desc: 'Circular 64-pillar temple that inspired the design of the old Indian Parliament building.' }
    ]
  },

  // 5. UJJAIN (Madhya Pradesh)
  {
    id: 'ujjain',
    name: 'Ujjain (Mahakal Nagari / Avantika)',
    state: 'Madhya Pradesh',
    tagline: 'Mahakaleshwar Jyotirlinga Bhasma Aarti, Sacred Shipra Ghats & Simhastha Kumbh Mela',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'One of the seven sacred Sapta Puri cities and the prime meridian of ancient Hindu astronomy (Greenwich of ancient India). Famed for the South-facing Dakshinmukhi Mahakaleshwar Jyotirlinga, the sacred 4:00 AM Bhasma Aarti, and the 12-yearly Simhastha Kumbh Mela on the Shipra River.',
    latitude: 23.1765,
    longitude: 75.7885,
    airport: 'Devi Ahilyabai Holkar Airport, Indore (55 km)',
    railwayStation: 'Ujjain Junction (UJN)',
    festivalIds: ['maha-shivaratri', 'diwali', 'kumbh-mela-ujjain'],
    monumentIds: ['mahakaleshwar-temple', 'kal-bhairav-ujjain', 'vedh-shala-observatory', 'ram-ghat-shipra'],
    religiousSites: [
      {
        name: 'Mahakaleshwar Jyotirlinga & Mahakal Lok Corridor',
        type: 'Supreme Svayambhu Jyotirlinga Shrine',
        desc: 'Home to the divine 3-tiered temple sanctum where Lord Shiva is worshipped with sacred funeral pyre ashes (Bhasma) before dawn; complemented by the 900-meter artistically illuminated Mahakal Lok corridor.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Kal Bhairav Temple & Ram Ghat',
        type: 'Ancient Tantric Shrine & Sacred Ghat',
        desc: 'Revered guardian deity of Ujjain where liquor is offered into the deity’s mouth, and Ram Ghat where millions bathe during Kumbh Mela.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Vedh Shala (Jantar Mantar Observatory)',
        timing: '9:00 AM – 6:00 PM',
        highlight: '1725 astronomical observatory built by Maharaja Jai Singh II with 5 massive stone instruments still calculating planetary orbits.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Mahakal Bhasma Aarti at 4:00 AM', 'Shipra River evening Deepdan floating diyas', 'Kalidasa Samaroh classical Sanskrit theatre'],
      handicrafts: ['Bhairavgarh Batik Wax Print', 'Brass Idols', 'Rudraksha Mala Stringing'],
      folkArt: ['Malwi folk song', 'Mandana wall paintings'],
      danceForms: ['Matki folk dance', 'Classical Sanskrit Drama']
    },
    heritageStreets: [
      {
        name: 'Mahakal Mandir Marg & Gopal Mandir Gali',
        famousFor: 'Pure silver bilva leaves, authentic rudraksha, bhasma vibhuti, and traditional Malwi sweets.',
        bestTime: '6:00 AM – 10:00 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Malwi Dal Bafla with Desi Ghee, Laddoo & Kadhi',
        category: 'Main Course',
        desc: 'Wheat dough balls boiled in herbal water, baked over cow dung charcoal, drowned in boiling pure desi ghee and crushed into spicy dal.',
        iconicSpots: ['Meghdoot Hotel', 'Guru Kripa Restaurant']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Guru Kripa Restaurant (Freeganj)',
        cuisine: 'Traditional Malwi Pure Vegetarian Thali',
        priceRange: '₹400 for two',
        mustTry: 'Dal Bafla Thali, Sev Tamatar & Shrikhand',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Dawn Shipra Ram Ghat Heritage Walk & Evening Maha Aarti',
        duration: '2 Hours',
        priceEstimate: 'Free Devotional Gathering',
        desc: 'Witness priests perform the grand 108-wick brass lamp Shipra Aarti amidst ringing bells.',
        category: 'Spiritual Riverfront'
      }
    ],
    nearbyAttractions: [
      { name: 'Sandipani Ashram', distanceKm: 5, desc: 'Ancient hermitage where Lord Krishna, Balarama, and Sudama studied the 64 arts in 64 days.' },
      { name: 'Harsiddhi Temple (51 Shakti Peethas)', distanceKm: 1, desc: 'Where Goddess Sati’s elbow fell; features two towering 50-foot lamp posts lit with hundreds of oil lamps.' }
    ]
  },

  // 6. CHANDIGARH (Punjab / Haryana)
  {
    id: 'chandigarh',
    name: 'Chandigarh (The City Beautiful)',
    state: 'Punjab',
    tagline: 'Le Corbusier UNESCO Capitol Complex, Nek Chand Rock Garden & Sukhna Lake',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Conceived by Swiss-French modernist architect Le Corbusier as independent India’s first planned city, Chandigarh is globally celebrated for its UNESCO World Heritage Capitol Complex, Nek Chand’s fantasy 40-acre Rock Garden built from recycled waste, and tree-lined sector grid.',
    latitude: 30.7333,
    longitude: 76.7794,
    airport: 'Shaheed Bhagat Singh International Airport (IXC)',
    railwayStation: 'Chandigarh Junction (CDG)',
    festivalIds: ['baisakhi-punjab', 'hola-mohalla-punjab', 'lohra-punjab', 'diwali'],
    monumentIds: ['rock-garden-chandigarh', 'capitol-complex-unesco', 'sukhna-lake'],
    religiousSites: [
      {
        name: 'Chandi Mandir Temple',
        type: 'Ancient Goddess Shrine',
        desc: 'Historic shrine dedicated to Goddess Chandi (the deity of power) after which the city was named.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Government Museum and Art Gallery (Sector 10)',
        timing: '10:00 AM – 4:30 PM (Closed Mondays)',
        highlight: 'Designed by Le Corbusier; world-class collection of Gandharan Buddhist sculptures and Pahari miniature paintings.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Morning jog and boating at Sukhna Lake', 'Baisakhi folk bhangra performances', 'Exploring Zakir Hussain Rose Garden during the annual Rose Festival'],
      handicrafts: ['Phulkari Silk Embroidery', 'Punjabi Juttis', 'Terracotta Garden Pots'],
      folkArt: ['Nek Chand recycled pottery sculptures', 'Bhangra folk props'],
      danceForms: ['Bhangra', 'Giddha', 'Jhumar']
    },
    heritageStreets: [
      {
        name: 'Sector 17 Plaza & Sector 22 Shastri Market',
        famousFor: 'Phulkari dupattas, handcrafted brassware, and traditional Punjabi juttis.',
        bestTime: '11:00 AM – 9:00 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Authentic Amritsari Kulcha with Chole & Sweet Lassi',
        category: 'Breakfast',
        desc: 'Crisp layered tandoor bread stuffed with spiced potato and onion, topped with a slab of homemade white butter.',
        iconicSpots: ['Bansal Amritsari Kulcha (Sector 37)', 'Garg Chaat (Sector 23)']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Pal Dhaba (Sector 28)',
        cuisine: 'Authentic Punjabi Highway Heritage Food',
        priceRange: '₹700 for two',
        mustTry: 'Butter Chicken, Dal Makhani, Keema Naan & Lassi',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Nek Chand Rock Garden & Open Hand Monument Tour',
        duration: '2.5 Hours',
        priceEstimate: '₹30 entry',
        desc: 'Walk through surreal sculpture courtyards made from discarded porcelain sinks, glass bangles, and industrial slag.',
        category: 'Modernist & Folk Art'
      }
    ],
    nearbyAttractions: [
      { name: 'Pinjore Yadavindra Gardens', distanceKm: 22, desc: '17th-century Mughal terraced garden with water fountains and descending pavilions.' },
      { name: 'Anandpur Sahib Takht', distanceKm: 80, desc: 'Birthplace of the Khalsa panth.' }
    ]
  },

  // 7. ANANDPUR SAHIB (Punjab)
  {
    id: 'anandpur-sahib',
    name: 'Anandpur Sahib (Holy City of Bliss)',
    state: 'Punjab',
    tagline: 'Birthplace of the Khalsa, Takht Sri Kesgarh Sahib, Hola Mohalla Martial Arts & Virasat-e-Khalsa',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Founded in 1665 by Ninth Sikh Guru, Guru Tegh Bahadur, Anandpur Sahib is where Tenth Guru, Guru Gobind Singh, created the order of the Khalsa on Baisakhi in 1699. Famous worldwide for the grand martial arts festival "Hola Mohalla" and the architectural museum Virasat-e-Khalsa.',
    latitude: 31.2356,
    longitude: 76.4988,
    airport: 'Chandigarh International Airport (85 km)',
    railwayStation: 'Anandpur Sahib Railway Station (ANSB)',
    festivalIds: ['hola-mohalla-punjab', 'baisakhi-punjab', 'gurpurab-punjab', 'lohra-punjab'],
    monumentIds: ['takht-sri-kesgarh-sahib', 'virasat-e-khalsa', 'anandgarh-fort'],
    religiousSites: [
      {
        name: 'Takht Sri Kesgarh Sahib',
        type: 'One of the Five Supreme Takhts of Sikhism',
        desc: 'Perched on a hilltop where Guru Gobind Singh baptized the Panj Pyare (Five Beloved Ones); houses the Guru’s original weapons (khanda, dhal, and scimitar).',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Gurdwara Sis Ganj Sahib',
        type: 'Sacred Martyrdom Memorial',
        desc: 'Where the severed head (Sis) of Guru Tegh Bahadur was cremated with supreme honor after his martyrdom in Delhi in 1675.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Virasat-e-Khalsa (Heritage Museum of Sikhism)',
        timing: '10:00 AM – 4:30 PM (Closed Mondays)',
        highlight: 'Moshe Safdie architectural masterpiece narrating 500 years of Sikh history with immersive audio-visual exhibits and soaring canyon-like towers.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Hola Mohalla Nihang warrior horse-riding and Gatka mock battles in March', '24/7 Guru Ka Langar community kitchen', 'Akhand Path recitation'],
      handicrafts: ['Nihang Kirpans & Steel Kara', 'Phulkari Dupattas', 'Handspun Turban Cloth'],
      folkArt: ['Gatka martial arts', 'Dhad-Sarang Sikh balladeers'],
      danceForms: ['Bhangra', 'Gatka Sword Martial Dance']
    },
    heritageStreets: [
      {
        name: 'Kesgarh Sahib Bazaar',
        famousFor: 'Sikh religious artifacts, steel kadas, ceremonial swords, and pure desi ghee pinni sweets.',
        bestTime: '7:00 AM – 9:00 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Guru Ka Langar (Karah Prasad, Dal, Roti & Kheer)',
        category: 'Sacred Prasad',
        desc: 'Sacred wholewheat pudding cooked in equal parts pure desi ghee, sugar, and flour, served warm.',
        iconicSpots: ['Takht Sri Kesgarh Sahib Langar Hall']
      },
      {
        name: 'Makki Di Roti & Sarson Da Saag with White Butter',
        category: 'Main Course',
        desc: 'Winter mustard greens slow-simmered for 6 hours with ginger and garlic, served with maize flatbread and jaggery.',
        iconicSpots: ['Heritage Dhabas along Anandpur Highway']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Kisan Dhaba (Nangal Road)',
        cuisine: 'Traditional Punjabi Pure Veg',
        priceRange: '₹350 for two',
        mustTry: 'Dal Tadka, Paneer Bhurji, Tandoori Roti & Sweet Lassi',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Full Day Virasat-e-Khalsa & Fortresses Heritage Walk',
        duration: '4 Hours',
        priceEstimate: 'Free Entry (Pass required)',
        desc: 'Explore the five historic defense forts built by Guru Gobind Singh around the holy city.',
        category: 'Sikh History'
      }
    ],
    nearbyAttractions: [
      { name: 'Naina Devi Temple Hilltop', distanceKm: 20, desc: 'Ancient Shakti Peetha overlooking Gobind Sagar Lake.' },
      { name: 'Bhakra Nangal Dam', distanceKm: 35, desc: 'One of the highest straight gravity dams in the world on the Sutlej River.' }
    ]
  },

  // 8. BHUJ (Kutch, Gujarat)
  {
    id: 'bhuj',
    name: 'Bhuj (Gateway to the Great Rann of Kutch)',
    state: 'Gujarat',
    tagline: 'White Desert Rann Utsav, Aina Mahal Venetian Glass Palace, Prag Mahal & Rogan Art',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'The historical capital of the Jadeja Rajput Kingdom of Kutch, founded in 1510 by Rao Hamir. Famous as the launching point for the world-renowned White Desert "Rann Utsav", and surrounded by 16 unique tribal artisan communities.',
    latitude: 23.2420,
    longitude: 69.6669,
    airport: 'Bhuj Airport (BHJ)',
    railwayStation: 'Bhuj Railway Station (BHUJ)',
    festivalIds: ['rann-utsav-kutch', 'navratri-garba-gujarat', 'uttarayan-kite-gujarat'],
    monumentIds: ['aina-mahal', 'prag-mahal', 'chhatardi-royal-cenotaphs'],
    religiousSites: [
      {
        name: 'Shri Swaminarayan Temple Bhuj',
        type: 'Monumental Marble Sanctuary',
        desc: 'Dazzling 35,000 sq ft white marble temple with gold-leafed domes and intricately carved pillars.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Kalo Dungar (Black Hill) Dattatreya Temple',
        type: 'Highest Point in Kutch',
        desc: '462-meter hilltop shrine where wild jackals are fed sacred prasad daily with panoramic views of the endless salt desert.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Aina Mahal (Palace of Mirrors, 1752)',
        timing: '9:00 AM – 11:45 AM, 3:00 PM – 5:45 PM (Closed Thursdays)',
        highlight: 'Created by master architect Ramsingh Malam using Venetian glass mirrors, Dutch tiles, and English pendulum clocks.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Kutch Museum (Oldest in Gujarat, 1877)',
        timing: '10:00 AM – 5:00 PM (Closed Wednesdays)',
        highlight: 'Extinct Kutchi script inscriptions, gold tribal ornaments, and camel armory.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Full moon walk on the sparkling White Salt Desert at Dhordo', 'Rogan fabric painting using boiled castor oil paste in Nirona village', 'Mutwa and Rabari mirrorwork embroidery'],
      handicrafts: ['Rogan Art', 'Ajrakh Natural Dye Block Print', 'Kutchi Mud Lipan Kam'],
      folkArt: ['Kutchi camel leather embroidery', 'Copper bell making'],
      danceForms: ['Garba', 'Dandiya Raas', 'Kutchi Sword Dance']
    },
    heritageStreets: [
      {
        name: 'Shroff Bazaar & Danda Bazaar',
        famousFor: 'Hand-embroidered Rabari quilts, silver anklets, Bandhani tie-dye sarees, and Kutchi shawls.',
        bestTime: '10:00 AM – 8:30 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Authentic Kutchi Dabeli with Pomegranate & Peanuts',
        category: 'Street Food',
        desc: 'Invented in Mandvi/Bhuj: pav bun stuffed with spicy potato mash, sweet tamarind chutney, and roasted spiced peanuts.',
        iconicSpots: ['Bhavna Dabeli (Station Road)', 'Rupam Dabeli']
      },
      {
        name: 'Kutchi Bajra No Rotlo with Ringna No Olo & Chhas',
        category: 'Main Course',
        desc: 'Charcoal-roasted thick millet bread served with fire-roasted smoked eggplant mash, fresh garlic chutney, and buttermilk.',
        iconicSpots: ['Toran Dining Hall', 'Noorani Mahal']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Toran Dining Hall (Station Road)',
        cuisine: 'Authentic Kutchi & Gujarati Thali',
        priceRange: '₹450 for two',
        mustTry: 'Unlimited Kutchi Thali with Ringna No Olo, Kadhi & Khichdi',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Excursion to Nirona & Bhujodi Master Artisan Villages',
        duration: '4 Hours',
        priceEstimate: '₹1,500 cab',
        desc: 'Meet Padma Shri master artisans demonstrating 400-year-old Rogan castor art and copper bell tuning.',
        category: 'Artisan Heritage'
      }
    ],
    nearbyAttractions: [
      { name: 'The Great Rann of Kutch White Desert (Dhordo)', distanceKm: 85, desc: '7,500 sq km of blinding white salt desert glowing under moonlight.' },
      { name: 'Dholavira Harappan UNESCO World Heritage Metropolis', distanceKm: 210, desc: '5,000-year-old Indus Valley city with world’s oldest rainwater reservoir system.' }
    ]
  },

  // 9. VADODARA (Baroda, Gujarat)
  {
    id: 'vadodara',
    name: 'Vadodara (Baroda / Cultural Capital of Gujarat)',
    state: 'Gujarat',
    tagline: 'Laxmi Vilas Palace (4x Size of Buckingham), Gaekwad Heritage & World Famous Garba',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'The majestic cultural capital of Gujarat, transformed in the 19th century by visionary Maharaja Sayajirao Gaekwad III. Home to the palatial Laxmi Vilas Palace (four times the size of Buckingham Palace), Maharaja Sayajirao University, and India’s most synchronized 50,000-dancer Navratri Garba festivals.',
    latitude: 22.3072,
    longitude: 73.1812,
    airport: 'Vadodara Airport (BDQ)',
    railwayStation: 'Vadodara Junction (BRC)',
    festivalIds: ['navratri-garba-gujarat', 'uttarayan-kite-gujarat', 'diwali'],
    monumentIds: ['laxmi-vilas-palace', 'kirti-mandir-baroda', 'champaner-pavagadh'],
    religiousSites: [
      {
        name: 'Kirti Mandir & EME Temple (Dakshinamurty)',
        type: 'Gaekwad Royal Cenotaph & Aluminum Geodesic Temple',
        desc: 'Royal memorial adorned with frescoes by Nandalal Bose, and the modern aluminum geodesic temple run by the Indian Army.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Baroda Museum & Picture Gallery (Sayaji Baug)',
        timing: '10:30 AM – 5:00 PM',
        highlight: 'Founded in 1894; features a 22-meter blue whale skeleton, European oil masters (Turner, Constable), and Tibetan bronzes.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Maharaja Fateh Singh Museum (Laxmi Vilas Estate)',
        timing: '10:00 AM – 5:30 PM (Closed Mondays)',
        highlight: 'Houses the largest private collection in the world of original Raja Ravi Varma royal portrait paintings.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['United Way Baroda Navratri Garba with 50,000 dancers in traditional Chaniya Choli', 'Evening walks under century-old banyan trees in Sayaji Baug', 'Sayajirao education patron traditions'],
      handicrafts: ['Sankheda Lacquered Wooden Furniture', 'Vadodara Beadwork', 'Patan Patola Weaving'],
      folkArt: ['Pithora painting', 'Garba music arrangement'],
      danceForms: ['Garba', 'Dandiya Raas', 'Classical Bharatanatyam (Faculty of Performing Arts)']
    },
    heritageStreets: [
      {
        name: 'Mandvi & Lehripura Gate Bazaar',
        famousFor: 'Mughal gateway shopping, traditional Garba attires, silver jewellery, and famous Sev Usal.',
        bestTime: '11:00 AM – 9:30 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Baroda Mahakali Sev Usal with Tari & Butter Bun',
        category: 'Street Food',
        desc: 'Spicy dried pea curry cooked in secret red masala, poured over crisp gram flour sev and served with extra fiery tari gravy.',
        iconicSpots: ['Shree Mahakali Sev Usal (Navlakhi Compound)', 'Jay Mahakali Sev Usal']
      },
      {
        name: 'Bhakarwadi & Duliram Peda',
        category: 'Sweets',
        desc: 'Crisp spiral savoury rolls stuffed with coconut and poppy seeds, followed by century-old saffron milk pedas.',
        iconicSpots: ['Jagdish Farshan (since 1938)', 'Duliram Peda']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Mandap Restaurant (Express Hotel)',
        cuisine: 'Traditional Royal Gujarati Thali',
        priceRange: '₹800 for two',
        mustTry: 'Undhiyu, Rotla with White Butter, Rasawala Khaman & Basundi',
        bookingPlatform: 'Direct'
      },
      {
        name: 'Jagdish Farshan (Jubilee Baug)',
        cuisine: 'Iconic Baroda Namkeen Heritage',
        priceRange: '₹300 for two',
        mustTry: 'Bhakarwadi, Lilo Chevdo & Samosa',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Laxmi Vilas Palace Royal Audio Guide Tour',
        duration: '2.5 Hours',
        priceEstimate: '₹225 entry with audio guide',
        desc: 'Walk through the 170-room Indo-Saracenic palace, Venetian mosaic courtyards, and Belgian stained glass halls.',
        category: 'Royal Palace Tour'
      }
    ],
    nearbyAttractions: [
      { name: 'Champaner-Pavagadh UNESCO World Heritage Archaeological Park', distanceKm: 48, desc: '8th-century preserved Hindu-Muslim medieval capital with Jama Masjid.' },
      { name: 'Statue of Unity (Kevadia)', distanceKm: 90, desc: 'World’s tallest 182-meter statue dedicated to Sardar Vallabhbhai Patel on Narmada river.' }
    ]
  },

  // 10. LEH (Ladakh)
  {
    id: 'leh',
    name: 'Leh (Capital of the High Altitude Desert Kingdom)',
    state: 'Ladakh',
    tagline: 'Leh Palace, Hemis Monastery Masked Dances, Pangong Tso & High Mountain Passes',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Perched at 3,500 meters in the Indus Valley, Leh was the ancient trading hub along the Silk Route connecting India with Tibet, Yarkand, and Central Asia. Dominated by the 17th-century nine-storey Leh Palace and surrounded by high Tibetan Buddhist gompas.',
    latitude: 34.1526,
    longitude: 77.5771,
    airport: 'Kushok Bakula Rimpochee Airport (IXL)',
    railwayStation: 'Jammu Tawi (700 km) / Road connection via Manali-Leh & Srinagar-Leh Highway',
    festivalIds: ['hemis-festival-ladakh', 'losar-ladakh', 'ladakh-festival'],
    monumentIds: ['leh-palace', 'shanti-stupa-leh', 'hemis-monastery', 'thiksey-monastery'],
    religiousSites: [
      {
        name: 'Hemis & Thiksey Tibetan Buddhist Monasteries',
        type: 'Ancient Drukpa & Gelugpa Gompas',
        desc: 'Hemis (host of the sacred Guru Padmasambhava Cham masked dance festival) and Thiksey (resembling Potala Palace with a 49-foot Maitreya statue).',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Shanti Stupa & Jama Masjid Leh',
        type: 'White-Domed Peace Pagoda & 1666 CE Mosque',
        desc: 'Shanti Stupa built by Japanese monks offering 360-degree views of snowcapped Stok Kangri.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Central Asian Museum Leh (Old Town)',
        timing: '10:00 AM – 6:00 PM',
        highlight: 'Four-storey stone tower documenting centuries of Silk Route caravan trade, manuscripts, and carpets.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Hemis Festival Sacred Cham dance of monks wearing silk robes and grotesque masks', 'Spinning prayer wheels along Old Town heritage walks', 'Drinking salty butter tea (Gur Gur Chai)'],
      handicrafts: ['Pashmina & Cashmere Shawls', 'Tibetan Thangka Silk Painting', 'Silver & Turquoise Jewellery'],
      folkArt: ['Ladakhi folk songs', 'Clay statue sculpting'],
      danceForms: ['Cham Mask Dance', 'Jabro dance of Changpa nomads']
    },
    heritageStreets: [
      {
        name: 'Leh Main Bazaar & Tibetan Refugee Market',
        famousFor: 'Natural apricot oil, authentic hand-knitted pashmina, prayer flags, and silver prayer wheels.',
        bestTime: '10:00 AM – 8:30 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Ladakhi Chupri, Skyu & Thukpa Soup with Tingmo Bread',
        category: 'Main Course',
        desc: 'Hearty hand-rolled thumb pasta simmered in root vegetable broth, paired with fluffy steamed flower buns.',
        iconicSpots: ['The Tibetan Kitchen', 'Gesmo Restaurant']
      },
      {
        name: 'Butter Tea (Gur Gur Chai) with Roasted Barley Tsampa',
        category: 'Beverage',
        desc: 'Traditional high-altitude tea churned with yak butter and Himalayan rock salt in wooden cylinders.',
        iconicSpots: ['Leh Old Town Tea stalls']
      }
    ],
    heritageRestaurants: [
      {
        name: 'The Tibetan Kitchen (Fort Road)',
        cuisine: 'Authentic Ladakhi, Tibetan & Bhutanese',
        priceRange: '₹800 for two',
        mustTry: 'Gyathuk, Shaphalay, Skyu & Fresh Apricot Crumble',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Old Town Heritage Walk to Leh Palace & Tsemo Fort',
        duration: '2.5 Hours',
        priceEstimate: '₹25 entry ticket',
        desc: 'Explore mud-brick medieval alleys and climb to the 16th-century fortress overlooking the Himalayas.',
        category: 'Mountain Heritage'
      }
    ],
    nearbyAttractions: [
      { name: 'Pangong Tso Blue Salt Lake', distanceKm: 160, desc: 'World’s highest saltwater lake at 4,225m changing colors from azure to cobalt.' },
      { name: 'Nubra Valley & Hunder Sand Dunes', distanceKm: 125, desc: 'High-altitude desert home to double-humped Bactrian camels across Khardung La Pass (5,359m).' }
    ]
  },

  // 11. SRINAGAR (Jammu & Kashmir)
  {
    id: 'srinagar',
    name: 'Srinagar (Venice of the East / Paradise on Earth)',
    state: 'Jammu & Kashmir',
    tagline: 'Dal Lake Wooden Houseboats, Floating Vegetable Markets, Mughal Terraced Gardens & Kashmiri Wazwan',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Emperor Jahangir declared: "Gar firdaus bar-rue zamin ast, hami asto, hamin asto, hamin ast" (If there is a paradise on earth, it is here, it is here, it is here). Situated in the Kashmir Valley along the Jhelum River, famed for carved wooden houseboats on Dal Lake and terraced Mughal fountains.',
    latitude: 34.0837,
    longitude: 74.7973,
    airport: 'Sheikh ul-Alam International Airport Srinagar (SXR)',
    railwayStation: 'Srinagar Railway Station (SINA) / Banihal',
    festivalIds: ['tulip-festival-kashmir', 'eid-ul-fitr', 'shikara-festival-kashmir'],
    monumentIds: ['shalimar-bagh', 'nishat-bagh', 'hazratbal-shrine', 'shankaracharya-temple', 'jamia-masjid-srinagar'],
    religiousSites: [
      {
        name: 'Hazratbal Shrine & Jamia Masjid Srinagar',
        type: 'White Marble Sufi Shrine & Deodar Wood Mosque',
        desc: 'Hazratbal houses a sacred relic of Prophet Muhammad; Jamia Masjid in Nowhatta features 378 monumental Himalayan deodar wood pillars.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Shankaracharya Temple (Gopadari Hill)',
        type: '9th-Century Stone Shiva Shrine',
        desc: 'Perched 1,000 feet above the valley floor on Takht-e-Suleiman hill, visited by Adi Shankara in the 8th century.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Sri Pratap Singh (SPS) Museum (Lal Mandi)',
        timing: '10:00 AM – 4:30 PM (Closed Mondays)',
        highlight: '6th-century terracotta tiles from Harwan Buddhist site, Kashmiri shawls, and ancient Sanskrit-Sharada manuscripts.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Dawn Shikara ride to the 150-year-old floating vegetable market on Dal Lake', 'Sipping Kehwa infused with saffron and crushed almonds', 'Master artisans carving walnut wood'],
      handicrafts: ['Pashmina Sozni Shawls', 'Walnut Wood Carvings', 'Papier-Mache Enameling', 'Kashmiri Silk Carpets'],
      folkArt: ['Sufiana Kalam music on Santoor', 'Rouf folk dance'],
      danceForms: ['Rouf', 'Bhand Pather folk theatre', 'Hafiza dance']
    },
    heritageStreets: [
      {
        name: 'Old Srinagar Downtown (Shehr-e-Khaas) & Polo Ground',
        famousFor: 'Centuries-old wooden bridges (Zaina Kadal), copper samovars, saffron dealers, and pashmina weavers.',
        bestTime: '10:00 AM – 7:30 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Traditional Kashmiri 36-Course Wazwan (Rista, Rogan Josh & Gushtaba)',
        category: 'Main Course',
        desc: 'Royal feast of mutton hand-pounded for hours on stone plinths, cooked in saffron gravy and yogurt with fennel and dried ginger.',
        iconicSpots: ['Ahdoos (since 1918)', 'Mughal Darbar (Residency Road)']
      },
      {
        name: 'Kashmiri Saffron Kehwa with Girda Bread',
        category: 'Beverage',
        desc: 'Green tea simmered in a brass charcoal samovar with saffron strands, cinnamon, cardamom, and sliced almonds.',
        iconicSpots: ['Chai Jaai (Bungalow 4, Polo Ground)']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Ahdoos Restaurant (Residency Road, Estd 1918)',
        cuisine: 'Legendary Kashmiri Wazwan',
        priceRange: '₹1,200 for two',
        mustTry: 'Rogan Josh, Rista, Tabak Maaz, Gushtaba & Phirni',
        bookingPlatform: 'Direct'
      },
      {
        name: 'Chai Jaai Tea Room (The Bund)',
        cuisine: 'Kashmiri Artisanal Bakery & Tea',
        priceRange: '₹600 for two',
        mustTry: 'Saffron Kehwa, Noon Chai, Lavasa & Walnut Tart',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Dawn Dal Lake Floating Market & Lotus Garden Shikara Tour',
        duration: '2.5 Hours',
        priceEstimate: '₹700 per shikara',
        desc: 'Glide silently across mirror-like waters at 5:30 AM and watch floating barter trade amidst water lilies.',
        category: 'Water Experience'
      }
    ],
    nearbyAttractions: [
      { name: 'Shalimar & Nishat Mughal Gardens', distanceKm: 12, desc: '17th-century terraced pleasure gardens with cascading fountains and Chinar trees built by Emperor Jahangir.' },
      { name: 'Gulmarg Meadow of Flowers & Gondola', distanceKm: 50, desc: 'World’s highest ski resort with Gondola rising to 3,980 meters.' }
    ]
  },

  // 12. HYDERABAD (Telangana)
  {
    id: 'hyderabad',
    name: 'Hyderabad (City of Pearls & Nizams)',
    state: 'Telangana',
    tagline: 'Charminar, Golconda Fort Echoes, Chowmahalla Palace & World Famous Dum Biryani',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Established in 1591 by Muhammad Quli Qutb Shah along the Musi River, Hyderabad was ruled by the wealthy Asaf Jahi Nizams. World-famous for the monumental 400-year-old Charminar, acoustic wonders of Golconda Fort, lustrous pearls, and authentic Hyderabadi Dum Biryani.',
    latitude: 17.3850,
    longitude: 78.4867,
    airport: 'Rajiv Gandhi International Airport (HYD)',
    railwayStation: 'Hyderabad Deccan (HYB) / Secunderabad (SC) / Kacheguda (KCG)',
    festivalIds: ['bonalu-telangana', 'bathukamma-telangana', 'eid-ul-fitr', 'diwali'],
    monumentIds: ['charminar', 'golconda-fort', 'chowmahalla-palace', 'qutb-shahi-tombs'],
    religiousSites: [
      {
        name: 'Mecca Masjid (1694 CE)',
        type: 'Monumental Granite Mosque',
        desc: 'Built with bricks made from earth brought from Mecca, capable of holding 10,000 worshippers.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Ujjaini Mahakali Temple (Secunderabad)',
        type: 'Historic Goddess Shrine',
        desc: 'Epicenter of the vibrant annual Bonalu festival where women carry brass pots decorated with neem and turmeric.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Salar Jung Museum (Darulshifa)',
        timing: '10:00 AM – 5:00 PM (Closed Fridays)',
        highlight: 'One of the largest one-man art collections in the world; features the Veiled Rebecca marble statue and the 19th-century Musical Clock.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Chowmahalla Palace & Vintage Car Collection',
        timing: '10:00 AM – 5:00 PM (Closed Fridays)',
        highlight: 'Grand Khilwat Durbar Hall with 19 Belgian crystal chandeliers and the 1912 Nizam Yellow Rolls Royce.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Bonalu offering in July–Aug', 'Bathukamma floral pyramid arrangement during Navratri', 'Afternoon Irani chai and Osmania biscuits at Nimrah Cafe'],
      handicrafts: ['Hyderabadi Natural Pearl Drilling', 'Bidriware Silver Inlay', 'Laad Bazaar Lacquer Bangles'],
      folkArt: ['Cheriyal Scroll Painting', 'Dappu dance'],
      danceForms: ['Perini Sivatandavam (Warrior Dance)', 'Kuchipudi', 'Qawwali']
    },
    heritageStreets: [
      {
        name: 'Laad Bazaar & Charminar Old City Lanes',
        famousFor: 'Glittering glass and stone-studded lacquer bangles, pure Ittar, Basra pearls, and Zari fabrics.',
        bestTime: '11:00 AM – 10:00 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Authentic Hyderabadi Mutton Dum Biryani with Mirchi Ka Salan',
        category: 'Main Course',
        desc: 'Long-grain aged basmati rice layered with raw marinated goat meat, sealed with dough and slow-cooked over charcoal embers.',
        iconicSpots: ['Bawarchi (RTC X Roads)', 'Paradise Food Court (since 1953)', 'Shadab (High Court)']
      },
      {
        name: 'Irani Chai with Sweet-Salt Osmania Biscuits & Haleem',
        category: 'Beverage',
        desc: 'Thick condensed milk tea paired with melt-in-mouth crumbly biscuits, and slow-cooked meat-wheat Haleem during Ramadan.',
        iconicSpots: ['Nimrah Cafe & Bakery (next to Charminar)', 'Cafe Bahar']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Hotel Shadab (Ghansi Bazaar near High Court)',
        cuisine: 'Authentic Hyderabadi & Mughlai',
        priceRange: '₹600 for two',
        mustTry: 'Mutton Dum Biryani, Boti Kebab, Gurda Fry & Double Ka Meetha',
        bookingPlatform: 'Direct'
      },
      {
        name: 'Nimrah Cafe & Bakery (Charminar)',
        cuisine: 'Irani Cafe Heritage',
        priceRange: '₹150 for two',
        mustTry: 'Irani Chai, Osmania Biscuits, Tie Biscuit & Bun Malai',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Golconda Fort Acoustic Clapping & Sound/Light Show',
        duration: '3 Hours',
        priceEstimate: '₹25 entry + show',
        desc: 'Test the acoustic warning system where a clap under the entrance dome resonates at the highest citadel point 1 km away.',
        category: 'Citadel Acoustics'
      }
    ],
    nearbyAttractions: [
      { name: 'Qutb Shahi Tombs (Ibrahim Bagh)', distanceKm: 9, desc: 'Cluster of 7 domed royal mausoleums set in landscaped Persian charbagh gardens.' },
      { name: 'Ramoji Film City', distanceKm: 32, desc: 'Guinness World Record largest film studio complex spanning 2,000 acres.' }
    ]
  },

  // 13. GOA (Old Goa / Panaji)
  {
    id: 'goa',
    name: 'Goa (Panaji & Velha Goa)',
    state: 'Goa',
    tagline: 'UNESCO Churches of Old Goa, Fontainhas Latin Quarter, Shigmotsav & Mandovi Cruises',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Ruled by the Portuguese for 451 years (1510–1961), Goa presents a unique fusion of Indian and Iberian heritage. Celebrated for the UNESCO World Heritage baroque churches of Old Goa, the pastel-colored heritage villas of Fontainhas in Panaji, and the vibrant spring festival of Shigmo.',
    latitude: 15.2993,
    longitude: 74.1240,
    airport: 'Goa International Airport Dabolim (GOI) / Manohar International Airport Mopa (GOX)',
    railwayStation: 'Madgaon Junction (MAO) / Karmali (KRMI)',
    festivalIds: ['goa-carnival', 'shigmo-festival-goa', 'christmas-goa', 'bonderam-festival-goa'],
    monumentIds: ['basilica-of-bom-jesus', 'se-cathedral-goa', 'fort-aguada', 'church-of-our-lady-immaculate-conception'],
    religiousSites: [
      {
        name: 'Basilica of Bom Jesus (UNESCO World Heritage)',
        type: '1605 CE Baroque Sanctuary',
        desc: 'Houses the sacred non-decomposing relics of St. Francis Xavier inside a silver casket crafted by Florentine sculptors.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Se Cathedral & Mangueshi Temple',
        type: 'Largest Church in Asia & 16th-Century Shiva Shrine',
        desc: 'Se Cathedral houses the famous "Golden Bell"; Mangueshi Temple in Priol features a 7-storey octagonal Deepstambha lamp tower.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Museum of Christian Art (Old Goa)',
        timing: '9:30 AM – 5:00 PM',
        highlight: 'Indo-Portuguese sacred art, ivory carvings, and gold-embroidered silk vestments.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Houses of Goa Museum (Salvador do Mundo)',
        timing: '10:00 AM – 7:30 PM (Closed Mondays)',
        highlight: 'Architect Gerard da Cunha’s ship-shaped museum documenting indigenous Goan domestic architecture.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Shigmotsav spring float parades depicting Hindu mythology', 'Annual Goa Carnival before Lent', 'Susegad relaxed lifestyle'],
      handicrafts: ['Azulejos Hand-Painted Ceramic Tiles', 'Coconut Shell & Terracotta Pottery', 'Brass Lamps'],
      folkArt: ['Fugdi and Dhalo tribal dances', 'Konkani Mando love ballads'],
      danceForms: ['Ghumat Aarti', 'Dekhni', 'Corridinho (Portuguese Folk Dance)']
    },
    heritageStreets: [
      {
        name: 'Fontainhas (Latin Quarter, Panaji)',
        famousFor: 'Cobblestone streets with pastel yellow and cobalt blue Portuguese villas, Azulejos ceramic tiles, and bakeries.',
        bestTime: '8:00 AM – 7:00 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Goan Fish Curry Thali with Kingfish Rava Fry & Solkadhi',
        category: 'Main Course',
        desc: 'Tangy coconut-kokum fish curry cooked with freshly ground Goan spices, served with red boiled rice and crispy semolina-crusted fish.',
        iconicSpots: ['Ritz Classic (Panaji)', 'Vinayak Family Restaurant (Assagao)']
      },
      {
        name: 'Traditional Goan Bebinca & Pork Vindaloo',
        category: 'Sweets',
        desc: '7-layer baked dessert made from coconut milk, ghee, and egg yolks, infused with nutmeg.',
        iconicSpots: ['Viva Panjim (Fontainhas)', 'Confeitaria 31 De Janeiro']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Viva Panjim (Fontainhas Latin Quarter)',
        cuisine: 'Authentic Goan-Portuguese Cuisine',
        priceRange: '₹700 for two',
        mustTry: 'Prawn Curry Rice, Pork Vindaloo, Chicken Xacuti & Bebinca',
        bookingPlatform: 'Direct'
      },
      {
        name: 'Confeitaria 31 De Janeiro (Since 1932)',
        cuisine: 'Oldest Traditional Bakery in Panaji',
        priceRange: '₹250 for two',
        mustTry: 'Fresh Bebinca, Dodol, Bolinhas & Swiss Roll',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Fontainhas Latin Quarter Architectural & Bakery Walk',
        duration: '2 Hours',
        priceEstimate: '₹500 per person',
        desc: 'Walk past 200-year-old Portuguese tiled houses, listen to guitar fado music, and sample wood-fired bread.',
        category: 'Heritage Walk'
      }
    ],
    nearbyAttractions: [
      { name: 'Fort Aguada & 1864 Lighthouse (Candolim)', distanceKm: 16, desc: '17th-century Portuguese coastal fortress overlooking the Arabian Sea.' },
      { name: 'Dudhsagar Waterfalls', distanceKm: 60, desc: 'Four-tiered sea of milk waterfall cascading 310 meters down the Western Ghats.' }
    ]
  },

  // 14. KAZIRANGA (Assam)
  {
    id: 'kaziranga',
    name: 'Kaziranga (Sanctuary of the Great Indian Rhinoceros)',
    state: 'Assam',
    tagline: 'UNESCO World Heritage Wildlife Reserve, One-Horned Rhinos, Brahmaputra Floodplains & Tea Estates',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'A UNESCO World Heritage Site established in 1905, Kaziranga hosts two-thirds of the world’s Great One-Horned Rhinoceros population along with wild water buffalo, Asian elephants, and Royal Bengal tigers in lush elephant-grass marshes.',
    latitude: 26.5775,
    longitude: 93.1711,
    airport: 'Jorhat Airport (97 km) / Guwahati (190 km)',
    railwayStation: 'Furkating Junction (75 km) / Guwahati (190 km)',
    festivalIds: ['bohagi-bihu-assam', 'magh-bihu-assam', 'kaziranga-elephant-festival'],
    monumentIds: ['kaziranga-national-park-heritage', 'kakochang-waterfalls'],
    religiousSites: [],
    museums: [
      {
        name: 'Kaziranga National Orchid and Biodiversity Park',
        timing: '8:00 AM – 5:30 PM',
        highlight: 'Over 500 species of wild orchids, indigenous rice varieties, medicinal plants, and live Karbi/Mising folk dances.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Dawn elephant safari through tall elephant grass', 'Bihu dancing under orchid trees in spring', 'Mising tribal bamboo stilt house hospitality'],
      handicrafts: ['Assam Bamboo and Cane Furniture', 'Handwoven Mising Shawls', 'Wood Carvings of Rhinoceros'],
      folkArt: ['Mising folk songs (Oi Ninit)', 'Bihu drum beats'],
      danceForms: ['Bihu', 'Ali-Aye-Ligang spring dance of Mising tribe']
    },
    heritageStreets: [
      {
        name: 'Kohora Central Market & Orchid Park Crafts Arcade',
        famousFor: 'Handloom Mising gamosas, organic Assam wild honey, hand-carved wooden rhinos, and tea leaves.',
        bestTime: '9:00 AM – 7:30 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Mising Tribal Fish in Bamboo Hollow (Sungat Diya Mas)',
        category: 'Main Course',
        desc: 'Fresh river fish stuffed into green bamboo stalks with wild herbs, roasted over open wood fire, served with purple sticky rice.',
        iconicSpots: ['Kaziranga Orchid Park Dhaba', 'Maihang']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Kaziranga Orchid Park Traditional Kitchen',
        cuisine: 'Authentic 24-Dish Ethnic Assamese & Tribal Thali',
        priceRange: '₹400 for two',
        mustTry: 'Khar, Dhekia Saag, Masor Tenga, Bamboo Shoot Chutney & Payas',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Central / Western Range Jeep Safari at Sunrise',
        duration: '3.5 Hours',
        priceEstimate: '₹2,500 per jeep',
        desc: 'Drive through tall grasslands and wetlands to spot wild rhinoceros, swamp deer, and migratory waterbirds.',
        category: 'Wildlife Safari'
      }
    ],
    nearbyAttractions: [
      { name: 'Kakochang Waterfalls', distanceKm: 13, desc: 'Cascading natural jungle falls surrounded by rubber and coffee plantations.' },
      { name: 'Majuli Island (World’s Largest River Island)', distanceKm: 85, desc: 'Neo-Vaishnavite Satras and mask-making heritage on the Brahmaputra.' }
    ]
  },

  // 15. DIMAPUR (Nagaland)
  {
    id: 'dimapur',
    name: 'Dimapur (Ancient Capital of the Kachari Kingdom)',
    state: 'Nagaland',
    tagline: 'Megalithic Kachari Mushroom Pillar Ruins, Gateway to Nagaland & Handloom Weaving',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'The commercial hub and railway gateway of Nagaland, Dimapur was the 10th to 13th-century capital of the Dimasa Kachari Kingdom. Renowned for its mysterious mushroom-shaped monolithic sandstone pillars in Rajbari Park.',
    latitude: 25.9068,
    longitude: 93.7271,
    airport: 'Dimapur Airport (DMU)',
    railwayStation: 'Dimapur Railway Station (DMV)',
    festivalIds: ['hornbill-festival-nagaland', 'sekrenyi-nagaland'],
    monumentIds: ['kachari-ruins-dimapur', 'diezephe-craft-village'],
    religiousSites: [
      {
        name: 'Kachari Ruins at Rajbari Park (13th Century)',
        type: 'Megalithic Sandstone Monoliths',
        desc: 'Fascinating cluster of carved mushroom-shaped stone pillars carved with peacocks, elephants, and fertility symbols.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'North East Zone Cultural Centre (NEZCC) Museum',
        timing: '9:30 AM – 5:00 PM',
        highlight: 'Traditional handicrafts, costumes, and weapons from all 8 northeastern states.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Diezephe craft village woodcarving', 'Tribal lohe cloth backstrap weaving by Sumi and Angami women'],
      handicrafts: ['Naga Backstrap Looms', 'Cane & Bamboo Baskets', 'Wood Carvings'],
      folkArt: ['Tribal textile motif weaving', 'Naga beads'],
      danceForms: ['Sumi Naga War Dance', 'Angami folk dances']
    },
    heritageStreets: [
      {
        name: 'Hong Kong Market & New Market',
        famousFor: 'Naga traditional shawls, tribal jewellery, fresh smoked meats, and organic bamboo shoots.',
        bestTime: '9:30 AM – 6:30 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Dimapur Smoked Pork with Akhuni & King Chilli',
        category: 'Main Course',
        desc: 'Traditional smoked pork slow-simmered with fermented soybean paste and fiery Raja Mircha, served with organic red rice.',
        iconicSpots: ['Bambusa', 'Naga Kitchen']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Naga Kitchen (Circular Road)',
        cuisine: 'Authentic Multi-Tribal Naga Cuisine',
        priceRange: '₹550 for two',
        mustTry: 'Smoked Pork, Boiled Mustard Greens, Galho Rice Soup & King Chilli Dip',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Diezephe Craft Village Weaving & Carving Tour',
        duration: '2.5 Hours',
        priceEstimate: '₹200 per person',
        desc: 'Witness master woodcarvers and backstrap weavers at work preserving ancient tribal heritage.',
        category: 'Craft Heritage'
      }
    ],
    nearbyAttractions: [
      { name: 'Triple Falls (Seithekima)', distanceKm: 18, desc: 'Three natural streams cascading into a single clear pool in the bamboo forest.' },
      { name: 'Kohima Heritage Capital', distanceKm: 74, desc: 'Hill station home of the Hornbill Festival.' }
    ]
  },

  // 16. AJMER (Rajasthan)
  {
    id: 'ajmer',
    name: 'Ajmer (City of Khwaja / Ajaymeru)',
    state: 'Rajasthan',
    tagline: 'Ajmer Sharif Sufi Dargah, 11th-Century Taragarh Fort, Adhai Din Ka Jhonpra & Ana Sagar Lake',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Founded in the 7th century CE by Raja Ajaypal Chauhan, Ajmer is crowned by the revered Sufi shrine of Khwaja Moinuddin Chishti (Dargah Sharif), the 12th-century Sanskrit college turned monument Adhai Din Ka Jhonpra, and the marble pavilions of Ana Sagar Lake.',
    latitude: 26.4499,
    longitude: 74.6399,
    airport: 'Kishangarh Airport (KQH - 28 km) / Jaipur (135 km)',
    railwayStation: 'Ajmer Junction (AII)',
    festivalIds: ['urs-ajmer-sharif', 'diwali', 'eid-ul-fitr'],
    monumentIds: ['dargah-ajmer-sharif', 'adhai-din-ka-jhonpra', 'taragarh-fort-ajmer', 'ana-sagar-lake'],
    religiousSites: [
      {
        name: 'Dargah of Khwaja Moinuddin Chishti (Ajmer Sharif)',
        type: 'World-Venerated Sufi Shrine',
        desc: 'Spiritual resting place of the 13th-century Sufi saint; features the massive Mughal degs (cauldrons) donated by Emperor Akbar and Jahangir.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Adhai Din Ka Jhonpra (1192 CE)',
        type: 'Early Indo-Islamic Sandstone Monument',
        desc: 'Constructed by Qutb-ud-din Aibak on the ruins of a Sanskrit college, featuring 124 carved Hindu-Jain pillars and calligraphic yellow arches.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Akbari Fort & Government Museum (Ajmer)',
        timing: '10:00 AM – 4:45 PM (Closed Mondays)',
        highlight: 'Where British Ambassador Sir Thomas Roe met Mughal Emperor Jahangir in 1616; houses 8th-century sculptures and Rajput weapons.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Urs festival of Khwaja Gharib Nawaz with soul-stirring Qawwali sessions', 'Evening marble promenade walk at Ana Sagar Daulat Bagh', 'Chhati Sharif rituals'],
      handicrafts: ['Ajmer Ittar Perfumes', 'Silver Tasbih Prayer Beads', 'Embroidered Velvet Chadars'],
      folkArt: ['Sufi Qawwali music', 'Rajasthani miniature paintings of Kishangarh (Bani Thani)'],
      danceForms: ['Chari Dance', 'Ghoomar', 'Sufi Qawwali']
    },
    heritageStreets: [
      {
        name: 'Dargah Bazaar & Naya Bazaar',
        famousFor: 'Pure rose and oudh Ittar, embroidered prayer caps, authentic Sohan Halwa, and silver jewellery.',
        bestTime: '9:00 AM – 10:00 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Ajmer Sohan Halwa & Biryani from Deg Prasad',
        category: 'Sweets',
        desc: 'Crisp disc-shaped caramelized halwa studded with pistachios, almonds, and saffron.',
        iconicSpots: ['Azad Sweets (Dargah Bazaar)', 'Haji Pehalwan']
      },
      {
        name: 'Kadhi Kachori & Daulat Bagh Chaat',
        category: 'Street Food',
        desc: 'Crisp lentil kachori drenched in tangy Rajasthani yogurt kadhi and sweet tamarind chutney.',
        iconicSpots: ['Shankar Chaat Bhandar (Gol Pyau)']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Mango Masala Restaurant (Sardar Patel Marg)',
        cuisine: 'Rajasthani & Multi-Cuisine Pure Veg',
        priceRange: '₹600 for two',
        mustTry: 'Rajasthani Thali, Paneer Tikka & Sizzlers',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Sunset Boating & Marble Baradari Walk at Ana Sagar Lake',
        duration: '1.5 Hours',
        priceEstimate: '₹200 per boat',
        desc: 'Stroll through Emperor Shah Jahan’s 5 white marble pavilions (Baradaris) overlooking the historic 12th-century lake.',
        category: 'Mughal Garden'
      }
    ],
    nearbyAttractions: [
      { name: 'Pushkar Sacred Lake & Brahma Temple', distanceKm: 14, desc: 'Ancient pilgrimage town with 52 bathing ghats.' },
      { name: 'Taragarh Hilltop Fortress', distanceKm: 10, desc: '11th-century Chauhan fortress offering sweeping views of the Aravalli hills.' }
    ]
  },

  // 17. PRAYAGRAJ (Allahabad, Uttar Pradesh)
  {
    id: 'prayagraj',
    name: 'Prayagraj (Allahabad / King of Pilgrimage Centers)',
    state: 'Uttar Pradesh',
    tagline: 'Triveni Sangam Holy Confluence, Maha Kumbh Mela, Akbar’s Allahabad Fort & Anand Bhavan',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Revered in ancient scriptures as "Prayag Raj" (the King of all Tirtha pilgrimage sites), this is where the three sacred rivers—Ganga, Yamuna, and invisible Saraswati—merge at the Triveni Sangam. Host to the world’s largest human gathering, the Maha Kumbh Mela.',
    latitude: 25.4358,
    longitude: 81.8463,
    airport: 'Prayagraj Airport (IXD)',
    railwayStation: 'Prayagraj Junction (PRYJ) / Subedarganj',
    festivalIds: ['kumbh-mela-prayagraj', 'magh-mela-prayagraj', 'diwali', 'maha-shivaratri'],
    monumentIds: ['triveni-sangam-prayagraj', 'allahabad-fort-akbar', 'anand-bhavan', 'khusro-bagh'],
    religiousSites: [
      {
        name: 'Triveni Sangam & Bade Hanuman Ji Mandir',
        type: 'Sacred Confluence & Reclining Hanuman Shrine',
        desc: 'Sacred meeting of pale Ganga and deep blue Yamuna waters; nearby Bade Hanuman temple houses an ancient 20-foot subterranean reclining idol.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Akshaya Vat & Patalpuri Temple (Inside Fort)',
        type: 'Immortal Banyan Tree & Underground Shrine',
        desc: 'Undying sacred banyan tree referenced in the Ramayana and Xuanzang’s 7th-century travelogues.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Anand Bhavan & Swaraj Bhavan (Ancestral Nehru-Gandhi Home)',
        timing: '9:30 AM – 5:00 PM (Closed Mondays)',
        highlight: 'Historic mansion where India’s freedom movement strategies were planned, with Gandhi’s preserved room.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Allahabad Museum (Chandrashekhar Azad Park)',
        timing: '10:30 AM – 4:30 PM (Closed Mondays)',
        highlight: 'Rock art gallery, miniature paintings, and freedom fighter Chandrashekhar Azad’s famous Colt pistol.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Magh Mela & Kalpavas month-long riverside spiritual retreat in tents', 'Sunrise holy boat dip at the exact confluence point', 'Literary tea salons of Hindi Sahitya Sammelan'],
      handicrafts: ['Allahabad Surahi Red Earthen Pitchers', 'Moonj Grass Basketry', 'Brass Deities'],
      folkArt: ['Sangam Sand Art', 'Kumbh devotional singing'],
      danceForms: ['Kathak', 'Awadhi Folk Dance']
    },
    heritageStreets: [
      {
        name: 'Civil Lines & Chowk Loknath Gali',
        famousFor: 'Century-old chaat alleyways, sweet Dahi Jalebi, and historical bookstores.',
        bestTime: '10:00 AM – 9:30 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Loknath Gali Dahi Jalebi & Hari Ke Samosa',
        category: 'Street Food',
        desc: 'Crisp saffron jalebis drenched in thick chilled curd, paired with spicy roasted peanut samosas.',
        iconicSpots: ['Hari Ram & Sons (since 1890)', 'Netram Mulchand & Sons (Chowk)']
      },
      {
        name: 'Allahabadi Guava (Safeda & Surkha) & Churmura Chaat',
        category: 'Street Food',
        desc: 'World-famous sweet apple-guavas seasoned with black salt, cumin, and lemon juice.',
        iconicSpots: ['Civil Lines Street Vendors']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Netram Mulchand & Sons (Chowk, Since 1854)',
        cuisine: 'Authentic Prayagraj Halwai Heritage',
        priceRange: '₹350 for two',
        mustTry: 'Pure Desi Ghee Poori Thali with Aloo Rasedaar, Dahi Jalebi & Gulab Jamun',
        bookingPlatform: 'Direct'
      },
      {
        name: 'El Chico Restaurant (Civil Lines, Estd 1964)',
        cuisine: 'North Indian & Continental Heritage',
        priceRange: '₹900 for two',
        mustTry: 'Butter Chicken, Dal Makhani & Baked Alaska',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Sunrise Wooden Boat Confluence Dip at Triveni Sangam',
        duration: '2 Hours',
        priceEstimate: '₹400 per boat',
        desc: 'Row out to the visible color boundary where the yellow-grey Ganga meets the blue Yamuna, surrounded by Siberian seagulls.',
        category: 'Spiritual River Experience'
      }
    ],
    nearbyAttractions: [
      { name: 'Khusro Bagh Mughal Garden Tombs', distanceKm: 3, desc: 'Enclosed charbagh garden containing the exquisite sandstone mausoleums of Prince Khusro and his mother.' },
      { name: 'Varanasi (Kashi)', distanceKm: 120, desc: 'Spiritual capital of India on the Ganges.' }
    ]
  }
];
