"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"

const MEMBERSHIP_API_URL = "https://survey.dubaianalytica.com/api/mtcm/membership-enquiry"

export function ApplicationSection() {
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    if (
      !fullName ||
      !email ||
      !phone ||
      !address ||
      !membershipType ||
      !proposerName ||
      !proposerContact ||
      !seconderName ||
      !seconderContact ||
      !declaration
    ) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(MEMBERSHIP_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          address,
          membershipType,
          proposerName,
          proposerContact,
          seconderName,
          seconderContact,
          declaration,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit application")
      }

      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="application" className="min-h-screen py-16 sm:py-24 bg-[#f0f0f0] mt-10 sm:mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12 mt-30">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#282828] leading-tight">
            Membership Application
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <p className="text-green-800 font-medium">
              Your application has been received and will be reviewed by the Board.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
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

            {error && <p className="text-sm text-[#fe0000] text-center">{error}</p>}

            <div className="flex justify-center pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#fe0000] hover:bg-[#cc0000] text-white font-semibold px-8 disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        )}
        </div>
      </div>
    </section>
  )
}
