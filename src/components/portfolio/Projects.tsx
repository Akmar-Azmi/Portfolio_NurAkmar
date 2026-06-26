import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Github, ExternalLink, ImageIcon } from "lucide-react";

const PROJECTS = [
  {
    code: "P-01",
    name: "MediBond",
    tag: "FYP · Gold Award ie-RIICH 2026",
    description:
      "Digital assistant for elderly medication support with caregiver integration. Role-based auth (Elder / Caregiver), real-time medication reminder scheduling, and push notification logic.",
    problem:
      "Elderly users miss doses and caregivers lack visibility — MediBond closes the loop with reminders, adherence tracking and remote oversight.",
    stack: ["React Native (Expo)", "Supabase", "PostgreSQL", "Push Notifications"],
    github: "#",
    demo: "#",
  },
  {
    code: "P-02",
    name: "TM ETL Agent Dashboard",
    tag: "Telekom Malaysia · Internship",
    description:
      "Agentic AI workflow on n8n that monitors ETL pipelines, analyses execution logs with Azure OpenAI, and auto-reruns failed jobs. Paired with a Next.js dashboard for KPIs, history and AI-generated insights.",
    problem:
      "DataOps engineers were manually triaging failed ETL jobs — the agent handles detection, root-cause hints and recovery, freeing humans for higher-order work.",
    stack: ["n8n", "Azure OpenAI", "Next.js", "REST APIs"],
    github: "#",
    demo: "#",
  },
  {
    code: "P-03",
    name: "MySanding Bridal",
    tag: "Real Client · Agile SCRUM",
    description:
      "Booking and service-management website for a bridal studio, built in an Agile SCRUM cadence with sprint planning, reviews and Jira-tracked defects.",
    problem:
      "Manual WhatsApp bookings caused double-bookings — the platform centralises packages, availability and customer requests.",
    stack: ["Laravel", "Supabase", "Cloudinary", "Jira"],
    github: "#",
    demo: "#",
  },
  {
    code: "P-04",
    name: "Recipedia",
    tag: "Mobile · Community Recipes",
    description:
      "Cross-platform recipe app with CRUD for recipes, favourites, comments and likes — a small social layer for home cooks.",
    problem:
      "Cluttered recipe apps with poor UX — Recipedia keeps it focused: cook, save, share.",
    stack: ["Flutter", "Dart", "Firebase", "Cloudinary"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="// 03 — CASE FILES"
          title="Featured Projects"
          subtitle="Selected operations. Tap a file for breakdown."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <article className="dossier-corners group relative flex h-full flex-col overflow-hidden border border-border bg-surface/60 backdrop-blur-sm transition-all hover:border-hazard/60 hover:-translate-y-1">
                <span className="corner-tl" />
                <span className="corner-tr" />
                <span className="corner-bl" />
                <span className="corner-br" />

                {/* Preview placeholder */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-[radial-gradient(circle_at_30%_20%,oklch(0.22_0_0),oklch(0.1_0_0))]">
                  <div className="grid-bg absolute inset-0 opacity-50" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="flex flex-col items-center gap-2 text-center">
                      <ImageIcon className="h-10 w-10 text-hazard/50" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        [ preview pending ]
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/60">
                        // TODO: attach screenshot
                      </span>
                    </div>
                  </div>
                  <div className="absolute left-3 top-3 border border-hazard bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-hazard backdrop-blur">
                    {p.code}
                  </div>
                  <div className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {p.tag}
                  </div>
                  {/* Scan */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hazard/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-foreground">
                    {p.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                  <div className="rounded-sm border border-border/60 bg-background/40 p-3">
                    <div className="mb-1 font-mono text-[9px] uppercase tracking-widest text-hazard">
                      problem ▸ solution
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">{p.problem}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="border border-border bg-background/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-2 pt-3">
                    <a
                      href={p.github}
                      className="inline-flex items-center gap-1.5 border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-all hover:border-hazard hover:text-hazard"
                    >
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                    <a
                      href={p.demo}
                      className="inline-flex items-center gap-1.5 border border-hazard bg-hazard/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-hazard transition-all hover:bg-hazard hover:text-primary-foreground"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
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
