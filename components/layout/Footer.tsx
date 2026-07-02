'use client';

import React, { useState } from 'react';
import { HeartPulse, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Send, ShieldCheck, Check } from 'lucide-react';
import { KENYAN_CITIES, DOCTORS, SERVICES, DEPARTMENTS } from '@/lib/data';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<typeof KENYAN_CITIES[0] | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  // Structured Schema.org Local Business / Hospital metadata to inject for Kenyan Local SEO
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    'name': 'CarePlus Medical Center',
    'image': 'https://careplus.co.ke/og-image.jpg',
    '@id': 'https://careplus.co.ke/#organization',
    'url': 'https://careplus.co.ke',
    'telephone': '+254700111222',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Upper Hill Medical Chambers, Argwings Kodhek Road',
      'addressLocality': 'Nairobi',
      'addressCountry': 'KE',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': -1.2995,
      'longitude': 36.8152,
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
    'department': DEPARTMENTS.map((d) => ({
      '@type': 'MedicalSpecialty',
      'name': d.name,
      'description': d.description,
    })),
  };

  return (
    <footer id="footer" className="bg-blue-950 text-white pt-20 pb-8 border-t border-blue-900 font-sans">
      {/* Inject Kenya Medical SEO Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Segment: Brand, Newsletter */}
        <div className="grid lg:grid-cols-12 gap-10 border-b border-blue-900 pb-12 items-start">
          
          {/* Logo & Intro */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white shadow-md">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-lg font-bold text-white font-display tracking-tight leading-none">
                  CarePlus
                </span>
                <span className="text-[10px] text-blue-400 font-mono tracking-wider uppercase leading-none mt-1">
                  Medical Center
                </span>
              </div>
            </a>
            <p className="text-xs sm:text-sm text-blue-200/75 leading-relaxed max-w-sm">
              CarePlus is Kenya&apos;s leading network of board-certified clinics. We deliver high-quality, fully accredited clinical care, emergency triage, and professional pharmaceutical dispensing across Kenyan towns.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Facebook" className="p-2 bg-blue-900/40 rounded-lg text-blue-300 hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 bg-blue-900/40 rounded-lg text-blue-300 hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter className="w-4.5 h-4.5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 bg-blue-900/40 rounded-lg text-blue-300 hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-7 space-y-4 lg:pl-12">
            <h3 className="text-base font-bold font-display uppercase tracking-wider text-white">
              Stay Informed with CarePlus Health Letter
            </h3>
            <p className="text-xs text-blue-300 leading-relaxed max-w-lg">
              Get health advisories, schedule reminders, and preventative tips compiled by our pediatric and cardiovascular specialists delivered directly to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <Mail className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  required
                  placeholder="name@domain.co.ke"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-blue-900 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-slate-900 bg-white"
                />
              </div>
              <button
                type="submit"
                className="py-2.5 px-6 bg-blue-650 hover:bg-blue-600 text-white font-bold rounded-lg text-sm transition-all shadow flex items-center justify-center gap-2"
              >
                {isSubscribed ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Middle Segment: Column Directories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1: Core Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest font-mono text-blue-400">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-blue-200/80">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Core Departments */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest font-mono text-blue-400">
              Departments
            </h4>
            <ul className="space-y-2.5 text-xs text-blue-200/80">
              {DEPARTMENTS.slice(0, 6).map((d) => (
                <li key={d.id}>
                  <a href="#departments" className="hover:text-white transition-colors">{d.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Doctors Directory */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest font-mono text-blue-400">
              Specialists
            </h4>
            <ul className="space-y-2.5 text-xs text-blue-200/80">
              {DOCTORS.map((doc) => (
                <li key={doc.id}>
                  <a href="#doctors" className="hover:text-white transition-colors">{doc.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Careers */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest font-mono text-blue-400">
              Contact & Careers
            </h4>
            <ul className="space-y-3.5 text-xs text-blue-200/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-snug">Argwings Kodhek Rd, Upper Hill, Nairobi</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+254 (0) 700 111 222</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>contact@careplus.co.ke</span>
              </li>
              <li className="pt-2 border-t border-blue-900 space-y-1">
                <span className="font-bold text-white block">Medical Careers:</span>
                <span className="text-[11px] leading-tight block text-blue-300">
                  We are hiring certified nurses & lab technicians. Send CV to: <strong className="text-white hover:underline">careers@careplus.co.ke</strong>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Kenya City SEO Location Index Section */}
        <div className="border-t border-blue-900 pt-10">
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest font-mono text-blue-400 text-center md:text-left">
              Kenyan City Clinic Branch Locator (Local SEO)
            </h4>
            <p className="text-[11px] text-blue-300 max-w-2xl leading-relaxed text-center md:text-left">
              We provide professional healthcare services across Kenya. Click on any city to locate our certified clinical branch, phone number, and direct address details:
            </p>
            {/* Horizontal responsive listing of all Kenyan Cities */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {KENYAN_CITIES.map((city) => (
                <button
                  key={city.name}
                  onClick={() => setSelectedBranch(city)}
                  className="px-2.5 py-1 text-[10px] font-medium bg-blue-900/40 text-blue-200 rounded border border-blue-900 hover:border-blue-500 hover:bg-blue-900 hover:text-white transition-all font-mono"
                >
                  {city.name} Clinic
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Final legal and policy copyright section */}
        <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-300">
          <p className="flex items-center gap-1.5 justify-center md:justify-start">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
            <span>&copy; {new Date().getFullYear()} CarePlus Medical Center. Licensed by KMPDC (Kenya).</span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="hover:text-white hover:underline transition-colors">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-white hover:underline transition-colors">Terms of Service</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-white hover:underline transition-colors">Sitemap</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-white hover:underline transition-colors">Medical Disclosure</a>
          </div>
        </div>

      </div>

      {/* Kenya City Clinic Detail Overlay Popup */}
      {selectedBranch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-blue-950/75 backdrop-blur-xs" onClick={() => setSelectedBranch(null)} />
          <div className="relative w-full max-w-sm bg-white text-slate-900 rounded-xl shadow-lg p-5 border border-slate-100 z-10 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-blue-600 block">
                  CarePlus Branch Location
                </span>
                <h3 className="text-base font-bold font-display text-blue-950">
                  {selectedBranch.name} clinic
                </h3>
              </div>
              <button
                onClick={() => setSelectedBranch(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
                aria-label="Close branch modal"
              >
                <Check className="w-4.5 h-4.5 stroke-[3]" />
              </button>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="space-y-0.5">
                <span className="text-slate-400 block text-[10px] uppercase font-mono">Clinic name</span>
                <span className="font-bold text-blue-950">{selectedBranch.branchName}</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-slate-400 block text-[10px] uppercase font-mono">Street address</span>
                <span className="text-slate-700 leading-snug block">{selectedBranch.address}</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-slate-400 block text-[10px] uppercase font-mono">County region</span>
                <span className="text-slate-700 block">{selectedBranch.county} County, Kenya</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                <div className="space-y-0.5">
                  <span className="text-slate-400 block text-[9px] uppercase font-mono">Phone line</span>
                  <a href={`tel:${selectedBranch.phone}`} className="font-bold text-blue-600 hover:underline">{selectedBranch.phone}</a>
                </div>
                <div className="space-y-0.5">
                  <span className="text-slate-400 block text-[9px] uppercase font-mono">Email dispatch</span>
                  <a href={`mailto:${selectedBranch.email}`} className="font-semibold text-slate-600 hover:underline block truncate">{selectedBranch.email}</a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setSelectedBranch(null)}
                className="w-full py-2 bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold rounded-lg transition-all text-center"
              >
                Close Location
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
