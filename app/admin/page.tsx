import { buildMetadata } from '@/lib/seo'
import { AdminDashboardContent } from './components/AdminDashboardContent'

export const metadata = buildMetadata('admin')

export default function AdminPage() {
  return <AdminDashboardContent />
}
