import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold mb-4">StadtAssistent</h3>
            <p className="mb-4">
              Ihr Partner für urbane Dienstleistungen in Hamburg
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Umzugsservice
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Kfz-Express
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Reinigungsservice
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Karriere
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Partner werden
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  AGB
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} StadtAssistent. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
