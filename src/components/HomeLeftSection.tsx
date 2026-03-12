import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import RoleTypewriter from "./home/RoleTypewriter";
import SocialLinksBar from "./home/SocialLinksBar";

interface HomeLeftSectionProps {
  isDark: boolean;
}

const HomeLeftSection: React.FC<HomeLeftSectionProps> = ({ isDark }) => {
  const [arrowHover, setArrowHover] = useState(false);

  return (
    <div
      className={`md:w-1/2 z-10 pl-6 md:pl-16 pt-20 space-y-10 transition-colors duration-300 ${
        isDark ? "text-white" : "text-[#181a23]"
      }`}
    >
      <motion.h1
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold"
      >
        Hi There,
      </motion.h1>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-6xl md:text-7xl font-bold leading-tight"
      >
        I'm Nuhman <span className="text-orange-400">Shibly</span>
      </motion.h2>

      <RoleTypewriter isDark={isDark} />

      <motion.button
        onMouseEnter={() => setArrowHover(true)}
        onMouseLeave={() => setArrowHover(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => {
          const aboutSection = document.getElementById("About");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className={`relative flex items-center mt-6 px-8 py-4 rounded-2xl shadow-xl ${
          isDark
            ? "bg-[#1717c6] text-white"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        About Me
        <motion.span
          className="ml-3 flex items-center transition-all"
          animate={{ marginLeft: arrowHover ? 18 : 10 }}
        >
          <span className="bg-white text-[#1717c6] rounded-full w-8 h-8 flex items-center justify-center shadow-md">
            <FaArrowDown size={18} />
          </span>
        </motion.span>
      </motion.button>

      <SocialLinksBar isDark={isDark} />
    </div>
  );
};

export default HomeLeftSection;
