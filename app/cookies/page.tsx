import type { Metadata } from 'next'
import { NavigationBarSection } from '@/src/screens/V/sections/NavigationBarSection/NavigationBarSection'

export const metadata: Metadata = {
  title: 'Cookie Policy - ÖYE Packaging',
  description: 'Cookie policy for ÖYE Packaging. Learn how we use cookies on our website.',
  alternates: { canonical: 'https://oyepackaging.com/cookies' }
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBarSection />
      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-text mb-8">Cookie Policy</h1>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">Last updated: 2025</p>
          <h2 className="text-2xl font-semibold text-text mb-4">What Are Cookies</h2>
          <p className="text-gray-600 mb-6">
            Cookies are small text files that are stored on your device when you visit our website.
          </p>
          <h2 className="text-2xl font-semibold text-text mb-4">How We Use Cookies</h2>
          <p className="text-gray-600 mb-6">
            We use cookies to improve your browsing experience and analyze website traffic.
          </p>
        </div>
      </main>
    </div>
  )
}
