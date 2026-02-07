import { Metadata } from 'next'
import { MemberAreaContent } from './components/MemberAreaContent'

export const metadata: Metadata = {
  title: 'Member Area',
}

export default function MemberAreaPage() {
  return <MemberAreaContent />
}
