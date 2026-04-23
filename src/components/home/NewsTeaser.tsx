import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "../common/SectionEyebrow";
import { NEWS } from "@/data/news";

export const NewsTeaser = () => {
  const { t, i18n } = useTranslation();
  const items = NEWS.slice(0, 3);
  const fmt = (d: string) => new Date(d).toLocaleDateString(i18n.language === "ar" ? "ar-AE" : "en-GB", { day: "numeric", month: "short", year: "numeric" });
  return (
    <section id="news" className="relative bg-background py-24 sm:py-32">
      <div className="container-page">
        <div className="flex items-end justify-between gap-6">
          <div>
            <SectionEyebrow>{t("news_block.eyebrow")}</SectionEyebrow>
            <h2 className="heading-display mt-4 text-4xl text-foreground sm:text-5xl">{t("news_block.title")}</h2>
          </div>
          <Link to="/news" className="hidden text-sm font-medium text-primary hover:text-primary-glow sm:inline-flex sm:items-center sm:gap-1.5">
            {t("news_block.view_all")} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((n) => (
            <Link
              key={n.slug}
              to={`/news/${n.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-foreground/10 bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elev"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">{n.tag}</span>
                <span>{fmt(n.date)}</span>
              </div>
              <h3 className="font-display mt-4 text-xl font-medium text-foreground text-balance">{n.title}</h3>
              <p className="mt-3 flex-1 text-sm text-foreground/65 text-pretty">{n.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                {t("news_page.read")}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};