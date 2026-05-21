"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const row1 = [
  { name: "React",       abbr: "Re",  color: "#61DAFB", bg: "#0B1C2C" },
  { name: "Next.js",     abbr: "N",   color: "#EDEDED", bg: "#111111" },
  { name: "TypeScript",  abbr: "TS",  color: "#3B82F6", bg: "#0D1B30" },
  { name: "Tailwind",    abbr: "Tw",  color: "#06B6D4", bg: "#071A1F" },
  { name: "Framer",      abbr: "Fr",  color: "#BB6BD9", bg: "#160D1E" },
  { name: "Node.js",     abbr: "No",  color: "#68A063", bg: "#0D1A0D" },
  { name: "Express",     abbr: "Ex",  color: "#FFFFFF", bg: "#111111" },
  { name: "Python",      abbr: "Py",  color: "#F7C948", bg: "#1A160B" },
  { name: "FastAPI",     abbr: "FA",  color: "#00D2B7", bg: "#071A18" },
  { name: "GraphQL",     abbr: "GQ",  color: "#E535AB", bg: "#1A0714" },
];

const row2 = [
  { name: "PostgreSQL",  abbr: "PG",  color: "#4B9CD3", bg: "#0B1623" },
  { name: "MongoDB",     abbr: "Mo",  color: "#47A248", bg: "#0B1A0B" },
  { name: "Redis",       abbr: "Rd",  color: "#E53935", bg: "#1A0B0B" },
  { name: "Prisma",      abbr: "Pr",  color: "#818CF8", bg: "#10101E" },
  { name: "Docker",      abbr: "Do",  color: "#2496ED", bg: "#0A1525" },
  { name: "AWS",         abbr: "AW",  color: "#FF9900", bg: "#1A1200" },
  { name: "Vercel",      abbr: "Vr",  color: "#EDEDED", bg: "#111111" },
  { name: "OpenAI",      abbr: "AI",  color: "#10A37F", bg: "#081A14" },
  { name: "MercadoPago", abbr: "MP",  color: "#00A2E8", bg: "#071523" },
  { name: "Stripe",      abbr: "St",  color: "#6772E5", bg: "#0F0E1E" },
];

function TechCard({ name, abbr, color, bg }: (typeof row1)[0]) {
  return (
    <div
      className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl border border-white/5 mx-2 group hover:border-white/15 transition-all duration-300 cursor-default"
      style={{ backgroundColor: bg }}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${color}18`, color, border: `1px solid ${color}35` }}
      >
        {abbr}
      </div>
      <span className="text-sm font-medium text-white/60 group-hover:text-white/90 transition-colors duration-300 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-1">
      <div
        className={reverse ? "animate-marquee-right" : "animate-marquee-left"}
        style={{ display: "flex", width: "max-content" }}
      >
        {doubled.map((tech, i) => (
          <TechCard key={`${tech.name}-${i}`} {...tech} />
        ))}
      </div>
    </div>
  );
}

const categories = [
  { label: "Frontend",    techs: ["React", "Next.js", "TypeScript", "Tailwind", "Framer"] },
  { label: "Backend",     techs: ["Node.js", "Express", "Python", "FastAPI", "GraphQL"] },
  { label: "Bases de datos", techs: ["PostgreSQL", "MongoDB", "Redis", "Prisma"] },
  { label: "DevOps & Cloud", techs: ["Docker", "AWS", "Vercel"] },
  { label: "IA & Pagos",  techs: ["OpenAI", "MercadoPago", "Stripe"] },
];

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 overflow-hidden">
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .animate-marquee-left  { animation: marquee-left  35s linear infinite; }
        .animate-marquee-right { animation: marquee-right 30s linear infinite; }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover { animation-play-state: paused; }
      `}</style>

      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-violet-DEFAULT/6 rounded-full blur-[100px] pointer-events-none" />

      {/* fade masks */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050508] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050508] to-transparent z-10 pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-violet-DEFAULT/30 text-sm text-violet-light mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-violet-light animate-pulse" />
            Stack tecnológico
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black tracking-tight mb-4"
          >
            Construimos con las
            <br />
            <span className="gradient-text">mejores herramientas</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-lg mx-auto text-white/45 text-lg"
          >
            Tecnologías modernas y probadas para garantizar rendimiento, escalabilidad y mantenibilidad.
          </motion.p>
        </div>

        {/* Scrolling rows */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-3 mb-14"
        >
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </motion.div>

        {/* Category breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
              className="glass border border-white/5 hover:border-violet-DEFAULT/30 rounded-2xl p-4 transition-all duration-300 group"
            >
              <div className="text-xs font-semibold text-violet-light mb-3 uppercase tracking-wider">
                {cat.label}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.techs.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-white/50 group-hover:text-white/70 border border-white/5 transition-colors duration-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
