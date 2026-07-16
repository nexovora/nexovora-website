import SEO from "../components/common/SEO";
import PageLayout from "../components/layout/PageLayout";

import Hero from "../components/home/Hero";
import TrustedBy from "../components/home/TrustedBy";
import ServicesPreview from "../components/home/ServicesPreview";
import StatsBar from "../components/home/StatsBar";
import Process from "../components/home/Process";
import Testimonials from "../components/home/Testimonials";
import HomeCTA from "../components/home/HomeCTA";

function HomePage() {
  return (
    <>
      <SEO
        title="Nexovora | Creating Digital Excellence"
        description="Professional Website Development, Graphic Design, Branding, QA Testing, Domain & Hosting, Portfolio Development, Resume Design, and complete digital solutions."
        url="/"
      />

      <PageLayout>
        <main>
          <Hero />

          <TrustedBy />

          <ServicesPreview />

          <StatsBar />

          <Process />

          <Testimonials />

          <HomeCTA />
        </main>
      </PageLayout>
    </>
  );
}

export default HomePage;