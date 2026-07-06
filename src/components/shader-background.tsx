"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";

/**
 * Full-screen grain-gradient shader fixed behind the whole site. The page
 * content sits on a frosted glass panel, so this can stay vivid without
 * hurting readability. WebGL is client-only, so it mounts after hydration.
 */
export function ShaderBackground() {
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
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {mounted && (
        <GrainGradient
          style={{ width: "100%", height: "100%" }}
          colorBack="#08080c"
          colors={["#7300ff", "#eba8ff", "#00bfff", "#2a00ff"]}
          shape="wave"
          softness={0.7}
          intensity={0.45}
          noise={0.2}
          speed={reducedMotion ? 0 : 0.7}
        />
      )}
    </div>
  );
}
