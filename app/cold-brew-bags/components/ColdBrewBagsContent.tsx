'use client'

import Link from "next/link"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { InteractiveImageAccordion, type AccordionItem } from "@/components/ui/interactive-image-accordion"

const sidebarItems = [
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/vector-18.svg",
    label: "DRIP BAGS",
    isActive: false,
    comingSoon: false,
    href: "/drip-bags",
  },
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/tea-1.svg",
    label: "BREW BAGS",
    isActive: false,
    comingSoon: true,
    href: "/brew-bags",
  },
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/tea-2.svg",
    label: "СOLD BREW BAGS",
    isActive: true,
    comingSoon: true,
    href: "/cold-brew-bags",
  },
]

const features = [
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/coffee--1--1.svg",
    text: "Grinding & filing coffee service",
  },
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/shield-check-1.svg",
    text: "Fully customizable",
  },
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/subscription--1--1.svg",
    text: "Subscription",
  },
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/european-union.svg",
    text: "Made in Europe",
  },
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/mug-hot-alt--2--8.svg",
    text: "Sustainable materials",
  },
]

const howItWorksSteps = [
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/coffee-beans-1.svg",
    title:
      "Provide a description of your coffee profile and specify your preferred weight per filter. Send us 1 kg of coffee for testing.",
  },
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/vector-21.svg",
    title: "We will prepare samples (4 or more options).",
  },
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/coffee-heart-1.svg",
    title:
      "You will receive a sample by mail, cup it, and select your favorite option.",
  },
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/vector.svg",
    title:
      "We will use this choice as a quality reference before moving into production.",
  },
]

const venues = [
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/chair-office-1.svg",
    label: "OFFICES",
    description: "A simple, no-equipment way to enjoy cold brew at work.",
  },
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/house-tree-1.svg",
    label: "TOURIST SHOPS",
  },
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/dorm-room--1--1.svg",
    label: "HOTELS",
  },
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/shopping-cart--3--1.svg",
    label: "ONLINE STORES",
  },
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/gift-1.svg",
    label: "GIFT SHOPS",
  },
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/gift-1-1.svg",
    label: "SUBSCRIPTION BOXES",
  },
]

const coldBrewLocations: AccordionItem[] = [
  {
    id: 1,
    title: 'Gift Shops',
    imageUrl: '/images/cold-brew-bags/gift_shops.webp',
  },
  {
    id: 2,
    title: 'Hotels',
    imageUrl: '/images/cold-brew-bags/hotels.webp',
  },
  {
    id: 3,
    title: 'Offices',
    imageUrl: '/images/cold-brew-bags/offices.webp',
  },
  {
    id: 4,
    title: 'Online Stores',
    imageUrl: '/images/cold-brew-bags/online_stores.webp',
  },
  {
    id: 5,
    title: 'Subscription Boxes',
    imageUrl: '/images/cold-brew-bags/subscription_boxes.webp',
  },
  {
    id: 6,
    title: 'Tourist Shops',
    imageUrl: '/images/cold-brew-bags/turist_shops.webp',
  },
]

const footerSections = [
  {
    title: "PACKAGING",
    links: [
      { text: "Flat Bottom Bags", href: "/flat-bottom-bags" },
      { text: "Carton Boxes", href: "/carton-boxes" },
      { text: "Side Gusset Bags", href: "#" },
      { text: "Standup Bags", href: "/standup-bags" },
    ],
  },
  {
    title: "SERVICES",
    links: [
      { text: "Drip Bags", href: "/drip-bags", opacity: false },
      { text: "Brew Bags", href: "/brew-bags", opacity: true },
      { text: "Cold Brew Bags", href: "/cold-brew-bags", opacity: false },
      { text: "Capsules", href: "#", opacity: true },
    ],
  },
  {
    title: "WIKI",
    links: [
      { text: "ORDERS", href: "#" },
      { text: "Payments and pricing", href: "#" },
      { text: "Delivery", href: "#" },
      { text: "Return & refund policy", href: "#" },
    ],
  },
  {
    title: "ABOUT US",
    links: [
      { text: "Who we are", href: "/about-us" },
      { text: "Contact us", href: "/contact-us" },
      { text: "Sustainability", href: "/sustainability" },
    ],
  },
]

const socialIcons = [
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/telegram--13--1.svg",
    alt: "Telegram",
    isActive: false,
  },
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/facebook-logo-1.svg",
    alt: "Facebook",
    isActive: true,
  },
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/instagram--5--1.svg",
    alt: "Instagram",
    isActive: false,
  },
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/linkedin-1.svg",
    alt: "LinkedIn",
    isActive: false,
  },
  {
    icon: "https://c.animaapp.com/mkvdupvcUy2tgs/img/whatsapp-1.svg",
    alt: "WhatsApp",
    isActive: false,
  },
]

const footerLinks = [
  { text: "PRIVACY POLICY", href: "/privacy-policy" },
  { text: "COOKIES", href: "/cookies" },
  { text: "TERMS & CONDITIONS", href: "/terms-conditions" },
]

export function ColdBrewBagsContent() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />

      <div className="pt-8 px-4 sm:px-6 md:px-12 lg:px-[100px] xl:pt-[132px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col xl:flex-row gap-6">
            <aside className="hidden xl:flex sticky top-[132px] self-start flex-col gap-3 flex-shrink-0">
        {sidebarItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <Card
              className={`w-[294px] h-[88px] cursor-pointer transition-all ${
                item.isActive
                  ? "bg-[#e8eef5] rounded-[20px] border-0 shadow-none"
                  : "bg-white rounded-[20px] border-0 shadow-none hover:bg-gray-50"
              }`}
            >
              <CardContent className="flex items-center gap-4 p-0 h-full px-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    className="w-[31px] h-[31px]"
                    alt={item.label}
                    src={item.icon}
                  />
                </div>
                <div className="flex flex-col">
                  <span
                    className={`[font-family:'Inter',Helvetica] text-lg tracking-[0] leading-[normal] ${
                      item.isActive
                        ? "font-semibold text-main"
                        : "font-medium text-text opacity-40"
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.comingSoon && (
                    <span
                      className={`[font-family:'Inter',Helvetica] font-medium text-[10px] ${
                        item.isActive ? "text-main" : "text-text opacity-40"
                      }`}
                    >
                      COMING SOON
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
            </aside>

            <main className="flex-1 min-w-0">
        <section className="mb-16">
          <img
            className="w-full max-w-[925px] h-[380px] mx-auto object-cover rounded-[20px]"
            alt="Cold brew being poured"
            src="https://c.animaapp.com/mkvdupvcUy2tgs/img/mask-group.png"
          />
        </section>

        <section className="max-w-[925px] mx-auto mb-16">
          <h1 className="[font-family:'Inter',Helvetica] font-semibold text-[#101014] text-3xl md:text-4xl tracking-[-0.60px] leading-[49px] mb-6 text-center">
            COLD BREW BAGS
          </h1>

          <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg leading-[22px] mb-8 text-center">
            Cold brew bags offer a refreshing way to serve your coffee cold.
            Simply send us your beans and receive a product ready for the fridge.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2.5 px-4 py-2 bg-white rounded-[40px] border border-gray-200"
              >
                <img
                  className="w-[22px] h-[22px]"
                  alt={feature.text}
                  src={feature.icon}
                />
                <span className="[font-family:'Inter',Helvetica] font-medium text-text text-base md:text-lg">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Button className="h-auto px-6 py-4 bg-main rounded-[40px] border-2 border-[#264eab] hover:bg-[#1e3d8f] transition-colors">
              <span className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0.48px]">
                CONFIGURE PACKAGING
              </span>
              <img
                className="w-2 h-[13px] ml-2.5"
                alt="Arrow"
                src="https://c.animaapp.com/mkvdupvcUy2tgs/img/vector-1.svg"
              />
            </Button>
            <Button
              variant="outline"
              className="h-auto px-6 py-4 bg-white rounded-[40px] border-2 border-[#264eab] hover:bg-gray-50 transition-colors"
            >
              <span className="[font-family:'Inter',Helvetica] font-medium text-main text-base tracking-[0.48px]">
                TEST YOUR COFFEE
              </span>
            </Button>
          </div>

          <Card className="rounded-[20px] border border-[#101014] opacity-30 mb-12">
            <CardContent className="flex flex-col md:flex-row items-center justify-around gap-6 p-6">
              <div className="flex items-center gap-4">
                <img
                  className="w-7 h-[54px]"
                  alt="MOQ icon"
                  src="https://c.animaapp.com/mkvdupvcUy2tgs/img/vector-4.svg"
                />
                <div>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-text text-lg leading-[29px]">
                    MOQ (MINIMUM ORDER QUANTITY)
                  </p>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-text text-3xl leading-[29px]">
                    1000 PCS
                  </p>
                </div>
              </div>

              <Separator orientation="vertical" className="hidden md:block h-[69px]" />

              <div className="flex items-center gap-4">
                <img
                  className="w-11 h-11"
                  alt="Production time icon"
                  src="https://c.animaapp.com/mkvdupvcUy2tgs/img/picking-box--1--1.svg"
                />
                <div>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-text text-lg text-center leading-[29px]">
                    PRODUCTION TIME FROM
                  </p>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-text text-3xl text-center leading-[29px]">
                    2 WEEKS
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-[925px] mx-auto mb-16">
          <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[-0.60px] leading-[49px] mb-8 text-center">
            СUSTOMIZATION OPTIONS
          </h2>

          <Card className="rounded-[20px] border border-[#101014] opacity-30">
            <CardContent className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
              <div className="flex-1 bg-[#f7f7f8] rounded-[20px] p-6 relative min-h-[300px]">
                <img
                  className="w-[217px] h-[259px] object-cover mx-auto"
                  alt="Cold brew bag"
                  src="https://c.animaapp.com/mkvdupvcUy2tgs/img/1-7503.png"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-center gap-1 px-3 py-2 bg-[#ffffff38] rounded-[60px] border border-white backdrop-blur-sm">
                    <img
                      className="w-[15px] h-[15px]"
                      alt="Hand zoom"
                      src="https://c.animaapp.com/mkvdupvcUy2tgs/img/hand-zoom-in-1.svg"
                    />
                    <span className="[font-family:'Inter',Helvetica] font-normal text-text text-[10px]">
                      HOLD AND ROTATE
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-[22px] leading-[39px] mb-4">
                    COLD BREW BAGS
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-[22px] mb-8">
                    Customize every part of your product
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <div className="bg-[#f7f7f8] rounded-[20px] p-4 flex items-center justify-center">
                      <img
                        className="w-[124px] h-36"
                        alt="Drip packaging"
                        src="https://c.animaapp.com/mkvdupvcUy2tgs/img/3-1.png"
                      />
                    </div>
                    <div className="bg-[#f7f7f8] rounded-[20px] p-4 flex items-center justify-center">
                      <img
                        className="w-[166px] h-[137px] object-cover"
                        alt="Drip box"
                        src="https://c.animaapp.com/mkvdupvcUy2tgs/img/----------2-2.png"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <span className="[font-family:'Inter',Helvetica] font-medium text-black text-sm text-center">
                      DRIP PACKAGING
                    </span>
                    <span className="[font-family:'Inter',Helvetica] font-medium text-black text-sm text-center">
                      DRIP BOX
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-[925px] mx-auto mb-16">
          <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[-0.60px] leading-[49px] mb-8 text-center">
            HOW IT WORKS
          </h2>

          <Card className="rounded-[20px] shadow-[0px_4px_14px_-1px_#00000024]">
            <CardContent className="p-6 md:p-8">
              <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-[22px] leading-[39px] mb-4 text-center">
                4 SIMPLE STEPS TO TEST OUR SERVICE
              </h3>

              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg leading-[22px] mb-8 text-center">
                You have a unique opportunity to test your coffee in cold brew bags
                before launching it
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {howItWorksSteps.map((step, index) => (
                  <Card
                    key={index}
                    className="rounded-[20px] border border-[#101014] opacity-30"
                  >
                    <CardContent className="p-6 flex gap-4">
                      <img
                        className="w-[47px] h-[47px] flex-shrink-0"
                        alt={`Step ${index + 1}`}
                        src={step.icon}
                      />
                      <p className="[font-family:'Inter',Helvetica] font-normal text-black text-sm leading-[22px]">
                        {step.title}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-[1400px] mx-auto mb-16">
          <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[-0.60px] leading-[49px] mb-8 text-center">
            WHERE TO OFFER COLD BREW BAGS?
          </h2>

          <InteractiveImageAccordion items={coldBrewLocations} defaultActiveIndex={2} />
        </section>

        <section className="max-w-[925px] mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="relative rounded-[20px] overflow-hidden">
              <img
                className="w-full h-[260px] object-cover"
                alt="Coffee beans"
                src="https://c.animaapp.com/mkvdupvcUy2tgs/img/mask-group-1.png"
              />
              <CardContent className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/40">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-[22px] text-center leading-8 mb-4">
                  SEND US 1 KG OF YOUR COFFEE
                </h3>
                <Button
                  variant="outline"
                  className="h-auto px-6 py-3 rounded-[40px] border-2 border-white bg-transparent hover:bg-white/10"
                >
                  <span className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0.48px]">
                    REQUEST A TEST
                  </span>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative rounded-[20px] overflow-hidden">
              <img
                className="w-full h-[260px] object-cover"
                alt="Packaging design"
                src="https://c.animaapp.com/mkvdupvcUy2tgs/img/mask-group-2.png"
              />
              <CardContent className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/40">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-[22px] text-center leading-8 mb-4">
                  CONFIGURE PACKAGING
                  <br />
                  FOR YOUR COFFEE
                </h3>
                <Button
                  variant="outline"
                  className="h-auto px-6 py-3 rounded-[40px] border-2 border-white bg-transparent hover:bg-white/10"
                >
                  <span className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0.48px]">
                    CONFIGURE PACKAGING
                  </span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
