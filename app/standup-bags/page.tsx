import type { Metadata } from 'next'
import { StandupBagsContent } from './components/StandupBagsContent'

export const metadata: Metadata = {
  title: 'Standup Bags - Coffee Packaging | ÖYE Packaging',
  description: 'Our standup bags combine premium quality with a sleek, functional design. Wide shape for easy filling with large front panel for brand visibility.',
  openGraph: {
    title: 'Standup Bags - Coffee Packaging | ÖYE Packaging',
    url: 'https://oyepackaging.com/standup-bags',
  },
  alternates: {
    canonical: 'https://oyepackaging.com/standup-bags'
  }
}

export default function StandupBagsPage() {
  return <StandupBagsContent />
}
