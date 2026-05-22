"use client";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";

const links = {
  servicios: ["Páginas Web", "E-commerce", "Software a Medida", "Sistemas POS", "IA", "Automatización"],
  empresa:   ["Sobre nosotros", "Portfolio", "Contacto"],
};

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      <div className="h-px section-divider" />

      <div className="bg-bg-secondary py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="mb-4 flex justify-center lg:justify-start">
                <img
                  src="/logo-transparent.png"
                  alt="BJP Sistemas"
                  className="logo-footer"
                />
              </div>
              <p className="text-text-muted text-sm leading-relaxed max-w-xs mb-5">
                Transformamos ideas en sistemas inteligentes. Tecnología de alto nivel para empresas modernas.
              </p>
              <div className="flex gap-2">
                {[
                  { Icon: Github,   href: "#" },
                  { Icon: Instagram, href: "https://www.instagram.com/bjpsistemas" },
                  { Icon: Linkedin,  href: "#" },
                ].map(({ Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 card flex items-center justify-center text-text-subtle hover:text-text-muted transition-colors duration-200"
                    whileHover={{ scale: 1.08, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={15} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-semibold text-text uppercase tracking-wider mb-4">Servicios</h4>
              <ul className="space-y-2.5">
                {links.servicios.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => handleNav("#servicios")}
                      className="text-sm text-text-muted hover:text-text transition-colors duration-200 text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-semibold text-text uppercase tracking-wider mb-4">Empresa</h4>
              <ul className="space-y-2.5">
                {links.empresa.map((link) => (
                  <li key={link}>
                    <button className="text-sm text-text-muted hover:text-text transition-colors duration-200 text-left">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/5 border border-green-500/15">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400/70">Todos los sistemas operativos</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/5 mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-subtle">
            <span>© 2025 BJP SISTEMAS. Todos los derechos reservados.</span>
            <span>Hecho con pasión en Argentina 🇦🇷</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
