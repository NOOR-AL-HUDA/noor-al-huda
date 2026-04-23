import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export const LanguageSwitcher = ({ light = false }: { light?: boolean }) => {
  const { i18n, t } = useTranslation();
  const next = i18n.language === "ar" ? "en" : "ar";
  return (
    <button
      onClick={() => i18n.changeLanguage(next)}
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
        light
          ? "text-white/90 hover:bg-white/10"
          : "text-foreground/80 hover:bg-foreground/5"
      }`}
      aria-label="Switch language"
    >
      <Globe className="h-3.5 w-3.5" />
      <span>{t("nav.language")}</span>
    </button>
  );
};