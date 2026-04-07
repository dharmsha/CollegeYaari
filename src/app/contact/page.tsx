'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, MessageCircle, Mail, MapPin, Send, 
  ChevronRight, Globe, ArrowUpRight 
} from 'lucide-react';

const locations = [
  { city: "Purnia ", address: "First Floor, Shakuntala Sagar, Ct Station Rd, Bihar 854301" },
  { city: "Patna (H.O)", address: "Boring Road, Crossing, Patna, Bihar 800001" },
  { city: "Delhi", address: "Sector 62, Noida, Delhi NCR 201301" },
  { city: "Bangalore", address: "HSR Layout, Sector 7, Bangalore 560102" },
  { city: "Pune", address: "Viman Nagar, Pune 411014" },
  { city: "Kolkata", address: "Salt Lake, Sector V, Kolkata 700091" },
];

export default function ContactPage() {
  const phoneNumber = "8292748995";

  return (
    <div className="bg-[#000] text-white min-h-screen font-sans selection:bg-blue-600">
      
      {/* Top Header - CreatorsMind Style */}
      <section className="pt-24 pb-16 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-blue-500 font-bold uppercase tracking-[0.4em] text-xs mb-4"
          >
            Contact Us
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none"
          >
            Let's Talk <br /> <span className="text-white/20">Business.</span>
          </motion.h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Communication Channels */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6 px-2">Channels</h2>
            
            {/* Call Card */}
            <a href={`tel:${phoneNumber}`} className="group flex items-center justify-between p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                  <Phone size={24} fill="white" />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Helpline</p>
                  <p className="text-2xl font-black tracking-tight">+91 {phoneNumber}</p>
                </div>
              </div>
              <ArrowUpRight className="text-white/20 group-hover:text-white transition-colors" />
            </a>

            {/* WhatsApp Card */}
            <a href={`https://wa.me/${phoneNumber}`} className="group flex items-center justify-between p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#25D366]/50 transition-all">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.2)]">
                  <MessageCircle size={24} fill="white" />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Quick Chat</p>
                  <p className="text-2xl font-black tracking-tight">WhatsApp Us</p>
                </div>
              </div>
              <ArrowUpRight className="text-white/20 group-hover:text-[#25D366] transition-colors" />
            </a>

            {/* Email */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 text-white/40 mb-2">
                <Mail size={18} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Official Support</span>
              </div>
              <p className="text-xl font-bold tracking-tight">support@collegeyaari.com</p>
            </div>
          </div>

          {/* Right: Office Locations (Bento) */}
          <div className="lg:col-span-7">
            <h2 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6 px-2">Our Presence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {locations.map((loc, i) => (
                <div 
                  key={i} 
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-white/20 transition-all cursor-default group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin size={16} className="text-blue-500" />
                    <h4 className="font-bold text-lg tracking-tight group-hover:text-blue-400 transition-colors">{loc.city}</h4>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed font-medium">
                    {loc.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message Form Section - CreatorsMind Dark Panel */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">Send a Query.</h2>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Name" 
                className="bg-white/5 border border-white/10 p-5 rounded-xl outline-none focus:border-blue-600 focus:bg-white/10 transition-all"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-white/5 border border-white/10 p-5 rounded-xl outline-none focus:border-blue-600 focus:bg-white/10 transition-all"
              />
              <textarea 
                rows={4} 
                placeholder="How can we help?" 
                className="md:col-span-2 bg-white/5 border border-white/10 p-5 rounded-xl outline-none focus:border-blue-600 focus:bg-white/10 transition-all resize-none"
              ></textarea>
              
              <button className="md:col-span-2 py-5 bg-white text-black font-black rounded-xl uppercase tracking-[0.2em] text-sm hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-3">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Brand Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
            <div className="w-4 h-4 bg-black rotate-45" />
          </div>
          <span className="text-2xl font-black tracking-tighter italic">CollegeYaari</span>
        </div>
        <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em]">Software Solutions & Development</p>
      </footer>
    </div>
  );
}