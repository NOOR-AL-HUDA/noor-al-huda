import { useTranslation } from "react-i18next";
import { Compass, Leaf, Package, Truck } from "lucide-react";
import { SectionEyebrow } from "../common/SectionEyebrow";

const ICONS = [Compass, Leaf, Package, Truck];

export const WhySection = () => {
  const { t } = useTranslation();
  const items = t("why.items", { returnObjects: true }) as { title: string; body: string }[];
  return (
    <section id="why" className="relative bg-background py-24 sm:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <SectionEyebrow>{t("why.eyebrow")}</SectionEyebrow>
          <h2 className="heading-display mt-4 text-4xl text-foreground sm:text-5xl text-balance">{t("why.title")}</h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div key={it.title} className="group bg-background p-7 transition-colors hover:bg-muted/40">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:-translate-y-1">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-5 text-xl font-medium text-foreground">{it.title}</h3>
                <p className="mt-2 text-sm text-foreground/65">{it.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};