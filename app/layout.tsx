import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

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
  generator: "v0.app",
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
  themeColor: "#1a2332",
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
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
