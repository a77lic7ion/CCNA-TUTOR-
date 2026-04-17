import React from 'react';
import { motion } from 'motion/react';
import { CCNA_DOMAINS } from '@/src/constants';
import { CheckCircle2, Circle, TrendingUp, AlertTriangle } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

interface DashboardProps {
  stats: {
    overallMastery: number;
    streak: number;
    sessions: number;
    lastSynced: string;
  };
}

const data = [
  { name: '04/10', value: 40 },
  { name: '04/11', value: 45 },
  { name: '04/12', value: 42 },
  { name: '04/13', value: 55 },
  { name: '04/14', value: 58 },
  { name: '04/15', value: 64 },
];

export const Dashboard: React.FC<DashboardProps> = ({ stats }) => {
  return (
    <div className="p-10 space-y-12">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-white/40 uppercase tracking-[0.2em] text-[11px] font-bold mb-2">Curriculum Overview</h2>
          <h1 className="text-6xl font-bold tracking-tighter">Core Modules</h1>
        </div>
        
        <div className="text-right flex items-center gap-8">
          <div>
             <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold block mb-2">Overall Mastery</span>
             <div className="flex items-center gap-4">
               <span className="text-6xl font-bold tracking-tighter">{stats.overallMastery}%</span>
               <div className="w-32 h-2 bg-white/5 rounded-full overflow-hidden">
                 <div className="h-full bg-brand" style={{ width: `${stats.overallMastery}%` }} />
               </div>
             </div>
          </div>
        </div>
      </header>

      {/* Grid of Domains */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CCNA_DOMAINS.map((domain, i) => {
          const progress = i === 0 ? 92 : i === 1 ? 45 : i === 2 ? 28 : i === 3 ? 75 : 0;
          const status = progress > 90 ? 'MASTERED' : progress > 50 ? 'LEARNING' : progress > 0 ? 'STRUGGLING' : 'INITIALIZING';
          
          return (
            <motion.div 
              key={domain.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col min-h-[320px] relative overflow-hidden group cursor-pointer"
            >
              {/* Status Badge */}
              <div className={cn(
                "absolute top-6 right-8 text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded",
                status === 'MASTERED' && "bg-green-500/10 text-green-500",
                status === 'LEARNING' && "bg-yellow-500/10 text-yellow-500",
                status === 'STRUGGLING' && "bg-red-500/10 text-red-500",
                status === 'INITIALIZING' && "bg-white/5 text-white/30"
              )}>
                {status}
              </div>

              <span className="text-brand font-mono text-[10px] uppercase tracking-widest mb-4">Domain {domain.id}</span>
              <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-brand transition-colors">{domain.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed mb-auto">
                {domain.description}
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                     <span className="text-[10px] text-white/20 uppercase tracking-widest font-bold">Progress Alignment</span>
                     <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                       <div className={cn(
                         "h-full transition-all duration-1000",
                         status === 'MASTERED' ? "bg-green-500" : "bg-brand"
                       )} style={{ width: `${progress}%` }} />
                     </div>
                  </div>
                  <span className="text-2xl font-bold tracking-tight">{progress}%</span>
                </div>

                <button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white/80 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-white/10 transition-all">
                  {status === 'STRUGGLING' ? 'Intensive Drill' : 'Continue Lab'}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lower Section: Stats Table/Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass p-8 rounded-2xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" /> Improvement Curve
            </h3>
            <span className="text-[10px] text-white/40 uppercase tracking-widest">Last 5 Sessions</span>
          </div>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e67e5f" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#e67e5f" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                <XAxis dataKey="name" stroke="#555" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px' }}
                  itemStyle={{ color: '#e67e5f' }}
                />
                <Area type="monotone" dataKey="value" stroke="#e67e5f" fillOpacity={1} fill="url(#colorValue)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass p-8 rounded-2xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" /> Weak Points
            </h3>
            <button className="text-[10px] text-brand uppercase tracking-widest font-bold">Review All</button>
          </div>
          <div className="space-y-4">
            {[
              { topic: 'STP Root Bridge Selection', score: 28, trend: 'down' },
              { topic: 'IPv4 VLSM Subnetting', score: 45, trend: 'up' },
              { topic: 'OSPF Dr/BDR Election', score: 32, trend: 'stable' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 font-bold text-xs">
                    {item.score}%
                  </div>
                  <span className="text-sm font-medium">{item.topic}</span>
                </div>
                <button className="px-3 py-1.5 bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-widest rounded">Target</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <footer className="pt-8 border-t border-white/5 flex flex-wrap gap-8 text-[10px] text-white/20 font-mono uppercase tracking-[0.2em]">
         <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-green-500" /> MASTERED ({'>'}90%)
         </div>
         <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-yellow-500" /> PROFICIENT (50-89%)
         </div>
         <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-red-500" /> CRITICAL ({'<'}49%)
         </div>
         <div className="ml-auto">
           SYSTEM HASH: 0X82F91A22 • LAST SYNC: {stats.lastSynced}
         </div>
      </footer>
    </div>
  );
};
