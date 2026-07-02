'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Laptop, ClipboardCheck, Building2, HeartPulse } from 'lucide-react';

export default function AppointmentProcess() {
  const steps = [
    {
      step: '01',
      icon: Laptop,
      title: 'Book Online',
      description: 'Fill our interactive booking form with your contact details and preferred date/time slot.',
    },
    {
      step: '02',
      icon: ClipboardCheck,
      title: 'Select Doctor',
      description: 'Choose from our verified clinical specialists or select General Consultation for primary triage.',
    },
    {
      step: '03',
      icon: Building2,
      title: 'Visit Clinic',
      description: 'Arrive at your selected city branch. Our support staff will welcome you and handle insurance verification.',
    },
    {
      step: '04',
      icon: HeartPulse,
      title: 'Receive Care',
      description: 'Meet your consultant in a comfortable room, undergo high-precision diagnostics, and get your treatment plan.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs uppercase tracking-widest font-mono text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">
            Patient Pathway
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950 font-display">
            Your Healthcare Journey In Four Easy Steps
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We have streamlined our check-in and consulting procedures to save you time and maximize clinical accuracy during your visit.
          </p>
        </div>

        {/* Timeline Timeline Grid */}
        <div className="relative">
          {/* Horizontal connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-1/8 right-1/8 h-0.5 bg-slate-100 -translate-y-12 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center space-y-4 group"
                >
                  {/* Step Icon Frame with counter */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 border border-slate-100 group-hover:bg-blue-650 group-hover:text-white group-hover:scale-105 transition-all flex items-center justify-center shadow-md">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    {/* Number bubble */}
                    <span className="absolute -top-2.5 -right-2.5 bg-blue-950 text-white font-mono text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                      {item.step}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-1.5 max-w-[240px]">
                    <h3 className="text-base font-bold text-blue-950 font-display">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
