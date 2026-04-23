export const SectionEyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
    <span className="h-px w-6 bg-primary" />
    {children}
  </span>
);