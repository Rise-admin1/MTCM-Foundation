"use client"

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

export function ResourcesSection() {
  return (
    <section id="resources" className="min-h-screen py-16 sm:py-24 bg-[#282828] pt-10 sm:pt-0 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wider">
            RESOURCES
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

              <form
                className="space-y-4"
                action="https://formsubmit.co/hello@mtcmfoundation.org"
                method="POST"
              >
                <input type="hidden" name="_subject" value="New resource request from MTCM website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://www.mtcmfoundation.org/success" />
                <div className="space-y-2">
                  <label htmlFor="resource-name" className="text-sm font-medium text-[#282828]">
                    Name
                  </label>
                  <Input id="resource-name" name="name" placeholder="Enter your full name" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="resource-email" className="text-sm font-medium text-[#282828]">
                    Email
                  </label>
                  <Input
                    id="resource-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="resource-document-type"
                    className="text-sm font-medium text-[#282828]"
                  >
                    Document type
                  </label>
                  <Select name="documentType">
                    <SelectTrigger id="resource-document-type" className="w-full">
                      <SelectValue placeholder="Select a document type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="constitution">Constitution</SelectItem>
                      <SelectItem value="financial-records">Financial records</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="resource-message" className="text-sm font-medium text-[#282828]">
                    Message
                  </label>
                  <Textarea
                    id="resource-message"
                    name="message"
                    placeholder="Write your message"
                    className="min-h-24"
                  />
                </div>

                <Button type="submit" className="w-full bg-[#fe0000] hover:bg-[#cc0000] text-white">
                  Submit request
                </Button>
              </form>
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

              <form
                className="space-y-4"
                action="https://formsubmit.co/hello@mtcmfoundation.org"
                method="POST"
              >
                <input type="hidden" name="_subject" value="New resource request from MTCM website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://www.mtcmfoundation.org/success" />
                <div className="space-y-2">
                  <label
                    htmlFor="resource-name-accountability"
                    className="text-sm font-medium text-[#282828]"
                  >
                    Name
                  </label>
                  <Input
                    id="resource-name-accountability"
                    name="name"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="resource-email-accountability"
                    className="text-sm font-medium text-[#282828]"
                  >
                    Email
                  </label>
                  <Input
                    id="resource-email-accountability"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="resource-document-type-accountability"
                    className="text-sm font-medium text-[#282828]"
                  >
                    Document type
                  </label>
                  <Select name="documentType" defaultValue="financial-records">
                    <SelectTrigger id="resource-document-type-accountability" className="w-full">
                      <SelectValue placeholder="Select a document type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="constitution">Constitution</SelectItem>
                      <SelectItem value="financial-records">Financial records</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="resource-message-accountability"
                    className="text-sm font-medium text-[#282828]"
                  >
                    Message
                  </label>
                  <Textarea
                    id="resource-message-accountability"
                    name="message"
                    placeholder="Write your message"
                    className="min-h-24"
                  />
                </div>

                <Button type="submit" className="w-full bg-[#fe0000] hover:bg-[#cc0000] text-white">
                  Submit request
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}

