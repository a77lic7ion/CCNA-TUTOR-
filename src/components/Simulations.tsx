import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { Terminal } from './Terminal';
import { 
  CheckCircle2, 
  Circle, 
  Box, 
  Map as MapIcon, 
  BookOpen, 
  StickyNote, 
  Play, 
  HelpCircle,
  Clock,
  Lightbulb
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  themeVariables: {
    primaryColor: '#e67e5f',
    primaryTextColor: '#fff',
    lineColor: '#555',
    secondaryColor: '#1a1a1a',
    tertiaryColor: '#1a1a1a',
  }
});

interface Objective {
  id: string;
  text: string;
  hint?: string;
  isComplete: boolean;
}

export const Simulations: React.FC = () => {
  const mermaidRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'topology' | 'cli' | 'theory' | 'notes'>('topology');
  const [objectives, setObjectives] = useState<Objective[]>([
    { id: '1', text: 'Configure Hostnames on all devices', hint: 'Set R1, SW1, and SW2 identifying labels.', isComplete: true },
    { id: '2', text: 'Configure SW1 as the root bridge', hint: 'Use the spanning-tree vlan 1 priority command.', isComplete: false },
    { id: '3', text: 'Verify STP Topology convergence', hint: 'Ensure ports transition to forwarding.', isComplete: false },
  ]);

  const topology = `
    graph TD
      R1((R1-CORE)) --- SW1[SW1-DIST]
      R1 --- SW2[SW2-ACCESS]
      SW1 --- SW2
      
      style R1 fill:#e67e5f20,stroke:#e67e5f,stroke-width:2px
      style SW1 fill:#222,stroke:#555
      style SW2 fill:#222,stroke:#555
  `;

  useEffect(() => {
    if (mermaidRef.current) {
      mermaidRef.current.innerHTML = topology;
      mermaid.contentLoaded();
    }
  }, [topology]);

  return (
    <div className="flex flex-col h-full bg-[#0a0a0a]">
      {/* Sub-header Tabs */}
      <header className="h-14 border-b border-white/5 flex items-center justify-between px-10 bg-white/5">
        <div className="flex items-center gap-8 h-full">
          {[
            { id: 'cli', label: 'CLI', icon: Box },
            { id: 'topology', label: 'Topology', icon: MapIcon },
            { id: 'theory', label: 'Theory', icon: BookOpen },
            { id: 'notes', label: 'Notes', icon: StickyNote },
          ].map((tab) => {
             const Icon = tab.icon;
             const isActive = activeTab === tab.id;
             return (
               <button 
                 key={tab.id} 
                 onClick={() => setActiveTab(tab.id as any)}
                 className={cn(
                   "flex items-center gap-2 h-full text-xs font-bold uppercase tracking-widest px-4 border-b-2 transition-all",
                   isActive ? "text-brand border-brand" : "text-white/30 border-transparent hover:text-white/60"
                 )}
               >
                 <Icon className="w-4 h-4" /> {tab.label}
               </button>
             );
          })}
        </div>

        <div className="flex items-center gap-6">
          <button className="text-white/40 hover:text-white"><CheckCircle2 className="w-5 h-5" /></button>
          <button className="bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-lg transition-all">
            End Session
          </button>
        </div>
      </header>

      <div className="flex flex-grow overflow-hidden">
        {/* Main Simulation Stage */}
        <div className="flex-grow relative overflow-hidden bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px]">
          <div className="absolute top-8 left-10 flex gap-4">
            <div className="glass px-4 py-2 rounded-lg flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">System: Operational</span>
            </div>
            <div className="glass px-4 py-2 rounded-lg flex items-center gap-3">
              <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Lab ID: STP-ROOT-04</span>
            </div>
          </div>

          <div className="w-full h-full flex items-center justify-center p-20">
             <div ref={mermaidRef} className="mermaid transition-all duration-1000 transform scale-150" />
          </div>

          {/* Floaters for Zoom */}
          <div className="absolute bottom-8 left-10 space-y-2">
            <div className="flex flex-col glass rounded-xl border border-white/10 overflow-hidden">
               <button className="p-3 text-white/60 hover:text-white border-b border-white/10">+</button>
               <button className="p-3 text-white/60 hover:text-white border-b border-white/10">-</button>
               <button className="p-3 text-white/60 hover:text-white"><MapIcon className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        {/* Right Panel: Objectives & CLI */}
        <div className="w-[450px] border-l border-white/5 bg-sidebar-bg flex flex-col pt-10">
          <div className="px-10 space-y-12 flex flex-col flex-grow overflow-y-auto custom-scrollbar pb-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter mb-6 uppercase">Module Lab: STP Root Selection</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                   <div className="flex-grow w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-brand" style={{ width: '33%' }} />
                   </div>
                   <span className="ml-4 text-[11px] font-bold text-white/40 uppercase tracking-widest whitespace-nowrap">33% Completed</span>
                </div>
                <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand bg-brand/10 px-3 py-1.5 rounded inline-flex items-center gap-2">
                   <Clock className="w-3 h-3" /> Est: 15 MIN
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Current Objectives</h4>
              <div className="space-y-6">
                {objectives.map((obj) => (
                  <motion.div 
                    key={obj.id} 
                    className={cn(
                      "relative pl-10 group",
                      obj.isComplete ? "text-white/40" : "text-white"
                    )}
                  >
                    <div className="absolute left-0 top-0 mt-1">
                      {obj.isComplete ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                        <Circle className="w-5 h-5 text-white/20" />
                      )}
                    </div>
                    <div className={cn(
                      "transition-all",
                      !obj.isComplete && "group-hover:translate-x-1"
                    )}>
                      <h5 className={cn(
                        "font-bold text-sm tracking-tight mb-2",
                        obj.isComplete && "line-through"
                      )}>
                        {obj.text}
                      </h5>
                      {!obj.isComplete && (
                        <div className="space-y-3">
                           <p className="text-xs text-white/40 leading-relaxed font-medium">Use the <code className="text-brand">spanning-tree vlan 1 priority</code> command to ensure SW1 always wins the election.</p>
                           <button className="flex items-center gap-1.5 text-[9px] font-bold text-brand uppercase tracking-widest">
                             <Lightbulb className="w-3 h-3" /> Show Documentation
                           </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Compact Terminal */}
          <div className="mt-auto border-t border-white/5 bg-black p-4">
             <div className="flex items-center justify-between mb-2">
               <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">CLI Terminal: SW1-DIST</span>
               <Play className="w-3 h-3 text-brand" />
             </div>
             <div className="h-64 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
               <Terminal className="h-full border-none rounded-none" initialOutput={['SW1-DIST> enable', 'SW1-DIST# configure terminal', 'SW1-DIST(config)# ']} />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
