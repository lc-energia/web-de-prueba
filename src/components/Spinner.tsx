'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Spinner = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          id="spinner"
          className="fixed inset-0 bg-white flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <Image src="/img/favicon.png" alt="Logo" width={150} height={150} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Spinner;
