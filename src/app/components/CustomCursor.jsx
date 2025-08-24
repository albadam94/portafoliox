"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // valores con spring para suavidad
  const springX = useSpring(0, { stiffness: 300, damping: 30, mass: 1 });
  const springY = useSpring(0, { stiffness: 300, damping: 30, mass: 1 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX);
      springY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, [springX, springY]);

  return (
    <motion.div
  className="hidden md:block fixed top-0 left-0 w-6 h-6 rounded-full bg-sky-400 pointer-events-none z-[9999] shadow-md"
  style={{
    x: springX,
    y: springY,
    translateX: "-50%",
    translateY: "-50%",
  }}
/>

  );
};

export default CustomCursor;
