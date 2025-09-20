import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kusum Kharayat Portfolio',
  description: 'Portfolio of Kusum Kharayat - Full Stack Developer specializing in React, Node.js, and modern web technologies. Passionate about creating innovative digital solutions.',
  keywords: 'Kusum Kharayat, Full Stack Developer, React Developer, Node.js, Web Development, UI/UX Design, Portfolio',
  authors: [{ name: 'Kusum Kharayat' }],
  creator: 'Kusum Kharayat',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kusum-digital-portfolio.vercel.app',
    siteName: 'Kusum Kharayat Portfolio',
    title: 'Kusum Kharayat - Full Stack Developer & UI/UX Designer',
    description: 'Portfolio showcasing innovative web development projects and technical expertise.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kusum Kharayat - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kusum Kharayat - Full Stack Developer & UI/UX Designer',
    description: 'Portfolio showcasing innovative web development projects and technical expertise.',
    creator: '@kusumkharayat',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 text-dark-800 dark:text-dark-100`}>
        {children}
      </body>
    </html>
  )
}