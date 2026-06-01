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
      className={`z-10 flex w-full min-w-0 flex-col items-center space-y-6 text-center transition-colors duration-300 sm:space-y-7 md:w-1/2 md:items-start md:pl-6 md:text-left lg:pl-16 ${
        isDark ? "text-white" : "text-[#181a23]"
      }`}
    >
      <motion.h1
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full break-normal text-[clamp(2.15rem,10vw,3.75rem)] font-extrabold leading-[1.08] tracking-normal [overflow-wrap:normal]"
      >
        Hi There,
      </motion.h1>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full max-w-[11ch] break-normal text-[clamp(2.45rem,11vw,4.5rem)] font-bold leading-[1.05] tracking-normal [overflow-wrap:normal] sm:max-w-none"
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
        className={`relative mt-2 flex max-w-full items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-semibold shadow-xl sm:px-8 sm:py-4 sm:text-base ${
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
