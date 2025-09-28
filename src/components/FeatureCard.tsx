import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

export interface Feature {
  title: string;
  description: string;
  image?: string;
  icon?: ReactNode;
}

interface FeatureCardProps {
  feature: Feature;
  variants: Variants;
  i: number;
}

const FeatureCard: FC<FeatureCardProps> = ({ feature, variants, i }) => {
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
        <div className="mb-4 inline-block">
          {feature.image && (
            <Image
              src={feature.image}
              alt={feature.title}
              width={80}
              height={80}
              className="mx-auto"
              style={{ objectFit: 'contain' }}
            />
          )}
          {feature.icon && (
            <div className="text-primary">
              {feature.icon}
            </div>
          )}
        </div>
        <h5 className="text-xl font-bold text-dark mb-2">{feature.title}</h5>
        {feature.description && <p className="text-gray-600">{feature.description}</p>}
      </div>
    </motion.div>
  );
};

export default FeatureCard;