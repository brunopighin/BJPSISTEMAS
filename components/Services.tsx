"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, ShoppingCart, Code2, Monitor, Zap, Brain } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Páginas Web",
    description: "Sitios modernos, rápidos y optimizados para SEO.",
    color: "#9C66F0",
    tag: "Web",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Tiendas online con inventario, pagos y logística integrados.",
    color: "#3B82F6",
    tag: "Ventas",
  },
  {
    icon: Code2,
    title: "Software a Medida",
    description: "Sistemas a medida para resolver los problemas de tu negocio.",
    color: "#B78BFA",
    tag: "Custom",
  },
  {
    icon: Monitor,
    title: "Sistemas POS",
    description: "POS moderno con facturación, stock y reportes en tiempo real.",
    color: "#7C3AED",
    tag: "POS",
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description: "Agentes IA y chatbots con los modelos más avanzados del mercado.",
    color: "#9C66F0",
    tag: "IA",
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Automatizamos flujos de trabajo para que trabajes menos y vendas más.",
    color: "#3B82F6",
    tag: "Auto",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setTilt({
      x:  ((e.clientY - rect.top)  / rect.height - 0.5) * 8,
      y: -((e.clientX - rect.left) / rect.width  - 0.5) * 8,
    });
  };

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transition: "transform 0.25s ease" }}
      className="group"
    >
      <div
        className="relative h-full card p-6 overflow-hidden transition-all duration-300"
        style={{ ["--hover-color" as string]: service.color }}
      >
        {/* Hover glow bg */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
          style={{ background: `radial-gradient(circle at top left, ${service.color}0D, transparent 65%)` }}
        />

        {/* Top accent on hover */}
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${service.color}60, transparent)` }}
        />

        <div className="flex items-start justify-between mb-5">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ background: `${service.color}14`, border: `1px solid ${service.color}28` }}
          >
            <Icon size={20} style={{ color: service.color }} />
          </div>
          <span
            className="text-[11px] font-medium px-2.5 py-1 rounded-full"
            style={{ background: `${service.color}10`, color: service.color, border: `1px solid ${service.color}22` }}
          >
            {service.tag}
          </span>
        </div>

        <h3 className="text-base font-semibold text-text mb-2 group-hover:text-white transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section id="servicios" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 grid-pattern opacity-[0.5]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-DEFAULT/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-5"
          >
            <span className="badge"><Zap size={12} />Lo que construimos</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ letterSpacing: "-0.025em" }}
          >
            Servicios que
            <span className="gradient-text"> transforman</span>
            <br />tu negocio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md mx-auto text-text-muted text-lg"
          >
            Desde el diseño hasta el deploy, adaptado a cada industria.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
