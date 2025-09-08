'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/variants';

const Services = () => {
  const [filter, setFilter] = useState('*');

  const services = [
    {
      filter: "third",
      icon: "fa-globe",
      title: "Impianto Geotermico",
      description: "LC Energia da diversi anni realizza impianti che utilizzano fonti alternative, in particolare impianti geotermici puri o integrati con altri sistemi di produzione dell’energia, nell’ambito di una politica di ricerca della massima soddisfazione del cliente.",
      link: "impianti-geotermici.html"
    },
    {
      filter: "third",
      icon: "fa-tools",
      title: "Progettazione e consulenza tecnica",
      description: "Da oltre 25 anni offriamo un servizio di consulenza, progettazione e supporto nelle realizzazioni impiantistiche civili ed industriali. Ogni soluzione è valutata e condivisa nel rispetto delle esigenze del committente.",
      link: "progettazione-e-consulenza-tecnica.html"
    },
    {
      filter: "third",
      icon: "fa-fire-extinguisher",
      title: "Progettazione Antincendio",
      description: "LC Energia offre consulenza e progettazione antincendio, con impianti di estinzione fissi ad idranti e sprinkler, evacuatori di fumo e calore.",
      link: "progettazione-antincendio.html"
    },
    {
      filter: "second",
      icon: "fa-solar-panel",
      title: "Impianto Fotovoltaico e Accumulo Elettrico",
      description: "Progettiamo e installiamo impianti fotovoltaici chiavi in mano per ridurre i consumi energetici grazie all’autoproduzione di energia elettrica.",
      link: "impianti-fotovoltaici.html"
    },
    {
      filter: "third",
      icon: "fa-headphones",
      title: "Progettazione Acustica",
      description: "L’inquinamento acustico rappresenta uno dei problemi più rilevanti per la società attuale e per le attività produttive; esso è definito dalla Legge Quadro 447/95.",
      link: "progettazione-acustica.html"
    },
    {
      filter: "third",
      icon: "fa-wallet",
      title: "Progettare il risparmio energetico",
      description: "LC Energia propone costantemente soluzioni tecniche innovative per ottenere il massimo risparmio energetico dai sistemi progettati.",
      link: "progettare-il-risparmio-energetico.html"
    },
    {
      filter: "third",
      icon: "fa-thermometer-half",
      title: "Contabilizzazione e ripartizione del calore",
      description: "Progettiamo sistemi di contabilizzazione e ripartizione del calore per edifici costituiti da più unità immobiliari.",
      link: "contabilizzazione-calore-impianti-termici-centralizzati.html"
    },
    {
      filter: "first",
      icon: "fa-tools",
      title: "Diagnosi Energetica e Riqualificazione Centrali Termiche",
      description: "Attraverso la nostra esperienza e con i software di calcolo possiamo identificare le principali criticità del sistema edificio/impianto al fine di valutare e proporre soluzioni sostenibili per la riqualificazione energetica sotto il profilo tecnico/economico.",
      link: "riqualificazione-di-centrali-termiche-esistenti.html"
    },
    {
      filter: "second",
      icon: "fa-lightbulb",
      title: "Stazioni di Ricarica",
      description: "Attraverso la nostra esperienza e con i software di calcolo possiamo identificare le principali criticità del sistema edificio/impianto al fine di valutare e proporre soluzioni sostenibili per la riqualificazione energetica sotto il profilo tecnico/economico.",
      link: "stazioni-di-ricarica.html"
    }
  ];

  const filteredServices = filter === '*' ? services : services.filter(service => service.filter === filter);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <motion.div 
          className="text-center mx-auto mb-5"
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
          style={{ maxWidth: '600px' }}
        >
          <h1 className="text-primary">Our Services</h1>
        </motion.div>
        <motion.div 
          className="row mt-n2"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <div className="col-12 text-center">
            <ul className="list-inline mb-5">
              <li className="mx-2" onClick={() => setFilter('*')}>All</li>
              <li className="mx-2" onClick={() => setFilter('third')}>Progettazione</li>
              <li className="mx-2" onClick={() => setFilter('second')}>Impianti</li>
              <li className="mx-2" onClick={() => setFilter('first')}>Studio</li>
            </ul>
          </div>
        </motion.div>
        <motion.div 
          className="row g-4"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div 
                key={index} 
                className={`col-md-6 col-lg-4`}
                variants={fadeIn('up', index * 0.1)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <div className="service-item rounded overflow-hidden">
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
