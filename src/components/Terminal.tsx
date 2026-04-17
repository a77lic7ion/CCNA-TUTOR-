import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Search, HelpCircle, Send } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'meta' | 'suggestion';
  content: string;
}

interface TerminalProps {
  deviceType?: string;
  className?: string;
  onCommand?: (cmd: string) => string | Promise<string>;
  initialOutput?: string[];
}

export const Terminal: React.FC<TerminalProps> = ({ 
  deviceType = 'Router', 
  className,
  onCommand,
  initialOutput = [`${deviceType} con0 is now available`, 'Press RETURN to get started.']
}) => {
  const [lines, setLines] = useState<TerminalLine[]>(
    initialOutput.map(l => ({ type: 'meta', content: l }))
  );
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      setLines(prev => [...prev, { type: 'input', content: `${deviceType}# ` }]);
      return;
    }

    const cmd = input.trim();
    setHistory(prev => [cmd, ...prev]);
    setHistoryIdx(-1);
    setLines(prev => [...prev, { type: 'input', content: `${deviceType}# ${cmd}` }]);
    setInput('');

    if (onCommand) {
      const result = await onCommand(cmd);
      if (result) {
        setLines(prev => [...prev, { type: 'output', content: result }]);
      }
    } else {
      // Default mock responses
      if (cmd === 'show vlan brief') {
        setLines(prev => [...prev, { type: 'output', content: 'VLAN Name                             Status    Ports\n---- -------------------------------- --------- ------------------------------\n1    default                          active    Gi0/1, Gi0/2\n10   SALES                            active    Gi0/3' }]);
      } else if (cmd === 'configure terminal') {
        setLines(prev => [...prev, { type: 'meta', content: 'Enter configuration commands, one per line. End with CNTL/Z.' }]);
      } else {
        setLines(prev => [...prev, { type: 'error', content: `% Invalid input detected at '^' marker.` }]);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIdx < history.length - 1) {
        const nextIdx = historyIdx + 1;
        setHistoryIdx(nextIdx);
        setInput(history[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInput(history[nextIdx]);
      } else {
        setHistoryIdx(-1);
        setInput('');
      }
    }
  };

  return (
    <div className={cn("flex flex-col bg-terminal-bg rounded-lg border border-white/10 overflow-hidden font-mono text-sm", className)}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-bottom border-white/10">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 mr-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          </div>
          <span className="text-white/40 uppercase tracking-widest text-[10px]">{deviceType} // CONSOLE 0</span>
        </div>
        <div className="text-[10px] text-green-500/50 flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          CONNECTED: 04:12:15
        </div>
      </div>

      {/* Output */}
      <div 
        ref={scrollRef}
        className="flex-grow p-4 overflow-y-auto terminal-scroll space-y-1 min-h-[200px]"
      >
        {lines.map((line, i) => (
          <div key={i} className={cn(
            "whitespace-pre-wrap leading-relaxed",
            line.type === 'error' && "text-red-400 font-bold",
            line.type === 'input' && "text-white",
            line.type === 'output' && "text-terminal-fg",
            line.type === 'meta' && "text-white/40 italic",
            line.type === 'suggestion' && "bg-cyan-900/20 text-cyan-400 p-2 rounded border border-cyan-500/30 my-2"
          )}>
            {line.content}
          </div>
        ))}
        
        {/* Input Line */}
        <form onSubmit={handleCommand} className="flex items-center">
          <span className="text-white/80 mr-2 shrink-0">{deviceType}#</span>
          <input
            ref={inputRef}
            type="text"
            className="bg-transparent border-none outline-none text-white w-full caret-brand"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-2 p-2 bg-white/5 border-t border-white/10">
        <button className="text-[10px] px-2 py-1 bg-white/5 hover:bg-white/10 rounded uppercase tracking-wider text-white/60">Show</button>
        <button className="text-[10px] px-2 py-1 bg-white/5 hover:bg-white/10 rounded uppercase tracking-wider text-white/60">Config T</button>
        <button className="text-[10px] px-2 py-1 bg-white/5 hover:bg-white/10 rounded uppercase tracking-wider text-white/60">Int Gi0/1</button>
        <div className="ml-auto flex items-center gap-3">
          <button type="submit" onClick={handleCommand} className="flex items-center gap-1.5 px-3 py-1.5 bg-brand text-white text-[10px] font-bold rounded uppercase tracking-wider hover:opacity-90 transition-opacity">
            <Send className="w-3 h-3" /> Run Command
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 text-white/60 text-[10px] font-bold rounded uppercase tracking-wider border border-white/10 hover:bg-white/10">
            <HelpCircle className="w-3 h-3" /> Confuse AI
          </button>
        </div>
      </div>
    </div>
  );
};
