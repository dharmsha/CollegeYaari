// events/page.js
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedMonth, setSelectedMonth] = useState('all')
  const [selectedMode, setSelectedMode] = useState('all')
  const [sortBy, setSortBy] = useState('recent')

  // Categories
  const categories = [
    { id: 'all', name: 'All Events', count: 156 },
    { id: 'workshop', name: 'Workshops', count: 45 },
    { id: 'seminar', name: 'Seminars', count: 32 },
    { id: 'conference', name: 'Conferences', count: 28 },
    { id: 'hackathon', name: 'Hackathons', count: 18 },
    { id: 'webinar', name: 'Webinars', count: 33 }
  ]

  // Event Types
  const types = [
    'All Types',
    'Technical',
    'Non-Technical',
    'Cultural',
    'Sports',
    'Academic'
  ]

  // Months
  const months = [
    'All Months',
    'January 2026',
    'February 2026',
    'March 2026',
    'April 2026',
    'May 2026',
    'June 2026'
  ]

  // Modes
  const modes = [
    'All Modes',
    'Online',
    'Offline',
    'Hybrid'
  ]

  // Events Database
  const events = [
    {
      id: 1,
      title: 'National Hackathon 2026',
      category: 'hackathon',
      type: 'Technical',
      mode: 'Hybrid',
      date: '15-17 March 2026',
      time: '10:00 AM onwards',
      location: 'IIT Delhi & Online',
      organizer: 'IIT Delhi & Microsoft',
      price: 'Free',
      registrationDeadline: '10 March 2026',
      spots: 500,
      registered: 1250,
      description: 'India\'s biggest hackathon with 36 hours of coding, mentoring, and prizes worth ₹50 lakhs.',
      schedule: [
        'Day 1: Inauguration & Problem Statement Release',
        'Day 2: Coding Round & Mentoring Sessions',
        'Day 3: Final Presentations & Award Ceremony'
      ],
      speakers: [
        'Sundar Pichai - CEO Google',
        'Satya Nadella - CEO Microsoft',
        'Kiran Mazumdar - Biocon'
      ],
      prizes: [
        '1st Prize: ₹20 Lakhs',
        '2nd Prize: ₹15 Lakhs',
        '3rd Prize: ₹10 Lakhs',
        '10 Consolation: ₹50,000 each'
      ],
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      color: 'from-purple-600 to-purple-400',
      featured: true
    },
    {
      id: 2,
      title: 'AI & Machine Learning Workshop',
      category: 'workshop',
      type: 'Technical',
      mode: 'Online',
      date: '5-7 February 2026',
      time: '6:00 PM - 8:00 PM',
      location: 'Zoom',
      organizer: 'Google Developers',
      price: '₹499',
      registrationDeadline: '3 February 2026',
      spots: 200,
      registered: 450,
      description: 'Hands-on workshop on AI/ML with industry experts. Learn practical implementation of ML models.',
      schedule: [
        'Day 1: Python for ML & Data Processing',
        'Day 2: Supervised Learning Algorithms',
        'Day 3: Deep Learning & Neural Networks'
      ],
      speakers: [
        'Dr. Andrew Ng - Stanford',
        'Laurence Moroney - Google AI'
      ],
      perks: [
        'Certificate of Completion',
        'Project Files',
        'Recording Access',
        '1-on-1 Mentoring'
      ],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
      color: 'from-blue-600 to-blue-400'
    },
    {
      id: 3,
      title: 'Tech Summit 2026',
      category: 'conference',
      type: 'Technical',
      mode: 'Offline',
      date: '20-22 February 2026',
      time: '9:00 AM - 6:00 PM',
      location: 'Bombay Convention Centre',
      organizer: 'Tech Mahindra',
      price: '₹1999',
      registrationDeadline: '15 February 2026',
      spots: 1000,
      registered: 2800,
      description: 'Asia\'s largest tech conference featuring keynote speeches, panel discussions, and networking.',
      schedule: [
        'Day 1: Keynotes & Exhibition',
        'Day 2: Technical Sessions & Workshops',
        'Day 3: Startup Pitch & Awards'
      ],
      speakers: [
        'Elon Musk - Tesla (Virtual)',
        'Narayana Murthy - Infosys',
        'Ritika Suri - Tech Mahindra'
      ],
      sponsors: ['Google', 'Microsoft', 'Amazon', 'Meta'],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
      color: 'from-orange-600 to-orange-400',
      featured: true
    },
    {
      id: 4,
      title: 'Startup Pitch Fest',
      category: 'seminar',
      type: 'Non-Technical',
      mode: 'Offline',
      date: '12 March 2026',
      time: '11:00 AM - 5:00 PM',
      location: 'IIM Bangalore',
      organizer: 'IIM Bangalore & Shark Tank India',
      price: '₹999',
      registrationDeadline: '8 March 2026',
      spots: 300,
      registered: 580,
      description: 'Pitch your startup idea to real investors. Get funding opportunities and mentorship.',
      schedule: [
        '11 AM: Registration & Networking',
        '12 PM: Pitch Round 1',
        '2 PM: Pitch Round 2',
        '4 PM: Winners Announcement'
      ],
      judges: [
        'Namita Thapar - Emcure',
        'Aman Gupta - Boat',
        'Vineeta Singh - SUGAR'
      ],
      prizes: [
        'Funding up to ₹1 Crore',
        'Mentorship for 6 months',
        'Incubation space'
      ],
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd',
      color: 'from-green-600 to-green-400'
    },
    {
      id: 5,
      title: 'International Research Symposium',
      category: 'conference',
      type: 'Academic',
      mode: 'Hybrid',
      date: '25-27 March 2026',
      time: '9:30 AM - 5:30 PM',
      location: 'IISc Bangalore & Online',
      organizer: 'IISc Bangalore',
      price: 'Free for Students',
      registrationDeadline: '20 March 2026',
      spots: 800,
      registered: 950,
      description: 'Present your research papers, attend keynote lectures, and network with researchers worldwide.',
      tracks: [
        'Computer Science',
        'Biotechnology',
        'Physics',
        'Chemistry',
        'Mathematics'
      ],
      speakers: [
        'Dr. API Abdul Kalam (Memorial Lecture)',
        'Dr. Tessy Thomas - DRDO',
        'Dr. R. Chidambaram'
      ],
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d',
      color: 'from-indigo-600 to-indigo-400'
    },
    {
      id: 6,
      title: 'Design Thinking Workshop',
      category: 'workshop',
      type: 'Non-Technical',
      mode: 'Online',
      date: '8-9 February 2026',
      time: '3:00 PM - 6:00 PM',
      location: 'Microsoft Teams',
      organizer: 'IDEO U',
      price: '₹1499',
      registrationDeadline: '5 February 2026',
      spots: 150,
      registered: 320,
      description: 'Learn design thinking methodology to solve complex problems creatively.',
      curriculum: [
        'Empathy & User Research',
        'Ideation Techniques',
        'Prototyping Methods',
        'Testing & Iteration'
      ],
      includes: [
        'Design Kit Access',
        'Certificate',
        'Project Portfolio',
        'Community Access'
      ],
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
      color: 'from-pink-600 to-pink-400'
    },
    {
      id: 7,
      title: 'Coding Contest - CodeFest 2026',
      category: 'hackathon',
      type: 'Technical',
      mode: 'Online',
      date: '18 February 2026',
      time: '24 Hours',
      location: 'HackerRank Platform',
      organizer: 'HackerRank & GitHub',
      price: 'Free',
      registrationDeadline: '16 February 2026',
      spots: 10000,
      registered: 15000,
      description: 'Global coding competition with challenging problems and massive prizes.',
      problemSets: [
        'Data Structures',
        'Algorithms',
        'Dynamic Programming',
        'System Design'
      ],
      prizes: [
        'Global Rank 1: $10,000',
        'Global Rank 2: $5,000',
        'Global Rank 3: $2,500',
        'Top 100: Goodies'
      ],
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
      color: 'from-red-600 to-red-400',
      featured: true
    },
    {
      id: 8,
      title: 'Leadership Summit',
      category: 'seminar',
      type: 'Non-Technical',
      mode: 'Offline',
      date: '28 February 2026',
      time: '10:00 AM - 4:00 PM',
      location: 'Taj Palace, Delhi',
      organizer: 'Young Indians',
      price: '₹2500',
      registrationDeadline: '25 February 2026',
      spots: 200,
      registered: 410,
      description: 'Learn leadership skills from industry captains and successful entrepreneurs.',
      sessions: [
        'Leading with Purpose',
        'Building High-Performance Teams',
        'Decision Making Under Pressure',
        'Future of Leadership'
      ],
      speakers: [
        'Anand Mahindra - Mahindra Group',
        'Kiran Mazumdar - Biocon',
        'Sanjeev Bikhchandani - Info Edge'
      ],
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2',
      color: 'from-yellow-600 to-yellow-400'
    }
  ]

  // Filter events
  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.organizer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'all' || event.type === selectedType
    const matchesMode = selectedMode === 'all' || event.mode === selectedMode
    return matchesCategory && matchesSearch && matchesType && matchesMode
  })

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 -right-40 w-96 h-96 bg-pink-600 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Events</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Workshops • Hackathons • Conferences • Seminars • Webinars
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto relative">
              <div className="flex items-center bg-gray-800/50 backdrop-blur-md rounded-2xl p-1 border border-gray-700">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search events by title or organizer..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-6 pr-4 py-4 bg-transparent text-white placeholder-gray-400 outline-none"
                  />
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-10">
        {/* Category Pills */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Browse by Category</h2>
            <Link href="/all-events" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
              View All →
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 border border-gray-700'
                }`}
              >
                <span>{category.name}</span>
                <span className="ml-2 text-xs px-2 py-1 rounded-full bg-gray-700">{category.count}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-4 mb-8 border border-gray-700">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium text-gray-400">Filters:</span>
            
            <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-sm text-white outline-none">
              {types.map(type => (
                <option key={type} value={type === 'All Types' ? 'all' : type}>{type}</option>
              ))}
            </select>

            <select value={selectedMode} onChange={(e) => setSelectedMode(e.target.value)}
              className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-sm text-white outline-none">
              {modes.map(mode => (
                <option key={mode} value={mode === 'All Modes' ? 'all' : mode}>{mode}</option>
              ))}
            </select>

            <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-sm text-white outline-none">
              {months.map(month => (
                <option key={month} value={month === 'All Months' ? 'all' : month}>{month}</option>
              ))}
            </select>

            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-sm text-white outline-none">
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

            <div className="flex-1"></div>
            
            <span className="text-sm text-gray-400">
              {filteredEvents.length} events found
            </span>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                
                {/* Featured Badge */}
                {event.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-yellow-500 text-black rounded-full text-xs font-bold">FEATURED</span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-30`}></div>
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-gray-600">
                      {event.mode}
                    </span>
                    <span className="px-3 py-1 bg-purple-600/80 text-white rounded-full text-xs font-medium">
                      {event.category}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-300">{event.organizer}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date & Time */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-green-400 font-medium">{event.date}</span>
                    <span className="text-gray-400 text-sm">{event.time}</span>
                  </div>

                  {/* Location */}
                  <p className="text-gray-300 text-sm mb-4">📍 {event.location}</p>

                  {/* Price & Spots */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-white">{event.price}</span>
                    <span className="text-sm text-gray-400">
                      {event.registered}/{event.spots} registered
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                      style={{ width: `${(event.registered / event.spots) * 100}%` }}
                    ></div>
                  </div>

                  {/* Deadline */}
                  <div className="text-sm text-yellow-400 mb-4">
                    Register by: {event.registrationDeadline}
                  </div>

                  {/* Button */}
                  <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                    Register Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gray-800 text-white rounded-xl font-semibold border border-gray-700 hover:bg-gray-700 transition-all">
            Load More Events
          </button>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}