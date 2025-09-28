'use client';
import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { ServiceData, Section } from '@/data/services-data';
import ServicePageLayout from '@/components/ServicePageLayout';
import FeatureCard, { Feature } from '@/components/FeatureCard';
import FaqAccordion from '@/components/FaqAccordion';
import SimpleTextCard, { SimpleFeature } from '@/components/SimpleTextCard';
import InfoAccordion from '@/components/InfoAccordion';
import ImageCarousel from '@/components/ImageCarousel';

// --- Icon Components ---
const BoltIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>;
const RulerCombinedIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 6h12l3-6H3zm18 6H3m18 0l-3 6H6l-3-6"></path></svg>;
const CompassIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>;
const CloudSunIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h1m8-9v1M8.273 4.5l.707.707M3 12a9 9 0 0115.89 4.313M21 12h-1m-8 9v-1m-3.727 4.5l-.707-.707M12 3.5A3.5 3.5 0 0115.5 7a3.5 3.5 0 01-3.5 3.5A3.5 3.5 0 018.5 7 3.5 3.5 0 0112 3.5z"></path></svg>;
const FileSignatureIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>;
const BuildingIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16h14zM15 21v-8H9v8m6-4h.01"></path></svg>;
const FireExtinguisherIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10m-2.121 2.121A8.003 8.003 0 0112 4.5a8.003 8.003 0 017.778 5.378"></path></svg>;
const CertificateIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>;
const FileAltIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>;
const TasksIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>;
const BullhornIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.148-6.014A1.76 1.76 0 015.882 11H11m0-5.118a2 2 0 012.164 1.5l.384 1.536a2 2 0 001.91 1.488l3.39.29a2 2 0 011.65 2.45l-1.33 4.96a2 2 0 01-1.91 1.488h-3.39a2 2 0 01-1.91-1.488l-.384-1.536a2 2 0 00-2.164-1.5z"></path></svg>;
const HardHatIcon = () => <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-3.333 0-6 2.667-6 6v4h12v-4c0-3.333-2.667-6-6-6zm0 0V6m0 2a2 2 0 100-4 2 2 0 000 4z"></path></svg>;
const CheckCircleIcon = () => <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>;

const iconMap: { [key: string]: ReactNode } = {
  'fa-bolt': <BoltIcon />, 'fa-ruler-combined': <RulerCombinedIcon />, 'fa-compass': <CompassIcon />, 'fa-cloud-sun': <CloudSunIcon />,
  'fa-file-signature': <FileSignatureIcon />, 'fa-building': <BuildingIcon />, 'fa-fire-extinguisher': <FireExtinguisherIcon />, 'fa-certificate': <CertificateIcon />,
  'fa-file-alt': <FileAltIcon />, 'fa-tasks': <TasksIcon />, 'fa-bullhorn': <BullhornIcon />, 'fa-hard-hat': <HardHatIcon />,
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

// --- Main Component ---
const ServicePage: FC<{ service: ServiceData; slug: string }> = ({ service, slug }) => {
  return (
    <ServicePageLayout title={service.title}>
      <div className="text-center max-w-4xl mx-auto mb-12">
        {service.introduction.map((paragraph, i) => (
          <p key={i} className="text-lg text-gray-600 leading-relaxed mb-4">{paragraph}</p>
        ))}
      </div>

      {service.mainFeatures && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {service.mainFeatures.map((feature, i) => {
            const featureWithIcon: SimpleFeature = { text: feature.text, icon: iconMap[feature.icon] };
            return <SimpleTextCard key={i} feature={featureWithIcon} variants={cardVariants} i={i} />;
          })}
        </div>
      )}

      {/* Special Sections */}
      {slug === 'impianti-fotovoltaici' && (
        <section className="py-12">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                <p className="text-xl text-gray-700 leading-loose">
                  Grazie alla comunità energetica è possibile ricevere un incentivo per l’energia immessa in rete e consumata all’interno della Comunità Energetica Rinnovabile.
                </p>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <ImageCarousel images={['/img/volta1.JPEG', '/img/volta5.JPEG', '/img/volta7.JPEG']} />
              </div>
            </div>
          </div>
        </section>
      )}
      {slug === 'stazioni-di-ricarica' && (
        <div className="text-center my-12">
          <Image src="/img/scame.png" alt="Stazioni di Ricarica" width={500} height={500} className="mx-auto" />
        </div>
      )}

      {/* Main Content Sections */}
      <div className="space-y-16">
        {slug === 'contabilizzazione-calore-impianti-termici-centralizzati' ? (
          <div>
            <div className="mb-8 text-center"><p className="text-lg text-gray-600">{service.sections[0].content}</p></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.sections.slice(1).map((section, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={cardVariants}>
                  <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                    <h5 className="text-xl font-bold text-dark mb-3">{section.title}</h5>
                    <p className="text-gray-600">{section.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : slug === 'impianti-fotovoltaici' ? (
          <InfoAccordion items={service.sections} />
        ) : (
          service.sections.map((section, i) => {
            if (section.modes || section.features) {
              const items = (section.modes || section.features)?.map(item => ({...item, icon: iconMap[item.icon || '']})) as Feature[];
              const gridCols = slug === 'progettazione-acustica' || slug === 'progettazione-antincendio' ? 'lg:grid-cols-2' : 'lg:grid-cols-4';
              return (
                <div key={i} className="text-center">
                  <h2 className="text-3xl font-bold mb-4 text-dark">{section.title}</h2>
                  {section.content && <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">{section.content}</p>}
                  <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-6`}>
                    {items.map((item, j) => <FeatureCard key={j} feature={item} variants={cardVariants} i={j} />)}
                  </div>
                </div>
              );
            }
            if (section.title === 'FAQ') {
              return <FaqAccordion key={i} section={section} />;
            }
            const gridCols = section.fullWidth ? 'md:grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3';
            return (
              <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={cardVariants}>
                <div className="grid grid-cols-1 gap-6">
                    <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                      <div className="flex items-center mb-4">
                        {!section.hideLogo && <Image src="/img/logo.png" alt="icon" width={40} height={40} className="mr-4"/>}
                        <h5 className="text-xl font-bold text-dark">{section.title}</h5>
                      </div>
                      <p className="text-gray-600">{section.content}</p>
                      {section.list && (
                        <ul className="mt-4 space-y-2">
                          {section.list.map((item, j) => (
                            <li key={j} className="flex items-start"><CheckCircleIcon /><span>{item}</span></li>
                          ))}
                        </ul>
                      )}
                    </div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>

      {service.partners && (
        <div className="py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">{service.partnersTitle}</h2>
            <p className="text-lg text-gray-600">{service.partnersIntroduction}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {service.partners.map((partner, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={cardVariants} className="flex justify-center">
                <Image src={partner.src} alt={partner.alt} width={120} height={80} style={{ objectFit: 'contain' }} />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </ServicePageLayout>
  );
};

export default ServicePage;