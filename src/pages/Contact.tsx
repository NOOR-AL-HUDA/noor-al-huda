import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { SITE } from "@/data/site";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { useFormGuard } from "@/lib/forms";
import { useToast } from "@/hooks/use-toast";
import { Seo } from "@/components/common/Seo";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  country: z.string().trim().max(80).optional().or(z.literal("")),
  interest: z.string().trim().max(120).optional().or(z.literal("")),
  quantity: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(1500),
  consent: z.literal(true),
  website: z.string().max(0).optional(), // honeypot
});
type FormVals = z.infer<typeof schema>;

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const guard = useFormGuard("contact");
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormVals>({
    resolver: zodResolver(schema),
    defaultValues: { consent: undefined as unknown as true },
  });

  const onSubmit = async (vals: FormVals) => {
    if (vals.website) return; // bot
    const result = guard.checkOk();
    if (!result.ok) {
      toast({ title: result.reason === "throttled" ? t("form.throttled") : t("form.error"), variant: "destructive" });
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    console.log("[contact form]", vals);
    guard.stamp();
    setSubmitting(false);
    toast({ title: t("form.success") });
    reset();
  };

  return (
    <>
      <Seo
        title="Contact & RFQ — Noor Al Huda Trading"
        description="Send us a quick enquiry, request a quote, or visit our Warsan warehouse in Dubai. We respond to all RFQs within one business day."
        path="/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Noor Al Huda Trading",
          "url": "https://nooralhudatrading.com/contact",
        }}
      />
      <section className="bg-background pb-12 pt-40 sm:pt-48">
        <div className="container-page">
          <SectionEyebrow>{t("contact_page.eyebrow")}</SectionEyebrow>
          <h1 className="heading-display mt-4 text-5xl text-foreground sm:text-6xl text-balance">{t("contact_page.title")}</h1>
          <p className="mt-5 max-w-xl text-base text-foreground/70 sm:text-lg">{t("contact_page.subtitle")}</p>
        </div>
      </section>

      <section className="bg-background pb-32">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="space-y-6">
            <ContactItem icon={<MapPin className="h-5 w-5" />} label={t("contact_page.address_label")} value={SITE.address} />
            <ContactItem icon={<Phone className="h-5 w-5" />} label={t("contact_page.phone_label")} value={SITE.phoneDisplay} href={`tel:${SITE.phoneE164}`} />
            <ContactItem icon={<Mail className="h-5 w-5" />} label={t("contact_page.email_label")} value={SITE.email} href={`mailto:${SITE.email}`} />
            <ContactItem icon={<Clock className="h-5 w-5" />} label={t("contact_page.hours_label")} value={t("contact_page.hours")} />
          </div>

          <div className="rounded-3xl border border-foreground/10 bg-surface p-6 shadow-soft sm:p-10">
            <h2 className="heading-display text-2xl text-foreground sm:text-3xl">{t("contact_page.form_title")}</h2>
            <p className="mt-2 text-sm text-foreground/65">{t("contact_page.form_subtitle")}</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
              <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} className="hidden" aria-hidden />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={t("form.name")} error={errors.name?.message}><input className="input" {...register("name")} /></Field>
                <Field label={t("form.company")} error={errors.company?.message}><input className="input" {...register("company")} /></Field>
                <Field label={t("form.email")} error={errors.email?.message}><input type="email" className="input" {...register("email")} /></Field>
                <Field label={t("form.phone")} error={errors.phone?.message}><input type="tel" className="input" {...register("phone")} /></Field>
                <Field label={t("form.country")} error={errors.country?.message}><input className="input" {...register("country")} /></Field>
                <Field label={t("form.interest")} error={errors.interest?.message}><input className="input" {...register("interest")} /></Field>
              </div>
              <Field label={t("form.quantity")} error={errors.quantity?.message}><input className="input" {...register("quantity")} /></Field>
              <Field label={t("form.message")} error={errors.message?.message}>
                <textarea rows={5} className="input resize-none" {...register("message")} />
              </Field>
              <label className="flex items-start gap-2.5 text-sm text-foreground/70">
                <input type="checkbox" {...register("consent")} className="mt-1 h-4 w-4 rounded border-foreground/30 text-primary focus:ring-primary" />
                <span>{t("form.consent")}</span>
              </label>
              {errors.consent && <p className="text-xs text-destructive">{t("form.consent")}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-primary-glow disabled:opacity-60"
              >
                {submitting ? t("form.submitting") : t("form.submit")}
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-background pb-32">
        <div className="w-full flex items-center justify-center p-2">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d446.65019667013877!2d55.468345721276044!3d25.158938995805958!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA5JzMyLjEiTiA1NcKwMjgnMDYuNSJF!5e0!3m2!1sen!2sus!4v1776876565655!5m2!1sen!2sus"
            width="600" 
            height="450" 
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full max-w-[1280px]"
          >
          </iframe>
        </div>

      </section>
    </>
  );
};

const ContactItem = ({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) => (
  <div className="rounded-2xl border border-foreground/10 bg-surface p-5">
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">{icon}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
    <div className="mt-3 text-base text-foreground">
      {href ? <a href={href} className="hover:text-primary">{value}</a> : value}
    </div>
  </div>
);

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-foreground/65">{label}</span>
    {children}
    {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
  </label>
);

export default Contact;