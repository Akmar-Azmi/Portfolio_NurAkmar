import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  code: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ code, title, subtitle }: SectionHeaderProps) {
  return (
    <Reveal>
      <div className="mb-12 flex flex-col gap-3">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-hazard">
          <span className="h-px w-8 bg-hazard" />
          <span>{code}</span>
        </div>
        <h2 className="font-display text-4xl font-bold uppercase tracking-wider text-foreground md:text-6xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">{subtitle}</p>
        ) : null}
      </div>
    </Reveal>
  );
}
