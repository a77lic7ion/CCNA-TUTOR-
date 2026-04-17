import React from 'react';
import { 
  LayoutDashboard, 
  HelpCircle, 
  Activity, 
  Settings, 
  BookOpen, 
  Terminal, 
  HelpCircle as Help,
  FileText,
  BadgePlus,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export type ViewType = 'dashboard' | 'quiz' | 'labs' | 'settings' | 'modules' | 'lessons';

interface SidebarProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
  userName: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, userName }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'lessons', label: 'Lessons', icon: BookOpen },
    { id: 'quiz', label: 'Diagnostic', icon: HelpCircle },
    { id: 'labs', label: 'Lab Sim', icon: Activity },
    { id: 'settings', label: 'Profile', icon: Settings },
  ] as const;

  return (
    <aside className="w-64 bg-sidebar-bg border-r border-white/5 flex flex-col shrink-0">
      {/* Branding */}
      <div className="p-8">
        <h2 className="text-xl font-bold tracking-tight text-brand/90 leading-tight">
          Network Monolith
        </h2>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Active Session: VLAN 10</span>
        </div>
      </div>

      {/* Primary Nav */}
      <nav className="flex-grow px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all group",
                isActive 
                  ? "bg-white/10 text-white" 
                  : "text-white/40 hover:text-white/80 hover:bg-white/5"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive ? "text-brand" : "text-white/20 group-hover:text-white/40")} />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Action Area */}
      <div className="p-4 space-y-6">
        <button className="w-full bg-brand/90 hover:bg-brand text-white py-4 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
          New Simulation
        </button>

        <div className="space-y-4 pt-4 border-t border-white/5">
          <button className="flex items-center gap-3 px-4 text-white/30 hover:text-white/60 text-xs font-medium transition-colors">
            <BookOpen className="w-4 h-4" /> Documentation
          </button>
          <button className="flex items-center gap-3 px-4 text-white/30 hover:text-white/60 text-xs font-medium transition-colors">
            <Help className="w-4 h-4" /> Help
          </button>
        </div>
      </div>
    </aside>
  );
};
