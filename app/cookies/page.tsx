import { buildMetadata } from '@/lib/seo'
import { CookiePolicyContent } from './components/CookiePolicyContent'

export const metadata = buildMetadata('cookies')

export default function CookiesPage() {
  return <CookiePolicyContent />
}
