import resumeAsset from "@/assets/resume.pdf.asset.json";
import type { SiteConfig } from "@/types/portfolio";

/**
 * Central portfolio configuration. Edit values here — components read
 * everything from this file and from src/data/*.
 */
export const site: SiteConfig = {
  name: "Nuhmanu Ibnu Shibly",
  shortName: "Shibly",
  wordmark: "SHIBLY.DEV",
  title: "Full Stack Developer | MERN Stack Specialist",
  headline: "I Build Scalable Web Applications That Solve Real Problems.",
  intro:
    "Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, and modern backend architecture. I build responsive user experiences, secure APIs, real-time applications, and practical software products.",
  tagline: "Full stack engineering — from interface to API to database.",
  location: "Calicut, Kerala, India",
  email: "nuhmanushibly@gmail.com",
  phone: "+91 7592933286",
  resumeUrl: resumeAsset.url,
  resumeFileName: "Nuhman-Shibly-Mern-Stack-Developer.pdf",
  socials: [
    {
      key: "github",
      label: "GitHub",
      href: "https://github.com/shibly5365",
      handle: "shibly5365",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/in/nuhmanu-ibnu-shibly",
      handle: "nuhmanu-ibnu-shibly",
    },
    {
      key: "email",
      label: "Email",
      href: "mailto:nuhmanushibly@gmail.com",
      handle: "nuhmanushibly@gmail.com",
    },
  ],
  roles: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React & Node.js Developer",
    "Software Engineer",
  ],
  focusAreas: [
    "Full Stack Development",
    "MERN Stack Development",
    "React.js & Next.js",
    "REST API Design",
    "Auth, Authorization & RBAC",
    "Real-time Applications",
    "Database Design",
    "Problem Solving",
  ],
  availability: {
    open: true,
    statusLabel: "Open to opportunities",
    preferredLocations: ["Dubai, UAE", "Kerala", "Bangalore","Chennai"],
    willingToRelocate: true,
    note: "Currently based in India. Open to relevant software development roles in the UAE and willing to relocate.",
  },
};

export const githubUrl = site.socials.find((s) => s.key === "github")?.href ?? "";
export const linkedinUrl = site.socials.find((s) => s.key === "linkedin")?.href ?? "";

/** Primary in-page sections, in navigation order. */
export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export type NavSectionId = (typeof navSections)[number]["id"];
