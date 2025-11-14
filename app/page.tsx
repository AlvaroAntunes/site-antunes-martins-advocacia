import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import AreasSection from "@/components/AreasSection"
import ContactSection from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <AreasSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
