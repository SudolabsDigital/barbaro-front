"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();

  // Handle Visibility and Scrolled state
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Scrolled background state
    setIsScrolled(latest > 50);

    // Show Logo after Hero (approx 100vh)
    const viewportHeight = typeof window !== "undefined" ? window.innerHeight : 800;
    setShowLogo(latest > viewportHeight - 100);

    // Headroom Logic (Show on scroll up, Hide on scroll down)
    if (latest > previous && latest > 150) {
      setIsVisible(false); // Scrolling down
    } else {
      setIsVisible(true); // Scrolling up
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md py-4 border-b border-primary/10" 
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Adaptative Brand Identity */}
        <Link href="/" className="group relative flex items-center min-w-[200px] h-12 overflow-hidden">
          <AnimatePresence mode="wait">
            {!showLogo ? (
              <motion.div
                key="text-brand"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="flex flex-col"
              >
                <span className="font-display text-xl md:text-2xl tracking-tighter text-white group-hover:text-primary transition-all duration-300 uppercase">
                  ESTILO BÁRBARO
                </span>
                <span className="h-px w-0 bg-primary group-hover:w-full transition-all duration-500" />
              </motion.div>
            ) : (
              <motion.div
                key="logo-brand"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                className="relative w-10 h-10 md:w-12 md:h-12"
              >
                <Image
                  src="/logo-hero-new.webp"
                  alt="Bárbaro Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-white/60 hover:text-primary transition-all duration-500 relative group py-2"
            >
              <span className="relative z-10 block group-hover:-translate-y-1 transition-transform duration-500 ease-out font-bold">
                {link.name}
              </span>
              <span className="absolute bottom-0 left-1/2 w-0 h-px bg-primary transition-all duration-500 ease-out group-hover:w-full group-hover:left-0" />
            </Link>
          ))}
          
          <button className="relative px-8 py-3 overflow-hidden group border border-primary/20 text-primary font-sans text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 hover:border-primary">
            <span className="relative z-10 group-hover:text-background transition-colors duration-500">
              Reservar
            </span>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background/98 backdrop-blur-xl flex flex-col p-10 gap-8 md:hidden shadow-2xl border-b border-primary/10"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/80 border-b border-white/5 pb-6 font-bold hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full py-5 bg-primary text-background font-sans text-[10px] uppercase tracking-[0.4em] font-bold active:scale-95 transition-transform">
              RESERVAR RITUAL
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
