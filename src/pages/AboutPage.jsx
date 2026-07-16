import { useEffect } from "react";
import AboutCTA from "../components/about/AboutCTA";
import AboutFeatures from "../components/about/AboutFeatures";
import AboutHero from "../components/about/AboutHero";
import FounderSection from "../components/about/FounderSection";
import JourneyTimeline from "../components/about/JourneyTimeline";
import PurposeSection from "../components/about/PurposeSection";
import PageLayout from "../components/layout/PageLayout";

function AboutPage() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = "About Nexovora | Creating Digital Excellence";

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
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
  );
}

export default AboutPage;