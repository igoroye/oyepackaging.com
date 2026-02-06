'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

const sidebarItems = [
  {
    icon: 'drip',
    title: 'DRIP BAGS',
    active: true,
    href: '/drip-bags',
  },
  {
    icon: 'brew',
    title: 'BREW BAGS',
    badge: 'COMING SOON',
    active: false,
    href: '/brew-bags',
  },
  {
    icon: 'cold',
    title: 'СOLD BREW BAGS',
    badge: 'COMING SOON',
    active: false,
    href: '/cold-brew-bags',
  },
]

function ServiceIcon({ type, active }: { type: string; active?: boolean }) {
  const color = active ? '#264EAB' : '#101014'

  if (type === 'drip') {
    return (
      <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 10L15.5 4L26 10V20L15.5 26L5 20V10Z" stroke={color} strokeWidth="2"/>
        <path d="M5 10L15.5 15M15.5 15L26 10M15.5 15V26" stroke={color} strokeWidth="2"/>
        <circle cx="15.5" cy="18" r="3" fill={active ? color : 'none'} stroke={color} strokeWidth="1.5"/>
      </svg>
    )
  }

  if (type === 'brew') {
    return (
      <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12C8 12 8 8 12 8C16 8 16 12 16 12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 12C14 12 14 8 18 8C22 8 22 12 22 12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <rect x="6" y="12" width="18" height="14" rx="2" stroke={color} strokeWidth="2"/>
        <line x1="24" y1="17" x2="28" y2="17" stroke={color} strokeWidth="2"/>
      </svg>
    )
  }

  if (type === 'cold') {
    return (
      <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="15" height="20" rx="2" stroke={color} strokeWidth="2"/>
        <path d="M11 10H20" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <circle cx="13" cy="15" r="1.5" fill={color}/>
        <circle cx="18" cy="18" r="1.5" fill={color}/>
        <circle cx="15" cy="21" r="1.5" fill={color}/>
        <path d="M23 12L26 15L23 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }

  return null
}

export function ServicesSidebar() {
  return (
    <aside className="hidden xl:flex sticky top-[132px] self-start flex-col gap-3 flex-shrink-0">
      {sidebarItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <Card
            className={`w-[294px] h-[88px] cursor-pointer transition-all ${
              item.active
                ? 'bg-[#e8eef5] rounded-[20px] border-0 shadow-none'
                : 'bg-white rounded-[20px] border-0 shadow-none hover:bg-gray-50'
            }`}
          >
            <CardContent className="flex items-center gap-4 p-0 h-full px-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <ServiceIcon type={item.icon} active={item.active} />
              </div>
              <div className="flex flex-col">
                <span
                  className={`[font-family:'Inter',Helvetica] text-lg tracking-[0] leading-[normal] ${
                    item.active
                      ? 'font-semibold text-main'
                      : 'font-medium text-text opacity-40'
                  }`}
                >
                  {item.title}
                </span>
                {item.badge && (
                  <span
                    className={`[font-family:'Inter',Helvetica] font-medium text-[10px] ${
                      item.active ? 'text-main' : 'text-text opacity-40'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </aside>
  )
}
