import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Cookie } from "lucide-react";

const KEY = "nht_cookies";

export const CookieConsent = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!localStorage.getItem(KEY)) setVisible(true);
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  const close = (val: "accepted" | "declined") => {
    localStorage.setItem(KEY, val);
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 sm:px-6 sm:pb-6 animate-fade-up">
      <div className="mx-auto flex max-w-[1100px] flex-col items-start gap-4 rounded-3xl bg-background/85 p-4 shadow-elev sm:flex-row sm:items-center sm:p-5">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
          <Cookie className="h-5 w-5" />
        </div>
        <p className="flex-1 text-sm text-foreground/80">{t("cookies.text")}</p>
        <div className="flex gap-2 self-stretch sm:self-auto">
          <button
            onClick={() => close("declined")}
            className="flex-1 rounded-full px-4 py-2 text-xs font-semibold text-foreground/70 hover:bg-foreground/5 transition-colors sm:flex-none"
          >
            {t("cookies.decline")}
          </button>
          <button
            onClick={() => close("accepted")}
            className="flex-1 rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground shadow-soft hover:bg-primary-glow transition-colors sm:flex-none"
          >
            {t("cookies.accept")}
          </button>
        </div>
      </div>
    </div>
  );
};