import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, MoveDown } from "lucide-react";
import gsap from "gsap";
import heroRice from "@/assets/hh1-rice.png";
import heroSugar from "@/assets/hh2-sugar.png";
import heroFlour from "@/assets/hh3-flour.png";
import heroOils from "@/assets/hh4-oils.png";
import heroSpices from "@/assets/hh5-spices.png";
import heroFoodGrains from "@/assets/hh6-food_grains.jpg";
import heroWarehouse from "@/assets/hero-warehouse.jpg";

// Each slide pairs a background image with the word index swapped into the headline.
const SLIDES = [
  { src: heroFoodGrains, wordIndex: 0 }, // agro / global trade
  { src: heroRice, wordIndex: 1 },      // rice
  { src: heroFlour, wordIndex: 2 },    // flour
  { src: heroSugar, wordIndex: 3 },    // 
  { src: heroOils, wordIndex: 4 },    
  { src: heroSpices, wordIndex: 5 },  
];

const SLIDE_DURATION = 4200; // ms
const SCRAMBLE_CHARS = "▲△◀∅∏▒▢◁≈▶▣▭#%&@*+~";

export const HeroSlider = () => {
  const { t, i18n } = useTranslation();
  const words = t("hero.title_words", { returnObjects: true }) as string[];
  const [idx, setIdx] = useState(0);
  const wordRef = useRef<HTMLSpanElement>(null);
  const scrambleTween = useRef<gsap.core.Tween | null>(null);

  // Auto-advance slides
  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  // Scramble animation on word swap — manual scramble (no premium GSAP plugin needed)
  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;
    const target = words[SLIDES[idx].wordIndex] ?? words[0];

    // Kill any in-flight tween
    scrambleTween.current?.kill();

    const obj = { progress: 0 };
    const len = target.length;
    const totalSteps = len + 8; // extra steps so scramble runs past length

    scrambleTween.current = gsap.to(obj, {
      progress: 1,
      duration: 1.1,
      ease: "power2.out",
      onUpdate: () => {
        const revealed = Math.floor(obj.progress * totalSteps);
        let out = "";
        for (let i = 0; i < len; i++) {
          if (i < revealed - 4) {
            out += target[i];
          } else if (i < revealed + 2) {
            // randomize chars in the "scrambling" window
            out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          } else {
            out += "\u00A0"; // nbsp placeholder to keep width
          }
        }
        el.textContent = out;
      },
      onComplete: () => {
        el.textContent = target;
      },
    });

    return () => {
      scrambleTween.current?.kill();
    };
  }, [idx, words, i18n.language]);

  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden bg-[hsl(0_0%_6%)]">
      {/* slides */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-out"
          style={{ opacity: i === idx ? 1 : 0 }}
          aria-hidden={i !== idx}
        >
          <img
            src={s.src}
            alt=""
            className="h-full w-full object-cover object-right"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* readability gradient */}
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden />

      {/* content */}
      <div className="container-page relative z-10 flex min-h-[100svh] flex-col justify-center pb-20 pt-32 sm:pt-40">
        <div className="max-w-3xl text-white">
          <span className="pill bg-white/10 text-white/90 backdrop-blur-md ring-1 ring-white/15 animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
            {t("hero.eyebrow")}
          </span>

          <h1 className="heading-display mt-6 text-[clamp(2.8rem,6.5vw,5.6rem)] text-white text-balance leading-[1.02]">
            {/* Line 1: Premium <scramble word> */}
            <span className="block">
              {t("hero.title_pre")}{" "}
              <span
                ref={wordRef}
                className="inline-block bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent font-mono tracking-tight"
                style={{ minWidth: "4ch" }}
              >
                {words[0]}
              </span>
            </span>
            {/* Line 2 */}
            <span className="block text-white/95">{t("hero.title_line2")}</span>
            {/* Line 3 */}
            <span className="block text-white/95">{t("hero.title_line3")}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg text-pretty">
            {t("hero.subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:bg-primary-glow hover:translate-y-[-1px]"
            >
              {t("hero.cta_products")}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15"
            >
              {t("hero.cta_enquire")}
            </Link>
          </div>

          {/* slide indicators */}
          <div className="mt-12 flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === idx ? "w-10 bg-primary-glow" : "w-5 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 md:flex">
          <span className="text-[10px] uppercase tracking-[0.3em]">{t("hero.scroll")}</span>
          <MoveDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
};