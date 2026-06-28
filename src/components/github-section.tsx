"use client";

import GitHubCalendar from "react-github-calendar";
import { DATA } from "@/data/resume";

// Monochrome dark theme to match the minimal aesthetic.
const darkTheme = {
  dark: ["#1c1c1c", "#3a3a3a", "#5c5c5c", "#888888", "#e6e6e6"],
};

export function GitHubSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-x-auto rounded-xl border border-border bg-card p-5">
        <GitHubCalendar
          username={DATA.githubUsername}
          colorScheme="dark"
          theme={darkTheme}
          blockSize={11}
          blockMargin={4}
          fontSize={12}
          style={{ color: "var(--muted-foreground)" }}
        />
      </div>
    </div>
  );
}
