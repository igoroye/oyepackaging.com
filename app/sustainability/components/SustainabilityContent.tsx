'use client'

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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

      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px]">
        <section className="relative w-full h-auto py-8">
          <Card className="relative w-full max-w-[1240px] mx-auto h-[422px] bg-white rounded-[20px] border-0 shadow-none hidden md:block">
            <CardContent className="relative w-full h-full p-0">
              <img
                className="absolute top-[84px] right-[261px] w-[148px] h-16"
                alt="Vector"
                src="https://c.animaapp.com/mkved9hrg5UXzm/img/vector-2.svg"
              />

              <img
                className="absolute top-[99px] left-[870px] w-[79px] h-[31px]"
                alt="Group"
                src="https://c.animaapp.com/mkved9hrg5UXzm/img/group-322.png"
              />

              <div className="absolute top-[65px] right-[246px] w-[46px] h-[46px] bg-white rounded-[23px] border border-solid border-[#7ba0d0]" />
              <div className="absolute top-[76px] right-[255px] w-[26px] text-2xl leading-[normal] whitespace-nowrap [font-family:'Inter',Helvetica] font-medium text-black tracking-[0]">
                🌳
              </div>

              <div className="absolute top-[135px] right-[52px] w-[46px] h-[46px] bg-white rounded-[23px] border border-solid border-[#7ba0d0]" />
              <div className="absolute top-[146px] left-[1161px] w-[26px] text-2xl leading-[normal] whitespace-nowrap [font-family:'Inter',Helvetica] font-medium text-black tracking-[0]">
                ☕
              </div>

              <Badge className="absolute top-[366px] right-7 w-9 h-9 bg-bord rounded-[18px] hover:bg-bord" />

              <img
                className="absolute top-[378px] right-10 w-3 h-3"
                alt="Img"
                src="https://c.animaapp.com/mkved9hrg5UXzm/img/-.svg"
              />

              <img
                className="absolute top-[158px] right-[62px] w-[268px] h-[84px]"
                alt="Vector"
                src="https://c.animaapp.com/mkved9hrg5UXzm/img/vector-6.svg"
              />

              <div className="absolute top-44 right-[111px] w-[195px] [font-family:'Inter',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal]">
                We produce <br />
                packaging in Europe
              </div>

              <div className="absolute top-[311px] right-[110px] w-[195px] [font-family:'Inter',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal]">
                We produce <br />
                packaging in Europe
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="relative w-full mb-8">
          <Card className="rounded-[20px] bg-white border-0 shadow-none overflow-hidden">
            <CardContent className="p-0 relative">
              <div className="px-4 sm:px-8 pt-[30px] pb-[269px]">
                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-2xl sm:text-3xl leading-[39px] text-text tracking-[0] mb-[20px]">
                  SUSTAINABILITY
                </h2>

                <div className="space-y-[20px]">
                  <p className="[font-family:'Inter',Helvetica] font-medium text-text text-base sm:text-lg tracking-[0] leading-[22px] max-w-[730px]">
                    Being a sustainable company is a challenge!
                  </p>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-text text-base sm:text-lg tracking-[0] leading-[22px] max-w-[730px]">
                    You constantly balance responsibilities to employees, customers, and partners while striving to innovate, which is an enormous investment that we need to make.
                  </p>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-text text-base sm:text-lg tracking-[0] leading-[22px] max-w-[730px]">
                    We always remember that the sustainability factor is a path we follow. We prefer to take small steps with complete mindfulness to improve today.
                  </p>
                </div>
              </div>

              <img
                className="absolute bottom-0 left-0 w-full h-[190px] object-cover"
                alt="Mask group"
                src="https://c.animaapp.com/mkved9hrg5UXzm/img/mask-group-1.png"
              />
            </CardContent>
          </Card>
        </section>

        <section className="relative w-full mb-8">
          <Card className="bg-bg-beige border-0 rounded-[20px]">
            <CardContent className="flex flex-col items-center justify-center p-8 min-h-[422px]">
              <div className="[font-family:'Inter',Helvetica] font-semibold text-text text-[26px] text-center tracking-[0] leading-[49px] mb-4">
                90%
              </div>
              <p className="[font-family:'Inter',Helvetica] font-normal text-black text-base sm:text-lg tracking-[0] leading-[22px] text-center max-w-[306px]">
                of renewable energy is used in production, offices, and all company space.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="w-full py-12">
          <div className="max-w-[1248px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white border border-solid border-[#101014] opacity-30 rounded-[20px] h-[422px] overflow-hidden">
                <CardContent className="p-6 h-full">
                  <div className="text-[40px] font-bold text-[#101014] mb-4">80%</div>
                  <p className="text-[12px] text-[#101014] mb-4">
                    of our carbon footprint is caused by our supply chain and logistics
                  </p>
                  <img
                    className="w-full h-auto"
                    alt="Couch"
                    src="https://c.animaapp.com/mkved9hrg5UXzm/img/mask-group.png"
                  />
                </CardContent>
              </Card>

              <Card className="bg-[linear-gradient(23deg,rgba(215,224,238,1)_0%,rgba(15,156,90,1)_100%)] opacity-[0.26] rounded-[20px] h-[422px] overflow-hidden">
                <CardContent className="p-6 h-full">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="w-[157px] h-[157px] bg-white rounded-full border border-solid border-[#101014] flex items-center justify-center mb-6">
                      <img
                        className="w-20 h-20"
                        alt="Cloud tree icon"
                        src="https://c.animaapp.com/mkved9hrg5UXzm/img/ellipse-76-1.svg"
                      />
                    </div>
                    <p className="[font-family:'Inter',Helvetica] font-semibold text-text text-[22px] text-center tracking-[0] leading-8">
                      OFFSET EMISSIONS THROUGH TREE PLANTING AND SOCIAL PROJECTS
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-solid border-[#101014] opacity-30 rounded-[20px] h-[422px] overflow-hidden">
                <CardContent className="p-6 h-full">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="w-[157px] h-[157px] bg-white rounded-full border border-solid border-[#101014] flex items-center justify-center mb-6 relative">
                      <img
                        className="w-20 h-[62px]"
                        alt="Cloud icon"
                        src="https://c.animaapp.com/mkved9hrg5UXzm/img/vector-1.svg"
                      />
                      <img
                        className="absolute w-[23px] h-[26px] mt-[-10px] ml-[36px]"
                        alt="Leaf icon"
                        src="https://c.animaapp.com/mkved9hrg5UXzm/img/vector.svg"
                      />
                    </div>
                    <p className="[font-family:'Inter',Helvetica] font-semibold text-text text-[22px] text-center tracking-[0] leading-8">
                      ONLY USE RAW MATERIALS, PRODUCTION AND OFFICE EQUIPMENT WITH MINIMAL CO2 EMISSIONS
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-bg-gray rounded-[20px] h-[422px] overflow-hidden">
                <CardContent className="p-6 h-full">
                  <div className="flex flex-col h-full">
                    <img
                      className="w-full h-[239px] object-cover rounded-t-[20px] mb-4"
                      alt="Ecology concept"
                      src="https://c.animaapp.com/mkved9hrg5UXzm/img/ecology-concept-with-green-plants-glass-sphere-3d-render-b-1.png"
                    />
                    <p className="[font-family:'Inter',Helvetica] font-semibold text-text text-[22px] text-center tracking-[0] leading-8 px-4">
                      <span className="text-[#101014]">TRAIN EMPLOYEES, CUSTOMERS AND PARTNERS TO BECOME </span>
                      <span className="text-[#249369]">CO2</span>
                      <span className="text-[#101014]">&nbsp;</span>
                      <span className="text-[#264eab]">NEUTRAL</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 text-center">
              <p className="[font-family:'Inter',Helvetica] font-semibold text-text text-[22px] tracking-[0] leading-8">
                COMPANY CARS ARE 100% ELECTRIC
              </p>
            </div>
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
