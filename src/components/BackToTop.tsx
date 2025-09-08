'use client';
import { useSticky } from '@/hooks/useSticky';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const isSticky = useSticky();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isSticky && (
        <motion.button
          className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <i className="bi bi-arrow-up"></i>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
