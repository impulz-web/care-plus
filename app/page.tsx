'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import EmergencyBar from '@/components/sections/EmergencyBar';
import Services from '@/components/sections/Services';
import Doctors from '@/components/sections/Doctors';
import Departments from '@/components/sections/Departments';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import AppointmentProcess from '@/components/sections/AppointmentProcess';
import Statistics from '@/components/sections/Statistics';
import Testimonials from '@/components/sections/Testimonials';
import InsurancePartners from '@/components/sections/InsurancePartners';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/layout/Footer';
import AppointmentModal from '@/components/sections/AppointmentModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preSelectedDoctorId, setPreSelectedDoctorId] = useState('');
  const [preSelectedCity, setPreSelectedCity] = useState('Nairobi');

  // Trigger appointment modal with optional initial pre-selections
  const handleOpenBooking = (doctorId: string = '', city: string = 'Nairobi') => {
    setPreSelectedDoctorId(doctorId);
    setPreSelectedCity(city);
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Sticky Top-level Navigation bar */}
      <Navbar onBookAppointment={() => handleOpenBooking('', 'Nairobi')} />

      {/* Main Page Layout Wrapper */}
      <main className="relative">
        
        {/* Section 2: Large Welcoming Hero */}
        <Hero onBookAppointment={() => handleOpenBooking('', 'Nairobi')} />

        {/* Section 3: Trauma & Emergency dispatch bar */}
        <EmergencyBar />

        {/* Section 4: Premium Medical Services */}
        <Services onBookAppointment={() => handleOpenBooking('', 'Nairobi')} />

        {/* Section 5: Faculty Board-Certified Doctors */}
        <Doctors onBookAppointment={(docId) => handleOpenBooking(docId, 'Nairobi')} />

        {/* Section 6: Medical Specialty Departments Grid */}
        <Departments />

        {/* Section 7: Benefit Cards Clinical Standards */}
        <WhyChooseUs />

        {/* Section 8: Patient Check-in timeline process */}
        <AppointmentProcess />

        {/* Section 9: Counter Statistics */}
        <Statistics />

        {/* Section 10: Real Patient Reviews */}
        <Testimonials />

        {/* Section 11: Accepted Insurances & Partners Grid */}
        <InsurancePartners />

        {/* Section 12: Help Center Accordion FAQs */}
        <FAQ />

        {/* Section 13: Final Conversion CTA banner */}
        <FinalCTA onBookAppointment={() => handleOpenBooking('', 'Nairobi')} />

      </main>

      {/* Section 14: Directories & Locations Footer */}
      <Footer />

      {/* Interactive Priority Booking Form Overlay Modal */}
      <AppointmentModal
        key={isModalOpen ? `open-${preSelectedDoctorId}-${preSelectedCity}` : 'closed'}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialDoctorId={preSelectedDoctorId}
        initialCity={preSelectedCity}
      />

    </div>
  );
}
