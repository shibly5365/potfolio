import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export function SectionHeading({ index, eyebrow, title, description, align = "left", className, id }: SectionHeadingProps) {
  return (
    <motion.div
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}
    >
      <motion.p
        variants={fadeUp}
        className={cn(
          "flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-highlight",
          align === "center" && "justify-center",
        )}
      >
        <span className="text-muted-foreground">{index}</span>
        <span aria-hidden className="h-px w-8 bg-border-strong" />
        {eyebrow}
      </motion.p>
      <motion.h2
        id={id}
        variants={fadeUp}
        className="mt-4 text-balance text-3xl font-semibold leading-[1.1] text-foreground sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p variants={fadeUp} className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
