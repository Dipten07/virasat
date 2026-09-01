import { CityDestination } from '../types';
import { EXTRA_CITIES_DATA } from './extraCitiesData';
import { REGIONAL_CITIES_DATA } from './regionalCitiesData';
import { MORE_REGIONAL_CITIES_DATA } from './moreRegionalCitiesData';

const BASE_CITIES_DATA: CityDestination[] = [
  {
    id: 'varanasi',
    name: 'Varanasi (Kashi / Banaras)',
    state: 'Uttar Pradesh',
    tagline: 'The Eternal City of Light, Ghats, Sacred Chants & Living Philosophy',
    bannerImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533618567286-1e2de517b445?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Mark Twain famously wrote: "Benares is older than history, older than tradition, older even than legend, and looks twice as old as all of them put together." Situated on the banks of the sacred Ganges, Varanasi is the spiritual capital of India where ancient Vedic traditions thrive continuously.',
    latitude: 25.3176,
    longitude: 82.9739,
    airport: 'Lal Bahadur Shastri International Airport (VNS)',
    railwayStation: 'Varanasi Junction (BSB) / Banaras (BSBS)',
    festivalIds: ['dev-deepawali', 'janmashtami', 'braj-holi'],
    monumentIds: ['kashi-vishwanath'],
    religiousSites: [
      {
        name: 'Kashi Vishwanath Jyotirlinga & Golden Temple',
        type: 'Hindu Mandir',
        desc: 'The supreme abode of Lord Shiva, crowned with a golden spire and the newly restored river corridor.',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Sarnath Deer Park & Dhamek Stupa',
        type: 'Buddhist Sacred Site',
        desc: 'The venerated site where Gautama Buddha delivered his first sermon (Dhammacakkappavattana Sutta) in 528 BCE.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Sankat Mochan Hanuman Temple',
        type: 'Hindu Mandir',
        desc: 'Established by poet-saint Goswami Tulsidas, renowned for divine peace and live classical music concerts during annual sangeet sammelan.',
        image: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'St. Mary’s Church Varanasi (Cantonment)',
        type: 'Christian Heritage',
        desc: 'One of Northern India’s oldest Anglican churches dating to 1812 with stained glass and colonial graveyard.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Sarnath Archaeological Museum',
        timing: '9:00 AM – 5:00 PM (Closed Fridays)',
        highlight: 'Houses the original 3rd-century BCE Ashokan Lion Capital (the National Emblem of India) and exquisite Gupta Buddha statues.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Bharat Kala Bhavan (BHU Campus)',
        timing: '10:30 AM – 4:30 PM (Closed Sundays)',
        highlight: 'Exceptional collection of Banarasi brocades, Mughal miniatures, Chola bronzes, and Palm-leaf Sanskrit manuscripts.',
        image: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Subah-e-Banaras morning Vedic chant rituals at Assi Ghat', 'Classical Banaras Gharana Hindustani vocal and Shehnai music', 'Akharas traditional mud-wrestling on riverbanks at dawn'],
      handicrafts: ['Handloom Banarasi Silk Brocade & Zari Weaving', 'Pink Meenakari Enamelled Brassware', 'Wooden Carved Lacquer Toys'],
      folkArt: ['Kashi Wall Frescoes depicting Shiva-Parvati', 'Sanjhi paper cut-outs during festive seasons'],
      danceForms: ['Kathak (Banaras Gharana style characterized by footwork and bhav)', 'Kajri folk songs during monsoon']
    },
    heritageStreets: [
      {
        name: 'Thatheri Bazaar & Vishwanath Gali',
        famousFor: 'Centuries-old brass metal workshops, wooden toys, authentic rudraksha, and Banarasi silk emporiums.',
        bestTime: '11:00 AM – 8:00 PM',
        image: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Assi Ghat Promenade & Southern Ghats',
        famousFor: 'Morning yoga sessions, classical flute artists, heritage book cafes, and tranquil sunset views.',
        bestTime: '5:30 AM – 8:30 AM & 5:00 PM – 9:00 PM',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=600&q=80'
      }
    ],
    authenticFood: [
      {
        name: 'Banarasi Paan (Maghai / Meetha)',
        category: 'Sweets',
        desc: 'Betel leaf folded with fragrant gulkand, kattha, choona, and silver vark, famously immortalized across Indian culture.',
        iconicSpots: ['Keshav Tambool Bhandar (near Ravidas Gate)', 'Paan Darbar (Godowlia)'],
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Malaiyo (Winter Saffron Milk Foam)',
        category: 'Sweets',
        desc: 'Ethereal cloud of chilled milk froth infused with saffron, cardamom, and topped with sliced pistachios, available only in winter mornings.',
        iconicSpots: ['Shreeji Sweets (Thatheri Bazaar)', 'Markandey (Chaukhamba)'],
        image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Kachori Jalebi & Chana Sabzi',
        category: 'Street Food',
        desc: 'Crispy heeng-spiced lentil kachoris served with spicy chickpea potato gravy and piping hot syrupy jalebis.',
        iconicSpots: ['Ram Bhandar (Thatheri Gali)', 'Madhur Milan (Dashashwamedh)'],
        image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Banarasi Tamatar Chaat',
        category: 'Street Food',
        desc: 'Unique tangy mashed spiced tomato concasse served piping hot in earthen clay pots (kullad) with crispy namakpare.',
        iconicSpots: ['Kashi Chaat Bhandar (Godowlia)', 'Dina Chaat Bhandar'],
        image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=600&q=80'
      }
    ],
    heritageRestaurants: [
      {
        name: 'Kashi Chaat Bhandar',
        cuisine: 'Authentic Banarasi Street Chaat',
        priceRange: '₹150 for two',
        mustTry: 'Tamatar Chaat & Palak Patta Chaat',
        bookingPlatform: 'Zomato'
      },
      {
        name: 'BrijRama Palace - Darbhanga Dining Room',
        cuisine: 'Royal Vegetarian Heritage & Satvik Gourmet',
        priceRange: '₹3,500 for two',
        mustTry: 'Royal Banarasi Thali overlooking illuminated Ganges',
        bookingPlatform: 'Direct'
      },
      {
        name: 'Pizzeria Vaatika Cafe (Assi Ghat)',
        cuisine: 'Woodfired Italian & Famous Apple Pie',
        priceRange: '₹600 for two',
        mustTry: 'Wood-fired Pizza & Warm Apple Pie with Ice Cream',
        bookingPlatform: 'Zomato'
      }
    ],
    localActivities: [
      {
        title: 'Subah-e-Banaras Sunrise Boat Row & Vedic Chant Tour',
        duration: '2.5 Hours',
        priceEstimate: '₹400 – ₹1,200 per boat',
        desc: 'Glide along 84 ghats at dawn as temple bells chime, priests perform morning Surya Namaskar, and morning mist clears.',
        category: 'Spiritual River Experience'
      },
      {
        title: 'Weaver’s Quarter Walking Tour & Silk Masterclass',
        duration: '2 Hours',
        priceEstimate: '₹600 per person',
        desc: 'Explore the Muslim weaver neighborhoods of Sarai Mohana, observing century-old Jacquard handlooms weaving pure silver Zari.',
        category: 'Heritage Craft'
      },
      {
        title: 'VIP Dashashwamedh Evening Maha Aarti Boat Viewing',
        duration: '2 Hours',
        priceEstimate: '₹500 per seat',
        desc: 'Witness 7 young Vedic priests perform synchronized brass-lamp aarti from a prime mid-river vantage point.',
        category: 'Cultural Spectacle'
      }
    ],
    nearbyAttractions: [
      { name: 'Sarnath Deer Park & Ruins', distanceKm: 10, desc: 'Ancient Buddhist archaeological park where Buddhism was first proclaimed.' },
      { name: 'Chunar Fort & Sandstone Quarry', distanceKm: 42, desc: 'Historic 16th-century fortress overlooking river cliff where Ashokan sandstone was quarried.' },
      { name: 'Ramnagar Palace & Museum', distanceKm: 12, desc: '18th-century sandstone fortress home of the Kashi Naresh with royal vintage car and astronomical clock exhibits.' }
    ]
  },
  {
    id: 'jaipur',
    name: 'Jaipur (The Pink City)',
    state: 'Rajasthan',
    tagline: 'UNESCO World Heritage Capital of Forts, Havelis, Gemstones & Royal Splendor',
    bannerImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Founded in 1727 by astronomer-king Maharaja Sawai Jai Singh II, Jaipur was India’s first planned city based on ancient Vastu Shastra principles. Painted terracotta pink in 1876 to welcome the Prince of Wales, it is a living museum of Rajput forts, astronomical observatories, and artisan bazaars.',
    latitude: 26.9124,
    longitude: 75.7873,
    airport: 'Jaipur International Airport (JAI)',
    railwayStation: 'Jaipur Junction (JP)',
    festivalIds: ['makar-sankranti', 'pushkar-fair', 'braj-holi'],
    monumentIds: ['amber-fort', 'hawa-mahal'],
    religiousSites: [
      {
        name: 'Govind Dev Ji Temple',
        type: 'Hindu Mandir',
        desc: 'Located inside the City Palace complex, where thousands gather for ecstatic devotional aartis before the historic Krishna idol brought from Vrindavan.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Galtaji Sun Temple (Monkey Temple)',
        type: 'Ancient Temple & Natural Springs',
        desc: 'An ancient Hindu pilgrimage nestled between granite cliffs with sacred natural springs and pink pavilion shrines.',
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Birla Mandir (Laxmi Narayan Temple)',
        type: 'White Marble Temple',
        desc: 'Pristine modern marble temple sitting beneath Moti Dungri Fort, illuminated beautifully at dusk.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Albert Hall Museum (Central Museum)',
        timing: '9:00 AM – 5:00 PM & 7:00 PM – 10:00 PM (Night Museum)',
        highlight: 'Stunning Indo-Saracenic building housing Persian carpets, Egyptian mummy, ivory carvings, and royal Rajput armor.',
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'City Palace Museum (Maharaja Sawai Man Singh II Museum)',
        timing: '9:30 AM – 5:00 PM',
        highlight: 'Pritam Niwas Chowk peacock gate, royal textiles, the world’s largest sterling silver vessels (Gangajalis).',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Kathputli string puppet storytelling', 'Royal polo matches at Rambagh Polo Club', 'Chaupar and traditional kite flying from old city roofs'],
      handicrafts: ['Jaipur Blue Pottery', 'Sanganeri & Bagru Hand Block Printing', 'Kundan-Meenakari Gemstone Jewelry', 'Mojari Leather Footwear'],
      folkArt: ['Mandana floor painting', 'Thikri glass inlay work'],
      danceForms: ['Ghoomar (Traditional royal swirling dance)', 'Kalbelia (Cobra snake charmer dance)']
    },
    heritageStreets: [
      {
        name: 'Johari Bazaar & Bapu Bazaar',
        famousFor: 'Precious gemstone jewelry, silver trinkets, bandhani sarees, and camel leather jutis in pink colonnades.',
        bestTime: '11:00 AM – 8:30 PM',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Chandpole Bazaar & Khazane Walon ka Rasta',
        famousFor: 'Marble idol sculptors carving deities and traditional brass utensils.',
        bestTime: '10:30 AM – 7:30 PM',
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80'
      }
    ],
    authenticFood: [
      {
        name: 'Dal Baati Churma with Ghee',
        category: 'Main Course',
        desc: 'Crisp baked wheat dumplings drowned in pure desi ghee, served with panchmel spicy lentils and sweet jaggery-infused churma.',
        iconicSpots: ['Chokhi Dhani Heritage Village', 'Thali & More (C-Scheme)'],
        image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Pyaaz ki Kachori',
        category: 'Street Food',
        desc: 'Flaky deep-fried pastry stuffed with spiced caramelised onion and gram flour filling.',
        iconicSpots: ['Rawat Mishtan Bhandar (Station Rd)', 'Samrat Sweets (Chaura Rasta)'],
        image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'LMB Royal Ghewar & Mawa Kachori',
        category: 'Sweets',
        desc: 'Disc-shaped honeycomb sweet soaked in saffron sugar syrup and topped with thick rabdi and silver foil.',
        iconicSpots: ['Laxmi Mishthan Bhandar (Johari Bazaar)', 'Sodhani Sweets'],
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Lassiwala Special Creamy Lassi',
        category: 'Beverage',
        desc: 'Thick churned yogurt served in chilled earthen kulhads with a thick dollop of fresh clotted cream on top.',
        iconicSpots: ['Original Lassiwala (Shop 312, MI Road since 1944)'],
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80'
      }
    ],
    heritageRestaurants: [
      {
        name: '1135 AD (Amber Fort)',
        cuisine: 'Royal Rajput Fine Dining',
        priceRange: '₹4,000 for two',
        mustTry: 'Laal Maas & Badam Ka Halwa inside the royal fort ramparts',
        bookingPlatform: 'Direct'
      },
      {
        name: 'Rawat Mishtan Bhandar',
        cuisine: 'Rajasthani Breakfast & Sweets',
        priceRange: '₹350 for two',
        mustTry: 'Pyaaz Kachori & Mawa Kachori',
        bookingPlatform: 'Swiggy'
      },
      {
        name: 'The Verandah at Rambagh Palace',
        cuisine: 'Palace Afternoon High Tea & Global Cuisine',
        priceRange: '₹5,500 for two',
        mustTry: 'Royal High Tea overlooking roaming peacocks and palace lawns',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Hot Air Balloon Safari over Amber Valley & Aravalli Hills',
        duration: '3 Hours (1 Hour Flight)',
        priceEstimate: '₹12,000 per person',
        desc: 'Soar gracefully over hill fort ramparts, desert lakes, and quaint villages at sunrise with SkyWaltz.',
        category: 'Aerial Adventure'
      },
      {
        title: 'Heritage Pink City Architecture & Bazaars E-Rickshaw Walk',
        duration: '3 Hours',
        priceEstimate: '₹800 per person',
        desc: 'Navigate narrow alleys, sample street snacks, and meet gemstone cutters with local historian guides.',
        category: 'Heritage Walk'
      },
      {
        title: 'Bagru Block Printing Artisan Workshop with Master Craftsmen',
        duration: '4 Hours',
        priceEstimate: '₹1,500 per person',
        desc: 'Learn natural mud-resist (Dabu) printing and create your own hand-stamped silk scarf.',
        category: 'Traditional Craft'
      }
    ],
    nearbyAttractions: [
      { name: 'Pushkar Sacred Lake & Brahma Temple', distanceKm: 145, desc: 'Spiritual desert town surrounding the sacred Sarovar.' },
      { name: 'Abhaneri Chand Baori Stepwell', distanceKm: 95, desc: 'India’s deepest 13-story geometric stepwell featuring 3,500 narrow steps.' },
      { name: 'Sariska Tiger Reserve & Bhangarh Fort', distanceKm: 110, desc: 'Historic wildlife sanctuary and ancient legendary medieval fortress.' }
    ]
  },
  {
    id: 'kolkata',
    name: 'Kolkata (The City of Joy)',
    state: 'West Bengal',
    tagline: 'India’s Intellectual & Artistic Capital of Grand Pandals, Trams, Literature & Sweets',
    bannerImage: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'The erstwhile capital of the British Raj until 1911, Kolkata is a soul-stirring metropolis where Gothic architecture, yellow ambassador cabs, intellectual Adda conversations in heritage coffee houses, and the world’s grandest public art carnival converge.',
    latitude: 22.5726,
    longitude: 88.3639,
    airport: 'Netaji Subhash Chandra Bose International Airport (CCU)',
    railwayStation: 'Howrah Junction (HWH) / Sealdah (SDAH)',
    festivalIds: ['durga-puja', 'rath-yatra'],
    monumentIds: ['victoria-memorial'],
    religiousSites: [
      {
        name: 'Dakshineswar Kali Temple & Belur Math',
        type: 'Hindu Mandir & Ramakrishna Mission Headquarters',
        desc: 'Navaratna 19th-century temple where mystic Sri Ramakrishna Paramahamsa attained enlightenment, facing the universal architectural symphony of Belur Math.',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'St. Paul’s Cathedral',
        type: 'Anglican Cathedral',
        desc: 'Majestic Indo-Gothic cathedral consecrated in 1847 with stunning stained glass windows designed by Sir Edward Burne-Jones.',
        image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Magen David & Beth El Synagogues',
        type: 'Jewish Heritage',
        desc: 'Grand 19th-century Italian Renaissance synagogues built by the Baghdadi Jewish community in Bowbazar.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Indian Museum (Jadughar)',
        timing: '10:00 AM – 6:00 PM (Closed Mondays)',
        highlight: 'The ninth oldest regular museum in the world, containing Bharhut Buddhist railings, Gandhara art, and Egyptian mummies.',
        image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Victoria Memorial Art Galleries',
        timing: '10:00 AM – 6:00 PM (Closed Mondays)',
        highlight: 'Rare oil paintings by Thomas Daniell, Calcutta 300 years retrospective, and Queen’s royal artifacts.',
        image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['College Street Boi Para (Book Paradise) intellectual Adda', 'North Kolkata Bonedi Bari (aristocratic mansion) Durga Pujas', 'Heritage Kolkata Tram rides across the Maidan'],
      handicrafts: ['Kumartuli Clay Idol Sculpting', 'Dokra Brass Casting', 'Kantha Embroidery', 'Terracotta Craft'],
      folkArt: ['Kalighat Scroll Paintings', 'Patachitra storytelling'],
      danceForms: ['Gaudiya Nritya (Ancient classical dance of Bengal)', 'Rabindra Nritya']
    },
    heritageStreets: [
      {
        name: 'College Street & Indian Coffee House',
        famousFor: 'World’s largest second-hand book market spanning 1.5 km with historic cafes frequented by Satyajit Ray and Amartya Sen.',
        bestTime: '11:00 AM – 7:30 PM',
        image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Kumartuli Idol Makers Lane',
        famousFor: 'Clay artisans sculpting towering Durga idols from sacred Ganges silt and straw since the 18th century.',
        bestTime: '9:00 AM – 6:00 PM (Best in Aug–Oct)',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80'
      }
    ],
    authenticFood: [
      {
        name: 'Original Calcutta Kathi Roll',
        category: 'Street Food',
        desc: 'Flaky paratha layered with egg, tender marinated chicken/paneer kebabs, fresh lime, and crunchy onions.',
        iconicSpots: ['Nizam’s (New Market - birthplace of Kathi Roll)', 'Kusum Rolls (Park Street)'],
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Nolen Gur Rosogolla & Mishti Doi',
        category: 'Sweets',
        desc: 'Spongy cottage cheese balls infused with winter date-palm jaggery and caramelized baked yogurt in clay earthen pots.',
        iconicSpots: ['Nobin Chandra Das (Inventor of Rosogolla)', 'Balaram Mullick & Radharaman Mullick', 'K.C. Das'],
        image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Kolkata Biryani with Aloo & Dim',
        category: 'Main Course',
        desc: 'Fragrant Awadhi-origin biryani cooked with tender meat, saffron basmati, and the iconic melt-in-mouth spiced golden potato.',
        iconicSpots: ['Arsalan (Park Circus)', 'Shiraz Golden Restaurant', 'Aminia'],
        image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Kolkata Puchka with Gondhoraj Lemon Water',
        category: 'Street Food',
        desc: 'Ultra-crisp semolina shells stuffed with spiced black gram mashed potatoes and filled with fiery tamarind gondhoraj lemon water.',
        iconicSpots: ['Dada Puchkawala (Russell Street)', 'Dakshinapan Puchka'],
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80'
      }
    ],
    heritageRestaurants: [
      {
        name: 'Flurys (Park Street since 1927)',
        cuisine: 'Colonial European Tea Room & Bakery',
        priceRange: '₹1,200 for two',
        mustTry: 'English Breakfast, Rum Balls & Darjeeling First Flush Tea',
        bookingPlatform: 'Zomato'
      },
      {
        name: '6 Ballygunge Place',
        cuisine: 'Authentic Bengali Fine Dining in Heritage Bungalow',
        priceRange: '₹1,800 for two',
        mustTry: 'Daab Chingri (Prawns in coconut shell) & Kosha Mangsho',
        bookingPlatform: 'Zomato'
      },
      {
        name: 'Peter Cat (Park Street)',
        cuisine: 'Continental & Heritage Grills',
        priceRange: '₹1,500 for two',
        mustTry: 'Legendary Chelo Kebab served with buttered rice & egg',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Durga Puja VIP Theme Pandal Hopping Pass & Tour',
        duration: '5 Hours (Night Tour)',
        priceEstimate: '₹2,500 per person',
        desc: 'Skip long queues with VIP access to award-winning artistic pandals in North and South Kolkata.',
        category: 'Cultural Carnival'
      },
      {
        title: 'Howrah Bridge Sunrise & Mallick Ghat Flower Market Walk',
        duration: '2.5 Hours',
        priceEstimate: '₹600 per person',
        desc: 'Experience Asia’s largest flower market bursting with orange marigolds against the colossal cantilever bridge.',
        category: 'Heritage Photography'
      },
      {
        title: 'Heritage Kolkata Tramway Ride & Maidan Heritage Walk',
        duration: '2 Hours',
        priceEstimate: '₹250 per person',
        desc: 'Ride Asia’s oldest surviving electric tram passing through lush greens of the Maidan and Fort William.',
        category: 'Vintage Transport'
      }
    ],
    nearbyAttractions: [
      { name: 'Sundarbans UNESCO Mangrove Tiger Delta', distanceKm: 100, desc: 'World’s largest mangrove forest home of the Royal Bengal Tiger.' },
      { name: 'Bishnupur Terracotta Temples', distanceKm: 140, desc: '17th-century Malla king brick temples covered in exquisite terracotta relief plaques.' },
      { name: 'Shantiniketan Rabindranath Tagore University', distanceKm: 160, desc: 'UNESCO World Heritage open-air cultural learning hub.' }
    ]
  },
  {
    id: 'kochi',
    name: 'Kochi (Cochin - Queen of the Arabian Sea)',
    state: 'Kerala',
    tagline: 'Ancient Spice Trading Port of Chinese Fishing Nets, Synagogues & Kathakali',
    bannerImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'A historic crossroads of Arab, Chinese, Portuguese, Dutch, and British merchant trade since 1341. Fort Kochi and Mattancherry retain cobblestone streets, cantilevered Chinese fishing nets, 16th-century Jewish synagogues, and Kerala backwater canals.',
    latitude: 9.9312,
    longitude: 76.2673,
    airport: 'Cochin International Airport (COK) - 100% Solar Powered',
    railwayStation: 'Ernakulam Junction (ERS)',
    festivalIds: ['onam-kerala', 'thrissur-pooram'],
    monumentIds: [],
    religiousSites: [
      {
        name: 'Paradesi Synagogue (Mattancherry)',
        type: 'Jewish Heritage',
        desc: 'Built in 1568 in Jew Town with hand-painted blue Cantonese porcelain floor tiles and Belgian glass chandeliers.',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'St. Francis Church (Vasco da Gama Tomb)',
        type: 'Christian Heritage',
        desc: 'India’s oldest European church built by Portuguese Franciscan friars in 1503 where explorer Vasco da Gama was originally buried.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Santa Cruz Cathedral Basilica',
        type: 'Catholic Basilica',
        desc: 'One of the eight Basilicas in India with stunning pastel Gothic interiors and ceiling frescoes depicting the Passion of Christ.',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Mattancherry Palace (Dutch Palace)',
        timing: '9:45 AM – 1:00 PM & 2:00 PM – 4:45 PM (Closed Fridays)',
        highlight: 'Contains some of the best Ramayana and Mahabharata mural paintings in India, painted in traditional Kerala tempera style.',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Kerala Folklore Museum (Thevara)',
        timing: '9:30 AM – 6:00 PM',
        highlight: 'Three-story architectural showpiece showcasing Malabar, Cochin, and Travancore woodwork with 4,000 ethnographic artifacts.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Chenda Melam temple percussion drumming', 'Chinese Fishing Net operation at Fort Kochi beach', 'Ayurvedic Panchakarma wellness therapies'],
      handicrafts: ['Coir Weaving & Coconut Shell Crafts', 'Spices Grinding (Cardamom, Pepper, Cloves)', 'Bell Metal Castings (Uli)'],
      folkArt: ['Kalam Ezhuthu floor paintings made from natural powders', 'Theyyam ritual performance art'],
      danceForms: ['Kathakali (Classical dance-drama with elaborate green face makeup)', 'Mohiniyattam (Dance of the enchantress)', 'Kalaripayattu (Ancient martial art)']
    },
    heritageStreets: [
      {
        name: 'Jew Town & Synagogue Lane',
        famousFor: 'Spice warehouses, colonial antique furniture, handwoven linen clothing, and boutique art cafes.',
        bestTime: '10:00 AM – 7:00 PM',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Princess Street & Tower Road (Fort Kochi)',
        famousFor: 'Colonial Dutch and Portuguese residences converted into art galleries and bohemian coffee shops.',
        bestTime: '9:00 AM – 9:30 PM',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80'
      }
    ],
    authenticFood: [
      {
        name: 'Kerala Fish Curry Meals with Red Matta Rice',
        category: 'Main Course',
        desc: 'Fresh sea catch cooked in earthen pot with spicy kokum (Kudampuli), coconut milk, shallots, and curry leaves.',
        iconicSpots: ['Paragon Restaurant', 'Fusion Bay (Fort Kochi)'],
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Appam with Vegetable / Chicken Stew',
        category: 'Main Course',
        desc: 'Lacy, soft fermented rice pancakes with pillowy centers paired with mild coconut milk cardamom stew.',
        iconicSpots: ['Kashi Art Cafe', 'Grand Pavilion'],
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Banana Chips & Halwa fried in Pure Coconut Oil',
        category: 'Street Food',
        desc: 'Freshly sliced raw Nendran plantains fried in sizzling virgin coconut oil right before your eyes.',
        iconicSpots: ['A-One Chips (Ernakulam Broadway)', 'Calicut Halwa Market'],
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'
      }
    ],
    heritageRestaurants: [
      {
        name: 'Kashi Art Cafe (Burgher St, Fort Kochi)',
        cuisine: 'Artisan Cafe & Organic Kerala Continental',
        priceRange: '₹800 for two',
        mustTry: 'Organic French Toast & Dark Chocolate Fudge Cake',
        bookingPlatform: 'Zomato'
      },
      {
        name: 'Malabar Junction at Malabar House',
        cuisine: 'Gourmet Kerala Seafood & Wine Pairing',
        priceRange: '₹3,200 for two',
        mustTry: 'Tiger Prawns in Fresh Coconut Green Pepper Curry',
        bookingPlatform: 'Direct'
      },
      {
        name: 'Old Harbour Hotel Restaurant',
        cuisine: 'Garden Al Fresco Seafood Grill',
        priceRange: '₹2,500 for two',
        mustTry: 'Catch of the day grilled with Malabar spices',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Authentic Kathakali Makeup & Evening Performance at Kerala Kathakali Centre',
        duration: '2.5 Hours',
        priceEstimate: '₹500 per person',
        desc: 'Arrive 1 hour early to watch the artists apply traditional mineral makeup before the classical performance.',
        category: 'Classical Theatre'
      },
      {
        title: 'Sunset Backwater Houseboat Cruise through Alleppey Canals',
        duration: '4 Hours',
        priceEstimate: '₹2,000 per couple',
        desc: 'Glide past swaying palms, paddy fields, and duck farms with hot banana fritters and chai served on board.',
        category: 'Backwater Journey'
      },
      {
        title: 'Kalaripayattu Ancient Martial Arts Demonstration',
        duration: '1 Hour',
        priceEstimate: '₹400 per person',
        desc: 'Witness warriors leap through flaming hoops and spar with flexible swords (Urumi).',
        category: 'Martial Heritage'
      }
    ],
    nearbyAttractions: [
      { name: 'Alappuzha (Alleppey) Backwaters & Punnamada Lake', distanceKm: 53, desc: 'The Venice of the East with famous houseboat cruises and snake boat races.' },
      { name: 'Munnar Tea Plantations & Eravikulam', distanceKm: 130, desc: 'Misty Western Ghats hill station with lush tea estates and Nilgiri Tahr.' },
      { name: 'Athirappilly & Vazhachal Waterfalls', distanceKm: 70, desc: 'The Niagara of India cascading 80 feet down dense rainforests.' }
    ]
  },
  {
    id: 'puri',
    name: 'Puri & Konark (The Holy Coastal Realm)',
    state: 'Odisha',
    tagline: 'Lord Jagannath’s Sacred Abode, Golden Sands & The Konark Sun Temple Chariot',
    bannerImage: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'One of the Char Dham sacred pilgrimage destinations in Hinduism, Puri sits on the Bay of Bengal coast. Renowned for the 12th-century Jagannath Temple, the annual Rath Yatra chariot festival, and the nearby UNESCO Konark Sun Temple.',
    latitude: 19.8135,
    longitude: 85.8312,
    airport: 'Biju Patnaik International Airport (BBI), Bhubaneswar (60 km)',
    railwayStation: 'Puri Railway Station (PURI)',
    festivalIds: ['rath-yatra'],
    monumentIds: ['konark-sun-temple'],
    religiousSites: [
      {
        name: 'Shree Jagannath Temple (Puri)',
        type: 'Hindu Char Dham Shrine',
        desc: 'Towering 12th-century temple where Lord Jagannath, Balabhadra, and Subhadra are worshipped. Renowned for its mysterious wind-defying flag.',
        image: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Gundicha Temple (Garden House of Jagannath)',
        type: 'Hindu Mandir',
        desc: 'The destination sanctuary where the deities reside during the 9-day Rath Yatra in a serene walled garden.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Konark Archaeological Museum (ASI)',
        timing: '9:00 AM – 5:00 PM (Closed Fridays)',
        highlight: 'Houses 860 exquisite sandstone sculptures recovered from the Sun Temple complex.',
        image: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Mahaprasad Anand Bazaar sacred community eating', 'Puri Golden Beach Sand Art sculptures by Sudarsan Pattnaik', 'Gotipua acrobatic dance tradition'],
      handicrafts: ['Raghurajpur Pattachitra Palm Leaf Painting', 'Pipili Applique Lanterns & Umbrellas', 'Silver Filigree (Tarakasi)'],
      folkArt: ['Jhoti Chhita rice flour floor art', 'Wooden Jagannath miniature carvings'],
      danceForms: ['Odissi (One of the oldest surviving classical dance forms)', 'Chhau Martial Dance']
    },
    heritageStreets: [
      {
        name: 'Bada Danda (Grand Road)',
        famousFor: 'The historic broad chariot route lined with ashrams, sweet stalls, and mathas.',
        bestTime: '7:00 AM – 9:00 PM',
        image: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Raghurajpur Heritage Crafts Village (14 km)',
        famousFor: 'Every household in this village is an artisan studio creating Pattachitra scrolls and palm-leaf manuscripts.',
        bestTime: '9:30 AM – 5:30 PM',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80'
      }
    ],
    authenticFood: [
      {
        name: 'Mahaprasad (Chhappan Bhog) from Jagannath Temple Kitchen',
        category: 'Main Course',
        desc: 'Cooked in earthen pots stacked 7 levels high over woodfires where only the top pot cooks first, offered with pure ghee and no onions/garlic.',
        iconicSpots: ['Anand Bazaar inside Jagannath Temple'],
        image: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Chhena Poda (Caramelized Baked Cottage Cheese)',
        category: 'Sweets',
        desc: 'Odisha’s signature dessert made by baking fresh chhena and cardamom in sal leaves until a golden caramelized crust forms.',
        iconicSpots: ['Balaram Sweets (Bada Danda)', 'Nimapada Sweet Outlets'],
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Khaja from Kakatu',
        category: 'Sweets',
        desc: 'Multi-layered flaky crisp sweet fritters dipped in sugar syrup, offered as dry prasad for centuries.',
        iconicSpots: ['Nrusimha Sweets & Kakatu Khaja (Temple Road)'],
        image: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=600&q=80'
      }
    ],
    heritageRestaurants: [
      {
        name: 'Wildgrass Restaurant (VIP Road, Puri)',
        cuisine: 'Authentic Odia Thali & Coastal Seafood',
        priceRange: '₹900 for two',
        mustTry: 'Odia Pakhala Bhata & Crab Kassa',
        bookingPlatform: 'Zomato'
      },
      {
        name: 'Chanakya BNR Heritage Hotel Dining Room',
        cuisine: 'British Railway Heritage & Odia Cuisine',
        priceRange: '₹1,500 for two',
        mustTry: 'Railway Mutton Curry & Fresh Bay of Bengal Pomfret',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Konark Sun Temple Sunrise & Marine Drive Cycling',
        duration: '4 Hours',
        priceEstimate: '₹700 per person',
        desc: 'Ride along the scenic Puri-Konark Marine Drive through casuarina forests to watch the sun rise upon the Sun Temple.',
        category: 'Eco & Heritage'
      },
      {
        title: 'Raghurajpur Crafts Village Masterclass in Pattachitra',
        duration: '3 Hours',
        priceEstimate: '₹1,000 per person',
        desc: 'Sit with a National Award-winning Chitrakar to paint a miniature Lord Jagannath on dried palm leaves using stone pigments.',
        category: 'Artisanal Workshop'
      },
      {
        title: 'Chilika Lake Dolphin Safari & Irrawaddy Dolphins (Satapada)',
        duration: '5 Hours',
        priceEstimate: '₹1,800 per boat',
        desc: 'Cruise Asia’s largest brackish water lagoon to spot rare Irrawaddy dolphins and migratory Siberian birds.',
        category: 'Wildlife Sanctuary'
      }
    ],
    nearbyAttractions: [
      { name: 'Konark Sun Temple UNESCO World Heritage', distanceKm: 35, desc: 'Colossal 13th-century stone chariot sundial.' },
      { name: 'Chilika Lake (Satapada Dolphin Point)', distanceKm: 50, desc: 'Brackish water lagoon habitat of Irrawaddy dolphins.' },
      { name: 'Bhubaneswar Temple City (Lingaraj & Mukteshvara)', distanceKm: 60, desc: 'Ancient city of 500 Kalinga-style sandstone temples.' }
    ]
  },
  {
    id: 'amritsar',
    name: 'Amritsar (The Golden Heart of Punjab)',
    state: 'Punjab',
    tagline: 'Harmandir Sahib, Revered History, Wagah Border Patriotism & Legendary Kulchas',
    bannerImage: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'Founded in 1577 by Guru Ram Das Ji, Amritsar is the spiritual and cultural nexus of Sikhism. Sits around the sacred Amrit Sarovar (Pool of Nectar) with the shining Golden Temple, monumental Partition history, and Punjab’s warmest hospitality.',
    latitude: 31.6340,
    longitude: 74.8723,
    airport: 'Sri Guru Ram Dass Jee International Airport (ATQ)',
    railwayStation: 'Amritsar Junction (ASR)',
    festivalIds: ['hola-mohalla'],
    monumentIds: ['golden-temple'],
    religiousSites: [
      {
        name: 'Sri Harmandir Sahib (The Golden Temple)',
        type: 'Gurdwara',
        desc: 'The holiest Sikh shrine surrounded by the holy nectar pool, covered in gold leaf.',
        image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Durgiana Temple (Lakshmi Narayan Mandir)',
        type: 'Hindu Mandir',
        desc: 'Stunning temple built in the center of a sacred lake resembling the Golden Temple architecture.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Gurdwara Baba Atal Rai',
        type: 'Octagonal Sikh Shrine',
        desc: 'A striking 9-story octagonal tower commemorating the 9-year-old son of Guru Hargobind Ji with historic murals.',
        image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'The Partition Museum (Town Hall)',
        timing: '10:00 AM – 6:00 PM (Closed Mondays)',
        highlight: 'The world’s first museum dedicated to the 1947 Partition, featuring oral histories, refugee artifacts, and memory trees.',
        image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Central Sikh Museum (Inside Golden Temple Complex)',
        timing: '7:00 AM – 8:00 PM Daily',
        highlight: 'Portraits of Sikh Gurus, ancient manuscripts, weaponry, and coins from the Sikh Empire of Maharaja Ranjit Singh.',
        image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Langar Seva (Selfless service cooking and cleaning)', 'Rehras Sahib evening prayer listening by the Sarovar', 'Gatka martial sword fencing'],
      handicrafts: ['Phulkari Hand-Embroidered Dupattas & Shawls', 'Punjabi Jutti Footwear with Tilla Zari work', 'Brass and Copper Kitchenware from Jandiala Guru (UNESCO Intangible Craft)'],
      folkArt: ['Sanjhi festive wall murals', 'Sikh miniature paintings'],
      danceForms: ['Bhangra (Energetic harvest dance)', 'Giddha (Women’s clapping and singing dance)']
    },
    heritageStreets: [
      {
        name: 'Heritage Street (Town Hall to Golden Temple)',
        famousFor: 'Pedestrianized terracotta-toned promenade with grand statues, Sikh architecture, and kulcha stalls.',
        bestTime: 'Open 24/7 (Best at 7:00 PM for illuminations)',
        image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Katra Jaimal Singh & Hall Bazaar',
        famousFor: 'Authentic Phulkari textiles, dry fruits from Afghanistan, and handcrafted Punjabi juttis.',
        bestTime: '11:00 AM – 8:30 PM',
        image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=600&q=80'
      }
    ],
    authenticFood: [
      {
        name: 'Amritsari Chur Chur Kulcha with Chole',
        category: 'Main Course',
        desc: 'Crispy, multi-layered tandoori bread stuffed with spiced potato and paneer, crushed with hands and drenched in butter, served with tangy imli chutney and chickpea curry.',
        iconicSpots: ['Bhai Kulwant Singh Kulchian Wale', 'Bhaiya Kulcha (Maqbool Road)', 'Ashok Kulcha'],
        image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Kesar Da Dhaba Dal Makhani & Phirni',
        category: 'Main Course',
        desc: 'Dal simmered for 12 hours over slow coal flames and tempered with pure desi ghee since 1916.',
        iconicSpots: ['Kesar Da Dhaba (Chowk Passian)'],
        image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Ahuja Creamy Peda Lassi',
        category: 'Beverage',
        desc: 'Thick rich sweet curd blended with mawa peda and topped with rabri layer.',
        iconicSpots: ['Ahuja Milk Center (near Hindu College)'],
        image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=600&q=80'
      }
    ],
    heritageRestaurants: [
      {
        name: 'Kesar Da Dhaba (Since 1916)',
        cuisine: 'Iconic Punjabi Vegetarian Dhaba',
        priceRange: '₹500 for two',
        mustTry: 'Maa Ki Dal, Lachha Paratha & Kesar Phirni',
        bookingPlatform: 'Zomato'
      },
      {
        name: 'Beera Chicken House (Majitha Road)',
        cuisine: 'Tandoori Roasted Non-Veg Heritage',
        priceRange: '₹600 for two',
        mustTry: 'Whole Tandoori Chicken marinated in whole spices',
        bookingPlatform: 'Zomato'
      }
    ],
    localActivities: [
      {
        title: 'Wagah Border Beating Retreat Ceremony (India-Pakistan Border)',
        duration: '4 Hours (Afternoon Excursion)',
        priceEstimate: 'Free (Cab fare ₹1,200 – ₹1,500 return)',
        desc: 'Watch Border Security Force (BSF) guards execute high-kick drill maneuvers to thunderous patriotic cheers at sunset.',
        category: 'National Heritage'
      },
      {
        title: 'Midnight Palki Sahib Ceremony at Harmandir Sahib',
        duration: '2 Hours (10:00 PM – 11:30 PM)',
        priceEstimate: 'Free (All welcome)',
        desc: 'Witness the holy Guru Granth Sahib carried in a golden palanquin from the sanctum to the Akal Takht for the night.',
        category: 'Spiritual Heritage'
      },
      {
        title: 'Langar Community Kitchen Voluntary Seva',
        duration: '1.5 Hours',
        priceEstimate: 'Free Volunteerism',
        desc: 'Join volunteers in rolling rotis or serving dal in the world’s largest mega-kitchen that feeds 100,000 pilgrims daily.',
        category: 'Community Seva'
      }
    ],
    nearbyAttractions: [
      { name: 'Jallianwala Bagh National Memorial', distanceKm: 0.4, desc: 'Historic garden memorial site of the 1919 massacre with bullet marks preserved on walls.' },
      { name: 'Gobindgarh Fort & Toshakhana', distanceKm: 2.5, desc: '18th-century fortress of Maharaja Ranjit Singh with coin museum and 7D show.' },
      { name: 'Wagah Border (Attari)', distanceKm: 30, desc: 'International border crossing with daily military flag lowering ceremony.' }
    ]
  },
  {
    id: 'agra',
    name: 'Agra (The Mughal Throne)',
    state: 'Uttar Pradesh',
    tagline: 'Home of the Taj Mahal, Agra Fort, Fatehpur Sikri & Awadhi-Mughlai Flavors',
    bannerImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    overview: 'The golden capital of the Mughal Empire under Akbar, Jahangir, and Shah Jahan. Home to three UNESCO World Heritage Sites: the Taj Mahal, Agra Fort, and the deserted red sandstone ghost city of Fatehpur Sikri.',
    latitude: 27.1767,
    longitude: 78.0081,
    airport: 'Agra Airport (AGR) / IGI Airport Delhi (200 km via Yamuna Expressway)',
    railwayStation: 'Agra Cantt (AGC) - Gatimaan Express connects from Delhi in 100 mins',
    festivalIds: ['taj-mahotsav'],
    monumentIds: ['taj-mahal'],
    religiousSites: [
      {
        name: 'Jama Masjid (Agra)',
        type: 'Mughal Mosque',
        desc: '17th-century red sandstone mosque built by Shah Jahan in honor of his beloved eldest daughter Jahanara Begum.',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Guru Ka Taal Gurdwara',
        type: 'Sikh Heritage',
        desc: 'Historic Gurdwara where Ninth Sikh Guru Tegh Bahadur Ji offered his voluntary arrest to Mughal Emperor Aurangzeb in 1675.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80'
      }
    ],
    museums: [
      {
        name: 'Taj Museum (Inside Taj Mahal Complex Western Naubat Khana)',
        timing: '10:00 AM – 5:00 PM (Closed Fridays)',
        highlight: 'Original Mughal architectural drawings of Taj Mahal, celadon jade plates that split if food is poisoned, and gold coins.',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80'
      }
    ],
    localCulture: {
      traditions: ['Pietra Dura (Parchin Kari) marble gemstone inlaying', 'Zardozi heavy gold and silver wire embroidery', 'Leather shoemaking craftsmanship'],
      handicrafts: ['Makrana Marble Inlaid Table Tops & Coasters', 'Zardozi Velvet Wall Hangings', 'Brass Lamps and Artifacts'],
      folkArt: ['Braj Raas Leela folk performances', 'Mughal miniature paintings'],
      danceForms: ['Kathak (Classical court style)', 'Mayur Nritya (Peacock dance)']
    },
    heritageStreets: [
      {
        name: 'Kinari Bazaar & Sadar Bazaar',
        famousFor: 'Bridal Zardozi textiles, silver ornaments, marble inlay souvenirs, and street food stalls.',
        bestTime: '11:00 AM – 9:00 PM',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80'
      }
    ],
    authenticFood: [
      {
        name: 'Authentic Agra Petha (Angoori & Kesar)',
        category: 'Sweets',
        desc: 'Translucent soft candy made from winter ash gourd (pumpkin), flavored with saffron, rosewater, or chocolate.',
        iconicSpots: ['Original Panchhi Petha (Hari Parwat & Sadar Bazaar)'],
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Bedmi Puri with Spicy Aloo Jhol & Jalebi',
        category: 'Street Food',
        desc: 'Crisp urad-dal stuffed wholewheat fried puris served with fenugreek spiced potato curry and curd.',
        iconicSpots: ['Deviram Sweets & Confectioners (Pratap Pura)'],
        image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Mughlai Mutton Galouti Kebab & Mughlai Paratha',
        category: 'Main Course',
        desc: 'Silken, melt-in-mouth smoked lamb patties spiced with 32 secret spices, served with mint chutney.',
        iconicSpots: ['Pinch of Spice (Fatehabad Road)', 'Jahanpanah'],
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80'
      }
    ],
    heritageRestaurants: [
      {
        name: 'Pinch of Spice (Fatehabad Road)',
        cuisine: 'Mughlai & North Indian Gourmet',
        priceRange: '₹1,600 for two',
        mustTry: 'Murg Boti Masala & Dal Makhani',
        bookingPlatform: 'Zomato'
      },
      {
        name: 'The Mughal Room at Grand Imperial Heritage Hotel',
        cuisine: 'Royal Mughlai & Nawabi Recipes',
        priceRange: '₹2,200 for two',
        mustTry: 'Shahi Murgh Dum Biryani',
        bookingPlatform: 'Direct'
      }
    ],
    localActivities: [
      {
        title: 'Mehtab Bagh Moonlight Taj View across River Yamuna',
        duration: '2 Hours',
        priceEstimate: '₹25 (Indian) / ₹300 (Foreign)',
        desc: 'Sit in the Mughal charbagh garden directly opposite the Taj Mahal at sunset for the perfect reflection photography without crowds.',
        category: 'Sunset Photography'
      },
      {
        title: 'Fatehpur Sikri Imperial City & Buland Darwaza Day Excursion',
        duration: '4 Hours',
        priceEstimate: '₹50 entry + cab',
        desc: 'Explore Emperor Akbar’s magnificent red sandstone capital and the 54-meter high Gateway of Magnificence.',
        category: 'UNESCO City Tour'
      }
    ],
    nearbyAttractions: [
      { name: 'Fatehpur Sikri UNESCO Heritage Capital', distanceKm: 37, desc: 'Akbar’s preserved 16th-century ghost city with Buland Darwaza and Salim Chishti Dargah.' },
      { name: 'Agra Fort (UNESCO World Heritage)', distanceKm: 2.5, desc: 'Massive red sandstone fortress containing the Jahangiri Mahal and Shah Jahan’s prison tower.' },
      { name: 'Mathura & Vrindavan Krishna Heritage', distanceKm: 55, desc: 'Birthplace of Lord Krishna with ancient temple ghats.' }
    ]
  }
];

export const CITIES_DATA: CityDestination[] = [
  ...BASE_CITIES_DATA,
  ...EXTRA_CITIES_DATA,
  ...REGIONAL_CITIES_DATA,
  ...MORE_REGIONAL_CITIES_DATA
];
