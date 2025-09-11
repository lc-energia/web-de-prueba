'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import FlippableCard from './FlippableCard';
import Image from 'next/image';

const About = () => {
  return (
    <section className="bg-light py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h6 className="text-primary font-bold text-lg uppercase tracking-wider">Azienda</h6>
            <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-6 text-gray-800">Il valore dell’esperienza per l’efficienza ed il risparmio energetico</h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              LC ENERGIA è una società ingegneristica composta da tecnici qualificati con esperienza trentennale nel campo della consulenza, progettazione e realizzazione impiantistica civile e industriale.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Il plus aziendale è rappresentato dalla capacità di proporre soluzioni tecnologiche all’avanguardia, mediante una progettazione integrata con la struttura architettonica e nel pieno rispetto delle normative di settore.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Per raggiungere questi risultati, LC Energia ha sempre considerato importante e prioritario il continuo e sistematico aggiornamento dei suoi tecnici con specifici programmi di formazione. L’obiettivo principale della nostra società rimane da sempre la soddisfazione del cliente:
            </p>
            <motion.div
              className="flex flex-wrap -m-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
            >
              <FlippableCard text="Recependo e concretizzando al meglio le sue richieste." />
              <FlippableCard text="Offrendo la nostra professionalità e disponibilità." />
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/img/1Trabajador campo paneles solares.jpg" 
              alt="Lavoratore in un campo di pannelli solari" 
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;