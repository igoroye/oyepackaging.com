import type { Metadata } from 'next'
import { CookiePolicyContent } from './components/CookiePolicyContent'

export const metadata: Metadata = {
  title: 'Cookie Policy - ÖYE Packaging',
  description: 'Cookie policy for ÖYE Packaging. Learn how we use cookies on our website, including essential, preference, analytics, and marketing cookies.',
  alternates: { canonical: 'https://oyepackaging.com/cookies' }
}

export default function CookiesPage() {
  return <CookiePolicyContent />
}
