import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0" style={{ zIndex: 9999 }}>
      <a href="/" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
        <Image src="/img/favicon.png" alt="Logo" width={30} height={30} className="img-fluid" style={{ marginRight: '10px' }} />
        <h2 className="m-0">
          <span style={{ color: '#F49918' }}>LC</span>
          <span className="text-primary">Energia</span>
        </h2>
      </a>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <a href="/" className="nav-item nav-link ">Home</a>
          <a href="/azienda" className="nav-item nav-link">Azienda</a>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Progettazione</a>
            <div className="dropdown-menu bg-light m-0">
              <a href="/progettazione-e-consulenza-tecnica" className="dropdown-item">Progettazione e consulenza tecnica</a>
              <a href="/contabilizzazione-calore-impianti-termici-centralizzati" className="dropdown-item">Contabilizzazione e ripartizione del calore</a>
              <a href="/progettazione-antincendio" className="dropdown-item">Progettazione Antincendio</a>
              <a href="/progettazione-acustica" className="dropdown-item">Progettazione Acustica</a>
              <a href="/progettare-il-risparmio-energetico" className="dropdown-item">Progettare il risparmio energetico</a>
              <a href="/impianti-geotermici" className="dropdown-item">Impianti Geotermici</a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Impianti</a>
            <div className="dropdown-menu bg-light m-0">
              <a href="/impianti-fotovoltaici" className="dropdown-item">Impianti Fotovoltaici</a>
              <a href="/stazioni-di-ricarica" className="dropdown-item">Stazioni di Ricarica</a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Studio</a>
            <div className="dropdown-menu bg-light m-0">
              <a href="/riqualificazione-di-centrali-termiche-esistenti" className="dropdown-item">Diagnosi Energetica e Riqualificazione Centrali Termiche</a>
            </div>
          </div>
          <a href="/accrediti" className="nav-item nav-link">Accrediti</a>
        </div>
        <a href="/contact" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Richiedi un preventivo<i className="fa fa-arrow-right ms-3"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;
