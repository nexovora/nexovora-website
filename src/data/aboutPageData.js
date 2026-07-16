import {
  BadgeCheck,
  Eye,
  Flag,
  Headphones,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

export const aboutStats = [
  {
    value: "New",
    label: "Growing Startup",
    icon: Rocket,
  },
  {
    value: "6",
    label: "Core Digital Services",
    icon: Sparkles,
  },
  {
    value: "Clear",
    label: "Project Process",
    icon: BadgeCheck,
  },
  {
    value: "Quality",
    label: "Focused Approach",
    icon: ShieldCheck,
  },
];

export const purposeCards = [
  {
    id: "mission",
    title: "Our Mission",
    description:
      "To empower businesses, professionals, and individuals with modern digital solutions that improve visibility, strengthen brands, enhance efficiency, and create meaningful results.",
    icon: Target,
    type: "text",
  },
  {
    id: "vision",
    title: "Our Vision",
    description:
      "To grow Nexovora into a trusted digital solutions agency recognized for creativity, quality, transparency, innovation, and long-term client success.",
    icon: Eye,
    type: "text",
  },
  {
    id: "values",
    title: "Our Values",
    icon: ShieldCheck,
    type: "list",
    items: [
      "Client Success First",
      "Quality in Everything We Do",
      "Innovation & Creativity",
      "Transparency & Trust",
      "Continuous Improvement",
    ],
  },
];

export const journeyStages = [
  {
    step: "01",
    title: "The Beginning",
    description:
      "The idea of Nexovora started with a goal to provide professional, accessible, and reliable digital services.",
    icon: Flag,
  },
  {
    step: "02",
    title: "Building the Foundation",
    description:
      "We established our brand, services, digital presence, communication channels, and startup workflow.",
    icon: Rocket,
  },
  {
    step: "03",
    title: "Serving Our First Clients",
    description:
      "Our current focus is delivering high-quality work, collecting verified feedback, and building trust.",
    icon: Users,
  },
  {
    step: "04",
    title: "Growing Our Portfolio",
    description:
      "As projects are completed, we will showcase real results, improve our systems, and expand our capabilities.",
    icon: TrendingUp,
  },
  {
    step: "05",
    title: "The Future",
    description:
      "Our long-term goal is to grow into a complete digital agency with a strong team and a trusted reputation.",
    icon: Sparkles,
  },
];

export const aboutFeatures = [
  {
    title: "Result-Driven Solutions",
    description:
      "We focus on solutions that provide practical value and support real client goals.",
    icon: TrendingUp,
  },
  {
    title: "Quality & Reliability",
    description:
      "We follow careful design, development, and quality-checking practices.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Support",
    description:
      "We stay available throughout the process and continue supporting clients after delivery.",
    icon: Headphones,
  },
  {
    title: "Creative & Innovative",
    description:
      "We combine modern tools, thoughtful design, and new ideas to create effective digital experiences.",
    icon: Lightbulb,
  },
];