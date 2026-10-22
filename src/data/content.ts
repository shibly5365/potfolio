import { experience } from "@/data/experience";
import { featuredProjects } from "@/data/projects";
import type { ApproachStep, LearningTrack, Metric } from "@/types/portfolio";
import { monthsBetween } from "@/lib/dates";

const internship = experience.find((e) => e.id === "bridgeon");

/** Only metrics that can be checked against the resume or GitHub. */
export const metrics: Metric[] = [
  {
    label: "Full-stack products built",
    value: featuredProjects.length,
    source: "Featured projects",
  },
  {
    label: "User roles secured with RBAC",
    value: 5,
    source: "Healthcare Pro",
  },
  {
    label: "Months of hands-on internship",
    value: internship ? monthsBetween(internship.start, internship.end) : 0,
    suffix: "+",
    source: "Bridgeon Solutions",
  },
  {
    label: "Public repositories",
    value: 28,
    source: "GitHub",
  },
];

export const aboutPoints: { title: string; description: string }[] = [
  {
    title: "Self-directed learner",
    description: "I learn by building — documentation, experiments and real features over tutorials.",
  },
  {
    title: "Practical implementation",
    description: "Payments, video calls, live chat and RBAC shipped in actual products, not just demos.",
  },
  {
    title: "Problem solver",
    description: "I break problems into data, flows and edge cases before writing code.",
  },
  {
    title: "Team collaborator",
    description: "Comfortable with Agile sprints, pull requests, code reviews and shared ownership.",
  },
  {
    title: "Maintainable code",
    description: "Modular structure, reusable components and clear boundaries between layers.",
  },
  {
    title: "Always improving",
    description: "Regular DSA practice and study of scalable software architecture.",
  },
];

export const approachSteps: ApproachStep[] = [
  {
    title: "Understand the problem",
    description: "Clarify requirements, users and constraints before choosing tools.",
  },
  {
    title: "Design data & architecture",
    description: "Model entities, relationships and module boundaries.",
  },
  {
    title: "Build reusable UI",
    description: "Compose interfaces from small, typed, reusable components.",
  },
  {
    title: "Implement APIs & logic",
    description: "Write REST endpoints and business rules with clear layers.",
  },
  {
    title: "Secure & validate",
    description: "Add authentication, role-based authorization and input validation.",
  },
  {
    title: "Test, debug & refine",
    description: "Exercise flows with Postman and the UI; fix edge cases.",
  },
  {
    title: "Deploy & iterate",
    description: "Ship, gather feedback and improve in small increments.",
  },
];

export const learningTracks: LearningTrack[] = [
  { title: "Data Structures & Algorithms", description: "Regular problem solving on LeetCode." },
  { title: "JavaScript & TypeScript", description: "Language fundamentals, types and runtime behaviour." },
  { title: "Backend architecture", description: "Modular monoliths, layering and service boundaries." },
  { title: "Database design", description: "Schema modelling for MongoDB and PostgreSQL." },
  { title: "API design", description: "Consistent, versionable and well-validated REST APIs." },
  { title: "System design", description: "Scalability, caching and trade-offs between approaches." },
  { title: "Performance & maintainability", description: "Measuring, profiling and keeping code easy to change." },
];

export const leetcodeRepoUrl = "https://github.com/shibly5365/leetcode-qustion";
