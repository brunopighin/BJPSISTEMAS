"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BRAND = "BJP SISTEMAS".split("");

export default function IntroScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setVisible(false), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
      }}
    >
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: "#0E0E12" }}
          exit={{
            y: "-100%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 65%)",
              filter: "blur(70px)",
            }}
          />

          <div className="relative flex flex-col items-center gap-5 px-6">
            <div className="overflow-hidden" style={{ lineHeight: 1.1 }}>
              <div className="flex">
                {BRAND.map((char, i) => (
                  <motion.span
                    key={i}
                    style={{
                      display: "inline-block",
                      minWidth: char === " " ? "0.3em" : undefined,
                      fontWeight: 900,
                      fontSize: "clamp(3rem, 10vw, 6rem)",
                      letterSpacing: "-0.03em",
                      background:
                        "linear-gradient(135deg, #B78BFA 0%, #7C3AED 50%, #3B82F6 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    initial={{ y: "110%" }}
                    animate={{
                      y: "0%",
                      transition: {
                        delay: 0.1 + i * 0.045,
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                  >
                    {char === " " ? " " : char}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1.0, duration: 0.6 } }}
            >
              Tecnología que transforma negocios
            </motion.p>

            <div
              style={{ width: "200px", height: "1px", overflow: "hidden", position: "relative" }}
            >
              <motion.div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(90deg, #7C3AED, #3B82F6)",
                  transformOrigin: "left",
                }}
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: 1,
                  transition: { delay: 0.5, duration: 1.9, ease: [0.25, 0.1, 0.25, 1] },
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
