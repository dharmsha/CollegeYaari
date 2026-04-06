"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  AcademicCapIcon,
  HeartIcon,
  LightBulbIcon,
  UserGroupIcon,
  ChartBarIcon,
  SparklesIcon,
  CheckBadgeIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
};

export default function CollegeYaariVisionPage() {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { value: "50,000+", label: "Students Helped", icon: UserGroupIcon, color: "from-blue-500 to-cyan-500", delay: 0 },
    { value: "500+", label: "Colleges Covered", icon: AcademicCapIcon, color: "from-purple-500 to-pink-500", delay: 0.1 },
    { value: "95%", label: "Accuracy Rate", icon: ChartBarIcon, color: "from-green-500 to-emerald-500", delay: 0.2 },
    { value: "4.8", label: "User Rating", icon: HeartIcon, color: "from-orange-500 to-red-500", delay: 0.3 },
  ];

  const features = [
    {
      title: "Accurate Predictions",
      description: "Data-driven college and branch predictions based on previous year trends",
      icon: ChartBarIcon,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Complete Transparency",
      description: "Clear percentile calculations and honest college recommendations",
      icon: ShieldCheckIcon,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Student First Approach",
      description: "Every feature designed keeping students' career dreams in mind",
      icon: HeartIcon,
      gradient: "from-red-500 to-orange-500",
    },
    {
      title: "Continuous Updates",
      description: "Regularly updated cutoff data from official counseling sources",
      icon: SparklesIcon,
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const promises = [
    { emoji: "🔒", title: "100% Free", description: "No hidden charges. Always free for students.", color: "bg-green-100", delay: 0 },
    { emoji: "📊", title: "Data-Driven", description: "Predictions based on actual previous year data.", color: "bg-blue-100", delay: 0.1 },
    { emoji: "🤝", title: "Student First", description: "Every feature designed for students' benefit.", color: "bg-purple-100", delay: 0.2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-x-hidden">
      
      {/* Hero Section with Parallax */}
      <motion.div 
        initial="hidden"
        animate="visible"
        className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-purple-700 to-indigo-800 text-white"
      >
        <motion.div 
          className="absolute inset-0 bg-black/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Animated Background Shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <AcademicCapIcon className="w-4 h-4" />
              College Yaari
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-7xl font-bold mb-6"
              variants={fadeInUp}
            >
              Every Student Deserves
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                The Right College
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              We're on a mission to help every JEE and NEET aspirant find their perfect college 
              and branch, without confusion or misinformation.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Animated Bottom Curve */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </motion.div>
      </motion.div>

      {/* Stats Section with Stagger Animation */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 -mt-16 mb-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={idx} 
                variants={scaleUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center cursor-pointer"
              >
                <motion.div 
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div 
                  className="text-xl md:text-2xl font-bold text-gray-800"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: stat.delay }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Vision Statement */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            animate={floatingAnimation}
          >
            <LightBulbIcon className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            "To become India's most trusted college predictor platform, 
            where every student can make informed career decisions without stress or confusion."
          </p>
        </motion.div>
      </motion.div>

      {/* Why College Yaari */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Why College Yaari?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not just a predictor. We're a friend in your career journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-xl p-6 text-center shadow-md cursor-pointer group"
              >
                <motion.div 
                  className={`w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r ${feature.gradient} transition-all duration-300`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <Icon className="w-7 h-7 text-purple-600 group-hover:text-white transition-all duration-300" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div 
        className="bg-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <motion.div 
                className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm mb-4"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <HeartIcon className="w-4 h-4" />
                Our Mission
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Helping Students Find Their Perfect Fit
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every year, thousands of students struggle to understand which colleges they can get 
                based on their marks. We're here to change that.
              </p>
              <div className="space-y-3">
                {[
                  "Clear percentile calculations based on real data",
                  "Honest college recommendations without bias",
                  "Regular updates from official counseling sources"
                ].map((text, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckBadgeIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    </motion.div>
                    <span className="text-gray-700">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInRight}
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden group"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <div className="text-center relative z-10">
                <motion.div 
                  className="text-7xl mb-4 inline-block"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  🎯
                </motion.div>
                <p className="text-xl font-semibold mb-3">"Your Marks → Your Future"</p>
                <p className="text-blue-100">
                  We believe that with the right guidance, every student can find their dream college.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Promise Section */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div className="text-center mb-10" variants={fadeInUp}>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Promise to You</h2>
          <p className="text-lg text-gray-600">Simple. Transparent. Reliable.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {promises.map((promise, idx) => (
            <motion.div 
              key={idx} 
              variants={scaleUp}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-center p-6 bg-white rounded-xl shadow-md cursor-pointer"
            >
              <motion.div 
                className={`w-16 h-16 ${promise.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-3xl">{promise.emoji}</span>
              </motion.div>
              <h3 className="font-bold text-gray-800 mb-2">{promise.title}</h3>
              <p className="text-gray-600 text-sm">{promise.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer Note with Animation */}
      <motion.div 
        className="border-t border-gray-200 py-6 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          College Yaari - Your Trusted College Predictor
        </motion.p>
      </motion.div>
    </div>
  );
}