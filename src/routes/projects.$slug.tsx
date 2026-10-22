import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { getProject, projects } from "@/data/projects";
import { ActionLink } from "@/components/ui/action-link";
import { Reveal } from "@/components/ui/reveal";
import { SocialIcon } from "@/components/ui/social-icon";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found | Nuhmanu Ibnu Shibly" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    const title = `${project.name} — ${project.category} | Nuhmanu Ibnu Shibly`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectPage,
});

function ProjectNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-40 text-center sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-highlight">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-foreground">That project doesn't exist.</h1>
      <Link to="/" hash="projects" className="mt-8 inline-flex items-center gap-2 text-highlight hover:underline">
        <ArrowLeft aria-hidden className="size-4" /> Back to projects
      </Link>
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];
  const live = project.links.find((l) => l.kind === "live");
  const repos = project.links.filter((l) => l.kind === "github");

  return (
    <article className="pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Link
          to="/"
          hash="projects"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          All projects
        </Link>

        <motion.header variants={stagger(0.08)} initial="hidden" animate="show" className="mt-8">
          <motion.p variants={fadeUp} className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]">
            <span className="text-highlight">{project.category}</span>
            <span aria-hidden className="h-px w-6 bg-border-strong" />
            <span className="text-muted-foreground">{project.context}</span>
            <span
              className={cn(
                "rounded-md border px-2 py-0.5 normal-case tracking-normal",
                project.status === "Ongoing" ? "border-violet/40 text-violet" : "border-success/40 text-success",
              )}
            >
              {project.status}
            </span>
          </motion.p>
          <motion.h1 variants={fadeUp} className="mt-5 text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            {project.name}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {project.summary}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {live ? (
              <ActionLink href={live.href} external icon="external">
                Live demo
              </ActionLink>
            ) : null}
            {repos.map((r, i) => (
              <ActionLink key={r.href} href={r.href} external variant={i === 0 && !live ? "primary" : "secondary"} icon="external">
                <SocialIcon name="github" />
                {r.label}
              </ActionLink>
            ))}
          </motion.div>
        </motion.header>
      </div>

      {project.image ? (
        <Reveal className="mx-auto mt-14 max-w-6xl px-5 sm:px-8">
          <figure className="overflow-hidden rounded-3xl border border-border-strong bg-surface shadow-elegant">
            <img
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              className="h-auto w-full"
            />
            <figcaption className="border-t border-border px-5 py-3 font-mono text-[11px] text-muted-foreground">
              {project.image.isScreenshot
                ? "Screenshot of the deployed application."
                : "Illustrative concept of the interface — not a screenshot of the live product."}
            </figcaption>
          </figure>
        </Reveal>
      ) : null}

      <div className="mx-auto mt-16 grid max-w-5xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_260px]">
        <div className="space-y-14">
          <Block label="The problem">
            <p className="text-lg leading-relaxed text-foreground/85">{project.problem}</p>
          </Block>
          <Block label="Key features">
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm text-foreground/90">
                  <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-highlight" />
                  {f}
                </li>
              ))}
            </ul>
          </Block>
          <Block label="My contribution">
            <p className="leading-relaxed text-foreground/85">{project.contribution}</p>
          </Block>
          <Block label="Architecture & implementation">
            <ol className="space-y-4">
              {project.architecture.map((a, i) => (
                <li key={a} className="flex gap-4">
                  <span className="font-mono text-xs text-highlight">{String(i + 1).padStart(2, "0")}</span>
                  <p className="leading-relaxed text-foreground/85">{a}</p>
                </li>
              ))}
            </ol>
          </Block>
          {project.challenges.length > 0 ? (
            <Block label="Challenges & solutions">
              <div className="space-y-4">
                {project.challenges.map((c) => (
                  <div key={c.challenge} className="rounded-2xl border border-border bg-card p-6">
                    <p className="font-display text-lg text-foreground">{c.challenge}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="font-mono text-xs uppercase tracking-[0.16em] text-highlight">Approach — </span>
                      {c.approach}
                    </p>
                  </div>
                ))}
              </div>
            </Block>
          ) : null}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Technology stack</p>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <li key={t} className="rounded-md border border-border bg-surface/60 px-2.5 py-1 font-mono text-xs text-foreground/85">
                {t}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {next && next.slug !== project.slug ? (
        <div className="mx-auto mt-24 max-w-5xl px-5 sm:px-8">
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group flex items-center justify-between gap-6 rounded-2xl border border-border bg-card p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-highlight/40 sm:p-8"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Next project</p>
              <p className="mt-2 font-display text-2xl font-medium text-foreground sm:text-3xl">{next.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{next.category}</p>
            </div>
            <ArrowRight aria-hidden className="size-6 shrink-0 text-highlight transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      ) : null}
    </article>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
      <h2 className="mb-5 font-mono text-xs font-normal uppercase tracking-[0.2em] text-highlight">{label}</h2>
      {children}
    </motion.section>
  );
}
