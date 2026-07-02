'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Users, UserCheck, Stethoscope, Landmark } from 'lucide-react';

interface StatCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function StatCounter({ target, suffix = '', duration = 1500 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = target;
          const stepTime = Math.max(Math.floor(duration / end), 15);
          
          const timer = setInterval(() => {
            start += Math.ceil(end / 40); // Increment steps
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, stepTime);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  return (
    <div ref={elementRef} className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function Statistics() {
  const stats = [
    {
      icon: Users,
      label: 'Patients Healed',
      target: 50000,
      suffix: '+',
      description: 'Satisfied patients treated successfully nationwide',
    },
    {
      icon: Stethoscope,
      label: 'Specialist Doctors',
      target: 120,
      suffix: '',
      description: 'Board-certified medical consultants & general physicians',
    },
    {
      icon: Landmark,
      label: 'Medical Clinics',
      target: 25,
      suffix: '',
      description: 'Fully equipped departments across our branch network',
    },
    {
      icon: UserCheck,
      label: 'Satisfaction Rate',
      target: 98,
      suffix: '%',
      description: 'Positive feedback rating on outpatient care and surgery',
    },
  ];

  return (
    <section className="py-16 bg-blue-950 text-white relative overflow-hidden border-y border-blue-900">
      {/* Wave Decorative SVG */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 100 Q 250 50 500 100 T 1000 100 T 1500 100 T 2000 100" fill="none" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-blue-900/40 p-6 rounded-2xl border border-blue-800/40 text-center flex flex-col items-center space-y-3"
              >
                {/* Icon Circle */}
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <IconComponent className="w-5.5 h-5.5" />
                </div>

                {/* Counter */}
                <StatCounter target={stat.target} suffix={stat.suffix} />

                {/* Info */}
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-blue-200 uppercase tracking-widest font-mono">
                    {stat.label}
                  </h4>
                  <p className="text-[11px] text-blue-300/80 leading-relaxed max-w-[200px] mx-auto">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
