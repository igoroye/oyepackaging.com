import type { Metadata } from 'next'
import { SustainabilityContent } from './components/SustainabilityContent'

export const metadata: Metadata = {
  title: 'Sustainability - ÖYE Packaging',
  description: 'Being a sustainable company is a challenge. We balance responsibilities to employees, customers, and partners while striving to innovate and improve.',
  openGraph: {
    title: 'Sustainability - ÖYE Packaging',
    url: 'https://oyepackaging.com/sustainability',
  },
  alternates: {
    canonical: 'https://oyepackaging.com/sustainability'
  }
}

export default function SustainabilityPage() {
  return <SustainabilityContent />
}
