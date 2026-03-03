"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { label: "Início", id: "inicio" },
  { label: "Quem Somos", id: "quem-somos" },
  { label: "Áreas de Atuação", id: "areas-atuacao" },
  { label: "Contato", id: "contato" },
]

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
    } else if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "glass-premium shadow-2xl shadow-black/20"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 sm:pt-4 lg:pt-4 xl:pt-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem] relative"
            >
              <Image
                src="/images/logo.png"
                alt="Antunes & Martins Advogadas"
                fill
                className="object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="relative text-gold-light/90 hover:text-gold transition-colors text-[0.9rem] font-medium tracking-[0.08em] uppercase group cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-gold to-transparent group-hover:w-full transition-all duration-500" />
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gold p-2 relative"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 border-t border-gold/10">
                <div className="flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                      onClick={() => scrollToSection(item.id)}
                      className="text-gold-light/90 hover:text-gold hover:bg-gold/5 transition-all text-[0.9rem] font-medium tracking-[0.08em] uppercase text-left py-3 px-4 rounded-lg"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Linha decorativa inferior (visível no scroll) */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent origin-center"
      />
    </motion.header>
  )
}
