'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { seoConfig, SITE_NAME } from '@/lib/seo-config'
import type { PageSEO } from '@/lib/seo-config'
import { Loader2, LogOut, ArrowLeft, Check, X, ExternalLink } from 'lucide-react'

interface PageEntry {
  key: string
  seo: PageSEO
}

export function SEOManagementContent() {
  const { user, profile, loading, signOut } = useAuth()
  const router = useRouter()
  const [filter, setFilter] = useState('')

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

  const allPages: PageEntry[] = Object.entries(seoConfig).map(([key, seo]) => ({
    key,
    seo,
  }))

  const filtered = filter
    ? allPages.filter(
        (p) =>
          p.key.toLowerCase().includes(filter.toLowerCase()) ||
          p.seo.title.toLowerCase().includes(filter.toLowerCase())
      )
    : allPages

  const publicPages = filtered.filter((p) => !p.seo.noIndex)
  const privatPages = filtered.filter((p) => p.seo.noIndex)

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
              href="/admin"
              className="inline-flex items-center gap-1.5 text-sm text-[#878789] hover:text-[#101014] transition-colors"
            >
              <ArrowLeft size={16} />
              Admin Dashboard
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="font-semibold text-[#101014] text-2xl sm:text-3xl tracking-tight mb-2">
              SEO MANAGEMENT
            </h1>
            <p className="text-[#878789] text-sm">
              All SEO metadata is managed from{' '}
              <code className="bg-white px-1.5 py-0.5 rounded text-xs font-mono text-[#264eab]">
                lib/seo-config.ts
              </code>
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <StatCard label="Total Pages" value={allPages.length} />
            <StatCard label="Public" value={allPages.filter((p) => !p.seo.noIndex).length} />
            <StatCard label="No-Index" value={allPages.filter((p) => p.seo.noIndex).length} />
            <StatCard
              label="With Keywords"
              value={allPages.filter((p) => p.seo.keywords && p.seo.keywords.length > 0).length}
            />
          </div>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Filter pages..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full max-w-sm px-4 py-2.5 bg-white rounded-xl border border-[#e1dfe5] text-sm text-[#101014] placeholder:text-[#878789] focus:outline-none focus:border-[#264eab] transition-colors"
            />
          </div>

          {publicPages.length > 0 && (
            <div className="mb-10">
              <h2 className="font-semibold text-[#101014] text-sm tracking-wider mb-4">
                PUBLIC PAGES ({publicPages.length})
              </h2>
              <div className="space-y-3">
                {publicPages.map((entry) => (
                  <PageRow key={entry.key} entry={entry} />
                ))}
              </div>
            </div>
          )}

          {privatPages.length > 0 && (
            <div>
              <h2 className="font-semibold text-[#101014] text-sm tracking-wider mb-4">
                NO-INDEX PAGES ({privatPages.length})
              </h2>
              <div className="space-y-3">
                {privatPages.map((entry) => (
                  <PageRow key={entry.key} entry={entry} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white rounded-[16px] p-5 shadow-sm">
      <div className="text-2xl font-semibold text-[#101014]">{value}</div>
      <div className="text-xs text-[#878789] mt-1">{label}</div>
    </div>
  )
}

function PageRow({ entry }: { entry: PageEntry }) {
  const { key, seo } = entry
  const [expanded, setExpanded] = useState(false)

  const titleLength = seo.title.length
  const descLength = seo.description.length
  const titleOk = seo.absoluteTitle ? titleLength <= 70 : titleLength <= 50
  const descOk = descLength <= 160

  const displayUrl = seo.canonical || `/${key === 'home' ? '' : key}`

  return (
    <div className="bg-white rounded-[16px] shadow-sm overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#fafaf7] transition-colors"
      >
        <div className="flex-1 min-w-0 mr-4">
          <div className="flex items-center gap-3 mb-1">
            <span className="font-medium text-[#101014] text-sm truncate">
              {seo.absoluteTitle ? seo.title : `${seo.title} | ${SITE_NAME}`}
            </span>
            {seo.noIndex && (
              <span className="shrink-0 px-2 py-0.5 text-[10px] font-medium rounded-full bg-[#f5f5ef] text-[#878789]">
                NO-INDEX
              </span>
            )}
          </div>
          <span className="text-xs text-[#878789] truncate block">{displayUrl}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <StatusDot ok={titleOk} label={`Title: ${titleLength}`} />
          <StatusDot ok={descOk} label={`Desc: ${descLength}`} />
          <svg
            className={`w-4 h-4 text-[#878789] transition-transform ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {expanded && (
        <div className="px-6 pb-5 border-t border-[#f0efe9]">
          <div className="pt-4 space-y-4">
            <DetailRow label="Page Key" value={key} mono />
            <DetailRow label="Title" value={seo.title} counter={`${titleLength}/60`} warn={!titleOk} />
            <DetailRow label="Description" value={seo.description} counter={`${descLength}/160`} warn={!descOk} />

            {seo.keywords && seo.keywords.length > 0 && (
              <div>
                <span className="text-xs font-medium text-[#878789] block mb-1.5">Keywords</span>
                <div className="flex flex-wrap gap-1.5">
                  {seo.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2 py-0.5 bg-[#f5f5ef] rounded-full text-xs text-[#101014]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {seo.canonical && (
              <DetailRow label="Canonical" value={seo.canonical} />
            )}

            {seo.ogTitle && <DetailRow label="OG Title" value={seo.ogTitle} />}
            {seo.ogDescription && <DetailRow label="OG Description" value={seo.ogDescription} />}
            {seo.ogImage && <DetailRow label="OG Image" value={seo.ogImage} />}

            <div className="flex items-center gap-4 pt-2">
              <BoolIndicator label="Indexable" value={!seo.noIndex} />
              <BoolIndicator label="Absolute Title" value={!!seo.absoluteTitle} />
            </div>

            <div className="pt-2">
              <a
                href={displayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#264eab] hover:underline"
              >
                Open page <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function DetailRow({
  label,
  value,
  counter,
  warn,
  mono,
}: {
  label: string
  value: string
  counter?: string
  warn?: boolean
  mono?: boolean
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-medium text-[#878789]">{label}</span>
        {counter && (
          <span className={`text-xs ${warn ? 'text-amber-500' : 'text-[#878789]'}`}>
            {counter}
          </span>
        )}
      </div>
      <p className={`text-sm text-[#101014] ${mono ? 'font-mono text-xs bg-[#f5f5ef] px-2 py-1 rounded' : ''}`}>
        {value}
      </p>
    </div>
  )
}

function StatusDot({ ok, label }: { ok: boolean; label: string }) {
  return (
    <span
      className={`text-[10px] px-2 py-0.5 rounded-full ${
        ok ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
      }`}
      title={label}
    >
      {label}
    </span>
  )
}

function BoolIndicator({ label, value }: { label: string; value: boolean }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-[#878789]">
      {value ? (
        <Check size={14} className="text-emerald-500" />
      ) : (
        <X size={14} className="text-[#878789]" />
      )}
      {label}
    </div>
  )
}
