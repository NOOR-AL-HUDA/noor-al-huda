import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils";

export const SiteHeader = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/products", label: t("nav.products") },
    { to: "/news", label: t("nav.news") },
    { to: "/sustainability", label: t("nav.sustainability") },
    { to: "/careers", label: t("nav.careers") },
    { to: "/contact", label: t("nav.contact") },
  ];

  const onHome = loc.pathname === "/";
  // Pages whose hero starts with the dark `--secondary` background.
  // On these the un-scrolled header text needs to be white too.
  const DARK_HERO_ROUTES = ["/about", "/sustainability", "/careers"];
  const lightMode = !scrolled && (onHome || DARK_HERO_ROUTES.includes(loc.pathname));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[padding,background] duration-500",
        scrolled ? "px-3 pt-3 sm:px-6 sm:pt-4" : "px-0 pt-0"
      )}
    >
      <div
        className={cn(
          "mx-auto flex items-center justify-between transition-[max-width,border-radius,background,backdrop-filter,padding] duration-500",
          scrolled
            ? "max-w-[1280px] glass rounded-full px-4 py-2.5 shadow-soft sm:px-6"
            : "max-w-none px-5 py-4 sm:px-8 lg:px-12"
        )}
      >
        <Link to="/" className="flex items-center gap-0.5 group">
          <div className="grid h-14 w-14 place-items-center transition-transform group-hover:scale-105">
            <img src="/logo.png" alt="Logo" />
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className={cn("font-display text-sm font-semibold", lightMode ? "text-white" : "text-foreground")}>
              {t("brand.short")}
            </span>
            <span className={cn("text-[10px] uppercase tracking-[0.18em]", lightMode ? "text-white/70" : "text-muted-foreground")}>
              Trading LLC
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                  isActive
                    ? lightMode ? "bg-white/15 text-white" : "bg-foreground/5 text-foreground"
                    : lightMode ? "text-white/85 hover:text-white hover:bg-white/10" : "text-foreground/75 hover:text-foreground hover:bg-foreground/5"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher light={lightMode} />
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-soft transition-all hover:bg-primary-glow hover:shadow-glow lg:inline-flex"
          >
            {t("nav.enquire")}
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className={cn(
              "grid h-9 w-9 place-items-center rounded-full transition-colors lg:hidden",
              lightMode ? "text-white hover:bg-white/10" : "text-foreground hover:bg-foreground/5"
            )}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="mx-3 mt-2 animate-slide-down rounded-3xl glass p-4 shadow-elev lg:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                    isActive ? "bg-foreground/5 text-foreground" : "text-foreground/80 hover:bg-foreground/5"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" className="mt-2 rounded-2xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground">
              {t("nav.enquire")}
            </Link>
          </nav>
        </div>
      )}

      {/* Fading bottom line — visible only on home, top of page */}
      {onHome && !scrolled && (
        <div className="absolute inset-x-0 bottom-0 fade-line" aria-hidden />
      )}
    </header>
  );
};