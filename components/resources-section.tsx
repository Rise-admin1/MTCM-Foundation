"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const RESOURCES_API_URL = "https://survey.dubaianalytica.com/api/mtcm/resources"

type DocumentType = "constitution" | "financial-records"

function ResourceRequestForm({
  idPrefix,
  defaultDocumentType,
}: {
  idPrefix: string
  defaultDocumentType: DocumentType
}) {
  const router = useRouter()
  const [documentType, setDocumentType] = useState<DocumentType>(defaultDocumentType)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const name = formData.get("name")?.toString().trim() ?? ""
    const email = formData.get("email")?.toString().trim() ?? ""
    const message = formData.get("message")?.toString().trim() ?? ""

    try {
      const response = await fetch(RESOURCES_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          documentType,
          message,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit request")
      }

      router.push("/success")
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor={`${idPrefix}-name`} className="text-sm font-medium text-[#282828]">
          Name
        </label>
        <Input id={`${idPrefix}-name`} name="name" placeholder="Enter your full name" required />
      </div>

      <div className="space-y-2">
        <label htmlFor={`${idPrefix}-email`} className="text-sm font-medium text-[#282828]">
          Email
        </label>
        <Input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          placeholder="Enter your email address"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor={`${idPrefix}-document-type`} className="text-sm font-medium text-[#282828]">
          Document type
        </label>
        <Select
          value={documentType}
          onValueChange={(value) => setDocumentType(value as DocumentType)}
        >
          <SelectTrigger id={`${idPrefix}-document-type`} className="w-full">
            <SelectValue placeholder="Select a document type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="constitution">Constitution</SelectItem>
            <SelectItem value="financial-records">Financial records</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor={`${idPrefix}-message`} className="text-sm font-medium text-[#282828]">
          Message
        </label>
        <Textarea
          id={`${idPrefix}-message`}
          name="message"
          placeholder="Write your message"
          className="min-h-24"
        />
      </div>

      {error && <p className="text-sm text-[#fe0000]">{error}</p>}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#fe0000] hover:bg-[#cc0000] text-white disabled:opacity-70"
      >
        {isSubmitting ? "Submitting..." : "Submit request"}
      </Button>
    </form>
  )
}

export function ResourcesSection() {
  return (
    <section id="resources" className="min-h-screen py-16 sm:py-24 bg-[#282828] mt-10 sm:mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center gap-4 mb-12 mt-30">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ffffff] leading-tight">
            Resources
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl lg:max-w-5xl mx-auto w-full">
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="bg-white rounded-lg shadow-md p-6 sm:p-8 hover:shadow-xl transition-shadow text-left w-full h-full min-h-[160px] sm:min-h-[180px]"
              >
                <h3 className="text-lg font-bold text-[#282828] mb-3">Constitution</h3>
                <p className="text-sm text-foreground leading-relaxed">
                  Access the official constitution of the MTCM Foundation, outlining governance,
                  objectives, and operational structure.
                </p>
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Request a document</DialogTitle>
                <DialogDescription>
                  Fill out this form and we will share the requested records.
                </DialogDescription>
              </DialogHeader>

              <ResourceRequestForm idPrefix="resource" defaultDocumentType="constitution" />
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="bg-white rounded-lg shadow-md p-6 sm:p-8 hover:shadow-xl transition-shadow text-left w-full h-full min-h-[160px] sm:min-h-[180px]"
              >
                <h3 className="text-lg font-bold text-[#282828] mb-3">Accountability</h3>
                <p className="text-sm text-foreground leading-relaxed">
                  The organization maintains proper financial records and undergoes annual audits in
                  accordance with regulatory requirements.
                </p>
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Request a document</DialogTitle>
                <DialogDescription>
                  Fill out this form and we will share the requested records.
                </DialogDescription>
              </DialogHeader>

              <ResourceRequestForm idPrefix="resource-accountability" defaultDocumentType="financial-records" />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
