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
    <div className="mt-4 flex w-full max-w-xs flex-wrap items-center justify-center gap-3 sm:max-w-none sm:gap-4 md:justify-start">
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
            className={`flex h-11 w-11 items-center justify-center rounded-full text-xl transition-colors sm:h-12 sm:w-12 sm:text-2xl ${
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
                className={`absolute top-14 z-20 whitespace-nowrap rounded px-3 py-1 text-sm font-medium sm:top-16 ${
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
