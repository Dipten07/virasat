import { CulturalArtisticStats } from '../types';

export const CULTURAL_ARTISTIC_STATS: Record<string, CulturalArtisticStats> = {
  varanasi: {
    cityId: 'varanasi',
    architecturalEra: 'Ancient Nagara & Maratha Revival (8th–18th C.)',
    dominantDynasty: 'Kashi Kingdom, Gahadavala & Holkar Patrons',
    yearsOfLivingHeritage: 3200,
    unescoSitesCount: 2, // Tentative & Cultural Intangible
    giTagCrafts: [
      'Banaras Brocades & Zari Silk',
      'Varanasi Wooden Lacquerware & Toys',
      'Gulabi Meenakari (Pink Enamel)',
      'Banaras Metal Repoussé Craft',
      'Banaras Glass Beads'
    ],
    classicalArts: ['Kathak (Banaras Gharana)', 'Thumri & Dadra', 'Shehnai tradition of Bismillah Khan', 'Dhrupad'],
    musicGharanas: ['Banaras Tabla Gharana', 'Benaras Mishra Singer Tradition'],
    masonryStyle: 'Chunar Sandstone Ghat embankments with stepped Kunds & Shikhara spires',
    artisanGuildsEstimate: 140,
    heritageScore: 99,
    keyMotifs: ['Paisley (Kalka)', 'Shikargah (Hunting scenes)', 'Floral Bel', 'Linga motifs']
  },
  jaipur: {
    cityId: 'jaipur',
    architecturalEra: 'Vastu Shastra Planned Rajputana & Mughal Fusion (1727 CE)',
    dominantDynasty: 'Kachhwaha Rajput Dynasty (Maharaja Sawai Jai Singh II)',
    yearsOfLivingHeritage: 298,
    unescoSitesCount: 2, // Jaipur City & Jantar Mantar (Amer Fort in cluster)
    giTagCrafts: [
      'Jaipur Blue Pottery',
      'Sanganeri Hand Block Print',
      'Bagru Hand Block Print',
      'Jaipur Kundan & Meenakari Jewellery',
      'Jaipur Razai (Quilts)'
    ],
    classicalArts: ['Kathak (Jaipur Gharana)', 'Dagarvani Dhrupad', 'Puppetry (Kathputli)'],
    musicGharanas: ['Jaipur-Atrauli Classical Gharana', 'Senia Gharana'],
    masonryStyle: 'Pink Terracotta Lime Plaster (Chunam), Jharokhas & Lattice Jali Screens',
    artisanGuildsEstimate: 210,
    heritageScore: 98,
    keyMotifs: ['Buta & Buti florets', 'Peacock (Mayur)', 'Elephant caparisons', 'Geometric Jaalis']
  },
  agra: {
    cityId: 'agra',
    architecturalEra: 'High Imperial Mughal Baroque & Timurid (16th–17th C.)',
    dominantDynasty: 'Mughal Empire (Akbar, Jahangir, Shah Jahan)',
    yearsOfLivingHeritage: 520,
    unescoSitesCount: 3, // Taj Mahal, Agra Fort, Fatehpur Sikri
    giTagCrafts: [
      'Agra Marble Inlay (Parchin Kari / Pietra Dura)',
      'Agra Zardozi Embroidery',
      'Agra Leather Footwear & Mojari Craft'
    ],
    classicalArts: ['Mughal Court Ghazal', 'Classical Agra Gharana Khayal'],
    musicGharanas: ['Agra Gharana (Faiyaz Khan / Rangeela tradition)'],
    masonryStyle: 'Makrana Translucent White Marble with Inlaid Semi-Precious Stones & Red Sikri Sandstone',
    artisanGuildsEstimate: 85,
    heritageScore: 97,
    keyMotifs: ['Arabesque scrolls', 'Chevron tessellations', 'Lotus finials', 'Muqarnas vaulting']
  },
  delhi: {
    cityId: 'delhi',
    architecturalEra: 'Sultanate, Mughal & Lutyens Indo-Saracenic (12th–20th C.)',
    dominantDynasty: 'Tomara, Mamluk, Khalji, Tughlaq, Lodi & Mughal Dynasties',
    yearsOfLivingHeritage: 2500,
    unescoSitesCount: 3, // Qutub Minar, Humayun’s Tomb, Red Fort
    giTagCrafts: ['Delhi Zardozi Work', 'Shahjahanabad Paper Mache & Bookbinding'],
    classicalArts: ['Dilli Gharana Vocal & Sitar', 'Qawwali of Nizamuddin Auliya'],
    musicGharanas: ['Delhi Gharana (Amir Khusrau founding tradition)'],
    masonryStyle: 'Ashlar Rubble masonry, Corbelled Arch to True Arch transition, Red Sandstone & Marble Domes',
    artisanGuildsEstimate: 160,
    heritageScore: 96,
    keyMotifs: ['Calligraphic Quranic bands', 'Star octagons', 'Jharokha balconies', 'Geometrical tracery']
  },
  mumbai: {
    cityId: 'mumbai',
    architecturalEra: 'Rock-Cut Cave Temples & Victorian Gothic / Art Deco (6th–20th C.)',
    dominantDynasty: 'Silhara Dynasty, Maratha Empire & Bombay Presidency',
    yearsOfLivingHeritage: 1400,
    unescoSitesCount: 2, // Elephanta Caves & Victorian Gothic and Art Deco Ensembles
    giTagCrafts: ['Warli Tribal Art', 'Kolhapuri Leather Craft (Regional)', 'Paithani Saree Brocades'],
    classicalArts: ['Lavani Folk Theatre', 'Natya Sangeet', 'Koli Fisherfolk Dance'],
    musicGharanas: ['Mumbai Classical Sabha Movement & Dadar Matunga Heritage'],
    masonryStyle: 'Basalt Rock-Cut Monolithic Caverns & Malad Sandstone Neo-Gothic Flying Buttresses',
    artisanGuildsEstimate: 95,
    heritageScore: 94,
    keyMotifs: ['Trimurti sculpted reliefs', 'Art Deco ziggurats', 'Marine iconography', 'Warli stick figures']
  },
  kolkata: {
    cityId: 'kolkata',
    architecturalEra: 'Colonial Classical, Bengali Zamindari & Terracotta Temple Revival',
    dominantDynasty: 'Nawabs of Bengal, East India Company & Bengal Renaissance',
    yearsOfLivingHeritage: 334,
    unescoSitesCount: 2, // Durga Puja (Intangible Cultural Heritage) & Shantiniketan (Regional)
    giTagCrafts: [
      'Baluchari Saree Brocades',
      'Bengal Dokra Metal Casting',
      'Shantiniketan Leather Goods',
      'Purulia Chhau Masks',
      'Kalighat Patachitra Painting'
    ],
    classicalArts: ['Rabindra Sangeet', 'Gaudiya Nritya', 'Baul Mystic Songs', 'Padabali Kirtan'],
    musicGharanas: ['Bishnupur Gharana', 'Kolkata Adda & Classical Sangeet Parishad'],
    masonryStyle: 'Italianate Corinthian pilasters, Stucco balconies & Slotted wooden venetian shutters',
    artisanGuildsEstimate: 130,
    heritageScore: 95,
    keyMotifs: ['Kalighat brush strokes', 'Terracotta epics', 'Alpona rice-paste floor drawings', 'Mango paisley']
  },
  amritsar: {
    cityId: 'amritsar',
    architecturalEra: 'Sikh Architecture & Gilded Gurdwara Style (16th–19th C.)',
    dominantDynasty: 'Sikh Gurus & Sikh Empire (Maharaja Ranjit Singh)',
    yearsOfLivingHeritage: 447,
    unescoSitesCount: 1, // Golden Temple (UNESCO Tentative)
    giTagCrafts: [
      'Phulkari Traditional Needlework Embroidery',
      'Thathera Brass & Copper Handcrafted Utensils of Jandiala Guru (UNESCO Intangible)'
    ],
    classicalArts: ['Gurbani Kirtan (Raag-based Sikh Classical)', 'Bhangra', 'Giddha'],
    musicGharanas: ['Gurmat Sangeet Classical Ragas'],
    masonryStyle: 'Gold Leaf Plating over Copper Panels, White Makrana Marble with Inlaid Floral Pietra Dura & Jarokhas',
    artisanGuildsEstimate: 75,
    heritageScore: 96,
    keyMotifs: ['Golden dome kalash', 'Floral vines with lapis lazuli', 'Khanda emblems', 'Geometric chevron tiles']
  },
  madurai: {
    cityId: 'madurai',
    architecturalEra: 'Dravidian High Temple Architecture & Nayaka Pillared Halls (6th–17th C.)',
    dominantDynasty: 'Pandya Dynasty & Nayaka Rulers (Tirumalai Nayak)',
    yearsOfLivingHeritage: 2500,
    unescoSitesCount: 1,
    giTagCrafts: [
      'Madurai Sungudi Tie & Dye Cotton Sarees',
      'Madurai Malli (GI Tag Jasmine Flowers)',
      'Chettinad Kottan Palm Basketry (Regional)'
    ],
    classicalArts: ['Bharatanatyam (Ancient Pandanallur & Temple Traditions)', 'Carnatic Music', 'Nadaswaram'],
    musicGharanas: ['Madurai Mani Iyer Carnatic Lineage'],
    masonryStyle: 'Polychrome Stucco Sculptured Gopurams, Thousand Pillared Granite Hall & Yali Pillars',
    artisanGuildsEstimate: 110,
    heritageScore: 98,
    keyMotifs: ['Yali mythic lions', 'Meen (Fish crest of Pandyas)', 'Lotus mandalas', 'Gopuram tiers']
  },
  mysore: {
    cityId: 'mysore',
    architecturalEra: 'Indo-Saracenic Royal Palace & Hoysala Stone Heritage (14th–20th C.)',
    dominantDynasty: 'Wadiyar Royal Dynasty (Maharaja Krishnaraja Wadiyar IV)',
    yearsOfLivingHeritage: 625,
    unescoSitesCount: 2, // Hoysala Sacred Ensembles nearby
    giTagCrafts: [
      'Mysore Pure Silk Sarees',
      'Mysore Sandalwood Oil & Soaps',
      'Mysore Rosewood Inlay with Marquetery',
      'Mysore Traditional Gesso Paintings (Gold foil)',
      'Ganjifa Playing Cards'
    ],
    classicalArts: ['Mysore Style Bharatanatyam', 'Mysore Carnatic Veena Tradition', 'Dollu Kunitha'],
    musicGharanas: ['Mysore Royal Asthana Vidwans'],
    masonryStyle: 'Grey Granite Palatial domes, Rosewood Carvings, Stained Glass Ceilings & Cast Iron Pillars',
    artisanGuildsEstimate: 120,
    heritageScore: 97,
    keyMotifs: ['Gandaberunda (Two-headed mythical bird)', 'Elephant royal howdahs', 'Lotus rosettes']
  }
};

export function getCulturalStatsForCity(cityId: string, cityName: string): CulturalArtisticStats {
  if (CULTURAL_ARTISTIC_STATS[cityId]) {
    return CULTURAL_ARTISTIC_STATS[cityId];
  }

  return {
    cityId,
    architecturalEra: 'Regional Indian Vernacular & Classical Heritage',
    dominantDynasty: 'Ancient Royal Dynasties & Patronage',
    yearsOfLivingHeritage: 800,
    unescoSitesCount: 1,
    giTagCrafts: [`${cityName} Handlooms`, `${cityName} Clay Pottery`, 'Regional Embroidery & Woodcraft'],
    classicalArts: ['Regional Folk Dance', 'Traditional Vocal Arts', 'Temple Instrumental Music'],
    musicGharanas: ['Regional Traditional Music Lineage'],
    masonryStyle: 'Indigenous Stone, Lime Mortar & Sculpted Pillars',
    artisanGuildsEstimate: 45,
    heritageScore: 90,
    keyMotifs: ['Floral Bel', 'Lotus medallions', 'Geometric lattice']
  };
}
