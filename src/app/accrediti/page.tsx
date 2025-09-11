'use client';
import PageHeader from '@/components/PageHeader';
import { accreditations } from '@/data/azienda-data';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import { BsShieldFillCheck, BsCheckCircleFill } from 'react-icons/bs';

const AccreditationsPage = () => {
  const accreditation = accreditations[0];
  const accreditationItems = accreditation.description.split('<br>').filter(item => item.trim() !== '');

  return (
    <>
      <PageHeader title="Accrediti" breadcrumb="Accrediti" />

      <section className="py-20 sm:py-28 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Left Column: Title and Icon */}
              <motion.div 
                variants={fadeIn('right', 0.3)} 
                initial="hidden" 
                whileInView="show" 
                viewport={{ once: true, amount: 0.3 }}
                className="p-8 md:p-12 text-center lg:text-left bg-primary text-white h-full flex flex-col justify-center"
              >
                <div className="inline-block mb-6">
                  <BsShieldFillCheck className="text-6xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{accreditation.pageTitle}</h2>
                <p className="text-lg text-gray-200">{accreditation.pageDescription}</p>
              </motion.div>

              {/* Right Column: List of Accreditations */}
              <motion.div 
                variants={fadeIn('left', 0.5)} 
                initial="hidden" 
                whileInView="show" 
                viewport={{ once: true, amount: 0.3 }}
                className="p-8 md:p-12"
              >
                <ul className="space-y-5">
                  {accreditationItems.map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      variants={fadeIn('up', 0.2 + index * 0.1)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <BsCheckCircleFill className="text-primary text-xl mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccreditationsPage;