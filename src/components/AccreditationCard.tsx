import { Accreditation } from '@/data/azienda-data';
import { FaAward, FaCheckCircle, FaHardHat } from 'react-icons/fa';

interface AccreditationCardProps {
  accreditation: Accreditation;
}

const AccreditationCard: React.FC<AccreditationCardProps> = ({ accreditation }) => {
  const renderIcon = () => {
    switch (accreditation.icon) {
      case 'fa-award':
        return <FaAward className="text-4xl" />;
      case 'fa-check-circle':
        return <FaCheckCircle className="text-4xl" />;
      case 'fa-hard-hat':
        return <FaHardHat className="text-4xl" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl h-full">
        <div className="inline-block p-4 bg-primary text-white rounded-full mb-4">
          {renderIcon()}
        </div>
        <h5 className="text-2xl font-bold mb-3 text-dark">{accreditation.title}</h5>
        <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: accreditation.description }}></p>
      </div>
    </div>
  );
};

export default AccreditationCard;
