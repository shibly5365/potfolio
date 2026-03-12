import React from "react";
import { FaUser } from "react-icons/fa";

interface AboutHeaderProps {
  isDark: boolean;
}

const AboutHeader: React.FC<AboutHeaderProps> = ({ isDark }) => {
  return (
    <div className="flex flex-col items-center mb-16">
      <div className="flex items-center space-x-3">
        <FaUser
          className={`text-3xl ${isDark ? "text-white" : "text-gray-900"}`}
        />
        <h2 className="text-3xl md:text-4xl font-bold">
          About{" "}
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
            Me
          </span>
        </h2>
      </div>
      <div className="mt-3 w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
    </div>
  );
};

export default AboutHeader;
