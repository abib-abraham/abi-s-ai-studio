import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./primitives";

/** TODO: replace placeholders with real destinations. */
const EMAIL = "#"; // e.g. "mailto:you@example.com"
const LINKEDIN = "#"; // e.g. "https://linkedin.com/in/…"
const GITHUB = "#"; // e.g. "https://github.com/…"

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="rule-top">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-24 sm:px-8 md:py-36 lg:px-12">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-6 bg-border-strong" aria-hidden />
            Contact
          </p>
          <h2
            id="contact-heading"
            className="text-balance-heading mt-6 max-w-4xl text-[clamp(2.4rem,7vw,5.5rem)] font-semibold"
          >
            Let&apos;s build something.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            Whether it&apos;s an AI project, research collaboration, internship opportunity or
            something completely new — I&apos;d love to hear from you.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={EMAIL}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Mail size={16} /> Email Me
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={LINKEDIN}
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={GITHUB}
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="rule-top">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <p className="font-mono text-[13px] tracking-[0.18em]">ABI ABRAHAM</p>
            <p className="mt-2 text-sm text-muted-foreground">Data Science × AI × Building</p>
          </div>
          <nav aria-label="Footer" className="flex gap-6 text-sm text-muted-foreground">
            <a href={GITHUB} className="transition-colors hover:text-foreground">
              GitHub
            </a>
            <a href={LINKEDIN} className="transition-colors hover:text-foreground">
              LinkedIn
            </a>
            <a href={EMAIL} className="transition-colors hover:text-foreground">
              Email
            </a>
          </nav>
          <p className="text-xs text-muted-foreground">© 2026 Abi B Abraham</p>
        </div>
      </footer>
    </section>
  );
}
