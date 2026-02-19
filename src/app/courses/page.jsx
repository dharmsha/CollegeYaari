'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [selectedDuration, setSelectedDuration] = useState('all')
  const [sortBy, setSortBy] = useState('popular')
  const [viewMode, setViewMode] = useState('grid')

  // Categories
  const categories = [
    { id: 'all', name: 'All Courses', count: 245 },
    { id: 'engineering', name: 'Engineering', count: 85 },
    { id: 'medical', name: 'Medical', count: 42 },
    { id: 'management', name: 'Management', count: 38 },
    { id: 'arts', name: 'Arts & Humanities', count: 45 },
    { id: 'science', name: 'Science', count: 35 }
  ]

  // Course Levels
  const levels = [
    'All Levels',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'PhD',
    'Diploma',
    'Certificate'
  ]

  // Durations
  const durations = [
    'All Durations',
    '6 Months',
    '1 Year',
    '2 Years',
    '3 Years',
    '4 Years',
    '5+ Years'
  ]

  // Courses Database
  const courses = [
    {
      id: 1,
      name: 'Computer Science Engineering',
      category: 'engineering',
      level: 'Bachelor\'s Degree',
      duration: '4 Years',
      university: 'Indian Institute of Technology Bombay',
      universityRank: 1,
      fees: '2,25,000',
      totalSeats: 85,
      avgPackage: '28 LPA',
      highestPackage: '82 LPA',
      description: 'Comprehensive program covering algorithms, data structures, AI, machine learning, and software development.',
      syllabus: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'Database Management',
        'Computer Networks',
        'Artificial Intelligence',
        'Machine Learning',
        'Cloud Computing'
      ],
      eligibility: '10+2 with PCM 75% + JEE Advanced',
      exam: 'JEE Advanced',
      cutoff: 45,
      placements: 98,
      accreditation: 'A++',
      rating: 4.9,
      enrolled: 1250,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      color: 'from-blue-600 to-blue-400'
    },
    {
      id: 2,
      name: 'Medicine (MBBS)',
      category: 'medical',
      level: 'Bachelor\'s Degree',
      duration: '5.5 Years',
      university: 'All India Institute of Medical Sciences',
      universityRank: 1,
      fees: '16,000',
      totalSeats: 125,
      avgPackage: '15 LPA',
      highestPackage: '35 LPA',
      description: 'Comprehensive medical education program with clinical training and research opportunities.',
      syllabus: [
        'Anatomy',
        'Physiology',
        'Biochemistry',
        'Pharmacology',
        'Pathology',
        'Medicine',
        'Surgery',
        'Pediatrics'
      ],
      eligibility: '10+2 with PCB 60% + NEET',
      exam: 'NEET',
      cutoff: 50,
      placements: 100,
      accreditation: 'A++',
      rating: 4.9,
      enrolled: 950,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      color: 'from-green-600 to-green-400'
    },
    {
      id: 3,
      name: 'MBA (Master of Business Administration)',
      category: 'management',
      level: 'Master\'s Degree',
      duration: '2 Years',
      university: 'Indian Institute of Management Ahmedabad',
      universityRank: 1,
      fees: '25,00,000',
      totalSeats: 380,
      avgPackage: '32 LPA',
      highestPackage: '85 LPA',
      description: 'Premier management program focusing on leadership, strategy, finance, marketing, and operations.',
      syllabus: [
        'Financial Management',
        'Marketing Management',
        'Operations Management',
        'Human Resources',
        'Business Strategy',
        'Economics',
        'Business Analytics'
      ],
      eligibility: 'Graduation 50% + CAT',
      exam: 'CAT',
      cutoff: 99.5,
      placements: 100,
      accreditation: 'A++',
      rating: 4.8,
      enrolled: 850,
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
      color: 'from-purple-600 to-purple-400'
    },
    {
      id: 4,
      name: 'Data Science & AI',
      category: 'engineering',
      level: 'Master\'s Degree',
      duration: '2 Years',
      university: 'International Institute of Information Technology Hyderabad',
      universityRank: 15,
      fees: '4,00,000',
      totalSeats: 60,
      avgPackage: '24 LPA',
      highestPackage: '65 LPA',
      description: 'Advanced program in data science, machine learning, and artificial intelligence.',
      syllabus: [
        'Python Programming',
        'Machine Learning',
        'Deep Learning',
        'Big Data Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Reinforcement Learning'
      ],
      eligibility: 'B.Tech/BE with 60% + GATE',
      exam: 'GATE',
      cutoff: 650,
      placements: 96,
      accreditation: 'A',
      rating: 4.7,
      enrolled: 450,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      color: 'from-orange-600 to-orange-400'
    },
    {
      id: 5,
      name: 'Psychology (BA)',
      category: 'arts',
      level: 'Bachelor\'s Degree',
      duration: '3 Years',
      university: 'Delhi University',
      universityRank: 8,
      fees: '45,000',
      totalSeats: 120,
      avgPackage: '6 LPA',
      highestPackage: '15 LPA',
      description: 'Comprehensive study of human behavior, mental processes, and psychological research methods.',
      syllabus: [
        'Cognitive Psychology',
        'Social Psychology',
        'Developmental Psychology',
        'Abnormal Psychology',
        'Research Methods',
        'Counseling Skills'
      ],
      eligibility: '10+2 with 55%',
      exam: 'CUET',
      cutoff: 98,
      placements: 85,
      accreditation: 'A+',
      rating: 4.5,
      enrolled: 620,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
      color: 'from-pink-600 to-pink-400'
    },
    {
      id: 6,
      name: 'Physics (B.Sc)',
      category: 'science',
      level: 'Bachelor\'s Degree',
      duration: '3 Years',
      university: 'St. Stephen\'s College, Delhi',
      universityRank: 1,
      fees: '65,000',
      totalSeats: 60,
      avgPackage: '8 LPA',
      highestPackage: '20 LPA',
      description: 'Foundation course in physics with focus on theoretical and experimental physics.',
      syllabus: [
        'Classical Mechanics',
        'Quantum Mechanics',
        'Electrodynamics',
        'Thermodynamics',
        'Statistical Physics',
        'Mathematical Physics',
        'Electronics'
      ],
      eligibility: '10+2 with PCM 60%',
      exam: 'CUET',
      cutoff: 99,
      placements: 80,
      accreditation: 'A++',
      rating: 4.6,
      enrolled: 380,
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa',
      color: 'from-cyan-600 to-cyan-400'
    },
    {
      id: 7,
      name: 'Pharmaceutical Chemistry (M.Pharm)',
      category: 'medical',
      level: 'Master\'s Degree',
      duration: '2 Years',
      university: 'Jamia Hamdard University',
      universityRank: 2,
      fees: '1,80,000',
      totalSeats: 45,
      avgPackage: '10 LPA',
      highestPackage: '22 LPA',
      description: 'Advanced study of drug design, development, and pharmaceutical analysis.',
      syllabus: [
        'Medicinal Chemistry',
        'Pharmacology',
        'Pharmaceutical Analysis',
        'Drug Delivery Systems',
        'Quality Assurance',
        'Regulatory Affairs'
      ],
      eligibility: 'B.Pharm with 55% + GPAT',
      exam: 'GPAT',
      cutoff: 250,
      placements: 92,
      accreditation: 'A',
      rating: 4.4,
      enrolled: 280,
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831',
      color: 'from-teal-600 to-teal-400'
    },
    {
      id: 8,
      name: 'Economics (MA)',
      category: 'arts',
      level: 'Master\'s Degree',
      duration: '2 Years',
      university: 'Delhi School of Economics',
      universityRank: 1,
      fees: '35,000',
      totalSeats: 90,
      avgPackage: '18 LPA',
      highestPackage: '45 LPA',
      description: 'Advanced economic theory, econometrics, and policy analysis program.',
      syllabus: [
        'Microeconomics',
        'Macroeconomics',
        'Econometrics',
        'Development Economics',
        'International Trade',
        'Public Finance',
        'Game Theory'
      ],
      eligibility: 'BA Economics with 55% + DSE Entrance',
      exam: 'DSE Entrance',
      cutoff: 85,
      placements: 95,
      accreditation: 'A++',
      rating: 4.7,
      enrolled: 420,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
      color: 'from-yellow-600 to-yellow-400'
    },
    {
      id: 9,
      name: 'Biotechnology (B.Tech)',
      category: 'engineering',
      level: 'Bachelor\'s Degree',
      duration: '4 Years',
      university: 'VIT Vellore',
      universityRank: 12,
      fees: '1,98,000',
      totalSeats: 120,
      avgPackage: '9 LPA',
      highestPackage: '25 LPA',
      description: 'Interdisciplinary program combining biology with technology and engineering.',
      syllabus: [
        'Molecular Biology',
        'Genetic Engineering',
        'Biochemistry',
        'Bioprocess Engineering',
        'Immunology',
        'Bioinformatics',
        'Enzyme Technology'
      ],
      eligibility: '10+2 with PCB/PCM 60% + VITEEE',
      exam: 'VITEEE',
      cutoff: 8500,
      placements: 88,
      accreditation: 'A++',
      rating: 4.3,
      enrolled: 550,
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69',
      color: 'from-emerald-600 to-emerald-400'
    }
  ]

  // Filter courses
  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.university.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel
    const matchesDuration = selectedDuration === 'all' || course.duration === selectedDuration
    return matchesCategory && matchesSearch && matchesLevel && matchesDuration
  })

  // Sort courses
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === 'popular') return b.enrolled - a.enrolled
    if (sortBy === 'rating') return b.rating - a.rating
    if (sortBy === 'fees-low') return parseFloat(a.fees.replace(/,/g, '')) - parseFloat(b.fees.replace(/,/g, ''))
    if (sortBy === 'fees-high') return parseFloat(b.fees.replace(/,/g, '')) - parseFloat(a.fees.replace(/,/g, ''))
    if (sortBy === 'package') return parseFloat(b.avgPackage) - parseFloat(a.avgPackage)
    return 0
  })

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Courses</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover 200+ Courses • Compare Syllabus • Check Fees • View Placements
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto relative">
              <div className="flex items-center bg-gray-800/50 backdrop-blur-md rounded-2xl p-1 border border-gray-700">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search courses by name or university..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-6 pr-4 py-4 bg-transparent text-white placeholder-gray-400 outline-none"
                  />
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-10">
        {/* Quick Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Courses', value: '245+' },
            { label: 'Universities', value: '180+' },
            { label: 'Active Students', value: '50k+' },
            { label: 'Avg Package', value: '₹18.5L' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700"
            >
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Category Pills */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Browse by Category</h2>
            <Link href="/all-courses" className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1">
              View All →
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/20'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 border border-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{category.name}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-700">
                    {category.count}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Filters Bar */}
        <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-4 mb-8 border border-gray-700">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-sm font-medium">Filters:</span>
            </div>

            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-sm text-white focus:border-blue-400 outline-none"
            >
              {levels.map(level => (
                <option key={level} value={level === 'All Levels' ? 'all' : level}>{level}</option>
              ))}
            </select>

            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-sm text-white focus:border-blue-400 outline-none"
            >
              {durations.map(duration => (
                <option key={duration} value={duration === 'All Durations' ? 'all' : duration}>{duration}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-sm text-white focus:border-blue-400 outline-none"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Top Rated</option>
              <option value="fees-low">Fees: Low to High</option>
              <option value="fees-high">Fees: High to Low</option>
              <option value="package">Highest Package</option>
            </select>

            <div className="flex-1"></div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  viewMode === 'grid' ? 'bg-gray-900 text-white' : 'text-gray-400'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  viewMode === 'list' ? 'bg-gray-900 text-white' : 'text-gray-400'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-400">
            Showing <span className="font-bold text-white">{sortedCourses.length}</span> courses
          </p>
        </div>

        {/* Courses Grid/List */}
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
          : 'space-y-4'
        }>
          {sortedCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              {/* Course Card */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                
                {/* Card Header with Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-20`}></div>
                  <img 
                    src={course.image} 
                    alt={course.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-gray-600">
                      {course.level}
                    </span>
                    <span className="px-3 py-1 bg-yellow-500/80 text-white rounded-full text-xs font-medium">
                      ★ {course.rating}
                    </span>
                  </div>

                  {/* Course Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{course.name}</h3>
                    <p className="text-sm text-gray-300">{course.university}</p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Quick Info Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gray-700/50 rounded-xl p-3">
                      <div className="text-xs text-gray-400">Duration</div>
                      <div className="font-bold text-white">{course.duration}</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-3">
                      <div className="text-xs text-gray-400">Fees/Year</div>
                      <div className="font-bold text-white">₹{course.fees}</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-3">
                      <div className="text-xs text-gray-400">Avg Package</div>
                      <div className="font-bold text-green-400">{course.avgPackage}</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-3">
                      <div className="text-xs text-gray-400">Seats</div>
                      <div className="font-bold text-white">{course.totalSeats}</div>
                    </div>
                  </div>

                  {/* Syllabus Preview */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Topics:</div>
                    <div className="flex flex-wrap gap-2">
                      {course.syllabus.slice(0, 3).map((topic, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs">
                          {topic}
                        </span>
                      ))}
                      {course.syllabus.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs">
                          +{course.syllabus.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Eligibility & Exam */}
                  <div className="space-y-2 mb-4">
                    <div className="text-sm">
                      <span className="text-gray-400">Exam: </span>
                      <span className="text-white font-medium">{course.exam}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-400">Cutoff: </span>
                      <span className="text-white font-medium">{course.cutoff}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                      View Details
                    </button>
                    <button className="px-4 py-3 bg-gray-700 text-gray-300 rounded-xl hover:bg-gray-600 transition-all">
                      Compare
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {sortedCourses.length > 0 && (
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-800 text-white rounded-xl font-semibold border border-gray-700 hover:bg-gray-700 transition-all"
            >
              Load More Courses
            </motion.button>
          </div>
        )}
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}