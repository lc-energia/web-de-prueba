'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Testimonial = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <motion.div 
          className="owl-carousel testimonial-carousel"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="testimonial-item text-center">
            <div className="testimonial-text text-center rounded p-4">
              <Image src="/img/logo.png" alt="Vantaggi" width={500} height={150} className="img-fluid mt-2" style={{ maxWidth: '80%', height: 'auto' }} />
            </div>
          </div>
          <div className="testimonial-item text-center">
            <div className="testimonial-text text-center rounded p-4">
              <p>Energia pulita per un futuro sostenibile.</p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <div className="testimonial-text text-center rounded p-4">
              <p>Soluzioni efficienti per un mondo migliore.</p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <div className="testimonial-text text-center rounded p-4">
              <p>Innovazione in ogni progetto, rispettando il pianeta.</p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <div className="testimonial-text text-center rounded p-4">
              <p>Impegnati per l'ambiente e l'efficienza energetica.</p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <div className="testimonial-text text-center rounded p-4">
              <p>Tecnologia verde che trasforma gli edifici.</p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <div className="testimonial-text text-center rounded p-4">
              <p>Esperienza e visione per le energie rinnovabili.</p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <div className="testimonial-text text-center rounded p-4">
              <p>Adattiamo il presente per proteggere il futuro.</p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <div className="testimonial-text text-center rounded p-4">
              <p>Verso un ambiente più pulito e sicuro.</p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <div className="testimonial-text text-center rounded p-4">
              <p>Prestazioni superiori, impatto ambientale ridotto.</p>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <div className="testimonial-text text-center rounded p-4">
              <p>Efficienza energetica che fa la differenza.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;