import React from 'react';
import {
  FaGlobe,
  FaTools,
  FaFireExtinguisher,
  FaSolarPanel,
  FaHeadphones,
  FaWallet,
  FaThermometerHalf,
  FaLightbulb,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaUsers,
  FaCheck,
  FaAward,
  FaClock
} from 'react-icons/fa';

const iconMap: { [key: string]: React.ElementType } = {
  'fa-globe': FaGlobe,
  'fa-tools': FaTools,
  'fa-fire-extinguisher': FaFireExtinguisher,
  'fa-solar-panel': FaSolarPanel,
  'fa-headphones': FaHeadphones,
  'fa-wallet': FaWallet,
  'fa-thermometer-half': FaThermometerHalf,
  'fa-lightbulb': FaLightbulb,
  'fa-arrow-right': FaArrowRight,
  'fa-chevron-left': FaChevronLeft,
  'fa-chevron-right': FaChevronRight,
  'fa-users': FaUsers,
  'fa-check': FaCheck,
  'fa-award': FaAward,
  'fa-clock': FaClock,
};

const IconMapper = ({ iconName, className }: { iconName: string, className?: string }) => {
  const IconComponent = iconMap[iconName];

  if (!IconComponent) {
    return null; // Or return a default icon
  }

  return <IconComponent className={className} />;
};

export default IconMapper;
