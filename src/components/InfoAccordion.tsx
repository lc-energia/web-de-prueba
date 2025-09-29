'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
  title: string;
  content: string;
  list?: string[];
}

interface InfoAccordionProps {
  items: AccordionItem[];
}

const AccordionIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 flex-shrink-0 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    animate={{ rotate: isOpen ? -180 : 0 }}
    transition={{ duration: 0.3 }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </motion.svg>
);

const InfoAccordion = ({ items }: InfoAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="space-y-4">
        {items.map((item, index) => (
          <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm" key={index}>
            <button
              className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg text-dark"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
            >
              <span>{item.title}</span>
              <AccordionIcon isOpen={activeIndex === index} />
            </button>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.section
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
                    <p>{item.content}</p>
                    {item.list && (
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            {item.list.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    )}
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

export default InfoAccordion;