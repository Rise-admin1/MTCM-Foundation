"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ContactSnippetSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[#282828] uppercase tracking-wider">
          CONTACT
        </h2>
        <p className="text-foreground text-base sm:text-lg mt-6 leading-relaxed max-w-3xl">
          Registered Office: Nairobi, Kenya. Principal Office: Busia County, Kenya.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 items-start mt-10">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-lg font-bold text-[#282828] mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm text-foreground">
              <div>
                <span className="font-semibold">Registered Office:</span> Nairobi, Kenya
              </div>
              <div>
                <span className="font-semibold">Principal Office:</span> Busia County, Kenya
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-lg font-bold text-[#282828] mb-4">Contact Form</h3>
            <form
              action="https://formsubmit.co/hello@mtcmfoundation.org"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_subject" value="New message from MTCM contact form" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://www.mtcmfoundation.org/success" />
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
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe0000] focus:border-transparent text-foreground"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe0000] focus:border-transparent text-foreground"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe0000] focus:border-transparent text-foreground"
                />
              </div>

              <Button
                type="submit"
                className="bg-[#fe0000] hover:bg-[#cc0000] text-white font-semibold px-8"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>

        <p className="text-sm text-foreground mt-8">
          <Link href="/contact" className="text-[#fe0000] font-semibold hover:underline">
            Open full contact page
          </Link>
        </p>
      </div>
    </section>
  )
}
