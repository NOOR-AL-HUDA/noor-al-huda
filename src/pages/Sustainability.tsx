import { useTranslation } from "react-i18next";
import { Leaf, Package, Users, Wind } from "lucide-react";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { Seo } from "@/components/common/Seo";

const ICONS = [Leaf, Package, Users, Wind];

const Sustainability = () => {
  const { t } = useTranslation();
  const pillars = t("sustainability_page.pillars", { returnObjects: true }) as { t: string; d: string }[];
  return (
    <>
      <Seo
        title="Sustainability — Responsible Sourcing | Noor Al Huda Trading"
        description="Responsible sourcing, better packaging, fair employment and lower-emission logistics. How Noor Al Huda Trading approaches sustainability across its FMCG supply chain."
        path="/sustainability"
      />
      <section className="relative overflow-hidden bg-secondary pb-20 pt-40 text-secondary-foreground sm:pb-28 sm:pt-48">
        <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl" />
        <div className="container-page relative">
          <SectionEyebrow><span className="text-primary-glow">{t("sustainability_page.eyebrow")}</span></SectionEyebrow>
          <h1 className="heading-display mt-4 max-w-4xl text-5xl text-secondary-foreground sm:text-6xl text-balance">{t("sustainability_page.title")}</h1>
          <p className="mt-6 max-w-2xl text-lg text-secondary-foreground/75">{t("sustainability_page.lead")}</p>
        </div>
      </section>
      <section className="bg-background py-24 sm:py-32">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:gap-8">
          {pillars.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={p.t}
                className="rounded-3xl border border-foreground/10 bg-surface p-8 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elev sm:p-10"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="font-display mt-6 text-2xl font-medium text-foreground">{p.t}</h2>
                <p className="mt-3 text-foreground/70 leading-relaxed">{p.d}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Sustainability;