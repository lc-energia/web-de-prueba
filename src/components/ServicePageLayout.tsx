
"use client";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

interface ServicePageLayoutProps {
  title: string;
  breadcrumb: string;
  children: React.ReactNode;
}

const ServicePageLayout = ({ title, breadcrumb, children }: ServicePageLayoutProps) => {
  return (
    <>
      <PageHeader title={title} breadcrumb={breadcrumb} />
      <div className="container-xxl py-5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ServicePageLayout;
