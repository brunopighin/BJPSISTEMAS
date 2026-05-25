"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consulta",
    description: "Nos contás tu idea. Analizamos tu negocio y definimos qué necesitás.",
    color: "#9C66F0",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Diseño",
    description: "Creamos la arquitectura y el diseño del sistema antes de escribir una línea de código.",
    color: "#3B82F6",
  },
  {
    number: "03",
    icon: Code2,
    title: "Desarrollo",
    description: "Construimos tu solución con tecnología moderna, iterando con vos en cada etapa.",
    color: "#B78BFA",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Entrega",
    description: "Lanzamos, capacitamos y dejamos todo funcionando. Soporte incluido.",
    color: "#7C3AED",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-x-0 top-0 h-px section-divider" />
      <div className="absolute inset-x-0 bottom-0 h-px section-divider" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-5"
          >
            <span className="badge">
              <Rocket size={12} />
              Cómo trabajamos
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ letterSpacing: "-0.025em" }}
          >
            De la idea al
            <span className="gradient-text"> producto final</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md mx-auto text-text-muted text-lg"
          >
            Un proceso claro y transparente en 4 pasos.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group relative card p-6 overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{ background: `radial-gradient(circle at top left, ${step.color}0D, transparent 65%)` }}
                />
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${step.color}50, transparent)` }}
                />

                {/* Number */}
                <div
                  className="text-4xl font-black mb-4 leading-none"
                  style={{ color: `${step.color}30` }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${step.color}14`, border: `1px solid ${step.color}25` }}
                >
                  <Icon size={18} style={{ color: step.color }} />
                </div>

                <h3 className="text-base font-semibold text-text mb-2">{step.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>

                {/* Connector line (except last) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-2 w-4 h-px bg-white/10 z-10" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
