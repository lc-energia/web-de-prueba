'use client';
import PageHeader from '@/components/PageHeader';
import InfoCarousel from '@/components/InfoCarousel';

const Page = () => {
  const carouselItems = [
    <div>
      <h5 className="mb-3">Integrazione con Fotovoltaico</h5>
      <p>Progettiamo stazioni di ricarica che si integrano perfettamente con il tuo impianto fotovoltaico, per una mobilità 100% green e a costo zero.</p>
    </div>,
    <div>
      <h5 className="mb-3">Soluzioni per Privati e Aziende</h5>
      <p>Offriamo soluzioni su misura sia per l’installazione di wallbox domestiche sia per la realizzazione di stazioni di ricarica aziendali o pubbliche.</p>
    </div>,
    <div>
      <h5 className="mb-3">Gestione Intelligente</h5>
      <p>Sistemi di gestione intelligente del carico per ottimizzare i tempi di ricarica e proteggere la rete elettrica dell’edificio.</p>
    </div>
  ];

  return (
    <>
      <PageHeader title="Stazioni di Ricarica" breadcrumb="Stazioni di Ricarica" />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
            <h6 className="text-primary">Stazioni di Ricarica per Veicoli Elettrici</h6>
            <p className="mb-4">La mobilità del futuro è elettrica. Progettiamo e installiamo stazioni di ricarica efficienti e intelligenti.</p>
          </div>
          <InfoCarousel items={carouselItems} />
        </div>
      </div>
    </>
  );
};

export default Page;