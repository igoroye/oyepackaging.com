import { buildMetadata } from '@/lib/seo'
import { ColdBrewBagsContent } from './components/ColdBrewBagsContent'

export const metadata = buildMetadata('cold-brew-bags')

export default function ColdBrewBagsPage() {
  return <ColdBrewBagsContent />
}
