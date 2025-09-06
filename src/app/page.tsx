import Carousel from '@/components/Carousel';
import Testimonial from '@/components/Testimonial';
import About from '@/components/About';
import Feature from '@/components/Feature';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <Carousel />
      <Testimonial />
      <About />
      <Feature />
      <Services />
    </>
  );
}
