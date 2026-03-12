import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { Project } from "../types/project";
import ProjectModalHero from "./project-modal/ProjectModalHero";
import ProjectModalSidebar from "./project-modal/ProjectModalSidebar";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose, isDark }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl ${
              isDark ? "bg-[#1b004b] text-white border border-white/10" : "bg-white text-gray-900 border border-gray-100"
            }`}
          >
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 z-10 p-2 rounded-full backdrop-blur-md transition-colors ${
                isDark ? "bg-black/50 hover:bg-black/70 text-white" : "bg-white/50 hover:bg-white/80 text-black shadow-md"
              }`}
            >
              <FaTimes size={20} />
            </button>

            <ProjectModalHero project={project} />

            <div className="p-6 sm:p-10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h3 className={`text-xl font-bold mb-4 ${isDark ? "text-yellow-400" : "text-blue-600"}`}>
                    About This Project
                  </h3>
                  <p className={`text-base leading-relaxed mb-6 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    {project.description}
                  </p>
                  
                  <h3 className={`text-xl font-bold mb-4 ${isDark ? "text-yellow-400" : "text-blue-600"}`}>
                    Tech Description
                  </h3>
                  <p className={`text-base leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    Built with a modern stack focused on performance, maintainability, and a smooth user experience.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full ${
                          isDark
                            ? "bg-[#240046] text-blue-200 border border-blue-500/20"
                            : "bg-blue-50 text-blue-700 border border-blue-200"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <ProjectModalSidebar project={project} isDark={isDark} />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
