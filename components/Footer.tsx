"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export function Footer() {
  const { ref: footerRef, isInView } = useScrollAnimation({ threshold: 0.2 })

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    
    if (sectionId === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <footer ref={footerRef} className="bg-navy relative overflow-hidden">
      {/* Top separator */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-10 lg:gap-16 mb-10"
        >
          {/* Logo & Description */}
          <div className="space-y-4">
            <Image
              src="/images/logo.png"
              alt="Antunes & Martins"
              width={120}
              height={120}
              className="h-20 w-auto"
            />
            <p className="text-white/35 text-sm font-light leading-relaxed text-pretty">
              Advocacia especializada com excelência, ética e dedicação aos nossos clientes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-base font-semibold mb-5 text-gold/70 tracking-widest uppercase">
              Links Rápidos
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Início", id: "inicio" },
                { label: "Quem Somos", id: "quem-somos" },
                { label: "Áreas de Atuação", id: "areas-atuacao" },
                { label: "Contato", id: "contato" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/35 hover:text-gold transition-colors duration-300 font-light relative group cursor-pointer"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-gold/50 group-hover:w-full transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h3 className="font-serif text-base font-semibold mb-5 text-gold/70 tracking-widest uppercase">
              Informações Legais
            </h3>
            <ul className="space-y-2.5 text-sm text-white/35 font-light">
              <li>OAB/MG 123.456</li>
              <li>OAB/MG 789.012</li>
              {/* <li className="pt-2 border-t border-white/5">CNPJ: 00.000.000/0001-00</li> */}
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent mb-8" />
          <p className="text-center text-xs text-white/25 font-light tracking-wide">
            &copy; {new Date().getFullYear()} Antunes & Martins Advocacia. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
