'use client';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div 
      className="container-fluid bg-dark text-body footer mt-5 pt-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Linkedin</h5>
            <div className="d-flex pt-2">
              <a className="btn btn-square btn-outline-light btn-social" href="https://www.linkedin.com/company/lc-energia-s-r-l">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Indirizzo</h5>
            <p className="mb-2">
              <a href="https://maps.app.goo.gl/q5m7vkLzc2w2c3wz8">
                <i className="fa fa-map-marker-alt me-3"></i>Via della Valle 39, 20841, Carate Brianza (MB)
              </a>
            </p>
            <p className="mb-2">
              <a href="tel:0362992142" className="text-white text-decoration-none">
                <i className="fa fa-phone-alt me-3"></i>0362992142
              </a>
            </p>
            <p className="mb-2">
              <a href="mailto:info@lc-energia.it" className="text-white text-decoration-none">
                <i className="fa fa-envelope me-3"></i>info@lc-energia.it
              </a>
            </p>
            <p className="mb-2">
              <a href="mailto:info@lc-energia.it" className="text-white text-decoration-none">
                <i className=""></i>P.iva 04115680136
              </a>
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Link Veloci</h5>
            <a className="btn btn-link" href="/azienda">Chi Siamo</a>
            <a className="btn btn-link" href="/contact">Richiedi un Preventivo</a>
            <a className="btn btn-link" href="/">I Nostri Servizi</a>
            <a className="btn btn-link" href="/accrediti">Accrediti</a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a href="#">LC Energia</a>, 2024.
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;