import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { roles } from "../../data/homeData";

interface RoleTypewriterProps {
  isDark: boolean;
}

const RoleTypewriter: React.FC<RoleTypewriterProps> = ({ isDark }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      setDisplayedText(roles[currentRole].text.slice(0, i + 1));
      if (++i > roles[currentRole].text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [currentRole]);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentRole((prev) => (prev + 1) % roles.length),
      4000,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes blink { to { visibility: hidden; } }
        .blinking-cursor { display:inline-block;width:2px;height:1.2em;background:${
          isDark ? "#fff" : "#222"
        };margin-left:4px;animation:blink 1s steps(2,start) infinite; }
      `}</style>
      <div className="mt-1 flex w-full min-w-0 flex-col items-center gap-2 text-[clamp(1.45rem,7vw,3rem)] font-semibold leading-tight sm:flex-row sm:justify-center sm:gap-3 md:justify-start">
        <span className="shrink-0 whitespace-nowrap">I Am Into</span>
        <motion.span
          key={currentRole}
          className="inline-block max-w-full break-normal text-center [overflow-wrap:normal] sm:text-left"
          style={{
            background: roles[currentRole].color,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {displayedText}
          <span className="blinking-cursor"></span>
        </motion.span>
      </div>
    </>
  );
};

export default React.memo(RoleTypewriter);
