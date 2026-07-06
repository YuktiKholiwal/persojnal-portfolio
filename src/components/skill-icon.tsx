import {
  Bot,
  AudioLines,
  Cloud,
  Webhook,
  Workflow,
  Layers,
  MessageSquare,
  Smartphone,
  Code2,
  Code,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siShadcnui,
  siFramer,
  siBlazor,
  siAnthropic,
  siClaude,
  siOpenrouter,
  siCursor,
  siFastapi,
  siFlask,
  siDotnet,
  siZig,
  siPostgresql,
  siDrizzle,
  siMongodb,
  siVercel,
  siGithub,
  siGithubactions,
} from "simple-icons";

type SimpleIcon = { path: string; title: string };

// Real brand logos (simple-icons) keyed by the exact skill label.
const BRAND: Record<string, SimpleIcon> = {
  "React 19": siReact,
  "Next.js 15": siNextdotjs,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  "Tailwind CSS": siTailwindcss,
  "shadcn/ui": siShadcnui,
  "Framer Motion": siFramer,
  Blazor: siBlazor,
  "Anthropic API": siAnthropic,
  "Claude Code": siClaude,
  "OpenRouter API": siOpenrouter,
  Cursor: siCursor,
  FastAPI: siFastapi,
  Flask: siFlask,
  ".NET 9": siDotnet,
  Zig: siZig,
  PostgreSQL: siPostgresql,
  "Drizzle ORM": siDrizzle,
  MongoDB: siMongodb,
  Vercel: siVercel,
  "Git / GitHub": siGithub,
  "CI/CD": siGithubactions,
};

// Skills with no brand logo (or one pulled from simple-icons) get a fitting glyph.
const FALLBACK: Record<string, LucideIcon> = {
  "OpenAI API": Bot,
  "Real-time voice (Twilio + GPT-4 Realtime)": AudioLines,
  "CloudFormation / AWS": Cloud,
  "REST APIs": Webhook,
  "Agentic pipelines": Workflow,
  "RAG-style workflows": Layers,
  "Prompt engineering": MessageSquare,
  "Responsive & accessible UI": Smartphone,
  "React Flow": Workflow,
  "Monaco Editor": Code2,
  Codex: Code,
};

export function SkillIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const brand = BRAND[name];
  if (brand) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={className}
      >
        <path d={brand.path} />
      </svg>
    );
  }

  const Icon = FALLBACK[name] ?? Sparkles;
  return <Icon aria-hidden="true" className={className} />;
}
