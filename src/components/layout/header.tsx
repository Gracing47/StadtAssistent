"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sun, Menu } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full border-b transition-all duration-300 ${
      scrolled 
        ? 'border-zinc-800/50 bg-black/80 backdrop-blur-xl' 
        : 'border-transparent bg-transparent backdrop-blur-none'
    } z-50`}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link 
          href="/" 
          className="group flex items-center space-x-2 relative"
          onMouseEnter={() => setHoveredItem('logo')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <span className={`text-2xl font-bold transition-all duration-[1120ms] animate-pulse ${
            hoveredItem === 'logo'
              ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400'
              : 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500'
          }`}>
            StadtAssistent
          </span>
        </Link>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="space-x-2">
            {[
              { href: '/services/moving', label: 'Moving' },
              { href: '/services/cleaning', label: 'Cleaning' },
              { href: '/services/car', label: 'Car' }
            ].map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} relative group bg-transparent text-white`}
                    onMouseEnter={() => setHoveredItem(item.href)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="relative z-10">
                      {item.label}
                    </span>
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 ${
                      hoveredItem === item.href ? 'opacity-100' : ''
                    }`} />
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative group text-gray-400 hover:text-white"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <Sun className="h-5 w-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
          </Button>
          
          <Button 
            variant="default" 
            className="relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0.5 bg-black rounded-[5px]" />
            <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent font-medium">
              Termin buchen
            </span>
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            className="relative group text-gray-400 hover:text-white md:hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <Menu className="h-5 w-5 relative z-10" />
          </Button>
        </div>
      </div>
    </header>
  )
}
