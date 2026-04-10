// src/components/Cutttof.tsx

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  TrophyIcon,
  MapPinIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/outline";

// Animation variants
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

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function CollegeYaariPage() {
  const [examType, setExamType] = useState<"jee" | "neet">("jee");
  const [marks, setMarks] = useState<string>("");
  const [percentile, setPercentile] = useState<number | null>(null);
  const [rank, setRank] = useState<number | null>(null);
  const [colleges, setColleges] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [grade, setGrade] = useState<string>("");

  // Get Rank based on percentile
  const getRank = (percentile: number, exam: string) => {
    const totalCandidates = exam === "jee" ? 1200000 : 1800000;
    const rankValue = Math.floor(((100 - percentile) / 100) * totalCandidates) + 1;
    return rankValue;
  };

  // Format rank display
  const formatRank = (rank: number): string => {
    if (rank <= 10) return rank.toString();
    if (rank <= 100) return rank.toString();
    if (rank <= 1000) {
      if (rank <= 100) return rank.toString();
      return `${Math.floor(rank / 100)}${rank % 100 === 0 ? '00' : '00'}+`;
    }
    if (rank <= 10000) {
      return `${Math.floor(rank / 1000)}K+`;
    }
    if (rank <= 100000) {
      return `${Math.floor(rank / 1000)}K+`;
    }
    if (rank <= 1000000) {
      return `${(rank / 1000).toFixed(0)}K+`;
    }
    return `${(rank / 1000).toFixed(0)}K+`;
  };

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
      if (marks >= 680) return "A++ (Excellent)";
      if (marks >= 600) return "A+ (Outstanding)";
      if (marks >= 500) return "A (Very Good)";
      if (marks >= 400) return "B+ (Good)";
      if (marks >= 300) return "B (Average)";
      if (marks >= 200) return "C (Needs Improvement)";
      return "D (Low Score)";
    }
  };

  // JEE Marks to Percentile Mapping
  const getJEEPercentile = (marks: number) => {
    if (marks >= 280) return 99.99;
    if (marks >= 250) return 99.9;
    if (marks >= 220) return 99.7;
    if (marks >= 200) return 99.5;
    if (marks >= 180) return 99.0;
    if (marks >= 160) return 98.0;
    if (marks >= 150) return 97.5;
    if (marks >= 140) return 96.5;
    if (marks >= 130) return 95.5;
    if (marks >= 120) return 95.0;
    if (marks >= 110) return 94.0;
    if (marks >= 100) return 92.0;
    if (marks >= 90) return 90.0;
    if (marks >= 80) return 88.0;
    if (marks >= 70) return 85.0;
    if (marks >= 60) return 82.0;
    if (marks >= 50) return 78.0;
    if (marks >= 40) return 75.0;
    if (marks >= 30) return 70.0;
    if (marks >= 20) return 65.0;
    return 50.0;
  };

  // NEET Marks to Percentile Mapping
  const getNEETPercentile = (marks: number) => {
    if (marks >= 710) return 99.99;
    if (marks >= 680) return 99.9;
    if (marks >= 650) return 99.5;
    if (marks >= 620) return 99.0;
    if (marks >= 600) return 98.5;
    if (marks >= 580) return 98.0;
    if (marks >= 550) return 96.0;
    if (marks >= 520) return 94.0;
    if (marks >= 500) return 92.0;
    if (marks >= 480) return 90.0;
    if (marks >= 450) return 87.0;
    if (marks >= 420) return 84.0;
    if (marks >= 400) return 80.0;
    if (marks >= 380) return 76.0;
    if (marks >= 350) return 72.0;
    if (marks >= 320) return 67.0;
    if (marks >= 300) return 62.0;
    if (marks >= 280) return 57.0;
    if (marks >= 250) return 50.0;
    return 35.0;
  };

  // Complete College Database - Expanded
  const collegesData = {
    jee: [
      // Top IITs (23 IITs)
      { name: "IIT Bombay", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Aerospace", "Chemical", "Metallurgy"], minPercentile: 99.9, minRank: 1000, location: "Mumbai", fees: "₹2.5L/year", rating: 4.9 },
      { name: "IIT Delhi", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Chemical", "Textile", "Biotech", "Mathematics"], minPercentile: 99.9, minRank: 1200, location: "Delhi", fees: "₹2.4L/year", rating: 4.9 },
      { name: "IIT Madras", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Aerospace", "Ocean", "Civil", "Metallurgy"], minPercentile: 99.8, minRank: 1500, location: "Chennai", fees: "₹2.3L/year", rating: 4.9 },
      { name: "IIT Kanpur", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Aerospace", "Chemical", "Materials"], minPercentile: 99.8, minRank: 1800, location: "Kanpur", fees: "₹2.2L/year", rating: 4.8 },
      { name: "IIT Kharagpur", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Metallurgy", "Mining", "Civil", "Architecture"], minPercentile: 99.7, minRank: 2500, location: "Kharagpur", fees: "₹2.2L/year", rating: 4.8 },
      { name: "IIT Roorkee", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Architecture", "Chemical", "Paper Tech"], minPercentile: 99.5, minRank: 3500, location: "Roorkee", fees: "₹2.2L/year", rating: 4.7 },
      { name: "IIT Guwahati", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Design", "Chemical", "Biotech"], minPercentile: 99.3, minRank: 4500, location: "Guwahati", fees: "₹2.2L/year", rating: 4.7 },
      { name: "IIT Hyderabad", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "AI", "Biomedical", "Materials"], minPercentile: 99.0, minRank: 5500, location: "Hyderabad", fees: "₹2.2L/year", rating: 4.6 },
      { name: "IIT Indore", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Astrophysics", "Mathematics"], minPercentile: 98.8, minRank: 6500, location: "Indore", fees: "₹2.2L/year", rating: 4.6 },
      { name: "IIT BHU Varanasi", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Mining", "Ceramic", "Pharma"], minPercentile: 98.5, minRank: 8000, location: "Varanasi", fees: "₹2.2L/year", rating: 4.5 },
      { name: "IIT Patna", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Chemical"], minPercentile: 97.5, minRank: 12000, location: "Patna", fees: "₹2.2L/year", rating: 4.4 },
      { name: "IIT Ropar", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Metallurgy"], minPercentile: 97.0, minRank: 13500, location: "Rupnagar", fees: "₹2.2L/year", rating: 4.4 },
      { name: "IIT Mandi", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Bioengineering"], minPercentile: 96.5, minRank: 15000, location: "Mandi", fees: "₹2.2L/year", rating: 4.3 },
      { name: "IIT Bhubaneswar", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Metallurgy"], minPercentile: 96.0, minRank: 17000, location: "Bhubaneswar", fees: "₹2.2L/year", rating: 4.3 },
      { name: "IIT Gandhinagar", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Materials"], minPercentile: 95.5, minRank: 19000, location: "Gandhinagar", fees: "₹2.2L/year", rating: 4.3 },
      { name: "IIT Jodhpur", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "AI"], minPercentile: 95.0, minRank: 21000, location: "Jodhpur", fees: "₹2.2L/year", rating: 4.2 },
      { name: "IIT Dhanbad (ISM)", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Mining", "Petroleum", "Civil"], minPercentile: 94.5, minRank: 23000, location: "Dhanbad", fees: "₹2.2L/year", rating: 4.2 },
      { name: "IIT Bhilai", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil"], minPercentile: 93.0, minRank: 28000, location: "Bhilai", fees: "₹2.2L/year", rating: 4.1 },
      { name: "IIT Goa", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical"], minPercentile: 92.5, minRank: 30000, location: "Goa", fees: "₹2.2L/year", rating: 4.1 },
      { name: "IIT Palakkad", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical"], minPercentile: 92.0, minRank: 32000, location: "Palakkad", fees: "₹2.2L/year", rating: 4.0 },
      { name: "IIT Tirupati", type: "IIT", branches: ["Computer Science", "Electrical", "Mechanical"], minPercentile: 91.5, minRank: 34000, location: "Tirupati", fees: "₹2.2L/year", rating: 4.0 },
      
      // Top NITs (31 NITs)
      { name: "NIT Trichy", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Electronics", "Instrumentation", "Production"], minPercentile: 98.5, minRank: 3500, location: "Tiruchirappalli", fees: "₹1.8L/year", rating: 4.7 },
      { name: "NIT Surathkal", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Chemical", "Electronics", "Civil", "IT"], minPercentile: 98.0, minRank: 4500, location: "Mangalore", fees: "₹1.7L/year", rating: 4.6 },
      { name: "NIT Warangal", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Electronics", "Metallurgy", "Biotech"], minPercentile: 97.5, minRank: 5500, location: "Warangal", fees: "₹1.7L/year", rating: 4.6 },
      { name: "NIT Calicut", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Electronics", "Chemical"], minPercentile: 97.0, minRank: 7000, location: "Calicut", fees: "₹1.7L/year", rating: 4.5 },
      { name: "NIT Rourkela", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Metallurgy", "Biomedical"], minPercentile: 96.5, minRank: 8500, location: "Rourkela", fees: "₹1.7L/year", rating: 4.5 },
      { name: "NIT Durgapur", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Chemical", "Biotech"], minPercentile: 96.0, minRank: 10000, location: "Durgapur", fees: "₹1.7L/year", rating: 4.4 },
      { name: "NIT Allahabad", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "IT", "Biotech"], minPercentile: 95.5, minRank: 11500, location: "Allahabad", fees: "₹1.7L/year", rating: 4.4 },
      { name: "NIT Kurukshetra", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Electronics"], minPercentile: 95.0, minRank: 13000, location: "Kurukshetra", fees: "₹1.7L/year", rating: 4.3 },
      { name: "NIT Jamshedpur", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Metallurgy", "Production"], minPercentile: 94.5, minRank: 14500, location: "Jamshedpur", fee: "₹1.7L/year", rating: 4.3 },
      { name: "NIT Patna", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Electronics"], minPercentile: 94.0, minRank: 16000, location: "Patna", fees: "₹1.7L/year", rating: 4.2 },
      { name: "NIT Silchar", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Electronics"], minPercentile: 93.5, minRank: 17500, location: "Silchar", fees: "₹1.7L/year", rating: 4.2 },
      { name: "NIT Hamirpur", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Electronics"], minPercentile: 93.0, minRank: 19000, location: "Hamirpur", fees: "₹1.7L/year", rating: 4.2 },
      { name: "NIT Nagpur", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Metallurgy"], minPercentile: 92.5, minRank: 20500, location: "Nagpur", fees: "₹1.7L/year", rating: 4.1 },
      { name: "NIT Agartala", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Electronics"], minPercentile: 92.0, minRank: 22000, location: "Agartala", fees: "₹1.7L/year", rating: 4.1 },
      { name: "NIT Puducherry", type: "NIT", branches: ["Computer Science", "Electrical", "Mechanical", "Civil"], minPercentile: 91.5, minRank: 23500, location: "Puducherry", fees: "₹1.7L/year", rating: 4.0 },
      
      // Top IIITs
      { name: "IIIT Hyderabad", type: "IIIT", branches: ["Computer Science", "Electronics", "AI/ML", "Data Science", "CSE+Design"], minPercentile: 98.0, minRank: 4500, location: "Hyderabad", fees: "₹3.0L/year", rating: 4.8 },
      { name: "IIIT Bangalore", type: "IIIT", branches: ["Computer Science", "Data Science", "AI/ML", "Electronics"], minPercentile: 97.5, minRank: 6000, location: "Bangalore", fees: "₹3.0L/year", rating: 4.7 },
      { name: "IIIT Delhi", type: "IIIT", branches: ["Computer Science", "Electronics", "AI/ML", "CSE+Social Sciences"], minPercentile: 97.0, minRank: 7500, location: "Delhi", fees: "₹2.8L/year", rating: 4.7 },
      { name: "IIIT Allahabad", type: "IIIT", branches: ["IT", "Computer Science", "Electronics", "Biotech"], minPercentile: 96.0, minRank: 10000, location: "Allahabad", fees: "₹2.5L/year", rating: 4.5 },
      { name: "IIIT Gwalior", type: "IIIT", branches: ["Computer Science", "IT", "Electronics"], minPercentile: 95.5, minRank: 11500, location: "Gwalior", fees: "₹2.5L/year", rating: 4.4 },
      { name: "IIIT Jabalpur", type: "IIIT", branches: ["Computer Science", "Electronics", "IT"], minPercentile: 95.0, minRank: 13000, location: "Jabalpur", fees: "₹2.5L/year", rating: 4.3 },
      
      // Top GFTIs
      { name: "DTU Delhi", type: "GFTI", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Chemical", "IT", "Biotech"], minPercentile: 97.0, minRank: 7500, location: "Delhi", fees: "₹2.2L/year", rating: 4.5 },
      { name: "NSUT Delhi", type: "GFTI", branches: ["Computer Science", "Electronics", "Mechanical", "Electrical", "IT", "AI"], minPercentile: 96.5, minRank: 9000, location: "Delhi", fees: "₹2.1L/year", rating: 4.4 },
      { name: "IGDTUW Delhi", type: "GFTI", branches: ["Computer Science", "IT", "Electronics", "Mechanical", "Civil"], minPercentile: 95.0, minRank: 13000, location: "Delhi", fees: "₹1.8L/year", rating: 4.3 },
      { name: "PEC Chandigarh", type: "GFTI", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Electronics"], minPercentile: 96.0, minRank: 10500, location: "Chandigarh", fees: "₹2.0L/year", rating: 4.4 },
      { name: "IIEST Shibpur", type: "GFTI", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Metallurgy"], minPercentile: 95.5, minRank: 12000, location: "Howrah", fees: "₹1.8L/year", rating: 4.3 },
      { name: "JMI New Delhi", type: "GFTI", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Electronics"], minPercentile: 94.0, minRank: 16000, location: "Delhi", fees: "₹1.5L/year", rating: 4.2 },
      { name: "BHU Varanasi", type: "GFTI", branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Chemical"], minPercentile: 95.0, minRank: 13500, location: "Varanasi", fees: "₹1.5L/year", rating: 4.3 },
      { name: "AMU Aligarh", type: "GFTI", branches: ["Computer Science", "Electrical", "Mechanical", "Civil", "Electronics"], minPercentile: 93.0, minRank: 19000, location: "Aligarh", fees: "₹1.5L/year", rating: 4.1 },
      
      // Top Private Colleges
      { name: "BITS Pilani", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Chemical", "Civil", "Manufacturing"], minPercentile: 85.0, minRank: 180000, location: "Pilani", fees: "₹5.5L/year", rating: 4.9 },
      { name: "BITS Goa", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Chemical"], minPercentile: 84.0, minRank: 200000, location: "Goa", fees: "₹5.5L/year", rating: 4.8 },
      { name: "BITS Hyderabad", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Chemical"], minPercentile: 83.0, minRank: 220000, location: "Hyderabad", fees: "₹5.5L/year", rating: 4.8 },
      { name: "VIT Vellore", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "IT", "Biotech", "Chemical"], minPercentile: 75.0, minRank: 300000, location: "Vellore", fees: "₹3.5L/year", rating: 4.6 },
      { name: "VIT Chennai", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "IT"], minPercentile: 74.0, minRank: 320000, location: "Chennai", fees: "₹3.5L/year", rating: 4.5 },
      { name: "SRM Chennai", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "IT", "Biotech"], minPercentile: 70.0, minRank: 350000, location: "Chennai", fees: "₹3.0L/year", rating: 4.4 },
      { name: "Manipal Institute", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "IT"], minPercentile: 72.0, minRank: 330000, location: "Manipal", fees: "₹4.0L/year", rating: 4.5 },
      { name: "LPU Jalandhar", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "IT", "Aerospace"], minPercentile: 60.0, minRank: 500000, location: "Jalandhar", fees: "₹2.5L/year", rating: 4.3 },
      { name: "Thapar University", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "Chemical"], minPercentile: 78.0, minRank: 260000, location: "Patiala", fees: "₹3.8L/year", rating: 4.4 },
      { name: "KIIT Bhubaneswar", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "IT"], minPercentile: 65.0, minRank: 450000, location: "Bhubaneswar", fees: "₹3.0L/year", rating: 4.3 },
      { name: "Amrita University", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "AI"], minPercentile: 73.0, minRank: 310000, location: "Coimbatore", fees: "₹3.2L/year", rating: 4.4 },
      { name: "RVCE Bangalore", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "IT"], minPercentile: 80.0, minRank: 240000, location: "Bangalore", fees: "₹3.5L/year", rating: 4.5 },
      { name: "MS Ramaiah Bangalore", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil"], minPercentile: 77.0, minRank: 270000, location: "Bangalore", fees: "₹3.0L/year", rating: 4.4 },
      { name: "PES University", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil"], minPercentile: 79.0, minRank: 250000, location: "Bangalore", fees: "₹3.5L/year", rating: 4.4 },
      { name: "Jain University", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "AI/ML"], minPercentile: 68.0, minRank: 400000, location: "Bangalore", fees: "₹2.8L/year", rating: 4.2 },
      { name: "Chitkara University", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil"], minPercentile: 62.0, minRank: 480000, location: "Punjab", fees: "₹2.2L/year", rating: 4.1 },
      { name: "Galgotias University", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil"], minPercentile: 58.0, minRank: 550000, location: "Greater Noida", fees: "₹2.0L/year", rating: 4.0 },
      { name: "Sharda University", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil"], minPercentile: 55.0, minRank: 600000, location: "Greater Noida", fees: "₹2.2L/year", rating: 4.0 },
      { name: "Amity University", type: "Private", branches: ["Computer Science", "Electronics", "Mechanical", "Civil", "IT"], minPercentile: 52.0, minRank: 650000, location: "Noida", fees: "₹3.0L/year", rating: 4.1 },
    ],
    neet: [
      // Top AIIMS
      { name: "AIIMS Delhi", type: "AIIMS", branches: ["MBBS", "BDS", "Nursing", "Paramedical"], minPercentile: 99.99, minRank: 50, location: "Delhi", fees: "₹1.6K/year", rating: 4.9 },
      { name: "AIIMS Jodhpur", type: "AIIMS", branches: ["MBBS", "BDS", "Nursing"], minPercentile: 99.95, minRank: 150, location: "Jodhpur", fees: "₹1.6K/year", rating: 4.8 },
      { name: "AIIMS Bhopal", type: "AIIMS", branches: ["MBBS", "BDS", "Nursing"], minPercentile: 99.93, minRank: 200, location: "Bhopal", fees: "₹1.6K/year", rating: 4.8 },
      { name: "AIIMS Bhubaneswar", type: "AIIMS", branches: ["MBBS", "BDS", "Nursing"], minPercentile: 99.90, minRank: 250, location: "Bhubaneswar", fees: "₹1.6K/year", rating: 4.8 },
      { name: "AIIMS Patna", type: "AIIMS", branches: ["MBBS", "BDS", "Nursing"], minPercentile: 99.88, minRank: 300, location: "Patna", fees: "₹1.6K/year", rating: 4.7 },
      { name: "AIIMS Raipur", type: "AIIMS", branches: ["MBBS", "BDS", "Nursing"], minPercentile: 99.85, minRank: 350, location: "Raipur", fees: "₹1.6K/year", rating: 4.7 },
      { name: "AIIMS Rishikesh", type: "AIIMS", branches: ["MBBS", "BDS", "Nursing"], minPercentile: 99.83, minRank: 400, location: "Rishikesh", fees: "₹1.6K/year", rating: 4.7 },
      
      // Top Government Medical Colleges
      { name: "CMC Vellore", type: "Private", branches: ["MBBS", "BDS", "Nursing", "Paramedical"], minPercentile: 99.98, minRank: 100, location: "Vellore", fees: "₹4.0L/year", rating: 4.9 },
      { name: "JIPMER Puducherry", type: "GFTI", branches: ["MBBS", "BDS", "Nursing", "Paramedical"], minPercentile: 99.97, minRank: 120, location: "Puducherry", fees: "₹1.2L/year", rating: 4.9 },
      { name: "KGMU Lucknow", type: "Govt", branches: ["MBBS", "BDS", "Nursing"], minPercentile: 99.90, minRank: 500, location: "Lucknow", fees: "₹1.5L/year", rating: 4.7 },
      { name: "SMS Jaipur", type: "Govt", branches: ["MBBS", "BDS", "Nursing"], minPercentile: 99.85, minRank: 1500, location: "Jaipur", fees: "₹1.2L/year", rating: 4.6 },
      { name: "BMCH Bhopal", type: "Govt", branches: ["MBBS", "BDS"], minPercentile: 99.80, minRank: 3000, location: "Bhopal", fees: "₹1.0L/year", rating: 4.5 },
      { name: "MAMC Delhi", type: "Govt", branches: ["MBBS", "BDS"], minPercentile: 99.95, minRank: 180, location: "Delhi", fees: "₹1.0L/year", rating: 4.8 },
      { name: "GMC Mumbai", type: "Govt", branches: ["MBBS", "BDS"], minPercentile: 99.92, minRank: 220, location: "Mumbai", fees: "₹1.2L/year", rating: 4.7 },
      { name: "CMC Ludhiana", type: "Private", branches: ["MBBS", "BDS"], minPercentile: 98.50, minRank: 8000, location: "Ludhiana", fees: "₹8.0L/year", rating: 4.4 },
      
      // Private Medical Colleges
      { name: "JNMC Wardha", type: "Private", branches: ["MBBS", "BDS"], minPercentile: 97.0, minRank: 15000, location: "Wardha", fees: "₹15L/year", rating: 4.3 },
      { name: "KIMS Bangalore", type: "Private", branches: ["MBBS"], minPercentile: 95.0, minRank: 25000, location: "Bangalore", fees: "₹18L/year", rating: 4.2 },
      { name: "DY Patil Pune", type: "Private", branches: ["MBBS", "BDS"], minPercentile: 96.0, minRank: 20000, location: "Pune", fees: "₹20L/year", rating: 4.2 },
      { name: "SRM Medical College", type: "Private", branches: ["MBBS", "BDS"], minPercentile: 94.0, minRank: 30000, location: "Chennai", fees: "₹22L/year", rating: 4.1 },
      { name: "Manipal Medical College", type: "Private", branches: ["MBBS"], minPercentile: 96.5, minRank: 18000, location: "Manipal", fees: "₹20L/year", rating: 4.3 },
      { name: "Bharati Vidyapeeth Pune", type: "Private", branches: ["MBBS", "BDS"], minPercentile: 93.0, minRank: 35000, location: "Pune", fees: "₹16L/year", rating: 4.0 },
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
      const rankValue = getRank(percentileValue, examType);
      setRank(rankValue);
      const gradeValue = getGrade(marksNum, examType);
      setGrade(gradeValue);

      const eligibleColleges = collegesData[examType].filter(
        (college) => rankValue <= college.minRank
      );

      setColleges(eligibleColleges);
      setShowResults(true);
      setLoading(false);
    }, 800);
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case "IIT": return "bg-gradient-to-r from-orange-500 to-red-500";
      case "NIT": return "bg-gradient-to-r from-blue-600 to-blue-800";
      case "IIIT": return "bg-gradient-to-r from-purple-500 to-purple-700";
      case "GFTI": return "bg-gradient-to-r from-green-600 to-emerald-600";
      case "Private": return "bg-gradient-to-r from-pink-500 to-rose-500";
      case "AIIMS": return "bg-gradient-to-r from-red-600 to-red-800";
      case "Govt": return "bg-gradient-to-r from-teal-500 to-teal-700";
      default: return "bg-gradient-to-r from-gray-500 to-gray-700";
    }
  };

  const getBranchIcon = (branch: string) => {
    if (branch.includes("Computer") || branch.includes("AI") || branch.includes("Data")) 
      return <ComputerDesktopIcon className="w-4 h-4" />;
    if (branch.includes("Electrical") || branch.includes("Electronics")) 
      return <BoltIcon className="w-4 h-4" />;
    if (branch.includes("Medical") || branch.includes("MBBS") || branch.includes("BDS")) 
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
            अपने Marks डालो, Percentile जानो, Rank देखो, और जानो कौन से Colleges में Admission मिल सकता है!
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
            {/* Score Card with Grade & Rank */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={scaleUp}
              className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-6 text-white"
            >
              <div className="grid md:grid-cols-4 gap-6">
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
                  <p className="text-sm opacity-90">Estimated Rank</p>
                  <div className="flex items-center justify-center gap-2">
                    <TrophyIcon className="w-8 h-8 text-yellow-300" />
                    <p className="text-4xl font-bold">
                      #{rank && formatRank(rank)}
                    </p>
                  </div>
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
                  <p className="text-gray-500 text-lg">No colleges found for your rank.</p>
                  <p className="text-gray-400">Try improving your score for better options!</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {colleges.map((college, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <div className={getTypeColor(college.type)}>
                        <div className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold text-white">{college.name}</h3>
                              <div className="flex items-center gap-1 mt-1">
                                <MapPinIcon className="w-3 h-3 text-white/80" />
                                <p className="text-white text-xs opacity-90">{college.location}</p>
                              </div>
                            </div>
                            <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full font-semibold">
                              {college.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center gap-1">
                            <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="font-semibold">{college.rating}</span>
                            <span className="text-gray-400 text-sm">/5</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600 font-semibold">
                            <CurrencyRupeeIcon className="w-4 h-4" />
                            {college.fees}
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                            <ClipboardDocumentListIcon className="w-4 h-4" />
                            Top Branches:
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
                        
                        <div className="pt-3 border-t space-y-1">
                          <p className="text-sm text-gray-500">
                            Required Rank: <span className="font-semibold text-blue-600">#{formatRank(college.minRank)}</span>
                          </p>
                          <p className="text-sm text-gray-500">
                            Required Percentile: <span className="font-semibold text-blue-600">{college.minPercentile}%</span>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Tips Section */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="font-bold text-yellow-800 mb-3 flex items-center gap-2 text-lg">
                <ChartBarIcon className="w-5 h-5" />
                💡 Expert Tips for Counseling:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-700">
                <ul className="space-y-2">
                  <li>✓ Rank and Percentile are approximate based on previous year trends</li>
                  <li>✓ Check official counseling websites (JoSAA, CSAB, MCC) for exact cutoffs</li>
                  <li>✓ Consider state quota, home state, and reservation benefits</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Apply for multiple colleges through different counseling rounds</li>
                  <li>✓ For JEE: ~12 Lakh candidates appear</li>
                  <li>✓ For NEET: ~18 Lakh candidates appear</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        {!showResults && (
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            {[
              { icon: "🏛️", title: "23 IITs", desc: "India's Premier Institutes", color: "from-orange-500 to-red-500", count: "23+ Campuses" },
              { icon: "📚", title: "31 NITs", desc: "Top Technical Universities", color: "from-blue-500 to-cyan-500", count: "Pan India Presence" },
              { icon: "💻", title: "26 IIITs", desc: "IT & Computer Science", color: "from-purple-500 to-pink-500", count: "Emerging Tech Hubs" },
              { icon: "🏫", title: "50+ GFTIs", desc: "Govt Funded Institutes", color: "from-green-500 to-emerald-500", count: "Quality Education" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br ${item.color} rounded-xl p-6 text-center text-white shadow-lg cursor-pointer`}
              >
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                <p className="text-sm opacity-90 mb-2">{item.desc}</p>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{item.count}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}