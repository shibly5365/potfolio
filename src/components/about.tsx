import React from "react";
// @ts-ignore - ThemeContext might be JS without types
import { useTheme } from "../context/ThemeContext";
import AboutHeader from "./AboutHeader";
import AboutContent from "./AboutContent";

const AboutMe: React.FC = () => {
  const themeContext = useTheme();
  const theme = themeContext?.theme || "dark";
  const isDark = theme === "dark";

  return (
    <section
      className={`w-full min-h-screen flex flex-col items-center pt-20 pb-16 transition-colors duration-300 ${
        isDark ? "bg-[#0f002b] text-white" : "bg-white text-gray-900"
      }`}
    >
      <AboutHeader isDark={isDark} />
      <AboutContent isDark={isDark} />

      {/* Floating Scroll-to-Top Button */}
      <button
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </section>
  );
};

export default AboutMe;
