'use client'

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const footerColumns = [
  {
    title: "PACKAGING",
    links: [
      { label: "Flat Bottom Bags", href: "/flat-bottom-bags", opacity: false },
      { label: "Carton Boxes", href: "/carton-boxes", opacity: false },
      { label: "Side Gusset Bags", href: "#", opacity: false },
      { label: "Standup Bags", href: "/standup-bags", opacity: false },
    ],
  },
  {
    title: "SERVICES",
    links: [
      { label: "Drip Bags", href: "/drip-bags", opacity: false },
      { label: "Brew Bags", href: "/brew-bags", opacity: true },
      { label: "Capsules", href: "#", opacity: true },
    ],
  },
  {
    title: "WIKI",
    links: [
      { label: "ORDERS", href: "#", opacity: false },
      { label: "Payments and pricing", href: "#", opacity: false },
      { label: "Delivery", href: "#", opacity: false },
      { label: "Return & refund policy", href: "#", opacity: false },
    ],
  },
  {
    title: "ABOUT US",
    links: [
      { label: "Who we are", href: "/about-us", opacity: false },
      { label: "Contact us", href: "/contact-us", opacity: false },
      { label: "Sustainability", href: "/sustainability", opacity: false },
    ],
  },
]

const socialIcons = [
  {
    alt: "Telegram",
    src: "https://c.animaapp.com/mkveyannrOLJuY/img/telegram--13--1.svg",
    active: false,
  },
  {
    alt: "Facebook logo",
    src: "https://c.animaapp.com/mkveyannrOLJuY/img/facebook-logo-1.svg",
    active: true,
  },
  {
    alt: "Instagram",
    src: "https://c.animaapp.com/mkveyannrOLJuY/img/instagram--5--1.svg",
    active: false,
  },
  {
    alt: "Linkedin",
    src: "https://c.animaapp.com/mkveyannrOLJuY/img/linkedin-1.svg",
    active: false,
  },
  {
    alt: "Whatsapp",
    src: "https://c.animaapp.com/mkveyannrOLJuY/img/whatsapp-1.svg",
    active: false,
  },
]

const navigationLinks = [
  { label: "PRODUCTS", href: "/products" },
  { label: "SERVICES", href: "/services" }
]

export function CookiePolicyContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <header className="w-full bg-transparent py-4 md:py-6 relative z-50">
        <nav className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] flex items-center justify-between">
          <Link href="/">
            <img
              className="w-[100px] sm:w-[125px] h-auto cursor-pointer"
              alt="ÖYE Logo"
              src="/images/logo.svg"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-[normal] hover:text-main transition-colors"
              >
                {link.label}
              </Link>
            ))}
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
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-[normal] hover:text-main transition-colors text-left py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
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

      <main className="w-full flex flex-col">
        <section className="w-full flex flex-col items-center py-10">
          <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-[44px] text-center tracking-[0] leading-[49px] whitespace-nowrap">
            COOKIE POLICY
          </h1>
        </section>

        <div className="w-full max-w-[916px] mx-auto px-4 mb-8">
          <p className="text-text text-[22px] text-center leading-8 [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            <span className="text-[#101014]">ÖYE Packaging OÜ website </span>
            <span className="text-[#264eab]">oyepackaging.com </span>
            <span className="text-[#101014]">or </span>
            <span className="text-[#264eab]">www.oyepackaging.com</span>
            <span className="text-[#101014]"> uses &quot;cookies&quot;. ÖYE Packaging OÜ makes use of a consent management platform (CMP)</span>
          </p>
        </div>

        <section className="w-full flex justify-center px-4 mb-10">
          <p className="max-w-[916px] [font-family:'Inter',Helvetica] font-normal text-text text-[22px] text-center tracking-[0] leading-8">
            Cookiebot by Usercentrics to process cookies on ÖYE Packaging OÜ website.
            <br />
            Cookiebot CMP is a self-serve cloud-based service provided by Usercentrics. It enables automated compliance with global data privacy laws like the EU&apos;s GDPR, California&apos;s CCPA/CPRA, Brazil&apos;s LGPD, and many others.
          </p>
        </section>

        <section className="flex flex-col w-full max-w-[1030px] mx-auto items-start gap-[30px] relative px-4">
          <Separator className="w-full" />

          <div className="flex flex-col w-full items-start gap-5">
            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
              WHAT IS A COOKIE?
            </h2>

            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              A cookie is a small text file that is stored on your computer or mobile device. These files are used to record information on how you have used the ÖYE Packaging OÜ website, for example, when was the last time you visited the ÖYE Packaging OÜ website and the type of information you have checked therein. The text files can only be read by the ÖYE Packaging OÜ website, and no one else has access to these files. This text file is harmless, and it has no viruses or malicious software, as well as it cannot be tracked back to a particular user or IP address.
            </p>
          </div>

          <Separator className="w-full" />
        </section>

        <section className="flex flex-col w-full max-w-[1030px] mx-auto items-start gap-[30px] relative px-4">
          <Separator className="w-full" />

          <div className="flex flex-col w-full items-start gap-5">
            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
              WHAT DO WE USE COOKIES FOR?
            </h2>

            <p className="w-full text-text text-lg leading-[22px] [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              • ÖYE Packaging OÜ uses cookies for the purpose of improving your experience as a visitor, as well as to receive data and insights that may be helpful for the ÖYE Packaging OÜ in order to ensure that our website operates to give you the best possible experience and improve our services.
            </p>

            <p className="w-full text-text text-lg leading-[22px] [font-family:'Inter',Helvetica] font-normal tracking-[0]">
              • ÖYE Packaging OÜ may share cookies with ÖYE Packaging OÜ social profiles, advertising, and analytical applications, and they may combine these cookies with other information you have provided to them or that was collected during your use of their services.
            </p>
          </div>

          <Separator className="w-full" />
        </section>

        <section className="flex flex-col w-full max-w-[1030px] mx-auto items-start gap-[30px] relative px-4">
          <Separator className="w-full" />

          <div className="flex flex-col w-full items-start gap-5">
            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
              WHAT TYPE OF COOKIES DO WE USE?
            </h2>

            <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              <span className="font-medium">• Essential Cookies:</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]"> These cookies are necessary for the website to work properly. These include basic functions such as website navigation or providing restricted access.</span>
            </p>

            <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              <span className="font-medium">• Preference Cookies:</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]"> These cookies are intended to recall details about how a website appears to suit the needs of a particular visitor. For example, the preferred language or region.</span>
            </p>

            <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              <span className="font-medium">• Analytics Cookies:</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]"> These cookies help ÖYE Packaging OÜ to understand how visitors of the website interact with the website by collecting and transmitting information anonymously. The information that is kept in these types of cookies cannot be associated with any specific person/visitor.</span>
            </p>

            <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              <span className="font-medium text-[#101014]">Cookie type:</span>
              <span className="text-[#101014]">&nbsp;</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]">Google Analytics</span>
            </p>

            <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              <span className="font-medium text-[#101014]">Description:</span>
              <span className="text-[#101014]">&nbsp;</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]">For the purpose of enhancing a website&apos;s navigation and appearance, Google Analytics gathers statistical data from analytical cookies. In order for ÖYE Packaging OÜ to better understand visitors of the website, Google supplements the aggregate data with demographics and interest information.</span>
            </p>

            <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              <span className="font-medium text-[#101014]">How to manage cookies:</span>
              <span className="text-[#101014]">&nbsp;</span>
              <span className="text-[#264eab]">Google Analytics Opt-out</span>
            </p>

            <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              <span className="font-medium">• Marketing Cookies:</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]"> These cookies track website visitors&apos; actions throughout the website in order to display personalized offers and advertisements.</span>
            </p>

            <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              <span className="font-medium">Cookie type:</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]"> Advertising </span>
              <span className="font-medium">Description:</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]"> Deliver behavioral/targeted advertising </span>
              <span className="font-medium">How to manage cookies: </span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]">Accept/refuse via browser setting</span>
            </p>

            <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              <span className="font-medium">Cookie type:</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]"> Market analysis </span>
              <span className="font-medium">Description:</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]"> Conduct market analysis </span>
              <span className="font-medium">How to manage cookies:</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]"> Accept/refuse via browser setting</span>
            </p>

            <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              <span className="font-medium">Cookie type:</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]"> Campaign/promotion </span>
              <span className="font-medium">Description:</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]"> Measure the effectiveness of the campaign </span>
              <span className="font-medium">How to manage cookies:</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]"> Accept/refuse via browser setting</span>
            </p>

            <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              <span className="font-medium">Cookie type:</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]"> Fraud detection </span>
              <span className="font-medium">Description:</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]"> Detect click fraud </span>
              <span className="font-medium">How to manage cookies:</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]"> Accept/refuse via browser setting</span>
            </p>

            <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]">•</span>
              <span className="font-medium"> Uncategorized Cookies</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]">: These cookies are cookies that are in the process of being categorized.</span>
            </p>
          </div>

          <Separator className="w-full" />
        </section>

        <section className="flex flex-col w-full max-w-[1030px] mx-auto items-start gap-[30px] relative px-4">
          <Separator className="w-full" />

          <div className="flex flex-col w-full items-start gap-5">
            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
              ACCEPTANCE OF COOKIES
            </h2>

            <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              • When visiting the ÖYE Packaging OÜ website, a window notifying the visitor that cookies are used on the website appears. If the visitor clicks on the button &quot;I agree&quot;, it means that the visitor accepts all cookies on the website and confirms that the visitor is aware of cookies and the purposes of their use.
            </p>

            <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              • The visitors&apos; consent is not required in the case of essential cookies due to the fact that essential cookies ensure a complete and continuous display of the ÖYE Packaging OÜ website content so that the visitor may have a compatible online surfing and digital browsing experience.
            </p>
          </div>

          <Separator className="w-full" />
        </section>

        <section className="flex flex-col w-full max-w-[1030px] mx-auto items-start gap-[30px] relative px-4">
          <Separator className="w-full" />

          <div className="flex flex-col w-full items-start gap-5 relative">
            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
              REJECTION OF COOKIES
            </h2>

            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              If the visitor does not want analytical cookies to be used on the visitor&apos;s device when visiting the ÖYE Packaging OÜ website, the visitor must click on the button &quot;I do not agree&quot; in the displayed box that warns about the fact that cookies are used on the ÖYE Packaging OÜ website.
            </p>
          </div>

          <Separator className="w-full" />
        </section>

        <section className="flex flex-col w-full max-w-[1030px] mx-auto items-start gap-[30px] px-4">
          <Separator className="w-full" />

          <div className="flex flex-col w-full items-start gap-5">
            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
              WITHDRAWAL OF ACCEPTANCE
            </h2>

            <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              • The visitor has the right to decide at any point whether to accept or reject the use of the analytical cookies by the ÖYE Packaging OÜ. The visitor may not refuse the use of essential cookies by the ÖYE Packaging OÜ.
            </p>

            <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              • The visitor has the right to accept or withdraw previously given visitors&apos; consent to analytical cookies by clicking on the relevant button of the displayed box.
            </p>
          </div>

          <Separator className="w-full" />
        </section>

        <section className="flex flex-col w-full max-w-[1030px] mx-auto items-start gap-[30px] relative px-4 mb-8">
          <Separator className="w-full" />

          <div className="flex flex-col w-full items-start gap-5">
            <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
              CHANGES AND UPDATES TO THIS COOKIE POLICY
            </h2>

            <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              • If you have questions about the processing of personal data or this Cookie Policy, please contact ÖYE Packaging at <span className="text-[#264eab]">hello@oyepackaging.com</span>.
            </p>

            <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
              • ÖYE Packaging may update this Cookie Policy from time to time. Our currently enforced Cookie Policy may be accessed through ÖYE Packaging OÜ.
            </p>
          </div>

          <Separator className="w-full" />
        </section>
      </main>

      <footer className="w-full flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-[98px] py-8 mt-auto">
        <div className="w-full max-w-[1244px] flex flex-col gap-6">
          <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
            <div className="flex flex-col gap-6 max-w-full lg:max-w-[402px]">
              <img
                className="w-[147px] h-14"
                alt="ÖYE Packaging Logo"
                src="/images/logo.svg"
              />
              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[22px]">
                Say farewell to ordinary packaging and delays - we&apos;ve got your back. Explore our diverse services and join us on an exciting journey!
              </p>
            </div>

            <nav className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-[100px]">
              {footerColumns.map((column, index) => (
                <div key={`footer-column-${index}`} className="flex flex-col gap-[10px]">
                  <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg tracking-[0] leading-6 whitespace-nowrap">
                    {column.title}
                  </h3>
                  <ul className="flex flex-col gap-1">
                    {column.links.map((link, linkIndex) => (
                      <li key={`footer-link-${index}-${linkIndex}`}>
                        <Link
                          href={link.href}
                          className={`[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 whitespace-nowrap hover:text-main transition-colors ${link.opacity ? "opacity-50" : ""}`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <Separator className="w-full" />

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[30px] whitespace-nowrap">
                COPYRIGHT © 2024 ÖYE PACKAGING
              </p>
              <Link
                href="/privacy-policy"
                className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[30px] whitespace-nowrap hover:text-main transition-colors"
              >
                PRIVACY POLICY
              </Link>
              <Link
                href="/cookies"
                className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[30px] whitespace-nowrap hover:text-main transition-colors"
              >
                COOKIES
              </Link>
              <Link
                href="/terms-conditions"
                className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[30px] whitespace-nowrap hover:text-main transition-colors"
              >
                TERMS &amp; CONDITIONS
              </Link>
            </div>

            <div className="flex gap-[10px]">
              {socialIcons.map((icon, index) => (
                <a
                  key={`social-icon-${index}`}
                  href="#"
                  className={`w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors ${icon.active ? "bg-main" : "border border-solid border-[#7ba0d0] hover:bg-gray-50"}`}
                >
                  <img className="w-5 h-5" alt={icon.alt} src={icon.src} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
