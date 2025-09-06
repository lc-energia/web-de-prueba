
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <PageHeader title="Accrediti" breadcrumb="Accrediti" />

      <div className="container-xxl py-5">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-shield-fill-check display-1 text-primary" />
              <h3 className=" mb-0">Accrediti LC Energia</h3>
              <h4 className="mb-1">
                Iscritti all&apos;ordine degli Ingegneri e all&apos;albo Provinciale dei
                Periti Industriali.
              </h4>
              <div
                className="text-center mx-auto mb-5"
                style={{ maxWidth: 600 }}
              >
                {/* <img src="img/natural2.png" alt="Vantaggi" className="img-fluid mt-2" style={{maxWidth: '80%', height: 'auto'}} /> */}
              </div>
              <p className="mb-4">
                Certificatori Energetici di cui alla D.G.R. Lombardia.
                <br />
                Iscritti negli elenchi del Ministero degli Interni dei
                professionisti abilitati alla progettazione antincendio ed
                all&apos;estensione di perizie giurate di cui alla Legge 818/84.
                <br />
                Verificatori in materia di sicurezza degli impianti ai sensi
                della Legge 46/90.
                <br />
                Consulenti tecnici del Tribunale di Como, Monza, Lecco.
              </p>
              <Link className="btn btn-primary rounded-pill py-3 px-5" href="/">
                Torna alla homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
