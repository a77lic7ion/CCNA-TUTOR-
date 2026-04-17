import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal } from './Terminal';
import { CheckCircle2, XCircle, Info, ChevronRight, Lightbulb, BookOpen } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { ALL_QUIZZES } from '../data/quizzes';
import { Quiz as QuizType, QuizQuestion } from '../types';

export const Quiz: React.FC = () => {
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuiz = ALL_QUIZZES.find(q => q.id === selectedQuizId);
  const question = currentQuiz?.questions[currentIdx];

  const handleSelectQuiz = (id: string) => {
    setSelectedQuizId(id);
    setCurrentIdx(0);
    setIsAnswered(false);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  const handleSelectOption = (id: string) => {
    if (isAnswered) return;
    setSelectedOption(id);
  };

  const handleNext = () => {
    if (!currentQuiz) return;
    if (currentIdx < currentQuiz.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setIsAnswered(false);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      // Reached end - go back to selection
      setSelectedQuizId(null);
    }
  };

  const checkAnswer = () => {
    if (!selectedOption) return;
    setIsAnswered(true);
    setShowExplanation(true);
  };

  if (!selectedQuizId) {
    return (
      <div className="p-12 overflow-y-auto h-full space-y-12">
        <header>
          <h1 className="text-5xl font-bold tracking-tight mb-4">Diagnostic Assessments</h1>
          <p className="text-xl text-white/50 max-w-2xl">
            Select a CCNA domain to begin a technical diagnostic. AI will analyze your performance to identify knowledge gaps.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_QUIZZES.map(quiz => (
            <button
              key={quiz.id}
              onClick={() => handleSelectQuiz(quiz.id)}
              className="bg-white/5 border border-white/5 p-8 rounded-3xl text-left hover:bg-white/10 hover:border-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{quiz.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                Mastery check for CCNA Domain {quiz.id}. Includes {quiz.questions.length} questions covering core principles.
              </p>
              <div className="flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-widest">
                Start Quiz <ChevronRight className="w-4 h-4" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (!question) return null;

  return (
    <div className="flex h-full bg-[#0d0d0d]">
      {/* Left: Question Content */}
      <div className="flex-grow p-12 overflow-y-auto max-w-4xl border-r border-white/5">
        <header className="mb-12 flex justify-between items-center">
           <div className="flex flex-col gap-1">
             <div className="bg-white/5 px-3 py-1.5 rounded font-mono text-[10px] font-bold tracking-[0.2em] text-white/40 inline-block uppercase self-start">
               DOMAIN {selectedQuizId} | {currentQuiz?.title}
             </div>
             <h4 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">QUESTION {currentIdx + 1} OF {currentQuiz?.questions.length}</h4>
           </div>
           
           <div className="flex gap-2">
             {Array.from({ length: Math.min(10, currentQuiz?.questions.length || 0) }).map((_, i) => (
               <div key={i} className={cn(
                 "w-6 h-1 rounded-full bg-white/5 transition-colors",
                 i <= currentIdx && "bg-brand"
               )} />
             ))}
           </div>
        </header>

        <motion.div 
          key={question.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-10"
        >
          <h2 className="text-3xl font-bold leading-snug tracking-tight text-white/90">
            {question.question}
          </h2>

          <div className="space-y-4">
            {['A', 'B', 'C', 'D'].map((key) => {
              const optText = (question.options as any)[key];
              if (!optText) return null;

              const isSelected = selectedOption === key;
              const isCorrect = isAnswered && key === question.correctAnswer;
              const isWrong = isAnswered && isSelected && key !== question.correctAnswer;

              return (
                <button
                  key={key}
                  onClick={() => handleSelectOption(key)}
                  disabled={isAnswered}
                  className={cn(
                    "w-full flex items-center gap-6 p-6 rounded-2xl border transition-all text-left group relative overflow-hidden",
                    isSelected ? "bg-brand/10 border-brand" : "bg-white/[0.03] border-white/5 hover:bg-white/10",
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
                    {key}
                  </div>
                  <span className={cn(
                    "text-xl font-medium",
                    isSelected ? "text-white" : "text-white/60",
                    (isCorrect || isWrong) && "text-white"
                  )}>
                    {optText}
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
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Explanation</span>
            </div>

            <div className="flex gap-4">
               <button
                onClick={() => setSelectedQuizId(null)}
                className="text-white/20 hover:text-white/40 px-6 py-4 font-bold text-xs uppercase tracking-widest transition-colors"
              >
                Exit Quiz
              </button>
              <button
                onClick={isAnswered ? handleNext : checkAnswer}
                disabled={!selectedOption}
                className="bg-brand text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:opacity-90 transition-all disabled:opacity-20"
              >
                {isAnswered ? 'Next Question' : 'Confirm'} <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {showExplanation && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-brand/5 border border-brand/10 p-8 rounded-2xl flex gap-6"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-brand">Technical Analysis</h4>
                  <p className="text-white/60 leading-relaxed italic text-sm">
                    {question.explanation || "No additional explanation available for this question."}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Right: Technical Context Panel */}
      <div className="w-[480px] bg-black/40 p-10 flex flex-col gap-8">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand">Adaptive Assist</h3>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest leading-none">AI ONLINE</span>
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl space-y-4">
             <div className="flex items-center gap-2 text-cyan-400">
               <Terminal className="w-4 h-4" />
               <span className="text-[10px] font-bold uppercase tracking-widest">Live CLI Insight</span>
             </div>
             <div className="font-mono text-xs text-white/40 leading-relaxed">
               <span className="text-green-500">router#</span> show running-config | section interface<br/>
               <span className="text-white/30">...</span><br/>
               <span className="text-white/60">interface GigabitEthernet0/1</span><br/>
               <span className="text-white/60">  description Connection to LAN</span><br/>
               <span className="text-white/60">  speed 1000</span><br/>
               <span className="text-white/60">  duplex full</span>
             </div>
          </div>

          <div className="glass p-8 rounded-2xl border-l-4 border-l-brand/40">
            <div className="flex items-center gap-3 text-brand mb-4">
               <Info className="w-5 h-5" />
               <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Contextual Note</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Domain 1.0 focuses on the physical and logic foundational elements. Understanding the role of each component is critical for building scalable network architectures.
            </p>
          </div>
        </div>

        <div className="mt-auto pt-8 border-t border-white/5">
           <div className="flex justify-between items-center text-[9px] font-mono text-white/20 tracking-widest uppercase">
             <span>SESSION_ID: 0xCF21</span>
             <span>LATENCY: 42MS</span>
           </div>
        </div>
      </div>
    </div>
  );
};
