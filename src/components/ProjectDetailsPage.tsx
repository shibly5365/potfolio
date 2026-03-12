import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData";
// @ts-ignore - ThemeContext might be JS without types
import { useTheme } from "../context/ThemeContext";
import ProjectNotFound from "./project-details/ProjectNotFound";
import ProjectDetailsContent from "./project-details/ProjectDetailsContent";

const ProjectDetailsPage: React.FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const themeContext = useTheme();
  const theme = themeContext?.theme || "dark";
  const isDark = theme === "dark";

  const selectedId = Number(projectId);
  const project = projectsData.find((item) => item.id === selectedId);

  if (!project) {
    return <ProjectNotFound isDark={isDark} onGoHome={() => navigate("/")} />;
  }

  return (
    <ProjectDetailsContent
      project={project}
      isDark={isDark}
      onBack={() => navigate("/")}
    />
  );
};

export default ProjectDetailsPage;
