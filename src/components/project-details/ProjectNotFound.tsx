import React from "react";

interface ProjectNotFoundProps {
  isDark: boolean;
  onGoHome: () => void;
}

const ProjectNotFound: React.FC<ProjectNotFoundProps> = ({ isDark, onGoHome }) => {
  return (
    <div
      className={`min-h-screen flex items-center justify-center px-6 ${
        isDark ? "bg-[#120032] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="text-center">
        <p className="text-xl font-bold mb-4">Project not found.</p>
        <button
          type="button"
          onClick={onGoHome}
          className={`px-5 py-2.5 rounded-lg font-semibold ${
            isDark
              ? "bg-yellow-400 text-black hover:bg-yellow-300"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default React.memo(ProjectNotFound);
