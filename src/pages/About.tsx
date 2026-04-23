import { useTranslation } from "react-i18next";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { Seo } from "@/components/common/Seo";

const About = () => {
  const { t } = useTranslation();
  const values = t("about_page.values", { returnObjects: true }) as { t: string; d: string }[];
  return (
    <>
      <Seo
        title="About Noor Al Huda Trading — UAE FMCG Specialists"
        description="A young, dynamic UAE-based FMCG trading company. Premium rice, spices, grains, flour, pulses and oils for hospitality, healthcare and retail clients worldwide."
        path="/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Noor Al Huda Trading",
          "url": "https://nooralhudatrading.com/about",
        }}
      />
      <section className="bg-secondary pb-20 pt-40 text-secondary-foreground sm:pb-28 sm:pt-48">
        <div className="container-page">
          <SectionEyebrow><span className="text-primary-glow">{t("about_page.eyebrow")}</span></SectionEyebrow>
          <h1 className="heading-display mt-4 max-w-4xl text-5xl text-secondary-foreground sm:text-6xl text-balance">{t("about_page.title")}</h1>
          <p className="mt-6 max-w-2xl text-lg text-secondary-foreground/75">{t("about_page.lead")}</p>
        </div>
      </section>
      <section className="bg-background py-24 sm:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-2">
          <div className="space-y-5 text-base text-foreground/75 sm:text-lg">
            <p>{t("about_page.p1")}</p>
            <p>{t("about_page.p2")}</p>
            <p>{t("about_page.p3")}</p>
          </div>
          <div>
            <h2 className="heading-display text-3xl text-foreground">{t("about_page.values_title")}</h2>
            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-foreground/10 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.t} className="bg-background p-6">
                  <h3 className="font-display text-lg font-medium text-foreground">{v.t}</h3>
                  <p className="mt-2 text-sm text-foreground/65">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;