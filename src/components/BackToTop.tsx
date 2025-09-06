'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const BackToTop = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setIsVisible(latest > 0.1);
    });
  }, [scrollYProgress]);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.a
      href="#"
      className="btn btn-lg btn-primary btn-lg-square rounded-circle"
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        right: 45,
        bottom: 45,
        zIndex: 99,
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
      }}
      whileHover={{ scale: isVisible ? 1.1 : 0, y: -2 }}
      whileTap={{ scale: isVisible ? 0.95 : 0 }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M12 20V4M12 4L18 10M12 4L6 10"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg width="48" height="48" viewBox="0 0 48 48" style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}>
        <motion.circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="4"
        />
        <motion.circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeDasharray="125.66"
          strokeDashoffset={0}
          style={{ pathLength: scaleX }}
        />
      </svg>
    </motion.a>
  );
};

export default BackToTop;