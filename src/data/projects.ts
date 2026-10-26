import dineflowImage from "@/assets/dineflow-concept.jpg";
import healthcareConcept from "@/assets/healthcarePro.png";
import type { Project } from "@/types/portfolio";

/**
 * Project catalogue. Add a new object to publish a new project — cards,
 * detail pages and the sitemap are generated from this list.
 */
export const projects: Project[] = [
  {
    slug: "dineflow",
    name: "DineFlow",
    category: "Restaurant SaaS / CRM Platform",
    status: "Ongoing",
    context: "Team project · 3 developers · Agile",
    featured: true,
    summary:
      "A multi-restaurant SaaS CRM that brings staff roles, menus, orders, customer feedback, alerts and payments into one platform.",
    problem:
      "Restaurants often run operations across disconnected tools — paper orders, spreadsheets, separate payment apps and no structured customer feedback. DineFlow centralises these workflows so each restaurant can manage its team, menu and customers from one place.",
    features: [
      "Multi-restaurant support with a shared authentication system",
      "Role-based user management for owners and staff",
      "Menu and order management workflows",
      "Customer feedback collection and alerts",
      "Analytics views for restaurant activity",
      "Razorpay payment integration",
    ],
    contribution:
      "Worked as one of three developers in an Agile team. Contributed to core modules (user roles, analytics, alerts, feedback and payments), designed database schemas and the shared authentication layer, and followed a branch → pull request → code review workflow on GitHub.",
    stack: [
      "Next.js",
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Socket.io",
      "AWS",
      "Razorpay",
    ],
    architecture: [
      "Backend structured as a modular monolith: each module owns its model, service, controller and route layers.",
      "Shared error handling, security headers (Helmet) and request validation (express-validator) applied across modules.",
      "Mongoose schemas designed around restaurants as tenants, so data stays scoped per restaurant.",
      "Redis and Socket.io available for caching and real-time updates.",
    ],
    challenges: [
      {
        challenge: "Keeping a growing codebase maintainable across a team of three.",
        approach:
          "Split the backend into self-contained modules with a consistent folder contract, so features could be built and reviewed in parallel.",
      },
      {
        challenge: "One login system for many restaurants and many roles.",
        approach:
          "Designed a shared authentication system with role checks, rather than duplicating auth logic per module.",
      },
    ],
    links: [
      { label: "Frontend repo", href: "https://github.com/shibly5365/ResProject-Frontend", kind: "github" },
      { label: "Backend repo", href: "https://github.com/shibly5365/ResProject-backend", kind: "github" },
    ],
    image: {
      src: dineflowImage,
      alt: "Illustrative concept of a DineFlow restaurant dashboard with orders, menu items and feedback panels",
      width: 1440,
      height: 912,
      isScreenshot: false,
    },
  },
  {
    slug: "healthcare-pro",
    name: "Healthcare Pro",
    category: "Hospital Management System",
    status: "Completed",
    context: "Individual project · Full-stack MERN",
    featured: true,
    summary:
      "A hospital management platform with appointment booking, doctor scheduling, live chat, video consultations and online payments.",
    problem:
      "Patients and clinics need a simple way to book appointments, consult remotely and pay online, while doctors need control over their schedules. Healthcare Pro connects patients, doctors and administrators in one role-aware system.",
    features: [
      "Online and offline appointment booking",
      "Doctor scheduling and availability management",
      "Real-time chat between patients and doctors",
      "Video consultations over WebRTC",
      "Razorpay payments and patient feedback",
      "JWT authentication with RBAC for 5 user roles",
      "Google sign-in",
    ],
    contribution:
      "Designed and built the entire application individually — frontend, REST API, database models, authentication, real-time features and payment integration.",
    stack: [
      "React",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Socket.io",
      "WebRTC",
      "JWT",
      "Razorpay",
    ],
    architecture: [
      "Modular Express.js backend with Mongoose models, Joi request validation and structured logging (Winston).",
      "Socket.io powers live chat and acts as the signalling channel for peer-to-peer WebRTC video calls.",
      "Role-based route guards on both the API and the React app, driven by JWT claims.",
      "Reusable UI component library with client state in Zustand and server state in TanStack Query.",
    ],
    challenges: [
      {
        challenge: "Setting up reliable peer-to-peer video calls in the browser.",
        approach:
          "Used the existing Socket.io connection to exchange WebRTC signalling data, avoiding a separate signalling service.",
      },
      {
        challenge: "Five roles with very different permissions.",
        approach:
          "Centralised role checks in middleware and mirrored them in protected frontend routes, so permissions are enforced server-side first.",
      },
    ],
    links: [
      { label: "Live demo", href: "https://hospital-front-end-delta.vercel.app", kind: "live" },
      { label: "Frontend repo", href: "https://github.com/shibly5365/HospitalFrontEnd", kind: "github" },
      { label: "Backend repo", href: "https://github.com/shibly5365/HospitalBackEnd", kind: "github" },
    ],
    image: {
      src: healthcareConcept,
      alt: "Illustrated Healthcare Pro hospital dashboard with appointment scheduling, doctor cards, patient statistics, a calendar, and video consultation",
      width: 1440,
      height: 900,
      isScreenshot: false,
    },
  },
  {
    slug: "task-management-saas",
    name: "Task Management SaaS",
    category: "Productivity web app",
    status: "Completed",
    context: "Individual project",
    featured: false,
    summary:
      "A full-stack task manager with secure sign-up, per-user task isolation and status tracking.",
    problem:
      "A focused exercise in building a secure multi-user CRUD application on a relational database.",
    features: [
      "JWT sign-up / login with bcrypt password hashing",
      "Create, update, delete and track task status",
      "Each user only sees their own tasks",
      "Input validation on frontend and backend",
    ],
    contribution: "Built individually — React frontend, Express API and PostgreSQL schema.",
    stack: ["React", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Sequelize", "JWT"],
    architecture: [
      "Express controllers and routes over a Sequelize data layer.",
      "Ownership checks on every task query to enforce per-user isolation.",
    ],
    challenges: [],
    links: [
      { label: "Live demo", href: "https://task-management-saas-five.vercel.app", kind: "live" },
      { label: "Repository", href: "https://github.com/shibly5365/task-management-saas", kind: "github" },
    ],
  },
  {
    slug: "multi-store-stock-management",
    name: "Multi-Store Stock Management",
    category: "Inventory system",
    status: "Completed",
    context: "Backend-focused machine test",
    featured: false,
    summary:
      "A MERN application for managing products, stores and stock levels across multiple locations.",
    problem:
      "Administrators need to manage inventory across several stores while shoppers check what is available where.",
    features: [
      "Admin management of products, stores and stock",
      "Shopper view of available products and stock levels",
    ],
    contribution: "Built individually as a backend-focused technical assessment.",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    architecture: ["REST API modelling the relationship between products, stores and stock."],
    challenges: [],
    links: [
      { label: "Repository", href: "https://github.com/shibly5365/stock-management-system", kind: "github" },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
