import GenomicFormatter from "./genomicformatter.svg";
import Helpi from "./helpi.svg";
import LynkToPay from "./lynktopay.svg";
import PickAppArt from "./pickapp.svg";
import PoultryPro from "./poultrypro.svg";
import QuoteFlow from "./quoteflow.svg";
import UniConvertArt from "./uniconvert.svg";

export const projects = [
  {
    title: "QuoteFlow GH",
    category: "B2B SaaS",
    highlight: "Wholesale quotes",
    description:
      "A mobile-first quote management SaaS for Ghana wholesalers with supplier signup, branded quote requests, quote building, Paystack subscriptions, payment tracking, order status, and analytics.",
    image: QuoteFlow,
    githubLink: "https://github.com/mannie-stien/Quote-Flow-GH.git",
    technologies: ["React", "TypeScript", "Supabase", "Paystack", "TailwindCSS", "Vercel"],
    liveLink:"https://quote-flow-gh.vercel.app/"

  },
  {
    title: "Helpi Extension",
    category: "Browser Extension",
    highlight: "AI web assistant",
    description:
      "A Chrome extension AI assistant that explains, summarizes, translates, solves, and analyzes selected web content with context-aware actions, conversation memory, side panel chat, and multi-provider AI support.",
    image: Helpi,
    githubLink: "https://github.com/mannie-stien/helpi-extension.git",
    technologies: ["JavaScript", "Chrome Extension", "Manifest V3", "OpenAI", "Claude", "Gemini"],
  },
  {
    title: "LynkToPay Mobile",
    category: "Mobile Fintech",
    highlight: "Order-first payments",
    description:
      "An Expo mobile app that helps merchants create structured orders, send customers through Paystack checkout, and keep verified records for payments, receipts, refunds, disputes, and fraud follow-up.",
    image: LynkToPay,
    githubLink: "https://github.com/mannie-stien/LynktoPay-mobile.git",
    technologies: ["React Native", "Expo", "TypeScript", "Supabase", "Paystack", "NativeWind"],
  },
  {
    title: "PoultryPro",
    category: "Farm Ops SaaS",
    highlight: "Poultry operations",
    description:
      "A modern, mobile-first SaaS frontend for commercial poultry farm operations, built to help farms manage day-to-day production workflows.",
    image: PoultryPro,
    githubLink: "https://github.com/mannie-stien/PoultryProGH.git",
    technologies: ["React", "SaaS UI", "Responsive Design", "Vercel"],
    liveLink:"https://poultry-pro-gh.vercel.app/"

  },
  {
    title: "PickApp",
    category: "Community Platform",
    highlight: "Pickup games",
    description:
      "A sports and activity coordination platform for organizing, discovering, and joining local pickup games and recreational events.",
    image: PickAppArt,
    githubLink: "https://github.com/mannie-stien/pickapp.git",
    technologies: ["React", "Postgresql", "Supabase", "Vercel"],
    liveLink:"https://pickapp-mkpg.vercel.app/"

  },
  {
    title: "UniConvert",
    category: "Utility App",
    highlight: "Everyday conversions",
    description:
      "A responsive conversion utility for time zones, currencies, and units, built for quick answers across devices.",
    image: UniConvertArt,
    githubLink: "https://github.com/mannie-stien/uni-convert.git",
    technologies: ["React", "REST APIs", "Vercel"],
    liveLink:"https://uni-convert.vercel.app/"

  },
  {
      title: 'Genomic Formatter',
      category: 'Python Package',
      highlight: 'GFF to Excel',
      description: 'A tool to convert Genomic Feature Format (GFF) files into Excel format for easier analysis and accessibility.',
      image: GenomicFormatter,
      githubLink: 'https://github.com/mannie-stien/gff-xlsx.git',
    technologies: ["Python"],
    liveLink:"https://pypi.org/project/gff-to-xlsx/"


    },
];
export const experiences = [
  {
    role: "Software Engineer, Backend",
    company: "BambooHR",
    duration: "Sept 2025 - Present",
    responsibilities: [
      "Build and maintain PHP-based backend services and third-party integrations that power BambooHR's HR platform for enterprise customers.",
      "Design and optimize relational database schemas, queries, and indexes across MySQL and PostgreSQL for reliable high-throughput data operations.",
      "Work within GitHub Actions CI/CD pipelines to run builds, monitor pipeline health, and coordinate staging and production releases.",
      "Build custom AI agents and automation skills with Claude, OpenAI Codex, Cursor, and Windsurf to remove repetitive development work.",
      "Partner with product, QA, and platform engineering to turn business requirements into maintainable backend solutions with clear API contracts.",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "25:2 Solutions",
    duration: "Sept 2021 - July 2025",
    responsibilities: [
      "Architected and delivered full-stack applications using React, Node.js, Django, and PostgreSQL for web and mobile clients.",
      "Built cross-platform mobile apps with React Native and Expo, cutting development time by 50% while shipping iOS and Android experiences.",
      "Improved REST API performance by reducing data latency by 20% and load times by 25% through query tuning, caching, and data modeling.",
      "Integrated OpenAI API features that increased user engagement by 35% and created a reusable AI integration framework for later builds.",
      "Implemented Docker containerization for consistent deployment pipelines across development and production environments.",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "SafeStreets USA",
    duration: "July 2019 - Dec 2020",
    responsibilities: [
      "Built responsive Angular and TypeScript applications, delivering UI and performance improvements that increased application speed by 22%.",
      "Created a reusable Angular component library that cut new feature development time by 15% and improved UI consistency.",
      "Integrated Angular frontends with Java-based REST APIs for reliable data flow and a smoother end-user experience.",
      "Reached a 99.8% defect-free deployment rate through testing, debugging, and QA on customer-facing applications.",
      "Participated in Agile ceremonies with a cross-functional team to keep sprint delivery predictable.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Alder Holdings, LLC",
    duration: "Jan 2019 - Apr 2019",
    responsibilities: [
      "Used Selenium automated testing to identify and resolve bugs, contributing to a 15% reduction in system downtime.",
      "Partnered with senior engineers to optimize application performance and adopt stronger development lifecycle practices.",
    ],
  },
];
