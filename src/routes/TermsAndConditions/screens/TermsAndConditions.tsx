import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";

const navigationLinks = [
  { label: "PRODUCTS", href: "/products" },
  { label: "SERVICES", href: "/services" }
];

const termsContent = [
  {
    id: "1",
    title: "SCOPE",
    items: [
      {
        id: "1.1",
        text: 'These General Terms and Conditions of Sale ("Conditions of Sale") govern all deliveries and services provided by ÖYE Packaging OÜ ("ÖYE Packaging"). These conditions are exclusively applicable to entrepreneurs, which include natural or legal persons, or entities subject to public law, conducting commercial or independent business activities within the scope of legal transactions.',
      },
      {
        id: "1.2",
        parts: [
          {
            text: "These Conditions of Sale govern your use of ÖYE Packaging services, including use of the ÖYE Packaging website ",
            color: "text-[#101014]",
          },
          {
            text: "https://oyepackaging.com/",
            color: "text-[#264eab]",
          },
          {
            text: " (the \"Website\"), including the sale, purchase, and use of Products (listed below) and services (the \"Services\"). You agree to these Conditions of Sale by mutually agreeing and signing a purchase order document, invoice, confirming design via e-mail, and other documents that may be applicable with regard to ÖYE Packaging. In this document, you may be referred to as ''you'', ''your'', or ''Customer''.",
            color: "text-[#101014]",
          },
        ],
      },
      {
        id: "1.3",
        text: "Your understanding and agreement with ÖYE Packaging related to the Service is regulated exclusively by these Conditions of Sale. In the event if ÖYE Packaging fails to observe provision(-s) of the Conditions of Sale it shall not be construed as a waiver of rights and obligations established in these Conditions of Sale. A waiver of any rights and obligations established in these Conditions of Sale shall only be valid if it is manifested and agreed in writing by an authorized representative of ÖYE Packaging.",
      },
      {
        id: "1.4",
        text: "Any modifications and/or deviations from these Conditions of Sale proposed by the Customer will not be binding for ÖYE Packaging unless expressly accepted by ÖYE Packaging in writing. Unconditional delivery, service provision, or payment acceptance shall not constitute recognition of differing terms. Any terms that are contrary to these Conditions of Sale are null and void unless otherwise agreed to in writing by an authorized representative of ÖYE Packaging.",
      },
    ],
  },
  {
    id: "2",
    title: "DEFINITIONS AND INTERPRETATIONS",
    items: [
      {
        id: "2.1",
        text: "In these Conditions of Sale, except to the extent that the context requires otherwise or has specifically defined, the following expressions shall have the meanings ascribed to them below:",
      },
      {
        id: "2.1.1",
        text: '"Applicable Laws" means:',
      },
      {
        id: "2.1.1.1",
        text: 'all laws, code of practice, regulations, guidelines, instructions, or other instruments having the force of law whatsoever form that any competent regulatory, governmental, or judicial authorities in the Republic of Estonia ("Estonia") may issue from time to time related to the subject of these Conditions of Sale or otherwise, including Tarbijakaitseseadus (Law on Consumers Protection of the Republic of Estonia);',
      },
      {
        id: "2.1.1.2",
        text: "Directive 97/7/EC of the European Parliament and of the Council of 20 May 1997 on the protection of consumers in respect of distance contracts;",
      },
      {
        id: "2.1.1.3",
        text: "Regulation (EU) 2016/679 of the European Parliament and of the Council (April 27, 2016) on the protection of natural persons with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46/EC (General Data Protection Regulation);",
      },
      {
        id: "2.1.2",
        text: '"the Service" – designing, developing, producing, assisting in producing, printing, preparing, and placing production orders of sustainable packaging (drip coffee bags, pouch bag(s), carton box(-es), as well as preserving, processing and sorting raw materials provided to ÖYE Packaging by the Customer.',
      },
      {
        id: "2.1.3",
        text: '"Raw material" – unprocessed materials or natural materials such as coffee beans or ground coffee provided to ÖYE Packaging by the Customer with the purpose of manufacturing the Product and/or receiving the Service.',
      },
      {
        id: "2.1.4",
        text: '"the Design or Packaging design" – form, models, figures, dimensions, weights, structure, materials, color, imagery, typography, and regulatory information with ancillary design elements provided by the Customer to ÖYE Packaging to render the Service or manufacture the Product in terms of these Conditions of Sale. ÖYE Packaging shall use its best efforts to ensure their accuracy.',
      },
      {
        id: "2.1.5",
        text: '"Products" – various sustainable packaging products found on the Website or offered to Customer by ÖYE Packaging on an individual basis. Products and all content found on the Website is provided solely for informational purposes. All photos, videos, and other images of Products found on the ÖYE Packaging Website are for illustrative purposes only. The actual product may differ from that shown on the ÖYE Packaging Website.',
      },
    ],
  },
  {
    id: "3",
    title: "CONCLUSION OF CONTRACT, ACCEPTANCE BY THE CUSTOMER, AND COOPERATION OBLIGATIONS",
    items: [
      {
        id: "3.1",
        text: "ÖYE Packaging Service and Product offers are subject to change. The information contained in ÖYE Packaging Website may be changed at any time at the sole discretion of ÖYE Packaging and without prior notice. ÖYE Packaging encourages the Customer to read these Conditions of Sale before each purchase.",
      },
      {
        id: "3.2",
        text: "The Customer manifests the intent of accepting, reading, and understanding these Conditions of Sale by:",
      },
      {
        id: "3.2.1",
        text: "paying the full amount due to ÖYE Packaging for Products or Services purchased as specified in these Conditions of Sale. The orders exceeding €10,000 (ten thousand euro) shall be paid in two installments: the first 50% (fifty percent) payment constitutes the acceptance of these Conditions of Sale by the Customer and;",
      },
      {
        id: "3.2.2",
        text: "upon final confirmation of the design by the Customer. The Customer shall confirm the final Design within 2 weeks. If the Customer is unable to meet the Design confirmation deadline stated in this clause or finds the deadline to be unacceptable for some other reasons, ÖYE Packaging reserves the right to cancel the order at its sole discretion",
      },
    ],
  },
];

const footerLinks = {
  packaging: [
    { label: "Flat Bottom Bags", href: "#" },
    { label: "Carton Boxes", href: "/carton-boxes" },
    { label: "Side Gusset Bags", href: "#" },
    { label: "Standup Bags", href: "/standup-bags" },
  ],
  services: [
    { label: "Drip Bags", href: "/services" },
    { label: "Brew Bags", href: "/brew-bags", disabled: true },
    { label: "Capsules", href: "#", disabled: true },
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

const socialLinks = [
  {
    icon: "https://c.animaapp.com/mkves8ujwpN2sJ/img/telegram--13--1.svg",
    alt: "Telegram",
    href: "#",
  },
  {
    icon: "https://c.animaapp.com/mkves8ujwpN2sJ/img/facebook-logo-1.svg",
    alt: "Facebook",
    href: "#",
    active: true,
  },
  {
    icon: "https://c.animaapp.com/mkves8ujwpN2sJ/img/linkedin-1.svg",
    alt: "LinkedIn",
    href: "#",
  },
  {
    icon: "https://c.animaapp.com/mkves8ujwpN2sJ/img/instagram--5--1.svg",
    alt: "Instagram",
    href: "#",
  },
  {
    icon: "https://c.animaapp.com/mkves8ujwpN2sJ/img/whatsapp-1.svg",
    alt: "WhatsApp",
    href: "#",
  },
];

const legalLinks = [
  { label: "PRIVACY POLICY", href: "/privacy-policy" },
  { label: "COOKIES", href: "#" },
  { label: "TERMS & CONDITIONS", href: "/terms-conditions" },
];

export const TermsAndConditions = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <header className="w-full bg-transparent py-4 md:py-6 relative z-50">
        <nav className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              className="w-[100px] sm:w-[125px] h-auto cursor-pointer"
              alt="ÖYE Logo"
              src="https://c.animaapp.com/mkves8ujwpN2sJ/img/group-239.png"
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

      <main className="w-full px-4 sm:px-6 md:px-12 lg:px-[100px] py-8 md:py-10">
        <div className="max-w-[1030px] mx-auto">
          <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl md:text-[44px] text-center tracking-[0] leading-tight md:leading-[49px] mb-4">
            TERMS & CONDITIONS
          </h1>

          <div className="flex justify-center mb-10">
            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg text-center tracking-[0] leading-[22px]">
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#101014] text-lg tracking-[0] leading-[22px]">
                Date of publication:
              </span>
              <span className="font-semibold"> 16.09.2024</span>
            </p>
          </div>

          <div className="mb-8">
            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg sm:text-[22px] text-center tracking-[0] leading-relaxed md:leading-8">
              <span className="text-[#101014]">
                These Terms and Conditions govern your use of ÖYE Packaging services, including use of the ÖYE Packaging website{" "}
              </span>
              <a
                href="https://oyepackaging.com"
                className="text-[#264eab] hover:underline"
              >
                https://oyepackaging.com
              </a>
              <span className="text-[#101014]">
                {" "}
                and all related services and products.
              </span>
            </p>
          </div>

          <div className="space-y-12">
            {termsContent.map((section) => (
              <section key={section.id} className="space-y-6">
                <Separator className="w-full" />
                
                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-2xl md:text-3xl tracking-[0] leading-tight md:leading-[39px]">
                  {section.title}
                </h2>

                <div className="space-y-5">
                  {section.items.map((item) => (
                    <p
                      key={item.id}
                      className="[font-family:'Inter',Helvetica] font-normal text-text text-base md:text-lg tracking-[0] leading-relaxed md:leading-[22px]"
                    >
                      <span className="font-medium">{item.id}.</span>{" "}
                      {item.parts ? (
                        <>
                          {item.parts.map((part, index) => (
                            <span key={index} className={part.color}>
                              {part.text}
                            </span>
                          ))}
                        </>
                      ) : (
                        item.text
                      )}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <section className="space-y-6">
              <Separator className="w-full" />
              
              <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-2xl md:text-3xl tracking-[0] leading-tight md:leading-[39px]">
                PRICES AND TAXES
              </h2>

              <div className="space-y-5">
                <p className="[font-family:'Inter',Helvetica] font-normal text-text text-base md:text-lg tracking-[0] leading-relaxed md:leading-[22px]">
                  <span className="font-medium">4.1.</span> The price applied to Products and/or Services is based on the prevailing rate at the time of the purchase order placement by the Customer. Prices are denominated in the currency of Euro and are exclusive of VAT, taxes, duties, and other applicable charges under the contract, which are the responsibility of the Customer.
                </p>
                <p className="[font-family:'Inter',Helvetica] font-normal text-text text-base md:text-lg tracking-[0] leading-relaxed md:leading-[22px]">
                  <span className="font-medium">4.2.</span> In the event of fluctuations in material or semi-finished goods prices, employer contributions, employment conditions, exchange rates, or similar post-order acceptance circumstances, ÖYE Packaging reserves the right to adjust prices accordingly.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <Separator className="w-full" />
              
              <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-2xl md:text-3xl tracking-[0] leading-tight md:leading-[39px]">
                DELIVERIES, DEADLINES, DELAYS AND RETURN
              </h2>

              <div className="space-y-5">
                <p className="[font-family:'Inter',Helvetica] font-normal text-text text-base md:text-lg tracking-[0] leading-relaxed md:leading-[22px]">
                  <span className="font-medium">5.1.</span> Products are delivered under Incoterm DAP (Delivery At Place). ÖYE Packaging delivers to the Customer's destination. Transport costs are separate, paid by the Customer.
                </p>
                <p className="[font-family:'Inter',Helvetica] font-normal text-text text-base md:text-lg tracking-[0] leading-relaxed md:leading-[22px]">
                  <span className="font-medium">5.2.</span> All Products and/or Services are shipped at the expense and risk of the Customer unless otherwise agreed in writing.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="relative w-full px-4 sm:px-6 md:px-12 lg:px-[100px] py-8 md:py-12 bg-white mt-16">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 mb-8 md:mb-12">
            <div className="flex flex-col gap-4 max-w-full lg:max-w-[402px]">
              <img
                className="w-[120px] sm:w-[147px] h-auto"
                alt="ÖYE Packaging Logo"
                src="https://c.animaapp.com/mkves8ujwpN2sJ/img/group-247.png"
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
                <Link
                  key={index}
                  to={link.href}
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
  );
};
