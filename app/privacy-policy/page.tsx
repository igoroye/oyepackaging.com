import { buildMetadata } from '@/lib/seo'
import { PrivacyPolicyContent } from './components/PrivacyPolicyContent'

export const metadata = buildMetadata('privacy-policy')

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />
}
