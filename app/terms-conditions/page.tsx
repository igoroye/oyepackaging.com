import type { Metadata } from 'next'
import { TermsAndConditionsContent } from './components/TermsAndConditionsContent'

export const metadata: Metadata = {
  title: 'Terms & Conditions - ÖYE Packaging',
  description: 'General Terms and Conditions of Sale governing all deliveries and services provided by ÖYE Packaging OÜ.',
  alternates: { canonical: 'https://oyepackaging.com/terms-conditions' }
}

export default function TermsConditionsPage() {
  return <TermsAndConditionsContent />
}
