import SEO from "../components/common/SEO";
import ContactFAQ from "../components/contact/ContactFAQ";
import FAQAccordion from "../components/pricing/FAQAccordion";
import PageLayout from "../components/layout/PageLayout";

function FaqPage() {
  return (
    <>
      <SEO
        title="FAQs | Nexovora"
        description="Find answers to common questions about Nexovora services, pricing, timelines, communication, and project quotations."
        url="/faqs"
      />

      <PageLayout>
        <main>
          <section className="bg-gradient-to-b from-white to-blue-50/50 py-20">
            <div className="section-container text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Help Center
              </p>

              <h1 className="font-heading mx-auto mt-4 max-w-3xl text-4xl font-bold text-slate-950 sm:text-5xl">
                Frequently Asked Questions
              </h1>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
                Quick answers about Nexovora services, quotations, timelines,
                and communication.
              </p>
            </div>
          </section>

          <ContactFAQ />
          <FAQAccordion />
        </main>
      </PageLayout>
    </>
  );
}

export default FaqPage;
