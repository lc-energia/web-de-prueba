'use client';
import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

interface CounterProps {
  from: number;
  to: number;
  className?: string;
}

const Counter = ({ from, to, className }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(from, to, {
        duration: 2.5,
        onUpdate(value) {
          if (ref.current) {
            // Format with dots for thousands
            ref.current.textContent = Math.round(value).toLocaleString('it-IT');
          }
        },
      });
    }
  }, [inView, from, to]);

  return <span ref={ref} className={className}>{from}</span>;
};

export default Counter;