'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HiOutlineAcademicCap, HiOutlineMapPin, HiOutlineCurrencyRupee, 
  HiOutlineMagnifyingGlass, HiOutlineTrophy, HiOutlineArrowUpRight, 
  HiOutlineSparkles, HiOutlineBuildingLibrary, HiOutlineCpuChip
} from 'react-icons/hi2'

// --- DATA BLOCK (Isse Error Solve Hoga) ---
const institutes = {
  iit: { name: 'IITs', icon: <HiOutlineTrophy />, color: 'from-orange-500/20' },
  nit: { name: 'NITs', icon: <HiOutlineBuildingLibrary />, color: 'from-blue-500/20' },
  iiit: { name: 'IIITs', icon: <HiOutlineCpuChip />, color: 'from-purple-500/20' },
  gfti: { name: 'GFTIs', icon: <HiOutlineAcademicCap />, color: 'from-green-500/20' }
}

const colleges = {
  iit: [
    {
      id: 1, name: 'Indian Institute of Technology Bombay', shortName: 'IIT Bombay',
      location: 'Mumbai, Maharashtra', nirfRank: 1, type: 'IIT',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
      cutoff: { general: { closingRank: 120 } },
      placements: { average: 2800000, percentage: 98 }
    },
    {
      id: 2, name: 'Indian Institute of Technology Delhi', shortName: 'IIT Delhi',
      location: 'New Delhi', nirfRank: 2, type: 'IIT',
      image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=800&q=80',
      cutoff: { general: { closingRank: 150 } },
      placements: { average: 2600000, percentage: 97 }
    }
  ],
  nit: [
    {
      id: 4, name: 'National Institute of Technology Trichy', shortName: 'NIT Trichy',
      location: 'Tamil Nadu', nirfRank: 9, type: 'NIT',
      image: 'https://images.unsplash.com/photo-1597239450996-e3e16cc6079f?w=800&q=80',
      cutoff: { general: { closingRank: 2500 } },
      placements: { average: 2200000, percentage: 94 }
    }
  ],
  iiit: [
    {
        id: 5, name: 'IIIT Hyderabad', shortName: 'IIIT Hyderabad',
        location: 'Hyderabad', nirfRank: 15, type: 'IIIT',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
        cutoff: { general: { closingRank: 3500 } },
        placements: { average: 2800000, percentage: 96 }
    }
  ],
  gfti: []
}

export default function CampusPortal() {
  const [selectedInstitute, setSelectedInstitute] = useState('iit')
  const [searchTerm, setSearchTerm] = useState('')

  // Error Solve: useMemo logic with defined colleges
  const filteredColleges = useMemo(() => {
    const list = colleges[selectedInstitute] || []
    return list.filter(c => 
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      c.shortName.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [selectedInstitute, searchTerm])

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* --- GLOW BACKGROUND --- */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 md:px-6 pt-24 pb-20 relative">
        
        {/* --- HERO SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
            <HiOutlineSparkles className="animate-spin-slow" /> Admission Portal 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
            Campus<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">Duniya</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
            India ke top engineering colleges ka poora database. Cutoffs aur placement records ab ek hi jagah.
          </p>
        </motion.div>

        {/* --- FILTER & SEARCH BAR --- */}
        <div className="grid lg:grid-cols-12 gap-6 mb-12 items-center">
          {/* Tabs */}
          <div className="lg:col-span-6 flex bg-white/5 p-1.5 rounded-[2rem] border border-white/10 backdrop-blur-xl overflow-x-auto no-scrollbar">
            {Object.keys(institutes).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedInstitute(key)}
                className={`relative flex-1 py-3 px-6 rounded-[1.5rem] text-sm font-black transition-all whitespace-nowrap ${
                  selectedInstitute === key ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {selectedInstitute === key && (
                  <motion.div layoutId="pill" className="absolute inset-0 bg-indigo-600 rounded-[1.5rem] shadow-[0_0_20px_rgba(79,70,229,0.4)]" transition={{ type: 'spring', duration: 0.6 }} />
                )}
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {institutes[key].icon} {institutes[key].name}
                </span>
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="lg:col-span-6 relative group">
            <HiOutlineMagnifyingGlass className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
            <input 
              type="text" 
              placeholder={`Search amongst top ${selectedInstitute.toUpperCase()} colleges...`}
              className="w-full bg-white/5 border border-white/10 rounded-[2rem] py-4.5 pl-14 pr-6 text-white outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* --- GRID VIEW --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredColleges.length > 0 ? (
              filteredColleges.map((college, idx) => (
                <motion.div
                  key={college.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-[#0f172a]/40 border border-white/5 rounded-[3rem] overflow-hidden hover:border-indigo-500/40 transition-all duration-500"
                >
                  {/* Card Image Area */}
                  <div className="h-52 relative overflow-hidden">
                    <img src={college.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={college.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/10 to-transparent" />
                    <div className="absolute top-6 right-6 px-4 py-1.5 bg-yellow-400/90 backdrop-blur-md rounded-full text-[10px] font-black text-black uppercase">
                      NIRF #{college.nirfRank}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <h3 className="text-2xl font-black text-white mb-2 leading-tight tracking-tight group-hover:text-indigo-300 transition-colors">
                        {college.shortName}
                    </h3>
                    <p className="text-slate-500 text-xs font-bold flex items-center gap-1.5 mb-6">
                        <HiOutlineMapPin className="text-indigo-500 text-sm" /> {college.location}
                    </p>

                    {/* Bento Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                        <div className="bg-white/5 p-4 rounded-[1.5rem] border border-white/5 hover:bg-white/10 transition-colors">
                            <HiOutlineCurrencyRupee className="text-emerald-400 text-xl mb-1" />
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Avg Package</p>
                            <p className="text-sm font-black text-white">₹{(college.placements.average / 100000).toFixed(1)} LPA</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-[1.5rem] border border-white/5 hover:bg-white/10 transition-colors">
                            <HiOutlineTrophy className="text-indigo-400 text-xl mb-1" />
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Placement</p>
                            <p className="text-sm font-black text-white">{college.placements.percentage}%</p>
                        </div>
                    </div>

                    <button className="w-full py-4 bg-white/5 hover:bg-indigo-600 rounded-[1.5rem] text-white font-black text-sm transition-all flex items-center justify-center gap-2 group/btn border border-white/10 hover:border-indigo-500 shadow-xl shadow-indigo-600/0 hover:shadow-indigo-600/20">
                      Explore Details <HiOutlineArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center bg-white/5 rounded-[3rem] border border-dashed border-white/10">
                <p className="text-slate-500 font-bold">Koi college nahi mila bhai! Search thoda badlo.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}