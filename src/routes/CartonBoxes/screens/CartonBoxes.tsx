import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";

const navigationItems = [
    {
        label: "FLAT BOTTOM BAGS",
        icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-1.svg",
    },
    {
        label: "STANDUP BAGS",
        icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/group-419.png",
    },
    {
        label: "CARTON BOXES",
        icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-57.png",
        active: true,
    },
];

const features = [
    {
        icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/customize-computer-1.svg",
        text: "Customization options",
    },
    {
        icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/european-union.svg",
        text: "Made in Europe",
    },
    {
        icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/mug-hot-alt--2--8.svg",
        text: "Innovative materials",
    },
    {
        icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/shield-check-1.svg",
        text: "Sustainable packaging",
    },
];

const boxTypes = [
    {
        name: "VERTICAL BOX",
        image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-121.svg",
        category: "FLAT BOTTOM BAGS",
    },
    {
        name: "HORIZONTAL BOX",
        image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-130.svg",
        category: "FLAT BOTTOM BAGS",
    },
    {
        name: "TUCK FLAP BOX",
        image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/group-460.png",
        category: "STANDUP BAGS",
    },
    {
        name: "CLASSY BOX",
        image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-97--stroke-.svg",
        category: "DRIP & BREW BAGS",
    },
    {
        name: "PERFORATED BOX",
        image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-98--stroke-.svg",
        category: "DRIP & BREW BAGS",
    },
    {
        name: "ENVELOPE BOX",
        image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-92--stroke-.svg",
        category: "DRIP & BREW BAGS",
    },
];

const touchFeelOptions = [
    {
        icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/frame-279.svg",
        label: "Matte",
    },
    {
        icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/group-281.png",
        label: "Soft touch",
    },
];

const featuresList = [
    {
        name: "TOP OPENING",
        image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-127.svg", // Using same placeholder if specific icon unseen
        detail: "https://c.animaapp.com/mkve5d5vXaRKB0/img/group-455.png",
    },
    {
        name: "TEAR STRIP",
        image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-127.svg",
        detail: "https://c.animaapp.com/mkve5d5vXaRKB0/img/group-454.png",
    },
    {
        name: "PERFORATION",
        image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-127.svg",
        detail:
            "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-126--stroke--1.svg",
    },
    {
        name: "CUTOUT",
        image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-127.svg",
        detail: "https://c.animaapp.com/mkve5d5vXaRKB0/img/mask-group-2.png",
    },
    {
        name: "PERFORATED TEAR STRIP",
        image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-127.svg",
        detail: "https://c.animaapp.com/mkve5d5vXaRKB0/img/rectangle-4837.svg",
    },
];

const certifications = [
    { label: "FSC Certificate" },
    { label: "Compostable Certificate" },
];

const keyFeatures = [
    "Highly recyclable materials",
    "Made in Europe",
    "Design check before print",
    "Production time from 4 - 6 weeks",
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
        icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/telegram--13--1.svg",
        alt: "Telegram",
    },
    {
        icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/facebook-logo-1.svg",
        alt: "Facebook",
        active: true,
    },
    {
        icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/instagram--5--1.svg",
        alt: "Instagram",
    },
    {
        icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/linkedin-1.svg",
        alt: "Linkedin",
    },
    {
        icon: "https://c.animaapp.com/mkve5d5vXaRKB0/img/whatsapp-1.svg",
        alt: "Whatsapp",
    },
];

export const CartonBoxes = (): JSX.Element => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            <header className="w-full bg-transparent py-4 md:py-6 relative z-50">
                <nav className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/">
                        <img
                            className="w-[100px] sm:w-[125px] h-auto cursor-pointer"
                            alt="ÖYE Logo"
                            src="https://c.animaapp.com/mkve5d5vXaRKB0/img/group-239.png"
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

            <div className="pt-8 md:pt-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px]">
                    <div className="flex gap-8">
                        <aside className="hidden xl:flex w-[300px] flex-shrink-0">
                            <nav className="space-y-4">
                                {navigationItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center gap-4 p-4 rounded-[10px] cursor-pointer ${item.active
                                                ? "bg-white shadow-[0px_5px_16px_-1px_#00000026] opacity-60"
                                                : ""
                                            }`}
                                    >
                                        <img className="w-7 h-8" alt={item.label} src={item.icon} />
                                        <span
                                            className={`[font-family:'Inter',Helvetica] text-lg tracking-[0] leading-[normal] ${item.active
                                                    ? "font-semibold text-main"
                                                    : "font-normal text-text"
                                                }`}
                                        >
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </nav>
                        </aside>

                        <main className="flex-1">
                            <section className="mb-8">
                                <div className="grid grid-cols-[400px_1fr] gap-8 items-start">
                                    <div className="relative">
                                        <div className="w-full h-[380px] bg-bg-beige rounded-[20px] flex items-center justify-center">
                                            <img
                                                className="w-[239px] h-[197px] object-cover"
                                                alt="Carton Box"
                                                src="https://c.animaapp.com/mkve5d5vXaRKB0/img/----------2-1.png"
                                            />
                                        </div>

                                        <div className="absolute top-2.5 left-[75px] flex items-center gap-[3px] px-3 py-2 bg-[#ffffff38] rounded-[60px] border border-white backdrop-blur-sm">
                                            <img
                                                className="w-[15px] h-[15px]"
                                                alt="Hand zoom in"
                                                src="https://c.animaapp.com/mkve5d5vXaRKB0/img/hand-zoom-in-1.svg"
                                            />
                                            <span className="[font-family:'Inter',Helvetica] font-normal text-text text-[10px] whitespace-nowrap">
                                                HOLD AND ROTATE
                                            </span>
                                        </div>

                                        <div className="absolute top-2.5 left-[263px] w-[27px] h-[27px] bg-[#ffffff38] rounded-[60px] border border-white rotate-90 backdrop-blur-sm flex items-center justify-center">
                                            <img
                                                className="w-[15px] h-[15px] -rotate-90"
                                                alt="Cursor finger click"
                                                src="https://c.animaapp.com/mkve5d5vXaRKB0/img/cursor-finger-click-1.svg"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[-0.60px] leading-[49px]">
                                            CARTON BOXES
                                        </h1>

                                        <div className="flex flex-wrap gap-2">
                                            {features.map((feature, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="outline"
                                                    className="flex items-center gap-2.5 px-4 py-2 bg-white rounded-[40px] border-0 h-auto"
                                                >
                                                    <img
                                                        className="w-[22px] h-[22px]"
                                                        alt={feature.text}
                                                        src={feature.icon}
                                                    />
                                                    <span className="[font-family:'Inter',Helvetica] font-medium text-text text-lg leading-8">
                                                        {feature.text}
                                                    </span>
                                                </Badge>
                                            ))}
                                        </div>

                                        <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                                            Our coffee boxes are made to hold your bags in a neat and
                                            stylish way. They&apos;re durable, easy to open, and look
                                            great on the shelf - a simple and thoughtful solution to
                                            present your coffee and let your brand shine.
                                        </p>

                                        <div className="flex gap-4">
                                            <Button className="rounded-[40px] border-2 border-[#264eab] bg-main text-white [font-family:'Inter',Helvetica] font-medium text-base tracking-[0.48px] h-auto px-6 py-4">
                                                CONFIGURE PACKAGING
                                                <img
                                                    className="ml-2.5 w-2 h-[13px]"
                                                    alt="Arrow"
                                                    src="https://c.animaapp.com/mkve5d5vXaRKB0/img/vector.svg"
                                                />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="rounded-[40px] border-2 border-[#264eab] bg-white text-main [font-family:'Inter',Helvetica] font-medium text-base tracking-[0.48px] h-auto px-6 py-4"
                                            >
                                                ORDER SAMPLE KIT
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-8">
                                {/* Fixed opacity inheritance issue by removing opacity-30 from parent */}
                                <Card className="rounded-[20px] border border-[#101014]/30">
                                    <CardContent className="p-0">
                                        <div className="grid grid-cols-2 divide-x divide-[#101014]/30">
                                            <div className="p-6 text-center">
                                                <div className="flex items-center justify-center gap-4 mb-2">
                                                    <div className="w-10 h-[43px] bg-[url(https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-2.png)] bg-[100%_100%]" />
                                                    <Separator
                                                        orientation="vertical"
                                                        className="h-[69px]"
                                                    />
                                                    <img
                                                        className="w-11 h-11"
                                                        alt="Picking box"
                                                        src="https://c.animaapp.com/mkve5d5vXaRKB0/img/picking-box--1--1.svg"
                                                    />
                                                </div>
                                                <p className="[font-family:'Inter',Helvetica] font-medium text-text text-lg text-center tracking-[0] leading-[29px] mb-2">
                                                    MOQ (MINIMUM ORDER QUANTITY)
                                                </p>
                                                <p className="[font-family:'Inter',Helvetica] font-medium text-text text-3xl text-center tracking-[0] leading-[29px]">
                                                    500 PCS
                                                </p>
                                            </div>
                                            <div className="p-6 text-center">
                                                <p className="[font-family:'Inter',Helvetica] font-medium text-text text-lg text-center tracking-[0] leading-[29px] mb-2">
                                                    PRODUCTION TIME FROM
                                                </p>
                                                <p className="[font-family:'Inter',Helvetica] font-medium text-text text-3xl text-center tracking-[0] leading-[29px]">
                                                    4 WEEKS
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            <section className="mb-8">
                                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[-0.60px] leading-[49px] mb-6 text-center">
                                    СUSTOMIZATION OPTIONS
                                </h2>

                                <Card className="rounded-[20px] border border-[#101014]/30">
                                    <CardContent className="p-6">
                                        <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-[22px] tracking-[0] leading-[39px] mb-6">
                                            MATERIALS
                                        </h3>

                                        <div className="grid grid-cols-[305px_1fr] gap-8">
                                            <img
                                                className="w-full h-[132px] object-cover"
                                                alt="Material"
                                                src="https://c.animaapp.com/mkve5d5vXaRKB0/img/mask-group-3.png"
                                            />

                                            <div className="space-y-4">
                                                <h4 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-8">
                                                    PAPERBOARD
                                                </h4>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[22px]">
                                                        Grammage: 360g / 600 microns
                                                        <br />
                                                        FSC Certified
                                                    </div>
                                                    <div className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[22px]">
                                                        100% recyclable material
                                                        <br />
                                                        Compostable
                                                    </div>
                                                </div>
                                                <div className="flex gap-2.5 mt-2">
                                                    <div className="flex gap-1" aria-label="Rating 4.5 out of 5">
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                            <img
                                                                key={star}
                                                                className="w-3 h-3"
                                                                src="https://c.animaapp.com/mkve5d5vXaRKB0/img/star-1-1.svg" // Assuming star icon exists or copy from other
                                                                alt=""
                                                                style={{ filter: star > 4.5 ? "grayscale(100%)" : "none" }} // Approximate visual
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            <section className="mb-8">
                                <Card className="rounded-[20px] border border-[#101014]/30 bg-[#f7f7f8]/50">
                                    <CardContent className="p-6">
                                        <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-[22px] tracking-[0] leading-[39px] mb-6">
                                            TYPES OF BOXES
                                        </h3>

                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-8 mb-4 text-center">
                                                    FLAT BOTTOM BAGS
                                                </h4>
                                                <Card className="bg-[#f7f7f8] rounded-[20px] border-0">
                                                    <CardContent className="p-6">
                                                        <div className="grid grid-cols-2 gap-6">
                                                            {boxTypes.slice(0, 2).map((box, index) => (
                                                                <div key={index} className="text-center">
                                                                    <Card className="bg-white rounded-[20px] border border-[#101014] mb-2.5">
                                                                        <CardContent className="p-8 flex items-center justify-center h-[150px]">
                                                                            <img
                                                                                className="max-w-full max-h-full"
                                                                                alt={box.name}
                                                                                src={box.image}
                                                                            />
                                                                        </CardContent>
                                                                    </Card>
                                                                    <p className="[font-family:'Inter',Helvetica] font-medium text-text text-sm text-center tracking-[0] leading-[22px]">
                                                                        {box.name}
                                                                    </p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </div>

                                            <div>
                                                <h4 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-8 mb-4 text-center">
                                                    STANDUP BAGS
                                                </h4>
                                                <Card className="bg-[#f7f7f8] rounded-[20px] border-0">
                                                    <CardContent className="p-6">
                                                        <div className="flex justify-center">
                                                            {boxTypes.slice(2, 3).map((box, index) => (
                                                                <div key={index} className="text-center w-1/3">
                                                                    <Card className="bg-white rounded-[20px] border border-[#101014] mb-2.5">
                                                                        <CardContent className="p-8 flex items-center justify-center h-[137px]">
                                                                            <img
                                                                                className="max-w-full max-h-full"
                                                                                alt={box.name}
                                                                                src={box.image}
                                                                            />
                                                                        </CardContent>
                                                                    </Card>
                                                                    <p className="[font-family:'Inter',Helvetica] font-medium text-text text-sm text-center tracking-[0] leading-[22px]">
                                                                        {box.name}
                                                                    </p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </div>

                                            <div>
                                                <h4 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-8 mb-4 text-center">
                                                    DRIP & BREW BAGS
                                                </h4>
                                                <Card className="bg-[#f7f7f8] rounded-[20px] border-0">
                                                    <CardContent className="p-6">
                                                        <div className="grid grid-cols-3 gap-6">
                                                            {boxTypes.slice(3).map((box, index) => (
                                                                <div key={index} className="text-center">
                                                                    <Card className="bg-white rounded-[20px] border border-[#101014] mb-2.5">
                                                                        <CardContent className="p-8 flex items-center justify-center h-[137px]">
                                                                            <img
                                                                                className="max-w-full max-h-full"
                                                                                alt={box.name}
                                                                                src={box.image}
                                                                            />
                                                                        </CardContent>
                                                                    </Card>
                                                                    <p className="[font-family:'Inter',Helvetica] font-medium text-text text-sm text-center tracking-[0] leading-[22px]">
                                                                        {box.name}
                                                                    </p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            <section className="mb-8">
                                <div className="grid grid-cols-2 gap-6">
                                    <Card className="rounded-[20px] border border-[#101014]/30">
                                        <CardContent className="p-6">
                                            <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-[22px] tracking-[0] leading-8 mb-6">
                                                PRINT CUSTOMIZATION
                                            </h3>

                                            <div className="relative">
                                                <div className="w-full h-[188px] bg-bg-beige rounded-[20px] flex items-center justify-center mb-4">
                                                    <img
                                                        className="w-[159px] h-[131px] object-cover"
                                                        alt="Print example"
                                                        src="https://c.animaapp.com/mkve5d5vXaRKB0/img/----------2-1.png"
                                                    />
                                                </div>

                                                <div className="text-center">
                                                    <p className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-[22px]">
                                                        FULLY PRINTED
                                                    </p>
                                                    <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[22px]">
                                                        (front &amp; back &amp; bottom)
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="rounded-[20px] border border-[#101014]/30">
                                        <CardContent className="p-6">
                                            <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-[22px] tracking-[0] leading-[39px] mb-6">
                                                TOUCH &amp; FEEL CUSTOMIZATION
                                            </h3>

                                            <div className="flex flex-wrap gap-2">
                                                {touchFeelOptions.map((option, index) => (
                                                    <Badge
                                                        key={index}
                                                        variant="outline"
                                                        className="flex items-center gap-2.5 px-5 py-1.5 bg-white rounded-[50px] border border-[#101014] h-auto"
                                                    >
                                                        <img
                                                            className="w-[26px] h-[26px]"
                                                            alt={option.label}
                                                            src={option.icon}
                                                        />
                                                        <span className="[font-family:'Inter',Helvetica] font-medium text-text text-sm text-center tracking-[0] leading-8">
                                                            {option.label}
                                                        </span>
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="[font-family:'Inter',Helvetica] font-medium text-text text-[22px] tracking-[0] leading-[39px] mb-6">
                                    FEATURES
                                </h2>

                                <div className="grid grid-cols-2 gap-6">
                                    {featuresList.map((feature, index) => (
                                        <Card
                                            key={index}
                                            className="bg-bg-gray rounded-[20px] border-0"
                                        >
                                            <CardContent className="p-8">
                                                <div className="relative h-[148px] flex items-center justify-center mb-4">
                                                    <img
                                                        className="w-[175px] h-[148px]"
                                                        alt={feature.name}
                                                        src={feature.image}
                                                    />
                                                    <img
                                                        className="absolute"
                                                        alt={`${feature.name} detail`}
                                                        src={feature.detail}
                                                        style={{
                                                            maxWidth: "100px",
                                                            maxHeight: "80px",
                                                        }}
                                                    />
                                                </div>
                                                <p className="[font-family:'Inter',Helvetica] font-medium text-text text-sm text-center tracking-[0] leading-8">
                                                    {feature.name}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </section>

                            <section className="mb-8">
                                <Card className="bg-[#f7f7f8] rounded-[20px] border-0">
                                    <CardContent className="p-8">
                                        <h2 className="[font-family:'Inter',Helvetica] font-medium text-text text-[22px] tracking-[0] leading-[39px] mb-6">
                                            DETAILS THAT MAKE THE DIFFERENCE
                                        </h2>

                                        <div className="grid grid-cols-2 gap-6">
                                            <Card className="bg-white rounded-[20px] border border-[#1010144c]">
                                                <CardContent className="p-6">
                                                    <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-8 mb-4">
                                                        CERTIFICATIONS
                                                    </h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {certifications.map((cert, index) => (
                                                            <Badge
                                                                key={index}
                                                                variant="outline"
                                                                className="bg-white rounded-[50px] border border-[#b7b7b94c] h-auto px-5 py-[5px]"
                                                            >
                                                                <span className="[font-family:'Inter',Helvetica] font-normal italic text-text text-sm tracking-[0] leading-8">
                                                                    {cert.label}
                                                                </span>
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>

                                            <Card className="bg-bord rounded-[20px] border-0 opacity-[0.26]">
                                                <CardContent className="p-6">
                                                    <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-8 mb-4">
                                                        KEY FEATURES:
                                                    </h3>
                                                    <ul className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-8 space-y-1">
                                                        {keyFeatures.map((feature, index) => (
                                                            <li key={index}>- {feature}</li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>

                            <section className="mb-8">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="relative h-[260px] rounded-[20px] overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover"
                                            alt="Questions"
                                            src="https://c.animaapp.com/mkve5d5vXaRKB0/img/mask-group.png"
                                        />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                                            <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-[22px] text-center tracking-[0] leading-[39px]">
                                                STILL HAVE QUESTIONS?
                                            </h3>
                                            <Button
                                                variant="outline"
                                                className="rounded-[40px] border-2 border-white bg-transparent text-white [font-family:'Inter',Helvetica] font-medium text-base tracking-[0.48px] h-auto px-6 py-3 hover:bg-white/10"
                                            >
                                                BOOK A CALL
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="relative h-[260px] rounded-[20px] overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover"
                                            alt="Packaging"
                                            src="https://c.animaapp.com/mkve5d5vXaRKB0/img/mask-group-1.png"
                                        />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                                            <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-[22px] text-center tracking-[0] leading-[39px]">
                                                ENJOY THE PACKAGING
                                            </h3>
                                            <Button
                                                variant="outline"
                                                className="rounded-[40px] border-2 border-white bg-transparent text-white [font-family:'Inter',Helvetica] font-medium text-base tracking-[0.48px] h-auto px-6 py-3 hover:bg-white/10"
                                            >
                                                CONFIGURE PACKAGING
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>
            </div>

            <footer className="bg-white border-t border-[#101014]/10 mt-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] py-8">
                    <div className="mb-8">
                        <img
                            className="w-[147px] h-14 mb-6"
                            alt="Logo"
                            src="https://c.animaapp.com/mkve5d5vXaRKB0/img/group-247.png"
                        />
                        <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[22px] max-w-[402px]">
                            Say farewell to ordinary packaging and delays - we&#39;ve got your
                            back. Explore our diverse services and join us on an exciting
                            journey!
                        </p>
                    </div>

                    <div className="grid grid-cols-4 gap-8 mb-8">
                        {footerSections.map((section, index) => (
                            <div key={index}>
                                <h4 className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg tracking-[0] leading-6 mb-4">
                                    {section.title}
                                </h4>
                                <ul className="space-y-2">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            {link === "Carton Boxes" ? (
                                                <Link
                                                    to="/carton-boxes"
                                                    className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors"
                                                >
                                                    {link}
                                                </Link>
                                            ) : (
                                                <a
                                                    href="#"
                                                    className={`[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:underline ${link === "Brew Bags" || link === "Capsules"
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

                    <Separator className="mb-4" />

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-8">
                            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[30px]">
                                COPYRIGHT © 2024 ÖYE PACKAGING
                            </p>
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
                                TERMS &amp; CONDITIONS
                            </a>
                        </div>

                        <div className="flex items-center gap-2">
                            {socialIcons.map((social, index) => (
                                <div
                                    key={index}
                                    className={`w-10 h-10 rounded-[10px] flex items-center justify-center ${social.active ? "bg-main" : "border border-[#7ba0d0]"
                                        }`}
                                >
                                    <img className="w-5 h-5" alt={social.alt} src={social.icon} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
