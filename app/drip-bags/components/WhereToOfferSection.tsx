'use client'

import { InteractiveImageAccordion, type AccordionItem } from '@/components/ui/interactive-image-accordion'

const dripBagsLocations: AccordionItem[] = [
  {
    id: 1,
    title: 'Events & Conferences',
    imageUrl: '/images/drip-bags/events_and_conferences.webp',
  },
  {
    id: 2,
    title: 'Gas Stations',
    imageUrl: '/images/drip-bags/gas_stations.webp',
  },
  {
    id: 3,
    title: 'Gift Shops',
    imageUrl: '/images/drip-bags/gift_shops.webp',
  },
  {
    id: 4,
    title: 'Hotels',
    imageUrl: '/images/drip-bags/hotels.webp',
  },
  {
    id: 5,
    title: 'Offices',
    imageUrl: '/images/drip-bags/offices.webp',
  },
  {
    id: 6,
    title: 'Online Stores',
    imageUrl: '/images/drip-bags/online_stores.webp',
  },
  {
    id: 7,
    title: 'Tourist Shops',
    imageUrl: '/images/drip-bags/turists_shops.webp',
  },
]

export function WhereToOfferSection() {
  return (
    <section className="max-w-[1400px] mx-auto mb-16">
      <h2 className="font-semibold text-text text-3xl tracking-[-0.60px] leading-[49px] mb-8 text-center">
        WHERE TO OFFER DRIP BAGS?
      </h2>

      <InteractiveImageAccordion items={dripBagsLocations} defaultActiveIndex={3} />
    </section>
  )
}
