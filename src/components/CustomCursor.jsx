import React, { useEffect, useState } from "react";
import { motion as Motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth spring animation
    const springConfig = { damping: 25, stiffness: 700 };
    const itemsX = useSpring(mouseX, springConfig);
    const itemsY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handlePointerOver = (e) => {
            const target = e.target;
            if (target instanceof Element && target.closest('a, button, [role="button"]')) {
                setIsHovered(true);
            }
        };

        const handlePointerOut = (e) => {
            const target = e.target;
            if (target instanceof Element && target.closest('a, button, [role="button"]')) {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("pointerover", handlePointerOver);
        document.addEventListener("pointerout", handlePointerOut);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("pointerover", handlePointerOver);
            document.removeEventListener("pointerout", handlePointerOut);
        };
    }, [mouseX, mouseY]);

    return (
        <Motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block" // Hidden on mobile
            style={{
                x: itemsX,
                y: itemsY,
            }}
        >
            {/* Main dot */}
            <Motion.div
                className={`w-3 h-3 bg-blue-500 rounded-full fixed -translate-x-1/2 -translate-y-1/2`}
                animate={{
                    scale: isHovered ? 0.5 : 1
                }}
            />
            {/* Outer ring */}
            <Motion.div
                className={`fixed border border-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2`}
                animate={{
                    width: isHovered ? 40 : 20,
                    height: isHovered ? 40 : 20,
                    opacity: isHovered ? 0.8 : 0.3,
                    backgroundColor: isHovered ? "rgba(59, 130, 246, 0.1)" : "transparent"
                }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
            />
        </Motion.div>
    );
};

export default CustomCursor;
