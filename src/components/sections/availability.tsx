import { motion } from "framer-motion";
import { Check, Copy, MapPin, Plane, Sparkles } from "lucide-react";

import { linkedinUrl, site } from "@/config/site";
import { useCopy } from "@/hooks/use-copy";
import { ActionLink } from "@/components/ui/action-link";
import { Magnetic } from "@/components/ui/magnetic";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Availability() {
  const { copied, copy } = useCopy();
  const facts = [
    { icon: MapPin, label: "Preferred locations", value: site.availability.preferredLocations.join(" · ") },
    { icon: Sparkles, label: "Status", value: "Open to relevant software development roles" },
    ...(site.availability.willingToRelocate
      ? [{ icon: Plane, label: "Relocation", value: "Willing to relocate to the locations" }]
      : []),
  ];

  return (
    <section aria-labelledby="availability-title" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl border border-border-strong bg-card p-8 sm:p-12 lg:p-16"
        >
          <div aria-hidden className="absolute inset-0 bg-dots mask-radial opacity-60" />
          <div aria-hidden className="absolute -right-24 -top-24 size-80 rounded-full bg-primary/25 blur-[100px]" />
          <div aria-hidden className="absolute -bottom-32 left-10 size-80 rounded-full bg-violet/20 blur-[110px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <motion.p variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.2em] text-highlight">
                07 — Availability
              </motion.p>
              <motion.h2
                id="availability-title"
                variants={fadeUp}
                className="mt-4 text-balance text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl"
              >
                Ready to Build Something Meaningful.
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                I'm interested in Full Stack and MERN Stack Developer opportunities where I can contribute to real
                products, solve engineering problems, and continue growing with a strong team.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-3 max-w-xl text-sm text-muted-foreground/80">
                {site.availability.note}
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                <Magnetic>
                  <ActionLink href={`mailto:${site.email}`} size="lg" icon="arrow">
                    Email me
                  </ActionLink>
                </Magnetic>
                <ActionLink href={linkedinUrl} external variant="secondary" size="lg" icon="external">
                  LinkedIn
                </ActionLink>
                <ActionLink href={site.resumeUrl} download={site.resumeFileName} variant="ghost" size="lg" icon="download">
                  Resume
                </ActionLink>
              </motion.div>
            </div>

            <motion.dl variants={stagger(0.08)} className="space-y-3">
              {facts.map((f) => (
                <motion.div key={f.label} variants={fadeUp} className="glass flex items-start gap-4 rounded-xl border border-border p-4">
                  <f.icon aria-hidden className="mt-0.5 size-5 shrink-0 text-highlight" />
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{f.label}</dt>
                    <dd className="mt-1 text-foreground">{f.value}</dd>
                  </div>
                </motion.div>
              ))}
              <motion.div variants={fadeUp} className="glass flex items-center justify-between gap-3 rounded-xl border border-border p-4">
                <div className="min-w-0">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Email</dt>
                  <dd className="mt-1 truncate text-foreground">{site.email}</dd>
                </div>
                <button
                  type="button"
                  onClick={() => copy(site.email)}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border-strong px-3 py-2 text-xs text-foreground transition-colors hover:border-highlight/60"
                >
                  {copied ? <Check aria-hidden className="size-3.5 text-success" /> : <Copy aria-hidden className="size-3.5" />}
                  {copied ? "Copied" : "Copy"}
                </button>
                <span className="sr-only" aria-live="polite">
                  {copied ? "Email address copied to clipboard" : ""}
                </span>
              </motion.div>
            </motion.dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
