import 'bootstrap/dist/css/bootstrap.min.css';
import { metadata } from './metadata';
import AppInitializer from '@/components/AppInitializer';
import './globals.css';
import { Kodchasan } from 'next/font/google';

export { metadata };

const kodchasan = Kodchasan({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kodchasan',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kodchasan.variable}>
      <head>
        <link rel="icon" href="/img/logo.ico" />
        
        {/* Google Web Fonts - Replaced with next/font */}

        {/* Icon Font Stylesheet - These will be replaced with React components or a more modern approach */}
        {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" /> */}
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" /> */}

        {/* Libraries Stylesheet - These are being removed in favor of React components and Framer Motion */}
        {/* <link href="/lib/animate/animate.min.css" rel="stylesheet" /> */}
        {/* <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" /> */}
        {/* <link href="/lib/lightbox/css/lightbox.min.css" rel="stylesheet" /> */}

        {/* Customized Bootstrap Stylesheet - Removing in favor of react-bootstrap components */}
        {/* <link href="/css/bootstrap.min.css" rel="stylesheet" /> */}

        {/* Template Stylesheet - Will be refactored into globals.css and component styles */}
        {/* <link href="/css/style.css" rel="stylesheet" /> */}
      </head>
      <body>
        <AppInitializer>{children}</AppInitializer>
      </body>
    </html>
  );
}
