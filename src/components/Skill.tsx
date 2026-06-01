import React from "react";
import { motion } from "framer-motion";
// @ts-ignore - ThemeContext might be JS without types
import { useTheme } from "../context/ThemeContext";
import { skillsData } from "../data/skillsData";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
  const themeContext = useTheme();
  const theme = themeContext?.theme || "dark";
  const isDark = theme === "dark";

  return (
    <section
      className={`relative min-h-screen overflow-hidden px-4 py-20 transition-colors duration-300 sm:px-6 lg:px-8 ${
        isDark
          ? "bg-[radial-gradient(circle_at_20%_12%,_rgba(20,184,166,0.16),_transparent_28%),radial-gradient(circle_at_82%_18%,_rgba(245,158,11,0.1),_transparent_26%),linear-gradient(180deg,_#07111f_0%,_#101827_48%,_#080b12_100%)] text-white"
          : "bg-[radial-gradient(circle_at_16%_10%,_rgba(20,184,166,0.13),_transparent_28%),radial-gradient(circle_at_86%_16%,_rgba(245,158,11,0.12),_transparent_25%),linear-gradient(180deg,_#f8fafc_0%,_#eef6f3_100%)] text-slate-950"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-px ${
          isDark
            ? "bg-gradient-to-r from-transparent via-teal-300/50 to-transparent"
            : "bg-gradient-to-r from-transparent via-teal-500/40 to-transparent"
        }`}
      />
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-12 max-w-3xl text-center"
        >
          <span
            className={`mb-5 inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] shadow-sm ${
              isDark
                ? "border-teal-300/25 bg-teal-300/10 text-teal-100"
                : "border-teal-200 bg-teal-50 text-teal-700"
            }`}
          >
            Technical Toolkit
          </span>

          <h2 className="text-3xl font-bold tracking-normal sm:text-4xl lg:text-5xl">
            Skills & Abilities
          </h2>
          <p
            className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            A clean overview of the tools I use to build fast, reliable, and
            polished full-stack web applications.
          </p>
        </motion.div>

        <div className="grid w-full gap-5 lg:gap-6">
          {skillsData.map((category, categoryIndex) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -4 }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.08,
                ease: "easeOut",
              }}
              className={`group relative overflow-hidden rounded-3xl border p-5 shadow-xl backdrop-blur-2xl transition-colors duration-300 sm:p-6 ${
                isDark
                  ? "border-white/10 bg-white/[0.055] hover:border-teal-300/30"
                  : "border-white/80 bg-white/80 hover:border-teal-200"
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                  isDark
                    ? "bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.14),_transparent_38%)]"
                    : "bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.12),_transparent_38%)]"
                }`}
              />
              <div className="relative mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        isDark ? "bg-teal-300" : "bg-teal-500"
                      }`}
                    />
                    <h3 className="text-xl font-bold tracking-normal">
                      {category.title}
                    </h3>
                  </div>
                  <p
                    className={`mt-2 text-sm leading-6 ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {category.description}
                  </p>
                </div>

                <span
                  className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold shadow-sm ${
                    isDark
                      ? "border-white/10 bg-slate-950/30 text-slate-300"
                      : "border-slate-200 bg-slate-50 text-slate-600"
                  }`}
                >
                  {category.skills.length} skills
                </span>
              </div>

              <div className={`relative grid gap-4 ${category.gridClassName}`}>
                {category.skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    isDark={isDark}
                    index={index}
                  />
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
