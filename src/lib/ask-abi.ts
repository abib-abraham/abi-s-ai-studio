import { projects, skillGroups } from "@/data/portfolio";

export type ChatMessage = { role: "user" | "assistant"; content: string };

/**
 * Local demo knowledge base for the "Ask Abi" feature.
 *
 * This is intentionally client-side and deterministic. To connect a real model
 * later, add a server function (e.g. src/lib/ask-abi.functions.ts) that calls
 * the provider with a server-side key and swap `answerLocally` for it — no key
 * should ever reach the browser bundle.
 */
export function answerLocally(question: string): string {
  const q = question.toLowerCase();

  const match = projects.find(
    (p) => q.includes(p.title.toLowerCase()) || p.title.toLowerCase().split(" ").every((w) => q.includes(w)),
  );
  if (match) {
    return `${match.title} — ${match.category}.\n\n${match.detail.problem}\n\nApproach: ${match.detail.approach}\n\nBuilt with: ${match.tech.join(", ")}.`;
  }

  if (/(federated|blockchain|research|accountab|solidity|smart contract)/.test(q)) {
    const fl = projects[1]!;
    return `Abi's research explores decentralized accountability in Federated Learning.\n\n${fl.detail.problem}\n\n${fl.detail.approach}\n\nIt's exploratory work — no security guarantees or benchmark results are claimed.`;
  }

  if (/(nlp|language|text|legal)/.test(q)) {
    return "NLP is a core focus. Abi built the Legal Argument Extractor — an AI system that extracts and organises arguments from legal documents using preprocessing, span classification and LLM-assisted summarisation — and an NLP Text Analysis Toolkit covering preprocessing, POS tagging, NER, Bag of Words, N-Grams and TF-IDF with NLTK, spaCy and scikit-learn.";
  }

  if (/(project|built|build|work|portfolio)/.test(q)) {
    return `Six selected projects:\n\n${projects
      .map((p) => `${p.number} · ${p.title} — ${p.category}`)
      .join("\n")}\n\nOpen any case study above for the problem, approach, architecture and results.`;
  }

  if (/(tech|stack|tool|language|skill|know)/.test(q)) {
    return skillGroups
      .map((g) => `${g.name}: ${g.items.map((i) => i.name).join(", ")}`)
      .join("\n\n");
  }

  if (/(opportunit|hiring|hire|intern|job|role|available|looking)/.test(q)) {
    return "Abi is available for opportunities — internships, research collaborations and roles in Data Science, Machine Learning or AI engineering. Anything where models get turned into products, or where research questions are still open, is a good fit. The contact section below is the fastest route.";
  }

  if (/(who|about|abi|background|education|study)/.test(q)) {
    return "Abi B Abraham is a Data Science and AI student at Christ (Deemed to be University), based in Delhi NCR, India. He works across machine learning, NLP and full-stack development, with ongoing research into decentralized accountability in Federated Learning.";
  }

  return "I can answer questions about Abi's projects, his Federated Learning research, the technologies he uses, or the kind of opportunities he's looking for. Try one of the suggestions below the chat.";
}
