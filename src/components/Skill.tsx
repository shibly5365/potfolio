import React from "react";
// @ts-ignore - ThemeContext might be JS without types
import { useTheme } from "../context/ThemeContext";
import { skillsData } from "../data/skillsData";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
  const themeContext = useTheme();
  const theme = themeContext?.theme || "dark";
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-8 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-b from-[#240046] to-[#5a189a] text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <h2
        className={`text-3xl md:text-4xl font-bold mb-10 ${
          isDark ? "text-yellow-400" : "text-blue-600"
        }`}
      >
        💻 Skills & Abilities
      </h2>

      {/* Outer Big Box */}
      <div
        className={`border rounded-3xl shadow-2xl backdrop-blur-md p-8 w-full max-w-6xl transition-all duration-300 ${
          isDark
            ? "bg-[#0f002b]/80 border-white/20"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} isDark={isDark} />
          ))}
        </div>
      </div>
    </div>
  );
}
