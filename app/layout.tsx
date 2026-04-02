import type { Metadata, Viewport } from 'next'
import { Mulish } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const mulish = Mulish({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: 'MICHAEL TRUFOSA CLARICE MUGENYA FOUNDATION (MTCM)',
  description:
    'The Michael Trufosa Clarice Mugenya Foundation is committed to improving lives through charitable initiatives focused on education, healthcare, poverty relief, and community development.',
  generator: 'Next.js',
  openGraph: {
    title: 'MICHAEL TRUFOSA CLARICE MUGENYA FOUNDATION (MTCM)',
    description:
      'The Michael Trufosa Clarice Mugenya Foundation is committed to improving lives through charitable initiatives focused on education, healthcare, poverty relief, and community development.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MICHAEL TRUFOSA CLARICE MUGENYA FOUNDATION (MTCM)',
    description:
      'The Michael Trufosa Clarice Mugenya Foundation is committed to improving lives through charitable initiatives focused on education, healthcare, poverty relief, and community development.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
