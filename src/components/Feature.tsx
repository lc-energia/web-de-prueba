'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Counter from './Counter';
import { FaUsers, FaCheck, FaAward, FaLeaf } from 'react-icons/fa';

const features = [
  {
    icon: <FaUsers className="text-primary text-4xl" />,
    count: "200",
    suffix: "+",
    title: "Oltre 200 Progetti",
    description: "Progetti realizzati con successo, garantendo alta qualità e affidabilità."
  },
  {
    icon: <FaCheck className="text-primary text-4xl" />,
    count: "2000",
    suffix: "kW",
    title: "Oltre 2000 kW Installati",
    description: "Capacità energetica installata per diverse soluzioni sostenibili."
  },
  {
    icon: <FaAward className="text-primary text-4xl" />,
    count: "2500",
    suffix: "kWh",
    title: "Oltre 2500 kWh Prodotti",
    description: "Energia prodotta per alimentare abitazioni e imprese."
  },
  {
    icon: <FaLeaf className="text-primary text-4xl" />,
    count: "1750",
    suffix: "T",
    title: "1750 Tonnellate di Co2 evitate",
    description: "Diminuisci la tua impronta di carbonio contribuendo alla protezione del pianeta."
  }
];

const Feature = () => {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">I Nostri Numeri</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeIn('up', i * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="bg-light p-8 rounded-xl shadow-lg text-center flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-5">
                {feature.icon}
              </div>
              <div className="flex items-baseline mb-2">
                <Counter from={0} to={parseInt(feature.count)} className="text-4xl font-bold text-gray-800" />
                <span className="text-3xl font-bold text-gray-800">{feature.suffix}</span>
              </div>
              <h5 className="text-lg font-semibold mb-2 text-gray-700">{feature.title}</h5>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
