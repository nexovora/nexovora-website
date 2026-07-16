import { useEffect } from "react";
import ContactCTA from "../components/contact/ContactCTA";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactHero from "../components/contact/ContactHero";
import ContactMethods from "../components/contact/ContactMethods";
import MainContactArea from "../components/contact/MainContactArea";
import PageLayout from "../components/layout/PageLayout";

function ContactPage() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = "Contact Nexovora | Start Your Digital Project";

    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content");

    description?.setAttribute(
      "content",
      "Contact Nexovora for website development, portfolio development, graphic design, QA testing, domain and hosting, branding, and professional digital solutions.",
    );

    const ogTitle = document.querySelector(
      'meta[property="og:title"]',
    );

    const ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );

    const previousOgTitle = ogTitle?.getAttribute("content");
    const previousOgDescription = ogDescription?.getAttribute("content");

    ogTitle?.setAttribute("content", "Contact Nexovora");

    ogDescription?.setAttribute(
      "content",
      "Let’s discuss your project and create a professional digital solution tailored to your goals.",
    );

    return () => {
      document.title = previousTitle;

      if (description && previousDescription) {
        description.setAttribute("content", previousDescription);
      }

      if (ogTitle && previousOgTitle) {
        ogTitle.setAttribute("content", previousOgTitle);
      }

      if (ogDescription && previousOgDescription) {
        ogDescription.setAttribute("content", previousOgDescription);
      }
    };
  }, []);

  return (
    <PageLayout>
      <main>
        <ContactHero />
        <ContactMethods />
        <MainContactArea />
        <ContactFAQ />
        <ContactCTA />
      </main>
    </PageLayout>
  );
}

export default ContactPage;