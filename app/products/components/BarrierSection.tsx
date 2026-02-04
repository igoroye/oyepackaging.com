'use client'

import { Card, CardContent } from '@/components/ui/card'

const barrierInfo = [
  {
    icon: 'oxygen',
    title: 'OXYGEN',
    description: 'causing oxidation and staling.',
  },
  {
    icon: 'humidity',
    title: 'HUMIDITY',
    description: 'accelerating the moisture absorption, leading to loss of flavor and potential mold growth.',
  },
  {
    icon: 'uv',
    title: 'UV LIGHT',
    description: 'accelerating the degradation of certain compounds, resulting in a loss of flavor and aroma.',
  },
]

const certifications = ['ISO 9001:2015', 'BRC Food Certificate']

const keyFeatures = [
  'Highly recyclable materials',
  'Made in Europe',
  'Design check before print',
  'Production time from 4 - 8 weeks',
]

export function BarrierSection() {
  return (
    <Card className="bg-[#f7f7f8] rounded-[20px] border-0 p-6 lg:p-8">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[22px] font-medium text-text mb-6">THE BEST BARRIER FOR YOUR COFFEE</h3>

            <div className="space-y-4">
              {barrierInfo.map((info, index) => (
                <Card key={index} className="bg-white rounded-[20px] border-0 p-4">
                  <CardContent className="p-0 flex gap-4">
                    <div className="w-16 h-16 bg-[#f7f7f8] rounded-lg flex items-center justify-center flex-shrink-0">
                      {info.icon === 'oxygen' && (
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="12" stroke="#264EAB" strokeWidth="2"/>
                          <text x="16" y="21" textAnchor="middle" fill="#264EAB" fontSize="12" fontWeight="bold">O2</text>
                        </svg>
                      )}
                      {info.icon === 'humidity' && (
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 4C16 4 6 14 6 20C6 25.5228 10.4772 30 16 30C21.5228 30 26 25.5228 26 20C26 14 16 4 16 4Z" stroke="#264EAB" strokeWidth="2"/>
                        </svg>
                      )}
                      {info.icon === 'uv' && (
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="6" stroke="#264EAB" strokeWidth="2"/>
                          <path d="M16 2V6M16 26V30M2 16H6M26 16H30M5 5L8 8M24 24L27 27M27 5L24 8M8 24L5 27" stroke="#264EAB" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      )}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-text">{info.title}</h4>
                      <p className="text-sm text-text">{info.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Card className="bg-white rounded-[20px] border border-[#101014]/30 p-6">
              <CardContent className="p-0">
                <h4 className="text-lg font-medium text-text mb-4">CERTIFICATIONS</h4>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-5 py-1.5 bg-white rounded-full border border-[#b7b7b9]/30 text-sm italic text-text"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#7ba0d0]/25 rounded-[20px] border-0 p-6">
              <CardContent className="p-0">
                <h4 className="text-lg font-medium text-text mb-4">KEY FEATURES:</h4>
                <ul className="space-y-2">
                  {keyFeatures.map((feature, index) => (
                    <li key={index} className="text-sm text-text flex items-center gap-2">
                      <span className="text-main">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
