'use client';
import PageHeader from '@/components/PageHeader';
import ScrollableCardList from '@/components/ScrollableCardList';

const Page = () => {
  const cardItems = [
    <div key="competenze">
      <h5 className="mb-3">Competenze Specifiche</h5>
      <p>È fondamentale avere esperienza e abilitazioni come:</p>
      <ul className="text-start">
        <li>Esperto gestione energia.</li>
        <li>Energy manager.</li>
        <li>Leed certificator.</li>
      </ul>
    </div>,
    <div key="strumenti">
      <h5 className="mb-3">Strumenti e Incentivi</h5>
      <p>
        Numerosi strumenti tecnici e finanziari sono oggi a
        disposizione del fruitore interessato ai temi della
        sostenibilità, con la possibilità di effettuare investimenti
        per l’efficienza energetica sfruttando gli incentivi
        governativi.
      </p>
    </div>,
    <div key="supporto">
      <p>
        LC Energia offre supporto e consulenza per orientarsi nel
        panorama degli incentivi e realizzare progetti di efficienza
        energetica in modo ottimale.
      </p>
    </div>
  ];

  return (
    <>
      <PageHeader
        title="Progettare il Risparmio Energetico"
        breadcrumb="Progettare il Risparmio Energetico"
      />

      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: 600 }}
          >
            <h6 className="text-primary">Progettare il Risparmio Energetico</h6>
            <p className="mb-4">
              L’obiettivo del risparmio energetico è perseguibile solo
              attraverso competenze specifiche.
            </p>
          </div>
          <ScrollableCardList items={cardItems} />
        </div>
      </div>
    </>
  );
};

export default Page;
