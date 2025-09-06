'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Spinner from '@/components/Spinner';
import Topbar from '@/components/Topbar';
import CustomNavbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function AppInitializer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 250); // Shortened delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Spinner isLoading={isLoading} />

      {/* Render content directly after loading, removing the extra wrapping div */}
      {!isLoading && (
        <>
          <Topbar />
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <CustomNavbar />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.main
              key={pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {children}
            </motion.main>
          </AnimatePresence>

          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
}
