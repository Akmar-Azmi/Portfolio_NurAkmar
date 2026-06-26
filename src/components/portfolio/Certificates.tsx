import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Award, FileText, ExternalLink } from "lucide-react";

const CERTS = [
  { name: "Start Writing Prompts like a Pro", pdf: "./prompt.pdf", org: "Google | Coursera", year: "2026" },
  { name: "The 12th International Exhibition of Research, Ideas, & Innovation on Creativity and Humanizing (12th ie-RIICH 2026)", pdf: "public/0008_NUR_AKMAR_BINTI_NOOR_AZMI_gold.pdf", org: "Gold Award | UPSI", year: "2026" },
  { name: "User Experience Bootcamp",  pdf: "./Nur Akmar Binti Noor Azmi _ User Experience Bootcamp.pdf", org: "K-Youth · UPSI", year: "2025" },
  { name: "Digital Freelancing in Web Design & IT", pdf: "./HVG006453_NUR_AKMAR_BINTI_NOOR_AZMI.pdf", org: "MOHE-MDEC GOT Malaysia", year: "2025" },
  { name: "Python Programming Fundamentals", pdf: "./Python Programming Fundamentalst.pdf", org: "Data Science Association", year: "2025" },
  { name: "AI for MY Future", pdf: "./AI For MY Future.pdf", org: "Microsoft", year: "2025" },
  { name: "T.U.B Spark Unity Bootcamp", pdf: "./T.U.B Spark Unity Bootcamp.pdf", org: "UPSI", year: "2025" },
  { name: "CodeCraft AI Integration Challenge", pdf: "./CodeCraft AI Integration Challenge (CCAIIC).pdf", org: "TARUMT", year: "2024" },
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
                <a
                  href={c.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 border border-hazard bg-hazard/10 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-hazard transition-all hover:bg-hazard hover:text-primary-foreground"
                >
                  <FileText className="h-4 w-4" />
                  View Certificate
                  <ExternalLink className="h-3 w-3" />
                </a>
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
