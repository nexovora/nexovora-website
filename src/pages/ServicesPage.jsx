import SEO from "../components/common/SEO";

import PageLayout from "../components/layout/PageLayout";
import PartnerServices from "../components/services/PartnerServices";
import ServicesCTA from "../components/services/ServicesCTA";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesHero from "../components/services/ServicesHero";
import ServicesProcess from "../components/services/ServicesProcess";
import WhyChooseUs from "../components/services/WhyChooseUs";

function ServicesPage() {
  return (
    <>
      <SEO
        title="Digital Services | Website, Design & QA — Nexovora"
        description="Professional Website Development, Graphic Design, QA Testing, Branding, Domain & Hosting, Resume Design, Portfolio Development, and complete digital solutions tailored to your business."
        url="/services"
      />

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
    </>
  );
}

export default ServicesPage;