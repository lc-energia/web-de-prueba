'use client';
import PageHeader from '@/components/PageHeader';
import InfoCarousel from '@/components/InfoCarousel';

const Page = () => {
  const carouselItems = [
    <div>
      <h5 className="mb-3">Impianti a Idranti</h5>
      <p>Progettazione di reti idranti interne ed esterne, conformi alle normative UNI, per una protezione antincendio efficace e affidabile.</p>
    </div>,
    <div>
      <h5 className="mb-3">Impianti Sprinkler</h5>
      <p>Sistemi automatici di estinzione a pioggia (sprinkler) per il controllo rapido degli incendi in ambienti civili e industriali.</p>
    </div>,
    <div>
      <h5 className="mb-3">Evacuatori di Fumo e Calore</h5>
      <p>Progettazione di sistemi per l’evacuazione forzata o naturale di fumo e calore, essenziali per la sicurezza delle persone e delle strutture.</p>
    </div>
  ];

  return (
    <>
      <PageHeader title="Progettazione Antincendio" breadcrumb="Progettazione Antincendio" />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
            <h6 className="text-primary">Progettazione Antincendio</h6>
            <p className="mb-4">Offriamo consulenza e progettazione antincendio avanzata, garantendo la massima sicurezza per persone e beni.</p>
          </div>
          <InfoCarousel items={carouselItems} />
        </div>
      </div>
    </>
  );
};

export default Page;