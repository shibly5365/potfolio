import React, { ReactNode } from "react";
import { FaReact, FaNodeJs, FaBootstrap, FaHtml5, FaCss3Alt, FaAws, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiExpress, SiRedux, SiTailwindcss, SiJavascript, SiMongodb, SiJquery, SiPostman, SiFigma, SiClickup, SiNotion } from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { GiNetworkBars } from "react-icons/gi";

export interface Skill {
  name: string;
  icon: ReactNode;
}

export const skillsData: Skill[] = [
  { name: "React", icon: <FaReact color="#61DAFB" /> },
  { name: "Express", icon: <SiExpress color="#fff" /> },
  { name: "Node.js", icon: <FaNodeJs color="#6cc24a" /> },
  { name: "Redux", icon: <SiRedux color="#764ABC" /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
  { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
  { name: "AWS", icon: <FaAws color="#FF9900" /> },
  { name: "jQuery", icon: <SiJquery color="#0769AD" /> },
  { name: "Git", icon: <FaGitAlt color="#F1502F" /> },
  { name: "VCS", icon: <FaGitAlt color="#F1502F" /> },
  { name: "GitHub", icon: <FaGithub color="#fff" /> },
  { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
  { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
  { name: "Agile", icon: <DiScrum color="#00CFFF" /> },
  { name: "Scrum", icon: <DiScrum color="#00CFFF" /> },
  { name: "DSA", icon: <GiNetworkBars color="#FFD700" /> },
  { name: "ClickUp", icon: <SiClickup color="#7B16FF" /> },
  { name: "Notion", icon: <SiNotion color="#fff" /> },
];
