'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialData } from '@/data/carousel-data';
import { FaQuoteLeft } from 'react-icons/fa';

const variants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const NewTestimonial = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-light py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Il Nostro Impegno</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>
          
          <div className="relative h-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute w-full"
              >
                <FaQuoteLeft className="text-primary text-3xl md:text-4xl mx-auto mb-4" />
                <p className="text-xl md:text-2xl text-gray-600 italic">{testimonialData[index].text}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTestimonial;
