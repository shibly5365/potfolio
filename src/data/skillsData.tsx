import React, { ReactNode } from "react";
import {
  FaAws,
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiGoogle,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiRedis,
  SiRedux,
  SiRender,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWebrtc,
} from "react-icons/si";
import { TbStack3 } from "react-icons/tb";

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface SkillCategory {
  title: string;
  description: string;
  gridClassName: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Modern, responsive interfaces with scalable state management.",
    gridClassName: "grid-cols-2 sm:grid-cols-2 lg:grid-cols-5",
    skills: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs color="currentColor" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
      { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
      { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
      { name: "Redux", icon: <SiRedux color="#764ABC" /> },
      { name: "Zustand", icon: <TbStack3 color="#BDA66D" /> },
    ],
  },
  {
    title: "Backend",
    description: "APIs, real-time systems, authentication, and peer connections.",
    gridClassName: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
    skills: [
      { name: "Node.js", icon: <FaNodeJs color="#6CC24A" /> },
      { name: "Express.js", icon: <SiExpress color="currentColor" /> },
      { name: "Socket.IO", icon: <SiSocketdotio color="currentColor" /> },
      { name: "WebRTC", icon: <SiWebrtc color="#3333FF" /> },
      { name: "JWT Auth", icon: <SiJsonwebtokens color="#D63AFF" /> },
      { name: "Google OAuth", icon: <SiGoogle color="#4285F4" /> },
    ],
  },
  {
    title: "Database & Caching",
    description: "Document, relational, and high-speed cache storage.",
    gridClassName: "grid-cols-3",
    skills: [
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
      { name: "Redis", icon: <SiRedis color="#DC382D" /> },
    ],
  },
  {
    title: "DevOps & Deployment",
    description: "Cloud hosting and production deployment workflows.",
    gridClassName: "grid-cols-3",
    skills: [
      { name: "AWS", icon: <FaAws color="#FF9900" /> },
      { name: "Vercel", icon: <SiVercel color="currentColor" /> },
      { name: "Render", icon: <SiRender color="#46E3B7" /> },
    ],
  },
  {
    title: "Tools",
    description: "Version control, testing, collaboration, and product design.",
    gridClassName: "grid-cols-2 sm:grid-cols-4",
    skills: [
      { name: "Git", icon: <FaGitAlt color="#F05032" /> },
      { name: "GitHub", icon: <FaGithub color="currentColor" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      { name: "Figma", icon: <FaFigma color="#F24E1E" /> },
    ],
  },
];
