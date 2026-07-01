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
    "I build the AI you talk to. Real-time voice agents, a coding agent written from scratch in Zig, and the polished interfaces that make LLMs feel effortless.",
  summary:
    "I'm a software engineer who ships — fast. My thing is turning large language models into products people actually use. I founded 9thgen.ai, a real-time voice-agent platform now fielding customer calls for paying clients, and I wrote zac, a coding agent built from scratch in Zig with zero dependencies. When I joined Y Lift I inherited an undocumented production app, taught myself .NET and Blazor from zero, and shipped a full platform migration in a single month — for 10,000+ monthly users, at 99.8% uptime. Drop me into an unfamiliar codebase and something ships. (Bonus: I hold multiple years of US work authorization, so sponsorship isn't a near-term concern.)",
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
    "I work across the whole stack of AI product development. On the model side I've built real-time voice pipelines, agentic tool-loops, and RAG-style workflows against the Anthropic, OpenAI, and OpenRouter APIs — even writing a coding agent from scratch in Zig. On the frontend I ship polished React / Next.js / TypeScript interfaces, and on the backend I've worked in FastAPI, .NET, and Postgres and provisioned real cloud infrastructure through CloudFormation and the AWS SDK. I'm most comfortable in the messy middle — turning a raw LLM capability into something reliable that people can actually use.",

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
    {
      school: "Vellore Institute of Technology",
      href: "https://vit.ac.in",
      degree: "B.Tech in Computer Science & Engineering",
      logoUrl: "",
      start: "2018",
      end: "2022",
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
        "A full-stack marketplace that turns real websites into installable design specs so AI coding agents build on-brand UI. A URL-to-spec engine scrapes a site's HTML/CSS with Cheerio, extracts design tokens (color, type, spacing, shadows, components), and streams them through the Claude API to generate a faithful design.md plus a live HTML preview — grounded in real scraped data, not guesses. Ships with a published npm CLI (npx cdesign-cli add <slug>) that drops a design package straight into a project's agent config for Claude Code, Cursor, and Windsurf. 20+ curated packages distilled from products like Apple, Stripe, Linear, Vercel, and Airbnb.",
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
        "A minimal AI coding agent written from scratch in Zig (~3,800 lines) — the same family as Claude Code or Cursor, but deliberately stripped to the smallest agent you can actually live inside. It's a multi-turn streaming tool-loop that talks directly to the Vercel AI Gateway over one HTTPS/SSE endpoint (no vendor SDK), so a single ~1–2 MB static binary with zero runtime dependencies can drive Claude, GPT, and Gemini. Ships 8 tools and 11 prompt modes, and layers on reliability niceties you rarely see: stale-context auto-refresh via file mtime tracking, diff-aware re-reads that only return what changed, self-calibrating cost projection before you hit enter, conversation+file snapshots with restore, and per-turn git commits with soft-reset undo. Runs inline in the terminal, 50 unit tests.",
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
        "Built and shipped a voice-agent platform that handles customer service calls end-to-end, cutting support costs by up to 80%. The hard part was latency: a natural phone conversation falls apart above ~1 second of delay, so the system runs a bidirectional WebSocket audio pipeline (Twilio + GPT-4 Realtime) tuned to keep round-trip response under a second. Launched on Vercel, processed 1,500+ calls in the first month across 3 paying clients at an 11.6% conversion rate.",
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
        "Vercel-style one-click deploys, but the infrastructure runs in your own AWS account — which you fully own and pay for directly — with Plot holding zero credentials. You connect your account by installing a small, narrowly-scoped cross-account IAM role via CloudFormation; at deploy time Plot does an STS AssumeRole for temporary in-memory creds, then throws them away. All provisioning goes through CloudFormation templates (never raw SDK calls), so everything is tracked and cleanly deletable. Grew from a static-site v0 into a mini-Amplify: static sites (S3 + CloudFront with OAC), Lambda functions authored in an in-browser Monaco editor behind API Gateway, DynamoDB tables, custom domains with ACM, and GitHub push-to-deploy. Postgres stores only metadata — never credentials or content.",
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
        "A developer CLI that scans a git repository and produces a complete snapshot of where things stand: recent commits, uncommitted changes, scattered TODOs/FIXMEs, and an AI-powered analysis that flags risks, detects work-in-progress, and suggests what to do next. Supports focused diff reviews, a one-line summary for shell prompts, and JSON output for scripting — plus an offline mode that needs no API key.",
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
        "A lightweight, privacy-first Chrome extension for instant AI interactions on any webpage via capture mode. Integrated the OpenRouter API so developers can plug in any LLM with minimal setup, and designed it for extensibility — the repo picked up early forks and community feedback.",
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
        "A SaaS tool that generates editable mind maps from a prompt. Nodes can be edited, deleted, and expanded in real time, with the Anthropic API wired in for chat-driven refinement — blending AI generation with a collaborative editing UX.",
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
        "A speech-to-speech AI assistant built entirely on open-source models so it runs locally with no cloud dependency — speech recognition, a language model, and text-to-speech wired into a single voice loop. A privacy-first counterpart to the cloud voice work behind 9thgen.ai.",
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
        "A live-syncing PWA built to plan a 15-person trip to Miami — flights, stay, crew, and itinerary in one shared home-screen app that updates for everyone the moment someone changes something. A small, fun build that solved a real coordination problem the group chat couldn't.",
      technologies: ["JavaScript", "PWA", "Real-time sync", "Vercel"],
      links: [
        { type: "Website", href: "https://miami-trip-organizer.vercel.app" },
        { type: "GitHub", href: "https://github.com/YuktiKholiwal/miami-trip-organizer" },
      ],
      image: "",
    },
  ],
} as const;
