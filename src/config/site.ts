import { APP_CONFIG } from '@/constants/app'

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: APP_CONFIG.name,
  description: APP_CONFIG.description,
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Über uns",
      href: "/about",
    },
    {
      title: "Kontakt",
      href: "/contact",
    },
  ],
  links: {
    instagram: APP_CONFIG.social.instagram,
    facebook: APP_CONFIG.social.facebook,
    twitter: APP_CONFIG.social.twitter,
  },
} as const
