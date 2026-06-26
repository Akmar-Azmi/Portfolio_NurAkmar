import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Timeline } from "@/components/portfolio/Timeline";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Programs } from "@/components/portfolio/Programs";
import { Certificates } from "@/components/portfolio/Certificates";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackgroundFX } from "@/components/portfolio/BackgroundFX";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nur Akmar — AI Engineer & Software Developer" },
      {
        name: "description",
        content:
          "Most Wanted dossier of Nur Akmar Binti Noor Azmi — Agentic AI, automation, and full-stack engineering.",
      },
      { property: "og:title", content: "Nur Akmar — AI Engineer & Software Developer" },
      {
        property: "og:description",
        content:
          "Agentic AI, data automation, and full-stack engineering. Enter the dossier.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <BackgroundFX />
      <CursorGlow />

      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <Timeline />
          <Projects />
          <Skills />
          <Programs />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
