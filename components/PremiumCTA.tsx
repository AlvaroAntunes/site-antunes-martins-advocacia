"use client"

import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import { ArrowRight } from "lucide-react"

interface PremiumCTAProps {
    label?: string
    href?: string
    onClick?: () => void
    variant?: "primary" | "secondary"
    className?: string
}

export default function PremiumCTA({
    label = "Entre em contato",
    href = "https://wa.me/5533999506493",
    onClick,
    variant = "primary",
    className = "cursor-pointer",
}: PremiumCTAProps) {
    const handleClick = () => {
        if (onClick) {
            onClick()
        } else if (href) {
            window.open(href, "_blank")
        }
    }

    if (variant === "secondary") {
        return (
            <motion.button
                onClick={handleClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-transparent border border-gold/30 hover:border-gold/60 rounded-none transition-all duration-500 overflow-hidden ${className}`}
            >
                {/* Hover fill effect */}
                <span className="absolute inset-0 bg-gold/[0.05] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

                <FaWhatsapp className="relative z-10 h-5 w-5 text-gold" />
                <span className="relative z-10 text-gold font-light tracking-[0.2em] uppercase text-xs sm:text-sm font-sans">
                    {label}
                </span>
                <ArrowRight className="relative z-10 h-4 w-4 text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
            </motion.button>
        )
    }

    return (
        <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative inline-flex items-center gap-4 w-full sm:w-auto ${className}`}
        >
            {/* Icon circle */}
            <span className="relative flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-gold rounded-full shrink-0 overflow-hidden">
                <FaWhatsapp className="relative z-10 h-5 w-5 lg:h-6 lg:w-6 text-navy" />
                {/* Shimmer effect on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </span>

            {/* Text + line */}
            <span className="flex flex-col items-start gap-1">
                <span className="text-gold font-light tracking-[0.2em] uppercase text-xs sm:text-[0.8rem] font-sans">
                    {label}
                </span>
                <span className="flex items-center gap-2">
                    <span className="block h-[1px] w-8 bg-gold/30 group-hover:w-14 group-hover:bg-gold transition-all duration-500" />
                    <ArrowRight className="h-3.5 w-3.5 text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
                </span>
            </span>
        </motion.button>
    )
}
