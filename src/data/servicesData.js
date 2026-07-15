import {
  BriefcaseBusiness,
  Cloud,
  CodeXml,
  FileUser,
  Palette,
  ShieldCheck,
} from "lucide-react";

export const servicesData = [
  {
    id: "website-development",
    title: "Website Development",
    description:
      "Modern, responsive websites built around your brand, audience, and business goals.",
    icon: CodeXml,
  },
  {
    id: "portfolio-development",
    title: "Portfolio Development",
    description:
      "Professional portfolio websites that clearly present your skills, work, and experience.",
    icon: BriefcaseBusiness,
  },
  {
    id: "graphic-design",
    title: "Graphic Design & Branding",
    description:
      "Creative visual solutions that help your business look professional and memorable.",
    icon: Palette,
  },
  {
    id: "qa-testing",
    title: "QA & Testing",
    description:
      "Careful functional and usability testing with clear test cases and bug reports.",
    icon: ShieldCheck,
  },
  {
    id: "domain-hosting",
    title: "Domain & Hosting",
    description:
      "Guidance and setup for domains, hosting, SSL, deployment, and business email.",
    icon: Cloud,
  },
  {
    id: "resume-linkedin",
    title: "Resume & LinkedIn",
    description:
      "ATS-friendly career documents and optimized profiles for stronger presentation.",
    icon: FileUser,
  },
];