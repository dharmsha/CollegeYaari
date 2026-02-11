'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, MapPin, ArrowUp, Facebook, Twitter, Instagram, 
  Linkedin, Youtube, GraduationCap, Users, Building, BookOpen, 
  Shield, Clock, Star, Zap, Globe, Heart
} from 'lucide-react'

export default function CollegeFooter() {
  const [email, setEmail] = useState('')

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = {
    'For Students': [
      { name: 'Top Colleges', href: '/colleges' },
      { name: 'Internship Portal', href: '/internships' },
      { name: 'Skill Courses', href: '/courses' },
      { name: 'Scholarships', href: '/scholarships' },
      { name: 'Student Community', href: '/community' },
    ],
    'Academics': [
      { name: 'Placement Stats', href: '/placements' },
      { name: 'Campus Events', href: '/events' },
      { name: 'Exam Updates', href: '/exams' },
      { name: 'Alumni Network', href: '/alumni' },
      { name: 'Mentorship', href: '/mentorship' },
    ],
    'Partners': [
      { name: 'List your College', href: '/partners/register' },
      { name: 'Hiring Partners', href: '/partners/hiring' },
      { name: 'Brand Collaborations', href: '/collab' },
      { name: 'Ambassador Program', href: '/ambassador' },
      { name: 'Advertise', href: '/advertise' },
    ],
    'Company': [
      { name: 'Our Vision', href: '/about' },
      { name: 'Success Stories', href: '/stories' },
      { name: 'Contact Support', href: '/contact' },
      { name: 'Career with CY', href: '/careers' },
      { name: 'Privacy & Terms', href: '/legal' },
    ]
  }

  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: <Youtube size={20} />, href: '#', label: 'YouTube', color: 'hover:text-red-500' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
  ]

  const features = [
    { icon: <Shield size={18} />, text: 'Verified Campuses' },
    { icon: <Zap size={18} />, text: 'Instant Updates' },
    { icon: <Star size={18} />, text: 'Top Placements' },
    { icon: <Globe size={18} />, text: 'Pan-India Reach' },
  ]

  return (
    <footer className="bg-slate-950 text-slate-200 pt-20 overflow-hidden relative">
      {/* Decorative Blur Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>

      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block group mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.3)] group-hover:rotate-12 transition-transform">
                  <GraduationCap className="text-white" size={30} />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white tracking-tighter italic">College<span className="text-indigo-500">Yaari.</span></h2>
                  <p className="text-slate-500 text-xs font-black uppercase tracking-widest">The Ultimate Student Hub</p>
                </div>
              </div>
            </Link>
            
            <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-10 font-medium">
              We are building Indias most connected student ecosystem. From choosing the right college to landing your dream job—we are your <span className="text-white font-bold italic">Yaar</span> in the journey.
            </p>

            <div className="flex items-center gap-6">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                      {i === 4 ? '+10k' : <Users size={14}/>}
                    </div>
                  ))}
               </div>
               <p className="text-sm text-slate-400 font-bold">Join 50,000+ Students already using CY</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-2">Join the inner circle 🚀</h3>
                <p className="text-slate-400 text-sm mb-6 font-medium">Get exclusive internship alerts and scholarship updates weekly.</p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Future CEO's Email..."
                    className="flex-1 px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-slate-600 font-bold"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-colors shadow-lg shadow-indigo-900/20"
                  >
                    Get Access
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20 border-t border-slate-900 pt-20">
          {Object.entries(quickLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-indigo-500">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-slate-400 hover:text-white font-bold text-[13px] transition-all flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-indigo-500 transition-all"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-4 bg-slate-900/40 p-5 rounded-3xl border border-slate-800/50 hover:border-indigo-500/30 transition-colors">
              <div className="w-10 h-10 bg-indigo-600/10 rounded-xl flex items-center justify-center text-indigo-500">
                {f.icon}
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-slate-300">{f.text}</span>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 py-10 border-y border-slate-900">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-indigo-500"><Phone size={16}/></div>
             <p className="text-sm font-black tracking-tighter">+91 80847 20333</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-indigo-500"><Mail size={16}/></div>
             <p className="text-sm font-black tracking-tighter">hello@collegeyaari.com</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-indigo-500"><MapPin size={16}/></div>
             <p className="text-sm font-black tracking-tighter">Campus Hub, New Delhi</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <p className="text-slate-500 text-[11px] font-black uppercase tracking-widest">
              © {new Date().getFullYear()} College Yaari. Crafted with <Heart size={10} className="inline text-red-500 fill-red-500 mx-1"/> for students.
            </p>
            <p className="text-slate-600 text-[10px] mt-2 font-bold italic">
              Empowering 500+ Districts and 1000+ Campuses across India.
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ y: -5, scale: 1.1 }}
                className={`w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-slate-400 transition-all border border-slate-800 ${social.color}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 px-6 py-3 bg-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] border border-slate-800 hover:border-indigo-500 transition-all"
          >
            Go Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* ISO/Certifications bar */}
      <div className="bg-indigo-600 py-3">
          <div className="container mx-auto px-6 flex justify-center gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-white/80 overflow-x-auto whitespace-nowrap">
              <span>Govt. Recognized Startup</span>
              <span>•</span>
              <span>100% Student Verified</span>
              <span>•</span>
              <span>PCI Security Standard</span>
          </div>
      </div>
    </footer>
  )
}