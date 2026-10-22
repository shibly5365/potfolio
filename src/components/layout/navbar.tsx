import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { navSections, site } from "@/config/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { actionVariants } from "@/components/ui/action-link";

const sectionIds = navSections.map((s) => s.id);

export function Navbar() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const active = useActiveSection(sectionIds, onHome);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lightTheme, setLightTheme] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("shibly-theme");
    const useLightTheme = savedTheme === "light";
    setLightTheme(useLightTheme);
    document.documentElement.dataset.theme = useLightTheme ? "light" : "dark";
  }, []);

  const toggleTheme = () => {
    const nextIsLight = !lightTheme;
    setLightTheme(nextIsLight);
    document.documentElement.dataset.theme = nextIsLight ? "light" : "dark";
    window.localStorage.setItem("shibly-theme", nextIsLight ? "light" : "dark");
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open ? "glass border-b border-border" : "border-b border-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          hash="home"
          className="group flex items-center gap-2 font-display text-[0.95rem] font-semibold tracking-[0.14em] text-foreground"
          aria-label={`${site.wordmark} — home`}
        >
          <span className="grid size-7 place-items-center rounded-md border border-border-strong bg-surface font-mono text-xs text-highlight transition-colors group-hover:border-highlight/60">
            {"</>"}
          </span>
          {site.wordmark.split(".")[0]}
          <span className="-ml-2 text-highlight">.{site.wordmark.split(".")[1]}</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navSections.map((s) => {
            const isActive = onHome && active === s.id;
            return (
              <li key={s.id}>
                <Link
                  to="/"
                  hash={s.id}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "group relative px-3 py-2 text-sm transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {s.label}
                  <span
                    aria-hidden
                    className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-muted-foreground/60 transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />
                  {isActive ? (
                    <motion.span
                      layoutId="nav-underline"
                      aria-hidden
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-highlight"
                      transition={{ duration: 0.35, ease: easeOut }}
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${lightTheme ? "dark" : "light"} theme`}
            title={`Switch to ${lightTheme ? "dark" : "light"} theme`}
            className="grid size-10 place-items-center rounded-lg border border-border-strong bg-surface/60 text-foreground transition-colors hover:border-highlight/60"
          >
            {lightTheme ? <Moon className="size-4" aria-hidden /> : <Sun className="size-4" aria-hidden />}
          </button>
          <a
            href={site.resumeUrl}
            download={site.resumeFileName}
            className={cn(actionVariants({ variant: "secondary", size: "sm" }), "hidden sm:inline-flex")}
          >
            <Download aria-hidden className="size-4 transition-transform duration-300 group-hover/action:translate-y-0.5" />
            Resume
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-lg border border-border-strong bg-surface/60 text-foreground transition-colors hover:border-highlight/60 lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="overflow-hidden border-t border-border lg:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
              {navSections.map((s, i) => (
                <motion.li
                  key={s.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3, ease: easeOut }}
                >
                  <Link
                    to="/"
                    hash={s.id}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-3 py-3 font-display text-lg transition-colors hover:bg-surface",
                      onHome && active === s.id ? "text-highlight" : "text-foreground",
                    )}
                  >
                    {s.label}
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  </Link>
                </motion.li>
              ))}
              <li className="mt-2">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-foreground transition-colors hover:bg-surface"
                >
                  {lightTheme ? <Moon className="size-4" aria-hidden /> : <Sun className="size-4" aria-hidden />}
                  Switch to {lightTheme ? "dark" : "light"} theme
                </button>
              </li>
              <li className="mt-3 sm:hidden">
                <a
                  href={site.resumeUrl}
                  download={site.resumeFileName}
                  className={cn(actionVariants({ variant: "primary", size: "md" }), "w-full")}
                >
                  <Download aria-hidden className="size-4" />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
