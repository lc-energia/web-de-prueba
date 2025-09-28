'use client';
import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/variants';
import Link from 'next/link';

// Icon Components
const GlobeIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.8 15a9 9 0 1111.4-6.23M12 21a9 9 0 01-9-9"></path></svg>;
const ToolsIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;
const FireExtinguisherIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10m-2.121 2.121A8.003 8.003 0 0112 4.5a8.003 8.003 0 017.778 5.378"></path></svg>;
const SolarPanelIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 18"></path></svg>;
const HeadphonesIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>;
const WalletIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>;
const ThermometerIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 15.879A6 6 0 0112.025 10a6 6 0 012.096-4.121m0 0A2.5 2.5 0 1016 4.12a2.5 2.5 0 00-1.879 1.879m0 0A6 6 0 0110 12.025a6 6 0 01-4.121 2.096m0 0A2.5 2.5 0 104.12 16a2.5 2.5 0 001.879-1.879m0 0A6 6 0 0112.025 10a6 6 0 012.096 4.121m-4.192 0A2.5 2.5 0 1010 16a2.5 2.5 0 00-1.879-1.879m0 0A6 6 0 0112.025 10a6 6 0 01-4.121-2.096m4.121 4.192A2.5 2.5 0 1016 14.12a2.5 2.5 0 00-1.879-1.879m-1.879 4.121A6 6 0 0110 12.025a6 6 0 01-2.096-4.121"></path></svg>;
const LightbulbIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.707.707M12 21v-1m-4.657-3.343l.707-.707"></path></svg>;
const ArrowRightIcon = () => <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>;


const services: { filter: string; icon: ReactNode; title: string; description: string; link: string; }[] = [
    { filter: "third", icon: <GlobeIcon />, title: "Impianto Geotermico", description: "LC Energia da diversi anni realizza impianti che utilizzano fonti alternative, in particolare impianti geotermici puri o integrati.", link: "/impianti-geotermici" },
    { filter: "third", icon: <ToolsIcon />, title: "Progettazione e consulenza tecnica", description: "Da oltre 25 anni offriamo un servizio di consulenza, progettazione e supporto nelle realizzazioni impiantistiche civili ed industriali.", link: "/progettazione-e-consulenza-tecnica" },
    { filter: "third", icon: <FireExtinguisherIcon />, title: "Progettazione Antincendio", description: "LC Energia offre consulenza e progettazione antincendio, con impianti di estinzione fissi ad idranti e sprinkler.", link: "/progettazione-antincendio" },
    { filter: "second", icon: <SolarPanelIcon />, title: "Impianto Fotovoltaico e Accumulo Elettrico", description: "Progettiamo e installiamo impianti fotovoltaici chiavi in mano per ridurre i consumi energetici grazie all’autoproduzione.", link: "/impianti-fotovoltaici" },
    { filter: "third", icon: <HeadphonesIcon />, title: "Progettazione Acustica", description: "L’inquinamento acustico rappresenta uno dei problemi più rilevanti per la società attuale e per le attività produttive.", link: "/progettazione-acustica" },
    { filter: "third", icon: <WalletIcon />, title: "Progettare il risparmio energetico", description: "LC Energia propone costantemente soluzioni tecniche innovative per ottenere il massimo risparmio energetico dai sistemi progettati.", link: "/progettare-il-risparmio-energetico" },
    { filter: "third", icon: <ThermometerIcon />, title: "Contabilizzazione e ripartizione del calore", description: "Progettiamo sistemi di contabilizzazione e ripartizione del calore per edifici costituiti da più unità immobiliari.", link: "/contabilizzazione-calore-impianti-termici-centralizzati" },
    { filter: "first", icon: <ToolsIcon />, title: "Diagnosi Energetica e Riqualificazione", description: "Identifichiamo le principali criticità del sistema edificio/impianto al fine di valutare e proporre soluzioni sostenibili.", link: "/riqualificazione-di-centrali-termiche-esistenti" },
    { filter: "second", icon: <LightbulbIcon />, title: "Stazioni di Ricarica", description: "Proponiamo soluzioni sostenibili per la riqualificazione energetica sotto il profilo tecnico/economico.", link: "/stazioni-di-ricarica" }
];

const Services = () => {
  const [filter, setFilter] = useState('*');
  const filteredServices = filter === '*' ? services : services.filter(service => service.filter === filter);

  const filterButtons = [
    { name: 'Tutto', value: '*' },
    { name: 'Progettazione', value: 'third' },
    { name: 'Impianti', value: 'second' },
    { name: 'Studio', value: 'first' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mx-auto mb-12 max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-primary">I Nostri Servizi</h1>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex justify-center mb-10"
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 bg-gray-100 p-2 rounded-full">
            {filterButtons.map(button => (
              <button
                key={button.value}
                onClick={() => setFilter(button.value)}
                className={`font-semibold py-2 px-5 rounded-full transition-all duration-300 text-sm sm:text-base ${
                  filter === button.value ? 'bg-primary text-white shadow-md' : 'bg-transparent text-gray-600 hover:bg-gray-200'
                }`}
              >
                {button.name}
              </button>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title + index}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <div className="bg-light rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="p-8 flex-grow">
                    <div className="text-secondary mb-5">{service.icon}</div>
                    <h4 className="text-xl font-bold mb-3 text-dark">{service.title}</h4>
                    <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                  </div>
                  <div className="p-6 bg-gray-50 border-t border-gray-200">
                    <Link href={service.link} className="font-semibold text-primary hover:text-secondary transition-colors flex items-center">
                      Leggi di più <ArrowRightIcon />
                    </Link>
                  </div>
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