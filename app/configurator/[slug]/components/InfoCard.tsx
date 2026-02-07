import { type ReactNode } from 'react'

interface InfoCardProps {
  icon: ReactNode
  text: string
}

export function InfoCard({ icon, text }: InfoCardProps) {
  return (
    <div className="flex gap-4 p-5 rounded-2xl border border-[#e5e7eb] bg-white">
      <div className="flex-shrink-0 mt-0.5 text-[#6b7280]">{icon}</div>
      <p className="[font-family:'Inter',Helvetica] text-sm leading-relaxed text-[#374151]">
        {text}
      </p>
    </div>
  )
}
