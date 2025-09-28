'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useSticky } from '@/hooks/useSticky';

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void; }) => (
  <Link href={href} onClick={onClick} className="block lg:inline-block px-4 py-3 lg:py-5 text-dark-light hover:text-primary transition-colors duration-300">
    {children}
  </Link>
);

const DropdownLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void; }) => (
  <Link href={href} onClick={onClick} className="block px-4 py-2 text-sm text-dark-light hover:bg-gray-100 hover:text-primary transition-colors duration-300">
    {children}
  </Link>
);

const ArrowDownIcon = () => (
  <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5 inline-block ml-2" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const MenuIcon = () => (
   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const isSticky = useSticky();
  const navRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header ref={navRef} className={`bg-white w-full top-0 z-50 transition-shadow duration-300 ${isSticky ? 'sticky shadow-md' : 'relative'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center border-r border-gray-200 pr-4 lg:pr-5 h-20" onClick={closeMenu}>
          <Image src="/img/logo.png" alt="LC Energia Logo" width={150} height={35} priority />
        </Link>

        <div className="lg:hidden">
          <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-4" aria-label="Toggle menu">
            <MenuIcon />
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center flex-grow">
          <div className="flex items-center space-x-2 ml-auto">
            <NavLink href="/" onClick={closeMenu}>Home</NavLink>
            <NavLink href="/azienda" onClick={closeMenu}>Azienda</NavLink>

            <div className="relative">
              <button onClick={() => handleDropdownToggle('progettazione')} className="flex items-center px-4 py-5 text-dark-light hover:text-primary transition-colors duration-300">
                Progettazione <ArrowDownIcon />
              </button>
              {openDropdown === 'progettazione' && (
                <div className="absolute top-full left-0 mt-0 w-80 bg-white shadow-lg border rounded-md">
                  <DropdownLink href="/progettazione-e-consulenza-tecnica" onClick={closeMenu}>Progettazione e consulenza tecnica</DropdownLink>
                  <DropdownLink href="/contabilizzazione-calore-impianti-termici-centralizzati" onClick={closeMenu}>Contabilizzazione e ripartizione del calore</DropdownLink>
                  <DropdownLink href="/progettazione-antincendio" onClick={closeMenu}>Progettazione Antincendio</DropdownLink>
                  <DropdownLink href="/progettazione-acustica" onClick={closeMenu}>Progettazione Acustica</DropdownLink>
                  <DropdownLink href="/progettare-il-risparmio-energetico" onClick={closeMenu}>Progettare il risparmio energetico</DropdownLink>
                  <DropdownLink href="/impianti-geotermici" onClick={closeMenu}>Impianti Geotermici</DropdownLink>
                </div>
              )}
            </div>

            <div className="relative">
              <button onClick={() => handleDropdownToggle('impianti')} className="flex items-center px-4 py-5 text-dark-light hover:text-primary transition-colors duration-300">
                Impianti <ArrowDownIcon />
              </button>
              {openDropdown === 'impianti' && (
                <div className="absolute top-full left-0 mt-0 w-60 bg-white shadow-lg border rounded-md">
                  <DropdownLink href="/impianti-fotovoltaici" onClick={closeMenu}>Impianti Fotovoltaici</DropdownLink>
                  <DropdownLink href="/stazioni-di-ricarica" onClick={closeMenu}>Stazioni di Ricarica</DropdownLink>
                </div>
              )}
            </div>

            <div className="relative">
              <button onClick={() => handleDropdownToggle('studio')} className="flex items-center px-4 py-5 text-dark-light hover:text-primary transition-colors duration-300">
                Studio <ArrowDownIcon />
              </button>
              {openDropdown === 'studio' && (
                <div className="absolute top-full left-0 mt-0 w-80 bg-white shadow-lg border rounded-md">
                  <DropdownLink href="/riqualificazione-di-centrali-termiche-esistenti" onClick={closeMenu}>Diagnosi Energetica e Riqualificazione Centrali Termiche</DropdownLink>
                </div>
              )}
            </div>

            <NavLink href="/accrediti" onClick={closeMenu}>Accrediti</NavLink>
          </div>
        </nav>

        <div className="hidden lg:flex">
          <Link href="/contact" className="flex items-center bg-primary text-white py-4 px-6 hover:bg-primary-hover transition-colors duration-300 h-20">
            Richiedi un preventivo<ArrowRightIcon />
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden">
            <nav>
              <NavLink href="/" onClick={closeMenu}>Home</NavLink>
              <NavLink href="/azienda" onClick={closeMenu}>Azienda</NavLink>

              <div className="px-4 py-2">
                <button onClick={() => handleDropdownToggle('progettazione')} className="w-full text-left flex justify-between items-center text-dark-light font-semibold">
                  Progettazione <ArrowDownIcon />
                </button>
                {openDropdown === 'progettazione' && (
                  <div className="pl-4 mt-2">
                    <DropdownLink href="/progettazione-e-consulenza-tecnica" onClick={closeMenu}>Progettazione e consulenza tecnica</DropdownLink>
                    <DropdownLink href="/contabilizzazione-calore-impianti-termici-centralizzati" onClick={closeMenu}>Contabilizzazione e ripartizione calore</DropdownLink>
                    <DropdownLink href="/progettazione-antincendio" onClick={closeMenu}>Progettazione Antincendio</DropdownLink>
                    <DropdownLink href="/progettazione-acustica" onClick={closeMenu}>Progettazione Acustica</DropdownLink>
                    <DropdownLink href="/progettare-il-risparmio-energetico" onClick={closeMenu}>Progettare il risparmio energetico</DropdownLink>
                    <DropdownLink href="/impianti-geotermici" onClick={closeMenu}>Impianti Geotermici</DropdownLink>
                  </div>
                )}
              </div>

              <div className="px-4 py-2">
                <button onClick={() => handleDropdownToggle('impianti')} className="w-full text-left flex justify-between items-center text-dark-light font-semibold">
                  Impianti <ArrowDownIcon />
                </button>
                {openDropdown === 'impianti' && (
                  <div className="pl-4 mt-2">
                    <DropdownLink href="/impianti-fotovoltaici" onClick={closeMenu}>Impianti Fotovoltaici</DropdownLink>
                    <DropdownLink href="/stazioni-di-ricarica" onClick={closeMenu}>Stazioni di Ricarica</DropdownLink>
                  </div>
                )}
              </div>

              <div className="px-4 py-2">
                <button onClick={() => handleDropdownToggle('studio')} className="w-full text-left flex justify-between items-center text-dark-light font-semibold">
                  Studio <ArrowDownIcon />
                </button>
                {openDropdown === 'studio' && (
                  <div className="pl-4 mt-2">
                    <DropdownLink href="/riqualificazione-di-centrali-termiche-esistenti" onClick={closeMenu}>Diagnosi Energetica e Riqualificazione</DropdownLink>
                  </div>
                )}
              </div>

              <NavLink href="/accrediti" onClick={closeMenu}>Accrediti</NavLink>
              <div className="border-t mt-2">
                <Link href="/contact" onClick={closeMenu} className="block w-full text-center bg-primary text-white py-3 mt-2 hover:bg-primary-hover">
                  Richiedi un preventivo
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;