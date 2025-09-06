'use client';
import PageHeader from '@/components/PageHeader';
import InfoCarousel from '@/components/InfoCarousel';

const Page = () => {
  const carouselItems = [
    <div key="diagnosi">
      <h5 className="mb-3">Diagnosi Energetica</h5>
      <p>Identifichiamo le criticità del sistema edificio/impianto attraverso analisi dettagliate e software di calcolo per proporre soluzioni sostenibili.</p>
    </div>,
    <div key="riqualificazione">
      <h5 className="mb-3">Riqualificazione Centrali Termiche</h5>
      <p>Proponiamo interventi di riqualificazione per migliorare l’efficienza, ridurre i consumi e adeguare gli impianti alle normative vigenti.</p>
    </div>,
    <div key="soluzioni">
      <h5 className="mb-3">Soluzioni Tecnico-Economiche</h5>
      <p>Valutiamo e proponiamo soluzioni che bilanciano l’efficienza energetica con la sostenibilità economica dell’investimento.</p>
    </div>
  ];

  return (
    <>
      <PageHeader title="Diagnosi e Riqualificazione" breadcrumb="Diagnosi e Riqualificazione" />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
            <h6 className="text-primary">Diagnosi Energetica e Riqualificazione Centrali Termiche</h6>
            <p className="mb-4">La nostra esperienza al servizio dell’efficienza per valutare e proporre soluzioni sostenibili sotto il profilo tecnico ed economico.</p>
          </div>
          <InfoCarousel items={carouselItems} />
        </div>
      </div>
    </>
  );
};

export default Page;