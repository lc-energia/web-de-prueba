'use client';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Image from 'next/image';

// Data for the page sections
const valuePropositions = [
  {
    content: "LC Energia vanta di personale qualificato e con grande esperienza nel settore della progettazione e realizzazione di impianti civili e industriali. L'impegno dell'azienda è volto a contribuire in prima linea agli obiettivi Europei e Nazionali per la decarbonizzazione e l'efficientamento energetico. Per questo LC Energia, oltre a fornire consulenza e progettazione per gli impianti termici, si è specializzata nella realizzazione di impianti fotovoltaici sia nel settore civile che industriale."
  },
  {
    content: "Sfruttando le nostre competenze operiamo sempre nel rispetto degli obblighi legislativi e normativi per fornire al cliente un servizio a regola d'arte. Attraverso interventi di riqualificazione architettonica e impiantistica su diversi edifici nel campo industriale, civile, pubblico e nei processi produttivi, LC Energia permette ai suoi clienti di ottenere significativi risparmi energetici oltre a una miglior qualità di vita."
  },
  {
    content: "Il successo di LC Energia deriva dalla corretta applicazione delle conoscenze tecniche e dall'utilizzo razionale delle nuove tecnologie per la produzione di energia e la riduzione dei consumi. La società opera attraverso due principali settori operativi:"
  },
  {
    content: "LC Energia si impegna a offrire soluzioni su misura per le esigenze specifiche dei clienti, garantendo risultati tangibili attraverso un percorso collaudato che include la diagnosi energetica, la valutazione degli interventi e la stima economica degli investimenti proposti. Grazie a un'approfondita conoscenza del settore e alla competenza tecnica, LC Energia si posiziona come un partner affidabile per il raggiungimento degli obiettivi di efficienza energetica e sostenibilità."
  }
];

const reasons = [
  { icon: 'fa-solar-panel', title: 'Soluzioni efficienti, ottimizzazione dei sistemi', description: 'Ogni progetto/impianto è sviluppato dando priorità all&apos;affidabilità dei sistemi e al controllo dei costi di realizzazione ed esercizio.' },
  { icon: 'fa-wind', title: 'Energia rinnovabile consapevole', description: 'Progettiamo il futuro sfruttando l\'apporto delle energie rinnovabili, nel rispetto delle normative e laddove risulta tecnicamente ed economicamente conveniente.' },
  { icon: 'fa-lightbulb', title: 'Consulenza specializzata nell\'ambito della prevenzione incendi', description: 'Siamo specializzati nella redazione di attività ai fini dell\'ottenimento del Certificato di Prevenzione Incendi.' },
  { icon: 'fa-headset', title: 'Supporto e consulenza nel campo dell\'acustica degli edifici', description: 'Offriamo una consulenza specifica per il settore acustico sia in ambito civile che industriale.' }
];

const teamMembers = [
  { name: 'Colzani Roberto', role: 'Perito Industriale' },
  { name: 'Colzani Luca', role: 'Ingegnere Energetico' },
  { name: 'Ricchetti Lorenzo', role: 'Ingegnere Energetico' },
  { name: 'Mauri Silvia', role: 'Ingegnere Edile' },
  { name: 'Galtarossa Barbara', role: 'Amministrazione' },
  { name: 'Colzani Eliana', role: 'Creativo Multidisciplinare' }
];

const AziendaPage = () => {
  return (
    <>
      <PageHeader title="Azienda" breadcrumb="Azienda" />

      {/* Value Proposition Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h6 className="text-primary font-bold text-lg">Azienda</h6>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4 text-dark">Il valore dell&apos;esperienza per l&apos;efficienza ed il risparmio energetico</h1>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valuePropositions.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-16 sm:py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h6 className="text-primary font-bold text-lg">Produzione di energia pulita per salvare l'ambiente</h6>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4 text-dark">I motivi per scegliere LC Energia</h1>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 text-center h-full transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="inline-block p-4 bg-primary text-white rounded-full mb-4">
                  <i className={`fa ${reason.icon} fa-2x`}></i>
                </div>
                <h5 className="text-xl font-bold mb-3 text-dark">{reason.title}</h5>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h6 className="text-primary font-bold text-lg">Collaborazioni</h6>
          </motion.div>
          <motion.div 
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image src="/img/image3.png" alt="Collaborazione" width={400} height={200} className="rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h6 className="text-primary font-bold text-lg">Membri del Team Esperti</h6>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <h5 className="text-xl font-bold text-dark">{member.name}</h5>
                <p className="text-primary">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AziendaPage;
