import { buildMetadata } from '@/lib/seo'
import { StandupBagsContent } from './components/StandupBagsContent'

export const metadata = buildMetadata('standup-bags')

export default function StandupBagsPage() {
  return <StandupBagsContent />
}
