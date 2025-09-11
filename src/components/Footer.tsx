import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand and Social */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-6 inline-block">
              <Image src="/img/logo.png" alt="LC Energia Logo" width={180} height={60} />
            </Link>
            <p className="text-gray-400 mb-6">P.iva 04115680136</p>
            <div className="flex space-x-4">
              <a 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors duration-300"
                href="https://www.linkedin.com/company/lc-energia-s-r-l"
                aria-label="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-6">Link Veloci</h5>
            <nav className="flex flex-col space-y-3">
              <Link className="hover:text-primary transition-colors duration-300" href="/azienda">Chi Siamo</Link>
              <Link className="hover:text-primary transition-colors duration-300" href="/contact">Richiedi un Preventivo</Link>
              <Link className="hover:text-primary transition-colors duration-300" href="/">I Nostri Servizi</Link>
              <Link className="hover:text-primary transition-colors duration-300" href="/accrediti">Accrediti</Link>
            </nav>
          </div>

          {/* Column 3: Address */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-6">Contatti</h5>
            <div className="flex flex-col space-y-3">
              <p className="flex items-start"><FaMapMarkerAlt className="mr-3 mt-1 text-primary flex-shrink-0" />Via della Valle 39, 20841, Carate Brianza (MB)</p>
              <p className="flex items-center"><FaPhoneAlt className="mr-3 text-primary" />0362 992142</p>
              <p className="flex items-center"><FaEnvelope className="mr-3 text-primary" />info@lc-energia.it</p>
            </div>
          </div>

          {/* Column 4: Newsletter (Placeholder) */}
          <div>
             <h5 className="text-white text-lg font-semibold mb-6">Newsletter</h5>
             <p className="text-gray-400 mb-4">Iscriviti per rimanere aggiornato sulle nostre novità.</p>
             <form>
               <div className="flex">
                 <input type="email" placeholder="La tua email" className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none" />
                 <button type="submit" className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors">Iscriviti</button>
               </div>
             </form>
          </div>
        </div>
      </div>
      <div className="bg-gray-950/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} <a className="hover:text-primary transition-colors" href="#">LC Energia</a>. Tutti i diritti riservati.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
