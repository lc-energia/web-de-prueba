'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import FlippableCard from './FlippableCard';
import Image from 'next/image';

const About = () => {
  return (
    <section className="bg-light overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap items-center">
          {/* Text Content */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full lg:w-1/2 py-16 px-4 sm:px-6 lg:px-8"
          >
            <div>
              <h6 className="text-primary font-semibold text-lg uppercase tracking-wide">
                Eccellenza nella Riqualificazione Energetica
              </h6>
              <h1 className="text-4xl sm:text-5xl font-bold text-dark my-4">
                Perché scegliere LC Energia?
              </h1>
              <p className="text-gray-600 leading-relaxed">
                LC ENERGIA è una società ingegneristica composta da tecnici qualificati con esperienza trentennale nel campo della consulenza, progettazione e realizzazione impiantistica civile e industriale.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Il plus aziendale è rappresentato dalla capacità di proporre soluzioni tecnologiche all’avanguardia, mediante una progettazione integrata con la struttura architettonica e nel pieno rispetto delle normative di settore.
              </p>
               <p className="mt-4 text-gray-600 leading-relaxed">
                Per raggiungere questi risultati, LC Energia ha sempre considerato importante e prioritario il continuo e sistematico aggiornamento dei suoi tecnici. L’obiettivo principale rimane da sempre la soddisfazione del cliente:
              </p>
              <motion.div
                className="flex flex-wrap -m-2 mt-6"
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
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full lg:w-1/2 min-h-[450px] lg:min-h-[600px]"
          >
            <div className="relative w-full h-full">
              <Image
                src="/img/1Trabajador campo paneles solares.jpg"
                alt="Lavoratore in un campo di pannelli solari"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;