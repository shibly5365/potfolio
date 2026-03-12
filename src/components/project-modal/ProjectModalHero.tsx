import React from "react";
import { Project } from "../../types/project";

interface ProjectModalHeroProps {
  project: Project;
}

const ProjectModalHero: React.FC<ProjectModalHeroProps> = ({ project }) => {
  return (
    <div className="w-full h-64 sm:h-80 relative overflow-hidden rounded-t-3xl">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">{project.title}</h2>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectModalHero);
