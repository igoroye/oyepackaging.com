'use client'

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const bagSizes = [
  { size: "250g" },
  { size: "500g" },
  { size: "1000g" },
  { size: "3000g" },
  { size: "Custom size" },
]

const printOptions = [
  {
    title: "SINGLE COLOR",
    subtitle: "(from stock)",
    image: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/matte-coffee-bag-mockup-01-1.png",
  },
  {
    title: "PARTLY PRINTED",
    subtitle: "(FRONT & BACK)",
    image: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/matte-coffee-bag-mockup-02-1.png",
  },
  {
    title: "FULLY PRINTED",
    subtitle: "(front & back + side gussets)",
    image: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/matte-coffee-bag-mockup-01-2.png",
  },
]

const touchOptions = [
  {
    icon: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/frame-279.svg",
    label: "Matte",
  },
  {
    icon: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/group-280.png",
    label: "Premium Matte",
  },
  {
    icon: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/group-281.png",
    label: "Soft touch",
  },
  {
    icon: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/group-282.png",
    label: "Sandy touch",
  },
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
    icon: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/telegram--13--1.svg",
    alt: "Telegram",
  },
  {
    icon: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/facebook-logo-1.svg",
    alt: "Facebook",
  },
  {
    icon: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/instagram--5--1.svg",
    alt: "Instagram",
  },
  {
    icon: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/linkedin-1.svg",
    alt: "Linkedin",
  },
  {
    icon: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/whatsapp-1.svg",
    alt: "Whatsapp",
  },
]

export function ProductsContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <header className="w-full bg-transparent py-4 md:py-6 relative z-50">
        <nav className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px]">
          <div className="max-w-[1240px] mx-auto flex items-center justify-between">
          <Link href="/">
            <img
              className="w-[100px] sm:w-[125px] h-auto cursor-pointer"
              alt="ÖYE Logo"
              src="/images/logo.svg"
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
          </div>
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

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col xl:flex-row gap-6">
            <aside className="hidden xl:flex sticky top-[132px] self-start flex-col gap-3 flex-shrink-0">
          <Card className="w-[294px] h-[88px] bg-[#e8eef5] rounded-[20px] border-0 shadow-none">
            <CardContent className="flex items-center gap-4 p-0 h-full px-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  className="w-[31px] h-[31px]"
                  alt="Flat Bottom Bags Icon"
                  src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/vector-1-1.svg"
                />
              </div>
              <span className="[font-family:'Inter',Helvetica] font-semibold text-main text-lg tracking-[0] leading-[normal]">
                FLAT BOTTOM BAGS
              </span>
            </CardContent>
          </Card>

          <Link href="/standup-bags">
            <Card className="w-[294px] h-[88px] bg-white rounded-[20px] border-0 shadow-none cursor-pointer hover:bg-gray-50 transition-colors">
              <CardContent className="flex items-center gap-4 p-0 h-full px-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    className="w-[31px] h-[31px] opacity-40"
                    alt="Standup Bags Icon"
                    src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/vector-2.png"
                  />
                </div>
                <span className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-[normal] opacity-40">
                  STANDUP BAGS
                </span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/carton-boxes">
            <Card className="w-[294px] h-[88px] bg-white rounded-[20px] border-0 shadow-none cursor-pointer hover:bg-gray-50 transition-colors">
              <CardContent className="flex items-center gap-4 p-0 h-full px-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    className="w-[31px] h-[31px] opacity-40"
                    alt="Carton Boxes Icon"
                    src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/vector-2.png"
                  />
                </div>
                <span className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-[normal] opacity-40">
                  CARTON BOXES
                </span>
              </CardContent>
            </Card>
          </Link>
            </aside>

            <main className="flex-1 min-w-0">
              <section className="pt-8 pb-16">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="relative flex justify-center lg:justify-start flex-shrink-0">
              <div className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[700px] h-[450px] bg-bg-beige rounded-[20px] flex items-center justify-center relative">
                <img
                  className="w-[177px] h-[323px]"
                  alt="Matte coffee bag"
                  src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/matte-coffee-bag-mockup-02-2.png"
                />
              </div>
            </div>

            <div className="space-y-6 max-w-[520px]">
              <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl md:text-4xl tracking-[-0.60px] leading-tight">
                FLAT BOTTOM BAGS
              </h1>

              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg leading-[22px]">
                The bag is perfect for coffee roasters, offering various form
                factors, EU-made materials, and extensive customization
                options. With our configurator, you can create the package of
                your dreams 🤩
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                <div className="flex items-center gap-2.5">
                  <img
                    className="w-[22px] h-[22px]"
                    alt="Customization options"
                    src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/customize-computer-1.svg"
                  />
                  <span className="[font-family:'Inter',Helvetica] font-normal text-text text-base">
                    Customization options
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <img
                    className="w-[22px] h-[22px]"
                    alt="Made in Europe"
                    src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/european-union.svg"
                  />
                  <span className="[font-family:'Inter',Helvetica] font-normal text-text text-base">
                    Made in Europe
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <img
                    className="w-[22px] h-[22px]"
                    alt="Innovative materials"
                    src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/mug-hot-alt--2--8.svg"
                  />
                  <span className="[font-family:'Inter',Helvetica] font-normal text-text text-base">
                    Innovative materials
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <img
                    className="w-[22px] h-[22px]"
                    alt="Best coffee protection"
                    src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/shield-check-1.svg"
                  />
                  <span className="[font-family:'Inter',Helvetica] font-normal text-text text-base">
                    Best coffee protection
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="h-auto px-8 py-4 bg-main rounded-[40px] border-2 border-[#264eab] text-white text-base tracking-[0.48px] [font-family:'Inter',Helvetica] font-medium flex items-center justify-center gap-2.5 hover:bg-[#1e3d8f] transition-colors">
                  CONFIGURE PACKAGING
                  <img
                    className="w-2 h-[13px]"
                    alt="Arrow"
                    src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/vector-10.svg"
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
                  className="w-7 h-[54px]"
                  alt="Icon"
                  src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/vector-4.png"
                />
                <div>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-text text-lg leading-[29px]">
                    MOQ (MINIMUM ORDER QUANTITY)
                  </p>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-text text-3xl leading-[29px]">
                    1500 PCS
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 md:border-l border-[#101014] md:pl-8">
                <img
                  className="w-11 h-11"
                  alt="Picking box"
                  src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/picking-box--1--1.svg"
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <Card className="bg-[#f7f7f8] rounded-[20px] border-0">
                  <CardContent className="p-6">
                    <img
                      className="w-full h-[132px] object-cover mb-4 rounded-lg"
                      alt="Performance series"
                      src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/mask-group-1.png"
                    />
                    <h4 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg leading-8 mb-2">
                      PERFORMANCE SERIES
                    </h4>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-[22px] mb-4">
                      Extended coffee shelf life
                      <br />
                      Metalized effects possible
                      <br />
                      100% recyclable material
                      <br />
                      Materials sourced from Europe
                    </p>
                    <div className="flex gap-2">
                      <Badge className="h-[29px] px-5 py-[5px] bg-white rounded-[50px] border border-[#b7b7b94c]">
                        <span className="[font-family:'Inter',Helvetica] font-light italic text-text text-xs">
                          Recyclable сode 5
                        </span>
                      </Badge>
                      <Badge className="h-[29px] px-5 py-[5px] bg-white rounded-[50px] border border-[#b7b7b94c] flex items-center gap-2">
                        <span className="[font-family:'Inter',Helvetica] font-light italic text-text text-xs">
                          Recycling rate
                        </span>
                        <img
                          className="w-[70.66px] h-3"
                          alt="Rating"
                          src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/group-398.png"
                        />
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#f7f7f8] rounded-[20px] border-0">
                  <CardContent className="p-6">
                    <img
                      className="w-full h-[132px] object-cover mb-4 rounded-lg"
                      alt="Barrier series"
                      src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/mask-group.png"
                    />
                    <h4 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg leading-8 mb-2">
                      BARRIER SERIES
                    </h4>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-[22px] mb-4">
                      Regular barrier
                      <br />
                      Transparent elements possible
                      <br />
                      100% recyclable material
                      <br />
                      Materials sourced from Europe
                    </p>
                    <div className="flex gap-2">
                      <Badge className="h-[29px] px-5 py-[5px] bg-white rounded-[50px] border border-[#b7b7b94c]">
                        <span className="[font-family:'Inter',Helvetica] font-light italic text-text text-xs">
                          Recyclable сode 5
                        </span>
                      </Badge>
                      <Badge className="h-[29px] px-5 py-[5px] bg-white rounded-[50px] border border-[#b7b7b94c] flex items-center gap-2">
                        <span className="[font-family:'Inter',Helvetica] font-light italic text-text text-xs">
                          Sustainability rate
                        </span>
                        <img
                          className="w-[70.29px] h-3"
                          alt="Rating"
                          src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/group-398-1.png"
                        />
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[20px] border border-[#101014] mb-8">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg sm:text-[22px] leading-[39px] mb-4">
                CHOOSE A BAG SIZE
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-[22px] mb-6">
                This product is perfectly tailored for display on shelves and
                transportation. It is suitable for all types of coffee beans
                (from small to very large).
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {bagSizes.map((bag, index) => (
                  <Card
                    key={index}
                    className="rounded-[20px] border border-[#101014] hover:border-main cursor-pointer transition-colors"
                  >
                    <CardContent className="p-6 flex items-center justify-center h-[123px]">
                      <span className="[font-family:'Inter',Helvetica] font-medium text-text text-[22px] text-center">
                        {bag.size}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[20px] border border-[#101014] mb-8">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg sm:text-[22px] leading-[39px] mb-4">
                PRINT CUSTOMIZATION
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-[22px] mb-6">
                Try different print options for your package
              </p>

              <div className="relative mb-4 hidden md:block">
                <div className="flex gap-1 absolute top-0 left-1/2 -translate-x-1/2">
                  <div className="w-[13px] h-[13px] rounded-[6.5px] border-[0.4px] border-[#101014] opacity-30 flex items-center justify-center">
                    <div className="w-[9px] h-[9px] bg-white rounded-[4.5px]" />
                  </div>
                  <div className="w-[13px] h-[13px] rounded-[6.5px] border-[0.4px] border-[#101014] opacity-30 flex items-center justify-center">
                    <div className="w-[9px] h-[9px] bg-text rounded-[4.5px]" />
                  </div>
                  <div className="w-[13px] h-[13px] rounded-[6.5px] border-[0.4px] border-[#101014] opacity-30 flex items-center justify-center">
                    <div className="w-[9px] h-[9px] bg-[#7ba0d0] rounded-[4.5px]" />
                  </div>
                  <div className="w-[13px] h-[13px] rounded-[6.5px] border-[0.4px] border-[#101014] opacity-30 flex items-center justify-center">
                    <div className="w-[9px] h-[9px] bg-[#1e3e89] rounded-[4.5px]" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {printOptions.map((option, index) => (
                  <div key={index} className="text-center">
                    <div className="w-full max-w-[279px] h-[269px] mx-auto bg-bg-beige rounded-[20px] mb-4 flex items-center justify-center">
                      <img
                        className="max-w-full max-h-full"
                        alt={option.title}
                        src={option.image}
                      />
                    </div>
                    <p className="[font-family:'Inter',Helvetica] text-text text-lg text-center leading-[18px]">
                      <span className="font-medium leading-[22px]">
                        {option.title}
                        <br />
                      </span>
                      <span className="text-sm leading-[22px]">
                        {option.subtitle}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[20px] border border-[#101014] mb-8">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg sm:text-[22px] leading-[39px] mb-4">
                TOUCH & FEEL CUSTOMIZATION
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-[22px] mb-6">
                Indulge in a sensory experience with various tactile effects.
                Customize the touch and feel of your bag with options such as:
              </p>

              <div className="flex flex-wrap gap-4 md:gap-[30px] justify-center">
                {touchOptions.map((option, index) => (
                  <Badge
                    key={index}
                    className="h-auto px-5 py-1.5 bg-white rounded-[50px] border border-[#101014] flex items-center gap-2.5 cursor-pointer hover:bg-gray-50 transition-colors"
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

          <Card className="rounded-[20px] border border-[#101014]">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg sm:text-[22px] leading-[39px] mb-8">
                FEATURES
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
                <Card className="bg-bg-gray rounded-[10px] border-0">
                  <CardContent className="p-6 relative h-[263px]">
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[95px] h-[95px] bg-white rounded-[47.5px] flex items-center justify-center">
                      <img
                        className="w-[95px] h-[95px]"
                        alt="Top zipper"
                        src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/mask-group-6.png"
                      />
                    </div>
                    <img
                      className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[148px] h-2.5"
                      alt="Zipper"
                      src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/top-opening-zipper.png"
                    />
                  </CardContent>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-text text-sm text-center pb-4">
                    TOP ZIPPER
                  </p>
                </Card>

                <Card className="bg-bg-gray rounded-[10px] border-0">
                  <CardContent className="p-6 relative h-[263px]">
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[95px] h-[95px] bg-white rounded-[47.5px] flex items-center justify-center">
                      <img
                        className="w-[95px] h-[95px]"
                        alt="Front zipper"
                        src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/group-365.png"
                      />
                    </div>
                    <img
                      className="absolute bottom-8 left-1/2 -translate-x-1/2"
                      alt="Zipper illustration"
                      src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/vector-3.svg"
                    />
                  </CardContent>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-text text-sm text-center pb-4">
                    FRONT ZIPPER
                  </p>
                </Card>

                <Card className="bg-bg-gray rounded-[20px] border-0">
                  <CardContent className="p-6 relative h-[263px] flex items-center justify-center">
                    <img
                      className="w-full h-full object-contain"
                      alt="Top opening"
                      src="/images/flat-bottom-bags/top-opening.png"
                    />
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
                <Card className="bg-bg-gray rounded-[10px] border-0">
                  <CardContent className="p-6 relative h-[263px]">
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[95px] h-[95px] bg-white rounded-[47.5px] flex items-center justify-center">
                      <img
                        className="w-[95px] h-[95px]"
                        alt="Coffee valve"
                        src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/ellipse-81.png"
                      />
                    </div>
                  </CardContent>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-text text-sm text-center pb-4">
                    COFFEE VALVE
                  </p>
                </Card>

                <Card className="bg-bg-gray rounded-[10px] border-0">
                  <CardContent className="p-6 relative h-[263px]">
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[95px] h-[95px] bg-white rounded-[47.5px]" />
                    <img
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      alt="Handle"
                      src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/vector-56.svg"
                    />
                  </CardContent>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-text text-sm text-center pb-4">
                    HANDLE
                  </p>
                </Card>

                <Card className="bg-bg-gray rounded-[20px] border-0">
                  <CardContent className="p-6 relative h-[263px]">
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[95px] h-[95px] bg-white rounded-[47.5px] flex items-center justify-center">
                      <img
                        className="w-[95px] h-[95px]"
                        alt="Carton box"
                        src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/mask-group-4.png"
                      />
                    </div>
                  </CardContent>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-text text-sm text-center pb-4">
                    CARTON BOX (HORIZONTAL)
                  </p>
                </Card>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <Card className="bg-bg-gray rounded-[20px] border-0">
                  <CardContent className="p-6 relative h-[263px]">
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[95px] h-[95px] bg-white rounded-[47.5px]" />
                    <img
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      alt="Top zipper"
                      src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/rectangle-4673.png"
                    />
                  </CardContent>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-text text-sm text-center pb-4">
                    TOP ZIPPER
                  </p>
                </Card>

                <Card className="bg-bg-gray rounded-[20px] border-0">
                  <CardContent className="p-6 relative h-[263px]">
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[95px] h-[95px] bg-white rounded-[47.5px] flex items-center justify-center">
                      <img
                        className="w-[95px] h-[95px]"
                        alt="Tear notch"
                        src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/mask-group-5.png"
                      />
                    </div>
                  </CardContent>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-text text-sm text-center pb-4">
                    TEAR NOTCH
                  </p>
                </Card>

                <Card className="bg-bg-gray rounded-[20px] border-0">
                  <CardContent className="p-6 relative h-[263px]">
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[95px] h-[95px] bg-white rounded-[47.5px]" />
                    <img
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      alt="Carton box vertical"
                      src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/ellipse-86.svg"
                    />
                  </CardContent>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-text text-sm text-center pb-4">
                    CARTON BOX (VERTICAL)
                  </p>
                </Card>
              </div>
            </CardContent>
          </Card>
              </section>

              <section className="mb-16">
          <Card className="bg-[#f7f7f8] rounded-[20px] border-0">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <h2 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg sm:text-[22px] leading-[39px] mb-8 text-center">
                THE BEST BARRIER FOR YOUR COFFEE
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
                <Card className="bg-white rounded-[20px] border border-[#1010144c]">
                  <CardContent className="p-6">
                    <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg leading-8 mb-4">
                      CERTIFICATIONS
                    </h3>
                    <div className="flex gap-2">
                      <Badge className="h-auto px-5 py-[5px] bg-white rounded-[50px] border border-[#b7b7b94c]">
                        <span className="[font-family:'Inter',Helvetica] font-normal italic text-text text-sm">
                          ISO 9001:2015
                        </span>
                      </Badge>
                      <Badge className="h-auto px-5 py-[5px] bg-white rounded-[50px] border border-[#b7b7b94c]">
                        <span className="[font-family:'Inter',Helvetica] font-normal italic text-text text-sm">
                          BRC Food Certificate
                        </span>
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white rounded-[20px] border-0">
                  <CardContent className="p-6 flex items-center gap-4">
                    <img
                      className="w-16 h-[66px]"
                      alt="Icon"
                      src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/rectangle-4668.svg"
                    />
                    <div>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg leading-[18px]">
                        <span className="font-medium leading-[0.1px]">
                          OXYGEN
                          <br />
                        </span>
                        <span className="text-sm leading-[22px]">
                          causing oxidation and staling.
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
                <Card className="bg-[#7ba0d042] rounded-[20px] border-0 rotate-180">
                  <CardContent className="p-6 rotate-180">
                    <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg leading-8 mb-4">
                      KEY FEATURES:
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-8">
                      Highly recyclable materials
                      <br />
                      Made in Europe
                      <br />
                      Design check before print
                      <br />
                      Production time from 4 - 8 weeks
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white rounded-[20px] border-0">
                  <CardContent className="p-6 flex items-center gap-4">
                    <img
                      className="w-16 h-[66px]"
                      alt="Icon"
                      src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/rectangle-4668.svg"
                    />
                    <div>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg leading-[18px]">
                        <span className="font-medium leading-[0.1px]">
                          HUMIDITY
                          <br />
                        </span>
                        <span className="text-sm leading-[22px]">
                          accelerating
                        </span>
                        <span className="text-sm leading-[19px]">
                          {" "}
                          the moisture absorption, leading to loss of flavor and
                          potential mold growth.
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white rounded-[20px] border-0">
                <CardContent className="p-6 flex items-center gap-4">
                  <img
                    className="w-16 h-[66px]"
                    alt="Icon"
                    src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/rectangle-4668.svg"
                  />
                  <div>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg leading-[18px]">
                      <span className="font-medium leading-[0.1px]">
                        UV LIGHT
                        <br />
                      </span>
                      <span className="text-sm leading-[22px]">
                        accelerating
                      </span>
                      <span className="text-sm leading-[19px]">
                        {" "}
                        the degradation of certain compounds, resulting in a
                        loss of flavor and aroma.
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
              </section>

              <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="relative overflow-hidden rounded-[20px] border-0">
              <img
                className="w-full h-[260px] object-cover"
                alt="Questions"
                src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/mask-group-2.png"
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
                src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/mask-group-3.png"
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
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] py-8">
          <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8">
            <div className="max-w-full lg:max-w-md">
              <img
                className="w-[147px] h-14 mb-4"
                alt="Logo"
                src="/images/logo.svg"
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
                      index === 1
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
        </div>
      </footer>
    </div>
  )
}
