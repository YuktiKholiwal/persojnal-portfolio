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
    "I build the AI you talk to: real-time voice agents, a coding agent written from scratch in Zig, and the front-ends that make all of it usable.",
  summary:
    "I'm a software engineer who ships fast. What I'm good at is turning large language models into products people actually use. I founded 9thgen.ai, a real-time voice-agent platform that now takes customer calls for paying clients, and I wrote zac, a coding agent built from scratch in Zig with zero dependencies. When I joined Y Lift I inherited an undocumented production app, taught myself .NET and Blazor from scratch, and shipped a full platform migration in one month for 10,000+ monthly users at 99.8% uptime. Hand me an unfamiliar codebase and I'll get something working. (I also hold multiple years of US work authorization, so sponsorship isn't a near-term concern.)",
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
        "A full-stack marketplace that turns real websites into installable design specs so AI coding agents build on-brand UI. A URL-to-spec engine scrapes a site's HTML/CSS with Cheerio, extracts design tokens (color, type, spacing, shadows, components), and streams them through the Claude API to generate a faithful design.md plus a live HTML preview. The output is grounded in real scraped data rather than guesses. Ships with a published npm CLI (npx cdesign-cli add <slug>) that drops a design package straight into a project's agent config for Claude Code, Cursor, and Windsurf. 20+ curated packages distilled from products like Apple, Stripe, Linear, Vercel, and Airbnb.",
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
        "A minimal AI coding agent written from scratch in Zig (~3,800 lines). Same family as Claude Code or Cursor, but deliberately stripped down to the smallest agent you can actually live inside. It's a multi-turn streaming tool-loop that talks directly to the Vercel AI Gateway over one HTTPS/SSE endpoint (no vendor SDK), so a single 1-to-2 MB static binary with zero runtime dependencies can drive Claude, GPT, and Gemini. It ships 8 tools and 11 prompt modes, plus reliability details you rarely see: stale-context auto-refresh via file mtime tracking, diff-aware re-reads that only return what changed, cost projection before you hit enter, conversation and file snapshots with restore, and per-turn git commits with soft-reset undo. Runs inline in the terminal, with 50 unit tests.",
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
        "Built and shipped a voice-agent platform that handles customer service calls end-to-end, cutting support costs by up to 80%. The hard part was latency: a natural phone conversation falls apart above ~1 second of delay, so the system runs a bidirectional WebSocket audio pipeline (Twilio + GPT-4 Realtime) tuned to keep round-trip response under a second. Launched on Vercel, processed 1,500+ calls in the first month across 5 paying clients at an 11.6% conversion rate.",
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
        "Vercel-style one-click deploys, except the infrastructure runs in your own AWS account, which you fully own and pay for directly, with Plot holding zero credentials. You connect your account by installing a small, narrowly scoped cross-account IAM role via CloudFormation. At deploy time Plot does an STS AssumeRole for temporary in-memory creds, then throws them away. All provisioning goes through CloudFormation templates rather than raw SDK calls, so everything is tracked and cleanly deletable. It grew from a static-site v0 into a mini-Amplify: static sites (S3 and CloudFront with OAC), Lambda functions authored in an in-browser Monaco editor behind API Gateway, DynamoDB tables, custom domains with ACM, and GitHub push-to-deploy. Postgres stores only metadata, never credentials or content.",
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
        "An environment where agents autonomously build, deploy, and ship code. I built and tested core developer-facing UI in React + TypeScript and worked hands-on with the agentic coding pipelines and LLM integration underneath it. Reached 200+ early users.",
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
        "A developer CLI that scans a git repository and produces a complete snapshot of where things stand: recent commits, uncommitted changes, scattered TODOs/FIXMEs, and an AI-powered analysis that flags risks, detects work-in-progress, and suggests what to do next. It also supports focused diff reviews, a one-line summary for shell prompts, JSON output for scripting, and an offline mode that needs no API key.",
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
        "A lightweight, privacy-first Chrome extension for instant AI interactions on any webpage via capture mode. Integrated the OpenRouter API so developers can plug in any LLM with minimal setup, and designed it for extensibility, so the repo picked up early forks and community feedback.",
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
        "A SaaS tool that generates editable mind maps from a prompt. You can edit, delete, and expand nodes in real time, and the Anthropic API is wired in so you can refine a map through chat.",
      technologies: ["Next.js", "React Flow", "Anthropic API"],
      links: [],
      image: "",
    },
    {
      title: "Offline Voice AI Assistant",
      tagline: "Speech-to-speech, fully local",
      role: "",
      href: "https://github.com/YuktiKholiwal/Offline-voice-ai-assistant",
      dates: "",
      active: true,
      description:
        "A speech-to-speech AI assistant built entirely on open-source models, so it runs locally with no cloud dependency. Speech recognition, a language model, and text-to-speech are wired into a single voice loop. It's the privacy-first counterpart to the cloud voice work behind 9thgen.ai.",
      technologies: ["Python", "Open-source LLMs", "Speech-to-text", "TTS"],
      links: [
        { type: "GitHub", href: "https://github.com/YuktiKholiwal/Offline-voice-ai-assistant" },
      ],
      image: "",
    },
    {
      title: "Miami '26 Trip Organizer",
      tagline: "One app to wrangle 15 friends and a chaotic group chat",
      role: "",
      href: "https://miami-trip-organizer.vercel.app",
      dates: "",
      active: true,
      description:
        "A live-syncing PWA built to plan a 15-person trip to Miami: flights, stay, crew, and itinerary in one shared home-screen app that updates for everyone the moment someone changes something. A small, fun build that solved a coordination problem the group chat couldn't.",
      technologies: ["JavaScript", "PWA", "Real-time sync", "Vercel"],
      links: [
        { type: "Website", href: "https://miami-trip-organizer.vercel.app" },
        { type: "GitHub", href: "https://github.com/YuktiKholiwal/miami-trip-organizer" },
      ],
      image: "",
    },
  ],
} as const;
