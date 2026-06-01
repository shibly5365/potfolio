import React from "react";
// @ts-ignore - ThemeContext might be JS without types
import { useTheme } from "../context/ThemeContext";
import HomeLeftSection from "./HomeLeftSection";
import HomeRightSection from "./HomeRightSection";

const HomePage: React.FC = () => {
  const themeContext = useTheme();
  const theme = themeContext?.theme || "dark";
  const isDark = theme === "dark";

  return (
    <div
      className={`relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 pb-12 pt-24 transition-colors duration-300 sm:px-6 md:flex-row md:justify-between md:px-12 md:py-20 lg:px-20 ${
        isDark ? "bg-[#0f002b]" : "bg-white"
      }`}
    >
      {/* Background video - Only visible in dark mode or controlled opacity */}
      {isDark && (
        <video
          className="absolute inset-0 object-cover w-full h-full -z-20 opacity-50"
          src="/bgad.mov"
          preload="metadata"
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      {/* Left Section component holding typing and interaction logic */}
      <HomeLeftSection isDark={isDark} />

      {/* Right Section holding image */}
      <HomeRightSection />
    </div>
  );
};

export default HomePage;
