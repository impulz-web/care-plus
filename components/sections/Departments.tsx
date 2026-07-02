'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Scissors, ScanFace, Baby, HeartHandshake, Accessibility, FlaskConical, HeartPulse, MapPin } from 'lucide-react';
import { DEPARTMENTS } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame: ShieldAlert,
  Scissors,
  ScanFace,
  Baby,
  HeartHandshake,
  Accessibility,
  FlaskConical,
  HeartPulse,
};

export default function Departments() {
  return (
    <section id="departments" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">
            Hospital Directory
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950 font-display">
            Specialized Medical Departments
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            CarePlus is structured into fully-equipped specialized departments offering tailored patient-care pathways. Find services available in your closest Kenyan city branch.
          </p>
        </div>

        {/* Departments Responsive Grid (8 cards) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEPARTMENTS.map((dept, index) => {
            const IconComponent = iconMap[dept.iconName] || FlaskConical;
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Department Icon */}
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center shadow-inner">
                    <IconComponent className="w-5.5 h-5.5" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-blue-950 group-hover:text-blue-600 transition-colors font-display">
                      {dept.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {dept.description}
                    </p>
                  </div>
                </div>

                {/* Locations list in small font */}
                <div className="mt-6 pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-1.5 text-blue-600 mb-1.5">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wider font-mono">Available At</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {dept.branches.map((branch) => (
                      <span
                        key={branch}
                        className="text-[9px] font-medium px-2 py-0.5 rounded bg-slate-50 border border-slate-100 text-slate-600"
                      >
                        {branch}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
