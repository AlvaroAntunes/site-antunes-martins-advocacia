"use client"

import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  const handleLearnMore = () => {
    window.open("https://wa.me/5533999506493", "_blank")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="card-glow bg-navy-card/60 border border-gold/[0.08] rounded-xl p-7 lg:p-9 hover:border-gold/25 transition-all duration-500 group relative overflow-hidden"
    >
      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/[0.04] to-transparent rounded-bl-full" />

      <div className="flex flex-col items-center text-center space-y-5 relative">
        {/* Icon */}
        <div className="w-16 h-16 flex items-center justify-center bg-gold/[0.06] rounded-full group-hover:bg-gold/[0.12] transition-all duration-500 border border-gold/[0.08] group-hover:border-gold/20">
          <Icon className="w-7 h-7 text-gold/80 group-hover:text-gold transition-colors duration-500 group-hover:scale-110 transform" />
        </div>

        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-serif font-semibold text-white group-hover:text-gold-light transition-colors duration-500">
          {title}
        </h3>

        {/* Decorative line */}
        <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent group-hover:w-12 transition-all duration-500" />

        {/* Description */}
        <p className="text-white/50 text-sm lg:text-base leading-relaxed text-pretty min-h-[80px] font-light">
          {description}
        </p>

        {/* Link premium */}
        <button
          onClick={handleLearnMore}
          className="inline-flex items-center gap-2 mt-3 cursor-pointer group/btn"
        >
          <span className="text-gold/60 group-hover/btn:text-gold text-xs tracking-[0.2em] uppercase font-sans transition-colors duration-300">
            Saiba mais
          </span>
          <span className="flex items-center gap-1">
            <span className="block h-[1px] w-5 bg-gold/20 group-hover/btn:w-8 group-hover/btn:bg-gold/60 transition-all duration-500" />
            <svg
              className="w-3 h-3 text-gold/30 group-hover/btn:text-gold group-hover/btn:translate-x-1 transition-all duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>
    </motion.div>
  )
}
