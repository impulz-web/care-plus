'use client';

import React from 'react';
import { Phone, Clock, Truck, ShieldAlert } from 'lucide-react';

export default function EmergencyBar() {
  const handleCallEmergency = () => {
    window.location.href = 'tel:+254700111222';
  };

  return (
    <section className="bg-blue-950 text-white relative overflow-hidden py-5 border-y border-blue-900 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Section Left: Crisis Title */}
          <div className="flex items-center gap-3.5 text-center lg:text-left">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shrink-0 shadow-md shadow-red-600/30 animate-pulse">
              <ShieldAlert className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest font-mono text-blue-300 font-bold leading-none mb-1">
                Emergency Dispatch & trauma
              </span>
              <h3 className="text-base sm:text-lg font-bold font-display tracking-tight leading-none text-white">
                Critical Medical Response Hotline
              </h3>
            </div>
          </div>

          {/* Section Center: Specific Points (24/7 & Ambulance) */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4.5 h-4.5 text-blue-400 shrink-0" />
              <div>
                <span className="font-bold block leading-tight text-white">24/7/365 Service</span>
                <span className="text-blue-300 text-[10px] block font-mono">Immediate Triage Team</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4.5 h-4.5 text-blue-400 shrink-0" />
              <div>
                <span className="font-bold block leading-tight text-white">ICU Ambulance Service</span>
                <span className="text-blue-300 text-[10px] block font-mono">Nationwide Dispatch Network</span>
              </div>
            </div>
          </div>

          {/* Section Right: Call CTA */}
          <div className="w-full lg:w-auto text-center">
            <button
              onClick={handleCallEmergency}
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-red-650/15 group"
            >
              <Phone className="w-4 h-4 fill-white animate-bounce group-hover:scale-110 transition-transform" />
              <span>+254 (0) 700 111 222</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
