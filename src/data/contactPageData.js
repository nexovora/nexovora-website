import {
  Clock3,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Hello Nexovora, I would like to discuss a project.",
);

export const contactTrustPoints = [
  {
    title: "Quick Response",
    description: "We aim to respond within one business day.",
    icon: Zap,
  },
  {
    title: "Trusted Support",
    description: "Clear guidance at every stage of your project.",
    icon: ShieldCheck,
  },
  {
    title: "Client Focused",
    description: "Your goals and requirements guide our process.",
    icon: Users,
  },
];

export const contactMethods = [
  {
    id: "location",
    title: "Location",
    value: "Islamabad, Pakistan",
    description: "Serving local and remote clients",
    href: null,
    icon: MapPin,
  },
  {
    id: "phone",
    title: "Call Us",
    value: "+92 328 8651551",
    description: "Available during business hours",
    href: "tel:+923288651551",
    icon: Phone,
  },
  {
    id: "email",
    title: "Email Us",
    value: "hello.nexovora@gmail.com",
    description: "We’ll respond as soon as possible",
    href: "mailto:hello.nexovora@gmail.com",
    icon: Mail,
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    value: "+92 328 8651551",
    description: "Fastest way to discuss your project",
    href: `https://wa.me/923288651551?text=${whatsappMessage}`,
    icon: MessageCircle,
  },
];

export const serviceOptions = [
  "Website Development",
  "Portfolio Development",
  "Graphic Design & Branding",
  "QA & Testing",
  "Domain & Hosting",
  "Resume & LinkedIn",
  "Other Digital Service",
];

export const budgetOptions = [
  "Under PKR 5,000",
  "PKR 5,000–10,000",
  "PKR 10,000–25,000",
  "PKR 25,000–50,000",
  "PKR 50,000+",
  "Not Sure Yet",
];

export const timelineOptions = [
  "As Soon as Possible",
  "Within 1 Week",
  "Within 2 Weeks",
  "Within 1 Month",
  "Flexible",
];

export const contactFaqs = [
  {
    question: "How quickly will you respond to my message?",
    answer:
      "We aim to respond within one business day. WhatsApp inquiries may receive a faster response during business hours.",
  },
  {
    question: "What information should I include in my message?",
    answer:
      "Please share the service you need, your project goals, preferred timeline, budget range, and any examples or references you have.",
  },
  {
    question: "Do you work with clients outside Pakistan?",
    answer:
      "Yes. Nexovora can work with remote clients and communicate through email, WhatsApp, and online meetings.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Yes. Every package can be adjusted based on project scope, functionality, deadline, and business needs.",
  },
  {
    question: "Can I schedule an online meeting?",
    answer:
      "Yes. After reviewing your initial requirements, we can arrange an online consultation when needed.",
  },
  {
    question: "How do we get started?",
    answer:
      "Send us your project details through the form or WhatsApp. We’ll review the requirements, clarify the scope, and provide a quotation before work begins.",
  },
];

export const locationDetails = [
  {
    title: "Based In",
    value: "Islamabad, Pakistan",
    description: "Serving local and remote clients",
    icon: MapPin,
  },
  {
    title: "Business Hours",
    value: "Monday–Sunday: 9:00 AM–10:00 PM",
    description: "Pakistan Standard Time",
    icon: Clock3,
  },
];

export const whatsappContact = {
  href: `https://wa.me/923288651551?text=${whatsappMessage}`,
  icon: MessageCircle,
};

export const supportIllustrationItems = [
  {
    title: "Project Guidance",
    icon: Headphones,
  },
  {
    title: "Clear Communication",
    icon: MessageCircle,
  },
];