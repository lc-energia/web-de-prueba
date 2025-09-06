'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const MotionImage = motion(Image);

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={containerRef} className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container about px-lg-0">
        <div className="row g-0 mx-lg-0">
          <motion.div 
            className="col-lg-6 about-text py-5"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-lg-5 pe-lg-0">
              <h6 className="text-primary">Eccellenza nella Riqualificazione Energetica e Progettazione Tecnologica</h6>
              <h1 className="mb-4">Perché scegliere LC Energia?</h1>
              <p>LC ENERGIA è una società ingegneristica composta da tecnici qualificati con esperienza trentennale nel campo della consulenza, progettazione e realizzazione impiantistica civile e industriale. <br /> <br />
                Il plus aziendale è rappresentato dalla capacità di proporre soluzioni tecnologiche all’avanguardia, mediante una progettazione integrata con la struttura architettonica e nel pieno rispetto delle normative di settore.  <br /> <br />
                Per raggiungere questi risultati, LC Energia ha sempre considerato importante e prioritario il continuo e sistematico aggiornamento dei suoi tecnici con specifici programmi di formazione. L’obiettivo principale della nostra società rimane da sempre la soddisfazione del cliente:</p>
              <p><i className="fa fa-check-circle text-primary me-3"></i>Recependo e concretizzando al meglio le sue richieste.</p>
              <p><i className="fa fa-check-circle text-primary me-3"></i>Offrendo la nostra professionalità e disponibilità.</p>
            </div>
          </motion.div>
          <div 
            className="col-lg-6 ps-lg-0"
            style={{ minHeight: '400px' }}
          >
            <div className="position-relative h-100">
              <MotionImage
                className="position-absolute img-fluid"
                src="/img/1Trabajador campo paneles solares.jpg" 
                style={{ objectFit: 'cover', y }}
                alt="Trabajador en campo de paneles solares"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
