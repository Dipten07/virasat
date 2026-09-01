import { Festival } from '../types';
import { ODISHA_FESTIVALS_DATA } from './festivals/odishaFestivals';
import { BENGAL_FESTIVALS_DATA } from './festivals/bengalFestivals';
import { TAMIL_FESTIVALS_DATA } from './festivals/tamilFestivals';
import { MAHARASHTRA_FESTIVALS_DATA } from './festivals/maharashtraFestivals';
import { KERALA_FESTIVALS_DATA } from './festivals/keralaFestivals';
import { RAJASTHAN_FESTIVALS_DATA } from './festivals/rajasthanFestivals';
import { NORTHEAST_FESTIVALS_DATA } from './festivals/northeastFestivals';

const BASE_FESTIVALS: Festival[] = [
  // January
  {
    id: 'makar-sankranti',
    name: 'Makar Sankranti & International Kite Festival',
    hindiName: 'मकर संक्रांति एवं अंतरराष्ट्रीय पतंग महोत्सव',
    monthId: 1,
    monthName: 'January',
    dateRange: 'Jan 14 – Jan 16',
    duration: '3 Days',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'The sky bursts into millions of colorful kites celebrating the sun transition with sesame sweets, bonfires, and river dips.',
    longDescription: 'Makar Sankranti marks the shift of the sun into Capricorn (Makara) and the end of winter solstice. The festival transforms entire city skylines, especially Ahmedabad and Jaipur, into vivid battlegrounds of kites with "Kai Po Che!" cheers echoing across rooftops.',
    culturalSignificance: 'One of the few ancient Indian festivals aligned with the solar cycle rather than lunar phases, symbolizing gratitude to the sun deity Surya for harvest abundance.',
    ritualHighlights: [
      'Rooftop kite battles from sunrise till midnight with lanterns (Tukkals)',
      'Holy dips at sacred river confluences in Prayagraj and Varanasi',
      'Preparation of Til-Gud laddoos and savory Khichdi with winter vegetables'
    ],
    keyActivities: ['Rooftop kite flying', 'River bank Aarti', 'Traditional sweet tasting', 'Heritage street night walks'],
    celebratedStates: ['gujarat', 'rajasthan', 'maharashtra', 'uttar-pradesh'],
    primaryDestinations: ['ahmedabad', 'jaipur', 'varanasi'],
    tags: ['Harvest', 'Cultural', 'Aerial Spectacle', 'Culinary Heritage'],
    bestExperienceSpot: 'Sabarmati Riverfront, Ahmedabad & Old City Rooftops, Jaipur'
  },
  {
    id: 'pongal',
    name: 'Pongal Harvest Heritage Festival',
    hindiName: 'पोंगल फसल महोत्सव',
    monthId: 1,
    monthName: 'January',
    dateRange: 'Jan 14 – Jan 17',
    duration: '4 Days',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Tamil Nadu’s multi-day thanksgiving harvest with overflowing earthen clay pots, kolam floor art, and temple rituals.',
    longDescription: 'Pongal is the quintessential Tamil harvest celebration spanning four days: Bhogi, Surya Pongal, Maatu Pongal, and Kaanum Pongal. Clay pots boil over fresh milk and jaggery to shouts of "Pongalo Pongal!".',
    culturalSignificance: 'A profound homage to nature, the Sun God, and cattle who enable agriculture across the fertile Cauvery basin.',
    ritualHighlights: [
      'Boiling sweet Sakkarai Pongal in painted earthenware outside homes',
      'Elaborate colored rice flour Kolam geometric patterns at doorsteps',
      'Decorating and honoring farm bullocks with painted horns and garlands'
    ],
    keyActivities: ['Kolam making workshops', 'Temple nadaswaram concerts', 'Village bullock fairs', 'Traditional feasts on banana leaves'],
    celebratedStates: ['tamil-nadu', 'kerala'],
    primaryDestinations: ['madurai', 'thanjavur', 'chennai'],
    tags: ['Harvest', 'Temple Heritage', 'Art & Craft', 'Folk Tradition'],
    bestExperienceSpot: 'Meenakshi Amman Temple & Village settlements around Madurai'
  },
  {
    id: 'rann-utsav',
    name: 'Rann Utsav (White Desert Festival)',
    hindiName: 'रण उत्सव - श्वेत मरुस्थल',
    monthId: 1,
    monthName: 'January',
    dateRange: 'Nov – Feb (Peak Jan Full Moon)',
    duration: 'Multi-Week Celebration',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'A moonlit carnival of folk music, Kutchi mirror embroidery, and camel caravans on the world’s largest salt desert.',
    longDescription: 'Set against the surreal, shimmering expanse of the Great Rann of Kutch, Rann Utsav brings together artisan villages, nomadic musicians, and royal tent hospitality under starlit and full-moon desert nights.',
    culturalSignificance: 'Preserves the rare indigenous handicrafts, Rogan painting, leathercraft, and Kutchi music traditions of Western Gujarat.',
    ritualHighlights: [
      'Moonlit camel cart safaris across the crystalline salt plains',
      'Live Gujarati and Sufi folk music by local bard troupes',
      'Artisanal workshops with Rogan and Ajrakh master weavers'
    ],
    keyActivities: ['Full moon salt walk', 'Handicraft village tours', 'Desert star gazing', 'Paramotoring over the white salt flat'],
    celebratedStates: ['gujarat'],
    primaryDestinations: ['bhuj', 'ahmedabad'],
    tags: ['Desert Carnival', 'Handicrafts', 'Full Moon', 'Folk Music'],
    bestExperienceSpot: 'Dhordo White Rann Camp, Kutch'
  },

  // February
  {
    id: 'khajuraho-dance',
    name: 'Khajuraho Classical Dance Festival',
    hindiName: 'खजुराहो शास्त्रीय नृत्य महोत्सव',
    monthId: 2,
    monthName: 'February',
    dateRange: 'Feb 20 – Feb 26',
    duration: '7 Days',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'World-renowned dancers perform Kathak, Bharatanatyam, and Odissi before the floodlit, sculpted 10th-century Chandela temples.',
    longDescription: 'Set in the shadow of UNESCO-listed Western Group of Temples, this open-air festival celebrates classical Indian art forms against the backdrop of intricately carved Nagara sandstone architecture.',
    culturalSignificance: 'Honors the sacred synthesis of dance, sculpture, and spiritual philosophy depicted on the Khajuraho temple facades.',
    ritualHighlights: [
      'Evening performances against illuminated Chitragupta and Vishvanatha temples',
      'Art exhibitions and interactive craft bazaars featuring Bundelkhand artisans',
      'Daily morning heritage walks through the Western and Eastern temple clusters'
    ],
    keyActivities: ['Classical dance recitals', 'Temple architectural photography', 'Sandstone sculpting workshops', 'Light & sound shows'],
    celebratedStates: ['madhya-pradesh'],
    primaryDestinations: ['khajuraho', 'bhopal'],
    tags: ['UNESCO Heritage', 'Classical Dance', 'Ancient Architecture', 'Spiritual Art'],
    bestExperienceSpot: 'Western Group Temple Grounds, Khajuraho'
  },
  {
    id: 'taj-mahotsav',
    name: 'Taj Mahotsav Cultural Carnivale',
    hindiName: 'ताज महोत्सव',
    monthId: 2,
    monthName: 'February',
    dateRange: 'Feb 18 – Feb 27',
    duration: '10 Days',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'A 10-day celebration of Mughal grandeur, classical music, marble craftsmanship, and authentic Awadhi-Mughlai street foods near the Taj Mahal.',
    longDescription: 'Organized near the eastern gate of the Taj Mahal at Shilpgram, Taj Mahotsav brings over 400 artisans from across India together with qawwalis, ghazals, and royal elephant processions.',
    culturalSignificance: 'Revives the vibrant 18th-century craft fairs of the Mughal era, championing Zardozi embroidery, marble inlay (Pietra Dura), and brassware.',
    ritualHighlights: [
      'Grand opening procession with caparisoned camels and folk dancers',
      'Live demonstrations of marble Pietra Dura inlay techniques',
      'Mughlai culinary feasts featuring Petha, Galouti kebabs, and Bedmi Puri'
    ],
    keyActivities: ['Mughal heritage walks', 'Night illumination viewing of Taj', 'Artisan shopping at Shilpgram', 'Ghazal evenings'],
    celebratedStates: ['uttar-pradesh'],
    primaryDestinations: ['agra', 'lucknow'],
    tags: ['Mughal Heritage', 'Handicrafts', 'Culinary Feasts', 'UNESCO Site'],
    bestExperienceSpot: 'Shilpgram Cultural Complex, Agra'
  },

  // March
  {
    id: 'braj-holi',
    name: 'Braj ki Holi & Lathmar Holi',
    hindiName: 'ब्रज की होली एवं लट्ठमार होली',
    monthId: 3,
    monthName: 'March',
    dateRange: 'Mar 13 – Mar 22',
    duration: '10 Days Cycle',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'The epic spiritual celebration of organic gulal, flowers, temple chants, and ancient playful traditions in Lord Krishna’s birthplace.',
    longDescription: 'In the sacred towns of Mathura, Vrindavan, Barsana, and Nandgaon, Holi is celebrated for over a week with Phoolon ki Holi (flower petals), Lathmar Holi, and clouds of scented herbal gulal filling temple courtyards.',
    culturalSignificance: 'Commemorates the eternal divine play (Leela) of Radha and Krishna and the arrival of the spring harvest.',
    ritualHighlights: [
      'Barsana women playfully striking shields of Nandgaon men with bamboo sticks',
      'Phoolon wali Holi with fragrant marigold and rose petals at Banke Bihari Temple',
      'Widow’s Holi in Vrindavan ashrams breaking centuries-old social taboos'
    ],
    keyActivities: ['Temple gulal showers', 'Chanting Samajik kirtans', 'Tasting fresh Thandai with saffron', 'Heritage Yamuna boat ride'],
    celebratedStates: ['uttar-pradesh', 'rajasthan'],
    primaryDestinations: ['mathura', 'vrindavan', 'agra', 'jaipur'],
    tags: ['Spiritual Energy', 'Spring Festival', 'Living Tradition', 'Temple Spectacle'],
    bestExperienceSpot: 'Radha Rani Temple (Barsana) & Banke Bihari (Vrindavan)'
  },
  {
    id: 'hola-mohalla',
    name: 'Hola Mohalla Martial Heritage',
    hindiName: 'होला मोहल्ला - आनंदपुर साहिब',
    monthId: 3,
    monthName: 'March',
    dateRange: 'Mar 15 – Mar 17',
    duration: '3 Days',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'A magnificent showcase of Sikh martial arts (Gatka), bareback horse-riding, kirtan poetry, and legendary 24/7 community langars.',
    longDescription: 'Established in 1701 by the Tenth Sikh Guru, Guru Gobind Singh Ji, Hola Mohalla is held at the historic Takht Sri Keshgarh Sahib in Anandpur Sahib. Nihang warrior Sikhs in electric blue robes demonstrate extraordinary courage.',
    culturalSignificance: 'Celebrates valor, defensive martial arts, egalitarianism, and spiritual fortitude.',
    ritualHighlights: [
      'Mock military battles and Gatka swordplay displays by Nihang warriors',
      'Tent-pegging and acrobatic horse-riding stunts across dust arenas',
      'Grand Guru ka Langar feeding hundreds of thousands of pilgrims regardless of faith'
    ],
    keyActivities: ['Martial arts demonstrations', 'Langar seva participation', 'Historic fort tours', 'Kirtan gatherings'],
    celebratedStates: ['punjab'],
    primaryDestinations: ['amritsar', 'chandigarh'],
    tags: ['Martial Heritage', 'Sikh Tradition', 'Equestrian Feats', 'Community Langar'],
    bestExperienceSpot: 'Takht Sri Keshgarh Sahib, Anandpur Sahib'
  },

  // April
  {
    id: 'thrissur-pooram',
    name: 'Thrissur Pooram - Mother of All Poorams',
    hindiName: 'त्रिशूर पूरम महोत्सव',
    monthId: 4,
    monthName: 'April',
    dateRange: 'Apr 28 – Apr 29',
    duration: '36 Hours Non-stop',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'A breathtaking spectacle of 250+ percussionists (Panchavadyam), caparisoned elephants, colorful parasol exchanges, and midnight fireworks.',
    longDescription: 'Founded by the Maharaja of Cochin Raja Rama Varma (Sakthan Thampuran) in the late 18th century, Thrissur Pooram centers around the majestic Vadakkunnathan Temple where two temple factions playfully compete.',
    culturalSignificance: 'Kerala’s pinnacle cultural festival uniting all communities in an awe-inspiring symphony of sound, color, and temple artistry.',
    ritualHighlights: [
      'The rhythmic thunder of Ilanjithara Melam featuring 250 traditional drummers',
      'Kudamattom: Rapid, synchronized exchange of brilliant silk parasols on elephant backs',
      'Spectacular earth-shaking midnight fireworks display (Vedikkettu)'
    ],
    keyActivities: ['Percussion orchestra listening', 'Elephant parasol viewing', 'Kerala Sadya feast', 'Temple architecture exploration'],
    celebratedStates: ['kerala'],
    primaryDestinations: ['kochi', 'thrissur', 'madurai'],
    tags: ['Temple Pageantry', 'Percussion Symphony', 'Royal Legacy', 'Visual Drama'],
    bestExperienceSpot: 'Thekkinkadu Maidan & Vadakkunnathan Temple, Thrissur'
  },
  {
    id: 'bihu-assam',
    name: 'Rongali Bihu Heritage Festival',
    hindiName: 'रोंगाली बिहू महोत्सव',
    monthId: 4,
    monthName: 'April',
    dateRange: 'Apr 14 – Apr 20',
    duration: '7 Days',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Assamese New Year celebrated with soulful buffalo-horn Pepa melodies, energetic Bihu folk dances, and traditional Pitha rice treats.',
    longDescription: 'Rongali (or Bohag) Bihu marks the onset of the agricultural calendar in Assam. Women in golden Muga silk sarees and youth with Dhol drums celebrate the rejuvenation of nature across the lush Brahmaputra valley.',
    culturalSignificance: 'A vibrant celebration of fertility, agricultural rejuvenation, and the timeless folk heritage of the Brahmaputra valley.',
    ritualHighlights: [
      'Goru Bihu: Worshipping and bathing cattle with turmeric and wild herbs',
      'Manuh Bihu: Offering Gamusa woven scarves of respect to elders and teachers',
      'Husori folk performance troupes dancing through residential courtyards'
    ],
    keyActivities: ['Bihu dance workshops', 'Brahmaputra sunset cruise', 'Tasting Til Pitha & Ghila Pitha', 'Kaziranga wildlife excursion'],
    celebratedStates: ['assam', 'meghalaya'],
    primaryDestinations: ['guwahati', 'kaziranga'],
    tags: ['Folk Dance', 'Assam Heritage', 'Harvest & New Year', 'Traditional Weaving'],
    bestExperienceSpot: 'Latasil Field & Srimanta Sankaradeva Kalakshetra, Guwahati'
  },

  // June
  {
    id: 'rath-yatra',
    name: 'Puri Jagannath Rath Yatra',
    hindiName: 'पुरी जगन्नाथ रथ यात्रा',
    monthId: 6,
    monthName: 'June',
    dateRange: 'Jun 25 – Jul 04',
    duration: '9 Days',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Over a million devotees pull towering 45-foot wooden chariots carrying Lord Jagannath, Balabhadra, and Subhadra along Puri’s Grand Road.',
    longDescription: 'The world’s oldest chariot festival allows all people, regardless of creed, to view the deities outside the sanctum. The King of Puri ritually sweeps the chariot platforms with a golden broom (Chera Panhara) in humility.',
    culturalSignificance: 'A profound testament to egalitarianism and Odia architectural craftsmanship; the massive wooden chariots are constructed anew every year from selected neem logs.',
    ritualHighlights: [
      'Chera Panhara: Gajapati King sweeping the chariot decks with fragrant sandal water',
      'Pulling the gigantic ropes of Nandighosha, Taladhwaja, and Darpadalana chariots',
      'Offering Mahaprasad cooked in earthen pots stacked in the world’s largest temple kitchen'
    ],
    keyActivities: ['Grand Road chariot darshan', 'Mahaprasad tasting', 'Sun Temple Konark day trip', 'Puri beach sand art viewing'],
    celebratedStates: ['odisha', 'west-bengal'],
    primaryDestinations: ['puri', 'bhubaneswar', 'kolkata'],
    tags: ['Chariot Festival', 'Living History', 'Coastal Heritage', 'Sacred Ritual'],
    bestExperienceSpot: 'Bada Danda (Grand Road) & Gundicha Temple, Puri'
  },
  {
    id: 'hemis-festival',
    name: 'Hemis Gompa Monastic Festival',
    hindiName: 'हेमिस गोम्पा महोत्सव (लद्दाख)',
    monthId: 6,
    monthName: 'June',
    dateRange: 'Jun 28 – Jun 30',
    duration: '3 Days',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Sacred Cham mask dances, long Tibetan horns, and the unrolling of giant silk thangkas inside Ladakh’s largest monastery.',
    longDescription: 'Celebrates the birth anniversary of Guru Padmasambhava (Lord Rinpoche). Lhas-pas (monks) in vibrant silk robes and terrifying deity masks perform ritual dances accompanied by cymbals, drums, and windpipes in high-altitude Ladakh.',
    culturalSignificance: 'Dating back to the 8th century, it depicts the triumph of good over evil and preserves Himalayan Mahayana Buddhist mysticism.',
    ritualHighlights: [
      'Sacred mystic Cham mask dances reenacting ancient Buddhist spiritual battles',
      'Display of the two-storey high silk and pearl embroidered Guru Padmasambhava Thangka',
      'Traditional Ladakhi butter tea and barley Tsampa offerings in the monastery courtyard'
    ],
    keyActivities: ['Monastery courtyard photography', 'Buddhist philosophy tour', 'High altitude pass exploration', 'Pangong Tso excursion'],
    celebratedStates: ['ladakh', 'jammu-kashmir'],
    primaryDestinations: ['leh', 'srinagar'],
    tags: ['Himalayan Heritage', 'Mask Dance', 'Buddhist Monastery', 'High Altitude'],
    bestExperienceSpot: 'Hemis Gompa Courtyard, Leh District, Ladakh'
  },

  // August
  {
    id: 'onam-kerala',
    name: 'Onam Harvest & Grand Boat Festival',
    hindiName: 'ओणम महोत्सव एवं नौका दौड़',
    monthId: 8,
    monthName: 'August',
    dateRange: 'Aug 25 – Sep 05',
    duration: '10 Days (Thiruvonam Peak)',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Welcoming the legendary King Mahabali with intricate flower rangolis (Pookkalam), 26-dish Onasadya feasts, and roaring snake-boat races.',
    longDescription: 'Onam is Kerala’s state festival celebrating prosperity, equality, and unity. The backwaters reverberate with the synchronized oars of 100-oarsmen snake boats (Chundan Vallams) singing Vanchipattu boat songs.',
    culturalSignificance: 'Commemorates the golden era of mythical King Mahabali when all people lived in harmony without injustice or discrimination.',
    ritualHighlights: [
      'Pookkalam: Designing concentric flower carpets with native petals outside homes',
      'Onasadya: Epic vegetarian banquet featuring 26 culinary delicacies served on plantain leaves',
      'Vallam Kali: Snake boat races on Punnamada Lake and Pamba River'
    ],
    keyActivities: ['Snake boat regatta viewing', 'Kathakali and Pulikali (Tiger dance) shows', 'Backwater heritage homestay', 'Spices market tour'],
    celebratedStates: ['kerala', 'tamil-nadu'],
    primaryDestinations: ['kochi', 'alappuzha', 'thiruvananthapuram'],
    tags: ['Backwaters', 'Grand Feast', 'Snake Boat Race', 'Floral Art'],
    bestExperienceSpot: 'Punnamada Lake (Alappuzha) & Mattancherry Heritage Quarter, Kochi'
  },
  {
    id: 'janmashtami',
    name: 'Krishna Janmashtami & Dahi Handi',
    hindiName: 'श्री कृष्ण जन्माष्टमी एवं दही हांडी',
    monthId: 8,
    monthName: 'August',
    dateRange: 'Aug 26 – Aug 28',
    duration: '3 Days',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Midnight birth celebrations with illuminated temples, Raas Leela folk ballets in Braj, and 8-tier human pyramids in Mumbai.',
    longDescription: 'Janmashtami marks the birth of Krishna with fasting, midnight temple aartis, and the heart-pounding daytime tradition of Dahi Handi, where daring Govinda troupes build 40-foot human towers to shatter curd pots.',
    culturalSignificance: 'Celebrates the philosophy of Karma Yoga and the divine youthful charm of Krishna described in the Bhagavad Gita.',
    ritualHighlights: [
      'Midnight Abhishekam of Krishna idols with Panchamrit and Tulsi water',
      'Dahi Handi human pyramids with thousands cheering across Mumbai and Pune squares',
      'Raas Leela classical musical theatre depicting Braj pastoral legends'
    ],
    keyActivities: ['Midnight temple darshan', 'Human pyramid spectating', 'Heritage sweet tasting (Makhan Mishri & Peda)', 'Ghat boat rides'],
    celebratedStates: ['uttar-pradesh', 'maharashtra', 'gujarat', 'rajasthan'],
    primaryDestinations: ['mathura', 'vrindavan', 'mumbai', 'varanasi'],
    tags: ['Spiritual Midnight', 'Human Pyramid', 'Braj Heritage', 'Devotional Music'],
    bestExperienceSpot: 'Krishna Janmabhoomi (Mathura) & Dadar/Thane squares (Mumbai)'
  },

  // September
  {
    id: 'ganesh-chaturthi',
    name: 'Ganesh Chaturthi Mahotsav',
    hindiName: 'गणेश चतुर्थी महोत्सव',
    monthId: 9,
    monthName: 'September',
    dateRange: 'Sep 07 – Sep 17',
    duration: '10 Days (Anant Chaturdashi Finale)',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Colossal Ganesha idols, electrifying Dhol-Tasha drum beats, community pandals, and the emotional sea immersions of Mumbai & Pune.',
    longDescription: 'Popularized as a mass public festival by freedom fighter Lokmanya Tilak in 1893, Ganesh Utsav unites millions. Giant art installations house idols like Lalbaugcha Raja, culminating in vibrant beach processions with shouts of "Ganpati Bappa Morya!".',
    culturalSignificance: 'Symbol of community solidarity, the arts, intellect, and the auspicious removal of obstacles.',
    ritualHighlights: [
      'Pranapratishtha pooja welcoming idols with Modak offerings and Vedic mantras',
      'Dhol-Tasha Pathak: Hundreds of youth performing synchronized traditional drumming',
      'Visarjan: Million-strong immersion processions at Girgaon Chowpatty and Arabian Sea beaches'
    ],
    keyActivities: ['Pandal hopping tour', 'Modak tasting (steamed Ukadiche Modak)', 'Visarjan beach walk', 'Heritage fort & wada tours'],
    celebratedStates: ['maharashtra', 'goa', 'karnataka', 'telangana'],
    primaryDestinations: ['mumbai', 'pune', 'hyderabad', 'goa'],
    tags: ['Grand Public Festival', 'Percussion Troupe', 'Coastal Immersion', 'Culinary Sweet'],
    bestExperienceSpot: 'Lalbaugcha Raja & Girgaon Chowpatty (Mumbai), Shreemant Dagdusheth Halwai (Pune)'
  },

  // October
  {
    id: 'durga-puja',
    name: 'Kolkata Durga Puja (UNESCO Intangible Cultural Heritage)',
    hindiName: 'कोलकाता दुर्गा पूजा (यूनेस्को अमूर्त सांस्कृतिक धरोहर)',
    monthId: 10,
    monthName: 'October',
    dateRange: 'Oct 09 – Oct 13',
    duration: '5 Core Days (Shasthi to Dashami)',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'The world’s largest open-air contemporary art carnival transforming Kolkata with thousands of architectural theme pandals, dhak beats, and culinary feasts.',
    longDescription: 'Inscribed on UNESCO’s Representative List of Intangible Cultural Heritage of Humanity, Durga Puja turns Kolkata into an immense museum of public art, craftsmanship, and community feasting celebrating the goddess’s triumph over Mahishasura.',
    culturalSignificance: 'Transcends religion to celebrate art, literature, craftsmanship, feminist empowerment, and Bengali cultural identity.',
    ritualHighlights: [
      'Dhunuchi Naach: Frenzied traditional clay-censer incense dance to thunderous Dhak beats',
      'Sindoor Khela on Bijoya Dashami: Married women smearing vermilion and greeting joyously',
      'All-night pandal hopping discovering temporary architectural marvels crafted by rural artisans'
    ],
    keyActivities: ['Heritage Rajbari & theme pandal trails', 'Street food crawl (Kathi rolls, Luchi Alur Dom, Mishti Doi)', 'Kumartuli idol makers studio walk', 'River Hooghly immersion boat ride'],
    celebratedStates: ['west-bengal', 'odisha', 'assam', 'tripura'],
    primaryDestinations: ['kolkata', 'puri', 'guwahati'],
    tags: ['UNESCO Intangible Heritage', 'Open Air Art', 'Culinary Mecca', 'Cultural Phenomenon'],
    bestExperienceSpot: 'Baghbazar, Maddox Square, Kumartuli & Heritage Rajbaris of North Kolkata'
  },
  {
    id: 'mysore-dasara',
    name: 'Mysore Royal Dasara (Nada Habba)',
    hindiName: 'मैसूर शाही दशहरा (नाड हब्बा)',
    monthId: 10,
    monthName: 'October',
    dateRange: 'Oct 03 – Oct 12',
    duration: '10 Days',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Over 100,000 golden bulbs illuminate the royal Mysore Palace, with the famous Jamboo Savari elephant procession carrying the golden Howdah.',
    longDescription: 'Inherited from the 14th-century Vijayanagara Empire, Mysore Dasara is celebrated with royal pomp by the Wadiyar dynasty. The grand finale features the lead elephant carrying a 750-kg solid gold idol of Goddess Chamundeshwari through decorated boulevards.',
    culturalSignificance: 'Commemorates the victory of warrior Goddess Chamundeshwari over the demon Mahishasura, from whom the city Mysore derives its name.',
    ritualHighlights: [
      'Illumination of Mysore Palace with 100,000 light bulbs at 7:00 PM every evening',
      'Jamboo Savari: Royal elephant procession accompanied by folk troupes and cavalry',
      'Torchlight Parade and equestrian displays at Bannimantap Grounds'
    ],
    keyActivities: ['Mysore Palace night photography', 'Chamundi Hill pilgrimage', 'Sandalwood & silk bazaar shopping', 'Mysore Pak sweet tasting'],
    celebratedStates: ['karnataka'],
    primaryDestinations: ['mysore', 'bengaluru', 'hampi'],
    tags: ['Royal Pageantry', 'Palace Illumination', 'Living Monarchy', 'Heritage Parade'],
    bestExperienceSpot: 'Mysore Palace Courtyard & Sayyaji Rao Road, Mysore'
  },
  {
    id: 'navratri-garba',
    name: 'Gujarat Navratri & Royal Garba',
    hindiName: 'गुजरात नवरात्रि एवं गरबा महोत्सव',
    monthId: 10,
    monthName: 'October',
    dateRange: 'Oct 03 – Oct 11',
    duration: '9 Nights',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'The world’s longest dance festival with thousands swirling in mirror-studded Chaniya Cholis to live folk orchestra and dandiya sticks until dawn.',
    longDescription: 'Navratri is an ecstatic nine-night folk dance extravaganza. Massive grounds in Vadodara and Ahmedabad host over 50,000 synchronized dancers moving in concentric circles around the sacred Garba lamp shrine.',
    culturalSignificance: 'Honors the cosmic feminine energy (Shakti) and represents the cyclical nature of time from birth to transcendence.',
    ritualHighlights: [
      'Sheri Garba: Traditional neighborhood circle dances around earthen lamps',
      'United Way of Baroda: 60,000 dancers moving in mesmerizing harmonic synchrony',
      'Midnight street feasts of Fafda, Jalebi, and spiced buttermilk (Chhaas)'
    ],
    keyActivities: ['Garba dance participation', 'Traditional Chaniya Choli shopping', 'Midnight food street trails', 'Heritage pol walks'],
    celebratedStates: ['gujarat', 'rajasthan'],
    primaryDestinations: ['ahmedabad', 'vadodara', 'jaipur'],
    tags: ['World Longest Dance Fest', 'Folk Costume', 'Concentric Circles', 'Nightlife Culture'],
    bestExperienceSpot: 'Lukshmi Vilas Palace grounds (Vadodara) & GMDC Ground (Ahmedabad)'
  },

  // November
  {
    id: 'dev-deepawali',
    name: 'Varanasi Dev Deepawali & Diwali of the Gods',
    hindiName: 'वाराणसी देव दीपावली (देवताओं की दिवाली)',
    monthId: 11,
    monthName: 'November',
    dateRange: 'Nov 15 (Kartik Purnima)',
    duration: '3 Days Extravaganza',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Over one million clay diyas light up all 84 crescent ghats of Kashi, reflecting across the Ganges as priests perform Maha Aarti.',
    longDescription: 'Celebrated on the full moon night of Kartik Purnima, 15 days after Diwali, it is believed the gods descend from heaven to bathe in the holy Ganges. The entire riverside transforms into a luminous staircase of fire and chants.',
    culturalSignificance: 'Marks Lord Shiva’s victory over the demon Tripurasura and honors departed martyrs along the eternal river.',
    ritualHighlights: [
      'Lighting one million oil lamps (Diyas) across every stone step of the 84 ghats',
      'Grand Maha Aarti at Dashashwamedh Ghat with multi-tiered brass lamps and conch shells',
      'Mesmerizing laser and sound show projecting the history of Kashi on Chet Singh Fort'
    ],
    keyActivities: ['Evening boat cruise along illuminated ghats', 'Maha Aarti viewing', 'Dawn sunrise boat ride to Assi Ghat', 'Heritage alleyway culinary tour'],
    celebratedStates: ['uttar-pradesh', 'bihar'],
    primaryDestinations: ['varanasi', 'ayodhya', 'prayagraj'],
    tags: ['One Million Diyas', 'Ancient Sacred River', 'Maha Aarti', 'Spiritual Capital'],
    bestExperienceSpot: 'Mid-river wooden bajra boat between Dashashwamedh and Assi Ghat, Varanasi'
  },
  {
    id: 'pushkar-fair',
    name: 'Pushkar Camel & Heritage Fair',
    hindiName: 'पुष्कर ऊंट मेला एवं सांस्कृतिक उत्सव',
    monthId: 11,
    monthName: 'November',
    dateRange: 'Nov 09 – Nov 15',
    duration: '7 Days',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Over 50,000 decorated camels, Rajasthani turban competitions, sacred lake dips, and hot air balloons over desert dunes.',
    longDescription: 'One of the world’s largest camel and livestock fairs combined with holy pilgrimage. Herders in crimson turbans and women in mirror-work lehengas trade livestock, enjoy folk music, and bathe in Pushkar’s sacred holy lake.',
    culturalSignificance: 'Centuries-old trading fair converging around the only prominent temple in the world dedicated to Lord Brahma.',
    ritualHighlights: [
      'Camel beauty contests with painted shear patterns, bead necklaces, and anklets',
      'Holy dip at Pushkar Sarovar during Kartik Purnima under the full moon',
      'Hot air ballooning floating above dunes and tent settlements at sunrise'
    ],
    keyActivities: ['Desert camel safari', 'Brahma Temple visit', 'Hot air balloon flight', 'Sunset view from Savitri Temple'],
    celebratedStates: ['rajasthan'],
    primaryDestinations: ['pushkar', 'jaipur', 'jodhpur', 'ajmer'],
    tags: ['Desert Livestock Fair', 'Rajasthani Folklore', 'Sacred Lake', 'Hot Air Ballooning'],
    bestExperienceSpot: 'Pushkar Mela Ground & Brahma Temple Ghats, Pushkar'
  },
  {
    id: 'hampi-utsav',
    name: 'Hampi Utsav (Vijaya Utsav)',
    hindiName: 'हम्पी उत्सव (विजयनगर सांस्कृतिक महोत्सव)',
    monthId: 11,
    monthName: 'November',
    dateRange: 'Nov 03 – Nov 05',
    duration: '3 Days',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Illuminated stone chariot, musical pillars, and classical music concerts amidst the surreal boulder ruins of the Vijayanagara Empire.',
    longDescription: 'Recreates the opulent glory of the medieval Vijayanagara Empire. UNESCO World Heritage ruins—monolithic shrines, elephant stables, and royal pavilions—are flooded with laser lights, classical music, and puppet shows.',
    culturalSignificance: 'Celebrates the artistic zenith of South Indian Dravidian empire that flourished between the 14th and 16th centuries.',
    ritualHighlights: [
      'Illumination of the Iconic Stone Chariot and Virupaksha Temple tower',
      'Jumboo Savari elephant march through the ancient monolithic market street',
      'Light and sound theatrical reenactments of King Krishnadevaraya’s court'
    ],
    keyActivities: ['Coracle boat ride on Tungabhadra River', 'Boulder climbing at sunset', 'Musical pillar acoustics tour', 'Cycling through royal enclosures'],
    celebratedStates: ['karnataka'],
    primaryDestinations: ['hampi', 'bengaluru', 'mysore'],
    tags: ['UNESCO World Heritage', 'Boulder Landscape', 'Medieval Empire', 'Dravidian Architecture'],
    bestExperienceSpot: 'Vittala Temple & Virupaksha Temple Complex, Hampi'
  },

  // December
  {
    id: 'hornbill-festival',
    name: 'Hornbill Festival (Festival of Festivals)',
    hindiName: 'हॉर्नबिल महोत्सव - नगालैंड',
    monthId: 12,
    monthName: 'December',
    dateRange: 'Dec 01 – Dec 10',
    duration: '10 Days',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: '17 indigenous Naga warrior tribes gather at Kisama Heritage Village for traditional war dances, log drumming, indigenous sports, and rock concerts.',
    longDescription: 'Named after the sacred Indian Hornbill bird revered in Naga folklore, the festival showcases the vibrant Morungs (tribal dormitories), warrior costumes, bamboo shooting, and culinary heritage of the Northeastern tribes.',
    culturalSignificance: 'Unites all Naga tribes to preserve ancestral oral traditions, warrior heritage, and indigenous crafts in the pristine hills.',
    ritualHighlights: [
      'Traditional warrior dances and synchronized war cries in ceremonial headdresses',
      'Naga King Chilli (Bhut Jolokia) eating competition and pork fat cooking',
      'Hornbill International Rock Concert lighting up the Kohima night sky'
    ],
    keyActivities: ['Tribal Morung visits', 'Naga craft & textile shopping', 'Dzukou Valley trek', 'World War II Cemetery homage'],
    celebratedStates: ['nagaland', 'assam', 'meghalaya'],
    primaryDestinations: ['kohima', 'guwahati'],
    tags: ['Naga Warrior Tribes', 'Tribal Culture', 'Northeast Heritage', 'Rock & Folklore'],
    bestExperienceSpot: 'Naga Heritage Village, Kisama (Kohima, Nagaland)'
  },

  // Additional Rich Indian Heritage Festivals
  {
    id: 'lohri-festival',
    name: 'Lohri Punjabi Harvest Festival',
    hindiName: 'लोहड़ी उत्सव - पंजाब',
    monthId: 1,
    monthName: 'January',
    dateRange: 'Jan 13',
    duration: '1 Evening',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Bonfires, rhythmic Dhol beats, Bhangra and Gidda folk dances, and sweet offerings of Rewri, Gajak, and roasted corn.',
    longDescription: 'Lohri is Punjab’s premier winter solstice and agricultural harvest celebration. Families gather around blazing sacred bonfires tossing sesame seeds, puffed rice, and jaggery while chanting traditional folklore praising Dulla Bhatti.',
    culturalSignificance: 'Marks the passing of the winter solstice and celebrates the bountiful harvest of Rabi crops in the fertile Punjab plains.',
    ritualHighlights: [
      'Circumambulating the sacred evening bonfire (Agni Parikrama) with family',
      'Singing traditional Dulla Bhatti folklore ballads and performing vigorous Bhangra',
      'Feasting on hot Makki di Roti and Sarson da Saag paired with fresh white butter'
    ],
    keyActivities: ['Bonfire dance circles', 'Folk music recitals', 'Winter Punjabi culinary tasting', 'Heritage village stays'],
    celebratedStates: ['punjab', 'delhi', 'haryana'],
    primaryDestinations: ['amritsar', 'chandigarh', 'delhi'],
    tags: ['Winter Solstice', 'Sacred Bonfire', 'Bhangra & Dhol', 'Punjabi Cuisine'],
    bestExperienceSpot: 'Heritage Havelis and Farms of Rural Amritsar'
  },
  {
    id: 'gangaur-rajasthan',
    name: 'Gangaur Royal Heritage Festival',
    hindiName: 'गणगौर उत्सव - राजस्थान',
    monthId: 3,
    monthName: 'March',
    dateRange: 'Mar 28 – Mar 30',
    duration: '3 Days',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Royal elephant and camel pageants carrying bejeweled wooden idols of Gauri through the Pink City gates and Udaipur palace ghats.',
    longDescription: 'Celebrates marital fidelity and spring harvest across Rajasthan. Women dressed in vibrant Rajasthani Poshaks balance brass Kalash pots on their heads while royal court bands, caparisoned elephants, and folk musicians escort the golden palanquin of Goddess Parvati (Gauri).',
    culturalSignificance: 'An ancient Mewar and Rajput royal festival honoring Shiva and Gauri’s divine union.',
    ritualHighlights: [
      'Grand royal Shobha Yatra procession emerging from the Tripoliya Gate of City Palace',
      'Traditional Ghoomar dance performances by royal court troupes',
      'Offering Ghewar and sweet kachoris to Goddess Gauri'
    ],
    keyActivities: ['Procession photography at City Palace', 'Ghoomar folk performances', 'Henna art workshops', 'Ghewar tasting'],
    celebratedStates: ['rajasthan'],
    primaryDestinations: ['jaipur', 'jodhpur', 'pushkar'],
    tags: ['Royal Pageant', 'Rajput Heritage', 'Ghoomar Dance', 'Spring Festivity'],
    bestExperienceSpot: 'Tripoliya Bazaar & City Palace, Jaipur'
  },
  {
    id: 'baisakhi-punjab',
    name: 'Baisakhi Spring Harvest & Khalsa Sajna Divas',
    hindiName: 'बैसाखी महोत्सव',
    monthId: 4,
    monthName: 'April',
    dateRange: 'Apr 13 – Apr 14',
    duration: '2 Days',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Golden wheat fields harvest celebration and sacred anniversary of the creation of Khalsa by Guru Gobind Singh Ji in 1699.',
    longDescription: 'A monumental cultural and spiritual milestone in North India. The Golden Temple shines in full splendor as hundreds of thousands take holy dips in the Amrit Sarovar, while rural Punjab erupts in high-energy Bhangra competitions and community feasts.',
    culturalSignificance: 'Commemorates both the Punjabi solar New Year harvest and the birth of the Khalsa Panth.',
    ritualHighlights: [
      'Nagar Kirtan procession led by the Panj Pyare carrying the sacred Nishan Sahib',
      'Grand Guru ka Langar serving hearty meals and sweet Kheer to all pilgrims',
      'Acrobatic Gatka martial arts displays in temple courtyards'
    ],
    keyActivities: ['Golden Temple holy dip', 'Langar volunteering', 'Gatka martial demonstrations', 'Rural agricultural fairs'],
    celebratedStates: ['punjab', 'delhi', 'haryana'],
    primaryDestinations: ['amritsar', 'chandigarh', 'delhi'],
    tags: ['Khalsa Anniversary', 'Harvest Festivity', 'Golden Temple', 'Community Service'],
    bestExperienceSpot: 'Sri Harmandir Sahib (Golden Temple), Amritsar'
  },
  {
    id: 'teej-rajasthan',
    name: 'Hariyali Teej & Royal Teej Mata Procession',
    hindiName: 'हरियाली तीज महोत्सव',
    monthId: 7,
    monthName: 'July',
    dateRange: 'Jul 26 – Jul 28',
    duration: '3 Days',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Monsoon swings hanging from banyan trees, green leheriya sarees, royal brass band processions, and sweet Malpua delights.',
    longDescription: 'Welcomes the arrival of monsoon rains in the desert state of Rajasthan. The gold and jewel-studded Teej Mata palanquin is carried through the Pink City lanes accompanied by dancers balancing brass lamps on their heads (Chari dance).',
    culturalSignificance: 'Dedicated to Goddess Parvati celebrating her reunion with Lord Shiva after penance.',
    ritualHighlights: [
      'Swinging on decorated flower-strewn swings (Jhulas) singing monsoon songs',
      'Grand Teej Mata procession from City Palace through Chaugan Stadium',
      'Women wearing emerald green Leheriya tie-and-dye attire and applying Henna'
    ],
    keyActivities: ['Procession viewing', 'Chari folk dance recitals', 'Ghewar tasting', 'Old city bazaar shopping'],
    celebratedStates: ['rajasthan', 'uttar-pradesh'],
    primaryDestinations: ['jaipur', 'mathura', 'vrindavan'],
    tags: ['Monsoon Festival', 'Royal Palanquin', 'Leheriya Sarees', 'Traditional Swings'],
    bestExperienceSpot: 'Chaugan Stadium & Tripoliya Gate, Jaipur'
  },
  {
    id: 'kullu-dussehra',
    name: 'Kullu Dussehra - Assembly of Hill Deities',
    hindiName: 'कुल्लू दशहरा - देव महाकुंभ',
    monthId: 10,
    monthName: 'October',
    dateRange: 'Oct 12 – Oct 18',
    duration: '7 Days',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Over 200 sacred village deities (Devtas) arrive in ornate wooden palanquins across Himalayan valleys to pay homage to Lord Raghunath.',
    longDescription: 'Unlike other Dussehra festivals that end on Vijayadashami, Kullu Dussehra begins on this day and runs for a week in the vast Dhalpur Maidan against snow-capped peaks. Huge wooden chariots are pulled by thousands of devotees with traditional Narsingha horn trumpets.',
    culturalSignificance: 'A 370-year-old tradition started in 1660 by Raja Jagat Singh of Kullu honoring the supreme regional deity Lord Raghunath.',
    ritualHighlights: [
      'Grand Rath Yatra pulling the towering wooden chariot across Dhalpur Maidan',
      'Divine assembly and consultations of hundreds of Devtas through village shamans (Gurs)',
      'Traditional Nati circular folk dance by thousands of Himachali dancers in woolen robes'
    ],
    keyActivities: ['Deity procession viewing', 'Nati folk dance participation', 'Kullu shawl handicraft shopping', 'Himalayan mountain trails'],
    celebratedStates: ['himachal-pradesh', 'punjab'],
    primaryDestinations: ['amritsar', 'chandigarh', 'delhi'],
    tags: ['Himalayan Deities', '370-Year Tradition', 'Nati Folk Dance', 'Sacred Palanquins'],
    bestExperienceSpot: 'Dhalpur Maidan, Kullu Valley, Himachal Pradesh'
  },
  {
    id: 'chhath-puja',
    name: 'Chhath Puja - Vedic Sun God Gratitude',
    hindiName: 'छठ पूजा - सूर्य षष्ठी महापर्व',
    monthId: 11,
    monthName: 'November',
    dateRange: 'Nov 05 – Nov 08',
    duration: '4 Days',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Thousands of devotees stand waist-deep in sacred river waters at sunset and sunrise offering bamboo baskets of Thekua and fruits to the Sun God.',
    longDescription: 'One of India’s most austere and ancient Vedic festivals. Spanning four rigorous days—Nahay Khay, Kharna, Sandhya Arghya, and Usha Arghya—devotees fast without a single drop of water, giving thanks to the life-giving Sun (Surya) and Chhathi Maiya.',
    culturalSignificance: 'A rare unbroken tradition dating to the Rigvedic era, exemplifying environmental reverence, equality, and deep spiritual discipline.',
    ritualHighlights: [
      'Sandhya Arghya: Offering milk and holy water to the setting sun from river ghats',
      'Usha Arghya: Joyous morning offerings to the rising sun amidst thousands of oil lamps',
      'Preparing sacred prasad Thekua made with whole wheat, ghee, and sugarcane jaggery'
    ],
    keyActivities: ['Ghat illumination photography', 'Subah boat ride during morning Arghya', 'Traditional Chhath song listening', 'Authentic Thekua tasting'],
    celebratedStates: ['bihar', 'uttar-pradesh', 'delhi'],
    primaryDestinations: ['varanasi', 'delhi', 'ayodhya'],
    tags: ['Vedic Sun Worship', 'Sacred River Ghats', 'River Arghya', 'Spiritual Austerity'],
    bestExperienceSpot: 'Ganga River Ghats, Varanasi & Patna'
  },
  {
    id: 'konark-dance-sand-art',
    name: 'Konark Dance Festival & International Sand Art',
    hindiName: 'कोणार्क नृत्य महोत्सव एवं अंतरराष्ट्रीय रेत कला',
    monthId: 12,
    monthName: 'December',
    dateRange: 'Dec 01 – Dec 05',
    duration: '5 Days',
    bannerImage: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Eminent classical dancers perform Odissi, Bharatanatyam, and Kathak against the floodlit 13th-century Sun Temple stone chariot.',
    longDescription: 'Held simultaneously with the International Sand Art Festival at the nearby golden sands of Chandrabhaga Beach. Master sculptors carve giant sand figures while the open-air auditorium at the Sun Temple resonates with classical rhythms.',
    culturalSignificance: 'Celebrates Odisha’s rich Odissi dance legacy and temple architectural heritage by the Bay of Bengal.',
    ritualHighlights: [
      'Evening Odissi classical dance recitals in front of the illuminated Natya Mandap',
      'Intricate master sand sculptures on Chandrabhaga beach facing ocean waves',
      'Odia handloom and Silver Filigree (Tarakasi) artisan exhibitions'
    ],
    keyActivities: ['Classical dance viewing', 'Beach sand art walking tour', 'Pattachitra painting workshops', 'Odia seafood feasts'],
    celebratedStates: ['odisha', 'west-bengal'],
    primaryDestinations: ['puri', 'kolkata'],
    tags: ['UNESCO Sun Temple', 'Odissi Classical Dance', 'Sand Art', 'Bay of Bengal'],
    bestExperienceSpot: 'Sun Temple Open-Air Stage & Chandrabhaga Beach, Konark'
  }
];

// Combine all regional and national festivals, ensuring unique festival IDs
const ALL_COMBINED_FESTIVALS: Festival[] = [
  ...ODISHA_FESTIVALS_DATA,
  ...BENGAL_FESTIVALS_DATA,
  ...TAMIL_FESTIVALS_DATA,
  ...MAHARASHTRA_FESTIVALS_DATA,
  ...KERALA_FESTIVALS_DATA,
  ...RAJASTHAN_FESTIVALS_DATA,
  ...NORTHEAST_FESTIVALS_DATA,
  ...BASE_FESTIVALS
];

const seenIds = new Set<string>();
export const FESTIVALS_DATA: Festival[] = ALL_COMBINED_FESTIVALS.filter((f) => {
  if (seenIds.has(f.id)) return false;
  seenIds.add(f.id);
  return true;
});

