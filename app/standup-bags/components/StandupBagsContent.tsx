'use client'

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const bagSizes = [
    { size: "50g" },
    { size: "100g" },
    { size: "250g" },
    { size: "500g" },
]

const printOptions = [
    {
        title: "SINGLE COLOR",
        subtitle: "(from stock)",
        image: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/matte-coffee-bag-mockup-01-1.png",
    },
    {
        title: "FULLY PRINTED",
        subtitle: "(front & back & bottom)",
        image: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/matte-coffee-bag-mockup-01-2.png",
    },
]

const touchOptions = [
    {
        icon: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/frame-279.svg",
        label: "Matte",
    },
    {
        icon: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/group-281.png",
        label: "Soft touch",
    },
    {
        icon: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/group-282.png",
        label: "Sandy touch",
    },
]

const featuresList = [
    {
        name: "TOP OPENING ZIPPER",
        image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-127.svg",
        detail: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/top-opening-zipper.png",
    },
    {
        name: "TEAR NOTCH",
        image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-127.svg",
        detail: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/vector-31.svg",
    },
    {
        name: "COFFEE VALVE",
        image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-127.svg",
        detail: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/ellipse-81.png",
    },
    {
        name: "CARTON BOX",
        image: "https://c.animaapp.com/mkve5d5vXaRKB0/img/vector-127.svg",
        detail: "https://c.animaapp.com/mkve5d5vXaRKB0/img/mask-group-4.png",
    },
]

const barrierProtection = [
    {
        icon: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/group-285.png",
        title: "OXYGEN",
        description: "causing oxidation and staling.",
    },
    {
        icon: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/group.png",
        title: "HUMIDITY",
        description: "accelerating the moisture absorption, leading to loss of flavor and potential mold growth.",
    },
    {
        icon: "https://c.animaapp.com/mko1bcw3ZdsnAC/img/group-287.png",
        title: "UV LIGHT",
        description: "accelerating the degradation of certain compounds, resulting in a loss of flavor and aroma.",
    },
]

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
    {
        title: "CONTACT US",
        links: []
    }
]

export function StandupBagsContent() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <header className="w-full bg-transparent py-4 md:py-6 relative z-50">
                <nav className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] flex items-center justify-between">
                    <Link href="/">
                        <img
                            className="w-[100px] sm:w-[125px] h-auto cursor-pointer"
                            alt="ÖYE Logo"
                            src="/images/logo.svg"
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

            <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] xl:pl-[414px]">
                <aside className="hidden xl:flex fixed left-[100px] top-[132px] flex-col gap-3 z-40">
                    <Link href="/products">
                        <Card className="w-[294px] h-[88px] bg-white rounded-[20px] border-0 shadow-none cursor-pointer hover:bg-gray-50 transition-colors">
                            <CardContent className="flex items-center gap-4 p-0 h-full px-6">
                                <div className="w-10 h-10 flex items-center justify-center">
                                    <img
                                        className="w-[31px] h-[31px] opacity-40"
                                        alt="Flat Bottom Bags Icon"
                                        src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/vector-1-1.svg"
                                    />
                                </div>
                                <span className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-[normal] opacity-40">
                                    FLAT BOTTOM BAGS
                                </span>
                            </CardContent>
                        </Card>
                    </Link>

                    <Card className="w-[294px] h-[88px] bg-[#e8eef5] rounded-[20px] border-0 shadow-none">
                        <CardContent className="flex items-center gap-4 p-0 h-full px-6">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <img
                                    className="w-[31px] h-[31px]"
                                    alt="Standup Bags Icon"
                                    src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/vector-2.png"
                                />
                            </div>
                            <span className="[font-family:'Inter',Helvetica] font-semibold text-main text-lg tracking-[0] leading-[normal]">
                                STANDUP BAGS
                            </span>
                        </CardContent>
                    </Card>

                    <Link href="/carton-boxes">
                        <Card className="w-[294px] h-[88px] bg-white rounded-[20px] border-0 shadow-none cursor-pointer hover:bg-gray-50 transition-colors">
                            <CardContent className="flex items-center gap-4 p-0 h-full px-6">
                                <div className="w-10 h-10 flex items-center justify-center">
                                    <img
                                        className="w-[31px] h-[31px] opacity-40"
                                        alt="Carton Boxes Icon"
                                        src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/vector-2.png"
                                    />
                                </div>
                                <span className="[font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-[normal] opacity-40">
                                    CARTON BOXES
                                </span>
                            </CardContent>
                        </Card>
                    </Link>
                </aside>

                <section className="pt-8 pb-16">
                    <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                        <div className="relative flex justify-center lg:justify-start flex-shrink-0">
                            <div className="w-full max-w-[550px] h-[450px] bg-bg-beige rounded-[20px] flex items-center justify-center relative">
                                <img
                                    className="w-[177px] h-[323px] object-cover"
                                    alt="Standup bag"
                                    src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/matte-coffee-bag-mockup-02-2.png"
                                />

                                <div className="absolute top-[10px] left-1/2 -translate-x-1/2 flex items-center gap-2">
                                    <Badge className="h-[27px] px-3 py-2 bg-[#ffffff38] rounded-[60px] border border-white backdrop-blur-sm flex items-center gap-[3px]">
                                        <img
                                            className="w-[15px] h-[15px]"
                                            alt="Hand zoom in"
                                            src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/hand-zoom-in-1.svg"
                                        />
                                        <span className="[font-family:'Inter',Helvetica] font-normal text-text text-[10px]">
                                            HOLD AND ROTATE
                                        </span>
                                    </Badge>

                                    <div className="w-[27px] h-[27px] bg-[#ffffff38] rounded-[60px] border border-white backdrop-blur-sm rotate-90 flex items-center justify-center">
                                        <img
                                            className="w-[15px] h-[15px]"
                                            alt="Cursor finger click"
                                            src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/cursor-finger-click-1.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 max-w-[520px]">
                            <h1 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl md:text-4xl tracking-[-0.60px] leading-tight">
                                STANDUP BAGS
                            </h1>

                            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg leading-[22px]">
                                Our standup bags combine premium quality with a sleek, functional design. The wide shape ensures easy filling, while the large front panel offers the perfect canvas for brand visibility. Crafted for both convenience and style.
                            </p>

                            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                                <div className="flex items-center gap-2.5">
                                    <img
                                        className="w-[22px] h-[22px]"
                                        alt="Customization options"
                                        src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/customize-computer-1.svg"
                                    />
                                    <span className="[font-family:'Inter',Helvetica] font-normal text-text text-base">
                                        Customization options
                                    </span>
                                </div>

                                <div className="flex items-center gap-2.5">
                                    <img
                                        className="w-[22px] h-[22px]"
                                        alt="Made in Europe"
                                        src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/european-union.svg"
                                    />
                                    <span className="[font-family:'Inter',Helvetica] font-normal text-text text-base">
                                        Made in Europe
                                    </span>
                                </div>

                                <div className="flex items-center gap-2.5">
                                    <img
                                        className="w-[22px] h-[22px]"
                                        alt="Innovative materials"
                                        src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/mug-hot-alt--2--8.svg"
                                    />
                                    <span className="[font-family:'Inter',Helvetica] font-normal text-text text-base">
                                        Innovative materials
                                    </span>
                                </div>

                                <div className="flex items-center gap-2.5">
                                    <img
                                        className="w-[22px] h-[22px]"
                                        alt="Best coffee protection"
                                        src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/shield-check-1.svg"
                                    />
                                    <span className="[font-family:'Inter',Helvetica] font-normal text-text text-base">
                                        Best coffee protection
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="h-auto px-8 py-4 bg-main rounded-[40px] border-2 border-[#264eab] text-white text-base tracking-[0.48px] [font-family:'Inter',Helvetica] font-medium flex items-center justify-center gap-2.5 hover:bg-[#1e3d8f] transition-colors">
                                    CONFIGURE PACKAGING
                                    <img
                                        className="w-2 h-[13px]"
                                        alt="Arrow"
                                        src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/vector-10.svg"
                                    />
                                </Button>

                                <Button
                                    variant="outline"
                                    className="h-auto px-8 py-4 bg-white rounded-[40px] border-2 border-[#264eab] text-main text-base tracking-[0.48px] [font-family:'Inter',Helvetica] font-medium hover:bg-gray-50 transition-colors"
                                >
                                    ORDER SAMPLE KIT
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <Card className="mb-16 rounded-[20px] border border-[#101014] bg-transparent">
                    <CardContent className="p-4 sm:p-6 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <div className="flex items-center gap-6">
                                <img
                                    className="w-7 h-[54px]"
                                    alt="Icon"
                                    src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/vector-4.png"
                                />
                                <div>
                                    <p className="[font-family:'Inter',Helvetica] font-medium text-text text-lg leading-[29px]">
                                        MOQ (MINIMUM ORDER QUANTITY)
                                    </p>
                                    <p className="[font-family:'Inter',Helvetica] font-medium text-text text-3xl leading-[29px]">
                                        2500 PCS
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 md:border-l border-[#101014] md:pl-8">
                                <img
                                    className="w-11 h-11"
                                    alt="Picking box"
                                    src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/picking-box--1--1.svg"
                                />
                                <div>
                                    <p className="[font-family:'Inter',Helvetica] font-medium text-text text-lg text-center leading-[29px]">
                                        PRODUCTION TIME FROM
                                    </p>
                                    <p className="[font-family:'Inter',Helvetica] font-medium text-text text-3xl text-center leading-[29px]">
                                        4 WEEKS
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <section className="mb-16">
                    <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[-0.60px] leading-[49px] text-center mb-8">
                        СUSTOMIZATION OPTIONS
                    </h2>

                    <Card className="rounded-[20px] border border-[#101014]/30 mb-8">
                        <CardContent className="p-4 sm:p-6 md:p-8">
                            <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg sm:text-[22px] leading-[39px] mb-6">
                                MATERIALS
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                <Card className="bg-[#f7f7f8] rounded-[20px] border-0">
                                    <CardContent className="p-6">
                                        <img
                                            className="w-full h-[132px] object-cover mb-4 rounded-lg"
                                            alt="Performance series"
                                            src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/mask-group-1.png"
                                        />
                                        <h4 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg leading-8 mb-2">
                                            PERFORMANCE SERIES
                                        </h4>
                                        <ul className="[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-[22px] mb-4 list-disc pl-5">
                                            <li>Premium coffee shelf life</li>
                                            <li>Metalized effects possible</li>
                                            <li>100% recyclable material</li>
                                            <li>Materials sourced from Europe</li>
                                        </ul>
                                        <div className="flex gap-2">
                                            <Badge className="h-[29px] px-5 py-[5px] bg-white rounded-[50px] border border-[#b7b7b94c]">
                                                <span className="[font-family:'Inter',Helvetica] font-light italic text-text text-xs">
                                                    Recyclable сode 4
                                                </span>
                                            </Badge>
                                            <Badge className="h-[29px] px-5 py-[5px] bg-white rounded-[50px] border border-[#b7b7b94c] flex items-center gap-2">
                                                <span className="[font-family:'Inter',Helvetica] font-light italic text-text text-xs">
                                                    Recycling rate
                                                </span>
                                                <img
                                                    className="w-[70.66px] h-3"
                                                    alt="Rating"
                                                    src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/group-398.png"
                                                />
                                            </Badge>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="bg-[#f7f7f8] rounded-[20px] border-0">
                                    <CardContent className="p-6">
                                        <img
                                            className="w-full h-[132px] object-cover mb-4 rounded-lg"
                                            alt="Barrier series"
                                            src="https://c.animaapp.com/mkve5d5vXaRKB0/img/mask-group-3.png"
                                        />
                                        <h4 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg leading-8 mb-2">
                                            BARRIER SERIES
                                        </h4>
                                        <ul className="[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-[22px] mb-4 list-disc pl-5">
                                            <li>High barrier</li>
                                            <li>Wide range of matte elements possible</li>
                                            <li>100% recyclable material</li>
                                            <li>Materials sourced from Europe</li>
                                        </ul>
                                        <div className="flex gap-2">
                                            <Badge className="h-[29px] px-5 py-[5px] bg-white rounded-[50px] border border-[#b7b7b94c]">
                                                <span className="[font-family:'Inter',Helvetica] font-light italic text-text text-xs">
                                                    Recyclable сode 5
                                                </span>
                                            </Badge>
                                            <Badge className="h-[29px] px-5 py-[5px] bg-white rounded-[50px] border border-[#b7b7b94c] flex items-center gap-2">
                                                <span className="[font-family:'Inter',Helvetica] font-light italic text-text text-xs">
                                                    Sustainability rate
                                                </span>
                                                <img
                                                    className="w-[70.29px] h-3"
                                                    alt="Rating"
                                                    src="https://c.animaapp.com/mko1bcw3ZdsnAC/img/group-398-1.png"
                                                />
                                            </Badge>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-[20px] border border-[#101014]/30 mb-8">
                        <CardContent className="p-4 sm:p-6 md:p-8">
                            <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg sm:text-[22px] leading-[39px] mb-4">
                                CHOOSE A BAG SIZE
                            </h3>
                            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-[22px] mb-6">
                                This product is perfect for various display cases and transportation. It is suitable for all types of coffee beans (from small to very large).
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {bagSizes.map((bag, index) => (
                                    <Card
                                        key={index}
                                        className="rounded-[20px] border border-[#101014] hover:border-main cursor-pointer transition-colors"
                                    >
                                        <CardContent className="p-6 flex items-center justify-center h-[123px]">
                                            <span className="[font-family:'Inter',Helvetica] font-medium text-text text-[22px] text-center">
                                                {bag.size}
                                            </span>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-[20px] border border-[#101014]/30 mb-8">
                        <CardContent className="p-4 sm:p-6 md:p-8">
                            <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg sm:text-[22px] leading-[39px] mb-4">
                                PRINT CUSTOMIZATION
                            </h3>
                            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-[22px] mb-6">
                                Try different print options for your package
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                                {printOptions.map((option, index) => (
                                    <div key={index} className="text-center">
                                        <div className="w-full max-w-[279px] h-[269px] mx-auto bg-bg-beige rounded-[20px] mb-4 flex items-center justify-center">
                                            <img
                                                className="max-w-full max-h-full"
                                                alt={option.title}
                                                src={option.image}
                                            />
                                        </div>
                                        <p className="[font-family:'Inter',Helvetica] text-text text-lg text-center leading-[18px]">
                                            <span className="font-medium leading-[22px]">
                                                {option.title}
                                                <br />
                                            </span>
                                            <span className="text-sm leading-[22px]">
                                                {option.subtitle}
                                            </span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-[20px] border border-[#101014]/30 mb-8">
                        <CardContent className="p-4 sm:p-6 md:p-8">
                            <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg sm:text-[22px] leading-[39px] mb-4">
                                TOUCH & FEEL CUSTOMIZATION
                            </h3>
                            <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm leading-[22px] mb-6">
                                Indulge in a sensory experience with various tactile effects. Customize the touch and feel of your bag with options such as:
                            </p>

                            <div className="flex flex-wrap gap-4 md:gap-[30px] justify-center">
                                {touchOptions.map((option, index) => (
                                    <Badge
                                        key={index}
                                        className="h-auto px-5 py-1.5 bg-white rounded-[50px] border border-[#101014] flex items-center gap-2.5 cursor-pointer hover:bg-gray-50 transition-colors"
                                    >
                                        <img
                                            className="w-[26px] h-[26px]"
                                            alt={option.label}
                                            src={option.icon}
                                        />
                                        <span className="[font-family:'Inter',Helvetica] font-medium text-text text-sm text-center">
                                            {option.label}
                                        </span>
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-[20px] border border-[#101014]/30 bg-transparent mb-8">
                        <CardContent className="p-4 sm:p-6 md:p-8">
                            <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg sm:text-[22px] leading-[39px] mb-4">
                                FEATURES
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                                {featuresList.map((feature, index) => (
                                    <Card key={index} className="bg-bg-gray rounded-[20px] bg-opacity-[0.5] border-0">
                                        <CardContent className="p-6 relative h-[263px]">
                                            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[95px] h-[95px] bg-white rounded-[47.5px] flex items-center justify-center">
                                                <img
                                                    className="w-[95px] h-[95px]"
                                                    alt={feature.name}
                                                    src={feature.image}
                                                />
                                            </div>
                                            <img
                                                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                                                alt={feature.name + " detail"}
                                                src={feature.detail}
                                                style={{ maxWidth: "150px", maxHeight: "100px" }}
                                            />
                                        </CardContent>
                                        <p className="[font-family:'Inter',Helvetica] font-medium text-text text-sm text-center pb-4">
                                            {feature.name}
                                        </p>
                                    </Card>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="mb-8">
                        <h3 className="[font-family:'Inter',Helvetica] font-medium text-text text-lg sm:text-[22px] leading-[39px] mb-4">
                            THE BEST BARRIER FOR YOUR COFFEE
                        </h3>
                        <Card className="rounded-[20px] border border-[#101014]/30 bg-[#f7f7f8]">
                            <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-8">
                                <div className="flex-1 space-y-4">
                                    {barrierProtection.map((item, index) => (
                                        <div key={index} className="flex gap-4 items-start bg-white p-4 rounded-[10px]">
                                            <img src={item.icon} alt={item.title} className="w-8 h-8" />
                                            <div>
                                                <h4 className="[font-family:'Inter',Helvetica] font-bold text-text text-sm">{item.title}</h4>
                                                <p className="[font-family:'Inter',Helvetica] font-normal text-text text-xs">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex-1 space-y-6">
                                    <Card className="border border-[#101014]/10 shadow-sm">
                                        <CardContent className="p-4">
                                            <h4 className="[font-family:'Inter',Helvetica] font-bold text-text text-sm mb-2">CERTIFICATIONS</h4>
                                            <div className="flex gap-2">
                                                <Badge variant="outline" className="rounded-full">FSC CERTIFICATE</Badge>
                                                <Badge variant="outline" className="rounded-full">FSC Forest Certificate</Badge>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className="bg-[#DCE4F0] border-0">
                                        <CardContent className="p-4">
                                            <h4 className="[font-family:'Inter',Helvetica] font-bold text-text text-sm mb-2">KEY FEATURES</h4>
                                            <ul className="list-disc pl-5 text-sm space-y-1">
                                                <li>Highly recyclable materials</li>
                                                <li>Made in Europe</li>
                                                <li>Design check before print</li>
                                                <li>Production time from 4 - 6 weeks</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative h-[260px] rounded-[20px] overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                alt="Questions"
                                src="https://c.animaapp.com/mkve5d5vXaRKB0/img/mask-group.png"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 bg-black/20">
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
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 bg-black/20">
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

            <footer className="bg-white border-t border-[#101014]/10 mt-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] py-8">
                    <div className="mb-8">
                        <img
                            className="w-[147px] h-14 mb-6"
                            alt="Logo"
                            src="/images/logo.svg"
                        />
                        <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-[22px] max-w-[402px]">
                            Say farewell to ordinary packaging and delays - we&apos;ve got your
                            back. Explore our diverse services and join us on an exciting
                            journey!
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                        {footerSections.map((section, index) => (
                            <div key={index}>
                                <h4 className="[font-family:'Inter',Helvetica] font-semibold text-text text-lg tracking-[0] leading-6 mb-4">
                                    {section.title}
                                </h4>
                                <ul className="space-y-2">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href="#"
                                                className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-[#101014]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="[font-family:'Inter',Helvetica] font-normal text-text text-sm">
                            COPYRIGHT © 2026 OYE PACKAGING
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="[font-family:'Inter',Helvetica] font-normal text-text text-xs uppercase hover:underline">PRIVACY POLICY</a>
                            <a href="#" className="[font-family:'Inter',Helvetica] font-normal text-text text-xs uppercase hover:underline">SITEMAP</a>
                            <a href="#" className="[font-family:'Inter',Helvetica] font-normal text-text text-xs uppercase hover:underline">TERMS & CONDITIONS</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
