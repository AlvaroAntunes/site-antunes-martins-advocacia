import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Antunes & Martins | Advogadas Criminalistas em Nanuque-MG",
  description:
    "Escritório de advocacia especializado em Direito Criminal. Atendimento ágil e personalizado em Nanuque-MG e todo o Brasil. Defesa em crimes de trânsito, tráfico de drogas, tribunal do júri e mais.",
  keywords:
    "advogada criminalista, advogado criminal, defesa criminal, Nanuque MG, tribunal do júri, tráfico de drogas, crimes de trânsito",
  authors: [{ name: "Antunes & Martins Advogadas" }],
  openGraph: {
    title: "Antunes & Martins | Advogadas Criminalistas",
    description: "Defesa criminal especializada em Nanuque-MG e todo o Brasil",
    type: "website",
    locale: "pt_BR",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: "#0c1220",
  width: "device-width",
  initialScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
