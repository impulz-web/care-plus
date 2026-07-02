'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">
            Patient Voices
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950 font-display">
            Stories of Recovery and Care from Across Kenya
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover why our patients consistently rate our specialized hospital branches five stars. Here is what they say about their clinical consultation experience.
          </p>
        </div>

        {/* Testimonials Grid (3 Cards) */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => {
            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50/50 p-8 rounded-2xl border border-slate-100 hover:border-blue-100 transition-all flex flex-col justify-between relative group"
              >
                {/* Quote decoration icon */}
                <div className="absolute top-6 right-6 text-blue-100 group-hover:text-blue-200 transition-colors">
                  <Quote className="w-8 h-8 fill-current" />
                </div>

                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400 shrink-0" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-slate-600 leading-relaxed italic">
                    &ldquo;{testimonial.review}&rdquo;
                  </p>
                </div>

                {/* Patient Author details */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                  {/* Portrait Placeholder Initials SVG */}
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-800 font-display font-bold text-xs flex items-center justify-center shrink-0 border border-white shadow-sm">
                    {testimonial.name.split(' ').map((n) => n[0]).join('')}
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-blue-950 font-display">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center gap-1 text-[10px] text-slate-500">
                      <span>{testimonial.serviceReceived}</span>
                      <span>&bull;</span>
                      <div className="flex items-center gap-0.5 text-blue-600 font-medium">
                        <MapPin className="w-2.5 h-2.5" />
                        <span>{testimonial.city}</span>
                      </div>
                    </div>
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
