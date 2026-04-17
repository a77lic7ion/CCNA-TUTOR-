import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal } from './Terminal';
import { CheckCircle2, XCircle, Info, ChevronRight, Lightbulb } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface Question {
  id: string;
  text: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
  explanation: string;
  module: string;
}

const MOCK_QUESTIONS: Question[] = [
  {
    id: 'q14',
    module: 'MODULE 04: SWITCHING FUNDAMENTALS',
    text: 'A network administrator needs to verify which VLANs are currently active on a Cisco switch and identify which ports are assigned to each VLAN. Which command should be used?',
    options: [
      { id: 'A', text: 'show running-config' },
      { id: 'B', text: 'show vlan brief' },
      { id: 'C', text: 'show interfaces status' },
      { id: 'D', text: 'show mac address-table' },
    ],
    correctAnswer: 'B',
    explanation: 'The `show vlan brief` command displays the VLAN database, status, and port assignments for each active VLAN on a Cisco switch.',
  }
];

export const Quiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const question = MOCK_QUESTIONS[currentIdx];

  const handleSelect = (id: string) => {
    if (isAnswered) return;
    setSelectedId(id);
  };

  const handleNext = () => {
    setSelectedId(null);
    setIsAnswered(false);
    setShowExplanation(false);
    // Loop for demo
    setCurrentIdx((prev) => (prev + 1) % MOCK_QUESTIONS.length);
  };

  const checkAnswer = () => {
    if (!selectedId) return;
    setIsAnswered(true);
    setShowExplanation(true);
  };

  return (
    <div className="flex h-full">
      {/* Left: Question Content */}
      <div className="flex-grow p-12 overflow-y-auto max-w-3xl">
        <header className="mb-12 flex justify-between items-center">
           <div className="bg-white/5 px-3 py-1.5 rounded font-mono text-[10px] font-bold tracking-[0.2em] text-white/50">
             QUESTION {currentIdx + 1} OF 50
           </div>
           
           <div className="flex gap-2">
             {[0, 1, 2, 3].map(i => (
               <div key={i} className={cn(
                 "w-12 h-1 rounded-full bg-white/5",
                 i <= currentIdx && "bg-brand"
               )} />
             ))}
           </div>
        </header>

        <motion.div 
          key={question.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-10"
        >
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            {question.text}
          </h2>

          <div className="space-y-4">
            {question.options.map((opt) => {
              const isSelected = selectedId === opt.id;
              const isCorrect = isAnswered && opt.id === question.correctAnswer;
              const isWrong = isAnswered && isSelected && opt.id !== question.correctAnswer;

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(opt.id)}
                  disabled={isAnswered}
                  className={cn(
                    "w-full flex items-center gap-6 p-6 rounded-2xl border transition-all text-left group",
                    isSelected ? "bg-brand/10 border-brand" : "bg-white/5 border-white/5 hover:bg-white/10",
                    isCorrect && "bg-green-500/10 border-green-500",
                    isWrong && "bg-red-500/10 border-red-500"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-colors shrink-0",
                    isSelected ? "bg-brand text-white" : "bg-white/5 text-white/20 group-hover:text-white/40",
                    isCorrect && "bg-green-500 text-white",
                    isWrong && "bg-red-500 text-white"
                  )}>
                    {opt.id}
                  </div>
                  <span className={cn(
                    "text-xl font-medium",
                    isSelected ? "text-white" : "text-white/60",
                    (isCorrect || isWrong) && "text-white"
                  )}>
                    {opt.text}
                  </span>
                  {isCorrect && <CheckCircle2 className="ml-auto w-6 h-6 text-green-500" />}
                  {isWrong && <XCircle className="ml-auto w-6 h-6 text-red-500" />}
                </button>
              );
            })}
          </div>

          <div className="pt-12 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={cn(
                "w-14 h-7 rounded-full bg-white/10 p-1 cursor-pointer transition-colors relative",
                showExplanation && "bg-brand"
              )} onClick={() => setShowExplanation(!showExplanation)}>
                <div className={cn(
                  "w-5 h-5 rounded-full bg-white transition-all shadow-lg",
                  showExplanation ? "translate-x-7" : "translate-x-0"
                )} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-white/40">Explanation</span>
            </div>

            <button
              onClick={isAnswered ? handleNext : checkAnswer}
              disabled={!selectedId}
              className="bg-brand text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:opacity-90 transition-all disabled:opacity-20"
            >
              {isAnswered ? 'Next Question' : 'Confirm Selection'} <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <AnimatePresence>
            {showExplanation && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-brand/10 border border-brand/20 p-8 rounded-2xl flex gap-6"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center text-brand shrink-0">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Detailed Insight</h4>
                  <p className="text-white/60 leading-relaxed italic">
                    {question.explanation}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Right: Practice Terminal */}
      <div className="w-[480px] border-l border-white/5 bg-black/20 p-6 flex flex-col gap-6">
        <div className="flex items-center justify-between text-white/40 text-[10px] uppercase tracking-widest font-bold">
           <span>Practice Interface</span>
           <span className="text-brand">Lab Mode Active</span>
        </div>
        <Terminal 
          className="flex-grow shadow-2xl"
          onCommand={(cmd) => {
            if (cmd === 'show vlan brief') return 'VLAN Name                             Status    Ports\n---- -------------------------------- --------- ------------------------------\n1    default                          active    Gi0/1, Gi0/2\n10   SALES_DEPT                       active    Gi0/3';
            return `% Invalid input detected at '^' marker. Try 'show vlan brief'`;
          }}
        />
        
        <div className="glass p-6 rounded-xl border-l-4 border-l-cyan-500">
          <div className="flex items-center gap-3 text-cyan-400 mb-3">
             <Info className="w-4 h-4" />
             <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">AI Suggestion</span>
          </div>
          <p className="text-xs text-white/60 leading-relaxed italic">
            Try typing <code className="text-cyan-400">show vlan brief</code> to view the VLAN database with port assignments.
          </p>
        </div>
      </div>
    </div>
  );
};
