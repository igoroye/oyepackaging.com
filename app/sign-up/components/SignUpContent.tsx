'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { Eye, EyeOff, Loader2, CheckCircle2 } from 'lucide-react'

export function SignUpContent() {
  const { signUpWithEmail, user, loading: authLoading } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!authLoading && user) {
      router.push('/member-area')
    }
  }, [authLoading, user, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Please fill in all fields')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    try {
      setLoading(true)
      await signUpWithEmail(email, password)
      setSuccess(true)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to sign up'
      if (message.includes('already registered')) {
        setError('An account with this email already exists')
      } else {
        setError(message)
      }
    } finally {
      setLoading(false)
    }
  }

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#f5f5ef] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#264eab]" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f5f5ef] flex flex-col">
      <div className="py-6 px-4 sm:px-6 md:px-12 lg:px-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <Link href="/">
            <img
              className="w-[100px] sm:w-[125px] h-auto cursor-pointer"
              alt="OYE Logo"
              src="/images/logo.svg"
            />
          </Link>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 pb-16">
        <div className="w-full max-w-[440px]">
          <div className="bg-white rounded-[20px] p-8 sm:p-10 shadow-sm">
            {success ? (
              <div className="text-center py-4">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h2 className="font-semibold text-[#101014] text-2xl mb-2">
                  ACCOUNT CREATED
                </h2>
                <p className="text-[#878789] text-sm mb-6">
                  Your account has been created successfully. You can now sign in.
                </p>
                <Link
                  href="/sign-in"
                  className="inline-flex h-12 px-8 bg-[#264eab] text-white font-medium text-sm rounded-[40px] hover:bg-[#1e3d8f] transition-colors items-center justify-center"
                >
                  GO TO SIGN IN
                </Link>
              </div>
            ) : (
              <>
                <h1 className="font-semibold text-[#101014] text-2xl sm:text-3xl tracking-tight mb-2">
                  CREATE ACCOUNT
                </h1>
                <p className="text-[#878789] text-sm mb-8">
                  Fill in the details below to create your account
                </p>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#101014] mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-12 px-4 bg-[#f7f7f8] rounded-xl border border-[#e1dfe5] text-[#101014] text-sm outline-none focus:border-[#264eab] focus:ring-1 focus:ring-[#264eab] transition-colors"
                      placeholder="your@email.com"
                      autoComplete="email"
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-[#101014] mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-12 px-4 pr-12 bg-[#f7f7f8] rounded-xl border border-[#e1dfe5] text-[#101014] text-sm outline-none focus:border-[#264eab] focus:ring-1 focus:ring-[#264eab] transition-colors"
                        placeholder="At least 6 characters"
                        autoComplete="new-password"
                        disabled={loading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#878789] hover:text-[#101014] transition-colors"
                        tabIndex={-1}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#101014] mb-2">
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      type={showPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full h-12 px-4 bg-[#f7f7f8] rounded-xl border border-[#e1dfe5] text-[#101014] text-sm outline-none focus:border-[#264eab] focus:ring-1 focus:ring-[#264eab] transition-colors"
                      placeholder="Repeat your password"
                      autoComplete="new-password"
                      disabled={loading}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-[#264eab] text-white font-medium text-sm rounded-[40px] hover:bg-[#1e3d8f] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        CREATING ACCOUNT...
                      </>
                    ) : (
                      'CREATE ACCOUNT'
                    )}
                  </button>
                </form>

                <p className="mt-6 text-center text-sm text-[#878789]">
                  Already have an account?{' '}
                  <Link
                    href="/sign-in"
                    className="text-[#264eab] font-medium hover:underline"
                  >
                    Sign In
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
