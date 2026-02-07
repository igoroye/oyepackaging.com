import { buildMetadata } from '@/lib/seo'
import { ContactUsContent } from './components/ContactUsContent'

export const metadata = buildMetadata('contact-us')

export default function ContactUsPage() {
  return <ContactUsContent />
}
