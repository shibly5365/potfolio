import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// @ts-ignore - ThemeContext might be JS without types
import { useTheme } from "../context/ThemeContext";
import { ProjectCardProps } from "../types/project";
import { projectApi } from "../services/projectApi";
import { formatCount } from "../utils/formatUtils";
import ProjectCardMedia from "./project-card/ProjectCardMedia";
import ProjectCardFooter from "./project-card/ProjectCardFooter";
import ProjectCardTags from "./project-card/ProjectCardTags";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
}) => {
  const navigate = useNavigate();
  const themeContext = useTheme();
  const theme = themeContext?.theme || "dark";
  const isDark = theme === "dark";

  // METHOD 1: Using React useState
  const [likes, setLikes] = useState<number>(project.initialLikes);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [views, setViews] = useState<number>(project.initialViews);

  // METHOD 1: Using React useEffect
  useEffect(() => {
    let mounted = true;

    const initializeStats = async () => {
      // Synchronize with Method 2 (localStorage) and Method 3 (API placeholders)
      const savedLikes = await projectApi.getProjectLikes(
        project.id,
        project.initialLikes,
      );
      if (mounted) setLikes(savedLikes);

      const userLiked = projectApi.hasUserLiked(project.id);
      if (mounted) setIsLiked(userLiked);

      // Track a new local view
      const updatedViews = await projectApi.trackProjectView(
        project.id,
        project.initialViews,
      );
      if (mounted) setViews(updatedViews);
    };

    initializeStats();

    return () => {
      mounted = false;
    };
  }, [project.id, project.initialLikes, project.initialViews]);

  const handleLike = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const newlyLiked = !isLiked;
    setIsLiked(newlyLiked);

    const updatedLikes = newlyLiked ? likes + 1 : likes - 1;
    setLikes(updatedLikes);

    projectApi.setUserLiked(project.id, newlyLiked);
    await projectApi.updateProjectLikes(project.id, updatedLikes);
  };

  const handleOpenDetails = () => {
    if (!project.showDetails) return;

    if (onSelect) {
      onSelect(project);
      return;
    }
    navigate(`/projects/${project.id}`);
  };

  const handleOpenDetailsFromOverlay = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleOpenDetails();
  };

  const handleGithubFromOverlay = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (project.github && project.github !== "#") {
      window.location.assign(project.github);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className={`group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${
        isDark
          ? "bg-[#1b004b]/80 backdrop-blur-sm border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-yellow-500/10 hover:border-white/20"
          : "bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:border-gray-300"
      }`}
    >
      <ProjectCardMedia
        project={project}
        onOpenDetails={handleOpenDetailsFromOverlay}
        onOpenGithub={handleGithubFromOverlay}
      />

      <div className="p-6 flex-grow flex flex-col items-start text-left">
        <h3
          className={`text-2xl font-bold mb-3 transition-colors ${
            isDark
              ? "text-yellow-400 group-hover:text-yellow-300"
              : "text-gray-900 group-hover:text-blue-600"
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`text-sm mb-5 leading-relaxed line-clamp-3 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {project.description}
        </p>

        <ProjectCardTags tags={project.tags} isDark={isDark} />

        <ProjectCardFooter
          isDark={isDark}
          isLiked={isLiked}
          likes={formatCount(likes)}
          views={formatCount(views)}
          title={project.title}
          showDetails={project.showDetails}
          onLike={handleLike}
          onOpenDetails={handleOpenDetails}
        />
      </div>
    </motion.div>
  );
};
