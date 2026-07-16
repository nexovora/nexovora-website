import { useEffect } from "react";
import PageLayout from "../components/layout/PageLayout";
import PartnerServices from "../components/services/PartnerServices";
import ServicesCTA from "../components/services/ServicesCTA";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesHero from "../components/services/ServicesHero";
import ServicesProcess from "../components/services/ServicesProcess";
import WhyChooseUs from "../components/services/WhyChooseUs";

function ServicesPage() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Digital Services | Website, Design & QA — Nexovora";

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <PageLayout>
      <main>
        <ServicesHero />

        <ServicesGrid />

        <PartnerServices />

        <ServicesProcess />

        <WhyChooseUs />

        <ServicesCTA />
      </main>
    </PageLayout>
  );
}

export default ServicesPage;