"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import type { Dictionary } from "@/i18n";
import { SectionHeading } from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

export function Process({ t }: { t: Dictionary["process"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section className="container-x py-12 sm:py-28">
      <SectionHeading title={t.title} />
      <div ref={ref} className="relative mt-16">
        {/* The road: drawn as you scroll */}
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute inset-x-0 top-2 hidden h-24 w-full lg:block" fill="none" aria-hidden="true">
          <path d="M10 100 C 300 96, 700 70, 1190 14" stroke="var(--line)" strokeWidth="12" strokeLinecap="round" />
          <motion.path d="M10 100 C 300 96, 700 70, 1190 14" stroke="var(--brand)" strokeWidth="12" strokeLinecap="round" style={{ pathLength: progress }} />
        </svg>
        <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:pt-36">
          {t.steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.8, ease }}
              className="card relative p-7"
            >
              <span className="display text-6xl italic text-brand/20">0{i + 1}</span>
              <h3 className="mt-4 text-xl font-extrabold tracking-tight">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
