import {
  academicWork,
  certifications,
  education,
  experience,
  leadership,
  projects,
  skillGroups,
} from "@/data/portfolio";

export type ChatMessage = { role: "user" | "assistant"; content: string };

/**
 * Local demo knowledge base for the "Ask Abi" feature.
 *
 * It answers ONLY from the content published on this site (src/data/portfolio.ts).
 * To connect a real model later, add a server function that calls the provider
 * with a server-side key and swap `answerLocally` for it — no key should ever
 * reach the browser bundle.
 */
export function answerLocally(question: string): string {
  const q = question.toLowerCase();

  const match = projects.find(
    (p) =>
      q.includes(p.title.toLowerCase()) ||
      p.title
        .toLowerCase()
        .split(/[\s&,]+/)
        .filter((w) => w.length > 3)
        .every((w) => q.includes(w)),
  );
  if (match) {
    const res = match.results?.length
      ? `\n\nReported results: ${match.results.map((r) => `${r.label} ${r.value}`).join(", ")}.`
      : "";
    return `${match.title} — ${match.category}.\n\n${match.description}\n\n${match.detail.approach}${res}\n\nBuilt with: ${match.tech.join(", ")}.`;
  }

  if (/(spam|smish|ham|classif|random forest|cnn)/.test(q)) {
    const p = projects.find((x) => x.id === "ham-spam-smishing")!;
    return `${p.title} — ${p.description}\n\nReported results: Random Forest 97.6%, CNN 98.3%.\n\nBuilt with: ${p.tech.join(", ")}.`;
  }

  if (/(intern|experience|worked|job|employ|wayspire|avec)/.test(q)) {
    return `Abi has completed two internships:\n\n${experience
      .map((e) => `${e.role} · ${e.org} (${e.period})\n- ${e.points.join("\n- ")}`)
      .join("\n\n")}`;
  }

  if (/(leader|club|fest|head|team|adikala|techgenx)/.test(q)) {
    return leadership
      .map((l) => `${l.role} — ${l.org}${l.period ? ` (${l.period})` : ""}\n${l.body}`)
      .join("\n\n");
  }

  if (/(certif|course|nptel)/.test(q)) {
    return `Certifications listed on the portfolio:\n\n${certifications.map((c) => `• ${c}`).join("\n")}`;
  }

  if (/(education|study|studying|university|degree|college|christ)/.test(q)) {
    const ed = education[0]!;
    return `${ed.institution}\n${ed.program}\n${ed.period}`;
  }

  if (/(blockchain|solidity|smart contract|ethereum|hardhat|metamask|reputation|contact book)/.test(q)) {
    const bc = projects.filter((p) =>
      ["federated-accountability", "reputation-manager", "decentralized-contact-book"].includes(p.id),
    );
    return `Blockchain work:\n\n${bc.map((p) => `${p.title} — ${p.description}`).join("\n\n")}`;
  }

  if (/(federated|accountab|research)/.test(q)) {
    const fl = projects.find((p) => p.id === "federated-accountability")!;
    return `Abi's independent research explores decentralized accountability in Federated Learning.\n\n${fl.detail.problem}\n\n${fl.detail.approach}\n\nIt's exploratory work — no benchmark results or security guarantees are claimed.`;
  }

  if (/(nlp|language|text|legal)/.test(q)) {
    return "NLP is a core focus. Abi built the Legal Argument Extractor — an NLP system that extracts and organises important arguments from legal documents — and applied advanced NLP preprocessing in the ham, spam and smishing classification project (Random Forest 97.6%, CNN 98.3%).";
  }

  if (/(strongest|best|favourite|favorite|machine learning project|ml project)/.test(q)) {
    return "In machine learning terms, the Ham, Spam & Smishing Classification project is the strongest measured one: advanced NLP preprocessing with a Random Forest at 97.6% and a CNN at 98.3%.";
  }

  if (/(project|built|build|portfolio|work)/.test(q)) {
    return `Featured projects:\n\n${projects
      .map((p) => `${p.number} · ${p.title} — ${p.category}`)
      .join("\n")}\n\nAlso: ${academicWork
      .map((w) => `${w.title} (${w.category})`)
      .join(", ")}. Open any case study above for the detail.`;
  }

  if (/(tech|stack|tool|language|skill|know)/.test(q)) {
    return skillGroups.map((g) => `${g.name}: ${g.items.map((i) => i.name).join(", ")}`).join("\n\n");
  }

  if (/(opportunit|hiring|hire|role|available|looking|contact|email)/.test(q)) {
    return "Abi is open to AI / ML and Data Science opportunities — internships, research collaborations and entry-level roles. The contact section below is the fastest route.";
  }

  if (/(who|about|abi|background)/.test(q)) {
    return "Abi B Abraham is a Data Science & AI undergraduate at CHRIST (Deemed to be University), Delhi NCR, with hands-on experience across machine learning, NLP, Python development, web technologies and blockchain.";
  }

  return "I can answer using what's published on this site: education, internships, projects, the Federated Learning research, skills, leadership and certifications. Try one of the suggestions below.";
}
