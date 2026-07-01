"use client";

import GitHubCalendar from "react-github-calendar";
import { DATA } from "@/data/resume";

// Classic GitHub green palette (dark).
const darkTheme = {
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

export function GitHubSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="github-calendar rounded-xl border border-border bg-card p-5">
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
