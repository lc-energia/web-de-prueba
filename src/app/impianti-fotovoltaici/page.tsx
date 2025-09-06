
import PageHeader from '@/components/PageHeader';

const Page = () => {
  return (
    <>
      <PageHeader
        title="Impianti Fotovoltaici"
        breadcrumb="Impianti Fotovoltaici"
      />

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
              Progettiamo e installiamo impianti fotovoltaici "chiavi in mano"
            </p>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <p>
                  Progettiamo e installiamo impianti fotovoltaici "chiavi in
                  mano" partendo da una valutazione preliminare che considera i
                  seguenti elementi di base:
                </p>
                <ul className="text-start">
                  <li>Consumo annuo dell'utenza</li>
                  <li>Spazio disponibile</li>
                  <li>Orientamento dell'area di posa dei pannelli</li>
                  <li>
                    Presenza di ombreggiamenti e possibili soluzioni
                    migliorative
                  </li>
                </ul>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <h5 className="mb-3">Perché conviene?</h5>
                <p>
                  Detrazione fiscale al 50% per edifici residenziali. Ad oggi
                  esiste la possibilità di recuperare il 50% delle spese
                  sostenute per l’acquisto e la realizzazione di un sistema
                  fotovoltaico grazie agli incentivi governativi.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <h5 className="mb-3">Scambio sul posto</h5>
                <p>
                  Il meccanismo dello scambio sul posto è una modalità di
                  gestione dell’energia elettrica che permette al soggetto
                  responsabile di un impianto fotovoltaico di immettere in rete
                  l’energia elettrica prodotta ma non immediatamente
                  autoconsumata, per poi prelevarla in un momento differente.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <h5 className="mb-3">Autoconsumo</h5>
                <p>
                  L’energia prodotta dall’impianto fotovoltaico può essere
                  direttamente auto-consumata dall’abitazione, garantendo così
                  un notevole risparmio in bolletta.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <h5 className="mb-3">
                  Normativa per l’incremento delle energie rinnovabili
                </h5>
                <p>
                  Il decreto legislativo 199/2021 ha stabilito nuovi obblighi
                  che dovranno essere rispettati in merito all’utilizzo di
                  energia prodotta da fonti rinnovabili negli stabili di nuova
                  costruzione o soggetti a ristrutturazioni.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      {/* colaborazion */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h5 className="mb-3">PARTNERS e collaborazioni</h5>
            <p>
              LC Energia collabora da anni con le migliori marche del settore,
              garantendo ai propri Clienti qualità e affidabilità dei prodotti
              installati.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item rounded overflow-hidden">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                        .image-container {\n                            width: 150px; /* Ancho fijo para cada contenedor */\n                            height: 150px; /* Alto fijo para cada contenedor */\n                            display: flex; /* Permite centrar la imagen */\n                            justify-content: center; /* Centra horizontalmente */\n                            align-items: center; /* Centra verticalmente */\n                            overflow: hidden; /* Oculta cualquier parte que sobresalga */\n                            margin: 3px; /* Espacio entre imágenes */\n                            border: 1px solid #ccc; /* (Opcional) borde para distinguir los contenedores */\n                        }\n                    \n                        .image-container img {\n                            max-width: 100%; /* Asegura que la imagen no se salga del contenedor */\n                            max-height: 100%; /* Asegura que la imagen no se salga del contenedor */\n                            object-fit: contain; /* Mantiene la proporción de la imagen sin recortes */\n                        }\n                    ",
                  }}
                />
                <div className="d-flex justify-content-between flex-wrap">
                  <div className="image-container">
                    <img
                      className="img-fluid"
                      src="/img/image8.png"
                      alt="Colaborador 1"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      className="img-fluid"
                      src="/img/image1.png"
                      alt="Colaborador 1"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      className="img-fluid"
                      src="/img/image2.png"
                      alt="Colaborador 2"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      className="img-fluid"
                      src="/img/image3.png"
                      alt="Colaborador 3"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      className="img-fluid"
                      src="/img/image4.png"
                      alt="Colaborador 4"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      className="img-fluid"
                      src="/img/image5.png"
                      alt="Colaborador 5"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      className="img-fluid"
                      src="/img/image6.png"
                      alt="Colaborador 6"
                    />
                  </div>
                  <div className="image-container">
                    <img
                      className="img-fluid"
                      src="/img/image7.png"
                      alt="Colaborador 7"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* colaborazion */}
    </>
  );
};

export default Page;
