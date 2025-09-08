
import PageHeader from '@/components/PageHeader';
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <PageHeader title="Azienda" breadcrumb="Azienda" />

      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h6 className="text-primary">Azienda</h6>
            <h1 className="mb-4">
              Il valore dell&apos;esperienza per l&apos;efficienza ed il risparmio
              energetico
            </h1>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <p>
                  LC Energia vanta di personale qualificato e con grande
                  esperienza nel settore della progettazione e realizzazione di
                  impianti civili e industriali. L&apos;impegno dell&apos;azienda è volto a
                  contribuire in prima linea agli obiettivi Europei e Nazionali
                  per la decarbonizzazione e l&apos;efficientamento energetico. Per
                  questo LC Energia, oltre a fornire consulenza e progettazione
                  per gli impianti termici, si è specializzata nella
                  realizzazione di impianti fotovoltaici sia nel settore civile
                  che industriale.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <p>
                  Sfruttando le nostre competenze operiamo sempre nel rispetto
                  degli obblighi legislativi e normativi per fornire al cliente
                  un servizio a regola d&apos;arte. Attraverso interventi di
                  riqualificazione architettonica e impiantistica su diversi
                  edifici nel campo industriale, civile, pubblico e nei processi
                  produttivi, LC Energia permette ai suoi clienti di ottenere
                  significativi risparmi energetici oltre a una miglior qualità
                  di vita.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <p>
                  Il successo di LC Energia deriva dalla corretta applicazione
                  delle conoscenze tecniche e dall&apos;utilizzo razionale delle
                  nuove tecnologie per la produzione di energia e la riduzione
                  dei consumi. La società opera attraverso due principali
                  settori operativi:
                </p>
                <ul>
                  <li>
                    Consulenza tecnica e progettazione che include anche attività
                    di prevenzione incendi, acustica e assistenza ai lavori.
                  </li>
                  <li>
                    Realizzazione di impianti ad alto profilo tecnologico per la
                    produzione di energia elettrica e termica per l&apos;abbattimento
                    dei consumi energetici.
                  </li>
                </ul>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <p>
                  LC Energia si impegna a offrire soluzioni su misura per le
                  esigenze specifiche dei clienti, garantendo risultati
                  tangibili attraverso un percorso collaudato che include la
                  diagnosi energetica, la valutazione degli interventi e la
                  stima economica degli investimenti proposti. Grazie a
                  un&apos;approfondita conoscenza del settore e alla competenza
                  tecnica, LC Energia si posiziona come un partner affidabile per
                  il raggiungimento degli obiettivi di efficienza energetica e
                  sostenibilità.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h6 className="text-primary">
              Produzione di energia pulita per salvare l&apos;ambiente
            </h6>
            <h1 className="mb-4">I motivi per scegliere LC Energia</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded overflow-hidden">
                <div className="position-relative p-4">
                  <div className="service-icon">
                    <i className="fa fa-solar-panel fa-3x" />
                  </div>
                  <h4 className="mb-3">
                    Soluzioni efficienti, ottimizzazione dei sistemi
                  </h4>
                  <p>
                    Ogni progetto/impianto è sviluppato dando priorità
                    all&apos;affidabilità dei sistemi e al controllo dei costi di
                    realizzazione ed esercizio.
                  </p>
                  <a className="small fw-medium" href="">
                    Read More
                    <i className="fa fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded overflow-hidden">
                <div className="position-relative p-4">
                  <div className="service-icon">
                    <i className="fa fa-wind fa-3x" />
                  </div>
                  <h4 className="mb-3">Energia rinnovabile consapevole</h4>
                  <p>
                    Progettiamo il futuro sfruttando l&apos;apporto delle energie
                    rinnovabili, nel rispetto delle normative e laddove risulta
                    tecnicamente ed economicamente conveniente.
                  </p>
                  <a className="small fw-medium" href="">
                    Read More
                    <i className="fa fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded overflow-hidden">
                <div className="position-relative p-4">
                  <div className="service-icon">
                    <i className="fa fa-lightbulb fa-3x" />
                  </div>
                  <h4 className="mb-3">
                    Consulenza specializzata nell&apos;ambito della prevenzione
                    incendi
                  </h4>
                  <p>
                    Siamo specializzati nella redazione di attività ai fini
                    dell&apos;ottenimento del Certificato di Prevenzione Incendi.
                  </p>
                  <a className="small fw-medium" href="">
                    Read More
                    <i className="fa fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded overflow-hidden">
                <div className="position-relative p-4">
                  <div className="service-icon">
                    <i className="fa fa-headset fa-3x" />
                  </div>
                  <h4 className="mb-3">
                    Supporto e consulenza nel campo dell&apos;acustica degli edifici
                  </h4>
                  <p>
                    Offriamo una consulenza specifica per il settore acustico
                    sia in ambito civile che industriale.
                  </p>
                  <a className="small fw-medium" href="">
                    Read More
                    <i className="fa fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* colaborazion */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h6 className="text-primary">Collaborazioni</h6>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item rounded overflow-hidden">
                <div className="d-flex">
                  <Image className="img-fluid w-75" src="/img/image3.png" alt="" width={300} height={300} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* colaborazion */}

      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="testimonial-item text-center">
            <div className="testimonial-text text-center rounded p-4">
              <p>
                Iscritti ai rispettivi Albi Professionali Provinciali <br />
                Certificatori Energetici di cui al D.G.R. 8/5018 – 20.07.2007{' '}
                <br />
                Accreditati Energy Building Manager, Regione Lombardia ai sensi
                del D.G.R. VIII/8355 del 5 Novembre 2008 <br />
                Iscritti nell&apos;elenco dei progettisti antincendio del Ministero
                dell&apos;Interno di cui al D.Lgs n.139/2006 (ex Legge 818/84) <br />
                Verificatori in materia di sicurezza degli impianti ai sensi del
                DM 22/1/08 n. 37 <br />
                Consulenti tecnici del Tribunale di Monza
              </p>
            </div>
          </div>
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h6 className="text-primary">Membri del Team Esperti</h6>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item rounded overflow-hidden">
                <div className="p-4">
                  <h5>Colzani Roberto</h5>
                  <span>Perito Industriale</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item rounded overflow-hidden">
                <div className="p-4">
                  <h5>Colzani Luca</h5>
                  <span>Ingegnere Energetico</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item rounded overflow-hidden">
                <div className="p-4">
                  <h5>Ricchetti Lorenzo</h5>
                  <span>Ingegnere Energetico</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item rounded overflow-hidden">
                <div className="p-4">
                  <h5>Mauri Silvia</h5>
                  <span>Ingegnere Edile</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item rounded overflow-hidden">
                <div className="p-4">
                  <h5>Galtarossa Barbara</h5>
                  <span>Amministrazione</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item rounded overflow-hidden">
                <div className="p-4">
                  <h5>Colzani Eliana</h5>
                  <span>Creativo Multidisciplinare</span>
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
