'use client'

import { Card, CardContent } from '@/components/ui/card'

const locations = [
  { icon: 'office', title: 'OFFICES', featured: true },
  { icon: 'gas', title: 'GAS STATIONS' },
  { icon: 'tourist', title: 'TOURIST SHOPS' },
  { icon: 'hotel', title: 'HOTELS' },
  { icon: 'store', title: 'ONLINE STORES' },
  { icon: 'gift', title: 'GIFT SHOPS' },
  { icon: 'event', title: 'EVENTS AND CONFERENCES' },
]

function LocationIcon({ type }: { type: string }) {
  if (type === 'office') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="10" height="12" rx="1" stroke="#101014" strokeWidth="2"/>
        <path d="M9 20V12H14L14 20" stroke="#101014" strokeWidth="2"/>
        <rect x="14" y="4" width="6" height="3" rx="1" fill="#264EAB"/>
        <line x1="6" y1="11" x2="8" y2="11" stroke="#101014" strokeWidth="1"/>
        <line x1="10" y1="11" x2="12" y2="11" stroke="#101014" strokeWidth="1"/>
      </svg>
    )
  }

  if (type === 'gas') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="10" height="16" rx="2" stroke="#101014" strokeWidth="2"/>
        <path d="M14 8H18L20 12V16H18" stroke="#101014" strokeWidth="2"/>
        <circle cx="18" cy="16" r="2" fill="#264EAB"/>
        <line x1="6" y1="8" x2="12" y2="8" stroke="#101014" strokeWidth="1.5"/>
      </svg>
    )
  }

  if (type === 'tourist') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 10L12 4L20 10V20H4V10Z" stroke="#101014" strokeWidth="2"/>
        <path d="M8 14C8 14 10 16 12 16C14 16 16 14 16 14" stroke="#264EAB" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="10" cy="11" r="1" fill="#101014"/>
        <circle cx="14" cy="11" r="1" fill="#101014"/>
      </svg>
    )
  }

  if (type === 'hotel') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="#101014" strokeWidth="2"/>
        <circle cx="8" cy="10" r="2" stroke="#264EAB" strokeWidth="2"/>
        <rect x="13" y="8" width="6" height="8" rx="1" stroke="#101014" strokeWidth="1.5"/>
        <line x1="3" y1="14" x2="21" y2="14" stroke="#101014" strokeWidth="1"/>
      </svg>
    )
  }

  if (type === 'store') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 6L8 4H16L18 6H6Z" stroke="#101014" strokeWidth="2"/>
        <rect x="4" y="6" width="16" height="14" rx="2" stroke="#101014" strokeWidth="2"/>
        <circle cx="12" cy="13" r="3" stroke="#264EAB" strokeWidth="2"/>
      </svg>
    )
  }

  if (type === 'gift') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="10" width="16" height="10" rx="1" stroke="#101014" strokeWidth="2"/>
        <path d="M4 10V8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8V10" stroke="#101014" strokeWidth="2"/>
        <line x1="12" y1="6" x2="12" y2="20" stroke="#264EAB" strokeWidth="2"/>
        <path d="M8 6C8 4.89543 8.89543 4 10 4C11.1046 4 12 4.89543 12 6" stroke="#101014" strokeWidth="2"/>
        <path d="M16 6C16 4.89543 15.1046 4 14 4C12.8954 4 12 4.89543 12 6" stroke="#101014" strokeWidth="2"/>
      </svg>
    )
  }

  if (type === 'event') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="18" height="15" rx="2" stroke="#101014" strokeWidth="2"/>
        <line x1="3" y1="9" x2="21" y2="9" stroke="#101014" strokeWidth="2"/>
        <line x1="7" y1="3" x2="7" y2="7" stroke="#264EAB" strokeWidth="2" strokeLinecap="round"/>
        <line x1="17" y1="3" x2="17" y2="7" stroke="#264EAB" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 13L13 15L15 14L14 16H10L9 14L11 15L12 13Z" fill="#264EAB"/>
      </svg>
    )
  }

  return null
}

export function WhereToOfferSection() {
  return (
    <section className="max-w-[925px] mx-auto mb-16">
      <h2 className="font-semibold text-text text-3xl tracking-[-0.60px] leading-[49px] mb-8 text-center">
        WHERE TO OFFER DRIP BAGS?
      </h2>

      <div className="flex flex-col lg:flex-row gap-4">
        <Card className="flex-1 rounded-[20px] border border-[#101014]/30">
          <CardContent className="p-6">
            <div className="w-full h-[271px] mb-4 rounded-[20px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Offices"
                src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <LocationIcon type="office" />
              <span className="font-medium text-text text-lg">
                OFFICES
              </span>
            </div>
            <p className="font-normal text-text text-sm leading-[22px]">
              A simple solution for quality coffee at work, saving time and enhancing productivity.
            </p>
          </CardContent>
        </Card>

        <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
          {locations.slice(1).map((location, index) => (
            <Card
              key={index}
              className="min-w-[71px] lg:w-[71px] h-[389px] rounded-[20px] shadow-[0px_3px_18px_rgba(0,0,0,0.11)] flex-shrink-0"
            >
              <CardContent className="h-full flex flex-col items-center justify-center p-4 gap-4">
                <span className="font-medium text-text text-sm text-center lg:-rotate-90 whitespace-nowrap">
                  {location.title}
                </span>
                <LocationIcon type={location.icon} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
