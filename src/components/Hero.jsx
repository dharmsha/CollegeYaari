'use client'

import { motion } from 'framer-motion'
import { FaSearch, FaArrowRight, FaPlay, FaCheckCircle } from 'react-icons/fa'
import { Sparkles, MousePointer2, Zap } from 'lucide-react'

export default function ProfessionalHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#020617] overflow-hidden py-20 px-4">
      
      {/* --- PREMIUM BACKGROUND ELEMENTS --- */}
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[140px] rounded-full"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0],
            y: [0, 120, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-blue-500/20 blur-[120px] rounded-full"
        />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto relative z-20">
        <div className="flex flex-col items-center text-center">
          
          {/* --- TOP BADGE --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group cursor-pointer mb-8 px-4 py-1.5 bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-full flex items-center gap-3 hover:border-indigo-500/50 transition-all shadow-2xl"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-300">Admission Season 2026 is Live</span>
            <FaArrowRight size={10} className="text-slate-500 group-hover:translate-x-1 transition-transform" />
          </motion.div>

          {/* --- MAIN HEADING --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight leading-[0.9] mb-8">
              Navigate Your <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
                Future Career.
                <motion.svg 
                  viewBox="0 0 338 12" 
                  className="absolute -bottom-2 left-0 w-full text-indigo-500/40"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 1.5 }}
                >
                  <path d="M1 9C54 3.5 107.5 1.5 161 1.5C214.5 1.5 268 3.5 321 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </motion.svg>
              </span>
            </h1>
          </motion.div>

          {/* --- SUBTEXT --- */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl text-slate-400 text-lg md:text-xl font-medium mb-12 leading-relaxed"
          >
            Indias most sophisticated college discovery & placement engine. Join <span className="text-white font-bold">50,000+ students</span> building the next generation of tech & business.
          </motion.p>

          {/* --- SEARCH GLASS BOX --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full max-w-4xl relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex flex-col md:flex-row items-center bg-[#0f172a]/80 backdrop-blur-2xl border border-white/10 p-3 rounded-[2.5rem] shadow-2xl">
              <div className="flex-1 flex items-center gap-4 px-6 w-full">
                <FaSearch className="text-indigo-400 shrink-0" />
                <input 
                  type="text" 
                  placeholder="Find your dream college or internship..."
                  className="w-full py-4 bg-transparent outline-none text-white font-medium placeholder:text-slate-500"
                />
              </div>
              <div className="hidden md:block w-[1px] h-8 bg-slate-700 mx-2"></div>
              <button className="w-full md:w-auto px-10 py-5 bg-white text-slate-950 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-indigo-500 hover:text-white transition-all flex items-center justify-center gap-2 active:scale-95">
                Explore Now <Zap size={14} className="fill-current" />
              </button>
            </div>
          </motion.div>

          {/* --- TRUST FOOTER --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
          >
            <div className="flex items-center gap-2 font-black text-white text-xl uppercase tracking-tighter">
              <FaCheckCircle className="text-indigo-500" /> UGC Verified
            </div>
            <div className="flex items-center gap-2 font-black text-white text-xl uppercase tracking-tighter">
              <Sparkles className="text-indigo-500" /> AI-Powered Tips
            </div>
            <div className="flex items-center gap-2 font-black text-white text-xl uppercase tracking-tighter">
              <MousePointer2 className="text-indigo-500" /> Direct Apply
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- SIDE DECORATIONS --- */}
      <div className="hidden 2xl:block absolute left-10 top-1/2 -translate-y-1/2 space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-1 h-8 bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              className="w-full h-full bg-indigo-500" 
            />
          </div>
        ))}
      </div>
    </section>
  )
}