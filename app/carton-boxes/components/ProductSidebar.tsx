'use client'

import Link from 'next/link'

const navigationItems = [
  {
    label: 'FLAT BOTTOM BAGS',
    href: '/flat-bottom-bags',
    icon: 'flat',
  },
  {
    label: 'STANDUP BAGS',
    href: '/standup-bags',
    icon: 'standup',
  },
  {
    label: 'CARTON BOXES',
    href: '/carton-boxes',
    icon: 'carton',
    active: true,
  },
]

function NavIcon({ type, active }: { type: string; active?: boolean }) {
  const color = active ? '#264EAB' : '#101014'

  if (type === 'flat') {
    return (
      <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 8L14 2L26 8V24L14 30L2 24V8Z" stroke={color} strokeWidth="2"/>
        <path d="M2 8L14 14M14 14L26 8M14 14V30" stroke={color} strokeWidth="2"/>
      </svg>
    )
  }

  if (type === 'standup') {
    return (
      <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 30L2 10L14 2L26 10L24 30L14 28L4 30Z" stroke={color} strokeWidth="2"/>
        <path d="M2 10L14 14L26 10" stroke={color} strokeWidth="2"/>
      </svg>
    )
  }

  if (type === 'carton') {
    return (
      <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="20" height="20" stroke={color} strokeWidth="2"/>
        <path d="M4 8L14 2L24 8" stroke={color} strokeWidth="2"/>
        <line x1="4" y1="14" x2="24" y2="14" stroke={color} strokeWidth="1" opacity="0.5"/>
        <line x1="14" y1="8" x2="14" y2="28" stroke={color} strokeWidth="1" opacity="0.5"/>
      </svg>
    )
  }

  return null
}

export function ProductSidebar() {
  return (
    <aside className="w-full lg:w-[320px] flex-shrink-0">
      <nav className="flex lg:flex-col gap-4">
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex items-center gap-4 px-6 py-4 rounded-[10px] transition-all w-full text-left ${
              item.active
                ? 'bg-white shadow-[0px_5px_16px_-1px_rgba(0,0,0,0.15)]'
                : 'hover:bg-gray-50'
            }`}
          >
            <NavIcon type={item.icon} active={item.active} />
            <span
              className={`text-lg ${
                item.active
                  ? 'font-semibold text-main'
                  : 'font-normal text-text'
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
