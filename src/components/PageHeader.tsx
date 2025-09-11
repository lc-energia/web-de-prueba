'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumb }) => {
  return (
    <div className="relative h-64 md:h-80 flex items-center justify-center text-white">
      <Image
        src="/img/slider1.png"
        alt="Page Header Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-60 z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3"
        >
          {title}
        </motion.h1>
        <motion.nav
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          aria-label="breadcrumb"
        >
          <ol className="flex items-center justify-center space-x-2 text-gray-200">
            <li>
              <Link href="/" className="hover:text-primary transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>&gt;</li>
            <li className="font-semibold text-white" aria-current="page">
              {breadcrumb}
            </li>
          </ol>
        </motion.nav>
      </div>
    </div>
  );
};

export default PageHeader;
