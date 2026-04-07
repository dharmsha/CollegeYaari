// src/components/Cutttof.tsx

"use client";

import { useState } from "react";
import { motion } from "framer-motion";  // ✅ Import motion
import {
  AcademicCapIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  BeakerIcon,
  ComputerDesktopIcon,
  BoltIcon,
  HeartIcon,
  ClipboardDocumentListIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

// ✅ Fixed Animation variants - Proper easing syntax
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

// ✅ Fixed scaleUp variant
const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function CollegeYaariPage() {
  const [examType, setExamType] = useState<"jee" | "neet">("jee");
  const [marks, setMarks] = useState<string>("");
  const [percentile, setPercentile] = useState<number | null>(null);
  const [colleges, setColleges] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [grade, setGrade] = useState<string>("");

  // Get Grade based on marks
  const getGrade = (marks: number, exam: string) => {
    if (exam === "jee") {
      if (marks >= 250) return "A++ (Excellent)";
      if (marks >= 200) return "A+ (Outstanding)";
      if (marks >= 150) return "A (Very Good)";
      if (marks >= 100) return "B+ (Good)";
      if (marks >= 60) return "B (Average)";
      if (marks >= 30) return "C (Needs Improvement)";
      return "D (Low Score)";
    } else {
      if (marks >= 650) return "A++ (Excellent)";
      if (marks >= 550) return "A+ (Outstanding)";
      if (marks >= 450) return "A (Very Good)";
      if (marks >= 350) return "B+ (Good)";
      if (marks >= 250) return "B (Average)";
      if (marks >= 150) return "C (Needs Improvement)";
      return "D (Low Score)";
    }
  };

  // JEE Marks to Percentile Mapping
  const getJEEPercentile = (marks: number) => {
    if (marks >= 250) return 99.9;
    if (marks >= 200) return 99.5;
    if (marks >= 180) return 99.0;
    if (marks >= 150) return 97.5;
    if (marks >= 120) return 95.0;
    if (marks >= 100) return 92.0;
    if (marks >= 80) return 88.0;
    if (marks >= 60) return 82.0;
    if (marks >= 40) return 75.0;
    if (marks >= 20) return 65.0;
    return 50.0;
  };

  // NEET Marks to Percentile Mapping
  const getNEETPercentile = (marks: number) => {
    if (marks >= 680) return 99.9;
    if (marks >= 650) return 99.5;
    if (marks >= 600) return 98.5;
    if (marks >= 550) return 96.0;
    if (marks >= 500) return 92.0;
    if (marks >= 450) return 87.0;
    if (marks >= 400) return 80.0;
    if (marks >= 350) return 72.0;
    if (marks >= 300) return 62.0;
    if (marks >= 250) return 50.0;
    return 35.0;
  };

  // Complete College Database
  const collegesData = {
    jee: [
      { name: "IIT Bombay", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Aerospace"], minPercentile: 99.5, location: "Mumbai", fees: "₹2.5L/year", rating: 4.9 },
      { name: "IIT Delhi", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Chemical", "Textile"], minPercentile: 99.4, location: "Delhi", fees: "₹2.4L/year", rating: 4.9 },
      { name: "IIT Madras", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Aerospace", "Ocean"], minPercentile: 99.3, location: "Chennai", fees: "₹2.3L/year", rating: 4.8 },
      { name: "IIT Kanpur", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Aerospace"], minPercentile: 99.2, location: "Kanpur", fees: "₹2.2L/year", rating: 4.8 },
      { name: "IIT Kharagpur", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Metallurgy", "Mining"], minPercentile: 99.0, location: "Kharagpur", fees: "₹2.2L/year", rating: 4.7 },
      { name: "IIT Roorkee", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Architecture"], minPercentile: 98.5, location: "Roorkee", fees: "₹2.2L/year", rating: 4.7 },
      { name: "IIT Guwahati", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Design"], minPercentile: 98.0, location: "Guwahati", fees: "₹2.2L/year", rating: 4.6 },
      { name: "IIT Hyderabad", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "AI"], minPercentile: 97.5, location: "Hyderabad", fees: "₹2.2L/year", rating: 4.6 },
      { name: "IIT Indore", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil"], minPercentile: 97.0, location: "Indore", fees: "₹2.2L/year", rating: 4.5 },
      { name: "IIT BHU Varanasi", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Mining"], minPercentile: 96.5, location: "Varanasi", fees: "₹2.2L/year", rating: 4.5 },
      { name: "IIT Patna", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil"], minPercentile: 95.0, location: "Patna", fees: "₹2.2L/year", rating: 4.4 },
      { name: "IIT Ropar", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil"], minPercentile: 94.5, location: "Rupnagar", fees: "₹2.2L/year", rating: 4.4 },
      { name: "IIT Mandi", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil"], minPercentile: 94.0, location: "Mandi", fees: "₹2.2L/year", rating: 4.3 },
      { name: "NIT Trichy", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Electronics"], minPercentile: 98.5, location: "Tiruchirappalli", fees: "₹1.8L/year", rating: 4.6 },
      { name: "NIT Surathkal", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Chemical", "Electronics"], minPercentile: 98.0, location: "Mangalore", fees: "₹1.7L/year", rating: 4.5 },
      { name: "NIT Warangal", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Electronics"], minPercentile: 97.5, location: "Warangal", fees: "₹1.7L/year", rating: 4.5 },
      { name: "IIIT Hyderabad", type: "IIIT", branches: ["Computer Science", "Electronics", "AI/ML", "Data Science"], minPercentile: 97.0, location: "Hyderabad", fees: "₹3.0L/year", rating: 4.7 },
      { name: "IIIT Bangalore", type: "IIIT", branches: ["Computer Science", "Data Science", "AI/ML"], minPercentile: 96.0, location: "Bangalore", fees: "₹3.0L/year", rating: 4.6 },
      { name: "IIIT Delhi", type: "IIIT", branches: ["Computer Science", "Electronics", "AI/ML"], minPercentile: 95.5, location: "Delhi", fees: "₹2.8L/year", rating: 4.6 },
      { name: "DTU Delhi", type: "GFTI", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Chemical"], minPercentile: 96.0, location: "Delhi", fees: "₹2.2L/year", rating: 4.4 },
      { name: "NSUT Delhi", type: "GFTI", branches: ["Computer Science", "Electronics", "Mechanical", "Electrical"], minPercentile: 95.5, location: "Delhi", fees: "₹2.1L/year", rating: 4.3 },
      { name: "BITS Pilani", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Chemical"], minPercentile: 85.0, location: "Pilani", fees: "₹5.5L/year", rating: 4.8 },
      { name: "VIT Vellore", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil"], minPercentile: 75.0, location: "Vellore", fees: "₹3.5L/year", rating: 4.5 },
    ],
    neet: [
      { name: "AIIMS Delhi", type: "AIIMS", branches: ["MBBS", "BDS", "Nursing"], minPercentile: 99.9, location: "Delhi", fees: "₹1.6K/year", rating: 4.9 },
      { name: "CMC Vellore", type: "Private", branches: ["MBBS", "BDS", "Nursing"], minPercentile: 99.8, location: "Vellore", fees: "₹4.0L/year", rating: 4.9 },
      { name: "JIPMER Puducherry", type: "GFTI", branches: ["MBBS", "BDS", "Nursing"], minPercentile: 99.7, location: "Puducherry", fees: "₹1.2L/year", rating: 4.8 },
    ],
  };

  const calculateResults = () => {
    const marksNum = parseFloat(marks);
    if (isNaN(marksNum) || marksNum < 0 || marksNum > (examType === "jee" ? 300 : 720)) {
      alert(`Please enter valid marks (0-${examType === "jee" ? 300 : 720})`);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const percentileValue = examType === "jee" 
        ? getJEEPercentile(marksNum) 
        : getNEETPercentile(marksNum);
      
      setPercentile(percentileValue);
      const gradeValue = getGrade(marksNum, examType);
      setGrade(gradeValue);

      const eligibleColleges = collegesData[examType].filter(
        (college) => percentileValue >= college.minPercentile
      );

      setColleges(eligibleColleges);
      setShowResults(true);
      setLoading(false);
    }, 800);
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case "IIT": return "bg-orange-500";
      case "NIT": return "bg-blue-600";
      case "IIIT": return "bg-purple-500";
      case "GFTI": return "bg-green-600";
      case "Private": return "bg-pink-500";
      case "AIIMS": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getBranchIcon = (branch: string) => {
    if (branch.includes("Computer") || branch.includes("AI") || branch.includes("Data")) 
      return <ComputerDesktopIcon className="w-4 h-4" />;
    if (branch.includes("Electrical") || branch.includes("Electronics")) 
      return <BoltIcon className="w-4 h-4" />;
    if (branch.includes("Medical") || branch.includes("MBBS")) 
      return <HeartIcon className="w-4 h-4" />;
    return <BeakerIcon className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-x-hidden">
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="flex items-center gap-3 mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <AcademicCapIcon className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">College Yaari</h1>
          </motion.div>
          <motion.p 
            className="text-xl text-blue-100 max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            अपने Marks डालो, Percentile जानो, Grade देखो, और जानो कौन से Colleges में Admission मिल सकता है!
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Exam Selection & Marks Input */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Exam
              </label>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setExamType("jee");
                    setShowResults(false);
                    setMarks("");
                  }}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                    examType === "jee"
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  🎯 JEE Main
                </button>
                <button
                  onClick={() => {
                    setExamType("neet");
                    setShowResults(false);
                    setMarks("");
                  }}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                    examType === "neet"
                      ? "bg-green-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  🩺 NEET
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Your Marks
              </label>
              <div className="flex gap-3">
                <input
                  type="number"
                  value={marks}
                  onChange={(e) => setMarks(e.target.value)}
                  placeholder={examType === "jee" ? "0-300" : "0-720"}
                  className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={calculateResults}
                  disabled={loading}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
                >
                  {loading ? "Calculating..." : "Check →"}
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Max Marks: {examType === "jee" ? "300" : "720"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Results Section */}
        {showResults && (
          <div className="space-y-6">
            {/* Score Card with Grade - Fixed motion.div */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={scaleUp}
              className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-6 text-white"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-sm opacity-90">Your Score</p>
                  <p className="text-4xl font-bold">
                    {marks} / {examType === "jee" ? "300" : "720"}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm opacity-90">Estimated Percentile</p>
                  <p className="text-4xl font-bold">
                    {percentile?.toFixed(2)}%
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm opacity-90">Your Grade</p>
                  <div className="inline-block px-4 py-2 bg-white/20 rounded-lg">
                    <p className="text-2xl font-bold">{grade}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Colleges List */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BuildingOfficeIcon className="w-6 h-6 text-blue-600" />
                Eligible Colleges & Branches
                <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  {colleges.length} Colleges
                </span>
              </h2>

              {colleges.length === 0 ? (
                <div className="bg-white rounded-xl shadow-md p-12 text-center">
                  <p className="text-gray-500 text-lg">No colleges found for this percentile.</p>
                  <p className="text-gray-400">Try improving your score for better options!</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {colleges.map((college, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className={`${getTypeColor(college.type)} p-4`}>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold text-white">{college.name}</h3>
                            <p className="text-white text-sm opacity-90">{college.location}</p>
                          </div>
                          <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                            {college.type}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center gap-1">
                            <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="font-semibold">{college.rating}</span>
                            <span className="text-gray-400 text-sm">/5</span>
                          </div>
                          <p className="text-sm text-gray-600 font-semibold">{college.fees}</p>
                        </div>
                        
                        <div className="mb-3">
                          <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                            <ClipboardDocumentListIcon className="w-4 h-4" />
                            Eligible Branches:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {college.branches.slice(0, 4).map((branch: string, i: number) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                              >
                                {getBranchIcon(branch)}
                                {branch}
                              </span>
                            ))}
                            {college.branches.length > 4 && (
                              <span className="text-xs text-gray-500">+{college.branches.length - 4} more</span>
                            )}
                          </div>
                        </div>
                        
                        <div className="pt-3 border-t">
                          <p className="text-sm text-gray-500">
                            Required Percentile: <span className="font-semibold text-blue-600">{college.minPercentile}%</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Tips Section */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <ChartBarIcon className="w-5 h-5" />
                💡 Expert Tips:
              </h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Percentile is approximate based on previous year trends</li>
                <li>• Check official counseling websites (JoSAA, CSAB) for exact cutoffs</li>
                <li>• Consider state quota, home state, and reservation benefits</li>
                <li>• Apply for multiple colleges through different counseling rounds</li>
              </ul>
            </div>
          </div>
        )}

        {/* Features Section */}
        {!showResults && (
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            {[
              { icon: "🏛️", title: "23 IITs", desc: "Top Engineering Colleges", color: "from-orange-400 to-red-500" },
              { icon: "📚", title: "31 NITs", desc: "Premier Institutes", color: "from-blue-400 to-cyan-500" },
              { icon: "💻", title: "25+ IIITs", desc: "Information Technology", color: "from-purple-400 to-pink-500" },
              { icon: "🏫", title: "25+ GFTIs", desc: "Govt Funded Institutes", color: "from-green-400 to-emerald-500" },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${item.color} rounded-xl p-6 text-center text-white shadow-lg hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                <p className="text-sm opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}