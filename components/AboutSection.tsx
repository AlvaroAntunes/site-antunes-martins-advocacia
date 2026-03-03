"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

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
  const [direction, setDirection] = useState(0)
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.1 })

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
    }),
  }

  return (
    <section
      id="quem-somos"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-32 bg-navy-light scroll-mt-20 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.02] blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-wide">
            QUEM SOMOS
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-5"
          />
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-5 sm:space-y-6 text-white/90 order-2 lg:order-1 min-h-[200px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-5"
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-semibold text-white">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-pretty text-white/70 font-light">
                    {slides[currentSlide].content}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image with premium frame */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden order-1 lg:order-2 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
              </AnimatePresence>
              {/* Frame overlay */}
              <div className="absolute inset-0 border border-gold/10 rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
          </div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10"
          >
            <Button
              onClick={prevSlide}
              variant="ghost"
              size="icon"
              className="text-gold/60 hover:text-gold hover:bg-gold/5 h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-gold/10 hover:border-gold/30 transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>

            {/* Slide Progress Indicators */}
            <div className="flex gap-2.5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentSlide ? 1 : -1)
                    setCurrentSlide(index)
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${index === currentSlide
                      ? "bg-gold w-8 sm:w-10"
                      : "bg-white/15 w-1.5 hover:bg-white/30"
                    }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              variant="ghost"
              size="icon"
              className="text-gold/60 hover:text-gold hover:bg-gold/5 h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-gold/10 hover:border-gold/30 transition-all duration-300 cursor-pointer"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
