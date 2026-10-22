import { Link } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";

import { navSections, site } from "@/config/site";
import { SocialIcon } from "@/components/ui/social-icon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_auto]">
        <div>
          <p className="font-display text-lg font-semibold tracking-[0.14em] text-foreground">
            SHIBLY<span className="text-highlight">.DEV</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">{site.tagline}</p>
          <ul className="mt-6 flex gap-2">
            {site.socials.map((s) => (
              <li key={s.key}>
                <a
                  href={s.href}
                  {...(s.key === "email" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-lg border border-border bg-surface/50 text-muted-foreground transition-[color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-highlight/50 hover:text-highlight"
                >
                  <SocialIcon name={s.key} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Footer">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Navigate</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {navSections.map((s) => (
              <li key={s.id}>
                <Link to="/" hash={s.id} className="text-sm text-foreground/80 transition-colors hover:text-highlight">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex md:items-start">
          <Link
            to="/"
            hash="home"
            className="group inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:border-highlight/50 hover:text-foreground"
          >
            Back to top
            <ArrowUp aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-mono">Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
