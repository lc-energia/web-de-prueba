'use client';
import PageHeader from '@/components/PageHeader';
import ScrollableCardList from '@/components/ScrollableCardList';

const Page = () => {
  const cardItems = [
    <div>
      <h5 className="mb-3">Contabilizzazione Diretta</h5>
      <p>Installazione di contatori di calore per misurare l’energia termica volontaria prelevata dall’unità immobiliare.</p>
    </div>,
    <div>
      <h5 className="mb-3">Contabilizzazione Indiretta</h5>
      <p>Applicazione di ripartitori di calore sui singoli corpi scaldanti e installazione di totalizzatori di calore.</p>
    </div>,
    <div>
      <h5 className="mb-3">Ripartizione Spese</h5>
      <p>La spesa totale per il servizio di riscaldamento viene ripartita in base ai consumi registrati, secondo la norma UNI 10200.</p>
    </div>
  ];

  return (
    <>
      <PageHeader title="Contabilizzazione Calore" breadcrumb="Contabilizzazione Calore" />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
            <h6 className="text-primary">Contabilizzazione e Ripartizione del Calore</h6>
            <p className="mb-4">Progettiamo sistemi di contabilizzazione e ripartizione del calore per edifici con più unità immobiliari, conformemente al D.Lgs. 102/2014.</p>
          </div>
          <ScrollableCardList items={cardItems} />
        </div>
      </div>
    </>
  );
};

export default Page;
