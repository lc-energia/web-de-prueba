'use client';
import { motion } from 'framer-motion';

const Carousel = () => {
  return (
    <motion.div 
      className="container-fluid p-0 pb-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="owl-carousel header-carousel position-relative">
        <div className="owl-carousel-item position-relative" data-dot="<img src='/img/2.png' />">
          <img className="img-fluid" src="/img/2.png" alt="" />
          <div className="owl-carousel-inner">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <motion.h1 
                    className="display-2 text-white"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <span style={{ color: '#F49918' }}>LC</span>
                    <span className="text-primary">Energia</span>, al tuo fianco.
                  </motion.h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-3">L’esperienza e lo studio continuo delle nuove tecnologie ci permettono di fornire le soluzioni più avanzate per raggiungere la miglior efficienza ed efficacia.</p>
                  <motion.a 
                    href="azienda.html" 
                    className="btn btn-primary rounded-pill py-3 px-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    Read More
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-carousel-item position-relative" data-dot="<img src='/img/3.png' />">
          <img className="img-fluid" src="/img/3.png" alt="" />
          <div className="owl-carousel-inner">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <motion.h1 
                    className="display-2 text-white"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    Pionieri dell'Energia Solare e Rinnovabile
                  </motion.h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-3">Ogni progetto è studiato su misura per soddisfare le tue esigenze. Scopri le migliori soluzioni per il tuo impianto, offriamo consulenza e supporto tecnico a 360 gradi garantendo la massima qualità in ogni dettaglio</p>
                  <motion.a 
                    href="impianti-fotovoltaici.html" 
                    className="btn btn-primary rounded-pill py-3 px-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    Read More
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-carousel-item position-relative" data-dot="<img src='/img/1.png' />">
          <img className="img-fluid" src="/img/1.png" alt="" />
          <div className="owl-carousel-inner">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <motion.h1 
                    className="display-2 text-white"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <span style={{ color: '#F49918' }}>LC</span>
                    <span className="text-primary">Energia</span>
                  </motion.h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-3"><span>Innovazione,</span> Esperienza, <span>Eccellenza.</span></p>
                  <motion.a 
                    href="riqualificazione-di-centrali-termiche-esistenti.html" 
                    className="btn btn-primary rounded-pill py-3 px-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    Read More
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Carousel;