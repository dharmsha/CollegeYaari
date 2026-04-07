'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  FaUsers, FaGraduationCap, FaBuilding, FaGlobe, 
  FaHeart, FaStar, FaRocket, FaHandshake, FaYoutube,
  FaPlay, FaVideo, FaAward,
  FaArrowRight
} from 'react-icons/fa'
import { SiYoutubeshorts } from 'react-icons/si'

export default function AboutPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  }

  const stats = [
    { value: '50,000+', label: 'Students Helped', icon: <FaUsers />, color: 'from-blue-500 to-cyan-500' },
    { value: '500+', label: 'Colleges Covered', icon: <FaBuilding />, color: 'from-purple-500 to-pink-500' },
    { value: '25+', label: 'States Covered', icon: <FaGlobe />, color: 'from-green-500 to-emerald-500' },
    { value: '4.9', label: 'Rating', icon: <FaStar />, color: 'from-yellow-500 to-orange-500' },
    { value: '426+', label: 'YouTube Videos', icon: <FaVideo />, color: 'from-red-500 to-rose-500' },
    { value: '5.9K+', label: 'Subscribers', icon: <FaUsers />, color: 'from-indigo-500 to-purple-500' },
  ]

  const values = [
    { title: 'Student First', desc: 'Every decision prioritizes student success', icon: <FaGraduationCap />, color: 'from-blue-500 to-cyan-500' },
    { title: 'Transparency', desc: 'Honest and clear information always', icon: <FaStar />, color: 'from-purple-500 to-pink-500' },
    { title: 'Innovation', desc: 'Constantly improving our tools', icon: <FaRocket />, color: 'from-orange-500 to-red-500' },
    { title: 'Trust', desc: 'Building lasting relationships', icon: <FaHandshake />, color: 'from-green-500 to-emerald-500' },
  ]

  const achievements = [
    { year: '2024', title: '50,000+ Students', desc: 'Reached milestone of 50K+ students helped', icon: <FaAward /> },
    { year: '2024', title: 'YouTube Growth', desc: 'Crossed 5,000+ subscribers on YouTube', icon: <FaYoutube /> },
    { year: '2025', title: '500+ Colleges', desc: 'Covered 500+ colleges across India', icon: <FaBuilding /> },
  ]

  const youtubeStats = [
    { value: '5.9K', label: 'Subscribers', icon: <FaUsers /> },
    { value: '426', label: 'Videos', icon: <FaVideo /> },
    { value: '1M+', label: 'Views', icon: <FaPlay /> },
    { value: '100+', label: 'Shorts', icon: <SiYoutubeshorts /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 pt-20 pb-16 overflow-x-hidden">
      
      {/* Hero Section with YouTube Channel Highlight */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <FaYoutube className="text-red-400" />
                CollegeYaari Official
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Empowering Students
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                  Since 2020
                </span>
              </h1>
              <p className="text-lg md:text-xl text-indigo-100 max-w-lg leading-relaxed">
                Your trusted partner in finding the perfect college and career path. 
                We have helped 50,000+ students achieve their dreams.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link 
                  href="https://youtube.com/@collegeyaariofficial" 
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold transition-all shadow-lg"
                >
                  <FaYoutube size={20} />
                  Subscribe on YouTube
                </Link>
                <Link 
                  href="/college-yaari" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold hover:bg-white/30 transition-all"
                >
                  Check Predictor
                  <FaArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

            {/* YouTube Channel Card - No Image, Only Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-600 to-red-800 p-8 text-center">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaYoutube className="text-7xl md:text-8xl text-white mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    CollegeYaari
                  </h3>
                  <p className="text-red-200 mb-4">@collegeyaariofficial</p>
                  <div className="flex justify-center gap-4 text-white/80 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-lg">5.9K</div>
                      <div className="text-xs">Subscribers</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-lg">426</div>
                      <div className="text-xs">Videos</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-lg">1M+</div>
                      <div className="text-xs">Views</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path fill="#f8fafc" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaHeart className="text-3xl text-indigo-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Mission</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            "To empower students across India with accurate, data-driven college predictions 
            and career guidance, helping them make informed decisions about their future."
          </p>
        </motion.div>
      </div>

      {/* YouTube Stats Section */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-8 flex items-center justify-center gap-2">
            <FaYoutube className="text-red-600" />
            YouTube Presence
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {youtubeStats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={scaleUp}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-4 md:p-6 text-center border border-red-100"
              >
                <div className="text-2xl md:text-3xl text-red-500 mb-2">{stat.icon}</div>
                <div className="text-xl md:text-2xl font-bold text-slate-800">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-12" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-10">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={scaleUp}
                whileHover={{ y: -8, scale: 1.05 }}
                className={`bg-gradient-to-br ${stat.color} rounded-xl p-4 text-center text-white shadow-lg`}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-lg md:text-xl font-bold">{stat.value}</div>
                <div className="text-xs opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* YouTube Channel Feature */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <FaYoutube size={30} />
                  <span className="text-xl font-bold">CollegeYaari YouTube</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  JEE & NEET Guidance
                </h3>
                <p className="text-orange-100 mb-4 leading-relaxed">
                  Get latest updates, exam reviews, college reviews, and career guidance 
                  on our YouTube channel. Subscribe for regular content!
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link 
                    href="https://youtube.com/@collegeyaariofficial" 
                    target="_blank"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-red-600 rounded-full font-semibold hover:shadow-lg transition-all"
                  >
                    <FaPlay size={14} />
                    Watch Videos
                  </Link>
                  <Link 
                    href="https://youtube.com/@collegeyaariofficial/shorts" 
                    target="_blank"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full font-semibold hover:bg-white/30 transition-all"
                  >
                    <SiYoutubeshorts size={14} />
                    Watch Shorts
                  </Link>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {['JEE Reviews', 'College Reviews', 'Exam Updates', 'Career Tips'].map((item, idx) => (
                <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
                  <div className="text-sm font-semibold">{item}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-10">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={scaleUp}
                whileHover={{ y: -8 }}
                className={`bg-gradient-to-br ${value.color} p-6 rounded-xl text-white text-center shadow-lg group cursor-pointer`}
              >
                <motion.div 
                  className="text-3xl mb-3 inline-block group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 10 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm opacity-90">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Achievements Timeline */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-10">Our Journey</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md p-6 text-center border border-slate-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="text-2xl text-indigo-600">{achievement.icon}</div>
                </div>
                <div className="text-sm text-indigo-600 font-semibold mb-1">{achievement.year}</div>
                <h3 className="font-bold text-slate-800 mb-2">{achievement.title}</h3>
                <p className="text-sm text-slate-500">{achievement.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-10">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Abhishek Singh', role: 'Founder & CEO', image: '👨‍💼', color: 'from-blue-500 to-cyan-500', youtube: 'YouTube Creator' },
              { name: 'Dharm Kumar Sharma', role: 'Tech Lead', image: '👨‍💻', color: 'from-purple-500 to-pink-500', youtube: 'Content Manager' },
              { name: 'Priya Sharma', role: 'Career Counselor', image: '👩‍🏫', color: 'from-green-500 to-emerald-500', youtube: 'Guidance Expert' },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                variants={scaleUp}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-md p-6 text-center group"
              >
                <motion.div 
                  className={`text-5xl mb-3 inline-block bg-gradient-to-br ${member.color} w-20 h-20 rounded-full flex items-center justify-center text-white mx-auto`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {member.image}
                </motion.div>
                <h3 className="font-bold text-slate-800 text-lg">{member.name}</h3>
                <p className="text-sm text-indigo-600 font-medium">{member.role}</p>
                <p className="text-xs text-slate-400 mt-1">{member.youtube}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* YouTube Channel CTA */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white"
        >
          <FaYoutube className="text-5xl mx-auto mb-4 text-red-400" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Subscribe to Our YouTube Channel</h2>
          <p className="text-indigo-100 mb-6 max-w-lg mx-auto">
            Get daily updates, exam reviews, college insights, and career guidance
          </p>
          <Link 
            href="https://youtube.com/@collegeyaariofficial" 
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold transition-all shadow-lg"
          >
            <FaYoutube size={20} />
            Subscribe Now
          </Link>
        </motion.div>
      </div>

      {/* Footer Stats */}
      <div className="container mx-auto px-4 py-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm text-slate-400"
        >
          <p>© 2024 CollegeYaari | Empowering Students Since 2020</p>
          <p className="mt-1">🎓 Helping students find their perfect college and career path</p>
        </motion.div>
      </div>
    </div>
  )
}