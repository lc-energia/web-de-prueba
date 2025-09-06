'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

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
          
          <Nav.Link as={Link} href="/"><motion.span whileHover={{ color: '#0d6efd' }} transition={{ duration: 0.2 }}>Home</motion.span></Nav.Link>
          <Nav.Link as={Link} href="/azienda"><motion.span whileHover={{ color: '#0d6efd' }} transition={{ duration: 0.2 }}>Azienda</motion.span></Nav.Link>

          <NavDropdown title="Progettazione" id="progettazione-dropdown">
            <NavDropdown.Item as={Link} href="/progettazione-e-consulenza-tecnica"><motion.span whileHover={{ x: 5 }}>Progettazione e consulenza tecnica</motion.span></NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/contabilizzazione-calore-impianti-termici-centralizzati"><motion.span whileHover={{ x: 5 }}>Contabilizzazione e ripartizione del calore</motion.span></NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/progettazione-antincendio"><motion.span whileHover={{ x: 5 }}>Progettazione Antincendio</motion.span></NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/progettazione-acustica"><motion.span whileHover={{ x: 5 }}>Progettazione Acustica</motion.span></NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/progettare-il-risparmio-energetico"><motion.span whileHover={{ x: 5 }}>Progettare il risparmio energetico</motion.span></NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/impianti-geotermici"><motion.span whileHover={{ x: 5 }}>Impianti Geotermici</motion.span></NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Impianti" id="impianti-dropdown">
            <NavDropdown.Item as={Link} href="/impianti-fotovoltaici"><motion.span whileHover={{ x: 5 }}>Impianti Fotovoltaici</motion.span></NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/stazioni-di-ricarica"><motion.span whileHover={{ x: 5 }}>Stazioni di Ricarica</motion.span></NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Studio" id="studio-dropdown">
            <NavDropdown.Item as={Link} href="/riqualificazione-di-centrali-termiche-esistenti"><motion.span whileHover={{ x: 5 }}>Diagnosi Energetica e Riqualificazione Centrali Termiche</motion.span></NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={Link} href="/accrediti"><motion.span whileHover={{ color: '#0d6efd' }} transition={{ duration: 0.2 }}>Accrediti</motion.span></Nav.Link>
        </Nav>
        <Link href="/contact" passHref legacyBehavior>
          <motion.a className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span className="d-flex align-items-center">
              Richiedi un preventivo
              <FaArrowRight className="ms-3" />
            </span>
          </motion.a>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
