import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface Options {
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
}

/**
 * Cycles through phrases with natural typing/deleting. The first phrase is
 * rendered complete on the server so the text is readable without JS, and
 * stays static when the user prefers reduced motion.
 */
export function useTypewriter(phrases: string[], { typeSpeed = 70, deleteSpeed = 38, pause = 1600 }: Options = {}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(phrases[0] ?? "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce || phrases.length < 2) return;
    const current = phrases[index % phrases.length] ?? "";
    let delay: number;

    if (!deleting && text === current) {
      delay = pause;
      const t = window.setTimeout(() => setDeleting(true), delay);
      return () => window.clearTimeout(t);
    }
    if (deleting && text === "") {
      const t = window.setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      }, 280);
      return () => window.clearTimeout(t);
    }

    // Slight jitter keeps the rhythm human.
    delay = (deleting ? deleteSpeed : typeSpeed) + Math.random() * 40;
    const t = window.setTimeout(() => {
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, delay);
    return () => window.clearTimeout(t);
  }, [text, deleting, index, phrases, reduce, typeSpeed, deleteSpeed, pause]);

  return { text, isStatic: !!reduce };
}
