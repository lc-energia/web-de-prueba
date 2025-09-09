'use client';
import PageHeader from '@/components/PageHeader';
import { accreditations } from '@/data/azienda-data';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const AccreditationsPage = () => {
  // Since there's only one set of accreditations, we can access it directly.
  const accreditation = accreditations[0];
  const accreditationItems = accreditation.description.split('<br>').filter(item => item.trim() !== '');

  return (
    <>
      <PageHeader title="Accrediti" breadcrumb="Accrediti" />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Title and Icon */}
            <motion.div 
              variants={fadeIn('right', 0.3)} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true, amount: 0.3 }}
              className="text-center md:text-left"
            >
              <div className="inline-block p-4 bg-primary text-white rounded-full mb-6">
                <i className={`${accreditation.icon} text-5xl`}></i>
              </div>
              <h2 className="text-4xl font-bold text-dark mb-4">{accreditation.pageTitle}</h2>
              <p className="text-lg text-gray-600">{accreditation.pageDescription}</p>
            </motion.div>

            {/* Right Column: List of Accreditations */}
            <motion.div 
              variants={fadeIn('left', 0.5)} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true, amount: 0.3 }}
            >
              <ul className="space-y-4">
                {accreditationItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <i className="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccreditationsPage;