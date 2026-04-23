import { useTranslation } from "react-i18next";
import { HeroSlider } from "@/components/home/HeroSlider";
import { IntroSection } from "@/components/home/IntroSection";
import { CategoriesPreview } from "@/components/home/CategoriesPreview";
import { WhySection } from "@/components/home/WhySection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { NewsTeaser } from "@/components/home/NewsTeaser";
import { CtaBand } from "@/components/home/CtaBand";
import { SectionDots } from "@/components/layout/SectionDots";
import { Seo } from "@/components/common/Seo";
import { SITE } from "@/data/site";

const Index = () => {
  const { t } = useTranslation();
  const sections = [
    { id: "hero", label: t("sections.hero") },
    { id: "intro", label: t("sections.intro") },
    { id: "categories", label: t("sections.categories") },
    { id: "why", label: t("sections.why") },
    { id: "partners", label: t("sections.partners") },
    { id: "news", label: t("sections.news") },
    { id: "cta", label: t("sections.cta") },
  ];
  return (
    <>
      <Seo
        title="Noor Al Huda Trading — Premium FMCG Trader, UAE"
        description="UAE-based FMCG trading company sourcing premium rice, spices, grains, pulses, flour and oils for hospitality, retail and distributors worldwide. Established 2017."
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": SITE.name,
            "url": "https://nooralhudatrading.com/",
            "inLanguage": ["en", "ar"],
            "publisher": { "@type": "Organization", "name": SITE.legalName },
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": SITE.legalName,
            "image": "https://nooralhudatrading.com/og-cover.jpg",
            "url": "https://nooralhudatrading.com/",
            "telephone": SITE.phoneE164,
            "email": SITE.email,
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Warehouse #1, Warsan 3",
              "addressLocality": "Dubai",
              "addressCountry": "AE",
            },
            "openingHoursSpecification": [{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
              "opens": "09:00",
              "closes": "18:00",
            }],
          },
        ]}
      />
      <SectionDots sections={sections} />
      <HeroSlider />
      <IntroSection />
      <CategoriesPreview />
      <WhySection />
      <PartnersSection />
      <NewsTeaser />
      <CtaBand />
    </>
  );
};

export default Index;
