import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechIcon } from "@/components/ui/tech-icon";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

const filters = [{ id: "all", title: "All" }, ...skillGroups.map((g) => ({ id: g.id, title: g.title }))];

export function Skills() {
  const [filter, setFilter] = useState("all");
  const groups = filter === "all" ? skillGroups : skillGroups.filter((g) => g.id === filter);

  return (
    <section id="skills" aria-labelledby="skills-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="skills-title"
            index="02"
            eyebrow="Technical skills"
            title="The stack I build with."
            description="Grouped by where they sit in an application. Technologies I've used in real projects are marked hands-on; the rest I'm actively learning."
          />
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-highlight" aria-hidden /> Hands-on
            </span>
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full border border-violet" aria-hidden /> Learning
            </span>
          </div>
        </div>

        <div role="group" aria-label="Filter skills by category" className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={active}
                className={cn(
                  "relative rounded-lg border px-4 py-2 text-sm transition-colors duration-300",
                  active
                    ? "border-highlight/50 text-foreground"
                    : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="skill-filter"
                    aria-hidden
                    className="absolute inset-0 -z-10 rounded-lg bg-highlight/10"
                    transition={{ duration: 0.3, ease: easeOut }}
                  />
                ) : null}
                {f.title}
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-8 grid gap-4 md:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {groups.map((group, gi) => (
              <motion.article
                key={group.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: filter === "all" ? gi * 0.1 : 0, ease: easeOut }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-border-strong sm:p-7",
                  filter !== "all" && "md:col-span-2",
                )}
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-highlight/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-medium text-foreground">{group.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(group.skills.length).padStart(2, "0")} items
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">{group.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <span
                        title={skill.note ?? (skill.status === "learning" ? "Currently learning" : "Used hands-on in projects")}
                        className={cn(
                          "group/chip inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5",
                          skill.status === "hands-on"
                            ? "border-border bg-surface/70 text-foreground hover:border-highlight/50"
                            : "border-dashed border-violet/40 bg-transparent text-muted-foreground hover:border-violet/70",
                        )}
                      >
                        <TechIcon
                          slug={skill.icon}
                          className="opacity-80 transition-transform duration-300 group-hover/chip:rotate-[-6deg] group-hover/chip:scale-110 group-hover/chip:opacity-100"
                        />
                        {skill.name}
                        {skill.status === "learning" ? (
                          <span className="font-mono text-[10px] uppercase tracking-wider text-violet">learning</span>
                        ) : null}
                        {skill.note ? <span className="sr-only">({skill.note})</span> : null}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
