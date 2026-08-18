import { useState } from "react";
import { motion } from "motion/react";
import { skillGroups } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

export function Skills() {
  const [active, setActive] = useState<{ name: string; note: string } | null>(null);

  return (
    <Section
      id="skills"
      label="Skills"
      title="What I work with."
      intro="Hover or select a skill to see how I've actually used it."
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-8">
          <div className="space-y-10">
            {skillGroups.map((group, gi) => (
              <Reveal key={group.name} delay={0.03 * gi}>
                <div className="grid gap-4 border-t border-border pt-6 sm:grid-cols-[9rem_1fr]">
                  <h3 className="eyebrow pt-1">{group.name}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <button
                          type="button"
                          onMouseEnter={() => setActive(item)}
                          onFocus={() => setActive(item)}
                          onClick={() => setActive(item)}
                          className={`rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                            active?.name === item.name
                              ? "border-accent/70 text-accent"
                              : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground"
                          }`}
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="md:col-span-4">
          <Reveal delay={0.06}>
            <div
              aria-live="polite"
              className="sticky top-28 rounded-xl border border-border bg-surface p-6"
            >
              <p className="eyebrow">Detail</p>
              {active ? (
                <motion.div key={active.name} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                  <p className="mt-4 text-lg font-medium">{active.name}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.note}</p>
                </motion.div>
              ) : (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Select any skill to see where it shows up in my work. No progress bars — the
                  projects are the evidence.
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
