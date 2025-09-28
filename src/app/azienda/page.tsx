'use client';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Image from 'next/image';
import { valuePropositions, teamMembers } from '@/data/azienda-data';

// Icon Components
const SolarPanelIcon = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 18"></path></svg>;
const WindIcon = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10m-2.121 2.121A8.003 8.003 0 0112 4.5a8.003 8.003 0 017.778 5.378M3 12h5m4 0h9"></path></svg>;
const LightbulbIcon = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.707.707M12 21v-1m-4.657-3.343l.707-.707"></path></svg>;
const HeadsetIcon = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>;

const reasons = [
  { icon: <SolarPanelIcon />, title: 'Soluzioni efficienti, ottimizzazione dei sistemi', description: 'Ogni progetto/impianto è sviluppato dando priorità all’affidabilità dei sistemi e al controllo dei costi di realizzazione ed esercizio.' },
  { icon: <WindIcon />, title: 'Energia rinnovabile consapevole', description: 'Progettiamo il futuro sfruttando l’apporto delle energie rinnovabili, nel rispetto delle normative e laddove risulta tecnicamente ed economicamente conveniente.' },
  { icon: <LightbulbIcon />, title: 'Consulenza specializzata nell’ambito della prevenzione incendi', description: 'Siamo specializzati nella redazione di attività ai fini dell’ottenimento del Certificato di Prevenzione Incendi.' },
  { icon: <HeadsetIcon />, title: 'Supporto e consulenza nel campo dell’acustica', description: 'Offriamo una consulenza specifica per il settore acustico sia in ambito civile che industriale.' }
];

const AziendaPage = () => {
  return (
    <>
      <PageHeader title="Azienda" />

      {/* Value Proposition Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4 text-dark">Il valore dell’esperienza per l’efficienza ed il risparmio energetico</h1>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valuePropositions.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
                {item.list && (
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    {item.list.map((point, i) => (
                      <li key={i} className="text-gray-600 leading-relaxed">{point}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h6 className="text-primary font-bold text-lg uppercase tracking-wider">Produzione di energia pulita per salvare l’ambiente</h6>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4 text-dark">I motivi per scegliere LC Energia</h1>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center h-full transition-transform transform hover:-translate-y-2 hover:shadow-2xl flex flex-col"
              >
                <div className="inline-block p-4 bg-primary text-white rounded-full mb-4 mx-auto">
                  {reason.icon}
                </div>
                <h5 className="text-xl font-bold mb-3 text-dark">{reason.title}</h5>
                <p className="text-gray-600 flex-grow">{reason.description}</p>
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
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h6 className="text-primary font-bold text-lg uppercase tracking-wider">Collaborazioni</h6>
          </motion.div>
          <motion.div 
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex justify-center"
          >
            <Image src="/img/image3.png" alt="Collaborazione" width={400} height={200} className="rounded-lg shadow-lg w-auto h-auto max-w-full" />
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
              <p className="text-gray-600 leading-relaxed space-y-2">
                <span>Iscritti ai rispettivi Albi Professionali Provinciali</span><br />
                <span>Certificatori Energetici di cui al D.G.R. 8/5018 – 20.07.2007</span><br />
                <span>Accreditati Energy Building Manager, Regione Lombardia ai sensi del D.G.R. VIII/8355 del 5 Novembre 2008</span><br />
                <span>Iscritti nell’elenco dei progettisti antincendio del Ministero dell’Interno di cui al D.Lgs n.139/2006 (ex Legge 818/84)</span><br />
                <span>Verificatori in materia di sicurezza degli impianti ai sensi del DM 22/1/08 n. 37</span><br />
                <span>Consulenti tecnici del Tribunale di Monza</span>
              </p>
          </div>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h6 className="text-primary font-bold text-lg uppercase tracking-wider">Membri del Team Esperti</h6>
          </motion.div>
          <div className="flex flex-wrap justify-center -m-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
              >
                <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl h-full">
                  <h5 className="text-xl font-bold text-dark">{member.name}</h5>
                  <p className="text-primary">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AziendaPage;