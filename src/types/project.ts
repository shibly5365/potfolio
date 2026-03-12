export interface Project {
  id: number;
  title: string;
  description: string;
  about?: string;
  duration?: string;
  learning?: string;
  tools?: string[];
  tags: string[];
  image: string;
  link: string;
  github: string;
  initialViews: number;
  initialLikes: number;
  status: "Completed" | "Ongoing";
}

export interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}
