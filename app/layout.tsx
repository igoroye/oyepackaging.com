import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://oyepackaging.com'),
  title: {
    default: 'ÖYE Packaging - Premium Coffee Packaging Solutions in Europe',
    template: '%s | ÖYE Packaging'
  },
  description: 'We support the growth of coffee roasting companies by providing fully customized packaging solutions and unique filling services across Europe.',
  keywords: [
    'coffee packaging',
    'coffee bags',
    'standup pouches',
    'flat bottom bags',
    'coffee roasting',
    'packaging solutions',
    'Europe',
    'custom packaging',
    'coffee bag manufacturer',
    'sustainable packaging'
  ],
  authors: [{ name: 'ÖYE Packaging' }],
  creator: 'ÖYE Packaging',
  publisher: 'ÖYE Packaging',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oyepackaging.com',
    siteName: 'ÖYE Packaging',
    title: 'ÖYE Packaging - Premium Coffee Packaging Solutions',
    description: 'Fully customized coffee packaging solutions and unique filling services for roasting companies across Europe.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ÖYE Packaging'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ÖYE Packaging - Premium Coffee Packaging Solutions',
    description: 'Fully customized coffee packaging solutions and unique filling services for roasting companies across Europe.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
