import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../data/skillsData";

interface SkillCardProps {
  skill: Skill;
  isDark: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, isDark }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        boxShadow: isDark
          ? "0px 0px 20px rgba(255,255,255,0.3)"
          : "0px 0px 20px rgba(0,0,0,0.1)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className={`flex flex-col items-center justify-center p-5 rounded-2xl shadow-md border transition-all duration-300 ${
        isDark
          ? "bg-[#1b004b] hover:bg-[#26006b] border-white/10"
          : "bg-gray-50 hover:bg-gray-100 border-gray-200"
      }`}
    >
      <div className="text-4xl mb-3">{skill.icon}</div>
      <p className="text-sm font-semibold text-center">{skill.name}</p>
    </motion.div>
  );
};

export default SkillCard;
