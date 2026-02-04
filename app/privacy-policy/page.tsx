import type { Metadata } from 'next'
import { PrivacyPolicyContent } from './components/PrivacyPolicyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy - ÖYE Packaging',
  description: 'Privacy policy for ÖYE Packaging. Learn what personal information is collected, processed, and stored when you visit our website or contact us.',
  alternates: { canonical: 'https://oyepackaging.com/privacy-policy' }
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />
}
