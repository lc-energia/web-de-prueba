
'use client';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';

const Page = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <>
      <PageHeader
        title="Progettazione e consulenza tecnica"
        breadcrumb="Progettazione e consulenza tecnica"
      />

      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <motion.div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: 600 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            custom={0}
          >
            <h6 className="text-primary">Progettazione e consulenza tecnica</h6>
            <p className="mb-4">
              Nella realizzazione di opere impiantistiche vi è la necessità di
              gestire le diverse fasi operative in modo da coordinare lo
              svolgimento dei lavori e garantire la funzionalità del prodotto
              finale.
            </p>
          </motion.div>
          <div className="row g-4">
            <motion.div
              className="col-lg-4 col-md-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <div className="team-item rounded overflow-hidden">
                <div className="p-4 text-center">
                  <h5>Impianti Elettrici</h5>
                  <ul className="text-start">
                    <li>Impianti elettrici civili ed industriali</li>
                    <li>Sistemi domotici</li>
                    <li>Building Automation</li>
                    <li>Impianti di illuminazione</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-4 col-md-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <div className="team-item rounded overflow-hidden">
                <div className="p-4 text-center">
                  <h5>Progettazione Impiantistica</h5>
                  <p>
                    Per ogni tipologia edilizia, l’impianto rappresenta una
                    struttura vitale per la gestione e la fruibilità dell’intero
                    edificio. La qualità della progettazione influisce su
                    sicurezza, comfort, risparmio e manutenzione.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-4 col-md-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
            >
              <div className="team-item rounded overflow-hidden">
                <div className="p-4 text-center">
                  <h5>Impianti Meccanici</h5>
                  <ul className="text-start">
                    <li>
                      Impianti di riscaldamento, climatizzazione, ventilazione
                      meccanica
                    </li>
                    <li>
                      Impianti alimentati da fonti rinnovabili (geotermia,
                      solare termico termodinamico/fotovoltaico)
                    </li>
                    <li>Impianti di cogenerazione</li>
                    <li>Impianti a biomassa</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-4 col-md-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
            >
              <div className="team-item rounded overflow-hidden">
                <div className="p-4 text-center">
                  <h5>Progettazione e consulenza tecnica</h5>
                  <p>
                    LC Energia gestisce direttamente, con personale
                    qualificato, attraverso le diverse fasi di progettazione:
                  </p>
                  <ul className="text-start">
                    <li>
                      Progettazione integrata degli impianti con collaborazione
                      costante con le altre figure professionali coinvolte.
                    </li>
                    <li>
                      Definizione della tipologia di impianto in relazione alla
                      struttura, con sistemi di controllo e monitoraggio on-site
                      e remoto.
                    </li>
                    <li>
                      Assistenza ai lavori per perseguire e conseguire il
                      risultato previsto nelle fasi di progettazione ed
                      esecuzione.
                    </li>
                    <li>
                      Assistenza al collaudo delle opere e la loro
                      certificazione.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-4 col-md-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5}
            >
              <div className="team-item rounded overflow-hidden">
                <div className="p-4 text-center">
                  <h5>Impianti Speciali</h5>
                  <ul className="text-start">
                    <li>Impianti di rivelazione incendio</li>
                    <li>Impianti TVCC</li>
                    <li>Impianti antintrusione</li>
                    <li>Impianti scariche atmosferiche</li>
                    <li>Impianti telefonici e trasmissione dati</li>
                    <li>Impianti EVAC</li>
                    <li>Quadri elettrici</li>
                    <li>Illuminazione di sicurezza</li>
                    <li>Impianti tecnologici</li>
                    <li>Diffusione sonora</li>
                    <li>Impianti di videoproiezione</li>
                    <li>Impianti di conversazione</li>
                    <li>TV digitale terrestre e satellitare</li>
                    <li>Rifasamento elettrico</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-4 col-md-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={6}
            >
              <div className="team-item rounded overflow-hidden">
                <div className="p-4 text-center">
                  <h5>Collaudi e certificazioni</h5>
                  <p>
                    Collaudi e start-up degli impianti meccanici ed elettrici
                    civili ed industriali. Redazione di Dichiarazioni di
                    rispondenza per impianti antecedenti il D.M. 37/08.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Team End */}
    </>
  );
};

export default Page;
