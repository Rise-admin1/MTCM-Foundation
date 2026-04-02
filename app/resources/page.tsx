import { Header } from "@/components/header"
import { ResourcesSection } from "@/components/resources-section"
import { Footer } from "@/components/footer"

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ResourcesSection />
      <Footer />
    </main>
  )
}

