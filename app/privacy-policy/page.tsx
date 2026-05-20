import type { Metadata } from "next"
import { PrivacyPolicySection } from "@/components/privacy-policy-section"

export const metadata: Metadata = {
  title: "Privacy Policy - MTCM Foundation",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <PrivacyPolicySection />
    </main>
  )
}
