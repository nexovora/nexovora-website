import SEO from "../components/common/SEO";
import PageLayout from "../components/layout/PageLayout";

function TermsConditionsPage() {
  return (
    <>
      <SEO
        title="Terms & Conditions | Nexovora"
        description="Read Nexovora's Terms and Conditions for using our website, requesting quotations, and working with our digital services."
        url="/terms-and-conditions"
      />

      <PageLayout>
        <main className="min-h-screen bg-slate-50 px-5 py-24">
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-12">
            <header className="border-b border-slate-200 pb-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                Legal Information
              </p>

              <h1 className="text-4xl font-bold text-slate-950">
                Terms & Conditions
              </h1>

              <p className="mt-4 text-sm text-slate-500">
                Last updated: July 17, 2026
              </p>
            </header>

            <div className="mt-10 space-y-10 text-base leading-8 text-slate-700">
              <section>
                <h2 className="mb-3 text-2xl font-bold text-slate-950">
                  1. Acceptance of Terms
                </h2>

                <p>
                  By using the Nexovora website, contacting us, requesting a
                  quotation, or purchasing a service, you agree to these Terms
                  and Conditions. If you do not agree, please do not use the
                  website or submit service requests.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-bold text-slate-950">
                  2. Services
                </h2>

                <p>
                  Nexovora provides digital services including website
                  development, portfolio development, graphic design, branding,
                  QA testing, domain and hosting guidance, resume design, and
                  related digital solutions. Final scope, deliverables, timeline,
                  and pricing are confirmed before work begins.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-bold text-slate-950">
                  3. Quotations and Payments
                </h2>

                <p>
                  Prices shown on the website are starting prices or package
                  references unless stated otherwise. Custom requirements,
                  revisions, integrations, third-party tools, hosting, domains,
                  or urgent timelines may affect the final quotation. Payment
                  terms are agreed before project work starts.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-bold text-slate-950">
                  4. Client Responsibilities
                </h2>

                <p>
                  Clients are responsible for providing accurate requirements,
                  content, brand assets, account access, feedback, and approvals
                  needed to complete the agreed work. Delays in receiving these
                  items may affect delivery timelines.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-bold text-slate-950">
                  5. Revisions and Changes
                </h2>

                <p>
                  Included revisions depend on the confirmed package or
                  proposal. Requests outside the agreed scope may require a
                  revised quotation, adjusted timeline, or additional payment.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-bold text-slate-950">
                  6. Third-Party Services
                </h2>

                <p>
                  Some projects may use third-party platforms, plugins, hosting,
                  domains, APIs, analytics, or payment providers. Nexovora is
                  not responsible for outages, policy changes, fees, or issues
                  caused by third-party services.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-bold text-slate-950">
                  7. Intellectual Property
                </h2>

                <p>
                  Ownership of final deliverables is transferred according to
                  the confirmed agreement after required payments are completed.
                  Nexovora may retain rights to pre-existing tools, templates,
                  code, methods, or internal processes used to deliver the work.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-bold text-slate-950">
                  8. Limitation of Liability
                </h2>

                <p>
                  Nexovora aims to provide reliable, professional services, but
                  we do not guarantee uninterrupted website availability,
                  specific search rankings, or business outcomes. To the maximum
                  extent permitted by law, liability is limited to the amount
                  paid for the affected service.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-2xl font-bold text-slate-950">
                  9. Changes to These Terms
                </h2>

                <p>
                  We may update these Terms and Conditions when our services,
                  website, or legal requirements change. The latest version will
                  be published on this page with an updated revision date.
                </p>
              </section>

              <section className="rounded-2xl bg-blue-50 p-6">
                <h2 className="mb-3 text-2xl font-bold text-slate-950">
                  10. Contact
                </h2>

                <p>
                  For questions about these Terms and Conditions, contact
                  Nexovora at{" "}
                  <a
                    href="mailto:hello.nexovora@gmail.com"
                    className="text-blue-700 hover:underline"
                  >
                    hello.nexovora@gmail.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </main>
      </PageLayout>
    </>
  );
}

export default TermsConditionsPage;
