'use client';
import ServicePageLayout from '@/components/ServicePageLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ServiceData } from '@/data/services-data';
import { fadeIn } from '@/variants';
import { BsCheckCircleFill } from 'react-icons/bs';

const ServicePage = ({ service }: { service: ServiceData }) => {

  return (
    <ServicePageLayout title={service.title} breadcrumb={service.breadcrumb}>
      <motion.div 
        className="text-center max-w-4xl mx-auto mb-16"
        variants={fadeIn('down', 0.2)} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.4 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{service.title}</h1>
        <p className="text-lg text-gray-600">{service.introduction}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {service.sections.map((section, i) => (
          <motion.div
            key={i}
            className="w-full"
            variants={fadeIn('up', 0.3 + i * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="bg-white rounded-xl shadow-lg h-full flex flex-col p-8">
              <div className="mb-5">
                <h5 className="text-xl font-bold text-gray-800">{section.title}</h5>
              </div>
              <p className="text-gray-600">{section.content}</p>
              {section.list && (
                <ul className="space-y-3 mt-4">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex items-start">
                      <BsCheckCircleFill className="text-primary text-lg mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {service.partners && (
        <div className="py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center max-w-4xl mx-auto mb-16"
              variants={fadeIn('down', 0.2)} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true, amount: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{service.partnersTitle}</h2>
              <p className="text-lg text-gray-600 mt-4">{service.partnersIntroduction}</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
              {service.partners.map((partner, i) => (
                <motion.div
                  key={i}
                  className="flex justify-center"
                  variants={fadeIn('up', 0.3 + i * 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <Image src={partner.src} alt={partner.alt} width={150} height={80} className="object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </ServicePageLayout>
  );
};

export default ServicePage;
