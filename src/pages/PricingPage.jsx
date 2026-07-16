import { useEffect } from "react";
import PageLayout from "../components/layout/PageLayout";
import AddOns from "../components/pricing/AddOns";
import ComparisonTable from "../components/pricing/ComparisonTable";
import FAQAccordion from "../components/pricing/FAQAccordion";
import IncludedFeatures from "../components/pricing/IncludedFeatures";
import PricingCTA from "../components/pricing/PricingCTA";
import PricingHero from "../components/pricing/PricingHero";
import PricingPlans from "../components/pricing/PricingPlans";
import QuoteRequestForm from "../components/pricing/QuoteRequestForm";

function PricingPage() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      "Pricing & Packages | Website, Portfolio, Branding & QA — Nexovora";

    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content");

    description?.setAttribute(
      "content",
      "Explore transparent one-time pricing for Nexovora website development, portfolio design, branding, QA testing, and custom digital solutions.",
    );

    return () => {
      document.title = previousTitle;

      if (description && previousDescription) {
        description.setAttribute("content", previousDescription);
      }
    };
  }, []);

  return (
    <PageLayout>
      <main>
        <PricingHero />
        <PricingPlans />
        <IncludedFeatures />
        <AddOns />
        <ComparisonTable />
        <FAQAccordion />
        <QuoteRequestForm />
        <PricingCTA />
      </main>
    </PageLayout>
  );
}

export default PricingPage;