import { StateData } from '../types';

export const STATES_DATA: StateData[] = [
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    capital: 'Jaipur',
    region: 'North',
    bannerImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=80',
    culturalSummary: 'The Land of Maharajas, colossal hill forts, desert caravans, puppet theatre, and vibrant block-printed textiles.',
    famousFor: ['Hill Forts & Havelis', 'Royal Palaces', 'Desert Festivals', 'Ghoomar Dance', 'Dal Baati Churma', 'Blue Pottery'],
    cities: ['jaipur', 'jodhpur', 'udaipur', 'pushkar', 'jaisalmer'],
    featuredFestivals: ['pushkar-fair', 'makar-sankranti', 'braj-holi']
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    capital: 'Lucknow',
    region: 'North',
    bannerImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80',
    culturalSummary: 'The spiritual heartland along the Ganges & Yamuna, home to the Taj Mahal, ancient Kashi, Braj Krishna heritage, and royal Awadhi Nawabi court arts.',
    famousFor: ['Taj Mahal & Mughal Forts', 'Sacred Ganges Ghats', 'Braj Leela & Kathak', 'Awadhi Kebabs & Biryani', 'Chikankari Embroidery', 'Banarasi Silk'],
    cities: ['varanasi', 'agra', 'lucknow', 'mathura', 'vrindavan', 'ayodhya'],
    featuredFestivals: ['dev-deepawali', 'braj-holi', 'taj-mahotsav', 'janmashtami']
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    capital: 'Kolkata',
    region: 'East',
    bannerImage: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1600&q=80',
    culturalSummary: 'The cultural Renaissance capital of India with literary cafes, colonial architecture, terracotta temples, Rabindra Sangeet, and the world’s grandest public art carnival.',
    famousFor: ['Durga Puja Art Pandals', 'Victoria Memorial & Howrah Bridge', 'Terracotta Temples of Bishnupur', 'Sweets (Rasgulla & Sandesh)', 'Baul Folk Music', 'Kolkata Tram Heritage'],
    cities: ['kolkata', 'darjeeling', 'bishnupur'],
    featuredFestivals: ['durga-puja', 'rath-yatra']
  },
  {
    id: 'kerala',
    name: 'Kerala',
    capital: 'Thiruvananthapuram',
    region: 'South',
    bannerImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80',
    culturalSummary: 'God’s Own Country renowned for tranquil palm backwaters, Ayurvedic wellness, Kathakali dance-theatre, spice routes, and colossal snake boat races.',
    famousFor: ['Backwater Houseboats', 'Kathakali & Theyyam', 'Snake Boat Regattas', 'Ayurveda & Spices', 'Onasadya Banana Leaf Feast', 'Colonial Fort Kochi'],
    cities: ['kochi', 'alappuzha', 'thiruvananthapuram', 'thrissur'],
    featuredFestivals: ['onam-kerala', 'thrissur-pooram']
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    capital: 'Bengaluru',
    region: 'South',
    bannerImage: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=1600&q=80',
    culturalSummary: 'Home of the medieval Vijayanagara boulder capital Hampi, opulent Mysore royal palaces, Hoysala stone lace carvings, and filter coffee plantations.',
    famousFor: ['Hampi UNESCO Ruins', 'Mysore Royal Palace & Silk', 'Belur-Halebidu Hoysala Temples', 'Yakshagana Dance Drama', 'Mysore Pak & Bisi Bele Bath', 'Coorg Coffee Estates'],
    cities: ['hampi', 'mysore', 'bengaluru', 'badami'],
    featuredFestivals: ['mysore-dasara', 'hampi-utsav']
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    capital: 'Gandhinagar',
    region: 'West',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    culturalSummary: 'A vibrant heritage coast featuring UNESCO walled city architecture, intricate stepwells (Vavs), moonlit White Salt Desert, and exuberant Navratri Garba.',
    famousFor: ['Rann of Kutch White Desert', 'Rani ki Vav Stepwell', 'Navratri Garba Festivals', 'Ahmedabad Heritage Pols', 'Kutchi Embroidery & Bandhani', 'Gujarati Thali'],
    cities: ['ahmedabad', 'bhuj', 'vadodara'],
    featuredFestivals: ['rann-utsav', 'navratri-garba', 'makar-sankranti']
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    capital: 'Chennai',
    region: 'South',
    bannerImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80',
    culturalSummary: 'Cradle of ancient Dravidian architecture with towering Gopuram temples, Bharatanatyam classical dance, bronze casting, and aromatic Chettinad cuisine.',
    famousFor: ['Great Living Chola Temples', 'Meenakshi Amman Towered Gopurams', 'Mahabalipuram Shore Temples', 'Kanchipuram Silk Sarees', 'Carnatic Music Season', 'Chettinad Mansions'],
    cities: ['madurai', 'thanjavur', 'chennai', 'mahabalipuram'],
    featuredFestivals: ['pongal']
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    capital: 'Bhopal',
    region: 'Central',
    bannerImage: 'https://images.unsplash.com/photo-1600100397608-f010f4439c76?auto=format&fit=crop&w=1600&q=80',
    culturalSummary: 'The Heart of Incredible India boasting ancient Sanchi Buddhist stupas, UNESCO Khajuraho temples, Bhimbetka rock shelters, and tiger sanctuaries.',
    famousFor: ['Khajuraho Chandela Temples', 'Sanchi Great Buddhist Stupa', 'Gwalior Fort & Music Legacy', 'Bhimbetka Cave Paintings', 'Poha Jalebi & Dal Bafla', 'Chanderi & Maheshwari Weaves'],
    cities: ['khajuraho', 'bhopal', 'gwalior', 'ujjain'],
    featuredFestivals: ['khajuraho-dance']
  },
  {
    id: 'punjab',
    name: 'Punjab',
    capital: 'Chandigarh',
    region: 'North',
    bannerImage: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1600&q=80',
    culturalSummary: 'The fertile land of five rivers, celebrated for the sacred serenity of the Golden Temple, high-energy Bhangra beats, and legendary culinary generosity.',
    famousFor: ['Harmandir Sahib (Golden Temple)', 'Jallianwala Bagh Memorial', 'Wagah Border Beating Retreat', 'Hola Mohalla Martial Arts', 'Amritsari Kulcha & Lassi', 'Phulkari Embroidery'],
    cities: ['amritsar', 'chandigarh', 'anandpur-sahib'],
    featuredFestivals: ['hola-mohalla', 'baisakhi']
  },
  {
    id: 'odisha',
    name: 'Odisha',
    capital: 'Bhubaneswar',
    region: 'East',
    bannerImage: 'https://images.unsplash.com/photo-1609137144820-fd2b0c1692df?auto=format&fit=crop&w=1600&q=80',
    culturalSummary: 'Ancient Kalinga realm of maritime trade, iconic stone chariot temples at Konark, silver filigree craft, Odissi classical dance, and Lord Jagannath.',
    famousFor: ['Konark Sun Temple UNESCO', 'Puri Jagannath Temple & Beach', 'Kalinga Sandstone Temples', 'Pattachitra Scroll Painting', 'Cuttack Silver Filigree', 'Chhena Poda Dessert'],
    cities: ['puri', 'bhubaneswar', 'konark'],
    featuredFestivals: ['rath-yatra']
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    capital: 'Mumbai',
    region: 'West',
    bannerImage: 'https://images.unsplash.com/photo-1567591414240-e221a37c35e7?auto=format&fit=crop&w=1600&q=80',
    culturalSummary: 'The powerhouse state of Maratha hill fortresses, rock-cut Ajanta-Ellora caves, Bollywood glamour, and dynamic coastal metropolis energy.',
    famousFor: ['Ajanta & Ellora UNESCO Caves', 'Chhatrapati Shivaji Terminus & Forts', 'Ganesh Utsav Dhol-Tasha', 'Lavani Folk Dance', 'Vada Pav & Misal Pav', 'Paithani Sarees'],
    cities: ['mumbai', 'pune', 'aurangabad'],
    featuredFestivals: ['ganesh-chaturthi', 'janmashtami']
  },
  {
    id: 'nagaland',
    name: 'Nagaland',
    capital: 'Kohima',
    region: 'North-East',
    bannerImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    culturalSummary: 'The tranquil misty hills of 17 vibrant Naga warrior tribes celebrated for warrior folklore, handwoven tribal shawls, log drums, and untouched valleys.',
    famousFor: ['Hornbill Festival', 'Dzukou Valley Lily Treks', 'Tribal Morung Architecture', 'Kohima WWII War Cemetery', 'Smoked Pork & Bamboo Shoots', 'Naga Shawls & Beadwork'],
    cities: ['kohima', 'dimapur'],
    featuredFestivals: ['hornbill-festival']
  }
];
