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
  { name: 'Telegram', href: '#' },
  { name: 'Facebook', href: '#', highlight: true },
  { name: 'Instagram', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'WhatsApp', href: '#' },
]

const bottomLinks = [
  { label: 'PRIVACY POLICY', href: '/privacy-policy' },
  { label: 'COOKIES', href: '/cookies' },
  { label: 'TERMS & CONDITIONS', href: '/terms-conditions' },
]

export function FooterSection() {
  return (
    <footer className="mt-16 px-4 lg:px-[100px] pb-8">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 mb-8">
          <div className="lg:w-[400px]">
            <img
              src="https://c.animaapp.com/mkvbxc2okqfhzF/img/group-239.png"
              alt="OYE Logo"
              className="w-[147px] h-14 mb-6"
            />
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
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="8" stroke={social.highlight ? 'white' : '#7ba0d0'} strokeWidth="1.5"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
