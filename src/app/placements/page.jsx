// placement/page.js
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PlacementPage() {
  const [selectedCompany, setSelectedCompany] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedYear, setSelectedYear] = useState('2025')
  const [selectedRole, setSelectedRole] = useState('all')
  const [selectedBranch, setSelectedBranch] = useState('all')
  const [activeTab, setActiveTab] = useState('statistics')

  // Companies
  const companies = [
    { id: 'all', name: 'All Companies' },
    { id: 'google', name: 'Google' },
    { id: 'microsoft', name: 'Microsoft' },
    { id: 'amazon', name: 'Amazon' },
    { id: 'meta', name: 'Meta' },
    { id: 'goldman', name: 'Goldman Sachs' }
  ]

  // Roles
  const roles = [
    'All Roles',
    'Software Engineer',
    'Product Manager',
    'Data Scientist',
    'Consultant',
    'Analyst',
    'ML Engineer'
  ]

  // Branches
  const branches = [
    'All Branches',
    'Computer Science',
    'Information Technology',
    'Electronics',
    'Mechanical',
    'Civil',
    'Electrical'
  ]

  // Placement Statistics Data
  const statistics = {
    overall: {
      totalStudents: 1250,
      placedStudents: 1180,
      placementPercentage: 94.4,
      averagePackage: '24.5 LPA',
      medianPackage: '22 LPA',
      highestPackage: '1.2 CPA',
      topRecruiters: 185,
      totalOffers: 2100
    },
    branchWise: [
      { branch: 'Computer Science', total: 320, placed: 315, percentage: 98.4, avgPackage: '32 LPA' },
      { branch: 'Information Technology', total: 280, placed: 270, percentage: 96.4, avgPackage: '28 LPA' },
      { branch: 'Electronics', total: 250, placed: 235, percentage: 94.0, avgPackage: '22 LPA' },
      { branch: 'Mechanical', total: 200, placed: 182, percentage: 91.0, avgPackage: '18 LPA' },
      { branch: 'Civil', total: 120, placed: 108, percentage: 90.0, avgPackage: '16 LPA' },
      { branch: 'Electrical', total: 80, placed: 70, percentage: 87.5, avgPackage: '20 LPA' }
    ],
    yearWise: [
      { year: '2025', percentage: 94.4, averagePackage: '24.5 LPA', highestPackage: '1.2 CPA' },
      { year: '2024', percentage: 93.2, averagePackage: '22.8 LPA', highestPackage: '1.1 CPA' },
      { year: '2023', percentage: 92.8, averagePackage: '21.2 LPA', highestPackage: '95 LPA' },
      { year: '2022', percentage: 91.5, averagePackage: '19.5 LPA', highestPackage: '82 LPA' },
      { year: '2021', percentage: 90.2, averagePackage: '18.2 LPA', highestPackage: '75 LPA' }
    ]
  }

  // Company-wise Placements
  const companyPlacements = [
    {
      id: 1,
      company: 'Google',
      logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd',
      roles: ['SDE', 'Product Manager', 'ML Engineer'],
      offers: 45,
      package: '45-50 LPA',
      location: 'Bangalore/Hyderabad',
      branches: ['CSE', 'IT', 'ECE'],
      requirements: ['CGPA 8.5+', 'DSA', 'System Design'],
      interviewDate: '15 Nov 2025',
      deadline: '10 Nov 2025'
    },
    {
      id: 2,
      company: 'Microsoft',
      logo: 'https://images.unsplash.com/photo-1642132652075-2b0bf1f19c4c',
      roles: ['SDE', 'PM', 'Consultant'],
      offers: 52,
      package: '40-45 LPA',
      location: 'Hyderabad/Noida',
      branches: ['CSE', 'IT', 'ECE', 'MECH'],
      requirements: ['CGPA 8.0+', 'Coding', 'Problem Solving'],
      interviewDate: '20 Nov 2025',
      deadline: '15 Nov 2025'
    },
    {
      id: 3,
      company: 'Amazon',
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2',
      roles: ['SDE', 'Data Engineer', 'PM'],
      offers: 78,
      package: '35-40 LPA',
      location: 'Bangalore/Hyderabad/Chennai',
      branches: ['CSE', 'IT', 'ECE', 'EEE'],
      requirements: ['CGPA 7.5+', 'DSA', 'Leadership'],
      interviewDate: '5 Dec 2025',
      deadline: '30 Nov 2025'
    },
    {
      id: 4,
      company: 'Goldman Sachs',
      logo: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
      roles: ['Analyst', 'Strategist', 'Developer'],
      offers: 35,
      package: '30-38 LPA',
      location: 'Bangalore',
      branches: ['CSE', 'IT', 'Finance', 'MBA'],
      requirements: ['CGPA 8.0+', 'Analytical', 'Finance'],
      interviewDate: '12 Dec 2025',
      deadline: '8 Dec 2025'
    },
    {
      id: 5,
      company: 'Meta',
      logo: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498',
      roles: ['SDE', 'ML Engineer', 'Product Analyst'],
      offers: 28,
      package: '50-60 LPA',
      location: 'Bangalore',
      branches: ['CSE', 'IT', 'ECE'],
      requirements: ['CGPA 9.0+', 'DSA', 'ML/AI'],
      interviewDate: '18 Dec 2025',
      deadline: '12 Dec 2025'
    },
    {
      id: 6,
      company: 'Apple',
      logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
      roles: ['Hardware Engineer', 'SDE', 'Designer'],
      offers: 18,
      package: '45-55 LPA',
      location: 'Hyderabad',
      branches: ['CSE', 'ECE', 'Design'],
      requirements: ['CGPA 8.5+', 'Innovation', 'Portfolio'],
      interviewDate: '22 Dec 2025',
      deadline: '15 Dec 2025'
    }
  ]

  // Interview Experiences
  const experiences = [
    {
      id: 1,
      company: 'Google',
      role: 'Software Engineer',
      student: 'Rahul Sharma',
      batch: '2025',
      package: '48 LPA',
      rounds: 5,
      difficulty: 'Hard',
      experience: 'The interview process had 5 rounds - 2 DSA rounds, 1 System Design, 1 Hiring Manager, and 1 HR. Focus on problem-solving and communication.',
      tips: 'Practice LeetCode hard problems, be thorough with OS and DBMS, and work on communication skills.',
      date: '2 days ago',
      helpful: 234,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde'
    },
    {
      id: 2,
      company: 'Microsoft',
      role: 'Software Engineer',
      student: 'Priya Singh',
      batch: '2025',
      package: '42 LPA',
      rounds: 4,
      difficulty: 'Medium',
      experience: '4 rounds including coding, system design, and manager round. Questions were mostly from arrays, strings, and trees.',
      tips: 'Focus on fundamentals, practice coding on paper, and be confident in system design discussions.',
      date: '5 days ago',
      helpful: 189,
      avatar: 'https://images.unsplash.com/photo-1494790108777-385ef443b2b7'
    },
    {
      id: 3,
      company: 'Amazon',
      role: 'SDE',
      student: 'Amit Kumar',
      batch: '2025',
      package: '36 LPA',
      rounds: 4,
      difficulty: 'Medium',
      experience: '4 rounds focusing on DSA, leadership principles, and problem-solving. Had to write working code.',
      tips: 'Know Amazon leadership principles well, practice coding with time constraints, and have good projects.',
      date: '1 week ago',
      helpful: 156,
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36'
    },
    {
      id: 4,
      company: 'Goldman Sachs',
      role: 'Analyst',
      student: 'Neha Gupta',
      batch: '2025',
      package: '32 LPA',
      rounds: 3,
      difficulty: 'Medium',
      experience: '3 rounds including technical, HR, and partner round. Questions on finance basics and problem-solving.',
      tips: 'Prepare financial concepts, practice case studies, and focus on analytical thinking.',
      date: '3 days ago',
      helpful: 98,
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956'
    }
  ]

  // Preparation Resources
  const resources = [
    {
      id: 1,
      title: 'DSA Sheet by Striver',
      type: 'Sheet',
      author: 'Raj Vikramaditya',
      questions: 450,
      difficulty: 'All Levels',
      rating: 4.9,
      users: '250k+',
      link: '#'
    },
    {
      id: 2,
      title: 'System Design Interview Guide',
      type: 'Course',
      author: 'Gaurav Sen',
      topics: 25,
      duration: '40 hours',
      rating: 4.8,
      users: '180k+',
      link: '#'
    },
    {
      id: 3,
      title: 'LeetCode Premium',
      type: 'Platform',
      author: 'LeetCode',
      problems: 2000,
      contests: 'Weekly',
      rating: 4.9,
      users: '1M+',
      link: '#'
    },
    {
      id: 4,
      title: 'Aptitude & Reasoning Guide',
      type: 'Book',
      author: 'R.S. Aggarwal',
      chapters: 45,
      exercises: 5000,
      rating: 4.7,
      users: '500k+',
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-green-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 -right-40 w-96 h-96 bg-yellow-600 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Placement <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">Hub</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Statistics • Company-wise Placements • Interview Experiences • Preparation Resources
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-10">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-800">
          {['statistics', 'companies', 'experiences', 'resources'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium capitalize transition-all relative ${
                activeTab === tab ? 'text-green-400' : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400" />
              )}
            </button>
          ))}
        </div>

        {activeTab === 'statistics' && (
          <div className="space-y-8">
            {/* Overall Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <div className="text-3xl font-bold text-green-400 mb-2">{statistics.overall.placementPercentage}%</div>
                <div className="text-gray-400">Placement Percentage</div>
                <div className="mt-4 text-sm text-gray-300">
                  {statistics.overall.placedStudents} placed out of {statistics.overall.totalStudents}
                </div>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{statistics.overall.averagePackage}</div>
                <div className="text-gray-400">Average Package</div>
                <div className="mt-4 text-sm text-gray-300">Median: {statistics.overall.medianPackage}</div>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <div className="text-3xl font-bold text-purple-400 mb-2">{statistics.overall.highestPackage}</div>
                <div className="text-gray-400">Highest Package</div>
                <div className="mt-4 text-sm text-gray-300">{statistics.overall.totalOffers} total offers</div>
              </div>
            </div>

            {/* Branch-wise Stats */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-4">Branch-wise Placement Statistics</h2>
              <div className="space-y-4">
                {statistics.branchWise.map((branch) => (
                  <div key={branch.branch}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{branch.branch}</span>
                      <span className="text-green-400">{branch.avgPackage}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-yellow-500 h-2 rounded-full"
                          style={{ width: `${branch.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-400">{branch.percentage}%</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {branch.placed} placed out of {branch.total}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Year-wise Stats */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-4">Year-wise Performance</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {statistics.yearWise.map((year) => (
                  <div key={year.year} className="bg-gray-700/30 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-white">{year.year}</div>
                    <div className="text-2xl font-bold text-green-400 my-2">{year.percentage}%</div>
                    <div className="text-sm text-gray-400">{year.averagePackage}</div>
                    <div className="text-xs text-yellow-400 mt-2">{year.highestPackage}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'companies' && (
          <>
            {/* Filters */}
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-4 mb-8 border border-gray-700">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-sm font-medium text-gray-400">Filters:</span>
                
                <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}
                  className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-sm text-white outline-none">
                  {roles.map(role => (
                    <option key={role} value={role === 'All Roles' ? 'all' : role}>{role}</option>
                  ))}
                </select>

                <select value={selectedBranch} onChange={(e) => setSelectedBranch(e.target.value)}
                  className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-sm text-white outline-none">
                  {branches.map(branch => (
                    <option key={branch} value={branch === 'All Branches' ? 'all' : branch}>{branch}</option>
                  ))}
                </select>

                <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 text-sm text-white outline-none">
                  <option value="2025">2025 Batch</option>
                  <option value="2024">2024 Batch</option>
                  <option value="2023">2023 Batch</option>
                </select>

                <div className="flex-1"></div>
                <span className="text-sm text-gray-400">Last updated: 1 hour ago</span>
              </div>
            </div>

            {/* Company Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {companyPlacements.map((company) => (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <img src={company.logo} alt={company.company} className="w-16 h-16 rounded-xl object-cover" />
                      <div>
                        <h3 className="text-xl font-bold text-white">{company.company}</h3>
                        <p className="text-green-400 text-sm">{company.package}</p>
                      </div>
                    </div>

                    {/* Roles */}
                    <div className="mb-4">
                      <span className="text-sm text-gray-400">Roles:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {company.roles.map((role, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-sm">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray-700/30 rounded-xl p-2">
                        <div className="text-xs text-gray-400">Offers</div>
                        <div className="font-bold text-white">{company.offers}</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-xl p-2">
                        <div className="text-xs text-gray-400">Location</div>
                        <div className="font-bold text-white text-sm">{company.location}</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-xl p-2">
                        <div className="text-xs text-gray-400">Eligible Branches</div>
                        <div className="font-bold text-white text-sm">{company.branches.join(', ')}</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-xl p-2">
                        <div className="text-xs text-gray-400">Requirements</div>
                        <div className="font-bold text-white text-sm">{company.requirements.join(', ')}</div>
                      </div>
                    </div>

                    {/* Interview Date */}
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-gray-400">Interview Date:</span>
                      <span className="text-yellow-400 font-medium">{company.interviewDate}</span>
                    </div>

                    {/* Apply Button */}
                    <button className="w-full py-3 bg-gradient-to-r from-green-600 to-yellow-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'experiences' && (
          <div className="space-y-6">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all"
              >
                <div className="flex gap-4">
                  {/* Avatar */}
                  <img src={exp.avatar} alt={exp.student} className="w-16 h-16 rounded-full" />
                  
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.student}</h3>
                        <p className="text-gray-400 text-sm">{exp.company} • {exp.role}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold">{exp.package}</div>
                        <div className="text-sm text-gray-400">Batch {exp.batch}</div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-2 mb-3">
                      <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs">
                        {exp.rounds} Rounds
                      </span>
                      <span className={`px-3 py-1 rounded-lg text-xs ${
                        exp.difficulty === 'Hard' ? 'bg-red-900/50 text-red-400' :
                        exp.difficulty === 'Medium' ? 'bg-yellow-900/50 text-yellow-400' :
                        'bg-green-900/50 text-green-400'
                      }`}>
                        {exp.difficulty}
                      </span>
                    </div>

                    {/* Experience */}
                    <p className="text-gray-300 mb-3">{exp.experience}</p>

                    {/* Tips */}
                    <div className="bg-gray-700/30 rounded-xl p-3 mb-3">
                      <span className="text-sm text-yellow-400">💡 Pro Tip:</span>
                      <p className="text-sm text-gray-300 mt-1">{exp.tips}</p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{exp.date}</span>
                      <span className="text-gray-400">❤️ {exp.helpful} found helpful</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="px-6 py-3 bg-gray-800 text-white rounded-xl border border-gray-700 hover:bg-gray-700">
                Load More Experiences
              </button>
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs text-yellow-400 font-medium bg-yellow-400/10 px-2 py-1 rounded-full">
                      {resource.type}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2">{resource.title}</h3>
                    <p className="text-gray-400 text-sm">by {resource.author}</p>
                  </div>
                  <span className="text-yellow-400 font-bold">★ {resource.rating}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {resource.type === 'Sheet' && (
                    <>
                      <div className="bg-gray-700/30 rounded-xl p-2">
                        <div className="text-xs text-gray-400">Questions</div>
                        <div className="font-bold text-white">{resource.questions}</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-xl p-2">
                        <div className="text-xs text-gray-400">Difficulty</div>
                        <div className="font-bold text-white">{resource.difficulty}</div>
                      </div>
                    </>
                  )}
                  {resource.type === 'Course' && (
                    <>
                      <div className="bg-gray-700/30 rounded-xl p-2">
                        <div className="text-xs text-gray-400">Topics</div>
                        <div className="font-bold text-white">{resource.topics}</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-xl p-2">
                        <div className="text-xs text-gray-400">Duration</div>
                        <div className="font-bold text-white">{resource.duration}</div>
                      </div>
                    </>
                  )}
                  {resource.type === 'Platform' && (
                    <>
                      <div className="bg-gray-700/30 rounded-xl p-2">
                        <div className="text-xs text-gray-400">Problems</div>
                        <div className="font-bold text-white">{resource.problems}</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-xl p-2">
                        <div className="text-xs text-gray-400">Contests</div>
                        <div className="font-bold text-white">{resource.contests}</div>
                      </div>
                    </>
                  )}
                  {resource.type === 'Book' && (
                    <>
                      <div className="bg-gray-700/30 rounded-xl p-2">
                        <div className="text-xs text-gray-400">Chapters</div>
                        <div className="font-bold text-white">{resource.chapters}</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-xl p-2">
                        <div className="text-xs text-gray-400">Exercises</div>
                        <div className="font-bold text-white">{resource.exercises}</div>
                      </div>
                    </>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">👥 {resource.users} learners</span>
                  <a href={resource.link} className="px-6 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-yellow-500/20 transition-all">
                    Access Resource
                  </a>
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