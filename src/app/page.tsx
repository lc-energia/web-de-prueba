import PremiumHero from '@/components/features/PremiumHero';
import TrustBar from '@/components/features/TrustBar';
import Feature from '@/components/features/Feature';
import Services from '@/components/features/Services';
import EnvironmentalImpact from '@/components/features/EnvironmentalImpact';
import DynamicNewTestimonial from '@/components/features/DynamicNewTestimonial';

export default function Home() {
  return (
    <>
      {/* Hero - Sin wrapper adicional, el componente ya tiene su diseño */}
      <PremiumHero />

      {/* Trust Bar - Señales de confianza */}
      <TrustBar />

      {/* Feature - Números estadísticos */}
      <Feature />

      {/* Services - Ya tiene su propio fondo */}
      <Services />

      {/* Environmental Impact - Impacto ambiental */}
      <EnvironmentalImpact />

      {/* Testimonials - Fondo blanco limpio */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <DynamicNewTestimonial />
      </section>
    </>
  );
}
