'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const FlippableCard = ({ text }: { text: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="col-lg-6"
      variants={cardVariants}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="card h-100"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="card-body text-center d-flex align-items-center justify-content-center" style={{ backfaceVisibility: 'hidden' }}>
          <p><i className="fa fa-check-circle text-primary me-3"></i>{text}</p>
        </div>
        <div
          className="card-body text-center d-flex align-items-center justify-content-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'var(--primary)',
            color: 'white'
          }}
        >
          <p>LC Energia</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlippableCard;