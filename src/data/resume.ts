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
    "I build developer tools for the AI era. I wrote zac, a coding agent from scratch in Zig, and cdesign, a marketplace that turns real websites into specs AI agents can build from.",
  summary:
    "I'm a software engineer who ships fast, mostly building developer tools around large language models. I wrote zac, a coding agent built from scratch in Zig with zero dependencies, and cdesign, which scrapes real websites into installable design specs so AI agents build on-brand UI (shipped as an npm CLI). Before that I founded 9thgen.ai, a voice-agent platform now taking calls for paying clients. At Y Lift I inherited an undocumented production app, taught myself .NET and Blazor from scratch, and shipped a full platform migration in one month for 10,000+ monthly users at 99.8% uptime. Hand me an unfamiliar codebase and I'll get something working. (I also hold multiple years of US work authorization, so sponsorship isn't a near-term concern.)",
  avatarUrl: "/avatar.png", // drop a square image at public/avatar.png

  navbar: [
    { href: "#hero", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
  ],

  contact: {
    email: "ykholiwal2711@gmail.com",
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
      Email: {
        name: "Email",
        url: "mailto:ykholiwal2711@gmail.com",
        icon: Mail,
        navbar: true,
      },
    },
  },

  skillsIntro:
    "I work across the whole stack of AI product development. On the model side I've built real-time voice pipelines, agentic tool-loops, and RAG-style workflows against the Anthropic, OpenAI, and OpenRouter APIs, and I wrote a coding agent from scratch in Zig. On the frontend I ship React, Next.js, and TypeScript interfaces. On the backend I've worked in FastAPI, .NET, and Postgres, and provisioned real cloud infrastructure with CloudFormation and the AWS SDK. The part I like most is the messy middle: taking a raw LLM capability and making it reliable enough for people to actually use.",

  skills: [
    {
      category: "Frontend",
      items: [
        "React 19",
        "Next.js 15",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Framer Motion",
        "React Flow",
        "Monaco Editor",
        "Blazor",
        "Responsive & accessible UI",
      ],
    },
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
      category: "Backend / Infra",
      items: [
        "FastAPI",
        "Flask",
        ".NET 9",
        "Zig",
        "REST APIs",
        "PostgreSQL",
        "Drizzle ORM",
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
        "Inherited an undocumented production codebase and self-taught a new stack (.NET 8, Blazor, C#, Flutter), shipping to production within weeks. Led a full migration from Flutter to .NET 8 + Blazor in one month for an app serving 10,000+ monthly active users, and held 99.8% uptime throughout. Built storefront features (cart, checkout, promotions) and feedback and issue APIs that handle 10+ daily tickets, cutting resolution time 40%.",
    },
    {
      company: "9thgen.ai",
      href: "https://9thgen.ai",
      location: "New York",
      title: "Technical Founder",
      logoUrl: "",
      start: "Jan 2025",
      end: "Mar 2025",
      description:
        "Founded and led an AI voice-agent startup that cut customer service costs by up to 80%. Launched on Vercel, processed 1,500+ calls in the first month, acquired 5 paying clients at an 11.6% conversion rate, and boosted customer engagement 150% through natural-language voice interactions. Owned end-to-end product development and cross-functional teams, cutting development time 40%.",
    },
    {
      company: "JerseySTEM",
      href: "#",
      location: "New Jersey",
      title: "Software Development Engineer Intern",
      logoUrl: "",
      start: "Jun 2024",
      end: "Sep 2024",
      description:
        "Built 8 RPA automation bots with Automation Anywhere, cutting manual effort 70%. Led development of an RPA bot to extract resumes from the iCIMS platform, improving efficiency 15%, and collaborated on automated testing that raised system reliability 20%.",
    },
  ],

  education: [
    {
      school: "University at Buffalo",
      href: "https://www.buffalo.edu",
      degree: "MS in Computer Science",
      logoUrl: "",
      start: "2023",
      end: "2024",
    },
    {
      school: "Vellore Institute of Technology",
      href: "https://vit.ac.in",
      degree: "B.Tech in Computer Science & Engineering",
      logoUrl: "",
      start: "2019",
      end: "2023",
    },
  ],

  projects: [
    {
      title: "cdesign",
      tagline: "A marketplace for design languages",
      role: "",
      href: "https://cdesign-orpin.vercel.app",
      dates: "",
      active: true,
      description:
        "Scrapes any website's CSS into an installable design spec so AI coding agents build on-brand UI. Shipped as an npm CLI with 20+ packages.",
      technologies: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind",
        "Claude API",
        "Cheerio",
        "Vercel KV",
      ],
      links: [
        { type: "Website", href: "https://cdesign-orpin.vercel.app" },
        { type: "GitHub", href: "https://github.com/YuktiKholiwal/cdesign" },
        { type: "npm", href: "https://www.npmjs.com/package/cdesign-cli" },
      ],
      image: "",
    },
    {
      title: "zac",
      tagline: "A coding agent that lives in your terminal",
      role: "",
      href: "https://github.com/YuktiKholiwal/zac",
      dates: "",
      active: true,
      description:
        "A coding agent I wrote from scratch in Zig, about 3,800 lines, one dependency-free binary that drives Claude, GPT, and Gemini from the terminal.",
      technologies: [
        "Zig",
        "SSE streaming",
        "Vercel AI Gateway",
        "LLM tool-use",
        "Git",
      ],
      links: [{ type: "GitHub", href: "https://github.com/YuktiKholiwal/zac" }],
      image: "",
    },
    {
      title: "9thgen.ai",
      tagline: "Real-time AI voice agents",
      role: "Technical Founder",
      href: "https://9thgen.ai",
      dates: "",
      active: true,
      description:
        "AI voice agents that take customer calls end to end and cut support costs up to 80%. Handled 1,500+ calls across 5 paying clients in the first month.",
      technologies: ["Twilio", "GPT-4 Realtime API", "WebSockets", "Vercel"],
      links: [{ type: "Website", href: "https://9thgen.ai" }],
      image: "",
    },
    {
      title: "Plot",
      tagline: "AWS deployment for humans",
      role: "",
      href: "#",
      dates: "",
      active: true,
      description:
        "One-click deploys that run in your own AWS account, with Plot holding zero credentials. Provisions everything through CloudFormation, so it stays fully trackable and deletable.",
      technologies: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Clerk",
        "Neon/Drizzle",
        "AWS SDK v3",
        "CloudFormation",
        "STS / IAM",
      ],
      links: [
        { type: "GitHub", href: "https://github.com/YuktiKholiwal/AWS-Wrapper" },
        { type: "Website", href: "https://aws-wrapper.vercel.app" },
      ],
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
        "An environment where agents build and ship code on their own. I built the developer-facing React UI and worked on the pipelines under it, now at 200+ early users.",
      technologies: ["React", "TypeScript", "Agentic pipelines", "LLM APIs"],
      links: [{ type: "Website", href: "https://orbit.build" }],
      image: "",
    },
    {
      title: "ctx",
      tagline: "Get back up to speed on any codebase in seconds",
      role: "",
      href: "https://github.com/YuktiKholiwal/ctx-cli",
      dates: "",
      active: true,
      description:
        "A CLI that scans a git repo and tells you where things stand: recent work, uncommitted changes, stray TODOs, and an AI read on what to do next.",
      technologies: ["TypeScript", "Node.js", "Git", "LLM API"],
      links: [{ type: "GitHub", href: "https://github.com/YuktiKholiwal/ctx-cli" }],
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
        "A privacy-first Chrome extension for instant AI on any webpage, wired to OpenRouter so you can plug in any LLM.",
      technologies: ["Chrome Extensions", "OpenRouter API", "JavaScript"],
      links: [{ type: "GitHub", href: "https://github.com/YuktiKholiwal/ai-sidebar" }],
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
        "Turns a prompt into an editable mind map you can expand and rearrange live, with Anthropic wired in to refine it through chat.",
      technologies: ["Next.js", "React Flow", "Anthropic API"],
      links: [],
      image: "",
    },
  ],
} as const;
