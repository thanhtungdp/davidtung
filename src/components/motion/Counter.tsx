"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

export function Counter({ to, suffix = "", locale }: { to: number; suffix?: string; locale: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const fmt = new Intl.NumberFormat(locale === "vi" ? "vi-VN" : "en-US");

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = fmt.format(Math.round(v)) + suffix;
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, to, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      {fmt.format(to)}
      {suffix}
    </span>
  );
}
