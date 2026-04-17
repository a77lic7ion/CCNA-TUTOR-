import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MODULE_1_LESSONS } from '../data/module1';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Target, 
  PlayCircle,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Markdown from 'react-markdown';
import { cn } from '@/src/lib/utils';

export const LessonView: React.FC = () => {
  const [currentTopicIdx, setCurrentTopicIdx] = useState(0);
  const topic = MODULE_1_LESSONS.subtopics[currentTopicIdx];

  const handleNext = () => {
    if (currentTopicIdx < MODULE_1_LESSONS.subtopics.length - 1) {
      setCurrentTopicIdx(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentTopicIdx > 0) {
      setCurrentTopicIdx(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex h-full">
      {/* Left: Table of Contents */}
      <aside className="w-80 border-r border-white/5 bg-sidebar-bg/50 p-6 flex flex-col gap-8 hidden lg:flex">
        <div>
          <h2 className="text-[10px] text-brand uppercase tracking-[0.3em] font-bold mb-4">Unit Progress</h2>
          <div className="flex items-center gap-3">
             <div className="flex-grow h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand transition-all duration-500" 
                  style={{ width: `${((currentTopicIdx + 1) / MODULE_1_LESSONS.subtopics.length) * 100}%` }} 
                />
             </div>
             <span className="text-xs font-mono text-white/40">{currentTopicIdx + 1}/{MODULE_1_LESSONS.subtopics.length}</span>
          </div>
        </div>

        <nav className="space-y-1">
          {MODULE_1_LESSONS.subtopics.map((sub, idx) => (
            <button
              key={sub.id}
              onClick={() => setCurrentTopicIdx(idx)}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all text-xs font-semibold group",
                idx === currentTopicIdx 
                  ? "bg-brand/10 text-brand" 
                  : idx < currentTopicIdx ? "text-green-500/60 hover:text-green-500 hover:bg-green-500/5" : "text-white/30 hover:text-white/60 hover:bg-white/5"
              )}
            >
              <div className={cn(
                "w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border",
                idx === currentTopicIdx ? "border-brand bg-brand/10" : "border-white/5 bg-white/5"
              )}>
                {idx < currentTopicIdx ? <CheckCircle2 className="w-3.5 h-3.5" /> : <span className="text-[10px]">{sub.id}</span>}
              </div>
              <span className="truncate">{sub.title}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto glass p-6 rounded-2xl border-l-4 border-l-brand">
           <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand mb-2">Study Tip</h4>
           <p className="text-[10px] text-white/40 leading-relaxed italic">
             Don't just read—visualize. Draw out these topologies on paper to reinforce the hierarchy.
           </p>
        </div>
      </aside>

      {/* Main Content Stage */}
      <main className="flex-grow overflow-y-auto scroll-smooth custom-scrollbar">
        <div className="max-w-4xl mx-auto py-16 px-10">
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Header Area */}
            <header className="space-y-6">
              <div className="flex items-center gap-4 text-white/30 font-mono text-[10px] uppercase tracking-[0.3em]">
                <span>MODULE {MODULE_1_LESSONS.id}</span>
                <ChevronRight className="w-3 h-3" />
                <span>TOPIC {topic.id}</span>
              </div>
              <h1 className="text-6xl font-bold tracking-tighter leading-none">
                {topic.title}
              </h1>
            </header>

            {/* Learning Objectives */}
            <div className="glass p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-6">
                 <Target className="w-5 h-5 text-brand" />
                 <h3 className="text-sm font-bold uppercase tracking-widest">Target Competencies</h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {topic.objectives.map((obj, i) => (
                   <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand/40" />
                      {obj}
                   </li>
                 ))}
              </ul>
            </div>

            {/* Main Content Body */}
            <article className="prose prose-invert prose-headings:tracking-tighter prose-headings:font-bold prose-lg max-w-none">
              <div className="markdown-body">
                <Markdown>{topic.content}</Markdown>
              </div>
            </article>

            {/* Navigation Controls */}
            <footer className="pt-12 border-t border-white/5 flex items-center justify-between">
              <button
                onClick={handlePrev}
                disabled={currentTopicIdx === 0}
                className="flex items-center gap-2 text-white/40 hover:text-white transition-all disabled:opacity-0"
              >
                <ChevronLeft className="w-5 h-5" /> Previous Topic
              </button>

              {currentTopicIdx < MODULE_1_LESSONS.subtopics.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="bg-brand text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:opacity-90 active:scale-[0.98] transition-all"
                >
                  Next Topic <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:opacity-90 transition-all">
                  Finish Module <CheckCircle2 className="w-5 h-5" />
                </button>
              )}
            </footer>
          </motion.div>
        </div>
      </main>

      {/* Right: Resources & AI Quick-Helper */}
      <aside className="w-80 border-l border-white/5 p-6 flex flex-col gap-8 hidden xl:flex">
         <div>
            <h2 className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold mb-6">Course Material</h2>
            <div className="space-y-4">
               <button className="w-full flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                      <PlayCircle className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold">Lecture Video</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/40" />
               </button>
            </div>
         </div>

         <div className="mt-auto glass bg-brand/5 border border-brand/20 p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <BookOpen className="w-12 h-12" />
            </div>
            <h4 className="text-lg font-bold mb-3">AI Deep-Dive</h4>
            <p className="text-xs text-white/50 leading-relaxed mb-6">
              Ask Gemini for a specific scenario based on this topic.
            </p>
            <button className="w-full py-3 bg-brand text-white text-[10px] font-bold uppercase tracking-widest rounded-lg shadow-lg shadow-brand/10">
              Query Intelligence
            </button>
         </div>
      </aside>
    </div>
  );
};
