"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"

const FORMSPREE_FORM_ID = "mredevzl"

const inputClassName =
  "w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe0000] focus:border-transparent text-foreground"

export function ContactSnippetSection() {
  const router = useRouter()
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID)

  useEffect(() => {
    if (state.succeeded) {
      router.push("/success")
    }
  }, [state.succeeded, router])

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
              <input type="hidden" name="_subject" value="New message from MTCM contact form" />

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
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-sm text-[#fe0000] mt-1"
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
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-sm text-[#fe0000] mt-1"
                />
              </div>

              <div>
                <label htmlFor="homeContactMessage" className="sr-only">
                  Message
                </label>
                <textarea
                  id="homeContactMessage"
                  name="message"
                  placeholder="Message *"
                  required
                  rows={5}
                  className={inputClassName}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-sm text-[#fe0000] mt-1"
                />
              </div>

              <ValidationError errors={state.errors} className="text-sm text-[#fe0000]" />

              <Button
                type="submit"
                disabled={state.submitting}
                className="bg-[#fe0000] hover:bg-[#cc0000] text-white font-semibold px-8 disabled:opacity-70"
              >
                {state.submitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
