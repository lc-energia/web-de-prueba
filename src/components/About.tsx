'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import FlippableCard from './FlippableCard';

const About = () => {
  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container about px-lg-0">
        <div className="row g-0 mx-lg-0">
          <motion.div 
            className="col-lg-6 about-text py-5"
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
          >
            <div className="p-lg-5 pe-lg-0">
              <h6 className="text-primary">Eccellenza nella Riqualificazione Energetica e Progettazione Tecnologica</h6>
              <h1 className="mb-4">Perché scegliere LC Energia?</h1>
              <p>LC ENERGIA è una società ingegneristica composta da tecnici qualificati con esperienza trentennale nel campo della consulenza, progettazione e realizzazione impiantistica civile e industriale. <br /> <br />
                Il plus aziendale è rappresentato dalla capacità di proporre soluzioni tecnologiche all’avanguardia, mediante una progettazione integrata con la struttura architettonica e nel pieno rispetto delle normative di settore.  <br /> <br />
                Per raggiungere questi risultati, LC Energia ha sempre considerato importante e prioritario il continuo e sistematico aggiornamento dei suoi tecnici con specifici programmi di formazione. L’obiettivo principale della nostra società rimane da sempre la soddisfazione del cliente:</p>
              <motion.div
                className="row g-4 mt-4"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.3,
                    },
                  },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <FlippableCard text="Recependo e concretizzando al meglio le sue richieste." />
                <FlippableCard text="Offrendo la nostra professionalità e disponibilità." />
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="col-lg-6 ps-lg-0"
            variants={fadeIn('right', 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            style={{ minHeight: '400px' }}
          >
            <div className="position-relative h-100">
              <img className="position-absolute img-fluid w-100 h-100" src="/img/1Trabajador campo paneles solares.jpg" style={{ objectFit: 'cover' }} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
