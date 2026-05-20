"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

const CONTACT_API_URL = "https://survey.dubaianalytica.com/api/mtcm/contact-us"

const inputClassName =
  "w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe0000] focus:border-transparent text-foreground"

export function ContactSnippetSection() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const name = formData.get("name")?.toString().trim() ?? ""
    const email = formData.get("email")?.toString().trim() ?? ""
    const body = formData.get("body")?.toString().trim() ?? ""

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, body }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      router.push("/success")
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:mt-10 md:mt-30">
        <h2 className="text-xl sm:text-6xl font-bold text-[#282828] uppercase tracking-wider">
          CONTACT
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-start mt-10">
          <div className="space-y-6">
            <div>
              <p className="text-foreground text-base sm:text-3xl leading-relaxed max-w-3xl">
                Busia Office:
              </p>
              <p className="text-foreground text-base sm:text-xl mt-2 leading-relaxed max-w-3xl">
                Mugenya Farm, Nakhasiko, Busia, Kenya.
              </p>
            </div>

            <div>
              <p className="text-foreground text-base sm:text-3xl leading-relaxed max-w-3xl">
                Nairobi Office:
              </p>
              <p className="text-foreground text-base sm:text-xl mt-2 leading-relaxed max-w-3xl">
                317 Runda Grove, Runda, Nairobi, Kenya.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-lg font-bold text-[#282828] mb-4">Contact Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="homeContactName" className="sr-only">
                  Name
                </label>
                <input
                  id="homeContactName"
                  type="text"
                  name="name"
                  placeholder="Name *"
                  required
                  className={inputClassName}
                />
              </div>

              <div>
                <label htmlFor="homeContactEmail" className="sr-only">
                  Email
                </label>
                <input
                  id="homeContactEmail"
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  className={inputClassName}
                />
              </div>

              <div>
                <label htmlFor="homeContactMessage" className="sr-only">
                  Message
                </label>
                <textarea
                  id="homeContactMessage"
                  name="body"
                  placeholder="Message *"
                  required
                  rows={5}
                  className={inputClassName}
                />
              </div>

              {error && <p className="text-sm text-[#fe0000]">{error}</p>}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#fe0000] hover:bg-[#cc0000] text-white font-semibold px-8 disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
