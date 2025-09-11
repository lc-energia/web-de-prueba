'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { carouselData } from '@/data/carousel-data';
import Image from 'next/image';
import Link from 'next/link';

const NewCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
  };

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={carouselData[index].img}
            alt={carouselData[index].title.replace(/<[^>]+>/g, '')}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <motion.h1
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                  dangerouslySetInnerHTML={{ __html: carouselData[index].title }}
                />
                <motion.p
                  className="text-md md:text-lg text-gray-200 mt-4 mb-8 max-w-xl mx-auto"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                >
                  {carouselData[index].text}
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
                >
                  <Link href={carouselData[index].link} className="bg-primary text-white rounded-full py-3 px-8 font-medium hover:bg-opacity-90 transition-colors duration-300 text-lg">
                    Scopri di più
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {carouselData.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === slideIndex ? 'bg-primary' : 'bg-gray-400 hover:bg-white'}`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCarousel;
