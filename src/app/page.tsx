import NewCarousel from '@/components/features/NewCarousel';
import Feature from '@/components/features/Feature';
import Services from '@/components/features/Services';
import DynamicNewTestimonial from '@/components/features/DynamicNewTestimonial';

export default function Home() {
  return (
    <>
      {/* Hero Carousel */}
      <NewCarousel />

      {/* Feature - Números estadísticos */}
      <Feature />

      {/* Services - Ya tiene su propio fondo */}
      <Services />

      {/* Testimonials - Fondo blanco limpio */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <DynamicNewTestimonial />
      </section>
    </>
  );
}
