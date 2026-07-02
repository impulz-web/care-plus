'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Baby, Heart, Sparkles, FlaskConical, FileText, ChevronRight, X, ShieldAlert } from 'lucide-react';
import { SERVICES } from '@/lib/data';
import { Service } from '@/types';

// Precise static map of Lucide Icons to prevent runtime lookup failure
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity,
  Baby,
  Heart,
  Sparkles,
  FlaskConical,
  FileText,
};

interface ServicesProps {
  onBookAppointment: () => void;
}

export default function Services({ onBookAppointment }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">
            Clinical Departments
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950 font-display">
            Our Premium Medical Services
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            CarePlus Medical Center offers state-of-the-art diagnostic, preventative, and surgical medical solutions. Explore our core clinics optimized for full patient-care satisfaction across Kenya.
          </p>
        </div>

        {/* Services Grid (6 Cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Activity;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Frame */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-blue-950 group-hover:text-blue-600 transition-colors font-display">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="pt-6 mt-6 border-t border-slate-50">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-950 transition-colors uppercase tracking-wider"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-4.5 h-4.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Detail Popover / Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-blue-950/60 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden z-10 border border-slate-100 p-6 space-y-6"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    {React.createElement(iconMap[selectedService.iconName] || Activity, { className: 'w-5.5 h-5.5' })}
                  </div>
                  <h3 className="text-lg font-bold text-blue-950 font-display">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-1 rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-all"
                  aria-label="Close detail modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold mb-1">
                    Specialized Medical Treatment
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedService.detailedDescription}
                  </p>
                </div>

                <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100/30 space-y-2">
                  <div className="flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-blue-950 font-semibold leading-tight">Accreditation status</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed pl-6">
                    This unit runs in accordance with WHO clinical standards. Authorized by the Kenya Medical Practitioners and Dentists Council (KMPDC).
                  </p>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="pt-4 border-t border-slate-100 flex gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 py-2 text-slate-500 hover:bg-slate-50 border border-slate-200 text-sm font-semibold rounded-lg transition-all"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onBookAppointment();
                  }}
                  className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all shadow-sm"
                >
                  Book Appointment
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
