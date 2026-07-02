'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';
import { FAQS } from '@/lib/data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Appointments', 'Insurance', 'Emergency care', 'Operating hours', 'Services'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory =
      activeCategory === 'All' ||
      faq.category.toLowerCase() === activeCategory.toLowerCase() ||
      (activeCategory === 'Services' && ['Laboratory services', 'Telemedicine', 'Prescriptions', 'Specialist referrals'].includes(faq.category));

    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">
            Help Center
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950 font-display">
            Frequently Asked Questions
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Find immediate answers regarding appointment bookings, clinical insurance coverage, prescription pick-ups, and specialty medical care at our clinics in Kenya.
          </p>
        </div>

        {/* Search & Category Filter bar */}
        <div className="space-y-6 mb-12">
          {/* Search Input */}
          <div className="relative max-w-md mx-auto">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search health queries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors bg-slate-50/30"
            />
          </div>

          {/* Quick Categories list */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:border-slate-200 transition-all"
                  >
                    {/* Header trigger button */}
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-4.5 flex items-start justify-between gap-4 text-left group"
                      aria-expanded={isOpen}
                    >
                      <div className="flex gap-3">
                        <HelpCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base font-bold text-blue-950 group-hover:text-blue-600 transition-colors font-display">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 mt-0.5 group-hover:text-blue-600 ${
                          isOpen ? 'rotate-185 text-blue-600' : ''
                        }`}
                      />
                    </button>

                    {/* Expandable answer panel */}
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: isOpen ? 'auto' : 0 }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pl-14 border-t border-slate-50 pt-3">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                        <div className="mt-3.5 flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                          <span className="font-bold uppercase tracking-wider text-blue-600">Category:</span>
                          <span>{faq.category}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-slate-50/50 rounded-2xl border border-slate-100">
                <HelpCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <p className="text-sm text-slate-500">No answers match your search term.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('All');
                  }}
                  className="text-xs text-blue-600 font-bold hover:underline mt-2"
                >
                  Reset filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
