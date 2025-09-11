'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Azienda', href: '/azienda' },
  {
    name: 'Progettazione',
    sublinks: [
      { name: 'Progettazione e consulenza tecnica', href: '/progettazione-e-consulenza-tecnica' },
      { name: 'Contabilizzazione e ripartizione del calore', href: '/contabilizzazione-calore-impianti-termici-centralizzati' },
      { name: 'Progettazione Antincendio', href: '/progettazione-antincendio' },
      { name: 'Progettazione Acustica', href: '/progettazione-acustica' },
      { name: 'Progettare il risparmio energetico', href: '/progettare-il-risparmio-energetico' },
      { name: 'Impianti Geotermici', href: '/impianti-geotermici' },
    ],
  },
  {
    name: 'Impianti',
    sublinks: [
      { name: 'Impianti Fotovoltaici', href: '/impianti-fotovoltaici' },
      { name: 'Stazioni di Ricarica', href: '/stazioni-di-ricarica' },
    ],
  },
  {
    name: 'Studio',
    sublinks: [
      { name: 'Diagnosi Energetica e Riqualificazione Centrali Termiche', href: '/riqualificazione-di-centrali-termiche-esistenti' },
    ],
  },
  { name: 'Accrediti', href: '/accrediti' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/img/favicon.png" alt="Logo" width={35} height={35} />
              <h2 className="m-0 ml-2 text-2xl font-bold">
                <span className="text-accent-orange">LC</span>
                <span className="text-gray-800">Energia</span>
              </h2>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.sublinks ? (
                <DesktopDropdown key={link.name} link={link} />
              ) : (
                <Link key={link.name} href={link.href} className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium">
                  {link.name}
                </Link>
              )
            ))}
            <Link href="/contact" className="bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300">
              Richiedi un preventivo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && <MobileMenu toggleMenu={toggleMenu} />}
      </AnimatePresence>
    </nav>
  );
};

const DesktopDropdown = ({ link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium flex items-center">
        {link.name}
        <svg className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      </button>
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="py-2">
              {link.sublinks.map((sublink) => (
                <Link key={sublink.name} href={sublink.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200">
                  {sublink.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileMenu = ({ toggleMenu }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <motion.div
      className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-50"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="flex justify-between items-center px-4 h-20 border-b">
        <Link href="/" className="flex items-center" onClick={toggleMenu}>
          <Image src="/img/favicon.png" alt="Logo" width={35} height={35} />
          <h2 className="m-0 ml-2 text-2xl font-bold">
            <span className="text-accent-orange">LC</span>
            <span className="text-gray-800">Energia</span>
          </h2>
        </Link>
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
          <FiX size={28} />
        </button>
      </div>
      <div className="p-4">
        {navLinks.map((link) => (
          <div key={link.name} className="py-2 border-b last:border-b-0">
            {link.sublinks ? (
              <>
                <button onClick={() => handleDropdown(link.name)} className="w-full flex justify-between items-center text-left text-gray-800 font-medium">
                  {link.name}
                  <svg className={`h-5 w-5 transform transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
                {openDropdown === link.name && (
                  <motion.div 
                    className="pl-4 mt-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {link.sublinks.map((sublink) => (
                      <Link key={sublink.name} href={sublink.href} className="block py-2 text-gray-600 hover:text-primary" onClick={toggleMenu}>
                        {sublink.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </>
            ) : (
              <Link href={link.href} className="block text-gray-800 font-medium" onClick={toggleMenu}>
                {link.name}
              </Link>
            )}
          </div>
        ))}
        <div className="mt-6">
          <Link href="/contact" className="block w-full text-center bg-primary text-white px-4 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 font-medium" onClick={toggleMenu}>
            Richiedi un preventivo
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;