import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [views, setViews] = useState(0);

  useEffect(() => {
    const storedViews = localStorage.getItem("portfolioMatches");
    let currentViews = storedViews ? parseInt(storedViews, 10) : 1240;
    setViews(currentViews);
  }, []);

  const footerLinks = [
    { name: "Home", sectionId: "Home" },
    { name: "About", sectionId: "About" },
    { name: "Projects", sectionId: "Projects" },
    { name: "Experience", sectionId: "Experience" },
  ];

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/shibly5365" },
    { icon: FaLinkedin, url: "https://linkedin.com" },
    { icon: FaTwitter, url: "https://twitter.com" },
  ];

  const handleSectionNavigation = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExternalNavigation = (url) => {
    window.location.assign(url);
  };

  return (
    <footer
      className={`pt-20 pb-10 ${isDark ? "bg-[#050011] text-white" : "bg-gray-50 text-gray-900"} relative overflow-hidden`}
      id="Contact"
    >
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Let's Connect.
          </h2>
          <p
            className={`text-lg mb-8 max-w-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
          <button
            type="button"
            onClick={() =>
              handleExternalNavigation(
                "https://mail.google.com/mail/?view=cm&to=nuhmanushibly@gmail.com",
              )
            }
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            <FaEnvelope /> Say Hello
          </button>
        </div>

        {/* Links Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg mb-2">Navigation</h3>
          {footerLinks.map((link) => (
            <button
              type="button"
              key={link.name}
              onClick={() => handleSectionNavigation(link.sectionId)}
              className={`transition-colors ${isDark ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Socials & Stats Column */}
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-lg mb-2">Socials</h3>
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => handleExternalNavigation(social.url)}
                className={`p-3 rounded-full border transition-all hover:scale-110 ${isDark ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-white border-gray-200 hover:bg-gray-50"}`}
              >
                {React.createElement(social.icon, { size: 20 })}
              </button>
            ))}
          </div>

          <div
            className={`mt-4 p-4 rounded-xl border ${isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200"}`}
          >
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">
              Portfolio Views
            </div>
            <div className="text-2xl font-mono font-bold text-blue-500">
              {views.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`max-w-7xl mx-auto px-6 pt-8 border-t ${isDark ? "border-white/5" : "border-gray-200"} flex flex-col md:flex-row justify-between items-center gap-4`}
      >
        <p className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>
          � {new Date().getFullYear()} John Shibi. All rights reserved.
        </p>
        <p
          className={`text-sm flex items-center gap-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}
        >
          Made with <FaHeart className="text-red-500" /> and React
        </p>
      </div>
    </footer>
  );
};

export default Footer;

