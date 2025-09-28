'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { carouselData } from '@/data/carousel-data';
import Image from 'next/image';
import Link from 'next/link';

const NewCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
  };

  const currentSlide = carouselData[index];
  const fullTitle = `${currentSlide.title.part1 || ''}${currentSlide.title.part2 || ''}${currentSlide.title.part3 || ''}`;

  return (
    <section
      className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Contenuto in primo piano"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="h-full">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={currentSlide.img}
              alt={currentSlide.alt}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <motion.h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {currentSlide.title.part1 && <span className="text-secondary">{currentSlide.title.part1}</span>}
                    {currentSlide.title.part2 && <span className="text-primary">{currentSlide.title.part2}</span>}
                    {currentSlide.title.part3}
                  </motion.h1>
                  <motion.p
                    className="text-lg sm:text-xl font-light text-white my-6"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {currentSlide.text}
                  </motion.p>
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <Link href={currentSlide.link} className="inline-block bg-primary text-white rounded-full py-3 px-8 text-lg font-semibold hover:bg-primary-hover transition-colors">
                      Scopri di più
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {carouselData.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === slideIndex ? 'bg-white' : 'bg-white/50 hover:bg-white'}`}
            aria-label={`Vai alla slide ${slideIndex + 1}`}
            aria-current={index === slideIndex}
          />
        ))}
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full"
        aria-live="polite"
        aria-atomic="true"
      >
        <p className="sr-only">
          {`Slide ${index + 1} di ${carouselData.length}: ${fullTitle}`}
        </p>
      </div>
    </section>
  );
};

export default NewCarousel;