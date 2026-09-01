import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { X, Lock, Mail, User as UserIcon, Globe, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { loginWithGoogle, loginAsGuest, loginWithEmail, signupWithEmail, user } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await loginWithGoogle();
      onClose();
    } catch (err: any) {
      setError(err.message || 'Failed to sign in with Google');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await loginAsGuest();
      onClose();
    } catch (err: any) {
      setError(err.message || 'Failed to continue as guest');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      if (isSignUp) {
        if (!name.trim()) throw new Error('Please enter your full name');
        await signupWithEmail(email, password, name);
      } else {
        await loginWithEmail(email, password);
      }
      onClose();
    } catch (err: any) {
      setError(err.message || 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#faf8f5] rounded-2xl shadow-2xl border border-[#e5e0d8] overflow-hidden">
        {/* Header decoration */}
        <div className="bg-linear-to-r from-[#2c221e] via-[#43342d] to-[#2c221e] p-6 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E6BE8A]/20 text-[#E6BE8A] mb-3 border border-[#E6BE8A]/30">
            <Sparkles className="w-6 h-6" />
          </div>

          <h2 className="text-xl font-serif font-bold text-[#faf8f5]">
            {user ? 'Manage Your Heritage Account' : isSignUp ? 'Create Your Heritage Account' : 'Welcome to Virasat Explorer'}
          </h2>
          <p className="text-xs text-white/80 mt-1 max-w-xs mx-auto">
            Cloud sync your saved festivals, travel itineraries, passport stamps & community memories
          </p>
        </div>

        <div className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
              {error}
            </div>
          )}

          {/* Social / One-Click Logins */}
          <div className="space-y-2.5">
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white border border-[#d6cfc7] rounded-xl text-[#2d2a26] text-sm font-semibold hover:bg-[#f3efe9] transition-all shadow-xs disabled:opacity-50"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            <button
              onClick={handleGuestLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#f0ebe3] border border-[#d6cfc7] rounded-xl text-[#5A5A40] text-sm font-medium hover:bg-[#e6dfd5] transition-all disabled:opacity-50"
            >
              <Globe className="w-4 h-4 text-[#8a7f70]" />
              <span>Instant Guest Mode (Cloud Sync Enabled)</span>
            </button>
          </div>

          <div className="flex items-center gap-3 my-3">
            <div className="flex-1 h-px bg-[#e5e0d8]" />
            <span className="text-[11px] uppercase tracking-wider text-[#8a817c] font-semibold">or email</span>
            <div className="flex-1 h-px bg-[#e5e0d8]" />
          </div>

          {/* Email / Password Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {isSignUp && (
              <div>
                <label className="block text-xs font-semibold text-[#5A5A40] mb-1">Full Name</label>
                <div className="relative">
                  <UserIcon className="w-4 h-4 text-[#8a817c] absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dipten Sharma"
                    className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#d6cfc7] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#5A5A40]"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#5A5A40] mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#8a817c] absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#d6cfc7] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#5A5A40]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#5A5A40] mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#8a817c] absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  minLength={6}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#d6cfc7] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#5A5A40]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 bg-[#5A5A40] hover:bg-[#43432f] text-white text-sm font-semibold rounded-xl transition-all shadow-md disabled:opacity-50 mt-2"
            >
              {isLoading ? 'Please wait...' : isSignUp ? 'Sign Up & Sync' : 'Sign In'}
            </button>
          </form>

          {/* Toggle between login / sign up */}
          <div className="text-center pt-2">
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError(null);
              }}
              className="text-xs text-[#5A5A40] hover:underline font-semibold"
            >
              {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Create one"}
            </button>
          </div>

          {/* Features note */}
          <div className="pt-3 border-t border-[#e5e0d8] flex items-center justify-center gap-4 text-[10px] text-[#8a817c]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Firebase Security
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Real-time Cloud Sync
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
