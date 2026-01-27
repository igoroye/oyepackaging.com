import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

const features = [
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/coffee--1--1.svg",
    text: "Grinding & filing coffee service",
  },
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/european-union.svg",
    text: "Made in Europe",
  },
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/mug-hot-alt--2--8.svg",
    text: "Sustainable materials",
  },
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/shield-check-1.svg",
    text: "Fully customizable",
  },
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/subscription--1--1.svg",
    text: "Subscription",
  },
];

const howItWorksSteps = [
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/coffee-beans-1.svg",
    title:
      "Provide a description of your coffee profile and specify your preferred weight per filter. Send us 1 kg of coffee for testing.",
  },
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/vector-21.svg",
    title: "We will prepare samples (4 or more options).",
  },
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/coffee-heart-1.svg",
    title:
      "You will receive a sample by mail, cup it, and select your favorite option.",
  },
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/vector.svg",
    title:
      "We will use this choice as a quality reference before moving into production.",
  },
];

const offerLocations = [
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/chair-office-1.svg",
    title: "OFFICES",
    description:
      "A simple solution for quality coffee at work, saving time and enhancing productivity.",
  },
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/gas-pump-alt-1.svg",
    title: "GAS STATIONS",
  },
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/house-tree-1.svg",
    title: "TOURIST SHOPS",
  },
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/dorm-room--1--1.svg",
    title: "HOTELS",
  },
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/shopping-cart--3--1.svg",
    title: "ONLINE STORES",
  },
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/gift-1.svg",
    title: "GIFT SHOPS",
  },
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/calendar-star-1.svg",
    title: "EVENTS AND CONFERENCES",
  },
];

const footerSections = [
  {
    title: "PACKAGING",
    links: [
      "Flat Bottom Bags",
      "Carton Boxes",
      "Side Gusset Bags",
      "Standup Bags",
    ],
  },
  {
    title: "SERVICES",
    links: ["Drip Bags", "Brew Bags", "Capsules"],
    opacityLinks: [false, true, true],
  },
  {
    title: "WIKI",
    links: [
      "ORDERS",
      "Payments and pricing",
      "Delivery",
      "Return & refund policy",
    ],
  },
  {
    title: "ABOUT US",
    links: ["Who we are", "Contact us", "Sustainability"],
  },
];

const socialIcons = [
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/telegram--13--1.svg",
    alt: "Telegram",
  },
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/facebook-logo-1.svg",
    alt: "Facebook",
  },
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/instagram--5--1.svg",
    alt: "Instagram",
  },
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/linkedin-1.svg",
    alt: "Linkedin",
  },
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/whatsapp-1.svg",
    alt: "Whatsapp",
  },
];

const sidebarItems = [
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/vector-18.svg",
    title: "DRIP BAGS",
    active: false,
    href: "/services",
  },
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/tea-1.svg",
    title: "BREW BAGS",
    badge: "COMING SOON",
    active: true,
    href: "/brew-bags",
  },
  {
    icon: "https://c.animaapp.com/mkvdixiwyRK4ZE/img/tea-2.svg",
    title: "СOLD BREW BAGS",
    badge: "COMING SOON",
    active: false,
    href: "/cold-brew-bags",
  },
];

export const BrewBags = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white">
      <header className="w-full bg-transparent py-4 md:py-6 relative z-50">
        <nav className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              className="w-[100px] sm:w-[125px] h-auto cursor-pointer"
              alt="ÖYE Logo"
              src="https://c.animaapp.com/mkvdixiwyRK4ZE/img/group-239.png"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            <Link
              to="/products"
              className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-[normal] hover:text-main transition-colors"
            >
              PRODUCTS
            </Link>
            <Link
              to="/services"
              className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-[normal] hover:text-main transition-colors"
            >
              SERVICES
            </Link>
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
              <Link
                to="/products"
                className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-[normal] hover:text-main transition-colors text-left py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                PRODUCTS
              </Link>
              <Link
                to="/services"
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

      <aside className="hidden xl:flex fixed left-[100px] top-[132px] flex-col gap-3 z-40">
        {sidebarItems.map((item, index) => (
          <div key={index}>
            {item.href.startsWith('/') ? (
              <Link to={item.href}>
                <Card
                  className={`w-[294px] h-[65px] rounded-[10px] cursor-pointer hover:shadow-md transition-shadow ${
                    item.active
                      ? "bg-white shadow-[0px_5px_16px_-1px_#00000026]"
                      : "bg-white opacity-60"
                  }`}
                >
                  <CardContent className="flex items-center gap-3 p-4 h-full">
                    <img
                      className="w-[31px] h-[31px]"
                      alt={item.title}
                      src={item.icon}
                    />
                    <div className="flex flex-col">
                      <span
                        className={`[font-family:'Inter',Helvetica] ${
                          item.active
                            ? "font-medium text-main"
                            : "font-semibold opacity-40 text-text"
                        } text-lg`}
                      >
                        {item.title}
                      </span>
                      {item.badge && (
                        <span
                          className={`[font-family:'Inter',Helvetica] font-medium ${
                            item.active ? "text-main" : "opacity-40 text-text"
                          } text-[10px]`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <Card
                className={`w-[294px] h-[65px] rounded-[10px] ${
                  item.active
                    ? "bg-white shadow-[0px_5px_16px_-1px_#00000026]"
                    : "bg-white opacity-60"
                }`}
              >
                <CardContent className="flex items-center gap-3 p-4 h-full">
                  <img
                    className="w-[31px] h-[31px]"
                    alt={item.title}
                    src={item.icon}
                  />
                  <div className="flex flex-col">
                    <span
                      className={`[font-family:'Inter',Helvetica] ${
                        item.active
                          ? "font-medium text-main"
                          : "font-semibold opacity-40 text-text"
                      } text-lg`}
                    >
                      {item.title}
                    </span>
                    {item.badge && (
                      <span
                        className={`[font-family:'Inter',Helvetica] font-medium ${
                          item.active ? "text-main" : "opacity-40 text-text"
                        } text-[10px]`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        ))}
      </aside>

      <main className="pt-8 px-4 sm:px-6 md:px-12 lg:px-[100px] xl:pt-[132px] xl:pl-[414px] xl:pr-[100px]">
        <section className="mb-16">
          <img
            className="w-full max-w-[925px] h-[380px] mx-auto object-cover"
            alt="Brew bags hero"
            src="https://c.animaapp.com/mkvdixiwyRK4ZE/img/mask-group.png"
          />
        </section>

        <section className="max-w-[925px] mx-auto mb-16">
          <h1 className="[font-family:'Inter',Helvetica] font-semibold text-[#101014] text-3xl tracking-[-0.60px] leading-[49px] mb-6 text-center">
            BREW BAGS
          </h1>

          <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg leading-[22px] mb-8 text-center">
            Brew bags make it easy for your customers to enjoy your coffee -
            just steep like tea. Send us your coffee and get a ready-to-sell
            product.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2.5 px-4 py-2 bg-white rounded-[40px]"
              >
                <img
                  className="w-[22px] h-[22px]"
                  alt={feature.text}
                  src={feature.icon}
                />
                <span className="[font-family:'Inter',Helvetica] font-medium text-text text-lg">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-4 justify-center mb-12">
            <Button className="h-auto px-6 py-4 bg-main rounded-[40px] border-2 border-[#264eab]">
              <span className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0.48px]">
                ADD WAITING LIST FOR TEST
              </span>
              <img
                className="w-2 h-[13px] ml-2.5"
                alt="Arrow"
                src="https://c.animaapp.com/mkvdixiwyRK4ZE/img/vector-1.svg"
              />
            </Button>
            <Button
              variant="outline"
              className="h-auto px-6 py-4 bg-white rounded-[40px] border-2 border-[#264eab]"
            >
              <span className="[font-family:'Inter',Helvetica] font-medium text-main text-base tracking-[0.48px]">
                TEST YOUR COFFEE
              </span>
            </Button>
          </div>

          <Card className="rounded-[20px] border border-[#101014] opacity-30 mb-12">
            <CardContent className="flex items-center justify-around p-6">
              <div className="flex items-center gap-4">
                <img
                  className="w-7 h-[54px]"
                  alt="MOQ icon"
                  src="https://c.animaapp.com/mkvdixiwyRK4ZE/img/vector-4.svg"
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

              <Separator orientation="vertical" className="h-[69px]" />

              <div className="flex items-center gap-4">
                <img
                  className="w-11 h-11"
                  alt="Production time icon"
                  src="https://c.animaapp.com/mkvdixiwyRK4ZE/img/picking-box--1--1.svg"
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
            <CardContent className="flex gap-8 p-8">
              <div className="flex-1 bg-[#f7f7f8] rounded-[20px] p-6 relative">
                <img
                  className="w-[217px] h-[259px] object-cover mx-auto"
                  alt="Product"
                  src="https://c.animaapp.com/mkvdixiwyRK4ZE/img/1-7503.png"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-center gap-1 px-3 py-2 bg-[#ffffff38] rounded-[60px] border border-white backdrop-blur-sm">
                    <img
                      className="w-[15px] h-[15px]"
                      alt="Hand zoom"
                      src="https://c.animaapp.com/mkvdixiwyRK4ZE/img/hand-zoom-in-1.svg"
                    />
                    <span className="[font-family:'Inter',Helvetica] font-normal text-text text-[10px]">
                      HOLD AND ROTATE
                    </span>
                  </div>
                </div>
                <div className="absolute top-1/2 right-4 w-[27px] h-[27px] bg-[#ffffff38] rounded-[60px] border border-white backdrop-blur-sm flex items-center justify-center">
                  <img
                    className="w-[15px] h-[15px]"
                    alt="Click"
                    src="https://c.animaapp.com/mkvdixiwyRK4ZE/img/cursor-finger-click-1.svg"
                  />
                </div>
                <img
                  className="absolute top-8 left-16 w-[83px] h-20"
                  alt="Mask"
                  src="https://c.animaapp.com/mkvdixiwyRK4ZE/img/mask-group-3.png"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="[font-family:'Inter',Helvetica] font-normal text-text text-[22px] leading-[39px] mb-4">
                    BREW BAGS
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-[22px] mb-8">
                    Customize every part of your product
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#f7f7f8] rounded-[20px] p-4 flex items-center justify-center">
                    <span className="[font-family:'Inter',Helvetica] font-medium text-black text-sm text-center">
                      DRIP PACKAGING
                    </span>
                  </div>
                  <div className="bg-[#f7f7f8] rounded-[20px] p-4 flex items-center justify-center">
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
            <CardContent className="p-8">
              <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-[22px] leading-[39px] mb-4 text-center">
                4 SIMPLE STEPS TO TEST OUR SERVICE
              </h3>

              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg leading-[22px] mb-8 text-center">
                🤩 You have a unique opportunity to test your coffee in drip
                bags before launching it
              </p>

              <div className="grid grid-cols-2 gap-4">
                {howItWorksSteps.map((step, index) => (
                  <Card
                    key={index}
                    className="rounded-[20px] border border-[#101014] opacity-30"
                  >
                    <CardContent className="p-6 flex gap-4">
                      <img
                        className="w-[47px] h-[47px]"
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

        <section className="max-w-[925px] mx-auto mb-16">
          <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[-0.60px] leading-[49px] mb-8 text-center">
            WHERE TO OFFER BREW BAGS?
          </h2>

          <div className="flex gap-4">
            <Card className="flex-1 rounded-[20px] border border-[#101014] opacity-30">
              <CardContent className="p-6">
                <img
                  className="w-full h-[271px] object-cover rounded-[20px] mb-4"
                  alt="Offices"
                  src="https://c.animaapp.com/mkvdixiwyRK4ZE/img/mask-group-4.png"
                />
                <div className="flex items-center gap-2 mb-4">
                  <img
                    className="w-6 h-6"
                    alt="Office icon"
                    src="https://c.animaapp.com/mkvdixiwyRK4ZE/img/chair-office-1.svg"
                  />
                  <span className="[font-family:'Inter',Helvetica] font-medium text-text text-lg">
                    OFFICES
                  </span>
                </div>
                <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-[22px]">
                  A simple solution for quality coffee at work, saving time and
                  enhancing productivity.
                </p>
              </CardContent>
            </Card>

            <div className="flex gap-2">
              {offerLocations.slice(1).map((location, index) => (
                <Card
                  key={index}
                  className="w-[71px] h-[389px] rounded-[20px] shadow-[0px_3px_18px_#0000001c]"
                >
                  <CardContent className="h-full flex flex-col items-center justify-center p-4 gap-4">
                    <span className="[font-family:'Inter',Helvetica] font-medium text-text text-lg text-center -rotate-90 whitespace-nowrap">
                      {location.title}
                    </span>
                    <img
                      className="w-6 h-6"
                      alt={location.title}
                      src={location.icon}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-[925px] mx-auto mb-16">
          <div className="grid grid-cols-2 gap-8">
            <Card className="relative rounded-[20px] overflow-hidden">
              <img
                className="w-full h-[260px] object-cover"
                alt="Send coffee"
                src="https://c.animaapp.com/mkvdixiwyRK4ZE/img/mask-group-1.png"
              />
              <CardContent className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/40">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-[22px] text-center leading-8 mb-4">
                  SEND US 1 KG OF YOUR COFFEE
                </h3>
                <Button
                  variant="outline"
                  className="h-auto px-6 py-3 rounded-[40px] border-2 border-white bg-transparent"
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
                alt="Configure packaging"
                src="https://c.animaapp.com/mkvdixiwyRK4ZE/img/mask-group-2.png"
              />
              <CardContent className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/40">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-[22px] text-center leading-8 mb-4">
                  CONFIGURE PACKAGING
                  <br />
                  FOR YOUR COFFEE
                </h3>
                <Button
                  variant="outline"
                  className="h-auto px-6 py-3 rounded-[40px] border-2 border-white bg-transparent"
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

      <footer className="mt-12 md:mt-24 px-4 sm:px-6 md:px-12 lg:px-[100px] pb-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 mb-8 md:mb-12">
            <div className="flex-shrink-0 max-w-full lg:max-w-[402px]">
              <img
                className="w-[147px] h-14 mb-6"
                alt="Logo"
                src="https://c.animaapp.com/mkvdixiwyRK4ZE/img/group-247.png"
              />
              <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[22px]">
                Say farewell to ordinary packaging and delays - we've got your
                back. Explore our diverse services and join us on an exciting
                journey!
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h3 className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg tracking-[0] leading-6 mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        {link === "Brew Bags" ? (
                          <Link
                            to="/brew-bags"
                            className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors"
                          >
                            {link}
                          </Link>
                        ) : (
                          <a
                            href="#"
                            className={`[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:underline ${
                              section.opacityLinks &&
                              section.opacityLinks[linkIndex]
                                ? "opacity-50"
                                : ""
                            }`}
                          >
                            {link}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <Separator className="mb-4" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[30px]">
              COPYRIGHT © 2024 ÖYE PACKAGING
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              <a
                href="#"
                className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[30px] hover:underline"
              >
                PRIVACY POLICY
              </a>
              <a
                href="#"
                className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[30px] hover:underline"
              >
                COOKIES
              </a>
              <a
                href="#"
                className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[30px] hover:underline"
              >
                TERMS & CONDITIONS
              </a>
            </div>

            <div className="flex items-center gap-2">
              {socialIcons.map((social, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors ${
                    index === 1 ? "bg-main" : "border border-[#7ba0d0] hover:bg-gray-50"
                  }`}
                >
                  <img className="w-5 h-5" alt={social.alt} src={social.icon} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
