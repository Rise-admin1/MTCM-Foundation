import { Header } from "@/components/header"
import { RecentUpdates } from "@/components/recent-updates"
import { MembershipCta } from "@/components/membership-cta"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function MembershipPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <RecentUpdates />
      <MembershipCta />
      <NewsletterSection />
      <Footer />
    </main>
  )
}

