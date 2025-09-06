import Image from 'next/image';

const Spinner = () => {
  return (
    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <Image src="/img/favicon.png" alt="Logo" width={150} height={150} className="img-fluid" style={{ marginTop: '20px' }} />
      </div>
    </div>
  );
};

export default Spinner;
