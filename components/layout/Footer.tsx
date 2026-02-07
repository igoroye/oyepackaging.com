import Link from "next/link"

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
    { label: "Orders", href: "#", disabled: true },
    { label: "Payments and pricing", href: "#", disabled: true },
    { label: "Delivery", href: "#", disabled: true },
    { label: "Return & refund policy", href: "#", disabled: true },
  ],
  aboutUs: [
    { label: "Who we are", href: "/about-us" },
    { label: "Contact us", href: "/contact-us" },
    { label: "Sustainability", href: "/sustainability" },
  ],
}

const socialLinks = [
  {
    icon: "https://c.animaapp.com/mko0yo41F03JfF/img/telegram--13--1.svg",
    alt: "Telegram",
    href: "https://t.me/hellooyepackagingbot",
  },
  {
    icon: "https://c.animaapp.com/mko0yo41F03JfF/img/facebook-logo-1.svg",
    alt: "Facebook",
    href: "https://www.facebook.com/oyepackaging/",
    active: true,
  },
  {
    icon: "https://c.animaapp.com/mko0yo41F03JfF/img/linkedin-1.svg",
    alt: "LinkedIn",
    href: "https://www.linkedin.com/company/hello-oye-packaging",
  },
  {
    alt: "YouTube",
    href: "https://www.youtube.com/@OYE-Packaging/",
    svgIcon: true,
  },
  {
    icon: "https://c.animaapp.com/mko0yo41F03JfF/img/instagram--5--1.svg",
    alt: "Instagram",
    href: "https://www.instagram.com/oye_packaging_eu/",
  },
  {
    icon: "https://c.animaapp.com/mko0yo41F03JfF/img/whatsapp-1.svg",
    alt: "WhatsApp",
    href: "https://wa.me/+3197010280877",
  },
]

const legalLinks = [
  { label: "PRIVACY POLICY", href: "/privacy-policy" },
  { label: "COOKIES", href: "/cookies" },
  { label: "TERMS & CONDITIONS", href: "/terms-conditions" },
]

export function Footer() {
  return (
    <footer className="relative w-full px-4 sm:px-6 md:px-12 lg:px-[100px] py-8 md:py-12 bg-white mt-12 md:mt-24">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 mb-8 md:mb-12">
          <div className="flex flex-col gap-4 max-w-full lg:max-w-[402px]">
            <img
              className="w-[120px] sm:w-[147px] h-auto"
              alt="ÖYE Packaging Logo"
              src="/images/logo.svg"
            />
            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[22px]">
              Say farewell to ordinary packaging and delays - we've got your
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
                      className={`[font-family:'Inter',Helvetica] font-normal text-sm tracking-[0] leading-6 ${
                        link.disabled
                          ? "text-gray cursor-not-allowed"
                          : "text-text hover:text-main transition-colors"
                      }`}
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
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors ${
                  social.active
                    ? "bg-main"
                    : "border border-solid border-[#7ba0d0] hover:bg-[#7ba0d0]"
                }`}
                aria-label={social.alt}
              >
                {social.svgIcon ? (
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg" className="text-[#7ba0d0]">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                  </svg>
                ) : (
                  <img className="w-5 h-5" alt={social.alt} src={social.icon} />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
