import type { Metadata } from "next"
import { AboutFullSection } from "@/components/about-full-section"

const aboutTitle = "About | MTCM Foundation"
const aboutDescription =
  "The Michael Trufosa Clarice Mugenya Foundation (MTCM Foundation) is a non-governmental organization established under the laws of Kenya."

export const metadata: Metadata = {
  title: aboutTitle,
  description: aboutDescription,
  openGraph: {
    title: aboutTitle,
    description: aboutDescription,
    type: "website",
    url: "/about",
    images: [
      {
        url: "/mtcm_icon.png",
        width: 500,
        height: 500,
        type: "image/png",
        alt: "MTCM Foundation",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: aboutTitle,
    description: aboutDescription,
    images: ["/mtcm_icon.png"],
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutFullSection />
    </main>
  )
}

