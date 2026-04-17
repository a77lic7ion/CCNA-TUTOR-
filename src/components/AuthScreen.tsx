import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Network, ArrowRight, User as UserIcon, Monitor, Loader2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface AuthScreenProps {
  onStart: (name: string) => void;
  isLoading?: boolean;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ onStart, isLoading }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && !isLoading) {
      onStart(name.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0d0d0d] flex items-center justify-center p-6 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[800px] bg-brand/5 blur-[120px] rounded-full translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full -translate-x-1/2" />
        {/* Simple grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-2xl relative z-10"
      >
        <div className="mb-12">
          <div className="flex items-center gap-3 text-brand mb-6">
            <Monitor className="w-6 h-6" />
            <span className="font-mono text-sm tracking-[0.2em] font-bold uppercase">CCNA AI TUTOR</span>
          </div>
          
          <h1 className="text-7xl font-bold tracking-tight mb-6 text-white leading-[0.9]">
            Welcome!
          </h1>
          <p className="text-xl text-white/50 max-w-lg leading-relaxed">
            Enter your name to start your personalized Cisco Certified Network Associate training journey.
          </p>
        </div>

        <div className="glass p-12 rounded-2xl relative group">
          <div className="absolute top-4 right-6 font-mono text-[9px] text-white/20 tracking-widest">AUTH_V2.0_SYS</div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand block ml-1">
                Network Identity
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  autoFocus
                  placeholder="e.g. Admin_User"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-5 text-2xl font-medium focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all placeholder:text-white/10"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <UserIcon className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-brand/40 group-focus-within:text-brand transition-colors" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
              <button 
                type="submit"
                disabled={!name.trim() || isLoading}
                className="bg-brand text-white px-10 py-5 rounded-xl text-lg font-bold flex items-center justify-center gap-3 hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-[0.98] min-w-[220px]"
              >
                {isLoading ? (
                  <>Processing <Loader2 className="w-5 h-5 animate-spin" /></>
                ) : (
                  <>Sign in & Start <ArrowRight className="w-5 h-5" /></>
                )}
              </button>

              <button 
                type="button" 
                disabled={isLoading}
                onClick={() => onStart('Guest')}
                className="text-white/40 hover:text-white transition-colors flex items-center justify-center gap-2 group/skip disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <span className="text-sm font-medium">Continue as Guest</span>
                <ArrowRight className="w-4 h-4 translate-x-0 group-hover/skip:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 flex justify-between items-center text-[10px] text-white/20 font-mono tracking-widest uppercase">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              SYSTEM ONLINE
            </div>
            <span>NODE: US-WEST-2</span>
          </div>
          <span>© 2024 NETWORK MONOLITH SYSTEMS</span>
        </div>
      </motion.div>
    </div>
  );
};
