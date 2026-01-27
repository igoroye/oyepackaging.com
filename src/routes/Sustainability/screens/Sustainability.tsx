import { Link } from "react-router-dom";
import { HeroSection } from "./sections/HeroSection";
import { PackagingIntroSection } from "./sections/PackagingIntroSection";
import { ScopeOfFocusSection } from "./sections/ScopeOfFocusSection";
import { SustainabilityInfoSection } from "./sections/SustainabilityInfoSection";
import { WaysWeMeanSection } from "./sections/WaysWeMeanSection";

const footerLinks = {
  packaging: [
    { label: "Flat Bottom Bags", href: "#" },
    { label: "Standup Bags", href: "/standup-bags" },
    { label: "Carton Boxes", href: "/carton-boxes" },
  ],
  services: [
    { label: "Drip Bags", href: "#" },
    { label: "Brew Bags", href: "/brew-bags", disabled: true },
    { label: "Cold Brew Bags", href: "/cold-brew-bags", disabled: true },
  ],
  wiki: [
    { label: "Orders", href: "#", disabled: true },
    { label: "Payments and pricing", href: "#", disabled: true },
    { label: "Delivery", href: "#", disabled: true },
    { label: "Return & refund policy", href: "#", disabled: true },
  ],
  aboutUs: [
    { label: "Who we are", href: "/about-us" },
    { label: "Contact us", href: "#" },
    { label: "Sustainability", href: "/sustainability" },
  ],
};

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
];

const legalLinks = [
  { label: "PRIVACY POLICY", href: "#" },
  { label: "COOKIES", href: "#" },
  { label: "TERMS & CONDITIONS", href: "#" },
];

export const Sustainability = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <HeroSection />
      <PackagingIntroSection />
      <SustainabilityInfoSection />
      <WaysWeMeanSection />
      <ScopeOfFocusSection />

      <footer className="relative w-full px-4 sm:px-6 md:px-12 lg:px-[100px] py-8 md:py-12 bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 mb-8 md:mb-12">
            <div className="flex flex-col gap-4 max-w-full lg:max-w-[402px]">
              <img
                className="w-[120px] sm:w-[147px] h-auto"
                alt="ÖYE Packaging Logo"
                src="https://c.animaapp.com/mkved9hrg5UXzm/img/group-247.png"
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
                      {link.href.startsWith('/') ? (
                        <Link
                          to={link.href}
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

              <div className="flex flex-col gap-4">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-base sm:text-lg tracking-[0] leading-6">
                  SERVICES
                </h3>
                <ul className="flex flex-col gap-2">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      {link.href.startsWith('/') ? (
                        <Link
                          to={link.href}
                          className={`[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors ${
                            link.disabled
                              ? "text-gray cursor-not-allowed"
                              : "text-text hover:text-main transition-colors"
                          }`}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className={`[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors ${
                            link.disabled
                              ? "text-gray cursor-not-allowed"
                              : "text-text hover:text-main transition-colors"
                          }`}
                        >
                          {link.label}
                        </a>
                      )}
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
                      {link.href.startsWith('/') ? (
                        <Link
                          to={link.href}
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
            </nav>
          </div>

          <div className="w-full h-px bg-[#e5e5e5] mb-4" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-xs sm:text-sm tracking-[0] leading-[30px] text-center md:text-left">
              COPYRIGHT © 2025 ÖYE PACKAGING
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="[font-family:'Inter',Helvetica] font-medium text-text text-xs sm:text-sm tracking-[0] leading-[30px] hover:text-main transition-colors"
                >
                  {link.label}
                </a>
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
  );
};
