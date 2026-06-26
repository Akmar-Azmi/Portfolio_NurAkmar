import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-border">
      {/* Animated top hazard rail */}
      <div className="hazard-border h-0.5 w-full" />

      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="grid h-8 w-8 place-items-center border border-hazard text-hazard">AA</span>
            <span>
              <span className="text-hazard">//</span> AKMAR AZMI v2.6.0
            </span>
          </div>

          <div className="flex items-center gap-2">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/akmar-azmi217544183", label: "LinkedIn" },
              { icon: Mail, href: "mailto:nurakmarazmi@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-9 w-9 place-items-center border border-border text-muted-foreground transition-all hover:border-hazard hover:text-hazard hover:glow-hazard"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} · built in the dark
          </div>
        </div>
      </div>
    </footer>
  );
}
