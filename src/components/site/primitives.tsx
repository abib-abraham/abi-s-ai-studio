import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  label,
  title,
  intro,
  children,
  className = "",
}: {
  id: string;
  label: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`rule-top ${className}`}>
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-6 bg-border-strong" aria-hidden />
            {label}
          </p>
        </Reveal>
        {title && (
          <Reveal delay={0.05}>
            <h2
              id={`${id}-heading`}
              className="text-balance-heading mt-6 max-w-3xl text-4xl font-semibold sm:text-5xl md:text-6xl"
            >
              {title}
            </h2>
          </Reveal>
        )}
        {!title && <span id={`${id}-heading`} className="sr-only">{label}</span>}
        {intro && (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{intro}</p>
          </Reveal>
        )}
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border px-3 py-1 font-mono text-[11px] tracking-wide text-muted-foreground">
      {children}
    </span>
  );
}
