"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ResourcesSnippetSection() {
  return (
    <section id="resources" className="py-16 sm:py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[#282828] uppercase tracking-wider">
          RESOURCES
        </h2>
        <p className="text-foreground text-base sm:text-lg mt-6 leading-relaxed max-w-3xl">
          Access the official constitution of the MTCM Foundation, outlining governance, objectives, and operational structure.
        </p>
        <Button
          asChild
          variant="outline"
          className="mt-6 border-[#fe0000] text-[#fe0000] hover:bg-[#fe0000] hover:text-white font-semibold"
        >
          <Link href="/resources">Learn More +</Link>
        </Button>
      </div>
    </section>
  )
}
