import { motion, Variants } from 'framer-motion';
import { FC, ReactNode } from 'react';

export interface SimpleFeature {
  text: string;
  icon: ReactNode;
}

interface SimpleTextCardProps {
  feature: SimpleFeature;
  variants: Variants;
  i: number;
}

const SimpleTextCard: FC<SimpleTextCardProps> = ({ feature, variants, i }) => {
  return (
    <motion.div
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={variants}
      className="w-full"
    >
      <div className="bg-white rounded-lg shadow-lg h-full p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl">
        <div className="mb-4 inline-block text-primary">
          {feature.icon}
        </div>
        <p className="text-lg font-semibold text-dark">{feature.text}</p>
      </div>
    </motion.div>
  );
};

export default SimpleTextCard;