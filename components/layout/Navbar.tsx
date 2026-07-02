'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, HeartPulse, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onBookAppointment: () => void;
}

export default function Navbar({ onBookAppointment }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll state to add beautiful white background shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Departments', href: '#departments' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#footer' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md border-b border-slate-100 py-3' : 'bg-white/90 backdrop-blur-md border-b border-slate-100/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white transition-transform group-hover:scale-105 shadow-md shadow-blue-600/20">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-blue-950 font-display tracking-tight leading-none">
                CarePlus
              </span>
              <span className="text-[10px] text-blue-600 font-mono tracking-wider uppercase leading-none mt-1">
                Medical Center
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-blue-950/80 hover:text-blue-600 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Book Appointment CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={onBookAppointment}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all shadow-md shadow-blue-600/15 hover:shadow-blue-600/25 flex items-center gap-1.5 active:scale-[0.98]"
            >
              Book Appointment
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Navigation Toggle (Hamburger) */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onBookAppointment}
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-all shadow-sm"
            >
              Book
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-blue-950 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors shrink-0"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-slate-100"
          >
            <nav className="px-4 py-6 space-y-3 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-blue-950/90 hover:text-blue-600 transition-colors py-2 border-b border-slate-50"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onBookAppointment();
                  }}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
                >
                  Book Appointment
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
