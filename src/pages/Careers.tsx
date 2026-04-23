import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check } from "lucide-react";
import { SectionEyebrow } from "@/components/common/SectionEyebrow";
import { useFormGuard } from "@/lib/forms";
import { useToast } from "@/hooks/use-toast";
import { Seo } from "@/components/common/Seo";

const schema = z.object({
  first_name: z.string().trim().min(1).max(80),
  last_name: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(5).max(40),
  address: z.string().trim().max(200).optional().or(z.literal("")),
  city: z.string().trim().max(80).optional().or(z.literal("")),
  country: z.string().trim().max(80),
  nationality: z.string().trim().max(80).optional().or(z.literal("")),
  work_auth: z.enum(["yes", "no", "sponsorship"]),
  highest_edu: z.string().trim().max(120),
  institution: z.string().trim().max(160),
  field: z.string().trim().max(120),
  grad_year: z.string().trim().max(4),
  current_role: z.string().trim().max(160),
  current_company: z.string().trim().max(160),
  years_experience: z.string().trim().max(3),
  linkedin: z.string().trim().max(300).optional().or(z.literal("")),
  resume_name: z.string().trim().max(200).optional().or(z.literal("")),
  cover: z.string().trim().max(2000).optional().or(z.literal("")),
  source: z.string().trim().max(120).optional().or(z.literal("")),
  consent_data: z.literal(true),
  consent_eeo: z.literal(true),
  website: z.string().max(0).optional(),
});
type Vals = z.infer<typeof schema>;

const Careers = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const guard = useFormGuard("careers");
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const steps = t("careers_page.steps", { returnObjects: true }) as string[];
  const f = (k: string) => t(`careers_page.fields.${k}`);

  const { register, handleSubmit, trigger, reset, formState: { errors } } = useForm<Vals>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const stepFields: (keyof Vals)[][] = [
    ["first_name", "last_name", "email", "phone", "address", "city", "country", "nationality", "work_auth"],
    ["highest_edu", "institution", "field", "grad_year"],
    ["current_role", "current_company", "years_experience", "linkedin"],
    ["resume_name", "cover", "source"],
    ["consent_data", "consent_eeo"],
  ];

  const next = async () => {
    const ok = await trigger(stepFields[step]);
    if (ok) setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const onSubmit = async (vals: Vals) => {
    if (vals.website) return;
    const result = guard.checkOk();
    if (!result.ok) {
      toast({ title: result.reason === "throttled" ? t("form.throttled") : t("form.error"), variant: "destructive" });
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    console.log("[career application]", vals);
    guard.stamp();
    setSubmitting(false);
    toast({ title: t("form.success") });
    reset();
    setStep(0);
  };

  return (
    <>
      <Seo
        title="Careers — Join Noor Al Huda Trading"
        description="Build your career with a UAE-based FMCG trader. We hire for sales, operations, logistics and trade-desk roles. Apply via our 5-step application form."
        path="/careers"
      />
      <section className="bg-secondary pb-16 pt-40 text-secondary-foreground sm:pt-48">
        <div className="container-page">
          <SectionEyebrow><span className="text-primary-glow">{t("careers_page.eyebrow")}</span></SectionEyebrow>
          <h1 className="heading-display mt-4 max-w-3xl text-5xl text-secondary-foreground sm:text-6xl text-balance">{t("careers_page.title")}</h1>
          <p className="mt-5 max-w-2xl text-base text-secondary-foreground/75 sm:text-lg">{t("careers_page.subtitle")}</p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container-page max-w-3xl">
          <div className="rounded-3xl border border-foreground/10 bg-surface p-6 shadow-soft sm:p-10">
            <h2 className="heading-display text-2xl text-foreground sm:text-3xl">{t("careers_page.form_title")}</h2>

            <ol className="mt-6 grid grid-cols-5 gap-2">
              {steps.map((s, i) => (
                <li key={s} className={`rounded-full px-3 py-2 text-center text-[11px] font-medium uppercase tracking-wider ${
                  i === step ? "bg-primary text-primary-foreground" : i < step ? "bg-primary/15 text-primary" : "bg-foreground/5 text-foreground/50"
                }`}>
                  {i < step ? <Check className="mx-auto h-3.5 w-3.5" /> : s}
                </li>
              ))}
            </ol>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
              <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} className="hidden" aria-hidden />

              {step === 0 && (
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={f("first_name")} error={errors.first_name?.message}><input className="input" {...register("first_name")} /></Field>
                  <Field label={f("last_name")} error={errors.last_name?.message}><input className="input" {...register("last_name")} /></Field>
                  <Field label={f("email")} error={errors.email?.message}><input type="email" className="input" {...register("email")} /></Field>
                  <Field label={f("phone")} error={errors.phone?.message}><input type="tel" className="input" {...register("phone")} /></Field>
                  <Field label={f("address")} error={errors.address?.message}><input className="input" {...register("address")} /></Field>
                  <Field label={f("city")} error={errors.city?.message}><input className="input" {...register("city")} /></Field>
                  <Field label={f("country")} error={errors.country?.message}><input className="input" {...register("country")} /></Field>
                  <Field label={f("nationality")} error={errors.nationality?.message}><input className="input" {...register("nationality")} /></Field>
                  <Field label={f("work_auth")} error={errors.work_auth?.message}>
                    <select className="input" {...register("work_auth")}>
                      <option value="">—</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="sponsorship">Need sponsorship</option>
                    </select>
                  </Field>
                </div>
              )}
              {step === 1 && (
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={f("highest_edu")} error={errors.highest_edu?.message}><input className="input" {...register("highest_edu")} /></Field>
                  <Field label={f("institution")} error={errors.institution?.message}><input className="input" {...register("institution")} /></Field>
                  <Field label={f("field")} error={errors.field?.message}><input className="input" {...register("field")} /></Field>
                  <Field label={f("grad_year")} error={errors.grad_year?.message}><input className="input" {...register("grad_year")} /></Field>
                </div>
              )}
              {step === 2 && (
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={f("current_role")} error={errors.current_role?.message}><input className="input" {...register("current_role")} /></Field>
                  <Field label={f("current_company")} error={errors.current_company?.message}><input className="input" {...register("current_company")} /></Field>
                  <Field label={f("years_experience")} error={errors.years_experience?.message}><input className="input" {...register("years_experience")} /></Field>
                  <Field label={f("linkedin")} error={errors.linkedin?.message}><input className="input" {...register("linkedin")} /></Field>
                </div>
              )}
              {step === 3 && (
                <div className="space-y-5">
                  <Field label={f("resume")} error={errors.resume_name?.message}>
                    <input type="file" accept=".pdf,.doc,.docx" className="input" onChange={(e) => {
                      const fname = e.target.files?.[0]?.name ?? "";
                      (document.querySelector('input[name="resume_name"]') as HTMLInputElement | null)?.setAttribute("value", fname);
                    }} />
                    <input type="hidden" {...register("resume_name")} />
                  </Field>
                  <Field label={f("cover")} error={errors.cover?.message}><textarea rows={5} className="input resize-none" {...register("cover")} /></Field>
                  <Field label={f("source")} error={errors.source?.message}><input className="input" {...register("source")} /></Field>
                </div>
              )}
              {step === 4 && (
                <div className="space-y-4">
                  <label className="flex items-start gap-2.5 text-sm text-foreground/75">
                    <input type="checkbox" {...register("consent_data")} className="mt-1 h-4 w-4 rounded border-foreground/30 text-primary" />
                    <span>{f("consent_data")}</span>
                  </label>
                  <label className="flex items-start gap-2.5 text-sm text-foreground/75">
                    <input type="checkbox" {...register("consent_eeo")} className="mt-1 h-4 w-4 rounded border-foreground/30 text-primary" />
                    <span>{f("consent_eeo")}</span>
                  </label>
                </div>
              )}

              <div className="flex items-center justify-between pt-4">
                <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}
                  className="rounded-full px-5 py-2.5 text-sm font-medium text-foreground/70 hover:bg-foreground/5 disabled:opacity-40">
                  {t("careers_page.back")}
                </button>
                <span className="text-xs text-muted-foreground">{t("careers_page.step")} {step + 1} {t("careers_page.of")} {steps.length}</span>
                {step < steps.length - 1 ? (
                  <button type="button" onClick={next} className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-glow">
                    {t("careers_page.next")}
                  </button>
                ) : (
                  <button type="submit" disabled={submitting} className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-glow disabled:opacity-60">
                    {submitting ? t("form.submitting") : t("careers_page.submit")}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-foreground/65">{label}</span>
    {children}
    {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
  </label>
);

export default Careers;