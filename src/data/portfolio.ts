export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  visual: "nlp" | "network" | "grid" | "vision" | "tokens" | "chart";
  detail: {
    problem: string;
    approach: string;
    architecture: string[];
    implementation: string;
    results: string;
    challenges: string;
    future: string;
  };
};

/** Replace placeholder links (marked below) with real URLs when available. */
export const PLACEHOLDER_LINK = "#"; // TODO: replace with real URL

export const projects: Project[] = [
  {
    id: "legal-argument-extractor",
    number: "01",
    title: "Legal Argument Extractor",
    category: "Natural Language Processing / AI",
    description:
      "An AI-based system designed to extract and organize important legal arguments from legal documents, helping users identify relevant arguments and structure information more efficiently.",
    tech: ["Python", "NLP", "Machine Learning", "LLMs", "Text Processing"],
    github: PLACEHOLDER_LINK,
    visual: "nlp",
    detail: {
      problem:
        "Legal documents are long, densely written and structurally inconsistent. Finding the arguments that actually matter means reading everything, which does not scale for students, researchers or practitioners.",
      approach:
        "Treat argument extraction as a layered NLP problem: clean and segment the document, classify argumentative spans, then group related spans into coherent argument units that can be reviewed quickly.",
      architecture: [
        "Document ingestion & normalisation",
        "Sentence segmentation + linguistic preprocessing",
        "Argumentative span detection",
        "LLM-assisted summarisation of each unit",
        "Structured output for review",
      ],
      implementation:
        "Built in Python with a text-processing pipeline for preprocessing and segmentation, classical ML/NLP components for span classification, and LLM prompting for condensing detected spans into readable argument summaries.",
      results:
        "Produces a structured, navigable view of a document's arguments instead of raw text. Evaluation is ongoing — no formal benchmark numbers are claimed.",
      challenges:
        "Legal language is domain specific and long-form: sentence boundaries, citations and nested clauses regularly break generic NLP tooling, and context length limits require careful chunking.",
      future:
        "Domain-adapted fine-tuning, citation linking, and an interface for side-by-side comparison of opposing arguments.",
    },
  },
  {
    id: "federated-accountability",
    number: "02",
    title: "Decentralized Accountability in Federated Learning",
    category: "Research / Blockchain / AI",
    description:
      "Research project exploring decentralized accountability in Federated Learning using blockchain and smart-contract-based reputation mechanisms.",
    tech: ["Federated Learning", "Blockchain", "Smart Contracts", "Solidity", "Machine Learning"],
    github: PLACEHOLDER_LINK,
    visual: "network",
    detail: {
      problem:
        "Federated Learning keeps data local, but the aggregation process still depends on trusting participants and a central coordinator. There is limited transparency about who contributed what, and little recourse when a client behaves badly.",
      approach:
        "Introduce an accountability layer alongside training: record contribution metadata on-chain and let a smart-contract reputation mechanism weigh future participation based on verifiable history.",
      architecture: [
        "Federated Clients",
        "Federated Learning aggregation round",
        "Blockchain layer (immutable contribution log)",
        "Reputation Manager (smart contract)",
        "Accountability & participation policy",
      ],
      implementation:
        "Federated training simulated in Python; contribution records and reputation logic expressed as Solidity smart contracts so that scoring rules are transparent and auditable rather than hidden in a coordinator.",
      results:
        "A working conceptual and experimental framing of accountability in FL. Findings are exploratory — no performance or security guarantees are claimed.",
      challenges:
        "Balancing on-chain cost against the frequency of FL rounds, and designing reputation rules that discourage manipulation without penalising honest but low-resource clients.",
      future:
        "Formalising the threat model, broader experimental evaluation, and a write-up for publication.",
    },
  },
  {
    id: "uni-rent",
    number: "03",
    title: "Uni-Rent",
    category: "Web Application / Full Stack",
    description:
      "A student-focused self-drive vehicle rental platform designed to connect students with vehicle owners directly.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
    github: PLACEHOLDER_LINK,
    demo: PLACEHOLDER_LINK,
    visual: "grid",
    detail: {
      problem:
        "Students near campus need short-term vehicles, and local owners have idle vehicles. There is no simple, trusted channel connecting the two.",
      approach:
        "Build a straightforward two-sided web application: owners list vehicles with availability and pricing, students browse and request bookings, and both sides manage state from a dashboard.",
      architecture: [
        "PHP application server",
        "MySQL relational schema (users, vehicles, bookings)",
        "Session-based authentication",
        "Listing, search and booking flows",
      ],
      implementation:
        "Classic LAMP-style stack running on XAMPP, with server-rendered PHP pages, a normalised MySQL schema and JavaScript for client-side validation and interactivity.",
      results:
        "A functioning end-to-end rental flow covering listing, discovery and booking.",
      challenges:
        "Modelling availability windows and preventing conflicting bookings, plus keeping the interface usable without a frontend framework.",
      future:
        "Payments, verification for owners, and a rewrite of the frontend as a component-based SPA.",
    },
  },
  {
    id: "traffic-violation",
    number: "04",
    title: "Smart Traffic Violation Detection & e-Challan System",
    category: "AI + IoT",
    description:
      "An intelligent traffic monitoring concept combining AI-based violation detection with IoT infrastructure and automated e-Challan generation.",
    tech: ["Computer Vision", "AI", "IoT", "Machine Learning"],
    visual: "vision",
    detail: {
      problem:
        "Manual traffic enforcement is inconsistent and slow. Violations are missed, and issuing penalties depends on human presence at the right place and time.",
      approach:
        "Combine camera-based detection at the edge with a backend that validates events and generates an e-Challan record, keeping a human review step in the loop.",
      architecture: [
        "Roadside camera / IoT sensor node",
        "Computer-vision violation detection",
        "Event validation service",
        "e-Challan generation & records",
      ],
      implementation:
        "Detection modelled with computer-vision techniques for vehicle and violation recognition; IoT nodes are responsible for capture and transmission, with challan generation handled server-side.",
      results:
        "A concept and prototype-level exploration of automated enforcement. Deployment-grade accuracy is not claimed.",
      challenges:
        "Real-world conditions — occlusion, weather, plate legibility — plus the fairness and privacy implications of automated penalties.",
      future:
        "Better plate recognition, edge inference optimisation and an explicit appeals workflow.",
    },
  },
  {
    id: "nlp-toolkit",
    number: "05",
    title: "NLP Text Analysis Toolkit",
    category: "Natural Language Processing",
    description:
      "A collection of practical NLP implementations covering preprocessing, POS tagging, Named Entity Recognition, Bag of Words, N-Grams and TF-IDF.",
    tech: ["Python", "NLTK", "spaCy", "Scikit-learn"],
    github: PLACEHOLDER_LINK,
    visual: "tokens",
    detail: {
      problem:
        "NLP fundamentals are easy to use as black boxes and hard to actually understand. Reimplementing them makes the trade-offs concrete.",
      approach:
        "Build each classical technique as a small, readable module with consistent inputs and outputs, so they can be composed into a pipeline.",
      architecture: [
        "Text preprocessing (tokenise, normalise, stopwords, lemmatise)",
        "POS tagging & Named Entity Recognition",
        "Representations: Bag of Words, N-Grams, TF-IDF",
        "Comparison utilities",
      ],
      implementation:
        "Python modules built on NLTK and spaCy for linguistic processing, and scikit-learn for vectorisation and downstream evaluation.",
      results:
        "A reusable reference toolkit that shortens the setup time for later NLP work.",
      challenges:
        "Handling messy real text — encoding, inconsistent casing and tokenisation edge cases — without over-cleaning the signal.",
      future:
        "Add transformer-based embeddings alongside the classical representations for direct comparison.",
    },
  },
  {
    id: "data-analytics",
    number: "06",
    title: "Data Analytics & Visualization",
    category: "Data Science / Analytics",
    description:
      "Data analysis and visualization projects using Python and Tableau to explore patterns, trends, relationships and business insights.",
    tech: ["Python", "Pandas", "Matplotlib", "Tableau", "EDA"],
    github: PLACEHOLDER_LINK,
    visual: "chart",
    detail: {
      problem:
        "Raw datasets rarely answer a question directly — the work is deciding which questions are answerable and communicating the answer clearly.",
      approach:
        "Structured exploratory analysis: profile the data, clean it, test relationships, then design visuals that make the finding obvious to a non-technical reader.",
      architecture: [
        "Data profiling & cleaning (Pandas)",
        "Exploratory analysis & statistics",
        "Visual design (Matplotlib)",
        "Interactive dashboards (Tableau)",
      ],
      implementation:
        "Notebook-based analysis with Pandas and Matplotlib, with the final narrative delivered as Tableau dashboards.",
      results:
        "Analyses that end in a clear, communicable insight rather than an untitled chart.",
      challenges:
        "Missing and inconsistent data, and resisting conclusions the data does not support.",
      future:
        "Automating the profiling step and standardising the chart system across projects.",
    },
  },
];

export type SkillGroup = {
  name: string;
  items: { name: string; note: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Programming",
    items: [
      { name: "Python", note: "Primary language — ML, NLP, data pipelines and analysis." },
      { name: "SQL", note: "Relational modelling and querying; used across Uni-Rent and analytics work." },
      { name: "PHP", note: "Server-side application logic — used to build Uni-Rent." },
      { name: "JavaScript", note: "Interactive frontends and client-side validation." },
      { name: "R", note: "Statistical analysis and coursework in data science." },
    ],
  },
  {
    name: "Data Science",
    items: [
      { name: "Pandas", note: "Data wrangling, cleaning and feature preparation." },
      { name: "NumPy", note: "Numerical computing underpinning ML experiments." },
      { name: "Matplotlib", note: "Charting for exploratory and explanatory analysis." },
      { name: "Scikit-learn", note: "Classical modelling, vectorisation and evaluation." },
      { name: "EDA", note: "Structured exploration before any modelling decision." },
      { name: "Statistics", note: "Distributions, relationships and hypothesis testing." },
    ],
  },
  {
    name: "AI / ML",
    items: [
      { name: "Machine Learning", note: "Supervised modelling across text and tabular data." },
      { name: "NLP", note: "Legal Argument Extractor and the NLP Text Analysis Toolkit." },
      { name: "Deep Learning", note: "Neural architectures for language and vision tasks." },
      { name: "Computer Vision", note: "Detection work in the traffic violation system." },
      { name: "Generative AI", note: "LLM prompting and LLM-assisted summarisation." },
    ],
  },
  {
    name: "Tools",
    items: [
      { name: "Git", note: "Version control for every project." },
      { name: "GitHub", note: "Code hosting and collaboration." },
      { name: "Google Colab", note: "GPU-backed experimentation." },
      { name: "Jupyter", note: "Notebook-driven analysis and prototyping." },
      { name: "Tableau", note: "Interactive dashboards for analytics projects." },
      { name: "MySQL", note: "Relational database behind full-stack work." },
      { name: "XAMPP", note: "Local PHP/MySQL development environment." },
    ],
  },
  {
    name: "Blockchain",
    items: [
      { name: "Solidity", note: "Smart contracts for the reputation mechanism in FL research." },
      { name: "Smart Contracts", note: "Transparent, auditable rules instead of hidden coordinator logic." },
      { name: "Federated Learning", note: "Decentralised training and accountability research." },
    ],
  },
];
