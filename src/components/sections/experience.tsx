import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";

import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { formatMonth } from "@/lib/dates";
import { easeOut, fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          id="experience-title"
          index="03"
          eyebrow="Experience"
          title="Where I've been building."
          description="Professional experience to date. Each role is listed with its actual type and dates."
        />

        <ol className="relative mt-14 pl-8 sm:pl-12">
          <motion.span
            aria-hidden
            className="absolute bottom-0 left-[7px] top-2 w-px origin-top bg-gradient-to-b from-highlight via-primary/60 to-transparent sm:left-[11px]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: easeOut }}
          />

          {experience.map((item) => (
            <motion.li
              key={item.id}
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="relative pb-12"
            >
              <span
                aria-hidden
                className="absolute -left-8 top-1.5 grid size-4 place-items-center rounded-full border border-highlight bg-background sm:-left-12 sm:size-6"
              >
                <span className="size-1.5 rounded-full bg-highlight sm:size-2" />
              </span>

              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-border-strong sm:p-8"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-highlight">
                      <time dateTime={item.start}>{formatMonth(item.start)}</time> —{" "}
                      {item.end ? <time dateTime={item.end}>{formatMonth(item.end)}</time> : "Present"}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-foreground sm:text-2xl">{item.role}</h3>
                    <p className="mt-1 text-muted-foreground">{item.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-violet/40 bg-violet/10 px-2.5 py-1 text-xs text-foreground">
                      <Briefcase aria-hidden className="size-3.5 text-violet" /> {item.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin aria-hidden className="size-3.5" /> {item.location}
                    </span>
                  </div>
                </div>

                <motion.p variants={fadeUp} className="mt-5 leading-relaxed text-foreground/85">
                  {item.summary}
                </motion.p>
                <ul className="mt-5 space-y-2.5">
                  {item.highlights.map((h) => (
                    <motion.li key={h} variants={fadeUp} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-highlight" />
                      {h}
                    </motion.li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies used">
                  {item.stack.map((t) => (
                    <li key={t} className="rounded-md border border-border bg-surface/60 px-2 py-1 font-mono text-[11px] text-muted-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.li>
          ))}

          <motion.li variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="relative">
            <span
              aria-hidden
              className="absolute -left-8 top-1.5 size-4 rounded-full border border-dashed border-muted-foreground/60 bg-background sm:-left-12 sm:size-6"
            />
            <div className="rounded-2xl border border-dashed border-border-strong p-6 sm:p-7">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Next chapter</p>
              <p className="mt-2 font-display text-lg text-foreground">
                Looking for a Full Stack / MERN Stack role 
              </p>
              <Link
                to="/"
                hash="contact"
                className="group mt-4 inline-flex items-center gap-2 text-sm text-highlight hover:underline"
              >
                Start a conversation
                <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.li>
        </ol>
      </div>
    </section>
  );
}
