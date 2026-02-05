'use client'

import React, { useState } from 'react'

export interface AccordionItem {
  id: number
  title: string
  imageUrl: string
}

interface AccordionItemProps {
  item: AccordionItem
  isActive: boolean
  onMouseEnter: () => void
}

const AccordionItemComponent = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.onerror = null
          target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error'
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0'
              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  )
}

interface InteractiveImageAccordionProps {
  items: AccordionItem[]
  defaultActiveIndex?: number
}

export function InteractiveImageAccordion({
  items,
  defaultActiveIndex = 3
}: InteractiveImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex)

  const handleItemHover = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
        {items.map((item, index) => (
          <AccordionItemComponent
            key={item.id}
            item={item}
            isActive={index === activeIndex}
            onMouseEnter={() => handleItemHover(index)}
          />
        ))}
      </div>
    </div>
  )
}
