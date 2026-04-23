import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "../common/SectionEyebrow";
import { CATEGORIES } from "@/data/categories";

export const CategoriesPreview = () => {
  const { t } = useTranslation();
  const featured = CATEGORIES.slice(0, 6);
  return (
    <section id="categories" className="relative bg-secondary py-24 text-secondary-foreground sm:py-32">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <SectionEyebrow><span className="text-primary-glow">{t("categories_block.eyebrow")}</span></SectionEyebrow>
            <h2 className="heading-display mt-4 text-4xl text-secondary-foreground sm:text-5xl text-balance">
              {t("categories_block.title")}
            </h2>
            <p className="mt-5 text-base text-secondary-foreground/70 sm:text-lg">{t("categories_block.subtitle")}</p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full border border-secondary-foreground/20 px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary-foreground/5"
          >
            {t("categories_block.view_all")}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c, i) => (
            <Link
              key={c.slug}
              to={`/products?cat=${c.slug}`}
              className="group relative overflow-hidden rounded-3xl bg-[hsl(0_0%_8%)] aspect-[4/5] sm:aspect-[5/6]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_4%/0.95)] via-[hsl(0_0%_4%/0.35)] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                {c.flagship && (
                  <span className="pill mb-3 bg-primary/90 text-primary-foreground">{t("products_page.rice_flag")}</span>
                )}
                <h3 className="heading-display text-2xl text-white sm:text-3xl">{c.name}</h3>
                <p className="mt-1.5 text-sm text-white/70">{c.tagline}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary-glow">
                  {t("common.explore")}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};