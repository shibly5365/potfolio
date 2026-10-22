import { Link } from "@tanstack/react-router";
import { MapPin, Plane } from "lucide-react";
import type { CSSProperties } from "react";

import { githubUrl, linkedinUrl, site } from "@/config/site";
import { useTypewriter } from "@/hooks/use-typewriter";
import { ActionIcon, ActionLink, actionVariants } from "@/components/ui/action-link";
import { Magnetic } from "@/components/ui/magnetic";
import { SocialIcon } from "@/components/ui/social-icon";
import { cn } from "@/lib/utils";

const rise = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

export function Hero() {
  const { text, isStatic } = useTypewriter(site.roles);

  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate pt-28 sm:pt-32 lg:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[420px] w-[min(900px,100%)] -translate-x-1/2 rounded-full bg-primary/15 blur-[110px]"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-28">
        <div className="min-w-0">
          <p
            className="animate-rise inline-flex items-center gap-2.5 rounded-md border border-border-strong bg-surface/60 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
            style={rise(0)}
          >
            <span className="relative flex size-2">
              <span className="animate-pulse-ring absolute inset-0 rounded-full bg-success" />
              <span className="relative size-2 rounded-full bg-success" />
            </span>
            Full Stack Developer
          </p>

          <h1
            id="hero-title"
            className="animate-rise mt-6 text-balance text-[2.5rem] font-semibold leading-[1.04] text-foreground sm:text-6xl lg:text-[4.25rem]"
            style={rise(80)}
          >
            I Build Scalable Web Applications That <span className="text-gradient">Solve Real Problems.</span>
          </h1>

          <p
            className="animate-rise mt-6 flex min-h-[1.75rem] items-center font-mono text-base text-highlight sm:text-lg"
            style={rise(160)}
            aria-label={isStatic ? undefined : `Roles: ${site.roles.join(", ")}`}
          >
            <span aria-hidden className="mr-2 text-muted-foreground">{">"}</span>
            <span aria-hidden={!isStatic}>{text}</span>
            {!isStatic ? <span aria-hidden className="animate-caret ml-0.5 inline-block h-5 w-[2px] bg-highlight" /> : null}
          </p>

          <p
            className="animate-rise mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={rise(240)}
          >
            {site.intro}
          </p>

          <div className="animate-rise mt-9 flex flex-wrap items-center gap-3" style={rise(320)}>
            <Magnetic>
              <Link to="/" hash="projects" className={actionVariants({ variant: "primary", size: "lg" })}>
                Explore My Work
                <ActionIcon icon="arrow" />
              </Link>
            </Magnetic>
            <ActionLink href={site.resumeUrl} download={site.resumeFileName} variant="secondary" size="lg" icon="download">
              Download Resume
            </ActionLink>
            <Link to="/" hash="contact" className={cn(actionVariants({ variant: "ghost", size: "lg" }), "px-3")}>
              Let's Connect
              <ActionIcon icon="arrow" />
            </Link>
          </div>

          <div
            className="animate-rise mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between"
            style={rise(400)}
          >
            <div className="flex items-center gap-2">
              {[
                { key: "github" as const, href: githubUrl, label: "GitHub profile" },
                { key: "linkedin" as const, href: linkedinUrl, label: "LinkedIn profile" },
              ].map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (opens in a new tab)`}
                  className="grid size-10 place-items-center rounded-lg border border-border bg-surface/50 text-muted-foreground transition-[color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-highlight/50 hover:text-highlight"
                >
                  <SocialIcon name={s.key} />
                </a>
              ))}
            </div>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Plane aria-hidden className="size-4 text-highlight" />
              Open to roles in <span className="text-foreground">Dubai & Abu Dhabi</span>
              <span aria-hidden className="text-border-strong">·</span>
              Willing to relocate
            </p>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="animate-rise relative mx-auto w-full min-w-0 max-w-[520px] lg:max-w-none" style={rise(260)}>
      <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-violet/20 blur-2xl" />

      <figure className="glass relative overflow-hidden rounded-2xl border border-border-strong shadow-card">
        <figcaption className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-destructive/70" />
            <span className="size-2.5 rounded-full bg-code-bool/70" />
            <span className="size-2.5 rounded-full bg-success/70" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">engineer.ts</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">TS</span>
        </figcaption>
        <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-[1.75] sm:text-[13px]">
          <code>
            <Line n={1}>
              <K>const</K> engineer = {"{"}
            </Line>
            <Line n={2} indent>
              name: <S>"{site.name}"</S>,
            </Line>
            <Line n={3} indent>
              role: <S>"Full Stack Developer"</S>,
            </Line>
            <Line n={4} indent>
              stack: [<S>"MongoDB"</S>, <S>"Express"</S>, <S>"React"</S>, <S>"Node"</S>],
            </Line>
            <Line n={5} indent>
              focus: [<S>"APIs"</S>, <S>"RBAC"</S>, <S>"Real-time"</S>],
            </Line>
            <Line n={6} indent>
              basedIn: <S>"India"</S>,
            </Line>
            <Line n={7} indent>
              openTo: [<S>"Dubai"</S>, <S>"Abu Dhabi"</S>],
            </Line>
            <Line n={8} indent>
              willingToRelocate: <B>true</B>,
            </Line>
            <Line n={9}>{"};"}</Line>
          </code>
        </pre>
        <div className="flex items-center justify-between border-t border-border px-4 py-2.5 font-mono text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-success" aria-hidden /> compiled · 0 errors
          </span>
          <span>UTF-8</span>
        </div>
      </figure>

      <div className="animate-bob absolute -bottom-16 -left-3 bg-surface hidden rounded-xl border border-border-strong px-4 py-3 shadow-card sm:block lg:-left-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Currently building</p>
        <p className="mt-1 font-display text-sm font-medium text-foreground">
          DineFlow <span className="text-muted-foreground">· Restaurant SaaS</span>
        </p>
      </div>
      <div className="animate-bob glass absolute -right-3 -top-5 hidden items-center gap-2 rounded-xl border border-border-strong px-3.5 py-2.5 shadow-card [animation-delay:-3s] sm:flex lg:-right-6">
        <MapPin aria-hidden className="size-4 text-violet" />
        <span className="text-xs text-foreground">Calicut, India → UAE</span>
      </div>
    </div>
  );
}

function Line({ n, indent, children }: { n: number; indent?: boolean; children: React.ReactNode }) {
  return (
    <span className="block whitespace-pre text-foreground/90">
      <span aria-hidden className="mr-4 inline-block w-4 select-none text-right text-muted-foreground/50">
        {n}
      </span>
      {indent ? "  " : ""}
      {children}
    </span>
  );
}
const K = ({ children }: { children: React.ReactNode }) => <span className="text-code-key">{children}</span>;
const S = ({ children }: { children: React.ReactNode }) => <span className="text-code-string">{children}</span>;
const B = ({ children }: { children: React.ReactNode }) => <span className="text-code-bool">{children}</span>;
