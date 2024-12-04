"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Brush, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"

export default function CleaningServicePage() {
  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Decorative Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-[120px]" />
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
              <div className="inline-flex items-center space-x-2 text-purple-400 mb-4">
                <Sparkles className="w-5 h-5" />
                <span>Reinigungsservice</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                Professionelle Reinigung für jeden Bedarf
              </h1>
              <p className="text-xl text-gray-300">
                Von der Grundreinigung bis zur regelmäßigen Pflege - wir sorgen für makellose Sauberkeit in Ihren Räumen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-lg px-8 rounded-full">
                  Kostenlos beraten lassen
                </Button>
                <Button size="lg" variant="outline" className="border-gray-700 hover:border-gray-600 text-lg px-8 rounded-full">
                  Leistungen entdecken
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-3xl blur-2xl" />
              <div className="relative bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-8 backdrop-blur-xl">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-1">Eco-friendly Produkte</h3>
                      <p className="text-gray-400">Umweltschonende Reinigungsmittel</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-1">Flexible Termine</h3>
                      <p className="text-gray-400">Reinigung nach Ihrem Zeitplan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-1">Maßgeschneiderte Lösungen</h3>
                      <p className="text-gray-400">Individuell auf Ihre Bedürfnisse abgestimmt</p>
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
                title: "Privatreinigung",
                description: "Professionelle Reinigung für Ihr Zuhause",
                features: ["Regelmäßige Reinigung", "Fensterreinigung", "Teppichreinigung"]
              },
              {
                title: "Büroreinigung",
                description: "Saubere Arbeitsumgebung für mehr Produktivität",
                features: ["Tägliche Reinigung", "Sanitärreinigung", "Sonderreinigung"]
              },
              {
                title: "Spezialreinigung",
                description: "Besondere Reinigungsaufgaben professionell gelöst",
                features: ["Bauendreinigung", "Grundreinigung", "Desinfektion"]
              }
            ].map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 rounded-3xl blur-xl transition-all duration-500 group-hover:via-purple-500/10" />
                <div className="relative bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-8 backdrop-blur-xl">
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
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
