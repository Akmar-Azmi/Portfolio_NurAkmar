import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Target, Flame, Brain, Compass } from "lucide-react";

const CARDS = [
  {
    icon: Target,
    code: "01",
    title: "Introduction",
    body: "Final-year Software Engineering student at Universiti Pendidikan Sultan Idris (UPSI), graduating in November 2026 with a CGPA of 3.76 and Dean's List recognition every semester. Currently working as a Full-Stack Developer Intern at Telekom Malaysia, building AI-powered solutions to automate enterprise DataOps workflows.",
  },
  {
    icon: Compass,
    code: "02",
    title: "Career Objective",
    body: "Aspiring AI Engineer and Software Engineer passionate about designing intelligent software that combines automation, artificial intelligence, and scalable full-stack development to solve real-world business challenges.",
  },
  {
    icon: Flame,
    code: "03",
    title: "Experience",
    body: "Experienced in developing full-stack web and mobile applications, integrating AI agents into enterprise workflows, and collaborating with industry engineers using Agile methodologies. Hands-on with React, Flutter, Next.js, Laravel, n8n, Azure OpenAI, and modern cloud technologies.",
  },
  {
    icon: Brain,
    code: "04",
    title: "Expertise",
    body: "Artificial Intelligence • Agentic AI • Workflow Automation • Full-Stack Development • Mobile Development • REST APIs • Software Testing • UI/UX • Agile SCRUM",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="// 01 — AKMAR AZMI"
          title="Profile AKMAR"
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

                  <div className="rotate-[-8deg] border-2 border-hazard bg-hazard/5 px-3 py-1 shadow-[0_0_10px_rgba(255,215,0,0.25)]">
                    <span className="font-display text-[10px] font-bold tracking-[0.3em] text-hazard">
                      VERIFIED
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
