import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Github, X } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal, Section, Tag } from "./primitives";

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = projects.find((p) => p.id === openId) ?? null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenId(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <Section
      id="work"
      label="Selected Work"
      title="Selected Work"
      intro="Projects where data, intelligence and engineering come together."
    >
      <div className="flex flex-col">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={0.03 * i}>
            <ProjectRow project={p} onOpen={() => setOpenId(p.id)} flip={i % 2 === 1} />
          </Reveal>
        ))}
      </div>

      <AnimatePresence>{open && <ProjectDialog project={open} onClose={() => setOpenId(null)} />}</AnimatePresence>
    </Section>
  );
}

function ProjectRow({
  project,
  onOpen,
  flip,
}: {
  project: Project;
  onOpen: () => void;
  flip: boolean;
}) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group border-t border-border py-10 last:border-b md:py-14"
    >
      <div className={`grid gap-8 md:grid-cols-12 md:items-center ${flip ? "" : ""}`}>
        <div className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-accent">{project.number}</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {project.category}
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl md:text-[2.4rem] md:leading-[1.05]">
            {project.title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpen}
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              Case study
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
            {project.github && (
              <a
                href={project.github}
                className="inline-flex items-center gap-2 px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github size={15} /> GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                className="inline-flex items-center gap-2 px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Live Demo <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={onOpen}
          aria-label={`Open case study for ${project.title}`}
          className={`relative aspect-[16/10] overflow-hidden rounded-lg border border-border transition-colors duration-500 group-hover:border-border-strong md:col-span-5 ${
            flip ? "md:order-1" : ""
          }`}
        >
          <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
            <ProjectVisual variant={project.visual} />
          </div>
        </button>
      </div>
    </motion.article>
  );
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-background/80 p-0 backdrop-blur-md sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="my-0 w-full max-w-3xl border border-border bg-surface sm:my-6 sm:rounded-xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-surface/90 px-5 py-4 backdrop-blur sm:rounded-t-xl sm:px-8">
          <span className="font-mono text-xs text-accent">Project {project.number}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-border-strong"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-5 pb-10 pt-6 sm:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {project.category}
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">{project.title}</h3>
          <div className="mt-6 aspect-[16/8] overflow-hidden rounded-lg border border-border">
            <ProjectVisual variant={project.visual} />
          </div>

          <Block title="Problem">{project.detail.problem}</Block>
          <Block title="Approach">{project.detail.approach}</Block>

          <div className="mt-8">
            <h4 className="eyebrow">Architecture</h4>
            <ol className="mt-4 space-y-2">
              {project.detail.architecture.map((step, i) => (
                <li
                  key={step}
                  className="flex items-center gap-3 rounded-md border border-border bg-surface-2 px-4 py-3 text-sm"
                >
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8">
            <h4 className="eyebrow">Technology</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>

          <Block title="Implementation">{project.detail.implementation}</Block>
          <Block title="Results">{project.detail.results}</Block>
          <Block title="Challenges">{project.detail.challenges}</Block>
          <Block title="Future Improvements">{project.detail.future}</Block>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-6">
            {project.github && (
              <a
                href={project.github}
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                <Github size={15} /> GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground"
              >
                Live Demo <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h4 className="eyebrow">{title}</h4>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">{children}</p>
    </div>
  );
}
