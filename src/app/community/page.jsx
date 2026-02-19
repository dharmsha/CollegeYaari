// community/page.js
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [activeTab, setActiveTab] = useState('groups')

  // Categories
  const categories = [
    { id: 'all', name: 'All Communities', count: 245 },
    { id: 'tech', name: 'Tech', count: 85 },
    { id: 'coding', name: 'Coding', count: 52 },
    { id: 'design', name: 'Design', count: 38 },
    { id: 'startup', name: 'Startup', count: 42 },
    { id: 'career', name: 'Career', count: 28 }
  ]

  // Community Types
  const types = [
    'All Types',
    'WhatsApp Group',
    'Telegram Channel',
    'Discord Server',
    'Slack Community',
    'Forum'
  ]

  // Community Groups Data
  const groups = [
    {
      id: 1,
      name: 'Indian Developers Hub',
      category: 'tech',
      type: 'Discord Server',
      members: 15420,
      description: 'Largest community of Indian developers. Daily coding discussions, job postings, and tech talks.',
      topics: ['Web Development', 'Mobile Apps', 'AI/ML', 'Cloud Computing'],
      platform: 'Discord',
      link: '#',
      language: 'English/Hindi',
      active: 'Very High',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
      color: 'from-blue-600 to-blue-400',
      featured: true
    },
    {
      id: 2,
      name: 'Coding Ninjas Community',
      category: 'coding',
      type: 'WhatsApp Group',
      members: 28450,
      description: 'Daily DSA problems, coding contests, and placement preparation. Active discussions on LeetCode.',
      topics: ['DSA', 'Competitive Programming', 'Interview Prep', 'System Design'],
      platform: 'WhatsApp',
      link: '#',
      language: 'English',
      active: 'Very High',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
      color: 'from-green-600 to-green-400',
      featured: true
    },
    {
      id: 3,
      name: 'Startup India Network',
      category: 'startup',
      type: 'Telegram Channel',
      members: 35890,
      description: 'Connect with founders, investors, and mentors. Funding opportunities and startup resources.',
      topics: ['Funding', 'Mentorship', 'Pitch Deck', 'Growth Hacks'],
      platform: 'Telegram',
      link: '#',
      language: 'English/Hindi',
      active: 'High',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd',
      color: 'from-purple-600 to-purple-400'
    },
    {
      id: 4,
      name: 'UI/UX Designers India',
      category: 'design',
      type: 'Slack Community',
      members: 12580,
      description: 'Design community sharing resources, portfolio reviews, and job opportunities.',
      topics: ['UI Design', 'UX Research', 'Figma', 'Portfolio'],
      platform: 'Slack',
      link: '#',
      language: 'English',
      active: 'High',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
      color: 'from-pink-600 to-pink-400'
    },
    {
      id: 5,
      name: 'Placement Preparation Hub',
      category: 'career',
      type: 'WhatsApp Group',
      members: 32150,
      description: 'Daily quizzes, interview experiences, and placement updates from top companies.',
      topics: ['Aptitude', 'HR Interviews', 'Company Updates', 'Mock Interviews'],
      platform: 'WhatsApp',
      link: '#',
      language: 'English/Hindi',
      active: 'Very High',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
      color: 'from-yellow-600 to-yellow-400',
      featured: true
    },
    {
      id: 6,
      name: 'AI/ML Enthusiasts',
      category: 'tech',
      type: 'Discord Server',
      members: 18760,
      description: 'Deep dive into AI/ML with research papers, projects, and expert sessions.',
      topics: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
      platform: 'Discord',
      link: '#',
      language: 'English',
      active: 'High',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
      color: 'from-indigo-600 to-indigo-400'
    },
    {
      id: 7,
      name: 'Women in Tech India',
      category: 'tech',
      type: 'Telegram Channel',
      members: 23450,
      description: 'Supporting women in technology through mentorship, networking, and opportunities.',
      topics: ['Mentorship', 'Tech Talks', 'Career Growth', 'Scholarships'],
      platform: 'Telegram',
      link: '#',
      language: 'English',
      active: 'High',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
      color: 'from-red-600 to-red-400',
      featured: true
    },
    {
      id: 8,
      name: 'Open Source Contributors',
      category: 'coding',
      type: 'Discord Server',
      members: 15680,
      description: 'Collaborate on open source projects, find issues to work on, and get mentored.',
      topics: ['Git', 'GitHub', 'Open Source', 'Hacktoberfest'],
      platform: 'Discord',
      link: '#',
      language: 'English',
      active: 'High',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
      color: 'from-orange-600 to-orange-400'
    },
    {
      id: 9,
      name: 'Data Science Community',
      category: 'tech',
      type: 'Slack Community',
      members: 21450,
      description: 'Data science discussions, Kaggle competitions, and career guidance.',
      topics: ['Python', 'SQL', 'Statistics', 'Visualization'],
      platform: 'Slack',
      link: '#',
      language: 'English',
      active: 'High',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      color: 'from-cyan-600 to-cyan-400'
    },
    {
      id: 10,
      name: 'Freelancers Union India',
      category: 'career',
      type: 'WhatsApp Group',
      members: 18420,
      description: 'Connect with freelancers, find projects, and discuss freelance rates.',
      topics: ['Freelancing', 'Client Management', 'Rates', 'Projects'],
      platform: 'WhatsApp',
      link: '#',
      language: 'English/Hindi',
      active: 'High',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      color: 'from-teal-600 to-teal-400'
    }
  ]

  // Discussions Data
  const discussions = [
    {
      id: 1,
      title: 'How to prepare for Google Interview?',
      author: 'Rahul Sharma',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
      replies: 45,
      views: 1230,
      lastActive: '5 min ago',
      category: 'career',
      tags: ['Interview', 'Google', 'Placement'],
      pinned: true
    },
    {
      id: 2,
      title: 'Looking for study partners for GATE 2026',
      author: 'Priya Singh',
      avatar: 'https://images.unsplash.com/photo-1494790108777-385ef443b2b7',
      replies: 28,
      views: 890,
      lastActive: '1 hour ago',
      category: 'coding',
      tags: ['GATE', 'Study Group'],
      pinned: false
    },
    {
      id: 3,
      title: 'Need help with React useEffect hook',
      author: 'Amit Kumar',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
      replies: 15,
      views: 450,
      lastActive: '3 hours ago',
      category: 'tech',
      tags: ['React', 'JavaScript', 'Help'],
      pinned: false
    },
    {
      id: 4,
      title: 'Share your internship experiences',
      author: 'Neha Gupta',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      replies: 67,
      views: 2100,
      lastActive: '30 min ago',
      category: 'career',
      tags: ['Internship', 'Experience'],
      pinned: true
    },
    {
      id: 5,
      title: 'Best resources for learning System Design',
      author: 'Vikram Reddy',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      replies: 32,
      views: 1560,
      lastActive: '2 hours ago',
      category: 'tech',
      tags: ['System Design', 'Resources'],
      pinned: false
    }
  ]

  // Mentors Data
  const mentors = [
    {
      id: 1,
      name: 'Dr. Anjali Mehta',
      title: 'Senior Software Engineer @ Google',
      expertise: ['System Design', 'DSA', 'Career Guidance'],
      experience: '12 years',
      sessions: 345,
      rating: 4.9,
      price: 'Free',
      available: 'Today',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      color: 'from-blue-600 to-blue-400'
    },
    {
      id: 2,
      name: 'Rajesh Khanna',
      title: 'Product Manager @ Microsoft',
      expertise: ['Product Management', 'Strategy', 'Leadership'],
      experience: '10 years',
      sessions: 289,
      rating: 4.8,
      price: 'Free',
      available: 'Tomorrow',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      color: 'from-purple-600 to-purple-400'
    },
    {
      id: 3,
      name: 'Priyanka Desai',
      title: 'UX Design Lead @ Adobe',
      expertise: ['UI/UX', 'Design Thinking', 'Portfolio Review'],
      experience: '8 years',
      sessions: 412,
      rating: 4.9,
      price: 'Free',
      available: 'Today',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      color: 'from-pink-600 to-pink-400'
    },
    {
      id: 4,
      name: 'Suresh Iyer',
      title: 'Data Scientist @ Amazon',
      expertise: ['Machine Learning', 'Python', 'Interview Prep'],
      experience: '9 years',
      sessions: 256,
      rating: 4.7,
      price: 'Free',
      available: 'Weekend',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      color: 'from-green-600 to-green-400'
    }
  ]

  const filteredGroups = groups.filter(group => {
    const matchesCategory = selectedCategory === 'all' || group.category === selectedCategory
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'all' || group.type === selectedType
    return matchesCategory && matchesSearch && matchesType
  })

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Community</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Connect • Learn • Grow • Mentor • Collaborate
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto relative">
              <div className="flex items-center bg-gray-800/50 backdrop-blur-md rounded-2xl p-1 border border-gray-700">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search communities, discussions, or mentors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-6 pr-4 py-4 bg-transparent text-white placeholder-gray-400 outline-none"
                  />
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-10">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Community Members', value: '2.5L+' },
            { label: 'Active Groups', value: '245+' },
            { label: 'Daily Discussions', value: '1.2k+' },
            { label: 'Expert Mentors', value: '180+' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700 text-center"
            >
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-800">
          {['groups', 'discussions', 'mentors'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium capitalize transition-all relative ${
                activeTab === tab ? 'text-blue-400' : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400" />
              )}
            </button>
          ))}
        </div>

        {activeTab === 'groups' && (
          <>
            {/* Category Pills */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20'
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
                <span className="text-sm font-medium text-gray-400">Filter by Platform:</span>
                
                <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-sm text-white outline-none">
                  {types.map(type => (
                    <option key={type} value={type === 'All Types' ? 'all' : type}>{type}</option>
                  ))}
                </select>

                <div className="flex-1"></div>
                
                <span className="text-sm text-gray-400">
                  {filteredGroups.length} communities found
                </span>
              </div>
            </div>

            {/* Groups Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGroups.map((group, index) => (
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                    
                    {/* Featured Badge */}
                    {group.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 bg-yellow-500 text-black rounded-full text-xs font-bold">FEATURED</span>
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${group.color} opacity-30`}></div>
                      <img src={group.image} alt={group.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                      
                      {/* Platform Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-gray-600">
                          {group.platform}
                        </span>
                      </div>

                      {/* Title */}
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-xl font-bold text-white">{group.name}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Members & Activity */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-green-400 font-medium">{group.members.toLocaleString()} members</span>
                        <span className="text-gray-400 text-sm">🔥 {group.active}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm mb-4">{group.description}</p>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {group.topics.map((topic, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs">
                            {topic}
                          </span>
                        ))}
                      </div>

                      {/* Language */}
                      <div className="text-sm text-gray-400 mb-4">
                        Language: {group.language}
                      </div>

                      {/* Join Button */}
                      <a href={group.link} target="_blank" rel="noopener noreferrer"
                        className="block w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-center hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                        Join Community
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'discussions' && (
          <div className="space-y-4">
            {/* New Discussion Button */}
            <div className="flex justify-end mb-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium">
                + Start New Discussion
              </button>
            </div>

            {/* Discussions List */}
            {discussions.map((discussion) => (
              <motion.div
                key={discussion.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <img src={discussion.avatar} alt={discussion.author} className="w-12 h-12 rounded-full" />
                  
                  <div className="flex-1">
                    {/* Title & Pinned Badge */}
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-white">{discussion.title}</h3>
                      {discussion.pinned && (
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-lg text-xs">📌 PINNED</span>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span>by {discussion.author}</span>
                      <span>•</span>
                      <span>{discussion.replies} replies</span>
                      <span>•</span>
                      <span>{discussion.views} views</span>
                      <span>•</span>
                      <span className="text-green-400">{discussion.lastActive}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-2">
                      {discussion.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Reply Button */}
                  <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all">
                    Reply
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="px-6 py-3 bg-gray-800 text-white rounded-xl border border-gray-700 hover:bg-gray-700">
                Load More Discussions
              </button>
            </div>
          </div>
        )}

        {activeTab === 'mentors' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all"
              >
                <div className="flex gap-4">
                  {/* Avatar */}
                  <img src={mentor.image} alt={mentor.name} className="w-24 h-24 rounded-xl object-cover" />
                  
                  <div className="flex-1">
                    {/* Name & Title */}
                    <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                    <p className="text-purple-400 mb-2">{mentor.title}</p>
                    
                    {/* Rating & Sessions */}
                    <div className="flex items-center gap-3 text-sm mb-3">
                      <span className="text-yellow-400">★ {mentor.rating}</span>
                      <span className="text-gray-400">{mentor.sessions} sessions</span>
                      <span className="text-gray-400">{mentor.experience}</span>
                    </div>

                    {/* Expertise */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {mentor.expertise.map((exp, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs">
                          {exp}
                        </span>
                      ))}
                    </div>

                    {/* Availability */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm">
                        <span className="text-gray-400">Available: </span>
                        <span className="text-green-400">{mentor.available}</span>
                      </span>
                      <span className="text-xl font-bold text-white">{mentor.price}</span>
                    </div>

                    {/* Book Button */}
                    <button className="w-full mt-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                      Book Session
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
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