"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    title: "Compromisso com a Excelência",
    content: `Somos um escritório de advocacia comprometido com a excelência, a ética e a transparência na prestação de serviços jurídicos. Atuamos com uma abordagem estratégica e personalizada, oferecendo soluções sob medida para cada situação, seja pessoa física ou jurídica.`,
    image: "/images/office.jpg",
  },
  {
    title: "Nossa Equipe",
    content: `Nosso time é formado por profissionais experientes e dedicados, com atuação em diversas áreas do Direito. Trabalhamos com foco na prevenção e na resolução eficiente de conflitos, sempre alinhados às necessidades e objetivos de quem confia em nosso trabalho.`,
    image: "/female-lawyers-in-professional-setting.jpg",
  },
  {
    title: "Confiança e Responsabilidade",
    content: `Mais do que representar legalmente, acreditamos na construção de relações de confiança duradouras. Para nós, cada caso é único — e merece ser tratado com atenção, respeito e responsabilidade.`,
    image: "/legal-consultation-professional-office.jpg",
  },
]

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="quem-somos" className="py-12 sm:py-16 lg:py-24 bg-navy-light scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center text-white mb-8 sm:mb-12 lg:mb-16 tracking-wider">
          QUEM SOMOS
        </h2>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-4 sm:space-y-6 text-white/90 order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-semibold text-white">
                {slides[currentSlide].title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-pretty">
                {slides[currentSlide].content}
              </p>
            </div>

            {/* Image with Logo Overlay */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden order-1 lg:order-2">
              <Image
                src={slides[currentSlide].image || "/placeholder.svg"}
                alt={slides[currentSlide].title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Button
              onClick={prevSlide}
              variant="ghost"
              size="icon"
              className="text-gold hover:text-gold/80 hover:bg-white/10 h-8 w-8 sm:h-10 sm:w-10"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-gold w-6 sm:w-8" : "bg-white/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              variant="ghost"
              size="icon"
              className="text-gold hover:text-gold/80 hover:bg-white/10 h-8 w-8 sm:h-10 sm:w-10"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
