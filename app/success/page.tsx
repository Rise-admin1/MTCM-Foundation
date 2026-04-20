import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ContactSuccessPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center space-y-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#282828]">Message sent</h1>
            <p className="text-foreground">
              Thank you for contacting MTCM Foundation. We have received your message and will get
              back to you soon.
            </p>
            <Button asChild className="bg-[#fe0000] hover:bg-[#cc0000] text-white font-semibold px-8">
              <Link href="/contact">Back to Contact</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
