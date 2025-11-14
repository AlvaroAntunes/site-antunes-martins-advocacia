"use client"

import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5533999506493", "_blank")
  }

  return (
    <section className="relative min-h-screen bg-navy pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/biblioteca-direito.jpeg"
          alt="Biblioteca de Direito"
          fill
          className="object-cover opacity-5"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-start">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-white pt-8">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-balance leading-tight">
                Precisa de uma advogada criminalista?
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-[#FBD48A] font-medium text-pretty">
                Tenha ao seu lado advogadas experientes e prontas para agir agora mesmo.
              </p>
            </div>

            <div className="space-y-3 lg:space-y-4 text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed">
              <p className="text-pretty">
                Nossa abordagem vai além da defesa, é uma busca pela justiça. Porque acreditamos que, para você, justiça
                não é apenas esperança, é um direito que merece ser conquistado.
              </p>
            </div>

            <div className="space-y-4 lg:space-y-4">
              <p className="text-base sm:text-lg lg:text-xl font-semibold text-[#FBD48A] pb-4">
                Atendimento ágil e personalizado em Nanuque-MG e em todo o Brasil.
              </p>
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-gold hover:bg-gold/80 text-navy font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <FaWhatsapp className="mr-2 !h-5 !w-5 lg:!h-6 lg:!w-6" />
                Entre em contato
              </Button>
            </div>
          </div>
          
          {/* Image Container - Hidden on mobile, shows on desktop */}
          <div className="hidden lg:flex relative items-end justify-end h-[700px] xl:h-[800px]">
            <div className="absolute bottom-0 right-[-5rem] w-auto h-full">
              <Image
                src="/images/imagem-inicio.png"
                alt="Advogadas Antunes & Martins"
                width={600}
                height={800}
                className="h-full w-auto object-bottom scale-200"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
