import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";

const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: "nurakmarazmi@gmail.com",
    href: "mailto:nurakmarazmi@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "akmar-azmi",
    href: "https://www.linkedin.com/in/akmar-azmi217544183",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "// TODO: add handle",
    href: "#",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chemor, Perak — MY",
    href: "#",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="// 07 — TRANSMISSION"
          title="Open Channel"
          subtitle="Send a signal. Encrypted by default — typically replies within 24h."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Channels + radar */}
          <Reveal>
            <div className="dossier-corners relative h-full overflow-hidden border border-border bg-surface/60 p-6 backdrop-blur-sm">
              <span className="corner-tl" />
              <span className="corner-tr" />
              <span className="corner-bl" />
              <span className="corner-br" />

              <div className="mb-5 font-mono text-[10px] uppercase tracking-widest text-hazard">
                ⟶ DIRECT CHANNELS
              </div>

              <ul className="space-y-3">
                {CHANNELS.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      className="group flex items-center gap-4 border border-border bg-background/40 p-3 transition-all hover:border-hazard hover:bg-background"
                    >
                      <div className="grid h-10 w-10 place-items-center border border-hazard/40 bg-hazard/5 text-hazard transition-all group-hover:border-hazard group-hover:glow-hazard">
                        <c.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          {c.label}
                        </div>
                        <div className="truncate font-mono text-sm text-foreground">{c.value}</div>
                      </div>
                      <span className="font-mono text-xs text-hazard opacity-0 transition-opacity group-hover:opacity-100">
                        ⟶
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Radar */}
              <div className="relative mx-auto mt-8 aspect-square w-full max-w-[260px]">
                <div className="absolute inset-0 rounded-full border border-hazard/30" />
                <div className="absolute inset-[12%] rounded-full border border-hazard/20" />
                <div className="absolute inset-[28%] rounded-full border border-hazard/15" />
                <div className="absolute inset-[44%] rounded-full border border-hazard/10" />
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-hazard/20" />
                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-hazard/20" />
                <div
                  className="absolute left-1/2 top-1/2 h-1/2 w-px origin-top -translate-x-1/2 radar-sweep"
                  style={{ background: "linear-gradient(to bottom, var(--hazard), transparent)" }}
                />
                <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-hazard glow-hazard" />
              </div>
              <div className="mt-2 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                radar online · awaiting ping
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="dossier-corners relative grid h-full gap-4 border border-border bg-surface/60 p-6 backdrop-blur-sm"
            >
              <span className="corner-tl" />
              <span className="corner-tr" />
              <span className="corner-bl" />
              <span className="corner-br" />

              <div className="font-mono text-[10px] uppercase tracking-widest text-hazard">
                ⟶ ENCRYPTED MESSAGE
              </div>

              <div className="grid gap-1.5">
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Callsign
                </label>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="border border-border bg-background/40 px-3 py-2.5 font-mono text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-hazard focus:bg-background"
                />
              </div>

              <div className="grid gap-1.5">
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Frequency (email)
                </label>
                <input
                  required
                  type="email"
                  placeholder="you@domain.com"
                  className="border border-border bg-background/40 px-3 py-2.5 font-mono text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-hazard focus:bg-background"
                />
              </div>

              <div className="grid gap-1.5">
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Transmission
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="State your business..."
                  className="resize-none border border-border bg-background/40 px-3 py-2.5 font-mono text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-hazard focus:bg-background"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="group inline-flex items-center justify-center gap-2 border-2 border-hazard bg-hazard px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground transition-all hover:glow-hazard-strong disabled:opacity-60"
              >
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                {sent ? "Signal Sent ✓" : "Transmit Signal"}
              </button>

              <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/60">
                // demo form — wire to backend or email service to ship
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
