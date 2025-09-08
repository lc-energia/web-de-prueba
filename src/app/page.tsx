import NewCarousel from '@/components/NewCarousel';
import NewTestimonial from '@/components/NewTestimonial';
import About from '@/components/About';
import Feature from '@/components/Feature';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <NewCarousel />
      <NewTestimonial />
      <About />
      <Feature />
      <Services />
    </>
  );
}
