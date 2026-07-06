import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { GitHubSection } from "@/components/github-section";

const DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col gap-16">
      {/* Hero */}
      <section id="hero" className="scroll-mt-20">
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <BlurFadeText
              delay={DELAY}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              yOffset={8}
              text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
            />
            <BlurFadeText
              className="max-w-[600px] text-pretty text-muted-foreground md:text-lg"
              delay={DELAY * 2}
              text={DATA.description}
            />
          </div>
          <BlurFade delay={DELAY}>
            <Image
              src={DATA.avatarUrl}
              alt={DATA.name}
              width={112}
              height={112}
              priority
              className="size-24 shrink-0 rounded-full object-cover ring-1 ring-border md:size-28"
            />
          </BlurFade>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20">
        <BlurFade delay={DELAY * 3}>
          <h2 className="mb-3 text-xl font-semibold">About</h2>
        </BlurFade>
        <BlurFade delay={DELAY * 4}>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            {DATA.summary}
          </p>
        </BlurFade>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-20">
        <BlurFade delay={DELAY * 5}>
          <h2 className="mb-4 text-xl font-semibold">Work Experience</h2>
        </BlurFade>
        <div className="flex flex-col gap-6">
          {DATA.work.map((job, i) => (
            <BlurFade key={job.company} delay={DELAY * 6 + i * 0.05}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <div className="font-medium">{job.company}</div>
                  <div className="text-sm text-muted-foreground">{job.title}</div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>
                </div>
                <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                  {job.start} – {job.end}
                </span>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Education */}
      {DATA.education.length > 0 && (
        <section id="education" className="scroll-mt-20">
          <BlurFade delay={DELAY * 7}>
            <h2 className="mb-4 text-xl font-semibold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-4">
            {DATA.education.map((edu, i) => (
              <BlurFade key={edu.school} delay={DELAY * 8 + i * 0.05}>
                <Link
                  href={edu.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4"
                >
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-1.5 font-medium">
                      {edu.school}
                      <ArrowUpRight className="size-3.5 -translate-x-1 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                    </div>
                    <div className="text-sm text-muted-foreground">{edu.degree}</div>
                  </div>
                  <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                    {edu.start} – {edu.end}
                  </span>
                </Link>
              </BlurFade>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      <section id="skills" className="scroll-mt-20">
        <BlurFade delay={DELAY * 9}>
          <h2 className="mb-3 text-xl font-semibold">Skills</h2>
        </BlurFade>
        <BlurFade delay={DELAY * 9.5}>
          <p className="mb-5 text-pretty leading-relaxed text-muted-foreground">
            {DATA.skillsIntro}
          </p>
        </BlurFade>
        <div className="flex flex-col gap-5">
          {DATA.skills.map((group, gi) => {
            const isFocus = group.category === "Frontend";
            return (
              <BlurFade key={group.category} delay={DELAY * 10 + gi * 0.05}>
                <div
                  className={
                    isFocus
                      ? "flex flex-col gap-2 rounded-xl border border-foreground/20 bg-background/40 p-4"
                      : "flex flex-col gap-2"
                  }
                >
                  <h3 className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    {group.category}
                    {isFocus && (
                      <span className="rounded bg-foreground px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-background">
                        Primary focus
                      </span>
                    )}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="flex h-7 items-center rounded-md border border-border bg-secondary/50 px-3 text-sm font-medium text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </section>

      {/* GitHub */}
      <section id="github" className="scroll-mt-20">
        <BlurFade delay={DELAY * 10.5}>
          <h2 className="mb-4 text-xl font-semibold">GitHub Activity</h2>
        </BlurFade>
        <BlurFade delay={DELAY * 11}>
          <GitHubSection />
        </BlurFade>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-20">
        <BlurFade delay={DELAY * 11}>
          <div className="mb-4 flex flex-col gap-2">
            <span className="w-fit rounded-md bg-foreground px-3 py-1 text-xs font-medium text-background">
              My Projects
            </span>
            <h2 className="text-2xl font-bold tracking-tight">Stuff I&apos;ve shipped</h2>
            <p className="text-muted-foreground">
              A voice platform with paying clients, a coding agent written from
              scratch in Zig, and a bunch of things in between. Plenty more on my
              GitHub.
            </p>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {DATA.projects.map((project, i) => (
            <BlurFade key={project.title} delay={DELAY * 12 + i * 0.05}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-background/40 p-5 transition-transform duration-200 hover:-translate-y-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-semibold">{project.title}</h3>
                    {project.tagline && (
                      <span className="text-sm text-muted-foreground">
                        {project.tagline}
                      </span>
                    )}
                  </div>
                  {project.dates && (
                    <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                      {project.dates}
                    </span>
                  )}
                </div>
                {project.role && (
                  <span className="mt-2 w-fit rounded bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground">
                    {project.role}
                  </span>
                )}
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-secondary px-1.5 py-0.5 text-[10px] font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.type}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md bg-foreground px-2.5 py-1 text-xs font-medium text-background transition-opacity hover:opacity-80"
                      >
                        {link.type}
                        <ArrowUpRight className="size-3" />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 pb-8">
        <BlurFade delay={DELAY * 13}>
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="w-fit rounded-md bg-foreground px-3 py-1 text-xs font-medium text-background">
              Contact
            </span>
            <h2 className="text-2xl font-bold tracking-tight">Let&apos;s build something</h2>
            <p className="max-w-md text-muted-foreground">
              Hiring, collaborating, or just curious? Reach out at{" "}
              <a
                href={`mailto:${DATA.contact.email}`}
                className="font-medium text-foreground underline underline-offset-4"
              >
                {DATA.contact.email}
              </a>{" "}
              or find me on any of the links below.
            </p>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
