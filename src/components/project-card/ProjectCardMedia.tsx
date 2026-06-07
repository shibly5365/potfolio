import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Project } from "../../types/project";

interface ProjectCardMediaProps {
  project: Project;
  onOpenDetails: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onOpenGithub: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ProjectCardMedia: React.FC<ProjectCardMediaProps> = ({
  project,
  onOpenDetails,
  onOpenGithub,
}) => {
  const statusBadgeClasses: Record<Project["status"], string> = {
    "Coming Soon": "bg-red-500 text-white",
    Ongoing: "bg-yellow-400 text-black",
    Completed: "bg-green-500 text-white",
  };

  return (
    <div className="h-56 overflow-hidden relative">
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700"
      />

      <div
        className={`absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10 backdrop-blur-md ${statusBadgeClasses[project.status]}`}
      >
        {project.status}
      </div>

     <div
  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4"
>
        {project.showDetails && (
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={onOpenDetails}
            className="p-3 bg-white text-black rounded-full hover:bg-yellow-400 transition-colors shadow-lg"
            title="View Project Details"
            aria-label={`View details for ${project.title}`}
            type="button"
          >
            <FaExternalLinkAlt size={18} />
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          onClick={onOpenGithub}
          className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors shadow-lg"
          title="View Source Code"
        >
          <FaGithub size={18} />
        </motion.button>
      </div>
    </div>
  );
};

export default React.memo(ProjectCardMedia);
