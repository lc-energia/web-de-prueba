'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className="relative py-28 sm:py-32 md:py-36 mb-5">
      <div className="absolute inset-0">
        <Image
          src="/img/imagenheader.JPEG"
          alt="Header background"
          fill
          style={{ objectFit: 'cover', zIndex: -1 }}
          priority
        />
        <div className="absolute inset-0 bg-dark opacity-80"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
};

export default PageHeader;