"use client";

import Link from "next/link";
import { DATA } from "@/data/resume";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

const iconButton =
  "flex size-10 items-center justify-center rounded-full text-muted-foreground transition-all duration-200 hover:scale-110 hover:bg-accent hover:text-foreground active:scale-95";

export function Navbar() {
  const socials = Object.values(DATA.contact.social).filter((s) => s.navbar);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 flex h-16 items-end justify-center">
      <div
        className={cn(
          "glass pointer-events-auto mb-4 flex items-center gap-1 rounded-full px-2 py-1.5",
        )}
      >
        {DATA.navbar.map((item) => (
          <Link key={item.href} href={item.href} aria-label={item.label} className={iconButton}>
            <item.icon className="size-4" />
          </Link>
        ))}

        <div className="mx-1 h-6 w-px bg-border" />

        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={iconButton}
          >
            <social.icon className="size-4" />
          </a>
        ))}

        <div className="mx-1 h-6 w-px bg-border" />

        <ModeToggle />
      </div>
    </div>
  );
}
