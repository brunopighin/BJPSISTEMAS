"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, MessageSquare, Calendar, Headphones, Cpu, Sparkles, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Agentes IA Autónomos",
    description: "Agentes que razonan, planifican y ejecutan tareas complejas sin intervención humana.",
    color: "#9C66F0",
  },
  {
    icon: MessageSquare,
    title: "Chatbots Inteligentes",
    description: "Bots conversacionales entrenados en tu negocio que responden como un experto humano.",
    color: "#3B82F6",
  },
  {
    icon: Calendar,
    title: "Reservas Automáticas",
    description: "Sistema de turnos que agenda, confirma y recuerda sin que intervengas.",
    color: "#B78BFA",
  },
  {
    icon: Headphones,
    title: "Atención 24/7",
    description: "Atención al cliente permanente que nunca descansa y siempre da respuestas precisas.",
    color: "#7C3AED",
  },
];

export default function AISection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ia" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary" />
      <div className="absolute inset-0 grid-pattern opacity-[0.5]" />
      <div className="absolute inset-x-0 top-0 h-px section-divider" />
      <div className="absolute inset-x-0 bottom-0 h-px section-divider" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-DEFAULT/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex mb-6"
            >
              <span className="badge"><Cpu size={12} />Inteligencia Artificial</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5"
              style={{ letterSpacing: "-0.025em" }}
            >
              El futuro de tu negocio
              <br />es{" "}
              <span className="gradient-text">inteligente</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-muted text-lg leading-relaxed mb-8"
            >
              Agentes de IA, chatbots y automatización que trabajan
              mientras vos dormís.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-violet-DEFAULT hover:bg-violet-soft text-white font-semibold rounded-xl transition-colors duration-200 glow-violet"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles size={16} />
                Quiero IA en mi empresa
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-6 mt-10"
            >
              {[
                { value: "< 2s", label: "Respuesta" },
                { value: "24/7", label: "Disponible" },
                { value: "GPT-4o", label: "Motor IA" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-lg font-black gradient-text">{s.value}</div>
                  <div className="text-xs text-text-subtle mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 32 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="group card p-5 overflow-hidden transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    style={{ background: `radial-gradient(circle at top left, ${feature.color}0C, transparent 70%)` }}
                  />
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${feature.color}50, transparent)` }}
                  />

                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${feature.color}14`, border: `1px solid ${feature.color}25` }}
                  >
                    <Icon size={17} style={{ color: feature.color }} />
                  </div>

                  <h3 className="text-sm font-semibold text-text mb-1.5">{feature.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
