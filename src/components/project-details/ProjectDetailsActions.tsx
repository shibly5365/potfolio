import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectDetailsActionsProps {
  isDark: boolean;
  liveUrl: string;
  githubUrl: string;
}

const ProjectDetailsActions: React.FC<ProjectDetailsActionsProps> = ({
  isDark,
  liveUrl,
  githubUrl,
}) => {
  const handleExternalNavigate = (url: string) => {
    if (!url || url === "#") return;
    window.location.assign(url);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <button
        type="button"
        onClick={() => handleExternalNavigate(liveUrl)}
        className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold ${
          isDark
            ? "bg-yellow-400 text-black hover:bg-yellow-300"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        <FaExternalLinkAlt /> Live Demo
      </button>

      <button
        type="button"
        onClick={() => handleExternalNavigate(githubUrl)}
        className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold border-2 ${
          isDark
            ? "border-gray-500 text-white hover:bg-white/10"
            : "border-gray-300 text-gray-900 hover:bg-gray-100"
        }`}
      >
        <FaGithub /> Source Code
      </button>
    </div>
  );
};

export default React.memo(ProjectDetailsActions);
