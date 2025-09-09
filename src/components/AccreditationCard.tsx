'use client';

import { Accreditation } from '@/data/accreditations-data';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

interface AccreditationCardProps {
  accreditation: Accreditation;
}

const AccreditationCard: React.FC<AccreditationCardProps> = ({ accreditation }) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full md:w-1/2 lg:w-1/3 p-4"
    >
      <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
        <div className="text-primary mb-4">
          <i className={`${accreditation.icon} text-4xl`}></i>
        </div>
        <h5 className="text-xl font-bold mb-3 text-dark">{accreditation.title}</h5>
        <p className="text-gray-600">{accreditation.description}</p>
      </div>
    </motion.div>
  );
};

export default AccreditationCard;
