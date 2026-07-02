'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Users, Cpu, HeartHandshake, Banknote, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Users,
      title: 'Experienced Specialists',
      description: 'Our consultants hold certified credentials and have spent decades practicing advanced tertiary clinical care globally and in Kenya.',
    },
    {
      icon: Cpu,
      title: 'Modern Equipment',
      description: 'We invest in advanced digital radiography, multi-slice CT scans, modular operating theaters, and fully automated laboratories.',
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Care',
      description: 'We treat our patients with full dignity, offering tailor-made rehabilitation guidelines, customized diet charts, and clear follow-ups.',
    },
    {
      icon: Banknote,
      title: 'Affordable Healthcare',
      description: 'CarePlus is fully accredited by NHIF/SHA. We maintain highly competitive pricing, clear billing, and direct corporate cover integration.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">
            Clinical Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950 font-display">
            Why Kenyan Families Trust CarePlus
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We are dedicated to uplifting community wellness by making premium tertiary clinical diagnostics and therapies safe, accessible, and financially manageable.
          </p>
        </div>

        {/* Benefits Grid (4 Cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-150 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Text */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-blue-950 font-display">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-1 text-xs text-blue-600 font-bold font-mono uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
