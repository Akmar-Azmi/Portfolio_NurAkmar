import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiPython,
  SiDart,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiLaravel,
  SiHtml5,
  SiCss,
  SiSupabase,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGithub,
  SiGit,
  SiDocker,
  SiJira,
  SiFigma,
  SiGooglecloud,
} from "react-icons/si";

import {
  Bot,
  BrainCircuit,
  Workflow,
  Database,
  Puzzle,
  Sparkles,
  Cloud,
} from "lucide-react";

const GROUPS = [
  {
    title: "Programming",
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "PHP", icon: SiPhp },
      { name: "Python", icon: SiPython },
      { name: "Dart", icon: SiDart },
    ],
  },

  {
    title: "Web & Mobile",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Laravel", icon: SiLaravel },
      { name: "Flutter", icon: SiFlutter },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },

  {
    title: "AI & Automation",
    items: [
      { name: "Agentic AI", icon: Bot },
      { name: "n8n", icon: Workflow },
      { name: "Azure OpenAI", icon: Cloud },
      { name: "Gemini API", icon: Sparkles },
      { name: "RAG", icon: Database },
      { name: "Prompt Engineering", icon: Sparkles },
    ],
  },

  {
    title: "Database",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Supabase", icon: SiSupabase },
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },

  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Jira", icon: SiJira },
      { name: "Figma", icon: SiFigma },
      { name: "Google Cloud", icon: SiGooglecloud },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="// 04 — SKILLS"
          title="Tech Skills"
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
                <div className="grid grid-cols-3 gap-3">
                  {g.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.name}
                        className="group flex flex-col items-center justify-center rounded border border-border bg-background/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-hazard hover:bg-background/70"
                      >
                        <Icon className="mb-2 h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-center font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
