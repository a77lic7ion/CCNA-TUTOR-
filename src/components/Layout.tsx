import React from 'react';
import { Sidebar, ViewType } from './Sidebar';
import { Bell, Monitor, User as UserIcon } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
  userName: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onViewChange, userName }) => {
  return (
    <div className="flex h-screen bg-main-bg text-white overflow-hidden">
      <Sidebar currentView={currentView} onViewChange={onViewChange} userName={userName} />
      
      <div className="flex flex-col flex-grow overflow-hidden">
        {/* Top bar */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-10 bg-main-bg/50 backdrop-blur-sm z-20">
          <div className="flex items-center gap-12">
            <h1 className="text-xl font-bold tracking-tight">CCNA AI Tutor</h1>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Module 04: Switching Fundamentals</span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-6 pr-8 border-r border-white/5">
              <button className="text-white/40 hover:text-white transition-colors relative">
                <Bell className="w-5 h-5" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-brand rounded-full border-2 border-main-bg" />
              </button>
              <button className="text-white/40 hover:text-white transition-colors">
                <Monitor className="w-5 h-5" />
              </button>
            </div>
            
            <button className="flex items-center gap-3 py-2 pl-2 pr-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
              <div className="w-8 h-8 rounded-lg bg-brand/20 flex items-center justify-center text-brand">
                <UserIcon className="w-4 h-4 fill-brand" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-white/80">Profile</span>
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-grow overflow-y-auto relative custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
};
