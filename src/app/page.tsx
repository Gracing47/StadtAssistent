import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Car, Sparkles, Calendar, Package, Shield, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-orange-500/10 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="space-y-8 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 animate-gradient pb-2">
                Ihr Partner für urbane Dienstleistungen
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                Umzüge, Kfz-Service und Reinigung – alles aus einer Hand in Hamburg
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-lg h-14 px-8 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 transition-all duration-300">
                  Jetzt Termin buchen
                </Button>
                <Button size="lg" variant="outline" className="group border-gray-400 hover:border-gray-300 text-gray-200 text-lg h-14 px-8 rounded-full">
                  Mehr erfahren
                  <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-gray-500" />
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Umzugsservice */}
              <Link href="/services/moving" className="group">
                <Card className="relative bg-zinc-900/50 backdrop-blur-xl border-zinc-800/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-blue-500/10 transition-all duration-500 rounded-lg" />
                  <CardHeader className="relative">
                    <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
                    <Home className="w-12 h-12 text-blue-500 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                    <CardTitle className="text-2xl group-hover:text-blue-400 transition-colors">Umzugsservice</CardTitle>
                    <CardDescription className="text-gray-400 text-lg">
                      Professionelle Umzüge mit erfahrenem Team und modernem Equipment
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-blue-500" />
                        Komplette Umzugsplanung
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-blue-500" />
                        Professionelles Equipment
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-blue-500" />
                        Erfahrenes Team
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Link>

              {/* Kfz-Express */}
              <Link href="/services/car" className="group">
                <Card className="relative bg-zinc-900/50 backdrop-blur-xl border-zinc-800/50 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-500 rounded-lg" />
                  <CardHeader className="relative">
                    <div className="absolute top-0 left-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
                    <Car className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                    <CardTitle className="text-2xl group-hover:text-orange-400 transition-colors">Kfz-Express</CardTitle>
                    <CardDescription className="text-gray-400 text-lg">
                      Schneller und zuverlässiger Service rund um Ihr Fahrzeug
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-orange-500" />
                        24/7 Notfallservice
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-orange-500" />
                        Moderne Diagnostik
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-orange-500" />
                        Faire Preise
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Link>

              {/* Reinigungsservice */}
              <Link href="/services/cleaning" className="group">
                <Card className="relative bg-zinc-900/50 backdrop-blur-xl border-zinc-800/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-purple-500/10 transition-all duration-500 rounded-lg" />
                  <CardHeader className="relative">
                    <div className="absolute top-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
                    <Sparkles className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                    <CardTitle className="text-2xl group-hover:text-purple-400 transition-colors">Reinigungsservice</CardTitle>
                    <CardDescription className="text-gray-400 text-lg">
                      Gründliche Reinigung für Privathaushalte und Geschäftsräume
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-purple-500" />
                        Eco-friendly Produkte
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-purple-500" />
                        Flexible Termine
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-purple-500" />
                        Maßgeschneiderte Lösungen
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500">
              Ihre Vorteile
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {/* Flexible Buchung */}
              <div className="group text-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/5 to-blue-500/0 group-hover:via-blue-500/10 rounded-3xl blur-xl transition-all duration-500" />
                <div className="relative">
                  <div className="w-24 h-24 mx-auto mb-8 relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    <Calendar className="w-24 h-24 text-blue-500 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">Flexible Buchung</h3>
                  <p className="text-gray-400 text-lg">
                    24/7 online buchbar für Ihre Convenience
                  </p>
                </div>
              </div>

              {/* All-in-One */}
              <div className="group text-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/0 via-orange-500/5 to-orange-500/0 group-hover:via-orange-500/10 rounded-3xl blur-xl transition-all duration-500" />
                <div className="relative">
                  <div className="w-24 h-24 mx-auto mb-8 relative">
                    <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    <Package className="w-24 h-24 text-orange-500 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-orange-400 transition-colors">All-in-One</h3>
                  <p className="text-gray-400 text-lg">Alle Services aus einer Hand</p>
                </div>
              </div>

              {/* Qualitätsgarantie */}
              <div className="group text-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/0 via-purple-500/5 to-purple-500/0 group-hover:via-purple-500/10 rounded-3xl blur-xl transition-all duration-500" />
                <div className="relative">
                  <div className="w-24 h-24 mx-auto mb-8 relative">
                    <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    <Shield className="w-24 h-24 text-purple-500 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">Qualitätsgarantie</h3>
                  <p className="text-gray-400 text-lg">Geprüfte und zertifizierte Dienstleister</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
