import { useEffect, useState } from "react";

const ROLES = [
  "AI Engineer",
  "Software Engineer",
  "Flutter Developer",
  "Automation Builder",
  "Data Pipeline Developer",
];

export function TypingRoles() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[i];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((p) => (p + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, i]);

  return (
    <span className="font-mono text-hazard">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[0.5] translate-y-[0.5] bg-hazard caret-blink" />
    </span>
  );
}
