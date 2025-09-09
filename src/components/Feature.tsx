'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Counter from './Counter';

const Feature = () => {
  const features = [
    {
      icon: "fa-users",
      count: "200",
      suffix: "+",
      title: "Oltre 200 Progetti",
      description: "Progetti realizzati con successo, garantendo alta qualità e affidabilità."
    },
    {
      icon: "fa-check",
      count: "2000",
      suffix: "kW",
      title: "Oltre 2000 kW Installati",
      description: "Capacità energetica installata per diverse soluzioni sostenibili."
    },
    {
      icon: "fa-award",
      count: "2500",
      suffix: "kWh",
      title: "Oltre 2500 kWh Prodotti",
      description: "Energia prodotta per alimentare abitazioni e imprese."
    },
    {
      icon: "fa-leaf",
      count: "1750",
      suffix: "T",
      title: "1750 Tonnellate di Co2 evitate",
      description: "Diminuisci la tua impronta di carbonio contribuendo alla protezione del pianeta."
    }
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeIn('up', i * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                  <i className={`fa ${feature.icon} text-white text-2xl`}></i>
                </div>
                <div className="flex items-baseline">
                  <Counter from={0} to={parseInt(feature.count)} />
                  <span className="text-2xl font-bold text-dark">{feature.suffix}</span>
                </div>
              </div>
              <h5 className="text-xl font-bold mb-2 text-dark">{feature.title}</h5>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
