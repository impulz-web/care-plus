'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Heart, ShieldCheck, ArrowUpRight, User, Stethoscope, ChevronRight, Activity } from 'lucide-react';

interface HeroProps {
  onBookAppointment: () => void;
}

export default function Hero({ onBookAppointment }: HeroProps) {
  const handleScrollToDoctors = () => {
    const section = document.getElementById('doctors');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white overflow-hidden">
      {/* Absolute Decorative Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E2E8F0" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Medical Greeting Text */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-mono text-xs font-semibold"
            >
              <ShieldCheck className="w-4 h-4 shrink-0" />
              Trusted Healthcare Service in Kenya
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-blue-950 font-display leading-[1.1]"
            >
              Excellence in <span className="text-blue-600">Clinical Care</span> & Compassion
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              CarePlus Medical Center delivers comprehensive, patient-centered medical solutions across Kenya. We combine highly experienced specialists, advanced clinical technology, and affordable payment options to safeguard your family&apos;s health.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={onBookAppointment}
                className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-1.5 active:scale-[0.98]"
              >
                Book Appointment
                <ChevronRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleScrollToDoctors}
                className="w-full sm:w-auto px-7 py-3.5 border border-slate-200 text-blue-950 hover:bg-slate-50 font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5"
              >
                Find a Doctor
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </button>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>SHA / NHIF Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>13 Branches Nationwide</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>24/7 Trauma Teams</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Layered Cards Healthcare Illustration */}
          <div className="lg:col-span-6 relative flex justify-center items-center h-[420px] sm:h-[480px]">
            {/* Background Blue Aura Circle */}
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-blue-100/50 rounded-full blur-3xl -z-10" />

            {/* Layer 1: Doctor Profile Card (Top Left) */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute top-10 left-4 sm:left-12 w-60 bg-white p-4 rounded-xl shadow-lg border border-slate-100/80 hover:shadow-xl transition-all z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-blue-950 font-display">Dr. Arthur Mwangi</h4>
                  <p className="text-[10px] text-blue-600 font-medium">Senior Cardiologist</p>
                  <div className="mt-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] text-slate-500 font-mono">Available Today</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Layer 2: Appointment Schedule Card (Top Right) */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute top-16 right-4 sm:right-12 w-56 bg-white p-4 rounded-xl shadow-lg border border-slate-100/80 hover:shadow-xl transition-all z-10"
            >
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="text-[11px] font-bold text-blue-950 font-display uppercase tracking-wider">Schedule</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[10px] p-1.5 bg-slate-50 rounded border border-slate-100">
                  <span className="text-slate-600 font-medium">Lab Screening</span>
                  <span className="text-blue-600 font-mono">09:00 AM</span>
                </div>
                <div className="flex justify-between items-center text-[10px] p-1.5 bg-blue-50/50 rounded border border-blue-100/40">
                  <span className="text-blue-950 font-bold">Consultation</span>
                  <span className="text-blue-600 font-mono">11:30 AM</span>
                </div>
              </div>
            </motion.div>

            {/* Layer 3: Patient Records Card (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute bottom-12 left-6 sm:left-16 w-52 bg-white p-4 rounded-xl shadow-lg border border-slate-100/80 hover:shadow-xl transition-all z-15"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <User className="w-4 h-4 text-blue-600" />
                <span className="text-[11px] font-bold text-blue-950 font-display uppercase tracking-wider">Patient ID</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-1 border-b border-slate-100">
                <span className="text-slate-500 text-[10px]">Blood Type</span>
                <span className="font-bold text-red-600 font-mono">A+</span>
              </div>
              <div className="flex justify-between items-center text-xs pt-1">
                <span className="text-slate-500 text-[10px]">Allergies</span>
                <span className="font-bold text-slate-700 text-[10px]">Penicillin</span>
              </div>
            </motion.div>

            {/* Layer 4: Health Metrics Card (Bottom Right / Center-ish) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute bottom-8 right-6 sm:right-16 w-56 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-all z-20"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-bold text-blue-950 font-display uppercase tracking-wider">Vitals</span>
                </div>
                <span className="text-[9px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-bold font-mono">Stable</span>
              </div>
              <div className="text-slate-400">
                {/* SVG Live ECG Line Animation */}
                <svg className="w-full h-8" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path
                    d="M0,15 L30,15 L35,10 L40,25 L45,2 L50,18 L55,15 L100,15"
                    className="stroke-blue-600"
                    strokeDasharray="200"
                    strokeDashoffset="0"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="200;0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              </div>
              <div className="flex justify-between items-center text-[10px] mt-1.5 font-mono text-slate-500">
                <span>Heart Rate: 72 BPM</span>
                <span>BP: 120/80</span>
              </div>
            </motion.div>

            {/* Tiny decoration icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white z-0"
            >
              <Heart className="w-5 h-5 fill-white" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
