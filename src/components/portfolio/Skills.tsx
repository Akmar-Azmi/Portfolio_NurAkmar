import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const GROUPS = [
  {
    title: "Programming",
    items: ["JavaScript", "TypeScript", "PHP", "Dart", "Python"],
  },
  {
    title: "Web & Mobile",
    items: ["Next.js", "React", "Laravel", "Flutter", "React Native (Expo)", "HTML / CSS"],
  },
  {
    title: "AI & Automation",
    items: [
      "Agentic AI",
      "n8n Workflows",
      "LangChain",
      "Azure OpenAI",
      "Gemini API",
      "RAG",
      "Prompt Engineering",
      "MCP",
    ],
  },
  {
    title: "Data & Infra",
    items: ["PostgreSQL", "Supabase", "MySQL", "Firebase", "REST APIs", "Cloudinary"],
  },
  {
    title: "Tooling",
    items: ["Git", "GitHub", "Jira", "Figma", "Google Cloud", "Docker"],
  },
  {
    title: "Methodology",
    items: ["Agile SCRUM", "SDLC", "Functional Testing", "UI/UX Validation"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="// 04 — ARSENAL"
          title="Tech Arsenal"
          subtitle="Calibrated stack. Hover to engage."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <div className="dossier-corners group h-full border border-border bg-surface/40 p-5 backdrop-blur-sm transition-all hover:border-hazard/50 hover:bg-surface/80">
                <span className="corner-tl" />
                <span className="corner-tr" />
                <span className="corner-bl" />
                <span className="corner-br" />
                <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
                  <h3 className="font-display text-sm font-bold uppercase tracking-widest text-hazard">
                    {g.title}
                  </h3>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}/{GROUPS.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="cursor-default border border-border bg-background/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-all hover:border-hazard hover:text-hazard hover:glow-hazard"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
