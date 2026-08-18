import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, FileText } from "lucide-react";
import { Reveal, Section, Tag } from "./primitives";

const layers = [
  { name: "Federated Clients", note: "Local models trained on data that never leaves the device." },
  { name: "Federated Learning", note: "Rounds of aggregation combine client updates into a global model." },
  { name: "Blockchain Layer", note: "Contribution metadata is recorded immutably and can be audited." },
  { name: "Reputation Manager", note: "A smart contract scores participants from their verifiable history." },
  { name: "Accountability", note: "Participation policy follows reputation rather than implicit trust." },
];

const tags = ["Research", "Blockchain", "Federated Learning", "Smart Contracts", "Reputation Systems"];

export function Research() {
  const [active, setActive] = useState(0);

  return (
    <Section
      id="research"
      label="Research"
      title="Research & Ideas"
      intro="Work in progress, described honestly — questions I'm actively exploring rather than settled conclusions."
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-6">
          <Reveal>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Decentralized Accountability in Federated Learning
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <div className="mt-7 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Federated Learning protects raw data by keeping it local, but the training process
                still relies on trust: participants are assumed to behave, and a coordinator is
                assumed to aggregate fairly. Neither assumption is verifiable from the outside.
              </p>
              <p>
                This project explores whether accountability can be made explicit — recording
                contribution metadata on a blockchain layer and letting a smart-contract reputation
                mechanism govern future participation. The aim is transparency about who
                contributed what, with rules that are auditable rather than hidden.
              </p>
              <p>
                The work is exploratory. No security guarantees or benchmark results are claimed
                here; the current focus is framing the threat model and evaluating the design.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {/* TODO: replace with the publication link once available */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                <FileText size={15} /> Paper / Publication
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Discuss this research <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-6">
          <Reveal delay={0.08}>
            <div className="rounded-xl border border-border bg-surface p-5 sm:p-7">
              <p className="eyebrow">Architecture</p>
              <ul className="mt-6 space-y-2">
                {layers.map((layer, i) => (
                  <li key={layer.name}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-pressed={active === i}
                      className={`w-full rounded-lg border px-4 py-3.5 text-left transition-colors duration-300 ${
                        active === i
                          ? "border-accent/60 bg-surface-2 text-foreground"
                          : "border-border text-muted-foreground hover:border-border-strong"
                      }`}
                    >
                      <span className="flex items-center gap-3 text-sm">
                        <span className="font-mono text-[11px] text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {layer.name}
                      </span>
                      {active === i && (
                        <motion.span
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-2 block text-xs leading-relaxed text-muted-foreground"
                        >
                          {layer.note}
                        </motion.span>
                      )}
                    </button>
                    {i < layers.length - 1 && (
                      <span aria-hidden className="mx-auto block h-4 w-px bg-border" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
