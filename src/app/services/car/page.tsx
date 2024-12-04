"use client"

import { Button } from "@/components/ui/button"
import { Car, Tool, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"

export default function CarServicePage() {
  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Decorative Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-orange-500/10 rounded-full blur-[120px]" />
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
              <div className="inline-flex items-center space-x-2 text-orange-400 mb-4">
                <Car className="w-5 h-5" />
                <span>Kfz-Express</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                Schneller und zuverlässiger Kfz-Service
              </h1>
              <p className="text-xl text-gray-300">
                Professionelle Wartung und Reparatur für Ihr Fahrzeug. Unser Express-Service sorgt dafür, dass Sie schnell wieder mobil sind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-800 hover:from-orange-700 hover:to-orange-900 text-lg px-8 rounded-full">
                  Jetzt Termin buchen
                </Button>
                <Button size="lg" variant="outline" className="border-gray-700 hover:border-gray-600 text-lg px-8 rounded-full">
                  Leistungen entdecken
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-3xl blur-2xl" />
              <div className="relative bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-8 backdrop-blur-xl">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-1">24/7 Notfallservice</h3>
                      <p className="text-gray-400">Immer für Sie da, wenn Sie uns brauchen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-1">Moderne Diagnostik</h3>
                      <p className="text-gray-400">Neueste Technik für präzise Fehleranalyse</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-1">Faire Preise</h3>
                      <p className="text-gray-400">Transparente Kostenaufstellung</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Wartung & Inspektion",
                description: "Regelmäßige Wartung für langfristige Zuverlässigkeit",
                features: ["HU/AU Vorbereitung", "Ölwechsel", "Bremsenservice"]
              },
              {
                title: "Reparaturen",
                description: "Schnelle und professionelle Reparaturen",
                features: ["Motor & Getriebe", "Elektronik", "Karosserie"]
              },
              {
                title: "Express-Services",
                description: "Schnelle Hilfe für dringende Fälle",
                features: ["Reifenwechsel", "Batterieservice", "Klimaanlagenservice"]
              }
            ].map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 rounded-3xl blur-xl transition-all duration-500 group-hover:via-orange-500/10" />
                <div className="relative bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-8 backdrop-blur-xl">
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-orange-400 transition-colors">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
