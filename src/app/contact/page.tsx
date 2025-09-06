'use client';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <PageHeader
        title="Richiedi un preventivo"
        breadcrumb="Richiedi un preventivo"
      />

      {/* Contact Start */}
      <div
        className="container-fluid bg-light overflow-hidden px-lg-0"
        style={{ margin: "6rem 0" }}
      >
        <div className="container contact px-lg-0">
          <div className="row g-0 mx-lg-0">
            <motion.div
              className="col-lg-6 contact-text py-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="contact-buttons mb-5"
              >
                <p>Se hai bisogno di un preventivo, non esitare a contattarci:</p>
                <div className="d-flex gap-3">
                  <motion.button
                    className="btn btn-primary"
                    onClick={() => {
                      window.location.href = "mailto:info@lc-energia.it";
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Invia una mail
                  </motion.button>
                  <motion.button
                    className="btn btn-secondary"
                    onClick={() => {
                      window.location.href = "tel:0362992142";
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Chiama ora
                  </motion.button>
                </div>
                <p className="mt-3">Email: info@lc-energia.it</p>
                <p>Telefono: 0362 992142</p>
              </div>
              <div
                className="mb-5"
                style={{ maxWidth: 600 }}
              >
                <Image
                  src="/img/natural5.png"
                  alt="Illustrazione di energia pulita e sostenibilità"
                  width={600}
                  height={400}
                  className="img-fluid mt-2"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </motion.div>
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: 400 }}>
              <div className="position-relative h-100">
                <iframe
                  className="position-absolute w-100 h-100"
                  style={{ objectFit: "cover" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.386039023569!2d9.224754576986633!3d45.66315002014133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786bc9573a448a1%3A0x51f9fe9c02a37f97!2sVia%20della%20Valle%2C%2039%2C%2020841%20Carate%20Brianza%20MB%2C%20Italy!5e0!3m2!1sen!2ssi!4v1729678261040!5m2!1sen!2ssi"
                  frameBorder={0}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
};

export default Page;