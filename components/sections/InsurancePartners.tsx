'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartPulse, CreditCard, Landmark, Check } from 'lucide-react';
import { INSURANCE_PARTNERS } from '@/lib/data';

export default function InsurancePartners() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Explanatory Column */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest font-mono text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full inline-block">
              Corporate Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950 font-display">
              Accepted Insurance Plans & Partners
            </h2>
            <div className="h-1.5 w-16 bg-blue-600 mx-auto lg:mx-0 rounded-full" />
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At CarePlus Medical Center, we believe billing should never stand in the way of high-quality diagnostic and therapeutic clinical services. We partner with almost all major local health insurance schemes and NHIF / SHA.
            </p>

            {/* Checklist of coverage information */}
            <ul className="space-y-3.5 text-xs text-slate-600 text-left max-w-md mx-auto lg:mx-0">
              <li className="flex items-start gap-2.5">
                <div className="w-4.5 h-4.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Direct billing is supported for inpatient surgeries and childbirth procedures.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-4.5 h-4.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>SHA / NHIF cards are accepted across all our 13 clinical branches in Kenya.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-4.5 h-4.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Co-pay procedures are streamlined to reduce checkout wait times under 10 minutes.</span>
              </li>
            </ul>
          </div>

          {/* Right Side: Partners Grid with Sleek Fictional Logos */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {INSURANCE_PARTNERS.map((partner, index) => {
                return (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-blue-100 shadow-sm text-center flex flex-col justify-center items-center h-32 group"
                  >
                    {/* Fictional Abstract Logo Graphic */}
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center mb-3">
                      {index % 3 === 0 ? (
                        <ShieldCheck className="w-5.5 h-5.5" />
                      ) : index % 3 === 1 ? (
                        <HeartPulse className="w-5.5 h-5.5" />
                      ) : (
                        <Landmark className="w-5.5 h-5.5" />
                      )}
                    </div>

                    <h3 className="text-xs font-bold text-blue-950 group-hover:text-blue-600 transition-colors font-display tracking-tight leading-none">
                      {partner.name}
                    </h3>
                    <p className="text-[9px] text-slate-400 mt-1 leading-tight line-clamp-2">
                      {partner.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
