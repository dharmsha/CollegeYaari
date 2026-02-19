'use client'

import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// Fast Path Imports (Tree-shaking optimized)
import { HiOutlineUser, HiOutlinePhone, HiOutlineEnvelope, HiOutlineAcademicCap, HiOutlineChatBubbleLeftRight, HiOutlineCheckCircle, HiOutlineArrowRight, HiOutlineSparkles, HiOutlineShieldCheck, HiOutlineLightBulb } from 'react-icons/hi2'

export default function InquiryPage() {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', course: '', message: '', inquiryType: 'admission'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // UseCallback for performance
  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // API Call Simulation
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitStatus('success')
  }

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-200 overflow-hidden font-sans selection:bg-indigo-500/30">
      
      {/* --- SUPER FAST BACKGROUND (Pure CSS/GPU) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-indigo-600/10 rounded-full blur-[120px] will-change-transform transform-gpu animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35vw] h-[35vw] bg-purple-600/10 rounded-full blur-[100px] will-change-transform transform-gpu" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl pt-24 pb-16 px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* --- LEFT CONTENT (Bento Style) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest">
              <HiOutlineSparkles /> Admissions Open 2026
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
              Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Future.</span>
            </h1>

            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              Sahi career chunne mein hum aapki madad karenge. Expert counseling aur direct admission guidance, sab kuch ek hi jagah.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <HiOutlineShieldCheck className="text-indigo-400 text-2xl mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold">100% Verified</h4>
                <p className="text-slate-500 text-xs mt-1">Sahi aur sateek jaankari.</p>
              </div>
              <div className="p-5 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <HiOutlineLightBulb className="text-purple-400 text-2xl mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold">Smart Guide</h4>
                <p className="text-slate-500 text-xs mt-1">Best college suggestions.</p>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT CONTENT (Premium Form) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative group transform-gpu">
              {/* Animated Glow Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
              
              <div className="relative bg-[#0f172a]/80 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-8 md:p-10 shadow-2xl overflow-hidden">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  Direct Inquiry <span className="h-px flex-1 bg-white/10"></span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="md:col-span-2 relative group">
                      <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                      <input name="fullName" type="text" placeholder="Full Name" required onChange={handleChange}
                        className="w-full bg-black/20 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 transition-all font-medium" 
                      />
                    </div>

                    {/* Email */}
                    <div className="relative group">
                      <HiOutlineEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                      <input name="email" type="email" placeholder="Email Address" required onChange={handleChange}
                        className="w-full bg-black/20 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-indigo-500/50 transition-all font-medium" 
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative group">
                      <HiOutlinePhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                      <input name="phone" type="tel" placeholder="Phone Number" required onChange={handleChange}
                        className="w-full bg-black/20 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-indigo-500/50 transition-all font-medium" 
                      />
                    </div>

                    {/* Course Select */}
                    <div className="md:col-span-2 relative group">
                      <HiOutlineAcademicCap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors pointer-events-none" />
                      <select name="course" onChange={handleChange}
                        className="w-full bg-black/20 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-slate-400 outline-none focus:border-indigo-500/50 transition-all font-medium appearance-none cursor-pointer"
                      >
                        <option value="">Select Course</option>
                        <option value="btech">B.Tech / Engineering</option>
                        <option value="mba">MBA / Management</option>
                        <option value="bca">BCA / MCA</option>
                        <option value="medical">Medical / MBBS</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2 relative group">
                      <HiOutlineChatBubbleLeftRight className="absolute left-4 top-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                      <textarea name="message" placeholder="Aapka sawal..." rows="3" onChange={handleChange}
                        className="w-full bg-black/20 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-indigo-500/50 transition-all font-medium resize-none" 
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative py-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white font-black uppercase tracking-widest text-sm overflow-hidden transition-all active:scale-[0.98] disabled:opacity-70 shadow-xl shadow-indigo-500/10"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? "Processing..." : <>Send Inquiry <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" /></>}
                    </span>
                    <div className="absolute inset-0 bg-white/10 group-hover:translate-x-full transition-transform duration-500 -translate-x-full"></div>
                  </button>
                </form>

                {/* Success Overlay */}
                <AnimatePresence>
                  {submitStatus && (
                    <motion.div 
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                      className="absolute inset-0 z-20 bg-[#0f172a] flex flex-col items-center justify-center text-center p-6"
                    >
                      <div className="w-20 h-20 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center mb-6 border border-indigo-500/30">
                        <HiOutlineCheckCircle size={40} />
                      </div>
                      <h2 className="text-3xl font-black text-white">Success!</h2>
                      <p className="text-slate-400 mt-2 font-medium">Hum jald hi aapse sampark karenge.</p>
                      <button onClick={() => setSubmitStatus(null)} className="mt-8 px-6 py-2 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">Go Back</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- BOTTOM LOGOS / TRUST BAR --- */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale">
          <span className="font-bold text-xl">UGC Verified</span>
          <span className="font-bold text-xl">NAAC A++</span>
          <span className="font-bold text-xl">AICTE Approved</span>
          <span className="font-bold text-xl">Top Universities</span>
        </div>
      </div>
    </div>
  )
}