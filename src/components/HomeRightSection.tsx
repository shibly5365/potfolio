import React from "react";
import { motion } from "framer-motion";

const HomeRightSection: React.FC = () => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="md:w-1/2 flex justify-center mt-10 md:mt-0 z-10"
    >
      <motion.img
        src="/shilby.png"
        alt="Profile"
        className="w-64 sm:w-80 md:w-[460px] h-64 sm:h-80 md:h-[460px] rounded-full object-cover shadow-2xl border-4 border-white transform transition duration-700 hover:rotate-3 hover:scale-105"
      />
    </motion.div>
  );
};

export default HomeRightSection;
