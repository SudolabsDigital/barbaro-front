"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Calendar, Clock, User, Scissors, Info } from "lucide-react";
import Image from "next/image";
import { BARBARO_INFO } from "@/src/lib/constants";

// Horarios razonables: 09:00 a 21:00
const AVAILABLE_TIMES = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", 
  "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    service: "Corte Bárbaro Clásico",
    date: "",
    time: "10:00",
    message: ""
  });

  // Fecha mínima: Hoy
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir mensaje de WhatsApp
    const text = `Hola Bárbaro! 👋%0A%0AMe gustaría reservar un ritual:%0A👤 *Nombre:* ${formData.name}%0A✂️ *Servicio:* ${formData.service}%0A📅 *Fecha:* ${formData.date}%0A⏰ *Hora:* ${formData.time}${formData.message ? `%0A📝 *Nota:* ${formData.message}` : ""}`;
    
    const whatsappNumber = BARBARO_INFO.phone.replace(/\D/g, "");
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="bg-background min-h-screen pt-32 pb-24 grain-overlay overflow-hidden">
      
      {/* 1. Header Editorial */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-20 text-center lg:text-left">
        <div className="max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-[10px] uppercase tracking-[0.8em] text-primary/60 mb-6 block"
          >
            RESERVAS ELITE
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display leading-[0.85] mb-12 uppercase tracking-tighter text-white"
          >
            ASEGURA TU <br /> <span className="text-primary italic font-serif text-3xl md:text-5xl lg:text-6xl lowercase">lugar en el clan</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. Formulario & Info Grid */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Columna Izquierda: Formulario Premium */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-secondary/10 border border-primary/10 p-8 md:p-12 rounded-2xl relative"
          >
            {/* Esquinas decorativas */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/30 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/30 rounded-br-2xl" />

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Input: Nombre */}
              <div className="space-y-2">
                <label className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
                  <User size={14} /> Nombre Completo
                </label>
                <input 
                  required
                  type="text" 
                  name="name"
                  placeholder="Ej. Julian Bárbaro"
                  className="w-full bg-background/50 border-b border-primary/20 py-4 px-0 text-white focus:border-primary transition-colors outline-none font-serif italic text-lg"
                  onChange={handleChange}
                />
              </div>

              {/* Select: Servicio */}
              <div className="space-y-2">
                <label className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
                  <Scissors size={14} /> Servicio deseado
                </label>
                <div className="relative group">
                  <select 
                    name="service"
                    className="w-full bg-background/50 border-b border-primary/20 py-4 px-0 text-white focus:border-primary transition-colors outline-none font-serif italic text-lg appearance-none cursor-pointer"
                    onChange={handleChange}
                    value={formData.service}
                  >
                    <option className="bg-background text-white" value="Corte Bárbaro Clásico">Corte Bárbaro Clásico</option>
                    <option className="bg-background text-white" value="Afeitado Real Tradicional">Afeitado Real Tradicional</option>
                    <option className="bg-background text-white" value="Experiencia Bárbaro (Full)">La Experiencia Bárbaro</option>
                    <option className="bg-background text-white" value="Limpieza Facial Profunda">Limpieza Facial Profunda</option>
                  </select>
                  <div className="absolute right-0 bottom-4 pointer-events-none text-primary/40 group-hover:text-primary transition-colors">
                     <Scissors size={14} className="rotate-90" />
                  </div>
                </div>
              </div>

              {/* Grid: Fecha y Hora */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
                    <Calendar size={14} /> Fecha
                  </label>
                  <input 
                    required
                    type="date" 
                    name="date"
                    min={today}
                    className="w-full bg-background/50 border-b border-primary/20 py-4 px-0 text-white focus:border-primary transition-colors outline-none font-sans text-sm cursor-pointer invert-[0.8] brightness-200"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
                    <Clock size={14} /> Hora (9am - 9pm)
                  </label>
                  <select 
                    required
                    name="time"
                    className="w-full bg-background/50 border-b border-primary/20 py-4 px-0 text-white focus:border-primary transition-colors outline-none font-sans text-sm cursor-pointer appearance-none"
                    onChange={handleChange}
                    value={formData.time}
                  >
                    {AVAILABLE_TIMES.map(t => (
                      <option key={t} value={t} className="bg-background text-white">{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Textarea: Mensaje */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold block">
                  Nota Adicional (Opcional)
                </label>
                <textarea 
                  name="message"
                  rows={3}
                  placeholder="Algún detalle que debamos saber..."
                  className="w-full bg-background/50 border-b border-primary/20 py-4 px-0 text-white focus:border-primary transition-colors outline-none font-serif italic text-lg resize-none"
                  onChange={handleChange}
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full group relative py-6 bg-primary text-primary-foreground font-sans font-bold uppercase tracking-[0.4em] text-[11px] transition-all hover:bg-white hover:text-black hover:tracking-[0.5em] active:scale-95 shadow-2xl flex items-center justify-center gap-4"
                >
                  <MessageSquare size={18} />
                  SOLICITAR RITUAL POR WHATSAPP
                </button>
                <p className="flex items-center justify-center gap-2 mt-4 text-[8px] uppercase tracking-widest text-white/30 text-center">
                  <Info size={10} /> La confirmación se enviará a tu WhatsApp
                </p>
              </div>
            </form>
          </motion.div>

          {/* Columna Derecha: Editorial Info */}
          <div className="flex flex-col justify-center space-y-16">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-display text-white uppercase tracking-tighter">EL COMPROMISO BÁRBARO</h3>
              <p className="font-serif italic text-lg md:text-xl text-white/60 leading-relaxed border-l-2 border-primary/20 pl-8">
                &quot;Al solicitar tu ritual, no solo agendas un corte, reclamas un momento de distinción. Nuestro equipo confirmará tu disponibilidad en minutos.&quot;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/5 pt-12">
               <div className="space-y-4">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-primary/60 font-bold block">Huancayo</span>
                  <p className="font-sans text-xs text-white/50 leading-relaxed uppercase">
                    Frente al Parque de los Sombreros<br />
                    El Tambo
                  </p>
               </div>
               <div className="space-y-4">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-primary/60 font-bold block">Contacto</span>
                  <p className="font-sans text-xs text-white/50 leading-relaxed uppercase">
                    {BARBARO_INFO.phone}<br />
                    {BARBARO_INFO.email}
                  </p>
               </div>
            </div>

            {/* Aesthetic Visual */}
            <div className="relative aspect-[16/6] overflow-hidden grayscale opacity-30 border border-white/5">
              <Image 
                src="https://picsum.photos/seed/barbaro-tools/800/300?grayscale" 
                alt="Herramientas Bárbaro" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
