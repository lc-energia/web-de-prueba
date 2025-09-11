'use client';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactPage = () => {

  return (
    <>
      <PageHeader title="Contatti" breadcrumb="Contatti" />

      {/* Contact Info Section */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn('down', 0.2)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Mettiti in contatto con noi</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Siamo a tua disposizione per qualsiasi richiesta di informazioni o per un preventivo gratuito. Non esitare a contattarci.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Address */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center"
              variants={fadeIn('up', 0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
            >
              <FaMapMarkerAlt className="text-primary text-4xl mb-5" />
              <h5 className="text-xl font-bold mb-2 text-gray-800">Indirizzo</h5>
              <p className="text-gray-600">Via della Valle 39, 20841, Carate Brianza (MB)</p>
            </motion.div>

            {/* Email */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center"
              variants={fadeIn('up', 0.5)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
            >
              <FaEnvelope className="text-primary text-4xl mb-5" />
              <h5 className="text-xl font-bold mb-2 text-gray-800">Email</h5>
              <a href="mailto:info@lc-energia.it" className="text-gray-600 hover:text-primary">info@lc-energia.it</a>
            </motion.div>

            {/* Phone */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center"
              variants={fadeIn('up', 0.7)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
            >
              <FaPhoneAlt className="text-primary text-4xl mb-5" />
              <h5 className="text-xl font-bold mb-2 text-gray-800">Telefono</h5>
              <a href="tel:0362992142" className="text-gray-600 hover:text-primary">0362 992142</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="bg-light py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={fadeIn('right', 0.3)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Inviaci un messaggio</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="text" placeholder="Il tuo nome" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" />
                  <input type="email" placeholder="La tua email" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <input type="text" placeholder="Oggetto" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary" />
                <textarea placeholder="Il tuo messaggio" rows={5} className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                <button type="submit" className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300">Invia Messaggio</button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div 
              className="w-full h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-2xl"
              variants={fadeIn('left', 0.5)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
            >
              <iframe
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.386039023569!2d9.224754576986633!3d45.66315002014133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786bc9573a448a1%3A0x51f9fe9c02a37f97!2sVia%20della%20Valle%2C%2039%2C%2020841%20Carate%20Brianza%20MB%2C%20Italy!5e0!3m2!1sen!2ssi!4v1729678261040!5m2!1sen!2ssi"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;