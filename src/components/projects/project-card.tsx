import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import type { Project } from "@/types/portfolio";
import { ActionIcon, ActionLink, actionVariants } from "@/components/ui/action-link";
import { SocialIcon } from "@/components/ui/social-icon";
import { easeOut, fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function FeaturedProjectCard({ project, index, reverse }: { project: Project; index: number; reverse: boolean }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const live = project.links.find((l) => l.kind === "live");
  const repos = project.links.filter((l) => l.kind === "github");

  return (
    <motion.article
      variants={fadeUp}
      data-cursor="hover"
      aria-labelledby={`${project.slug}-title`}
      className="group/card relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:border-border-strong hover:shadow-elegant"
    >
      <div className={cn("grid lg:grid-cols-2", reverse && "lg:[&>*:first-child]:order-2")}>
        <div className="relative overflow-hidden border-b border-border bg-surface lg:border-b-0">
          {project.image ? (
            <img
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover/card:scale-[1.04]"
            />
          ) : null}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
          <span className="glass absolute left-4 top-4 rounded-md border border-border-strong px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground">
            {project.image?.isScreenshot ? "Live screenshot" : "Illustrative concept"}
          </span>
          <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-[opacity,transform] duration-500 ease-out group-hover/card:translate-y-0 group-hover/card:opacity-100">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-highlight">Key features</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {project.features.slice(0, 4).map((f) => (
                <li key={f} className="glass rounded-md border border-border px-2 py-1 text-[11px] text-foreground">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em]">
            <span className="text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
            <span aria-hidden className="h-px w-6 bg-border-strong" />
            <span className="text-highlight">{project.category}</span>
            <span
              className={cn(
                "ml-auto rounded-md border px-2 py-0.5 normal-case tracking-normal",
                project.status === "Ongoing" ? "border-violet/40 text-violet" : "border-success/40 text-success",
              )}
            >
              {project.status}
            </span>
          </div>
          <h3 id={`${project.slug}-title`} className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.context}</p>
          <p className="mt-5 leading-relaxed text-foreground/85">{project.summary}</p>

          <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technology stack">
            {project.stack.map((t) => (
              <li key={t} className="rounded-md border border-border bg-surface/60 px-2 py-1 font-mono text-[11px] text-muted-foreground">
                {t}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={panelId}
            className="mt-7 flex items-center justify-between rounded-lg border border-border px-4 py-3 text-left text-sm text-foreground transition-colors hover:border-highlight/40"
          >
            <span>
              <span className="font-mono text-xs text-highlight">{open ? "−" : "+"}</span> Engineering notes
            </span>
            <ChevronDown aria-hidden className={cn("size-4 transition-transform duration-300", open && "rotate-180")} />
          </button>
          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                id={panelId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: easeOut }}
                className="overflow-hidden"
              >
                <div className="space-y-5 pt-5 text-sm leading-relaxed">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Problem</p>
                    <p className="mt-1.5 text-foreground/85">{project.problem}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">My contribution</p>
                    <p className="mt-1.5 text-foreground/85">{project.contribution}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Architecture</p>
                    <ul className="mt-1.5 space-y-1.5">
                      {project.architecture.map((a) => (
                        <li key={a} className="flex gap-2.5 text-foreground/85">
                          <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-highlight" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-8">
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className={actionVariants({ variant: "primary", size: "md" })}
            >
              View case study
              <ActionIcon icon="arrow" />
            </Link>
            {live ? (
              <ActionLink href={live.href} external variant="secondary" icon="external">
                Live demo
              </ActionLink>
            ) : null}
            {repos.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-lg px-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <SocialIcon name="github" />
                {r.label}
                <span className="sr-only"> on GitHub (opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function CompactProjectCard({ project }: { project: Project }) {
  const live = project.links.find((l) => l.kind === "live");
  const repo = project.links.find((l) => l.kind === "github");
  return (
    <motion.article
      variants={fadeUp}
      className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-highlight/40"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-highlight">{project.category}</p>
      <h3 className="mt-3 font-display text-xl font-medium text-foreground">{project.name}</h3>
      <p className="mt-1 text-xs text-muted-foreground">{project.context}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technology stack">
        {project.stack.map((t) => (
          <li key={t} className="rounded-md border border-border px-2 py-0.5 font-mono text-[10.5px] text-muted-foreground">
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-4 pt-6 text-sm">
        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="group/l inline-flex items-center gap-1.5 text-foreground hover:text-highlight"
        >
          Details
          <ActionIcon icon="arrow" />
        </Link>
        {repo ? (
          <a href={repo.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground">
            <SocialIcon name="github" /> Code<span className="sr-only"> on GitHub (opens in a new tab)</span>
          </a>
        ) : null}
        {live ? (
          <a href={live.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground">
            Live demo<span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
