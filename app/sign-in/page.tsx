import { buildMetadata } from '@/lib/seo'
import { Suspense } from 'react'
import { SignInContent } from './components/SignInContent'

export const metadata = buildMetadata('sign-in')

export default function SignInPage() {
  return (
    <Suspense>
      <SignInContent />
    </Suspense>
  )
}
