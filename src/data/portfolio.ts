export type ProjectVisualVariant =
  | "nlp"
  | "network"
  | "grid"
  | "chart"
  | "contract"
  | "tokens";

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  /**
   * Abstract fallback visual. If `image` is set it is shown instead — drop a real
   * screenshot into src/assets (or public/) and reference it here.
   */
  visual: ProjectVisualVariant;
  image?: string;
  imageAlt?: string;
  /** Only CV-verified numbers belong here. */
  results?: { label: string; value: string }[];
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

export const projects: Project[] = [
  {
    id: "legal-argument-extractor",
    number: "01",
    title: "Legal Argument Extractor",
    category: "AI / Natural Language Processing",
    description:
      "An NLP-based system designed to extract and organise important arguments from legal documents.",
    tech: ["Python", "NLP", "Machine Learning", "Text Processing"],
    visual: "nlp",
    detail: {
      problem:
        "Legal documents are long, densely written and structurally inconsistent, so finding the arguments that actually matter means reading everything.",
      approach:
        "Treat argument extraction as a layered NLP problem: clean and segment the document, identify argumentative passages, then group them into units that can be reviewed quickly.",
      architecture: [
        "Document ingestion & normalisation",
        "Sentence segmentation + linguistic preprocessing",
        "Argumentative passage identification",
        "Grouping into argument units",
        "Structured output for review",
      ],
      implementation:
        "Built in Python with a text-processing pipeline for preprocessing and segmentation, and NLP components for identifying and organising argumentative content.",
      results:
        "Produces a structured, navigable view of a document's arguments instead of raw text. No benchmark figures are claimed.",
      challenges:
        "Legal language is domain specific and long-form: sentence boundaries, citations and nested clauses regularly break generic NLP tooling.",
      future:
        "Domain adaptation, citation linking and an interface for comparing opposing arguments side by side.",
    },
  },
  {
    id: "ham-spam-smishing",
    number: "02",
    title: "Ham, Spam & Smishing Classification",
    category: "Machine Learning / Deep Learning",
    description:
      "Built classification models for ham, spam and smishing detection using advanced NLP preprocessing.",
    tech: ["Python", "NLP", "Random Forest", "CNN", "Machine Learning", "Deep Learning"],
    visual: "chart",
    results: [
      { label: "Random Forest", value: "97.6%" },
      { label: "CNN", value: "98.3%" },
    ],
    detail: {
      problem:
        "Short text messages carry three very different intents — legitimate (ham), spam and smishing — and separating them reliably needs careful text handling.",
      approach:
        "Apply advanced NLP preprocessing to the message corpus, then compare a classical ensemble model against a deep learning model on the same task.",
      architecture: [
        "Message corpus & labelling (ham / spam / smishing)",
        "Advanced NLP preprocessing",
        "Feature engineering / text representation",
        "Random Forest classifier",
        "CNN classifier",
        "Evaluation & comparison",
      ],
      implementation:
        "Implemented in Python: preprocessing and feature preparation for the text data, a Random Forest ensemble as the classical baseline, and a CNN for the deep learning comparison.",
      results:
        "Random Forest reached 97.6% and the CNN reached 98.3% classification performance.",
      challenges:
        "Smishing messages closely imitate legitimate ones, so preprocessing choices matter more than model size.",
      future:
        "Transformer-based representations and evaluation on a broader, more recent message set.",
    },
  },
  {
    id: "uni-rent",
    number: "03",
    title: "Uni-Rent",
    category: "Full-Stack Web Application",
    description:
      "A student-focused self-drive vehicle rental platform designed to connect students directly with vehicle owners.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
    visual: "grid",
    detail: {
      problem:
        "Students near campus need short-term vehicles and local owners have idle vehicles, but there is no simple channel connecting the two.",
      approach:
        "Build a two-sided web application: owners list vehicles with availability and pricing, students browse and request bookings, and both sides manage state from a dashboard.",
      architecture: [
        "PHP application server",
        "MySQL relational schema (users, vehicles, bookings)",
        "Session-based authentication",
        "Listing, search and booking flows",
      ],
      implementation:
        "Classic LAMP-style stack running on XAMPP, with server-rendered PHP pages, a normalised MySQL schema and JavaScript for client-side validation and interactivity.",
      results: "A functioning end-to-end rental flow covering listing, discovery and booking.",
      challenges:
        "Modelling availability windows and preventing conflicting bookings, plus keeping the interface usable without a frontend framework.",
      future: "Owner verification, payments and a component-based frontend rewrite.",
    },
  },
  {
    id: "federated-accountability",
    number: "04",
    title: "Decentralized Accountability in Federated Learning",
    category: "Research / Blockchain / AI",
    description:
      "Independent research exploring blockchain-backed contribution records and smart-contract-based reputation mechanisms for Federated Learning.",
    tech: ["Federated Learning", "Blockchain", "Smart Contracts", "Solidity", "Machine Learning"],
    visual: "network",
    detail: {
      problem:
        "Federated Learning keeps data local, but aggregation still depends on trusting participants and a central coordinator. There is limited transparency about who contributed what.",
      approach:
        "Add an accountability layer alongside training: record contribution metadata on-chain and let a smart-contract reputation mechanism reflect verifiable history.",
      architecture: [
        "Federated Clients",
        "Federated Learning aggregation round",
        "Blockchain layer (contribution log)",
        "Reputation Manager (smart contract)",
        "Accountability & participation policy",
      ],
      implementation:
        "Federated training explored in Python, with contribution records and reputation logic expressed as Solidity smart contracts so scoring rules are transparent rather than hidden in a coordinator.",
      results:
        "An exploratory framing of accountability in Federated Learning. No benchmark results or security guarantees are claimed.",
      challenges:
        "Balancing on-chain cost against the frequency of FL rounds, and designing reputation rules that do not penalise honest low-resource clients.",
      future: "Formalising the threat model and a fuller experimental write-up.",
    },
  },
  {
    id: "reputation-manager",
    number: "05",
    title: "ReputationManager Smart Contract",
    category: "Blockchain / Federated Learning",
    description: "Designed a blockchain-based reputation system for Federated Learning evaluation.",
    tech: ["Solidity", "Smart Contracts", "Federated Learning", "Blockchain", "EVM"],
    visual: "contract",
    detail: {
      problem:
        "Evaluating Federated Learning participants requires a record of behaviour that no single party can quietly rewrite.",
      approach:
        "Express reputation as an on-chain contract: participants are registered, contributions are recorded, and reputation state is derived from those records.",
      architecture: [
        "Participant registration",
        "Contribution recording",
        "Reputation state & update rules",
        "On-chain read access for evaluation",
      ],
      implementation:
        "Written in Solidity and deployed to an EVM environment, keeping the reputation rules explicit and auditable in contract code.",
      results:
        "A working smart contract that maintains reputation state for Federated Learning evaluation.",
      challenges: "Keeping gas usage reasonable while storing enough history to be meaningful.",
      future: "Tighter integration with a full federated training loop.",
    },
  },
  {
    id: "decentralized-contact-book",
    number: "06",
    title: "Decentralized Contact Book",
    category: "Blockchain / Ethereum",
    description:
      "Built a secure on-chain contact management system using Solidity, Remix, MetaMask and Hardhat.",
    tech: ["Solidity", "Ethereum", "Remix IDE", "MetaMask", "Hardhat", "EVM"],
    visual: "tokens",
    detail: {
      problem:
        "Contact data usually lives in a service you have to trust. On-chain storage makes ownership and access explicit.",
      approach:
        "Store contacts against the owner's address so only that account can add, update or read its own entries.",
      architecture: [
        "Solidity contact storage contract",
        "Owner-scoped access control",
        "MetaMask wallet interaction",
        "Hardhat / Remix development & deployment",
      ],
      implementation:
        "Contract developed in Solidity using Remix IDE and Hardhat for compilation and deployment, with MetaMask used for account interaction on an EVM network.",
      results: "A functioning on-chain contact manager with owner-scoped access.",
      challenges: "Keeping storage costs sensible and handling transaction confirmation in the flow.",
      future: "A lightweight frontend and optional encrypted off-chain fields.",
    },
  },
];

/** Additional coursework-level build, kept separate from Uni-Rent. */
export const academicWork = [
  {
    id: "car-rental-system",
    title: "Car Rental System",
    category: "Java / Spring Boot",
    description: "Developed a booking and management system with a Spring Boot backend.",
    tech: ["Java", "Spring Boot", "REST APIs"],
  },
];

export const education = [
  {
    institution: "CHRIST (Deemed to be University), Delhi NCR",
    program: "B.Sc. Data Science & Artificial Intelligence (Honours with Research)",
    period: "2023 – 2027 (Expected)",
  },
];

export const experience = [
  {
    role: "Technical Intern",
    org: "We Avec U Group of Companies",
    period: "May 2025 – Jul 2025",
    points: [
      "Optimized websites and academic journals using SEO and OJS, improving performance by up to 75%.",
      "Designed and deployed WordPress-based solutions for academic and NGO platforms.",
    ],
  },
  {
    role: "Python Developer Intern",
    org: "Wayspire",
    period: "Jun 2024 – Aug 2024",
    points: [
      "Worked on Python-based image processing and data optimization tasks.",
      "Collaborated with a team to improve system efficiency and performance.",
    ],
  },
];

export const leadership = [
  {
    role: "Overall Student Co-Head",
    org: "School of Sciences, CHRIST University",
    period: "Aug 2025 – Present",
    body: "Led a team of 20+ members to conduct academic and cultural events.",
  },
  {
    role: "Cultural Head — ADIKALA",
    org: "School of Sciences",
    period: "Sept 2024 – Aug 2025",
    body: "Managed a 100+ member club and coordinated large-scale cultural events.",
  },
  {
    role: "Overall Fest Coordinator — TechGenX 5.0",
    org: "CHRIST University",
    period: "",
    body: "Managed national-level fest operations involving 860+ participants.",
  },
];

export const certifications = [
  "Python (Intermediate)",
  "SQL Basics",
  "Core Java & OOP",
  "NPTEL — HR Analytics",
];

export const metrics = [
  { value: "20+", label: "Team members led" },
  { value: "100+", label: "Club members managed" },
  { value: "860+", label: "Fest participants coordinated" },
  { value: "75%", label: "Max reported website performance improvement" },
  { value: "97.6%", label: "Random Forest classification result" },
  { value: "98.3%", label: "CNN classification result" },
];

export type SkillGroup = {
  name: string;
  items: { name: string; note: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Programming",
    items: [
      { name: "Python", note: "Primary language — ML, NLP, data work and the Wayspire internship." },
      { name: "Java", note: "Core Java and OOP; used to build the Car Rental System." },
      { name: "C", note: "Foundational systems and coursework programming." },
      { name: "C++", note: "Foundational programming and data structures work." },
      { name: "Solidity", note: "ReputationManager contract, Decentralized Contact Book and FL research." },
      { name: "JavaScript", note: "Client-side behaviour and validation in Uni-Rent." },
    ],
  },
  {
    name: "ML & AI",
    items: [
      { name: "NumPy", note: "Numerical computing behind model experiments." },
      { name: "Pandas", note: "Data wrangling, cleaning and preparation." },
      { name: "Scikit-learn", note: "Classical modelling — including the Random Forest classifier." },
      { name: "TensorFlow / Keras", note: "Deep learning, including the CNN text classifier." },
      { name: "NLP", note: "Legal Argument Extractor and ham/spam/smishing preprocessing." },
      { name: "Feature Engineering", note: "Text representation choices that drove classification results." },
    ],
  },
  {
    name: "Backend / Web",
    items: [
      { name: "Spring Boot", note: "Backend for the Car Rental System booking flow." },
      { name: "REST APIs", note: "Service endpoints for the Spring Boot backend." },
      { name: "HTML", note: "Interfaces for Uni-Rent and web work during internships." },
      { name: "CSS", note: "Layout and styling for full-stack projects." },
      { name: "WordPress", note: "Academic and NGO platform builds at We Avec U." },
      { name: "OJS", note: "Academic journal optimisation during the We Avec U internship." },
    ],
  },
  {
    name: "Blockchain",
    items: [
      { name: "Solidity", note: "Reputation and contact-book contracts." },
      { name: "Hardhat", note: "Compilation and deployment for the Decentralized Contact Book." },
      { name: "MetaMask", note: "Account interaction with deployed contracts." },
      { name: "Remix IDE", note: "Contract prototyping and testing." },
      { name: "EVM", note: "Target runtime for all smart-contract work." },
    ],
  },
  {
    name: "Databases & Tools",
    items: [
      { name: "MySQL", note: "Relational schema behind Uni-Rent." },
      { name: "SQL", note: "Querying and relational modelling." },
      { name: "Git", note: "Version control across projects." },
      { name: "GitHub", note: "Code hosting and collaboration." },
      { name: "VS Code", note: "Primary editor for development work." },
      { name: "Google Colab", note: "GPU-backed model experimentation." },
      { name: "Jupyter Notebook", note: "Notebook-driven analysis and prototyping." },
    ],
  },
];
