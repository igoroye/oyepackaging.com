import { buildMetadata } from '@/lib/seo'
import { AboutUsContent } from './components/AboutUsContent'

export const metadata = buildMetadata('about-us')

export default function AboutUsPage() {
  return <AboutUsContent />
}
