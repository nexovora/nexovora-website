import {
  BadgeCheck,
  BriefcaseBusiness,
  Cloud,
  CodeXml,
  FileCheck2,
  FileText,
  FileUser,
  Gem,
  Headphones,
  MessageCircle,
  Palette,
  PenTool,
  Presentation,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
  WalletCards,
} from "lucide-react";

export const detailedServices = [
  {
    id: "website-development",
    title: "Website Development",
    description:
      "Fast, responsive, and modern websites built to represent your brand and support real business goals.",
    features: [
      "Custom Websites",
      "Responsive Design",
      "SEO-Friendly Structure",
      "Performance Optimized",
    ],
    icon: CodeXml,
  },
  {
    id: "portfolio-development",
    title: "Portfolio Development",
    description:
      "Professional portfolio websites designed to showcase your skills, work, achievements, and experience.",
    features: [
      "Personal Portfolio",
      "Clean Modern Design",
      "Resume Integration",
      "Fast and Secure",
    ],
    icon: BriefcaseBusiness,
  },
  {
    id: "graphic-design-branding",
    title: "Graphic Design & Branding",
    description:
      "Creative visual solutions that help your business look professional, memorable, and consistent.",
    features: [
      "Logo Design",
      "Brand Identity",
      "Social Media Graphics",
      "Marketing Materials",
    ],
    icon: Palette,
  },
  {
    id: "qa-testing",
    title: "QA & Testing",
    description:
      "Structured testing services focused on improving functionality, usability, reliability, and quality.",
    features: [
      "Manual Testing",
      "Functional Testing",
      "Bug Reporting",
      "Test Case Writing",
    ],
    icon: ShieldCheck,
  },
  {
    id: "domain-hosting",
    title: "Domain & Hosting",
    description:
      "Guidance and setup for domains, hosting, deployment, SSL certificates, and business email.",
    features: [
      "Domain Registration",
      "Web Hosting Setup",
      "SSL Configuration",
      "Business Email Setup",
    ],
    icon: Cloud,
  },
  {
    id: "resume-linkedin",
    title: "Resume & LinkedIn",
    description:
      "Professional career documents and digital profiles designed to improve your presentation.",
    features: [
      "ATS Resume",
      "Professional CV",
      "LinkedIn Optimization",
      "Cover Letter",
    ],
    icon: FileUser,
  },
];

export const heroBenefits = [
  {
    title: "Result-Focused Solutions",
    icon: BadgeCheck,
  },
  {
    title: "Quality Assurance",
    icon: ShieldCheck,
  },
  {
    title: "Daily Client Support",
    icon: Headphones,
  },
];

export const whyChooseFeatures = [
  {
    title: "Quality & Reliability",
    description:
      "We focus on carefully planned solutions with attention to usability, detail, and quality.",
    icon: Gem,
  },
  {
    title: "Client-Centric Approach",
    description:
      "We listen carefully, communicate clearly, and build around your actual goals.",
    icon: Users,
  },
  {
    title: "Agreed Timelines",
    description:
      "Every project follows a realistic schedule agreed before development begins.",
    icon: Timer,
  },
  {
    title: "Strong Value",
    description:
      "Professional digital services offered at practical startup-friendly pricing.",
    icon: WalletCards,
  },
];

export const heroFloatingCards = [
  {
    title: "Website",
    subtitle: "Modern Development",
    icon: CodeXml,
    position:
      "left-0 top-[15%] -translate-x-[10%] sm:-translate-x-[20%]",
  },
  {
    title: "Branding",
    subtitle: "Creative Identity",
    icon: Palette,
    position: "right-0 top-[5%] translate-x-[5%] sm:translate-x-[15%]",
  },
  {
    title: "QA Testing",
    subtitle: "Quality Focused",
    icon: ShieldCheck,
    position:
      "right-0 bottom-[10%] translate-x-[5%] sm:translate-x-[15%]",
  },
  {
    title: "Portfolio",
    subtitle: "Professional Presence",
    icon: BriefcaseBusiness,
    position:
      "left-0 bottom-[8%] -translate-x-[5%] sm:-translate-x-[15%]",
  },
];

export const serviceContactItems = [
  {
    title: "Clear Communication",
    icon: MessageCircle,
  },
  {
    title: "Professional Delivery",
    icon: BadgeCheck,
  },
];

export const partnerServices = [
  {
    id: "presentation-design",
    title: "Presentation Design",
    description:
      "Clean, engaging, and professionally structured presentations for academic, business, and professional use.",
    features: [
      "PowerPoint Presentations",
      "Professional Slide Design",
      "Charts and Visuals",
      "Content Formatting",
    ],
    icon: Presentation,
  },
  {
    id: "academic-formatting",
    title: "Academic Formatting & Proofreading",
    description:
      "Support for improving the structure, formatting, language, and presentation of academic documents.",
    features: [
      "Document Formatting",
      "Grammar and Proofreading",
      "Citation Formatting",
      "Table of Contents Setup",
    ],
    icon: FileCheck2,
  },
  {
    id: "specialized-documents",
    title: "Specialized Document Design",
    description:
      "Professional formatting and visual presentation for reports, proposals, certificates, and formal documents.",
    features: [
      "Report Formatting",
      "Proposal Design",
      "Certificate Design",
      "Professional Layouts",
    ],
    icon: FileText,
  },
  {
    id: "calligraphy",
    title: "Calligraphy Services",
    description:
      "Elegant custom hand-lettering for certificates, posters, gifts, events, and creative projects.",
    features: [
      "Custom Hand-Lettering",
      "Certificates",
      "Posters and Quotes",
      "Personalized Designs",
    ],
    icon: PenTool,
  },
  {
    id: "resin-art",
    title: "Custom Resin Art",
    description:
      "Handmade resin products created by a specialist partner for gifts, decoration, and personalized orders.",
    features: [
      "Custom Coasters",
      "Keychains",
      "Jewelry Items",
      "Decorative Pieces",
    ],
    icon: Sparkles,
  },
];