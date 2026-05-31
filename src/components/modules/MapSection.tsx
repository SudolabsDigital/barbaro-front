"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MapSection() {
  return (
    <section className="relative w-full bg-background py-24 lg:py-32 grain-overlay overflow-hidden border-t border-primary/5">
      
      {/* Marca de agua de fondo arquitectónica */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.015] pointer-events-none select-none">
        <span className="text-[25vw] font-display text-white whitespace-nowrap uppercase">LOCALIZACIÓN</span>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-16 lg:gap-24 items-center">
          
          {/* Bloque de información: Alta Jerarquía */}
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.8em] text-primary/60 block">
                COORDENADAS
              </span>
              <h2 className="text-5xl md:text-7xl font-display text-white leading-none uppercase tracking-tighter">
                NUESTRO <br /> <span className="text-primary italic font-serif lowercase block mt-2">santuario</span>
              </h2>
            </div>
            
            <p className="font-serif italic text-xl md:text-2xl text-white/70 leading-relaxed border-l-4 border-primary/20 pl-8">
              &quot;Ubicados en el corazón de El Tambo, donde la tradición se encuentra con la precisión urbana.&quot;
            </p>

            {/* Redes sociales con jerarquía elevada */}
            <div className="space-y-8 pt-6">
               <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold block border-b border-white/5 pb-4">SÍGUENOS EN EL CLAN</span>
               <div className="flex flex-wrap gap-10">
                  {/* Facebook - Enfoque Premium */}
                  <Link 
                    href="https://www.facebook.com/share/1DmsBSDKTW/?mibextid=wwXIfr" 
                    target="_blank"
                    className="group flex items-center gap-6"
                  >
                    <div className="p-4 border border-primary/20 rounded-full text-primary/60 group-hover:text-primary group-hover:border-primary transition-all duration-500 bg-primary/5">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-[11px] uppercase tracking-widest text-white group-hover:text-primary transition-colors font-bold">Facebook</span>
                      <span className="font-serif italic text-xs text-white/40 group-hover:text-white/60 transition-colors">/estilobarbaro</span>
                    </div>
                  </Link>

                  {/* TikTok - Enfoque Premium */}
                  <Link 
                    href="https://www.tiktok.com/@estilo_barbaro?_r=1&_t=ZS-96MmpWIARs5" 
                    target="_blank"
                    className="group flex items-center gap-6"
                  >
                    <div className="p-4 border border-primary/20 rounded-full text-primary/60 group-hover:text-primary group-hover:border-primary transition-all duration-500 bg-primary/5">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-.99.01-1.49.18-3.33 2.76-6.13 6.01-6.59 1.38-.2 2.81.05 4.04.77V10.3c-.9-.37-1.89-.52-2.85-.35-1.24.14-2.43.79-3.18 1.78-.87 1.07-1.21 2.52-.94 3.89.15 1.01.69 1.97 1.53 2.63.95.77 2.19 1.12 3.41 1.01 1.14-.04 2.22-.53 3.01-1.33.72-.73 1.14-1.74 1.25-2.76.12-2.31.05-4.62.07-6.93.02-4.57.01-9.14.02-13.71z"/>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-[11px] uppercase tracking-widest text-white group-hover:text-primary transition-colors font-bold">TikTok</span>
                      <span className="font-serif italic text-xs text-white/40 group-hover:text-white/60 transition-colors">@estilo_barbaro</span>
                    </div>
                  </Link>
               </div>
            </div>

            <div className="pt-8 border-t border-white/5">
               <a 
                href="https://maps.app.goo.gl/g91U1WFGs9PfV83n8" 
                target="_blank" 
                className="inline-block text-[11px] uppercase tracking-[0.4em] text-primary font-bold border-b-2 border-primary/20 pb-2 hover:border-primary transition-all duration-500"
               >
                 Abrir en Google Maps →
               </a>
            </div>
          </div>

          {/* Contenedor del Mapa: Street View dinámico */}
          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[700px] border border-primary/10 bg-secondary/10 group overflow-hidden">
             {/* Esquinas decorativas */}
             <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/40 z-20 pointer-events-none group-hover:top-6 group-hover:left-6 transition-all duration-700" />
             <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary/40 z-20 pointer-events-none group-hover:bottom-6 group-hover:right-6 transition-all duration-700" />
             
             <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1778803654830!6m8!1m7!1sActrd8lwSh26zoPwyF2Q7A!2m2!1d-12.05617589176119!2d-75.21325286053849!3f59.609641315425144!4f5.9075388994039315!5f0.7820865974627469" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.8] contrast-[1.1] brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
             />

             {/* Overlay dinámico para mezclar con la estética */}
             <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] z-10 group-hover:shadow-[inset_0_0_150px_rgba(0,0,0,0.4)] transition-all duration-1000" />
          </div>

        </div>
      </div>
    </section>
  );
}
