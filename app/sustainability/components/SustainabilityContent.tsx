'use client'

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SustainabilityHero } from "./SustainabilityHero"
import { PackagingIntroCard } from "./PackagingIntroCard"
import { SustainabilityInfoCards } from "./SustainabilityInfoCards"
import { WaysWeMeanSection } from "./WaysWeMeanSection"
import { ScopeOfFocusSection } from "./ScopeOfFocusSection"

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
                className="[font-family:'Inter',Helvetica] font-medium text-text text-lg hover:text-main transition-colors text-left py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                PRODUCTS
              </Link>
              <Link
                href="/drip-bags"
                className="[font-family:'Inter',Helvetica] font-medium text-text text-lg hover:text-main transition-colors text-left py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                SERVICES
              </Link>
              <div className="flex flex-col gap-3 mt-4">
                <Button
                  variant="outline"
                  className="h-auto px-6 py-3 bg-white rounded-[40px] border-2 border-[#264eab] hover:bg-gray-50 transition-colors w-full"
                >
                  <span className="[font-family:'Inter',Helvetica] font-medium text-main text-base tracking-[0.54px]">
                    CONFIGURE PACKAGING
                  </span>
                </Button>
                <Button className="h-auto px-6 py-3 bg-main rounded-[40px] border-2 border-[#264eab] hover:bg-[#1e3d8f] transition-colors w-full">
                  <span className="text-white text-base tracking-[0.54px] [font-family:'Inter',Helvetica] font-medium">
                    SIGN IN
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <SustainabilityHero />
          <PackagingIntroCard />
          <SustainabilityInfoCards />
          <WaysWeMeanSection />
          <ScopeOfFocusSection />
        </div>
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
              {Object.entries(footerLinks).map(([key, links]) => (
                <div key={key} className="flex flex-col gap-4">
                  <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-base sm:text-lg tracking-[0] leading-6">
                    {key === 'aboutUs' ? 'ABOUT US' : key.toUpperCase()}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {links.map((link, index) => (
                      <li key={index}>
                        {link.href.startsWith('/') ? (
                          <Link
                            href={link.href}
                            className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors"
                          >
                            {link.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="w-full h-px bg-[#e5e5e5] mb-4" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-xs sm:text-sm tracking-[0] leading-[30px] text-center md:text-left">
              COPYRIGHT &copy; 2026 &Ouml;YE PACKAGING
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
