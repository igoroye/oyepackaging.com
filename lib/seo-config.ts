const SITE_URL = 'https://oyepackaging.com'
const SITE_NAME = 'ÖYE Packaging'
const DEFAULT_OG_IMAGE = '/og-image.jpg'

export interface PageSEO {
  title: string
  absoluteTitle?: boolean
  description: string
  keywords?: string[]
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterCard?: 'summary' | 'summary_large_image'
  noIndex?: boolean
}

export const seoConfig: Record<string, PageSEO> = {
  home: {
    title: 'ÖYE Packaging - Premium Coffee Packaging Solutions in Europe',
    absoluteTitle: true,
    description:
      'We support the growth of coffee roasting companies by providing fully customized packaging solutions and unique filling services. Discover our range of coffee bags, standup pouches, and sustainable packaging options manufactured in Europe.',
    keywords: [
      'coffee packaging',
      'coffee bags Europe',
      'standup pouches',
      'flat bottom bags',
      'coffee roasting packaging',
      'custom coffee bags',
      'packaging manufacturer Europe',
      'sustainable coffee packaging',
      'drip bags',
      'brew bags',
    ],
    canonical: SITE_URL,
  },

  'about-us': {
    title: 'About Us',
    description:
      'Learn about ÖYE Packaging - European leaders in coffee packaging solutions. We know everything about packaging and support coffee roasting companies with customized solutions.',
    keywords: [
      'about us',
      'coffee packaging company',
      'European packaging manufacturer',
      'sustainable packaging',
      'coffee roasting solutions',
    ],
    canonical: `${SITE_URL}/about-us`,
  },

  'flat-bottom-bags': {
    title: 'Flat Bottom Bags - Coffee Packaging',
    description:
      'Explore our premium flat bottom bags for coffee roasters. EU-made materials, extensive customization options, and best coffee protection. MOQ 1500 pcs.',
    keywords: [
      'flat bottom bags',
      'coffee packaging',
      'coffee bags',
      'recyclable packaging',
      'European packaging',
      'coffee roasters',
      'custom coffee bags',
    ],
    canonical: `${SITE_URL}/flat-bottom-bags`,
  },

  'standup-bags': {
    title: 'Standup Bags - Coffee Packaging',
    description:
      'Our standup bags combine premium quality with a sleek, functional design. Wide shape for easy filling with large front panel for brand visibility.',
    keywords: [
      'standup bags',
      'stand up pouches',
      'coffee packaging',
      'flexible packaging',
      'custom pouches',
    ],
    canonical: `${SITE_URL}/standup-bags`,
  },

  'carton-boxes': {
    title: 'Carton Boxes - Coffee Packaging',
    description:
      'Durable and stylish carton boxes for coffee packaging. FSC certified, 100% recyclable, compostable. MOQ 500 pcs. Made in Europe.',
    keywords: [
      'carton boxes',
      'coffee packaging boxes',
      'recyclable boxes',
      'FSC certified',
      'compostable packaging',
      'paperboard boxes',
      'European packaging',
    ],
    canonical: `${SITE_URL}/carton-boxes`,
  },

  products: {
    title: 'Products - Flat Bottom Bags',
    description:
      'Explore our premium flat bottom bags for coffee roasters. EU-made materials, extensive customization options, and best coffee protection. MOQ 1500 pcs.',
    keywords: [
      'flat bottom bags',
      'coffee packaging',
      'coffee bags',
      'recyclable packaging',
      'European packaging',
      'coffee roasters',
      'custom coffee bags',
    ],
    canonical: `${SITE_URL}/products`,
  },

  'drip-bags': {
    title: 'Drip Bags - Coffee Packaging Services',
    description:
      'Convenient single-serve drip bag solutions for specialty coffee. Perfect for hotels, offices, events, and online stores.',
    keywords: [
      'drip bags',
      'single serve coffee',
      'drip coffee bags',
      'specialty coffee packaging',
      'coffee filling service',
    ],
    canonical: `${SITE_URL}/drip-bags`,
  },

  'brew-bags': {
    title: 'Brew Bags - Coffee Packaging Services',
    description:
      'Brew bags make it easy for your customers to enjoy your coffee - just steep like tea. Send us your coffee and get a ready-to-sell product.',
    keywords: [
      'brew bags',
      'tea-style coffee bags',
      'coffee brewing bags',
      'coffee filling service',
      'ready to sell coffee',
    ],
    canonical: `${SITE_URL}/brew-bags`,
  },

  'cold-brew-bags': {
    title: 'Cold Brew Bags - Coffee Packaging',
    description:
      'Cold brew bags offer a refreshing way to serve your coffee cold. Simply send us your beans and receive a product ready for the fridge.',
    keywords: [
      'cold brew bags',
      'cold brew coffee',
      'cold coffee packaging',
      'coffee filling service',
    ],
    canonical: `${SITE_URL}/cold-brew-bags`,
  },

  sustainability: {
    title: 'Sustainability',
    description:
      'Being a sustainable company is a challenge. We balance responsibilities to employees, customers, and partners while striving to innovate and improve.',
    keywords: [
      'sustainable packaging',
      'eco-friendly packaging',
      'recyclable coffee bags',
      'green packaging solutions',
      'carbon neutral',
    ],
    canonical: `${SITE_URL}/sustainability`,
  },

  'contact-us': {
    title: 'Contact Us',
    description:
      'Have questions about our packaging solutions? We are here to help! Get in touch with ÖYE Packaging for custom coffee packaging solutions.',
    keywords: [
      'contact us',
      'coffee packaging inquiry',
      'packaging quote',
      'ÖYE Packaging contact',
    ],
    canonical: `${SITE_URL}/contact-us`,
  },

  configurator: {
    title: 'Configure Packaging',
    description:
      'Choose your packaging type and start customizing. Flat bottom bags, standup bags, drip bags, and carton boxes available with full customization.',
    keywords: [
      'packaging configurator',
      'custom packaging',
      'configure coffee bags',
      'packaging design tool',
    ],
    canonical: `${SITE_URL}/configurator`,
  },

  'privacy-policy': {
    title: 'Privacy Policy',
    description:
      'Privacy policy for ÖYE Packaging. Learn what personal information is collected, processed, and stored when you visit our website or contact us.',
    canonical: `${SITE_URL}/privacy-policy`,
    noIndex: false,
  },

  'terms-conditions': {
    title: 'Terms & Conditions',
    description:
      'General Terms and Conditions of Sale governing all deliveries and services provided by ÖYE Packaging OÜ.',
    canonical: `${SITE_URL}/terms-conditions`,
  },

  cookies: {
    title: 'Cookie Policy',
    description:
      'Cookie policy for ÖYE Packaging. Learn how we use cookies on our website, including essential, preference, analytics, and marketing cookies.',
    canonical: `${SITE_URL}/cookies`,
  },

  'sign-in': {
    title: 'Sign In',
    description: 'Sign in to your ÖYE Packaging account to access the member area.',
    canonical: `${SITE_URL}/sign-in`,
    noIndex: true,
  },

  'sign-up': {
    title: 'Sign Up',
    description: 'Create your ÖYE Packaging account.',
    canonical: `${SITE_URL}/sign-up`,
    noIndex: true,
  },

  'member-area': {
    title: 'Member Area',
    description: 'Your personal ÖYE Packaging dashboard.',
    canonical: `${SITE_URL}/member-area`,
    noIndex: true,
  },
}

export { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE }
