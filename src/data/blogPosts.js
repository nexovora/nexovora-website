import {
  BriefcaseBusiness,
  CodeXml,
  Lightbulb,
  Palette,
  ShieldCheck,
} from "lucide-react";

export const blogCategories = [
  "All Posts",
  "Web Development",
  "Design",
  "QA & Testing",
  "Business",
  "Tips & Guides",
];

export const categoryIcons = {
  "Web Development": CodeXml,
  Design: Palette,
  "QA & Testing": ShieldCheck,
  Business: BriefcaseBusiness,
  "Tips & Guides": Lightbulb,
};

export const blogPosts = [
  {
    id: 1,
    slug: "high-converting-website-elements",
    title: "10 Essential Elements of a High-Converting Website",
    category: "Web Development",
    summary:
      "Learn the key elements every business website needs to attract visitors, build trust, and convert interest into action.",
    author: "Nexovora Team",
    date: null,
    status: "Coming Soon",
    readingTime: "6 min read",
    featured: true,
    accent: "from-blue-600 to-cyan-400",
    seoTitle:
      "10 Essential Elements of a High-Converting Website | Nexovora",
    metaDescription:
      "Learn the essential website elements that improve trust, usability, conversions, and business results.",
    content: [],
  },
  {
    id: 2,
    slug: "website-speed-seo-user-experience",
    title: "How Website Speed Impacts SEO and User Experience",
    category: "Web Development",
    summary:
      "Discover how loading speed affects rankings, usability, trust, and conversions—and what can improve it.",
    author: "Nexovora Team",
    date: null,
    status: "Coming Soon",
    readingTime: "5 min read",
    featured: true,
    accent: "from-indigo-600 to-blue-400",
    seoTitle: "Website Speed, SEO and User Experience | Nexovora",
    metaDescription:
      "Understand how website performance affects rankings, user experience, trust, and conversions.",
    content: [],
  },
  {
    id: 3,
    slug: "ui-ux-best-practices",
    title: "UI/UX Best Practices for a Better User Experience",
    category: "Design",
    summary:
      "Explore practical interface and usability principles that make digital products easier and more enjoyable to use.",
    author: "Nexovora Team",
    date: null,
    status: "Coming Soon",
    readingTime: "7 min read",
    featured: false,
    accent: "from-violet-600 to-blue-400",
    seoTitle: "UI/UX Best Practices for Better Experiences | Nexovora",
    metaDescription:
      "Explore practical UI and UX principles for creating clear, accessible, and enjoyable digital products.",
    content: [],
  },
  {
    id: 4,
    slug: "manual-testing-checklist",
    title: "Manual Testing Checklist: Key Areas You Should Review",
    category: "QA & Testing",
    summary:
      "A practical checklist for reviewing functionality, usability, responsiveness, and common defects before release.",
    author: "Nexovora Team",
    date: null,
    status: "Coming Soon",
    readingTime: "8 min read",
    featured: true,
    accent: "from-emerald-600 to-cyan-400",
    seoTitle: "Manual Testing Checklist for Websites | Nexovora",
    metaDescription:
      "Use this practical manual testing checklist to review functionality, usability, responsiveness, and common defects.",
    content: [],
  },
  {
    id: 5,
    slug: "choose-right-digital-partner",
    title: "How to Choose the Right Digital Partner for Your Business",
    category: "Business",
    summary:
      "Understand what to evaluate before hiring a freelancer, agency, or digital-service provider for your next project.",
    author: "Nexovora Team",
    date: null,
    status: "Coming Soon",
    readingTime: "6 min read",
    featured: true,
    accent: "from-slate-700 to-blue-500",
    seoTitle: "How to Choose the Right Digital Partner | Nexovora",
    metaDescription:
      "Learn what to evaluate before choosing a freelancer, agency, or digital partner for your business.",
    content: [],
  },
  {
    id: 6,
    slug: "wordpress-vs-custom-development",
    title: "WordPress vs Custom Development: Which Is Right for You?",
    category: "Web Development",
    summary:
      "Compare flexibility, cost, speed, scalability, and maintenance to choose the right approach for your goals.",
    author: "Nexovora Team",
    date: null,
    status: "Coming Soon",
    readingTime: "6 min read",
    featured: false,
    accent: "from-sky-600 to-indigo-500",
    seoTitle: "WordPress vs Custom Website Development | Nexovora",
    metaDescription:
      "Compare WordPress and custom website development across cost, flexibility, speed, scalability, and maintenance.",
    content: [],
  },
];

export function getCategoryCounts() {
  return blogCategories
    .filter((category) => category !== "All Posts")
    .map((category) => ({
      category,
      count: blogPosts.filter((post) => post.category === category).length,
    }));
}

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}