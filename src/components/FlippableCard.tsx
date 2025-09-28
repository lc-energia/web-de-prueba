'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const CheckCircleIcon = () => (
  <svg className="w-6 h-6 mr-3 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 512 512">
    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628 0z" />
  </svg>
);

const FlippableCard = ({ text }: { text: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="w-full sm:w-1/2 p-2"
      variants={cardVariants}
      style={{ perspective: 1000 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      onFocus={() => setIsFlipped(true)}
      onBlur={() => setIsFlipped(false)}
      tabIndex={0}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full bg-white border rounded-lg shadow-md flex items-center justify-center p-4" style={{ backfaceVisibility: 'hidden' }}>
          <div className="flex items-center text-center">
            <CheckCircleIcon />
            <p className="text-gray-700">{text}</p>
          </div>
        </div>

        {/* Back of the card */}
        <div
          className="absolute w-full h-full bg-primary text-white rounded-lg shadow-md flex items-center justify-center p-4"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <p className="text-lg font-semibold">LC Energia</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlippableCard;