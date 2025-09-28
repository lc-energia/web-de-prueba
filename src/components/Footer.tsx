'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Link from 'next/link';
import Image from 'next/image';

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 53.79-54.3c29.7 0 53.79 24.2 53.79 54.3a53.79 53.79 0 0 1-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
  </svg>
);

const MapMarkerIcon = () => (
  <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 384 512">
    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67a24 24 0 0 1-35.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512">
    <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 512 512">
    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
  </svg>
);

const Footer = () => {
  return (
    <motion.footer
      className="bg-dark text-gray-300 mt-5 pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand and Social */}
          <motion.div 
            variants={fadeIn('up', 0.2)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col items-start"
          >
            <Link href="/" className="mb-4">
              <Image src="/img/logoblanco.png" alt="LC Energia Logo" width={150} height={50} style={{ height: 'auto' }} />
            </Link>
            <p className="mb-4 text-sm">P.iva 04115680136</p>
            <h5 className="text-white text-lg font-semibold mb-4">Linkedin</h5>
            <div className="flex space-x-2">
              <a 
                className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:border-primary hover:text-white transition-colors"
                href="https://www.linkedin.com/company/lc-energia-s-r-l"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin Profile"
              >
                <LinkedinIcon />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
            variants={fadeIn('up', 0.4)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, amount: 0.25 }}
          >
            <h5 className="text-white text-lg font-semibold mb-4">Link Veloci</h5>
            <nav className="flex flex-col space-y-2">
              <Link className="hover:text-primary transition-colors" href="/azienda">Chi Siamo</Link>
              <Link className="hover:text-primary transition-colors" href="/contact">Richiedi un Preventivo</Link>
              <Link className="hover:text-primary transition-colors" href="/">I Nostri Servizi</Link>
              <Link className="hover:text-primary transition-colors" href="/accrediti">Accrediti</Link>
            </nav>
          </motion.div>

          {/* Column 3: Services */}
           <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h5 className="text-white text-lg font-semibold mb-4">Servizi</h5>
            <nav className="flex flex-col space-y-2">
              <Link className="hover:text-primary transition-colors" href="/progettazione-e-consulenza-tecnica">Progettazione</Link>
              <Link className="hover:text-primary transition-colors" href="/impianti-fotovoltaici">Impianti</Link>
              <Link className="hover:text-primary transition-colors" href="/riqualificazione-di-centrali-termiche-esistenti">Diagnosi Energetica</Link>
            </nav>
          </motion.div>

          {/* Column 4: Address */}
          <motion.div 
            variants={fadeIn('up', 0.8)}
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, amount: 0.25 }}
          >
            <h5 className="text-white text-lg font-semibold mb-4">Indirizzo</h5>
            <p className="mb-2 flex items-start"><MapMarkerIcon />Via della Valle 39, 20841, Carate Brianza (MB)</p>
            <p className="mb-2 flex items-center"><PhoneIcon />0362992142</p>
            <p className="mb-2 flex items-center"><EnvelopeIcon />info@lc-energia.it</p>
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-700 py-6">
          <div className="text-center text-sm text-gray-400">
            &copy; <Link href="/" className="hover:text-primary">LC Energia</Link>, 2024.
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;