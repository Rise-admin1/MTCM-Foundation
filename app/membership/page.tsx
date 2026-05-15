import { RecentUpdates } from "@/components/recent-updates"
import { MembershipCta } from "@/components/membership-cta"
import { NewsletterSection } from "@/components/newsletter-section"

export default function MembershipPage() {
  return (
    <main className="min-h-screen">
      <RecentUpdates />
      <MembershipCta />
      <NewsletterSection />
    </main>
  )
}

