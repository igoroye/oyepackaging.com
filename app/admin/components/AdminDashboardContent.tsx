'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { Loader2, LogOut, Search, ArrowLeft } from 'lucide-react'

const adminSections = [
  {
    title: 'SEO Management',
    description: 'Manage meta tags, Open Graph, and keywords for all pages',
    href: '/admin/seo',
    icon: Search,
  },
]

export function AdminDashboardContent() {
  const { user, profile, loading, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && (!user || !profile?.is_admin)) {
      router.push('/')
    }
  }, [loading, user, profile, router])

  const handleSignOut = async () => {
    try {
      await signOut()
      router.push('/')
    } catch {
      // handled silently
    }
  }

  if (loading || !user || !profile?.is_admin) {
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
          <div className="mb-4">
            <Link
              href="/member-area"
              className="inline-flex items-center gap-1.5 text-sm text-[#878789] hover:text-[#101014] transition-colors"
            >
              <ArrowLeft size={16} />
              Member Area
            </Link>
          </div>

          <div className="mb-10">
            <h1 className="font-semibold text-[#101014] text-2xl sm:text-3xl tracking-tight mb-2">
              ADMIN DASHBOARD
            </h1>
            <p className="text-[#878789] text-sm">
              Manage your website settings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminSections.map((section) => {
              const Icon = section.icon
              return (
                <Link key={section.href} href={section.href} className="group">
                  <div className="bg-white rounded-[20px] p-8 shadow-sm transition-shadow group-hover:shadow-md">
                    <div className="w-12 h-12 bg-[#f5f5ef] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#264eab]/10 transition-colors">
                      <Icon className="w-6 h-6 text-[#264eab]" />
                    </div>
                    <h2 className="font-semibold text-[#101014] text-lg mb-2">
                      {section.title.toUpperCase()}
                    </h2>
                    <p className="text-sm text-[#878789]">
                      {section.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
