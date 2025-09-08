'use client';
import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

const Counter = ({ from, to }: { from: number; to: number }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(from, to, {
        duration: 1.5,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = value.toFixed(0);
          }
        },
      });
    }
  }, [inView, from, to]);

  return <h1 ref={ref} className="mb-0">{from}</h1>;
};

export default Counter;
