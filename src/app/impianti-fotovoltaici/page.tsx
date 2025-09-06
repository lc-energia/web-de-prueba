'use client';
import PageHeader from '@/components/PageHeader';
import ScrollableCardList from '@/components/ScrollableCardList';

const Page = () => {
  const cardItems = [
    <div key="autoproduzione">
      <h5 className="mb-3">Autoproduzione Energetica</h5>
      <p>Riduci i tuoi consumi energetici producendo la tua energia elettrica. Un impianto fotovoltaico è un investimento che si ripaga nel tempo.</p>
    </div>,
    <div key="accumulo">
      <h5 className="mb-3">Sistemi di Accumulo</h5>
      <p>Integra un sistema di accumulo per massimizzare l’autoconsumo e garantirti una riserva di energia anche durante le ore notturne.</p>
    </div>,
    <div key="chiavi-in-mano">
      <h5 className="mb-3">Soluzioni Chiavi in Mano</h5>
      <p>Offriamo un servizio completo: dalla progettazione all’installazione, fino alla gestione delle pratiche burocratiche per gli incentivi statali.</p>
    </div>
  ];

  return (
    <>
      <PageHeader title="Impianti Fotovoltaici" breadcrumb="Impianti Fotovoltaici" />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
            <h6 className="text-primary">Impianto Fotovoltaico e Accumulo Elettrico</h6>
            <p className="mb-4">Progettiamo e installiamo impianti fotovoltaici chiavi in mano per l’autoproduzione di energia elettrica.</p>
          </div>
          <ScrollableCardList items={cardItems} />
        </div>
      </div>
    </>
  );
};

export default Page;
