import React from "react";
import { motion } from "framer-motion";

const HomeRightSection: React.FC = () => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="z-10 mt-10 flex w-full justify-center md:mt-0 md:w-1/2"
    >
      <motion.img
        src="/shilby.png"
        alt="Profile"
        className="h-52 w-52 rounded-full border-4 border-white object-cover shadow-2xl transition duration-700 hover:rotate-3 hover:scale-105 sm:h-72 sm:w-72 md:h-[380px] md:w-[380px] lg:h-[460px] lg:w-[460px]"
      />
    </motion.div>
  );
};

export default HomeRightSection;
