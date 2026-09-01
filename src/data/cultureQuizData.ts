import { CultureQuizQuestion, QuizCategoryMeta } from '../types';

export const QUIZ_CATEGORIES: QuizCategoryMeta[] = [
  {
    id: 'all',
    name: 'All Categories',
    hindiName: 'समग्र संस्कृति',
    description: 'A comprehensive grand master challenge encompassing all facets of Indian heritage.',
    iconName: 'Sparkles',
    color: '#8A3324'
  },
  {
    id: 'monuments',
    name: 'Monuments & Architecture',
    hindiName: 'स्थापत्य व स्मारक',
    description: 'Rock-cut temples, stepwells, Dravidian gopurams, and UNESCO wonders.',
    iconName: 'Landmark',
    color: '#9E3E26'
  },
  {
    id: 'festivals',
    name: 'Sacred Festivals',
    hindiName: 'पावन पर्व व उत्सव',
    description: 'Astronomical dates, sacred rituals, deity processions, and seasonal celebrations.',
    iconName: 'Flame',
    color: '#D97706'
  },
  {
    id: 'arts',
    name: 'Classical Dance & Music',
    hindiName: 'शास्त्रीय नृत्य व संगीत',
    description: 'Natyashastra traditions, mudras, Gharana ragas, and temple theatre.',
    iconName: 'Music',
    color: '#5A5A40'
  },
  {
    id: 'crafts',
    name: 'GI Crafts & Handlooms',
    hindiName: 'शिल्प, हथकरघा व जीआई टैग',
    description: 'Ancient weave techniques, metal inlays, pottery, and folk paintings.',
    iconName: 'Palette',
    color: '#0D9488'
  },
  {
    id: 'cuisine',
    name: 'Culinary Heritage',
    hindiName: 'पाक कला व पारंपरिक स्वाद',
    description: 'Ancient Ayurvedic recipes, royal Nawabi banquets, and temple mahaprasads.',
    iconName: 'Utensils',
    color: '#B45309'
  },
  {
    id: 'history',
    name: 'Dynasties & Epics',
    hindiName: 'इतिहास व राजवंश',
    description: 'Cholas, Mauryas, Vijayanagara, Guptas, and epic historical chronicles.',
    iconName: 'Scroll',
    color: '#4B5563'
  }
];

export const CULTURE_QUIZ_QUESTIONS: CultureQuizQuestion[] = [
  // =================== MONUMENTS & ARCHITECTURE ===================
  {
    id: 'q-mon-1',
    category: 'monuments',
    difficulty: 'Easy',
    question: 'The 24 intricately carved stone wheels of the 13th-century Konark Sun Temple serve what specific astronomical purpose?',
    hindiQuestion: 'कोणार्क सूर्य मंदिर के २४ नक्काशीदार पहिए किस खगोलीय कार्य के लिए उपयोग होते हैं?',
    options: [
      'They represent the 24 hours of a day and act as precise sundials',
      'They were used to mechanically roll the temple sanctum',
      'They commemorate 24 military victories of King Narasimhadeva I',
      'They depict the 24 sacred Jain Tirthankaras'
    ],
    correctAnswerIndex: 0,
    explanation: 'Each of the 24 wheels functions as a sundial. By observing the shadow cast by the wheel’s axle and spokes, one can calculate the exact local time down to minutes.',
    didYouKnow: 'The temple was originally designed as a gargantuan 229-foot chariot pulled by seven stone horses representing the days of the week.',
    relatedMonumentId: 'konark-sun-temple',
    relatedCityId: 'puri'
  },
  {
    id: 'q-mon-2',
    category: 'monuments',
    difficulty: 'Medium',
    question: 'Which architectural marvel at the UNESCO World Heritage site in Hampi produces distinct musical swaras (notes) when gently tapped?',
    hindiQuestion: 'हम्पी के किस मंदिर के खंभे थपथपाने पर संगीत के सात स्वर उत्पन्न करते हैं?',
    options: [
      'The 56 musical pillars of the Vijaya Vittala Temple',
      'The monolithic Nandi of Virupaksha Temple',
      'The Lotus Mahal queen’s summer chambers',
      'The Queen’s Bath octagonal pavilions'
    ],
    correctAnswerIndex: 0,
    explanation: 'The Ranga Mandapa of the Vijaya Vittala Temple contains 56 musical pillars (Saregama pillars) carved out of solid resonant granite that produce bell-like musical notes.',
    didYouKnow: 'During the British era, two pillars were cut open to investigate what was inside; the researchers found them to be completely solid stone.',
    relatedMonumentId: 'vijaya-vittala-temple',
    relatedCityId: 'hampi'
  },
  {
    id: 'q-mon-3',
    category: 'monuments',
    difficulty: 'Medium',
    question: 'What is unique about the colossal 80-tonne single-granite Kumbam (capstone) resting atop the Brihadisvara Temple in Thanjavur?',
    hindiQuestion: 'तंजावुर के बृहदीश्वर मंदिर के ८० टन के ग्रेनाइट कलश की क्या विशेषता है?',
    options: [
      'It was elevated using a 6-kilometer-long inclined earthen ramp built by Chola engineers',
      'It was carved out of meteorite stone imported from Rome',
      'It contains a hollow acoustic chamber that amplifies temple bells across the Kaveri river',
      'It floats on mercury bearings to withstand seismic shocks'
    ],
    correctAnswerIndex: 0,
    explanation: 'Built in 1010 CE by Emperor Rajaraja Chola I, the 80-tonne granite dome was hauled up the 66-meter vimana using a massive 6-km inclined earthen ramp supported by elephants and rollers.',
    didYouKnow: 'The entire temple is constructed without binding mortar, utilizing interlocking granite puzzle joinery that has survived for over 1,000 years.',
    relatedMonumentId: 'brihadisvara-temple',
    relatedCityId: 'thanjavur'
  },
  {
    id: 'q-mon-4',
    category: 'monuments',
    difficulty: 'Challenging',
    question: 'The UNESCO-listed Rani ki Vav in Patan, Gujarat, is inverted architecture designed as a subterranean temple dedicated to which deity?',
    hindiQuestion: 'पाटन, गुजरात की रानी की वाव किस देवता को समर्पित भूमिगत जल-मंदिर है?',
    options: [
      'Lord Vishnu (featuring his 10 Dashavatara incarnations)',
      'Lord Shiva in his cosmic Nataraja form',
      'Goddess Saraswati and the river deities',
      'Lord Surya and the Navagraha planetary deities'
    ],
    correctAnswerIndex: 0,
    explanation: 'Rani ki Vav (The Queen’s Stepwell), commissioned in 1063 CE by Queen Udayamati, descends 7 levels into the earth and contains over 500 principal sculptures, predominantly celebrating Vishnu and his Dashavatara.',
    didYouKnow: 'The stepwell was buried under silt deposited by the Saraswati river for centuries, preserving its pristine marble-like stone carvings in immaculate condition.',
    relatedCityId: 'ahmedabad'
  },
  {
    id: 'q-mon-5',
    category: 'monuments',
    difficulty: 'Easy',
    question: 'Which monument features the world’s second-largest dome and a famous "Whispering Gallery" where even a soft whisper echoes 11 times?',
    hindiQuestion: 'किस स्मारक में प्रसिद्ध फुसफुसाहट कक्ष (विस्परिंग गैलरी) है जहाँ ध्वनि ११ बार गूंजती है?',
    options: [
      'Gol Gumbaz in Vijayapura (Bijapur), Karnataka',
      'Charminar in Hyderabad, Telangana',
      'Humayun’s Tomb in Delhi',
      'Bara Imambara in Lucknow, Uttar Pradesh'
    ],
    correctAnswerIndex: 0,
    explanation: 'Completed in 1656 CE as the mausoleum of Mohammed Adil Shah, the acoustic geometry of Gol Gumbaz dome allows a pin-drop or quiet whisper to travel 38 meters across the hall and reverberate up to 11 times.',
    didYouKnow: 'The dome spans 44 meters in outer diameter and stands without any central pillar support, sustained purely by intersecting arches.',
    relatedCityId: 'hampi'
  },

  // =================== SACRED FESTIVALS ===================
  {
    id: 'q-fes-1',
    category: 'festivals',
    difficulty: 'Easy',
    question: 'During Chhath Puja, ancient Vedic prayers and arghya offerings are made exclusively to which celestial deities standing chest-deep in water?',
    hindiQuestion: 'छठ पूजा के पावन अवसर पर नदी में खड़े होकर किन देवताओं को अर्घ्य दिया जाता है?',
    options: [
      'Surya Dev (the Sun God) and Chhathi Maiya (Usha/Pratyusha)',
      'Lord Varuna (God of Waters) and Ganga Devi',
      'Lord Shiva and Goddess Parvati',
      'Lord Indra (God of Rain) and Agni Dev'
    ],
    correctAnswerIndex: 0,
    explanation: 'Chhath Puja is a 4-day non-idolatrous Vedic festival celebrating Surya Dev for sustaining cosmic life, honoring both the setting and rising sun along with Chhathi Maiya (Usha and Pratyusha).',
    didYouKnow: 'The sacred offering Thekua (made of whole wheat, jaggery, cardamom, and pure ghee) is prepared on traditional clay chulhas using mango tree wood.',
    relatedCityId: 'varanasi'
  },
  {
    id: 'q-fes-2',
    category: 'festivals',
    difficulty: 'Medium',
    question: 'Which Kerala festival is world-renowned for "Kudamattom" (rapid sequential umbrella exchanges atop 30 caparisoned elephants) and the Ilanjithara Melam drum symphony?',
    hindiQuestion: 'केरल का कौन सा भव्य उत्सव हाथियों पर रंग-बिरंगी छतरियों के प्रदर्शन (कुडमाट्टम) के लिए प्रसिद्ध है?',
    options: [
      'Thrissur Pooram at Vadakkunnathan Temple',
      'Onam Pulikkali in Swaraj Round',
      'Attukal Pongala in Thiruvananthapuram',
      'Vishu Kani celebration'
    ],
    correctAnswerIndex: 0,
    explanation: 'Thrissur Pooram, founded by Raja Rama Varma (Sakthan Thampuran) in 1798, features a friendly artistic rivalry between the Paramekkavu and Thiruvambadi temples culminating in the Kudamattom spectacle.',
    didYouKnow: 'The Ilanjithara Melam features over 250 traditional Chenda and Elathalam percussion masters playing together in unbroken synchrony for two hours.',
    relatedCityId: 'madurai'
  },
  {
    id: 'q-fes-3',
    category: 'festivals',
    difficulty: 'Easy',
    question: 'What is the energetic traditional dance performed with earthen incense burners filled with burning coconut husk and camphor during Kolkata’s Durga Puja?',
    hindiQuestion: 'कोलकाता की दुर्गा पूजा में धूनी और कपूर से भरे मिट्टी के सकोरों के साथ किया जाने वाला नृत्य क्या कहलाता है?',
    options: [
      'Dhunuchi Naach',
      'Garba Raas',
      'Bihu Nritya',
      'Ghoomar Dance'
    ],
    correctAnswerIndex: 0,
    explanation: 'Dhunuchi Naach is a rhythmic, devotional dance performed during Sandhi Aarti to the beats of the traditional Dhaka drums, holding smoking dhunuchis in hands and sometimes even in the teeth.',
    didYouKnow: 'Kolkata’s Durga Puja was officially inscribed on UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity in 2021.',
    relatedCityId: 'kolkata'
  },
  {
    id: 'q-fes-4',
    category: 'festivals',
    difficulty: 'Medium',
    question: 'The sacred Hemis Festival in Ladakh is celebrated on the birth anniversary of which revered 8th-century spiritual master who introduced Tantric Buddhism to Tibet?',
    hindiQuestion: 'लद्दाख का प्रसिद्ध हेमिस उत्सव किस बौद्ध गुरु के जन्मदिवस के उपलक्ष्य में मनाया जाता है?',
    options: [
      'Guru Padmasambhava (Guru Rinpoche)',
      'Atisha Dipankara',
      'Nagarjuna',
      'Marpa the Translator'
    ],
    correctAnswerIndex: 0,
    explanation: 'Celebrated in the courtyard of Hemis Gompa, the festival honors Guru Padmasambhava with sacred Cham mask dances accompanied by cymbals, long copper horns (dungchen), and drums.',
    didYouKnow: 'Every 12 years (Year of the Monkey), the world’s largest silk Thangka of Guru Padmasambhava, spanning two stories high, is unfurled at Hemis.',
    relatedCityId: 'leh-ladakh'
  },

  // =================== CLASSICAL ARTS & MUSIC ===================
  {
    id: 'q-art-1',
    category: 'arts',
    difficulty: 'Medium',
    question: 'In the Kathakali dance theatre of Kerala, what personality character does an actor with "Pacha" (vibrant green facial makeup) depict?',
    hindiQuestion: 'कथकली नृत्य में हरे रंग के चेहरे का श्रृंगार (पच्चा) किस प्रकार के पात्र को दर्शाता है?',
    options: [
      'Noble, virtuous heroes, divine kings, and benevolent deities (such as Rama and Arjuna)',
      'Demonic and evil villains (such as Ravana and Dusshasana)',
      'Sages, hermits, and saintly spiritual seekers',
      'Forest dwellers and hunter spirits'
    ],
    correctAnswerIndex: 0,
    explanation: 'Kathakali uses a strict symbolic color code: Pacha (Green) signifies noble and satvik characters, Kathi (Green with red knife marks) represents ambitious anti-heroes, and Thadi (Beards) signifies ferocity.',
    didYouKnow: 'Kathakali performers train their eye muscles for years to express the nine rasas (emotions) without uttering a single spoken word.',
    relatedCityId: 'madurai'
  },
  {
    id: 'q-art-2',
    category: 'arts',
    difficulty: 'Challenging',
    question: 'Which classical Indian dance form is distinguished by the iconic "Tribhanga" posture (three-body bend at neck, torso, and knee) reminiscent of ancient temple sculptures?',
    hindiQuestion: 'किस भारतीय शास्त्रीय नृत्य की पहचान "त्रिभंग" मुद्रा (गर्दन, धड़ और घुटने का तीन जगह से मुड़ना) है?',
    options: [
      'Odissi',
      'Bharatanatyam',
      'Kathak',
      'Mohiniyattam'
    ],
    correctAnswerIndex: 0,
    explanation: 'Odissi from Odisha is steeped in temple Mahari and Gotipua traditions. The Tribhanga and Chowka (square stance) reflect the stone postures found carved upon the Konark and Puri temples.',
    didYouKnow: 'Odissi’s earliest archaeological evidence is found in the 2nd century BCE rock reliefs of Udayagiri and Khandagiri caves near Bhubaneswar.',
    relatedCityId: 'puri'
  },
  {
    id: 'q-art-3',
    category: 'arts',
    difficulty: 'Medium',
    question: 'The Gwalior Gharana, renowned as the oldest lineage of Hindustani classical music, trace their foundational master to whom in Emperor Akbar\'s royal court?',
    hindiQuestion: 'ग्वालियर घराना अपनी संगीत परंपरा का मूल सम्राट अकबर के नवरत्नों में से किसे मानता है?',
    options: [
      'Mian Tansen (Ramtanu Pandey)',
      'Amir Khusrau',
      'Swami Haridas',
      'Ustad Bade Ghulam Ali Khan'
    ],
    correctAnswerIndex: 0,
    explanation: 'Mian Tansen, born near Gwalior, is revered as the father of North Indian classical vocal music. His samadhi in Gwalior remains a pilgrimage site for classical vocalists.',
    didYouKnow: 'Legend holds that Tansen’s rendition of Raga Megh Malhar could summon rainfall, while Raga Deepak could ignite lamps across the royal palace.',
    relatedCityId: 'varanasi'
  },

  // =================== GI CRAFTS & WEAVES ===================
  {
    id: 'q-cra-1',
    category: 'crafts',
    difficulty: 'Easy',
    question: 'Authentic GI-tagged Pashmina shawls from Ladakh and Kashmir are spun exclusively from the fine undercoat hair of which high-altitude animal?',
    hindiQuestion: 'कश्मीर और लद्दाख की प्रामाणिक पश्मीना शॉल किस पशु के रोएंदार बालों से तैयार की जाती है?',
    options: [
      'Changthangi (Pashmina) mountain goat found at altitudes above 14,000 feet',
      'Himalayan Musk Deer',
      'Tibetan Yak',
      'Wild Angora Rabbit'
    ],
    correctAnswerIndex: 0,
    explanation: 'Changthangi goats survive winter temperatures of -40°C on the Changthang plateau of Ladakh. Their ultra-fine undercoat fiber measures just 12 to 15 microns in diameter (6 times finer than human hair).',
    didYouKnow: 'A pure hand-spun Pashmina shawl can pass smoothly through a miniature wedding ring, demonstrating its gossamer fineness.',
    relatedCityId: 'leh-ladakh'
  },
  {
    id: 'q-cra-2',
    category: 'crafts',
    difficulty: 'Medium',
    question: 'Which GI-tagged traditional painting technique from Bihar uses bamboo twigs, fingers, and natural plant dyes to create border motifs without leaving empty canvas space?',
    hindiQuestion: 'बिहार की कौन सी प्रसिद्ध लोक चित्रकला बाँस की तीलियों और प्राकृतिक रंगों से बनाई जाती है?',
    options: [
      'Madhubani (Mithila) Art',
      'Pattachitra of Raghurajpur',
      'Warli tribal art',
      'Kalamkari of Srikalahasti'
    ],
    correctAnswerIndex: 0,
    explanation: 'Madhubani art originated in the Mithila region of Bihar, tradition holding that King Janaka commissioned artists to paint the town for the divine wedding of Sita and Rama.',
    didYouKnow: 'Artists traditionally create colors from nature: soot for black, turmeric for yellow, kusum flowers for red, and bilwa leaves for green.',
    relatedCityId: 'varanasi'
  },
  {
    id: 'q-cra-3',
    category: 'crafts',
    difficulty: 'Challenging',
    question: 'Bidriware, the striking 500-year-old metal handicraft from Karnataka, uses an inlay of pure silver into a blackened alloy composed of which metals?',
    hindiQuestion: 'कर्नाटक के प्रसिद्ध बिदरी हस्तशिल्प में चांदी की नक्काशी किस धातु के काले मिश्रण पर की जाती है?',
    options: [
      'Zinc and Copper (blackened with special soil from the Bidar Fort)',
      'Lead and Tin (blackened with mustard oil and charcoal)',
      'Bronze and Iron (blackened with volcanic ash)',
      'Titanium and Brass (blackened with herbal tannins)'
    ],
    correctAnswerIndex: 0,
    explanation: 'Bidriware crafts use a 16:1 alloy of Zinc and Copper. The metal is etched, inlaid with 99.9% pure silver wire, and then blackened with a paste containing rare nitrate-rich soil gathered inside Bidar Fort.',
    didYouKnow: 'The soil used for oxidizing Bidar metalwork is chosen by artisan elders by taste and smell from historic unexposed vaults inside the 15th-century fort.',
    relatedCityId: 'hampi'
  },

  // =================== CULINARY HERITAGE ===================
  {
    id: 'q-cui-1',
    category: 'cuisine',
    difficulty: 'Easy',
    question: 'In the sacred kitchen of the Jagannath Temple in Puri (the world\'s largest traditional open kitchen), how is the Mahaprasad cooked in earthen pots?',
    hindiQuestion: 'पुरी जगन्नाथ मंदिर की रसोई में मिट्टी की हांडियों में महाप्रसाद किस विशेष विधि से पकता है?',
    options: [
      '7 earthen pots are stacked vertically over a single wood fire; astonishingly, the topmost pot cooks first',
      'Pots are placed inside deep underground geothermal volcanic steam pits',
      'Food is solar-cooked using concave copper mirrors atop the temple sanctum',
      'The ingredients are cooked in copper cauldrons buried in hot sea sand'
    ],
    correctAnswerIndex: 0,
    explanation: 'In the Rosaghara of Puri Jagannath Temple, 7 earthen pots (Kuduas) are stacked one above another over a wood hearth. Through a thermodynamic marvel, the top pot is cooked first before the lower ones.',
    didYouKnow: 'The Mahaprasad comprises 56 items (Chhappan Bhog) cooked by 600 traditional Sevayats following unbroken Vedic culinary rules without onions, garlic, or potatoes.',
    relatedCityId: 'puri'
  },
  {
    id: 'q-cui-2',
    category: 'cuisine',
    difficulty: 'Medium',
    question: 'The culinary technique of "Dum Pukht" (slow steam cooking in sealed handis) was famously popularized in Lucknow by which Nawab during the 1784 famine?',
    hindiQuestion: 'लखनऊ की प्रसिद्ध "दम पुख्त" (धीमी आंच पर पकाने) की विधि किस नवाब द्वारा शुरू की गई थी?',
    options: [
      'Nawab Asaf-ud-Daula (during construction of the Bara Imambara)',
      'Nawab Wajid Ali Shah (the last king of Awadh)',
      'Nawab Siraj-ud-Daulah of Bengal',
      'Nizam-ul-Mulk of Hyderabad'
    ],
    correctAnswerIndex: 0,
    explanation: 'During the great famine of 1784, Nawab Asaf-ud-Daula initiated the construction of the Bara Imambara to provide employment. Large sealed cauldrons simmered day and night to feed thousands of workers with aromatic rice and meats.',
    didYouKnow: 'The phrase "Dum Pukht" literally translates from Persian as "breathe and cook" — sealing the pot lid with dough prevents any aroma or flavor from escaping.',
    relatedCityId: 'delhi'
  },

  // =================== DYNASTIES & HISTORY ===================
  {
    id: 'q-his-1',
    category: 'history',
    difficulty: 'Medium',
    question: 'Under which great southern maritime empire did Indian naval expeditions cross the Bay of Bengal to conquer Srivijaya (modern Indonesia & Malaysia) in the 11th century?',
    hindiQuestion: '११वीं शताब्दी में किस महान दक्षिण भारतीय साम्राज्य ने शक्तिशाली नौसेना द्वारा दक्षिण-पूर्व एशिया (श्रीविजय साम्राज्य) पर विजय प्राप्त की?',
    options: [
      'The Imperial Cholas (under Emperor Rajendra Chola I)',
      'The Rashtrakutas of Manyakheta',
      'The Chalukyas of Badami',
      'The Pallavas of Kanchipuram'
    ],
    correctAnswerIndex: 0,
    explanation: 'In 1025 CE, Rajendra Chola I launched an audacious trans-oceanic naval raid across 3,000 miles to defeat the maritime kingdom of Srivijaya, securing unrestricted Indian trade routes to China.',
    didYouKnow: 'To commemorate his northern victory reaching the Ganges, Rajendra Chola founded a new capital city named Gangaikonda Cholapuram ("The City of the Chola who brought the Ganges").',
    relatedCityId: 'thanjavur'
  },
  {
    id: 'q-his-2',
    category: 'history',
    difficulty: 'Easy',
    question: 'The Lion Capital of Ashoka discovered at Sarnath (which became the National Emblem of India in 1950) was erected to mark which monumental event in history?',
    hindiQuestion: 'सारनाथ का अशोक स्तंभ किस ऐतिहासिक घटना की स्मृति में स्थापित किया गया था?',
    options: [
      'Gautama Buddha’s first sermon (Dhammacakkappavattana Sutta) to his five disciples',
      'The victory of Emperor Ashoka over Kalinga',
      'The birth of Siddhartha Gautama in Lumbini',
      'The signing of the first peace treaty between Magadha and Seleucus Nicator'
    ],
    correctAnswerIndex: 0,
    explanation: 'Emperor Ashoka erected the monolithic sandstone pillar at Deer Park in Sarnath around 250 BCE to mark where Lord Buddha delivered his first sermon and set the Wheel of Law (Dharmachakra) in motion.',
    didYouKnow: 'The Ashoka Chakra features 24 spokes representing 24 virtues in Buddhist and Vedic philosophy, including self-control, courage, patience, and love.',
    relatedCityId: 'varanasi'
  }
];

export const HERITAGE_BADGES = [
  {
    minScore: 90,
    title: 'Grand Itihasa Acharya',
    hindiTitle: 'परम इतिहास आचार्य',
    description: 'Supreme mastery over Indian architecture, sacred calendars, arts, and dynasties.',
    icon: 'Crown',
    color: '#8A3324'
  },
  {
    minScore: 70,
    title: 'Heritage Scholar',
    hindiTitle: 'विरासत विद्वान',
    description: 'Deep knowledge of India\'s classical traditions, UNESCO wonders, and cultural legacies.',
    icon: 'Award',
    color: '#D97706'
  },
  {
    minScore: 50,
    title: 'Cultural Pilgrim',
    hindiTitle: 'संस्कृति यात्री',
    description: 'Enthusiastic explorer with strong grounding in local traditions and monuments.',
    icon: 'Compass',
    color: '#5A5A40'
  },
  {
    minScore: 0,
    title: 'Heritage Novice',
    hindiTitle: 'जिज्ञासु साधक',
    description: 'Beginning your journey through the timeless wonders of Indian civilization.',
    icon: 'BookOpen',
    color: '#0D9488'
  }
];
