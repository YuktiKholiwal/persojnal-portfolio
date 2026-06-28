import {
  HomeIcon,
  CodeIcon,
  Github,
  Linkedin,
  Mail,
  FileText,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// This is the single source of truth for everything on the site.
// ─────────────────────────────────────────────────────────────────────────────

export const DATA = {
  name: "Yukti Kholiwal",
  initials: "YK",
  githubUsername: "yuktikholiwal",
  url: "https://yuktikholiwal.com",
  location: "New York",
  description:
    "Software engineer building AI-powered applications — voice agents, agentic pipelines, and the interfaces that make them usable.",
  summary:
    "I'm a software engineer focused on turning LLMs into products people actually use. My work spans the full surface — real-time voice infrastructure, agentic development tools, and the React/TypeScript frontends that sit on top of them. I move fast in unfamiliar codebases: at Y Lift I inherited an undocumented production app, taught myself .NET and Blazor, and shipped a full platform migration in a month. I have multiple years of US work authorization runway, so I can start without sponsorship being a near-term concern.",
  avatarUrl: "/avatar.png", // drop a square image at public/avatar.png

  navbar: [
    { href: "#hero", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
  ],

  contact: {
    email: "no9iolabs@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yuktikholiwal",
        icon: Github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yuktikholiwal",
        icon: Linkedin,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/resume.pdf",
        icon: FileText,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:no9iolabs@gmail.com",
        icon: Mail,
        navbar: true,
      },
    },
  },

  skills: [
    {
      category: "AI / LLM",
      items: [
        "Anthropic API",
        "OpenAI API",
        "OpenRouter API",
        "Agentic pipelines",
        "RAG-style workflows",
        "Real-time voice (Twilio + GPT-4 Realtime)",
        "Prompt engineering",
        "Claude Code",
        "Cursor",
        "Codex",
      ],
    },
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "React Flow",
        "Blazor",
        "Responsive & accessible UI",
      ],
    },
    {
      category: "Backend / Infra",
      items: [
        "FastAPI",
        "Flask",
        ".NET 9",
        "REST APIs",
        "PostgreSQL",
        "MongoDB",
        "CloudFormation / AWS",
        "CI/CD",
        "Vercel",
        "Git / GitHub",
      ],
    },
  ],

  work: [
    {
      company: "Y Lift",
      href: "#",
      location: "New York",
      title: "Full Stack Developer (Flutter & .NET)",
      logoUrl: "",
      start: "Mar 2025",
      end: "Present",
      description:
        "Inherited an undocumented production codebase and self-taught a new stack (.NET 8, Blazor, C#, Flutter), shipping to production within weeks. Led a full migration from Flutter to .NET 8 + Blazor in one month for an app serving 10,000+ monthly active users, holding 99.8% uptime throughout.",
    },
  ],

  education: [
    {
      school: "University at Buffalo",
      href: "https://www.buffalo.edu",
      degree: "MS in Computer Science",
      logoUrl: "",
      start: "2022",
      end: "2024",
    },
  ],

  projects: [
    {
      title: "9thgen.ai",
      tagline: "Real-time AI voice agents",
      role: "Technical Founder",
      href: "https://9thgen.ai",
      dates: "",
      active: true,
      description:
        "Built and shipped a voice-agent platform that handles customer service calls end-to-end, cutting support costs by up to 80%. The hard part was latency: a natural phone conversation falls apart above ~1 second of delay, so the system runs a bidirectional WebSocket audio pipeline (Twilio + GPT-4 Realtime) tuned to keep round-trip response under a second. Launched on Vercel, processed 1,500+ calls in the first month across 3 paying clients at an 11.6% conversion rate.",
      technologies: ["Twilio", "GPT-4 Realtime API", "WebSockets", "Vercel"],
      links: [{ type: "Website", href: "https://9thgen.ai" }],
      image: "",
    },
    {
      title: "Plot",
      tagline: '"AWS for humans"',
      role: "",
      href: "#",
      dates: "",
      active: true,
      description:
        "A deployment platform for developers who find the AWS Console intimidating. Users connect their own AWS account through a cross-account IAM role and deploy static sites, serverless functions, and databases through a clean UI — every resource lives in their account, and no credentials are ever stored. Everything is provisioned through CloudFormation. Shipped v0 (static-site deploy), then grew custom domains, GitHub auto-deploy, Lambda functions, DynamoDB, and a logs viewer.",
      technologies: ["Next.js 15", "Clerk", "Neon/Drizzle", "CloudFormation", "AWS"],
      links: [],
      image: "",
    },
    {
      title: "Orbit.build",
      tagline: "AI-native development environment",
      role: "Frontend contributor (~25% of frontend)",
      href: "https://orbit.build",
      dates: "",
      active: true,
      description:
        "An environment where agents autonomously build, deploy, and ship code. I built and tested core developer-facing UI in React + TypeScript and worked hands-on with the agentic coding pipelines and LLM integration underneath it. Reached 200+ early users.",
      technologies: ["React", "TypeScript", "Agentic pipelines", "LLM APIs"],
      links: [{ type: "Website", href: "https://orbit.build" }],
      image: "",
    },
    {
      title: "Chrome AI Sidebar",
      tagline: "Open-source browser extension",
      role: "",
      href: "#",
      dates: "",
      active: true,
      description:
        "A lightweight, privacy-first Chrome extension for instant AI interactions on any webpage via capture mode. Integrated the OpenRouter API so developers can plug in any LLM with minimal setup, and designed it for extensibility — the repo picked up early forks and community feedback.",
      technologies: ["Chrome Extensions", "OpenRouter API", "JavaScript"],
      links: [],
      image: "",
    },
    {
      title: "MindMap SaaS",
      tagline: "Prompt-to-mind-map generator",
      role: "",
      href: "#",
      dates: "",
      active: true,
      description:
        "A SaaS tool that generates editable mind maps from a prompt. Nodes can be edited, deleted, and expanded in real time, with the Anthropic API wired in for chat-driven refinement — blending AI generation with a collaborative editing UX.",
      technologies: ["Next.js", "React Flow", "Anthropic API"],
      links: [],
      image: "",
    },
  ],
} as const;
