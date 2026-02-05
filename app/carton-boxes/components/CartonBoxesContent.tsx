'use client'

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const features = [
  {
    icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/customize-computer-1.svg",
    text: "Customization options",
  },
  {
    icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/european-union.svg",
    text: "Made in Europe",
  },
  {
    icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/mug-hot-alt--2--8.svg",
    text: "Innovative materials",
  },
  {
    icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/shield-check-1.svg",
    text: "Sustainable packaging",
  },
]

const boxTypes = [
  {
    name: "VERTICAL BOX",
    image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-121.svg",
    category: "FLAT BOTTOM BAGS",
  },
  {
    name: "HORIZONTAL BOX",
    image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-130.svg",
    category: "FLAT BOTTOM BAGS",
  },
  {
    name: "TUCK FLAP BOX",
    image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/group-460.png",
    category: "STANDUP BAGS",
  },
  {
    name: "CLASSY BOX",
    image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-97--stroke-.svg",
    category: "DRIP & BREW BAGS",
  },
  {
    name: "PERFORATED BOX",
    image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-98--stroke-.svg",
    category: "DRIP & BREW BAGS",
  },
  {
    name: "ENVELOPE BOX",
    image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-92--stroke-.svg",
    category: "DRIP & BREW BAGS",
  },
]

const touchFeelOptions = [
  {
    icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/frame-279.svg",
    label: "Matte",
  },
  {
    icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/group-281.png",
    label: "Soft touch",
  },
]

const featuresList = [
  {
    name: "TOP OPENING",
    image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-127.svg",
    detail: "https://c.animaapp.com/mkve5d5vXaRKB0/img/group-455.png",
  },
  {
    name: "TEAR STRIP",
    image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-127.svg",
    detail: "https://c.animaapp.com/mkve5d5vXaRKB0/img/group-454.png",
  },
  {
    name: "PERFORATION",
    image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-127.svg",
    detail: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-126--stroke--1.svg",
  },
  {
    name: "CUTOUT",
    image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-127.svg",
    detail: "https://c.animaapp.com/mkve5d5vXaRKB0/img/mask-group-2.png",
  },
  {
    name: "PERFORATED TEAR STRIP",
    image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-127.svg",
    detail: "https://c.animaapp.com/mkve5d5vXaRKB0/img/rectangle-4837.svg",
  },
]

const certifications = [
  { label: "FSC Certificate" },
  { label: "Compostable Certificate" },
]

const keyFeatures = [
  "Highly recyclable materials",
  "Made in Europe",
  "Design check before print",
  "Production time from 4 - 6 weeks",
]

const footerSections = [
  {
    title: "PACKAGING",
    links: [
      { label: "Flat Bottom Bags", href: "/flat-bottom-bags" },
      { label: "Carton Boxes", href: "/carton-boxes" },
      { label: "Side Gusset Bags", href: "#" },
      { label: "Standup Bags", href: "/standup-bags" },
    ],
  },
  {
    title: "SERVICES",
    links: [
      { label: "Drip Bags", href: "/drip-bags" },
      { label: "Brew Bags", href: "/brew-bags", opacity: true },
      { label: "Capsules", href: "#", opacity: true },
    ],
  },
  {
    title: "WIKI",
    links: [
      { label: "ORDERS", href: "#" },
      { label: "Payments and pricing", href: "#" },
      { label: "Delivery", href: "#" },
      { label: "Return & refund policy", href: "#" },
    ],
  },
  {
    title: "ABOUT US",
    links: [
      { label: "Who we are", href: "/about-us" },
      { label: "Contact us", href: "/contact-us" },
      { label: "Sustainability", href: "/sustainability" },
    ],
  },
]

const socialIcons = [
  {
    icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/telegram--13--1.svg",
    alt: "Telegram",
  },
  {
    icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/facebook-logo-1.svg",
    alt: "Facebook",
    active: true,
  },
  {
    icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/instagram--5--1.svg",
    alt: "Instagram",
  },
  {
    icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/linkedin-1.svg",
    alt: "Linkedin",
  },
  {
    icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/whatsapp-1.svg",
    alt: "Whatsapp",
  },
]

export function CartonBoxesContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <header className="w-full bg-transparent py-4 md:py-6 relative z-50">
        <nav className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] flex items-center justify-between">
          <Link href="/">
            <img
              className="w-[100px] sm:w-[125px] h-auto cursor-pointer"
              alt="ÖYE Logo"
              src="https://c.animaapp.com/mkve5d5vXaRKB0/img/group-239.png"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            <Link
              href="/products"
              className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-[normal] hover:text-main transition-colors"
            >
              PRODUCTS
            </Link>
            <Link
              href="/drip-bags"
              className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-[normal] hover:text-main transition-colors"
            >
              SERVICES
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <Button
              variant="outline"
              className="h-auto px-6 py-4 bg-white rounded-[40px] border-2 border-[#264eab] hover:bg-gray-50 transition-colors"
            >
              <span className="[font-family:'Inter',Helvetica] font-medium text-main text-lg tracking-[0.54px] leading-[normal]">
                CONFIGURE PACKAGING
              </span>
            </Button>

            <Button className="h-auto px-6 py-4 bg-main rounded-[40px] border-2 border-[#264eab] hover:bg-[#1e3d8f] transition-colors">
              <span className="text-white text-lg tracking-[0.54px] [font-family:'Inter',Helvetica] font-medium leading-[normal]">
                SIGN IN
              </span>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-text hover:text-main transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 animate-fade-in">
            <div className="container mx-auto px-4 sm:px-6 py-6 flex flex-col gap-4">
              <Link
                href="/products"
                className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-[normal] hover:text-main transition-colors text-left py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                PRODUCTS
              </Link>
              <Link
                href="/drip-bags"
                className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-[normal] hover:text-main transition-colors text-left py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                SERVICES
              </Link>
              <div className="flex flex-col gap-3 mt-4">
                <Button
                  variant="outline"
                  className="h-auto px-6 py-3 bg-white rounded-[40px] border-2 border-[#264eab] hover:bg-gray-50 transition-colors w-full"
                >
                  <span className="[font-family:'Inter',Helvetica] font-medium text-main text-base tracking-[0.54px] leading-[normal]">
                    CONFIGURE PACKAGING
                  </span>
                </Button>

                <Button className="h-auto px-6 py-3 bg-main rounded-[40px] border-2 border-[#264eab] hover:bg-[#1e3d8f] transition-colors w-full">
                  <span className="text-white text-base tracking-[0.54px] [font-family:'Inter',Helvetica] font-medium leading-[normal]">
                    SIGN IN
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] xl:pl-[414px]">
        <aside className="hidden xl:flex fixed left-[100px] top-[132px] flex-col gap-3 z-40">
          <Link href="/products">
            <Card className="w-[294px] h-[88px] bg-white rounded-[20px] border-0 shadow-none cursor-pointer hover:bg-gray-50 transition-colors">
              <CardContent className="flex items-center gap-4 p-0 h-full px-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    className="w-[31px] h-[31px] opacity-40"
                    alt="Flat Bottom Bags Icon"
                    src="https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-1.svg"
                  />
                </div>
                <span className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-[normal] opacity-40">
                  FLAT BOTTOM BAGS
                </span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/standup-bags">
            <Card className="w-[294px] h-[88px] bg-white rounded-[20px] border-0 shadow-none cursor-pointer hover:bg-gray-50 transition-colors">
              <CardContent className="flex items-center gap-4 p-0 h-full px-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    className="w-[31px] h-[31px] opacity-40"
                    alt="Standup Bags Icon"
                    src="https://c.animaapp.com/mkve5d5vXaRKB0/img/group-419.png"
                  />
                </div>
                <span className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-[normal] opacity-40">
                  STANDUP BAGS
                </span>
              </CardContent>
            </Card>
          </Link>

          <Card className="w-[294px] h-[88px] bg-[#e8eef5] rounded-[20px] border-0 shadow-none">
            <CardContent className="flex items-center gap-4 p-0 h-full px-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  className="w-[31px] h-[31px]"
                  alt="Carton Boxes Icon"
                  src="https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-57.png"
                />
              </div>
              <span className="[font-family:'Inter',Helvetica] font-semibold text-main text-lg tracking-[0] leading-[normal]">
                CARTON BOXES
              </span>
            </CardContent>
          </Card>
        </aside>

        <section className="pt-8 pb-16">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="relative flex justify-center lg:justify-start flex-shrink-0">
              <div className="w-full max-w-[400px] h-[380px] bg-bg-beige rounded-[20px] flex items-center justify-center relative">
                <img
                  className="w-[239px] h-[197px] object-cover"
                  alt="Carton Box"
                  src="https://c.animaapp.com/mkve5d5vXaRKB0/img/----------2-1.png"
                />

                <div className="absolute top-[10px] left-[75px] flex items-center gap-[3px] px-3 py-2 bg-[#ffffff38] rounded-[60px] border border-white backdrop-blur-sm">
                  <img
                    className="w-[15px] h-[15px]"
                    alt="Hand zoom in"
                    src="https://c.animaapp.com/mkve5d5vXaRKB0/img/hand-zoom-in-1.svg"
                  />
                  <span className="[font-family:'Inter',Helvetica] font-normal text-text text-[10px] whitespace-nowrap">
                    HOLD AND ROTATE
                  </span>
                </div>

                <div className="absolute top-[10px] left-[263px] w-[27px] h-[27px] bg-[#ffffff38] rounded-[60px] border border-white rotate-90 backdrop-blur-sm flex items-center justify-center">
                  <img
                    className="w-[15px] h-[15px] -rotate-90"
                    alt="Cursor finger click"
                    src="https://c.animaapp.com/mkve5d5vXaRKB0/img/cursor-finger-click-1.svg"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6 max-w-[520px]">
              <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl md:text-4xl tracking-[-0.60px] leading-tight">
                CARTON BOXES
              </h1>

              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg leading-[22px]">
                Our coffee boxes are made to hold your bags in a neat and
                stylish way. They&apos;re durable, easy to open, and look
                great on the shelf - a simple and thoughtful solution to
                present your coffee and let your brand shine.
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <img
                      className="w-[22px] h-[22px]"
                      alt={feature.text}
                      src={feature.icon}
                    />
                    <span className="[font-family:'Inter',Helvetica] font-normal text-text text-base">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="h-auto px-8 py-4 bg-main rounded-[40px] border-2 border-[#264eab] text-white text-base tracking-[0.48px] [font-family:'Inter',Helvetica] font-medium flex items-center justify-center gap-2.5 hover:bg-[#1e3d8f] transition-colors">
                  CONFIGURE PACKAGING
                  <img
                    className="w-2 h-[13px]"
                    alt="Arrow"
                    src="https://c.animaapp.com/mkve5d5vXaRKB0/img/vector.svg"
                  />
                </Button>
                <Button
                  variant="outline"
                  className="h-auto px-8 py-4 bg-white rounded-[40px] border-2 border-[#264eab] text-main text-base tracking-[0.48px] [font-family:'Inter',Helvetica] font-medium hover:bg-gray-50 transition-colors"
                >
                  ORDER SAMPLE KIT
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Card className="mb-16 rounded-[20px] border border-[#101014]">
          <CardContent className="p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex items-center gap-6">
                <img
                  className="w-10 h-[43px]"
                  alt="Icon"
                  src="https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-2.png"
                />
                <div>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-text text-lg leading-[29px]">
                    MOQ (MINIMUM ORDER QUANTITY)
                  </p>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-text text-3xl leading-[29px]">
                    500 PCS
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 md:border-l border-[#101014] md:pl-8">
                <img
                  className="w-11 h-11"
                  alt="Picking box"
                  src="https://c.animaapp.com/mkve5d5vXaRKB0/img/picking-box--1--1.svg"
                />
                <div>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-text text-lg text-center leading-[29px]">
                    PRODUCTION TIME FROM
                  </p>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-text text-3xl text-center leading-[29px]">
                    4 WEEKS
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <section className="mb-16">
          <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[-0.60px] leading-[49px] text-center mb-8">
            СUSTOMIZATION OPTIONS
          </h2>

          <Card className="rounded-[20px] border border-[#101014] mb-8">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg sm:text-[22px] leading-[39px] mb-6">
                MATERIALS
              </h3>

              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <img
                  className="w-full md:w-[305px] h-[132px] object-cover rounded-lg flex-shrink-0"
                  alt="Material"
                  src="https://c.animaapp.com/mkve5d5vXaRKB0/img/mask-group-3.png"
                />

                <div className="space-y-4 flex-1">
                  <h4 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg leading-8">
                    PAPERBOARD
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-[22px]">
                      Grammage: 360g / 600 microns
                      <br />
                      FSC Certified
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-[22px]">
                      100% recyclable material
                      <br />
                      Compostable
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <img
                        key={star}
                        className="w-3 h-3"
                        src="https://c.animaapp.com/mkve5d5vXaRKB0/img/star-1-1.svg"
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[20px] border border-[#101014] mb-8">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg sm:text-[22px] leading-[39px] mb-6">
                TYPES OF BOXES
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg leading-8 mb-4 text-center">
                    FLAT BOTTOM BAGS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {boxTypes.slice(0, 2).map((box, index) => (
                      <div key={index} className="text-center">
                        <Card className="bg-white rounded-[20px] border border-[#101014] mb-2.5">
                          <CardContent className="p-8 flex items-center justify-center h-[150px]">
                            <img
                              className="max-w-full max-h-full"
                              alt={box.name}
                              src={box.image}
                            />
                          </CardContent>
                        </Card>
                        <p className="[font-family:'Inter',Helvetica] font-medium text-text text-sm text-center leading-[22px]">
                          {box.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg leading-8 mb-4 text-center">
                    STANDUP BAGS
                  </h4>
                  <div className="flex justify-center">
                    {boxTypes.slice(2, 3).map((box, index) => (
                      <div key={index} className="text-center w-full max-w-[305px]">
                        <Card className="bg-white rounded-[20px] border border-[#101014] mb-2.5">
                          <CardContent className="p-8 flex items-center justify-center h-[137px]">
                            <img
                              className="max-w-full max-h-full"
                              alt={box.name}
                              src={box.image}
                            />
                          </CardContent>
                        </Card>
                        <p className="[font-family:'Inter',Helvetica] font-medium text-text text-sm text-center leading-[22px]">
                          {box.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg leading-8 mb-4 text-center">
                    DRIP & BREW BAGS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {boxTypes.slice(3).map((box, index) => (
                      <div key={index} className="text-center">
                        <Card className="bg-white rounded-[20px] border border-[#101014] mb-2.5">
                          <CardContent className="p-8 flex items-center justify-center h-[137px]">
                            <img
                              className="max-w-full max-h-full"
                              alt={box.name}
                              src={box.image}
                            />
                          </CardContent>
                        </Card>
                        <p className="[font-family:'Inter',Helvetica] font-medium text-text text-sm text-center leading-[22px]">
                          {box.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="rounded-[20px] border border-[#101014]">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg sm:text-[22px] leading-8 mb-6">
                  PRINT CUSTOMIZATION
                </h3>

                <div className="relative">
                  <div className="w-full h-[188px] bg-bg-beige rounded-[20px] flex items-center justify-center mb-4">
                    <img
                      className="w-[159px] h-[131px] object-cover"
                      alt="Print example"
                      src="https://c.animaapp.com/mkve5d5vXaRKB0/img/----------2-1.png"
                    />
                  </div>

                  <div className="text-center">
                    <p className="[font-family:'Inter',Helvetica] font-medium text-text text-lg leading-[22px]">
                      FULLY PRINTED
                    </p>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-[22px]">
                      (front & back & bottom)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[20px] border border-[#101014]">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg sm:text-[22px] leading-[39px] mb-6">
                  TOUCH & FEEL CUSTOMIZATION
                </h3>

                <div className="flex flex-wrap gap-2">
                  {touchFeelOptions.map((option, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="flex items-center gap-2.5 px-5 py-1.5 bg-white rounded-[50px] border border-[#101014] h-auto cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <img
                        className="w-[26px] h-[26px]"
                        alt={option.label}
                        src={option.icon}
                      />
                      <span className="[font-family:'Inter',Helvetica] font-medium text-text text-sm text-center">
                        {option.label}
                      </span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-[20px] border border-[#101014]">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg sm:text-[22px] leading-[39px] mb-8">
                FEATURES
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuresList.map((feature, index) => (
                  <Card
                    key={index}
                    className="bg-bg-gray rounded-[20px] border-0"
                  >
                    <CardContent className="p-6 relative h-[200px]">
                      <div className="relative h-[148px] flex items-center justify-center mb-4">
                        <img
                          className="w-[175px] h-[148px]"
                          alt={feature.name}
                          src={feature.image}
                        />
                        <img
                          className="absolute max-w-[100px] max-h-[80px]"
                          alt={`${feature.name} detail`}
                          src={feature.detail}
                        />
                      </div>
                      <p className="[font-family:'Inter',Helvetica] font-medium text-text text-sm text-center">
                        {feature.name}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="bg-[#f7f7f8] rounded-[20px] border-0">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <h2 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg sm:text-[22px] leading-[39px] mb-8 text-center">
                DETAILS THAT MAKE THE DIFFERENCE
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <Card className="bg-white rounded-[20px] border border-[#1010144c]">
                  <CardContent className="p-6">
                    <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg leading-8 mb-4">
                      CERTIFICATIONS
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {certifications.map((cert, index) => (
                        <Badge
                          key={index}
                          className="bg-white rounded-[50px] border border-[#b7b7b94c] h-auto px-5 py-[5px]"
                        >
                          <span className="[font-family:'Inter',Helvetica] font-normal italic text-text text-sm">
                            {cert.label}
                          </span>
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#7ba0d042] rounded-[20px] border-0 rotate-180">
                  <CardContent className="p-6 rotate-180">
                    <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg leading-8 mb-4">
                      KEY FEATURES:
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-8">
                      {keyFeatures.map((feature, index) => (
                        <span key={index}>
                          {feature}
                          {index < keyFeatures.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="relative overflow-hidden rounded-[20px] border-0">
              <img
                className="w-full h-[260px] object-cover"
                alt="Questions"
                src="https://c.animaapp.com/mkve5d5vXaRKB0/img/mask-group.png"
              />
              <CardContent className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-[22px] text-center leading-[39px] mb-4">
                  STILL HAVE QUESTIONS?
                </h3>
                <Button
                  variant="outline"
                  className="h-auto px-6 py-3 rounded-[40px] border-2 border-white bg-transparent text-white text-base tracking-[0.48px] [font-family:'Inter',Helvetica] font-medium hover:bg-white/10"
                >
                  BOOK A CALL
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden rounded-[20px] border-0">
              <img
                className="w-full h-[260px] object-cover"
                alt="Packaging"
                src="https://c.animaapp.com/mkve5d5vXaRKB0/img/mask-group-1.png"
              />
              <CardContent className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-[22px] text-center leading-[39px] mb-4">
                  ENJOY THE PACKAGING
                </h3>
                <Button
                  variant="outline"
                  className="h-auto px-6 py-3 rounded-[40px] border-2 border-white bg-transparent text-white text-base tracking-[0.48px] [font-family:'Inter',Helvetica] font-medium hover:bg-white/10"
                >
                  CONFIGURE PACKAGING
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] py-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8">
            <div className="max-w-full lg:max-w-md">
              <img
                className="w-[147px] h-14 mb-4"
                alt="Logo"
                src="https://c.animaapp.com/mkve5d5vXaRKB0/img/group-247.png"
              />
              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-[22px]">
                Say farewell to ordinary packaging and delays - we&apos;ve got your
                back. Explore our diverse services and join us on an exciting
                journey!
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h4 className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg leading-6 mb-4">
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        {link.href && link.href.startsWith('/') ? (
                          <Link
                            href={link.href}
                            className={`[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-6 hover:text-main transition-colors ${
                              link.opacity ? "opacity-50" : ""
                            }`}
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href || "#"}
                            className={`[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-6 hover:text-main transition-colors ${
                              link.opacity ? "opacity-50" : ""
                            }`}
                          >
                            {link.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-[30px]">
                  COPYRIGHT © 2024 ÖYE PACKAGING
                </p>
                <Link
                  href="/privacy-policy"
                  className="[font-family:'Inter',Helvetica] font-medium text-text text-sm leading-[30px] hover:text-main transition-colors"
                >
                  PRIVACY POLICY
                </Link>
                <Link
                  href="/cookies"
                  className="[font-family:'Inter',Helvetica] font-medium text-text text-sm leading-[30px] hover:text-main transition-colors"
                >
                  COOKIES
                </Link>
                <Link
                  href="/terms-conditions"
                  className="[font-family:'Inter',Helvetica] font-medium text-text text-sm leading-[30px] hover:text-main transition-colors"
                >
                  TERMS & CONDITIONS
                </Link>
              </div>

              <div className="flex items-center gap-2">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors ${
                      social.active
                        ? "bg-main"
                        : "border border-[#7ba0d0] hover:bg-gray-50"
                    }`}
                  >
                    <img
                      className="w-5 h-5"
                      alt={social.alt}
                      src={social.icon}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
