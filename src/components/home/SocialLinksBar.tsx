import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { socialLinks } from "../../data/homeData";

interface SocialLinksBarProps {
  isDark: boolean;
}

const SocialLinksBar: React.FC<SocialLinksBarProps> = ({ isDark }) => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [typedLink, setTypedLink] = useState("");

  useEffect(() => {
    if (hoveredIcon === null) {
      setTypedLink("");
      return;
    }
    let i = 0;
    const link = socialLinks[hoveredIcon].name;
    const interval = setInterval(() => {
      setTypedLink(link.slice(0, i + 1));
      if (++i > link.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, [hoveredIcon]);

  return (
    <div className="flex space-x-4 mt-6">
      {socialLinks.map((social, index) => (
        <div
          key={index}
          className="relative flex flex-col items-start"
          onMouseEnter={() => setHoveredIcon(index)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <button
            type="button"
            onClick={() => window.location.assign(social.url)}
            className={`w-12 h-12 flex items-center justify-center rounded-full text-2xl transition-colors ${
              isDark ? "bg-[#181a23] hover:bg-gray-800" : "bg-gray-200 hover:bg-gray-300"
            }`}
            style={{
              color:
                hoveredIcon === index ? social.color : isDark ? "#22d3ee" : "#555",
            }}
          >
            {social.icon}
          </button>

          <AnimatePresence>
            {hoveredIcon === index && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 10 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className={`absolute top-16 text-sm font-medium px-3 py-1 rounded ${
                  isDark
                    ? "text-[#21c396] bg-[rgba(24,26,35,0.7)]"
                    : "text-blue-600 bg-white shadow-md"
                }`}
              >
                {typedLink}
                <span className="border-r-2 border-[#21c396] animate-pulse ml-1"></span>
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default React.memo(SocialLinksBar);
