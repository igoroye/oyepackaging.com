import { buildMetadata } from '@/lib/seo'
import { TermsAndConditionsContent } from './components/TermsAndConditionsContent'

export const metadata = buildMetadata('terms-conditions')

export default function TermsConditionsPage() {
  return <TermsAndConditionsContent />
}
