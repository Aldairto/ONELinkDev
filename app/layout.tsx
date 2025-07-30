import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "One Link Soluciones y Redes - Internet y TV en Naranjos, Veracruz",
  description:
    "Servicios de Internet por fibra óptica y TV en Naranjos, Veracruz. Planes desde básico hasta premium con la mejor cobertura.",
  keywords: "internet, fibra óptica, TV, Naranjos, Veracruz, telecomunicaciones",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
