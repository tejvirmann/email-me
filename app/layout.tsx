import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tejvir S. Mann',
  description: "Send Tejvir a message. Not on Instagram — this is the best way to reach out.",
  keywords: ['Tejvir Mann', 'Tejvir S. Mann', 'contact'],
  authors: [{ name: 'Tejvir S. Mann' }],
  openGraph: {
    title: 'Tejvir S. Mann',
    description: "Send Tejvir a message. Not on Instagram — this is the best way to reach out.",
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Tejvir S. Mann',
    description: "Send Tejvir a message. Not on Instagram — this is the best way to reach out.",
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
