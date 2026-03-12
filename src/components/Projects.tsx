import React from "react";
import { motion, AnimatePresence } from "framer-motion";
// @ts-ignore - ThemeContext might be JS without types
import { useTheme } from "../context/ThemeContext";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../data/projectsData";

const Projects: React.FC = () => {
  const themeContext = useTheme();
  const theme = themeContext?.theme || "dark";
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen py-24 px-6 md:px-12 lg:px-20 transition-colors duration-500 ${
        isDark ? "bg-gradient-to-b from-[#5a189a] to-[#240046]" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-extrabold mb-6 tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Featured <span className="text-yellow-400 inline-block">Projects</span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto font-medium ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Experience my latest work, featuring e-commerce solutions, management systems, and scalable SaaS platforms.
          </p>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
        >
          <AnimatePresence>
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
