import type { Metadata } from "next"
import { AboutFullSection } from "@/components/about-full-section"

export const metadata: Metadata = {
  title: "About | MTCM Foundation",
  description:
    "The Michael Trufosa Clarice Mugenya Foundation (MTCM Foundation) is a non-governmental organization established under the laws of Kenya.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutFullSection />
    </main>
  )
}

