'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Spinner = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          id="spinner"
          className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
          style={{ zIndex: 99999 }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <Image 
              src="/img/favicon.png" 
              alt="Logo" 
              width={150} 
              height={150} 
              className="img-fluid" 
              style={{ height: 'auto' }} // Fix for aspect ratio warning
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Spinner;