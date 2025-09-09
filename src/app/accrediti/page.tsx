
import PageHeader from '@/components/PageHeader';
import AccreditationCard from '@/components/AccreditationCard';
import { accreditations } from '@/data/azienda-data';

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
            <i className="bi bi-shield-fill-check display-1 text-primary"></i>
            <h3 className="text-3xl font-bold mt-4 mb-2 text-dark">{accreditations[0].pageTitle}</h3>
            <h4 className="text-xl text-gray-600 mb-4">{accreditations[0].pageDescription}</h4>
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
