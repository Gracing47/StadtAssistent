import { SERVICE_TYPES } from '@/constants/app'

export type ServiceType = keyof typeof SERVICE_TYPES

export interface Service {
  id: string
  type: ServiceType
  title: string
  description: string
  price: {
    amount: number
    currency: string
    unit?: string
  }
  features: string[]
}

export interface Booking {
  id: string
  serviceId: string
  userId: string
  date: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  details: Record<string, unknown>
}

export interface User {
  id: string
  email: string
  name: string
  phone?: string
  bookings?: Booking[]
}
