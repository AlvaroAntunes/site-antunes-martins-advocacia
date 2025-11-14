"use client"

import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5533999999999", "_blank")
  }

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-24 bg-navy-light scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-wider">
              CONTATO
            </h2>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              <a
                href="mailto:contato@antunesemartinsadvocacia.com"
                className="flex items-start gap-3 sm:gap-4 text-white/90 hover:text-gold transition-colors group"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg break-all">contato@antunesemartinsadvocacia.com</span>
              </a>

              <a
                href="tel:+5533999999999"
                className="flex items-start gap-3 sm:gap-4 text-white/90 hover:text-gold transition-colors group"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">(33) 99999-9999</span>
              </a>

              <div className="flex items-start gap-3 sm:gap-4 text-white/90">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">
                  Av. Rangel Pestana, 243 - 1&ordm; andar
                  <br />
                  Centro, Nanuque - MG, 39860-000
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold text-white tracking-wide">
                REDES SOCIAIS
              </h3>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-gold hover:text-navy transition-all duration-300 text-white"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-gold hover:text-navy transition-all duration-300 text-white"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-gold hover:text-navy transition-all duration-300 text-white"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-gold hover:bg-gold/90 text-navy font-semibold px-6 sm:px-10 py-5 sm:py-6 text-sm sm:text-base lg:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Entre em contato
            </Button>
          </div>

          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8!2d-40.3456!3d-17.8397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDUwJzIzLjAiUyA0MMKwMjAnNDQuMiJX!5e0!3m2!1sen!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Escritório"
              className="grayscale"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
