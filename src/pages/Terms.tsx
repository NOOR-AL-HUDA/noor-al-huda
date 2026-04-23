import { useTranslation } from "react-i18next";
import { Seo } from "@/components/common/Seo";

const Terms = () => {
  const { t } = useTranslation();
  return (
    <article className="bg-background pb-32 pt-40 sm:pt-48">
      <Seo
        title="Terms & Conditions — Noor Al Huda Trading"
        description="Terms governing the use of nooralhudatrading.com and the trading services provided by Noor Al Huda Trading LLC."
        path="/terms"
      />
      <div className="container-page max-w-3xl">
        <h1 className="heading-display text-4xl text-foreground sm:text-5xl">{t("legal.terms_title")}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("legal.last_updated")}: April 2026</p>
        <div className="prose mt-10 max-w-none space-y-5 text-foreground/80">
          <p>These Terms & Conditions govern your use of the Noor Al Huda Trading LLC website. By accessing or using this site, you agree to be bound by these terms.</p>
          <h2 className="font-display text-2xl text-foreground">Catalogue & enquiries</h2>
          <p>Product information on this site is for reference only. All quotations are subject to written confirmation by our trade desk. Pricing, availability and packaging specifications may vary based on origin, season and freight conditions.</p>
          <h2 className="font-display text-2xl text-foreground">Intellectual property</h2>
          <p>All content, branding, photography and code on this site is the property of Noor Al Huda Trading LLC or its licensors and may not be reproduced without written permission.</p>
          <h2 className="font-display text-2xl text-foreground">Limitation of liability</h2>
          <p>This site is provided "as is". To the extent permitted by UAE law, we exclude liability for any indirect or consequential loss arising from your use of this site.</p>
          <h2 className="font-display text-2xl text-foreground">Governing law</h2>
          <p>These terms are governed by the laws of the United Arab Emirates and the courts of Dubai shall have exclusive jurisdiction.</p>
          <p className="text-sm text-muted-foreground">This document is provided for informational purposes and should be reviewed by qualified legal counsel before publication.</p>
        </div>
      </div>
    </article>
  );
};
export default Terms;