'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function InternshipsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedDuration, setSelectedDuration] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [sortBy, setSortBy] = useState('recent')
  const [viewMode, setViewMode] = useState('grid')
  const [selectedInternship, setSelectedInternship] = useState(null)

  // Categories
  const categories = [
    { id: 'all', name: 'All Internships', count: 342 },
    { id: 'tech', name: 'Technology', count: 145 },
    { id: 'marketing', name: 'Marketing', count: 67 },
    { id: 'design', name: 'Design', count: 45 },
    { id: 'finance', name: 'Finance', count: 38 },
    { id: 'content', name: 'Content Writing', count: 32 },
    { id: 'data', name: 'Data Science', count: 15 }
  ]

  // Internship Types
  const types = [
    'All Types',
    'Work From Home',
    'Part Time',
    'Full Time',
    'Internship + Job'
  ]

  // Durations
  const durations = [
    'All Durations',
    '1 Month',
    '2 Months',
    '3 Months',
    '6 Months',
    '1 Year'
  ]

  // Locations
  const locations = [
    'All Locations',
    'Remote',
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Pune',
    'Chennai'
  ]

  // Internships Database
  const internships = [
    {
      id: 1,
      title: 'Software Development Intern',
      company: 'Google India',
      category: 'tech',
      type: 'Full Time',
      duration: '6 Months',
      location: 'Bangalore',
      stipend: '50000',
      stipendPeriod: 'month',
      applyBy: '15 Mar 2024',
      startDate: '1 Apr 2024',
      openings: 25,
      applicants: 1250,
      description: 'Work on real-world projects with Google engineers. Build and deploy scalable applications.',
      requirements: [
        'Currently pursuing B.Tech/M.Tech in CS/IT',
        'Strong DSA and problem-solving skills',
        'Knowledge of Java/Python/C++',
        'Experience with web technologies',
        'Good communication skills'
      ],
      perks: [
        'Certificate',
        'Letter of Recommendation',
        'Flexible hours',
        '5 days working',
        'Free food',
        'Transportation'
      ],
      skills: ['Java', 'Python', 'Data Structures', 'Algorithms', 'Web Development'],
      postedDate: '2 days ago',
      companyLogo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd',
      rating: 4.9,
      experience: 'Fresher',
      color: 'from-blue-600 to-blue-400'
    },
    {
      id: 2,
      title: 'Digital Marketing Intern',
      company: 'Amazon India',
      category: 'marketing',
      type: 'Full Time',
      duration: '3 Months',
      location: 'Mumbai',
      stipend: '35000',
      stipendPeriod: 'month',
      applyBy: '20 Mar 2024',
      startDate: '5 Apr 2024',
      openings: 15,
      applicants: 890,
      description: 'Join Amazon marketing team to work on brand campaigns, social media, and digital strategy.',
      requirements: [
        'MBA/PGDM in Marketing',
        'Understanding of digital channels',
        'Analytical mindset',
        'Creativity and content skills',
        'Team player'
      ],
      perks: [
        'Certificate',
        'Performance bonus',
        'Flexible hours',
        'Networking opportunities'
      ],
      skills: ['SEO', 'Social Media', 'Content Marketing', 'Analytics', 'Campaign Management'],
      postedDate: '3 days ago',
      companyLogo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2',
      rating: 4.8,
      experience: 'Fresher',
      color: 'from-orange-600 to-orange-400'
    },
    {
      id: 3,
      title: 'UI/UX Design Intern',
      company: 'Microsoft',
      category: 'design',
      type: 'Full Time',
      duration: '6 Months',
      location: 'Hyderabad',
      stipend: '45000',
      stipendPeriod: 'month',
      applyBy: '25 Mar 2024',
      startDate: '10 Apr 2024',
      openings: 10,
      applicants: 675,
      description: 'Design next-gen user experiences for Microsoft products. Work with global design team.',
      requirements: [
        'Portfolio showcasing design work',
        'Proficiency in Figma, Adobe XD',
        'Understanding of user-centered design',
        'Visual design skills',
        'Knowledge of design systems'
      ],
      perks: [
        'Certificate',
        'Mentorship',
        'Design tools license',
        'Flexible hours',
        'Health insurance'
      ],
      skills: ['Figma', 'UI Design', 'UX Research', 'Prototyping', 'Adobe Creative Suite'],
      postedDate: '1 day ago',
      companyLogo: 'https://images.unsplash.com/photo-1642132652075-2b0bf1f19c4c',
      rating: 4.9,
      experience: 'Fresher',
      color: 'from-purple-600 to-purple-400'
    },
    {
      id: 4,
      title: 'Financial Analyst Intern',
      company: 'Goldman Sachs',
      category: 'finance',
      type: 'Full Time',
      duration: '3 Months',
      location: 'Bangalore',
      stipend: '60000',
      stipendPeriod: 'month',
      applyBy: '18 Mar 2024',
      startDate: '8 Apr 2024',
      openings: 12,
      applicants: 1100,
      description: 'Work with investment banking team on financial modeling, analysis, and client presentations.',
      requirements: [
        'B.Com/M.Com/MBA Finance',
        'Strong analytical skills',
        'Excel and financial modeling',
        'Attention to detail',
        'Interest in financial markets'
      ],
      perks: [
        'Certificate',
        'PPO opportunity',
        'Global exposure',
        'Professional development'
      ],
      skills: ['Financial Modeling', 'Excel', 'Valuation', 'Research', 'Data Analysis'],
      postedDate: '4 days ago',
      companyLogo: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
      rating: 4.7,
      experience: 'Fresher',
      color: 'from-green-600 to-green-400'
    },
    {
      id: 5,
      title: 'Content Writing Intern',
      company: 'Times Internet',
      category: 'content',
      type: 'Work From Home',
      duration: '2 Months',
      location: 'Remote',
      stipend: '15000',
      stipendPeriod: 'month',
      applyBy: '22 Mar 2024',
      startDate: '1 Apr 2024',
      openings: 30,
      applicants: 1500,
      description: 'Create engaging content for digital platforms. Write articles, blogs, and social media posts.',
      requirements: [
        'Excellent English writing skills',
        'Knowledge of SEO',
        'Creative thinking',
        'Research skills',
        'Blogging experience'
      ],
      perks: [
        'Certificate',
        'Flexible timing',
        'Work from home',
        'Byline articles'
      ],
      skills: ['Content Writing', 'SEO', 'Blogging', 'Editing', 'Research'],
      postedDate: '5 hours ago',
      companyLogo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
      rating: 4.5,
      experience: 'Fresher',
      color: 'from-pink-600 to-pink-400'
    },
    {
      id: 6,
      title: 'Data Science Intern',
      company: 'Flipkart',
      category: 'data',
      type: 'Full Time',
      duration: '6 Months',
      location: 'Bangalore',
      stipend: '55000',
      stipendPeriod: 'month',
      applyBy: '28 Mar 2024',
      startDate: '15 Apr 2024',
      openings: 8,
      applicants: 780,
      description: 'Work on machine learning models for e-commerce recommendations and predictions.',
      requirements: [
        'B.Tech/M.Tech in CS/Mathematics',
        'Python and ML libraries',
        'Statistics knowledge',
        'SQL skills',
        'Problem-solving ability'
      ],
      perks: [
        'Certificate',
        'PPO opportunity',
        'Research papers',
        'Mentorship'
      ],
      skills: ['Python', 'Machine Learning', 'SQL', 'Statistics', 'Data Visualization'],
      postedDate: '2 days ago',
      companyLogo: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5',
      rating: 4.8,
      experience: 'Fresher',
      color: 'from-cyan-600 to-cyan-400'
    },
    {
      id: 7,
      title: 'HR Intern',
      company: 'Tata Consultancy Services',
      category: 'management',
      type: 'Part Time',
      duration: '3 Months',
      location: 'Pune',
      stipend: '20000',
      stipendPeriod: 'month',
      applyBy: '25 Mar 2024',
      startDate: '5 Apr 2024',
      openings: 20,
      applicants: 450,
      description: 'Assist in recruitment, employee engagement, and HR operations.',
      requirements: [
        'MBA/PGDM in HR',
        'Good communication',
        'Organizational skills',
        'MS Office proficiency',
        'Team player'
      ],
      perks: [
        'Certificate',
        'Flexible hours',
        'Learning opportunities'
      ],
      skills: ['Recruitment', 'Employee Relations', 'HR Policies', 'Communication'],
      postedDate: '1 week ago',
      companyLogo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
      rating: 4.4,
      experience: 'Fresher',
      color: 'from-yellow-600 to-yellow-400'
    },
    {
      id: 8,
      title: 'Product Management Intern',
      company: 'Paytm',
      category: 'management',
      type: 'Full Time',
      duration: '6 Months',
      location: 'Noida',
      stipend: '40000',
      stipendPeriod: 'month',
      applyBy: '20 Mar 2024',
      startDate: '10 Apr 2024',
      openings: 6,
      applicants: 890,
      description: 'Learn product management from scratch. Work on real fintech products.',
      requirements: [
        'Any graduate/postgraduate',
        'Analytical thinking',
        'User empathy',
        'Data-driven approach',
        'Problem-solving skills'
      ],
      perks: [
        'Certificate',
        'Mentorship',
        'Fast-paced learning',
        'Networking'
      ],
      skills: ['Product Strategy', 'Market Research', 'Analytics', 'Wireframing', 'Agile'],
      postedDate: '3 days ago',
      companyLogo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
      rating: 4.6,
      experience: 'Fresher',
      color: 'from-blue-600 to-indigo-400'
    },
    {
      id: 9,
      title: 'Mobile App Development Intern',
      company: 'Uber',
      category: 'tech',
      type: 'Full Time',
      duration: '6 Months',
      location: 'Bangalore',
      stipend: '65000',
      stipendPeriod: 'month',
      applyBy: '15 Mar 2024',
      startDate: '1 Apr 2024',
      openings: 8,
      applicants: 2100,
      description: 'Build and optimize mobile apps for millions of users. Work on iOS/Android platforms.',
      requirements: [
        'Knowledge of Kotlin/Swift',
        'Understanding of mobile architecture',
        'Problem-solving skills',
        'Version control (Git)',
        'Good academic record'
      ],
      perks: [
        'Certificate',
        'PPO opportunity',
        'Competitive stipend',
        'Food & cab',
        'Health insurance'
      ],
      skills: ['Android', 'iOS', 'Kotlin', 'Swift', 'Mobile UI'],
      postedDate: '1 day ago',
      companyLogo: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498',
      rating: 4.9,
      experience: 'Fresher',
      color: 'from-black to-gray-600'
    },
    {
      id: 10,
      title: 'Graphic Design Intern',
      company: 'Zomato',
      category: 'design',
      type: 'Work From Home',
      duration: '2 Months',
      location: 'Remote',
      stipend: '18000',
      stipendPeriod: 'month',
      applyBy: '25 Mar 2024',
      startDate: '5 Apr 2024',
      openings: 15,
      applicants: 670,
      description: 'Create visual content for social media, marketing campaigns, and brand identity.',
      requirements: [
        'Portfolio of design work',
        'Proficiency in Adobe Suite',
        'Creativity and attention to detail',
        'Understanding of branding',
        'Typography skills'
      ],
      perks: [
        'Certificate',
        'Flexible hours',
        'Work from home',
        'Creative freedom'
      ],
      skills: ['Adobe Photoshop', 'Illustrator', 'Canva', 'Typography', 'Branding'],
      postedDate: '2 days ago',
      companyLogo: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1',
      rating: 4.7,
      experience: 'Fresher',
      color: 'from-red-600 to-red-400'
    }
  ]

  // Filter internships
  const filteredInternships = internships.filter(internship => {
    const matchesCategory = selectedCategory === 'all' || internship.category === selectedCategory
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'all' || internship.type === selectedType
    const matchesDuration = selectedDuration === 'all' || internship.duration === selectedDuration
    const matchesLocation = selectedLocation === 'all' || internship.location === selectedLocation
    return matchesCategory && matchesSearch && matchesType && matchesDuration && matchesLocation
  })

  // Sort internships
  const sortedInternships = [...filteredInternships].sort((a, b) => {
    if (sortBy === 'recent') return new Date(b.postedDate) - new Date(a.postedDate)
    if (sortBy === 'stipend-high') return parseInt(b.stipend) - parseInt(a.stipend)
    if (sortBy === 'stipend-low') return parseInt(a.stipend) - parseInt(b.stipend)
    if (sortBy === 'popular') return b.applicants - a.applicants
    if (sortBy === 'rating') return b.rating - a.rating
    return 0
  })

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-green-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 -right-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Dream Internship</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              300+ Internships • Top Companies • Paid Opportunities • Work From Home Available
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto relative">
              <div className="flex items-center bg-gray-800/50 backdrop-blur-md rounded-2xl p-1 border border-gray-700">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search internships by title, company or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-6 pr-4 py-4 bg-transparent text-white placeholder-gray-400 outline-none"
                  />
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/20 transition-all">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-10">
        {/* Quick Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {[
            { label: 'Active Internships', value: '342' },
            { label: 'Companies', value: '180+' },
            { label: 'Students Placed', value: '5.2k' },
            { label: 'Remote Jobs', value: '120' },
            { label: 'Avg Stipend', value: '₹25k' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700 text-center"
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
            <Link href="/all-internships" className="text-green-400 hover:text-green-300 text-sm font-medium flex items-center gap-1">
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
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg shadow-green-500/20'
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
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-sm text-white focus:border-green-400 outline-none"
            >
              {types.map(type => (
                <option key={type} value={type === 'All Types' ? 'all' : type}>{type}</option>
              ))}
            </select>

            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-sm text-white focus:border-green-400 outline-none"
            >
              {durations.map(duration => (
                <option key={duration} value={duration === 'All Durations' ? 'all' : duration}>{duration}</option>
              ))}
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-sm text-white focus:border-green-400 outline-none"
            >
              {locations.map(location => (
                <option key={location} value={location === 'All Locations' ? 'all' : location}>{location}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-sm text-white focus:border-green-400 outline-none"
            >
              <option value="recent">Most Recent</option>
              <option value="stipend-high">Stipend: High to Low</option>
              <option value="stipend-low">Stipend: Low to High</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Top Rated</option>
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
            Showing <span className="font-bold text-white">{sortedInternships.length}</span> internships
          </p>
        </div>

        {/* Internships Grid/List */}
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
          : 'space-y-4'
        }>
          {sortedInternships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              {/* Internship Card */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                
                {/* Card Header */}
                <div className="relative h-40 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${internship.color} opacity-30`}></div>
                  <img 
                    src={internship.companyLogo} 
                    alt={internship.company}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-green-600/80 text-white rounded-full text-xs font-medium">
                      {internship.type}
                    </span>
                    <span className="px-3 py-1 bg-yellow-500/80 text-white rounded-full text-xs font-medium">
                      ★ {internship.rating}
                    </span>
                  </div>

                  {/* Company Name */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{internship.title}</h3>
                    <p className="text-sm text-gray-300">{internship.company}</p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Quick Info Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gray-700/50 rounded-xl p-3">
                      <div className="text-xs text-gray-400">Location</div>
                      <div className="font-bold text-white">{internship.location}</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-3">
                      <div className="text-xs text-gray-400">Duration</div>
                      <div className="font-bold text-white">{internship.duration}</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-3">
                      <div className="text-xs text-gray-400">Stipend</div>
                      <div className="font-bold text-green-400">₹{internship.stipend}/{internship.stipendPeriod}</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-xl p-3">
                      <div className="text-xs text-gray-400">Openings</div>
                      <div className="font-bold text-white">{internship.openings}</div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Skills Required:</div>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.slice(0, 3).map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs">
                          {skill}
                        </span>
                      ))}
                      {internship.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs">
                          +{internship.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Deadline & Applicants */}
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-gray-400">Apply by: <span className="text-white font-medium">{internship.applyBy}</span></span>
                    <span className="text-gray-400">{internship.applicants} applicants</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setSelectedInternship(internship)}
                      className="flex-1 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all"
                    >
                      View Details
                    </button>
                    <button className="px-4 py-3 bg-gray-700 text-gray-300 rounded-xl hover:bg-gray-600 transition-all">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {sortedInternships.length > 0 && (
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-800 text-white rounded-xl font-semibold border border-gray-700 hover:bg-gray-700 transition-all"
            >
              Load More Internships
            </motion.button>
          </div>
        )}
      </div>

      {/* Internship Detail Modal */}
      {selectedInternship && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelectedInternship(null)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-gray-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-48 overflow-hidden rounded-t-3xl">
              <div className={`absolute inset-0 bg-gradient-to-r ${selectedInternship.color} opacity-30`}></div>
              <img 
                src={selectedInternship.companyLogo} 
                alt={selectedInternship.company}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>
              
              <button
                onClick={() => setSelectedInternship(null)}
                className="absolute top-4 right-4 p-2 bg-gray-800/80 rounded-xl text-white hover:bg-gray-700 transition-all"
              >
                ✕
              </button>

              <div className="absolute bottom-4 left-6">
                <h2 className="text-2xl font-bold text-white">{selectedInternship.title}</h2>
                <p className="text-gray-300">{selectedInternship.company} • {selectedInternship.location}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Quick Info */}
              <div className="grid grid-cols-4 gap-3">
                <div className="bg-gray-700/50 rounded-xl p-3 text-center">
                  <div className="text-xs text-gray-400">Stipend</div>
                  <div className="font-bold text-green-400">₹{selectedInternship.stipend}/{selectedInternship.stipendPeriod}</div>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-3 text-center">
                  <div className="text-xs text-gray-400">Duration</div>
                  <div className="font-bold text-white">{selectedInternship.duration}</div>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-3 text-center">
                  <div className="text-xs text-gray-400">Start Date</div>
                  <div className="font-bold text-white">{selectedInternship.startDate}</div>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-3 text-center">
                  <div className="text-xs text-gray-400">Apply By</div>
                  <div className="font-bold text-yellow-400">{selectedInternship.applyBy}</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">About Internship</h3>
                <p className="text-gray-300">{selectedInternship.description}</p>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Requirements</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {selectedInternship.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Skills Required</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedInternship.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-green-600/20 text-green-400 rounded-lg text-sm border border-green-600/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Perks */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Perks</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedInternship.perks.map((perk, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-sm">
                      {perk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Apply Button */}
              <button className="w-full py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/20 transition-all">
                Apply Now
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}