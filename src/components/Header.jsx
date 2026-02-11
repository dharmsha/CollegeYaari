'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  FaHome, FaSearch, FaBell, FaBars, FaTimes,
  FaUniversity, FaUserFriends, FaLaptopCode, FaCalendarAlt,
  FaBookReader, FaChevronDown, FaRocket, FaUserAlt, FaHeadset
} from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function CollegeHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  
  const userMenuRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation Items with Home and Campus
  const navItems = [
    { name: 'Home', href: '/home', icon: <FaHome /> },
    { name: 'Campus', href: '/campus', icon: <FaUniversity /> },
    { name: 'Colleges', href: '/colleges', icon: <FaUniversity /> },
    { name: 'Courses', href: '/courses', icon: <FaBookReader /> },
    { name: 'Internships', href: '/internships', icon: <FaLaptopCode /> },
    { name: 'Events', href: '/events', icon: <FaCalendarAlt /> },
    { name: 'Community', href: '/community', icon: <FaUserFriends /> },
    { name: 'Placements', href: '/placements', icon: <FaRocket /> },
  ]

  return (
    <>
      <header className={`
        fixed top-0 left-0 right-0 z-[100] transition-all duration-300
        ${isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3' 
          : 'bg-white py-4 md:py-6'
        }
      `}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* --- LOGO (Sleek Black/Indigo Theme) --- */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-900 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <FaUniversity className="text-white text-lg md:text-xl" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg md:text-2xl font-black tracking-tighter text-slate-900 leading-none">
                College<span className="text-indigo-600 italic">Yaari</span>
              </h1>
              <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1 hidden xs:block">The Student Hub</span>
            </div>
          </Link>

          {/* --- DESKTOP NAVIGATION (Consistent Indigo Styling) --- */}
          <nav className="hidden xl:flex items-center bg-slate-50 border border-slate-200/50 rounded-full px-1.5 py-1">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-5 py-2.5 rounded-full text-[12px] font-black uppercase tracking-wider transition-all
                    ${active ? 'text-white' : 'text-slate-900 hover:text-indigo-600'}
                  `}
                >
                  {active && (
                    <motion.div layoutId="activeNav" className="absolute inset-0 bg-indigo-600 rounded-full -z-10 shadow-md" />
                  )}
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* --- ACTION BUTTONS --- */}
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-3 bg-slate-50 text-slate-900 rounded-xl md:rounded-2xl hover:bg-indigo-50 hover:text-indigo-600 transition-all"
            >
              <FaSearch size={16} />
            </button>

            <button className="hidden sm:flex p-3 bg-slate-50 text-slate-900 rounded-2xl hover:bg-indigo-50 relative transition-all">
              <FaBell size={18} />
              <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative hidden md:block" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 p-1.5 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-all shadow-md shadow-slate-200"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-indigo-700 flex items-center justify-center text-white font-black text-xs">
                  PK
                </div>
                <FaChevronDown className={`text-[10px] text-white/70 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="absolute right-0 mt-3 w-56 bg-white rounded-3xl shadow-2xl border border-slate-100 p-2 overflow-hidden"
                  >
                    <div className="px-4 py-3 border-b border-slate-50 mb-1">
                      <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">Student</p>
                      <p className="text-sm font-black text-slate-900 leading-tight">Pritam Kumar</p>
                    </div>
                    {['Profile', 'Applications', 'Settings'].map((item) => (
                      <Link key={item} href="#" className="block px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-all">{item}</Link>
                    ))}
                    <button className="w-full text-left px-4 py-2.5 text-xs font-black text-red-500 hover:bg-red-50 rounded-xl mt-1 transition-all uppercase">Logout</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="xl:hidden p-3 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-200"
            >
              <FaBars size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* --- SEARCH OVERLAY --- */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white p-6"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 flex items-center bg-slate-100 rounded-2xl px-4 border border-slate-200 focus-within:border-indigo-500">
                <FaSearch className="text-slate-400" />
                <input autoFocus type="text" placeholder="Search Colleges..." className="w-full p-4 bg-transparent outline-none font-bold text-slate-900" />
              </div>
              <button onClick={() => setIsSearchOpen(false)} className="p-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-[10px]">Close</button>
            </div>
            <p className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest">Recent Searches</p>
            <div className="flex flex-wrap gap-2">
              {['IIT Delhi', 'MBA Marketing', 'Internships'].map(s => (
                <span key={s} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold text-slate-600 hover:text-indigo-600 transition-all cursor-pointer">{s}</span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MOBILE SIDEBAR MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[150] xl:hidden">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileMenuOpen(false)} className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm" />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-2xl font-black text-slate-900 tracking-tighter">Menu<span className="text-indigo-600">.</span></span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-slate-100 text-slate-900 rounded-xl"><FaTimes /></button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-2 pr-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${pathname === item.href ? 'bg-indigo-600 text-white shadow-xl' : 'bg-slate-50 text-slate-900 hover:bg-indigo-50 hover:text-indigo-600'}`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-black uppercase tracking-widest">{item.name}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-6 p-6 bg-indigo-600 rounded-[2rem] text-white">
                <div className="flex items-center gap-3 mb-4 text-left">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><FaHeadset size={18}/></div>
                  <div>
                    <p className="text-[10px] font-black uppercase opacity-70">Support Hub</p>
                    <p className="text-xs font-bold">Need Career Advice?</p>
                  </div>
                </div>
                <button className="w-full py-3 bg-white text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg active:scale-95 transition-all">Chat with Mentor</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- MOBILE BOTTOM NAV --- */}
      <div className="xl:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] h-16 bg-slate-900/90 backdrop-blur-xl rounded-[2rem] z-[120] border border-white/10 shadow-2xl flex items-center justify-around px-4">
        {[
          { icon: <FaHome />, label: 'Home', href: '/home' },
          { icon: <FaUniversity />, label: 'Colleges', href: '/colleges' },
          { icon: <FaSearch />, label: 'Search', action: () => setIsSearchOpen(true) },
          { icon: <FaUserAlt />, label: 'Profile', href: '/profile' }
        ].map((item, idx) => {
          const active = pathname === item.href
          return item.action ? (
            <button key={idx} onClick={item.action} className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-all">
              <span className="text-xl">{item.icon}</span>
              <span className="text-[8px] font-black uppercase tracking-tighter">{item.label}</span>
            </button>
          ) : (
            <Link key={idx} href={item.href} className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-indigo-400 scale-110' : 'text-white/50 hover:text-white'}`}>
              <span className="text-xl">{item.icon}</span>
              <span className="text-[8px] font-black uppercase tracking-tighter">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </>
  )
}