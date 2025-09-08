
'use client';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';

const Page = () => {
  const contactInfo = [
    {
      icon: 'fa-map-marker-alt',
      content: 'Via della Valle 39, Carate Brianza (MB)',
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <PageHeader
        title="Contattaci"
        breadcrumb="Contatti"
      />

      <motion.section 
        id="contact"
        className="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-fluid bg-light overflow-hidden px-lg-0" style={{ margin: "6rem 0" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <motion.div 
                  className="contact-text py-5 wow fadeIn"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="section-title mb-5 text-center">
                    <h2 className="text-primary">Mettiti in contatto</h2>
                    <p>Siamo qui per aiutarti. Utiliza i nostri contatti diretti.</p>
                  </div>
                  <motion.div 
                    className="row justify-content-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {contactInfo.map((info, index) => (
                      <motion.div 
                        key={index}
                        className="col-md-4"
                        variants={itemVariants}
                      >
                        <motion.div 
                          className="info-box card shadow-sm border-0 h-100"
                          whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0,0,0,0.1)' }}
                        >
                          <div className="card-body text-center p-4">
                            <i className={`fa ${info.icon} fa-3x text-primary mb-3`}></i>
                            <p className="mb-0 fs-5">{info.content}</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                  <div className="d-flex justify-content-center gap-3 mt-5">
                    <motion.a
                      href="mailto:info@lc-energia.it"
                      className="btn btn-primary rounded-pill py-3 px-5"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Invia una mail
                    </motion.a>
                    <motion.a
                      href="tel:0362992142"
                      className="btn btn-secondary rounded-pill py-3 px-5"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Chiama ora
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div 
              className="row justify-content-center mt-5"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="col-lg-10">
                <div className="position-relative" style={{ height: '400px' }}>
                  <iframe
                    className="position-absolute w-100 h-100"
                    style={{ objectFit: "cover" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.386039023569!2d9.224754576986633!3d45.66315002014133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786bc9573a448a1%3A0x51f9fe9c02a37f97!2sVia%20della%20Valle%2C%2039%2C%2020841%20Carate%20Brianza%20MB%2C%20Italy!5e0!3m2!1sen!2ssi!4v1729678261040!5m2!1sen!2ssi"
                    frameBorder={0}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Page;
