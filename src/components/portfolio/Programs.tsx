import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Camera } from "lucide-react";

const PROGRAMS = [
  {
    name: "12th ie-RIICH",
    year: "2026",
    place: "UPSI",
    body: "International Exhibition of Research, Ideas & Innovation. Earned Gold for MediBond.",
    rotate: "-rotate-3",
  },
  {
    name: "UX Bootcamp",
    year: "2025",
    place: "K-Youth · UPSI",
    body: "User Experience Bootcamp under the K-Youth Development Programme Track B.",
    rotate: "rotate-2",
  },
  {
    name: "MDEC GOT",
    year: "2025",
    place: "MOHE × MDEC",
    body: "Digital Freelancing in Web Design & IT — Global Outsourcing Talent track.",
    rotate: "-rotate-2",
  },
  {
    name: "AI for MY Future",
    year: "2025",
    place: "Microsoft",
    body: "Microsoft's national AI literacy + applied AI programme for students.",
    rotate: "rotate-3",
  },
  {
    name: "T.U.B Spark",
    year: "2025",
    place: "Unity · UPSI",
    body: "Unity bootcamp covering interactive 3D and game-engine fundamentals.",
    rotate: "-rotate-1",
  },
  {
    name: "CCAIIC",
    year: "2024",
    place: "TARUMT",
    body: "CodeCraft AI Integration Challenge — collegiate AI-build hackathon.",
    rotate: "rotate-1",
  },
];

export function Programs() {
  return (
    <section id="programs" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="// 05 — FIELD WORK"
          title="Programs Joined"
          subtitle="Polaroids pinned to the evidence wall."
        />

        <div className="relative">
          {/* Pin board lines */}
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
            <div className="absolute left-1/4 top-0 h-full w-px bg-border" />
            <div className="absolute left-2/4 top-0 h-full w-px bg-border" />
            <div className="absolute left-3/4 top-0 h-full w-px bg-border" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <div className={`group mx-auto w-full max-w-[280px] ${p.rotate} transition-transform duration-500 hover:rotate-0 hover:scale-105`}>
                  <div className="relative bg-[#f5f1e6] p-3 pb-12 shadow-[0_18px_40px_-20px_oklch(0_0_0/0.9),0_2px_4px_oklch(0_0_0/0.3)]">
                    {/* Tape */}
                    <div className="absolute -top-3 left-1/2 h-5 w-20 -translate-x-1/2 -rotate-2 bg-hazard/40 backdrop-blur-sm" />

                    {/* "Photo" */}
                    <div className="relative aspect-square w-full overflow-hidden bg-[radial-gradient(circle_at_30%_30%,oklch(0.3_0_0),oklch(0.1_0_0))]">
                      <div className="grid-bg absolute inset-0 opacity-40" />
                      <div className="absolute inset-0 grid place-items-center">
                        <div className="flex flex-col items-center gap-2 text-center">
                          <Camera className="h-8 w-8 text-hazard/60" />
                          <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                            [ photo pending ]
                          </span>
                        </div>
                      </div>
                      <div className="absolute right-2 top-2 border border-hazard/60 bg-background/80 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-hazard">
                        {p.year}
                      </div>
                    </div>

                    {/* Caption — handwritten feel */}
                    <div className="absolute inset-x-3 bottom-2 text-center">
                      <div className="font-display text-base font-bold uppercase tracking-wider text-neutral-900">
                        {p.name}
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">
                        {p.place}
                      </div>
                    </div>
                  </div>

                  {/* Description below polaroid */}
                  <p className="mt-4 text-center font-mono text-xs leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
