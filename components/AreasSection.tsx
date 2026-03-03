"use client"

import { Car, Leaf, Scale, FileText, Shield, Gavel } from "lucide-react"
import ServiceCard from "@/components/ServiceCard"
import PremiumCTA from "@/components/PremiumCTA"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const services = [
  {
    icon: Car,
    title: "Crimes de Trânsito",
    description:
      "Atuamos em casos de homicídio culposo, embriaguez ao volante, lesão corporal e outros crimes relacionados à Lei Seca.",
  },
  {
    icon: Leaf,
    title: "Tráfico de Drogas",
    description: "Defendemos em casos de tráfico de drogas, buscando penas justas e proporcionais.",
  },
  {
    icon: Scale,
    title: "Tribunal do Júri",
    description:
      "Atuação especializada em crimes dolosos contra a vida. Estratégias de defesa, análise de provas e sustentação oral diante dos jurados.",
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
    description: "Defesa técnica completa em processos criminais, do inquérito policial à sentença.",
  },
  {
    icon: Gavel,
    title: "Execução Penal",
    description:
      "Acompanhamento do cumprimento da pena, progressões de regime, livramento condicional e outros benefícios da Lei de Execução Penal.",
  },
]

export default function AreasSection() {
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.05 })

  return (
    <section
      id="areas-atuacao"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-32 bg-navy scroll-mt-20 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gold/[0.015] blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-wide">
            ÁREAS DE ATUAÇÃO
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-5"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/40 font-light text-sm sm:text-base mt-4 max-w-2xl mx-auto"
          >
            Atuação especializada nas principais áreas do Direito Criminal
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center px-4"
        >
          <PremiumCTA label="Fale com uma advogada" />
        </motion.div>
      </div>
    </section>
  )
}
