import SEO from "../components/common/SEO";

import AboutCTA from "../components/about/AboutCTA";
import AboutFeatures from "../components/about/AboutFeatures";
import AboutHero from "../components/about/AboutHero";
import FounderSection from "../components/about/FounderSection";
import JourneyTimeline from "../components/about/JourneyTimeline";
import PurposeSection from "../components/about/PurposeSection";
import PageLayout from "../components/layout/PageLayout";

function AboutPage() {
  return (
    <>
      <SEO
        title="About Nexovora | Creating Digital Excellence"
        description="Learn about Nexovora's mission, vision, values, and commitment to delivering high-quality digital solutions."
        url="/about"
      />

      <PageLayout>
        <main>
          <AboutHero />
          <PurposeSection />
          <JourneyTimeline />
          <AboutFeatures />
          <FounderSection />
          <AboutCTA />
        </main>
      </PageLayout>
    </>
  );
}

export default AboutPage;