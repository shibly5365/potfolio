import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "../../types/project";

interface ProjectModalSidebarProps {
  project: Project;
  isDark: boolean;
}

const ProjectModalSidebar: React.FC<ProjectModalSidebarProps> = ({
  project,
  isDark,
}) => {
  const handleExternalNavigation = (url: string) => {
    if (!url || url === "#") return;
    window.location.assign(url);
  };

  return (
    <div
      className={`w-full md:w-64 p-6 rounded-2xl h-fit ${
        isDark
          ? "bg-[#240046] border border-white/5"
          : "bg-gray-50 border border-gray-100"
      }`}
    >
      <h4 className="font-bold mb-4 text-lg">Project Details</h4>
      <div className="space-y-4">
        <div>
          <span
            className={`text-xs uppercase tracking-wider ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Status
          </span>
          <p className="font-semibold">{project.status}</p>
        </div>
        <div>
          <span
            className={`text-xs uppercase tracking-wider ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Role
          </span>
          <p className="font-semibold">Full Stack Developer</p>
        </div>
        <div className="pt-4 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => handleExternalNavigation(project.link)}
            className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold transition-all ${
              isDark
                ? "bg-yellow-400 text-black hover:bg-yellow-300"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <FaExternalLinkAlt /> Live Demo
          </button>
          <button
            type="button"
            onClick={() => handleExternalNavigation(project.github)}
            className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold transition-all border-2 ${
              isDark
                ? "border-gray-500 text-white hover:bg-white/10"
                : "border-gray-300 text-gray-900 hover:bg-gray-100"
            }`}
          >
            <FaGithub /> Source Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectModalSidebar);
