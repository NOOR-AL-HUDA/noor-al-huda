import { useEffect, useState } from "react";

type Section = { id: string; label: string };

export const SectionDots = ({ sections }: { sections: Section[] }) => {
  const [active, setActive] = useState<string>(sections[0]?.id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Page sections"
      className="fixed top-1/2 right-5 z-30 hidden -translate-y-1/2 lg:block rtl:right-auto rtl:left-5"
    >
      <ul className="flex flex-col items-end gap-3.5 rtl:items-start">
        {sections.map((s) => (
          <li key={s.id} className="group relative">
            <a
              href={`#${s.id}`}
              aria-label={s.label}
              className="block"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span
                className={`block h-2.5 rounded-full transition-all duration-300 ${
                  active === s.id
                    ? "w-6 bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)]"
                    : "w-2.5 bg-foreground/25 group-hover:bg-foreground/60"
                }`}
              />
            </a>
            <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full glass px-3 py-1 text-xs font-medium text-foreground opacity-0 shadow-soft transition-all duration-200 group-hover:-translate-x-1 group-hover:opacity-100 rtl:right-auto rtl:left-6 rtl:group-hover:translate-x-1">
              {s.label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};