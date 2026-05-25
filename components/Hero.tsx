"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/navUtils";

const TYPING_WORDS = ["inteligentes.", "modernos.", "escalables.", "rentables."];

function TypingEffect() {
  const prefersReduced = useReducedMotion();
  // Start with first word so SSR and first client render match
  const [displayed, setDisplayed] = useState(TYPING_WORDS[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  // Gate animation until after hydration
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!ready || prefersReduced) return;
    const target = TYPING_WORDS[wordIndex];
    if (!deleting && displayed === target) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (deleting && displayed === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % TYPING_WORDS.length);
      return;
    }
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      setDisplayed(deleting ? displayed.slice(0, -1) : target.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, deleting, wordIndex, prefersReduced, ready]);

  if (prefersReduced) {
    return <span className="gradient-text">{TYPING_WORDS[0]}</span>;
  }

  return (
    <span className="gradient-text">
      {displayed}
      {ready && <span className="typing-cursor" />}
    </span>
  );
}

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Gradient waves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
      </div>

      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-bg to-transparent pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 md:pt-52"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <span className="badge">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
            Tecnología de próxima generación
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[78px] font-black tracking-tight leading-[1.05] mb-6"
          style={{ letterSpacing: "-0.03em" }}
        >
          <span className="text-text">Transformamos ideas</span>
          <br />
          <span className="text-text">en sistemas </span>
          <TypingEffect />
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={item}
          className="max-w-xl mx-auto text-lg text-text-muted leading-relaxed mb-10"
        >
          Desarrollo web, automatización e IA para negocios modernos.
          Soluciones a medida que potencian tu empresa.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 justify-center">
          <motion.button
            onClick={() => scrollToSection("#contacto")}
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-violet-DEFAULT hover:bg-violet-soft text-white font-semibold rounded-xl transition-colors duration-200 glow-violet"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Solicitar presupuesto
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("#portfolio")}
            className="inline-flex items-center gap-2 px-7 py-3.5 glass hover:border-white/15 text-text-muted hover:text-text font-semibold rounded-xl transition-all duration-200"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver proyectos
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span className="text-[11px] text-text-subtle tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-text-subtle" />
        </motion.div>
      </motion.div>
    </section>
  );
}
