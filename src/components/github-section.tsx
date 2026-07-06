"use client";

import { cloneElement } from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip } from "react-tooltip";
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
          renderBlock={(block, activity) =>
            cloneElement(block, {
              "data-tooltip-id": "gh-tooltip",
              "data-tooltip-content": `${activity.count} contribution${
                activity.count === 1 ? "" : "s"
              } on ${activity.date}`,
            })
          }
        />
        <Tooltip
          id="gh-tooltip"
          className="!rounded-md !bg-foreground !px-2 !py-1 !text-xs !font-medium !text-background"
        />
      </div>
    </div>
  );
}
