'use client';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: 'fa-map-marker-alt',
      content: 'Via della Valle 39, Carate Brianza (MB)',
      href: 'https://www.google.com/maps/search/?api=1&query=Via+della+Valle+39,+Carate+Brianza+MB',
    },
    {
      icon: 'fa-envelope',
      content: 'info@lc-energia.it',
      href: 'mailto:info@lc-energia.it',
    },
    {
      icon: 'fa-phone-alt',
      content: '0362 992142',
      href: 'tel:0362992142',
    },
  ];

  return (
    <>
      <PageHeader title="Richiedi un preventivo" breadcrumb="Richiedi un preventivo" />

      <section className="py-16 sm:py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Contact Info and Image */}
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="mb-8">
                <p className="text-lg text-gray-600 mb-4">Se hai bisogno di un preventivo, non esitare a contattarci:</p>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <a href="mailto:info@lc-energia.it" className="btn btn-primary w-full sm:w-auto">Invia una mail</a>
                  <a href="tel:0362992142" className="btn btn-secondary w-full sm:w-auto">Chiama ora</a>
                </div>
                <p className="text-gray-600">Email: info@lc-energia.it</p>
                <p className="text-gray-600">Telefono: 0362 992142</p>
              </div>
              <div className="max-w-md mx-auto lg:mx-0">
                <img src="/img/natural5.png" alt="Vantaggi" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              variants={fadeIn('left', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="w-full h-96 lg:h-full min-h-[400px]"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.386039023569!2d9.224754576986633!3d45.66315002014133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786bc9573a448a1%3A0x51f9fe9c02a37f97!2sVia%20della%20Valle%2C%2039%2C%2020841%20Carate%20Brianza%20MB%2C%20Italy!5e0!3m2!1sen!2ssi!4v1729678261040!5m2!1sen!2ssi"
                  frameBorder="0"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;