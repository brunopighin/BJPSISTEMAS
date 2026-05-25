"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/navUtils";

const navLinks = [
  { label: "Inicio",    href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "IA",        href: "#ia" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contacto",  href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActiveSection(`#${hit.target.id}`);
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href);
  };

  const linkClass = (href: string) =>
    `text-sm transition-colors duration-200 whitespace-nowrap ${
      activeSection === href ? "text-text font-medium" : "text-text-muted hover:text-text"
    }`;

  return (
    <>
      {/* Logo flotante */}
      <motion.a
        href="#hero"
        onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
        className="fixed top-0 left-4 z-50 flex items-center"
        style={{ height: "clamp(80px, 15vw, 200px)" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -20 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.img
          src="/logo-transparent.png"
          alt="BJP Sistemas"
          className="logo-navbar"
          animate={prefersReduced ? {} : { y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.a>

      {/* Links horizontales — solo cuando NO scrolleó */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            key="horizontal"
            className="fixed top-0 right-8 z-50 hidden md:flex flex-row items-center gap-7"
            style={{ height: "200px" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className={linkClass(link.href)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Links verticales — solo cuando scrolleó */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="vertical"
            className="fixed top-1/2 right-8 z-50 hidden md:flex flex-col items-end gap-5"
            style={{ transform: "translateY(-50%)" }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className={linkClass(link.href)}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón mobile */}
      <motion.button
        aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        className="fixed top-0 right-4 z-50 md:hidden text-text-muted hover:text-text transition-colors flex items-center"
        style={{ height: "clamp(80px, 15vw, 200px)" }}
        onClick={() => setMobileOpen(!mobileOpen)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </motion.button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-bg-secondary/95 backdrop-blur-xl px-6 py-5"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className={`${linkClass(link.href)} py-3 border-b border-white/5 font-medium`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
