'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  HiOutlineWrenchScrewdriver, 
  HiOutlineArrowLeft, 
  HiOutlineRocketLaunch,
  HiOutlineSparkles 
} from 'react-icons/hi2'

export default function UnderDevelopment() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative bg-[#020617] overflow-hidden">
      
      {/* --- PREMIUM ANIMATED BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]" 
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* --- MAIN CONTENT CARD --- */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-2xl"
      >
        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-[3rem] p-8 md:p-16 text-center shadow-2xl">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-widest mb-8">
            <HiOutlineSparkles className="animate-spin-slow" /> Coming Soon 2026
          </div>

          {/* Icon Area */}
          {/* <div className="relative inline-block mb-10">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/40"
            >
              <HiOutlineWrenchScrewdriver className="text-5xl md:text-6xl text-white" />
            </motion.div>
            <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-white/10 p-3 rounded-2xl shadow-xl">
               <HiOutlineRocketLaunch className="text-2xl text-indigo-400 animate-bounce" />
            </div>
          </div> */}

          {/* Typography */}
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-none">
            Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Epic</span> is Brewing
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mb-12 font-medium leading-relaxed max-w-md mx-auto">
            We are currently fine-tuning this page to give you the ultimate college search experience. Hang tight, we will be live shortly!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/"
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-white text-slate-950 rounded-[1.5rem] font-black text-sm transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
            >
              <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
              Back to Dashboard
            </Link>
            
            <button className="flex items-center justify-center gap-3 px-10 py-5 bg-white/5 border border-white/10 text-white rounded-[1.5rem] font-black text-sm transition-all hover:bg-white/10">
               Notify Me
            </button>
          </div>

          {/* Sleek Progress Tracker */}
          <div className="mt-16 pt-10 border-t border-white/5">
            <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">
                <span>Refining Experience</span>
                <span className="text-indigo-400">92% Complete</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '92%' }}
                    transition={{ duration: 2, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 relative"
                >
                   <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[size:1rem_1rem] animate-[move_1s_linear_infinite]" />
                </motion.div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}