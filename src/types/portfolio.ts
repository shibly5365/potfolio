export type SocialKey = "github" | "linkedin" | "email" | "portfolio";

export interface SocialLink {
  key: SocialKey;
  label: string;
  href: string;
  handle: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  wordmark: string;
  title: string;
  headline: string;
  intro: string;
  tagline: string;
  location: string;
  email: string;
  /** Leave empty to hide the phone number everywhere. */                   
  phone: string;
  uaePhone:string;
  resumeUrl: string;
  resumeFileName: string;
  socials: SocialLink[];
  roles: string[];
  focusAreas: string[];
  availability: {
    open: boolean;
    statusLabel: string;
    preferredLocations: string[];
    willingToRelocate: boolean;
    note: string;
  };
}

export type SkillStatus = "hands-on" | "learning";

export interface Skill {
  name: string;
  /** simpleicons.org slug, when a recognizable logo exists. */
  icon?: string | undefined;
  status: SkillStatus;
  note?: string | undefined;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: "Internship" | "Full-time" | "Part-time" | "Contract" | "Freelance";
  location: string;
  /** ISO month, e.g. "2025-01". */
  start: string;
  /** ISO month, or null when ongoing. */
  end: string | null;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
  kind: "github" | "live";
}

export interface ProjectChallenge {
  challenge: string;
  approach: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  status: "Ongoing" | "Completed";
  context: string;
  featured: boolean;
  summary: string;
  problem: string;
  features: string[];
  contribution: string;
  stack: string[];
  architecture: string[];
  challenges: ProjectChallenge[];
  links: ProjectLink[];
  image?:
    | {
        src: string;
        alt: string;
        width: number;
        height: number;
        /** True when the image is a real screenshot of the running app. */
        isScreenshot: boolean;
      }
    | undefined;
}

export interface Metric {
  label: string;
  value: number;
  suffix?: string | undefined;
  source: string;
}

export interface ApproachStep {
  title: string;
  description: string;
}

export interface LearningTrack {
  title: string;
  description: string;
}
