import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "../data/projectsData";
// @ts-ignore
import { useTheme } from "../context/ThemeContext";

const ProjectDetailsPage: React.FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const themeContext = useTheme();
  const theme = themeContext?.theme || "dark";
  const isDark = theme === "dark";

  const selectedId = Number(projectId);
  const project = projectsData.find((item) => item.id === selectedId);

  if (!project || !project.showDetails) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center px-6 ${
          isDark ? "bg-[#120032] text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <div className="text-center">
          <p className="text-xl font-bold mb-4">Project not found.</p>
          <button
            onClick={() => navigate("/")}
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
  }

  const handleExternalNavigate = (url: string) => {
    if (!url || url === "#") return;
    window.location.assign(url);
  };

  return (
    <div
      className={`min-h-screen py-16 px-6 md:px-12 lg:px-20 ${
        isDark ? "bg-[#120032] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg font-semibold ${
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
          
          {/* IMAGE */}
          <div className="h-64 md:h-80">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-10">

            {/* TITLE */}
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              {project.title}
            </h1>

            {/* DESCRIPTION */}
            <p className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              {project.description}
            </p>

            {/* ABOUT PROJECT */}
            <h2
              className={`text-xl font-bold mb-3 ${
                isDark ? "text-yellow-400" : "text-blue-700"
              }`}
            >
              About Project
            </h2>

            <p className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              {project.about}
            </p>

            {/* DEVELOPMENT TIME */}
            <h2
              className={`text-xl font-bold mb-3 ${
                isDark ? "text-yellow-400" : "text-blue-700"
              }`}
            >
              Development Time
            </h2>

            <p className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              {project.duration}
            </p>

            {/* TOOLS USED */}
            <h2
              className={`text-xl font-bold mb-3 ${
                isDark ? "text-yellow-400" : "text-blue-700"
              }`}
            >
              Tools Used
            </h2>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tools?.map((tool: string, idx: number) => (
                <span
                  key={idx}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                    isDark
                      ? "bg-[#240046] text-green-200 border border-green-500/20"
                      : "bg-green-50 text-green-700 border border-green-200"
                  }`}
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* WHAT I LEARNED */}
            <h2
              className={`text-xl font-bold mb-3 ${
                isDark ? "text-yellow-400" : "text-blue-700"
              }`}
            >
              What I Learned
            </h2>

            <p
              className={`mb-8 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {project.learning}
            </p>

            {/* TECH USED */}
            <h2
              className={`text-xl font-bold mb-3 ${
                isDark ? "text-yellow-400" : "text-blue-700"
              }`}
            >
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                    isDark
                      ? "bg-[#240046] text-blue-200 border border-blue-500/20"
                      : "bg-blue-50 text-blue-700 border border-blue-200"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3">
              {project.showDemo && (
                <button
                  onClick={() => handleExternalNavigate(project.link)}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold ${
                    isDark
                      ? "bg-yellow-400 text-black hover:bg-yellow-300"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  <FaExternalLinkAlt /> Live Demo
                </button>
              )}

              <button
                onClick={() => handleExternalNavigate(project.github)}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold border-2 ${
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
      </div>
    </div>
  );
};

export default ProjectDetailsPage; 
