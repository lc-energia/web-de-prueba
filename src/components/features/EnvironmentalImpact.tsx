'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  CloudIcon,
  BoltIcon,
  HomeModernIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = '', duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(startValue + (end - startValue) * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-5xl sm:text-6xl font-bold">
      {count}
      <span className="ml-1">{suffix}</span>
    </div>
  );
}

const impactData = [
  {
    icon: CloudIcon,
    value: 2000,
    suffix: 'T',
    label: 'CO₂ Risparmiato',
    comparison: '≈ 10.000 alberi piantati',
    color: 'success',
    gradient: 'from-success-500 to-success-600',
    bgGradient: 'from-success-50 to-success-100',
    shadow: 'shadow-success',
  },
  {
    icon: BoltIcon,
    value: 50,
    suffix: 'MW',
    label: 'Energia Prodotta',
    comparison: '≈ 15.000 case alimentate',
    color: 'solar',
    gradient: 'from-solar-400 to-solar-500',
    bgGradient: 'from-solar-50 to-solar-100',
    shadow: 'shadow-solar',
  },
  {
    icon: HomeModernIcon,
    value: 500,
    suffix: '+',
    label: 'Famiglie Green',
    comparison: 'Risparmio medio €1.200/anno',
    color: 'primary',
    gradient: 'from-primary-500 to-primary-600',
    bgGradient: 'from-primary-50 to-primary-100',
    shadow: 'shadow-primary',
  },
  {
    icon: SparklesIcon,
    value: 15,
    suffix: '+',
    label: 'Anni di Esperienza',
    comparison: 'Innovazione continua',
    color: 'tech',
    gradient: 'from-tech-500 to-tech-600',
    bgGradient: 'from-tech-50 to-tech-100',
    shadow: 'shadow-tech',
  },
];

export default function EnvironmentalImpact() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-neutral-50 to-primary-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-success-100 to-primary-100 border border-success-200 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-success-500 to-primary-500 animate-pulse"></div>
            <span className="text-sm font-semibold text-success-700">Impatto Positivo</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 via-success-600 to-primary-600 bg-clip-text text-transparent">
              Il Nostro Contributo
            </span>
            <br />
            <span className="text-neutral-800">per un Futuro Sostenibile</span>
          </h2>

          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
            Ogni progetto che realizziamo è un passo concreto verso un pianeta più pulito e un futuro energetico sostenibile
          </p>
        </motion.div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {impactData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`
                  relative p-8 rounded-3xl
                  bg-gradient-to-br ${item.bgGradient}
                  border border-white/50
                  ${item.shadow}
                  transition-all duration-500
                  hover:scale-105 hover:-translate-y-2
                  cursor-default
                `}>
                  {/* Decorative gradient overlay */}
                  <div className={`
                    absolute inset-0 rounded-3xl
                    bg-gradient-to-br ${item.gradient}
                    opacity-0 group-hover:opacity-5
                    transition-opacity duration-500
                  `} />

                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className={`
                      inline-flex p-3 rounded-2xl
                      bg-gradient-to-br ${item.gradient}
                      shadow-lg
                      transition-transform duration-500
                      group-hover:rotate-6 group-hover:scale-110
                    `}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Counter */}
                  <div className={`
                    mb-2
                    bg-gradient-to-r ${item.gradient}
                    bg-clip-text text-transparent
                  `}>
                    <AnimatedCounter end={item.value} suffix={item.suffix} />
                  </div>

                  {/* Label */}
                  <div className="text-xl font-bold text-neutral-800 mb-3">
                    {item.label}
                  </div>

                  {/* Comparison */}
                  <div className="flex items-start gap-2 text-sm text-neutral-600">
                    <div className="w-1 h-1 rounded-full bg-neutral-400 mt-2 flex-shrink-0"></div>
                    <div>{item.comparison}</div>
                  </div>

                  {/* Decorative corner */}
                  <div className={`
                    absolute top-3 right-3 w-20 h-20
                    bg-gradient-to-br ${item.gradient}
                    rounded-full blur-2xl opacity-20
                    group-hover:opacity-30
                    transition-opacity duration-500
                  `} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="/contatti"
              className="
                group px-8 py-4
                bg-gradient-to-r from-success-500 to-primary-600
                text-white font-semibold text-lg rounded-xl
                shadow-success hover:shadow-primary-hover
                transition-all duration-300
                hover:scale-105 hover:-translate-y-0.5
                flex items-center gap-2
              "
            >
              <span>Unisciti al Cambiamento</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="/servizi"
              className="
                px-8 py-4
                border-2 border-success-500 text-success-600
                font-semibold text-lg rounded-xl
                hover:bg-success-50
                transition-all duration-300
                flex items-center gap-2
              "
            >
              <span>Scopri Come</span>
            </a>
          </div>

          <p className="text-sm text-neutral-500 mt-6">
            Richiedi una consulenza gratuita per scoprire come contribuire al futuro sostenibile
          </p>
        </motion.div>
      </div>
    </section>
  );
}
