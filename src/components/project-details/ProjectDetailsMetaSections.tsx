import React from "react";
import { Project } from "../../types/project";

interface ProjectDetailsMetaSectionsProps {
  project: Project;
  isDark: boolean;
}

const headingClass = (isDark: boolean) =>
  `text-xl font-bold mb-3 ${isDark ? "text-yellow-400" : "text-blue-700"}`;

const textClass = (isDark: boolean) =>
  `mb-6 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`;

const ProjectDetailsMetaSections: React.FC<ProjectDetailsMetaSectionsProps> = ({
  project,
  isDark,
}) => {
  return (
    <>
      {project.about && (
        <>
          <h2 className={headingClass(isDark)}>About Project</h2>
          <p className={textClass(isDark)}>{project.about}</p>
        </>
      )}

      {project.duration && (
        <>
          <h2 className={headingClass(isDark)}>Duration</h2>
          <p className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            {project.duration}
          </p>
        </>
      )}

      {project.tools && project.tools.length > 0 && (
        <>
          <h2 className={headingClass(isDark)}>Tools Used</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tools.map((tool, idx) => (
              <span
                key={idx}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                  isDark
                    ? "bg-[#240046] text-blue-200 border border-blue-500/20"
                    : "bg-blue-50 text-blue-700 border border-blue-200"
                }`}
              >
                {tool}
              </span>
            ))}
          </div>
        </>
      )}

      {project.tags && project.tags.length > 0 && (
        <>
          <h2 className={headingClass(isDark)}>Tags</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                  isDark
                    ? "bg-[#240046] text-pink-200 border border-pink-500/20"
                    : "bg-pink-50 text-pink-700 border border-pink-200"
                }`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </>
      )}

      {project.learning && (
        <>
          <h2 className={headingClass(isDark)}>What I Learned</h2>
          <p className={`mb-8 ${textClass(isDark)}`}>{project.learning}</p>
        </>
      )}
    </>
  );
};

export default React.memo(ProjectDetailsMetaSections);
