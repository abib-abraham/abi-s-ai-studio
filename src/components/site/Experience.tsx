import { Reveal, Section } from "./primitives";

type Entry = {
  kind: string;
  title: string;
  org: string;
  period: string;
  body: string;
  placeholder?: boolean;
};

/**
 * Only verified information is listed. Entries marked `placeholder` are
 * editable slots — fill in real details in this array, do not invent them.
 */
const entries: Entry[] = [
  {
    kind: "Research",
    title: "Decentralized Accountability in Federated Learning",
    org: "Independent research project",
    period: "Ongoing",
    body: "Exploring blockchain-backed contribution records and smart-contract reputation as an accountability layer for Federated Learning.",
  },
  {
    kind: "Project",
    title: "Legal Argument Extractor",
    org: "AI / NLP build",
    period: "Recent",
    body: "Designed and built an NLP pipeline that extracts and organises arguments from legal documents.",
  },
  {
    kind: "Project",
    title: "Uni-Rent",
    org: "Full-stack web application",
    period: "Recent",
    body: "Built a student-focused self-drive vehicle rental platform connecting students directly with vehicle owners.",
  },
  {
    kind: "Academic",
    title: "Data Science & AI coursework",
    org: "Christ (Deemed to be University)",
    period: "Ongoing",
    body: "Machine learning, natural language processing, statistics, databases and applied analytics.",
  },
  {
    kind: "Internship",
    title: "[Add internship role]",
    org: "[Add organisation]",
    period: "[Add dates]",
    body: "Editable placeholder — replace with real internship details when available.",
    placeholder: true,
  },
];

const education = [
  {
    institution: "Christ (Deemed to be University)",
    program: "Data Science / AI",
    note: "Dates, grades and honours intentionally left out until confirmed.",
  },
];

const achievements = [
  {
    category: "Research",
    body: "Independent research on decentralized accountability in Federated Learning.",
  },
  {
    category: "Projects",
    body: "Six shipped projects spanning NLP, computer vision, full-stack development and analytics.",
  },
  {
    category: "Sports / Leadership",
    body: "[Add verified achievement]",
    placeholder: true,
  },
];

export function Experience() {
  return (
    <Section id="experience" label="Experience" title="A working timeline.">
      <div className="grid gap-14 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
          <ol className="relative border-l border-border pl-6 sm:pl-8">
            {entries.map((e, i) => (
              <li key={e.title} className="relative pb-10 last:pb-0">
                <span
                  aria-hidden
                  className={`absolute -left-[calc(1.5rem+4.5px)] top-1.5 h-2 w-2 rounded-full sm:-left-[calc(2rem+4.5px)] ${
                    e.placeholder ? "bg-border-strong" : "bg-accent"
                  }`}
                />
                <Reveal delay={0.03 * i}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                      {e.kind}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {e.period}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-medium">{e.title}</h3>
                  <p className="text-sm text-muted-foreground">{e.org}</p>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {e.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="md:col-span-5">
          <Reveal>
            <h3 className="eyebrow">Education</h3>
            <div className="mt-5 space-y-4">
              {education.map((ed) => (
                <div key={ed.institution} className="rounded-lg border border-border p-5">
                  <p className="text-base font-medium">{ed.institution}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{ed.program}</p>
                  <p className="mt-3 text-xs text-muted-foreground">{ed.note}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="eyebrow mt-12">Achievements</h3>
            <ul className="mt-5 space-y-px overflow-hidden rounded-lg border border-border bg-border">
              {achievements.map((a) => (
                <li key={a.category} className="bg-background px-5 py-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {a.category}
                  </p>
                  <p
                    className={`mt-2 text-sm ${a.placeholder ? "text-muted-foreground" : "text-foreground"}`}
                  >
                    {a.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
