'use client'

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  packaging: [
    { label: "Flat Bottom Bags", href: "/flat-bottom-bags" },
    { label: "Carton Boxes", href: "/carton-boxes" },
    { label: "Side Gusset Bags", href: "#" },
    { label: "Standup Bags", href: "/standup-bags" },
  ],
  services: [
    { label: "Drip Bags", href: "/drip-bags", opacity: false },
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
}

const socialIcons = [
  {
    src: "https://c.animaapp.com/mkvenfnf8hUqCs/img/telegram--13--1.svg",
    alt: "Telegram",
  },
  {
    src: "https://c.animaapp.com/mkvenfnf8hUqCs/img/facebook-logo-1.svg",
    alt: "Facebook logo",
    active: true,
  },
  {
    src: "https://c.animaapp.com/mkvenfnf8hUqCs/img/instagram--5--1.svg",
    alt: "Instagram",
  },
  {
    src: "https://c.animaapp.com/mkvenfnf8hUqCs/img/linkedin-1.svg",
    alt: "Linkedin",
  },
  {
    src: "https://c.animaapp.com/mkvenfnf8hUqCs/img/whatsapp-1.svg",
    alt: "Whatsapp",
  },
]

const navigationLinks = [
  { label: "PRODUCTS", href: "/products" },
  { label: "SERVICES", href: "/services" }
]

export function PrivacyPolicyContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col">
      <header className="w-full bg-transparent py-4 md:py-6 relative z-50">
        <nav className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[100px] flex items-center justify-between">
          <Link href="/">
            <img
              className="w-[100px] sm:w-[125px] h-auto cursor-pointer"
              alt="ÖYE Logo"
              src="https://c.animaapp.com/mkvenfnf8hUqCs/img/group-239.png"
            />
          </Link>

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
            <section className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-[22px] text-center tracking-[0] leading-8 mb-8">
              <p>
                <span className="text-[#101014]">
                  This Privacy Policy explains what personal information is collected,
                  processed, and stored by ÖYE Packaging OÜ when you visit our website{" "}
                </span>
                <a
                  href="https://oyepackaging.com"
                  className="text-[#264eab] hover:underline"
                >
                  https://oyepackaging.com
                </a>
                <span className="text-[#101014]">
                  {" "}
                  or contact us regarding our services.
                </span>
              </p>
            </section>

            <section className="flex flex-col w-full max-w-[1030px] mx-auto items-start gap-[30px] px-4">
              <Separator className="w-full" />

              <div className="w-full">
                <div className="flex flex-col w-full items-start gap-5">
                  <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
                    DEFINITIONS
                  </h2>

                  <div className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    <span className="font-medium">Data Controller: </span>
                    <span className="text-[#101014]">a natural or legal person, public authority, agency, or other body that, alone or jointly with others, determines the purposes and means of the processing of personal data.</span>
                  </div>

                  <div className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    <span className="font-medium">GDPR: </span>
                    <span className="text-[#264eab]">Regulation (EU) 2016/679 of the European Parliament and of the Council</span>
                    <span className="text-[#101014]"> on the protection of natural persons with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46/EC</span>
                  </div>

                  <div className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    <span className="font-medium">Personal Data: </span>
                    <span className="text-[#101014]">any information relating to an identified or identifiable natural person (&apos;data subject&apos;); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person</span>
                  </div>

                  <div className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    <span className="font-medium">Process or Processing: </span>
                    <span className="text-[#101014]">any operation or set of operations that is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.</span>
                  </div>

                  <div className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    <span className="font-medium">Website: </span>
                    <span className="text-[#101014]">means website published by </span>
                    <span className="text-[#264eab]">https://oyepackaging.com</span>
                    <span className="text-[#101014]"> or any related domain names.</span>
                  </div>

                  <div className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    <span className="font-medium">Services: </span>
                    <span className="text-[#101014]">means any services offered or provided by ÖYE Packaging OÜ.</span>
                  </div>

                  <div className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    <span className="font-medium">You or Your: </span>
                    <span className="text-[#101014]">any person using our Website or contacting us in order to make an inquiry with us.</span>
                  </div>
                </div>
              </div>

              <Separator className="w-full" />
            </section>

            <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative px-4">
              <Separator className="w-full" />

              <div className="flex flex-col w-full items-start gap-5">
                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
                  DATA CONTROLLER AND CONTACT
                </h2>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  <span className="font-medium">ÖYE Packaging OÜ (&quot;We,&quot; &quot;Us,&quot; &quot;Our&quot;), </span>
                  <span className="text-[#101014]">has its headquarters in Tallinn, Estonia shall be the Data Controller of your Personal Data.</span>
                </p>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  <span className="font-medium">Register code: </span>
                  <span className="text-[#101014]">16760411</span>
                </p>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  <span className="font-medium">Legal address: </span>
                  <span className="text-[#101014]">Päevalille tn 6-15, 13517, Tallinn, Estonia</span>
                </p>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  <span className="text-[#101014]">You can contact us by sending your inquiry to </span>
                  <span className="text-[#264eab]">hello@oyepackaging.com</span>
                </p>
              </div>

              <Separator className="w-full" />
            </section>

            <section className="flex flex-col w-full items-start gap-[30px] relative px-4">
              <Separator className="w-full" />

              <div className="flex flex-col w-full items-start gap-5 relative">
                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
                  WHAT PERSONAL DATA IS COLLECTED BY US
                </h2>

                <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  In order to provide services, we process the following Personal Data:
                </p>

                <div className="flex flex-col gap-5 w-full">
                  <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    <span className="font-medium">a.</span>
                    <span className="text-[#101014]"> collected from visitors of our Website who browse or use our Website through cookies:</span>
                  </p>

                  <div className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    IP Address: Collected when visiting our website.<br />
                    Browser Type: Type of browser used.<br />
                    Device Information: Details about the device used.<br />
                    Contact Information: Name, email address, and location if a message is sent.
                  </div>
                </div>

                <div className="flex flex-col gap-5 w-full">
                  <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    <span className="font-medium">b.</span>
                    <span className="text-[#101014]"> collected from clients who contact us via forms made available by Us on Website, make an order pursuant to our Terms and Conditions, or contact us on our social media:</span>
                  </p>

                  <div className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    Personal Information: Name, address, date of birth, phone number, and email address.<br />
                    Order Details: Type, order number, design, and quantity.<br />
                    Delivery Information: Address, contact information for delivery, and recipient details<br />
                    Payment Information: payment amount, billing address, transaction information
                  </div>
                </div>

                <div className="flex flex-col gap-0 w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  We process the Personal data when You visit the Our social networks (Facebook, LinkedIn, etc.). Such data is processed exclusively in connection with maintaining the profile, including informing You about Our activities and promoting various types of Services.<br />
                  For the avoidance of doubt, Personal Data is not used for the purposes of automated decision-making, including profiling, referred to in Article 22(1) and (4) GDPR.
                </div>
              </div>

              <Separator className="w-full" />
            </section>

            <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative px-4">
              <Separator className="w-full" />

              <div className="flex flex-col w-full items-start gap-5 relative">
                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
                  PURPOSE OF DATA PROCESSING
                </h2>

                <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  We Process Personal Data to ensure the effective operation,
                  enhancement, and security of Our Services. Specifically:
                </p>

                <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  <span className="font-medium">a.</span>
                  <span className="text-[#101014]"> We collect data to monitor website traffic, ensure security, and improve user experience by optimizing the website&apos;s compatibility, functionality, and display across different locations, browsers, and devices. Additionally, if you contact us, we use your information to respond to inquiries and provide customer support.</span>
                </p>

                <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  <span className="font-medium">b.</span>
                  <span className="text-[#101014]"> We collect data to identify and communicate with you, process and fulfill Your inquiries and orders accurately, ensure timely delivery, and handle payment transactions. This data is also used to comply with financial regulations and provide tailored customer services.</span>
                </p>
              </div>

              <Separator className="w-full" />
            </section>

            <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative px-4">
              <Separator className="w-full" />

              <div className="flex flex-col w-full items-start gap-5 relative">
                <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
                  LEGAL BASIS FOR PROCESSING
                </h2>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  We process your personal data in compliance with the GDPR,
                  specifically under the following legal grounds:
                </p>

                <div className="w-full flex flex-col gap-0">
                  <p className="w-full [font-family:'Inter',Helvetica] font-medium text-text text-lg tracking-[0] leading-[22px]">
                    Legitimate Interests (Article 6(1)(f) GDPR): We rely on Our legitimate interest:
                  </p>
                  <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    in maintaining and improving our Website, ensuring its security, and enhancing the user experience. This includes monitoring website traffic, optimizing the website&apos;s functionality across different locations, browsers, and devices, and responding to user inquiries.
                  </p>
                  <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    in contacting You for the purpose of offering Services. This includes responding to inquiries, providing information about Services, and following up with potential or existing customers.
                  </p>
                </div>

                <div className="w-full flex flex-col gap-0">
                  <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    Consent (Article 6(1)(a) GDPR):
                  </p>
                  <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    For Personal Data collected through forms, non-essential cookies and inquiries, we rely on Your explicit consent. This consent allows us to process Personal Data to communicate with You, respond to inquiries, and offer personalized services
                  </p>
                </div>

                <div className="w-full flex flex-col gap-0">
                  <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    Contract (Article 6(1)(b) GDPR):
                  </p>
                  <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    We Process Personal Data as necessary for the performance of a contract. This includes fulfilling Your product orders, ensuring accurate and timely delivery, and processing payments. These activities are essential for providing the Services requested.
                  </p>
                </div>

                <div className="w-full flex flex-col gap-0">
                  <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    Legal Obligation (Article 6(1)(c) GDPR):
                  </p>
                  <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                    In some cases, we Process Personal Data to comply with legal obligations, such as those related to financial record-keeping and reporting requirements. This ensures Our compliance with applicable laws and regulations.
                  </p>
                </div>
              </div>

              <Separator className="w-full" />
            </section>

            <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative px-4">
              <Separator className="w-full" />

              <div className="flex flex-col w-full items-start gap-5 relative">
                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
                  DATA SHARING AND TRANSFERS
                </h2>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  We share Personal Data with the following categories of recipients:
                </p>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  <span className="font-medium">Service providers. </span>
                  We use service providers for the delivery of our Website and Service. This includes different analytical services, hosting, delivery services;
                </p>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  Professional consultants. We use professional consultants to receive accounting, legal, or similar services.
                </p>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  <span className="font-medium">Authorities</span>
                  . We may share personal data with governmental authorities when we are required to do so pursuant to the applicable law. For example, we may share Personal Data contained in invoices when local tax authorities require us to do so.
                </p>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  We may transfer Personal Data outside the territory of the European Economic Area, provided that any such transfer shall be subject to data processing agreement and appropriate or suitable safeguards.
                </p>
              </div>

              <Separator className="w-full" />
            </section>

            <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative px-4">
              <Separator className="w-full" />

              <div className="flex flex-col w-full items-start gap-5">
                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
                  DATA RETENTION
                </h2>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  We retain Personal Data only for as long as necessary to fulfill the
                  purposes for which it was collected, including fulfilling orders and
                  processing payments, and to comply with legal, accounting, or
                  reporting obligations. We generally store Personal Data for the term
                  of 1 year except for Personal Data necessary for fulfillment of our
                  legal obligations. For accounting and tax purposes, under Estonian
                  law, we are required to retain relevant financial records, including
                  payment and invoicing information, for 7 years from the end of the
                  financial year in which the transaction occurred.
                </p>
              </div>

              <Separator className="w-full" />
            </section>

            <section className="flex flex-col w-full items-start gap-[30px] relative px-4">
              <Separator className="w-full" />

              <div className="flex flex-col w-full items-start gap-5 relative">
                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
                  YOUR RIGHTS
                </h2>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  <span className="font-medium">a. Access.</span>
                  <span className="text-[#101014]"> You have the right to be informed about the Processing of Your Personal Data.</span>
                </p>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  <span className="font-medium">b. Rectification</span>
                  <span className="text-[#101014]">. You have the right to access Your Personal Data and request corrections if any inaccuracies are found. If your Personal Data is incomplete or outdated, You can request that it be updated or amended.</span>
                </p>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  <span className="font-medium">c. Erasure (&quot;Right to be Forgotten&quot;).</span>
                  <span className="text-[#101014]"> You have the right to request the deletion of your personal data. We will erase Your data unless we have a legitimate reason to retain it.</span>
                </p>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  <span className="font-medium">d. Restriction on Processing.</span>
                  <span className="text-[#101014]">&nbsp;You have the right to request the restriction of processing your personal data. Exceptions as outlined in Article 18 of the GDPR may apply.</span>
                </p>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  <span className="font-medium">e. Data Portability.</span>
                  <span className="text-[#101014]"> You have the right to request that your personal data be transferred to another organization or directly to you in a structured, commonly used, and machine-readable format.</span>
                </p>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  <span className="font-medium">f. Right to Withdraw Consent.</span>
                  <span className="text-[#101014]"> You have the right to withdraw your consent to the processing of your personal data at any time. Once consent is withdrawn, we will cease processing your data unless there is a legal basis to continue processing without your consent.</span>
                </p>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  <span className="font-medium">g. Right to Object.</span>
                  <span className="text-[#101014]"> You have the right to object to the processing of your personal data in certain situations, such as for direct marketing purposes or where the processing is based on our legitimate interests. If you object, we will stop processing your data unless there are compelling legitimate grounds for the processing.</span>
                </p>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  <span className="font-medium">h. Right to Lodge a Complaint.</span>
                  <span className="text-[#101014]"> You have the right to lodge a complaint with the appropriate data protection authority if you believe that your personal data has been processed in a manner that violates your rights.</span>
                </p>
              </div>

              <Separator className="w-full" />
            </section>

            <section className="flex flex-col w-full max-w-[1030px] items-start gap-[30px] relative px-4">
              <Separator className="w-full" />

              <div className="flex flex-col w-full items-start gap-5">
                <h2 className="w-full [font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
                  HOW TO EXERCISE YOUR RIGHTS
                </h2>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  To exercise any of your rights regarding your personal data, please
                  contact us through the following channels:
                </p>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  <span className="font-medium text-[#101014]">Email:</span>
                  <span className="text-[#101014]">&nbsp;</span>
                  <span className="text-[#264eab]">hello@oyepackaging.com</span>
                  <span className="text-[#101014]"> </span>
                  <span className="font-medium text-[#101014]">Postal Address:</span>
                  <span className="text-[#101014]"> Päevalille tn 6-15, 13517, Tallinn, Estonia</span>
                </p>

                <p className="w-full [font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  Please include your name, contact details, and a detailed description
                  of Your request. We may need to verify your identity before processing
                  your request to ensure that Personal Data is protected. We will
                  respond to Your request within the time frame required by applicable
                  law, typically within one month, and may extend the response time to
                  60 days. If you withdraw your consent or exercise your right to
                  object, this will not affect the lawfulness of processing based on
                  your consent before its withdrawal.
                </p>
              </div>

              <Separator className="w-full" />
            </section>

            <section className="flex flex-col w-full items-start gap-[30px] relative px-4">
              <Separator className="w-full" />

              <div className="flex flex-col w-full items-start gap-5 relative">
                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
                  COOKIES AND TRACKING TECHNOLOGIES
                </h2>

                <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  Information about our cookies and other tracking technologies that we
                  use is available in Our Cookies Policy.
                </p>
              </div>

              <Separator className="w-full" />
            </section>

            <section className="flex flex-col w-full items-start gap-[30px] relative px-4">
              <Separator className="w-full" />

              <div className="flex flex-col w-full items-start gap-5 relative">
                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
                  CHILDREN&#39;S ONLINE PRIVACY
                </h2>

                <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  We do not Process any Personal Data of children under the age of 18.
                  Should we determine that any piece of Personal Data belongs to a
                  child, we will immediately remove it from our systems.
                </p>
              </div>

              <Separator className="w-full" />
            </section>

            <section className="flex flex-col w-full items-start gap-[30px] relative px-4 mb-8">
              <Separator className="w-full" />

              <div className="flex flex-col w-full items-start gap-5">
                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-text text-3xl tracking-[0] leading-[39px]">
                  CHANGES AND UPDATES TO THE PRIVACY POLICY
                </h2>

                <p className="[font-family:'Inter',Helvetica] font-normal text-text text-lg tracking-[0] leading-[22px]">
                  We may update the Privacy Policy from time to time. Our currently
                  enforced Privacy Policy may be accessed through Website. We will
                  notify you about any such changes should you be part of our newsletter
                  list or order any product from us.
                </p>
              </div>

              <Separator className="w-full" />
            </section>
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
              Say farewell to ordinary packaging and delays - we&apos;ve got your
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
                    <Link
                      href={link.href}
                      className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors"
                    >
                      {link.label}
                    </Link>
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
                    <Link
                      href={link.href}
                      className={`[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors ${link.opacity ? "opacity-50" : ""}`}
                    >
                      {link.label}
                    </Link>
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
                      href={link.href}
                      className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors"
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
                    <Link
                      href={link.href}
                      className="[font-family:'Inter',Helvetica] font-normal text-text text-sm tracking-[0] leading-6 hover:text-main transition-colors"
                    >
                      {link.label}
                    </Link>
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
                  href="/privacy-policy"
                  className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[30px] hover:text-main transition-colors"
                >
                  PRIVACY POLICY
                </Link>
                <Link
                  href="/cookies"
                  className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[30px] hover:text-main transition-colors"
                >
                  COOKIES
                </Link>
                <Link
                  href="/terms-conditions"
                  className="[font-family:'Inter',Helvetica] font-medium text-text text-sm tracking-[0] leading-[30px] hover:text-main transition-colors"
                >
                  TERMS &amp; CONDITIONS
                </Link>
              </div>

              <div className="flex items-center gap-2">
                {socialIcons.map((icon, index) => (
                  <a
                    key={`social-${index}`}
                    href="#"
                    className={`w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors ${
                      icon.active ? "bg-main" : "border border-solid border-[#7ba0d0] hover:bg-gray-50"
                    }`}
                  >
                    <img className="w-5 h-5" alt={icon.alt} src={icon.src} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
