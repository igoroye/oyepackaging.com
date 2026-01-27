import { Link } from "react-router-dom";
import { ClientStatsSection } from "./sections/ClientStatsSection";
import { CoffeePassionSection } from "./sections/CoffeePassionSection";
import { HeroSection } from "./sections/HeroSection";
import { PackagingOverviewSection } from "./sections/PackagingOverviewSection";
import { ProactiveTeamSection } from "./sections/ProactiveTeamSection";
import { ProductionHighlightsSection } from "./sections/ProductionHighlightsSection";
import { SustainabilitySection } from "./sections/SustainabilitySection";

const footerLinks = {
  packaging: [
    { label: "Flat Bottom Bags", href: "#" },
    { label: "Carton Boxes", href: "#" },
    { label: "Side Gusset Bags", href: "#" },
    { label: "Standup Bags", href: "#" },
  ],
  services: [
    { label: "Drip Bags", href: "#" },
    { label: "Brew Bags", href: "#", opacity: true },
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
    { label: "Contact us", href: "#" },
    { label: "Sustainability", href: "#" },
  ],
};

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
];

const footerBottomLinks = [
  { label: "PRIVACY POLICY", href: "#" },
  { label: "COOKIES", href: "#" },
  { label: "TERMS & CONDITIONS", href: "#" },
];

export const AboutUs = (): JSX.Element => {
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

      <section className="relative w-full px-4 sm:px-6 md:px-12 lg:px-[100px] py-8 md:py-10">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-2xl sm:text-3xl md:text-[44px] text-center tracking-[0] leading-tight md:leading-[49px] mb-8 md:mb-10">
          WE&apos;RE PASSIONATE ABOUT COFFEE!
        </h2>

        <div className="relative w-full bg-bg-beige rounded-[20px] p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          <div className="flex-1 w-full lg:w-auto">
            <CoffeePassionSection />
          </div>

          <div className="relative w-full max-w-[485px] h-[300px] sm:h-[400px] lg:h-[435px] bg-[#ffffff] rounded-[20px] flex-shrink-0">
            <div className="w-full h-full relative overflow-hidden rounded-[20px]">
              <img
                className="absolute top-[15%] right-[15%] w-[30%] h-[15%] object-contain"
                alt="Vector"
                src="https://c.animaapp.com/mkvbxc2okqfhzF/img/vector-1.svg"
              />

              <img
                className="absolute top-[20%] left-[60%] w-[18%] h-[8%] object-contain"
                alt="Group"
                src="https://c.animaapp.com/mkvbxc2okqfhzF/img/group-322.png"
              />

              <img
                className="absolute top-[13%] right-[10%] w-[10%] h-[12%] object-contain"
                alt="Ellipse"
                src="https://c.animaapp.com/mkvbxc2okqfhzF/img/ellipse-80.svg"
              />

              <img
                className="absolute top-[15%] right-[12%] w-[6%] h-[7%] object-contain"
                alt="Image"
                src="https://c.animaapp.com/mkvbxc2okqfhzF/img/--.svg"
              />

              <img
                className="absolute top-[35%] right-[23%] w-[20%] h-[20%] object-contain"
                alt="Vector"
                src="https://c.animaapp.com/mkvbxc2okqfhzF/img/vector-24.svg"
              />

              <img
                className="absolute top-[18%] right-[19%] w-[72%] h-[82%] object-cover"
                alt="Stunning render"
                src="https://c.animaapp.com/mkvbxc2okqfhzF/img/stunning-3d-render-earth-deep-blue-marble-b-1.png"
              />

              <img
                className="absolute top-[48%] left-[71%] w-[29%] h-[52%] object-cover"
                alt="Element"
                src="https://c.animaapp.com/mkvbxc2okqfhzF/img/----------1-10.png"
              />

              <img
                className="absolute top-0 left-[87%] w-[13%] h-[52%] object-cover"
                alt="Element"
                src="https://c.animaapp.com/mkvbxc2okqfhzF/img/----------1-10.png"
              />

              <img
                className="absolute top-0 left-0 w-[51%] h-[24%] object-cover"
                alt="Element"
                src="https://c.animaapp.com/mkvbxc2okqfhzF/img/----------1-10.png"
              />

              <img
                className="absolute top-0 left-[43%] w-[57%] h-[15%] object-cover"
                alt="Element"
                src="https://c.animaapp.com/mkvbxc2okqfhzF/img/----------1-10.png"
              />
            </div>
          </div>
        </div>
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
              src="https://c.animaapp.com/mkvbxc2okqfhzF/img/group-247.png"
            />
            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[22px]">
              Say farewell to ordinary packaging and delays - we&#39;ve got your
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
                    <a
                      href={link.href}
                      className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:underline"
                    >
                      {link.label}
                    </a>
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
                    <a
                      href={link.href}
                      className={`[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:underline ${
                        link.opacity ? "opacity-50" : ""
                      }`}
                    >
                      {link.label}
                    </a>
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
                      className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:underline"
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
                        to={link.href}
                        className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:underline"
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
              <a
                key={index}
                href={link.href}
                className="[font-family:'Inter',Helvetica] font-medium text-text text-xs sm:text-sm tracking-[0] leading-[30px] hover:underline"
              >
                {link.label}
              </a>
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
  );
};
