import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.4 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, reduced ? 1 : 0]);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      setPointer({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced]);

  const ease = [0.22, 1, 0.36, 1] as const;
  const rise = (delay: number) => ({
    initial: reduced ? undefined : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section
      id="top"
      ref={ref}
      aria-label="Introduction"
      className="noise-overlay relative isolate flex min-h-[100svh] items-end overflow-hidden"
    >
      <div className="grid-backdrop absolute inset-0 -z-10 [mask-image:radial-gradient(120%_90%_at_50%_0%,black,transparent_75%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 h-[45rem] w-[45rem] rounded-full opacity-[0.14] blur-[120px] transition-transform duration-700 ease-out"
        style={{
          background: "radial-gradient(circle, var(--accent), transparent 65%)",
          left: `calc(${pointer.x * 100}% - 22.5rem)`,
          top: `calc(${pointer.y * 100}% - 22.5rem)`,
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="mx-auto w-full max-w-[1240px] px-5 pb-20 pt-32 sm:px-8 lg:px-12"
      >
        <motion.p {...rise(0.05)} className="eyebrow">
          Data Science × AI × Product
        </motion.p>

        <motion.h1
          {...rise(0.14)}
          className="text-balance-heading mt-8 max-w-5xl text-[clamp(2.6rem,8.4vw,7rem)] font-semibold"
        >
          I build intelligent systems
          <br className="hidden sm:block" />{" "}
          <span className="text-muted-foreground">from data to deployment.</span>
        </motion.h1>

        <motion.p
          {...rise(0.24)}
          className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          I&apos;m Abi B Abraham — a Data Science &amp; AI builder focused on machine learning, NLP,
          intelligent systems and real-world products.
        </motion.p>

        <motion.div {...rise(0.34)} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Explore My Work
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            Let&apos;s Connect
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-2 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <FileText size={15} />
            View Resume
          </a>
        </motion.div>

        <motion.div
          {...rise(0.44)}
          className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-6"
        >
          <p className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="status-dot inline-block h-2 w-2 rounded-full bg-success" aria-hidden />
            Available for opportunities
          </p>
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground sm:block">
            Delhi NCR, India
          </p>
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Scroll <ArrowDown size={13} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
