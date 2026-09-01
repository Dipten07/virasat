import { CityDestination } from '../types';

export const REGIONAL_CITIES_DATA: CityDestination[] = [
  // 1. BHUBANESWAR (Odisha)
  {
    id: 'bhubaneswar',
    name: 'Bhubaneswar (Ekamra Kshetra)',
    state: 'Odisha',
    tagline: 'The Temple City of India, Kalinga Sandstone Architecture & Sacred Ponds',
    bannerImage: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Once boasting over 7,000 sandstone shrines, Bhubaneswar is the historic capital of Odisha and an ancient hub of Buddhism, Jainism, and Shaivism spanning over 2,000 years.',
    latitude: 20.2961,
    longitude: 85.8245,
    airport: 'Biju Patnaik International Airport (BBI)',
    railwayStation: 'Bhubaneswar Railway Station (BBS)',
    festivalIds: ['ratha-yatra-puri', 'raja-parba-odisha', 'dola-purnima-odisha', 'chandan-yatra-odisha'],
    monumentIds: ['lingaraj-temple', 'mukteshvara-temple', 'udayagiri-khandagiri'],
    religiousSites: [
      {
        name: 'Lingaraj Temple (11th Century)',
        type: 'Kalinga Shaivite Shrine',
        desc: 'Majestic 55-meter tall deula dedicated to Harihara (combined Vishnu and Shiva), surrounded by 150 smaller shrines.',
        image: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Mukteshwar & Rajarani Temples',
        type: 'Architectural Gem',
        desc: 'Renowned as the "Gem of Odisha Architecture" featuring a magnificent sculptured stone torana archway.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Odisha State Museum',
        timing: '10:00 AM – 5:00 PM (Closed Mondays)',
        highlight: 'Ancient palm-leaf manuscripts, copper plate inscriptions, and Kalinga stone sculptures.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Kala Bhoomi Crafts Museum',
        timing: '10:00 AM – 5:30 PM',
        highlight: 'Live mastercraftsmen weaving Ikat, Pattachitra paintings, silver filigree, and terracotta.',
        image: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Ekamra walks around Bindu Sagar lake', 'Prathamastami festival rice cakes', 'Odissi classical dance performances'],
      handicrafts: ['Pattachitra Scroll Painting', 'Pipili Appliqué Needlework', 'Tarakasi Silver Filigree'],
      folkArt: ['Jhoti Chita floor art', 'Chhau dance masks'],
      danceForms: ['Odissi', 'Gotipua', 'Danda Nacha']
    },
    heritageStreets: [
      {
        name: 'Old Town & Bindu Sagar Ghats',
        famousFor: 'Heritage walks amidst 1,000-year-old sandstone deulas and sacred water tanks.',
        bestTime: '6:30 AM – 9:00 AM'
      },
      {
        name: 'Ekamra Haat',
        famousFor: 'Authentic Odisha handlooms, Sambalpuri Ikat sarees, and regional sweets.',
        bestTime: '11:00 AM – 9:00 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Pakhala Bhata with Badi Chura & Machha Bhaja',
        category: 'Main Course',
        desc: 'Fermented aromatic rice cooled in curd, cumin, and curry leaves served with crispy sundried lentil crumble.',
        iconicSpots: ['Dalma Restaurant', 'Odisha Hotel Old Town']
      },
      {
        name: 'Pahala Rasgulla & Chhena Poda',
        category: 'Sweets',
        desc: 'Melt-in-mouth cottage cheese slow-baked with cardamom and caramelized jaggery over sal leaves.',
        iconicSpots: ['Pahala Sweet Highway', 'Bikalananda Kar']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Dalma Restaurant',
        cuisine: 'Traditional Odia Heritage Thali',
        priceRange: '₹500 for two',
        mustTry: 'Dalma with Ghee, Santula, and Chhena Jhili',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Ekamra Heritage Temple Walk',
        duration: '2.5 Hours',
        priceEstimate: '₹200 per person',
        desc: 'Guided dawn walk through 7th to 11th century temple corridors and sacred pond rituals.',
        category: 'Heritage Walk'
      }
    ],
    nearbyAttractions: [
      { name: 'Udayagiri & Khandagiri Jain Caves', distanceKm: 8, desc: 'Rock-cut caves dating to 2nd century BCE King Kharavela.' },
      { name: 'Dhauli Peace Pagoda & Ashokan Edicts', distanceKm: 9, desc: 'Site of the historic Kalinga War where Emperor Ashoka embraced Buddhism.' },
      { name: 'Puri Jagannath Dham', distanceKm: 56, desc: 'Sacred Char Dham coastal city.' }
    ]
  },

  // 2. CUTTACK (Odisha)
  {
    id: 'cuttack',
    name: 'Cuttack (The Silver City)',
    state: 'Odisha',
    tagline: 'Millennium City, Tarakasi Silver Filigree, Mahanadi Riverbanks & Bali Yatra',
    bannerImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Established in 989 CE by King Nrupa Keshari, Cuttack sits between the Mahanadi and Kathajodi rivers. It is internationally celebrated for exquisite silver filigree craftsmanship and Asia’s largest open-air fair, Bali Yatra.',
    latitude: 20.4625,
    longitude: 85.8828,
    airport: 'Biju Patnaik International Airport, Bhubaneswar (28 km)',
    railwayStation: 'Cuttack Junction (CTC)',
    festivalIds: ['bali-yatra-odisha', 'durga-puja', 'kumar-purnima-odisha', 'gaja-laxmi-puja-odisha'],
    monumentIds: ['barabati-fort', 'netaji-birthplace-museum'],
    religiousSites: [
      {
        name: 'Cuttack Chandi Temple',
        type: 'Shakti Peetha Shrine',
        desc: 'Presiding deity of the Silver City, worshipped for over a millennium on the banks of Mahanadi.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Qadam-e-Rasool',
        type: 'Historic Sufi Shrine',
        desc: '18th-century octagonal shrine containing footprints of Prophet Muhammad, revered by all communities.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Netaji Birthplace National Museum (Janakinath Bhawan)',
        timing: '10:00 AM – 4:30 PM (Closed Mondays)',
        highlight: 'Ancestral home of Subhas Chandra Bose with rare childhood letters and freedom movement artifacts.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Bali Yatra paper boat sailing on Kartik Purnima', 'Chandi Medha silver filigree Durga Puja tableaus', 'Dahibara Aloo Dum street culture'],
      handicrafts: ['Tarakasi Silver Filigree', 'Horn Crafts', 'Golden Grass Weaving'],
      folkArt: ['Chhoti Pattachitra', 'Bamboo craft'],
      danceForms: ['Odissi', 'Sambalpuri folk']
    },
    heritageStreets: [
      {
        name: 'Choudhury Bazar & Nayasarak',
        famousFor: 'Centuries-old lanes of silver filigree jewelry and silk weavers.',
        bestTime: '11:00 AM – 8:30 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Cuttack Famous Dahibara Aloo Dum & Guguni',
        category: 'Street Food',
        desc: 'Soaked lentil vadas submerged in spiced buttermilk, topped with fiery potato curry, yellow peas, and sev.',
        iconicSpots: ['Raghu Dahibara (Bidanasi)', 'Trichy Dahibara']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Royal Bengal Sweet & Savory',
        cuisine: 'Traditional Odia & Sweets',
        priceRange: '₹350 for two',
        mustTry: 'Rasabali & Cuttack Chaat',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Mahanadi Riverfront Sunset & Bali Yatra Grounds Walk',
        duration: '2 Hours',
        priceEstimate: 'Free',
        desc: 'Stroll along the historic stone revetment built in the 11th century to protect the river city.',
        category: 'Riverfront Exploration'
      }
    ],
    nearbyAttractions: [
      { name: 'Barabati Fort Ruins & Moat', distanceKm: 3, desc: '14th-century Ganga dynasty fortress.' },
      { name: 'Choudwar Ancient Capital Ruins', distanceKm: 12, desc: 'Historical Buddhist and Somavamsi site.' }
    ]
  },

  // 3. KONARK (Odisha)
  {
    id: 'konark',
    name: 'Konark (Arka Kshetra)',
    state: 'Odisha',
    tagline: 'The Sun Temple Chariot, Chandrabhaga Golden Beach & Classical Dance',
    bannerImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Home to the 13th-century UNESCO World Heritage Sun Temple conceived as a colossal 24-wheeled stone chariot drawn by seven horses, Konark is an immortal tribute to solar worship and Kalinga craftsmanship.',
    latitude: 19.8876,
    longitude: 86.0945,
    airport: 'Biju Patnaik International Airport, Bhubaneswar (65 km)',
    railwayStation: 'Puri Railway Station (35 km) / Bhubaneswar (65 km)',
    festivalIds: ['konark-dance-festival-odisha', 'magha-saptami-odisha', 'samba-dashami-odisha'],
    monumentIds: ['konark-sun-temple'],
    religiousSites: [
      {
        name: 'Konark Sun Temple Sanctuary & Natya Mandap',
        type: 'UNESCO World Heritage Sun Temple',
        desc: 'Monumental 13th-century Surya chariot featuring world-famous erotic stone carvings, sundials, and musician figures.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Chandrabhaga Sacred Tirtha',
        type: 'Sacred Beach & Pilgrimage Shore',
        desc: 'Site of Magha Saptami holy dip where Samba (son of Lord Krishna) was cured of leprosy by Surya.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Konark Archaeological Museum (ASI)',
        timing: '9:00 AM – 5:00 PM (Closed Fridays)',
        highlight: 'Original loose sculptures, celestial dancing nymphs, and reconstructed fallen temple friezes.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Magha Saptami holy sunrise bath at Chandrabhaga', 'Annual Konark Classical Dance Festival against the illuminated temple backdrop'],
      handicrafts: ['Stone Carvings & Soapstone Statues', 'Pattachitra Painting', 'Coir Crafts'],
      folkArt: ['Sand Sculpting', 'Appliqué art'],
      danceForms: ['Odissi', 'Gotipua', 'Kathakali & Bharatanatyam during festival']
    },
    heritageStreets: [
      {
        name: 'Konark Artisan Craft Village & Marine Drive',
        famousFor: 'Handmade stone miniature chariots, sea-shell crafts, and cashewnut orchards.',
        bestTime: '10:00 AM – 7:00 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Coastal Fish Curry with Steamed Rice & Chhena Jhili',
        category: 'Main Course',
        desc: 'Fresh coastal sea fish tempered with mustard paste and pancha phoron, finished with golden cottage cheese sweets.',
        iconicSpots: ['Surya Restaurant Konark', 'OTDC Panthanivas']
      }
    ],
    heritageRestaurants: [
      {
        name: 'OTDC Panthanivas Garden Restaurant',
        cuisine: 'Coastal Odia & Seafood',
        priceRange: '₹600 for two',
        mustTry: 'Crab Kalia, Prawn Malai Curry & Chhena Poda',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Dawn Sunrise & Sundial Astronomy Tour at Sun Temple',
        duration: '2 Hours',
        priceEstimate: '₹40 entry + guide',
        desc: 'Learn how ancient astronomers calculated exact solar time with 24 carved chariot spokes down to the minute.',
        category: 'Astronomical Heritage'
      }
    ],
    nearbyAttractions: [
      { name: 'Chandrabhaga Blue Flag Beach', distanceKm: 3, desc: 'Pristine coastline with eco-retreat cottages.' },
      { name: 'Kuruma Ancient Buddhist Monastic Site', distanceKm: 8, desc: '9th-century excavated Buddhist monastery.' },
      { name: 'Puri Golden Beach & Jagannath Temple', distanceKm: 34, desc: 'Scenic Marine Drive route.' }
    ]
  },

  // 4. CHENNAI (Tamil Nadu)
  {
    id: 'chennai',
    name: 'Chennai (Madras / Gateway to South India)',
    state: 'Tamil Nadu',
    tagline: 'Carnatic Music, Dravidian Temple Gopurams, Filter Coffee & Colonial Forts',
    bannerImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'The cultural capital of South India, Chennai blends classical Bharatanatyam dance, ancient Pallava-Chola temple shrines in Mylapore, the world’s second-longest urban beach (Marina), and the December Margazhi classical music season.',
    latitude: 13.0827,
    longitude: 80.2707,
    airport: 'Chennai International Airport (MAA)',
    railwayStation: 'Chennai Central (MAS) / Chennai Egmore (MS)',
    festivalIds: ['thai-pongal-tamilnadu', 'margazhi-music-season-tamilnadu', 'navaratri-golu-tamilnadu', 'puthandu-tamilnadu'],
    monumentIds: ['kapaleeshwarar-temple', 'san-thome-basilica', 'fort-st-george'],
    religiousSites: [
      {
        name: 'Kapaleeshwarar Temple (Mylapore)',
        type: 'Dravidian Shiva Shrine',
        desc: '7th-century masterpiece with a towering rainbow gopuram, tank, and peacocks dedicated to Shiva and Karpagambal.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'San Thome Basilica (Cathedral)',
        type: 'Neo-Gothic Roman Catholic Church',
        desc: 'Built in the 16th century over the tomb of St. Thomas the Apostle, one of only three such churches in the world.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Government Museum Egmore & Bronze Gallery',
        timing: '9:30 AM – 5:00 PM (Closed Fridays)',
        highlight: 'World’s greatest collection of authentic 9th to 12th century Chola bronze sculptures including Nataraja.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Margazhi kutcheri classical concerts in sabhas', 'Morning Mylapore temple tank kolam drawings', 'Filter coffee in brass davara-tumbler'],
      handicrafts: ['Kanchipuram Silk Sarees', 'Tanjore Gold Foil Painting', 'Bronze Casting'],
      folkArt: ['Kolam floor geometry', 'Karagattam folk dance'],
      danceForms: ['Bharatanatyam', 'Carnatic vocal', 'Mridangam']
    },
    heritageStreets: [
      {
        name: 'Mylapore Mada Streets (Around Tank)',
        famousFor: 'Traditional brass lamps, temple jewelry, fragrant jasmine garlands, and filter coffee cafes.',
        bestTime: '6:00 AM – 9:00 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Authentic Chennai Crispy Ghee Roast Dosa & Filter Kaapi',
        category: 'Breakfast',
        desc: 'Paper-thin golden crepe cooked in pure desi ghee with three chutneys, drumstick sambar, and frothy degree coffee.',
        iconicSpots: ['Murugan Idli Shop', 'Ratna Cafe (Triplicane)', 'Saravana Bhavan']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Ratna Cafe Triplicane (Since 1948)',
        cuisine: 'Traditional South Indian & Unlimited Sambar',
        priceRange: '₹350 for two',
        mustTry: 'Idli Sambar drowned in signature piping hot drumstick sambar',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Mylapore Heritage & Kolam Walking Tour',
        duration: '2.5 Hours',
        priceEstimate: '₹600 per person',
        desc: 'Explore ancient agraharams, sacred tanks, and listen to the stories of saint Thiruvalluvar.',
        category: 'Cultural Walk'
      }
    ],
    nearbyAttractions: [
      { name: 'Mahabalipuram UNESCO Shore Temples', distanceKm: 55, desc: '7th-century rock-cut Pallava monolithic monuments.' },
      { name: 'Kanchipuram Temple City & Silk Weavers', distanceKm: 72, desc: 'City of Thousand Temples.' }
    ]
  },

  // 5. MAHABALIPURAM (Tamil Nadu)
  {
    id: 'mahabalipuram',
    name: 'Mahabalipuram (Mamallapuram)',
    state: 'Tamil Nadu',
    tagline: 'UNESCO Pallava Monoliths, Shore Temple by the Bay of Bengal & Stone Sculptors',
    bannerImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'A 7th-century coastal port of the Pallava dynasty, Mahabalipuram features open-air rock bas-reliefs, monolithic rathas carved out of single granite boulders, and structural shore sanctuaries lapped by the ocean.',
    latitude: 12.6269,
    longitude: 80.1927,
    airport: 'Chennai International Airport (55 km)',
    railwayStation: 'Chengalpattu (29 km) / Chennai (55 km)',
    festivalIds: ['kaanum-pongal-tamilnadu', 'natyanjali-dance-festival-tamilnadu'],
    monumentIds: ['shore-temple-mahabalipuram', 'pancha-rathas', 'arjuna-penance'],
    religiousSites: [
      {
        name: 'Shore Temple (UNESCO Heritage)',
        type: 'Pallava Granite Shore Sanctuary',
        desc: 'Structural temple complex built in 700–728 CE overlooking the Bay of Bengal, dedicated to Shiva and reclining Vishnu.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Arjuna’s Penance (Descent of the Ganges)',
        type: 'Gigantic Open-Air Bas-Relief',
        desc: 'Colossal 96x43 foot rock face carved with over 100 figures of gods, humans, and life-size elephants.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Sculpture Museum & College of Art',
        timing: '9:00 AM – 5:30 PM',
        highlight: 'Over 3,000 stone and wood sculptures created using traditional Shilpa Shastra proportions.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Living sound of stone-carving chisels echoing in every lane', 'Annual Mamallapuram Dance Festival in Jan–Feb'],
      handicrafts: ['Granite & Soapstone Sculptures', 'Sea shell souvenirs'],
      folkArt: ['Classical stone sculpting based on Agamas'],
      danceForms: ['Bharatanatyam', 'Kathakali', 'Kuchipudi']
    },
    heritageStreets: [
      {
        name: 'Othavadai Street & East Coast Artisan Lane',
        famousFor: 'Active stone sculptor studios, bohemian cafes, and sea-view seafood shacks.',
        bestTime: '9:00 AM – 8:00 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Fresh Bay of Bengal Catch Fry with Meen Kuzhambu',
        category: 'Main Course',
        desc: 'Catch-of-the-day fish marinated in red chilli and tamarind curry with steamed rice and appalam.',
        iconicSpots: ['Moonrakers', 'Seashore Restaurant']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Moonrakers Heritage Cafe',
        cuisine: 'Seafood & Tamil Coastal',
        priceRange: '₹800 for two',
        mustTry: 'Grilled Garlic Butter Prawns & Fish Curry',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Sunset Walking Tour of Pancha Rathas & Krishna Butter Ball',
        duration: '2 Hours',
        priceEstimate: '₹40 entry',
        desc: 'Marvel at 5 monolithic stone chariots named after the Pandavas carved without any joints.',
        category: 'Archaeological Walk'
      }
    ],
    nearbyAttractions: [
      { name: 'Tiger Cave Pallava Rock Temple', distanceKm: 5, desc: '8th-century open-air theatre carved with tiger heads.' },
      { name: 'DakshinaChitra Living Heritage Museum', distanceKm: 25, desc: 'Heritage village showcasing 18 authentic traditional South Indian houses.' }
    ]
  },

  // 6. PUNE (Maharashtra)
  {
    id: 'pune',
    name: 'Pune (Oxford of the East / Maratha Citadel)',
    state: 'Maharashtra',
    tagline: 'Peshwa Fortresses, Shaniwar Wada, Ganesh Chaturthi Dhol Tasha & Sahyadri Trails',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'The historical seat of the Peshwas of the Maratha Empire, Pune is Maharashtra’s cultural, spiritual, and intellectual epicenter, celebrated worldwide for the grand 10-day Ganeshotsav and thunderous Dhol Tasha beats.',
    latitude: 18.5204,
    longitude: 73.8567,
    airport: 'Pune International Airport (PNQ)',
    railwayStation: 'Pune Junction (PUNE)',
    festivalIds: ['ganesh-chaturthi-maharashtra', 'gudi-padwa-maharashtra', 'pandharpur-wari-maharashtra', 'shivaji-jayanti-maharashtra'],
    monumentIds: ['shaniwar-wada', 'aga-khan-palace', 'sinhagad-fort'],
    religiousSites: [
      {
        name: 'Dagdusheth Halwai Ganpati Temple',
        type: 'Revered Ganesha Shrine',
        desc: 'One of Maharashtra’s wealthiest and most beloved temples adorned with 50 kg of gold jewelry.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Pataleshwar Rock-Cut Cave Temple (8th Century)',
        type: 'Rashtrakuta Monolithic Cave',
        desc: 'Subterranean basalt Shiva shrine carved from a single massive rock with a circular Nandi pavilion.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Raja Dinkar Kelkar Museum',
        timing: '10:00 AM – 5:30 PM',
        highlight: 'Over 20,000 priceless artifacts including Peshwa musical instruments, carved palace doors, and Mastani Mahal.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Aga Khan Palace & Gandhi Memorial',
        timing: '9:00 AM – 5:30 PM',
        highlight: 'Italian arches where Mahatma Gandhi and Kasturba Gandhi were imprisoned during the Quit India Movement in 1942.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Dhol Tasha pathaks rehearsing for Ganeshotsav', 'Palkhi pilgrimage procession of Sant Dnyaneshwar & Tukaram', 'Puneri Patya witty street signage'],
      handicrafts: ['Puneri Pagadi Turbans', 'Paithani Sarees', 'Copper & Brass Utensils of Tambat Ali'],
      folkArt: ['Warli painting', 'Lavani'],
      danceForms: ['Lavani', 'Powada Maratha Ballads', 'Kathak']
    },
    heritageStreets: [
      {
        name: 'Tambat Ali & Laxmi Road',
        famousFor: 'Copper beaters hammering handmade brass vessels and traditional Paithani saree merchants.',
        bestTime: '10:30 AM – 8:00 PM'
      },
      {
        name: 'FC Road & Tulsi Baug',
        famousFor: 'Historic college street food and traditional Maharashtrian brassware and jewellery.',
        bestTime: '11:00 AM – 9:30 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Puneri Misal Pav with Spiced Kat & Farsan',
        category: 'Street Food',
        desc: 'Spicy sprouted bean curry drenched in red fiery gravy (kat), topped with onions, lemon, and soft buttered pav.',
        iconicSpots: ['Kata Kirr', 'Bedekar Tea Stall (since 1948)', 'Vaishali FC Road']
      },
      {
        name: 'Puran Poli with Melted Desi Ghee & Katachi Amti',
        category: 'Sweets',
        desc: 'Traditional sweet flatbread stuffed with chana dal and organic jaggery, scented with nutmeg and cardamom.',
        iconicSpots: ['Shreyas Dining Hall', 'Durvankur Dining Hall']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Shreyas Dining Hall (Since 1966)',
        cuisine: 'Authentic Maharashtrian Thali',
        priceRange: '₹600 for two',
        mustTry: 'Unlimited Thali with Puran Poli, Kothimbir Vadi, and Solkadhi',
        bookingPlatform: 'Direct'
      },
      {
        name: 'Cafe Goodluck (Established 1935)',
        cuisine: 'Irani Cafe Heritage',
        priceRange: '₹350 for two',
        mustTry: 'Bun Maska & Irani Chai with Keema Pav',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Shaniwar Wada & Peshwa Heritage Walking Trail',
        duration: '2.5 Hours',
        priceEstimate: '₹25 entry + guide',
        desc: 'Explore the 13-storey fortified palace of the Peshwas and hear the legendary history of Bajirao I.',
        category: 'Fortress History'
      }
    ],
    nearbyAttractions: [
      { name: 'Sinhagad Fort (Lion’s Fort)', distanceKm: 30, desc: 'Historic Sahyadri hill fortress where Tanaji Malusare fought in 1670.' },
      { name: 'Karla & Bhaja Buddhist Caves', distanceKm: 55, desc: '2nd-century BCE rock-cut Buddhist chaityas.' }
    ]
  },

  // 7. AURANGABAD (Chhatrapati Sambhaji Nagar, Maharashtra)
  {
    id: 'aurangabad',
    name: 'Chhatrapati Sambhaji Nagar (Aurangabad)',
    state: 'Maharashtra',
    tagline: 'UNESCO Ajanta & Ellora Caves, Kailasa Monolith, Bibi Ka Maqbara & Daulatabad Fort',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'The tourism capital of Maharashtra, crowned with two UNESCO World Heritage complexes: the ancient Buddhist fresco caves of Ajanta and the rock-cut architectural miracle of Kailasa Temple at Ellora.',
    latitude: 19.8762,
    longitude: 75.3433,
    airport: 'Aurangabad Airport (IXU)',
    railwayStation: 'Aurangabad Railway Station (AWB)',
    festivalIds: ['ellora-ajanta-festival-maharashtra', 'ganesh-chaturthi-maharashtra', 'gudi-padwa-maharashtra'],
    monumentIds: ['ellora-caves', 'ajanta-caves', 'bibi-ka-maqbara', 'daulatabad-fort'],
    religiousSites: [
      {
        name: 'Kailasa Temple (Cave 16, Ellora)',
        type: 'UNESCO Monolithic Wonder',
        desc: 'The world’s largest monolithic rock-cut structure, carved top-down out of a single basalt cliff in the 8th century.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Grishneshwar Jyotirlinga Temple',
        type: 'Sacred 12th Jyotirlinga Shrine',
        desc: 'Ancient red sandstone temple rebuilt by Ahilyabai Holkar in the 18th century near Ellora Caves.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Chhatrapati Shivaji Maharaj Museum',
        timing: '10:00 AM – 5:00 PM',
        highlight: 'Maratha weaponries, armor, Peshwa coins, and Mughal documents.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Weaving authentic Himroo silk and cotton shawls', 'Paithani gold border weaving traditions in nearby Paithan'],
      handicrafts: ['Himroo Shawl Weaving', 'Bidriware Inlay', 'Paithani Sarees'],
      folkArt: ['Ajanta fresco painting reproduction'],
      danceForms: ['Lavani', 'Classical Kathak during Ellora Festival']
    },
    heritageStreets: [
      {
        name: 'Gulmandi & Shahgunj',
        famousFor: 'Himroo shawls, authentic Paithani silk, silver ornaments, and Naan Qalia food lanes.',
        bestTime: '11:00 AM – 8:30 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Aurangabadi Naan Qalia',
        category: 'Main Course',
        desc: 'Historical dish created for Emperor Muhammad bin Tughlaq’s army: clay-tandoor bread dipped in spiced slow-cooked mutton gravy.',
        iconicSpots: ['Tara Pan & Naan Qalia (Buddi Lane)', 'Siddique Kebab']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Bhoj Thali Restaurant',
        cuisine: 'Pure Veg Rajasthani-Maharashtrian Thali',
        priceRange: '₹500 for two',
        mustTry: 'Unlimited Royal Thali with Dal Baati and Shrikhand',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Full Day Ellora Caves & Kailasa Temple Guided Exploration',
        duration: '5 Hours',
        priceEstimate: '₹40 entry + guide',
        desc: 'Explore 34 Buddhist, Hindu, and Jain cave temples carved between the 6th and 10th centuries.',
        category: 'UNESCO Cave Tour'
      }
    ],
    nearbyAttractions: [
      { name: 'Ajanta Caves (UNESCO World Heritage)', distanceKm: 100, desc: '30 rock-cut Buddhist caves dating from 2nd century BCE to 480 CE.' },
      { name: 'Daulatabad Fort (Devagiri)', distanceKm: 15, desc: 'Impregnable 12th-century hilltop citadel with dark subterranean maze (Bhul-Bhulaiya).' },
      { name: 'Bibi Ka Maqbara (Taj of Deccan)', distanceKm: 5, desc: '1660 CE marble mausoleum built by Prince Azam Shah.' }
    ]
  },

  // 8. THRISSUR (Kerala)
  {
    id: 'thrissur',
    name: 'Thrissur (Cultural Capital of Kerala)',
    state: 'Kerala',
    tagline: 'Thrissur Pooram, Caparisoned Elephants, Panchavadyam & Vadakkumnathan Temple',
    bannerImage: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'The cultural capital of Kerala, built around the majestic 1,000-year-old Vadakkumnathan Temple perched on the Thekkinkadu Maidan hillock. Worldwide celebrated for "Thrissur Pooram" — the mother of all temple festivals.',
    latitude: 10.5276,
    longitude: 76.2144,
    airport: 'Cochin International Airport (53 km)',
    railwayStation: 'Thrissur Railway Station (TCR)',
    festivalIds: ['onam-thiruvonam-kerala', 'vishu-kerala', 'theyyam-kerala'],
    monumentIds: ['vadakkumnathan-temple', 'shakthan-thampuran-palace'],
    religiousSites: [
      {
        name: 'Vadakkumnathan Temple (UNESCO Protected)',
        type: 'Ancient Kerala Shiva Temple',
        desc: 'Kerala architectural marvel with 4 massive wooden gopurams and mural paintings depicting Mahabharata scenes.',
        image: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Our Lady of Dolours Basilica (Puthanpally)',
        type: 'Gothic Catholic Basilica',
        desc: 'One of the tallest church towers in Asia with 140-foot belfries and soaring Gothic arches.',
        image: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Kerala Kalamandalam (Cheruthuruthy)',
        timing: '9:30 AM – 1:00 PM',
        highlight: 'Deemed university and traditional gurukula institution for Kathakali, Mohiniyattam, and Kudiyattam.',
        image: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Shakthan Thampuran Palace (Archaeological Museum)',
        timing: '10:00 AM – 4:30 PM (Closed Mondays)',
        highlight: 'Dutch and Kerala traditional style palace with megalithic stone weapons and bronze idols.',
        image: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Thrissur Pooram Kudamattam parasol exchange', 'Ilanjithara Melam 250-percussionist ensemble', 'Pulikali Tiger Dance'],
      handicrafts: ['Bell Metal Utensils & Uruli', 'Gold Jewellery of Thrissur', 'Wood Carvings'],
      folkArt: ['Pulikali', 'Poothan and Thira', 'Chakyar Koothu'],
      danceForms: ['Kathakali', 'Mohiniyattam', 'Kudiyattam (UNESCO Intangible Heritage)']
    },
    heritageStreets: [
      {
        name: 'Round West & Swaraj Round',
        famousFor: 'Historic circular avenue of traditional goldsmiths, silk shops, and spice dealers.',
        bestTime: '10:00 AM – 8:30 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Thrissur Sadya on Banana Leaf with Payasam',
        category: 'Main Course',
        desc: 'Grand vegetarian banquet of 24 traditional dishes including Avial, Olan, Kaalan, Thoran, and Ada Pradhaman.',
        iconicSpots: ['Hotel Bharat (Round South)', 'Ambady Restaurant']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Hotel Bharat (Round South)',
        cuisine: 'Traditional Kerala Veg & Sadya',
        priceRange: '₹400 for two',
        mustTry: 'Kerala Meals with Ghee Roast & Palada Payasam',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Vadakkumnathan Temple Heritage & Mural Walk',
        duration: '2 Hours',
        priceEstimate: 'Free Devotional Entry',
        desc: 'Admire 400-year-old timber architecture and natural pigment frescoes around the inner sanctum.',
        category: 'Temple Architecture'
      }
    ],
    nearbyAttractions: [
      { name: 'Guruvayur Sri Krishna Temple', distanceKm: 28, desc: 'One of the most sacred Krishna pilgrimage centers in India.' },
      { name: 'Athirappilly Waterfalls', distanceKm: 60, desc: 'The "Niagara of South India" cascading 80 feet through lush Western Ghats.' }
    ]
  },

  // 9. ALAPPUZHA (Kerala)
  {
    id: 'alappuzha',
    name: 'Alappuzha (Alleppey / Venice of the East)',
    state: 'Kerala',
    tagline: 'Vembanad Backwaters, Kettuvallam Houseboats, Nehru Trophy Boat Race & Coir Crafts',
    bannerImage: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Lord Curzon dubbed Alleppey the "Venice of the East". Famed for its labyrinthine network of tranquil canals, lagoons, and emerald paddy fields below sea level in Kuttanad.',
    latitude: 9.4981,
    longitude: 76.3388,
    airport: 'Cochin International Airport (83 km)',
    railwayStation: 'Alappuzha Railway Station (ALLP)',
    festivalIds: ['onam-thiruvonam-kerala', 'vishu-kerala'],
    monumentIds: ['alappuzha-lighthouse', 'krishnapuram-palace'],
    religiousSites: [
      {
        name: 'Mullakkal Rajarajeswari Temple',
        type: 'Traditional Kerala Temple',
        desc: 'Open-roof shrine dedicated to Goddess Durga in the center of Alleppey.',
        image: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'International Coir Museum',
        timing: '9:00 AM – 5:00 PM',
        highlight: 'Exhibition of eco-friendly coconut coir processing from retting to woven golden rugs.',
        image: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Nehru Trophy Snake Boat Race (Chundan Vallam) on Punnamada Lake in August', 'Canoeing through narrow village canals'],
      handicrafts: ['Coir Weaving', 'Coconut Shell Carving'],
      folkArt: ['Kadhakali', 'Vanchi Pattu boat song chants'],
      danceForms: ['Thiruvathirakali', 'Kathakali']
    },
    heritageStreets: [
      {
        name: 'Canal Road & Commercial Canal Bazaar',
        famousFor: '19th-century spice godowns, coir mats, and fresh river prawns.',
        bestTime: '9:30 AM – 7:30 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Karimeen Pollichathu (Pearl Spot Fish in Banana Leaf)',
        category: 'Main Course',
        desc: 'Fresh backwater pearl spot fish coated in fiery shallot and tomato masala, slow-roasted in a charred plantain leaf.',
        iconicSpots: ['Thaff Restaurant', 'Kuttanad Backwater Shacks']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Thaff Restaurant (CCSJB Complex)',
        cuisine: 'Kerala Coastal & Arabian',
        priceRange: '₹550 for two',
        mustTry: 'Karimeen Fry with Appam & Fish Curry Meals',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Sunset Backwater Shikara & Village Canal Cruise',
        duration: '3 Hours',
        priceEstimate: '₹1,500 per boat',
        desc: 'Glide past duck farms, lotus fields, and village ferry stops on a quiet wooden motor shikara.',
        category: 'Backwater Journey'
      }
    ],
    nearbyAttractions: [
      { name: 'Kuttanad Below-Sea-Level Paddy Fields', distanceKm: 15, desc: 'Farming conducted 4 to 10 feet below sea level.' },
      { name: 'Marari Beach (Mararikulam)', distanceKm: 14, desc: 'Tranquil white-sand fishing village beach with coconut palms.' }
    ]
  },

  // 10. THIRUVANANTHAPURAM (Trivandrum, Kerala)
  {
    id: 'thiruvananthapuram',
    name: 'Thiruvananthapuram (Trivandrum)',
    state: 'Kerala',
    tagline: 'Padmanabhaswamy Gold Sanctuary, Travancore Royal Heritage, Kovalam Coast & Ayurveda',
    bannerImage: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'The capital of Kerala and seat of the historic Travancore Kingdom, defined by the monumental 16th-century Sree Padmanabhaswamy Temple, royal wooden palaces, and verdant Arabian Sea coastlines.',
    latitude: 8.5241,
    longitude: 76.9366,
    airport: 'Trivandrum International Airport (TRV)',
    railwayStation: 'Thiruvananthapuram Central (TVC)',
    festivalIds: ['onam-thiruvonam-kerala', 'vishu-kerala'],
    monumentIds: ['padmanabhaswamy-temple', 'kuthira-malika-palace', 'napier-museum'],
    religiousSites: [
      {
        name: 'Sree Padmanabhaswamy Temple',
        type: 'Royal Vaishnavite Gold Shrine',
        desc: 'Revered Divya Desam shrine where Lord Vishnu reclines on Anantha Sesha; features towering 100-foot stone gopuram and monumental underground vaults.',
        image: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Attukal Bhagavathy Temple',
        type: 'Guinness World Record Goddess Shrine',
        desc: 'Known as the "Women’s Sabarimala", famed for the annual Attukal Pongala where millions of women cook sweet rice offerings.',
        image: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Napier Museum & Sri Chitra Art Gallery',
        timing: '10:00 AM – 4:45 PM (Closed Mondays)',
        highlight: 'Indo-Saracenic masterpiece with natural air conditioning housing Raja Ravi Varma’s original royal oil paintings.',
        image: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Kuthiramalika (Mansion of Horses) Palace',
        timing: '8:30 AM – 1:00 PM, 3:00 PM – 5:30 PM',
        highlight: 'Travancore teakwood palace with 122 carved wooden horses and Maharaja Swathi Thirunal’s musical heritage.',
        image: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Attukal Pongala women gathering', 'Swathi Sangeethotsavam classical concerts', 'Papanasam beach ancestral rites at Varkala'],
      handicrafts: ['Balaramapuram Handloom Sarees', 'Rosewood & Sandalwood Carving'],
      folkArt: ['Kalaripayattu Martial Arts', 'Kathakali'],
      danceForms: ['Mohiniyattam', 'Kathakali', 'Ottamthullal']
    },
    heritageStreets: [
      {
        name: 'East Fort (Kizhakkekotta) Heritage Quarter',
        famousFor: 'Traditional brass idol shops, Kasavu mundu weavers, and temple incense merchants.',
        bestTime: '9:00 AM – 8:30 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Trivandrum Ghee Roast Dosa with Coconut Chutneys & Parippu Vada',
        category: 'Breakfast',
        desc: 'Crispy fermented crepe with sambar and spicy red chilli chutney, washed down with ginger coffee (Sukku Kaapi).',
        iconicSpots: ['Mothers Veg Plaza', 'Ariya Nivaas (Overbridge)']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Mothers Veg Plaza (Bakery Junction)',
        cuisine: 'Traditional Kerala Sadya All Year Round',
        priceRange: '₹450 for two',
        mustTry: 'Grand 22-dish Sadya served hot on plantain leaf with 4 types of Payasam',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'East Fort & Royal Travancore Heritage Trail',
        duration: '2.5 Hours',
        priceEstimate: '₹50 entry to palaces',
        desc: 'Walk around the walled heritage precinct of the Travancore Maharajas and temple pond.',
        category: 'Royal Heritage'
      }
    ],
    nearbyAttractions: [
      { name: 'Kovalam Crescent Beach & Lighthouse', distanceKm: 16, desc: 'World-famous crescent beach with 1930s Vizhinjam lighthouse.' },
      { name: 'Varkala Cliff & Papanasam Beach', distanceKm: 42, desc: 'Majestic red laterite cliffs rising above the Arabian Sea.' }
    ]
  },

  // 11. PUSHKAR (Rajasthan)
  {
    id: 'pushkar',
    name: 'Pushkar (The Sacred Lotus City)',
    state: 'Rajasthan',
    tagline: 'Sacred Pushkar Lake, Rare Jagatpita Brahma Temple & World Famous Camel Fair',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Cradled by the rugged Aravalli hills, Pushkar is one of India’s oldest sacred pilgrimage centers. Legend states the lake emerged where Lord Brahma dropped a lotus petal (pushpa). Famous for 52 bathing ghats and the vibrant Pushkar Camel Fair.',
    latitude: 26.4897,
    longitude: 74.5511,
    airport: 'Kishangarh Airport (KQH) / Jaipur (145 km)',
    railwayStation: 'Ajmer Junction (14 km)',
    festivalIds: ['diwali', 'holi', 'gangaur-rajasthan', 'teej-festival-rajasthan'],
    monumentIds: ['brahma-temple-pushkar', 'savitri-temple-pushkar'],
    religiousSites: [
      {
        name: 'Jagatpita Brahma Mandir',
        type: 'Rare 14th-Century Brahma Shrine',
        desc: 'One of the very few existing temples in the world dedicated to Creator God Brahma, crowned with a red spire and swan emblem.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Varaha Temple & 52 Sacred Lake Ghats',
        type: 'Ancient 12th-Century Vishnu Boar Shrine',
        desc: 'Built by King Anaji Chauhan, surrounded by Brahma Ghat and Varaha Ghat where devotees perform evening Maha Aarti.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [],
    localCulture: {
      traditions: ['Kartik Purnima holy lake bath & camel trading fair', 'Sunset ropeway ascent to Savitri Temple atop Ratnagiri hill', 'Evening lake ghat brass bell aarti'],
      handicrafts: ['Rose Water & Gulkand', 'Block Printed Hippie Attire', 'Silver Tribal Jewellery'],
      folkArt: ['Kalbelia snake dance', 'Puppet shows'],
      danceForms: ['Kalbelia', 'Ghoomar', 'Bhavai pot balance dance']
    },
    heritageStreets: [
      {
        name: 'Pushkar Main Market & Sadar Bazaar',
        famousFor: 'Handmade leather journals, authentic rose attar perfume, silver rings, and mirrorwork bedsheets.',
        bestTime: '10:00 AM – 9:00 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Pushkar Famous Malpua & Rabdi with Rose Lassi',
        category: 'Sweets',
        desc: 'Deep-fried golden pancake dipped in saffron cardamom syrup, topped with thick clotted rabdi.',
        iconicSpots: ['Halwai Gali (Radhey Ji)', 'Sarveshwar Malpua']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Sunset Cafe (Pushkar Lake Edge)',
        cuisine: 'Rajasthani & Multi-Cuisine',
        priceRange: '₹400 for two',
        mustTry: 'Dal Baati Churma, Falafel & Masala Chai at Sunset',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Desert Sunset Camel Safari & Folk Camp',
        duration: '3 Hours',
        priceEstimate: '₹800 per person',
        desc: 'Ride across Thar sand dunes outside town and witness Kalbelia dancers around a desert campfire.',
        category: 'Desert Adventure'
      }
    ],
    nearbyAttractions: [
      { name: 'Ajmer Sharif Sufi Dargah', distanceKm: 14, desc: 'Sacred shrine of Khwaja Moinuddin Chishti.' },
      { name: 'Taragarh Fort (Ajmer)', distanceKm: 18, desc: 'Ancient 11th-century hill fortress.' }
    ]
  },

  // 12. JAISALMER (Rajasthan)
  {
    id: 'jaisalmer',
    name: 'Jaisalmer (The Golden City)',
    state: 'Rajasthan',
    tagline: 'Living Golden Fort (Sonar Qila), Yellow Sandstone Havelis & Thar Desert Dunes',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Rising like a golden mirage out of the Thar Desert, Jaisalmer was founded in 1156 CE by Rawal Jaisal. Its 800-year-old living sandstone citadel houses a quarter of the town’s population inside medieval ramparts.',
    latitude: 26.9157,
    longitude: 70.9083,
    airport: 'Jaisalmer Airport (JSA)',
    railwayStation: 'Jaisalmer Railway Station (JSM)',
    festivalIds: ['gangaur-rajasthan', 'teej-festival-rajasthan', 'diwali'],
    monumentIds: ['jaisalmer-fort', 'patwon-ki-haveli', 'salim-singh-haveli'],
    religiousSites: [
      {
        name: 'Jain Temples Inside Jaisalmer Fort (12th–15th Century)',
        type: 'Intricate Yellow Sandstone Shrines',
        desc: 'Group of 7 interconnected Jain temples dedicated to Tirthankaras with breathtaking ceiling lacework carvings.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Tanot Mata Temple (Indo-Pak Border)',
        type: 'Miraculous Border Goddess Shrine',
        desc: 'Maintained by Border Security Force (BSF), famous for remaining unblemished during the 1965 war.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Jaisalmer Fort Palace Museum (Raja Mahal)',
        timing: '9:00 AM – 6:00 PM',
        highlight: 'Royal silver throne, Rajput armory, and 360-degree panorama of the golden city from the fort cannons.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Desert Festival at Sam Dunes in Feb (Turban tying, Mr. Desert)', 'Manganiyar folk singing in Thar desert camps', 'Intricate stone jali carving'],
      handicrafts: ['Camel Leather Bags & Mojaris', 'Embroidered Mirrorwork Textiles', 'Yellow Stone Fossil Carvings'],
      folkArt: ['Manganiyar Khartal & Kamaicha music', 'Puppetry'],
      danceForms: ['Kalbelia', 'Chari fire dance', 'Ghoomar']
    },
    heritageStreets: [
      {
        name: 'Fort Maze & Sadar Bazaar',
        famousFor: 'Medieval stone alleyways packed with camel wool rugs, antique brass locks, and fossil stone tea cups.',
        bestTime: '9:30 AM – 9:00 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Jaisalmeri Ker Sangri & Bajra Roti with Ghee',
        category: 'Main Course',
        desc: 'Desert wild berries (ker) and dry beans (sangri) sautéed in mustard oil and raw mango powder with millet flatbread.',
        iconicSpots: ['Trio Restaurant', 'Suryagarh Heritage Restaurant']
      }
    ],
    heritageRestaurants: [
      {
        name: 'The Trio (Mandir Palace Rooftop)',
        cuisine: 'Royal Rajasthani Heritage',
        priceRange: '₹1,200 for two',
        mustTry: 'Laal Maas, Ker Sangri & Gatte Ki Sabzi with live Manganiyar music',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Sam Sand Dunes Camel Safari & Desert Stargazing',
        duration: '4 Hours',
        priceEstimate: '₹1,200 per person',
        desc: 'Ride across golden dunes at sunset and sleep under the milky way in Swiss desert camps.',
        category: 'Desert Safari'
      }
    ],
    nearbyAttractions: [
      { name: 'Patwon Ki Haveli Complex', distanceKm: 1.5, desc: 'Cluster of 5 grand mansions built by wealthy brocade merchants with 60 carved stone balconies.' },
      { name: 'Kuldhara Abandoned Ghost Village', distanceKm: 18, desc: '13th-century Paliwal Brahmin village deserted overnight in the 1800s.' },
      { name: 'Gadisar Lake & Torana Gateway', distanceKm: 2, desc: 'Historic 14th-century rainwater reservoir surrounded by pavilions.' }
    ]
  },

  // 13. LUCKNOW (Uttar Pradesh)
  {
    id: 'lucknow',
    name: 'Lucknow (City of Nawabs)',
    state: 'Uttar Pradesh',
    tagline: 'Awadhi Royalty, Bara Imambara Bhul-Bhulaiya, Chikankari Embroidery & Kebabs',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'The capital of Uttar Pradesh and legendary seat of the Nawabs of Awadh, celebrated for exquisite courtly etiquette (Tehzeeb), Persian-Mughal architectural monuments, delicate Chikankari needlework, and melt-in-mouth Awadhi kebabs.',
    latitude: 26.8467,
    longitude: 80.9462,
    airport: 'Chaudhary Charan Singh International Airport (LKO)',
    railwayStation: 'Lucknow Charbagh Railway Station (LKO)',
    festivalIds: ['diwali', 'eid-ul-fitr', 'holi'],
    monumentIds: ['bara-imambara', 'chota-imambara', 'rumi-darwaza', 'british-residency-lucknow'],
    religiousSites: [
      {
        name: 'Bara Imambara & Asfi Mosque (1784)',
        type: 'Monumental Shia Sanctuary & Vaulted Hall',
        desc: 'Built by Nawab Asaf-ud-Daula during a great famine; features the world’s largest unsupported arched hall and a 3D labyrinth (Bhul-Bhulaiya).',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Chota Imambara (Husainabad)',
        type: 'Palace of Lights',
        desc: 'Adorned with Belgian glass chandeliers, gilded dome, calligraphic murals, and Taj-like tomb of Nawab Muhammad Ali Shah’s daughter.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'State Museum Lucknow (Banarasi Bagh)',
        timing: '10:30 AM – 4:30 PM (Closed Mondays)',
        highlight: 'Ancient Jain and Buddhist sculptures from Mathura school and 3rd millennium BCE Egyptian mummy.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Pehle Aap polite courtly manners', 'Evening tea in Chowk with Makhan Malai in winter', 'Ganga-Jamuni Tehzeeb communal harmony'],
      handicrafts: ['Chikan Embroidery & Shadow Work', 'Zardozi Gold Needlework', 'Ittar Perfumery'],
      folkArt: ['Kathak (Lucknow Gharana of Pandit Birju Maharaj)', 'Awadhi Thumri & Ghazal'],
      danceForms: ['Kathak', 'Classical Hindustani vocal']
    },
    heritageStreets: [
      {
        name: 'Chowk & Aminabad',
        famousFor: '150-year-old Ittar shops, Chikankari kurta ateliers, silver foil varq beaters, and Tunday Kebab street.',
        bestTime: '11:00 AM – 9:30 PM'
      },
      {
        name: 'Hazratganj (Ganjing)',
        famousFor: 'Victorian-era heritage promenade, Royal Cafe basket chaat, and khadi showrooms.',
        bestTime: '11:00 AM – 10:00 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Tunday Galawati Kebabs with Mughlai Ulte Tawe Ka Paratha',
        category: 'Street Food',
        desc: 'Melt-in-mouth minced meat kebab spiced with 160 secret aromatic herbs and raw papaya, served with saffron parathas.',
        iconicSpots: ['Tunday Kababi (Chowk original & Aminabad)', 'Dastarkhwan']
      },
      {
        name: 'Lucknowi Dum Biryani with Awadhi Korma',
        category: 'Main Course',
        desc: 'Fragrant basmati rice slow-cooked in purdah on gentle charcoal with milk, saffron, and tender marinated meat.',
        iconicSpots: ['Idris Biryani (Patanala Chowk)', 'Wahid Biryani']
      },
      {
        name: 'Makhan Malai (Winter Cloud Foam Sweet)',
        category: 'Sweets',
        desc: 'Spun milk froth collected under morning dew, flavored with saffron, pistachios, and pure silver varq.',
        iconicSpots: ['Chowk Gol Darwaza vendors']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Oudhyana at Vivanta by Taj',
        cuisine: 'Royal Nawabi Awadhi Fine Dining',
        priceRange: '₹3,500 for two',
        mustTry: 'Kakori Kebab, Galawati Kebab, and Shahi Tukda with live Gazals',
        bookingPlatform: 'Direct'
      },
      {
        name: 'Dastarkhwan (Tulsi Theatre Complex)',
        cuisine: 'Authentic Mughlai & Awadhi',
        priceRange: '₹700 for two',
        mustTry: 'Boti Kebab, Chicken Masala, and Shahi Sheermal',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Bara Imambara Bhul-Bhulaiya Labyrinth & Stepwell Tour',
        duration: '2.5 Hours',
        priceEstimate: '₹50 entry + guide',
        desc: 'Navigate 489 identical doorways in the 3D maze and test whispering gallery acoustics in the central vault.',
        category: 'Architectural Labyrinth'
      }
    ],
    nearbyAttractions: [
      { name: 'Rumi Darwaza (Constantinople Gate)', distanceKm: 1, desc: '60-foot tall 18th-century grand gate modeled after Sublime Porte.' },
      { name: 'The British Residency Ruins', distanceKm: 3, desc: 'Epicenter of the 1857 Siege of Lucknow with cannonball-pitted brick walls.' },
      { name: 'Ayodhya Ram Janmabhoomi Dham', distanceKm: 135, desc: 'Sacred birthplace of Lord Rama on Sarayu river.' }
    ]
  },

  // 14. MATHURA (Uttar Pradesh)
  {
    id: 'mathura',
    name: 'Mathura (Birthplace of Lord Krishna)',
    state: 'Uttar Pradesh',
    tagline: 'Krishna Janmabhoomi, Ancient Yamuna Ghats, Dwarkadhish Temple & Peda Sweets',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'One of the Sapta Puri (seven holiest cities) of India, Mathura is the venerated birthplace of Lord Krishna on the banks of the sacred Yamuna, inhabited continuously since the 6th century BCE.',
    latitude: 27.4924,
    longitude: 77.6737,
    airport: 'Agra Airport (60 km) / IGI Airport Delhi (150 km)',
    railwayStation: 'Mathura Junction (MTJ)',
    festivalIds: ['braj-holi', 'janmashtami', 'diwali', 'goverdhan-puja'],
    monumentIds: ['krishna-janmabhoomi', 'dwarkadhish-temple-mathura', 'vishram-ghat'],
    religiousSites: [
      {
        name: 'Shri Krishna Janmasthan Temple Complex',
        type: 'Supreme Krishna Janmabhoomi Shrine',
        desc: 'The sacred prison cell (Garbha Griha) where Lord Krishna incarnated in the Dwapara Yuga.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Vishram Ghat & Dwarkadhish Temple',
        type: 'Sacred Yamuna Bathing Ghat & Temple',
        desc: 'Where Lord Krishna rested after defeating tyrant king Kansa; famous for evening 108-lamp Yamuna Aarti.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Government Museum Mathura (Dampier Park)',
        timing: '10:30 AM – 4:30 PM (Closed Mondays)',
        highlight: 'World’s most celebrated collection of 1st–3rd century CE red sandstone Kushana sculptures and Kanishka headless statues.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Braj Lathmar Holi celebrations in Barsana & Nandgaon', 'Radha Krishna Rasleela dances during Janmashtami', 'Daily 25-km Govardhan Parikrama walk'],
      handicrafts: ['Sanjhi Paper Stencil Art', 'Brass Krishna Murti Casting', 'Zari Poshak Dresses for Idols'],
      folkArt: ['Rasleela Theatre', 'Braj folk songs'],
      danceForms: ['Rasleela', 'Charkula oil lamp balance dance']
    },
    heritageStreets: [
      {
        name: 'Chatta Bazaar & Holi Gate',
        famousFor: 'Traditional brass idol workshops, hand-embroidered deity garments, pure khoya pedas, and kachoris.',
        bestTime: '8:00 AM – 9:00 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Mathura Famous Peda & Bedmi Puri with Aloo Sabzi',
        category: 'Sweets',
        desc: 'Slow-caramelized milk khoya pedas dusted in boora sugar, paired with crisp urad dal stuffed puris and sour potato curry.',
        iconicSpots: ['Brijwasi Mithai Wala (Holi Gate)', 'Shankar Mithai']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Brijwasi Mithai & Restaurant (Holi Gate)',
        cuisine: 'Traditional Braj Pure Veg & Sweets',
        priceRange: '₹350 for two',
        mustTry: 'Mathura Peda, Bedmi Puri, Rabdi Jalebi, and Lassi in Earthen Kulhad',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Sunset Wooden Boat Ride & Deepdan at Vishram Ghat',
        duration: '1.5 Hours',
        priceEstimate: '₹200 per boat',
        desc: 'Float oil lamps on the sacred Yamuna while watching hundreds of bells ring during the evening Aarti.',
        category: 'Spiritual River Experience'
      }
    ],
    nearbyAttractions: [
      { name: 'Vrindavan Sacred Temple Town', distanceKm: 12, desc: 'Abode of 5,000 temples including Banke Bihari and Prem Mandir.' },
      { name: 'Govardhan Hill (Giriraj Parikrama)', distanceKm: 22, desc: 'Sacred 21-km hill lifted by Lord Krishna on his little finger.' },
      { name: 'Barsana Radha Rani Temple', distanceKm: 42, desc: 'Birthplace of Shri Radha and home of Lathmar Holi.' }
    ]
  },

  // 15. VRINDAVAN (Uttar Pradesh)
  {
    id: 'vrindavan',
    name: 'Vrindavan (The Land of 5,000 Temples)',
    state: 'Uttar Pradesh',
    tagline: 'Banke Bihari Temple, Nidhivan Groves, Prem Mandir & Eternal Krishna Bhakti',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'The sacred forest town where Lord Krishna spent his childhood performing childhood leelas and Rasleela with the Gopis. Filled with ancient tulsi groves, over 5,000 active shrines, and resonant chants of "Radhe Radhe".',
    latitude: 27.5806,
    longitude: 77.7006,
    airport: 'Agra (70 km) / IGI Airport Delhi (145 km)',
    railwayStation: 'Mathura Junction (12 km) / Vrindavan Station (BDB)',
    festivalIds: ['braj-holi', 'janmashtami', 'goverdhan-puja', 'radhashtami'],
    monumentIds: ['banke-bihari-temple', 'prem-mandir', 'iskcon-vrindavan', 'radha-raman-temple'],
    religiousSites: [
      {
        name: 'Banke Bihari Temple (1864)',
        type: 'Supreme Vrindavan Krishna Shrine',
        desc: 'Home to the charming black marble idol manifested by Swami Haridas; curtains are drawn every few minutes to prevent the deity from being hypnotized by devotees’ love.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Prem Mandir & Nidhivan Grove',
        type: 'Italian Carrara Marble Temple & Sacred Grove',
        desc: 'Prem Mandir lights up with musical fountains at dusk; Nidhivan is the mysterious sacred grove where Radha-Krishna are believed to perform Rasleela every night.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [],
    localCulture: {
      traditions: ['Phoolon Wali Holi (Holi with flowers) at Banke Bihari', 'Nagar Sankirtan walking with mridanga drums', 'Feeding sacred cows at goshala'],
      handicrafts: ['Tulsi Kanthi Beads', 'Krishna Poshaks & Peacock Feather Mukuts', 'Brass deity bells'],
      folkArt: ['Sanjhi Rangoli Art', 'Haveli Sangeet'],
      danceForms: ['Rasleela', 'Samaj Gayan devotional singing']
    },
    heritageStreets: [
      {
        name: 'Loi Bazaar & Banke Bihari Mandir Gali',
        famousFor: 'Handspun cotton dhotis, pure sandalwood paste, Tulsi malas, and hot rabdi jalebis.',
        bestTime: '7:30 AM – 8:30 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Vrindavan Malai Rabdi, Hing Kachori & Saffron Makhan',
        category: 'Street Food',
        desc: 'Crispy lentil kachoris with tangy potato gravy, followed by thick earthen bowls of chilled rabdi and butter.',
        iconicSpots: ['Brijbhog Sweets', 'Shri Banke Bihari Gali Halwai']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Govinda’s Restaurant (ISKCON Temple Complex)',
        cuisine: 'Satvik Pure Vegetarian Vaishnava Food',
        priceRange: '₹500 for two',
        mustTry: 'Satvik Thali, Paneer Tikka, Khichdi & Govinda’s Special Ice Cream',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Dawn Braj Chhappan Bhog Darshan & Nidhivan Parikrama',
        duration: '2.5 Hours',
        priceEstimate: 'Free Devotional Gathering',
        desc: 'Walk through ancient basil forests and witness the early morning Mangala Aarti.',
        category: 'Spiritual Heritage'
      }
    ],
    nearbyAttractions: [
      { name: 'Kesi Ghat Yamuna Riverfront', distanceKm: 1.5, desc: 'Historic 17th-century terracotta ghat where Krishna defeated demon Kesi.' },
      { name: 'Radha Vallabh & Madan Mohan Temples', distanceKm: 2, desc: '16th-century red sandstone temples built during Emperor Akbar’s reign.' }
    ]
  },

  // 16. AYODHYA (Uttar Pradesh)
  {
    id: 'ayodhya',
    name: 'Ayodhya (Birthplace of Lord Rama)',
    state: 'Uttar Pradesh',
    tagline: 'Ram Janmabhoomi Mandir, Sacred Sarayu River, Hanuman Garhi & Deepotsav',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'The ancient capital of the Kosala Kingdom and sacred birthplace of Maryada Purushottam Lord Rama, Ayodhya is located on the holy banks of the Sarayu River. Celebrated for the newly consecrated Ram Mandir and the Guinness-record-setting Deepotsav of millions of earthen lamps.',
    latitude: 26.7922,
    longitude: 82.1998,
    airport: 'Maharishi Valmiki International Airport (AYJ)',
    railwayStation: 'Ayodhya Dham Junction (AY) / Ayodhya Cantt (AYC)',
    festivalIds: ['diwali', 'ram-navami', 'janmashtami'],
    monumentIds: ['ram-janmabhoomi-mandir', 'hanuman-garhi-ayodhya', 'kanak-bhawan'],
    religiousSites: [
      {
        name: 'Shri Ram Janmabhoomi Mandir',
        type: 'Grand Nagara Style Rama Temple',
        desc: 'Magnificent 161-foot tall pink sandstone temple with 392 intricately carved pillars depicting Valmiki Ramayana murals.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Hanuman Garhi & Kanak Bhawan',
        type: 'Fortress Temple & Golden Palace',
        desc: '76-step fortified hilltop shrine of Lord Hanuman and the palace gifted to Devi Sita by Queen Kaikeyi with golden-crowned idols.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'International Ram Katha Museum & Art Gallery',
        timing: '10:30 AM – 4:30 PM (Closed Mondays)',
        highlight: 'Rare Palm-leaf manuscripts of Ramayana, ancient coins, Terracotta figurines from 5th century BCE.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Ayodhya Deepotsav lighting 2.5 million diyas on Diwali', 'Daily Sarayu River Maha Aarti with giant multi-tiered brass lamps', 'Chaurasi Kosi Parikrama pilgrimage trail'],
      handicrafts: ['Wood Carvings of Ram Darbar', 'Sarayu Sacred Sand Art', 'Ayodhya Khadau Wooden Footwear'],
      folkArt: ['Ramleela Theatre', 'Awadhi devotional bhajan'],
      danceForms: ['Kathak', 'Awadhi Folk Dance']
    },
    heritageStreets: [
      {
        name: 'Ram Path & Hanuman Garhi Bazaar',
        famousFor: 'Sandalwood garlands, Ramayana scrolls, brass deity lamps, and authentic Besan Laddoos.',
        bestTime: '7:00 AM – 9:00 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Hanuman Garhi Pure Desi Ghee Besan Ke Laddoo & Rabdi',
        category: 'Sweets',
        desc: 'Melt-in-mouth golden gram flour laddoos packed with almonds and cardamom, served as sacred prasad.',
        iconicSpots: ['Hanuman Garhi Sweet Shops', 'Maurya Mishthan Bhandar']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Shri Kanak Rasoi',
        cuisine: 'Satvik Awadhi & Pure Veg Thali',
        priceRange: '₹400 for two',
        mustTry: 'Satvik Ram Thali with Ghee Poori, Dal, and Kheer',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Sunset Sarayu River Cruise & Grand Aarti at Ram Ki Paidi',
        duration: '2 Hours',
        priceEstimate: '₹300 per person',
        desc: 'Cruise along the ghats and watch illuminated river steps during the evening prayers.',
        category: 'Spiritual Riverfront'
      }
    ],
    nearbyAttractions: [
      { name: 'Ram Ki Paidi Ghats', distanceKm: 1, desc: 'Illuminated riverfront steps with cascading holy waters of Sarayu.' },
      { name: 'Guptar Ghat & Military Cantonment', distanceKm: 8, desc: 'Sacred ghat where Lord Rama entered Jal Samadhi to return to Vaikuntha.' }
    ]
  },

  // 17. GUWAHATI (Assam)
  {
    id: 'guwahati',
    name: 'Guwahati (Gateway to Northeast India)',
    state: 'Assam',
    tagline: 'Kamakhya Tantric Shrine, Majestic Brahmaputra, Bihu Festivals & Muga Silk',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Perched along the mighty Brahmaputra River and Nilachal Hills, Guwahati is the ancient city of Pragjyotishpura (City of Eastern Light). It is the commercial, cultural, and spiritual gateway to all seven northeastern sister states.',
    latitude: 26.1445,
    longitude: 91.7362,
    airport: 'Lokpriya Gopinath Bordoloi International Airport (GAU)',
    railwayStation: 'Guwahati Railway Station (GHY)',
    festivalIds: ['bohagi-bihu-assam', 'kati-bihu-assam', 'magh-bihu-assam', 'ambubachi-mela-assam'],
    monumentIds: ['kamakhya-temple', 'umananda-temple'],
    religiousSites: [
      {
        name: 'Maa Kamakhya Devalaya (Nilachal Hill)',
        type: 'Supreme Tantric Shakti Peetha',
        desc: 'One of the oldest and most venerated Shakti Peethas on earth where Goddess Sati’s Yoni fell; host to the annual Ambubachi Mela.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Umananda Temple (Peacock Island)',
        type: 'Island Shiva Sanctuary',
        desc: '17th-century Shiva temple situated on Peacock Island, the world’s smallest inhabited river island in the Brahmaputra.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Assam State Museum (Dighalipukhuri)',
        timing: '10:00 AM – 5:00 PM (Closed Mondays)',
        highlight: 'Sculptures from the 5th century Kamarupa Kingdom, Ahom royal swords, and tribal textiles.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Srimanta Sankaradeva Kalakshetra',
        timing: '10:00 AM – 7:00 PM',
        highlight: 'Vast cultural complex showcasing the ethnic traditions, Satriya dance, and music of Assam.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Rongali Bihu celebrations with dhol and pepa', 'Weaving golden Muga silk on household looms', 'Tamul-paan betel nut hospitality'],
      handicrafts: ['Muga & Eri Ahimsa Silk', 'Assamese Japi Bamboo Hats', 'Bell metal crafts of Sarthebari'],
      folkArt: ['Bihu song & dance', 'Ojapali storytelling'],
      danceForms: ['Bihu Dance', 'Sattriya (Classical Dance)', 'Bagurumba Bodo dance']
    },
    heritageStreets: [
      {
        name: 'Pan Bazaar & Fancy Bazaar',
        famousFor: 'Assam silk emporiums, orthodox CTC & orthodox Assam black tea, cane furniture, and local river fish.',
        bestTime: '10:30 AM – 8:30 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Traditional Assamese Thali with Masor Tenga & Khar',
        category: 'Main Course',
        desc: 'Alkaline raw papaya khar, followed by Joha rice, duck curry with black pepper, and tangy tomato-elephant apple sour fish soup.',
        iconicSpots: ['Paradise Restaurant', 'Khorikaa (Ulubari)', 'Maihang']
      },
      {
        name: 'Bihu Pitha & Laru Sweets with Red Tea (Lal Cha)',
        category: 'Sweets',
        desc: 'Sticky Bora rice rolls stuffed with grated coconut and liquid sugarcane jaggery (Jhola Gur).',
        iconicSpots: ['Jalpan counters across Pan Bazaar']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Paradise Restaurant (Since 1984, Silpukhuri)',
        cuisine: 'Authentic Assamese Parampara Thali',
        priceRange: '₹800 for two',
        mustTry: 'Vyanjan Thali with Duck Roast, Masor Tenga, Pitika, and Payas',
        bookingPlatform: 'Direct'
      },
      {
        name: 'Khorikaa Restaurant (GS Road)',
        cuisine: 'Ethnic Assamese & Tribal Smoked Meat',
        priceRange: '₹600 for two',
        mustTry: 'Smoked Pork with Bamboo Shoot, Fish in Banana Leaf & Aloo Pitika',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Brahmaputra Sunset River Cruise on Alfresco Grand',
        duration: '2 Hours',
        priceEstimate: '₹500 per person',
        desc: 'Sip Assam black tea while watching river dolphins and the sun dip behind the Nilachal hills.',
        category: 'River Cruise'
      }
    ],
    nearbyAttractions: [
      { name: 'Sualkuchi Silk Weaving Village', distanceKm: 32, desc: 'The Manchester of Assam where every home hums with wooden handlooms.' },
      { name: 'Pobitora Wildlife Sanctuary', distanceKm: 48, desc: 'Highest density of Great Indian One-Horned Rhinoceros on earth.' },
      { name: 'Kaziranga National Park', distanceKm: 190, desc: 'UNESCO World Heritage wildlife sanctuary.' }
    ]
  },

  // 18. KOHIMA (Nagaland)
  {
    id: 'kohima',
    name: 'Kohima (Land of the Angami Nagas)',
    state: 'Nagaland',
    tagline: 'Hornbill Festival, Kisama Heritage Village, WWII War Cemetery & Dzukou Valley',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'The picturesque capital of Nagaland, perched amidst misty mountain ridges at 1,444 meters. Home to the legendary Angami tribe and the iconic Kisama Heritage Village, which hosts the world-famous "Hornbill Festival" uniting 17 major Naga tribes in December.',
    latitude: 25.6751,
    longitude: 94.1086,
    airport: 'Dimapur Airport (74 km)',
    railwayStation: 'Dimapur Railway Station (DMV - 74 km)',
    festivalIds: ['hornbill-festival-nagaland', 'sekrenyi-nagaland', 'aoleang-monyu-nagaland'],
    monumentIds: ['kohima-war-cemetery', 'kisama-heritage-village', 'kohima-cathedral'],
    religiousSites: [
      {
        name: 'Mary Help of Christians Cathedral (Kohima)',
        type: 'Architectural Hilltop Cathedral',
        desc: 'Notable for its blend of traditional Naga Morung tribal architecture and soaring triangular wooden roofs.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Nagaland State Museum (Bayavu Hill)',
        timing: '10:00 AM – 4:00 PM (Closed Mondays)',
        highlight: 'Naga tribal Morung wood carvings, traditional headgear, animal skull trophies, and ceremonial shawls.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Hornbill Festival of Festivals at Kisama in Dec 1–10', 'Sekrenyi purification rituals of Angami Nagas', 'Communal morung youth dormitories'],
      handicrafts: ['Angami Black and Red Woven Shawls', 'Bamboo Beer Mugs', 'Naga Beaded Necklaces'],
      folkArt: ['Naga War Dance', 'Wood Carving of Hornbills'],
      danceForms: ['Warrior Dances of 17 Naga Tribes', 'Log Drum Beats']
    },
    heritageStreets: [
      {
        name: 'Kohima Local Market (BOC)',
        famousFor: 'Bhut Jolokia (King Chilli), organic bamboo shoots, Naga tree tomatoes, and fermented soybean (Akhuni).',
        bestTime: '8:00 AM – 5:00 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Naga Pork with Fermented Bamboo Shoot & Raja Mircha',
        category: 'Main Course',
        desc: 'Slow-simmered smoked pork with fragrant wild bamboo shoots, fiery ghost peppers, and organic sticky red rice.',
        iconicSpots: ['Orami Restaurant', 'Amigo’s Cafe']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Orami Heritage Naga Kitchen (Opposite Secretariat)',
        cuisine: 'Traditional 16-Tribes Naga Cuisine',
        priceRange: '₹600 for two',
        mustTry: 'Smoked Pork with Axone, Boiled Mountain Greens, and Raja Mircha Chutney',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Kisama Heritage Village Tribal Morung Tour',
        duration: '3 Hours',
        priceEstimate: '₹50 entry',
        desc: 'Walk through 17 full-scale traditional houses of different Naga tribes with wood carved pillars.',
        category: 'Tribal Heritage'
      },
      {
        title: 'Dzukou Valley Trek to Emerald Lily Meadows',
        duration: 'Full Day',
        priceEstimate: '₹1,500 with guide',
        desc: 'Trek along rolling green hills covered in rare Dzukou lilies on the Nagaland-Manipur border.',
        category: 'Mountain Trek'
      }
    ],
    nearbyAttractions: [
      { name: 'Kohima Commonwealth WWII War Cemetery', distanceKm: 2, desc: 'Moving memorial on Garrison Hill with the famous epitaph: "When you go home, tell them of us and say, for your tomorrow we gave our today."' },
      { name: 'Khonoma Green Village', distanceKm: 20, desc: 'India’s first 700-year-old eco-heritage village known for conservation and Angami terrace farming.' }
    ]
  },

  // 19. BISHNUPUR (West Bengal)
  {
    id: 'bishnupur',
    name: 'Bishnupur (City of Terracotta Temples)',
    state: 'West Bengal',
    tagline: 'Malla Dynasty Terracotta Sanctuaries, Baluchari Silk Sarees & Dokra Metalcraft',
    bannerImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'The capital of the Vaishnavite Malla Kings from the 16th to 18th centuries, Bishnupur is world-famous for its burnt-clay terracotta temples depicting Ramayana and Mahabharata epics, classical Bishnupur Gharana music, and handwoven Baluchari silk sarees.',
    latitude: 23.0678,
    longitude: 87.3169,
    airport: 'Netaji Subhash Chandra Bose International Airport, Kolkata (135 km)',
    railwayStation: 'Bishnupur Railway Station (VSU)',
    festivalIds: ['durga-puja-bengal', 'rash-mela-bengal', 'dol-jatra-bengal', 'poila-boishakh-bengal'],
    monumentIds: ['rasmancha', 'jor-bangla-temple', 'madan-mohan-temple', 'shyam-rai-temple'],
    religiousSites: [
      {
        name: 'Rasmancha (1600 CE)',
        type: 'Unique Pyramidal Terracotta Monument',
        desc: 'Oldest brick monument in Bishnupur with a stepped pyramidal roof, built by King Bir Hambir to display Radha-Krishna idols during Rash Mela.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Jor Bangla & Shyam Rai Temples',
        type: 'Twin-Hut Chala Architecture',
        desc: 'Pancharatna shrines covered entirely from base to cornice in exquisite terracotta tiles of dancing musicians and naval battles.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Acharya Jogesh Chandra Purakriti Bhawan',
        timing: '10:00 AM – 5:00 PM',
        highlight: 'Ancient manuscripts of Chaitanya Charitamrita, Malla dynasty royal armory, and fossil stones.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Rash Mela festival with thousands of clay lamps in November', 'Weaving mythological stories into Baluchari saree borders', 'Bishnupur Classical Hindustani music concerts'],
      handicrafts: ['Baluchari & Swarnachari Sarees', 'Bankura Terracotta Horses', 'Dokra Lost-Wax Bell Metal'],
      folkArt: ['Dashavatara Ganjifa playing cards', 'Terracotta temple friezes'],
      danceForms: ['Gaudiya Nritya', 'Baul Songs', 'Chhau Dance']
    },
    heritageStreets: [
      {
        name: 'Chowk Bazaar & Tantipara Weaver Colony',
        famousFor: 'Master weavers crafting Baluchari sarees on jacquard looms, and terracotta horse artisans.',
        bestTime: '9:30 AM – 7:30 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Bishnupuri Mecha Sandesh & Posto Bora',
        category: 'Sweets',
        desc: 'Gram flour and cardamom laddoos dipped in thick sugar syrup, paired with crisp poppy seed patties.',
        iconicSpots: ['Bishnupur Sweet Stores near Rasmancha', 'Monomohini Sweets']
      }
    ],
    heritageRestaurants: [
      {
        name: 'WBTDC Tourist Lodge Restaurant',
        cuisine: 'Traditional Bengali Rarh Thali',
        priceRange: '₹450 for two',
        mustTry: 'Bhat, Shukto, Katla Kalia, Posto Bora & Mecha Sandesh',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Terracotta Temple Heritage Trail by Bicycle / E-Rickshaw',
        duration: '3.5 Hours',
        priceEstimate: '₹25 entry ticket (covers all ASI sites)',
        desc: 'Visit 10 preserved terracotta brick temples and marvel at 400-year-old Ramayana carvings.',
        category: 'Temple Architecture'
      }
    ],
    nearbyAttractions: [
      { name: 'Panchmura Terracotta Artisan Village', distanceKm: 21, desc: 'Birthplace of the iconic Bankura Terracotta Horse with long upright ears.' },
      { name: 'Mukutmanipur Dam & Kangsabati Lake', distanceKm: 65, desc: 'Vast emerald lake surrounded by forested hills and tribal villages.' }
    ]
  },

  // 20. DARJEELING (West Bengal)
  {
    id: 'darjeeling',
    name: 'Darjeeling (Queen of the Himalayas)',
    state: 'West Bengal',
    tagline: 'UNESCO Himalayan Railway, World’s Finest Champagne Tea & Kanchenjunga Sunrise',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Nestled at 2,042 meters against the backdrop of Mount Kanchenjunga (the world’s 3rd highest peak), Darjeeling is renowned globally for its Victorian hill charm, fragrant First Flush black tea gardens, and the 1881 UNESCO Toy Train.',
    latitude: 27.0410,
    longitude: 88.2663,
    airport: 'Bagdogra Airport (IXB - 68 km)',
    railwayStation: 'New Jalpaiguri (NJP - 70 km) / Darjeeling Toy Train Station (DJ)',
    festivalIds: ['durga-puja-bengal', 'poush-sankranti-bengal', 'poila-boishakh-bengal'],
    monumentIds: ['darjeeling-himalayan-railway', 'ghoom-monastery', 'peace-pagoda-darjeeling'],
    religiousSites: [
      {
        name: 'Ghoom Yiga Choeling Tibetan Monastery (1850)',
        type: 'Ancient Gelugpa Buddhist Gompa',
        desc: 'Houses a 15-foot statue of Maitreya (Future Buddha) and rare handwritten Tibetan Buddhist scriptures.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Japanese Peace Pagoda & Mahakal Temple',
        type: 'Nipponzan Buddhist Pagoda & Ridge Shrine',
        desc: 'Peace Pagoda featuring four avatars of Buddha; Mahakal Temple perched on Observatory Hill overlooking snow peaks.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Himalayan Mountaineering Institute (HMI)',
        timing: '9:00 AM – 4:30 PM (Closed Thursdays)',
        highlight: 'Founded by Tenzing Norgay; displays gear from the historic 1953 first ascent of Mount Everest.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Watching golden sunrise over Mount Kanchenjunga from Tiger Hill at 4:30 AM', 'Afternoon tea tasting in colonial tea estates', 'Strolling on the vehicle-free Chowrasta Mall'],
      handicrafts: ['Darjeeling Black Orthodox Tea', 'Tibetan Woolen Carpets & Thangka Paintings', 'Gorkha Khukuri Daggers'],
      folkArt: ['Maruni Folk Dance', 'Tibetan Cham masked dances during Losar'],
      danceForms: ['Nepali Folk Dances (Tamang Selo, Maruni)', 'Tibetan Opera']
    },
    heritageStreets: [
      {
        name: 'The Mall Road & Chowrasta',
        famousFor: 'Priceless First Flush tea boutiques (Nathmulls), antique bookstores (Oxford Book), and horse riding.',
        bestTime: '9:00 AM – 7:30 PM'
      }
    ],
    authenticFood: [
      {
        name: 'Steamed Darjeeling Momos & Thukpa with Dalle Chilli Chutney',
        category: 'Street Food',
        desc: 'Juicy hand-pinched dumplings paired with clear bone broth and fire-roasted fiery Dalle Khursani pepper dip.',
        iconicSpots: ['Kunga Restaurant (Chauk Bazaar)', 'Keventers Rooftop (since 1911)', 'Glenary’s Bakery']
      },
      {
        name: 'Glenary’s Fresh Apple Pie & Single Estate Darjeeling Muscatel Tea',
        category: 'Beverage',
        desc: 'Amber-golden tea brewed from Happy Valley leaves with notes of muscatel grape, served with warm pastries.',
        iconicSpots: ['Glenary’s Bakery & Cafe (Nehru Road)']
      }
    ],
    heritageRestaurants: [
      {
        name: 'Glenary’s Bakery, Cafe & Pub (Since 1911)',
        cuisine: 'Colonial British & Himalayan Continental',
        priceRange: '₹800 for two',
        mustTry: 'Darjeeling Tea Pot, Roast Chicken with Gravy, and Chocolate Eclairs',
        bookingPlatform: 'Direct'
      },
      {
        name: 'Kunga Restaurant (Gandhi Road)',
        cuisine: 'Authentic Tibetan & Gorkha',
        priceRange: '₹350 for two',
        mustTry: 'Steam Pork Momos, Gyathuk Noodle Soup & Shaphalay',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'UNESCO Darjeeling Toy Train Joyride from Darjeeling to Ghoom',
        duration: '2 Hours',
        priceEstimate: '₹1,000 (Steam Engine) / ₹600 (Diesel)',
        desc: 'Ride through Batasia Loop spiral overlooking snowy peaks on vintage 1880s narrow gauge tracks.',
        category: 'UNESCO Steam Train'
      },
      {
        title: 'Happy Valley Tea Estate Plucking & Processing Tour',
        duration: '2 Hours',
        priceEstimate: '₹150 per person',
        desc: 'Walk through century-old tea bushes and taste black, green, and white teas with master tea tasters.',
        category: 'Tea Tasting'
      }
    ],
    nearbyAttractions: [
      { name: 'Tiger Hill Sunrise Point', distanceKm: 11, desc: 'Panoramic sunrise viewpoint over Mount Everest and Kanchenjunga peaks.' },
      { name: 'Batasia Loop & Gorkha War Memorial', distanceKm: 5, desc: 'Engineering marvel where the toy train wraps 360 degrees around landscaped gardens.' }
    ]
  }
];
