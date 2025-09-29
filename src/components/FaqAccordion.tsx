'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/data/services-data';

interface FaqAccordionProps {
  section: Section;
}

const AccordionIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3 }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </motion.svg>
);

const FaqAccordion = ({ section }: FaqAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-dark">
        {section.title}
      </h2>
      <div className="space-y-4">
        {section.questions?.map((item, index) => (
          <div className="border rounded-lg overflow-hidden bg-white shadow-sm" key={index}>
            <button
              className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg text-dark"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <span>{item.question}</span>
              <AccordionIcon isOpen={activeIndex === index} />
            </button>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.section
                  id={`faq-content-${index}`}
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="p-5 pt-0 text-gray-600">
                    {item.answer}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;