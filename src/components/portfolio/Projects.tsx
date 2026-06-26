import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Github, ExternalLink, ImageIcon } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import medibond from "../Images/medibond.png";
import agentic from "../Images/Agentic.png";
import mySanding from "../Images/mySanding.png";
import recipedia from "../Images/recipedia.jpg";
const PROJECTS = [
  {
    code: "P-01",
    name: "MediBond: A Digital Assistant for Elderly Medication Support With Caregiver Integration",
    image: medibond,
    tag: "FYP • Gold Award • ie-RIICH 2026",
    description:
      "Award-winning Final Year Project (FYP) developed to improve medication adherence among elderly users through caregiver integration. Features role-based authentication, real-time medication reminders, push notifications, and remote caregiver monitoring.",
    problem:
      "Elderly users often miss medication doses while caregivers have limited visibility into medication adherence. MediBond bridges this gap with intelligent reminders, adherence tracking, and remote monitoring.",
    stack: [
      "React Native (Expo)",
      "Supabase",
      "Firebase",
      "PostgreSQL",
      "Push Notifications",
    ],
  },
  {
    code: "P-02",
    name: "Night Agent DataOps (NADO)",
      image: agentic,
    tag: "Telekom Malaysia · Internship",
    description:
      "Agentic AI workflow on n8n that monitors ETL pipelines, analyses execution logs with Azure OpenAI, and auto-reruns failed jobs. Paired with a Next.js dashboard for KPIs, history and AI-generated insights.",
    problem:
      "DataOps engineers previously handled ETL failures manually. I developed an Agentic AI workflow that analyses execution logs, identifies potential causes, and provides recovery recommendations to reduce manual intervention. **Automatic rerun of failed ETL jobs is currently being implemented.",
    stack: ["n8n", "Azure OpenAI", "Next.js", "REST APIs"],
  },
  {
    code: "P-03",
    name: "MySanding Bridal",
    image: mySanding,
    tag: "Real Client · Agile SCRUM",
    description:
      "Booking and service-management website for a bridal studio, built in an Agile SCRUM cadence with sprint planning, reviews and Jira-tracked defects.",
    problem:
      "Manual WhatsApp bookings caused double-bookings — the platform centralises packages, availability and customer requests.",
    stack: ["Laravel", "Supabase", "Cloudinary", "Jira"],

  },
  {
    code: "P-04",
    name: "Recipedia",
    image: recipedia,
    tag: "Mobile · Community Recipes",
    description:
      "Cross-platform recipe app with CRUD for recipes, favourites, comments and likes — a small social layer for home cooks.",
    problem:
      "Cluttered recipe apps with poor UX — Recipedia keeps it focused: cook, save, share.",
    stack: ["Flutter", "Dart", "Firebase", "Cloudinary"],

  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="// 03 — CASE FILES"
          title="Projects"
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
                  <Dialog.Root>
  <Dialog.Trigger asChild>
    <img
      src={p.image}
      alt={p.name}
      className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 cursor-zoom-in object-contain transition-transform duration-300 hover:scale-105"
    />
  </Dialog.Trigger>

  <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />

    <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-6xl -translate-x-1/2 -translate-y-1/2 outline-none">

      <img
        src={p.image}
        alt={p.name}
        className="max-h-[90vh] w-full object-contain rounded-lg"
      />

      <Dialog.Close className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white hover:bg-black">
        <X className="h-5 w-5" />
      </Dialog.Close>

    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
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
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
