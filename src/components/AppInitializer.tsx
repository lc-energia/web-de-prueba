'use client';

import { useState, useEffect } from 'react';
import Spinner from '@/components/Spinner';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function AppInitializer({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Spinner isLoading={isLoading} />
      <Topbar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
