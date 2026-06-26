import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Award } from "lucide-react";

const CERTS = [
  { name: "Start Writing Prompts like a Pro", org: "Google", year: "2026" },
  { name: "User Experience Bootcamp", org: "K-Youth · UPSI", year: "2025" },
  { name: "Digital Freelancing in Web Design & IT", org: "MOHE-MDEC GOT Malaysia", year: "2025" },
  { name: "Python Programming Fundamentals", org: "Data Science Association", year: "2025" },
  { name: "AI for MY Future", org: "Microsoft", year: "2025" },
  { name: "AI for Beginners", org: "RDC Tanjong Malim", year: "2025" },
  { name: "T.U.B Spark Unity Bootcamp", org: "UPSI", year: "2025" },
  { name: "CodeCraft AI Integration Challenge", org: "TARUMT", year: "2024" },
];

export function Certificates() {
  return (
    <section id="certificates" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="// 06 — CREDENTIALS"
          title="Certifications"
          subtitle="Verified training records and exhibition awards."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.04}>
              <div className="group relative h-full border border-border bg-surface/40 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:rotate-[0.5deg] hover:scale-[1.02] hover:border-hazard hover:bg-surface hover:glow-hazard">
                <div className="mb-3 flex items-center justify-between">
                  <div className="grid h-9 w-9 place-items-center border border-hazard/40 bg-hazard/5 text-hazard transition-all group-hover:border-hazard">
                    <Award className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-hazard">
                    {c.year}
                  </span>
                </div>
                <h3 className="mb-1 font-display text-sm font-bold uppercase leading-tight tracking-wider text-foreground">
                  {c.name}
                </h3>
                <p className="font-mono text-[11px] text-muted-foreground">{c.org}</p>

                <div className="mt-4 flex items-center justify-between border-t border-border pt-3 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/70">
                  <span>STAMPED</span>
                  <span className="text-hazard/70">✓ VERIFIED</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
