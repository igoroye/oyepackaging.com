'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { Loader2, LogOut, User } from 'lucide-react'

export function MemberAreaContent() {
  const { user, profile, loading, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/sign-in?redirect=/member-area')
    }
  }, [loading, user, router])

  const handleSignOut = async () => {
    try {
      await signOut()
      router.push('/')
    } catch {
      // handled silently
    }
  }

  if (loading || !user || !profile) {
    return (
      <div className="min-h-screen bg-[#f5f5ef] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#264eab]" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f5f5ef] flex flex-col">
      <div className="py-6 px-4 sm:px-6 md:px-12 lg:px-[100px] border-b border-[#e1dfe5] bg-white">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between">
          <Link href="/">
            <img
              className="w-[100px] sm:w-[125px] h-auto cursor-pointer"
              alt="OYE Logo"
              src="/images/logo.svg"
            />
          </Link>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 text-sm font-medium text-[#878789] hover:text-[#101014] transition-colors"
          >
            <LogOut size={18} />
            <span className="hidden sm:inline">SIGN OUT</span>
          </button>
        </div>
      </div>

      <div className="flex-1 px-4 sm:px-6 md:px-12 lg:px-[100px] py-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="mb-10">
            <h1 className="font-semibold text-[#101014] text-2xl sm:text-3xl tracking-tight mb-2">
              MEMBER AREA
            </h1>
            <p className="text-[#878789] text-sm">
              Welcome to your personal dashboard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#f5f5ef] rounded-full flex items-center justify-center mb-6">
                <User className="w-6 h-6 text-[#264eab]" />
              </div>
              <h2 className="font-semibold text-[#101014] text-lg mb-3">
                PROFILE
              </h2>
              <div className="space-y-2 text-sm text-[#878789]">
                <p>
                  <span className="text-[#101014] font-medium">Email:</span>{' '}
                  {profile.email}
                </p>
                {profile.full_name && (
                  <p>
                    <span className="text-[#101014] font-medium">Name:</span>{' '}
                    {profile.full_name}
                  </p>
                )}
                <p>
                  <span className="text-[#101014] font-medium">Member since:</span>{' '}
                  {new Date(profile.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
