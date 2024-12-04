"use client"

import { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Home, Package, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"

// New Card component
function Card({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={`bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-8 backdrop-blur-xl ${className}`}>
      {children}
    </div>
  )
}

function CardHeader({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-between mb-4">
      {children}
    </div>
  )
}

function CardTitle({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <h3 className={`text-2xl font-semibold ${className}`}>{children}</h3>
  )
}

function CardDescription({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <p className={`text-lg text-gray-400 ${className}`}>{children}</p>
  )
}

function CardContent({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4">
      {children}
    </div>
  )
}

export default function MovingServicePage() {
  return (
    <div className="relative bg-black text-white min-h-screen">
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Startseite
          </Link>

          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center space-x-2 text-blue-400 mb-4">
                <Package className="w-5 h-5" />
                <span>Umzugsservice</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
                Zuverlässige Umzüge für jeden Bedarf
              </h1>
              <p className="text-xl text-gray-300">
                Von der Planung bis zur Durchführung - wir sorgen für einen stressfreien Umzug.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-lg px-8 rounded-full">
                  Jetzt Termin buchen
                </Button>
                <Button size="lg" variant="outline" className="border-gray-700 hover:border-gray-600 text-lg px-8 rounded-full">
                  Leistungen entdecken
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-zinc-900/50 p-8 rounded-3xl">
                <h2 className="text-2xl font-semibold mb-4">Ihre Möbel – Unser Transport</h2>
                <p className="text-lg text-gray-300">
                  69 € - Kleine Anpackhilfe und alle Sachen sind versichert. Unser Team übernimmt den Transport Ihrer Möbel sicher und zuverlässig.
                </p>
                <ul className="list-disc list-inside text-lg text-gray-400 mt-4">
                  <li>Versicherung inklusive</li>
                  <li>Schneller und sicherer Transport</li>
                  <li>Individuelle Beratung und Planung</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO-Friendly Content Section */}
          <section className="mt-16">
            <h2 className="text-4xl font-bold text-center mb-8">Warum professionelle Umzugsdienste wichtig sind</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/50 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Vertrauen und Sicherheit</h3>
                <p className="text-lg text-gray-400">
                  Ihr Zuhause ist Ihnen heilig, und es erfordert Vertrauen, um den Umzug extern zu vergeben. Ein erfahrener Dienstleister sorgt für strahlende Sauberkeit und Sicherheit.
                </p>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Individuelle Unterstützung</h3>
                <p className="text-lg text-gray-400">
                  Entscheiden Sie individuell, in welchen Bereichen Sie Unterstützung benötigen. Unsere professionellen Umzugsdienste passen sich Ihren Bedürfnissen an.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-lg h-14 px-8 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 transition-all duration-300">
                Mehr erfahren
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
