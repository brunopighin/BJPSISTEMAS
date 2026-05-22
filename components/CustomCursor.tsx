"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { damping: 28, stiffness: 400, mass: 0.3 });
  const springY = useSpring(y, { damping: 28, stiffness: 400, mass: 0.3 });

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (isTouchDevice) return null;

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "radial-gradient(circle, #9C66F0 0%, #6D28D9 60%, transparent 100%)",
          boxShadow: "0 0 6px 2px #7C3AED55, 0 0 14px 4px #7C3AED22",
        }}
      />
    </>
  );
}
