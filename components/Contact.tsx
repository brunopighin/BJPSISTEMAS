"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle, Loader2, MessageSquare, ArrowRight } from "lucide-react";

const info = [
  { icon: MessageSquare, label: "WhatsApp", value: "+54 9 2323 654029", href: "https://wa.me/5492323654029" },
  { icon: Mail, label: "Email", value: "bjpsistemas@hotmail.com", href: "mailto:bjpsistemas@hotmail.com" },
  { icon: MapPin, label: "Ubicación", value: "Argentina 🇦🇷", href: "#" },
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const text = [
      `*Nuevo contacto desde la web*`,
      ``,
      `*Nombre:* ${form.name}`,
      `*Email:* ${form.email}`,
      form.phone ? `*WhatsApp:* ${form.phone}` : null,
      form.service ? `*Servicio:* ${form.service}` : null,
      ``,
      `*Mensaje:*`,
      form.message,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const url = `https://wa.me/5492323654029?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setStatus("success");
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    }, 4000);
  };

  const inputClass = `w-full bg-white/[0.03] border border-white/8 hover:border-white/15 focus:border-violet-DEFAULT/60 focus:outline-none focus:ring-1 focus:ring-violet-DEFAULT/30 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm transition-all duration-200`;

  return (
    <section id="contacto" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#080812] to-[#050508]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Glow blobs */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-violet-DEFAULT/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-electric-cyan/6 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-violet-DEFAULT/30 text-sm text-violet-light mb-6"
          >
            <Send size={14} />
            Empecemos tu proyecto
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5"
          >
            Hablemos y
            <br />
            <span className="gradient-text">hagamos algo increíble</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-lg mx-auto text-white/45 text-lg"
          >
            Respondemos en menos de 24 horas con una propuesta sin costo.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass border border-green-500/30 rounded-2xl p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-5"
                  >
                    <CheckCircle size={32} className="text-green-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">¡Mensaje enviado!</h3>
                  <p className="text-white/50">Te contactaremos dentro de las próximas 24 horas.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="glass border border-white/5 rounded-2xl p-6 sm:p-8 space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/40 mb-1.5 font-medium">Nombre *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre completo"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-1.5 font-medium">Email *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/40 mb-1.5 font-medium">WhatsApp</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+54 9 xxx xxx xxxx"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-1.5 font-medium">Servicio de interés</label>
                      <select name="service" value={form.service} onChange={handleChange} className={inputClass}>
                        <option value="" className="bg-[#0A0A14]">Seleccioná uno...</option>
                        <option value="web" className="bg-[#0A0A14]">Página Web</option>
                        <option value="ecommerce" className="bg-[#0A0A14]">E-commerce</option>
                        <option value="sistema" className="bg-[#0A0A14]">Sistema a Medida</option>
                        <option value="pos" className="bg-[#0A0A14]">Sistema POS</option>
                        <option value="ia" className="bg-[#0A0A14]">Inteligencia Artificial</option>
                        <option value="automatizacion" className="bg-[#0A0A14]">Automatización</option>
                        <option value="barberia" className="bg-[#0A0A14]">Sistema para Barbería</option>
                        <option value="otro" className="bg-[#0A0A14]">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 mb-1.5 font-medium">Contanos tu proyecto *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Describí tu idea y cualquier detalle relevante..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full group flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-violet-DEFAULT to-electric-blue text-white font-bold rounded-xl glow-violet disabled:opacity-60 disabled:cursor-not-allowed"
                    whileHover={status !== "sending" ? { scale: 1.02, y: -1 } : {}}
                    whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Enviar mensaje
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-white/25">
                    Al enviar aceptás nuestros términos y política de privacidad.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {/* Quick response */}
            <div className="glass border border-violet-DEFAULT/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-white">Respondemos rápido</span>
              </div>
              <p className="text-sm text-white/45 leading-relaxed">
                Tiempo de respuesta: <strong className="text-violet-light">menos de 2 horas</strong>.
              </p>
            </div>

            {/* Contact methods */}
            <div className="glass border border-white/5 rounded-2xl p-5 space-y-4">
              {info.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 group"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <div className="w-9 h-9 rounded-xl bg-violet-DEFAULT/10 border border-violet-DEFAULT/20 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-DEFAULT/20 transition-colors">
                      <Icon size={16} className="text-violet-light" />
                    </div>
                    <div>
                      <div className="text-xs text-white/35 font-medium">{item.label}</div>
                      <div className="text-sm text-white group-hover:text-violet-light transition-colors">{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
