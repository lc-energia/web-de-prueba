'use client';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const EnvelopeIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
  </svg>
);

const ContactPage = () => {
  return (
    <>
      <PageHeader title="Richiedi un preventivo" />

      <section className="bg-light py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="w-full lg:w-10/12 text-center"
            >
              <p className="text-xl text-gray-700 mb-10">
                Se hai bisogno di un preventivo o di maggiori informazioni sui nostri servizi, non esitare a contattarci.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Email Contact */}
                <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-primary mb-4 inline-block">
                    <EnvelopeIcon />
                  </div>
                  <h5 className="text-2xl font-bold text-dark mb-3">Invia una mail</h5>
                  <p className="text-gray-600 text-lg">info@lc-energia.it</p>
                  <a
                    href="mailto:info@lc-energia.it"
                    className="mt-6 inline-block bg-primary text-white font-semibold rounded-full py-3 px-8 hover:bg-primary-hover transition-colors duration-300"
                  >
                    Scrivi ora
                  </a>
                </div>

                {/* Phone Contact */}
                <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-secondary mb-4 inline-block">
                    <PhoneIcon />
                  </div>
                  <h5 className="text-2xl font-bold text-dark mb-3">Chiama ora</h5>
                  <p className="text-gray-600 text-lg">0362 992142</p>
                  <a
                    href="tel:0362992142"
                    className="mt-6 inline-block bg-secondary text-white font-semibold rounded-full py-3 px-8 hover:bg-secondary-hover transition-colors duration-300"
                  >
                    Chiama
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="h-[400px] md:h-[500px]">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.386039023569!2d9.224754576986633!3d45.66315002014133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786bc9573a448a1%3A0x51f9fe9c02a37f97!2sVia%20della%20Valle%2C%2039%2C%2020841%20Carate%20Brianza%20MB%2C%20Italy!5e0!3m2!1sen!2ssi!4v1729678261040!5m2!1sen!2ssi"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa della sede di LC Energia"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactPage;