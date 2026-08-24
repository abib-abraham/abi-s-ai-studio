import { Reveal, Section } from "./primitives";

const meta = [
  { label: "Location", value: "Delhi NCR, India" },
  { label: "Studying", value: "B.Sc. Data Science & AI (Honours with Research)" },
  { label: "Focus", value: "Machine Learning · NLP · Blockchain" },
];

const areas = [
  "Machine Learning",
  "NLP",
  "Python Development",
  "Blockchain",
  "Smart Contracts",
  "Full-Stack Development",
  "Data Science",
];

export function About() {
  return (
    <Section id="about" label="About" title="More than a résumé.">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-6">
          <Reveal>
            <p className="text-balance-heading text-2xl font-medium leading-tight sm:text-3xl md:text-[2.5rem]">
              I like building things that move beyond the notebook.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3 md:grid-cols-1">
              {meta.map((m) => (
                <div key={m.label} className="bg-background px-5 py-4">
                  <dt className="eyebrow">{m.label}</dt>
                  <dd className="mt-2 text-sm text-foreground">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:pt-2">
          <Reveal delay={0.05}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I&apos;m Abi B Abraham, a Data Science &amp; AI undergraduate at CHRIST (Deemed to
                be University), Delhi NCR, with hands-on experience across machine learning, NLP,
                Python development, web technologies and blockchain.
              </p>
              <p>
                I&apos;m interested in applying AI and data science to practical systems — models
                that end up inside something usable — while continuing to explore
                research-oriented problems, currently around accountability in Federated Learning.
              </p>
              <p>
                Most of what I build starts as a question, becomes a notebook, and then gets pushed
                until it behaves like software. I care about clarity: readable code, honest
                evaluation, and interfaces that explain what a system is doing.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="eyebrow mt-10">Areas of work</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {areas.map((a) => (
                <li
                  key={a}
                  className="rounded-full border border-border px-3.5 py-1.5 text-sm text-muted-foreground"
                >
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
