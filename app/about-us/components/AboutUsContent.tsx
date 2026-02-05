'use client'

import { HeroSection } from "@/src/routes/AboutUs/screens/sections/HeroSection"
import { ClientStatsSection } from "@/src/routes/AboutUs/screens/sections/ClientStatsSection"
import { CoffeePassionSection } from "@/src/routes/AboutUs/screens/sections/CoffeePassionSection"
import { PackagingOverviewSection } from "@/src/routes/AboutUs/screens/sections/PackagingOverviewSection"
import { ProductionHighlightsSection } from "@/src/routes/AboutUs/screens/sections/ProductionHighlightsSection"
import { ProactiveTeamSection } from "@/src/routes/AboutUs/screens/sections/ProactiveTeamSection"
import { SustainabilitySection } from "@/src/routes/AboutUs/screens/sections/SustainabilitySection"
import { Feature197 } from "@/components/ui/accordion-feature-section"
import Link from "next/link"

const footerLinks = {
  packaging: [
    { label: "Flat Bottom Bags", href: "/flat-bottom-bags" },
    { label: "Carton Boxes", href: "/carton-boxes" },
    { label: "Side Gusset Bags", href: "#" },
    { label: "Standup Bags", href: "/standup-bags" },
  ],
  services: [
    { label: "Drip Bags", href: "/drip-bags" },
    { label: "Brew Bags", href: "/brew-bags", opacity: true },
    { label: "Capsules", href: "#", opacity: true },
  ],
  wiki: [
    { label: "ORDERS", href: "#" },
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

const socialIcons = [
  {
    name: "Telegram",
    src: "https://c.animaapp.com/mkvbxc2okqfhzF/img/telegram--13--1.svg",
    bgClass: "border border-solid border-[#7ba0d0]",
  },
  {
    name: "Facebook",
    src: "https://c.animaapp.com/mkvbxc2okqfhzF/img/facebook-logo-1.svg",
    bgClass: "bg-main",
  },
  {
    name: "Instagram",
    src: "https://c.animaapp.com/mkvbxc2okqfhzF/img/instagram--5--1.svg",
    bgClass: "border border-solid border-[#7ba0d0]",
  },
  {
    name: "LinkedIn",
    src: "https://c.animaapp.com/mkvbxc2okqfhzF/img/linkedin-1.svg",
    bgClass: "border border-solid border-[#7ba0d0]",
  },
  {
    name: "WhatsApp",
    src: "https://c.animaapp.com/mkvbxc2okqfhzF/img/whatsapp-1.svg",
    bgClass: "border border-solid border-[#7ba0d0]",
  },
]

const footerBottomLinks = [
  { label: "PRIVACY POLICY", href: "/privacy-policy" },
  { label: "COOKIES", href: "/cookies" },
  { label: "TERMS & CONDITIONS", href: "/terms-conditions" },
]

const aboutUsFeatures = [
  {
    id: 1,
    title: "DRIVEN BY PURPOSE",
    image: "/images/about-us/driven_by_purpose.webp",
    description:
      "We bring fresh ideas to the packaging world while caring for our beautiful planet.\n\nAs a next-generation packaging company, we're excited to innovate with our flexible solutions and strong commitment to sustainability.",
  },
  {
    id: 2,
    title: "CHASING EXCELLENCE",
    image: "/images/about-us/chasing_excellence.webp",
    description:
      "Our goal is to make packaging simpler and more flexible for coffee roasters, offering quality solutions that fit your needs and values.",
  },
  {
    id: 3,
    title: "PROUDLY EUROPEAN",
    image: "/images/about-us/proudly_european.webp",
    description:
      "Located along the beautiful coast of Baltic Sea, our talented team of over 50 dedicated members works hard every day.\n\nWe strive to reduce our carbon footprint by using renewable energy, sourcing certified materials, and carefully managing waste.",
  },
  {
    id: 4,
    title: "EXPANDING HORIZONS",
    image: "/images/about-us/expanding_horizons.webp",
    description:
      "We proudly uphold European Union values and enjoy collaborating with top European coffee roasters and partners. Soon, we'll be expanding to the UK and USA!",
  },
]

export function AboutUsContent() {
  return (
    <div className="relative w-full bg-[#ffffff] overflow-hidden">
      <img
        className="absolute top-[-39px] right-[-1080px] w-[3621px] h-[1893px] pointer-events-none hidden xl:block"
        alt="Bg"
        src="https://c.animaapp.com/mkvbxc2okqfhzF/img/bg.svg"
      />

      <div className="relative w-full">
        <HeroSection />
      </div>

      <section className="relative w-full px-4 sm:px-6 md:px-12 lg:px-[100px] py-8 md:py-10">
        <h2 className="[font-family:'Inter',Helvetica] font-medium text-text text-2xl sm:text-3xl md:text-[44px] text-center tracking-[0] leading-tight md:leading-[49px] mb-4">
          WE KNOW EVERYTHING
        </h2>
        <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-4xl sm:text-5xl md:text-[80px] text-center tracking-[0] leading-tight md:leading-[99px]">
          ABOUT PACKAGING
        </h1>
      </section>

      <div className="relative w-full">
        <PackagingOverviewSection />
      </div>

      <section className="relative w-full px-4 sm:px-6 md:px-12 lg:px-[100px] py-8 md:py-10">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-2xl sm:text-3xl md:text-[44px] text-center tracking-[0] leading-tight md:leading-[49px]">
          SMART. SUSTAINABLE. SUPERIOR.
        </h2>
      </section>

      <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-6 md:px-12 lg:px-[100px] py-8 md:py-10">
        <div className="relative w-full">
          <ClientStatsSection />
        </div>
        <div className="relative w-full">
          <ProductionHighlightsSection />
        </div>
      </div>

      <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-6 md:px-12 lg:px-[100px] py-8 md:py-10">
        <div className="relative w-full">
          <ProactiveTeamSection />
        </div>
        <div className="relative w-full">
          <SustainabilitySection />
        </div>
      </div>

      <section className="relative w-full px-4 sm:px-6 md:px-12 lg:px-[100px]">
        <Feature197 features={aboutUsFeatures} />
      </section>

      <section className="relative w-full px-4 sm:px-6 md:px-12 lg:px-[100px] py-8 md:py-10">
        <img
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-[20px]"
          alt="Any questions left"
          src="https://c.animaapp.com/mkvbxc2okqfhzF/img/any-questions--left-.png"
        />
      </section>

      <footer className="relative w-full px-4 sm:px-6 md:px-12 lg:px-[100px] py-8 md:py-10 bg-[#ffffff]">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 mb-8 md:mb-10">
          <div className="flex flex-col max-w-full lg:max-w-[402px]">
            <img
              className="w-[120px] sm:w-[147px] h-auto mb-4 md:mb-6"
              alt="Group"
              src="/images/logo.svg"
            />
            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[22px]">
              Say farewell to ordinary packaging and delays - we&apos;ve got your
              back. Explore our diverse services and join us on an exciting
              journey!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            <div>
              <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-base sm:text-lg tracking-[0] leading-6 mb-4">
                PACKAGING
              </h3>
              <ul className="space-y-2">
                {footerLinks.packaging.map((link, index) => (
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

            <div>
              <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-base sm:text-lg tracking-[0] leading-6 mb-4">
                SERVICES
              </h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className={`[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors ${
                          link.opacity ? "opacity-50" : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className={`[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors ${
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

            <div>
              <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-base sm:text-lg tracking-[0] leading-6 mb-4">
                WIKI
              </h3>
              <ul className="space-y-2">
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

            <div>
              <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-base sm:text-lg tracking-[0] leading-6 mb-4">
                ABOUT US
              </h3>
              <ul className="space-y-2">
                {footerLinks.aboutUs.map((link, index) => (
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
          </div>
        </div>

        <div className="w-full h-px bg-[#e5e5e5] mb-4" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <span className="[font-family:'Inter',Helvetica] font-normal text-text text-xs sm:text-sm tracking-[0] leading-[30px]">
              COPYRIGHT © 2024 ÖYE PACKAGING
            </span>
            {footerBottomLinks.map((link, index) => (
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
            {socialIcons.map((icon, index) => (
              <div
                key={index}
                className={`w-10 h-10 rounded-[10px] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity ${icon.bgClass}`}
              >
                <img className="w-5 h-5" alt={icon.name} src={icon.src} />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
