'use client';
import PageHeader from '@/components/PageHeader';
import ScrollableCardList from '@/components/ScrollableCardList';

const Page = () => {
  const cardItems = [
    <div>
      <h5 className="mb-3">Energia Stabile e Continua</h5>
      <p>A differenza di altre fonti rinnovabili, la geotermia fornisce energia in modo costante, 24 ore su 24, 365 giorni all’anno.</p>
    </div>,
    <div>
      <h5 className="mb-3">Impianti Puri o Integrati</h5>
      <p>Realizziamo impianti geotermici puri o integrati con altri sistemi di produzione dell’energia per massimizzare l’efficienza.</p>
    </div>,
    <div>
      <h5 className="mb-3">Sostenibilità e Risparmio</h5>
      <p>Un impianto geotermico riduce drasticamente le emissioni di CO2 e permette un notevole risparmio sui costi di riscaldamento e raffrescamento.</p>
    </div>
  ];

  return (
    <>
      <PageHeader title="Impianti Geotermici" breadcrumb="Impianti Geotermici" />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
            <h6 className="text-primary">Impianto Geotermico</h6>
            <p className="mb-4">Sfrutta il calore naturale della Terra per riscaldare e raffrescare i tuoi ambienti in modo efficiente e sostenibile.</p>
          </div>
          <ScrollableCardList items={cardItems} />
        </div>
      </div>
    </>
  );
};

export default Page;
