'use client'

import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

const footerSections = [
  {
    title: 'PACKAGING',
    links: [
      { label: 'Flat Bottom Bags', href: '/flat-bottom-bags' },
      { label: 'Carton Boxes', href: '/carton-boxes' },
      { label: 'Side Gusset Bags', href: '/standup-bags' },
      { label: 'Standup Bags', href: '/standup-bags' },
    ],
  },
  {
    title: 'SERVICES',
    links: [
      { label: 'Drip Bags', href: '/drip-bags' },
      { label: 'Brew Bags', href: '/brew-bags', opacity: true },
      { label: 'Capsules', href: '#', opacity: true },
    ],
  },
  {
    title: 'WIKI',
    links: [
      { label: 'ORDERS', href: '#' },
      { label: 'Payments and pricing', href: '#' },
      { label: 'Delivery', href: '#' },
      { label: 'Return & refund policy', href: '#' },
    ],
  },
  {
    title: 'ABOUT US',
    links: [
      { label: 'Who we are', href: '/about-us' },
      { label: 'Contact us', href: '/contact-us' },
      { label: 'Sustainability', href: '/sustainability' },
    ],
  },
]

const socialLinks = [
  { name: 'Telegram', href: '#', icon: 'telegram' },
  { name: 'Facebook', href: '#', highlight: true, icon: 'facebook' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  { name: 'WhatsApp', href: '#', icon: 'whatsapp' },
]

function SocialIcon({ icon, highlight }: { icon: string; highlight?: boolean }) {
  const color = highlight ? 'white' : '#7ba0d0'

  if (icon === 'telegram') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 10L18 3L14 18L9 12L2 10Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12L12 9" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  }

  if (icon === 'facebook') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 1H12C10.3431 1 9 2.34315 9 4V7H6V11H9V19H13V11H16L17 7H13V4C13 3.44772 13.4477 3 14 3H15V1Z" fill={color}/>
      </svg>
    )
  }

  if (icon === 'instagram') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="16" height="16" rx="4" stroke={color} strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="3.5" stroke={color} strokeWidth="1.5"/>
        <circle cx="15" cy="5" r="1" fill={color}/>
      </svg>
    )
  }

  if (icon === 'linkedin') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6H6V17H3V6Z" fill={color}/>
        <circle cx="4.5" cy="3.5" r="1.5" fill={color}/>
        <path d="M9 8C9 6.5 10 6 11.5 6C13 6 14 7 14 8.5V17H17V8C17 5.5 15.5 4 13 4C11 4 9.5 5 9 6V6H6V17H9V8Z" fill={color}/>
      </svg>
    )
  }

  if (icon === 'whatsapp') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 3C15.5 1.5 13.5 1 11 1C5.5 1 1 5.5 1 11C1 13 1.5 14.5 2.5 16L1 19L4 17.5C5.5 18.5 7 19 9 19H11C16.5 19 21 14.5 21 9C21 6.5 20 4.5 18.5 3H17Z" stroke={color} strokeWidth="1.5"/>
        <path d="M7 9C7 9 7.5 7 9.5 7C11.5 7 13 8.5 13 10.5C13 12.5 11.5 14 9.5 14C8.5 14 7.5 13.5 7 13" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  }

  return null
}

const bottomLinks = [
  { label: 'PRIVACY POLICY', href: '/privacy-policy' },
  { label: 'COOKIES', href: '/cookies' },
  { label: 'TERMS & CONDITIONS', href: '/terms-conditions' },
]

function OYELogo() {
  return (
    <svg width="147" height="56" viewBox="0 0 147 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="40" fill="#264EAB" fontSize="48" fontWeight="bold" fontFamily="Inter">ÖYE</text>
      <path d="M115 20 L125 28 L135 20" stroke="#264EAB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M115 36 L125 28 L135 36" stroke="#264EAB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function FooterSection() {
  return (
    <footer className="mt-16 px-4 lg:px-[100px] pb-8">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 mb-8">
          <div className="lg:w-[400px]">
            <div className="w-[147px] h-14 mb-6">
              <OYELogo />
            </div>
            <p className="text-sm text-text leading-relaxed">
              Say farewell to ordinary packaging and delays - we've got your back. Explore our diverse services and join us on an exciting journey!
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-text mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={`text-sm text-text hover:text-main transition-colors ${link.opacity ? 'opacity-50' : ''}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-[#101014] mb-4" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text">COPYRIGHT @ 2024 OYE PACKAGING</p>

          <div className="flex gap-4">
            {bottomLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-text hover:text-main transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={`w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors ${
                  social.highlight
                    ? 'bg-main hover:bg-main/90'
                    : 'border border-[#7ba0d0] hover:bg-gray-100'
                }`}
              >
                <SocialIcon icon={social.icon} highlight={social.highlight} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
