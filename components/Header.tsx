"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)

    if (sectionId === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    else if (element) {
      element.scrollIntoView({ behavior: "auto", block: "start" })
    }

    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 sm:pt-4 lg:pt-4 xl:pt-4">
            <div className="w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem] relative">
              <Image
                src="/images/logo.png"
                alt="Antunes & Martins Advogadas"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-[#FBD48A] hover:text-gold transition-colors text-base font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("quem-somos")}
              className="text-[#FBD48A] hover:text-gold transition-colors text-base font-medium c"
            >
              Quem somos
            </button>
            <button
              onClick={() => scrollToSection("areas-atuacao")}
              className="text-[#FBD48A] hover:text-gold transition-colors text-base font-medium"
            >
              Áreas de atuação
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-[#FBD48A] hover:text-gold transition-colors text-base font-medium"
            >
              Contato
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/10 bg-navy/95 backdrop-blur-sm">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-[#FBD48A] hover:text-gold transition-colors text-base font-medium text-left py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("quem-somos")}
                className="text-[#FBD48A] hover:text-gold transition-colors text-base font-medium text-left py-2"
              >
                Quem somos
              </button>
              <button
                onClick={() => scrollToSection("areas-atuacao")}
                className="text-[#FBD48A] hover:text-gold transition-colors text-base font-medium text-left py-2"
              >
                Áreas de atuação
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-[#FBD48A] hover:text-gold transition-colors text-base font-medium text-left py-2"
              >
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
