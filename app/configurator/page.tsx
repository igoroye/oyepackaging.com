import { buildMetadata } from '@/lib/seo'
import { ConfiguratorContent } from './components/ConfiguratorContent'

export const metadata = buildMetadata('configurator')

export default function ConfiguratorPage() {
  return <ConfiguratorContent />
}
