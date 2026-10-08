"use client";

import { motion } from "motion/react";

const variants = {
  /** Wide, gentle sweep for backgrounds and bands. */
  sweep: { viewBox: "0 0 600 120", d: "M6 104 C 150 98, 330 70, 594 10", weight: 16 },
  /** Flat stroke sized for underlining a headline. */
  underline: { viewBox: "0 0 600 40", d: "M8 30 C 150 30, 360 22, 592 8", weight: 14 },
} as const;

/**
 * The "road" swoosh from the DT logo: an orange sweep with a thin
 * lane line, drawn on when mounted (or when scrolled into view).
 */
export function Swoosh({
  className,
  delay = 0.2,
  inView = false,
  variant = "sweep",
}: {
  className?: string;
  delay?: number;
  inView?: boolean;
  variant?: keyof typeof variants;
}) {
  const v = variants[variant];
  const trigger = inView
    ? { whileInView: { pathLength: 1, opacity: 1 }, viewport: { once: true } }
    : { animate: { pathLength: 1, opacity: 1 } };
  const ease = [0.65, 0, 0.35, 1] as const;
  return (
    <svg viewBox={v.viewBox} fill="none" className={`overflow-visible ${className ?? ""}`} aria-hidden="true" preserveAspectRatio="none">
      <motion.path
        d={v.d}
        stroke="var(--brand)"
        strokeWidth={v.weight}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        {...trigger}
        transition={{ duration: 1.2, ease, delay }}
      />
      <motion.path
        d={v.d}
        stroke="var(--bg)"
        strokeWidth={v.weight * 0.18}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        {...trigger}
        transition={{ duration: 1.2, ease, delay: delay + 0.25 }}
      />
    </svg>
  );
}
