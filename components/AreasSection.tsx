"use client"

import { Car, Leaf, Scale, FileText, Shield, Gavel, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/ServiceCard"

const services = [
  {
    icon: Car,
    title: "Crimes de Trânsito",
    description:
      "Atuamos em casos de homicídio culposo, embriaguez ao volante, lesão corporal e outros crimes relacionados à Lei Seca.",
  },
  {
    icon: Leaf,
    title: "Tráfico de drogas",
    description: "Defendemos em casos de tráfico de drogas, buscando penas justas e proporcionais.",
  },
  {
    icon: Scale,
    title: "Tribunal do Júri",
    description:
      "Atuação especializada em crimes dolosos contra a vida. Estratégias de defesa ou teses defensivas, análise de provas e sustentação oral diante dos jurados.",
  },
  {
    icon: FileText,
    title: "Habeas Corpus",
    description:
      "Atuamos em prisões nos tribunais (STJ, STF, TRF). Defendemos você em processos criminais, garantindo seus direitos e interesses na justiça.",
  },
  {
    icon: Shield,
    title: "Defesa em Processos Criminais",
    description: "Defendemos em casos de tráfico de drogas, buscando penas justas e proporcionais.",
  },
  {
    icon: Gavel,
    title: "Execução Penal",
    description:
      "Acompanhamento do cumprimento da pena, progressões de regime, livramento condicional e outros benefícios da Lei de Execução Penal.",
  },
]

export default function AreasSection() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5533999999999", "_blank")
  }

  return (
    <section id="areas-atuacao" className="py-12 sm:py-16 lg:py-24 bg-navy scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center text-white mb-8 sm:mb-12 lg:mb-16 tracking-wider">
          ÁREAS DE ATUAÇÃO
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center px-4">
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-gold hover:bg-gold/90 text-navy font-semibold px-6 sm:px-10 py-5 sm:py-6 text-sm sm:text-base lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Entre em contato
          </Button>
        </div>
      </div>
    </section>
  )
}
