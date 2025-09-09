'use client';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const ContactPage = () => {

  return (
    <>
      <PageHeader title="Richiedi un preventivo" breadcrumb="Contatto" />

      {/* Contact Info Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="text-center mb-12"
          variants={fadeIn('down', 0.2)} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-3xl font-bold text-dark">Contattaci Direttamente</h2>
          <p className="text-gray-600 mt-2">Siamo qui per aiutarti. Trova le nostre informazioni di contatto qui sotto.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Address */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-center"
            variants={fadeIn('up', 0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}
          >
            <i className="fa fa-map-marker-alt text-primary text-4xl mb-4"></i>
            <p className="text-gray-600">Via della Valle 39, 20841, Carate Brianza (MB)</p>
          </motion.div>

          {/* Email */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-center"
            variants={fadeIn('up', 0.5)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}
          >
            <i className="fa fa-envelope text-primary text-4xl mb-4"></i>
            <a href="mailto:info@lc-energia.it" className="text-gray-600 hover:text-primary">info@lc-energia.it</a>
          </motion.div>

          {/* Phone */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-center"
            variants={fadeIn('up', 0.7)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}
          >
            <i className="fa fa-phone-alt text-primary text-4xl mb-4"></i>
            <a href="tel:0362992142" className="text-gray-600 hover:text-primary">0362 992142</a>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-light py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full rounded-lg overflow-hidden shadow-lg" style={{ height: '450px' }}>
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.386039023569!2d9.224754576986633!3d45.66315002014133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786bc9573a448a1%3A0x51f9fe9c02a37f97!2sVia%20della%20Valle%2C%2039%2C%2020841%20Carate%20Brianza%20MB%2C%20Italy!5e0!3m2!1sen!2ssi!4v1729678261040!5m2!1sen!2ssi"
              frameBorder="0"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;