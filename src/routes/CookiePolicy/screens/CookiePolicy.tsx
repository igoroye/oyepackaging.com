import { Link } from "react-router-dom";
import { Separator } from "../components/ui/separator";
import { CookiePolicyAcceptanceSection } from "./sections/CookiePolicyAcceptanceSection";
import { CookiePolicyContentSection } from "./sections/CookiePolicyContentSection";
import { CookiePolicyDetailsSection } from "./sections/CookiePolicyDetailsSection";
import { CookiePolicyFooterSection } from "./sections/CookiePolicyFooterSection";
import { CookiePolicyIntroSection } from "./sections/CookiePolicyIntroSection";
import { CookiePolicyMainSection } from "./sections/CookiePolicyMainSection";
import { CookiePolicyTitleSection } from "./sections/CookiePolicyTitleSection";
import { CookiePolicyUpdateSection } from "./sections/CookiePolicyUpdateSection";
import { MainHeaderSection } from "./sections/MainHeaderSection";

const footerColumns = [
  {
    title: "PACKAGING",
    links: [
      { label: "Flat Bottom Bags", opacity: false },
      { label: "Carton Boxes", opacity: false },
      { label: "Side Gusset Bags", opacity: false },
      { label: "Standup Bags", opacity: false },
    ],
  },
  {
    title: "SERVICES",
    links: [
      { label: "Drip Bags", opacity: false },
      { label: "Brew Bags", opacity: true },
      { label: "Capsules", opacity: true },
    ],
  },
  {
    title: "WIKI",
    links: [
      { label: "ORDERS", opacity: false },
      { label: "Payments and pricing", opacity: false },
      { label: "Delivery", opacity: false },
      { label: "Return & refund policy", opacity: false },
    ],
  },
  {
    title: "ABOUT US",
    links: [
      { label: "Who we are", opacity: false },
      { label: "Contact us", opacity: false },
      { label: "Sustainability", opacity: false },
    ],
  },
];

const socialIcons = [
  {
    alt: "Telegram",
    src: "https://c.animaapp.com/mkveyannrOLJuY/img/telegram--13--1.svg",
    bgClass: "border border-solid border-[#7ba0d0]",
  },
  {
    alt: "Facebook logo",
    src: "https://c.animaapp.com/mkveyannrOLJuY/img/facebook-logo-1.svg",
    bgClass: "bg-main",
  },
  {
    alt: "Instagram",
    src: "https://c.animaapp.com/mkveyannrOLJuY/img/instagram--5--1.svg",
    bgClass: "border border-solid border-[#7ba0d0]",
  },
  {
    alt: "Linkedin",
    src: "https://c.animaapp.com/mkveyannrOLJuY/img/linkedin-1.svg",
    bgClass: "border border-solid border-[#7ba0d0]",
  },
  {
    alt: "Whatsapp",
    src: "https://c.animaapp.com/mkveyannrOLJuY/img/whatsapp-1.svg",
    bgClass: "border border-solid border-[#7ba0d0]",
  },
];

const footerLinks = [
  { label: "PRIVACY POLICY", isBold: true },
  { label: "COOKIES", isBold: true },
  { label: "TERMS & CONDITIONS", isBold: true },
];

export const CookiePolicy = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <MainHeaderSection />

      <main className="w-full flex flex-col">
        <section className="w-full flex flex-col items-center py-10">
          <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-[44px] text-center tracking-[0] leading-[49px] whitespace-nowrap">
            COOKIE POLICY
          </h1>
        </section>

        <CookiePolicyTitleSection />

        <section className="w-full flex justify-center px-4">
          <p className="max-w-[916px] [font-family:'Inter',Helvetica] font-normal text-text text-[22px] text-center tracking-[0] leading-8">
            Cookiebot by Usercentrics to process cookies on ÖYE Packaging OÜ
            website.
            <br />
            Cookiebot CMP is a self-serve cloud-based service provided by
            Usercentrics. It enables automated compliance with global data
            privacy laws like the EU&apos;s GDPR, California&apos;s CCPA/CPRA,
            Brazil&apos;s LGPD, and many others.
          </p>
        </section>

        <CookiePolicyIntroSection />
        <CookiePolicyMainSection />
        <CookiePolicyDetailsSection />
        <CookiePolicyContentSection />
        <CookiePolicyFooterSection />
        <CookiePolicyAcceptanceSection />
        <CookiePolicyUpdateSection />
      </main>

      <footer className="w-full flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-[98px] py-8 mt-auto">
        <div className="w-full max-w-[1244px] flex flex-col gap-6">
          <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
            <div className="flex flex-col gap-6 max-w-full lg:max-w-[402px]">
              <img
                className="w-[147px] h-14"
                alt="ÖYE Packaging Logo"
                src="https://c.animaapp.com/mkveyannrOLJuY/img/group-247.png"
              />
              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[22px]">
                Say farewell to ordinary packaging and delays - we&apos;ve got
                your back. Explore our diverse services and join us on an
                exciting journey!
              </p>
            </div>

            <nav className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-[100px]">
              {footerColumns.map((column, index) => (
                <div
                  key={`footer-column-${index}`}
                  className="flex flex-col gap-[10px]"
                >
                  <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg tracking-[0] leading-6 whitespace-nowrap">
                    {column.title}
                  </h3>
                  <ul className="flex flex-col gap-1">
                    {column.links.map((link, linkIndex) => (
                      <li key={`footer-link-${index}-${linkIndex}`}>
                        <a
                          href="#"
                          className={`[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 whitespace-nowrap hover:underline ${
                            link.opacity ? "opacity-50" : ""
                          }`}
                        >
                          {link.label}
                        </a>
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
              {footerLinks.map((link, index) => (
                <Link
                  key={`bottom-link-${index}`}
                  to={link.label === "COOKIES" ? "/cookies" : link.label === "PRIVACY POLICY" ? "/privacy-policy" : "/terms-conditions"}
                  className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[30px] whitespace-nowrap hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex gap-[10px]">
              {socialIcons.map((icon, index) => (
                <a
                  key={`social-icon-${index}`}
                  href="#"
                  className={`w-10 h-10 rounded-[10px] flex items-center justify-center ${icon.bgClass}`}
                >
                  <img className="w-5 h-5" alt={icon.alt} src={icon.src} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
