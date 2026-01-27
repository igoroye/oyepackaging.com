import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { ChangesAndUpdatesSection } from "./sections/ChangesAndUpdatesSection";
import { ChildrenPrivacySection } from "./sections/ChildrenPrivacySection";
import { CookiesAndTrackingSection } from "./sections/CookiesAndTrackingSection";
import { DataControllerSection } from "./sections/DataControllerSection";
import { DataProcessingSection } from "./sections/DataProcessingSection";
import { DataRetentionSection } from "./sections/DataRetentionSection";
import { DataSharingAndTransfersSection } from "./sections/DataSharingAndTransfersSection";
import { LegalBasisForProcessingSection } from "./sections/LegalBasisForProcessingSection";
import { LegalBasisSection } from "./sections/LegalBasisSection";
import { PersonalDataCollectionSection } from "./sections/PersonalDataCollectionSection";
import { PrivacyPolicyIntroSection } from "./sections/PrivacyPolicyIntroSection";
import { PurposeOfDataProcessingSection } from "./sections/PurposeOfDataProcessingSection";
import { YourRightsSection } from "./sections/YourRightsSection";

const footerLinks = {
  packaging: [
    { label: "Flat Bottom Bags", opacity: "opacity-100" },
    { label: "Carton Boxes", opacity: "opacity-100" },
    { label: "Side Gusset Bags", opacity: "opacity-100" },
    { label: "Standup Bags", opacity: "opacity-100" },
  ],
  services: [
    { label: "Drip Bags", opacity: "opacity-100" },
    { label: "Brew Bags", opacity: "opacity-50" },
    { label: "Capsules", opacity: "opacity-50" },
  ],
  wiki: [
    { label: "ORDERS", opacity: "opacity-100" },
    { label: "Payments and pricing", opacity: "opacity-100" },
    { label: "Delivery", opacity: "opacity-100" },
    { label: "Return & refund policy", opacity: "opacity-100" },
  ],
  aboutUs: [
    { label: "Who we are", opacity: "opacity-100" },
    { label: "Contact us", opacity: "opacity-100" },
    { label: "Sustainability", opacity: "opacity-100" },
  ],
};

const socialIcons = [
  {
    src: "https://c.animaapp.com/mkvenfnf8hUqCs/img/telegram--13--1.svg",
    alt: "Telegram",
    className: "right-[335px]",
  },
  {
    src: "https://c.animaapp.com/mkvenfnf8hUqCs/img/facebook-logo-1.svg",
    alt: "Facebook logo",
    className: "right-[285px]",
    bgClass: "bg-main",
  },
  {
    src: "https://c.animaapp.com/mkvenfnf8hUqCs/img/instagram--5--1.svg",
    alt: "Instagram",
    className: "right-[235px]",
  },
  {
    src: "https://c.animaapp.com/mkvenfnf8hUqCs/img/linkedin-1.svg",
    alt: "Linkedin",
    className: "right-[185px]",
  },
  {
    src: "https://c.animaapp.com/mkvenfnf8hUqCs/img/whatsapp-1.svg",
    alt: "Whatsapp",
    className: "right-[135px]",
  },
];

const navigationLinks = [
  { label: "PRODUCTS", href: "/products" },
  { label: "SERVICES", href: "/services" }
];

export const PrivacyPolicy = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col">
      <header className="w-full bg-transparent py-4 md:py-6 relative z-50">
        <nav className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              className="w-[100px] sm:w-[125px] h-auto cursor-pointer"
              alt="ÖYE Logo"
              src="https://c.animaapp.com/mkvenfnf8hUqCs/img/group-239.png"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-[normal] hover:text-main transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-text hover:text-main transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 animate-fade-in">
            <div className="container mx-auto px-4 sm:px-6 py-6 flex flex-col gap-4">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
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

      <main className="flex-1 w-full">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-[100px] py-8 md:py-10">
          <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-[44px] text-center leading-[49px] tracking-[0] mb-4">
            PRIVACY POLICY
          </h1>

          <div className="flex justify-center mb-10">
            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg text-center tracking-[0] leading-[22px]">
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]">
                Date of publication:
              </span>
              <span className="font-semibold"> 16.09.2024</span>
            </p>
          </div>

          <div className="w-full flex flex-col max-w-[1030px] mx-auto">
            <ChangesAndUpdatesSection />
            <PrivacyPolicyIntroSection />
            <CookiesAndTrackingSection />
            <LegalBasisSection />
            <DataProcessingSection />
            <YourRightsSection />
            <DataControllerSection />
            <PersonalDataCollectionSection />
            <PurposeOfDataProcessingSection />
            <LegalBasisForProcessingSection />
            <DataSharingAndTransfersSection />
            <DataRetentionSection />
            <ChildrenPrivacySection />
          </div>
        </div>
      </main>

      <footer className="w-full bg-white px-4 sm:px-6 md:px-12 lg:px-[100px] py-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="mb-8">
            <img
              className="w-[147px] h-14"
              alt="Group"
              src="https://c.animaapp.com/mkvenfnf8hUqCs/img/group-247.png"
            />
          </div>

          <div className="mb-8">
            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[22px] max-w-[402px]">
              Say farewell to ordinary packaging and delays - we&#39;ve got your
              back. Explore our diverse services and join us on an exciting
              journey!
            </p>
          </div>

          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg tracking-[0] leading-6 mb-4">
                PACKAGING
              </h3>
              <ul className="space-y-2">
                {footerLinks.packaging.map((link, index) => (
                  <li key={`packaging-${index}`}>
                    <a
                      href="#"
                      className={`[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 ${link.opacity}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg tracking-[0] leading-6 mb-4">
                SERVICES
              </h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={`services-${index}`}>
                    <a
                      href="#"
                      className={`[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 ${link.opacity}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg tracking-[0] leading-6 mb-4">
                WIKI
              </h3>
              <ul className="space-y-2">
                {footerLinks.wiki.map((link, index) => (
                  <li key={`wiki-${index}`}>
                    <a
                      href="#"
                      className={`[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 ${link.opacity}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg tracking-[0] leading-6 mb-4">
                ABOUT US
              </h3>
              <ul className="space-y-2">
                {footerLinks.aboutUs.map((link, index) => (
                  <li key={`about-${index}`}>
                    <a
                      href="#"
                      className={`[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 ${link.opacity}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-solid border-gray-300 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[30px]">
                  COPYRIGHT © 2024 ÖYE PACKAGING
                </p>
                <Link
                  to="/privacy-policy"
                  className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[30px] hover:text-main transition-colors"
                >
                  PRIVACY POLICY
                </Link>
                <a
                  href="#"
                  className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[30px]"
                >
                  COOKIES
                </a>
                <a
                  href="#"
                  className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[30px]"
                >
                  TERMS &amp; CONDITIONS
                </a>
              </div>

              <div className="flex items-center gap-2">
                {socialIcons.map((icon, index) => (
                  <div
                    key={`social-${index}`}
                    className={`w-10 h-10 rounded-[10px] flex items-center justify-center ${
                      icon.bgClass || "border border-solid border-[#7ba0d0]"
                    }`}
                  >
                    <img className="w-5 h-5" alt={icon.alt} src={icon.src} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
