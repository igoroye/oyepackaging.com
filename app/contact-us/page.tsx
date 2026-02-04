import type { Metadata } from 'next'
import { NavigationBarSection } from '@/src/screens/V/sections/NavigationBarSection/NavigationBarSection'

export const metadata: Metadata = {
  title: 'Contact Us - ÖYE Packaging',
  description: 'Get in touch with ÖYE Packaging. Contact us for custom coffee packaging solutions and filling services across Europe.',
  openGraph: {
    title: 'Contact Us - ÖYE Packaging',
    url: 'https://oyepackaging.com/contact-us',
  },
  alternates: {
    canonical: 'https://oyepackaging.com/contact-us'
  }
}

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBarSection />

      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-text mb-8">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Get in touch with our team for custom packaging solutions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="bg-main text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-text mb-1">Address</h3>
                <p className="text-gray-600">Europe</p>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-1">Email</h3>
                <p className="text-gray-600">info@oyepackaging.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-1">Phone</h3>
                <p className="text-gray-600">+XX XXX XXX XXXX</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
