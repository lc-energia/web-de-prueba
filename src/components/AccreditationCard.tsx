import { motion, Variants } from 'framer-motion';
import { FC } from 'react';
import { Accreditation } from '@/data/azienda-data';

interface AccreditationCardProps {
  accreditation: Accreditation;
  variants: Variants;
  i: number;
}

const ShieldCheckIcon = () => (
  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1.03 16.03L6.5 12.5l1.41-1.41L11 14.17l4.59-4.59L17 11l-6.03 6.03z"/>
  </svg>
);

const AccreditationCard: FC<AccreditationCardProps> = ({ accreditation, variants, i }) => {
  return (
    <motion.div
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={variants}
      className="w-full"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl h-full">
        <div className="inline-block p-4 bg-primary text-white rounded-full mb-4">
          <ShieldCheckIcon />
        </div>
        <h5 className="text-2xl font-bold mb-3 text-dark">{accreditation.pageTitle}</h5>
        <ul className="text-gray-600 text-left space-y-2">
          {accreditation.description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">&#10003;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default AccreditationCard;