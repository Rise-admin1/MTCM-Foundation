"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) return
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-[#282828] uppercase tracking-wider">
            Contact
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contactName" className="sr-only">
                  Name
                </label>
                <input
                  id="contactName"
                  type="text"
                  placeholder="Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe0000] focus:border-transparent text-foreground"
                />
              </div>

              <div>
                <label htmlFor="contactEmail" className="sr-only">
                  Email
                </label>
                <input
                  id="contactEmail"
                  type="email"
                  placeholder="Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe0000] focus:border-transparent text-foreground"
                />
              </div>

              <div>
                <label htmlFor="contactMessage" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contactMessage"
                  placeholder="Message *"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
      </div>
    </section>
  )
}

