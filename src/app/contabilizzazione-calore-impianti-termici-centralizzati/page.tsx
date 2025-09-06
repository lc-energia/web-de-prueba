
import PageHeader from '@/components/PageHeader';

const Page = () => {
  return (
    <>
      <PageHeader
        title="Contabilizzazione e Ripartizione del Calore"
        breadcrumb="Contabilizzazione e Ripartizione del Calore"
      />

      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h6 className="text-primary">
              Contabilizzazione del Calore in Impianti Termici Centralizzati
            </h6>
            <p className="mb-4">
              Sistemi di contabilizzazione e ripartizione del calore
            </p>
            {/* <img src="img/style.png" alt="Vantaggi" className="img-fluid mt-2" style="max-width: 80%; height: auto;"> */}
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <p>
                  In Italia fino a pochi anni orsono la ripartizione delle
                  spese di riscaldamento, nei condomini dotati di impianto
                  centralizzato, avveniva prevalentemente a millesimi di
                  riscaldamento indipendentemente dall’effettivo utilizzo del
                  singolo condomino.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <h5 className="mb-3">Tecnologia Avanzata</h5>
                <p>
                  Negli ultimi decenni, con l’avvento della tecnologia, è
                  possibile misurare il calore effettivo prelevato da un
                  impianto termico centralizzato per riscaldare la propria unità
                  immobiliare.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <h5 className="mb-3">Gestione Autonoma del Riscaldamento</h5>
                <p>
                  Questi sistemi di contabilizzazione del calore, abbinati a
                  sistemi di termoregolazione individuali, permettono al singolo
                  condomino di gestire autonomamente il riscaldamento nella sua
                  abitazione e di pagare in base all’effettivo consumo e
                  prelievo di energia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
};

export default Page;
