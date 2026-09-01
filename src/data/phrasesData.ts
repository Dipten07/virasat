import { DestinationPhrases, LocalPhrase } from '../types';

export const DESTINATION_PHRASES: Record<string, DestinationPhrases> = {
  varanasi: {
    cityId: 'varanasi',
    regionLanguage: 'Hindi & Bhojpuri',
    scriptName: 'Devanagari (देवनागरी)',
    culturalNote: 'In Varanasi, greetings are deeply spiritual. "Har Har Mahadev" or "Pranam" is universally respected on the Ghats and among boatmen.',
    phrases: [
      {
        id: 'vns-1',
        category: 'greeting',
        english: 'Hello / Greetings (Spiritual & Traditional)',
        originalScript: 'नमस्ते / हर हर महादेव',
        phonetic: 'Namaste / Har Har Mahadev',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'Use when meeting locals, priests, or shopkeepers along the Ghats.'
      },
      {
        id: 'vns-2',
        category: 'direction',
        english: 'How do I get to Dashashwamedh Ghat?',
        originalScript: 'दशाश्वमेध घाट किधर है?',
        phonetic: 'Dashashwamedh Ghat kidhar hai?',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'Ask cycle rickshaw drivers or locals in narrow alleyways (galis).'
      },
      {
        id: 'vns-3',
        category: 'bargaining',
        english: 'How much for a morning boat ride?',
        originalScript: 'सुबह की नाव की सवारी का कितना किराया है?',
        phonetic: 'Subah ki naav ki savaari ka kitna kiraya hai?',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'Always agree on the price and boat type (row vs motor) before boarding.'
      },
      {
        id: 'vns-4',
        category: 'bargaining',
        english: 'Is this genuine Banarasi pure silk?',
        originalScript: 'क्या यह असली बनारसी शुद्ध सिल्क है?',
        phonetic: 'Kya yeh asli Banarasi shuddh silk hai?',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'Ask weavers for the Silk Mark label when purchasing sarees or scarves.'
      },
      {
        id: 'vns-5',
        category: 'dining',
        english: 'One Kulhad Chai and Banarasi Paan, please.',
        originalScript: 'एक कुल्हड़ चाय और मीठा पान दीजिए।',
        phonetic: 'Ek kulhad chai aur meetha paan dijiye.',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'Kulhad is a traditional disposable earthen clay cup.'
      },
      {
        id: 'vns-6',
        category: 'courtesy',
        english: 'Thank you very much / God bless you',
        originalScript: 'बहुत बहुत धन्यवाद / प्रणाम',
        phonetic: 'Bahut bahut dhanyavaad / Pranaam',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'Placing palms together adds sincere warmth.'
      },
      {
        id: 'vns-7',
        category: 'emergency',
        english: 'Where is the tourist assistance booth?',
        originalScript: 'पर्यटक सहायता केंद्र कहाँ है?',
        phonetic: 'Paryatak sahaayata kendra kahan hai?',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'Varanasi has dedicated tourist police near major Ghats.'
      }
    ]
  },
  jaipur: {
    cityId: 'jaipur',
    regionLanguage: 'Rajasthani & Hindi',
    scriptName: 'Devanagari (देवनागरी)',
    culturalNote: '"Khamma Ghani" is the quintessential royal Rajasthani greeting conveying profound respect.',
    phrases: [
      {
        id: 'jpr-1',
        category: 'greeting',
        english: 'Royal Greetings / Welcome',
        originalScript: 'खम्मा घणी / राम राम सा',
        phonetic: 'Khamma Ghani / Ram Ram Saa',
        language: 'Rajasthani',
        langCode: 'hi-IN',
        situationalTip: 'Response is "Ghani Khamma". Expresses royal Rajasthani warmth.'
      },
      {
        id: 'jpr-2',
        category: 'direction',
        english: 'Which way to Hawa Mahal and Johari Bazaar?',
        originalScript: 'हवा महल और जौहरी बाज़ार किस तरफ है?',
        phonetic: 'Hawa Mahal aur Johari Bazaar kis taraf hai?',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'Both are in the Pink City old walled zone.'
      },
      {
        id: 'jpr-3',
        category: 'bargaining',
        english: 'Please give a reasonable discount.',
        originalScript: 'थोड़ा सही दाम लगाइए सा।',
        phonetic: 'Thoda sahi daam lagaiye saa.',
        language: 'Hindi / Rajasthani',
        langCode: 'hi-IN',
        situationalTip: 'Polite bargaining is customary in Bapu Bazaar and Johari Bazaar.'
      },
      {
        id: 'jpr-4',
        category: 'dining',
        english: 'Is the Dal Baati Churma spicy?',
        originalScript: 'क्या दाल बाटी चूरमा तीखा है?',
        phonetic: 'Kya Dal Baati Churma teekha hai?',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'Ask for extra ghee or mild garlic chutney if sensitive to spice.'
      },
      {
        id: 'jpr-5',
        category: 'courtesy',
        english: 'You are very kind, thank you!',
        originalScript: 'आप बहुत भले हैं, धन्यवाद सा।',
        phonetic: 'Aap bahut bhale hain, dhanyavaad saa.',
        language: 'Rajasthani',
        langCode: 'hi-IN',
        situationalTip: 'Adding "Saa" to any phrase denotes cordial respect.'
      },
      {
        id: 'jpr-6',
        category: 'emergency',
        english: 'I need an authorized ASI heritage guide.',
        originalScript: 'मुझे अधिकृत सरकारी गाइड चाहिए।',
        phonetic: 'Mujhe adhikrit sarkari guide chahiye.',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'Look for government license badges at Amer Fort or City Palace.'
      }
    ]
  },
  agra: {
    cityId: 'agra',
    regionLanguage: 'Hindi & Urdu',
    scriptName: 'Devanagari & Nastaliq',
    culturalNote: 'Agra blends Braj Bhasha and Mughal court courtesies ("Aadab" / "Namaste").',
    phrases: [
      {
        id: 'agr-1',
        category: 'greeting',
        english: 'Respectful Greetings / Good day',
        originalScript: 'आदाब / नमस्ते',
        phonetic: 'Aadab / Namaste',
        language: 'Hindi / Urdu',
        langCode: 'hi-IN',
        situationalTip: 'Traditional Mughal polite greeting with a gentle hand gesture.'
      },
      {
        id: 'agr-2',
        category: 'direction',
        english: 'Which gate is open for Taj Mahal sunrise entry?',
        originalScript: 'ताजमहल सूर्योदय के लिए कौन सा दरवाज़ा खुला है?',
        phonetic: 'Taj Mahal suryoday ke liye kaun sa darwaaza khula hai?',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'East and West gates open 30 minutes before sunrise.'
      },
      {
        id: 'agr-3',
        category: 'dining',
        english: 'Where can I taste authentic Agra Petha?',
        originalScript: 'असली पंछी पेठा कहाँ मिलेगा?',
        phonetic: 'Asli Panchhi Petha kahan milega?',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'Look for original stores near Sadar Bazaar or Hari Parbat.'
      },
      {
        id: 'agr-4',
        category: 'bargaining',
        english: 'Is this real marble inlay Pietra Dura work?',
        originalScript: 'क्या यह असली संगमरमर की पच्चीकारी है?',
        phonetic: 'Kya yeh asli sangmarmar ki pacchikari hai?',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'Genuine Makrana marble is translucent under a torch light.'
      }
    ]
  },
  delhi: {
    cityId: 'delhi',
    regionLanguage: 'Hindi, Punjabi & English',
    scriptName: 'Devanagari / Gurmukhi',
    culturalNote: 'Cosmopolitan capital where Hindi, Punjabi, and English blend naturally.',
    phrases: [
      {
        id: 'del-1',
        category: 'greeting',
        english: 'Hello brother / Greetings',
        originalScript: 'नमस्ते भाई साहब / सत् श्री अकाल',
        phonetic: 'Namaste bhai sahab / Sat Sri Akal',
        language: 'Hindi / Punjabi',
        langCode: 'hi-IN',
        situationalTip: 'Sat Sri Akal is the revered Sikh greeting commonly used.'
      },
      {
        id: 'del-2',
        category: 'direction',
        english: 'Which Metro station is nearest to Qutub Minar?',
        originalScript: 'क़ुतुब मीनार के पास कौन सा मेट्रो स्टेशन है?',
        phonetic: 'Qutub Minar ke paas kaun sa metro station hai?',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'Qutub Minar Station on the Yellow Line.'
      },
      {
        id: 'del-3',
        category: 'dining',
        english: 'Please make it less spicy (no extra chili).',
        originalScript: 'मिर्च कम रखना भाई, ज़्यादा तीखा नहीं।',
        phonetic: 'Mirch kam rakhna bhai, zyada teekha nahi.',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'Essential for street food in Chandni Chowk.'
      },
      {
        id: 'del-4',
        category: 'bargaining',
        english: 'Please run the auto by the digital meter.',
        originalScript: 'मीटर से चलिए भाई साहब।',
        phonetic: 'Meter se chaliye bhai sahab.',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'Standard request for Delhi auto-rickshaws.'
      }
    ]
  },
  mumbai: {
    cityId: 'mumbai',
    regionLanguage: 'Marathi & Hindi (Bambaiya)',
    scriptName: 'Devanagari (देवनागरी)',
    culturalNote: '"Namaskar" in Marathi is warm and formal, while colloquial street Hindi is vibrant.',
    phrases: [
      {
        id: 'mum-1',
        category: 'greeting',
        english: 'Greetings / Hello (Formal Marathi)',
        originalScript: 'नमस्कार / जय महाराष्ट्र',
        phonetic: 'Namaskar / Jai Maharashtra',
        language: 'Marathi',
        langCode: 'mr-IN',
        situationalTip: 'Standard respectful Marathi greeting.'
      },
      {
        id: 'mum-2',
        category: 'direction',
        english: 'Where is the jetty for Elephanta Caves ferry?',
        originalScript: 'एलिफंटा लेण्यांच्या बोटीचा धक्का कुठे आहे?',
        phonetic: 'Elephanta lenyancha boticha dhakka kuthe aahe?',
        language: 'Marathi',
        langCode: 'mr-IN',
        situationalTip: 'Ferries operate from Gateway of India pier.'
      },
      {
        id: 'mum-3',
        category: 'dining',
        english: 'One hot Vada Pav and cutting chai!',
        originalScript: 'एक गरम वडा पाव आणि कटिंग चहा द्या!',
        phonetic: 'Ek garam Vada Pav aani cutting chaha dya!',
        language: 'Marathi',
        langCode: 'mr-IN',
        situationalTip: 'Iconic street food order across Mumbai corners.'
      },
      {
        id: 'mum-4',
        category: 'courtesy',
        english: 'Thank you very much (Marathi)',
        originalScript: 'खूप खूप धन्यवाद / आभारी आहे',
        phonetic: 'Khoop khoop dhanyavaad / Aabhari aahe',
        language: 'Marathi',
        langCode: 'mr-IN',
        situationalTip: 'Locals deeply appreciate tourists speaking Marathi.'
      }
    ]
  },
  kolkata: {
    cityId: 'kolkata',
    regionLanguage: 'Bengali (বাংলা)',
    scriptName: 'Bengali Script (বাংলা লিপি)',
    culturalNote: '"Nomoshkar" is the melodic Bengali greeting. Bengalis love cultural conversations (Adda).',
    phrases: [
      {
        id: 'kol-1',
        category: 'greeting',
        english: 'Greetings / How are you?',
        originalScript: 'নমস্কার, কেমন আছেন?',
        phonetic: 'Nomoshkar, kemon aachen?',
        language: 'Bengali',
        langCode: 'bn-IN',
        situationalTip: 'Universal polite greeting in West Bengal.'
      },
      {
        id: 'kol-2',
        category: 'direction',
        english: 'How do I reach Victoria Memorial?',
        originalScript: 'ভিক্টোরিয়া মেমোরিয়াল কীভাবে যাব?',
        phonetic: 'Victoria Memorial kibhabe jaabo?',
        language: 'Bengali',
        langCode: 'bn-IN',
        situationalTip: 'Easily accessible via Maidan or Rabindra Sadan Metro.'
      },
      {
        id: 'kol-3',
        category: 'dining',
        english: 'Please give two fresh warm Rosogollas and Mishti Doi.',
        originalScript: 'দুটো গরম রসগোল্লা আর মিষ্টি দই দিন।',
        phonetic: 'Duto gorom Rosogolla aar Mishti Doi din.',
        language: 'Bengali',
        langCode: 'bn-IN',
        situationalTip: 'Ask sweet shops for warm freshly made chenna sweets.'
      },
      {
        id: 'kol-4',
        category: 'bargaining',
        english: 'How much does this terracotta craft cost?',
        originalScript: 'এই পোড়ামাটির কাজের দাম কত?',
        phonetic: 'Ei poramatir kaajer daam koto?',
        language: 'Bengali',
        langCode: 'bn-IN',
        situationalTip: 'Common when browsing College Street and Dakshinapan.'
      },
      {
        id: 'kol-5',
        category: 'courtesy',
        english: 'Thank you, it was wonderful!',
        originalScript: 'ধন্যবাদ, খুব সুন্দর লেগেছে!',
        phonetic: 'Dhonnobaad, khoob shundor legechhe!',
        language: 'Bengali',
        langCode: 'bn-IN',
        situationalTip: 'Shows appreciation for local music, arts, or meals.'
      }
    ]
  },
  amritsar: {
    cityId: 'amritsar',
    regionLanguage: 'Punjabi (ਪੰਜਾਬੀ)',
    scriptName: 'Gurmukhi (ਗੁਰਮੁਖੀ)',
    culturalNote: '"Sat Sri Akal" (Truth is the Timeless Lord) is the sacred greeting of Punjab.',
    phrases: [
      {
        id: 'asr-1',
        category: 'greeting',
        english: 'Sacred Greetings / God is Truth',
        originalScript: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ',
        phonetic: 'Sat Sri Akal Ji',
        language: 'Punjabi',
        langCode: 'pa-IN',
        situationalTip: 'Gently bow head with joined palms; "Ji" adds honor.'
      },
      {
        id: 'asr-2',
        category: 'dining',
        english: 'Where is Guru ka Langar (Community Kitchen)?',
        originalScript: 'ਗੁਰੂ ਕਾ ਲੰਗਰ ਕਿੱਥੇ ਹੈ ਜੀ?',
        phonetic: 'Guru ka Langar kithe hai ji?',
        language: 'Punjabi',
        langCode: 'pa-IN',
        situationalTip: 'Langar inside Golden Temple feeds over 100,000 pilgrims free daily.'
      },
      {
        id: 'asr-3',
        category: 'dining',
        english: 'One Amritsari Kulcha with Chole and sweet Lassi.',
        originalScript: 'ਇੱਕ ਅੰਮ੍ਰਿਤਸਰੀ ਕੁਲਚਾ ਅਤੇ ਮਿੱਠੀ ਲੱਸੀ ਦਿਓ ਜੀ।',
        phonetic: 'Ikk Amritsari Kulcha ate mitthi Lassi deo ji.',
        language: 'Punjabi',
        langCode: 'pa-IN',
        situationalTip: 'Crispy layered tandoori bread served with butter and tamarind chutney.'
      },
      {
        id: 'asr-4',
        category: 'courtesy',
        english: 'May God bless you / Waheguru bless you',
        originalScript: 'ਵਾਹਿਗੁਰੂ ਭਲਾ ਕਰੇ / ਧੰਨਵਾਦ ਜੀ',
        phonetic: 'Waheguru bhala kare / Dhanvaad ji',
        language: 'Punjabi',
        langCode: 'pa-IN',
        situationalTip: 'Heartfelt thank you in Punjabi culture.'
      }
    ]
  },
  madurai: {
    cityId: 'madurai',
    regionLanguage: 'Tamil (தமிழ்)',
    scriptName: 'Tamil Script (தமிழ் அரிச்சுவடி)',
    culturalNote: '"Vanakkam" is the traditional Tamil greeting. Madurai is the ancient Tamil Sangam cradle.',
    phrases: [
      {
        id: 'mdu-1',
        category: 'greeting',
        english: 'Greetings / Welcome (Tamil)',
        originalScript: 'வணக்கம், எப்படி இருக்கிறீர்கள்?',
        phonetic: 'Vanakkam, eppadi irukkeereengal?',
        language: 'Tamil',
        langCode: 'ta-IN',
        situationalTip: 'The ancient respectful greeting across Tamil Nadu.'
      },
      {
        id: 'mdu-2',
        category: 'direction',
        english: 'Which Gopuram (Tower Gate) is the main entrance?',
        originalScript: 'மீனாட்சி அம்மன் கோவிலின் பிரதான கோபுரம் எது?',
        phonetic: 'Meenakshi Amman kovilin pradhaana gopuram edhu?',
        language: 'Tamil',
        langCode: 'ta-IN',
        situationalTip: 'East Gopuram is the oldest and grandest gate.'
      },
      {
        id: 'mdu-3',
        category: 'dining',
        english: 'One Filter Coffee and Jigarthanda, please.',
        originalScript: 'ஒரு ஃபில்டர் காபி மற்றும் ஜிகர்தண்டா கொடுங்கள்.',
        phonetic: 'Oru filter coffee mattrum Jigarthanda kodungal.',
        language: 'Tamil',
        langCode: 'ta-IN',
        situationalTip: 'Jigarthanda is Madurai’s legendary royal cooling dessert drink.'
      },
      {
        id: 'mdu-4',
        category: 'courtesy',
        english: 'Thank you very much (Tamil)',
        originalScript: 'மிக்க நன்றி!',
        phonetic: 'Mikka Nandri!',
        language: 'Tamil',
        langCode: 'ta-IN',
        situationalTip: 'Universally appreciated by temple custodians and shopkeepers.'
      }
    ]
  },
  mysore: {
    cityId: 'mysore',
    regionLanguage: 'Kannada (ಕನ್ನಡ)',
    scriptName: 'Kannada Script (ಕನ್ನಡ ಲಿಪಿ)',
    culturalNote: '"Namaskara" is the polite Kannada greeting in the City of Palaces.',
    phrases: [
      {
        id: 'mys-1',
        category: 'greeting',
        english: 'Greetings / How are you in Kannada',
        originalScript: 'ನಮಸ್ಕಾರ, ಹೇಗಿದ್ದೀರಾ?',
        phonetic: 'Namaskara, hegiddheera?',
        language: 'Kannada',
        langCode: 'kn-IN',
        situationalTip: 'Gentle respectful greeting for locals in Karnataka.'
      },
      {
        id: 'mys-2',
        category: 'direction',
        english: 'When does the Mysore Palace illumination start?',
        originalScript: 'ಮೈಸೂರು ಅರಮನೆಯ ದೀಪಾಲಂಕಾರ ಯಾವಾಗ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ?',
        phonetic: 'Mysuru Aramaneya deepalankara yaavaga prarambhavaguttade?',
        language: 'Kannada',
        langCode: 'kn-IN',
        situationalTip: 'Palace lights up on Sundays and holidays from 7:00 PM to 8:00 PM.'
      },
      {
        id: 'mys-3',
        category: 'dining',
        english: 'Where can I get original melt-in-mouth Mysore Pak?',
        originalScript: 'ಅಸಲಿ ಮೈಸೂರು ಪಾಕ್ ಎಲ್ಲಿ ಸಿಗುತ್ತದೆ?',
        phonetic: 'Asali Mysuru Pak elli siguttade?',
        language: 'Kannada',
        langCode: 'kn-IN',
        situationalTip: 'Guru Sweets near Devaraja Market invented Mysore Pak in 1935.'
      },
      {
        id: 'mys-4',
        category: 'courtesy',
        english: 'Thank you very much (Kannada)',
        originalScript: 'ತುಂಬಾ ಧನ್ಯವಾದಗಳು!',
        phonetic: 'Tumba Dhanyavaadagalu!',
        language: 'Kannada',
        langCode: 'kn-IN',
        situationalTip: 'Leaves an immediate friendly smile on artisans’ faces.'
      }
    ]
  }
};

/**
 * Fallback generator for any city without custom entries
 */
export function getPhrasesForCity(cityId: string, cityName: string, stateName: string): DestinationPhrases {
  if (DESTINATION_PHRASES[cityId]) {
    return DESTINATION_PHRASES[cityId];
  }

  // Generic Hindi / English cultural set
  return {
    cityId,
    regionLanguage: 'Hindi / Regional',
    scriptName: 'Devanagari',
    culturalNote: `Essential conversational travel phrases for visiting ${cityName}, ${stateName}.`,
    phrases: [
      {
        id: `${cityId}-gen-1`,
        category: 'greeting',
        english: 'Hello / Respectful Greetings',
        originalScript: 'नमस्ते / प्रणाम',
        phonetic: 'Namaste / Pranaam',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'Universally recognized with hands folded across India.'
      },
      {
        id: `${cityId}-gen-2`,
        category: 'direction',
        english: 'Where is the main heritage monument?',
        originalScript: 'यहाँ का मुख्य ऐतिहासिक स्मारक कहाँ है?',
        phonetic: 'Yahan ka mukhya aitihasik smarak kahan hai?',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'Useful when asking auto drivers or shopkeepers.'
      },
      {
        id: `${cityId}-gen-3`,
        category: 'dining',
        english: 'What is the most famous local specialty dish?',
        originalScript: 'यहाँ की सबसे प्रसिद्ध डिश कौन सी है?',
        phonetic: 'Yahan ki sabse prasiddh dish kaun si hai?',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'Great way to discover authentic regional cuisine.'
      },
      {
        id: `${cityId}-gen-4`,
        category: 'bargaining',
        english: 'How much does this handcrafted souvenir cost?',
        originalScript: 'इस हस्तशिल्प का क्या मूल्य है?',
        phonetic: 'Is hastashilp ka kya moolya hai?',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'Ask with a polite smile in handicraft bazaars.'
      },
      {
        id: `${cityId}-gen-5`,
        category: 'courtesy',
        english: 'Thank you very much for your help!',
        originalScript: 'आपकी सहायता के लिए बहुत धन्यवाद!',
        phonetic: 'Aapki sahaayata ke liye bahut dhanyavaad!',
        language: 'Hindi',
        langCode: 'hi-IN',
        situationalTip: 'Warm gratitude bridges all cultural divides.'
      }
    ]
  };
}

import { speakText, stopSpeech } from '../services/speechService';

/**
 * Text-to-speech audio reader utilizing Web Speech API with fallback
 */
export function playPhraseAudio(
  text: string,
  langCode: string = 'hi-IN',
  rate: number = 0.85,
  phoneticText?: string
): Promise<boolean> {
  return speakText({
    text,
    phoneticText,
    langCode,
    rate
  });
}

