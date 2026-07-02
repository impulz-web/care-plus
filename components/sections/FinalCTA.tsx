'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ShieldCheck, ChevronRight, CheckCircle } from 'lucide-react';

interface FinalCTAProps {
  onBookAppointment: () => void;
}

export default function FinalCTA({ onBookAppointment }: FinalCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-blue-950 text-white relative overflow-hidden border-t border-blue-900">
      
      {/* Decorative vector paths behind */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90%" cy="10%" r="20%" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="10%" cy="90%" r="15%" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Verification badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-800/40 text-blue-300 font-mono text-xs font-semibold">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          Accredited and Insured Private Healthcare
        </div>

        {/* Content */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-tight">
            Schedule Your Clinical Consultation Today
          </h2>
          <p className="text-sm sm:text-base text-blue-200/80 leading-relaxed">
            Take the first step toward customized clinical recovery and professional medical monitoring. Secure your priority doctor appointment online at any of our 13 fully certified city branches across Kenya.
          </p>
        </div>

        {/* Core benefits list */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Instant confirmation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
            <span>NHIF / SHA covers accepted</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Free cancellation up to 24h</span>
          </div>
        </div>

        {/* Button CTA */}
        <div className="pt-2">
          <button
            onClick={onBookAppointment}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 mx-auto active:scale-[0.98]"
          >
            <Calendar className="w-4.5 h-4.5" />
            <span>Book Appointment Online</span>
            <ChevronRight className="w-4.5 h-4.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
