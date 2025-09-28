'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialData } from '@/data/carousel-data';

const variants = {
  enter: {
    opacity: 0,
    y: 20,
  },
  center: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

const NewTestimonial = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change testimonial every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full lg:w-2/3 text-center">
            <div className="h-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-2xl font-light text-gray-700 italic">
                    &ldquo;{testimonialData[index].text}&rdquo;
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewTestimonial;