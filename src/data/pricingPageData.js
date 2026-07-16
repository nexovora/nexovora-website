import {
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Cloud,
  Globe2,
  Headphones,
  Mail,
  MonitorSmartphone,
  Palette,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const pricingCategories = [
  { id: "websites", label: "Website Packages" },
  { id: "portfolios", label: "Portfolio Packages" },
  { id: "branding", label: "Branding Packages" },
  { id: "qa", label: "QA Packages" },
];

export const pricingPackages = {
  websites: [
    {
      id: "website-starter",
      name: "Starter",
      description: "Best for individuals and small service providers.",
      prefix: "Starting from",
      currency: "PKR",
      price: "15,000",
      billing: "One-time project",
      cta: "Get Started",
      featured: false,
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Contact form",
        "Basic SEO setup",
        "Social media links",
        "Website deployment",
        "15 days basic support",
      ],
    },
    {
      id: "website-professional",
      name: "Professional",
      description: "Best for startups and growing businesses.",
      prefix: "Starting from",
      currency: "PKR",
      price: "25,000",
      billing: "One-time project",
      cta: "Get Started",
      featured: true,
      badge: "Most Popular",
      features: [
        "Up to 10 pages",
        "Custom modern design",
        "Responsive development",
        "Contact form and WhatsApp",
        "Basic SEO optimization",
        "Speed optimization",
        "Social media integration",
        "Basic analytics setup",
        "30 days support",
      ],
    },
    {
      id: "website-premium",
      name: "Premium",
      description: "Best for businesses needing advanced functionality.",
      prefix: "Starting from",
      currency: "PKR",
      price: "45,000",
      billing: "Custom quotation may apply",
      cta: "Request a Quote",
      featured: false,
      features: [
        "Custom page structure",
        "Advanced custom design",
        "Responsive development",
        "Enhanced SEO setup",
        "Performance optimization",
        "Analytics and reporting",
        "Domain and hosting support",
        "Priority communication",
        "60 days support",
        "Custom feature consultation",
      ],
    },
  ],

  portfolios: [
    {
      id: "portfolio-starter",
      name: "Starter Portfolio",
      description: "A clean starting point for students and professionals.",
      prefix: "Starting from",
      currency: "PKR",
      price: "6,000",
      billing: "One-time project",
      cta: "Get Started",
      featured: false,
      features: [
        "One-page portfolio",
        "Responsive layout",
        "About, skills, projects and contact",
        "Basic deployment",
        "One revision",
        "7 days support",
      ],
    },
    {
      id: "portfolio-professional",
      name: "Professional Portfolio",
      description: "A stronger presentation for growing careers.",
      prefix: "Starting from",
      currency: "PKR",
      price: "10,000",
      billing: "One-time project",
      cta: "Get Started",
      featured: true,
      badge: "Recommended",
      features: [
        "Multi-section custom portfolio",
        "Modern responsive design",
        "Project showcase",
        "Resume integration",
        "Contact form",
        "Social links",
        "Deployment",
        "Two revisions",
        "15 days support",
      ],
    },
    {
      id: "portfolio-premium",
      name: "Premium Portfolio",
      description: "A fully customized professional presence.",
      prefix: "Starting from",
      currency: "PKR",
      price: "15,000",
      billing: "One-time project",
      cta: "Request a Quote",
      featured: false,
      features: [
        "Fully customized portfolio",
        "Advanced animations",
        "Multiple project pages",
        "Resume and certificate sections",
        "SEO setup",
        "Analytics setup",
        "Deployment",
        "Three revisions",
        "30 days support",
      ],
    },
  ],

  branding: [
    {
      id: "branding-starter",
      name: "Starter Branding",
      description: "For individuals and new small businesses.",
      prefix: "Starting from",
      currency: "PKR",
      price: "2,500",
      billing: "One-time project",
      cta: "Get Started",
      featured: false,
      features: [
        "Basic logo concept",
        "One final logo",
        "PNG and JPG formats",
        "One revision",
      ],
    },
    {
      id: "branding-professional",
      name: "Professional Branding",
      description: "For businesses needing a stronger visual identity.",
      prefix: "Starting from",
      currency: "PKR",
      price: "7,500",
      billing: "One-time project",
      cta: "Get Started",
      featured: true,
      badge: "Recommended",
      features: [
        "Multiple logo concepts",
        "Primary and secondary logo",
        "Color palette",
        "Typography selection",
        "Social profile image",
        "Two revisions",
      ],
    },
    {
      id: "branding-complete",
      name: "Complete Brand Kit",
      description: "A complete visual identity system.",
      prefix: "Starting from",
      currency: "PKR",
      price: "15,000",
      billing: "One-time project",
      cta: "Request a Quote",
      featured: false,
      features: [
        "Full logo system",
        "Color palette",
        "Typography",
        "Social media kit",
        "Business card design",
        "Cover images",
        "Mini brand guide",
        "Three revisions",
      ],
    },
  ],

  qa: [
    {
      id: "qa-basic",
      name: "Basic QA Review",
      description: "For small websites and focused feature reviews.",
      prefix: "Starting from",
      currency: "PKR",
      price: "3,000",
      billing: "One-time review",
      cta: "Get Started",
      featured: false,
      features: [
        "Functional review",
        "Basic bug report",
        "Desktop browser testing",
        "Summary report",
      ],
    },
    {
      id: "qa-standard",
      name: "Standard QA Testing",
      description: "For websites requiring structured manual testing.",
      prefix: "Starting from",
      currency: "PKR",
      price: "7,500",
      billing: "One-time testing cycle",
      cta: "Get Started",
      featured: true,
      badge: "Recommended",
      features: [
        "Functional testing",
        "Responsive testing",
        "Test cases",
        "Bug reports",
        "Browser compatibility review",
        "One retesting cycle",
      ],
    },
    {
      id: "qa-complete",
      name: "Complete QA Audit",
      description: "For larger systems and custom testing requirements.",
      prefix: "",
      currency: "",
      price: "Custom Quote",
      billing: "Based on project scope",
      cta: "Request a Quote",
      featured: false,
      features: [
        "Complete test planning",
        "Functional testing",
        "Responsive testing",
        "Cross-browser testing",
        "API testing where applicable",
        "Detailed bug reporting",
        "Test summary report",
        "Retesting and regression support",
      ],
    },
  ],
};

export const heroBenefits = [
  {
    title: "No Hidden Charges",
    description: "Clear quotation before work begins",
    icon: ShieldCheck,
  },
  {
    title: "Flexible Packages",
    description: "Packages can be adjusted to your needs",
    icon: RefreshCw,
  },
  {
    title: "Professional Support",
    description: "We stay available throughout the project",
    icon: Headphones,
  },
];

export const includedFeatures = [
  { label: "Mobile Responsive", icon: MonitorSmartphone },
  { label: "Modern and Clean Design", icon: Sparkles },
  { label: "Secure and Reliable Work", icon: ShieldCheck },
  { label: "Cross-Browser Compatibility", icon: Globe2 },
  { label: "Clear Communication", icon: Headphones },
  { label: "After-Delivery Support", icon: CheckCircle2 },
];

export const addOns = [
  {
    title: "Domain Registration",
    price: "Provider charges + setup fee",
    description: "Domain selection, registration guidance, and configuration.",
    icon: Globe2,
  },
  {
    title: "Web Hosting",
    price: "Depends on provider and plan",
    description: "Hosting setup and deployment assistance.",
    icon: Cloud,
  },
  {
    title: "Business Email Setup",
    price: "Available on request",
    description: "Professional email setup linked to your domain.",
    icon: Mail,
  },
  {
    title: "Website Maintenance",
    price: "Monthly plans available",
    description: "Updates, monitoring, backups, and content support.",
    icon: RefreshCw,
  },
  {
    title: "Additional Pages",
    price: "Quoted by complexity",
    description: "Extra pages based on content and functionality.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Priority Delivery",
    price: "Subject to availability",
    description: "Accelerated delivery based on project scope.",
    icon: Clock3,
  },
];

export const comparisonRows = [
  {
    feature: "Responsive Design",
    starter: "Included",
    professional: "Included",
    premium: "Included",
  },
  {
    feature: "Custom UI",
    starter: "Basic",
    professional: "Custom",
    premium: "Advanced",
  },
  {
    feature: "Basic SEO",
    starter: "Included",
    professional: "Included",
    premium: "Enhanced",
  },
  {
    feature: "Analytics Setup",
    starter: "—",
    professional: "Basic",
    premium: "Advanced",
  },
  {
    feature: "WhatsApp Integration",
    starter: "Optional",
    professional: "Included",
    premium: "Included",
  },
  {
    feature: "Domain/Hosting Support",
    starter: "Basic",
    professional: "Included",
    premium: "Priority",
  },
  {
    feature: "Support Period",
    starter: "15 days",
    professional: "30 days",
    premium: "60 days",
  },
  {
    feature: "Revisions",
    starter: "Defined in quote",
    professional: "Defined in quote",
    premium: "Custom",
  },
  {
    feature: "Priority Support",
    starter: "—",
    professional: "Standard",
    premium: "Included",
  },
];

export const faqs = [
  {
    question: "Can I customize a package?",
    answer:
      "Yes. Packages are starting points and can be adjusted according to your goals, scope, timeline, and required features.",
  },
  {
    question: "Do you provide domain and hosting?",
    answer:
      "Yes. We can help with domain registration, hosting selection, SSL setup, business email, and deployment. Third-party provider charges are billed separately.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "A simple website may take around 5–10 working days, while larger or custom projects may require more time. A clear timeline is shared after requirement review.",
  },
  {
    question: "Do you require advance payment?",
    answer:
      "Yes. Projects normally begin after requirements are finalized and the agreed advance payment is received.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes. Responsive design is included in all website packages.",
  },
  {
    question: "Do you provide support after delivery?",
    answer:
      "Yes. Every package includes a defined support period. Ongoing maintenance plans can also be arranged.",
  },
  {
    question: "Can I request custom features?",
    answer:
      "Yes. Custom functionality can be added after reviewing technical requirements, complexity, and third-party dependencies.",
  },
  {
    question: "Are revisions included?",
    answer:
      "Yes. Each package includes a defined number of revisions. Additional revisions may be quoted separately.",
  },
];

export const quoteServiceOptions = [
  "Website Development",
  "Portfolio Development",
  "Graphic Design & Branding",
  "QA & Testing",
  "Domain & Hosting",
  "Resume & LinkedIn",
  "Presentation Design",
  "Other",
];

export const quoteBudgetOptions = [
  "Below PKR 10,000",
  "PKR 10,000–25,000",
  "PKR 25,000–50,000",
  "PKR 50,000–100,000",
  "Above PKR 100,000",
  "Not sure yet",
];

export const pricingIllustrationPlans = [
  { label: "Starter", icon: Rocket },
  { label: "Professional", icon: BarChart3 },
  { label: "Premium", icon: Palette },
];