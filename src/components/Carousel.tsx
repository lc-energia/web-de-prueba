'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

const slides = [
  {
    imgSrc: "/img/2.png",
    titleComponent: <><span style={{ color: '#F49918' }}>LC</span><span className="text-primary">Energia</span>, al tuo fianco.</>,
    text: "L’esperienza e lo studio continuo delle nuove tecnologie ci permettono di fornire le soluzioni più avanzate per raggiungere la miglior efficienza ed efficacia.",
    link: "/azienda"
  },
  {
    imgSrc: "/img/3.png",
    title: "Pionieri dell'Energia Solare e Rinnovabile",
    text: "Ogni progetto è studiato su misura per soddisfare le tue esigenze. Scopri le migliori soluzioni per il tuo impianto, offriamo consulenza e supporto tecnico a 360 gradi garantendo la massima qualità in ogni dettaglio",
    link: "/impianti-fotovoltaici"
  },
  {
    imgSrc: "/img/1.png",
    titleComponent: <><span style={{ color: '#F49918' }}>LC</span><span className="text-primary">Energia</span></>,
    text: <><span>Innovazione,</span> Esperienza, <span>Eccellenza.</span></>,
    link: "/riqualificazione-di-centrali-termiche-esistenti"
  }
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, slides.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="container-fluid p-0 pb-5 position-relative" style={{ height: '80vh', minHeight: '700px' }}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="position-absolute w-100 h-100"
        >
          <img className="img-fluid w-100 h-100" src={slides[imageIndex].imgSrc} alt="" style={{ objectFit: 'cover' }} />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, .5)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <motion.h1 className="display-2 text-white mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                    {slides[imageIndex].titleComponent || slides[imageIndex].title}
                  </motion.h1>
                  <motion.p className="fs-5 fw-medium text-white mb-4 pb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
                    {slides[imageIndex].text}
                  </motion.p>
                  <motion.a href={slides[imageIndex].link} className="btn btn-primary rounded-pill py-3 px-5" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.7 }}>
                    Read More
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="position-absolute top-50 start-0 translate-middle-y ms-3" style={{ zIndex: 2 }}>
        <button className="btn btn-primary rounded-circle" style={{ width: '45px', height: '45px' }} onClick={() => paginate(-1)}><i className="fa fa-chevron-left"></i></button>
      </div>
      <div className="position-absolute top-50 end-0 translate-middle-y me-3" style={{ zIndex: 2 }}>
        <button className="btn btn-primary rounded-circle" style={{ width: '45px', height: '45px' }} onClick={() => paginate(1)}><i className="fa fa-chevron-right"></i></button>
      </div>

      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex" style={{ zIndex: 2 }}>
        {slides.map((_, i) => (
          <button 
            key={i} 
            className={`mx-1 rounded-circle ${i === imageIndex ? 'bg-primary' : 'bg-white'}`}
            style={{ width: '12px', height: '12px', border: 'none' }}
            onClick={() => setPage([i, i > imageIndex ? 1 : -1])}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
