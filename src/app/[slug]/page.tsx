
'use client';
import ServicePageLayout from '@/components/ServicePageLayout';
import { servicesData } from '@/data/services-data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const Page = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };

  return (
    <ServicePageLayout title={service.title} breadcrumb={service.breadcrumb}>
      <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
        <h1 className="display-5 mb-4">{service.title}</h1>
        <p className="lead">{service.introduction}</p>
      </div>

      <div className="row g-4 justify-content-center">
        {service.sections.map((section, i) => (
          <motion.div
            key={i}
            className="col-lg-4 col-md-6"
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0">
                    <Image src="/img/logo.png" alt="icon" width={40} height={40} />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="card-title mb-0">{section.title}</h5>
                  </div>
                </div>
                <p className="card-text">{section.content}</p>
                {section.list && (
                  <ul className="list-unstyled mb-0">
                    {section.list.map((item, j) => (
                      <li key={j} className="d-flex align-items-start mb-2">
                        <i className="fa fa-check-circle text-primary mt-1 me-2"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {service.partners && (
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
              <h2 className="display-6 mb-4">Partners e Collaborazioni</h2>
              <p className="lead">LC Energia collabora da anni con le migliori marche del settore, garantendo ai propri Clienti qualità e affidabilità dei prodotti installati.</p>
            </div>
            <div className="row g-4 justify-content-center">
              {service.partners.map((partner, i) => (
                <motion.div
                  key={i}
                  className="col-lg-2 col-md-3 col-sm-4 col-6"
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <div className="partner-logo d-flex justify-content-center align-items-center h-100">
                    <Image src={partner.src} alt={partner.alt} width={150} height={150} style={{ objectFit: 'contain' }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </ServicePageLayout>
  );
};

export default Page;
