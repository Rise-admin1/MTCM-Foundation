import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { DidYouKnowSlider } from "@/components/did-you-know-slider"
import { Testimonials } from "@/components/testimonials"
import { ProgramsSnippetSection } from "@/components/programs-snippet-section"
import { MembershipSnippetSection } from "@/components/membership-snippet-section"
import { ResourcesSnippetSection } from "@/components/resources-snippet-section"
import { ContactSnippetSection } from "@/components/contact-snippet-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <DidYouKnowSlider />
      <ProgramsSnippetSection />
      <MembershipSnippetSection />
      {/* <Testimonials /> */}
      <ResourcesSnippetSection />
      <ContactSnippetSection />
      <Footer />
    </main>
  )
}
