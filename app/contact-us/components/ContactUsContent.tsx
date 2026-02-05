'use client'

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const footerLinks = {
  packaging: [
    { label: "Flat Bottom Bags", href: "/flat-bottom-bags" },
    { label: "Carton Boxes", href: "/carton-boxes" },
    { label: "Side Gusset Bags", href: "#" },
    { label: "Standup Bags", href: "/standup-bags" },
  ],
  services: [
    { label: "Drip Bags", href: "/drip-bags", opacity: false },
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
    src: "https://c.animaapp.com/mkvehh2nHV8P1S/img/telegram--13--1.svg",
    alt: "Telegram",
  },
  {
    src: "https://c.animaapp.com/mkvehh2nHV8P1S/img/facebook-logo-1.svg",
    alt: "Facebook logo",
    active: true,
  },
  {
    src: "https://c.animaapp.com/mkvehh2nHV8P1S/img/instagram--5--1.svg",
    alt: "Instagram",
  },
  {
    src: "https://c.animaapp.com/mkvehh2nHV8P1S/img/linkedin-1.svg",
    alt: "Linkedin",
  },
  {
    src: "https://c.animaapp.com/mkvehh2nHV8P1S/img/whatsapp-1.svg",
    alt: "Whatsapp",
  },
]

const legalLinks = [
  { label: "PRIVACY POLICY", href: "/privacy-policy" },
  { label: "COOKIES", href: "/cookies" },
  { label: "TERMS & CONDITIONS", href: "/terms-conditions" },
]

export function ContactUsContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    consent: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <header className="w-full bg-transparent py-4 md:py-6 relative z-50">
        <nav className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] flex items-center justify-between">
          <Link href="/">
            <img
              className="w-[100px] sm:w-[125px] h-auto cursor-pointer"
              alt="ÖYE Logo"
              src="https://c.animaapp.com/mkvehh2nHV8P1S/img/group-239.png"
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

      <main className="relative w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative">
              <div className="w-full max-w-[600px]">
                <div className="mb-8">
                  <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl md:text-[44px] tracking-[0] leading-tight md:leading-[49px] mb-4">
                    CONTACT US
                  </h1>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    Have questions about our packaging solutions? We&apos;re here to help! Fill out the form below and our team will get back to you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[18px] mb-2 block">
                        First Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="h-12 rounded-[10px] border border-[#e5e5e5] px-4"
                        required
                      />
                    </div>
                    <div>
                      <label className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[18px] mb-2 block">
                        Last Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="h-12 rounded-[10px] border border-[#e5e5e5] px-4"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[18px] mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="h-12 rounded-[10px] border border-[#e5e5e5] px-4"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[18px] mb-2 block">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="h-12 rounded-[10px] border border-[#e5e5e5] px-4"
                      />
                    </div>
                    <div>
                      <label className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[18px] mb-2 block">
                        Company
                      </label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="h-12 rounded-[10px] border border-[#e5e5e5] px-4"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[18px] mb-2 block">
                      Subject *
                    </label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger className="h-12 rounded-[10px] border border-[#e5e5e5] px-4">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="packaging">Packaging Solutions</SelectItem>
                        <SelectItem value="pricing">Pricing Information</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[18px] mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="min-h-[120px] rounded-[10px] border border-[#e5e5e5] px-4 py-3 resize-none"
                      placeholder="Tell us about your packaging needs..."
                      required
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                      className="mt-1"
                      required
                    />
                    <label htmlFor="consent" className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[18px] cursor-pointer">
                      <span className="text-[#101014]">
                        I consent to processing of my personal data in accordance with ÖYE! Packaging{" "}
                      </span>
                      <Link href="/privacy-policy" className="font-semibold text-[#264eab] cursor-pointer hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="h-auto px-8 py-4 bg-main rounded-[40px] border-2 border-[#264eab] hover:bg-[#1e3d8f] transition-colors w-full md:w-auto"
                  >
                    <span className="text-white text-lg tracking-[0.54px] [font-family:'Inter',Helvetica] font-medium leading-[normal]">
                      SEND MESSAGE
                    </span>
                  </Button>
                </form>
              </div>
            </div>

            <div className="relative">
              <img
                className="w-full h-auto max-w-[638px] object-cover"
                alt="Mask group"
                src="https://c.animaapp.com/mkvehh2nHV8P1S/img/mask-group.png"
              />

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-[22px] tracking-[0] leading-[39px] mb-4">
                    ADDRESS
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    Valukoja tn 8/2,
                    <br />
                    11415, Tallinn, Estonia
                  </p>
                </div>

                <div>
                  <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-[22px] tracking-[0] leading-[39px] mb-4">
                    CONTACT US
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    +31 970 1028 0877
                    <br />
                    hello@oyepackaging.com
                  </p>
                </div>
              </div>

              <img
                className="absolute top-[-3px] right-0 w-[210px] h-[287px] object-cover"
                alt="Element"
                src="https://c.animaapp.com/mkvehh2nHV8P1S/img/----------1-11.png"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="relative w-full bg-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            <div>
              <img
                className="w-[147px] h-14 mb-4"
                alt="Group"
                src="https://c.animaapp.com/mkvehh2nHV8P1S/img/group-247.png"
              />
              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[22px]">
                Say farewell to ordinary packaging and delays - we&apos;ve got your
                back. Explore our diverse services and join us on an exciting
                journey!
              </p>
            </div>

            <div>
              <h4 className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg tracking-[0] leading-6 mb-4">
                PACKAGING
              </h4>
              <nav className="flex flex-col gap-2">
                {footerLinks.packaging.map((link, index) => (
                  <div key={index}>
                    <Link
                      href={link.href}
                      className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors"
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg tracking-[0] leading-6 mb-4">
                SERVICES
              </h4>
              <nav className="flex flex-col gap-2">
                {footerLinks.services.map((link, index) => (
                  <div key={index}>
                    <Link
                      href={link.href}
                      className={`[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors ${link.opacity ? "opacity-50" : ""}`}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg tracking-[0] leading-6 mb-4">
                WIKI
              </h4>
              <nav className="flex flex-col gap-2">
                {footerLinks.wiki.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg tracking-[0] leading-6 mb-4">
                ABOUT US
              </h4>
              <nav className="flex flex-col gap-2">
                {footerLinks.aboutUs.map((link, index) => (
                  <div key={index}>
                    <Link
                      href={link.href}
                      className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors"
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          <div className="relative mb-4">
            <div className="w-full h-px bg-[#e5e5e5]" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[30px]">
                COPYRIGHT © 2024 ÖYE PACKAGING
              </p>
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[30px] hover:text-main transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2.5">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors ${
                    social.active ? "bg-main" : "border border-solid border-[#7ba0d0] hover:bg-gray-50"
                  }`}
                >
                  <img className="w-5 h-5" alt={social.alt} src={social.src} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
