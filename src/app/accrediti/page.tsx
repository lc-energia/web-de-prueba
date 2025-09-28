'use client';
import PageHeader from '@/components/PageHeader';
import { accreditations } from '@/data/azienda-data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const CheckCircleIcon = () => (
  <svg className="w-6 h-6 mr-3 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 512 512">
    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628 0z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-48 h-48 text-primary" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1.03 16.03L6.5 12.5l1.41-1.41L11 14.17l4.59-4.59L17 11l-6.03 6.03z"/>
  </svg>
);

const AccreditationsPage = () => {
  const accreditation = accreditations[0];

  return (
    <>
      <PageHeader title="Accrediti" />
      <section className="py-16 sm:py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center -mx-4">
            <motion.div
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0"
            >
              <h2 className="text-3xl font-bold text-dark mb-4">{accreditation.pageTitle}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{accreditation.pageDescription}</p>
              <ul className="space-y-3">
                {accreditation.description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="inline-block bg-primary text-white font-semibold rounded-full py-3 px-8 hover:bg-primary-hover transition-colors duration-300">
                  Richiedi un preventivo
                </Link>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn('right', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="w-full lg:w-1/2 px-4 flex justify-center items-center"
            >
              <ShieldCheckIcon />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccreditationsPage;