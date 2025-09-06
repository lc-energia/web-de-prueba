
import PageHeader from '@/components/PageHeader';

const Page = () => {
  return (
    <>
      <PageHeader
        title="Riqualificazione di centrali termiche esistenti"
        breadcrumb="Riqualificazione di centrali termiche esistenti"
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
              Riqualificazione di centrali termiche esistenti
            </h6>
            <p className="mb-4">
              LC Energia offre consulenza e progettazione per la
              riqualificazione delle centrali termiche esistenti civili e
              industriali, al fine di conseguire il miglioramento
              dell’efficienza energetica.
            </p>
          </div>
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            {/* <img src="img/natural.png" alt="Vantaggi" className="img-fluid mt-2" style="max-width: 80%; height: auto;"> */}
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <p>
                  Sotto il profilo normativo: adeguamento sotto il profilo
                  della sicurezza antincendio e ambientale comprese denunce
                  INAIL (D.M. 1/12/75), pratiche gas combustibile (D.M.
                  37/2008, Delibera 40/08), certificazione prevenzione incendi
                  (D.P.R. 37/98), diagnosi e certificazione energetica (decreto
                  311/07 e delibere Regione Lombardia 8745/08 e successivi
                  aggiornamenti).
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <h5 className="mb-3">
                  Centrali termiche esistenti con generatori di età maggiore di
                  15 anni
                </h5>
                <p>
                  La normativa regionale Lombardia DGR 3502 del 5/8/2020,
                  aggiornata dalla DGR n.816 2023 fornisce le linee guida per
                  la riqualificazione delle centrali termiche esistenti civili e
                  industriali con generatori aventi potenza superiore a 116,3
                  kW, di età superiore a 15 anni e con rendimento di combustione
                  superiore ai limiti minimi previsti per legge.
                </p>
                <p>
                  Tale normativa, nell’ottica dell’efficientamento energetico e
                  della riduzione delle emissioni di gas climalteranti, prevede
                  la presentazione di una diagnosi energetica, redatta ai sensi
                  delle norme UNI CEI EN 16247-1/2: 2022.
                </p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <h5 className="mb-3">Ambiti di riqualificazione</h5>
                <ul className="text-start">
                  <li>
                    Integrazione dei generatori esistenti con nuovi apparecchi
                    alimentati da energia rinnovabile quali pompe di calore,
                    solare termico, nuovi produttori di acqua calda sanitaria.
                  </li>
                  <li>
                    Inserimento di impianti fotovoltaici per la autoproduzione
                    di energia elettrica.
                  </li>
                  <li>
                    Riqualifica del sistema di emissione, termoregolazione.
                  </li>
                  <li>Sostituzione dei serramenti obsoleti.</li>
                  <li>
                    Riqualifica dell’involucro edilizio mediante coibentazione
                    delle strutture disperdenti, in particolare pareti esterne e
                    copertura.
                  </li>
                </ul>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                <p>
                  LC Energia tramite i propri tecnici qualificati ed accreditati
                  offre la necessaria consulenza per la redazione della
                  documentazione richiesta, la quale risulta di fondamentale
                  importanza per poter valutare e definire gli eventuali
                  interventi di efficientamento dell’edificio.
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
