
interface PageHeaderProps {
  title: string;
  breadcrumb: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumb }) => {
  const headerStyle = {
    background: `linear-gradient(rgba(14, 145, 201, 0.435), rgba(202, 215, 22, 0.57)), url(/img/slider1.png) center center no-repeat`,
    backgroundSize: 'cover'
  };

  return (
    <div className="container-fluid page-header py-5 mb-5" style={headerStyle}>
      <div className="container py-5">
        <h1 className="display-3 text-white mb-3 animated slideInDown">
          {title}
        </h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="text-white" href="/">
                Home
              </a>
            </li>
            <li
              className="breadcrumb-item text-white active"
              aria-current="page"
            >
              {breadcrumb}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
