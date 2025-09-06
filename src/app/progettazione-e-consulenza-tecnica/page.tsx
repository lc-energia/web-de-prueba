
import PageHeader from '@/components/PageHeader';

const Page = () => {
  return (
    <>
      <PageHeader
        title="Progettazione e consulenza tecnica"
        breadcrumb="Progettazione e consulenza tecnica"
      />

      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h6 className="text-primary">Progettazione e consulenza tecnica</h6>
            <p className="mb-4">
              Nella realizzazione di opere impiantistiche vi è la necessità di
              gestire le diverse fasi operative in modo da coordinare lo
              svolgimento dei lavori e garantire la funzionalità del prodotto
              finale.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
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
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
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
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
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
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
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
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
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
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.9s"
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
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
    </>
  );
};

export default Page;
