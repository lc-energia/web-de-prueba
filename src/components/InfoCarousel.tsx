'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 500 : -500,
    opacity: 0
  })
};

const InfoCarousel = ({ items }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const itemIndex = wrap(0, items.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="position-relative" style={{ height: '350px' }}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
          className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
        >
          <div className="testimonial-item text-center w-100">
            <div className="testimonial-text text-center rounded p-4 h-100">
              {items[itemIndex]}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="position-absolute top-50 start-0 translate-middle-y ms-n5" style={{ zIndex: 2 }}>
        <button className="btn btn-primary rounded-circle" style={{ width: '45px', height: '45px' }} onClick={() => paginate(-1)}><i className="fa fa-chevron-left"></i></button>
      </div>
      <div className="position-absolute top-50 end-0 translate-middle-y me-n5" style={{ zIndex: 2 }}>
        <button className="btn btn-primary rounded-circle" style={{ width: '45px', height: '45px' }} onClick={() => paginate(1)}><i className="fa fa-chevron-right"></i></button>
      </div>
    </div>
  );
};

export default InfoCarousel;
