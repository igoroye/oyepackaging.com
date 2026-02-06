'use client'

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const footerLinks = {
  packaging: [
    { label: "Flat Bottom Bags", href: "/flat-bottom-bags" },
    { label: "Standup Bags", href: "/standup-bags" },
    { label: "Carton Boxes", href: "/carton-boxes" },
  ],
  services: [
    { label: "Drip Bags", href: "/drip-bags" },
    { label: "Brew Bags", href: "/brew-bags" },
    { label: "Cold Brew Bags", href: "/cold-brew-bags" },
  ],
  wiki: [
    { label: "Orders", href: "#" },
    { label: "Payments and pricing", href: "#" },
    { label: "Delivery", href: "#" },
    { label: "Return & refund policy", href: "#" },
  ],
  aboutUs: [
    { label: "Who we are", href: "/about-us" },
    { label: "Contact us", href: "/contact-us" },
    { label: "Sustainability", href: "/sustainability" },
  ],
}

const socialLinks = [
  {
    icon: "https://c.animaapp.com/mkved9hrg5UXzm/img/telegram--13--1.svg",
    alt: "Telegram",
    href: "#",
  },
  {
    icon: "https://c.animaapp.com/mkved9hrg5UXzm/img/facebook-logo-1.svg",
    alt: "Facebook",
    href: "#",
    active: true,
  },
  {
    icon: "https://c.animaapp.com/mkved9hrg5UXzm/img/linkedin-1.svg",
    alt: "LinkedIn",
    href: "#",
  },
  {
    icon: "https://c.animaapp.com/mkved9hrg5UXzm/img/instagram--5--1.svg",
    alt: "Instagram",
    href: "#",
  },
  {
    icon: "https://c.animaapp.com/mkved9hrg5UXzm/img/whatsapp-1.svg",
    alt: "WhatsApp",
    href: "#",
  },
]

const legalLinks = [
  { label: "PRIVACY POLICY", href: "/privacy-policy" },
  { label: "COOKIES", href: "/cookies" },
  { label: "TERMS & CONDITIONS", href: "/terms-conditions" },
]

export function SustainabilityContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative w-full bg-white overflow-hidden">
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
              href="/flat-bottom-bags"
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
                href="/flat-bottom-bags"
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

      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px]">
        <section className="relative w-full py-12 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#7ba0d0] bg-white flex items-center justify-center">
              <span className="text-3xl sm:text-4xl">🌱</span>
            </div>
            <div>
              <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-tight mb-4">
                INNOVATING FOR
                <br />
                A SUSTAINABLE TOMORROW
              </h1>
              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-base sm:text-lg tracking-[0] leading-relaxed max-w-2xl mx-auto">
                We love packaging, are dedicated to innovation, and are committed to a sustainable
                <br />
                future in packaging!
              </p>
            </div>
          </div>
        </section>

        <section className="relative w-full py-8 mb-8">
          <div className="bg-bg-beige rounded-[20px] p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-main text-2xl sm:text-3xl md:text-4xl tracking-[0] leading-tight mb-4">
                  ÖYE PACKAGING <span className="text-text">IS</span>
                  <br />
                  <span className="text-text">MORE THAN A COMPANY</span>
                </h2>
                <p className="[font-family:'Inter',Helvetica] font-normal text-text text-base sm:text-lg tracking-[0] leading-relaxed">
                  We build an eco-system that can bring many
                  <br />
                  people together to build a better future.
                </p>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative">
                  <img
                    className="w-full max-w-[300px] sm:max-w-[400px] h-auto"
                    alt="Earth globe"
                    src="https://c.animaapp.com/mkved9hrg5UXzm/img/group-323.png"
                  />
                  <div className="absolute top-8 right-4 sm:top-12 sm:right-8">
                    <div className="bg-main rounded-[20px] px-4 py-3 sm:px-6 sm:py-4 shadow-lg">
                      <p className="[font-family:'Inter',Helvetica] font-medium text-white text-xs sm:text-sm tracking-[0] leading-tight">
                        We produce
                        <br />
                        packaging in Europe
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-32 right-8 sm:top-40 sm:right-12 w-10 h-10 sm:w-12 sm:h-12 bg-bord rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full py-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="rounded-[20px] bg-white border-0 shadow-none overflow-hidden">
              <CardContent className="p-0 relative min-h-[400px]">
                <div className="px-6 sm:px-8 pt-8 pb-48">
                  <h2 className="[font-family:'Inter',Helvetica] font-semibold text-2xl sm:text-3xl leading-tight text-text tracking-[0] mb-6">
                    SUSTAINABILITY
                  </h2>

                  <div className="space-y-4">
                    <p className="[font-family:'Inter',Helvetica] font-medium text-text text-base sm:text-lg tracking-[0] leading-relaxed">
                      Being a sustainable company is a challenge!
                    </p>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-text text-base tracking-[0] leading-relaxed">
                      You constantly balance responsibilities to employees, customers, and partners while striving to innovate, which is an enormous investment that we need to make.
                    </p>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-text text-base tracking-[0] leading-relaxed">
                      We always remember that the sustainability factor is a path we follow. We prefer to take small steps with complete mindfulness to improve today.
                    </p>
                  </div>
                </div>

                <img
                  className="absolute bottom-0 left-0 w-full h-48 object-cover"
                  alt="ÖYE Packaging"
                  src="https://c.animaapp.com/mkved9hrg5UXzm/img/mask-group-1.png"
                />
              </CardContent>
            </Card>

            <Card className="rounded-[20px] bg-bg-beige border-0 shadow-none">
              <CardContent className="p-6 sm:p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px]">
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
                    <span className="text-6xl sm:text-7xl">🌿</span>
                  </div>
                  <p className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg sm:text-xl md:text-2xl tracking-[0] leading-tight max-w-md">
                    WE DO NOT FOLLOW WOW TRENDS AND ARE FIGHTING AGAINST GREENWASHING
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="relative w-full py-12">
          <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl sm:text-4xl tracking-[0] leading-tight text-center mb-12">
            OUR WAYS MEAN
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 flex items-center justify-center">
                <span className="text-5xl">🐻</span>
              </div>
              <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg sm:text-xl tracking-[0] leading-tight">
                PEOPLE AND INITIATIVE
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-relaxed max-w-xs">
                Great results come from people who are ready to bring their ideas and improve the way we do things, and every initiative that makes our company better, more sustainable is always welcome!
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 flex items-center justify-center">
                <span className="text-5xl">📦</span>
              </div>
              <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg sm:text-xl tracking-[0] leading-tight">
                MATERIALS
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-relaxed max-w-xs">
                We source materials exclusively from reliable, certified, and traceable sources. Our goal is to be transparent with customers and guide and educate them in this field so that they can find solutions that work specifically in each country.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 flex items-center justify-center">
                <span className="text-5xl">🗑️</span>
              </div>
              <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg sm:text-xl tracking-[0] leading-tight">
                WASTE MANAGEMENT
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-relaxed max-w-xs">
                We follow a strategy of minimal waste in production and constantly improve it. Our ultimate goal is to reach 5% waste by 2030.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 flex items-center justify-center">
                <span className="text-5xl">☁️</span>
              </div>
              <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg sm:text-xl tracking-[0] leading-tight">
                CO2 NEUTRAL
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-relaxed max-w-xs">
                Our company strives to balance the amount of carbon dioxide we emit and the amount we remove from the atmosphere.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 flex items-center justify-center">
                <span className="text-5xl">🌱</span>
              </div>
              <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg sm:text-xl tracking-[0] leading-tight">
                FULL TRANSPARENCY
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-relaxed max-w-xs">
                Being transparent means being honest and open about our processes, decisions, and their impacts. We believe in sharing the full story behind our production, from material sourcing to waste management and emissions. Transparency helps build trust and accountability, inspiring others to join us on the path toward sustainability.
              </p>
            </div>
          </div>
        </section>

        <section className="relative w-full py-12 mb-12">
          <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl sm:text-4xl tracking-[0] leading-tight text-center mb-12">
            OUR SCOPE OF FOCUS TILL 2030
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-bg-beige border-0 rounded-[20px]">
              <CardContent className="p-8 flex flex-col items-start justify-between min-h-[350px]">
                <div>
                  <div className="[font-family:'Inter',Helvetica] font-bold text-text text-5xl tracking-[0] leading-tight mb-4">
                    90%
                  </div>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-text text-base tracking-[0] leading-relaxed max-w-xs">
                    of renewable energy is used in production, offices, and all company space.
                  </p>
                </div>
                <img
                  className="w-full max-w-[300px] h-auto mt-6"
                  alt="Renewable energy"
                  src="https://c.animaapp.com/mkved9hrg5UXzm/img/mask-group.png"
                />
              </CardContent>
            </Card>

            <Card className="bg-[#d7e0ee] border-0 rounded-[20px]">
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[350px] text-center">
                <div className="w-32 h-32 rounded-full border-2 border-text flex items-center justify-center mb-6 bg-white">
                  <span className="text-6xl">🌳</span>
                </div>
                <p className="[font-family:'Inter',Helvetica] font-semibold text-text text-xl tracking-[0] leading-tight">
                  OFFSET EMISSIONS
                  <br />
                  THROUGH TREE PLANTING
                  <br />
                  AND SOCIAL PROJECTS
                </p>
              </CardContent>
            </Card>

            <Card className="bg-bg-beige border-0 rounded-[20px]">
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[350px] text-center">
                <div className="w-32 h-32 rounded-full border-2 border-text flex items-center justify-center mb-6 bg-white">
                  <span className="text-6xl">☁️</span>
                </div>
                <p className="[font-family:'Inter',Helvetica] font-semibold text-text text-xl tracking-[0] leading-tight max-w-md">
                  ONLY USE RAW MATERIALS, PRODUCTION AND OFFICE EQUIPMENT WITH MINIMAL CO2 EMISSIONS
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 rounded-[20px] overflow-hidden">
              <CardContent className="p-0 flex flex-col min-h-[350px]">
                <img
                  className="w-full h-48 object-cover"
                  alt="Electric car"
                  src="https://c.animaapp.com/mkved9hrg5UXzm/img/ecology-concept-with-green-plants-glass-sphere-3d-render-b-1.png"
                />
                <div className="p-8 flex flex-col items-center justify-center flex-1 text-center">
                  <p className="[font-family:'Inter',Helvetica] font-semibold text-text text-xl tracking-[0] leading-tight">
                    TRAIN EMPLOYEES,
                    <br />
                    CUSTOMERS AND PARTNERS
                    <br />
                    TO BECOME <span className="text-[#249369]">CO2</span> <span className="text-main">NEUTRAL</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Card className="bg-bg-gray border-0 rounded-[20px] inline-block">
              <CardContent className="p-8">
                <p className="[font-family:'Inter',Helvetica] font-semibold text-text text-2xl tracking-[0] leading-tight">
                  COMPANY CARS ARE 100% ELECTRIC
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="relative w-full px-4 sm:px-6 md:px-12 lg:px-[100px] py-8 md:py-12 bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 mb-8 md:mb-12">
            <div className="flex flex-col gap-4 max-w-full lg:max-w-[402px]">
              <img
                className="w-[120px] sm:w-[147px] h-auto"
                alt="ÖYE Packaging Logo"
                src="/images/logo.svg"
              />
              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[22px]">
                Say farewell to ordinary packaging and delays - we&apos;ve got your
                back. Explore our diverse services and join us on an exciting
                journey!
              </p>
            </div>

            <nav className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
              <div className="flex flex-col gap-4">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-base sm:text-lg tracking-[0] leading-6">
                  PACKAGING
                </h3>
                <ul className="flex flex-col gap-2">
                  {footerLinks.packaging.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-base sm:text-lg tracking-[0] leading-6">
                  SERVICES
                </h3>
                <ul className="flex flex-col gap-2">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-base sm:text-lg tracking-[0] leading-6">
                  WIKI
                </h3>
                <ul className="flex flex-col gap-2">
                  {footerLinks.wiki.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-base sm:text-lg tracking-[0] leading-6">
                  ABOUT US
                </h3>
                <ul className="flex flex-col gap-2">
                  {footerLinks.aboutUs.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          <div className="w-full h-px bg-[#e5e5e5] mb-4" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-xs sm:text-sm tracking-[0] leading-[30px] text-center md:text-left">
              COPYRIGHT © 2025 ÖYE PACKAGING
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="[font-family:'Inter',Helvetica] font-medium text-text text-xs sm:text-sm tracking-[0] leading-[30px] hover:text-main transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2.5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors ${
                    social.active
                      ? "bg-main"
                      : "border border-solid border-[#7ba0d0] hover:bg-[#7ba0d0]"
                  }`}
                >
                  <img className="w-5 h-5" alt={social.alt} src={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
