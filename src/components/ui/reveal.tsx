import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import { fadeUp, viewportOnce } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string | undefined;
  variants?: Variants | undefined;
  delay?: number | undefined;
  as?: "div" | "li" | "article" | "section";
}

/** Fades content up once when it scrolls into view. */
export function Reveal({ children, className, variants = fadeUp, delay = 0, as = "div" }: RevealProps) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={delay ? { delay } : {}}
    >
      {children}
    </Comp>
  );
}
