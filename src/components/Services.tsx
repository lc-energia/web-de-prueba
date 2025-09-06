'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const allServices = [
    {
      category: "progettazione",
      icon: "fa-globe",
      title: "Impianto Geotermico",
      description: "LC Energia da diversi anni realizza impianti che utilizzano fonti alternative, in particolare impianti geotermici puri o integrati con altri sistemi di produzione dell’energia...",
      link: "/impianti-geotermici"
    },
    {
      category: "progettazione",
      icon: "fa-tools",
      title: "Progettazione e consulenza tecnica",
      description: "Da oltre 25 anni offriamo un servizio di consulenza, progettazione e supporto nelle realizzazioni impiantistiche civili ed industriali...",
      link: "/progettazione-e-consulenza-tecnica"
    },
    {
      category: "progettazione",
      icon: "fa-fire-extinguisher",
      title: "Progettazione Antincendio",
      description: "LC Energia offre consulenza e progettazione antincendio, con impianti di estinzione fissi ad idranti e sprinkler, evacuatori di fumo e calore.",
      link: "/progettazione-antincendio"
    },
    {
      category: "impianti",
      icon: "fa-solar-panel",
      title: "Impianto Fotovoltaico e Accumulo Elettrico",
      description: "Progettiamo e installiamo impianti fotovoltaici chiavi in mano per ridurre i consumi energetici grazie all’autoproduzione di energia elettrica.",
      link: "/impianti-fotovoltaici"
    },
    {
      category: "progettazione",
      icon: "fa-headphones",
      title: "Progettazione Acustica",
      description: "L’inquinamento acustico rappresenta uno dei problemi più rilevanti per la società attuale e per le attività produttive; esso è definito dalla Legge Quadro 447/95.",
      link: "/progettazione-acustica"
    },
    {
      category: "progettazione",
      icon: "fa-wallet",
      title: "Progettare il risparmio energetico",
      description: "LC Energia propone costantemente soluzioni tecniche innovative per ottenere il massimo risparmio energetico dai sistemi progettati.",
      link: "/progettare-il-risparmio-energetico"
    },
    {
      category: "progettazione",
      icon: "fa-thermometer-half",
      title: "Contabilizzazione e ripartizione del calore",
      description: "Progettiamo sistemi di contabilizzazione e ripartizione del calore per edifici costituiti da più unità immobiliari.",
      link: "/contabilizzazione-calore-impianti-termici-centralizzati"
    },
    {
      category: "studio",
      icon: "fa-tools",
      title: "Diagnosi Energetica e Riqualificazione Centrali Termiche",
      description: "Attraverso la nostra esperienza e con i software di calcolo possiamo identificare le principali criticità del sistema edificio/impianto...",
      link: "/riqualificazione-di-centrali-termiche-esistenti"
    },
    {
      category: "impianti",
      icon: "fa-lightbulb",
      title: "Stazioni di Ricarica",
      description: "Attraverso la nostra esperienza e con i software di calcolo possiamo identificare le principali criticità del sistema edificio/impianto...",
      link: "/stazioni-di-ricarica"
    }
];

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredServices = activeFilter === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeFilter);

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <motion.div 
          className="text-center mx-auto mb-5"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: '600px' }}
        >
          <h1 className="text-primary">Our Services</h1>
        </motion.div>
        
        <motion.div 
          className="row mt-n2"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="col-12 text-center">
            <ul className="list-inline mb-5">
              <li className={`mx-2 d-inline-block`} style={{cursor: 'pointer'}} onClick={() => setActiveFilter('all')}>Tutti</li>
              <li className={`mx-2 d-inline-block`} style={{cursor: 'pointer'}} onClick={() => setActiveFilter('progettazione')}>Progettazione</li>
              <li className={`mx-2 d-inline-block`} style={{cursor: 'pointer'}} onClick={() => setActiveFilter('impianti')}>Impianti</li>
              <li className={`mx-2 d-inline-block`} style={{cursor: 'pointer'}} onClick={() => setActiveFilter('studio')}>Studio</li>
            </ul>
          </div>
        </motion.div>

        <motion.div layout className="row g-4">
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div 
                key={service.title} 
                className="col-md-6 col-lg-4"
                variants={itemVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                layout
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="service-item rounded overflow-hidden h-100">
                  <div className="position-relative p-4">
                    <div className="service-icon">
                      <i className={`fa ${service.icon} fa-3x`}></i>
                    </div>
                    <h4 className="mb-3">{service.title}</h4>
                    <p>{service.description}</p>
                    <a className="small fw-medium" href={service.link}>Read More<i className="fa fa-arrow-right ms-2"></i></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
