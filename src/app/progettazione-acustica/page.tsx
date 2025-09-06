
import PageHeader from '@/components/PageHeader';

const Page = () => {
  return (
    <>
      <PageHeader title="Progettazione Acustica" breadcrumb="Progettazione Acustica" />

      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h6 className="text-primary">Progettazione Acustica</h6>
            <p className="mb-4">
              LC Energia offre una consulenza specifica per il settore acustico
              con la redazione delle pratiche di valutazione del clima acustico.
            </p>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <h5 className="mb-3">Isolamento da Rumori</h5>
                <p>
                  Offriamo servizi di analisi e progettazione per garantire un
                  adeguato isolamento acustico delle strutture, comprese:
                </p>
                <ul className="text-start">
                  <li>
                    Redazione delle pratiche di valutazione del clima acustico.
                  </li>
                  <li>
                    Analisi dei requisiti acustici delle strutture (D.P.C.M.
                    5/12/97).
                  </li>
                  <li>Verifiche di impatto acustico.</li>
                  <li>
                    Assistenza lavori e collaudo acustico degli edifici.
                  </li>
                </ul>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <p>
                  LC Energia si impegna a fornire soluzioni efficaci e conformi
                  alle normative vigenti, garantendo il comfort acustico degli
                  ambienti.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <p>
                  La nostra esperienza nel settore acustico ci consente di
                  assistere i clienti in ogni fase del processo, dalla
                  progettazione alla certificazione finale.
                </p>
              </div>
            </div>
          </div>
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            {/* <img src="img/natural8.png" alt="Vantaggi" className="img-fluid mt-2" style="max-width: 80%; height: auto;"> */}
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
};

export default Page;
