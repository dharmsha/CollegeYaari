'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  FaHome, FaSearch, FaBell, FaBars, FaTimes,
  FaUniversity, FaUserFriends, FaLaptopCode, FaCalendarAlt,
  FaBookReader, FaChevronDown, FaRocket, FaUserAlt, FaHeadset, 
  FaSignOutAlt, FaQuestionCircle, FaGraduationCap, FaBriefcase,
  FaRegCalendarAlt, FaUsers, FaChartLine, FaWhatsapp, FaPhone
} from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function CollegeHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeMobileSection, setActiveMobileSection] = useState('main')
  
  const userMenuRef = useRef(null)
  const pathname = usePathname()

  // Scroll visibility handler
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
        setIsSearchOpen(false)
        setIsUserMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: 'Home', href: '/', icon: <FaHome /> },
    { name: 'Inquiry', href: '/Inquiry', icon: <FaQuestionCircle /> },
    { name: 'Campus', href: '/campus', icon: <FaUniversity /> },
    { name: 'Colleges', href: '/colleges', icon: <FaGraduationCap /> },
    { name: 'Courses', href: '/courses', icon: <FaBookReader /> },
    { name: 'Internships', href: '/internships', icon: <FaBriefcase /> },
    { name: 'Events', href: '/events', icon: <FaRegCalendarAlt /> },
    { name: 'Community', href: '/community', icon: <FaUsers /> },
    { name: 'Placements', href: '/placements', icon: <FaChartLine /> },
  ]

  // Group navigation for better organization
  const mainNavItems = navItems.slice(0, 5)
  const moreNavItems = navItems.slice(5)

  return (
    <>
      <header className={`
        fixed top-0 left-0 right-0 z-[100] transition-all duration-300
        ${isScrolled ? 'bg-white/90 backdrop-blur-md py-2 shadow-md' : 'bg-white py-3 md:py-4'}
      `}>
        <div className="container mx-auto px-3 md:px-4 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-1.5 md:gap-2 z-[110] group">
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center text-white shadow-lg"
            >
              <FaUniversity className="text-sm md:text-base" />
            </motion.div>
            <h1 className="text-lg md:text-xl font-black text-slate-900">
              College<span className="text-indigo-600">Yaari</span>
            </h1>
          </Link>

          {/* DESKTOP NAV - Hidden on mobile */}
          <nav className="hidden xl:flex items-center gap-1">
            {mainNavItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all rounded-full ${
                    active 
                      ? 'text-indigo-600' 
                      : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span className="text-xs">{item.icon}</span>
                    {item.name}
                  </span>
                  {active && (
                    <motion.div 
                      layoutId="nav-pill" 
                      className="absolute inset-0 bg-indigo-50 rounded-full -z-0"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              )
            })}

            {/* More dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full flex items-center gap-1">
                More <FaChevronDown className="text-[10px] group-hover:rotate-180 transition-transform" />
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {moreNavItems.map((item) => {
                  const active = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-2.5 text-sm rounded-xl transition-all ${
                        active 
                          ? 'bg-indigo-50 text-indigo-600' 
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-xs">{item.icon}</span>
                      {item.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-1 md:gap-2">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchOpen(true)} 
              className="p-2 md:p-2.5 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg md:rounded-xl transition-all"
            >
              <FaSearch size={14} className="md:text-base" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block p-2 md:p-2.5 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg md:rounded-xl transition-all relative"
            >
              <FaBell size={14} className="md:text-base" />
              <span className="absolute top-1.5 right-1.5 md:top-2 md:right-2 w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full ring-2 ring-white" />
            </motion.button>

            {/* User Dropdown - Hidden on mobile */}
            <div className="relative hidden md:block" ref={userMenuRef}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 p-1 pr-2 md:p-1.5 md:pr-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-md"
              >
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-indigo-600 flex items-center justify-center text-xs md:text-sm font-bold">
                  PK
                </div>
                <FaChevronDown className={`text-white text-[8px] md:text-[10px] transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="absolute right-0 mt-2 w-56 bg-white border border-slate-100 shadow-xl rounded-2xl p-2 z-[110]"
                  >
                    <div className="px-4 py-3 border-b border-slate-100">
                      <p className="text-sm font-bold text-slate-900">Pritam Kumar</p>
                      <p className="text-xs text-slate-400">Student</p>
                    </div>
                    
                    {[
                      { name: 'Profile', icon: <FaUserAlt />, href: '/profile' },
                      { name: 'Settings', icon: <FaHeadset />, href: '/settings' }
                    ].map(opt => (
                      <Link 
                        key={opt.name} 
                        href={opt.href} 
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-indigo-50 rounded-xl transition-all"
                      >
                        <span className="text-xs">{opt.icon}</span>
                        {opt.name}
                      </Link>
                    ))}
                    
                    <hr className="my-1 border-slate-50" />
                    
                    <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 rounded-xl transition-all font-medium">
                      <FaSignOutAlt className="text-xs" />
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(true)} 
              className="xl:hidden p-2 md:p-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg md:rounded-xl shadow-lg"
            >
              <FaBars size={14} className="md:text-base" />
            </motion.button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU - Fully optimized for mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150]"
            />
            
            {/* Menu Panel */}
            <motion.div 
              initial={{ x: '100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-white z-[160] shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    <FaUniversity size={14} />
                  </div>
                  <span className="font-bold text-slate-900">CollegeYaari</span>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  <FaTimes size={16} />
                </motion.button>
              </div>

              {/* User Info Card */}
              <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 m-4 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    PK
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-slate-900">Pritam Kumar</p>
                    <p className="text-xs text-slate-500">Student • B.Tech 3rd Year</p>
                  </div>
                </div>
                
                {/* Quick Actions */}
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-white rounded-xl text-xs font-medium text-indigo-600 shadow-sm">
                    <FaUserAlt size={10} />
                    Profile
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-white rounded-xl text-xs font-medium text-green-600 shadow-sm">
                    <FaWhatsapp size={10} />
                    Support
                  </button>
                </div>
              </div>

              {/* Navigation Sections */}
              <div className="flex-1 overflow-y-auto px-4 pb-20">
                {/* Main Menu */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2">
                    Main Menu
                  </p>
                  <div className="space-y-1">
                    {mainNavItems.map((item) => {
                      const active = pathname === item.href
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                            active 
                              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md' 
                              : 'text-slate-600 hover:bg-indigo-50'
                          }`}
                        >
                          <span className={`text-lg ${active ? 'text-white' : 'text-indigo-400'}`}>
                            {item.icon}
                          </span>
                          <span className="text-sm font-medium">{item.name}</span>
                          {active && (
                            <span className="ml-auto text-xs bg-white/20 px-2 py-1 rounded-full">
                              Active
                            </span>
                          )}
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* More Items */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2">
                    Explore More
                  </p>
                  <div className="space-y-1">
                    {moreNavItems.map((item) => {
                      const active = pathname === item.href
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                            active 
                              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md' 
                              : 'text-slate-600 hover:bg-indigo-50'
                          }`}
                        >
                          <span className={`text-lg ${active ? 'text-white' : 'text-indigo-400'}`}>
                            {item.icon}
                          </span>
                          <span className="text-sm font-medium">{item.name}</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Help & Support */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2">
                    Support
                  </p>
                  <div className="space-y-1">
                    <a href="tel:+916201084662" className="flex items-center gap-3 p-3 rounded-xl text-slate-600 hover:bg-green-50 transition-all">
                      <FaPhone className="text-lg text-green-500" />
                      <span className="text-sm font-medium">Call Support</span>
                    </a>
                    <a href="https://wa.me/916201084662" className="flex items-center gap-3 p-3 rounded-xl text-slate-600 hover:bg-green-50 transition-all">
                      <FaWhatsapp className="text-lg text-green-600" />
                      <span className="text-sm font-medium">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Logout Button */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100">
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 transition-colors font-medium">
                  <FaSignOutAlt size={14} />
                  Logout
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* SEARCH OVERLAY - Mobile optimized */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white p-4 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                <input 
                  autoFocus 
                  placeholder="Search..." 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-indigo-400"
                />
              </div>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(false)} 
                className="px-4 py-3 bg-slate-900 text-white rounded-xl text-sm font-medium"
              >
                Cancel
              </motion.button>
            </div>

            {/* Recent Searches */}
            <div className="mt-4">
              <p className="text-xs font-semibold text-slate-400 mb-3">Recent Searches</p>
              <div className="space-y-2">
                {['IIT Delhi', 'MBA Colleges', 'Internships'].map((item) => (
                  <button key={item} className="w-full text-left px-3 py-2.5 bg-slate-50 rounded-xl text-sm text-slate-600">
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation - Fixed for all mobile devices */}
      <div className="xl:hidden fixed bottom-0 left-0 right-0 z-[120] bg-white border-t border-slate-100 shadow-lg">
        <div className="flex items-center justify-around px-2 py-1">
          {navItems.slice(0, 5).map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center gap-0.5 py-2 px-2 rounded-xl transition-all ${
                  active ? 'text-indigo-600' : 'text-slate-400 hover:text-indigo-600'
                }`}
              >
                <span className={`text-lg ${active ? 'scale-110' : ''}`}>{item.icon}</span>
                <span className="text-[8px] font-medium whitespace-nowrap">{item.name}</span>
                {active && (
                  <motion.div 
                    layoutId="bottomNav"
                    className="w-1 h-1 bg-indigo-600 rounded-full mt-0.5"
                  />
                )}
              </Link>
            )
          })}
        </div>
      </div>

      {/* Quick Action Button for mobile */}
      <motion.a
        href="tel:+916201084662"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="xl:hidden fixed bottom-20 right-4 z-[130] bg-green-500 text-white p-3 rounded-full shadow-lg shadow-green-200"
      >
        <FaPhone size={20} />
      </motion.a>
    </>
  )
}