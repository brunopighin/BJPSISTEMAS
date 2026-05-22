"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Code2, Monitor, BarChart3, Smartphone, Bot, Scissors } from "lucide-react";

const projects = [
  {
    title: "Panel Administrativo",
    category: "Dashboard",
    description: "Gestión empresarial con analytics, KPIs y reportes exportables.",
    gradient: "from-violet-DEFAULT via-purple-700 to-electric-blue",
    bg: "from-violet-DEFAULT/20 to-electric-blue/10",
    icon: BarChart3,
    tags: ["React", "Node.js", "PostgreSQL"],
    accent: "#7C3AED",
    mockupType: "dashboard",
  },
  {
    title: "Sistema POS",
    category: "Punto de Venta",
    description: "POS con inventario automático, facturación y reportes diarios.",
    gradient: "from-electric-blue via-cyan-600 to-electric-cyan",
    bg: "from-electric-blue/20 to-electric-cyan/10",
    icon: Monitor,
    tags: ["Next.js", "Prisma", "MercadoPago"],
    accent: "#2563EB",
    mockupType: "pos",
  },
  {
    title: "Agente IA WhatsApp",
    category: "Inteligencia Artificial",
    description: "Bot con GPT-4 que gestiona consultas y turnos por WhatsApp.",
    gradient: "from-violet-neon via-violet-DEFAULT to-electric-blue",
    bg: "from-violet-neon/20 to-violet-DEFAULT/10",
    icon: Bot,
    tags: ["OpenAI", "WhatsApp API", "Node.js"],
    accent: "#C084FC",
    mockupType: "ai",
  },
  {
    title: "Sistema para Barberías",
    category: "Software Especializado",
    description: "Turnos online, perfil de barberos y pagos integrados.",
    gradient: "from-electric-cyan via-teal-500 to-electric-blue",
    bg: "from-electric-cyan/20 to-electric-blue/10",
    icon: Scissors,
    tags: ["React", "Express", "MercadoPago"],
    accent: "#06B6D4",
    mockupType: "barber",
  },
  {
    title: "E-commerce Premium",
    category: "Tienda Online",
    description: "Catálogo dinámico, carrito, checkout y gestión de pedidos.",
    gradient: "from-electric-blue via-indigo-600 to-violet-DEFAULT",
    bg: "from-electric-blue/20 to-violet-DEFAULT/10",
    icon: Smartphone,
    tags: ["Next.js", "Stripe", "Prisma"],
    accent: "#4F46E5",
    mockupType: "ecommerce",
  },
  {
    title: "API Gateway",
    category: "Backend & Integraciones",
    description: "Microservicios con autenticación JWT, rate limiting y Swagger.",
    gradient: "from-violet-DEFAULT via-fuchsia-700 to-violet-neon",
    bg: "from-violet-DEFAULT/20 to-violet-neon/10",
    icon: Code2,
    tags: ["Node.js", "Docker", "Redis"],
    accent: "#7C3AED",
    mockupType: "api",
  },
];

function MockupUI({ type, accent }: { type: string; accent: string }) {
  if (type === "dashboard") {
    return (
      <div className="p-3 h-full flex flex-col gap-2">
        <div className="flex gap-2">
          {["94k", "12k", "87%"].map((v, i) => (
            <div key={i} className="flex-1 bg-white/5 rounded-lg p-2">
              <div className="text-xs font-bold" style={{ color: accent }}>{v}</div>
              <div className="h-1 mt-1 rounded-full bg-white/10">
                <div className="h-full rounded-full" style={{ width: `${60 + i * 15}%`, backgroundColor: accent, opacity: 0.7 }} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 bg-white/5 rounded-lg p-2">
          <div className="flex gap-1 h-full items-end">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, backgroundColor: accent, opacity: 0.5 + (h / 200) }} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {["Ventas", "Stock", "Clientes"].map((l, i) => (
            <div key={i} className="bg-white/5 rounded p-1.5">
              <div className="w-3 h-3 rounded-full mb-1" style={{ backgroundColor: accent, opacity: 0.6 }} />
              <div className="text-[9px] text-white/40">{l}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "pos") {
    return (
      <div className="p-3 h-full flex gap-2">
        <div className="flex-1 grid grid-cols-3 gap-1.5 content-start">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-1.5 aspect-square flex flex-col items-center justify-center gap-0.5">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: accent, opacity: 0.5 }} />
              <div className="h-1 w-8 bg-white/20 rounded" />
            </div>
          ))}
        </div>
        <div className="w-20 flex flex-col gap-1.5">
          {["$1.200", "$850", "$2.500"].map((p, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-1.5">
              <div className="text-[9px] text-white/40">Item {i + 1}</div>
              <div className="text-xs font-bold" style={{ color: accent }}>{p}</div>
            </div>
          ))}
          <div className="mt-auto bg-gradient-to-r from-electric-blue to-electric-cyan rounded-lg p-2 text-center">
            <div className="text-[9px] text-white font-bold">COBRAR</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "ai") {
    return (
      <div className="p-3 h-full flex flex-col gap-2">
        <div className="flex-1 flex flex-col gap-2 overflow-hidden">
          {[
            { role: "user", text: "Quiero un turno para mañana" },
            { role: "bot", text: "¡Claro! Tengo disponible 10:00, 14:00 o 16:00 hs. ¿Cuál preferís?" },
            { role: "user", text: "A las 14:00 perfecto" },
          ].map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className="max-w-[80%] rounded-xl px-2.5 py-1.5 text-[9px] text-white leading-relaxed"
                style={{ backgroundColor: msg.role === "bot" ? `${accent}30` : "rgba(255,255,255,0.08)" }}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-1.5">
          <div className="flex-1 bg-white/5 rounded-lg h-7 px-2 flex items-center">
            <div className="h-1 w-16 bg-white/20 rounded" />
          </div>
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: accent }}>
            <div className="w-2 h-2 border-r border-t border-white rotate-45 -translate-x-px" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "barber") {
    return (
      <div className="p-3 h-full flex flex-col gap-2">
        <div className="flex gap-2">
          {["Lun", "Mar", "Mié", "Jue", "Vie"].map((d, i) => (
            <div key={i} className={`flex-1 rounded-lg p-1.5 text-center transition-all ${i === 2 ? "" : "bg-white/5"}`}
              style={i === 2 ? { backgroundColor: `${accent}40`, border: `1px solid ${accent}80` } : {}}>
              <div className="text-[8px] text-white/40">{d}</div>
              <div className="text-[10px] font-bold text-white">{15 + i}</div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-1.5">
          {[
            { time: "09:00", name: "Carlos M.", service: "Corte + Barba" },
            { time: "10:30", name: "Juan P.", service: "Degradé" },
            { time: "12:00", name: "—", service: "Disponible" },
          ].map((slot, i) => (
            <div key={i} className="flex gap-2 bg-white/5 rounded-lg p-1.5 items-center">
              <div className="text-[9px] font-mono font-bold" style={{ color: accent }}>{slot.time}</div>
              <div className="flex-1">
                <div className="text-[9px] text-white font-medium">{slot.name}</div>
                <div className="text-[8px] text-white/30">{slot.service}</div>
              </div>
              {slot.name !== "—" && <div className="w-1.5 h-1.5 rounded-full bg-green-400" />}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-3 h-full flex flex-col gap-2">
      <div className="flex gap-1.5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: accent, opacity: 0.3 + i * 0.2 }} />
        ))}
      </div>
      <div className="flex-1 bg-white/5 rounded-xl flex flex-col gap-2 p-2">
        <div className="h-3 w-24 bg-white/10 rounded" />
        <div className="h-2 w-32 bg-white/5 rounded" />
        <div className="flex gap-2 mt-2">
          {[1, 2].map((i) => (
            <div key={i} className="flex-1 rounded-lg p-2" style={{ backgroundColor: `${accent}20` }}>
              <div className="h-2 w-full bg-white/10 rounded mb-1" />
              <div className="h-1.5 w-3/4 bg-white/5 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#050508]" />
      <div className="absolute inset-0 grid-pattern opacity-15" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:pl-52">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-electric-cyan/30 text-sm text-electric-cyan mb-6"
          >
            <ExternalLink size={14} />
            Proyectos reales
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5"
          >
            Trabajo que
            <span className="gradient-text-blue"> habla</span>
            <br />
            por sí solo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto text-white/45 text-lg"
          >
            Cada proyecto está diseñado para impactar desde el primer segundo.
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative glass border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
                whileHover={{ y: -6, boxShadow: `0 20px 60px ${project.accent}25` }}
              >
                {/* Mockup preview */}
                <div className={`relative h-32 sm:h-36 bg-gradient-to-br ${project.bg} overflow-hidden`}>
                  {/* Grid pattern inside */}
                  <div className="absolute inset-0 grid-pattern opacity-30" />

                  {/* Mockup window chrome */}
                  <div className="absolute inset-3 bg-[#0A0A14] rounded-xl border border-white/5 overflow-hidden flex flex-col">
                    {/* Window bar */}
                    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5 bg-white/[0.02]">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                      <div className="flex-1 mx-2 h-3 bg-white/5 rounded-full" />
                    </div>
                    {/* Mockup content */}
                    <div className="flex-1 overflow-hidden">
                      <MockupUI type={project.mockupType} accent={project.accent} />
                    </div>
                  </div>

                  {/* Overlay glow */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.bg} opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${project.accent}20`, border: `1px solid ${project.accent}40` }}
                      >
                        <Icon size={14} style={{ color: project.accent }} />
                      </div>
                      <span className="text-xs text-white/40">{project.category}</span>
                    </div>
                    <ExternalLink size={14} className="text-white/20 group-hover:text-white/50 transition-colors duration-200" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-violet-light transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/40 leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full font-mono"
                        style={{
                          backgroundColor: `${project.accent}15`,
                          color: project.accent,
                          border: `1px solid ${project.accent}30`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-14"
        >
          <p className="text-white/40 mb-5">¿Querés ver más proyectos o discutir el tuyo?</p>
          <motion.button
            onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-2 px-7 py-3.5 glass border border-violet-DEFAULT/40 hover:border-violet-DEFAULT/80 text-white font-semibold rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Hablemos de tu proyecto
            <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
