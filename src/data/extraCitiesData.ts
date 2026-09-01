import { CityDestination } from '../types';

export const EXTRA_CITIES_DATA: CityDestination[] = [
  {
    id: 'delhi',
    name: 'New Delhi (Capital of Empires)',
    state: 'Delhi',
    tagline: 'Seven Historical Cities, Red Sandstone Citadels, Sufi Dargahs & Street Flavors',
    bannerImage: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'From the Tomara Rajputs and the Delhi Sultanate to the Mughal Empire and the British Raj, Delhi has been the seat of empires for over a millennium. Packed with three UNESCO World Heritage Sites (Qutub Minar, Humayun’s Tomb, Red Fort), vibrant spice markets, and soul-stirring Sufi qawwalis.',
    latitude: 28.6139,
    longitude: 77.2090,
    airport: 'Indira Gandhi International Airport (DEL)',
    railwayStation: 'New Delhi (NDLS) / Old Delhi (DLI) / Hazrat Nizamuddin (NZM)',
    festivalIds: ['diwali', 'durga-puja', 'holi', 'eid-ul-fitr'],
    monumentIds: ['qutub-minar', 'humayun-tomb', 'red-fort', 'india-gate'],
    religiousSites: [
      {
        name: 'Hazrat Nizamuddin Dargah',
        type: 'Sufi Shrine',
        desc: 'The venerated mausoleum of Sufi saint Nizamuddin Auliya and poet Amir Khusro; world-famous for Thursday evening Sufi Qawwali sessions.',
        image: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Gurdwara Bangla Sahib',
        type: 'Sikh Gurdwara',
        desc: 'Historic Gurdwara associated with the eighth Sikh Guru, Guru Har Krishan. Features a soothing Sarovar pool and massive 24/7 community langar.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Akshardham Temple Complex',
        type: 'Hindu Mandir & Cultural Campus',
        desc: 'Sprawling pink sandstone and Italian Carrara marble temple complex depicting 10,000 years of Indian art, spirituality, and architecture.',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Jama Masjid (Delhi)',
        type: 'Mughal Mosque',
        desc: 'One of the largest mosques in India, built by Emperor Shah Jahan in 1656 with red sandstone and white marble.',
        image: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'National Museum (Janpath)',
        timing: '10:00 AM – 6:00 PM (Closed Mondays)',
        highlight: 'Harappan civilization Dancing Girl bronze statue, Buddhist relics of Piprahwa, and miniature paintings from all royal schools.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'National Crafts Museum & Hastkala Academy',
        timing: '10:00 AM – 5:00 PM',
        highlight: 'Live master craftsmen weaving textiles, terracotta village pavilions, and traditional woodcarvings.',
        image: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Thursday night live Qawwalis at Nizamuddin Dargah', 'Dilli-6 Old Delhi heritage walks in Chandni Chowk', 'Kite flying from Shahjahanabad rooftops during Independence Day and Makar Sankranti'],
      handicrafts: ['Zari and Zardozi Gold Embroidery', 'Delhi Meenakari Enameling', 'Paper mache & traditional Ittar perfumery'],
      folkArt: ['Mughal Miniature painting', 'Sanjhi paper cut art'],
      danceForms: ['Kathak (Delhi Gharana)', 'Classical Hindustani vocal']
    },
    heritageStreets: [
      {
        name: 'Chandni Chowk & Dariba Kalan',
        famousFor: 'Silver jewelry, authentic antique coins, pure Ittar perfumes, and 150-year-old spice trading lanes.',
        bestTime: '11:00 AM – 8:00 PM',
        image: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Khari Baoli Spice Market',
        famousFor: 'Asia’s largest wholesale spice market loaded with mounds of saffron, red chillies, and dried nuts since the 17th century.',
        bestTime: '10:30 AM – 7:00 PM (Closed Sundays)',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    authenticFood: [
      {
        name: 'Old Delhi Nihari with Tandoori Khameeri Roti',
        category: 'Main Course',
        desc: 'Slow-cooked stew of tender meat simmered overnight with bone marrow and 40 spices, garnished with fresh ginger and green chillies.',
        iconicSpots: ['Karim’s (Jama Masjid Gate 1)', 'Al Jawahar', 'Haji Shabrati Nihari Wale'],
        image: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Paranthe Wali Gali Stuffed Fried Parathas',
        category: 'Street Food',
        desc: 'Deep-fried golden parathas stuffed with rabri, dry fruits, papad, or spiced potato, served with pumpkin sabzi and mint chutney.',
        iconicSpots: ['Pt. Kanhaiyalal Durgaprasad Dixit (since 1875)', 'Pt. Gaya Prasad Shiv Charan'],
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Dilli Chole Bhature with Pindi Chana & Paneer',
        category: 'Street Food',
        desc: 'Fluffy fried bhaturas paired with dark spiced chickpeas, pickled amla, and marinated green chillies.',
        iconicSpots: ['Sita Ram Diwan Chand (Paharganj)', 'Bengali Sweet House (Bengali Market)'],
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80'
      }
    ],
    heritageRestaurants: [
      {
        name: 'Karim’s (Established 1913 near Jama Masjid)',
        cuisine: 'Mughal Imperial Recipes',
        priceRange: '₹900 for two',
        mustTry: 'Mutton Burra Kebab, Shahi Korma & Badam Pasanda',
        bookingPlatform: 'Direct'
      },
      {
        name: 'Bukhara at ITC Maurya',
        cuisine: 'North-West Frontier & Tandoori Heritage',
        priceRange: '₹7,500 for two',
        mustTry: 'Dal Bukhara (slow-cooked for 18 hours) & Sikandari Raan',
        bookingPlatform: 'Direct'
      },
      {
        name: 'Cafe Lota (National Crafts Museum)',
        cuisine: 'Contemporary Regional Indian Heritage',
        priceRange: '₹1,400 for two',
        mustTry: 'Palak Patta Chaat & Pondicherry Fish Curry',
        bookingPlatform: 'Zomato'
      }
    ],
    localActivities: [
      {
        title: 'Old Delhi Sunrise Cycle Tour & Spice Market Rooftops',
        duration: '3.5 Hours',
        priceEstimate: '₹2,000 per person',
        desc: 'Navigate quiet Mughal lanes at dawn before the city awakens, enjoying fresh chai and sweeping views from spice market roofs.',
        category: 'Heritage Cycling'
      },
      {
        title: 'Thursday Evening Sufi Qawwali at Hazrat Nizamuddin',
        duration: '2 Hours (6:30 PM – 8:30 PM)',
        priceEstimate: 'Free Devotional Gathering',
        desc: 'Immerse in transcendental spiritual music composed by Amir Khusro in the courtyard of the 14th-century saint.',
        category: 'Spiritual Music'
      },
      {
        title: 'Sunder Nursery Heritage Walk & Mughal Garden Stroll',
        duration: '2.5 Hours',
        priceEstimate: '₹50 per person',
        desc: 'Explore 16th-century restored garden tombs and biodiversity arboretum next to Humayun’s Tomb.',
        category: 'Architectural Ecology'
      }
    ],
    nearbyAttractions: [
      { name: 'Red Fort (Lal Qila UNESCO Heritage)', distanceKm: 4, desc: 'Shah Jahan’s monumental red sandstone imperial citadel.' },
      { name: 'India Gate & Kartavya Path', distanceKm: 3, desc: 'Triumphal arch war memorial surrounded by civic lawns.' },
      { name: 'Mehrauli Archaeological Park', distanceKm: 14, desc: 'Sprawling green park containing over 100 historic monuments spanning 1,000 years.' }
    ]
  },
  {
    id: 'mumbai',
    name: 'Mumbai (City of Dreams & Arabian Gateway)',
    state: 'Maharashtra',
    tagline: 'Victorian Gothic UNESCO Precincts, Marine Drive, Island Caves & Coastal Flavors',
    bannerImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'India’s financial capital and the heart of Bollywood, Mumbai rose from seven fishing islands into a colossal port metropolis. Famous for the Gateway of India, Victorian Gothic and Art Deco UNESCO ensembles, 6th-century Elephanta Island rock caves, and electric street energy.',
    latitude: 18.9220,
    longitude: 72.8347,
    airport: 'Chhatrapati Shivaji Maharaj International Airport (BOM)',
    railwayStation: 'Chhatrapati Shivaji Maharaj Terminus (CSMT) / Mumbai Central (MMCT)',
    festivalIds: ['ganesh-chaturthi', 'gudi-padwa', 'navratri', 'banganga-festival'],
    monumentIds: ['gateway-of-india', 'csmt-station', 'elephanta-caves'],
    religiousSites: [
      {
        name: 'Siddhivinayak Ganapati Temple (Prabhadevi)',
        type: 'Hindu Mandir',
        desc: 'Iconic 200-year-old temple dedicated to Lord Ganesha, visited by millions seeking auspicious beginnings.',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Haji Ali Dargah',
        type: 'Sufi Island Shrine',
        desc: '15th-century Indo-Islamic marble shrine set on a tiny islet 500 meters into the Arabian Sea, accessible via a narrow causeway during low tide.',
        image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Banganga Sacred Water Tank (Walkeshwar)',
        type: 'Ancient Temple & Spring',
        desc: '12th-century mythological freshwater tank surrounded by temple spires and stepping ghats in Malabar Hill.',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS)',
        timing: '10:15 AM – 6:00 PM',
        highlight: 'Indo-Saracenic museum with 50,000 artifacts including Indus Valley relics, Tibetan bronzes, and European paintings.',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Ganesh Chaturthi ocean immersion processions (Visarjan) at Girgaon Chowpatty', 'Dabbawala lunch delivery network operating with 99.99% accuracy', 'Sunset evening promenades on Marine Drive (Queen’s Necklace)'],
      handicrafts: ['Paithani Silk Weaving', 'Kolhapuri Leather Craft', 'Warli Tribal Paintings'],
      folkArt: ['Warli Geometrical Murals', 'Lavani folk performances'],
      danceForms: ['Lavani (Energetic folk dance with Dholki beats)', 'Koli (Fisherfolk dance)']
    },
    heritageStreets: [
      {
        name: 'Colaba Causeway & Kala Ghoda Arts District',
        famousFor: 'Victorian architecture, designer art galleries, bohemian antique stalls, and iconic heritage cafes.',
        bestTime: '11:00 AM – 9:00 PM',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Marine Drive Promenade (Queen’s Necklace)',
        famousFor: '3.6 km crescent waterfront road flanked by the world’s second-largest collection of Art Deco buildings.',
        bestTime: '5:30 PM – 10:00 PM',
        image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=600&q=80'
      }
    ],
    authenticFood: [
      {
        name: 'Mumbai Vada Pav & Pav Bhaji',
        category: 'Street Food',
        desc: 'Spiced mashed potato fritter in pav bread with dry garlic chutney, and buttery mashed vegetable gravy served with toasted buns.',
        iconicSpots: ['Ashok Vada Pav (Kirti College)', 'Sardar Refreshments (Tardeo)', 'Cannon Pav Bhaji (CSMT)'],
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Parsi Berry Pulao & Dhansak',
        category: 'Main Course',
        desc: 'Fragrant saffron rice topped with Iranian sour barberries, served with rich lentil meat stew and kebabs.',
        iconicSpots: ['Britannia & Co. (Ballard Estate)', 'Kyani & Co. (Marine Lines)'],
        image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Bombil Fry & Malvani Coastal Seafood',
        category: 'Main Course',
        desc: 'Crispy semolina-coated Bombay Duck fish and spicy coconut fish curry cooked with Tirphal and Kokum.',
        iconicSpots: ['Gajalee (Vile Parle)', 'Trishna (Fort)', 'Mahesh Lunch Home'],
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80'
      }
    ],
    heritageRestaurants: [
      {
        name: 'Britannia & Co. (Ballard Estate since 1923)',
        cuisine: 'Authentic Parsi & Irani Heritage',
        priceRange: '₹1,100 for two',
        mustTry: 'Mutton Berry Pulao, Sali Boti & Caramel Custard',
        bookingPlatform: 'Direct'
      },
      {
        name: 'Trishna (Kala Ghoda)',
        cuisine: 'Mangalorean & Coastal Seafood',
        priceRange: '₹2,600 for two',
        mustTry: 'Butter Garlic Crab & Koliwada Prawns',
        bookingPlatform: 'Zomato'
      }
    ],
    localActivities: [
      {
        title: 'Ferry Cruise to Elephanta Caves UNESCO Rock-Cut Island',
        duration: '4 Hours',
        priceEstimate: '₹260 ferry + ₹40 entry',
        desc: 'Sail from Gateway of India to explore 6th-century rock-cut Shiva sculptures including the colossal 20-foot Trimurti.',
        category: 'Island Exploration'
      },
      {
        title: 'South Mumbai Victorian Gothic & Art Deco Heritage Walk',
        duration: '2.5 Hours',
        priceEstimate: '₹800 per person',
        desc: 'Discover how Bombay transformed into Urbs Prima in Indis with magnificent stone gargoyles and Deco facades.',
        category: 'Architecture Walk'
      }
    ],
    nearbyAttractions: [
      { name: 'Elephanta Caves UNESCO Island', distanceKm: 10, desc: 'Ancient rock-cut temples dedicated to Lord Shiva on an offshore island.' },
      { name: 'Sanjay Gandhi National Park & Kanheri Caves', distanceKm: 35, desc: 'Lush tropical forest sanctuary with 109 ancient Buddhist rock-cut caves.' },
      { name: 'Alibaug Coastal Beaches & Kolaba Fort', distanceKm: 40, desc: 'Scenic coastal getaway reachable via direct speedboats from Gateway jetty.' }
    ]
  },
  {
    id: 'hampi',
    name: 'Hampi (The Vijayanagara Stone Realm)',
    state: 'Karnataka',
    tagline: 'UNESCO World Heritage Capital of Monolithic Chariots, Musical Pillars & Granite Boulders',
    bannerImage: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'The grandiose capital of the 14th-century Vijayanagara Empire on the Tungabhadra River. Featuring over 1,600 surviving monuments spread across 4,100 hectares of otherworldly granite boulder landscapes, musical stone pillars, and the iconic Stone Chariot.',
    latitude: 15.3350,
    longitude: 76.4600,
    airport: 'Jindal Vidyanagar Airport, Toranagallu (VDY - 40 km) / Hubballi Airport (HBX - 160 km)',
    railwayStation: 'Hosapete Junction (HPT - 13 km from Hampi)',
    festivalIds: ['hampi-utsav', 'virupaksha-car-festival', 'diwali'],
    monumentIds: ['hampi-ruins', 'vittala-temple', 'virupaksha-temple'],
    religiousSites: [
      {
        name: 'Virupaksha Temple',
        type: 'Active 7th-Century Shiva Shrine',
        desc: 'The continuously active spiritual center of Hampi crowned by a 50-meter Gopuram tower and an inverted pinhole camera shadow effect.',
        image: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Vittala Temple & Stone Chariot',
        type: 'UNESCO Monument Complex',
        desc: 'Famous for the monolithic stone Garuda chariot shrine (featured on the ₹50 note) and 56 musical granite pillars that resonate notes when tapped.',
        image: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Anegundi & Anjaneya Hill (Hanuman Birthplace)',
        type: 'Mythological Kishkindha Realm',
        desc: 'Sacred hill across the Tungabhadra river offering 360-degree panoramic views of paddy fields and stone temples after climbing 575 stone steps.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'ASI Archaeological Museum Kamalapur',
        timing: '10:00 AM – 5:00 PM (Closed Fridays)',
        highlight: 'Scaled 3D topographic relief model of the entire Vijayanagara empire ruins and exquisite brass idols.',
        image: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Coracle round boat crossings across the Tungabhadra River', 'Sunrise chanting atop Matanga Hill', 'Hampi Utsav cultural dance and music fest in November'],
      handicrafts: ['Banana Fiber Handicrafts & Bags', 'Granite Stone Carvings', 'Lambani Tribal Mirror & Thread Embroidery'],
      folkArt: ['Lambani Banjara Patchwork', 'Yakshagana dance dramas'],
      danceForms: ['Yakshagana (Mythological theatrical dance)', 'Dollu Kunitha (Folk drum dance)']
    },
    heritageStreets: [
      {
        name: 'Hampi Bazaar & Courtesan’s Street',
        famousFor: 'Centuries-old stone colonnades where diamond merchants once traded precious stones by the kilogram.',
        bestTime: '7:00 AM – 6:00 PM',
        image: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=600&q=80'
      }
    ],
    authenticFood: [
      {
        name: 'Karnataka Banana Leaf Thali with Jolada Rotti',
        category: 'Main Course',
        desc: 'Crisp sorghum flatbreads served with stuffed spicy brinjal (Ennegayi), Shenga Chutney (peanut spice powder), sambar, and fresh buttermilk.',
        iconicSpots: ['Mango Tree Restaurant (near river)', 'Suresh Restaurant (Kamalapur)'],
        image: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Paddu (Paniyaram) with Coconut Chutney',
        category: 'Street Food',
        desc: 'Crisp outside, pillowy inside savory fermented rice dumplings cooked in cast iron molds with ginger and green chillies.',
        iconicSpots: ['Hampi Bazaar Morning Shacks', 'Gopi Guesthouse Cafe'],
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      }
    ],
    heritageRestaurants: [
      {
        name: 'Mango Tree Restaurant',
        cuisine: 'Traditional Karnataka & Multi-Cuisine Garden Cafe',
        priceRange: '₹600 for two',
        mustTry: 'South Indian Special Thali & Fresh Pomegranate Juice',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Sunrise Trek to Matanga Hill Peak',
        duration: '2 Hours (5:30 AM – 7:30 AM)',
        priceEstimate: 'Free Self-Guided / ₹400 with local guide',
        desc: 'Climb ancient stone steps to catch morning golden light illuminating Virupaksha temple and Tungabhadra boulders.',
        category: 'Sunrise Photography'
      },
      {
        title: 'Traditional Round Coracle Boat Ride on Tungabhadra River',
        duration: '1 Hour',
        priceEstimate: '₹400 per person',
        desc: 'Spin gently down ancient river rapids past rock-cut shrines and giant granite arches.',
        category: 'River Adventure'
      }
    ],
    nearbyAttractions: [
      { name: 'Sanapur Lake & Boulder Cliff Jumping', distanceKm: 8, desc: 'Serene freshwater reservoir framed by granite boulders.' },
      { name: 'Badami Rock-Cut Cave Temples', distanceKm: 130, desc: '6th-century Chalukya dynasty red sandstone cliff temples.' },
      { name: 'Pattadakal UNESCO Temple Complex', distanceKm: 140, desc: 'Zenith of early 8th-century temple architecture fusing North and South Indian styles.' }
    ]
  },
  {
    id: 'madurai',
    name: 'Madurai (The Ancient Lotus Temple City)',
    state: 'Tamil Nadu',
    tagline: '2,500-Year-Old Sangam Civilization, 14 Soaring Gopurams & Jigarthanda',
    bannerImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'One of the oldest continuously inhabited cities in the world, configured like a lotus blossom around the monumental Meenakshi Amman Temple on the banks of the Vaigai River. Celebrated for Sangam Tamil literature, handwoven cotton Sungudi sarees, and non-stop street food.',
    latitude: 9.9252,
    longitude: 78.1198,
    airport: 'Madurai International Airport (IXM)',
    railwayStation: 'Madurai Junction (MDU)',
    festivalIds: ['chithirai-festival', 'pongal', 'meenakshi-thirukalyanam', 'float-festival'],
    monumentIds: ['meenakshi-temple', 'thirumalai-nayakkar-palace'],
    religiousSites: [
      {
        name: 'Meenakshi Sundareswarar Temple',
        type: 'Dravidian Temple Masterpiece',
        desc: '14 multi-tiered Gopuram towers crowned with 33,000 brightly painted mythological sculptures and the sacred Golden Lotus tank.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Koodal Azhagar Temple',
        type: 'Ancient Divya Desam Vishnu Shrine',
        desc: 'Unique three-tier Dravidian temple depicting Lord Vishnu in three postures: standing, sitting, and reclining.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Gandhi Memorial Museum (Tamukkam Palace)',
        timing: '10:00 AM – 5:45 PM',
        highlight: 'Housed in a 17th-century Nayak palace, contains the blood-stained dhoti worn by Mahatma Gandhi during his assassination.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Chithirai festival celestial wedding of Goddess Meenakshi and Lord Sundareswarar', 'Madurai Malli (GI-tagged fragrant Jasmine) weaving into garlands', 'Palli Arai evening bedchamber procession with silver palanquins'],
      handicrafts: ['Madurai Sungudi Tie-and-Dye Cotton Sarees', 'Brass & Bronze Idol Casting', 'Handwoven Temple Silk'],
      folkArt: ['Thanjavur-style Madurai Painting', 'Villu Paatu bow-song storytelling'],
      danceForms: ['Bharatanatyam (Classical temple dance)', 'Karagattam (Water pot balancing dance)']
    },
    heritageStreets: [
      {
        name: 'Chithirai & Avani Moola Streets',
        famousFor: 'Concentric quadrangular streets surrounding the temple, fragrant with mountain jasmine flowers and handloom silk shops.',
        bestTime: '6:00 AM – 10:00 PM',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      }
    ],
    authenticFood: [
      {
        name: 'Authentic Madurai Jigarthanda (Cooling Elixir)',
        category: 'Beverage',
        desc: 'Royal dessert drink crafted from almond gum (badam pisin), nannari root syrup, condensed milk, and basundi ice cream.',
        iconicSpots: ['Famous Jigarthanda (East Marret Street)', 'Murugan Idli Shop'],
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Madurai Kari Dosa & Bun Parotta',
        category: 'Street Food',
        desc: 'Multi-layered crispy flaky bun parotta served with spicy Salna gravy, and 3-layered meat/egg omelette Kari Dosa.',
        iconicSpots: ['Madurai Kumar Mess', 'Amma Mess', 'Simmakkal Konar Mess'],
        image: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=600&q=80'
      }
    ],
    heritageRestaurants: [
      {
        name: 'Murugan Idli Shop (West Masi Street)',
        cuisine: 'Legendary South Indian Tiffin',
        priceRange: '₹300 for two',
        mustTry: 'Melt-in-mouth Ghee Podi Idlis with 4 signature chutneys',
        bookingPlatform: 'Swiggy'
      }
    ],
    localActivities: [
      {
        title: 'Meenakshi Temple Nighttime Palli Arai Procession',
        duration: '2 Hours (8:30 PM – 10:00 PM)',
        priceEstimate: 'Free Darshan',
        desc: 'Witness priests carry the silver palanquin of Lord Shiva to Meenakshi’s shrine accompanied by temple drums and torchlights.',
        category: 'Temple Ritual'
      }
    ],
    nearbyAttractions: [
      { name: 'Thirumalai Nayakkar Mahal & Sound & Light Show', distanceKm: 1.5, desc: '1636 CE Italian-Dravidian royal palace with giant stucco columns.' },
      { name: 'Alagar Kovil Hill Temple & Springs', distanceKm: 21, desc: 'Scenic Vishnu temple nestled in the lush Alagar hills.' },
      { name: 'Rameswaram Island & Ramanathaswamy Temple', distanceKm: 165, desc: 'Char Dham coastal pilgrimage with the world’s longest pillared corridor.' }
    ]
  },
  {
    id: 'mysore',
    name: 'Mysuru (The Royal City of Palaces)',
    state: 'Karnataka',
    tagline: 'Wadiyar Royal Dynasty, 100,000 Palace Light Bulbs, Sandalwood & Silk',
    bannerImage: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'The cultural capital of Karnataka, situated at the base of Chamundi Hills. Celebrated for the majestic Indo-Saracenic Mysore Palace illuminated by 100,000 bulbs, the grand 10-day Dasara elephant procession, pure sandalwood carving, and Mysore Pak sweets.',
    latitude: 12.2958,
    longitude: 76.6394,
    airport: 'Mysore Airport (MYQ) / Kempegowda International Airport Bengaluru (BLR - 170 km via Expressway)',
    railwayStation: 'Mysuru Junction (MYS)',
    festivalIds: ['mysuru-dasara', 'ugadi', 'diwali'],
    monumentIds: ['mysore-palace', 'chamundeshwari-temple'],
    religiousSites: [
      {
        name: 'Sri Chamundeshwari Temple (Chamundi Hills)',
        type: 'Ancient Hindu Shakti Shrine',
        desc: 'Perched 1,000 meters high atop Chamundi Hills overlooking the city, dedicated to Goddess Durga who vanquished demon Mahishasura.',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'St. Philomena’s Cathedral',
        type: 'Neo-Gothic Cathedral',
        desc: 'One of the tallest cathedrals in Asia with 175-foot twin spires modeled after Germany’s Cologne Cathedral.',
        image: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Jayachamarajendra Art Gallery (Jaganmohan Palace)',
        timing: '8:30 AM – 5:30 PM',
        highlight: 'Houses the masterpiece "Glow of Hope" (Lady with the Lamp) by S.L. Haldankar and rare oil paintings by Raja Ravi Varma.',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Mysuru Dasara Jumbo Savari royal elephant procession carrying the golden howdah', 'Ashtanga Yoga teaching at Gokulam neighborhood', 'Sunday evening lighting of 100,000 bulbs across Mysore Palace'],
      handicrafts: ['Mysore Silk Zari Sarees', 'Pure Sandalwood Carvings & Oil (GI Tag)', 'Rosewood Inlay Furniture with bone/acrylic motifs'],
      folkArt: ['Ganjifa traditional playing card painting', 'Mysore traditional paintings with pure gold foil'],
      danceForms: ['Bharatanatyam (Mysore style)', 'Dollu Kunitha']
    },
    heritageStreets: [
      {
        name: 'Devaraja Heritage Market (Since 1886)',
        famousFor: 'Piles of colorful natural Kumkum powders, fresh betel leaves, bananas, fragrant Jasmine strings, and perfume ittar.',
        bestTime: '7:00 AM – 8:00 PM',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=600&q=80'
      }
    ],
    authenticFood: [
      {
        name: 'Original Mysore Pak (Melt-in-Mouth Sweet)',
        category: 'Sweets',
        desc: 'Invented in the royal kitchen of Mysore Palace by cook Kakasura Madappa using gram flour, pure desi ghee, and sugar syrup.',
        iconicSpots: ['Guru Sweet Mart (Sayyaji Rao Road - descendants of royal chef)', 'Mahalaxmi Sweets'],
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Original Mylari Butter Masala Dosa',
        category: 'Street Food',
        desc: 'Pillowy soft crisp golden crepe smeared with freshly churned white butter (Venne) and stuffed with secret onion-cilantro paste.',
        iconicSpots: ['Original Hotel Vinayaka Mylari (Nazarbad)', 'Gayatri Tiffin Room (GTR)'],
        image: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=600&q=80'
      }
    ],
    heritageRestaurants: [
      {
        name: 'Hotel Vinayaka Mylari (Nazarbad)',
        cuisine: 'Iconic Heritage Dosa House',
        priceRange: '₹200 for two',
        mustTry: 'Mylari Butter Dosa & Filter Coffee',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Mysore Palace Sunday Evening 100,000 Bulb Illumination',
        duration: '1.5 Hours (6:45 PM – 8:00 PM)',
        priceEstimate: 'Free Garden View / Palace pass',
        desc: 'Watch the entire palace burst into a field of golden light accompanied by the Karnataka Police Band.',
        category: 'Royal Spectacle'
      }
    ],
    nearbyAttractions: [
      { name: 'Somanathapura Keshava Temple UNESCO Hoysala Marvel', distanceKm: 35, desc: '13th-century star-shaped soapstone temple carved in miniature perfection.' },
      { name: 'Srirangapatna Island Fortress & Tipu Sultan Summer Palace', distanceKm: 15, desc: 'River island capital of Tipu Sultan with Dariya Daulat Bagh.' },
      { name: 'Ranganathittu Bird Sanctuary', distanceKm: 18, desc: 'Boating sanctuary among breeding colonies of pelicans, painted storks, and marsh crocodiles.' }
    ]
  },
  {
    id: 'udaipur',
    name: 'Udaipur (The City of Lakes & White Marble)',
    state: 'Rajasthan',
    tagline: 'Lake Pichola, Royal Mewar Dynasty, Sunsets & Fairy-Tale Palaces',
    bannerImage: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Often called the Venice of the East, Udaipur was founded in 1559 by Maharana Udai Singh II as the capital of Mewar kingdom. Nestled amidst the Aravalli hills, its gleaming white marble palaces float on the azure waters of Lake Pichola and Fateh Sagar.',
    latitude: 24.5854,
    longitude: 73.7125,
    airport: 'Maharana Pratap Airport (UDR)',
    railwayStation: 'Udaipur City (UDZ)',
    festivalIds: ['gangaur-festival', 'mewar-festival', 'shilpgram-crafts-fair'],
    monumentIds: ['city-palace-udaipur', 'lake-pichola', 'jag-mandir'],
    religiousSites: [
      {
        name: 'Jagdish Temple',
        type: 'Indo-Aryan Hindu Shrine',
        desc: '1651 CE three-story carved stone temple dedicated to Lord Vishnu, featuring steep stone steps guarded by stone elephants in the heart of old city.',
        image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Eklingji Temple Complex (22 km)',
        type: 'Royal Deity of Mewar',
        desc: '108-temple complex carved in white marble and sandstone, dedicated to the supreme ruler of Mewar, Eklingji (Shiva).',
        image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'City Palace Museum (Mewar Dynasty)',
        timing: '9:30 AM – 5:30 PM',
        highlight: 'Mor Chowk peacock courtyards with 5,000 glass mosaics, royal armory, and vintage silver buggy collections.',
        image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Bagore Ki Haveli Folk Museum (Gangaur Ghat)',
        timing: '9:30 AM – 8:00 PM',
        highlight: '138-room 18th-century waterfront mansion hosting the evening Dharohar Rajasthani dance and puppet show.',
        image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Gangaur festival royal boat processions on Lake Pichola', 'Dharohar folk dance performances with 9-pot head balancing', 'Miniature watercolor painting on camel bone and silk'],
      handicrafts: ['Mewar Miniature Paintings', 'Pichwai Sacred Cloth Paintings of Nathdwara', 'Silver Meenakari Jewelry'],
      folkArt: ['Pichwai Krishna art', 'Puppet (Kathputli) craft'],
      danceForms: ['Ghoomar (Swirling Rajput royal dance)', 'Bhavai (Pot balancing stunt dance)']
    },
    heritageStreets: [
      {
        name: 'Hathi Pol & Gangaur Ghat Road',
        famousFor: 'Authentic Pichwai paintings, camel leather notebooks, bandhani dupattas, and Rajasthani mojaris.',
        bestTime: '11:00 AM – 8:30 PM',
        image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=600&q=80'
      }
    ],
    authenticFood: [
      {
        name: 'Mewari Dal Baati Churma with Gatta Curry',
        category: 'Main Course',
        desc: 'Charcoal-baked baatis crushed in warm ghee with panchmel dal, spicy besan gatta curry, garlic chutney, and dry fruit churma.',
        iconicSpots: ['Krishna Dal Bati Restro', 'Tribute Restaurant (Fateh Sagar)'],
        image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Udaipur Pyaaz Kachori & Mirchi Bada',
        category: 'Street Food',
        desc: 'Crisp deep-fried pastry filled with spicy sweet caramelised onions, eaten hot with sweet tamarind dip.',
        iconicSpots: ['Jagdish Mishthan Bhandar (JMB)', 'Shastri Sweets'],
        image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=600&q=80'
      }
    ],
    heritageRestaurants: [
      {
        name: 'Ambrai Restaurant (Amet Haveli on Waterfront)',
        cuisine: 'Royal Mewari Fine Dining',
        priceRange: '₹2,500 for two',
        mustTry: 'Mewari Laal Maas & Murg Dhungar overlooking illuminated City Palace',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Sunset Boat Cruise around Taj Lake Palace & Jag Mandir',
        duration: '1.5 Hours (5:00 PM – 6:30 PM)',
        priceEstimate: '₹450 – ₹800 per person',
        desc: 'Glide over the calm waters of Lake Pichola as the sunset turns marble palaces into glowing golden silhouettes.',
        category: 'Lakeside Cruise'
      }
    ],
    nearbyAttractions: [
      { name: 'Kumbhalgarh UNESCO Hill Fort (Great Wall of India)', distanceKm: 85, desc: 'Massive 15th-century Mewar fort with 36 km long continuous perimeter wall.' },
      { name: 'Ranakpur Jain Marble Temple', distanceKm: 90, desc: 'Forest temple supported by 1,444 individually carved non-identical marble pillars.' },
      { name: 'Sajjangarh Monsoon Palace', distanceKm: 9, desc: 'Hilltop astronomical castle with bird’s-eye sunset panoramas over all lakes.' }
    ]
  },
  {
    id: 'jodhpur',
    name: 'Jodhpur (The Sun & Blue Citadel)',
    state: 'Rajasthan',
    tagline: 'Mehrangarh Fortress, Blue Brahmin Alleys, Thar Desert & Royal Polo',
    bannerImage: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Founded in 1459 by Rao Jodha of the Rathore clan, Jodhpur is celebrated for the sheer burnished cliffs of Mehrangarh Fort rising 400 feet above the ocean of indigo-blue painted houses in the old quarter.',
    latitude: 26.2389,
    longitude: 73.0243,
    airport: 'Jodhpur Airport (JDH)',
    railwayStation: 'Jodhpur Junction (JU)',
    festivalIds: ['marwar-festival', 'rajasthan-international-folk-festival', 'holi'],
    monumentIds: ['mehrangarh-fort', 'jaswant-thada', 'umaid-bhawan-palace'],
    religiousSites: [
      {
        name: 'Chamunda Mataji Temple (Inside Mehrangarh Fort)',
        type: 'Rathore Royal Guardian Shrine',
        desc: 'Perched on the southern edge of the fort battlement cliff, worshipped by the royal family since 1460.',
        image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Mehrangarh Museum Galleries',
        timing: '9:00 AM – 5:00 PM',
        highlight: 'Sheesh Mahal, Phool Mahal, Mughal silver howdahs, and Akbar’s personal armory.',
        image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['RIFF International Folk Festival held inside Mehrangarh courtyards during full moon', 'Exploring the indigo blue Brahmin quarters of Navchokiya', 'Bishnoi village desert wildlife and blackbuck protection safaris'],
      handicrafts: ['Jodhpur Jodhpuri Tailoring & Breeches', 'Tie & Dye Bandhej and Leheriya Sarees', 'Bone Inlay Woodwork'],
      folkArt: ['Manganiyar folk singing', 'Langa desert ballads'],
      danceForms: ['Kalbelia (Snake charmer gypsy dance)', 'Ghoomar']
    },
    heritageStreets: [
      {
        name: 'Clock Tower (Ghanta Ghar) & Sardar Market',
        famousFor: 'Mathaniya red chillies, spices, tea varieties, brassware, and camel leather jutis in 19th-century colonnades.',
        bestTime: '10:30 AM – 8:30 PM',
        image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80'
      }
    ],
    authenticFood: [
      {
        name: 'Jodhpuri Mirchi Vada & Mawa Kachori',
        category: 'Street Food',
        desc: 'Giant batter-fried green Bhavnagri chillies stuffed with spiced potato mash, followed by flaky sweet mawa kachori dripping in saffron syrup.',
        iconicSpots: ['Janta Sweet Home (Station Road)', 'Shahi Samosa (Clock Tower)'],
        image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Shri Mishrilal Famous Makhaniya Lassi',
        category: 'Beverage',
        desc: 'Ultra-thick cardamom-infused saffron yogurt served with a generous scoop of churned clotted cream (Makkhana) on top.',
        iconicSpots: ['Shri Mishrilal Hotel (Clock Tower Gate)'],
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80'
      }
    ],
    heritageRestaurants: [
      {
        name: 'Indique at Pal Haveli',
        cuisine: 'Rooftop Rajasthani Heritage',
        priceRange: '₹1,800 for two',
        mustTry: 'Authentic Jodhpuri Laal Maas with Mehrangarh fort view',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Flying Fox Zipline Tour across Mehrangarh Fort Moats',
        duration: '2 Hours',
        priceEstimate: '₹1,800 per person',
        desc: 'Soar through 6 high-speed zip lines over fort ramparts, desert lakes, and Rao Jodha Desert Rock Park.',
        category: 'Fort Adventure'
      }
    ],
    nearbyAttractions: [
      { name: 'Jaswant Thada Royal White Marble Cenotaph', distanceKm: 1, desc: 'Intricately carved translucent marble memorial of Maharaja Jaswant Singh II.' },
      { name: 'Osian Ancient Desert Sun & Jain Temples', distanceKm: 65, desc: '8th-century carved stone desert temples and camel dune safaris.' },
      { name: 'Bishnoi Village Safari', distanceKm: 25, desc: 'Eco-conscious tribal settlements with wild blackbucks, migratory cranes, and block printers.' }
    ]
  },
  {
    id: 'thanjavur',
    name: 'Thanjavur (The Chola Cultural Nexus)',
    state: 'Tamil Nadu',
    tagline: 'Great Living Chola Temples, Bronze Masterpieces, Veena & Tanjore Paintings',
    bannerImage: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'The imperial capital of the Chola Empire during their golden age of maritime trade, temple building, and classical arts. Famous for the 1010 CE Brihadisvara Temple, UNESCO Great Living Chola Temples, lost-wax bronze casting, and Thanjavur gold leaf paintings.',
    latitude: 10.7870,
    longitude: 79.1378,
    airport: 'Tiruchirappalli International Airport (TRZ - 55 km)',
    railwayStation: 'Thanjavur Junction (TJ)',
    festivalIds: ['brahmotsavam-thanjavur', 'pongal', 'tyagaraja-aradhana'],
    monumentIds: ['brihadisvara-temple', 'thanjavur-royal-palace'],
    religiousSites: [
      {
        name: 'Brihadisvara Temple (Peruvudaiyar Kovil)',
        type: 'UNESCO All-Granite Masterpiece',
        desc: 'Built by Emperor Rajaraja Chola I, featuring a 66-meter Vimana tower crowned by an 80-tonne monolithic granite cupola.',
        image: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Thanjavur Royal Palace & Saraswathi Mahal Library',
        timing: '10:00 AM – 5:30 PM',
        highlight: 'Houses 60,000 rare palm-leaf manuscripts in Sanskrit, Tamil, Marathi, and magnificent Chola Bronze Nataraja idols.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Saint Tyagaraja Aradhana Carnatic vocal choir festival in Thiruvaiyaru', 'Traditional Thanjavur Bobblehead Doll (Thanjavur Thalaiyatti Bommai) crafting', 'Lost-wax bronze idol casting by hereditary sthapatis'],
      handicrafts: ['Thanjavur Gold Leaf Paintings with semi-precious stones', 'Swamimalai Bronze Castings (GI Tag)', 'Thanjavur Veena Musical Instruments (GI Tag)'],
      folkArt: ['Tanjore Gold Paintings', 'Bharatanatyam temple iconography'],
      danceForms: ['Bharatanatyam (The traditional court repertoire originated here)', 'Karagattam']
    },
    heritageStreets: [
      {
        name: 'East Main Street & South Rampart',
        famousFor: 'Handmade Thanjavur dancing dolls, brass lamps, Tanjore art galleries, and degree coffee shops.',
        bestTime: '9:30 AM – 8:00 PM',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      }
    ],
    authenticFood: [
      {
        name: 'Thanjavur Degree Coffee with Fresh Chicory Brew',
        category: 'Beverage',
        desc: 'Freshly roasted Peaberry and Plantation coffee beans extracted with hot milk from pure cow’s milk, served frothing in stainless steel dabarah.',
        iconicSpots: ['Hotel Gnanam Degree Coffee', 'Kumbakonam Degree Coffee Stalls'],
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Traditional Chola Banana Leaf Tamil Meals & Ashoka Halwa',
        category: 'Main Course',
        desc: 'Steamed ponni rice with drumstick sambar, pepper rasam, poriyal, appalam, and sweet glistening moong dal Ashoka Halwa.',
        iconicSpots: ['Hotel Gnanam', 'Sree Ariya Bhavan'],
        image: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=600&q=80'
      }
    ],
    heritageRestaurants: [
      {
        name: 'Hotel Gnanam Restaurant',
        cuisine: 'Authentic Tamilian Heritage Meals',
        priceRange: '₹400 for two',
        mustTry: 'South Indian Veg Meals & Ashoka Halwa',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Swamimalai Masterclass in Chola Bronze Casting',
        duration: '3 Hours',
        priceEstimate: '₹1,200 per person',
        desc: 'Visit a 10th-generation bronze sculptor casting Nataraja statues using ancient Vedic lost-wax techniques.',
        category: 'Artisanal Craft'
      }
    ],
    nearbyAttractions: [
      { name: 'Gangaikonda Cholapuram UNESCO Temple', distanceKm: 70, desc: '11th-century temple built by Rajendra Chola I to commemorate conquest of the Ganges.' },
      { name: 'Dharasuram Airavatesvara UNESCO Temple', distanceKm: 38, desc: 'Intricate chariot-shaped temple covered in miniature dancer stone carvings.' },
      { name: 'Kumbakonam Temple Town & Mahamaham Tank', distanceKm: 40, desc: 'Historic temple center known as the Cambridge of South India.' }
    ]
  },
  {
    id: 'khajuraho',
    name: 'Khajuraho (The Chandela Temple Sanctuary)',
    state: 'Madhya Pradesh',
    tagline: 'UNESCO World Heritage Sandstone Temples, Nagara Shikhara & Figurative Masterpieces',
    bannerImage: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Built between 950 and 1050 CE by the Chandela Rajput dynasty, Khajuraho is a UNESCO World Heritage marvel of 25 surviving Nagara-style sandstone temples celebrating all facets of human life, divinity, dharma, and kama.',
    latitude: 24.8318,
    longitude: 79.9199,
    airport: 'Khajuraho Airport (HJR)',
    railwayStation: 'Khajuraho Railway Station (KURJ)',
    festivalIds: ['khajuraho-dance-festival', 'maha-shivratri'],
    monumentIds: ['khajuraho-temples', 'kandariya-mahadeva'],
    religiousSites: [
      {
        name: 'Kandariya Mahadeva Temple (Western Group)',
        type: 'UNESCO Nagara Shikhara Apex',
        desc: 'The largest and most ornate temple in Khajuraho, rising 31 meters with 84 miniature shikhara spires simulating Mount Kailash.',
        image: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Matangeshwara Temple',
        type: 'Active Shiva Mandir',
        desc: 'The only continuously active temple in the Western group housing an enormous 8-foot polished lingam.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'ASI Archaeological Museum Khajuraho',
        timing: '10:00 AM – 5:00 PM (Closed Fridays)',
        highlight: 'Sculptures of Ganesh, Jain Tirthankaras, and Chandela dancing celestial nymphs.',
        image: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Annual Khajuraho Dance Festival in February set against the floodlit Western Temples', 'Bundelkhandi folk music with Dholak and Timki', 'Pottery and brass craft in adjacent craft villages'],
      handicrafts: ['Bundelkhand Brass Artifacts', 'Terracotta Sculptures', 'Handmade Sandstone Miniature Figurines'],
      folkArt: ['Bundelkhand wall frescoes', 'Mandana mud floor art'],
      danceForms: ['Rai Dance (Bundelkhand folk dance)', 'Kathak & Classical fusion']
    },
    heritageStreets: [
      {
        name: 'Western Group Main Temple Road & Bazaars',
        famousFor: 'Brass artifacts, miniature stone idols, Bundeli snacks, and rooftop cafes.',
        bestTime: '9:00 AM – 9:00 PM',
        image: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=600&q=80'
      }
    ],
    authenticFood: [
      {
        name: 'Bundelkhandi Dal Bafla with Desi Ghee',
        category: 'Main Course',
        desc: 'Boiled and ghee-roasted wheat dumplings served with spicy toor dal, kadhi, mint chutney, and sweet mawa laddoos.',
        iconicSpots: ['Raja’s Cafe (Opposite Western Group)', 'Maharaja Restaurant'],
        image: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=600&q=80'
      }
    ],
    heritageRestaurants: [
      {
        name: 'Raja’s Cafe (Since 1978)',
        cuisine: 'Indian & Continental Garden Restro',
        priceRange: '₹800 for two',
        mustTry: 'Bundelkhandi Thali & Wood-Fired Pizzas with Temple Views',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Western Group Temples Sound & Light Show (Amitabh Bachchan Voiceover)',
        duration: '1 Hour (7:00 PM)',
        priceEstimate: '₹250 per person',
        desc: 'Narrates the saga of the Chandela kings and the divine inspiration behind Khajuraho’s stone carvings under starry skies.',
        category: 'Heritage Audio-Visual'
      }
    ],
    nearbyAttractions: [
      { name: 'Raneh Falls & Ken River Canyon (Gharial Sanctuary)', distanceKm: 20, desc: 'Spectacular multi-hued crystalline granite gorge with 30-meter waterfalls.' },
      { name: 'Panna National Park Tiger Reserve', distanceKm: 32, desc: 'Dense teak forest sanctuary home to Royal Bengal tigers, leopards, and crocodiles.' },
      { name: 'Kalinjar Fort (Impregnable Medieval Fortress)', distanceKm: 100, desc: 'Perched on an isolated hill with rock-cut Shiva sculptures.' }
    ]
  },
  {
    id: 'ahmedabad',
    name: 'Ahmedabad (India’s First UNESCO World Heritage City)',
    state: 'Gujarat',
    tagline: 'Centuries-Old Pols, Stepwells, Sabarmati Ashram & International Kite Carnival',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Inscribed in 2017 as India’s first UNESCO World Heritage City, Ahmedabad on the Sabarmati River features dense medieval residential neighborhoods called Pols with carved wooden facades, subterranean stepwells (Adalaj), and Mahatma Gandhi’s historic Sabarmati Ashram.',
    latitude: 23.0225,
    longitude: 72.5714,
    airport: 'Sardar Vallabhbhai Patel International Airport (AMD)',
    railwayStation: 'Ahmedabad Junction (ADI) / Kalupur',
    festivalIds: ['makar-sankranti', 'navratri', 'rann-utsav'],
    monumentIds: ['adalaj-stepwell', 'sidi-saiyyed-mosque', 'sabarmati-ashram'],
    religiousSites: [
      {
        name: 'Sidi Saiyyed Mosque (Tree of Life Jali)',
        type: '16th-Century Mosque',
        desc: 'World-famous for its ten intricately carved semi-circular stone lattice windows depicting intertwined tree branches and foliage.',
        image: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Hutheesing Jain Temple',
        type: '19th-Century Marble Temple',
        desc: 'All-white marble Jain temple with 52 subsidiary shrines and ornate hand-carved pillars and domes.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Calico Museum of Textiles (Shahibaug)',
        timing: '10:15 AM – 1:00 PM (By prior registration)',
        highlight: 'Premier textile museum in the world with Pichwais, Mughal silks, Kashmiri shawls, and double-ikat Patola weaves.',
        image: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Gandhi Smarak Sangrahalaya (Sabarmati Ashram)',
        timing: '8:30 AM – 6:30 PM',
        highlight: 'Preserves Hriday Kunj where Mahatma Gandhi lived, wrote, spun khadi, and launched the historic 1930 Dandi Salt March.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Uttarayan Kite Festival with millions of kites flown from pol rooftops', 'World’s longest dance festival: 9 nights of Garba during Navratri', 'Early morning Heritage Walk through the Old Pols'],
      handicrafts: ['Patan Patola Double Ikat Weaving', 'Ajrakh & Bandhani Hand Block Printing', 'Mata ni Pachedi Temple Cloth Painting'],
      folkArt: ['Mata ni Pachedi sacred cloth art', 'Rogan fabric painting'],
      danceForms: ['Garba (Circular devotional clap dance)', 'Dandiya Raas (Stick dance)']
    },
    heritageStreets: [
      {
        name: 'Manek Chowk Night Food Market & Pols',
        famousFor: 'Jewelry bazaar by day that magically transforms into a bustling midnight street food wonderland with 100 stalls.',
        bestTime: '9:00 PM – 1:30 AM',
        image: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=600&q=80'
      }
    ],
    authenticFood: [
      {
        name: 'Grand Gujarati Royal Thali with Farsan & Undhiyu',
        category: 'Main Course',
        desc: 'Multi-course vegetarian feast with Dhokla, Khandvi, seasonal winter vegetable Undhiyu, Kadhi, Puri, Shrikhand, and Basundi.',
        iconicSpots: ['Agashiye at The House of MG', 'Gordhan Thal (SG Highway)', 'Toran Dining Hall'],
        image: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Manek Chowk Chocolate Cheese Sandwich & Gwalior Dosa',
        category: 'Street Food',
        desc: 'Over-the-top melted cheese street creations layered with chocolate, pineapple jam, or loads of amul butter.',
        iconicSpots: ['Manek Chowk Night Stalls', 'Das Khaman House'],
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    heritageRestaurants: [
      {
        name: 'Agashiye at The House of MG (Old City)',
        cuisine: 'Rooftop Royal Gujarati Fine Dining',
        priceRange: '₹2,200 for two',
        mustTry: 'Unlimited Seasonal Silver Thali in 1924 heritage haveli',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Old Ahmedabad AMC Heritage Walk through 600-year-old Pols',
        duration: '2.5 Hours (7:45 AM – 10:30 AM)',
        priceEstimate: '₹200 per person',
        desc: 'Walk from Kalupur Swaminarayan Temple to Jama Masjid through secret underground passageways and wooden bird feeders (Chabutras).',
        category: 'UNESCO City Walk'
      }
    ],
    nearbyAttractions: [
      { name: 'Adalaj Stepwell (Adalaj ni Vav)', distanceKm: 18, desc: '5-story 1498 CE subterranean stepwell covered in intricate Islamic and Hindu floral carvings.' },
      { name: 'Modhera Sun Temple & Stepwell', distanceKm: 98, desc: '11th-century Solanki dynasty Sun Temple with magnificent geometric stepped tank (Surya Kund).' },
      { name: 'Rani ki Vav UNESCO Stepwell (Patan)', distanceKm: 125, desc: 'Inverted underground temple stepwell with over 500 principal sculptures.' }
    ]
  }
];
