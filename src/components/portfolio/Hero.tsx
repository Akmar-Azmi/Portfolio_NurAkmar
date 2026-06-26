import { Download, Mail, FolderOpen, Crosshair, Radio } from "lucide-react";
import { TypingRoles } from "./TypingRoles";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-4 pt-28 pb-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        {/* Left: Dossier text */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <div className="mb-4 inline-flex w-fit items-center gap-2 border border-hazard/40 bg-hazard/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-hazard">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hazard opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-hazard" />
              </span>
              CASE FILE — 217544 / ACTIVE
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              ⟶ MOST WANTED // PROFILE
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              NUR AKMAR 
              <br />
              <span className="text-glow-hazard text-hazard">NOOR AZMI</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 flex items-center gap-3 font-mono text-sm text-muted-foreground">
              <span className="h-px w-8 bg-hazard" />
              <span className="uppercase tracking-widest">CLASSIFICATION:</span>
              <TypingRoles />
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Final-year Software Engineering student building{" "}
              <span className="text-foreground">
                full-stack applications, workflow automation, and AI-powered solutions
              </span>
              . Currently developing an{" "}
              <span className="text-foreground">Agentic AI</span> workflow using{" "}
              <span className="text-foreground">n8n</span> and{" "}
              <span className="text-foreground">Azure AI</span> at{" "}
              <span className="text-foreground">Telekom Malaysia</span> to automate ETL
              monitoring and recovery.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden border-2 border-hazard bg-hazard px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground transition-all hover:glow-hazard-strong"
              >
                <FolderOpen className="h-4 w-4" />
                View Projects
                <span className="absolute inset-0 -translate-x-full bg-foreground/10 transition-transform duration-500 group-hover:translate-x-0" />
              </a>
              <a
                href="/NurAkmar_resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-border bg-surface/60 px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-foreground transition-all hover:border-hazard hover:text-hazard"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border bg-transparent px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground transition-all hover:border-hazard hover:text-hazard"
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </div>
          </Reveal>

          {/* Stat strip */}
          <Reveal delay={0.5}>
            <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden border border-border bg-border">
              {[
                { k: "EXPERIENCE", v: "FULL-STACK DEVELOPER INTERN" },
                { k: "FOCUS", v: "Agentic AI & Workflow Automation" },
                { k: "INTERN", v: "TELEKOM MALAYSIA" },
              ].map((s) => (
                <div key={s.k} className="concrete-tex p-4">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.k}
                  </div>
                  <div className="mt-1 font-display text-2xl font-bold text-hazard">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: Wanted card */}
        <div className="relative flex items-center justify-center">
          <Reveal delay={0.2}>
            <div className="dossier-corners concrete-tex relative w-full max-w-[130] overflow-hidden border border-hazard/30 p-5 shadow-2xl">
              <span className="corner-tl" />
              <span className="corner-tr" />
              <span className="corner-bl" />
              <span className="corner-br" />

              {/* Header bar */}
              <div className="hazard-stripes mb-4 h-2 w-full opacity-80" />
              <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span className="flex items-center gap-1.5"><Crosshair className="h-3 w-3 text-hazard" /> SUBJECT #NA-2026</span>
                <span className="flicker text-hazard">● REC</span>
              </div>

              {/* Photo placeholder */}
              <div className="relative aspect-4/5 w-full overflow-hidden border border-border bg-background">
                {/* Rotating search light */}
                <div className="pointer-events-none absolute left-1/2 top-0 h-[140%] w-[60%] -translate-x-1/2 search-light bg-linear-to-b from-hazard/30 via-hazard/10 to-transparent blur-xl" />

                {/* Portrait */}
                <img
                  src="src/components/images/profile.jpg"
                  alt="Nur Akmar"
                  className="absolute inset-0 h-full w-full object-cover grayscale brightness-90 contrast-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Crosshair */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 border border-hazard/60" />
                  <div className="absolute left-1/2 top-1/2 h-px w-20 -translate-x-1/2 -translate-y-1/2 bg-hazard/40" />
                  <div className="absolute left-1/2 top-1/2 h-20 w-px -translate-x-1/2 -translate-y-1/2 bg-hazard/40" />
                </div>

                {/* ID strip */}
                <div className="absolute inset-x-2 bottom-2 flex items-center justify-between border border-hazard/40 bg-background/80 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-hazard backdrop-blur">
                  <span>ID: 217544183</span>
                  <span>MY • PRK</span>
                </div>
              </div>

              {/* Info rows */}
              <dl className="mt-4 space-y-1.5 font-mono text-[11px]">
                {[
                  ["ALIAS", "Akmar"],
                  ["ROLE", "AI / Software Engineer"],
                  ["BASE", "Chemor, Perak — MY"],
                  ["STATUS", "Intern @ Telekom Malaysia"],
                  ["MISSION", "Builds Agentic AI"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-3 border-b border-border/60 pb-1">
                    <dt className="uppercase tracking-widest text-muted-foreground">{k}</dt>
                    <dd className="text-right text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                <span className="flex items-center gap-1.5"><Radio className="h-3 w-3 text-hazard" /> SIGNAL LOCKED</span>
                <span>v2.6.0</span>
              </div>
            </div>
          </Reveal>

          {/* Radar rings */}
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40">
            <div className="absolute inset-0 rounded-full border border-hazard/30" />
            <div className="absolute inset-4 rounded-full border border-hazard/20" />
            <div className="absolute inset-8 rounded-full border border-hazard/10" />
            <div className="absolute left-1/2 top-1/2 h-full w-px origin-top -translate-x-1/2 bg-linear-to-b from-hazard via-hazard/40 to-transparent radar-sweep" />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-0.5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[12px] uppercase tracking-widest text-muted-foreground md:flex">
        <span>scroll Subject</span>
        <div className="h-8 w-px bg-linear-to-b from-hazard to-transparent" />
      </div>
    </section>
  );
}
