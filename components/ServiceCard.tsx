"use client"

import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  const handleLearnMore = () => {
    window.open("https://wa.me/5533999999999", "_blank")
  }

  return (
    <div className="bg-navy-card border-2 border-gold/20 rounded-lg p-6 lg:p-8 hover:border-gold/40 transition-all duration-300 hover:shadow-xl hover:shadow-gold/10 group">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Icon */}
        <div className="w-16 h-16 flex items-center justify-center bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors">
          <Icon className="w-8 h-8 text-gold" />
        </div>

        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-serif font-semibold text-white">{title}</h3>

        {/* Description */}
        <p className="text-white/80 text-sm lg:text-base leading-relaxed text-pretty min-h-[100px]">{description}</p>

        {/* Button */}
        <Button
          onClick={handleLearnMore}
          variant="outline"
          className="border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300 rounded-full px-6 mt-2 bg-transparent"
        >
          Saiba mais
        </Button>
      </div>
    </div>
  )
}
