'use client';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function FounderPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Fixed Bubble animation variants - Added 'as const'
  const bubbleFloat = {
    y: [0, -20, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const }
  };

  const bubbleFloat2 = {
    y: [0, -15, 0],
    transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }
  };

  const bubbleFloat3 = {
    y: [0, -25, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: 2 }
  };

  // ✅ Fixed fadeInUp
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  // ✅ Fixed staggerContainer
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  // ✅ Fixed scalePulse
  const scalePulse = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  };

  // Particles data - Fixed for hydration
  const particles = mounted ? Array(20).fill(0).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 5,
  })) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-purple-900 text-white relative overflow-x-hidden">

      {/* Animated Background Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Bubble 1 */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
          animate={bubbleFloat}
        />
        
        {/* Bubble 2 */}
        <motion.div
          className="absolute top-40 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"
          animate={bubbleFloat2}
        />
        
        {/* Bubble 3 */}
        <motion.div
          className="absolute bottom-20 left-1/3 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"
          animate={bubbleFloat3}
        />
        
        {/* Bubble 4 */}
        <motion.div
          className="absolute top-1/2 right-1/4 w-56 h-56 bg-pink-500/20 rounded-full blur-3xl"
          animate={bubbleFloat}
        />
        
        {/* Bubble 5 */}
        <motion.div
          className="absolute bottom-40 right-10 w-36 h-36 bg-indigo-500/20 rounded-full blur-3xl"
          animate={bubbleFloat2}
        />
        
        {/* Small floating particles - Only render on client */}
        {mounted && particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              top: particle.top,
              left: particle.left,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Founder Image with Glow Effect */}
          <motion.div 
            className="relative group"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Animated Glow Border */}
            <motion.div 
              className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500"
              animate={scalePulse}
            />
            
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-60 group-hover:opacity-100 transition duration-500"
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/avi.png"
                alt="Abhishek Kumar Singh"
                width={500}
                height={500}
                className="object-cover w-full h-[450px] rounded-3xl"
                priority
              />
              
              {/* Overlay Gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full px-4 py-2 shadow-lg"
              animate={bubbleFloat}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-sm font-semibold">✨ Founder</span>
            </motion.div>
          </motion.div>

          {/* Founder Info */}
          <motion.div variants={fadeInUp}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm mb-6"
            >
              <span className="text-sm text-blue-300">👋 Meet the Visionary</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              Meet The Visionary Behind{' '}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                College Yaarri
              </motion.span>
            </motion.h1>

            <motion.h2 
              className="text-3xl md:text-4xl font-semibold text-purple-400 mb-4"
              variants={fadeInUp}
            >
              Abhishek Kumar Singh
            </motion.h2>

            <motion.p 
              className="text-gray-300 text-lg leading-relaxed mb-6"
              variants={fadeInUp}
            >
              A passionate entrepreneur and visionary leader dedicated to transforming
              the way students explore careers and opportunities. With a mission to
              empower students across India, he founded <strong className="text-blue-400">College Yaarri</strong>
              to bridge the gap between learning and real-world success.
            </motion.p>

            <motion.p 
              className="text-gray-400 mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              His leadership, innovation, and commitment to excellence have helped
              thousands of students achieve clarity in their career paths.
              College Yaarri is not just a platform — it's a movement.
            </motion.p>

            <motion.button 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              Explore Our Mission 🚀
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section with Bubbles */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { value: "50,000+", label: "Students Impacted", icon: "🎓", color: "from-blue-500 to-cyan-500" },
            { value: "500+", label: "Colleges Covered", icon: "🏛️", color: "from-purple-500 to-pink-500" },
            { value: "95%", label: "Success Rate", icon: "⭐", color: "from-orange-500 to-red-500" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"
                animate={bubbleFloat}
              />
              <div className={`relative bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-center backdrop-blur-sm`}>
                <motion.div 
                  className="text-5xl mb-3 inline-block"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/90 text-sm mt-1">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Vision Section with Glassmorphism */}
      <motion.div 
        className="relative z-10 bg-black/40 backdrop-blur-lg py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.div
            variants={fadeInUp}
            className="relative inline-block mb-6"
          >
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50"
              animate={scalePulse}
            />
            <div className="relative text-6xl">✨</div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            variants={fadeInUp}
          >
            Our Vision
          </motion.h2>

          <motion.p 
            className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            To create India's most trusted student community platform where guidance,
            mentorship, and opportunity come together. We believe every student deserves
            the right direction, the right network, and the right support system.
          </motion.p>

          {/* Vision Tags */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
          >
            {["Guidance", "Mentorship", "Opportunity", "Community", "Trust", "Innovation"].map((tag, idx) => (
              <motion.span
                key={idx}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-blue-300 border border-white/20"
              >
                #{tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Quote */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          animate={bubbleFloat}
          className="text-4xl mb-4"
        >
          💭
        </motion.div>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 italic leading-relaxed"
          whileHover={{ scale: 1.02 }}
        >
          "Empowering students to dream big and achieve bigger — that's our promise."
        </motion.p>
        <motion.p 
          className="text-purple-400 mt-4 font-semibold"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          — Abhishek Kumar Singh
        </motion.p>
      </motion.div>

      {/* Scroll to top button */}
      {scrolled && mounted && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ↑
        </motion.button>
      )}
    </div>
  );
}