import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'gojitech | Creative Technology Studio',
  description: 'We empower brands to inspire people through innovative digital experiences.',
  metadataBase: new URL('https://gojitech.com'),
  openGraph: {
    title: 'gojitech | Creative Technology Studio',
    description: 'We empower brands to inspire people through innovative digital experiences.',
    url: 'https://gojitech.com',
    siteName: 'gojitech',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'gojitech | Creative Technology Studio',
    description: 'We empower brands to inspire people through innovative digital experiences.',
    images: ['/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <link rel="icon" href="/images/gojitech-icon.ico" />
        <link rel="icon" type="image/png" href="/images/gojitech-icon.png" sizes="32x32" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans bg-dark-100 text-dark-900 overflow-x-hidden">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
} 