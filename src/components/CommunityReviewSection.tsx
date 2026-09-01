import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { CommunityReview } from '../types';
import { addCommunityReview, subscribeReviewsForItem } from '../services/firebaseService';
import { Star, MessageSquare, Send, Sparkles, User, ThumbsUp, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface CommunityReviewSectionProps {
  itemId: string;
  itemType: 'festival' | 'monument' | 'city';
  itemTitle: string;
  onOpenAuthModal: () => void;
}

export const CommunityReviewSection: React.FC<CommunityReviewSectionProps> = ({
  itemId,
  itemType,
  itemTitle,
  onOpenAuthModal
}) => {
  const { user, userProfile } = useAuth();
  const [reviews, setReviews] = useState<CommunityReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Form states
  const [rating, setRating] = useState(5);
  const [travelTip, setTravelTip] = useState('');
  const [culturalInsight, setCulturalInsight] = useState('');
  const [experienceDate, setExperienceDate] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = subscribeReviewsForItem(itemId, (fetchedReviews) => {
      setReviews(fetchedReviews);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [itemId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!travelTip.trim() && !culturalInsight.trim()) return;

    if (!user) {
      onOpenAuthModal();
      return;
    }

    setIsSubmitting(true);
    try {
      await addCommunityReview({
        itemId,
        itemType,
        itemTitle,
        userId: user.uid,
        userName: userProfile?.displayName || user.displayName || 'Cultural Pilgrim',
        userAvatar: user.photoURL || undefined,
        rating,
        experienceDate: experienceDate || new Date().toISOString().split('T')[0],
        travelTip: travelTip.trim(),
        culturalInsight: culturalInsight.trim()
      });

      setTravelTip('');
      setCulturalInsight('');
      setShowForm(false);
      setSuccessMsg(true);
      setTimeout(() => setSuccessMsg(false), 4000);
    } catch (err) {
      console.error('Failed to submit review to Firestore:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#faf8f5] rounded-2xl border border-[#e5e0d8] p-5 sm:p-7 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e5e0d8] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#5A5A40]" />
            <h3 className="text-lg font-serif font-bold text-[#2d2a26]">
              Pilgrim & Traveler Heritage Reflections
            </h3>
          </div>
          <p className="text-xs text-[#8a817c] mt-0.5">
            Cloud-synced community tips, darshan advice & real traveler reflections
          </p>
        </div>

        <button
          onClick={() => {
            if (!user) {
              onOpenAuthModal();
            } else {
              setShowForm(!showForm);
            }
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#5A5A40] hover:bg-[#43432f] text-white text-xs font-semibold rounded-xl shadow-xs transition-all self-start sm:self-auto"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{showForm ? 'Cancel' : 'Share Experience'}</span>
        </button>
      </div>

      {successMsg && (
        <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Your heritage reflection has been securely published to Firebase Firestore!</span>
        </div>
      )}

      {/* Submission Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-[#d6cfc7] p-4 sm:p-5 space-y-4 animate-in fade-in duration-200">
          <h4 className="text-sm font-semibold text-[#2d2a26] font-serif">
            Share your reflection for &ldquo;{itemTitle}&rdquo;
          </h4>

          {/* Rating */}
          <div>
            <label className="block text-xs font-semibold text-[#5A5A40] mb-1">Cultural Experience Rating</label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="p-1 hover:scale-110 transition-transform"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
              <span className="text-xs text-[#8a817c] ml-2 font-medium">({rating} of 5 Stars)</span>
            </div>
          </div>

          {/* Practical travel tip */}
          <div>
            <label className="block text-xs font-semibold text-[#5A5A40] mb-1">
              Practical Travel / Darshan Tip
            </label>
            <textarea
              required
              rows={2}
              value={travelTip}
              onChange={(e) => setTravelTip(e.target.value)}
              placeholder="e.g. Best time for morning arti is 5:30 AM; deposit shoes at Gate 3 counter..."
              className="w-full text-xs sm:text-sm p-3 bg-[#faf8f5] border border-[#d6cfc7] rounded-xl focus:ring-2 focus:ring-[#5A5A40] focus:outline-hidden"
            />
          </div>

          {/* Cultural insight */}
          <div>
            <label className="block text-xs font-semibold text-[#5A5A40] mb-1">
              Cultural & Spiritual Insight (Optional)
            </label>
            <textarea
              rows={2}
              value={culturalInsight}
              onChange={(e) => setCulturalInsight(e.target.value)}
              placeholder="e.g. The sound of the Shankha echoes deeply across the ghats during sunset..."
              className="w-full text-xs sm:text-sm p-3 bg-[#faf8f5] border border-[#d6cfc7] rounded-xl focus:ring-2 focus:ring-[#5A5A40] focus:outline-hidden"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="text-[11px] text-[#8a817c]">
              Posting as: <strong className="text-[#2d2a26]">{userProfile?.displayName || user?.displayName || 'Cultural Traveler'}</strong>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#5A5A40] text-white text-xs font-semibold rounded-xl hover:bg-[#43432f] transition-all disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'Publishing...' : 'Publish to Cloud'}</span>
            </button>
          </div>
        </form>
      )}

      {/* Reviews List */}
      {loading ? (
        <div className="py-8 text-center text-xs text-[#8a817c]">
          Loading community reflections from Firebase...
        </div>
      ) : reviews.length === 0 ? (
        <div className="py-8 text-center bg-white rounded-xl border border-dashed border-[#d6cfc7] p-6">
          <p className="text-sm font-serif text-[#5A5A40] font-medium">Be the first to share your experience!</p>
          <p className="text-xs text-[#8a817c] mt-1 max-w-sm mx-auto">
            Help fellow travelers discover the best viewing spots, festive prasad tips, and authentic rituals.
          </p>
          <button
            onClick={() => {
              if (!user) onOpenAuthModal();
              else setShowForm(true);
            }}
            className="mt-3 px-4 py-1.5 bg-[#f0ebe3] hover:bg-[#e6dfd5] text-[#5A5A40] text-xs font-semibold rounded-lg transition-colors"
          >
            Leave a Tip
          </button>
        </div>
      ) : (
        <div className="space-y-3.5">
          {reviews.map((rev) => (
            <div key={rev.id} className="bg-white rounded-xl border border-[#e5e0d8] p-4 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  {rev.userAvatar ? (
                    <img
                      src={rev.userAvatar}
                      alt={rev.userName}
                      className="w-8 h-8 rounded-full object-cover border border-[#e5e0d8]"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-[#5A5A40]/10 text-[#5A5A40] flex items-center justify-center font-bold text-xs">
                      {rev.userName ? rev.userName[0].toUpperCase() : 'P'}
                    </div>
                  )}
                  <div>
                    <div className="text-xs font-bold text-[#2d2a26] flex items-center gap-1.5">
                      <span>{rev.userName}</span>
                      <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-normal">
                        Verified Explorer
                      </span>
                    </div>
                    <div className="text-[10px] text-[#8a817c] flex items-center gap-1">
                      <Calendar className="w-2.5 h-2.5" />
                      <span>{new Date(rev.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-0.5 text-amber-500">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
              </div>

              {rev.travelTip && (
                <div className="text-xs text-[#2d2a26] bg-[#faf8f5] p-2.5 rounded-lg border border-[#f0ebe3]">
                  <strong className="text-[#5A5A40]">💡 Travel Tip: </strong>
                  {rev.travelTip}
                </div>
              )}

              {rev.culturalInsight && (
                <p className="text-xs text-[#555] italic pl-2 border-l-2 border-[#E6BE8A]">
                  &ldquo;{rev.culturalInsight}&rdquo;
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
