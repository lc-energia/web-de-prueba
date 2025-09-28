'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useSticky } from '@/hooks/useSticky';

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void; }) => (
  <Link href={href} onClick={onClick} className="block lg:inline-block px-4 py-2 lg:py-5 text-gray-700 hover:text-primary transition-colors">
    {children}
  </Link>
);

const DropdownLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void; }) => (
  <Link href={href} onClick={onClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary">
    {children}
  </Link>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const isSticky = useSticky();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const ArrowDownIcon = () => (
    <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg className="w-5 h-5 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
  );

  const MenuIcon = () => (
     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  );

  return (
    <header className={`bg-white w-full top-0 z-50 transition-shadow ${isSticky ? 'sticky shadow-md' : 'relative'}`}>
      <nav className="container mx-auto flex items-center justify-between p-0">
        <div className="flex items-center">
          <Link href="/" className="flex items-center border-r border-gray-200 px-4 lg:px-5 h-20">
            <Image src="/img/logo.png" alt="LC Energia Logo" width={150} height={35} priority />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden px-4">
          <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <MenuIcon />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-2">
          <NavLink href="/" onClick={closeMenu}>Home</NavLink>
          <NavLink href="/azienda" onClick={closeMenu}>Azienda</NavLink>

          {/* Progettazione Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => handleDropdownToggle('progettazione')} className="flex items-center px-4 py-5 text-gray-700 hover:text-primary transition-colors">
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

          {/* Impianti Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => handleDropdownToggle('impianti')} className="flex items-center px-4 py-5 text-gray-700 hover:text-primary transition-colors">
              Impianti <ArrowDownIcon />
            </button>
            {openDropdown === 'impianti' && (
              <div className="absolute top-full left-0 mt-0 w-60 bg-white shadow-lg border rounded-md">
                <DropdownLink href="/impianti-fotovoltaici" onClick={closeMenu}>Impianti Fotovoltaici</DropdownLink>
                <DropdownLink href="/stazioni-di-ricarica" onClick={closeMenu}>Stazioni di Ricarica</DropdownLink>
              </div>
            )}
          </div>

          {/* Studio Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => handleDropdownToggle('studio')} className="flex items-center px-4 py-5 text-gray-700 hover:text-primary transition-colors">
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

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <Link href="/contact" className="flex items-center bg-primary text-white py-4 px-5 hover:bg-primary-hover transition-colors">
            Richiedi un preventivo <ArrowRightIcon />
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden">
            <NavLink href="/" onClick={closeMenu}>Home</NavLink>
            <NavLink href="/azienda" onClick={closeMenu}>Azienda</NavLink>

            {/* Mobile Dropdowns */}
            <div className="px-4 py-2">
              <button onClick={() => handleDropdownToggle('progettazione')} className="w-full text-left flex justify-between items-center text-gray-700">
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
              <button onClick={() => handleDropdownToggle('impianti')} className="w-full text-left flex justify-between items-center text-gray-700">
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
              <button onClick={() => handleDropdownToggle('studio')} className="w-full text-left flex justify-between items-center text-gray-700">
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
              <NavLink href="/contact" onClick={closeMenu}>Richiedi un preventivo</NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;