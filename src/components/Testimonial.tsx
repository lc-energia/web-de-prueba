'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  { type: 'image', src: "/img/logo.png", alt: "LC Energia Logo" },
  { type: 'text', content: "Energia pulita per un futuro sostenibile." },
  { type: 'image', src: "/img/ecoplus.png", alt: "Ecoplus Logo" },
  { type: 'text', content: "Soluzioni efficienti per un mondo migliore." },
  { type: 'image', src: "/img/ecosmart.png", alt: "Ecosmart Logo" },
  { type: 'text', content: "Innovazione in ogni progetto, rispettando il pianeta." },
  { type: 'image', src: "/img/scame.png", alt: "Scame Logo" },
  { type: 'text', content: "Impegnati per l'ambiente e l'efficienza energetica." },
  { type: 'text', content: "Tecnologia verde che trasforma gli edifici." },
  { type: 'text', content: "Esperienza e visione per le energie rinnovabili." },
  { type: 'text', content: "Adattiamo il presente per proteggere il futuro." },
  { type: 'text', content: "Verso un ambiente più pulito e sicuro." },
  { type: 'text', content: "Prestazioni superiori, impatto ambientale ridotto." },
  { type: 'text', content: "Efficienza energetica che fa la differenza." },
];

const Testimonial = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const marqueeVariants = {
    animate: {
      x: [0, -1920], // Adjust this value based on the total width of your content
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40, // Adjust duration for speed
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
            <h2 className="text-primary">I Nostri Clienti e Valori</h2>
            <p>Collaboriamo con i migliori e ci guidano principi solidi.</p>
        </div>
        <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>
          <motion.div
            className="d-flex align-items-center"
            variants={marqueeVariants}
            animate="animate"
            style={{ height: '150px' }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className="mx-4 d-flex align-items-center justify-content-center" style={{ minWidth: '200px' }}>
                {testimonial.type === 'image' ? (
                  <Image src={testimonial.src} alt={testimonial.alt} width={150} height={75} style={{ objectFit: 'contain' }} />
                ) : (
                  <p className="mb-0 fst-italic">{testimonial.content}</p>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
