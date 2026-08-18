import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Research } from "@/components/site/Research";
import { Experience } from "@/components/site/Experience";
import { Skills } from "@/components/site/Skills";
import { AskAbi } from "@/components/site/AskAbi";
import { Contact } from "@/components/site/Contact";

const title = "Abi B Abraham — Data Science & AI";
const description =
  "Portfolio of Abi B Abraham — Data Science, Artificial Intelligence, Machine Learning, NLP and software projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Abi B Abraham",
          jobTitle: "Data Science & AI Student, Researcher and Developer",
          description,
          address: { "@type": "PostalAddress", addressRegion: "Delhi NCR", addressCountry: "IN" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "Christ (Deemed to be University)" },
          knowsAbout: [
            "Data Science",
            "Machine Learning",
            "Natural Language Processing",
            "Federated Learning",
            "Computer Vision",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-foreground"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Research />
        <Experience />
        <Skills />
        <AskAbi />
        <Contact />
      </main>
    </>
  );
}
