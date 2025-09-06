const Topbar = () => {
  return (
    <div className="container-fluid bg-dark p-0">
      <div className="row gx-0 d-none d-lg-flex">
        <div className="col-lg-7 px-5 text-start">
          <div className="h-100 d-inline-flex align-items-center me-4">
            <small className="fa fa-map-marker-alt text-primary me-2"></small>
            <a href="https://maps.app.goo.gl/q5m7vkLzc2w2c3wz8" style={{ textDecoration: 'none' }}>
              <small>Via della Valle 39, 20841, Carate Brianza (MB)</small>
            </a>
          </div>
          <div className="h-100 d-inline-flex align-items-center">
            <small className="far fa-clock text-primary me-2"></small>
            <small>Lun - Ven 8:30-12:30 | 14:00-18:00</small>
          </div>
        </div>
        <div className="col-lg-5 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center me-4">
            <small className="fa fa-phone-alt text-primary me-2"></small>
            <a href="tel:0362992142" style={{ textDecoration: 'none' }}>
              <small>0362 992142</small>
            </a>
          </div>
          <div className="h-100 d-inline-flex align-items-center mx-n2">
            <a className="btn btn-square btn-link rounded-0" href="https://www.linkedin.com/company/lc-energia-s-r-l"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
