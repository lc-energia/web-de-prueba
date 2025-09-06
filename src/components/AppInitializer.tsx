'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import Spinner from '@/components/Spinner';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import InteractiveInitializer from '@/components/InteractiveInitializer';

export default function AppInitializer({ children }: { children: React.ReactNode }) {
  const [isJQueryLoaded, setJQueryLoaded] = useState(false);

  const handleJQueryLoad = () => {
    setJQueryLoaded(true);
  };

  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
      <InteractiveInitializer isJQueryLoaded={isJQueryLoaded} />

      {/* JavaScript Libraries */}
      <Script src="https://code.jquery.com/jquery-3.4.1.min.js" onLoad={handleJQueryLoad}></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></Script>
      <Script src="/lib/wow/wow.min.js"></Script>
      <Script src="/lib/easing/easing.min.js"></Script>
      <Script src="/lib/waypoints/waypoints.min.js"></Script>
      <Script src="/lib/counterup/counterup.min.js"></Script>
      <Script src="/lib/owlcarousel/owl.carousel.min.js"></Script>
      <Script src="/lib/isotope/isotope.pkgd.min.js"></Script>
      <Script src="/lib/lightbox/js/lightbox.min.js"></Script>
    </>
  );
}
