'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Award, Star, Clock, ChevronRight, User } from 'lucide-react';
import { DOCTORS } from '@/lib/data';

interface DoctorsProps {
  onBookAppointment: (doctorId: string) => void;
}

export default function Doctors({ onBookAppointment }: DoctorsProps) {
  return (
    <section id="doctors" className="py-20 lg:py-28 bg-slate-50/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">
            Medical Faculty
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950 font-display">
            Meet Our Board-Certified Specialists
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our medical consultants hold board certifications and international training across clinical oncology, pediatrics, cardiothoracic sciences, and internal medicine.
          </p>
        </div>

        {/* Doctors Grid (4 Cards) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DOCTORS.map((doctor, index) => {
            return (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-slate-100 hover:border-blue-150 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Doctor Portrait SVG Frame */}
                  <div className="relative h-56 bg-gradient-to-b from-blue-50/50 to-blue-100/30 flex items-center justify-center overflow-hidden border-b border-slate-100">
                    {/* Background medical grid pattern */}
                    <div className="absolute inset-0 opacity-15">
                      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                        <defs>
                          <pattern id="grid-doc" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect width="20" height="20" fill="none" />
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2563EB" strokeWidth="0.5" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-doc)" />
                      </svg>
                    </div>

                    {/* Specialized SVG Doctor Silhouette Graphic with Accents */}
                    <svg className="w-28 h-28 text-blue-600/80 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="60" cy="60" r="54" fill="white" stroke="#DBEAFE" strokeWidth="2" />
                      {/* Doctor head & shoulders */}
                      <path d="M60 48C66.6274 48 72 42.6274 72 36C72 29.3726 66.6274 24 60 24C53.3726 24 48 29.3726 48 36C48 42.6274 53.3726 48 60 48Z" fill="#3B82F6" opacity="0.8" />
                      <path d="M28 85C28 71.1929 39.1929 60 53 60H67C80.8071 60 92 71.1929 92 85V93H28V85Z" fill="#1E3A8A" />
                      {/* Medical collar/stethoscope lines */}
                      <path d="M52 60L54 70L60 74L66 70L68 60" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M46 64C46 76 74 76 74 64" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
                      {/* Stethoscope chestpiece */}
                      <circle cx="60" cy="74" r="5" fill="#3B82F6" stroke="white" strokeWidth="1" />
                    </svg>

                    {/* Experience Badge */}
                    <div className="absolute bottom-3 left-3 bg-white px-2.5 py-1 rounded-lg shadow-sm border border-slate-100 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-blue-600" />
                      <span className="text-[10px] font-bold text-blue-950 font-mono">
                        {doctor.experience} Yrs Exp
                      </span>
                    </div>

                    {/* Star Badge */}
                    <div className="absolute top-3 right-3 bg-emerald-500 text-white px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider">
                      Verified
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-base font-bold text-blue-950 font-display leading-tight group-hover:text-blue-600 transition-colors">
                        {doctor.name}
                      </h3>
                      <p className="text-xs text-blue-600 font-medium tracking-wide">
                        {doctor.specialty}
                      </p>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {doctor.bio}
                    </p>

                    {/* Education and Languages */}
                    <div className="pt-3 border-t border-slate-50 space-y-1.5 text-[10px] text-slate-500">
                      <div>
                        <strong className="text-blue-950 font-sans block">Education:</strong>
                        <span className="leading-snug">{doctor.education}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <strong className="text-blue-950 font-sans">Languages:</strong>
                        <span>{doctor.languages.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="p-6 pt-0 border-t border-slate-50 mt-auto bg-slate-50/30">
                  <div className="py-2.5 flex items-center gap-1.5 text-[11px] text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="font-medium truncate">{doctor.availability}</span>
                  </div>

                  <button
                    onClick={() => onBookAppointment(doctor.id)}
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-all shadow-sm flex items-center justify-center gap-1"
                  >
                    <span>Book Appointment</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
