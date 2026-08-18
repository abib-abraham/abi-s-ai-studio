import { Reveal, Section } from "./primitives";

const meta = [
  { label: "Location", value: "Delhi NCR, India" },
  { label: "Focus", value: "AI / ML / Data Science" },
  { label: "Currently", value: "Student + Builder + Researcher" },
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
                I&apos;m a Data Science and AI student who enjoys the part of the work that comes
                after the experiment: turning an idea into a system that other people can actually
                use. Most of what I build starts as a question, becomes a notebook, and then gets
                pushed until it behaves like software.
              </p>
              <p>
                My interests sit across artificial intelligence, machine learning and natural
                language processing — with a steady pull towards research. I&apos;ve spent time on
                extracting structure from legal text, on decentralised accountability in Federated
                Learning, and on full-stack applications where the data model matters as much as
                the model itself.
              </p>
              <p>
                I care about clarity: readable code, honest evaluation, and interfaces that explain
                what a system is doing. I&apos;m still early in my career and learning quickly —
                which is exactly why I keep shipping.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
