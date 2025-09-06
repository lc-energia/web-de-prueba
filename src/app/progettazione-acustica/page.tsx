'use client';
import PageHeader from '@/components/PageHeader';
import ScrollableCardList from '@/components/ScrollableCardList';

const Page = () => {
  const cardItems = [
    <div key="impatto">
      <h5 className="mb-3">Valutazione Impatto Acustico</h5>
      <p>Analisi previsionale per nuove costruzioni o modifiche, per garantire il rispetto dei limiti di legge e il comfort acustico.</p>
    </div>,
    <div key="requisiti">
      <h5 className="mb-3">Requisiti Acustici Passivi</h5>
      <p>Progettazione degli elementi costruttivi per assicurare l’isolamento acustico necessario tra diverse unità immobiliari.</p>
    </div>,
    <div key="classificazione">
      <h5 className="mb-3">Classificazione Acustica</h5>
      <p>Determinazione della classe acustica degli edifici secondo le normative vigenti, un requisito fondamentale per la qualità edilizia.</p>
    </div>
  ];

  return (
    <>
      <PageHeader title="Progettazione Acustica" breadcrumb="Progettazione Acustica" />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
            <h6 className="text-primary">Progettazione Acustica</h6>
            <p className="mb-4">L’inquinamento acustico è un problema rilevante. Offriamo soluzioni conformi alla Legge Quadro 447/95 per la progettazione e la verifica dei requisiti acustici.</p>
          </div>
          <ScrollableCardList items={cardItems} />
        </div>
      </div>
    </>
  );
};

export default Page;
