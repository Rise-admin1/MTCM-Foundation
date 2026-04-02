"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MembershipCta() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#282828] leading-tight">
          Become part of a network committed to meaningful impact.
        </h2>
        <p className="text-foreground text-lg mt-4">
          Join us in advancing community development across Kenya.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            asChild
            className="bg-[#fe0000] hover:bg-[#cc0000] text-white font-semibold px-8"
          >
            <Link href="#membership">Apply for Membership</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

