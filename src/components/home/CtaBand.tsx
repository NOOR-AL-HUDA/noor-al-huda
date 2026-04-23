import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { SectionEyebrow } from "../common/SectionEyebrow";

export const CtaBand = () => {
  const { t } = useTranslation();
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-primary py-24 text-primary-foreground sm:py-32">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-secondary/40 blur-3xl" />
      </div>
      <div className="container-page relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionEyebrow><span className="text-primary-foreground/80">{t("cta_band.eyebrow")}</span></SectionEyebrow>
            <h2 className="heading-display mt-4 text-4xl text-primary-foreground sm:text-5xl text-balance">{t("cta_band.title")}</h2>
            <p className="mt-4 max-w-xl text-base text-primary-foreground/80">{t("cta_band.body")}</p>
          </div>
          <div className="lg:justify-self-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-4 text-sm font-semibold text-secondary-foreground shadow-elev transition-all hover:bg-[hsl(155_43%_14%)]"
            >
              {t("cta_band.cta")}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};