import React, { useState, useEffect, useRef } from 'react';
import { SupportedLanguage } from '../types';
import { getTranslation, SUPPORTED_LANGUAGES } from '../data/languages';
import { speakText, stopSpeech, getSpeechCodeForLang } from '../services/speechService';
import {
  Sparkles,
  Send,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  X,
  Minimize2,
  Maximize2,
  RotateCcw,
  Compass,
  MapPin,
  Bot,
  User,
  ChevronRight,
  Info,
  ExternalLink
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isAudioPlaying?: boolean;
}

interface TourGuideChatbotProps {
  currentLanguage: SupportedLanguage;
  activeCityName?: string;
  activeMonumentName?: string;
  activeFestivalName?: string;
  activeStateName?: string;
  userCity?: string;
  currentView?: string;
  onNavigateTo?: (view: any, params?: any) => void;
  isOpenExternal?: boolean;
  onToggleExternal?: () => void;
}

export const TourGuideChatbot: React.FC<TourGuideChatbotProps> = ({
  currentLanguage = 'en',
  activeCityName,
  activeMonumentName,
  activeFestivalName,
  activeStateName,
  userCity,
  currentView,
  onNavigateTo,
  isOpenExternal,
  onToggleExternal
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [currentlySpeakingId, setCurrentlySpeakingId] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  const activeLangMeta = SUPPORTED_LANGUAGES.find((l) => l.code === currentLanguage) || SUPPORTED_LANGUAGES[0];

  // Sync external open state if provided
  useEffect(() => {
    if (isOpenExternal !== undefined) {
      setIsOpen(isOpenExternal);
    }
  }, [isOpenExternal]);

  // Initial welcome message configured to language and current destination context
  useEffect(() => {
    const contextItem = activeMonumentName || activeCityName || activeFestivalName || activeStateName || 'India';
    const welcomeGreetings: Record<string, string> = {
      en: `🙏 **Namaste! I am Margdarshak, your AI Tour Guide & Cultural Companion.**\n\nI can assist you with visiting hours, historical legends, entry tickets, local dress codes, authentic foods, and personalized itineraries for **${contextItem}** and across India.\n\nHow may I guide your journey today?`,
      hi: `🙏 **नमस्ते! मैं मार्गदर्शक हूँ, आपका एआई सांस्कृतिक व पर्यटन गाइड।**\n\nमैं आपको **${contextItem}** तथा पूरे भारत के स्मारकों, दर्शन समय, ऐतिहासिक कथाओं, स्थानीय खान-पान, रीति-रिवाजों और यात्रा योजनाओं में मार्गदर्शन कर सकता हूँ।\n\nआज आपकी क्या सहायता करूँ?`,
      bn: `🙏 **নমস্কার! আমি মার্গদর্শক, আপনার এআই সাংস্কৃতিক ট্যুর গাইড।**\n\nআমি আপনাকে **${contextItem}** এবং সমগ্র ভারতের স্মৃতিস্তম্ভ, দর্শনের সময়, ইতিহাস, স্থানীয় রন্ধনপ্রণালী এবং ভ্রমণ পরিকল্পনায় সহায়তা করতে পারি।`,
      ta: `🙏 **வணக்கம்! நான் மார்க்கதர்ஷக், உங்கள் AI பாரம்பரிய சுற்றுலா வழிகாட்டி.**\n\n**${contextItem}** மற்றும் இந்தியாவின் அனைத்து பாரம்பரிய தலங்களின் நேரம், வரலாறு, உள்ளூர் உணவு மற்றும் பயண திட்டமிடலில் உங்களுக்கு வழிகாட்ட நான் தயாராக உள்ளேன்.`,
      te: `🙏 **నమస్కారం! నేను మార్గదర్శక్, మీ AI సాంస్కృతిక పర్యాటక మార్గదర్శిని.**\n\n**${contextItem}** మరియు భారతదేశంలోని పురాతన స్మారకాలు, దర్శన సమయాలు, స్థానిక ఆహారాలు మరియు యాత్రా ప్రణాళికలలో మీకు మార్గదర్శనం చేయగలను.`,
      mr: `🙏 **नमस्कार! मी मार्गदर्शक आहे, आपला एआय सांस्कृतिक व पर्यटन गाईड.**\n\nमी आपल्याला **${contextItem}** आणि भारतातील विविध स्मारके, दर्शन वेळा, ऐतिहासिक माहिती, स्थानिक खाद्यसंस्कृती आणि प्रवासाचे नियोजन यामध्ये मदत करू शकतो.`,
      gu: '🙏 **નમસ્તે! હું માર્ગદર્શક છું, તમારો AI સાંસ્કૃતિક અને પ્રવાસ ગાઇડ.**\n\nહું તમને સ્મારકો, દર્શન સમય, ઐતિહાસિક વાતો અને યાત્રા આયોજનમાં માર્ગદર્શન આપી શકું છું.',
      kn: '🙏 **ನಮಸ್ಕಾರ! ನಾನು ಮಾರ್ಗದರ್ಶಕ್, ನಿಮ್ಮ AI ಸಾಂಸ್ಕೃತಿಕ ಪ್ರವಾಸ ಮಾರ್ಗದರ್ಶಿ.**\n\nಸ್ಮಾರಕಗಳು, ದರ್ಶನ ಸಮಯ, ಇತಿಹಾಸ ಮತ್ತು ಸ್ಥಳೀಯ ಆಹಾರಗಳ ಬಗ್ಗೆ ನಿಮಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡಲು ನಾನು ಸಿದ್ಧನಿದ್ದೇನೆ.',
      pa: '🙏 **ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਮਾਰਗਦਰਸ਼ਕ ਹਾਂ, ਤੁਹਾਡਾ AI ਸੱਭਿਆਚਾਰਕ ਟੂਰ ਗਾਈਡ।**\n\nਮੈਂ ਸਮਾਰਕਾਂ, ਦਰਸ਼ਨ ਦੇ ਸਮੇਂ, ਇਤਿਹਾਸ ਅਤੇ ਯਾਤਰਾ ਯੋਜਨਾਵਾਂ ਵਿੱਚ ਤੁਹਾਡੀ ਅਗਵਾਈ ਕਰ ਸਕਦਾ ਹਾਂ।',
      ml: '🙏 **നമസ്കാരം! ഞാൻ മാർഗ്ഗദർശക്, നിങ്ങളുടെ AI സാംസ്കാരിക ടൂർ ഗൈഡ്.**\n\nസ്മാരകങ്ങൾ, ചരിത്രം, ദർശന സമയം എന്നിവയിൽ നിങ്ങളെ സഹായിക്കാൻ ഞാൻ ഇവിടെയുണ്ട്.',
      or: '🙏 **ନମସ୍କାର! ମୁଁ ମାର୍ଗଦର୍ଶକ, ଆପଣଙ୍କ AI ସାଂସ୍କୃତିକ ପର୍ଯ୍ୟଟନ ମାର୍ଗଦର୍ଶୀ।**\n\nଭାରତର ସ୍ମାରକୀ, ଇତିହାସ ଏବଂ ଯାତ୍ରା ଯୋଜନାରେ ମୁଁ ଆପଣଙ୍କୁ ସାହାଯ୍ୟ କରିବି।'
    };

    const initialText = welcomeGreetings[currentLanguage] || welcomeGreetings.en;

    // Only update initial greeting if conversation is at the start
    setMessages((prev) => {
      if (prev.length <= 1) {
        return [
          {
            id: 'welcome-msg',
            role: 'assistant',
            text: initialText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ];
      }
      return prev;
    });

    // Initial contextual prompt chips
    const initialSuggestions = [
      `What is the best time to visit ${contextItem}?`,
      `Tell me the history & architectural highlights`,
      `What are the must-eat local dishes?`,
      `What are the dress code rules & tips?`,
      `Plan a 1-day itinerary for ${contextItem}`
    ];
    setSuggestions(initialSuggestions);
  }, [currentLanguage, activeCityName, activeMonumentName, activeFestivalName, activeStateName]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Setup Web Speech Recognition
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = getSpeechCodeForLang(currentLanguage);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInputMessage(transcript);
          setIsListening(false);
          // Automatically send after voice capture
          handleSendMessage(transcript);
        }
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, [currentLanguage]);

  const toggleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in this browser. Please type your message.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.lang = getSpeechCodeForLang(currentLanguage);
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Build conversation history payload
      const historyPayload = messages.slice(-5).map((m) => ({
        role: m.role,
        text: m.text
      }));

      const response = await fetch('/api/tour-guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          conversationHistory: historyPayload,
          language: currentLanguage,
          languageName: activeLangMeta.name,
          context: {
            currentCity: activeCityName,
            currentMonument: activeMonumentName,
            currentFestival: activeFestivalName,
            currentState: activeStateName,
            userCity: userCity,
            currentView: currentView
          }
        })
      });

      const data = await response.json();

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: data.reply || 'I am happy to help you with your Indian heritage exploration.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMsg]);

      if (data.suggestions && Array.isArray(data.suggestions)) {
        setSuggestions(data.suggestions);
      }
    } catch (err) {
      console.error('Error fetching tour guide reply:', err);
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: '🙏 I am experiencing a temporary connection issue. Please check your network or try asking again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReadOut = async (msg: ChatMessage) => {
    if (currentlySpeakingId === msg.id) {
      stopSpeech();
      setCurrentlySpeakingId(null);
      return;
    }

    setCurrentlySpeakingId(msg.id);

    // Clean markdown characters before passing to speech
    const cleanText = msg.text.replace(/[*_#`\[\]]/g, '').trim();

    try {
      await speakText({
        text: cleanText,
        langCode: getSpeechCodeForLang(currentLanguage),
        rate: 0.85,
        onEnd: () => setCurrentlySpeakingId(null),
        onError: () => setCurrentlySpeakingId(null)
      });
    } catch (e) {
      console.error('Speech synthesis error:', e);
      setCurrentlySpeakingId(null);
    }
  };

  const handleClearChat = () => {
    stopSpeech();
    setCurrentlySpeakingId(null);
    setMessages([
      {
        id: 'reset-msg',
        role: 'assistant',
        text: `🙏 Chat history cleared. How may Margdarshak guide you now in ${activeCityName || activeMonumentName || 'India'}?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const handleToggleOpen = () => {
    if (onToggleExternal) {
      onToggleExternal();
    } else {
      setIsOpen(!isOpen);
    }
    if (isOpen) {
      stopSpeech();
      setCurrentlySpeakingId(null);
    }
  };

  return (
    <>
      {/* Floating Action Button (FAB) */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
          <button
            onClick={handleToggleOpen}
            className="group relative flex items-center gap-3 px-4 sm:px-5 py-3.5 bg-linear-to-r from-[#5A5A40] to-[#2d2a26] hover:from-[#9E3E26] hover:to-[#5A5A40] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-[#E6BE8A]/40"
            title="Open Margdarshak AI Tour Guide"
          >
            {/* Pulsing indicator ring */}
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6BE8A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#E6BE8A] border-2 border-white"></span>
            </span>

            <div className="w-8 h-8 rounded-full bg-[#E6BE8A] text-[#2d2a26] flex items-center justify-center shrink-0 shadow-xs">
              <Sparkles className="w-4 h-4 text-[#2d2a26]" />
            </div>

            <div className="text-left hidden sm:block">
              <div className="text-xs font-bold font-serif tracking-wide leading-none flex items-center gap-1.5">
                <span>Margdarshak</span>
                <span className="text-[9px] bg-[#E6BE8A]/30 text-[#E6BE8A] px-1.5 py-0.2 rounded font-sans font-semibold">
                  AI GUIDE
                </span>
              </div>
              <div className="text-[10px] text-neutral-300 leading-tight mt-0.5">
                {activeCityName ? `Guide for ${activeCityName}` : 'Ask Tour Guide'} • {activeLangMeta.nativeName}
              </div>
            </div>
          </button>
        </div>
      )}

      {/* Main Chatbot Window */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 flex flex-col shadow-2xl bg-white border border-[#e5e0d8] overflow-hidden ${
            isMinimized
              ? 'bottom-6 right-6 w-80 h-16 rounded-2xl'
              : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[94vw] sm:w-[440px] md:w-[480px] h-[85vh] sm:h-[620px] max-h-[700px] rounded-3xl'
          }`}
        >
          {/* Header */}
          <div className="bg-linear-to-r from-[#2d2a26] via-[#3a352f] to-[#5A5A40] text-white p-3.5 sm:p-4 flex items-center justify-between shrink-0 border-b border-[#5A5A40]/40">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-[#E6BE8A] text-[#2d2a26] flex items-center justify-center shadow-xs">
                  <Bot className="w-5 h-5 text-[#2d2a26]" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#2d2a26] rounded-full"></span>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-serif font-bold text-sm sm:text-base text-white leading-none">
                    Margdarshak AI
                  </h3>
                  <span className="text-[9px] bg-[#E6BE8A]/30 text-[#E6BE8A] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                    {activeLangMeta.nativeName}
                  </span>
                </div>
                <p className="text-[10px] text-neutral-300 mt-0.5 leading-tight flex items-center gap-1">
                  <Compass className="w-2.5 h-2.5 text-[#E6BE8A]" />
                  <span>Indian Heritage & Cultural Companion</span>
                </p>
              </div>
            </div>

            {/* Header Control Buttons */}
            <div className="flex items-center gap-1 text-neutral-300">
              <button
                onClick={handleClearChat}
                title="Clear Chat History"
                className="w-7 h-7 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? 'Expand' : 'Minimize'}
                className="w-7 h-7 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={handleToggleOpen}
                title="Close"
                className="w-7 h-7 rounded-lg hover:bg-red-500/20 hover:text-red-300 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Context Breadcrumb Sub-Header */}
              {(activeCityName || activeMonumentName || activeFestivalName) && (
                <div className="bg-[#fbf9f6] px-4 py-2 border-b border-[#e5e0d8] flex items-center justify-between text-[11px] text-[#6b625b]">
                  <div className="flex items-center gap-1.5 font-medium truncate">
                    <MapPin className="w-3 h-3 text-[#9E3E26] shrink-0" />
                    <span>Active Context:</span>
                    <strong className="text-[#2d2a26] truncate">
                      {activeMonumentName || activeCityName || activeFestivalName}
                    </strong>
                  </div>
                  <span className="text-[10px] text-[#8c827a] shrink-0">11 Languages</span>
                </div>
              )}

              {/* Chat Message Scrollable Feed */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fdfcfb]">
                {messages.map((msg) => {
                  const isAssistant = msg.role === 'assistant';
                  const isSpeaking = currentlySpeakingId === msg.id;

                  return (
                    <div
                      key={msg.id}
                      className={`flex gap-2.5 ${isAssistant ? 'justify-start' : 'justify-end'}`}
                    >
                      {isAssistant && (
                        <div className="w-7 h-7 rounded-full bg-[#E6BE8A] text-[#2d2a26] flex items-center justify-center shrink-0 mt-1 shadow-xs">
                          <Bot className="w-3.5 h-3.5" />
                        </div>
                      )}

                      <div
                        className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed space-y-2 shadow-xs ${
                          isAssistant
                            ? 'bg-white text-[#2d2a26] border border-[#e5e0d8]'
                            : 'bg-[#5A5A40] text-white'
                        }`}
                      >
                        {/* Text Content with Basic Markdown Rendering */}
                        <div className="space-y-1.5 whitespace-pre-wrap">
                          {msg.text.split('\n\n').map((para, i) => (
                            <p key={i}>
                              {para.split('\n').map((line, j) => {
                                // Bold parsing for **text**
                                const parts = line.split(/(\*\*.*?\*\*)/g);
                                return (
                                  <span key={j} className="block">
                                    {parts.map((part, k) => {
                                      if (part.startsWith('**') && part.endsWith('**')) {
                                        return (
                                          <strong
                                            key={k}
                                            className={isAssistant ? 'text-[#2d2a26] font-bold' : 'text-white font-bold'}
                                          >
                                            {part.slice(2, -2)}
                                          </strong>
                                        );
                                      }
                                      return part;
                                    })}
                                  </span>
                                );
                              })}
                            </p>
                          ))}
                        </div>

                        {/* Footer info & Read-out button */}
                        <div
                          className={`flex items-center justify-between gap-2 pt-1 border-t text-[10px] ${
                            isAssistant
                              ? 'border-[#f0ece5] text-[#8c827a]'
                              : 'border-white/20 text-neutral-200'
                          }`}
                        >
                          <span>{msg.timestamp}</span>

                          {isAssistant && (
                            <button
                              onClick={() => handleReadOut(msg)}
                              className={`flex items-center gap-1 px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                                isSpeaking
                                  ? 'bg-[#9E3E26] text-white animate-pulse'
                                  : 'bg-[#f0ece5] text-[#5A5A40] hover:bg-[#9E3E26] hover:text-white'
                              }`}
                              title={isSpeaking ? 'Stop Audio' : 'Listen with Speech Narration'}
                            >
                              {isSpeaking ? (
                                <>
                                  <VolumeX className="w-3 h-3" />
                                  <span>Stop</span>
                                </>
                              ) : (
                                <>
                                  <Volume2 className="w-3 h-3" />
                                  <span>Listen</span>
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </div>

                      {!isAssistant && (
                        <div className="w-7 h-7 rounded-full bg-[#3a352f] text-white flex items-center justify-center shrink-0 mt-1">
                          <User className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Loading typing bubble */}
                {isLoading && (
                  <div className="flex gap-2.5 justify-start">
                    <div className="w-7 h-7 rounded-full bg-[#E6BE8A] text-[#2d2a26] flex items-center justify-center shrink-0 mt-1 shadow-xs">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className="bg-white border border-[#e5e0d8] rounded-2xl px-4 py-3 shadow-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-[#9E3E26] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="w-2 h-2 bg-[#5A5A40] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-2 h-2 bg-[#E6BE8A] rounded-full animate-bounce"></span>
                        <span className="text-[11px] text-[#8c827a] ml-1 font-medium">Margdarshak is thinking...</span>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Prompt Suggestion Chips */}
              {suggestions.length > 0 && (
                <div className="px-3 py-2 bg-[#f5f2ed] border-t border-[#e5e0d8] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                  <span className="text-[10px] font-bold uppercase text-[#8c827a] shrink-0 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#9E3E26]" />
                    <span>Suggestions:</span>
                  </span>
                  {suggestions.slice(0, 3).map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(chip)}
                      className="px-2.5 py-1 bg-white hover:bg-[#9E3E26] text-[#2d2a26] hover:text-white border border-[#e5e0d8] rounded-xl text-[11px] font-medium whitespace-nowrap transition-all cursor-pointer shadow-2xs shrink-0"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              )}

              {/* Input Area */}
              <div className="p-3 sm:p-4 bg-white border-t border-[#e5e0d8] shrink-0 space-y-2">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  {/* Voice Input Button */}
                  <button
                    type="button"
                    onClick={toggleVoiceInput}
                    title={isListening ? 'Listening... click to stop' : `Speak in ${activeLangMeta.name}`}
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                      isListening
                        ? 'bg-red-500 text-white animate-pulse ring-4 ring-red-300'
                        : 'bg-[#f0ece5] text-[#5A5A40] hover:bg-[#e2ded6]'
                    }`}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </button>

                  {/* Input Box */}
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder={
                      isListening
                        ? 'Listening to your voice...'
                        : getTranslation('tourguide.placeholder', currentLanguage) || 'Ask Margdarshak anything...'
                    }
                    disabled={isLoading}
                    className="flex-1 px-4 py-2.5 bg-[#f9f7f4] border border-[#e5e0d8] rounded-2xl text-xs text-[#2d2a26] placeholder-[#a0978f] focus:outline-none focus:border-[#9E3E26] focus:bg-white transition-all"
                  />

                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={!inputMessage.trim() || isLoading}
                    className="w-10 h-10 rounded-2xl bg-[#5A5A40] hover:bg-[#9E3E26] disabled:bg-[#e5e0d8] text-white disabled:text-[#a0978f] flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-xs"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                <div className="flex items-center justify-between text-[10px] text-[#8c827a] px-1">
                  <span>Voice input & replies in <strong>{activeLangMeta.name}</strong></span>
                  <span className="flex items-center gap-1 text-[#5A5A40]">
                    <span>Powered by Gemini AI</span>
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
