export const APP_CONFIG = {
  name: 'UrbanHelper',
  description: 'Ihre All-in-One-Lösung für Umzüge, Kfz-Express-Service und professionelle Reinigung in Hamburg',
  contact: {
    email: 'kontakt@urbanhelper.de',
    phone: '+49 (0) 40 123456',
  },
  social: {
    instagram: 'https://instagram.com/urbanhelper',
    facebook: 'https://facebook.com/urbanhelper',
    twitter: 'https://twitter.com/urbanhelper',
  },
} as const

export const ROUTES = {
  home: '/',
  services: '/services',
  about: '/about',
  contact: '/contact',
  booking: '/booking',
} as const

export const SERVICE_TYPES = {
  MOVING: 'moving',
  CLEANING: 'cleaning',
  CAR_SERVICE: 'car-service',
} as const
