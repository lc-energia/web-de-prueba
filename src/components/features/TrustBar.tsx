'use client';

import { motion } from 'framer-motion';
import {
  CheckBadgeIcon,
  CalendarDaysIcon,
  RocketLaunchIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const trustItems = [
  {
    icon: CheckBadgeIcon,
    label: 'Certificati ISO 9001',
    color: 'success', // Verde éxito
  },
  {
    icon: CalendarDaysIcon,
    label: '+15 Anni di Esperienza',
    color: 'primary', // Verde institucional
  },
  {
    icon: RocketLaunchIcon,
    label: '500+ Progetti Realizzati',
    color: 'tech', // Azul tecnológico
  },
  {
    icon: StarIcon,
    label: '4.9/5 Recensioni',
    color: 'solar', // Amarillo solar
  },
];

const colorClasses = {
  success: {
    icon: 'text-success-500 bg-success-50',
    gradient: 'from-success-500 to-success-600',
  },
  primary: {
    icon: 'text-primary-500 bg-primary-50',
    gradient: 'from-primary-500 to-primary-600',
  },
  tech: {
    icon: 'text-tech-500 bg-tech-50',
    gradient: 'from-tech-500 to-tech-600',
  },
  solar: {
    icon: 'text-solar-500 bg-solar-50',
    gradient: 'from-solar-500 to-solar-600',
  },
};

export default function TrustBar() {
  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-neutral-50 to-white border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            const colors = colorClasses[item.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group cursor-default"
              >
                {/* Icon Container */}
                <div className={`
                  ${colors.icon}
                  w-14 h-14 sm:w-16 sm:h-16
                  rounded-2xl
                  flex items-center justify-center
                  mb-3 sm:mb-4
                  transition-all duration-300
                  group-hover:scale-110 group-hover:shadow-lg
                `}>
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2} />
                </div>

                {/* Label */}
                <p className="text-sm sm:text-base font-semibold text-neutral-800 leading-tight">
                  {item.label}
                </p>

                {/* Decorative gradient line */}
                <div className={`
                  mt-2 h-1 w-0 bg-gradient-to-r ${colors.gradient} rounded-full
                  transition-all duration-300 group-hover:w-full
                `} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
