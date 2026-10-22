import { motion } from "framer-motion";

import { approachSteps } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { easeOut, fadeUp, stagger } from "@/lib/motion";

export function Approach() {
  return (
    <section aria-labelledby="approach-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="approach-title"
          index="05"
          eyebrow="Process"
          title="How I Approach Engineering."
          description="My default working approach. Not every project needs every step at full depth — but this is the order I think in."
        />

        <motion.ol
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-14 grid gap-0 lg:grid-cols-7 lg:gap-3"
        >
          <motion.span
            aria-hidden
            className="absolute left-[15px] top-0 h-full w-px origin-top bg-gradient-to-b from-highlight/70 via-primary/40 to-violet/40 lg:left-0 lg:top-[15px] lg:h-px lg:w-full lg:origin-left lg:bg-gradient-to-r"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: easeOut }}
          />
          {approachSteps.map((step, i) => (
            <motion.li key={step.title} variants={fadeUp} className="group relative flex gap-5 pb-8 lg:flex-col lg:gap-0 lg:pb-0">
              <span className="relative z-10 grid size-8 shrink-0 place-items-center rounded-full border border-border-strong bg-background font-mono text-xs text-highlight transition-colors duration-300 group-hover:border-highlight group-hover:bg-highlight/10">
                {i + 1}
              </span>
              <div className="lg:mt-5 lg:pr-2">
                <h3 className="font-display text-base font-medium text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
