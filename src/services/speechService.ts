/**
 * Unified Speech Synthesis & Audio Narration Service for Virasat
 * Supports all 11 Indian Languages with fallback to phonetic transliteration
 * and Web Speech API voice management.
 */

import { SupportedLanguage } from '../types';
import { SUPPORTED_LANGUAGES } from '../data/languages';

// Keep reference to active utterance to prevent garbage collection in Chrome / Safari
let activeUtterance: SpeechSynthesisUtterance | null = null;
let cachedVoices: SpeechSynthesisVoice[] = [];

// Language code to voice search keywords map
const LANGUAGE_VOICE_HINTS: Record<string, string[]> = {
  hi: ['hi-in', 'hi_in', 'hindi', 'lekha', 'kalpana', 'hemant', 'google हिन्दी'],
  bn: ['bn-in', 'bn_in', 'bn-bd', 'bengali', 'bangla', 'google বাংলা'],
  ta: ['ta-in', 'ta_in', 'ta-lk', 'tamil', 'valluvar', 'google தமிழ்'],
  te: ['te-in', 'te_in', 'telugu', 'chitra', 'mohan', 'google తెలుగు'],
  mr: ['mr-in', 'mr_in', 'marathi', 'aarohi', 'google मराठी'],
  gu: ['gu-in', 'gu_in', 'gujarati', 'dhwani', 'google ગુજરાતી'],
  kn: ['kn-in', 'kn_in', 'kannada', 'sapna', 'google ಕನ್ನಡ'],
  pa: ['pa-in', 'pa_in', 'punjabi', 'gurmukhi', 'google ਪੰਜਾਬੀ'],
  ml: ['ml-in', 'ml_in', 'malayalam', 'midhun', 'google മലയാളം'],
  or: ['or-in', 'or_in', 'odia', 'oriya', 'google ଓଡ଼ିଆ'],
  en: ['en-in', 'en_in', 'indian', 'rishi', 'veena', 'heera', 'neerja', 'prabhat', 'en-gb', 'en-us']
};

/**
 * Initialize and preload voices
 */
export function getAvailableVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve([]);
      return;
    }

    const voices = window.speechSynthesis.getVoices();
    if (voices && voices.length > 0) {
      cachedVoices = voices;
      resolve(voices);
      return;
    }

    // Wait for voiceschanged event
    const handleVoicesChanged = () => {
      cachedVoices = window.speechSynthesis.getVoices();
      window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
      resolve(cachedVoices);
    };

    window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);

    // Timeout fallback if event never fires
    setTimeout(() => {
      cachedVoices = window.speechSynthesis.getVoices();
      resolve(cachedVoices);
    }, 400);
  });
}

// Initial eager load
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  getAvailableVoices();
}

/**
 * Find the most suitable voice for a given language code
 */
export function findBestVoice(langCode: string): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;

  const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  const code = langCode.toLowerCase().replace('_', '-');
  const shortLang = code.split('-')[0];

  // 1. Exact locale match (e.g. 'hi-in')
  let match = voices.find((v) => v.lang.toLowerCase().replace('_', '-') === code);
  if (match) return match;

  // 2. Prefix match (e.g. 'hi')
  match = voices.find((v) => v.lang.toLowerCase().startsWith(shortLang));
  if (match) return match;

  // 3. Name hint match
  const hints = LANGUAGE_VOICE_HINTS[shortLang] || [];
  for (const hint of hints) {
    match = voices.find(
      (v) =>
        v.name.toLowerCase().includes(hint) ||
        v.lang.toLowerCase().includes(hint)
    );
    if (match) return match;
  }

  // 4. Indian English voice fallback
  match = voices.find((v) =>
    v.lang.toLowerCase().includes('en-in') ||
    v.name.toLowerCase().includes('india') ||
    v.name.toLowerCase().includes('rishi') ||
    v.name.toLowerCase().includes('veena')
  );
  if (match) return match;

  // 5. Default voice
  return voices.find((v) => v.default) || voices[0] || null;
}

export interface SpeakOptions {
  text: string;
  phoneticText?: string;
  langCode?: string;
  rate?: number;
  pitch?: number;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: unknown) => void;
}

/**
 * Speaks text using Web Speech API with fallback logic
 */
export async function speakText(options: SpeakOptions): Promise<boolean> {
  const {
    text,
    phoneticText,
    langCode = 'en-IN',
    rate = 0.88,
    pitch = 1.0,
    onStart,
    onEnd,
    onError
  } = options;

  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis is not supported in this browser.');
    onError?.(new Error('Speech synthesis not supported'));
    return false;
  }

  // Ensure voices are available
  await getAvailableVoices();

  return new Promise((resolve) => {
    try {
      // Cancel previous utterance
      window.speechSynthesis.cancel();

      // Fix Chrome stuck speech synthesis bug
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      const shortLang = langCode.toLowerCase().split(/[-_]/)[0];
      const matchedVoice = findBestVoice(langCode);

      // Check if matched voice is a true native voice for the script
      const isNativeVoiceAvailable =
        matchedVoice &&
        (matchedVoice.lang.toLowerCase().startsWith(shortLang) ||
          (LANGUAGE_VOICE_HINTS[shortLang] &&
            LANGUAGE_VOICE_HINTS[shortLang].some((h) =>
              matchedVoice.name.toLowerCase().includes(h)
            )));

      // If no native voice exists for e.g. 'bn', 'ta', 'te' and we have phonetic romanized text,
      // speak the phonetic text using standard Indian English voice so it's clearly pronounced!
      let spokenText = text;
      let targetLang = langCode;

      if (!isNativeVoiceAvailable && shortLang !== 'en' && phoneticText) {
        spokenText = phoneticText;
        targetLang = 'en-IN';
      }

      const utterance = new SpeechSynthesisUtterance(spokenText);
      utterance.lang = targetLang;
      utterance.rate = rate;
      utterance.pitch = pitch;

      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }

      utterance.onstart = () => {
        onStart?.();
      };

      utterance.onend = () => {
        activeUtterance = null;
        onEnd?.();
        resolve(true);
      };

      utterance.onerror = (event) => {
        console.warn('Speech synthesis utterance error:', event);
        activeUtterance = null;
        onError?.(event);
        resolve(false);
      };

      // Keep active reference
      activeUtterance = utterance;

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error('Error invoking speech synthesis:', e);
      onError?.(e);
      resolve(false);
    }
  });
}

/**
 * Stops any current speech immediately
 */
export function stopSpeech(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    activeUtterance = null;
  }
}

/**
 * Get the speech code (e.g. 'hi-IN') for a SupportedLanguage key
 */
export function getSpeechCodeForLang(lang: SupportedLanguage | string = 'en'): string {
  const match = SUPPORTED_LANGUAGES.find((l) => l.code === lang);
  return match ? match.speechCode : 'en-IN';
}
