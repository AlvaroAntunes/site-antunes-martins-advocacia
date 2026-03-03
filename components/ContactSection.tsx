"use client"

import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import PremiumCTA from "@/components/PremiumCTA"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const contactInfo = [
  {
    icon: Mail,
    label: "contato@antunesemartinsadvocacia.com",
    href: "mailto:contato@antunesemartinsadvocacia.com",
  },
  {
    icon: Phone,
    label: "(33) 99950-6493 (Ana Luiza)",
    href: "https://wa.me/5533999506493",
  },
  {
    icon: Phone,
    label: "(33) 99127-4893 (Giovanna)",
    href: "https://wa.me/5533991274893",
  }
]

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/antunesemartins.advocacia", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ana-luiza-antunes-de-oliveira-3b08182b9", label: "LinkedIn" },
]

export default function ContactSection() {
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-32 bg-navy-light scroll-mt-20 relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-gold/[0.02] blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="space-y-8 sm:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-wide">
                CONTATO
              </h2>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: 80 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-[2px] bg-gradient-to-r from-gold to-transparent mt-5"
              />
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-5">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  target="_blank"
                  href={item.href}
                  className="flex items-center gap-4 text-white/70 hover:text-gold transition-all duration-300 group py-2"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-gold/[0.06] rounded-full group-hover:bg-gold/[0.12] transition-all duration-300 border border-gold/[0.08] group-hover:border-gold/20 flex-shrink-0">
                    <item.icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-gold/70 group-hover:text-gold transition-colors" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg font-light break-all">{item.label}</span>
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-4 text-white/70 py-2"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-gold/[0.06] rounded-full border border-gold/[0.08] flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-gold/70" />
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Advogada+em+Nanuque+-+Antunes+&+Martins+Advocacia+Especializada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base lg:text-lg font-light hover:text-gold transition-colors underline-offset-2 hover:text-gold transition-colors"
                >
                  Rua Caxambú, 230
                  <br />
                  Centro, Nanuque - MG, 39860-000
                </a>
              </motion.div>
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-base sm:text-lg font-serif font-semibold text-white/80 tracking-widest uppercase">
                Redes Sociais
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.08 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-gold/[0.06] rounded-full hover:bg-gold hover:text-navy transition-all duration-400 text-gold/60 hover:text-navy border border-gold/[0.08] hover:border-gold hover:scale-110"
                  >
                    <social.icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <PremiumCTA label="Entre em contato" />
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl shadow-black/30 border border-gold/[0.06]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6745.354209208903!2d-40.34765742538296!3d-17.8400084831264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb539eb68eb8677%3A0x81f6298de2f8425f!2sAdvogada%20em%20Nanuque%20-%20Antunes%20%26%20Martins%20Advocacia%20Especializada!5e1!3m2!1sen!2sus!4v1772570842412!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Escritório"
            // className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
