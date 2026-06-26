import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Target, Flame, Brain, Compass } from "lucide-react";

const CARDS = [
  {
    icon: Target,
    code: "01",
    title: "Introduction",
    body: "Final-year Software Engineering student at UPSI, graduating Nov 2026. CGPA 3.76 with Dean's List across all 7 semesters. Currently a Full-Stack Developer Intern at Telekom Malaysia building Agentic AI for DataOps.",
  },
  {
    icon: Compass,
    code: "02",
    title: "Career Goal",
    body: "To ship intelligent systems where AI agents, automation, and clean engineering meet — turning manual ops work into autonomous workflows that scale.",
  },
  {
    icon: Flame,
    code: "03",
    title: "Passion",
    body: "Building things that feel alive: agentic workflows, LLM tooling, real-time mobile apps, and full-stack platforms that solve real problems for real people.",
  },
  {
    icon: Brain,
    code: "04",
    title: "Interests",
    body: "Agentic AI · n8n automation · Retrieval-Augmented Generation · Mobile dev (Flutter / React Native) · Data engineering · UX for technical tools.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="// 01 — DOSSIER"
          title="Profile Dossier"
          subtitle="Classified background on the subject. Cross-reference with attached resume for full chain of custody."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="dossier-corners group relative h-full overflow-hidden border border-border bg-surface/60 p-6 backdrop-blur-sm transition-all hover:border-hazard/60 hover:bg-surface">
                <span className="corner-tl" />
                <span className="corner-tr" />
                <span className="corner-bl" />
                <span className="corner-br" />

                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center border border-hazard/40 bg-hazard/5 text-hazard transition-all group-hover:border-hazard group-hover:glow-hazard">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-wider text-foreground">
                      {c.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {c.code}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">{c.body}</p>

                <div className="mt-5 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-muted-foreground/60">
                  <span>CLASSIFIED // L2</span>
                  <span className="text-hazard/60">VERIFIED ✓</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
