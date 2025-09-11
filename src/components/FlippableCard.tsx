'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const FlippableCard = ({ text }: { text: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="w-full md:w-1/2 p-2 cursor-pointer [perspective:1000px]"
      variants={cardVariants}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-28 [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center text-center p-4 [backface-visibility:hidden]">
          <p className="flex items-center text-gray-700 font-medium">
            <FaCheckCircle className="text-primary text-2xl mr-3" />
            {text}
          </p>
        </div>
        {/* Back of the card */}
        <div className="absolute w-full h-full bg-primary text-white rounded-xl shadow-lg flex items-center justify-center text-center p-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="text-xl font-bold">LC Energia</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlippableCard;
