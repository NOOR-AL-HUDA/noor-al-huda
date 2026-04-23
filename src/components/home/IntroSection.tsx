import { useTranslation } from "react-i18next";
import { SectionEyebrow } from "../common/SectionEyebrow";

export const IntroSection = () => {
  const { t } = useTranslation();
  const stats = [
    { v: "8+", l: t("intro.stat_years") },
    { v: "50+", l: t("intro.stat_partners") },
    { v: "120+", l: t("intro.stat_skus") },
    { v: "12", l: t("intro.stat_countries") },
  ];
  return (
    <section id="intro" className="relative bg-background py-24 sm:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <SectionEyebrow>{t("intro.eyebrow")}</SectionEyebrow>
            <h2 className="heading-display mt-4 text-4xl text-foreground sm:text-5xl text-balance">
              {t("intro.title")}
            </h2>
          </div>
          <div>
            <p className="text-lg text-foreground/75 text-pretty">{t("intro.body")}</p>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.l} className="border-t border-foreground/10 pt-4">
                  <div className="font-display text-3xl font-medium text-secondary sm:text-4xl">{s.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};