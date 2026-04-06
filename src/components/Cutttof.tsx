"use client";

import { useState } from "react";
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

export default function CollegeYaariPage() {
  const [examType, setExamType] = useState<"jee" | "neet">("jee");
  const [marks, setMarks] = useState<string>("");
  const [percentile, setPercentile] = useState<number | null>(null);
  const [colleges, setColleges] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  // JEE Marks to Percentile Mapping (Approximate)
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

  // NEET Marks to Percentile Mapping (Approximate)
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

  // Complete College Database - IITs, NITs, IIITs, GFTIs, Private
  const collegesData = {
    jee: [
      // ========== IITs (23 IITs) ==========
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
      
      // ========== NITs (Top 15) ==========
      { name: "NIT Trichy", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Electronics"], minPercentile: 98.5, location: "Tiruchirappalli", fees: "₹1.8L/year", rating: 4.6 },
      { name: "NIT Surathkal", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Chemical", "Electronics"], minPercentile: 98.0, location: "Mangalore", fees: "₹1.7L/year", rating: 4.5 },
      { name: "NIT Warangal", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Electronics"], minPercentile: 97.5, location: "Warangal", fees: "₹1.7L/year", rating: 4.5 },
      { name: "NIT Calicut", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Electronics"], minPercentile: 96.5, location: "Kozhikode", fees: "₹1.7L/year", rating: 4.4 },
      { name: "NIT Rourkela", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Metallurgy"], minPercentile: 96.0, location: "Rourkela", fees: "₹1.7L/year", rating: 4.4 },
      { name: "NIT Durgapur", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil"], minPercentile: 95.0, location: "Durgapur", fees: "₹1.6L/year", rating: 4.3 },
      { name: "NIT Allahabad", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil"], minPercentile: 94.5, location: "Prayagraj", fees: "₹1.6L/year", rating: 4.3 },
      { name: "NIT Kurukshetra", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil"], minPercentile: 93.0, location: "Kurukshetra", fees: "₹1.6L/year", rating: 4.2 },
      { name: "NIT Patna", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil"], minPercentile: 92.0, location: "Patna", fees: "₹1.6L/year", rating: 4.1 },
      { name: "NIT Jamshedpur", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Metallurgy"], minPercentile: 91.0, location: "Jamshedpur", fees: "₹1.6L/year", rating: 4.1 },
      
      // ========== IIITs ==========
      { name: "IIIT Hyderabad", type: "IIIT", branches: ["Computer Science", "Electronics", "AI/ML", "Data Science"], minPercentile: 97.0, location: "Hyderabad", fees: "₹3.0L/year", rating: 4.7 },
      { name: "IIIT Bangalore", type: "IIIT", branches: ["Computer Science", "Data Science", "AI/ML"], minPercentile: 96.0, location: "Bangalore", fees: "₹3.0L/year", rating: 4.6 },
      { name: "IIIT Delhi", type: "IIIT", branches: ["Computer Science", "Electronics", "AI/ML"], minPercentile: 95.5, location: "Delhi", fees: "₹2.8L/year", rating: 4.6 },
      { name: "IIIT Allahabad", type: "IIIT", branches: ["Computer Science", "Electronics", "IT"], minPercentile: 94.0, location: "Prayagraj", fees: "₹2.5L/year", rating: 4.4 },
      { name: "IIIT Pune", type: "IIIT", branches: ["Computer Science", "Electronics"], minPercentile: 92.0, location: "Pune", fees: "₹2.5L/year", rating: 4.3 },
      
      // ========== GFTIs (Govt Funded Technical Institutes) ==========
      { name: "DTU Delhi", type: "GFTI", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Chemical", "Electronics"], minPercentile: 96.0, location: "Delhi", fees: "₹2.2L/year", rating: 4.4 },
      { name: "NSUT Delhi", type: "GFTI", branches: ["Computer Science", "Electronics", "Mechanical", "Electrical", "BioTech"], minPercentile: 95.5, location: "Delhi", fees: "₹2.1L/year", rating: 4.3 },
      { name: "PEC Chandigarh", type: "GFTI", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Aerospace"], minPercentile: 94.0, location: "Chandigarh", fees: "₹1.5L/year", rating: 4.2 },
      { name: "VNIT Nagpur", type: "GFTI", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Metallurgy"], minPercentile: 93.0, location: "Nagpur", fees: "₹1.6L/year", rating: 4.2 },
      { name: "MANIT Bhopal", type: "GFTI", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Energy"], minPercentile: 91.0, location: "Bhopal", fees: "₹1.5L/year", rating: 4.1 },
      { name: "MNIT Jaipur", type: "GFTI", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Architecture"], minPercentile: 90.0, location: "Jaipur", fees: "₹1.6L/year", rating: 4.1 },
      { name: "IIEST Shibpur", type: "GFTI", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Architecture"], minPercentile: 89.0, location: "Howrah", fees: "₹1.5L/year", rating: 4.0 },
      { name: "SVNIT Surat", type: "GFTI", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Electronics"], minPercentile: 88.0, location: "Surat", fees: "₹1.5L/year", rating: 4.0 },
      
      // ========== Top Private Colleges ==========
      { name: "BITS Pilani", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Chemical", "Civil"], minPercentile: 85.0, location: "Pilani", fees: "₹5.5L/year", rating: 4.8 },
      { name: "BITS Hyderabad", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Chemical"], minPercentile: 82.0, location: "Hyderabad", fees: "₹5.5L/year", rating: 4.7 },
      { name: "BITS Goa", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical"], minPercentile: 83.0, location: "Goa", fees: "₹5.5L/year", rating: 4.7 },
      { name: "VIT Vellore", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "BioTech"], minPercentile: 75.0, location: "Vellore", fees: "₹3.5L/year", rating: 4.5 },
      { name: "VIT Chennai", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical"], minPercentile: 72.0, location: "Chennai", fees: "₹3.5L/year", rating: 4.4 },
      { name: "SRM Chennai", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "BioTech"], minPercentile: 70.0, location: "Chennai", fees: "₹3.0L/year", rating: 4.3 },
      { name: "Manipal Institute", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil"], minPercentile: 68.0, location: "Manipal", fees: "₹4.0L/year", rating: 4.4 },
      { name: "Thapar University", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil"], minPercentile: 65.0, location: "Patiala", fees: "₹3.8L/year", rating: 4.3 },
      { name: "LPU Jalandhar", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Aerospace"], minPercentile: 50.0, location: "Jalandhar", fees: "₹2.5L/year", rating: 4.0 },
      { name: "Amity University", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "BioTech"], minPercentile: 45.0, location: "Noida", fees: "₹3.0L/year", rating: 4.0 },
    ],
    neet: [
      { name: "AIIMS Delhi", type: "AIIMS", branches: ["MBBS", "BDS", "Nursing", "Paramedical"], minPercentile: 99.9, location: "Delhi", fees: "₹1.6K/year", rating: 4.9 },
      { name: "AIIMS Jodhpur", type: "AIIMS", branches: ["MBBS", "BDS", "Nursing"], minPercentile: 99.5, location: "Jodhpur", fees: "₹1.6K/year", rating: 4.8 },
      { name: "AIIMS Bhopal", type: "AIIMS", branches: ["MBBS", "BDS", "Nursing"], minPercentile: 99.4, location: "Bhopal", fees: "₹1.6K/year", rating: 4.8 },
      { name: "AIIMS Bhubaneswar", type: "AIIMS", branches: ["MBBS", "BDS", "Nursing"], minPercentile: 99.3, location: "Bhubaneswar", fees: "₹1.6K/year", rating: 4.7 },
      { name: "CMC Vellore", type: "Private", branches: ["MBBS", "BDS", "Nursing", "Physiotherapy"], minPercentile: 99.8, location: "Vellore", fees: "₹4.0L/year", rating: 4.9 },
      { name: "JIPMER Puducherry", type: "GFTI", branches: ["MBBS", "BDS", "Nursing", "Pharmacy"], minPercentile: 99.7, location: "Puducherry", fees: "₹1.2L/year", rating: 4.8 },
      { name: "KMC Manipal", type: "Private", branches: ["MBBS", "BDS", "Physiotherapy", "Nursing"], minPercentile: 99.5, location: "Manipal", fees: "₹6.0L/year", rating: 4.7 },
      { name: "AFMC Pune", type: "GFTI", branches: ["MBBS", "Nursing"], minPercentile: 99.4, location: "Pune", fees: "₹1.0L/year", rating: 4.8 },
      { name: "MAMC Delhi", type: "GFTI", branches: ["MBBS", "BDS"], minPercentile: 99.3, location: "Delhi", fees: "₹1.0L/year", rating: 4.7 },
      { name: "KGMU Lucknow", type: "GFTI", branches: ["MBBS", "BDS", "Nursing", "Pharmacy"], minPercentile: 98.5, location: "Lucknow", fees: "₹1.5L/year", rating: 4.5 },
      { name: "SMS Jaipur", type: "GFTI", branches: ["MBBS", "BDS", "Nursing"], minPercentile: 97.5, location: "Jaipur", fees: "₹1.2L/year", rating: 4.4 },
      { name: "GMC Nagpur", type: "GFTI", branches: ["MBBS", "BDS", "Nursing"], minPercentile: 96.0, location: "Nagpur", fees: "₹1.0L/year", rating: 4.3 },
      { name: "BJMC Ahmedabad", type: "GFTI", branches: ["MBBS", "BDS"], minPercentile: 94.0, location: "Ahmedabad", fees: "₹1.0L/year", rating: 4.2 },
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

      const eligibleColleges = collegesData[examType].filter(
        (college) => percentileValue >= college.minPercentile
      );

      setColleges(eligibleColleges);
      setShowResults(true);
      setLoading(false);
    }, 500);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <AcademicCapIcon className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">College Yaari</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl">
            अपने Marks डालो, Percentile जानो, और जानो कौन से IIT, NIT, GFTI, Private Colleges में Admission मिल सकता है!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Exam Selection & Marks Input */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
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
        </div>

        {/* Results Section */}
        {showResults && (
          <div className="space-y-6">
            {/* Percentile Card */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-6 text-white">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm opacity-90">Your Estimated Percentile</p>
                  <p className="text-5xl font-bold">{percentile?.toFixed(2)}%</p>
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-90">Your Score</p>
                  <p className="text-3xl font-bold">{marks} / {examType === "jee" ? "300" : "720"}</p>
                </div>
              </div>
            </div>

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
                            {college.branches.map((branch: string, i: number) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                              >
                                {getBranchIcon(branch)}
                                {branch}
                              </span>
                            ))}
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
                <li>• IITs, NITs, IIITs, GFTIs participate in JoSAA counseling</li>
              </ul>
            </div>
          </div>
        )}

        {/* Features Section */}
        {!showResults && (
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">23 IITs</h3>
              <p className="text-sm text-gray-600">Top Engineering Colleges</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">31 NITs</h3>
              <p className="text-sm text-gray-600">Premier Institutes</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏫</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">25+ GFTIs</h3>
              <p className="text-sm text-gray-600">Govt Funded Institutes</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Top Pvt Colleges</h3>
              <p className="text-sm text-gray-600">BITS, VIT, SRM & More</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}