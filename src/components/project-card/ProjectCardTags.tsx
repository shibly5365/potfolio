import React from "react";

interface ProjectCardTagsProps {
  tags: string[];
  isDark: boolean;
}

const ProjectCardTags: React.FC<ProjectCardTagsProps> = ({ tags, isDark }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className={`text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full ${
            isDark
              ? "bg-[#240046] text-blue-200 border border-blue-500/20"
              : "bg-blue-50 text-blue-600 border border-blue-200"
          }`}
        >
          #{tag}
        </span>
      ))}
    </div>
  );
};

export default React.memo(ProjectCardTags);
