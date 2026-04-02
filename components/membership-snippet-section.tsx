"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MembershipSnippetSection() {
  return (
    <section id="membership" className="py-16 sm:py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[#282828] uppercase tracking-wider">
          MEMBERSHIP
        </h2>
        <p className="text-foreground text-base sm:text-lg mt-6 leading-relaxed max-w-3xl">
          Membership forms the foundation of governance and accountability within the organization.
        </p>

        <div className="mt-10 max-w-3xl">
          <h3 className="text-lg sm:text-xl font-bold text-[#282828] mb-4">Application Process</h3>
          <ul className="list-disc pl-5 space-y-2 text-foreground text-base sm:text-lg leading-relaxed">
            <li>Applications must be proposed and seconded by existing members</li>
            <li>Applications are reviewed and approved by the Board</li>
            <li>Successful applicants are entered into the official register</li>
          </ul>
        </div>

        <Button
          asChild
          className="mt-8 bg-[#fe0000] hover:bg-[#cc0000] text-white font-semibold"
        >
          <Link href="/membership">Apply for Membership</Link>
        </Button>
      </div>
    </section>
  )
}
