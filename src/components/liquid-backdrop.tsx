"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LiquidMetal } from "@paper-design/shaders-react";

/**
 * Full-page liquid-metal shader rendered behind the whole site.
 * Dimmed with a scrim so glass panels and text stay readable, and the
 * moving metal shows through the frosted cards. WebGL is client-only, so
 * we render nothing on the server and mount after hydration.
 */
export function LiquidBackdrop() {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme !== "light";
  const colorBack = isDark ? "#141418" : "#e7e7ee";
  const colorTint = isDark ? "#7c86ff" : "#9aa0ff";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <LiquidMetal
        style={{ width: "100%", height: "100%", opacity: 0.6 }}
        shape="none"
        colorBack={colorBack}
        colorTint={colorTint}
        speed={reducedMotion ? 0 : 0.6}
        repetition={2}
        softness={0.3}
        distortion={0.1}
        contour={0.35}
        shiftRed={0.3}
        shiftBlue={0.3}
        angle={70}
      />
      {/* Readability scrim between the shader and page content. */}
      <div className="absolute inset-0 bg-background/60" />
    </div>
  );
}
