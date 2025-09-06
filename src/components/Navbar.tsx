'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

// 1. Crear versiones de los componentes de react-bootstrap que aceptan animaciones
const MotionNav_Link = motion(Nav.Link);
const MotionNavDropdown_Item = motion(NavDropdown.Item);

const CustomNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="navbar-light sticky-top p-0" style={{ zIndex: 9999 }}>
      <Navbar.Brand href="/" className="d-flex align-items-center border-end px-4 px-lg-5">
        <Image src="/img/favicon.png" alt="Logo" width={30} height={30} className="img-fluid" style={{ marginRight: '10px' }} priority />
        <h2 className="m-0">
          <span style={{ color: '#F49918' }}>LC</span>
          <span className="text-primary">Energia</span>
        </h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-4" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto p-4 p-lg-0">
          
          {/* 2. Usar los nuevos componentes animados directamente */}
          <MotionNav_Link href="/" whileHover={{ color: '#0d6efd' }} transition={{ duration: 0.2 }}>Home</MotionNav_Link>
          <MotionNav_Link href="/azienda" whileHover={{ color: '#0d6efd' }} transition={{ duration: 0.2 }}>Azienda</MotionNav_Link>

          <NavDropdown title="Progettazione" id="progettazione-dropdown">
            <MotionNavDropdown_Item href="/progettazione-e-consulenza-tecnica" whileHover={{ x: 5, backgroundColor: '#e9ecef' }}>Progettazione e consulenza tecnica</MotionNavDropdown_Item>
            <MotionNavDropdown_Item href="/contabilizzazione-calore-impianti-termici-centralizzati" whileHover={{ x: 5, backgroundColor: '#e9ecef' }}>Contabilizzazione e ripartizione del calore</MotionNavDropdown_Item>
            <MotionNavDropdown_Item href="/progettazione-antincendio" whileHover={{ x: 5, backgroundColor: '#e9ecef' }}>Progettazione Antincendio</MotionNavDropdown_Item>
            <MotionNavDropdown_Item href="/progettazione-acustica" whileHover={{ x: 5, backgroundColor: '#e9ecef' }}>Progettazione Acustica</MotionNavDropdown_Item>
            <MotionNavDropdown_Item href="/progettare-il-risparmio-energetico" whileHover={{ x: 5, backgroundColor: '#e9ecef' }}>Progettare il risparmio energetico</MotionNavDropdown_Item>
            <MotionNavDropdown_Item href="/impianti-geotermici" whileHover={{ x: 5, backgroundColor: '#e9ecef' }}>Impianti Geotermici</MotionNavDropdown_Item>
          </NavDropdown>

          <NavDropdown title="Impianti" id="impianti-dropdown">
            <MotionNavDropdown_Item href="/impianti-fotovoltaici" whileHover={{ x: 5, backgroundColor: '#e9ecef' }}>Impianti Fotovoltaici</MotionNavDropdown_Item>
            <MotionNavDropdown_Item href="/stazioni-di-ricarica" whileHover={{ x: 5, backgroundColor: '#e9ecef' }}>Stazioni di Ricarica</MotionNavDropdown_Item>
          </NavDropdown>

          <NavDropdown title="Studio" id="studio-dropdown">
            <MotionNavDropdown_Item href="/riqualificazione-di-centrali-termiche-esistenti" whileHover={{ x: 5, backgroundColor: '#e9ecef' }}>Diagnosi Energetica e Riqualificazione Centrali Termiche</MotionNavDropdown_Item>
          </NavDropdown>

          <MotionNav_Link href="/accrediti" whileHover={{ color: '#0d6efd' }} transition={{ duration: 0.2 }}>Accrediti</MotionNav_Link>
        </Nav>
        <motion.a href="/contact" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Richiedi un preventivo<i className="fa fa-arrow-right ms-3"></i>
        </motion.a>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
