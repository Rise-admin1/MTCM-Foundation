import type { Metadata, Viewport } from 'next'
import { Mulish } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const mulish = Mulish({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  icons: {
    icon: [{ url: '/mtcm_icon.png', type: 'image/png' }],
    apple: [{ url: '/mtcm_icon.png', type: 'image/png' }],
  },
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
        <main className="min-h-screen">
          <div className="mb-30 sm:mb-0">
        <Header />
        </div>
        {children}
        <Footer />
        <Analytics />
        </main>
      </body>
    </html>
  )
}
