"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import PremiumCTA from "@/components/PremiumCTA"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-navy pb-16 lg:pb-24 overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-gold blur-[150px] z-0 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.02 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-20 left-10 w-[400px] h-[400px] rounded-full bg-gold blur-[120px] z-0 pointer-events-none"
      />

      {/* =========================================
          NOVO: Mobile Image Container Corrigido
      ========================================= */}
      {/* A transparência global foi removida. A imagem agora é nítida no topo */}
      <div className="absolute min-[400px]:top-[-30px] min-[470px]:top-[-70px] right-[-4rem] md:right-[-10rem] w-[100%] h-[100%] lg:hidden pointer-events-none">
        <Image
          src="/images/imagem-inicio.png"
          alt="Advogada"
          fill
          className="object-contain object-top drop-shadow-[40px_10px_60px_rgba(212,175,55,0.5)] brightness-80 contrast-105 scale-120"
          priority
        />
        {/* Degradê apenas na base (de baixo para cima) para fundir com o fundo escuro.
            Removida a transparência geral para a foto ficar 100% nítida no rosto */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
        
        {/* Leve degradê na esquerda apenas para a logo e ícones do header não brigarem com a foto */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-transparent" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-start">
          
          {/* Left Content */}
          {/* A MÁGICA ESTÁ AQUI: pt-[50vh] empurra o texto para baixo da cabeça no mobile (corpo),
              mas mantém pt-32 normal no Desktop (lg:pt-32) */}
          <div className="space-y-6 lg:space-y-8 text-white pt-[40vh] sm:pt-[55vh] lg:pt-32">
            
            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="h-[2px] bg-gradient-to-r from-gold to-transparent"
            />

            <div className="space-y-5 lg:space-y-7">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.2rem] font-serif font-bold text-balance leading-[1.1] tracking-tight text-shadow-sm"
              >
                Precisa de uma{" "}
                <span className="text-gold">advogada criminalista</span>?
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="text-base sm:text-lg lg:text-xl text-gold-light/80 font-light text-pretty leading-relaxed drop-shadow-md"
              >
                Tenha ao seu lado advogadas experientes e prontas para agir agora mesmo.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="space-y-3 lg:space-y-4 text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed drop-shadow-md"
            >
              <p className="text-pretty font-light">
                Nossa abordagem vai além da defesa, é uma busca pela justiça. Porque acreditamos que, para você, justiça
                não é apenas esperança, é um direito que merece ser conquistado.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="space-y-5 lg:space-y-6 pt-2"
            >
              <p className="text-base sm:text-lg lg:text-xl font-medium text-gold/90 tracking-wide mb-8 drop-shadow-md">
                Atendimento ágil e personalizado em Nanuque-MG e em todo o Brasil.
              </p>

              <PremiumCTA label="Entre em contato" />
            </motion.div>

            {/* Stats / Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex gap-8 pt-6 border-t border-white/10"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-gold">2+</p>
                <p className="text-xs sm:text-sm text-white/60 font-light tracking-wide">Anos de experiência</p>
              </div>
              <div className="w-px bg-white/20" />
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-gold">50+</p>
                <p className="text-xs sm:text-sm text-white/60 font-light tracking-wide">Clientes atendidos</p>
              </div>
              <div className="w-px bg-white/20" />
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-gold">100%</p>
                <p className="text-xs sm:text-sm text-white/60 font-light tracking-wide">Comprometimento</p>
              </div>
            </motion.div>
          </div>

          {/* Desktop Image Container - INTACTO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex relative items-end justify-end h-[700px] xl:h-[800px]"
          >
            {/* Glow effect behind image */}
            <div className="absolute bottom-[10%] right-[-2rem] w-[400px] h-[500px] bg-gold/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[15%] right-[0rem] w-[350px] h-[450px] bg-gold/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="absolute bottom-0 right-[-5rem] w-auto h-full pointer-events-none">
              {/* Shadow layers for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold/20 via-transparent to-transparent blur-2xl" />

              <Image
                src="/images/imagem-inicio.png"
                alt="Advogadas Antunes & Martins"
                width={600}
                height={800}
                className="h-full w-auto object-bottom scale-200 drop-shadow-[0_20px_60px_rgba(212,175,55,0.3)] brightness-90 contrast-95"
                priority
              />

              {/* Subtle border glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-gold/10 rounded-lg blur-sm" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-light to-transparent z-10 pointer-events-none" />
    </section>
  )
}