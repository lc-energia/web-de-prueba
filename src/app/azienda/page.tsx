'use client';
import PageHeader from '@/components/PageHeader';
import ScrollableCardList from '@/components/ScrollableCardList';

const Page = () => {
  const cardItems = [
    <div>
      <h5 className="mb-3">Esperienza</h5>
      <p>Oltre 25 anni di esperienza nel campo della consulenza, progettazione e realizzazione impiantistica civile e industriale.</p>
    </div>,
    <div>
      <h5 className="mb-3">Aggiornamento</h5>
      <p>Continuo e sistematico aggiornamento dei nostri tecnici con specifici programmi di formazione per fornire soluzioni all'avanguardia.</p>
    </div>,
    <div>
      <h5 className="mb-3">Tecnologia</h5>
      <p>Proponiamo soluzioni tecnologiche innovative, integrate con la struttura architettonica e nel pieno rispetto delle normative di settore.</p>
    </div>
  ];

  return (
    <>
      <PageHeader title="Azienda" breadcrumb="Azienda" />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
            <h6 className="text-primary">La Nostra Azienda</h6>
            <p className="mb-4">LC ENERGIA è una società ingegneristica composta da tecnici qualificati con esperienza trentennale.</p>
          </div>
          <ScrollableCardList items={cardItems} />
        </div>
      </div>
    </>
  );
};

export default Page;
