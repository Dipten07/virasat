import React, { useState, useEffect } from 'react';
import { CultureQuizQuestion, QuizHistoryRecord, SupportedLanguage } from '../types';
import {
  CULTURE_QUIZ_QUESTIONS,
  QUIZ_CATEGORIES,
  HERITAGE_BADGES
} from '../data/cultureQuizData';
import { playPhraseAudio } from '../data/phrasesData';
import { stopSpeech, getSpeechCodeForLang } from '../services/speechService';
import { getTranslation } from '../data/languages';
import {
  Sparkles,
  Award,
  CheckCircle2,
  XCircle,
  Volume2,
  VolumeX,
  RotateCcw,
  Share2,
  ArrowRight,
  Flame,
  Landmark,
  Music,
  Palette,
  Utensils,
  Scroll,
  Check,
  ChevronRight,
  History,
  Timer,
  Compass
} from 'lucide-react';

interface CultureQuizViewProps {
  currentLanguage?: SupportedLanguage;
  onSelectCity?: (cityId: string) => void;
  onSelectMonument?: (monumentId: string) => void;
  onExploreMap?: () => void;
}

export const CultureQuizView: React.FC<CultureQuizViewProps> = ({
  currentLanguage = 'en',
  onSelectCity,
  onSelectMonument,
  onExploreMap
}) => {
  // Category & Configuration state
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [questionCountLimit, setQuestionCountLimit] = useState<number>(10);
  const [timerEnabled, setTimerEnabled] = useState<boolean>(false);

  // Active Game State
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'result'>('intro');
  const [currentQuestions, setCurrentQuestions] = useState<CultureQuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<{ question: CultureQuizQuestion; selectedIndex: number; isCorrect: boolean }[]>([]);
  
  // Timer state
  const [timeLeft, setTimeLeft] = useState<number>(25);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [copiedShare, setCopiedShare] = useState<boolean>(false);
  const [quizHistory, setQuizHistory] = useState<QuizHistoryRecord[]>([]);

  // Load history from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('virasat_quiz_history');
      if (saved) {
        setQuizHistory(JSON.parse(saved));
      }
    } catch {
      // Ignored
    }
  }, []);

  // Timer countdown hook
  useEffect(() => {
    if (gameState !== 'playing' || !timerEnabled || isAnswerSubmitted) return;

    if (timeLeft <= 0) {
      // Auto submit time out
      handleSubmitAnswer(-1);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, timerEnabled, timeLeft, isAnswerSubmitted]);

  // Start Quiz
  const handleStartQuiz = (category: string = selectedCategory, count: number = questionCountLimit) => {
    let pool = [...CULTURE_QUIZ_QUESTIONS];
    if (category !== 'all') {
      pool = pool.filter((q) => q.category === category);
    }
    
    // Shuffle pool
    pool = pool.sort(() => Math.random() - 0.5);
    const selected = pool.slice(0, Math.min(count, pool.length));

    setCurrentQuestions(selected);
    setCurrentIndex(0);
    setSelectedAnswerIndex(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setUserAnswers([]);
    setTimeLeft(25);
    setGameState('playing');
  };

  // Submit Answer
  const handleSubmitAnswer = (index: number) => {
    if (isAnswerSubmitted) return;

    const currentQ = currentQuestions[currentIndex];
    const isCorrect = index === currentQ.correctAnswerIndex;
    
    setSelectedAnswerIndex(index);
    setIsAnswerSubmitted(true);

    if (isCorrect) {
      setScore((prev) => prev + 10);
      setStreak((prev) => {
        const nextStreak = prev + 1;
        if (nextStreak > maxStreak) setMaxStreak(nextStreak);
        return nextStreak;
      });
    } else {
      setStreak(0);
    }

    setUserAnswers((prev) => [
      ...prev,
      {
        question: currentQ,
        selectedIndex: index,
        isCorrect
      }
    ]);
  };

  // Next Question or Finish
  const handleNextQuestion = () => {
    if (currentIndex + 1 < currentQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswerIndex(null);
      setIsAnswerSubmitted(false);
      setTimeLeft(25);
    } else {
      // Game Complete
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const totalQ = currentQuestions.length;
    const finalScore = score + (selectedAnswerIndex === currentQuestions[currentIndex]?.correctAnswerIndex ? 10 : 0);
    const accuracy = totalQ > 0 ? Math.round((finalScore / (totalQ * 10)) * 100) : 0;
    
    const badge = HERITAGE_BADGES.find((b) => accuracy >= b.minScore) || HERITAGE_BADGES[HERITAGE_BADGES.length - 1];

    const record: QuizHistoryRecord = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }),
      category: selectedCategory,
      score: finalScore,
      totalQuestions: totalQ,
      accuracy,
      timeSpentSeconds: totalQ * 15,
      badgeEarned: badge.title
    };

    const updatedHistory = [record, ...quizHistory].slice(0, 10);
    setQuizHistory(updatedHistory);
    try {
      localStorage.setItem('virasat_quiz_history', JSON.stringify(updatedHistory));
    } catch {
      // Ignore
    }

    setGameState('result');
  };

  // Audio narration
  const handleNarration = async () => {
    if (isAudioPlaying) {
      stopSpeech();
      setIsAudioPlaying(false);
      return;
    }

    const currentQ = currentQuestions[currentIndex];
    if (!currentQ) return;

    setIsAudioPlaying(true);
    const questionText = (currentLanguage === 'hi' && currentQ.hindiQuestion) ? currentQ.hindiQuestion : currentQ.question;
    const textToRead = `${questionText}. Option A: ${currentQ.options[0]}. Option B: ${currentQ.options[1]}. Option C: ${currentQ.options[2]}. Option D: ${currentQ.options[3]}.`;
    const speechCode = getSpeechCodeForLang(currentLanguage);

    await playPhraseAudio(textToRead, speechCode, 0.92);
    setIsAudioPlaying(false);
  };

  // Share score
  const handleShareScore = () => {
    const totalQ = currentQuestions.length;
    const accuracy = totalQ > 0 ? Math.round((score / (totalQ * 10)) * 100) : 0;
    const badge = HERITAGE_BADGES.find((b) => accuracy >= b.minScore) || HERITAGE_BADGES[3];

    const shareText = `🏛️ I scored ${score} pts (${accuracy}% accuracy) and earned the "${badge.title}" badge on the Virasat Indian Culture & Heritage Quiz! Explore India's sacred traditions, temples, and living arts with Virasat.`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 3000);
    }
  };

  // Category Icon helper
  const renderCategoryIcon = (iconName: string, className: string = 'w-4 h-4') => {
    switch (iconName) {
      case 'Landmark': return <Landmark className={className} />;
      case 'Flame': return <Flame className={className} />;
      case 'Music': return <Music className={className} />;
      case 'Palette': return <Palette className={className} />;
      case 'Utensils': return <Utensils className={className} />;
      case 'Scroll': return <Scroll className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  const currentQ = currentQuestions[currentIndex];
  const totalQuestions = currentQuestions.length;
  const currentAccuracy = totalQuestions > 0 ? Math.round((score / (totalQuestions * 10)) * 100) : 0;
  const currentBadge = HERITAGE_BADGES.find((b) => currentAccuracy >= b.minScore) || HERITAGE_BADGES[3];

  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      {/* Top Header Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2d2a26] via-[#3d3832] to-[#2d2a26] text-white p-6 sm:p-10 border border-[#4a443c] shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#E6BE8A] text-[#2d2a26] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" /> Indian Heritage Trivia
            </span>
            <span className="text-[#E6BE8A] text-xs font-serif font-medium">
              Architecture &bull; Sacred Festivals &bull; Classical Arts &bull; GI Crafts &bull; Royal Dynasties
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Bharatiya Sanskriti & Heritage Quiz
          </h2>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
            Test your cultural wisdom on ancient rock-cut marvels, celestial festival calendars, Natyashastra dance mudras, handloom traditions, and temple culinary legacies.
          </p>
        </div>
      </div>

      {/* =========================================================================
          VIEW 1: QUIZ INTRO & CATEGORY SELECTION
         ========================================================================= */}
      {gameState === 'intro' && (
        <div className="space-y-8">
          {/* Quick Stats / Category Selection Card */}
          <div className="bg-[#faf8f5] rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e5e0d8] pb-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#2d2a26]">
                  Select Quiz Category
                </h3>
                <p className="text-xs text-[#6b625b] mt-1">
                  Choose a specialized heritage realm or challenge yourself with all categories combined.
                </p>
              </div>

              {/* Game Mode Pill Options */}
              <div className="flex items-center gap-2 bg-[#ece7df] p-1.5 rounded-2xl shrink-0">
                <button
                  type="button"
                  onClick={() => setQuestionCountLimit(5)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    questionCountLimit === 5
                      ? 'bg-white text-[#8A3324] shadow-sm'
                      : 'text-[#6b625b] hover:text-[#2d2a26]'
                  }`}
                >
                  ⚡ Rapid (5 Qs)
                </button>
                <button
                  type="button"
                  onClick={() => setQuestionCountLimit(10)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    questionCountLimit === 10
                      ? 'bg-white text-[#8A3324] shadow-sm'
                      : 'text-[#6b625b] hover:text-[#2d2a26]'
                  }`}
                >
                  🏆 Master (10 Qs)
                </button>
                <button
                  type="button"
                  onClick={() => setTimerEnabled(!timerEnabled)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    timerEnabled
                      ? 'bg-[#8A3324] text-white'
                      : 'text-[#6b625b] hover:text-[#2d2a26]'
                  }`}
                  title="Enable 25-second timer per question"
                >
                  <Timer className="w-3.5 h-3.5" />
                  {timerEnabled ? 'Timer ON' : 'Timer OFF'}
                </button>
              </div>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {QUIZ_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                const count = cat.id === 'all' 
                  ? CULTURE_QUIZ_QUESTIONS.length 
                  : CULTURE_QUIZ_QUESTIONS.filter(q => q.category === cat.id).length;

                return (
                  <div
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#8A3324]/8 border-[#8A3324] ring-2 ring-[#8A3324]/20 shadow-md transform -translate-y-0.5'
                        : 'bg-white hover:bg-[#fbf9f6] border-[#e5e0d8] hover:border-[#8A3324]/40 hover:shadow-sm'
                    }`}
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm"
                          style={{ backgroundColor: cat.color }}
                        >
                          {renderCategoryIcon(cat.iconName, 'w-5 h-5')}
                        </div>
                        <span className="text-[11px] font-bold text-[#8c827a] bg-[#f5f2eb] px-2.5 py-0.5 rounded-full">
                          {count} Questions
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-serif font-bold text-base text-[#2d2a26]">
                            {cat.name}
                          </h4>
                        </div>
                        <p className="text-[11px] font-serif text-[#8A3324] font-semibold">
                          {cat.hindiName}
                        </p>
                      </div>

                      <p className="text-xs text-[#6b625b] line-clamp-2 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#f0ece5] flex items-center justify-between text-xs">
                      <span className={`font-semibold ${isSelected ? 'text-[#8A3324]' : 'text-[#8c827a]'}`}>
                        {isSelected ? 'Selected Category' : 'Click to select'}
                      </span>
                      <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-[#8A3324]' : 'text-[#8c827a]'}`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Launch Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#6b625b]">
                <Sparkles className="w-4 h-4 text-[#8A3324]" />
                <span>Earn cultural ranks from <strong>Heritage Novice</strong> to <strong>Grand Itihasa Acharya</strong></span>
              </div>

              <button
                type="button"
                onClick={() => handleStartQuiz(selectedCategory, questionCountLimit)}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#8A3324] hover:bg-[#722a1d] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Begin Heritage Challenge</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Past History & Badges Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Badges Overview */}
            <div className="bg-[#faf8f5] rounded-3xl p-6 border border-[#e5e0d8] space-y-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#8A3324]" />
                <h4 className="font-serif font-bold text-base text-[#2d2a26]">
                  Heritage Mastery Badges
                </h4>
              </div>

              <div className="space-y-3">
                {HERITAGE_BADGES.map((b) => (
                  <div key={b.title} className="p-3 bg-white rounded-2xl border border-[#e5e0d8] flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#8A3324]/10 flex items-center justify-center text-[#8A3324] shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-[#2d2a26]">{b.title}</span>
                        <span className="text-[10px] font-bold text-[#8A3324]">({b.minScore}%+)</span>
                      </div>
                      <p className="text-[11px] text-[#6b625b] truncate">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Attempts History */}
            <div className="lg:col-span-2 bg-[#faf8f5] rounded-3xl p-6 border border-[#e5e0d8] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <History className="w-5 h-5 text-[#8A3324]" />
                  <h4 className="font-serif font-bold text-base text-[#2d2a26]">
                    Recent Quiz History
                  </h4>
                </div>
                {quizHistory.length > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      localStorage.removeItem('virasat_quiz_history');
                      setQuizHistory([]);
                    }}
                    className="text-[11px] text-[#8c827a] hover:text-[#8A3324] underline cursor-pointer"
                  >
                    Clear History
                  </button>
                )}
              </div>

              {quizHistory.length === 0 ? (
                <div className="p-8 text-center bg-white rounded-2xl border border-dashed border-[#e2ddd5] text-[#8c827a] space-y-2">
                  <Compass className="w-8 h-8 mx-auto text-[#8c827a]/60" />
                  <p className="text-xs">No past quiz attempts yet. Start your first challenge above!</p>
                </div>
              ) : (
                <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                  {quizHistory.map((rec) => (
                    <div key={rec.id} className="p-3 bg-white rounded-2xl border border-[#e5e0d8] flex items-center justify-between text-xs">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#2d2a26] capitalize">{rec.category}</span>
                          <span className="bg-[#8A3324]/10 text-[#8A3324] font-bold text-[10px] px-2 py-0.5 rounded-full">
                            {rec.badgeEarned}
                          </span>
                        </div>
                        <span className="text-[10px] text-[#8c827a]">{rec.date}</span>
                      </div>

                      <div className="text-right">
                        <span className="font-bold text-[#8A3324] text-sm">{rec.score} pts</span>
                        <span className="text-[10px] text-[#6b625b] block">{rec.accuracy}% accuracy</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW 2: ACTIVE QUESTION SCREEN
         ========================================================================= */}
      {gameState === 'playing' && currentQ && (
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Status & Progress Bar */}
          <div className="bg-[#faf8f5] rounded-3xl p-5 border border-[#e5e0d8] shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="bg-[#8A3324] text-white font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider">
                  Question {currentIndex + 1} of {totalQuestions}
                </span>
                <span className="text-[#6b625b] capitalize font-medium">
                  {QUIZ_CATEGORIES.find(c => c.id === currentQ.category)?.name}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {timerEnabled && (
                  <div className={`flex items-center gap-1 font-bold px-2.5 py-1 rounded-xl text-xs ${
                    timeLeft <= 5 ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-[#e8e2d8] text-[#2d2a26]'
                  }`}>
                    <Timer className="w-3.5 h-3.5" />
                    <span>{timeLeft}s</span>
                  </div>
                )}
                <div className="flex items-center gap-1 text-[#D97706] font-bold">
                  <Flame className="w-4 h-4" />
                  <span>Streak: {streak}</span>
                </div>
                <div className="text-[#8A3324] font-bold">
                  Score: {score}
                </div>
              </div>
            </div>

            {/* Progress track */}
            <div className="w-full bg-[#e5e0d8] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#8A3324] h-full transition-all duration-300 rounded-full"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] shadow-md space-y-6">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c827a] bg-[#f5f2eb] px-2.5 py-1 rounded-md">
                    Difficulty: {currentQ.difficulty}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-serif font-bold text-[#2d2a26] leading-snug mt-2">
                    {currentQ.question}
                  </h3>
                  {currentQ.hindiQuestion && (
                    <p className="text-xs sm:text-sm font-serif text-[#8A3324] font-medium leading-relaxed">
                      {currentQ.hindiQuestion}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleNarration}
                  className={`p-2.5 rounded-2xl border transition-all cursor-pointer shrink-0 ${
                    isAudioPlaying
                      ? 'bg-[#8A3324] text-white border-[#8A3324] animate-pulse'
                      : 'bg-[#faf8f5] hover:bg-[#8A3324] text-[#6b625b] hover:text-white border-[#e5e0d8]'
                  }`}
                  title="Listen to question"
                >
                  {isAudioPlaying ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {currentQ.options.map((option, optIdx) => {
                const letters = ['A', 'B', 'C', 'D'];
                const isSelected = selectedAnswerIndex === optIdx;
                const isCorrect = optIdx === currentQ.correctAnswerIndex;

                let btnStyles = 'bg-[#faf8f5] hover:bg-[#f3eee7] border-[#e5e0d8] text-[#2d2a26]';
                let letterStyles = 'bg-white border-[#e0dad0] text-[#6b625b]';

                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    btnStyles = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400/20';
                    letterStyles = 'bg-emerald-600 text-white border-emerald-600';
                  } else if (isSelected && !isCorrect) {
                    btnStyles = 'bg-red-50 border-red-400 text-red-950 ring-2 ring-red-300/20';
                    letterStyles = 'bg-red-500 text-white border-red-500';
                  } else {
                    btnStyles = 'bg-neutral-50/60 border-neutral-200 text-neutral-400 opacity-60';
                    letterStyles = 'bg-neutral-100 text-neutral-400 border-neutral-200';
                  }
                } else if (isSelected) {
                  btnStyles = 'bg-[#8A3324]/10 border-[#8A3324] text-[#8A3324] ring-2 ring-[#8A3324]/20';
                  letterStyles = 'bg-[#8A3324] text-white border-[#8A3324]';
                }

                return (
                  <button
                    key={optIdx}
                    type="button"
                    disabled={isAnswerSubmitted}
                    onClick={() => handleSubmitAnswer(optIdx)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${btnStyles}`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-8 h-8 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 border ${letterStyles}`}>
                        {letters[optIdx]}
                      </div>
                      <span className="text-xs sm:text-sm font-medium leading-relaxed">
                        {option}
                      </span>
                    </div>

                    {isAnswerSubmitted && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Did You Know (Shown after answer submission) */}
            {isAnswerSubmitted && (
              <div className="space-y-4 pt-4 border-t border-[#f0ece5] animate-fadeIn">
                <div className={`p-4 rounded-2xl text-xs space-y-1.5 ${
                  selectedAnswerIndex === currentQ.correctAnswerIndex
                    ? 'bg-emerald-50/80 border border-emerald-200 text-emerald-900'
                    : 'bg-amber-50/80 border border-amber-200 text-amber-950'
                }`}>
                  <div className="font-bold flex items-center gap-1.5 text-sm">
                    {selectedAnswerIndex === currentQ.correctAnswerIndex ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Excellent! That's correct (+10 pts)</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-amber-600" />
                        <span>Insight & Explanation</span>
                      </>
                    )}
                  </div>
                  <p className="leading-relaxed text-xs sm:text-sm">
                    {currentQ.explanation}
                  </p>
                </div>

                {/* Did You Know Box */}
                {currentQ.didYouKnow && (
                  <div className="p-4 rounded-2xl bg-[#E6BE8A]/15 border border-[#E6BE8A]/30 text-xs text-[#2d2a26] space-y-1">
                    <div className="font-bold text-[#8A3324] flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                      <Sparkles className="w-3.5 h-3.5" />
                      Did You Know?
                    </div>
                    <p className="italic text-[#4a443c] leading-relaxed">
                      "{currentQ.didYouKnow}"
                    </p>
                  </div>
                )}

                {/* Related Monument / City link shortcuts */}
                {(currentQ.relatedCityId || currentQ.relatedMonumentId) && (
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {currentQ.relatedMonumentId && onSelectMonument && (
                      <button
                        type="button"
                        onClick={() => onSelectMonument(currentQ.relatedMonumentId!)}
                        className="px-3 py-1.5 bg-[#f5f2eb] hover:bg-[#8A3324] text-[#2d2a26] hover:text-white rounded-xl font-semibold transition-colors cursor-pointer flex items-center gap-1 border border-[#e2ddd5]"
                      >
                        <Landmark className="w-3.5 h-3.5" />
                        <span>Explore Monument in Virasat</span>
                      </button>
                    )}
                    {currentQ.relatedCityId && onSelectCity && (
                      <button
                        type="button"
                        onClick={() => onSelectCity(currentQ.relatedCityId!)}
                        className="px-3 py-1.5 bg-[#f5f2eb] hover:bg-[#8A3324] text-[#2d2a26] hover:text-white rounded-xl font-semibold transition-colors cursor-pointer flex items-center gap-1 border border-[#e2ddd5]"
                      >
                        <Compass className="w-3.5 h-3.5" />
                        <span>Explore Destination</span>
                      </button>
                    )}
                  </div>
                )}

                {/* Next Button */}
                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="px-8 py-3.5 bg-[#8A3324] hover:bg-[#722a1d] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-2xl shadow-lg transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>{currentIndex + 1 < totalQuestions ? 'Next Question' : 'View Results'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW 3: RESULTS SCREEN
         ========================================================================= */}
      {gameState === 'result' && (
        <div className="max-w-3xl mx-auto space-y-8 animate-scaleUp">
          {/* Result Card */}
          <div className="bg-gradient-to-b from-[#faf8f5] to-white rounded-3xl p-6 sm:p-10 border border-[#e5e0d8] shadow-xl text-center space-y-6">
            <div className="w-20 h-20 rounded-3xl bg-[#8A3324]/10 border-2 border-[#8A3324]/30 text-[#8A3324] flex items-center justify-center mx-auto shadow-inner">
              <Award className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="bg-[#E6BE8A] text-[#2d2a26] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Heritage Mastery Evaluation
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#2d2a26]">
                {currentBadge.title}
              </h3>
              <p className="text-sm font-serif text-[#8A3324] font-semibold">
                ({currentBadge.hindiTitle})
              </p>
              <p className="text-xs sm:text-sm text-[#6b625b] max-w-md mx-auto">
                {currentBadge.description}
              </p>
            </div>

            {/* Score Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#ece7df]">
              <div className="p-3 bg-[#faf8f5] rounded-2xl border border-[#e5e0d8]">
                <span className="text-[10px] uppercase font-bold text-[#8c827a]">Total Score</span>
                <div className="text-2xl font-serif font-bold text-[#8A3324] mt-0.5">{score} pts</div>
              </div>
              <div className="p-3 bg-[#faf8f5] rounded-2xl border border-[#e5e0d8]">
                <span className="text-[10px] uppercase font-bold text-[#8c827a]">Accuracy</span>
                <div className="text-2xl font-serif font-bold text-emerald-600 mt-0.5">{currentAccuracy}%</div>
              </div>
              <div className="p-3 bg-[#faf8f5] rounded-2xl border border-[#e5e0d8]">
                <span className="text-[10px] uppercase font-bold text-[#8c827a]">Best Streak</span>
                <div className="text-2xl font-serif font-bold text-[#D97706] mt-0.5">{maxStreak} 🔥</div>
              </div>
              <div className="p-3 bg-[#faf8f5] rounded-2xl border border-[#e5e0d8]">
                <span className="text-[10px] uppercase font-bold text-[#8c827a]">Questions</span>
                <div className="text-2xl font-serif font-bold text-[#2d2a26] mt-0.5">{totalQuestions}</div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => handleStartQuiz(selectedCategory, questionCountLimit)}
                className="px-6 py-3 bg-[#8A3324] hover:bg-[#722a1d] text-white font-bold text-xs uppercase tracking-wider rounded-2xl shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Play Again</span>
              </button>

              <button
                type="button"
                onClick={() => setGameState('intro')}
                className="px-6 py-3 bg-[#faf8f5] hover:bg-[#f0ece5] text-[#2d2a26] font-bold text-xs uppercase tracking-wider rounded-2xl border border-[#e5e0d8] shadow-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Change Category</span>
              </button>

              <button
                type="button"
                onClick={handleShareScore}
                className="px-6 py-3 bg-white hover:bg-neutral-50 text-[#8A3324] font-bold text-xs uppercase tracking-wider rounded-2xl border border-[#8A3324]/30 shadow-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>{copiedShare ? 'Copied to Clipboard!' : 'Share Score'}</span>
              </button>
            </div>
          </div>

          {/* Detailed Question Review */}
          <div className="bg-[#faf8f5] rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] space-y-4">
            <h4 className="text-lg font-serif font-bold text-[#2d2a26] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#8A3324]" />
              <span>Question-by-Question Review</span>
            </h4>

            <div className="space-y-4 divide-y divide-[#ece7df]">
              {userAnswers.map((item, idx) => (
                <div key={idx} className="pt-4 first:pt-0 space-y-2 text-xs">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-[#2d2a26]">
                      {idx + 1}. {item.question.question}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                      item.isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {item.isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    <div className={`p-2 rounded-xl border ${
                      item.isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-red-50 border-red-200 text-red-900'
                    }`}>
                      <strong>Your Answer:</strong> {item.selectedIndex >= 0 ? item.question.options[item.selectedIndex] : 'Time Expired'}
                    </div>

                    {!item.isCorrect && (
                      <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                        <strong>Correct Answer:</strong> {item.question.options[item.question.correctAnswerIndex]}
                      </div>
                    )}
                  </div>

                  <p className="text-[#6b625b] italic text-[11px] bg-white p-2.5 rounded-xl border border-[#e5e0d8]">
                    {item.question.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
