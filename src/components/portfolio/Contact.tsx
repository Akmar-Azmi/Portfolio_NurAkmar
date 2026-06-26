import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import {
  Mail,
  Linkedin,
  Phone,
  FileText,
} from "lucide-react";

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
    icon: Phone,
    label: "Phone",
    value: "+60 17-544 2183", // Change to your actual phone number
    href: "tel:+60175442183",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "View Resume",
    href: "/public/NurAkmar_resume.pdf", // Change filename if needed
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          code="// 07 — TRANSMISSION"
          title="Open Channel"
          subtitle="Let's connect. Feel free to reach out through any of the channels below."
        />

        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="dossier-corners relative overflow-hidden border border-border bg-surface/60 p-8 backdrop-blur-sm">
              <span className="corner-tl" />
              <span className="corner-tr" />
              <span className="corner-bl" />
              <span className="corner-br" />

              <div className="mb-8 font-mono text-[10px] uppercase tracking-widest text-hazard">
                ⟶ DIRECT CHANNELS
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {CHANNELS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={
                      c.href.startsWith("http") || c.href.endsWith(".pdf")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      c.href.startsWith("http") || c.href.endsWith(".pdf")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-4 border border-border bg-background/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-hazard hover:bg-background"
                  >
                    <div
                      className={`grid h-12 w-12 place-items-center border transition-all duration-300
                        ${
                          c.label === "Resume"
                            ? "border-hazard bg-hazard text-black"
                            : "border-hazard/40 bg-hazard/5 text-hazard group-hover:border-hazard"
                        }`}
                    >
                      <c.icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {c.label}
                      </div>

                      <div className="truncate font-mono text-sm text-foreground transition-colors group-hover:text-hazard">
                        {c.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 border-t border-border pt-4 text-center">

                <p className="mt-2 font-display text-lg font-bold uppercase tracking-wider text-hazard">
                  Thank You for visiting my portfolio!
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}