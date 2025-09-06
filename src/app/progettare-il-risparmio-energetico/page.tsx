
import PageHeader from '@/components/PageHeader';

const Page = () => {
  return (
    <>
      <PageHeader
        title="Progettare il Risparmio Energetico"
        breadcrumb="Progettare il Risparmio Energetico"
      />

      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h6 className="text-primary">Progettare il Risparmio Energetico</h6>
            <p className="mb-4">
              L’obiettivo del risparmio energetico è perseguibile solo
              attraverso competenze specifiche.
            </p>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <h5 className="mb-3">Competenze Specifiche</h5>
                <p>È fondamentale avere esperienza e abilitazioni come:</p>
                <ul className="text-start">
                  <li>Esperto gestione energia.</li>
                  <li>Energy manager.</li>
                  <li>Leed certificator.</li>
                </ul>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <h5 className="mb-3">Strumenti e Incentivi</h5>
                <p>
                  Numerosi strumenti tecnici e finanziari sono oggi a
                  disposizione del fruitore interessato ai temi della
                  sostenibilità, con la possibilità di effettuare investimenti
                  per l’efficienza energetica sfruttando gli incentivi
                  governativi.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <p>
                  LC Energia offre supporto e consulenza per orientarsi nel
                  panorama degli incentivi e realizzare progetti di efficienza
                  energetica in modo ottimale.
                </p>
              </div>
            </div>
          </div>
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            {/* <img src="img/natural6.png" alt="Vantaggi" className="img-fluid mt-2" style="max-width: 80%; height: auto;"> */}
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
};

export default Page;
