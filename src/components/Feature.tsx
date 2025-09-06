'use client';
import { useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion';

// Componente reutilizable para el contador animado
function AnimatedCounter({ value }) {
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut"
    });
    return controls.stop;
  }, [value, count]);

  useEffect(() => {
    // Para asegurar que el valor final sea exacto y no uno aproximado por el spring
    const unsubscribe = rounded.on("change", (latest) => {
      if (latest >= value) {
        rounded.set(value);
        unsubscribe();
      }
    });
    return unsubscribe;
  }, [rounded, value]);

  // Redondeamos el valor para mostrarlo como entero
  const displayValue = useMotionValue(0);
  useEffect(() => rounded.on("change", (latest) => displayValue.set(Math.round(latest))), [rounded, displayValue]);

  return <motion.h1 className="mb-0">{displayValue}</motion.h1>;
}

const Feature = () => {
  const featureVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  const features = [
    {
      icon: "fa-users",
      count: 250,
      suffix: "+",
      title: "Oltre 200 Progetti",
      description: "Progetti realizzati con successo, garantendo alta qualità e affidabilità."
    },
    {
      icon: "fa-check",
      count: 2000,
      suffix: "kW",
      title: "Oltre 2000 kW Installati",
      description: "Capacità energetica installata per diverse soluzioni sostenibili."
    },
    {
      icon: "fa-award",
      count: 2500,
      suffix: "kWh",
      title: "Oltre 2500 kWh Prodotti",
      description: "Energia prodotta per alimentare abitazioni e imprese."
    },
    {
      icon: "fa-award",
      count: 1750,
      suffix: "T",
      title: "1750 Tonnellate di Co2 evitate",
      description: "Diminuisci la tua impronta di carbonio contribuendo alla protezione del pianeta."
    }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              className="col-md-6 col-lg-3"
              custom={i}
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="d-flex align-items-center mb-4">
                <div className="btn-lg-square bg-primary rounded-circle me-3">
                  <i className={`fa ${feature.icon} text-white`}></i>
                </div>
                <div className="d-flex align-items-baseline">
                  <AnimatedCounter value={feature.count} />
                  <p className="mb-0">{feature.suffix}</p>
                </div>
              </div>
              <h5 className="mb-3">{feature.title}</h5>
              <span>{feature.description}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
