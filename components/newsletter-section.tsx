"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"

export function NewsletterSection() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [membershipType, setMembershipType] = useState<"Ordinary" | "Corporate" | "Honorary">("Ordinary")

  const [proposerName, setProposerName] = useState("")
  const [proposerContact, setProposerContact] = useState("")

  const [seconderName, setSeconderName] = useState("")
  const [seconderContact, setSeconderContact] = useState("")

  const [declaration, setDeclaration] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (
      fullName &&
      email &&
      phone &&
      address &&
      membershipType &&
      proposerName &&
      proposerContact &&
      seconderName &&
      seconderContact &&
      declaration
    ) {
      setSubmitted(true)
    }
  }

  return (
    <section id="membership" className="py-16 sm:py-24 bg-[#f0f0f0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-bold text-[#fe0000] uppercase tracking-wider mb-4">
          Membership Application
        </h2>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <p className="text-green-800 font-medium">
              Your application has been received and will be reviewed by the Board.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            {/* Personal Details */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="sr-only">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Full Name *"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe0000] focus:border-transparent text-foreground"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe0000] focus:border-transparent text-foreground"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe0000] focus:border-transparent text-foreground"
                />
              </div>
              <div>
                <label htmlFor="address" className="sr-only">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Address *"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe0000] focus:border-transparent text-foreground"
                />
              </div>
            </div>

            {/* Membership Type */}
            <div>
              <label htmlFor="membershipType" className="sr-only">
                Membership Type
              </label>
              <select
                id="membershipType"
                value={membershipType}
                onChange={(e) =>
                  setMembershipType(e.target.value as "Ordinary" | "Corporate" | "Honorary")
                }
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe0000] focus:border-transparent text-foreground"
              >
                <option value="Ordinary">Ordinary</option>
                <option value="Corporate">Corporate</option>
                <option value="Honorary">Honorary</option>
              </select>
            </div>

            {/* Proposer Details */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="proposerName" className="sr-only">
                  Proposer Name
                </label>
                <input
                  type="text"
                  id="proposerName"
                  placeholder="Proposer Name *"
                  value={proposerName}
                  onChange={(e) => setProposerName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe0000] focus:border-transparent text-foreground"
                />
              </div>
              <div>
                <label htmlFor="proposerContact" className="sr-only">
                  Email / Phone
                </label>
                <input
                  type="text"
                  id="proposerContact"
                  placeholder="Proposer Email / Phone *"
                  value={proposerContact}
                  onChange={(e) => setProposerContact(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe0000] focus:border-transparent text-foreground"
                />
              </div>
            </div>

            {/* Seconder Details */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="seconderName" className="sr-only">
                  Seconder Name
                </label>
                <input
                  type="text"
                  id="seconderName"
                  placeholder="Seconder Name *"
                  value={seconderName}
                  onChange={(e) => setSeconderName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe0000] focus:border-transparent text-foreground"
                />
              </div>
              <div>
                <label htmlFor="seconderContact" className="sr-only">
                  Email / Phone
                </label>
                <input
                  type="text"
                  id="seconderContact"
                  placeholder="Seconder Email / Phone *"
                  value={seconderContact}
                  onChange={(e) => setSeconderContact(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fe0000] focus:border-transparent text-foreground"
                />
              </div>
            </div>

            {/* Declaration */}
            <div className="flex items-start gap-3 text-left">
              <input
                type="checkbox"
                id="declaration"
                checked={declaration}
                onChange={(e) => setDeclaration(e.target.checked)}
                required
                className="mt-1 w-4 h-4 text-[#fe0000] border-gray-300 rounded focus:ring-[#fe0000]"
              />
              <label htmlFor="declaration" className="text-sm text-foreground">
                I confirm that the information provided is accurate.
              </label>
            </div>

            <div className="flex justify-center pt-2">
              <Button
                type="submit"
                className="bg-[#fe0000] hover:bg-[#cc0000] text-white font-semibold px-8"
              >
                Submit Application
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
