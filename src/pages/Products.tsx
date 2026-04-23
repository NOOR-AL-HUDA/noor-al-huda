import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { Seo } from "@/components/common/Seo";

const Products = () => {
  const { t } = useTranslation();
  const [params, setParams] = useSearchParams();
  const initial = params.get("cat");
  const [open, setOpen] = useState<string | null>(initial);

  useEffect(() => {
    if (open) params.set("cat", open); else params.delete("cat");
    setParams(params, { replace: true });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      <Seo
        title="Products & Catalogue — Rice, Spices, Pulses, Oils | Noor Al Huda Trading"
        description="Browse our full FMCG catalogue: basmati and non-basmati rice, whole and ground spices, pulses, lentils, edible oils, flour, dry fruits and more. Bulk and private-label packaging available."
        path="/products"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Noor Al Huda Trading — Product Categories",
          "itemListElement": CATEGORIES.map((c, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": c.name,
            "url": `https://nooralhudatrading.com/products?cat=${c.slug}`,
            "description": c.tagline,
          })),
        }}
      />
      <section className="bg-background pb-12 pt-40 sm:pt-48">
        <div className="container-page">
          <SectionEyebrow>{t("products_page.eyebrow")}</SectionEyebrow>
          <h1 className="heading-display mt-4 max-w-3xl text-5xl text-foreground sm:text-6xl text-balance">{t("products_page.title")}</h1>
          <p className="mt-5 max-w-2xl text-base text-foreground/70 sm:text-lg">{t("products_page.subtitle")}</p>
        </div>
      </section>

      <section className="bg-background pb-32">
        <div className="container-page">
          <LayoutGroup>
            <AnimatePresence mode="popLayout">
              {open ? (
                <ExpandedCard
                  key={open}
                  slug={open}
                  onClose={() => setOpen(null)}
                />
              ) : (
                <motion.div
                  key="grid"
                  className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {CATEGORIES.map((c) => (
                    <motion.button
                      layout
                      layoutId={`card-${c.slug}`}
                      key={c.slug}
                      onClick={() => setOpen(c.slug)}
                      className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-[hsl(0_0%_8%)] text-left"
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 260, damping: 24 }}
                    >
                      <motion.img
                        layoutId={`img-${c.slug}`}
                        src={c.image}
                        alt={c.name}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_4%/0.95)] via-[hsl(0_0%_4%/0.35)] to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        {c.flagship && <span className="pill mb-3 bg-primary/90 text-primary-foreground">{t("products_page.rice_flag")}</span>}
                        <h3 className="heading-display text-2xl text-white sm:text-3xl">{c.name}</h3>
                        <p className="mt-1.5 text-sm text-white/70">{c.tagline}</p>
                        <div className="mt-3 text-xs text-white/60">
                          {c.subcategories.length} {t("products_page.subcats")}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </LayoutGroup>
        </div>
      </section>
    </>
  );
};

const ExpandedCard = ({ slug, onClose }: { slug: string; onClose: () => void }) => {
  const { t } = useTranslation();
  const c = CATEGORIES.find((x) => x.slug === slug);
  if (!c) return null;
  return (
    <motion.div layout layoutId={`card-${c.slug}`} className="overflow-hidden rounded-3xl bg-secondary text-secondary-foreground shadow-elev">
      <div className="grid lg:grid-cols-[1.1fr_1.4fr]">
        <motion.div layoutId={`img-${c.slug}`} className="relative aspect-[4/3] lg:aspect-auto">
          <img src={c.image} alt={c.name} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent lg:bg-gradient-to-r" />
        </motion.div>
        <div className="relative p-8 sm:p-12">
          <button
            onClick={onClose}
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-secondary-foreground/10 text-secondary-foreground transition-colors hover:bg-secondary-foreground/20 rtl:right-auto rtl:left-5"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
          {c.flagship && <span className="pill bg-primary text-primary-foreground">{t("products_page.rice_flag")}</span>}
          <h2 className="heading-display mt-4 text-4xl text-secondary-foreground sm:text-5xl">{c.name}</h2>
          <p className="mt-3 max-w-md text-secondary-foreground/75">{c.tagline}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {c.subcategories.map((sc, i) => (
              <motion.div
                key={sc.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-secondary-foreground/10 bg-secondary-foreground/[0.04] p-5"
              >
                <h3 className="font-display text-lg font-medium text-secondary-foreground">{sc.name}</h3>
                <ul className="mt-3 space-y-1.5">
                  {sc.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-secondary-foreground/75">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary-glow" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary-glow"
          >
            {t("products_page.enquire_cta")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Products;