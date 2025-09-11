'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/variants';
import Link from 'next/link';
import { FaGlobe, FaTools, FaFireExtinguisher, FaSolarPanel, FaHeadphones, FaWallet, FaThermometerHalf, FaLightbulb, FaArrowRight } from 'react-icons/fa';

const services = [
  { filter: "third", icon: <FaGlobe />, title: "Impianto Geotermico", description: "Realizzazione di impianti geotermici puri o integrati, per la massima soddisfazione del cliente.", link: "/impianti-geotermici" },
  { filter: "third", icon: <FaTools />, title: "Progettazione e consulenza tecnica", description: "Consulenza, progettazione e supporto nelle realizzazioni impiantistiche civili ed industriali.", link: "/progettazione-e-consulenza-tecnica" },
  { filter: "third", icon: <FaFireExtinguisher />, title: "Progettazione Antincendio", description: "Consulenza e progettazione antincendio, con impianti di estinzione fissi ad idranti e sprinkler.", link: "/progettazione-antincendio" },
  { filter: "second", icon: <FaSolarPanel />, title: "Impianto Fotovoltaico e Accumulo", description: "Impianti fotovoltaici chiavi in mano per ridurre i consumi energetici grazie all’autoproduzione.", link: "/impianti-fotovoltaici" },
  { filter: "third", icon: <FaHeadphones />, title: "Progettazione Acustica", description: "Soluzioni per l’inquinamento acustico, nel rispetto della Legge Quadro 447/95.", link: "/progettazione-acustica" },
  { filter: "third", icon: <FaWallet />, title: "Progettare il risparmio energetico", description: "Soluzioni tecniche innovative per ottenere il massimo risparmio energetico dai sistemi progettati.", link: "/progettare-il-risparmio-energetico" },
  { filter: "third", icon: <FaThermometerHalf />, title: "Contabilizzazione e ripartizione calore", description: "Sistemi di contabilizzazione e ripartizione del calore per edifici con più unità immobiliari.", link: "/contabilizzazione-calore-impianti-termici-centralizzati" },
  { filter: "first", icon: <FaTools />, title: "Diagnosi Energetica", description: "Consulenza e progettazione per la riqualificazione delle centrali termiche esistenti.", link: "/riqualificazione-di-centrali-termiche-esistenti" },
  { filter: "second", icon: <FaLightbulb />, title: "Stazioni di Ricarica", description: "Sfrutta l’energia autoprodotta dai pannelli solari per ricaricare la tua auto a casa.", link: "/stazioni-di-ricarica" }
];

const filterButtons = [
  { name: 'Tutto', value: '*' },
  { name: 'Progettazione', value: 'third' },
  { name: 'Impianti', value: 'second' },
  { name: 'Studio', value: 'first' },
];

const Services = () => {
  const [filter, setFilter] = useState('*');

  const filteredServices = filter === '*' ? services : services.filter(service => service.filter === filter);

  return (
    <section className="bg-light py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">I Nostri Servizi</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            {filterButtons.map(button => (
              <button
                key={button.value}
                onClick={() => setFilter(button.value)}
                className={`font-medium py-2 px-5 rounded-full transition-all duration-300 text-sm sm:text-base ${
                  filter === button.value
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary hover:text-white shadow-md hover:shadow-lg'
                }`}
              >
                {button.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col group"
              >
                <div className="p-8 flex-grow">
                  <div className="text-primary text-4xl mb-5 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h4>
                  <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                </div>
                <div className="p-6 bg-gray-50 border-t border-gray-100">
                  <Link href={service.link} className="font-semibold text-primary hover:text-accent-orange transition-colors duration-300 flex items-center justify-between">
                    <span>Leggi di più</span>
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
