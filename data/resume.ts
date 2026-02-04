export type Resume = {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  about: string;
  workingStyle: string;

  experience: Array<{
    company: string;
    role: string;
    location?: string;
    start: string;
    end: string;
    highlights: string[];
  }>;

  projects: Array<{
    name: string;
    description: string;
    stack: string[];
    highlights: string[];
    link?: string;
  }>;

  skills: string[];
  education: Array<{
    id: string;
    school: string;
    degree: string;
    years: string;
  }>;
};

export const resume: Resume = {
  name: "Georges Metri",
  title: "Full-Stack Software Engineer",
  location: "Lebanon",
  email: "georgesmetri71@gmail.com",
  phone: "+961 76 163 293",
  linkedin: "linkedin.com/in/georges-metri-75b07b33a/",

  about:
    "Georges Metri is a Full-Stack Software Engineer with 2+ years of experience building scalable web applications. Strong in React/Next.js, Node.js, and TypeScript, with a track record of shipping user-facing features, improving performance, and collaborating across teams.",

  workingStyle:
    "Workflow: clarify the problem and success metrics, build a quick prototype to validate UX/behavior, iterate with feedback, then productionize with edge-case handling, tests, performance checks, and monitoring. Go-to stack: Next.js/React/TypeScript on the frontend, Node.js/Express on the backend, MySQL/MongoDB, Docker, and CI/CD. Good human-AI interaction: helpful defaults, transparent behavior (what info it used), user control, fast feedback loops, and graceful failure (saying 'I don’t know' when info isn’t available).",

  experience: [
    {
      company: "Flyesim",
      role: "Software Engineer",
      location: "Lebanon",
      start: "May 2024",
      end: "Present",
      highlights: [
        "Built features for a telecom platform under NDA, serving 1,000+ active users.",
        "Developed 30+ REST APIs and integrated with providers (Stripe, Airalo, Getroamer, ESimsmarter, Simtex).",
        "Improved backend response time by up to 35% through optimization and caching.",
        "Designed MongoDB schemas and managed data/reporting workflows.",
        "Contributed to test coverage (90%+) and supported reliable releases.",
      ],
    },
    {
      company: "PROW",
      role: "Software Engineer",
      location: "Lebanon",
      start: "Nov 2023",
      end: "May 2024",
      highlights: [
        "Built and maintained 40+ frontend modules in a multi-tenant SaaS platform using React.js and Node.js.",
        "Implemented performance improvements (e.g., ~15% frontend optimization).",
        "Developed API integrations and handled edge cases for a smooth UX.",
      ],
    },
    {
      company: "PROW",
      role: "Software Engineer Intern",
      location: "Lebanon",
      start: "Sep 2023",
      end: "Oct 2023",
      highlights: [
        "Contributed to a real-world project with React.js and Node.js.",
        "Supported feature delivery and collaboration with the engineering team.",
      ],
    },
  ],

  projects: [
    {
      name: "Admin Dashboard & Management Panels",
      description:
        "A responsive dashboard for managing content and records with role-based UI and reusable components.",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      highlights: [
        "Built reusable UI components (tables, dialogs, forms) for faster feature delivery.",
        "Implemented clean state handling (loading, errors, empty states).",
        "Optimized UX for desktop and mobile responsiveness.",
      ],
    },
    {
      name: "REST API Integration Toolkit",
      description:
        "A lightweight set of patterns/utilities for integrating REST APIs in UI with consistent UX.",
      stack: ["React", "TypeScript"],
      highlights: [
        "Standardized client-side integration patterns across pages.",
        "Reduced duplicated logic using shared hooks/components.",
        "Improved maintainability and readability for future changes.",
      ],
    },
    {
      name: "Performance & Reliability Improvements",
      description:
        "A focused effort on performance, testing, and release stability across frontend and backend.",
      stack: ["Node.js", "MongoDB", "Jest (or similar)"],
      highlights: [
        "Improved response times via targeted optimizations and caching strategies.",
        "Supported higher test coverage and safer refactoring.",
        "Reduced recurring issues by strengthening edge-case handling.",
      ],
    },
  ],

  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "JavaScript",
    "Express.js",
    "REST API",
    "MongoDB",
    "MySQL",
    "Sequelize",
    "Docker",
    "CI/CD",
    "HTML",
    "CSS",
    "Bootstrap",
    "Git",
    "Linux",
  ],

  education: [
    {
      id: "liu-msc",
      school: "Lebanese International University",
      degree: "Master’s Degree in Computer Science",
      years: "2023 – 2025",
    },
    {
      id: "liu-bsc",
      school: "Lebanese International University",
      degree: "Bachelor’s Degree in Computer Science",
      years: "2020 – 2023",
    },
  ],
};
