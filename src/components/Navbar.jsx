import React, { useCallback, useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { motion as Motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

  const handleNavClick = useCallback((item) => {
    setActive(item);
    setMobileMenuOpen(false);
    // Simple scrolling logic
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (item === 'Contact') {
      // Contact often in footer, so scroll bottom or look for Contact ID
      const footer = document.querySelector('footer');
      if (footer) footer.scrollIntoView({ behavior: 'smooth' });
    } else if (item === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isDark ? "bg-[#0f002b]/80 backdrop-blur-md border-b border-white/5" : "bg-white/80 backdrop-blur-md border-b border-gray-100"
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-20">
        {/* Left side - Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick("Home")}>
          <div className={`text-2xl font-bold flex items-center ${isDark ? "text-white" : "text-gray-900"}`}>
            <span
              className={`flex items-center justify-center w-10 h-10 rounded-xl mr-2 bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg`}
            >
              JS
            </span>
            <span className="tracking-tight">shibi<span className="text-blue-500">.</span></span>
          </div>
        </div>

        {/* Right side - Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => handleNavClick(item)}
                className="relative px-4 py-2 cursor-pointer text-sm font-medium transition-colors group"
              >
                {active === item && (
                  <Motion.div
                    layoutId="navbar-active"
                    className={`absolute inset-0 rounded-full ${isDark ? "bg-white/10" : "bg-gray-100"}`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 transition-colors ${active === item
                  ? (isDark ? "text-blue-400" : "text-blue-600")
                  : (isDark ? "text-gray-400 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900")}`}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <Motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-2.5 rounded-full transition-all cursor-pointer ${isDark ? "bg-white/5 text-yellow-400 hover:bg-white/10" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <Motion.div
                key={isDark ? "moon" : "sun"}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
              </Motion.div>
            </AnimatePresence>
          </Motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isDark ? "text-yellow-400" : "text-gray-600"}`}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`text-2xl ${isDark ? "text-white" : "text-gray-800"}`}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden ${isDark ? "bg-[#0f002b] border-t border-white/10" : "bg-white border-t border-gray-100"}`}
          >
            <ul className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <Motion.li
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  onClick={() => handleNavClick(item)}
                  className={`text-lg font-medium cursor-pointer ${active === item ? "text-blue-500" : (isDark ? "text-gray-300" : "text-gray-600")}`}
                >
                  {item}
                </Motion.li>
              ))}
            </ul>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

