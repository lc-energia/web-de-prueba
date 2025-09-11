import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';

const Topbar = () => {
  return (
    <div className="bg-gray-900 text-light px-4 py-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left side: Address and Hours (hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-primary" />
            <a href="https://maps.app.goo.gl/q5m7vkLzc2w2c3wz8" className="text-sm hover:text-primary transition-colors duration-300">Via della Valle 39, 20841, Carate Brianza (MB)</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaClock className="text-primary" />
            <span className="text-sm">Lun - Ven 8:30-12:30 | 14:00-18:00</span>
          </div>
        </div>

        {/* Right side: Phone and LinkedIn */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-primary" />
            <a href="tel:0362992142" className="text-sm hover:text-primary transition-colors duration-300">0362 992142</a>
          </div>
          <a href="https://www.linkedin.com/company/lc-energia-s-r-l" className="text-light hover:text-primary transition-colors duration-300">
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;