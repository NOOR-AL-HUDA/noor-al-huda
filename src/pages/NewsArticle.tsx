import { Link, useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { NEWS } from "@/data/news";
import { Seo } from "@/components/common/Seo";

const NewsArticle = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const post = NEWS.find((n) => n.slug === slug);
  if (!post) return <Navigate to="/news" replace />;
  const fmt = (d: string) => new Date(d).toLocaleDateString(i18n.language === "ar" ? "ar-AE" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
  return (
    <article className="bg-background pb-32 pt-40 sm:pt-48">
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/news/${post.slug}`}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": post.title,
          "description": post.excerpt,
          "datePublished": post.date,
          "dateModified": post.date,
          "author": { "@type": "Organization", "name": "Noor Al Huda Trading", "url": "https://nooralhudatrading.com/" },
          "publisher": {
            "@type": "Organization",
            "name": "Noor Al Huda Trading LLC",
            "logo": { "@type": "ImageObject", "url": "https://nooralhudatrading.com/logo.png" },
          },
          "mainEntityOfPage": `https://nooralhudatrading.com/news/${post.slug}`,
          "articleSection": post.tag,
          "wordCount": post.body.join(" ").split(/\s+/).length,
        }}
      />
      <div className="container-page max-w-3xl">
        <Link to="/news" className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-glow">
          <ArrowLeft className="h-4 w-4 rtl:rotate-180" /> {t("news_page.back")}
        </Link>
        <div className="mt-8 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">{post.tag}</span>
          <span>{fmt(post.date)}</span>
          <span>· {post.minutes} {t("news_page.minutes")}</span>
        </div>
        <h1 className="heading-display mt-4 text-4xl text-foreground sm:text-5xl text-balance">{post.title}</h1>
        <p className="mt-5 text-lg text-foreground/70">{post.excerpt}</p>
        <div className="prose mt-10 max-w-none space-y-5 text-base leading-relaxed text-foreground/80">
          {post.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="mt-12 border-t border-foreground/10 pt-6 text-sm text-muted-foreground">— {post.author}</div>
      </div>
    </article>
  );
};
export default NewsArticle;