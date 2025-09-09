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
      <PageHeader title="Contattaci" breadcrumb="Contatti" />

      <section className="py-16 sm:py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-primary">Mettiti in Contatto</h2>
              <p className="mt-4 text-lg text-gray-600">Siamo qui per aiutarti. Utilizza i nostri contatti diretti.</p>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.2 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
              {contactInfo.map((info) => (
                <motion.a
                  key={info.content}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeIn('up', 0)} // Delay is handled by staggerChildren
                  className="block"
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 text-center h-full transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
                    <i className={`fa ${info.icon} text-4xl text-primary mb-4`}></i>
                    <p className="text-lg text-dark">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Map */}
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="w-full"
            >
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
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