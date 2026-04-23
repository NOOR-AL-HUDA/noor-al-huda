import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { NEWS } from "@/data/news";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { Seo } from "@/components/common/Seo";

const News = () => {
  const { t, i18n } = useTranslation();
  const fmt = (d: string) => new Date(d).toLocaleDateString(i18n.language === "ar" ? "ar-AE" : "en-GB", { day: "numeric", month: "short", year: "numeric" });
  return (
    <>
      <Seo
        title="News & Events — Noor Al Huda Trading"
        description="Market updates, harvest reports, partnership announcements and behind-the-scenes from Noor Al Huda Trading — the UAE's premium FMCG trader."
        path="/news"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Noor Al Huda Trading — Newsroom",
          "url": "https://nooralhudatrading.com/news",
          "blogPost": NEWS.map((n) => ({
            "@type": "BlogPosting",
            "headline": n.title,
            "datePublished": n.date,
            "author": { "@type": "Organization", "name": "Noor Al Huda Trading" },
            "url": `https://nooralhudatrading.com/news/${n.slug}`,
          })),
        }}
      />
      <section className="bg-background pb-12 pt-40 sm:pt-48">
        <div className="container-page">
          <SectionEyebrow>{t("news_page.eyebrow")}</SectionEyebrow>
          <h1 className="heading-display mt-4 max-w-3xl text-5xl text-foreground sm:text-6xl text-balance">{t("news_page.title")}</h1>
          <p className="mt-5 max-w-2xl text-base text-foreground/70 sm:text-lg">{t("news_page.subtitle")}</p>
        </div>
      </section>
      <section className="bg-background pb-32">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          {NEWS.map((n) => (
            <Link key={n.slug} to={`/news/${n.slug}`} className="group flex flex-col rounded-3xl border border-foreground/10 bg-surface p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elev">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">{n.tag}</span>
                <span>{fmt(n.date)}</span>
                <span>· {n.minutes} {t("news_page.minutes")}</span>
              </div>
              <h2 className="font-display mt-4 text-2xl font-medium text-foreground text-balance">{n.title}</h2>
              <p className="mt-3 flex-1 text-sm text-foreground/70 text-pretty">{n.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                {t("news_page.read")} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
export default News;