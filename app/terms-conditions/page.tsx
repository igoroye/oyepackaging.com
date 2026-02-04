import type { Metadata } from 'next'
import { NavigationBarSection } from '@/src/screens/V/sections/NavigationBarSection/NavigationBarSection'

export const metadata: Metadata = {
  title: 'Terms & Conditions - ÖYE Packaging',
  description: 'Terms and conditions for using ÖYE Packaging services and website.',
  alternates: { canonical: 'https://oyepackaging.com/terms-conditions' }
}

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBarSection />
      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-text mb-8">Terms & Conditions</h1>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">Last updated: 2025</p>
          <h2 className="text-2xl font-semibold text-text mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing and using this website, you accept and agree to be bound by these terms and conditions.
          </p>
          <h2 className="text-2xl font-semibold text-text mb-4">2. Use of Services</h2>
          <p className="text-gray-600 mb-6">
            You agree to use our services only for lawful purposes and in accordance with these terms.
          </p>
        </div>
      </main>
    </div>
  )
}
