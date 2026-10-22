import type { SkillGroup } from "@/types/portfolio";

/**
 * "hands-on" = used in real projects (resume / GitHub repos).
 * "learning" = actively studying; not yet used in a shipped project.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Responsive, component-driven interfaces with predictable state.",
    skills: [
      { name: "React.js", icon: "react", status: "hands-on" },
      { name: "Next.js", icon: "nextdotjs", status: "hands-on" },
      { name: "TypeScript", icon: "typescript", status: "hands-on" },
      { name: "JavaScript", icon: "javascript", status: "hands-on" },
      { name: "Redux Toolkit", icon: "redux", status: "hands-on" },
      { name: "Zustand", status: "hands-on" },
      { name: "Tailwind CSS", icon: "tailwindcss", status: "hands-on" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Secure REST APIs, access control and real-time communication.",
    skills: [
      { name: "Node.js", icon: "nodedotjs", status: "hands-on" },
      { name: "Express.js", icon: "express", status: "hands-on" },
      { name: "RESTful APIs", status: "hands-on" },
      { name: "RBAC", status: "hands-on", note: "Role-Based Access Control" },
      { name: "JWT Auth", icon: "jsonwebtokens", status: "hands-on" },
      { name: "Socket.io", icon: "socketdotio", status: "hands-on" },
      { name: "WebRTC", icon: "webrtc", status: "hands-on" },
    ],
  },
  {
    id: "data-cloud",
    title: "Databases & Cloud",
    description: "Schema design, caching and the path to production.",
    skills: [
      { name: "MongoDB", icon: "mongodb", status: "hands-on" },
      { name: "PostgreSQL", icon: "postgresql", status: "hands-on" },
      { name: "Redis", icon: "redis", status: "hands-on" },
      { name: "Firebase", icon: "firebase", status: "hands-on" },
      { name: "AWS", status: "hands-on" },
      { name: "CI/CD", icon: "githubactions", status: "hands-on", note: "Basic pipelines" },
      { name: "Docker", icon: "docker", status: "learning" },
      { name: "Microservices", status: "learning" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Methods",
    description: "How I collaborate, ship and keep code reviewable.",
    skills: [
      { name: "Git", icon: "git", status: "hands-on" },
      { name: "GitHub", icon: "github", status: "hands-on" },
      { name: "Postman", icon: "postman", status: "hands-on" },
      { name: "Razorpay API", icon: "razorpay", status: "hands-on" },
      { name: "ClickUp", icon: "clickup", status: "hands-on" },
      { name: "Agile / Scrum", status: "hands-on" },
      { name: "Figma", icon: "figma", status: "learning" },
      { name: "System Design", status: "learning" },
      { name: "DSA", icon: "leetcode", status: "learning", note: "Ongoing LeetCode practice" },
    ],
  },
];
