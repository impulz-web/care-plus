'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Phone, MapPin, Briefcase, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';
import { KENYAN_CITIES, DOCTORS } from '@/lib/data';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctorId?: string;
  initialCity?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  initialDoctorId = '',
  initialCity = 'Nairobi',
}: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: initialCity,
    doctorId: initialDoctorId,
    date: '',
    time: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Compute selected clinic details in-place to avoid state-in-effect issues
  const selectedClinic = KENYAN_CITIES.find((c) => c.name === formData.city) || KENYAN_CITIES[0];

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.date || !formData.time) {
      return;
    }

    setIsSubmitting(true);

    // Simulate network delay
    setTimeout(() => {
      const randomRef = 'CP-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomRef);

      // Save to localStorage for demo persistence
      const currentBookings = JSON.parse(localStorage.getItem('careplus_bookings') || '[]');
      const newBooking = {
        id: randomRef,
        ...formData,
        doctorName: DOCTORS.find((d) => d.id === formData.doctorId)?.name || 'General Doctor Pool',
        clinicName: selectedClinic.branchName,
        clinicAddress: selectedClinic.address,
        createdAt: new Date().toISOString(),
      };
      currentBookings.push(newBooking);
      localStorage.setItem('careplus_bookings', JSON.stringify(currentBookings));

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleBackToForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      city: 'Nairobi',
      doctorId: '',
      date: '',
      time: '',
      notes: '',
    });
    setIsSuccess(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-blue-950/60 backdrop-blur-sm"
        />

        {/* Modal Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden z-10 border border-slate-100 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 bg-blue-950 text-white flex items-center justify-between border-b border-blue-900">
            <div>
              <h3 className="text-xl font-semibold tracking-tight font-display">
                {isSuccess ? 'Appointment Confirmed' : 'Book an Appointment'}
              </h3>
              <p className="text-xs text-blue-200 mt-1">
                {isSuccess
                  ? 'Your reservation is registered in our clinic'
                  : 'Complete the form below to secure your consultation'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-blue-200 hover:text-white p-1 rounded-full hover:bg-blue-900 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 overflow-y-auto flex-1">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-blue-950 mb-1">
                    Patient Full Name
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData((p) => ({ ...p, fullName: e.target.value }))}
                      placeholder="e.g. Kennedy Ochieng"
                      className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-blue-950 mb-1">
                    Phone Number (M-Pesa registered preferred)
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                      <Phone className="w-4 h-4" />
                    </span>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                      placeholder="e.g. +254 712 345 678"
                      className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                    />
                  </div>
                </div>

                {/* City Clinic */}
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-blue-950 mb-1">
                    Preferred CarePlus Clinic Location
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <select
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData((p) => ({ ...p, city: e.target.value }))}
                      className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors bg-white"
                    >
                      {KENYAN_CITIES.map((city) => (
                        <option key={city.name} value={city.name}>
                          {city.name} - {city.branchName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 font-mono">
                    Clinic Address: {selectedClinic.address}
                  </p>
                </div>

                {/* Specialty / Doctor */}
                <div>
                  <label htmlFor="doctor" className="block text-sm font-medium text-blue-950 mb-1">
                    Select Specialist / Consultation Type
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                      <Briefcase className="w-4 h-4" />
                    </span>
                    <select
                      id="doctor"
                      value={formData.doctorId}
                      onChange={(e) => setFormData((p) => ({ ...p, doctorId: e.target.value }))}
                      className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors bg-white"
                    >
                      <option value="">General OPD / First Available Practitioner</option>
                      {DOCTORS.map((doc) => (
                        <option key={doc.id} value={doc.id}>
                          {doc.name} ({doc.specialty})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date and Time Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-blue-950 mb-1">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </span>
                      <input
                        id="date"
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={(e) => setFormData((p) => ({ ...p, date: e.target.value }))}
                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-blue-950 mb-1">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <Clock className="w-4 h-4" />
                      </span>
                      <select
                        id="time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData((p) => ({ ...p, time: e.target.value }))}
                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors bg-white"
                      >
                        <option value="">Select slot</option>
                        <option value="08:30 AM">08:30 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="01:30 PM">01:30 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="04:30 PM">04:30 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Clinical Notes */}
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-blue-950 mb-1">
                    Briefly describe symptoms (Optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData((p) => ({ ...p, notes: e.target.value }))}
                    placeholder="e.g. Routine checkup, throat infection symptoms, high BP follow-up..."
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors resize-none"
                  />
                </div>

                {/* Insurance Notice */}
                <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg flex items-start gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-blue-900 leading-relaxed">
                    Note: CarePlus accepts SHA/NHIF and major commercial insurance cards. Please present your insurance and national identification card during checkout.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 py-2.5 border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium rounded-lg text-sm transition-all text-center"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Securing Slot...
                      </>
                    ) : (
                      'Confirm Appointment'
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 border border-blue-100 text-blue-600">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-blue-950 font-display">Success! Appointment Booked</h4>
                  <p className="text-sm text-slate-600 mt-2 max-w-sm mx-auto">
                    A confirmation SMS has been sent to <strong className="text-blue-950">{formData.phone}</strong>.
                  </p>
                </div>

                {/* Booking Receipt Detail */}
                <div className="p-5 bg-slate-50 border border-slate-100 rounded-xl space-y-3 text-left max-w-sm mx-auto text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 text-xs">Reference ID</span>
                    <span className="font-mono font-bold text-blue-950 text-xs">{bookingRef}</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-slate-500 text-xs">Patient Name</span>
                    <span className="font-semibold text-blue-950 text-xs">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-slate-500 text-xs">Clinic Branch</span>
                    <span className="font-semibold text-blue-950 text-xs">{selectedClinic.branchName}</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-slate-500 text-xs">Doctor / Department</span>
                    <span className="font-semibold text-blue-950 text-xs">
                      {DOCTORS.find((d) => d.id === formData.doctorId)?.name || 'General OPD'}
                    </span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-slate-500 text-xs">Date & Time</span>
                    <span className="font-semibold text-blue-950 text-xs">
                      {formData.date} at {formData.time}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 text-center">
                    Please arrive 15 minutes before your scheduled appointment time.
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2 max-w-sm mx-auto">
                  <button
                    onClick={onClose}
                    className="w-full py-2.5 bg-blue-950 hover:bg-blue-900 text-white font-medium rounded-lg text-sm transition-all"
                  >
                    Done
                  </button>
                  <button
                    onClick={handleBackToForm}
                    className="w-full py-2 text-blue-600 hover:text-blue-700 text-xs font-semibold hover:underline"
                  >
                    Book Another Appointment
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
