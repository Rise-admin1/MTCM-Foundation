import type { Metadata } from "next"
import { TermsConditionsSection } from "@/components/terms-conditions-section"

export const metadata: Metadata = {
  title: "Terms & Conditions - MTCM Foundation",
}

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen">
      <TermsConditionsSection />
    </main>
  )
}
