import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Project } from "../../types/project";
import ProjectDetailsMetaSections from "./ProjectDetailsMetaSections";
import ProjectDetailsActions from "./ProjectDetailsActions";

interface ProjectDetailsContentProps {
  project: Project;
  isDark: boolean;
  onBack: () => void;
}

const ProjectDetailsContent: React.FC<ProjectDetailsContentProps> = ({
  project,
  isDark,
  onBack,
}) => {
  return (
    <div
      className={`min-h-screen py-16 px-6 md:px-12 lg:px-20 ${
        isDark ? "bg-[#120032] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <button
          type="button"
          onClick={onBack}
          className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg font-semibold transition-colors ${
            isDark
              ? "bg-white/10 text-white hover:bg-white/20"
              : "bg-white text-gray-800 border border-gray-200 hover:bg-gray-100"
          }`}
        >
          <FaArrowLeft /> Back
        </button>

        <div
          className={`rounded-3xl overflow-hidden border ${
            isDark ? "border-white/10 bg-[#1b004b]" : "border-gray-200 bg-white"
          }`}
        >
          <div className="h-64 md:h-80">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              {project.title}
            </h1>

            <p className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              {project.description}
            </p>

            <ProjectDetailsMetaSections project={project} isDark={isDark} />
            <ProjectDetailsActions
              isDark={isDark}
              liveUrl={project.link}
              githubUrl={project.github}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectDetailsContent);
