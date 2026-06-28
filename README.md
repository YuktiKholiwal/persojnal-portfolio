<div align="center">

# Yukti Kholiwal — Portfolio

**Software engineer building AI-powered applications** — voice agents, agentic pipelines, and the interfaces that make them usable.

[![Live Site](https://img.shields.io/badge/Live-yuktikholiwal.com-000?style=flat-square&logo=vercel&logoColor=white)](https://yuktikholiwal.com)
[![GitHub](https://img.shields.io/badge/GitHub-yuktikholiwal-181717?style=flat-square&logo=github)](https://github.com/yuktikholiwal)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-yuktikholiwal-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/yuktikholiwal)

A clean, fast, single-column personal portfolio with dark mode and subtle blur-fade motion.

</div>

---

## ✦ Tech Stack

| Layer        | Tools                                                              |
| ------------ | ----------------------------------------------------------------- |
| Framework    | [Next.js 15](https://nextjs.org) (App Router) · React 19          |
| Language     | TypeScript                                                        |
| Styling      | Tailwind CSS v4 · CSS variables for theming                       |
| Motion       | [Motion](https://motion.dev) — blur-fade entrance animations      |
| Theming      | [next-themes](https://github.com/pacocoursey/next-themes) (dark by default) |
| Icons        | [lucide-react](https://lucide.dev)                                |
| Extras       | GitHub contribution calendar via `react-github-calendar`          |

---

## ✦ Getting Started

```bash
pnpm install
pnpm dev        # → http://localhost:3000
```

Other scripts:

```bash
pnpm build      # production build
pnpm start      # serve the production build
pnpm typecheck  # TypeScript check
pnpm lint       # Next.js lint
```

---

## ✦ Editing Content

**Everything lives in one file:** [`src/data/resume.ts`](src/data/resume.ts) — the single source of truth for the entire site.

| Field             | Drives                                                  |
| ----------------- | ------------------------------------------------------ |
| `name`, `description`, `summary` | Hero + About sections                   |
| `contact`         | Email + social links in the floating bottom dock        |
| `skills`          | Skill groups (AI/LLM · Frontend · Backend/Infra)        |
| `work`            | Experience entries                                      |
| `education`       | Education entries (section auto-hides if empty)          |
| `projects`        | Project cards (with optional `tagline`, `role`, `links`) |

Layout and rendering live in [`src/app/page.tsx`](src/app/page.tsx).

### Adding a profile photo

The hero shows your initials in a circle by default. To use a photo, drop a square image at `public/avatar.png` and swap the initials `<div>` in `page.tsx` for a `next/image` `<Image>`.

### Adding a resume

The bottom dock links to `/resume.pdf`. Drop your PDF at `public/resume.pdf` to enable it.

---

## ✦ Theming

Colors are defined as CSS variables in [`src/app/globals.css`](src/app/globals.css) — `:root` for light, `.dark` for dark. The site defaults to dark mode; toggle with the switch in the dock.

---

## ✦ Project Structure

```
src/
├── app/
│   ├── layout.tsx      # root layout, fonts, theme provider, dock
│   ├── page.tsx        # all sections (hero · about · work · education · skills · projects · contact)
│   └── globals.css     # Tailwind + design tokens
├── components/
│   ├── navbar.tsx      # floating bottom dock
│   ├── github-section.tsx
│   ├── mode-toggle.tsx
│   ├── theme-provider.tsx
│   └── magicui/        # blur-fade animation components
├── data/
│   └── resume.ts       # ← all your content
└── lib/utils.ts
```

---

## ✦ Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com) — zero config required.

---

<div align="center">
<sub>Built with Next.js · Designed to stay out of the way.</sub>
</div>
