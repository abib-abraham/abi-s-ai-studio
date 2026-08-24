import {
  certifications,
  education,
  experience,
  leadership,
  metrics,
  academicWork,
} from "@/data/portfolio";
import { Reveal, Section, Tag } from "./primitives";

export function Experience() {
  return (
    <Section id="experience" label="Experience" title="A working timeline.">
      <div className="grid gap-14 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
          <h3 className="eyebrow">Internships</h3>
          <ol className="relative mt-6 border-l border-border pl-6 sm:pl-8">
            {experience.map((e, i) => (
              <li key={e.role} className="relative pb-10 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[calc(1.5rem+4.5px)] top-1.5 h-2 w-2 rounded-full bg-accent sm:-left-[calc(2rem+4.5px)]"
                />
                <Reveal delay={0.03 * i}>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {e.period}
                  </span>
                  <h4 className="mt-2 text-lg font-medium">{e.role}</h4>
                  <p className="text-sm text-accent">{e.org}</p>
                  <ul className="mt-3 max-w-xl space-y-2">
                    {e.points.map((p) => (
                      <li key={p} className="text-sm leading-relaxed text-muted-foreground">
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal>
            <h3 className="eyebrow mt-14">Leadership</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {leadership.map((l) => (
                <div key={l.role} className="rounded-lg border border-border p-5">
                  {l.period && (
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {l.period}
                    </span>
                  )}
                  <p className="mt-2 text-base font-medium">{l.role}</p>
                  <p className="mt-1 text-sm text-accent">{l.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h3 className="eyebrow mt-14">Academic &amp; Technical Work</h3>
            <div className="mt-6 space-y-4">
              {academicWork.map((w) => (
                <div key={w.id} className="rounded-lg border border-border p-5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {w.category}
                  </span>
                  <p className="mt-2 text-base font-medium">{w.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {w.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {w.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <Reveal>
            <h3 className="eyebrow">Education</h3>
            <div className="mt-5 space-y-4">
              {education.map((ed) => (
                <div key={ed.institution} className="rounded-lg border border-border p-5">
                  <p className="text-base font-medium">{ed.institution}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{ed.program}</p>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    {ed.period}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h3 className="eyebrow mt-12">Certifications</h3>
            <ul className="mt-5 space-y-px overflow-hidden rounded-lg border border-border bg-border">
              {certifications.map((c) => (
                <li key={c} className="bg-background px-5 py-4 text-sm text-foreground">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="eyebrow mt-12">By the numbers</h3>
            <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
              {metrics.map((m) => (
                <div key={m.value + m.label} className="bg-background px-5 py-5">
                  <dt className="text-2xl font-semibold text-accent">{m.value}</dt>
                  <dd className="mt-2 text-xs leading-relaxed text-muted-foreground">{m.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
