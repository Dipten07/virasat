import { Monument } from '../types';

export const MONUMENTS_DATA: Monument[] = [
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    hindiName: 'ताज महल',
    cityId: 'agra',
    cityName: 'Agra',
    state: 'Uttar Pradesh',
    type: 'UNESCO World Heritage',
    bannerImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=800&q=80'
    ],
    historicalSignificance: 'An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife Mumtaz Mahal. It is the jewel of Muslim art in India and one of the universally admired masterpieces of the world’s heritage.',
    briefHistory: 'Commissioned by Shah Jahan in 1631, construction involved over 20,000 artisans, calligraphers, and stone-cutters from India, Persia, and Central Asia. The white Makrana marble changes hue under morning gold, midday bright white, and moonlight silvery glow.',
    architecture: 'Mughal Architecture combining Indo-Islamic, Persian, and Ottoman design elements. Features bilateral symmetry along a central axis, inlaid semiprecious stones (Pietra Dura), vaulted arches (Iwan), and four 40-meter minarets deliberately tilted outwards.',
    visitingHours: 'Sunrise to Sunset (Closed on Fridays). Night viewing available on full moon nights and 2 nights before/after.',
    entryFee: {
      indian: '₹50 (Mausoleum entry ₹200 additional)',
      foreign: '₹1,100 (Mausoleum entry ₹200 additional)',
      camera: 'Video camera ₹25 (Still cameras free outside main tomb)'
    },
    estimatedVisitDuration: '2.5 to 3.5 Hours',
    bestTimeToVisit: 'Sunrise (6:00 AM – 8:00 AM) for soft golden light and minimal crowds, or October to March during mild winter.',
    nearbyAttractions: ['Agra Fort (2.5 km)', 'Mehtab Bagh across Yamuna (7 km)', 'Itmad-ud-Daulah Tomb (Baby Taj) (5 km)'],
    nearbyFood: ['Agra Petha from Panchhi Petha', 'Bedmi Puri & Jalebi at Deviram Sweets', 'Mughlai Rogan Josh at Pinch of Spice'],
    latitude: 27.1751,
    longitude: 78.0421,
    bookingTicketUrl: 'https://asi.payumoney.com/',
    tags: ['UNESCO World Heritage', 'Seven Wonders of the World', 'Mughal Architecture', 'Marble Masterpiece']
  },
  {
    id: 'amber-fort',
    name: 'Amber Fort & Palace (Amer)',
    hindiName: 'आमेर दुर्ग',
    cityId: 'jaipur',
    cityName: 'Jaipur',
    state: 'Rajasthan',
    type: 'Fort',
    bannerImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
    ],
    historicalSignificance: 'The ancient citadel seat of the Kachwaha Rajputs overlooking Maota Lake. Part of the UNESCO Hill Forts of Rajasthan, it is celebrated for its Sheesh Mahal (Mirror Palace) where a single candle illuminates the entire chamber.',
    briefHistory: 'Constructed by Raja Man Singh I in 1592 and later expanded by Mirza Raja Jai Singh and Sawai Jai Singh II. It served as the Rajput royal residence before the founding of Jaipur city in 1727.',
    architecture: 'Harmonious Rajput-Mughal fusion built from pale yellow and pink sandstone with white marble. Divided into four courtyards including the Diwan-e-Aam, Diwan-e-Khas, Sheesh Mahal, and Sukh Niwas with natural water-cooling channels.',
    visitingHours: '8:00 AM – 5:30 PM (Day) & 6:30 PM – 9:15 PM (Night Tourism)',
    entryFee: {
      indian: '₹100 (Students ₹20, Night entry ₹100)',
      foreign: '₹550 (Students ₹100, Night entry ₹200)',
      camera: 'Still camera ₹50, Video ₹100'
    },
    estimatedVisitDuration: '3 to 4 Hours',
    bestTimeToVisit: 'Early morning (8:00 AM) or sunset during the Evening Light & Sound Show.',
    nearbyAttractions: ['Jaigarh Fort & Jaivana Cannon (1.5 km)', 'Nahargarh Fort (6 km)', 'Panna Meena ka Kund Stepwell (1 km)', 'Jal Mahal (5 km)'],
    nearbyFood: ['Pyaaz Kachori at Rawat Mishtan Bhandar', 'Laal Maas at 1135 AD inside Amber Fort', 'LMB Ghewar in Johari Bazaar'],
    latitude: 26.9855,
    longitude: 75.8513,
    bookingTicketUrl: 'https://rajasthandiscovery.gov.in/',
    tags: ['UNESCO Hill Fort', 'Sheesh Mahal', 'Rajput Grandeur', 'Maota Lake View']
  },
  {
    id: 'hawa-mahal',
    name: 'Hawa Mahal (Palace of Winds)',
    hindiName: 'हवा महल',
    cityId: 'jaipur',
    cityName: 'Jaipur',
    state: 'Rajasthan',
    type: 'Palace',
    bannerImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80'
    ],
    historicalSignificance: 'A 5-story pink and red sandstone facade with 953 intricately carved jharokhas (small casements), designed to allow royal Rajput women to observe daily bazaar street life without being seen.',
    briefHistory: 'Built in 1799 by Maharaja Sawai Pratap Singh, a devoted worshipper of Lord Krishna, the monument resembles the crown of Krishna. Designed by master architect Lal Chand Ustad.',
    architecture: 'Unique honeycomb Rajput architecture utilizing the Venturi effect: cool breezes pass through the tiny stone lattice windows, acting as an ancient air-conditioning system.',
    visitingHours: '9:00 AM – 5:00 PM Daily',
    entryFee: {
      indian: '₹50 (Students ₹20)',
      foreign: '₹200 (Students ₹25)'
    },
    estimatedVisitDuration: '1 to 1.5 Hours',
    bestTimeToVisit: 'Sunrise from the rooftop cafes opposite Hawa Mahal (Tattoo Cafe / Wind View Cafe) as morning sunlight illuminates the red sandstone facade.',
    nearbyAttractions: ['City Palace Jaipur (400 m)', 'Jantar Mantar UNESCO Observatory (450 m)', 'Johari Bazaar (300 m)'],
    nearbyFood: ['Lassi at Lassiwala (MI Road)', 'Dal Baati Churma at Thali & More', 'Kulfi Falooda at Pandit Kulfi'],
    latitude: 26.9239,
    longitude: 75.8267,
    bookingTicketUrl: 'https://rajasthandiscovery.gov.in/',
    tags: ['Honeycomb Facade', 'Pink City Icon', 'Venturi Cooling', '953 Jharokhas']
  },
  {
    id: 'kashi-vishwanath',
    name: 'Kashi Vishwanath Temple & Ganga Ghats',
    hindiName: 'काशी विश्वनाथ मंदिर एवं गंगा घाट',
    cityId: 'varanasi',
    cityName: 'Varanasi',
    state: 'Uttar Pradesh',
    type: 'Temple / Mandir',
    bannerImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80'
    ],
    historicalSignificance: 'One of the twelve sacred Jyotirlingas, situated in the world’s oldest continuously inhabited spiritual city. Its gold-plated spire was donated by Maharaja Ranjit Singh in 1835. The newly expanded Vishwanath Corridor connects the sanctum directly to the riverfront.',
    briefHistory: 'Rebuilt by the Maratha queen Maharani Ahilyabai Holkar of Indore in 1780. Kashi has been the focal point of Hindu philosophy, Sanskrit scholarship, and spiritual liberation (Moksha) for over 3,000 years.',
    architecture: 'Nagara temple architecture with a 15.5-meter golden pinnacle. Connected to 84 stone ghats stretching 7 km along the crescent curve of the sacred Ganges.',
    visitingHours: 'Temple: 3:00 AM (Mangala Aarti) – 11:00 PM (Shayan Aarti). Ghats: Accessible 24/7.',
    entryFee: {
      indian: 'Free General Darshan (Special Sugam Darshan ₹300)',
      foreign: 'Free General Darshan (Passport required for security checks)'
    },
    estimatedVisitDuration: '2 to 3 Hours for Temple + 2 Hours for Ghat Walking',
    bestTimeToVisit: 'Dawn (5:15 AM) for Subah-e-Banaras sunrise boat ride from Assi Ghat to Dashashwamedh Ghat, followed by 6:30 PM Ganga Maha Aarti.',
    nearbyAttractions: ['Dashashwamedh Ghat (500 m)', 'Manikarnika Ghat (400 m)', 'Sarnath Deer Park & Dhamek Stupa (10 km)', 'Ramnagar Fort (8 km)'],
    nearbyFood: ['Banarasi Paan at Keshav Tambool', 'Malaiyo (Winter saffron froth) at Thatheri Bazaar', 'Kachori Sabzi at Ram Bhandar', 'Blue Lassi near Manikarnika'],
    latitude: 25.3109,
    longitude: 83.0107,
    bookingTicketUrl: 'https://shrikashivishwanath.org/',
    tags: ['Jyotirlinga', 'Spiritual Capital', 'Sacred Ganges', 'Ahilyabai Holkar']
  },
  {
    id: 'golden-temple',
    name: 'Sri Harmandir Sahib (Golden Temple)',
    hindiName: 'श्री हरमंदिर साहिब (स्वर्ण मंदिर)',
    cityId: 'amritsar',
    cityName: 'Amritsar',
    state: 'Punjab',
    type: 'Religious Heritage',
    bannerImage: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80'
    ],
    historicalSignificance: 'The holiest Gurdwara and spiritual heart of Sikhism. Built on a level below the surrounding ground with four entrances open to all directions, symbolizing that all humans are equal regardless of caste, creed, gender, or religion.',
    briefHistory: 'Designed by Guru Arjan Dev Ji, who installed the Adi Granth in 1604. In 1830, Maharaja Ranjit Singh overlaid the upper sanctum with 500 kg of pure gold foil, earning it the moniker Golden Temple.',
    architecture: 'Distinctive Sikh architecture harmonizing Hindu and Islamic elements. Sits in the center of a man-made sacred pool (Amrit Sarovar), accessed via a marble causeway called the Guru’s Bridge.',
    visitingHours: 'Open 24 Hours, 365 Days a Year. Palki Sahib ceremony at 4:30 AM and 10:00 PM.',
    entryFee: {
      indian: 'Free (All are welcomed unconditionally)',
      foreign: 'Free (Head coverings provided at entrance)'
    },
    estimatedVisitDuration: '3 to 4 Hours (including Langar Seva)',
    bestTimeToVisit: 'Dawn (4:00 AM) for Amrit Vela hymns or night (8:00 PM – 10:30 PM) for the gold reflection upon the illuminated Amrit Sarovar.',
    nearbyAttractions: ['Jallianwala Bagh (300 m)', 'Partition Museum (600 m)', 'Wagah Border (30 km for daily retreat ceremony)', 'Gobindgarh Fort (2.5 km)'],
    nearbyFood: ['World’s largest free Langar (serving 100,000+ meals daily)', 'Amritsari Kulcha at Bhai Kulwant Singh / Kesar Da Dhaba', 'Creamy Peda Lassi at Ahuja Lassi'],
    latitude: 31.6200,
    longitude: 74.8765,
    tags: ['Holiest Sikh Shrine', 'Pure Gold Sanctum', 'World Largest Langar', 'Amrit Sarovar Pool']
  },
  {
    id: 'hampi-ruins',
    name: 'Group of Monuments at Hampi (Stone Chariot & Virupaksha)',
    hindiName: 'हम्पी स्मारक समूह',
    cityId: 'hampi',
    cityName: 'Hampi',
    state: 'Karnataka',
    type: 'UNESCO World Heritage',
    bannerImage: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80'
    ],
    historicalSignificance: 'The austere, grandiose capital of the 14th-century Vijayanagara Empire on the banks of the Tungabhadra River. Famous for the monolithic Stone Chariot (Garuda shrine) featured on the Indian ₹50 currency note and musical stone pillars.',
    briefHistory: 'Chronicled by Persian and Portuguese travelers as one of the richest and largest cities in the medieval world before its sack in 1565. The 4,100-hectare site contains over 1,600 surviving monuments.',
    architecture: 'Dravidian Vijayanagara style using hard local granite boulders. Highlights include the still-active 7th-century Virupaksha Temple tower, Vittala Temple’s 56 musical pillars, Lotus Mahal, and Elephant Stables.',
    visitingHours: 'Virupaksha: 6:00 AM – 8:00 PM. Vittala Temple & Royal Enclosure: 8:30 AM – 5:30 PM.',
    entryFee: {
      indian: '₹40 (covers Vittala Temple, Zanana Enclosure & Museum)',
      foreign: '₹600'
    },
    estimatedVisitDuration: '1 to 2 Full Days',
    bestTimeToVisit: 'November to February for pleasant weather; sunrise from Matanga Hill and sunset at Hemakuta Hill.',
    nearbyAttractions: ['Vittala Temple Stone Chariot (2.5 km)', 'Hemakuta Hill Sunset Point (200 m)', 'Coracle ride at Sanapur Lake across river (8 km)', 'Anjaneya Hill (Birthplace of Hanuman) (12 km)'],
    nearbyFood: ['South Indian Thali at Mango Tree Restaurant', 'Paddu and Filter Coffee at local shacks', 'Banana pancake breakfast in Hampi Bazaar'],
    latitude: 15.3350,
    longitude: 76.4600,
    bookingTicketUrl: 'https://asi.payumoney.com/',
    tags: ['UNESCO World Heritage', 'Stone Chariot', 'Musical Pillars', 'Vijayanagara Empire']
  },
  {
    id: 'konark-sun-temple',
    name: 'Konark Sun Temple (The Black Pagoda)',
    hindiName: 'कोणार्क सूर्य मंदिर',
    cityId: 'puri',
    cityName: 'Puri / Konark',
    state: 'Odisha',
    type: 'UNESCO World Heritage',
    bannerImage: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=800&q=80'
    ],
    historicalSignificance: 'A monumental 13th-century stone chariot dedicated to the Sun God Surya, designed with 24 carved stone wheels that function as precise sundials, pulled by seven spirited stone horses facing the Bay of Bengal sunrise.',
    briefHistory: 'Constructed around 1250 CE by King Narasimhadeva I of the Eastern Ganga Dynasty. Rabindranath Tagore wrote: "Here the language of stone surpasses the language of human."',
    architecture: 'Kalinga Architecture of the highest sophistication built from Khondalite stone. The sundial wheels calculate time down to minutes based on shadow widths across spokes.',
    visitingHours: '6:00 AM – 8:00 PM Daily',
    entryFee: {
      indian: '₹40',
      foreign: '₹600',
      camera: 'Still photography free, Video ₹25'
    },
    estimatedVisitDuration: '2 to 3 Hours',
    bestTimeToVisit: 'Sunrise (6:00 AM) as the morning sun casts first rays on the main Natya Mandap, or during December Konark Dance Festival.',
    nearbyAttractions: ['Chandrabhaga Golden Sand Beach (3 km)', 'Puri Jagannath Temple (35 km)', 'Pipili Applique Artisan Village (40 km)', 'Raghurajpur Heritage Pattachitra Crafts Village (45 km)'],
    nearbyFood: ['Chhena Poda (Caramelized baked cheese dessert) at Nimapada', 'Fresh Crab & Prawn Curry at Chandrabhaga', 'Odia Dalma & Pakhala Bhata'],
    latitude: 19.8876,
    longitude: 86.0945,
    bookingTicketUrl: 'https://asi.payumoney.com/',
    tags: ['UNESCO World Heritage', 'Sundial Stone Wheels', 'Kalinga Architecture', 'Sun God Surya']
  },
  {
    id: 'meenakshi-temple',
    name: 'Meenakshi Amman Temple',
    hindiName: 'मीनाक्षी अम्मन मंदिर',
    cityId: 'madurai',
    cityName: 'Madurai',
    state: 'Tamil Nadu',
    type: 'Temple / Mandir',
    bannerImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&w=800&q=80'
    ],
    historicalSignificance: 'The monumental epicenter of the 2,500-year-old temple city Madurai, featuring 14 soaring Gopuram towers adorned with over 33,000 brightly painted mythological sculptures and the sacred Golden Lotus Tank (Porthamarai Kulam).',
    briefHistory: 'Expanded extensively during the Nayak dynasty (16th–17th centuries) by King Tirumala Nayak. Goddess Meenakshi (an avatar of Parvati) holds supreme reign, and the temple celebrates the divine wedding of Meenakshi and Sundareswarar.',
    architecture: 'Peak Dravidian temple design spanning 14 acres. Highlights include the Hall of Thousand Pillars (Ayiram Kaal Mandapam) carved from single granite monoliths and the musical stone pillars.',
    visitingHours: '5:00 AM – 12:30 PM & 4:00 PM – 10:00 PM Daily',
    entryFee: {
      indian: 'Free General Entry (Special Darshan ₹100, Thousand Pillar Hall ₹50)',
      foreign: 'Free Entry to Courtyards (Non-Hindus not permitted inside inner sanctum)'
    },
    estimatedVisitDuration: '3 to 4 Hours',
    bestTimeToVisit: 'Evening (7:00 PM – 9:30 PM) for the nighttime Palli Arai procession where Lord Sundareswarar’s silver palanquin is carried to Meenakshi’s chamber.',
    nearbyAttractions: ['Thirumalai Nayakkar Palace (1.5 km)', 'Gandhi Memorial Museum (4 km)', 'Koodal Azhagar Temple (1 km)', 'Vandiyur Mariamman Teppakulam (4 km)'],
    nearbyFood: ['Famous Madurai Jigarthanda at Famous Jigarthanda (East Marret St)', 'Bun Parotta at Madurai Kumar Mess', 'Murugan Idli Shop soft Ghee Idlis'],
    latitude: 9.9195,
    longitude: 78.1193,
    tags: ['Dravidian Marvel', '14 Soaring Gopurams', 'Thousand Pillar Hall', 'Golden Lotus Tank']
  },
  {
    id: 'mysore-palace',
    name: 'Mysore Royal Palace (Amba Vilas)',
    hindiName: 'मैसूर शाही महल (अम्बा विलास)',
    cityId: 'mysore',
    cityName: 'Mysore',
    state: 'Karnataka',
    type: 'Palace',
    bannerImage: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80'
    ],
    historicalSignificance: 'The official seat of the Wadiyar dynasty rulers of Mysore. One of India’s most visited royal palaces, it dazzles visitors with its stained-glass ceilings, carved mahogany doors, golden thrones, and Sunday night illumination of 100,000 bulbs.',
    briefHistory: 'Commissioned in 1897 by Maharani Vani Vilas Sannidhana after the previous wooden palace burned down, and designed by renowned British architect Henry Irwin. Completed in 1912.',
    architecture: 'Indo-Saracenic masterwork blending Hindu, Mughal, Rajput, and Gothic architectural styles. Features a 145-foot three-story stone structure with marble domes and a solid gold 750 kg Howdah throne.',
    visitingHours: '10:00 AM – 5:30 PM Daily. Illumination: Sundays and Public Holidays 7:00 PM – 7:45 PM.',
    entryFee: {
      indian: '₹100 (Children ₹50)',
      foreign: '₹1,000 (Includes Audio Tour)'
    },
    estimatedVisitDuration: '2 to 3 Hours',
    bestTimeToVisit: 'Sunday evening at 6:45 PM to witness the switch-on of 100,000 golden light bulbs accompanied by the Karnataka Police brass band.',
    nearbyAttractions: ['Chamundi Hills & Sri Chamundeshwari Temple (12 km)', 'Devaraja Heritage Market (800 m)', 'St. Philomena’s Cathedral (2 km)', 'Brindavan Gardens (20 km)'],
    nearbyFood: ['Original Mysore Pak at Guru Sweet Mart (Sayyaji Rao Rd)', 'Mysore Masala Dosa at Mylari Hotel', 'Filter Coffee at Dasaprakash'],
    latitude: 12.3051,
    longitude: 76.6551,
    bookingTicketUrl: 'https://mysorepalace.karnataka.gov.in/',
    tags: ['Indo-Saracenic', '100,000 Bulbs Illumination', 'Wadiyar Royal Dynasty', 'Golden Howdah']
  },
  {
    id: 'victoria-memorial',
    name: 'Victoria Memorial Hall & Kolkata Heritage Quarter',
    hindiName: 'विक्टोरिया मेमोरियल',
    cityId: 'kolkata',
    cityName: 'Kolkata',
    state: 'West Bengal',
    type: 'Museum / Gallery',
    bannerImage: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80'
    ],
    historicalSignificance: 'A majestic white Makrana marble monument dedicated to Queen Victoria, now housing India’s premier collection of British Raj paintings, rare Mughal miniatures, manuscripts, and Kolkata historical galleries surrounded by 64 acres of landscaped gardens.',
    briefHistory: 'Envisioned by Viceroy Lord Curzon in 1901 and designed by Sir William Emerson, President of the Royal Institute of British Architects. Completed in 1921.',
    architecture: 'Indo-Saracenic Revival with Venetian, Egyptian, and Mughal elements, crowned by a 16-foot bronze Angel of Victory that rotates with wind gusts atop the central dome.',
    visitingHours: 'Gardens: 5:30 AM – 6:15 PM. Museum Galleries: 10:00 AM – 6:00 PM (Closed Mondays).',
    entryFee: {
      indian: '₹50 (Garden only ₹20)',
      foreign: '₹500 (Garden included)'
    },
    estimatedVisitDuration: '2 to 3 Hours',
    bestTimeToVisit: 'Late afternoon (3:30 PM – 5:30 PM) for the soft sunset light reflecting on the white marble and water ponds, followed by the evening Sound & Light Show.',
    nearbyAttractions: ['St. Paul’s Cathedral (400 m)', 'Indian Museum (1.5 km)', 'Park Street Dining Boulevard (1.2 km)', 'Howrah Bridge & Flower Market (5 km)'],
    nearbyFood: ['Kathi Rolls at Nizam’s / Kusum Rolls', 'Flurys Heritage Tea Room English Breakfast on Park Street', 'Puchka & Jhalmuri at Victoria South Gate', 'K.C. Das Rasgulla'],
    latitude: 22.5448,
    longitude: 88.3426,
    bookingTicketUrl: 'https://victoriamemorial-cal.org/',
    tags: ['White Makrana Marble', 'Indo-Saracenic Masterpiece', 'Colonial Art Museum', 'Angel of Victory']
  },
  {
    id: 'khajuraho-temples',
    name: 'Khajuraho Group of Monuments',
    hindiName: 'खजुराहो स्मारक समूह',
    cityId: 'khajuraho',
    cityName: 'Khajuraho',
    state: 'Madhya Pradesh',
    type: 'UNESCO World Heritage',
    bannerImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=800&q=80'
    ],
    historicalSignificance: 'Celebrated UNESCO World Heritage sandstone temples dating from 950 to 1050 CE, renowned for their architectural harmony and exquisite figurative sculptures celebrating dharma, artha, kama, and moksha.',
    briefHistory: 'Built by the Chandela Rajput dynasty rulers. Originally a complex of 85 temples, 25 survive today split across the Western, Eastern, and Southern groups.',
    architecture: 'Pinnacle of Nagara temple architecture with Shikhara spires simulating the sacred Himalayan peaks. Built without mortar using mortise and tenon sandstone joints.',
    visitingHours: 'Sunrise to Sunset Daily',
    entryFee: {
      indian: '₹40',
      foreign: '₹600'
    },
    estimatedVisitDuration: '3 to 5 Hours across Western and Eastern groups',
    bestTimeToVisit: 'Sunrise at Kandariya Mahadeva Temple, or February during the Khajuraho Dance Festival.',
    nearbyAttractions: ['Kandariya Mahadeva Temple (in Western group)', 'Raneh Falls Canyon & Gharial Sanctuary (20 km)', 'Panna National Park Tiger Reserve (30 km)'],
    nearbyFood: ['Bundelkhandi Dal Bafla & Thali at Raja’s Cafe', 'Bedmi Poori breakfast at Jain Temple road', 'Mawa Jalebi'],
    latitude: 24.8318,
    longitude: 79.9199,
    bookingTicketUrl: 'https://asi.payumoney.com/',
    tags: ['UNESCO World Heritage', 'Chandela Dynasty', 'Nagara Sandstone Spire', 'Kandariya Mahadeva']
  },
  {
    id: 'qutub-minar',
    name: 'Qutub Minar & Mehrauli Archaeological Complex',
    hindiName: 'क़ुतुब मीनार',
    cityId: 'delhi',
    cityName: 'New Delhi',
    state: 'Delhi',
    type: 'UNESCO World Heritage',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=800&q=80'
    ],
    historicalSignificance: 'A soaring 72.5-meter five-story minaret of fluted red sandstone and marble, commenced in 1192 CE. Contains the miraculous 1,600-year-old rust-resistant Iron Pillar of Chandragupta II.',
    briefHistory: 'Commenced by Qutb-ud-din Aibak to celebrate the establishment of the Delhi Sultanate, with additional stories added by Iltutmish and Firoz Shah Tughlaq.',
    architecture: 'Indo-Islamic architectural marvel featuring alternating angular and rounded flutings, intricate Arabic calligraphy, and stalactite corbelled balconies.',
    visitingHours: '7:00 AM – 9:00 PM Daily (Night illuminated viewing available)',
    entryFee: {
      indian: '₹50',
      foreign: '₹600'
    },
    estimatedVisitDuration: '2 to 2.5 Hours',
    bestTimeToVisit: 'Late afternoon (4:00 PM) to catch the golden sunlight glowing on the sandstone balconies followed by evening illuminations.',
    nearbyAttractions: ['Iron Pillar of Delhi (in complex)', 'Alai Darwaza & Tomb of Iltutmish (in complex)', 'Mehrauli Archaeological Park & Jamali Kamali (1 km)', 'Hauz Khas Village (4 km)'],
    nearbyFood: ['Dilli 6 Kebabs at Olive Bar & Kitchen (Mehrauli)', 'Parathas at Moti Mahal', 'Chole Bhature at Bengali Sweet House'],
    latitude: 28.5244,
    longitude: 77.1855,
    bookingTicketUrl: 'https://asi.payumoney.com/',
    tags: ['UNESCO World Heritage', '72.5m Tallest Minaret', 'Rustless Iron Pillar', 'Delhi Sultanate']
  },
  {
    id: 'humayun-tomb',
    name: 'Humayun’s Tomb & Sunder Nursery',
    hindiName: 'हुमायूँ का मक़बरा',
    cityId: 'delhi',
    cityName: 'New Delhi',
    state: 'Delhi',
    type: 'UNESCO World Heritage',
    bannerImage: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    historicalSignificance: 'The first garden-tomb on the Indian subcontinent and direct architectural predecessor to the Taj Mahal. Commissioned by Humayun’s chief consort Bega Begum in 1558.',
    briefHistory: 'Designed by Persian architect Mirak Mirza Ghiyas, this monument pioneered the grand Charbagh (four-quadrant paradise garden) and monumental double dome in Mughal India.',
    architecture: 'High Mughal red sandstone with white and black marble inlays, set within a geometrically symmetrical 30-acre Charbagh garden with flowing water channels.',
    visitingHours: '6:00 AM – 6:00 PM Daily',
    entryFee: {
      indian: '₹40',
      foreign: '₹600'
    },
    estimatedVisitDuration: '2 to 3 Hours',
    bestTimeToVisit: 'Sunrise or late afternoon (4:00 PM – 6:00 PM) for photography, followed by sunset walk in adjacent Sunder Nursery.',
    nearbyAttractions: ['Sunder Nursery Heritage Park (Adjacent)', 'Nizamuddin Dargah & Qawwali (800 m)', 'National Crafts Museum (3 km)', 'India Gate (3.5 km)'],
    nearbyFood: ['Mughlai Biryani at Ghalib Kabab Corner (Nizamuddin)', 'Kareem’s Kebabs', 'Cafe Lota inside Crafts Museum'],
    latitude: 28.5933,
    longitude: 77.2507,
    bookingTicketUrl: 'https://asi.payumoney.com/',
    tags: ['UNESCO World Heritage', 'Charbagh Paradise Garden', 'Mughal Architecture', 'Precursor to Taj Mahal']
  },
  {
    id: 'gateway-of-india',
    name: 'Gateway of India & Elephanta Caves',
    hindiName: 'गेटवे ऑफ़ इंडिया',
    cityId: 'mumbai',
    cityName: 'Mumbai',
    state: 'Maharashtra',
    type: 'Monuments & Waterfront',
    bannerImage: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80'
    ],
    historicalSignificance: 'An imposing 26-meter basalt arch erected to commemorate the landing of King George V and Queen Mary at Apollo Bunder in 1911. Later served as the ceremonial departure point for the last British troops in 1948.',
    briefHistory: 'Designed by George Wittet in the Indo-Saracenic style with Gujarati 16th-century architectural motifs. Ferries leave from its jetty to the UNESCO 6th-century rock-cut Elephanta Caves.',
    architecture: 'Indo-Saracenic triumphal arch crafted from yellow basalt and reinforced concrete, featuring intricate jali lattice work and central 83-foot dome.',
    visitingHours: 'Open 24/7. Elephanta Ferries: 9:00 AM – 2:00 PM (Closed Mondays).',
    entryFee: {
      indian: 'Free (Elephanta ferry ₹260 return)',
      foreign: 'Free (Elephanta caves entry ₹600)'
    },
    estimatedVisitDuration: '1.5 Hours at Gateway + 4 Hours for Elephanta Island',
    bestTimeToVisit: 'Sunrise for quiet sea breeze views, or sunset with illuminated Taj Mahal Palace Hotel backdrop.',
    nearbyAttractions: ['The Taj Mahal Palace Hotel (Adjacent)', 'Colaba Causeway Shopping (500 m)', 'Chhatrapati Shivaji Maharaj Vastu Sangrahalaya Museum (800 m)', 'Marine Drive Promenade (2 km)'],
    nearbyFood: ['Cafe Mondegar & Leopold Cafe on Colaba Causeway', 'Bademiya seekh kebabs', 'Britannia & Co. Berry Pulao in Ballard Estate'],
    latitude: 18.9220,
    longitude: 72.8347,
    tags: ['Waterfront Icon', 'Indo-Saracenic Arch', 'Arabian Sea Gateway', 'Elephanta Ferry']
  },
  {
    id: 'mehrangarh-fort',
    name: 'Mehrangarh Fort (Citadel of the Sun)',
    hindiName: 'मेहरानगढ़ दुर्ग - जोधपुर',
    cityId: 'jodhpur',
    cityName: 'Jodhpur',
    state: 'Rajasthan',
    type: 'Fort',
    bannerImage: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80'
    ],
    historicalSignificance: 'Perched 410 feet above the Blue City on a sheer cliff, Mehrangarh is one of India’s most formidable and best-preserved fortresses, founded in 1459 by Rao Jodha.',
    briefHistory: 'Rudyard Kipling described it as "a palace that might have been built by Titans and colored by the morning sun." Contains cannonball scars from battles with Jaipur armies at Dedh Kamgra Gate.',
    architecture: 'Massive burnished sandstone ramparts, with opulent interior palaces like Sheesh Mahal, Phool Mahal, and Moti Mahal featuring fine sandstone tracery.',
    visitingHours: '9:00 AM – 5:00 PM Daily. Ziplining (Flying Fox) available.',
    entryFee: {
      indian: '₹100 (Students ₹50)',
      foreign: '₹600 (Audio guide included)'
    },
    estimatedVisitDuration: '3 to 4 Hours',
    bestTimeToVisit: 'Early morning for museum galleries or late afternoon to watch the setting sun turn the Blue City rooftops violet-blue.',
    nearbyAttractions: ['Jaswant Thada Marble Cenotaph (1 km)', 'Rao Jodha Desert Rock Park (Adjacent)', 'Toorji ka Jhalra Stepwell (1.5 km)', 'Umaid Bhawan Palace (5 km)'],
    nearbyFood: ['Mirchi Vada at Janta Sweet Home', 'Makhaniya Lassi at Shri Mishrilal Hotel (Clock Tower)', 'Laal Maas at Indique Rooftop'],
    latitude: 26.2980,
    longitude: 73.0189,
    bookingTicketUrl: 'https://mehrangarh.org/',
    tags: ['Formidable Hill Fortress', 'Blue City Panorama', 'Rathore Dynasty', 'Sheesh Mahal']
  },
  {
    id: 'city-palace-udaipur',
    name: 'City Palace Udaipur & Lake Pichola',
    hindiName: 'सिटी पैलेस - उदयपुर',
    cityId: 'udaipur',
    cityName: 'Udaipur',
    state: 'Rajasthan',
    type: 'Palace',
    bannerImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80'
    ],
    historicalSignificance: 'The largest palace complex in Rajasthan, built atop a ridge overlooking Lake Pichola. Initiated by Maharana Udai Singh II in 1559 and expanded by 22 successive Maharanas.',
    briefHistory: 'A monumental confluence of Rajasthani, Mughal, and European architecture that remained unconquered during multiple sieges. Features the famous Mor Chowk (Peacock Courtyard) with 5,000 glass mosaics.',
    architecture: 'Granite and marble complex comprising 11 palaces, courtyards, terraces, and hanging gardens with panoramic vistas of the lake and Jag Mandir island.',
    visitingHours: '9:30 AM – 5:30 PM Daily. Lake Pichola Boat Rides: 10:00 AM – 6:00 PM.',
    entryFee: {
      indian: '₹300 (Museum entry)',
      foreign: '₹300 (Museum entry + Audio Guide ₹200)'
    },
    estimatedVisitDuration: '3 to 4 Hours',
    bestTimeToVisit: 'Late afternoon for palace museum, followed by a 5:30 PM sunset boat cruise around Taj Lake Palace.',
    nearbyAttractions: ['Lake Pichola Boat Cruise & Jag Mandir (Direct access)', 'Jagdish Temple (200 m)', 'Bagore ki Haveli Dharohar Dance Show (400 m)', 'Sajjangarh Monsoon Palace (8 km)'],
    nearbyFood: ['Dal Baati Churma at Krishna Dal Bati Restro', 'Kachoris at Jagdish Chowk', 'Lakeside dinner at Ambrai Restaurant with palace illumination views'],
    latitude: 24.5764,
    longitude: 73.6835,
    bookingTicketUrl: 'https://citypalaceudaipur.com/',
    tags: ['Largest Rajasthan Palace', 'Lake Pichola', 'Mor Chowk Glass Mosaics', 'Mewar Dynasty']
  },
  {
    id: 'brihadisvara-temple',
    name: 'Brihadisvara Temple (The Great Living Chola Temple)',
    hindiName: 'बृहदीश्वर मंदिर - तंजावुर',
    cityId: 'thanjavur',
    cityName: 'Thanjavur',
    state: 'Tamil Nadu',
    type: 'UNESCO World Heritage',
    bannerImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&w=800&q=80'
    ],
    historicalSignificance: 'Consecrated in 1010 CE by Emperor Rajaraja Chola I, this all-granite temple is an engineering marvel of the ancient world. The 66-meter Vimana tower is capped by a single 80-tonne granite Kumbam cupola.',
    briefHistory: 'Representing the zenith of Chola imperial power, maritime trade, and bronze sculpture. Celebrated for its 1,000-year-old Tamil inscriptions, classical Bharatanatyam dance carvings, and massive monolithic Nandi bull.',
    architecture: 'Pure Dravidian temple architecture built entirely from interlocking granite without mortar. The shadow of the Vimana tower never falls on the ground at noon.',
    visitingHours: '6:00 AM – 12:30 PM & 4:00 PM – 8:30 PM Daily',
    entryFee: {
      indian: 'Free',
      foreign: 'Free'
    },
    estimatedVisitDuration: '2.5 to 3.5 Hours',
    bestTimeToVisit: 'Early morning (6:30 AM) or sunset (5:30 PM) when the warm granite glows deep golden amber under twilight lamps.',
    nearbyAttractions: ['Thanjavur Royal Palace & Art Gallery (2 km)', 'Saraswathi Mahal Library (2 km)', 'Schwartz Church (1.5 km)', 'Thiruvaiyaru Thyagaraja Samadhi (14 km)'],
    nearbyFood: ['Thanjavur Degree Coffee', 'Traditional Tamil Veg Meals at Hotel Gnanam', 'Ashoka Halwa at local sweet stalls'],
    latitude: 10.7828,
    longitude: 79.1318,
    tags: ['UNESCO World Heritage', 'Chola Golden Era', '80-Tonne Monolithic Cupola', 'All-Granite Vimana']
  }
];
