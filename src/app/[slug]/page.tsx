import { servicesData } from '@/data/services-data';
import ServicePage from './ServicePage';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

const Page = ({ params }: PageProps) => {
  const { slug } = params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} slug={slug} />;
};

export default Page;