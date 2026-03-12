export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  date: string;
  description: string;
  type: "work" | "education";
}

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    date: "2023 - Present",
    description: "Leading the frontend team, migrating legacy code to React, and implementing a new design system.",
    type: "work",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "WebCreate Agency",
    date: "2021 - 2023",
    description: "Developed responsive websites for various clients, focusing on performance and SEO optimization.",
    type: "work",
  },
  {
    id: 3,
    role: "Computer Science Degree",
    company: "University of Technology",
    date: "2017 - 2021",
    description: "Specialized in Software Engineering and Human-Computer Interaction.",
    type: "education",
  },
];
