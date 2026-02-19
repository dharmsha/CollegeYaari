'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaSearch, FaFilter, FaStar, FaMapMarkerAlt, FaRupeeSign,
  FaChartLine, FaUsers, FaUniversity, FaBookOpen, FaCalendarAlt,
  FaArrowUp, FaArrowDown, FaChevronRight, FaGraduationCap,
  FaBuilding, FaTrophy, FaAward, FaChartBar, FaDownload,
  FaExternalLinkAlt, FaGlobe, FaWikipediaW, FaTwitter,
  FaInstagram, FaYoutube, FaLinkedin, FaChevronLeft,
  FaHeart, FaShare, FaBookmark, FaEye, FaClock,
  FaCheckCircle, FaCertificate, FaBriefcase, FaMoneyBillWave,
  FaArrowRight  // Added missing import
} from 'react-icons/fa'
import { HiOutlineAcademicCap, HiOutlineLocationMarker, HiOutlineCurrencyRupee } from 'react-icons/hi'

export default function CollegesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedYear, setSelectedYear] = useState('2024')
  const [selectedState, setSelectedState] = useState('all')
  const [sortBy, setSortBy] = useState('rank')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCollege, setSelectedCollege] = useState(null)
  const [viewMode, setViewMode] = useState('grid')
  const [hoveredCollege, setHoveredCollege] = useState(null)
  const [bookmarkedColleges, setBookmarkedColleges] = useState([])
  const [compareList, setCompareList] = useState([])
  const [showCompare, setShowCompare] = useState(false)

  // Categories
  const categories = [
    { id: 'all', name: 'All Colleges', icon: <FaUniversity />, count: 120 },
    { id: 'iit', name: 'IITs', icon: <FaTrophy />, count: 23, color: 'from-orange-500 to-red-500' },
    { id: 'nit', name: 'NITs', icon: <FaAward />, count: 31, color: 'from-blue-500 to-cyan-500' },
    { id: 'iiit', name: 'IIITs', icon: <FaChartBar />, count: 25, color: 'from-purple-500 to-pink-500' },
    { id: 'gfti', name: 'GFTIs', icon: <FaBuilding />, count: 38, color: 'from-green-500 to-emerald-500' },
    { id: 'private', name: 'Private', icon: <FaBuilding />, count: 150, color: 'from-yellow-500 to-amber-500' }
  ]

  // States for filter
  const indianStates = [
    'All States', 'Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 
    'Telangana', 'West Bengal', 'Uttar Pradesh', 'Gujarat', 'Rajasthan',
    'Madhya Pradesh', 'Bihar', 'Punjab', 'Haryana', 'Odisha'
  ]

  // Complete College Database
  const colleges = [
    {
      id: 1,
      name: 'Indian Institute of Technology Bombay',
      shortName: 'IIT Bombay',
      category: 'iit',
      location: 'Mumbai, Maharashtra',
      state: 'Maharashtra',
      established: 1958,
      nirfRank: 1,
      type: 'IIT',
      accreditation: 'A++',
      ranking: {
        nirf: 1,
        qs: 172,
        times: 401
      },
      images: {
        main: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        campus: [
          'https://images.unsplash.com/photo-1562774053-701939374585',
          'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
          'https://images.unsplash.com/photo-1597239450996-e3e16cc6079f'
        ]
      },
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/IIT_Bombay_Logo.svg',
      cutoff: {
        '2024': {
          general: { closingRank: 120, openingRank: 45 },
          obc: { closingRank: 250, openingRank: 120 },
          sc: { closingRank: 450, openingRank: 250 },
          st: { closingRank: 650, openingRank: 400 }
        },
        '2023': {
          general: { closingRank: 135, openingRank: 50 },
          obc: { closingRank: 265, openingRank: 135 },
          sc: { closingRank: 465, openingRank: 265 },
          st: { closingRank: 665, openingRank: 415 }
        }
      },
      fees: {
        general: 225000,
        obc: 225000,
        sc: 50000,
        st: 50000,
        international: 450000
      },
      placements: {
        '2024': {
          average: 2800000,
          median: 2650000,
          highest: 82000000,
          percentage: 98,
          offers: 1200,
          companies: 350
        },
        '2023': {
          average: 2600000,
          median: 2450000,
          highest: 75000000,
          percentage: 97,
          offers: 1150,
          companies: 320
        }
      },
      topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Goldman Sachs', 'Intel', 'Texas Instruments'],
      courses: [
        { name: 'B.Tech Computer Science', duration: '4 Years', seats: 85, fees: 225000 },
        { name: 'B.Tech Electrical', duration: '4 Years', seats: 80, fees: 225000 },
        { name: 'B.Tech Mechanical', duration: '4 Years', seats: 82, fees: 225000 },
        { name: 'M.Tech CS', duration: '2 Years', seats: 45, fees: 125000 },
        { name: 'PhD', duration: '5 Years', seats: 30, fees: 50000 }
      ],
      facilities: [
        'Central Library', 'Sports Complex', 'Hostels', 'Medical Center',
        'Innovation Lab', 'Startup Incubator', 'WiFi Campus', 'Smart Classrooms'
      ],
      studentStats: {
        total: 8450,
        ug: 4250,
        pg: 3200,
        phd: 1000,
        faculty: 650,
        gender: '40% Girls'
      },
      achievements: [
        'Best Innovative Institute 2023',
        'Top Placement Record 2024',
        'Research Excellence Award',
        'Green Campus Award'
      ],
      website: 'https://www.iitb.ac.in',
      wikipedia: 'https://en.wikipedia.org/wiki/IIT_Bombay',
      social: {
        twitter: 'https://twitter.com/iitbombay',
        instagram: 'https://www.instagram.com/iitbombay',
        youtube: 'https://youtube.com/@iitbombay',
        linkedin: 'https://linkedin.com/school/iit-bombay'
      },
      highlights: ['Top Ranked', 'Best Placements', 'Research Excellence', 'Heritage Campus'],
      rating: 4.9,
      reviews: 1250
    },
    {
      id: 2,
      name: 'Indian Institute of Technology Delhi',
      shortName: 'IIT Delhi',
      category: 'iit',
      location: 'New Delhi',
      state: 'Delhi',
      established: 1961,
      nirfRank: 2,
      type: 'IIT',
      accreditation: 'A++',
      ranking: {
        nirf: 2,
        qs: 193,
        times: 450
      },
      images: {
        main: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        campus: [
          'https://images.unsplash.com/photo-1594122230689-45899d9e6f69',
          'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
          'https://images.unsplash.com/photo-1562774053-701939374585'
        ]
      },
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/85/IIT_Delhi_Logo.svg',
      cutoff: {
        '2024': {
          general: { closingRank: 150, openingRank: 60 },
          obc: { closingRank: 280, openingRank: 150 },
          sc: { closingRank: 480, openingRank: 280 },
          st: { closingRank: 680, openingRank: 430 }
        }
      },
      fees: {
        general: 215000,
        obc: 215000,
        sc: 50000,
        st: 50000
      },
      placements: {
        '2024': {
          average: 2600000,
          median: 2450000,
          highest: 75000000,
          percentage: 97,
          offers: 1100,
          companies: 340
        }
      },
      topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Goldman Sachs', 'Apple'],
      courses: [
        { name: 'B.Tech Computer Science', duration: '4 Years', seats: 80, fees: 215000 },
        { name: 'B.Tech Electrical', duration: '4 Years', seats: 78, fees: 215000 },
        { name: 'MBA', duration: '2 Years', seats: 60, fees: 195000 }
      ],
      facilities: ['Central Library', 'Sports Complex', 'Hostels', 'Medical Center'],
      studentStats: {
        total: 8250,
        ug: 4000,
        pg: 3250,
        phd: 1000,
        faculty: 620
      },
      achievements: ['Top Placement Record', 'Research Excellence'],
      website: 'https://home.iitd.ac.in',
      wikipedia: 'https://en.wikipedia.org/wiki/IIT_Delhi',
      social: {
        twitter: 'https://twitter.com/iitdelhi',
        instagram: 'https://www.instagram.com/iitdelhi',
        linkedin: 'https://linkedin.com/school/iit-delhi'
      },
      highlights: ['Capital City', 'Industry Connect', 'Strong Alumni', 'Innovation Hub'],
      rating: 4.8,
      reviews: 1150
    },
    {
      id: 3,
      name: 'National Institute of Technology Trichy',
      shortName: 'NIT Trichy',
      category: 'nit',
      location: 'Tiruchirappalli, Tamil Nadu',
      state: 'Tamil Nadu',
      established: 1964,
      nirfRank: 9,
      type: 'NIT',
      accreditation: 'A++',
      images: {
        main: 'https://images.unsplash.com/photo-1597239450996-e3e16cc6079f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      cutoff: {
        '2024': {
          general: { closingRank: 2500, openingRank: 800 },
          obc: { closingRank: 4000, openingRank: 2500 },
          sc: { closingRank: 8000, openingRank: 5000 },
          st: { closingRank: 12000, openingRank: 8000 }
        }
      },
      fees: {
        general: 180000,
        obc: 180000,
        sc: 40000,
        st: 40000
      },
      placements: {
        '2024': {
          average: 2200000,
          highest: 58000000,
          percentage: 94
        }
      },
      topRecruiters: ['Microsoft', 'Amazon', 'Intel', 'Texas Instruments'],
      website: 'https://www.nitt.edu',
      highlights: ['Top NIT', 'Excellent Placement', 'Beautiful Campus'],
      rating: 4.7,
      reviews: 980
    },
    {
      id: 4,
      name: 'International Institute of Information Technology Hyderabad',
      shortName: 'IIIT Hyderabad',
      category: 'iiit',
      location: 'Hyderabad, Telangana',
      state: 'Telangana',
      established: 1998,
      nirfRank: 15,
      type: 'IIIT',
      images: {
        main: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      cutoff: {
        '2024': {
          general: { closingRank: 3500, openingRank: 1200 },
          obc: { closingRank: 5500, openingRank: 3500 },
          sc: { closingRank: 10000, openingRank: 6500 },
          st: { closingRank: 14000, openingRank: 10000 }
        }
      },
      fees: {
        general: 400000,
        obc: 400000,
        sc: 200000,
        st: 200000
      },
      placements: {
        '2024': {
          average: 2800000,
          highest: 75000000,
          percentage: 96
        }
      },
      topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Facebook'],
      website: 'https://www.iiit.ac.in',
      highlights: ['Research Focus', 'Industry Connect', 'Startup Culture'],
      rating: 4.6,
      reviews: 850
    },
    {
      id: 5,
      name: 'Delhi Technological University',
      shortName: 'DTU Delhi',
      category: 'gfti',
      location: 'New Delhi',
      state: 'Delhi',
      established: 1941,
      nirfRank: 35,
      type: 'GFTI',
      images: {
        main: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
      },
      cutoff: {
        '2024': {
          general: { closingRank: 6000, openingRank: 2500 },
          obc: { closingRank: 9500, openingRank: 6000 },
          sc: { closingRank: 15000, openingRank: 10000 },
          st: { closingRank: 19000, openingRank: 15000 }
        }
      },
      fees: {
        general: 190000,
        obc: 190000,
        sc: 45000,
        st: 45000
      },
      placements: {
        '2024': {
          average: 1800000,
          highest: 62000000,
          percentage: 92
        }
      },
      topRecruiters: ['Microsoft', 'Amazon', 'Google', 'Goldman Sachs'],
      website: 'http://www.dtu.ac.in',
      highlights: ['Capital Location', 'Industry Connect', 'Strong Placements'],
      rating: 4.5,
      reviews: 720
    }
  ]

  // Filter colleges
  const filteredColleges = colleges.filter(college => {
    const matchesCategory = selectedCategory === 'all' || college.category === selectedCategory
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.shortName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesState = selectedState === 'all' || college.state === selectedState
    return matchesCategory && matchesSearch && matchesState
  })

  // Sort colleges
  const sortedColleges = [...filteredColleges].sort((a, b) => {
    if (sortBy === 'rank') return a.nirfRank - b.nirfRank
    if (sortBy === 'rating') return b.rating - a.rating
    if (sortBy === 'fees') return a.fees.general - b.fees.general
    if (sortBy === 'placement') return b.placements['2024'].average - a.placements['2024'].average
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    return 0
  })

  // Toggle bookmark
  const toggleBookmark = (collegeId) => {
    setBookmarkedColleges(prev => 
      prev.includes(collegeId) 
        ? prev.filter(id => id !== collegeId)
        : [...prev, collegeId]
    )
  }

  // Toggle compare
  const toggleCompare = (collegeId) => {
    setCompareList(prev => {
      if (prev.includes(collegeId)) {
        return prev.filter(id => id !== collegeId)
      }
      if (prev.length < 4) {
        return [...prev, collegeId]
      }
      alert('You can compare maximum 4 colleges')
      return prev
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-40 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Discover Your Dream <span className="text-yellow-300">College</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Explore 500+ Top Engineering Colleges in India • Compare Rankings • Check Cutoffs • View Placements
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto relative">
              <div className="flex items-center bg-white/10 backdrop-blur-md rounded-2xl p-1 border border-white/20">
                <div className="flex-1 relative">
                  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" />
                  <input
                    type="text"
                    placeholder="Search colleges by name, location or course..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-transparent text-white placeholder-white/60 outline-none"
                  />
                </div>
                <button className="px-8 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:shadow-xl transition-all">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        {/* Quick Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Colleges', value: '500+', icon: <FaUniversity />, color: 'from-indigo-500 to-indigo-600' },
            { label: 'Total Courses', value: '2.5k+', icon: <FaBookOpen />, color: 'from-purple-500 to-purple-600' },
            { label: 'Active Students', value: '50k+', icon: <FaUsers />, color: 'from-pink-500 to-pink-600' },
            { label: 'Placements', value: '₹45L Avg', icon: <FaMoneyBillWave />, color: 'from-green-500 to-green-600' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} text-white flex items-center justify-center text-xl mb-3`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Category Pills */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-800">Browse by Category</h2>
            <Link href="/all-colleges" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1">
              View All <FaChevronRight size={12} />
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative overflow-hidden px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-white border border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id ? 'bg-white/20' : 'bg-slate-100'
                  }`}>
                    {category.count}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Filters Bar */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-4 mb-8 border border-white/50">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-slate-500">
              <FaFilter />
              <span className="text-sm font-medium">Filters:</span>
            </div>

            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-4 py-2 bg-slate-50 rounded-lg border border-slate-200 text-sm focus:border-indigo-400 outline-none"
            >
              {indianStates.map(state => (
                <option key={state} value={state === 'All States' ? 'all' : state}>{state}</option>
              ))}
            </select>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 bg-slate-50 rounded-lg border border-slate-200 text-sm focus:border-indigo-400 outline-none"
            >
              <option value="2024">2024 Cutoff</option>
              <option value="2023">2023 Cutoff</option>
              <option value="2022">2022 Cutoff</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-slate-50 rounded-lg border border-slate-200 text-sm focus:border-indigo-400 outline-none"
            >
              <option value="rank">Sort by Rank</option>
              <option value="rating">Sort by Rating</option>
              <option value="fees">Sort by Fees (Low to High)</option>
              <option value="placement">Sort by Placement</option>
              <option value="name">Sort by Name</option>
            </select>

            <div className="flex-1"></div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid' ? 'bg-white shadow-md text-indigo-600' : 'text-slate-400'
                }`}
              >
                ⊞
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'list' ? 'bg-white shadow-md text-indigo-600' : 'text-slate-400'
                }`}
              >
                ≡
              </button>
            </div>

            {/* Compare Button */}
            {compareList.length > 0 && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={() => setShowCompare(true)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium flex items-center gap-2"
              >
                Compare ({compareList.length})
              </motion.button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-slate-600">
            Showing <span className="font-bold text-indigo-600">{sortedColleges.length}</span> colleges
          </p>
          <p className="text-sm text-slate-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Colleges Grid/List */}
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
          : 'space-y-4'
        }>
          {sortedColleges.map((college, index) => (
            <motion.div
              key={college.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onHoverStart={() => setHoveredCollege(college.id)}
              onHoverEnd={() => setHoveredCollege(null)}
              className="group relative"
            >
              {/* College Card */}
              <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                hoveredCollege === college.id 
                  ? 'bg-white shadow-2xl scale-[1.02] z-10' 
                  : 'bg-white/90 hover:bg-white shadow-xl'
              } border border-slate-100`}>
                
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={college.images.main} 
                    alt={college.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      college.category === 'iit' ? 'bg-orange-500 text-white' :
                      college.category === 'nit' ? 'bg-blue-500 text-white' :
                      college.category === 'iiit' ? 'bg-purple-500 text-white' :
                      'bg-green-500 text-white'
                    }`}>
                      {college.type}
                    </span>
                    <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-medium">
                      NIRF #{college.nirfRank}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={() => toggleBookmark(college.id)}
                      className={`p-2 rounded-xl backdrop-blur-md transition-all ${
                        bookmarkedColleges.includes(college.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/20 text-white hover:bg-white/40'
                      }`}
                    >
                      <FaHeart size={14} />
                    </button>
                    <button
                      onClick={() => toggleCompare(college.id)}
                      className={`p-2 rounded-xl backdrop-blur-md transition-all ${
                        compareList.includes(college.id)
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white/20 text-white hover:bg-white/40'
                      }`}
                    >
                      <FaEye size={14} />
                    </button>
                  </div>

                  {/* College Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{college.shortName}</h3>
                    <div className="flex items-center gap-2 text-sm text-white/90">
                      <FaMapMarkerAlt size={12} />
                      <span>{college.location}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Rating and Reviews */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.floor(college.rating) ? 'text-yellow-400' : 'text-slate-200'} />
                      ))}
                      <span className="text-sm font-medium text-slate-700 ml-2">{college.rating}</span>
                    </div>
                    <span className="text-xs text-slate-400">{college.reviews} reviews</span>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-indigo-50 rounded-xl p-2">
                      <div className="text-xs text-indigo-600">Est.</div>
                      <div className="font-bold text-slate-800">{college.established}</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-2">
                      <div className="text-xs text-green-600">Avg Package</div>
                      <div className="font-bold text-slate-800">
                        ₹{(college.placements['2024'].average / 100000).toFixed(1)}L
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {college.highlights.slice(0, 3).map((highlight, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Cutoff Preview */}
                  <div className="bg-slate-50 rounded-xl p-3 mb-4">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span>Opening Rank</span>
                      <span>Closing Rank</span>
                    </div>
                    <div className="flex items-center justify-between font-bold">
                      <span className="text-green-600">
                        {college.cutoff['2024'].general.openingRank.toLocaleString()}
                      </span>
                      <FaArrowRight className="text-slate-300" />
                      <span className="text-orange-600">
                        {college.cutoff['2024'].general.closingRank.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedCollege(college)}
                      className="flex-1 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-sm font-medium hover:shadow-lg transition-all"
                    >
                      View Details
                    </button>
                    <a
                      href={college.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-all"
                    >
                      <FaExternalLinkAlt size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {sortedColleges.length > 0 && (
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Load More Colleges
            </motion.button>
          </div>
        )}
      </div>

      {/* College Detail Modal */}
      <AnimatePresence>
        {selectedCollege && (
          <CollegeDetailModal
            college={selectedCollege}
            onClose={() => setSelectedCollege(null)}
            onBookmark={toggleBookmark}
            isBookmarked={bookmarkedColleges.includes(selectedCollege.id)}
          />
        )}
      </AnimatePresence>

      {/* Compare Modal */}
      <AnimatePresence>
        {showCompare && (
          <CompareModal
            colleges={colleges.filter(c => compareList.includes(c.id))}
            onClose={() => setShowCompare(false)}
            onRemove={(id) => toggleCompare(id)}
          />
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}

// College Detail Modal Component
function CollegeDetailModal({ college, onClose, onBookmark, isBookmarked }) {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Modal Header with Image */}
        <div className="relative h-72 overflow-hidden rounded-t-3xl">
          <img 
            src={college.images.main} 
            alt={college.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-white/40 transition-all"
          >
            ✕
          </button>

          {/* Bookmark Button */}
          <button
            onClick={() => onBookmark(college.id)}
            className={`absolute top-4 right-20 p-3 rounded-xl backdrop-blur-md transition-all ${
              isBookmarked ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/40'
            }`}
          >
            <FaHeart size={18} />
          </button>

          {/* College Title */}
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-3xl font-bold mb-1">{college.name}</h2>
            <div className="flex items-center gap-4 text-white/90">
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt size={14} />
                {college.location}
              </span>
              <span className="flex items-center gap-1">
                <FaCalendarAlt size={14} />
                Est. {college.established}
              </span>
              <span className="px-2 py-1 bg-yellow-500/80 rounded-lg text-xs font-medium">
                NIRF #{college.nirfRank}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-slate-200 px-8">
          <div className="flex gap-8">
            {['overview', 'courses', 'cutoff', 'placements', 'facilities'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 capitalize font-medium transition-all relative ${
                  activeTab === tab ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-8">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-indigo-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-indigo-600">{college.studentStats?.total || 8000}+</div>
                  <div className="text-sm text-indigo-400">Total Students</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">{college.studentStats?.faculty || 600}+</div>
                  <div className="text-sm text-green-400">Faculty</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">{college.courses.length}</div>
                  <div className="text-sm text-purple-400">Courses</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600">{college.placements['2024'].percentage}%</div>
                  <div className="text-sm text-orange-400">Placement</div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Achievements</h3>
                <div className="flex flex-wrap gap-2">
                  {college.achievements?.map((achievement, i) => (
                    <span key={i} className="px-4 py-2 bg-yellow-50 text-yellow-600 rounded-xl text-sm border border-yellow-100">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>

              {/* Top Recruiters */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Top Recruiters</h3>
                <div className="flex flex-wrap gap-3">
                  {college.topRecruiters.map((company, i) => (
                    <span key={i} className="px-4 py-2 bg-green-50 text-green-600 rounded-xl text-sm border border-green-100">
                      {company}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Connect with College</h3>
                <div className="flex gap-3">
                  <a href={college.website} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all">
                    <FaGlobe size={20} />
                  </a>
                  <a href={college.wikipedia} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all">
                    <FaWikipediaW size={20} />
                  </a>
                  <a href={college.social?.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-blue-400 hover:text-white transition-all">
                    <FaTwitter size={20} />
                  </a>
                  <a href={college.social?.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-pink-600 hover:text-white transition-all">
                    <FaInstagram size={20} />
                  </a>
                  <a href={college.social?.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="space-y-4">
              {college.courses.map((course, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-slate-800">{course.name}</h4>
                    <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                      <span>Duration: {course.duration}</span>
                      <span>Seats: {course.seats}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-indigo-600">₹{course.fees.toLocaleString()}</div>
                    <div className="text-xs text-slate-400">per year</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'cutoff' && (
            <div className="space-y-4">
              {Object.entries(college.cutoff['2024']).map(([category, data]) => (
                <div key={category} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <span className="font-semibold uppercase text-slate-700">{category}</span>
                  <div className="flex gap-6">
                    <span className="text-sm">
                      Opening: <span className="font-bold text-green-600">{data.openingRank.toLocaleString()}</span>
                    </span>
                    <span className="text-sm">
                      Closing: <span className="font-bold text-orange-600">{data.closingRank.toLocaleString()}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'placements' && (
            <div className="space-y-6">
              {/* Placement Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-xl text-center">
                  <div className="text-sm text-green-600 mb-1">Average Package</div>
                  <div className="text-2xl font-bold text-green-600">
                    ₹{(college.placements['2024'].average / 100000).toFixed(1)}L
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl text-center">
                  <div className="text-sm text-blue-600 mb-1">Highest Package</div>
                  <div className="text-2xl font-bold text-blue-600">
                    ₹{(college.placements['2024'].highest / 100000).toFixed(1)}L
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl text-center">
                  <div className="text-sm text-purple-600 mb-1">Placement %</div>
                  <div className="text-2xl font-bold text-purple-600">
                    {college.placements['2024'].percentage}%
                  </div>
                </div>
              </div>

              {/* Year-wise Comparison */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Year-wise Comparison</h3>
                <div className="space-y-3">
                  {Object.entries(college.placements).map(([year, data]) => (
                    <div key={year} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                      <span className="font-semibold text-slate-700">{year}</span>
                      <div className="flex gap-4">
                        <span className="text-sm">Avg: ₹{(data.average / 100000).toFixed(1)}L</span>
                        <span className="text-sm">Highest: ₹{(data.highest / 100000).toFixed(1)}L</span>
                        <span className="text-sm">{data.percentage}% Placed</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Download Button */}
        <div className="p-8 pt-0">
          <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
            <FaDownload />
            Download Complete Prospectus
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Compare Modal Component
function CompareModal({ colleges, onClose, onRemove }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Compare Colleges</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-xl">✕</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {colleges.map(college => (
            <div key={college.id} className="bg-slate-50 rounded-xl p-4 relative">
              <button
                onClick={() => onRemove(college.id)}
                className="absolute top-2 right-2 p-1 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
              >
                ✕
              </button>
              <img src={college.images.main} alt={college.name} className="w-full h-32 object-cover rounded-lg mb-3" />
              <h3 className="font-bold text-slate-800">{college.shortName}</h3>
              <div className="text-sm text-slate-500 mb-2">{college.location}</div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">NIRF Rank:</span>
                  <span className="font-bold">#{college.nirfRank}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Fees:</span>
                  <span className="font-bold">₹{college.fees.general.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Avg Package:</span>
                  <span className="font-bold text-green-600">
                    ₹{(college.placements['2024'].average / 100000).toFixed(1)}L
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Cutoff:</span>
                  <span className="font-bold text-orange-600">
                    {college.cutoff['2024'].general.closingRank.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}