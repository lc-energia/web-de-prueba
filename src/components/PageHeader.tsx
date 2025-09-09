
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumb }) => {
  const headerStyle = {
    background: `linear-gradient(rgba(26, 42, 54, 0.8), rgba(26, 42, 54, 0.8)), url(/img/slider1.png) center center no-repeat`,
    backgroundSize: 'cover',
  };

  return (
    <div style={headerStyle} className="py-24 sm:py-32 mb-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3"
        >
          {title}
        </motion.h1>
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          aria-label="breadcrumb"
        >
          <ol className="flex items-center space-x-2 text-white">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="font-semibold" aria-current="page">
              {breadcrumb}
            </li>
          </ol>
        </motion.nav>
      </div>
    </div>
  );
};

export default PageHeader;
