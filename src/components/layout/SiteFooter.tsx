import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/data/site";
import { MuqeetCredit } from "@/components/common/MuqeetCredit";

export const SiteFooter = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="grid h-17 w-17 place-items-center rounded-full bg-gradient-primary">
                <div className="grid h-16 w-16 place-items-center transition-transform group-hover:scale-105">
                  <img src="/logo.png" alt="Logo" />
                </div>
              </div>
              <div className="leading-tight">
                <div className="font-display text-base font-semibold">{SITE.name}</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-secondary-foreground/60">{SITE.legalName.split(" ").slice(-1)[0] === "LLC" ? "Trading LLC" : ""}</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm text-secondary-foreground/75">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.18em] text-secondary-foreground/60">{t("footer.explore")}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link className="hover:text-primary-glow transition-colors" to="/products">{t("nav.products")}</Link></li>
              <li><Link className="hover:text-primary-glow transition-colors" to="/news">{t("nav.news")}</Link></li>
              <li><Link className="hover:text-primary-glow transition-colors" to="/sustainability">{t("nav.sustainability")}</Link></li>
              <li><Link className="hover:text-primary-glow transition-colors" to="/careers">{t("nav.careers")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.18em] text-secondary-foreground/60">{t("footer.legal")}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link className="hover:text-primary-glow transition-colors" to="/about">{t("nav.about")}</Link></li>
              <li><Link className="hover:text-primary-glow transition-colors" to="/privacy">{t("legal.privacy_title")}</Link></li>
              <li><Link className="hover:text-primary-glow transition-colors" to="/terms">{t("legal.terms_title")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-[0.18em] text-secondary-foreground/60">{t("footer.contact")}</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                <span className="text-secondary-foreground/80">{SITE.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary-glow" />
                <a href={`tel:${SITE.phoneE164}`} className="hover:text-primary-glow transition-colors">{SITE.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary-glow" />
                <a href={`mailto:${SITE.email}`} className="hover:text-primary-glow transition-colors">{SITE.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-secondary-foreground/10 pt-6 text-xs text-secondary-foreground/55 sm:flex-row sm:items-center">
          <span>© {year} {SITE.legalName}. {t("footer.rights")}</span>
          <MuqeetCredit />
        </div>
      </div>
    </footer>
  );
};