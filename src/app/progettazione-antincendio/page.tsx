
import PageHeader from '@/components/PageHeader';

const Page = () => {
  return (
    <>
      <PageHeader
        title="Progettazione Prevenzioni Incendi"
        breadcrumb="Progettazione Prevenzioni Incendi"
      />

      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h6 className="text-primary">Progettazione Prevenzioni Incendi</h6>
            <p className="mb-4">
              Siamo specializzati nella redazione di pratiche per l’ottenimento
              del Certificato di Prevenzione Incendi o S.C.I.A. presso i
              Comandi Provinciali dei Vigili del Fuoco.
            </p>
          </div>
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <img
              src="/img/natural4.png"
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
                <h5 className="mb-3">Servizi Offerti</h5>
                <p>
                  Offriamo una gamma completa di servizi per la prevenzione
                  incendi, tra cui:
                </p>
                <ul className="text-start">
                  <li>
                    Ottenimento delle autorizzazioni dei Comandi VVF, anche
                    eventualmente con istanza di deroga.
                  </li>
                  <li>Progettazione architettonica di prevenzione incendi.</li>
                  <li>Progettazione impiantistica antincendio.</li>
                  <li>
                    Certificazione di manufatti, impianti e strutture edilizie.
                  </li>
                </ul>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <p>
                  La nostra esperienza include l’asseverazione delle opere di
                  prevenzione incendi a firma di un tecnico iscritto nell’elenco
                  del Ministero degli Interni ai sensi del DLgs. 139/06, nonché
                  certificazioni antincendio e di resistenza al fuoco delle
                  strutture.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <p>
                  LC Energia si impegna a garantire che tutti i nostri progetti
                  rispettino le normative vigenti, offrendo soluzioni efficienti
                  e sicure per la protezione antincendio.
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
