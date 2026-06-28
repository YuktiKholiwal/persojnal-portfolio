"use client";

import { AnimatePresence, motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
}

export default function BlurFadeText({
  text,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 8,
}: BlurFadeTextProps) {
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <div className={cn("flex", className)}>
      <AnimatePresence>
        <motion.span
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={combinedVariants}
          transition={{ yoyo: Infinity, delay, duration, ease: "easeOut" }}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
