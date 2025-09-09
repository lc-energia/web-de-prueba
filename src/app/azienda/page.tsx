'use client';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Image from 'next/image';
import { valuePropositions, reasons, teamMembers } from '@/data/azienda-data';

const AziendaPage = () => {
  return (
    <>
      <PageHeader title="Azienda" breadcrumb="Azienda" />

      {/* Value Proposition Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h6 className="text-primary font-bold text-lg">Azienda</h6>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4 text-dark">Il valore dell&apos;esperienza per l&apos;efficienza ed il risparmio energetico</h1>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valuePropositions.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
                {item.list && (
                  <ul className="list-disc list-inside mt-4">
                    {item.list.map((point, i) => (
                      <li key={i} className="text-gray-600 leading-relaxed">{point}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-16 sm:py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h6 className="text-primary font-bold text-lg">Produzione di energia pulita per salvare l&apos;ambiente</h6>
            <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4 text-dark">I motivi per scegliere LC Energia</h1>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center h-full transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="inline-block p-4 bg-primary text-white rounded-full mb-4">
                  <i className={`fa ${reason.icon} fa-2x`}></i>
                </div>
                <h5 className="text-xl font-bold mb-3 text-dark">{reason.title}</h5>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h6 className="text-primary font-bold text-lg">Collaborazioni</h6>
          </motion.div>
          <motion.div 
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex justify-center"
          >
            <Image src="/img/image3.png" alt="Collaborazione" width={400} height={200} className="rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h6 className="text-primary font-bold text-lg">Membri del Team Esperti</h6>
          </motion.div>
          <div className="flex flex-wrap justify-center -m-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="w-full sm:w-1/2 md:w-1/3 p-4"
              >
                <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl h-full">
                  <h5 className="text-xl font-bold text-dark">{member.name}</h5>
                  <p className="text-primary">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AziendaPage;