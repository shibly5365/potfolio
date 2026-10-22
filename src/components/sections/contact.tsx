import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Check, CheckCircle2, Copy, Loader2, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useForm, type FieldError } from "react-hook-form";

import { githubUrl, linkedinUrl, site } from "@/config/site";
import { useCopy } from "@/hooks/use-copy";
import { contactSchema, getEmailJsConfig, submitContact, type ContactValues } from "@/lib/contact";
import { SectionHeading } from "@/components/ui/section-heading";
import { SocialIcon } from "@/components/ui/social-icon";
import { actionVariants } from "@/components/ui/action-link";
import { easeOut, fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Status = { state: "idle" } | { state: "success"; via: "emailjs" | "mailto" } | { state: "error"; message: string };

const fieldClass =
  "w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-[0.95rem] text-foreground placeholder:text-muted-foreground/60 transition-[border-color,box-shadow] duration-200 focus:border-highlight/70 focus:outline-none focus:ring-2 focus:ring-highlight/20 aria-[invalid=true]:border-destructive/70";

export function Contact() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const { copied, copy } = useCopy();
  const emailJsReady = getEmailJsConfig() !== null;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "", company: "" },
    mode: "onTouched",
  });

  const onSubmit = handleSubmit(async (values) => {
    if (values.company) return; // honeypot
    setStatus({ state: "idle" });
    try {
      const result = await submitContact(values, site.email);
      if (result.via === "mailto") window.location.href = result.href;
      setStatus({ state: "success", via: result.via });
      if (result.via === "emailjs") reset();
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  });

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="contact-title"
          index="08"
          eyebrow="Contact"
          title="Let's talk about your team."
          description="Hiring for a Full Stack or MERN role, or want to discuss a project? Send a message — I'll reply by email."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.35fr_0.9fr]">
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
            aria-describedby="contact-delivery-note"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" error={errors.name}>
                <input id="name" autoComplete="name" placeholder="Your name" className={fieldClass} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} {...register("name")} />
              </Field>
              <Field id="email" label="Email" error={errors.email}>
                <input id="email" type="email" autoComplete="email" placeholder="you@company.com" className={fieldClass} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} />
              </Field>
            </div>
            <div className="mt-5">
              <Field id="subject" label="Subject" error={errors.subject}>
                <input id="subject" placeholder="Full Stack Developer role — Dubai" className={fieldClass} aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "subject-error" : undefined} {...register("subject")} />
              </Field>
            </div>
            <div className="mt-5">
              <Field id="message" label="Message" error={errors.message}>
                <textarea id="message" rows={6} placeholder="Tell me about the role, team or project…" className={cn(fieldClass, "resize-y")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} {...register("message")} />
              </Field>
            </div>
            <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="company">Company</label>
              <input id="company" tabIndex={-1} autoComplete="off" {...register("company")} />
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p id="contact-delivery-note" className="text-xs text-muted-foreground">
                {emailJsReady
                  ? "Your message is delivered straight to my inbox."
                  : "Sending opens your email app with this message ready to go."}
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(actionVariants({ variant: "primary", size: "lg" }), "min-w-[170px]")}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isSubmitting ? (
                    <motion.span key="loading" className="inline-flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Loader2 aria-hidden className="size-4 animate-spin" /> Sending…
                    </motion.span>
                  ) : status.state === "success" ? (
                    <motion.span key="done" className="inline-flex items-center gap-2" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                      <Check aria-hidden className="size-4" /> Sent
                    </motion.span>
                  ) : (
                    <motion.span key="idle" className="inline-flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      Send message
                      <Send aria-hidden className="size-4 transition-transform duration-300 group-hover/action:-translate-y-0.5 group-hover/action:translate-x-0.5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            <div aria-live="polite" className="mt-1">
              <AnimatePresence>
                {status.state === "success" ? (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: easeOut }}
                    className="mt-5 flex items-start gap-2.5 rounded-lg border border-success/30 bg-success/10 p-4 text-sm text-foreground"
                  >
                    <CheckCircle2 aria-hidden className="mt-0.5 size-4 shrink-0 text-success" />
                    {status.via === "emailjs"
                      ? "Thanks — your message has been sent. I'll get back to you by email."
                      : `Your email app should now be open with the message filled in. If nothing happened, email me at ${site.email}.`}
                  </motion.p>
                ) : null}
                {status.state === "error" ? (
                  <motion.p
                    role="alert"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-5 rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-foreground"
                  >
                    {status.message}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>
          </motion.form>

          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            aria-label="Direct contact"
            className="flex flex-col gap-3"
          >
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Email</p>
              <a href={`mailto:${site.email}`} className="mt-2 flex items-center gap-2 break-all font-display text-lg text-foreground hover:text-highlight">
                <Mail aria-hidden className="size-4 shrink-0 text-highlight" />
                {site.email}
              </a>
              <button
                type="button"
                onClick={() => copy(site.email)}
                className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-border-strong px-3 py-2 text-xs text-foreground transition-colors hover:border-highlight/60"
              >
                {copied ? <Check aria-hidden className="size-3.5 text-success" /> : <Copy aria-hidden className="size-3.5" />}
                {copied ? "Copied to clipboard" : "Copy email"}
              </button>
              <span className="sr-only" aria-live="polite">
                {copied ? "Email address copied" : ""}
              </span>
            </div>
            {site.phone ? (
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Phone</p>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="mt-2 flex items-center gap-2 font-display text-lg text-foreground hover:text-highlight">
                  <Phone aria-hidden className="size-4 text-highlight" />
                  {site.phone}
                </a>
              </div>
            ) : null}
            <div className="grid grid-cols-2 gap-3">
              {[
                { key: "linkedin" as const, label: "LinkedIn", href: linkedinUrl },
                { key: "github" as const, label: "GitHub", href: githubUrl },
              ].map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-6 rounded-2xl border border-border bg-card p-5 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-highlight/40"
                >
                  <SocialIcon name={s.key} className="size-5 text-muted-foreground transition-colors group-hover:text-highlight" />
                  <span className="text-sm text-foreground">
                    {s.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </a>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error: FieldError | undefined; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      <AnimatePresence initial={false}>
        {error?.message ? (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1.5 text-xs text-destructive"
          >
            {error.message}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
