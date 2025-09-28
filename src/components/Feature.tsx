'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Counter from './Counter';

const UsersIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
);

const CheckIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const AwardIcon = () => (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
);

const LeafIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 15.879A6 6 0 0112.025 10a6 6 0 012.096-4.121m0 0A2.5 2.5 0 1016 4.12a2.5 2.5 0 00-1.879 1.879m0 0A6 6 0 0110 12.025a6 6 0 01-4.121 2.096m0 0A2.5 2.5 0 104.12 16a2.5 2.5 0 001.879-1.879m0 0A6 6 0 0112.025 10a6 6 0 012.096 4.121m-4.192 0A2.5 2.5 0 1010 16a2.5 2.5 0 00-1.879-1.879m0 0A6 6 0 0112.025 10a6 6 0 01-4.121-2.096m4.121 4.192A2.5 2.5 0 1016 14.12a2.5 2.5 0 00-1.879-1.879m-1.879 4.121A6 6 0 0110 12.025a6 6 0 01-2.096-4.121"></path></svg>
);

const features = [
  {
    icon: <UsersIcon />,
    count: 200,
    suffix: "+",
    title: "Oltre 200 Progetti",
    description: "Progetti realizzati con successo, garantendo alta qualità e affidabilità."
  },
  {
    icon: <CheckIcon />,
    count: 2000,
    suffix: "kW",
    title: "Oltre 2000 kW Installati",
    description: "Capacità energetica installata per diverse soluzioni sostenibili."
  },
  {
    icon: <AwardIcon />,
    count: 2500,
    suffix: "MWh",
    title: "Oltre 2500 MWh Prodotti",
    description: "Energia prodotta per alimentare abitazioni e imprese."
  },
  {
    icon: <LeafIcon />,
    count: 1750,
    suffix: "T",
    title: "1750 Tonnellate di Co2 evitate",
    description: "Diminuisci la tua impronta di carbonio contribuendo alla protezione del pianeta."
  }
];

const Feature = () => {
  return (
    <section className="py-16 sm:py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeIn('up', i * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mr-4">
                  {feature.icon}
                </div>
                <div className="flex items-baseline">
                  <Counter
                    from={0}
                    to={feature.count}
                    className="text-4xl font-bold text-dark"
                  />
                  <span className="text-3xl font-bold text-dark ml-1">{feature.suffix}</span>
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