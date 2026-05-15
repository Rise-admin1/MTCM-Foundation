import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { DidYouKnowSlider } from "@/components/did-you-know-slider"
import { ProgramsSnippetSection } from "@/components/programs-snippet-section"
import { MembershipSnippetSection } from "@/components/membership-snippet-section"
import { ResourcesSnippetSection } from "@/components/resources-snippet-section"
import { ContactSnippetSection } from "@/components/contact-snippet-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <DidYouKnowSlider />
      <ProgramsSnippetSection />
      <MembershipSnippetSection />
      {/* <Testimonials /> */}
      <ResourcesSnippetSection />
      <ContactSnippetSection />
    </main>
  )
}
