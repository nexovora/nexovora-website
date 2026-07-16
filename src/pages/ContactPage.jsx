import SEO from "../components/common/SEO";

import ContactCTA from "../components/contact/ContactCTA";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactHero from "../components/contact/ContactHero";
import ContactMethods from "../components/contact/ContactMethods";
import MainContactArea from "../components/contact/MainContactArea";
import PageLayout from "../components/layout/PageLayout";

function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Nexovora | Start Your Digital Project"
        description="Contact Nexovora for website development, portfolio development, graphic design, QA testing, domain & hosting, branding, and professional digital solutions."
        url="/contact"
      />

      <PageLayout>
        <main>
          <ContactHero />
          <ContactMethods />
          <MainContactArea />
          <ContactFAQ />
          <ContactCTA />
        </main>
      </PageLayout>
    </>
  );
}

export default ContactPage;