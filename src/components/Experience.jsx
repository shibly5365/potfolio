import React from "react";
import { motion as Motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
    {
        id: 1,
        role: "Higher Secondary Education (Humanities)",
        company: "Higher Secondary School",
        date: "Completed",
        description:
            "Completed Higher Secondary Education with a focus on Humanities. Developed strong communication, analytical thinking, and problem-solving skills that support my transition into the tech field.",
        type: "education",
    },
    {
        id: 2,
        role: "MERN Stack Developer Intern",
        company: "Bridgeon Solutions",
        date: "Present",
        description:
            "Currently training as a MERN Stack Developer, building full-stack web applications using MongoDB, Express.js, React, and Node.js. Focused on developing modern, responsive web applications, improving coding practices, and gaining hands-on experience with real-world projects.",
        type: "work",
    },
];

const Experience = () => {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <section className={`py-20 ${isDark ? "bg-[#0f002b] text-white" : "bg-white text-gray-800"}`} id="Experience">
            <div className="max-w-7xl mx-auto px-6">
                <Motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    My <span className="text-blue-500">Experience</span>
                </Motion.h2>

                <div className="relative border-l-4 border-blue-500 ml-4 md:ml-10 space-y-12">
                    {experiences.map((exp, index) => (
                        <Motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Icon */}
                            <div className={`absolute -left-[1.3rem] top-0 p-2 rounded-full border-4 ${isDark ? "bg-[#1a0b3c] border-[#0f002b]" : "bg-white border-gray-100"} shadow-lg`}>
                                {exp.type === "work" ? (
                                    <FaBriefcase className="text-blue-500 text-xl" />
                                ) : (
                                    <FaGraduationCap className="text-green-500 text-xl" />
                                )}
                            </div>

                            {/* Content Card */}
                            <div
                                className={`p-6 rounded-2xl shadow-lg transition-transform hover:scale-105 duration-300 ${isDark ? "bg-[#1a0b3c] hover:bg-[#251052]" : "bg-gray-50 hover:bg-white border border-gray-200"
                                    }`}
                            >
                                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${isDark ? "bg-blue-500/20 text-blue-300" : "bg-blue-100 text-blue-600"}`}>
                                    {exp.date}
                                </span>
                                <h3 className="text-2xl font-bold mt-2">{exp.role}</h3>
                                <h4 className={`text-lg font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}>{exp.company}</h4>
                                <p className={`mt-3 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                                    {exp.description}
                                </p>
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
