import type { Metadata } from 'next'
import { ContactUsContent } from './components/ContactUsContent'

export const metadata: Metadata = {
  title: 'Contact Us - ÖYE Packaging',
  description: 'Have questions about our packaging solutions? We are here to help! Get in touch with ÖYE Packaging for custom coffee packaging solutions.',
  openGraph: {
    title: 'Contact Us - ÖYE Packaging',
    url: 'https://oyepackaging.com/contact-us',
  },
  alternates: {
    canonical: 'https://oyepackaging.com/contact-us'
  }
}

export default function ContactUsPage() {
  return <ContactUsContent />
}
