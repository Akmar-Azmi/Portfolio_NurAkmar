import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";

const ENTRIES = [
  {
    range: "MAR 2026 — AUG 2026",
    role: "Full-Stack Developer Intern",
    org: "Telekom Malaysia (TM) · Kuala Lumpur",
    status: "CURRENT",
    icon: Briefcase,
    bullets: [
      "Designed and built an end-to-end Agentic AI workflow on n8n to automate ETL monitoring and recovery — replacing manual DataOps interventions.",
      "Integrated Azure OpenAI with enterprise APIs to analyse ETL execution logs and auto-rerun failed jobs.",
      "Shipped an ETL monitoring dashboard in Next.js with KPI cards, execution history, AI-generated insights, error analytics and interactive performance charts.",
      "Validated AI-generated outputs with governance practices to keep automation responsible and reliable.",
    ],
  },
  {
    range: "NOV 2025 — DEC 2025",
    role: "Freelance Web Developer",
    org: "Pusat Kaunseling Harmony — PPK Chowkit",
    icon: Code2,
    bullets: [
      "Designed and shipped a full promotional website for a community counselling initiative end-to-end.",
      "Ran stakeholder interviews to lock content, features and UX direction, iterating from feedback.",
      "Performed functional testing, UI/UX validation and cross-device responsiveness checks before handover.",
    ],
  },
  {
    range: "OCT 2022 — NOV 2026",
    role: "B.Sc. Software Engineering (Hons.)",
    org: "Universiti Pendidikan Sultan Idris (UPSI)",
    icon: GraduationCap,
    bullets: [
      "CGPA 3.76 — Dean's List from Semester 1 through Semester 7.",
      "Final Year Project: MediBond — Gold Award, 12th ie-RIICH International Exhibition (2026).",
    ],
  },
];

export function Timeline() {
  return (
    <section id="experience" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="// 02 — TIMELINE"
          title="Mission Log"
          subtitle="Chronological record of engagements, deployments and academic clearances."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical rail */}
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-hazard via-hazard/30 to-transparent md:left-1/2" />

          <ol className="space-y-12">
            {ENTRIES.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <li key={e.role} className="relative pl-12 md:pl-0">
                  {/* Node */}
                  <span className="absolute left-4 top-2 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center md:left-1/2">
                    <span className="absolute inset-0 animate-ping rounded-full bg-hazard/60" />
                    <span className="relative h-3 w-3 rounded-full border-2 border-hazard bg-background" />
                  </span>

                  <div className={`md:grid md:grid-cols-2 md:gap-10 ${left ? "" : "md:[&>div:first-child]:order-2"}`}>
                    <div className={`hidden md:block ${left ? "md:text-right md:pr-6" : "md:pl-6"}`}>
                      <span className="font-mono text-xs uppercase tracking-widest text-hazard">
                        {e.range}
                      </span>
                    </div>

                    <Reveal className={left ? "md:pl-6" : "md:pr-6 md:text-right"}>
                      <article className="dossier-corners group relative border border-border bg-surface/60 p-5 backdrop-blur-sm transition-all hover:border-hazard/60">
                        <span className="corner-tl" />
                        <span className="corner-tr" />
                        <span className="corner-bl" />
                        <span className="corner-br" />
                        <div className={`mb-2 flex items-center gap-2 md:hidden`}>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-hazard">
                            {e.range}
                          </span>
                          {e.status ? (
                            <span className="border border-hazard bg-hazard/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-hazard">
                              {e.status}
                            </span>
                          ) : null}
                        </div>
                        <div className={`mb-1 flex items-center gap-2 ${left ? "" : "md:flex-row-reverse"}`}>
                          <e.icon className="h-4 w-4 text-hazard" />
                          <h3 className="font-display text-lg font-bold uppercase tracking-wider text-foreground">
                            {e.role}
                          </h3>
                          {e.status ? (
                            <span className="hidden border border-hazard bg-hazard/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-hazard md:inline">
                              {e.status}
                            </span>
                          ) : null}
                        </div>
                        <div className="mb-3 font-mono text-xs text-muted-foreground">{e.org}</div>
                        <ul className={`space-y-1.5 text-sm text-muted-foreground ${left ? "" : "md:[&>li]:flex-row-reverse"}`}>
                          {e.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2">
                              <span className="mt-1.5 inline-block h-1 w-1 shrink-0 bg-hazard" />
                              <span className="leading-relaxed">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    </Reveal>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
