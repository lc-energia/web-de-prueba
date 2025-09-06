
import PageHeader from '@/components/PageHeader';

const Page = () => {
  return (
    <>
      <PageHeader title="Stazioni di Ricarica" breadcrumb="Stazioni di Ricarica" />

      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h6 className="text-primary">STAZIONI DI RICARICA</h6>
            <img
              src="/img/scame.png"
              alt="Vantaggi"
              className="img-fluid mt-2"
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <p>
                  Caricare l'auto direttamente a casa, invece che nelle stazioni
                  di ricarica pubbliche, offre la possibilità di sfruttare
                  l’energia prodotta dai pannelli solari della tua casa,
                  rendendo così questa soluzione più ecologica ed economicamente
                  conveniente.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <h5 className="mb-3">Vantaggi</h5>
                <p>
                  La potenza erogata da una stazione domestica consente di
                  raggiungere una maggiore velocità di ricarica, rispetto
                  all’utilizzo delle normali prese elettriche. Inoltre,
                  attivando la funzione Dynamic Power Management (che rappresenta
                  un'opzione indispensabile nelle installazioni residenziali in
                  cui la potenza disponibile è limitata), si consente al wall
                  box di modulare la corrente destinata alla ricarica del
                  veicolo elettrico basandosi sul consumo istantaneo di tutti
                  gli elettrodomestici, tenendo anche in considerazione la
                  corrente generata da pannelli fotovoltaici o altre fonti
                  rinnovabili, (se presenti). Una volta attivata la funzione
                  Dynamic Power Management, è possibile scegliere tra 3 diverse
                  modalità di funzionamento: Full, EcoSmart e EcoPlus.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <h5 className="mb-3">FAQ</h5>
                <p>
                  Come ricaricare la tua auto con la nostra stazione di ricarica
                  innovativa? La nostra stazione di ricarica offre la possibilità
                  di caricare la tua auto in modo intelligente. Quando è attiva
                  la funzione Dynamic Power Management, è possibile scegliere
                  tra 3 diverse modalità di funzionamento: Full, Ecosmart e
                  Ecoplus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h6 className="text-primary">Modalità di Funzionamento</h6>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item rounded overflow-hidden">
                <div className="d-flex">
                  <div className="text-center mb-4">
                    {" "}
                    {/* Añadido un margen inferior */}
                    <img
                      className="img-fluid w-75 mx-auto"
                      src="/img/full.png"
                      alt="FULL Mode"
                      style={{ margin: "20px 0" }}
                    />{" "}
                    {/* Margen superior e inferior */}
                  </div>
                </div>
                <div className="p-4">
                  <h5>FULL Mode</h5>
                  <span>
                    Ricarica alla massima potenza, in base alla richiesta
                    energetica del veicolo. Utilizza sia la potenza disponibile
                    dalla rete che quella generata dall'impianto locale di
                    produzione da fonte rinnovabile (se presente).
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item rounded overflow-hidden">
                <div className="d-flex">
                  <div className="text-center mb-4">
                    {" "}
                    {/* Añadido un margen inferior */}
                    <img
                      className="img-fluid w-75 mx-auto"
                      src="/img/ecosmart.png"
                      alt="FULL Mode"
                      style={{ margin: "20px 0" }}
                    />{" "}
                    {/* Margen superior e inferior */}
                  </div>
                </div>
                <div className="p-4">
                  <h5>ECOSMART</h5>
                  <span>
                    Utilizza la potenza generata dalla fonte rinnovabile più un
                    contributo minimo proveniente dalla rete. La percentuale
                    proveniente dalla rete è predefinita e può essere
                    incrementata dall'utente per garantire continuità di carica.
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item rounded overflow-hidden">
                <div className="d-flex">
                  <div className="text-center mb-4">
                    {" "}
                    {/* Añadido un margen inferior */}
                    <img
                      className="img-fluid w-75 mx-auto"
                      src="/img/ecoplus.png"
                      alt="FULL Mode"
                      style={{ margin: "20px 0" }}
                    />{" "}
                    {/* Margen superior e inferior */}
                  </div>
                </div>
                <div className="p-4">
                  <h5>ECOPLUS</h5>
                  <span>
                    Utilizza solo la potenza derivante da un impianto di
                    produzione locale da fonte rinnovabile. La carica è
                    totalmente dipendente dalla potenza generata e può essere
                    soggetta a sospensioni.
                  </span>
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
