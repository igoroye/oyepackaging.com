import type { Metadata } from 'next'
import { NavigationBarSection } from '@/src/screens/V/sections/NavigationBarSection/NavigationBarSection'

export const metadata: Metadata = {
  title: 'Privacy Policy - ÖYE Packaging',
  description: 'Privacy policy for ÖYE Packaging. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://oyepackaging.com/privacy-policy' }
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBarSection />
      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-text mb-8">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">Last updated: 2025</p>
          <h2 className="text-2xl font-semibold text-text mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-6">
            We collect information you provide directly to us when you use our website or contact us.
          </p>
          <h2 className="text-2xl font-semibold text-text mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-6">
            We use the information we collect to provide and improve our services.
          </p>
        </div>
      </main>
    </div>
  )
}
