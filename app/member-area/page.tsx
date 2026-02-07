import { buildMetadata } from '@/lib/seo'
import { MemberAreaContent } from './components/MemberAreaContent'

export const metadata = buildMetadata('member-area')

export default function MemberAreaPage() {
  return <MemberAreaContent />
}
