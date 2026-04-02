import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { DidYouKnowSlider } from "@/components/did-you-know-slider"
import { WhatWeAreUpTo } from "@/components/what-we-are-up-to"
import { RecentUpdates } from "@/components/recent-updates"
import { Testimonials } from "@/components/testimonials"
import { NewsletterSection } from "@/components/newsletter-section"
import { ProgramsSection } from "@/components/programs-section"
import { MembershipCta } from "@/components/membership-cta"
import { ResourcesSection } from "@/components/resources-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <DidYouKnowSlider />
      <WhatWeAreUpTo />
      <ProgramsSection />
      <RecentUpdates />
      <MembershipCta />
      <NewsletterSection />
      {/* <Testimonials /> */}
      <ResourcesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
