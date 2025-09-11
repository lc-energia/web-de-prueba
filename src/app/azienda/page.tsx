'use client';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Image from 'next/image';
import { valuePropositions, reasons, teamMembers } from '@/data/azienda-data';
import { FaSolarPanel, FaWind, FaLightbulb, FaHeadset } from 'react-icons/fa';

const iconMap = {
  'fa-solar-panel': <FaSolarPanel className="text-primary text-3xl" />,
  'fa-wind': <FaWind className="text-primary text-3xl" />,
  'fa-lightbulb': <FaLightbulb className="text-primary text-3xl" />,
  'fa-headset': <FaHeadset className="text-primary text-3xl" />,
};

const AziendaPage = () => {
  return (
    <>
      <PageHeader title="Azienda" breadcrumb="Azienda" />

      {/* Value Proposition Section */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h6 className="text-primary font-bold text-lg uppercase tracking-wider">La Nostra Missione</h6>
            <h1 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-800">Il valore dell’esperienza per l’efficienza ed il risparmio energetico</h1>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valuePropositions.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
                {item.list && (
                  <ul className="list-disc list-inside mt-4 space-y-2">
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
      <section className="py-20 sm:py-28 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h6 className="text-primary font-bold text-lg uppercase tracking-wider">Perché Sceglierci</h6>
            <h1 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-800">I motivi per scegliere LC Energia</h1>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center h-full transition-transform transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center"
              >
                <div className="mb-5">
                  {iconMap[reason.icon]}
                </div>
                <h5 className="text-xl font-bold mb-3 text-gray-800">{reason.title}</h5>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Le Nostre Collaborazioni</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </motion.div>
          <motion.div 
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="flex justify-center"
          >
            <Image src="/img/image3.png" alt="Collaborazione" width={500} height={250} className="rounded-lg shadow-xl" />
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 sm:py-28 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Il Nostro Team</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="w-full"
              >
                <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl h-full">
                  <h5 className="text-xl font-bold text-gray-800">{member.name}</h5>
                  <p className="text-primary font-medium">{member.role}</p>
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