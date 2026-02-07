import { buildMetadata } from '@/lib/seo'
import { SustainabilityContent } from './components/SustainabilityContent'

export const metadata = buildMetadata('sustainability')

export default function SustainabilityPage() {
  return <SustainabilityContent />
}
