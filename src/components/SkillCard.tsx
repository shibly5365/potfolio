import React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Skill } from "../data/skillsData";

interface SkillCardProps {
  skill: Skill;
  isDark: boolean;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, isDark, index }) => {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const rotateX = useSpring(useTransform(mouseY, [0, 100], [7, -7]), {
    stiffness: 220,
    damping: 26,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 100], [-7, 7]), {
    stiffness: 220,
    damping: 26,
  });
  const glow = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, ${
    isDark ? "rgba(45, 212, 191, 0.24)" : "rgba(20, 184, 166, 0.18)"
  }, transparent 42%)`;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(((event.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    mouseX.set(50);
    mouseY.set(50);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{
        y: -8,
        scale: 1.035,
        boxShadow: isDark
          ? "0 22px 50px rgba(15, 23, 42, 0.38), 0 0 34px rgba(45, 212, 191, 0.2)"
          : "0 20px 40px rgba(15, 23, 42, 0.12), 0 0 28px rgba(20, 184, 166, 0.16)",
      }}
      transition={{
        delay: index * 0.035,
        type: "spring",
        stiffness: 280,
        damping: 24,
      }}
      className={`group relative flex min-h-[116px] flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 text-center shadow-sm backdrop-blur-xl transition-colors duration-300 will-change-transform ${
        isDark
          ? "border-white/10 bg-white/[0.06] text-slate-100 hover:border-teal-300/45 hover:bg-white/[0.09]"
          : "border-slate-200/80 bg-white/80 text-slate-900 hover:border-teal-300 hover:bg-white"
      }`}
    >
      <motion.div
        aria-hidden="true"
        style={{ background: glow }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        className={`pointer-events-none absolute inset-x-4 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
          isDark
            ? "bg-gradient-to-r from-transparent via-teal-300/90 to-transparent"
            : "bg-gradient-to-r from-transparent via-teal-500/60 to-transparent"
        }`}
      />

      <div
        className={`relative mb-3 flex h-[52px] w-[52px] items-center justify-center rounded-2xl text-[2.05rem] ring-1 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${
          isDark
            ? "bg-slate-950/35 ring-white/10"
            : "bg-slate-50 ring-slate-200"
        }`}
      >
        {skill.icon}
      </div>
      <p className="relative text-[0.82rem] font-semibold leading-tight tracking-normal md:text-sm">
        {skill.name}
      </p>
    </motion.div>
  );
};

export default SkillCard;
