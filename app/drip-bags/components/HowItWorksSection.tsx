'use client'

import { Card, CardContent } from '@/components/ui/card'

const steps = [
  {
    icon: 'beans',
    title: 'Provide a description of your coffee profile and specify your preferred weight per filter. Send us 1 kg of coffee for testing.',
  },
  {
    icon: 'samples',
    title: 'We will prepare samples (4 or more options).',
  },
  {
    icon: 'taste',
    title: 'You will receive a sample by mail, cup it, and select your favorite option.',
  },
  {
    icon: 'production',
    title: 'We will use this choice as a quality reference before moving into production.',
  },
]

function StepIcon({ type }: { type: string }) {
  if (type === 'beans') {
    return (
      <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="23.5" cy="23.5" rx="12" ry="18" transform="rotate(-20 23.5 23.5)" stroke="#264EAB" strokeWidth="2" fill="#E8F4FF"/>
        <path d="M20 15C20 15 18 23 26 28" stroke="#264EAB" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  }

  if (type === 'samples') {
    return (
      <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="12" width="12" height="28" rx="2" stroke="#264EAB" strokeWidth="2" fill="#E8F4FF"/>
        <rect x="24" y="8" width="12" height="32" rx="2" stroke="#264EAB" strokeWidth="2" fill="#E8F4FF"/>
        <line x1="10" y1="20" x2="18" y2="20" stroke="#264EAB" strokeWidth="1.5"/>
        <line x1="26" y1="16" x2="34" y2="16" stroke="#264EAB" strokeWidth="1.5"/>
      </svg>
    )
  }

  if (type === 'taste') {
    return (
      <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 20C12 20 12 14 18 14C24 14 24 20 24 20" stroke="#264EAB" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 20C20 20 20 14 26 14C32 14 32 20 32 20" stroke="#264EAB" strokeWidth="2" strokeLinecap="round"/>
        <rect x="10" y="20" width="24" height="16" rx="3" stroke="#264EAB" strokeWidth="2" fill="#E8F4FF"/>
        <path d="M16 28C16 28 19 31 28 28" stroke="#264EAB" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  }

  if (type === 'production') {
    return (
      <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="23.5" cy="23.5" r="15" stroke="#264EAB" strokeWidth="2" fill="#E8F4FF"/>
        <path d="M18 23.5L21.5 27L29 19.5" stroke="#264EAB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }

  return null
}

export function HowItWorksSection() {
  return (
    <section className="max-w-[925px] mx-auto mb-16">
      <h2 className="font-semibold text-text text-3xl tracking-[-0.60px] leading-[49px] mb-8 text-center">
        HOW IT WORKS
      </h2>

      <Card className="rounded-[20px] shadow-[0px_4px_14px_-1px_rgba(0,0,0,0.14)]">
        <CardContent className="p-8">
          <h3 className="font-medium text-text text-[22px] leading-[39px] mb-4 text-center">
            4 SIMPLE STEPS TO TEST OUR SERVICE
          </h3>

          <p className="font-normal text-text text-lg leading-[22px] mb-8 text-center">
            🤩 You have a unique opportunity to test your coffee in drip bags before launching it
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="rounded-[20px] border border-[#101014]/30"
              >
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    <StepIcon type={step.icon} />
                  </div>
                  <p className="font-normal text-black text-sm leading-[22px]">
                    {step.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
