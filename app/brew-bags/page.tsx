import { buildMetadata } from '@/lib/seo'
import { BrewBagsContent } from './components/BrewBagsContent'

export const metadata = buildMetadata('brew-bags')

export default function BrewBagsPage() {
  return <BrewBagsContent />
}
