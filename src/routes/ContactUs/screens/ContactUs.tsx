import { Link } from "react-router-dom";
import { ContactFormSection } from "./sections/ContactFormSection";
import { FooterSection } from "./sections/FooterSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";

const footerLinks = {
  packaging: [
    { label: "Flat Bottom Bags", href: "#" },
    { label: "Carton Boxes", href: "/carton-boxes" },
    { label: "Side Gusset Bags", href: "#" },
    { label: "Standup Bags", href: "/standup-bags" },
  ],
  services: [
    { label: "Drip Bags", href: "/services", opacity: false },
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
};

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
];

const legalLinks = [
  { label: "PRIVACY POLICY", href: "#" },
  { label: "COOKIES", href: "#" },
  { label: "TERMS & CONDITIONS", href: "#" },
];

export const ContactUs = (): JSX.Element => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <NavigationBarSection />

      <main className="relative w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative">
              <ContactFormSection />
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

      <FooterSection />

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
                Say farewell to ordinary packaging and delays - we've got your
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
                        className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:underline"
                      >
                        {link.label}
                      </a>
                    )}
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
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className={`[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors ${link.opacity ? "opacity-50" : ""}`}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className={`[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:underline ${link.opacity ? "opacity-50" : ""}`}
                      >
                        {link.label}
                      </a>
                    )}
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
                    className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:underline"
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
                        className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:underline"
                      >
                        {link.label}
                      </a>
                    )}
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
                <a
                  key={index}
                  href={link.href}
                  className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[30px] hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2.5">
              {socialIcons.map((social, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors ${
                    social.active ? "bg-main" : "border border-solid border-[#7ba0d0] hover:bg-gray-50"
                  }`}
                >
                  <img className="w-5 h-5" alt={social.alt} src={social.src} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
