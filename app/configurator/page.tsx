import type { Metadata } from 'next'
import { ConfiguratorContent } from './components/ConfiguratorContent'

export const metadata: Metadata = {
  title: 'Configure Packaging - ÖYE Packaging',
  description: 'Choose your packaging type and start customizing. Flat bottom bags, standup bags, drip bags, and carton boxes available with full customization.',
  openGraph: {
    title: 'Configure Packaging - ÖYE Packaging',
    description: 'Choose your packaging type and start customizing.',
    url: 'https://oyepackaging.com/configurator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://oyepackaging.com/configurator'
  }
}

export default function ConfiguratorPage() {
  return <ConfiguratorContent />
}
