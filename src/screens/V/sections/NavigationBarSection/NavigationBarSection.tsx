'use client'

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "../../../../components/ui/button";

const navigationLinks = [
  { label: "PRODUCTS", href: "/products" },
  { label: "SERVICES", href: "/drip-bags" }
];

export const NavigationBarSection = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent py-4 md:py-6 translate-y-[-1rem] animate-fade-in opacity-0 relative z-50">
      <nav className="container mx-auto max-w-[1240px] px-4 sm:px-6 md:px-12 lg:px-[100px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <img
            className="w-[100px] sm:w-[125px] h-auto cursor-pointer"
            alt="ÖYE Logo"
            src="/images/logo.svg"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
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

          <Button className="h-auto px-6 py-4 bg-[#2d3748] rounded-[40px] hover:bg-[#1a202c] transition-colors">
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
          <div className="container mx-auto max-w-[1240px] px-4 sm:px-6 py-6 flex flex-col gap-4">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
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

              <Button className="h-auto px-6 py-3 bg-[#2d3748] rounded-[40px] hover:bg-[#1a202c] transition-colors w-full">
                <span className="text-white text-base tracking-[0.54px] [font-family:'Inter',Helvetica] font-medium leading-[normal]">
                  SIGN IN
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
