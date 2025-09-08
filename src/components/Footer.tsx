'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Link from 'next/link';

const Footer = () => {
  return (
    <motion.div 
      className="container-fluid bg-dark text-light footer mt-5 pt-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <div className="container py-5">
        <div className="row g-5">
          <motion.div className="col-lg-3 col-md-6" variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h5 className="text-white mb-4">LC Energia</h5>
            <p>La tua energia, la nostra passione.</p>
          </motion.div>
          <motion.div className="col-lg-3 col-md-6" variants={fadeIn('up', 0.4)} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h5 className="text-white mb-4">Link Veloci</h5>
            <Link className="btn btn-link" href="/">Home</Link>
            <Link className="btn btn-link" href="/azienda">Chi Siamo</Link>
            <Link className="btn btn-link" href="/">I Nostri Servizi</Link>
            <Link className="btn btn-link" href="/accrediti">Accrediti</Link>
          </motion.div>
          <motion.div className="col-lg-3 col-md-6" variants={fadeIn('up', 0.6)} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h5 className="text-white mb-4">Contatti</h5>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Via della Valle 39, Carate Brianza (MB)</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>0362992142</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@lc-energia.it</p>
          </motion.div>
          <motion.div className="col-lg-3 col-md-6" variants={fadeIn('up', 0.8)} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h5 className="text-white mb-4">Seguici</h5>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/company/lc-energia-s-r-l"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <p className="mt-3">P.iva 04115680136</p>
          </motion.div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#">LC Energia</a>, 2024.
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;