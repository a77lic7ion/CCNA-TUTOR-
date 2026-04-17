import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AI_MODELS } from '@/src/constants';
import { Cpu, Zap, Database, Activity, RefreshCw, Save, ShieldCheck } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Terminal } from './Terminal';

export const Settings: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState(AI_MODELS[0].id);
  const [autoSave, setAutoSave] = useState(true);
  const [isTesting, setIsTesting] = useState(false);
  const [ping, setPing] = useState<number | null>(null);

  const handleTest = () => {
    setIsTesting(true);
    setTimeout(() => {
      setIsTesting(false);
      setPing(Math.floor(Math.random() * 20) + 10);
    }, 1500);
  };

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-12 pb-20">
      <header>
        <h2 className="text-white/40 uppercase tracking-[0.2em] text-[11px] font-bold mb-2">System Configuration</h2>
        <h1 className="text-6xl font-bold tracking-tighter">Choose your AI tutor.</h1>
        <p className="mt-6 text-xl text-white/50 max-w-2xl leading-relaxed">
          Configure the intelligence layer of your training environment. Select a model optimized for networking logic and CLI syntax.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Config Cards */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass p-10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-8 right-8 text-brand/20 group-hover:text-brand transition-colors">
              <Cpu className="w-8 h-8" />
            </div>
            
            <div className="mb-10">
               <span className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold block mb-2">Engine Selection</span>
               <h3 className="text-2xl font-bold tracking-tight">Intelligence Path</h3>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <select 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-5 text-lg font-medium outline-none appearance-none focus:ring-2 focus:ring-brand"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                >
                  {AI_MODELS.map(model => (
                    <option key={model.id} value={model.id} className="bg-[#111]">{model.name}</option>
                  ))}
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Activity className="w-5 h-5 text-white/20" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 text-brand mb-2">
                    <Zap className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Latency</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold tracking-tight">{ping ? `${ping}ms` : '--'}</span>
                    <span className="text-[10px] text-green-500 font-bold uppercase">Optimized</span>
                  </div>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 text-cyan-500 mb-2">
                    <Database className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Context</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold tracking-tight">8k</span>
                    <span className="text-[10px] text-white/30 font-bold uppercase">Tokens</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Debug Console */}
          <div className="glass rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
               <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">SYSTEM-LINK // DEBUG MODE</div>
               <Save className="w-4 h-4 text-white/20" />
            </div>
            <div className="h-48 overflow-hidden">
               <Terminal 
                 className="h-full border-none rounded-none"
                 deviceType="CCNA_Admin@core-switch:~$"
                 initialOutput={[
                   '# Initializing AI Handshake Protocol...',
                   `Found endpoint at: 127.0.0.1:11434 [Ollama]`,
                   'Handshake success. Secure tunnel established.',
                   '> GET /api/tags',
                   'Response: 200 OK | Payload: 3 items'
                 ]}
               />
            </div>
          </div>
        </div>

        {/* Right Sidebar Config */}
        <div className="space-y-8">
          <div className="glass p-8 rounded-2xl">
             <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-8">Core Connectivity</h4>
             
             <div className="bg-black/40 rounded-xl p-6 border border-white/5 mb-8">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    ping ? "bg-green-500 animate-pulse" : "bg-white/10"
                  )} />
                  <span className="text-xs font-mono text-white/40 tracking-wider">
                    {isTesting ? 'Pinging Node...' : ping ? `Node Active: ${ping}ms` : 'Awaiting Ping...'}
                  </span>
                </div>
             </div>

             <button 
               onClick={handleTest}
               disabled={isTesting}
               className="w-full bg-brand text-white py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-all hover:opacity-90 active:scale-[0.98] flex items-center justify-center gap-3"
             >
               <RefreshCw className={cn("w-4 h-4", isTesting && "animate-spin")} />
               Test Connection
             </button>
          </div>

          <div className="glass p-8 rounded-2xl flex items-center justify-between">
             <div className="space-y-1">
               <h5 className="text-[10px] font-bold uppercase tracking-widest">Auto-Save</h5>
               <p className="text-[10px] text-white/20 leading-relaxed uppercase tracking-tighter">Persist engine configurations across multi-tenant sessions.</p>
             </div>
             <div 
               className={cn(
                 "w-12 h-6 rounded-full p-1 cursor-pointer transition-colors relative shrink-0",
                 autoSave ? "bg-brand" : "bg-white/10"
               )}
               onClick={() => setAutoSave(!autoSave)}
             >
               <div className={cn(
                 "w-4 h-4 rounded-full bg-white transition-all shadow-lg",
                 autoSave ? "translate-x-6" : "translate-x-0"
               )} />
             </div>
          </div>
        </div>
      </div>

      {/* Footer Save Area */}
      <footer className="glass sticky bottom-0 left-0 right-0 p-6 flex items-center justify-between z-30">
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
             <ShieldCheck className="w-6 h-6" />
           </div>
           <div>
             <h6 className="font-bold text-sm tracking-tight">Validated Config</h6>
             <p className="text-[10px] text-white/40 uppercase tracking-widest">Encryption: TLS 1.3 / AES-256</p>
           </div>
        </div>

        <div className="flex items-center gap-12">
           <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors">Reset Defaults</button>
           <button className="bg-brand text-white px-12 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-xl shadow-brand/10">
             Save Preference
           </button>
        </div>
      </footer>
    </div>
  );
};
