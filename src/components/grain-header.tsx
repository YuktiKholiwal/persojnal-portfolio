"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";

/**
 * Full-width grain-gradient shader banner at the very top of the page.
 * WebGL is client-only, so the fixed-height band reserves its space on the
 * server and the canvas mounts after hydration (no layout shift, no SSR crash).
 */
export function GrainHeader() {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="relative h-40 w-full overflow-hidden sm:h-52"
    >
      {mounted && (
        <GrainGradient
          style={{ width: "100%", height: "100%" }}
          colorBack="#0a0a0f"
          colors={["#7300ff", "#eba8ff", "#00bfff", "#2a00ff"]}
          shape="corners"
          softness={0.6}
          intensity={0.5}
          noise={0.2}
          speed={reducedMotion ? 0 : 1}
        />
      )}
      {/* Fade the banner into the page background along its bottom edge. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
