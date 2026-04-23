import { useTranslation } from "react-i18next";
import { SectionEyebrow } from "../common/SectionEyebrow";
import hiltonImg from "../../assets/partners/hilton.png";
import waldorfImg from "../../assets/partners/waldorf_astoria.png";
import movenpickImg from "../../assets/partners/Movenpick.png";
import radissonImg from "../../assets/partners/radisson.png";
import sofitalImg from "../../assets/partners/sofital.png";
import asterImg from "../../assets/partners/aster.png";
import primeImg from "../../assets/partners/primeMC.png";
import skImg from "../../assets/partners/skhospital.png";

const PARTNERS_DATA = [
  { name: "Hilton", image: hiltonImg },
  { name: "Waldorf Astoria", image: waldorfImg },
  { name: "Mövenpick", image: movenpickImg },
  { name: "Radisson", image: radissonImg },
  { name: "Sofitel", image: sofitalImg },
  { name: "Aster", image: asterImg },
  { name: "Prime Medical", image: primeImg },
  { name: "SK Hospital", image: skImg },
];

const PARTNERS = [...PARTNERS_DATA, ...PARTNERS_DATA.slice(0, 4)];

export const PartnersSection = () => {
  const { t } = useTranslation();
  return (
    <section id="partners" className="relative bg-muted/40 py-24 sm:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <SectionEyebrow>{t("partners.eyebrow")}</SectionEyebrow>
            <h2 className="heading-display mt-4 text-4xl text-foreground sm:text-5xl text-balance">{t("partners.title")}</h2>
            <p className="mt-5 text-base text-foreground/70">{t("partners.subtitle")}</p>
          </div>
          <div className="grid grid-cols-4 gap-px overflow-hidden rounded-2xl bg-foreground/10 lg:grid-cols-4">
            {PARTNERS.map((p, index) => (
              <div
                key={`${p.name}-${index}`}
                className="overflow-hidden group relative flex aspect-[3/2] items-center justify-center bg-background transition-all hover:bg-muted/40"
              >
                <img src={p.image} alt={p.name} className="w-40 h-26 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};