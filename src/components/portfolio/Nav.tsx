import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-sm border px-4 py-3 backdrop-blur-xl transition-all duration-500 ${
            scrolled
              ? "border-border bg-background/70 shadow-2xl"
              : "border-transparent bg-background/20"
          }`}
        >
          <a href="#home" className="group flex items-center gap-2 font-display font-bold uppercase tracking-widest">
            <span className="grid h-8 w-8 place-items-center border border-hazard text-hazard">NA</span>
            <span className="hidden text-sm md:inline">
              <span className="text-hazard">//</span> NUR_AKMAR
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="text-hazard opacity-0 transition-opacity group-hover:opacity-100">[ </span>
                {item.label}
                <span className="text-hazard opacity-0 transition-opacity group-hover:opacity-100"> ]</span>
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden border border-hazard px-4 py-2 font-mono text-xs uppercase tracking-widest text-hazard transition-all hover:bg-hazard hover:text-primary-foreground hover:glow-hazard md:inline-block"
          >
            Recruit Me
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center border border-border text-foreground md:hidden"
          >
            <div className="flex flex-col gap-1">
              <span className="h-px w-4 bg-current" />
              <span className="h-px w-4 bg-current" />
              <span className="h-px w-4 bg-current" />
            </div>
          </button>
        </div>

        {open ? (
          <div className="mt-2 rounded-sm border border-border bg-background/95 p-4 backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-l-2 border-transparent px-3 py-2 font-mono text-sm uppercase tracking-widest text-muted-foreground hover:border-hazard hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
