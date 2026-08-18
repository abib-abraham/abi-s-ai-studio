import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { CornerDownLeft, Sparkles } from "lucide-react";
import { Reveal, Section } from "./primitives";
import { answerLocally, type ChatMessage } from "@/lib/ask-abi";

const suggestions = [
  "What projects has Abi built?",
  "What does Abi know about NLP?",
  "Tell me about his Federated Learning research.",
  "What technologies does Abi use?",
  "What kind of opportunities is Abi looking for?",
];

export function AskAbi() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi — I'm a demo assistant trained on Abi's portfolio content. Ask about his projects, research, skills or what he's looking for.",
    },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, thinking]);

  const send = (text: string) => {
    const question = text.trim();
    if (!question || thinking) return;
    setMessages((m) => [...m, { role: "user", content: question }]);
    setInput("");
    setThinking(true);
    // Demo responses come from a local knowledge base. A server function can
    // replace `answerLocally` later — no API key is ever exposed client-side.
    window.setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", content: answerLocally(question) }]);
      setThinking(false);
    }, 650);
  };

  return (
    <Section id="ask" label="Ask Abi" title="Ask Abi." intro="Curious about my work? Ask.">
      <Reveal>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border bg-surface">
          <div className="flex items-center gap-2 border-b border-border px-5 py-3">
            <Sparkles size={14} className="text-accent" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Demo assistant
            </span>
          </div>

          <div ref={listRef} className="max-h-[26rem] space-y-4 overflow-y-auto px-5 py-6 sm:px-7">
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <p
                  className={`max-w-[85%] whitespace-pre-line rounded-lg px-4 py-3 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-surface-2 text-foreground"
                      : "border border-border text-muted-foreground"
                  }`}
                >
                  {m.content}
                </p>
              </motion.div>
            ))}
            {thinking && (
              <p className="font-mono text-xs text-muted-foreground" aria-live="polite">
                thinking…
              </p>
            )}
          </div>

          <div className="border-t border-border px-5 py-4 sm:px-7">
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {s}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2"
            >
              <label htmlFor="ask-abi-input" className="sr-only">
                Ask a question about Abi
              </label>
              <input
                id="ask-abi-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about a project, the research, or the stack…"
                className="min-w-0 flex-1 bg-transparent py-1.5 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                aria-label="Send question"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-xs font-medium text-accent-foreground disabled:opacity-50"
                disabled={!input.trim() || thinking}
              >
                Send <CornerDownLeft size={13} />
              </button>
            </form>
            <p className="mt-3 text-xs text-muted-foreground">
              Demo responses are generated from this site&apos;s content. A live model can be
              connected server-side later.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
