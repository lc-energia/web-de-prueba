
import PageHeader from '@/components/PageHeader';

const Page = () => {
  return (
    <>
      <PageHeader title="Impianti Geotermici" breadcrumb="Impianti Geotermici" />

      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h6 className="text-primary">IL NOSTRO INTERVENTO</h6>
            <p className="mb-4">
              L’aumento dei costi energetici e dell’inquinamento atmosferico
              sono tra i problemi più importanti da risolvere per affrontare il
              nostro futuro.
            </p>
          </div>
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            {/* <img src="img/natural7.png" alt="Vantaggi" className="img-fluid mt-2" style="max-width: 80%; height: auto;"> */}
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <p>
                  Per questo da alcuni anni ormai, la normativa europea
                  prescrive l’adozione di tecnologie funzionanti con fonti
                  rinnovabili e pulite quali il sole, il vento e il terreno
                  nell’ambito delle nuove costruzioni e delle ristrutturazioni
                  edilizie.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <h5 className="mb-3">REALIZZAZIONE</h5>
                <p>
                  Gli impianti geotermici sono sistemi che richiedono una
                  corretta valutazione che LC Energia effettua per ogni impianto
                  con l’ausilio di tecnici qualificati sia nel campo della
                  tecnica ingegneristica che di quella geologica.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <h5 className="mb-3">TECNOLOGIA DELL'IMPIANTO</h5>
                <p>
                  Il D.Lgs 199/21 oggi impone che il 60% dell’energia termica
                  consumata dai nuovi edifici e nel caso di ristrutturazioni
                  importanti, sia prodotta da fonti rinnovabili. Questo obbligo
                  pone la necessità di definire preventivamente la tipologia dei
                  sistemi di climatizzazione da installare.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <p>
                  I plus di questa soluzione sono i seguenti: sistema
                  efficiente, soluzione per eliminare problematiche
                  atmosferiche, impianto che sfrutta una risorsa inesauribile di
                  energia, edificio valorizzato, maggior sicurezza degli
                  impianti e possibilità di rinunciare all'allaccio del
                  gas-metano.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <h5 className="mb-3">CLIMATIZZAZIONE ESTIVA</h5>
                <p>
                  Abbattere le bollette energetiche, ridurre i consumi di
                  combustibile e valorizzare la prestazione energetica della
                  propria abitazione è possibile con i nuovi sistemi geotermici
                  di terza generazione, che presentano una efficienza media
                  maggiore del 20% rispetto ai precedenti sistemi.
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
