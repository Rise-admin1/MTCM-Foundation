import type { Metadata } from "next"
import { SafeguardingPolicySection } from "@/components/safeguarding-policy-section"

export const metadata: Metadata = {
  title: "Safeguarding & Child Protection Policy - MTCM Foundation",
}

export default function SafeguardingPolicyPage() {
  return (
    <main className="min-h-screen">
      <SafeguardingPolicySection />
    </main>
  )
}
