import Hero from "../components/home/Hero";
import HomeCTA from "../components/home/HomeCTA";
import Process from "../components/home/Process";
import ServicesPreview from "../components/home/ServicesPreview";
import StatsBar from "../components/home/StatsBar";
import Testimonials from "../components/home/Testimonials";
import TrustedBy from "../components/home/TrustedBy";
import PageLayout from "../components/layout/PageLayout";

function HomePage() {
  return (
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
  );
}

export default HomePage;