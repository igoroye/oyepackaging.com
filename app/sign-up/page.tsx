import { Metadata } from 'next'
import { SignUpContent } from './components/SignUpContent'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function SignUpPage() {
  return <SignUpContent />
}
