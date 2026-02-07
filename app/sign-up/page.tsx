import { buildMetadata } from '@/lib/seo'
import { SignUpContent } from './components/SignUpContent'

export const metadata = buildMetadata('sign-up')

export default function SignUpPage() {
  return <SignUpContent />
}
