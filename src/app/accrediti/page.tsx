
import PageHeader from '@/components/PageHeader';
import AccreditationCard from '@/components/AccreditationCard';
import { accreditations } from '@/data/accreditations-data';

const AccreditationsPage = () => {
  return (
    <>
      <PageHeader title="Accrediti" breadcrumb="Accrediti" />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mx-auto mb-12"
            style={{ maxWidth: '600px' }}
          >
            <h6 className="text-primary font-bold text-lg">Le Nostre Competenze</h6>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4 text-dark">Siamo Qualificati e Certificati</h1>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            {accreditations.map((accreditation, index) => (
              <AccreditationCard
                key={index}
                accreditation={accreditation}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AccreditationsPage;
