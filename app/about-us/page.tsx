import type { Metadata } from 'next'
import { AboutUsContent } from './components/AboutUsContent'

export const metadata: Metadata = {
  title: 'About Us - ÖYE Packaging',
  description: 'Learn about ÖYE Packaging - European leaders in coffee packaging solutions. We know everything about packaging and support coffee roasting companies with customized solutions.',
  keywords: [
    'about us',
    'coffee packaging company',
    'European packaging manufacturer',
    'sustainable packaging',
    'coffee roasting solutions'
  ],
  openGraph: {
    title: 'About Us - ÖYE Packaging',
    description: 'European leaders in coffee packaging solutions for roasting companies.',
    url: 'https://oyepackaging.com/about-us',
    type: 'website',
  },
  alternates: {
    canonical: 'https://oyepackaging.com/about-us'
  }
}

export default function AboutUsPage() {
  return <AboutUsContent />
}
