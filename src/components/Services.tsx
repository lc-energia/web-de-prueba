'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allServices } from '@/data/services-data';
import IconMapper from './IconMapper';
import Link from 'next/link';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredServices = activeFilter === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeFilter);

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <motion.div 
          className="text-center mx-auto mb-5"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: '600px' }}
        >
          <h1 className="text-primary">Our Services</h1>
        </motion.div>
        
        <motion.div 
          className="row mt-n2"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="col-12 text-center">
            <ul className="list-inline mb-5">
              <li className={`mx-2 d-inline-block`} style={{cursor: 'pointer'}} onClick={() => setActiveFilter('all')}>Tutti</li>
              <li className={`mx-2 d-inline-block`} style={{cursor: 'pointer'}} onClick={() => setActiveFilter('progettazione')}>Progettazione</li>
              <li className={`mx-2 d-inline-block`} style={{cursor: 'pointer'}} onClick={() => setActiveFilter('impianti')}>Impianti</li>
              <li className={`mx-2 d-inline-block`} style={{cursor: 'pointer'}} onClick={() => setActiveFilter('studio')}>Studio</li>
            </ul>
          </div>
        </motion.div>

        <motion.div layout className="row g-4">
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div 
                key={service.title} 
                className="col-md-6 col-lg-4"
                variants={itemVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                layout
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                whileHover={{ scale: 1.03, y: -5, transition: { type: 'spring', stiffness: 300 } }}
              >
                <div className="service-item rounded overflow-hidden h-100">
                  <div className="position-relative p-4">
                    <div className="service-icon">
                      <IconMapper iconName={service.icon} className="fa-3x" />
                    </div>
                    <h4 className="mb-3">{service.title}</h4>
                    <p>{service.description}</p>
                    <Link href={service.link} className="small fw-medium">
                      Read More
                      <IconMapper iconName="fa-arrow-right" className="ms-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
