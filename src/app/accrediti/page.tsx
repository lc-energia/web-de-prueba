
import PageHeader from '@/components/PageHeader';

const Page = () => {
  return (
    <>
      <PageHeader title="Accrediti" breadcrumb="Accrediti" />

      {/* 404 Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-shield-fill-check display-1 text-primary" />
              <h3 className=" mb-0">Accedriti LC Energia</h3>
              <h4 className="mb-1">
                Iscritti all'ordine degli Ingegneri e all'albo Provinciale dei
                Periti Industriali.
              </h4>
              <div
                className="text-center mx-auto mb-5 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ maxWidth: 600 }}
              >
                {/*   <img src="img/natural2.png" alt="Vantaggi" className="img-fluid mt-2" style="max-width: 80%; height: auto;"> */}
              </div>
              <p className="mb-4">
                Certificatori Energetici di cui alla D.G.R. Lombardia.
                <br />
                Iscritti negli elenchi del Ministero degli Interni dei
                professionisti abilitati alla progettazione antincendio ed
                all'estensione di perizie giurate di cui alla Legge 818/84.
                <br />
                Verificatori in materia di sicurezza degli impianti ai sensi
                della Legge 46/90.
                <br />
                Consulenti tecnici del Tribunale di Como, Monza, Lecco.
              </p>
              <a className="btn btn-primary rounded-pill py-3 px-5" href="/">
                Torna alla homepage
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 404 End */}
    </>
  );
};

export default Page;
