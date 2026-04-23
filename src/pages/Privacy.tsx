import { useTranslation } from "react-i18next";
import { Seo } from "@/components/common/Seo";

const Privacy = () => {
  const { t } = useTranslation();
  return (
    <article className="bg-background pb-32 pt-40 sm:pt-48">
      <Seo
        title="Privacy Policy — Noor Al Huda Trading"
        description="How Noor Al Huda Trading LLC collects, uses and protects information submitted through our website."
        path="/privacy"
      />
      <div className="container-page max-w-3xl">
        <h1 className="heading-display text-4xl text-foreground sm:text-5xl">{t("legal.privacy_title")}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("legal.last_updated")}: April 2026</p>
        <div className="prose mt-10 max-w-none space-y-5 text-foreground/80">
          <p>This Privacy Policy explains how Noor Al Huda Trading LLC ("we", "us", "our") collects, uses and protects information you provide through this website. We are committed to protecting your privacy and processing your data fairly and lawfully.</p>
          <h2 className="font-display text-2xl text-foreground">Information we collect</h2>
          <p>We collect information you voluntarily submit through enquiry, career and contact forms — including name, company, email, phone, country and the content of your message. We also collect basic technical information such as IP address, browser type and pages visited for analytics purposes.</p>
          <h2 className="font-display text-2xl text-foreground">How we use your information</h2>
          <p>We use your information to respond to your enquiries, provide quotations, process job applications, improve our website and comply with legal obligations. We do not sell your personal information to third parties.</p>
          <h2 className="font-display text-2xl text-foreground">Cookies</h2>
          <p>We use essential cookies to operate this website and, with your consent, analytics cookies to understand how visitors use the site. You can manage your cookie preferences through the consent banner.</p>
          <h2 className="font-display text-2xl text-foreground">Data retention</h2>
          <p>Enquiry data is retained for up to 24 months. Career application data is retained for up to 12 months unless you ask us to delete it sooner.</p>
          <h2 className="font-display text-2xl text-foreground">Your rights</h2>
          <p>You may request access to, correction of, or deletion of your personal information at any time by emailing info@nooralhudatrading.com.</p>
          <p className="text-sm text-muted-foreground">This document is provided for informational purposes and should be reviewed by qualified legal counsel before publication.</p>
        </div>
      </div>
    </article>
  );
};
export default Privacy;