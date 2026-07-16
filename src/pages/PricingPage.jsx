import SEO from "../components/common/SEO";
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
  return (
    <>
      <SEO
        title="Pricing & Packages | Website, Portfolio, Branding & QA — Nexovora"
        description="Explore transparent one-time pricing for Nexovora website development, portfolio design, branding, QA testing, and custom digital solutions."
        url="/pricing"
      />

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
    </>
  );
}

export default PricingPage;