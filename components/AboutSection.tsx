"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Settings, Smartphone, Zap, ShoppingCart, Cpu, GraduationCap, Wrench, ArrowRight } from "lucide-react";
import { scrollToSection } from "@/lib/navUtils";

const whatWeDo = [
  { icon: Globe,       label: "Desarrollo Web" },
  { icon: Settings,    label: "Sistemas Personalizados" },
  { icon: Smartphone,  label: "Integraciones Digitales" },
  { icon: Zap,         label: "Automatización" },
  { icon: ShoppingCart,label: "Soluciones para negocios" },
  { icon: Cpu,         label: "Innovación tecnológica" },
];

const services = [
  "Páginas web profesionales",
  "Sistemas de gestión personalizados",
  "Landing pages y catálogos online",
  "Automatización de procesos",
  "Integraciones digitales",
  "Soluciones tecnológicas adaptadas a cada necesidad",
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="nosotros" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px section-divider" />
      <div className="absolute inset-x-0 bottom-0 h-px section-divider" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-violet-DEFAULT/5 rounded-full blur-[120px] pointer-events-none" />

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
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
              Quiénes Somos
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ letterSpacing: "-0.025em" }}
          >
            Tecnología con
            <span className="gradient-text"> propósito</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl mx-auto text-text-muted text-lg"
          >
            Desarrollamos soluciones digitales modernas orientadas a potenciar
            negocios, emprendimientos y profesionales.
          </motion.p>
        </div>

        {/* Main content: founder card + text */}
        <div className="grid lg:grid-cols-[340px_1fr] gap-8 mb-16 items-start">

          {/* Founder card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass border border-violet-DEFAULT/20 rounded-2xl p-7 flex flex-col gap-5"
          >
            {/* Avatar */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-DEFAULT to-electric-blue flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-black text-xl">B</span>
              </div>
              <div>
                <div className="text-white font-bold text-base leading-tight">Bruno Joaquín Pighin</div>
                <div className="text-violet-light text-sm font-medium mt-0.5">Fundador · BJP Sistemas</div>
              </div>
            </div>

            <div className="h-px bg-white/5" />

            {/* Tags */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={15} className="text-electric-blue" />
                </div>
                <span className="text-sm text-text-muted leading-snug">Estudiante de programación · UTN</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-DEFAULT/10 border border-violet-DEFAULT/20 flex items-center justify-center flex-shrink-0">
                  <Wrench size={15} className="text-violet-light" />
                </div>
                <span className="text-sm text-text-muted leading-snug">Técnico electromecánico</span>
              </div>
            </div>

            <div className="h-px bg-white/5" />

            {/* Quote */}
            <p className="text-sm text-text-muted leading-relaxed italic">
              &ldquo;Apasionado por la tecnología, la automatización y el desarrollo de herramientas que simplifiquen procesos.&rdquo;
            </p>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <p className="text-text-muted text-lg leading-relaxed">
              En BJP Sistemas creemos que la tecnología no solo debe verse bien,
              sino también <span className="text-text font-medium">resolver problemas reales</span>.
              Nuestro enfoque combina diseño moderno, funcionalidad y cercanía
              con el cliente, buscando crear herramientas simples, eficientes y escalables.
            </p>

            {/* Services list */}
            <div>
              <p className="text-xs font-semibold text-text uppercase tracking-wider mb-4">
                Trabajamos en el desarrollo de
              </p>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {services.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, x: 12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
                    className="flex items-start gap-2.5 text-sm text-text-muted"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-DEFAULT flex-shrink-0" />
                    {s}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.button
              onClick={() => scrollToSection("#contacto")}
              className="group self-start inline-flex items-center gap-2 px-6 py-3 bg-violet-DEFAULT hover:bg-violet-soft text-white font-semibold rounded-xl transition-colors duration-200 glow-violet text-sm"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Hablemos de tu proyecto
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* What we do grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-center text-xs font-semibold text-text uppercase tracking-wider mb-6">
            ¿Qué hacemos?
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {whatWeDo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.65 + i * 0.07 }}
                  className="group glass border border-white/5 hover:border-violet-DEFAULT/30 rounded-2xl p-4 flex flex-col items-center gap-3 text-center transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-DEFAULT/10 border border-violet-DEFAULT/20 flex items-center justify-center group-hover:bg-violet-DEFAULT/20 transition-colors duration-200">
                    <Icon size={18} className="text-violet-light" />
                  </div>
                  <span className="text-xs font-medium text-text-muted group-hover:text-text transition-colors duration-200 leading-snug">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
