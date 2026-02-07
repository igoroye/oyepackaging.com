import { buildMetadata } from '@/lib/seo'
import { SEOManagementContent } from './components/SEOManagementContent'

export const metadata = buildMetadata('admin-seo')

export default function AdminSEOPage() {
  return <SEOManagementContent />
}
